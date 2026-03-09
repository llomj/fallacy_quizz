import React, { useState, useEffect, lazy, Suspense } from 'react';
import { UserStats, PersonaStage, QuestionAttempt } from './types';
import { EvolutionHub } from './components/EvolutionHub';
import { SettingsMenu } from './components/SettingsMenu';
import { IdLogEntry } from './types';
import { LEVELS, XP_PER_QUESTION, QUESTIONS_PER_LEVEL, getQuestionsNeededForLevel, STAR_PROGRESS_THRESHOLD, getStarsFromAccuracy, getStarsFromProgress, getRandomModeScore, getPersonaFromRandomScore, PERSONA_EMOJI } from './constants';
import { useLanguage } from './contexts/LanguageContext';
import { formatTranslation } from './translations';
import { playStarCelebrationSound, playFiveStarCelebrationSound, playAllLevelsCelebrationSound, playCorrectAnswerSound, playWrongAnswerSound, playButtonClickSound } from './utils/sounds';
import { FallingStars } from './components/FallingStars';

const LOCAL_STORAGE_KEY = 'logical_fallacies_learn_stats_v1';
const PREFS_STORAGE_KEY = 'logical_fallacies_learn_prefs_v1';

const INITIAL_STATS: UserStats = {
  currentLevel: 1,
  xp: 0,
  totalAttempts: 0,
  completedQuestionIds: [],
  highestUnlockedLevel: 1,
  levelProgress: {},
  correctPerLevel: {},
  acquiredStars: {},
  history: [],
  idLog: [],
  randomModeStats: { totalAnswered: 0, totalCorrect: 0 },
  randomMode: false
};


const QuizView = lazy(() => import('./components/QuizView').then((module) => ({ default: module.QuizView })));
const HistoryLog = lazy(() => import('./components/HistoryLog').then((module) => ({ default: module.HistoryLog })));
const GlossaryView = lazy(() => import('./components/GlossaryView').then((module) => ({ default: module.GlossaryView })));
const OperationsView = lazy(() => import('./components/OperationsView').then((module) => ({ default: module.OperationsView })));
const MethodsView = lazy(() => import('./components/MethodsView').then((module) => ({ default: module.MethodsView })));
const FlagsView = lazy(() => import('./components/FlagsView').then((module) => ({ default: module.FlagsView })));
const FlowView = lazy(() => import('./components/FlowView').then((module) => ({ default: module.FlowView })));
const ArgumentationView = lazy(() => import('./components/ArgumentationView').then((module) => ({ default: module.ArgumentationView })));
const IdSearchModal = lazy(() => import('./components/IdSearchModal').then((module) => ({ default: module.IdSearchModal })));
const IdLogView = lazy(() => import('./components/IdLogView').then((module) => ({ default: module.IdLogView })));
const LevelSelectorModal = lazy(() => import('./components/LevelSelectorModal').then((module) => ({ default: module.LevelSelectorModal })));

const ViewLoading: React.FC = () => (
  <div className="max-w-md mx-auto p-8 glass rounded-3xl text-center text-slate-400">
    <i className="fas fa-spinner fa-spin"></i>
  </div>
);

const DEFAULT_PREFS = { soundEnabled: true, hapticEnabled: true };

const App: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [stats, setStats] = useState<UserStats>(INITIAL_STATS);
  const [prefs, setPrefs] = useState<{ soundEnabled: boolean; hapticEnabled: boolean }>(() => {
    if (typeof window === 'undefined') return DEFAULT_PREFS;
    try {
      const raw = localStorage.getItem(PREFS_STORAGE_KEY);
      if (raw) {
        const p = JSON.parse(raw) as { soundEnabled?: boolean; hapticEnabled?: boolean };
        return {
          soundEnabled: p.soundEnabled !== false,
          hapticEnabled: p.hapticEnabled !== false
        };
      }
    } catch (_) {}
    return DEFAULT_PREFS;
  });
  const [view, setView] = useState<'hub' | 'quiz' | 'log' | 'glossary'>('hub');
  const [showResult, setShowResult] = useState<{
    score: number;
    total: number;
    starEarned: number | null;
    allLevelsComplete?: boolean;
    randomMode?: boolean;
    prevScore?: number;
    newScore?: number;
    newPersona?: PersonaStage;
  } | null>(null);
  const [randomizeTrigger, setRandomizeTrigger] = useState(0);
  const [showRandomModeModal, setShowRandomModeModal] = useState(false);
  const randomMode = stats.randomMode ?? false;
  const [showOperations, setShowOperations] = useState(false);
  const [showMethods, setShowMethods] = useState(false);
  const [showFlags, setShowFlags] = useState(false);
  const [showFlow, setShowFlow] = useState(false);
  const [showIdSearch, setShowIdSearch] = useState(false);
  const [idSearchInitialId, setIdSearchInitialId] = useState<number | null>(null);
  const [showIdLog, setShowIdLog] = useState(false);
  const [showLevelSelector, setShowLevelSelector] = useState(false);
  const [showArgumentation, setShowArgumentation] = useState(false);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const playClickSound = () => {
    if (prefs.soundEnabled) playButtonClickSound();
  };

  const handleLevelChange = (level: number) => {
    setStats(prev => ({
      ...prev,
      currentLevel: level
    }));
  };

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!parsed.history) parsed.history = [];
        if (!parsed.completedQuestionIds) parsed.completedQuestionIds = [];
        if (!parsed.idLog) parsed.idLog = [];
        if (parsed.totalAttempts === undefined) parsed.totalAttempts = parsed.history.length || 0;
        // Migration: shift question IDs when Level 0 was added (old 1–3000 → 301–3300)
        const stateVersion = parsed.stateVersion ?? 0;
        if (stateVersion < 2 && Array.isArray(parsed.completedQuestionIds)) {
          parsed.completedQuestionIds = parsed.completedQuestionIds.map((id: number) =>
            id >= 1 && id <= 3000 ? id + 300 : id
          );
          parsed.stateVersion = 2;
        }
        // Migration (stateVersion 3): accuracy-based stars + correctPerLevel
        const levelProgress = parsed.levelProgress || {};
        const history = Array.isArray(parsed.history) ? parsed.history : [];
        const levels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        if (parsed.stateVersion < 3) {
          const correctPerLevel: Record<number, number> = parsed.correctPerLevel || {};
          for (const level of levels) {
            const atLevel = history.filter((a: QuestionAttempt) => a.level === level);
            const totalInHistory = atLevel.length;
            const correctInHistory = atLevel.filter((a: QuestionAttempt) => a.isCorrect).length;
            if (totalInHistory > 0) {
              correctPerLevel[level] = correctInHistory;
              const prevProgress = levelProgress[level] || 0;
              levelProgress[level] = Math.max(prevProgress, totalInHistory);
            }
          }
          parsed.correctPerLevel = correctPerLevel;
          parsed.levelProgress = levelProgress;
          const migratedStars: Record<number, number> = {};
          for (const level of levels) {
            const progress = levelProgress[level] || 0;
            const correct = parsed.correctPerLevel[level] || 0;
            if (progress > 0) {
              migratedStars[level] = getStarsFromAccuracy((100 * correct) / progress);
            }
          }
          parsed.acquiredStars = { ...(parsed.acquiredStars || {}), ...migratedStars };
          parsed.stateVersion = 3;
        } else if (!parsed.correctPerLevel) {
          parsed.correctPerLevel = {};
        }
        // Migration: Random mode stats for dual-mode progression
        if (!parsed.randomModeStats) {
          parsed.randomModeStats = { totalAnswered: 0, totalCorrect: 0 };
        }
        if (parsed.randomMode === undefined) parsed.randomMode = false;
        setStats(parsed);
      } catch (e) {
        console.error("Corrupted state, resetting", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stats));
  }, [stats]);

  useEffect(() => {
    if (prefs.soundEnabled && showResult?.starEarned) {
      if (showResult.allLevelsComplete) {
        void playAllLevelsCelebrationSound();
      } else if (showResult.starEarned === 5) {
        void playFiveStarCelebrationSound();
      } else {
        void playStarCelebrationSound();
      }
    }
  }, [showResult?.starEarned, showResult?.allLevelsComplete, prefs.soundEnabled]);

  useEffect(() => {
    localStorage.setItem(PREFS_STORAGE_KEY, JSON.stringify(prefs));
  }, [prefs]);

  const currentLevelInfo = LEVELS.find(l => l.level === stats.currentLevel) || LEVELS[0];
  const currentPersona = (stats.randomMode && stats.randomModeStats)
    ? getPersonaFromRandomScore(getRandomModeScore(stats.randomModeStats))
    : currentLevelInfo.persona;
  const currentProgress = stats.levelProgress[stats.currentLevel] || 0;
  const correctForLevel = stats.correctPerLevel?.[stats.currentLevel] ?? 0;
  // Always derive from accuracy for display so stale acquiredStars never shows wrong stars
  const percentCorrect = currentProgress > 0 ? (100 * correctForLevel) / currentProgress : 0;
  const earnedStarsForLevel = currentProgress < STAR_PROGRESS_THRESHOLD ? 0 : getStarsFromAccuracy(percentCorrect);

  const handleStartEvolution = () => {
    setView('quiz');
    setShowResult(null);
  };

  const handleRandomModeToggle = () => {
    if (!randomMode) {
      // Show modal to confirm random mode
      setShowRandomModeModal(true);
    } else {
      // Show modal to confirm going back to level mode
      setShowRandomModeModal(true);
    }
  };

  const confirmRandomMode = () => {
    setStats(prev => ({ ...prev, randomMode: true }));
    setShowRandomModeModal(false);
    setRandomizeTrigger(prev => prev + 1);
  };

  const confirmLevelMode = () => {
    setStats(prev => ({ ...prev, randomMode: false }));
    setShowRandomModeModal(false);
    setRandomizeTrigger(prev => prev + 1);
  };

  const confirmResetApp = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setStats(INITIAL_STATS);
    setView('hub');
    setShowResetModal(false);
    setShowSettingsMenu(false);
    setShowResult(null);
    setRandomizeTrigger(prev => prev + 1);
  };

  const recordAttempt = (attempt: QuestionAttempt) => {
    setStats(prev => ({
      ...prev,
      totalAttempts: (prev.totalAttempts ?? 0) + 1,
      history: [attempt, ...prev.history].slice(0, 1000),
      completedQuestionIds: !prev.completedQuestionIds.includes(attempt.id)
        ? [...prev.completedQuestionIds, attempt.id]
        : prev.completedQuestionIds
    }));
  };

  const saveToIdLog = (entry: { id: number; question: string; correctAnswer: string; explanation: string }) => {
    const idLogEntry: IdLogEntry = {
      ...entry,
      timestamp: Date.now()
    };

    setStats(prev => ({
      ...prev,
      idLog: [idLogEntry, ...prev.idLog.filter(e => e.id !== entry.id)].slice(0, 1000)
    }));
  };

  const handleQuizComplete = (score: number) => {
    const total = 15;
    const xpGained = score * XP_PER_QUESTION;

    if (randomMode) {
      // Random mode: update randomModeStats only; levelProgress unchanged
      setStats(prev => {
        const newXp = prev.xp + xpGained;
        const rm = prev.randomModeStats ?? { totalAnswered: 0, totalCorrect: 0 };
        const newTotalAnswered = rm.totalAnswered + total;
        const newTotalCorrect = rm.totalCorrect + score;
        const newRm = {
          ...rm,
          totalAnswered: newTotalAnswered,
          totalCorrect: newTotalCorrect,
          lastSessionScore: score,
          lastSessionTotal: total
        };
        const prevScore = getRandomModeScore(rm);
        const newScore = getRandomModeScore(newRm);
        return {
          ...prev,
          xp: newXp,
          randomModeStats: newRm,
          lastSessionScore: score,
          lastSessionTotal: total
        };
      });

      const rm = stats.randomModeStats ?? { totalAnswered: 0, totalCorrect: 0 };
      const prevScore = getRandomModeScore(rm);
      const newTotalAnswered = rm.totalAnswered + total;
      const newTotalCorrect = rm.totalCorrect + score;
      const newScore = Math.floor(newTotalCorrect * (newTotalCorrect / newTotalAnswered));

      setShowResult({
        score,
        total,
        starEarned: null,
        randomMode: true,
        prevScore,
        newScore,
        newPersona: getPersonaFromRandomScore(newScore)
      });
    } else {
      // Level mode: update correctPerLevel, levelProgress (no cap), stars from accuracy, unlock when crossing 90
      setStats(prev => {
        const newXp = prev.xp + xpGained;
        const currentLevelProgress = prev.levelProgress[prev.currentLevel] || 0;
        const newLevelProgress = currentLevelProgress + total;

        const currentCorrect = prev.correctPerLevel?.[prev.currentLevel] || 0;
        const newCorrect = currentCorrect + score;

        const updatedLevelProgress = {
          ...prev.levelProgress,
          [prev.currentLevel]: newLevelProgress
        };
        const updatedCorrectPerLevel = {
          ...(prev.correctPerLevel || {}),
          [prev.currentLevel]: newCorrect
        };

        const percentCorrect = newLevelProgress > 0 ? (100 * newCorrect) / newLevelProgress : 0;
        const newStars = getStarsFromAccuracy(percentCorrect);
        const updatedAcquiredStars = {
          ...(prev.acquiredStars || {}),
          [prev.currentLevel]: newStars
        };

        let newLevel = prev.currentLevel;
        const needed = getQuestionsNeededForLevel(newLevel);
        if (currentLevelProgress < needed && newLevelProgress >= needed && newLevel < 10) {
          newLevel += 1;
        }

        return {
          ...prev,
          xp: newXp,
          currentLevel: newLevel,
          highestUnlockedLevel: Math.max(prev.highestUnlockedLevel, newLevel),
          levelProgress: updatedLevelProgress,
          correctPerLevel: updatedCorrectPerLevel,
          acquiredStars: updatedAcquiredStars,
          lastSessionScore: score,
          lastSessionTotal: total
        };
      });

      const currentLevelProgress = stats.levelProgress[stats.currentLevel] || 0;
      const newLevelProgress = currentLevelProgress + total;
      const currentCorrect = stats.correctPerLevel?.[stats.currentLevel] || 0;
      const newCorrect = currentCorrect + score;
      const percentCorrect = newLevelProgress > 0 ? (100 * newCorrect) / newLevelProgress : 0;
      const newStars = getStarsFromAccuracy(percentCorrect);
      const currentStars = stats.acquiredStars?.[stats.currentLevel] || 0;
      const starEarned = newStars > currentStars ? newStars : null;

      const updatedAcquiredStars = { ...(stats.acquiredStars || {}), [stats.currentLevel]: newStars };
      const allLevels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const allLevelsComplete = starEarned === 5 && allLevels.every(l => (updatedAcquiredStars[l] ?? 0) === 5);

      setShowResult({ score, total, starEarned, allLevelsComplete: allLevelsComplete || undefined });
    }

    setView('hub');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-yellow-400/30 pb-28">
      <nav className="pt-[env(safe-area-inset-top)] px-2 pb-1.5 flex items-center justify-between border-b border-white/5 sticky top-0 z-50 glass">
        <div className="flex w-full items-center gap-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => { playClickSound(); setView('hub'); }}>
            <div className="w-8 h-8 rounded-lg bg-[#FF00FF] flex items-center justify-center shadow-lg shadow-fuchsia-500/40">
              <i className="fas fa-brain text-white text-xs"></i>
            </div>
            <span className="font-bold text-lg tracking-tight hidden sm:inline">
              {t('app.title')}
              <span className="text-yellow-300">{t('app.subtitle')}</span>
            </span>
          </div>

          <div className="h-8 w-[1px] bg-white/10 mx-2 hidden sm:block"></div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-3 bg-white/5 px-3 py-1.5 rounded-2xl border border-white/10">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-300 to-[#FF00FF] flex items-center justify-center text-sm">
                <span className="text-white">{PERSONA_EMOJI[currentPersona] ?? '🐟'}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none">{t('app.rank')}</span>
                <span className="text-sm font-bold text-slate-200 leading-tight">{currentPersona}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <i className="fas fa-bolt text-yellow-300 text-sm"></i>
              <span className="text-sm font-bold text-[#FF00FF]">{stats.xp.toLocaleString()}</span>
            </div>
          </div>

          <div
            className="ml-auto flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10"
            title="Answer Count"
          >
            <i className="fas fa-hashtag text-slate-400 text-sm"></i>
            <span className="text-sm font-bold text-slate-200">{(stats.totalAttempts ?? stats.history.length).toLocaleString()}</span>
          </div>
        </div>

      </nav>

      {/* Settings at bottom - pb lifts gear above iPhone home-indicator; min 2rem when env is 0 in PWA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex justify-center pb-[max(2rem,env(safe-area-inset-bottom))] pt-2 bg-gradient-to-t from-slate-950 to-transparent">
        <button
          onClick={() => { playClickSound(); setShowSettingsMenu(!showSettingsMenu); }}
          className="w-16 h-16 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all shadow-lg min-w-[64px] min-h-[64px]"
          title={t('settings.settings')}
        >
          <i className="fas fa-gear text-xl"></i>
        </button>
      </div>
      <SettingsMenu
        isOpen={showSettingsMenu}
        onClose={() => setShowSettingsMenu(false)}
        onPlayClickSound={playClickSound}
        view={view}
        anchorBottom
        randomMode={randomMode}
        onToggleRandomMode={view === 'hub' || view === 'quiz' ? handleRandomModeToggle : undefined}
        soundEnabled={prefs.soundEnabled}
        onToggleSound={() => setPrefs(p => ({ ...p, soundEnabled: !p.soundEnabled }))}
        hapticEnabled={prefs.hapticEnabled}
        onToggleHaptic={() => setPrefs(p => ({ ...p, hapticEnabled: !p.hapticEnabled }))}
        onShowGlossary={() => setView('glossary')}
        onShowArgumentation={() => setShowArgumentation(true)}
        onShowIdSearch={(initialId?: number) => { setIdSearchInitialId(initialId ?? null); setShowIdSearch(true); }}
        onShowIdLog={() => setShowIdLog(true)}
        onShowLearningLog={() => setView('log')}
        onShowLevelSelector={() => setShowLevelSelector(true)}
        onToggleLanguage={toggleLanguage}
        onResetApp={() => setShowResetModal(true)}
      />

      <main className="container mx-auto px-4 py-1 max-w-4xl min-h-[calc(100dvh-160px)]">
        {view === 'quiz' ? (
          <Suspense fallback={<ViewLoading />}>
            <QuizView
              level={stats.currentLevel}
              currentProgress={currentProgress}
              completedIds={stats.completedQuestionIds}
              earnedStarsForLevel={earnedStarsForLevel}
              onAttempt={recordAttempt}
              onComplete={handleQuizComplete}
              onExit={() => setView('hub')}
              randomizeTrigger={randomizeTrigger}
              randomMode={randomMode}
              randomModeStats={stats.randomModeStats}
              onSaveToIdLog={saveToIdLog}
              savedIdLogIds={stats.idLog.map(entry => entry.id)}
              soundEnabled={prefs.soundEnabled}
              onPlayClickSound={playClickSound}
              hapticEnabled={prefs.hapticEnabled}
              onPlayCorrectSound={playCorrectAnswerSound}
              onPlayWrongSound={playWrongAnswerSound}
            />
          </Suspense>
        ) : view === 'log' ? (
          <Suspense fallback={<ViewLoading />}>
            <HistoryLog
              history={stats.history}
              onBack={() => setView('hub')}
              onSaveToIdLog={saveToIdLog}
              savedIdLogIds={stats.idLog.map(entry => entry.id)}
            />
          </Suspense>
        ) : view === 'glossary' ? (
          <Suspense fallback={<ViewLoading />}>
            <GlossaryView onBack={() => setView('hub')} />
          </Suspense>
        ) : showResult ? (
          <>
            {showResult.starEarned ? (
              <div className="fixed inset-0 z-0 pointer-events-none">
                <FallingStars
                  variant={
                    showResult.allLevelsComplete ? 'allLevels'
                    : showResult.starEarned === 5 ? 'five'
                    : 'single'
                  }
                  className="fixed inset-0"
                />
              </div>
            ) : null}
            <div className="max-w-md mx-auto p-10 glass rounded-3xl text-center space-y-6 animate-in zoom-in duration-500 shadow-2xl relative overflow-hidden z-10">
            {showResult.starEarned && (
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-amber-500/10 animate-pulse"></div>
              </div>
            )}

            {showResult.starEarned ? (
              <div className="w-28 h-28 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center text-6xl mx-auto shadow-[0_0_40px_rgba(251,191,36,0.3)] border border-amber-400/50 relative">
                <i className="fas fa-star animate-[spin_4s_linear_infinite]"></i>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center border-2 border-amber-400 text-lg font-black text-amber-400 z-10">
                  {showResult.starEarned}
                </div>
              </div>
            ) : (
              <div className="w-24 h-24 rounded-full bg-yellow-400/15 text-yellow-300 flex items-center justify-center text-5xl mx-auto shadow-2xl shadow-yellow-400/20 border border-yellow-400/30">
                <i className="fas fa-arrow-up-right-dots"></i>
              </div>
            )}

            <div className="relative z-10">
              {showResult.starEarned ? (
                <>
                  <h2 className="text-3xl font-black mb-2 text-amber-400 bg-clip-text">{t('subLevels.subLevelComplete')}</h2>
                  <p className="text-slate-300">
                    {formatTranslation(t('subLevels.youEarnedStarsCount'), { count: showResult.starEarned })}
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-3xl font-bold mb-2">{t('result.mutationsComplete')}</h2>
                  <p className="text-slate-400">{formatTranslation(t('result.geneticsStabilized'), { score: showResult.score })}</p>
                </>
              )}
            </div>

            <div className="py-4 px-6 bg-white/5 rounded-2xl flex flex-wrap justify-around gap-4 border border-white/5 relative z-10">
              <div>
                <div className="text-xs text-slate-500 uppercase font-bold mb-1 tracking-wider">{t('result.evolutionGain')}</div>
                <div className="text-2xl font-black text-amber-400">+{showResult.score * XP_PER_QUESTION} XP</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase font-bold mb-1 tracking-wider">{t('result.successRate')}</div>
                <div className="text-2xl font-black text-sky-400">{Math.round((showResult.score / showResult.total) * 100)}%</div>
              </div>
              {showResult.randomMode && showResult.prevScore !== undefined && showResult.newScore !== undefined && showResult.newPersona && (
                <div className="w-full mt-2 pt-2 border-t border-white/10">
                  <div className="text-xs text-slate-500 uppercase font-bold mb-1 tracking-wider">{t('result.evolutionScore')}</div>
                  <div className="text-lg font-black text-yellow-300">
                    {showResult.prevScore} → {showResult.newScore} <span className="text-slate-400 font-normal">({showResult.newPersona})</span>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => { playClickSound(); setShowResult(null); }}
              className={`w-full py-4 rounded-2xl font-bold text-white transition-all transform active:scale-95 shadow-xl relative z-10 ${showResult.starEarned
                ? 'bg-amber-500 hover:bg-amber-600 shadow-amber-500/30 text-amber-950 text-lg'
                : 'bg-yellow-400 hover:bg-yellow-500 shadow-yellow-400/30 text-slate-900'
                }`}
            >
              {showResult.starEarned ? t('subLevels.continueEvolution') : t('result.backToHub')}
            </button>
          </div>
          </>
        ) : (
            <EvolutionHub
            stats={stats}
            onStartQuiz={handleStartEvolution}
            onPlayClickSound={playClickSound}
          />
        )}
      </main>

      <footer className="mt-auto border-t border-white/5 p-8 text-center text-slate-600 text-sm">
        <p>{t('footer.copyright')}</p>
        <p className="mt-1 text-[10px] text-slate-700">SW v13</p>
      </footer>

      {/* Operations View Modal */}
      {showOperations && (
        <div className="fixed inset-0 z-[100] bg-slate-950 overflow-y-auto">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <Suspense fallback={<ViewLoading />}>
              <OperationsView onBack={() => setShowOperations(false)} />
            </Suspense>
          </div>
        </div>
      )}

      {/* Methods View Modal */}
      {showMethods && (
        <div className="fixed inset-0 z-[100] bg-slate-950 overflow-y-auto">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <Suspense fallback={<ViewLoading />}>
              <MethodsView onBack={() => setShowMethods(false)} />
            </Suspense>
          </div>
        </div>
      )}

      {/* Flags View Modal */}
      {showFlags && (
        <div className="fixed inset-0 z-[100] bg-slate-950 overflow-y-auto">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <Suspense fallback={<ViewLoading />}>
              <FlagsView onBack={() => setShowFlags(false)} />
            </Suspense>
          </div>
        </div>
      )}

      {/* Flow View Modal */}
      {showFlow && (
        <div className="fixed inset-0 z-[100] bg-slate-950 overflow-y-auto">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <Suspense fallback={<ViewLoading />}>
              <FlowView onBack={() => setShowFlow(false)} />
            </Suspense>
          </div>
        </div>
      )}

      {/* Logical Rules & Argumentation Modal */}
      {showArgumentation && (
        <div className="fixed inset-0 z-[100] bg-slate-950 overflow-y-auto">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <Suspense fallback={<ViewLoading />}>
              <ArgumentationView onBack={() => setShowArgumentation(false)} />
            </Suspense>
          </div>
        </div>
      )}

      {/* Reset App Confirmation Modal */}
      {showResetModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="glass rounded-3xl p-8 max-w-md w-full space-y-6 animate-in zoom-in duration-300 shadow-2xl border border-amber-500/20">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center text-3xl bg-amber-500/20 text-amber-400">
                <i className="fas fa-triangle-exclamation"></i>
              </div>
              <h2 className="text-2xl font-black text-white">
                {t('resetModal.title')}
              </h2>
              <p className="text-slate-400 leading-relaxed">
                {t('resetModal.warning')}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => { playClickSound(); setShowResetModal(false); }}
                className="flex-1 py-3 bg-white/5 hover:bg-white/10 rounded-xl font-bold text-white transition-all border border-white/10"
              >
                {t('resetModal.cancel')}
              </button>
              <button
                onClick={() => { playClickSound(); confirmResetApp(); }}
                className="flex-1 py-3 bg-amber-500 hover:bg-amber-600 rounded-xl font-bold text-white transition-all shadow-xl shadow-amber-500/30"
              >
                {t('resetModal.confirm')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Random Mode Confirmation Modal */}
      {showRandomModeModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass rounded-3xl p-8 max-w-md w-full space-y-6 animate-in zoom-in duration-300 shadow-2xl border border-white/10">
            <div className="text-center space-y-4">
              <div className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center text-3xl ${randomMode ? 'bg-amber-400/20 text-amber-300' : 'bg-yellow-400/20 text-yellow-300'
                }`}>
                <i className={`fas ${randomMode ? 'fa-layer-group' : 'fa-shuffle'}`}></i>
              </div>
              <h2 className="text-2xl font-black text-white">
                {randomMode ? t('randomMode.switchToLevel') : t('randomMode.switchToRandom')}
              </h2>
              <p className="text-slate-400 leading-relaxed">
                {randomMode ? t('randomMode.levelModeDesc') : t('randomMode.randomModeDesc')}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => { playClickSound(); setShowRandomModeModal(false); }}
                className="flex-1 py-3 bg-white/5 hover:bg-white/10 rounded-xl font-bold text-white transition-all border border-white/10"
              >
                {t('randomMode.cancel')}
              </button>
              <button
                onClick={() => { playClickSound(); (randomMode ? confirmLevelMode : confirmRandomMode)(); }}
                className={`flex-1 py-3 rounded-xl font-bold text-white transition-all ${randomMode
                  ? 'bg-amber-500 hover:bg-amber-600 shadow-xl shadow-amber-500/30'
                  : 'bg-yellow-500 hover:bg-yellow-600 shadow-xl shadow-yellow-500/30'
                  }`}
              >
                {randomMode ? t('randomMode.levelMode') : t('randomMode.randomMode')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ID Search Modal */}
      {showIdSearch && (
        <Suspense fallback={<ViewLoading />}>
          <IdSearchModal
            onClose={() => { setShowIdSearch(false); setIdSearchInitialId(null); }}
            onSaveToLog={saveToIdLog}
            initialId={idSearchInitialId ?? undefined}
          />
        </Suspense>
      )}

      {/* ID Log View */}
      {showIdLog && (
        <Suspense fallback={<ViewLoading />}>
          <IdLogView
            entries={stats.idLog}
            onClose={() => setShowIdLog(false)}
          />
        </Suspense>
      )}

      {/* Level Selector Modal */}
      {showLevelSelector && (
        <Suspense fallback={<ViewLoading />}>
          <LevelSelectorModal
            currentLevel={stats.currentLevel}
            highestUnlockedLevel={stats.highestUnlockedLevel}
            onSelectLevel={handleLevelChange}
            onClose={() => setShowLevelSelector(false)}
            levelProgress={stats.levelProgress}
            correctPerLevel={stats.correctPerLevel}
            randomMode={randomMode}
          />
        </Suspense>
      )}
    </div>
  );
};

export default App;
