import React, { useState, useEffect } from 'react';
import { UserStats, PersonaStage, QuestionAttempt } from './types';
import { EvolutionHub } from './components/EvolutionHub';
import { QuizView } from './components/QuizView';
import { HistoryLog } from './components/HistoryLog';
import { GlossaryView } from './components/GlossaryView';
import { OperationsView } from './components/OperationsView';
import { IdSearchModal } from './components/IdSearchModal';
import { IdLogView } from './components/IdLogView';
import { LevelSelectorModal } from './components/LevelSelectorModal';
import { SettingsMenu } from './components/SettingsMenu';
import { IdLogEntry } from './types';
import { LEVELS, XP_PER_QUESTION, QUESTIONS_PER_LEVEL, getStarsFromProgress, getRandomModeScore, getPersonaFromRandomScore } from './constants';
import { useLanguage } from './contexts/LanguageContext';
import { formatTranslation } from './translations';

const LOCAL_STORAGE_KEY = 'python_exercises_learn_stats_v3_offline';

const INITIAL_STATS: UserStats = {
  currentLevel: 1,
  xp: 0,
  completedQuestionIds: [],
  highestUnlockedLevel: 1,
  levelProgress: {},
  acquiredStars: {},
  history: [],
  idLog: [],
  randomModeStats: { totalAnswered: 0, totalCorrect: 0 },
  randomMode: false
};

const App: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [stats, setStats] = useState<UserStats>(INITIAL_STATS);
  const [view, setView] = useState<'hub' | 'quiz' | 'log' | 'glossary'>('hub');
  const [showResult, setShowResult] = useState<{
    score: number;
    total: number;
    starEarned: number | null;
    randomMode?: boolean;
    prevScore?: number;
    newScore?: number;
    newPersona?: PersonaStage;
  } | null>(null);
  const [randomizeTrigger, setRandomizeTrigger] = useState(0);
  const [showRandomModeModal, setShowRandomModeModal] = useState(false);
  const randomMode = stats.randomMode ?? false;
  const [showOperations, setShowOperations] = useState(false);
  const [showIdSearch, setShowIdSearch] = useState(false);
  const [showIdLog, setShowIdLog] = useState(false);
  const [showLevelSelector, setShowLevelSelector] = useState(false);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
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
        // Migration: derive acquiredStars from levelProgress when missing or partial
        const levelProgress = parsed.levelProgress || {};
        const existingStars = parsed.acquiredStars || {};
        const migratedStars: Record<number, number> = { ...existingStars };
        for (const level of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
          const progress = levelProgress[level] || 0;
          const derivedStars = getStarsFromProgress(progress);
          if (derivedStars > (existingStars[level] || 0)) {
            migratedStars[level] = derivedStars;
          }
        }
        parsed.acquiredStars = migratedStars;
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

  const currentLevelInfo = LEVELS.find(l => l.level === stats.currentLevel) || LEVELS[0];
  const currentPersona = (stats.randomMode && stats.randomModeStats)
    ? getPersonaFromRandomScore(getRandomModeScore(stats.randomModeStats))
    : currentLevelInfo.persona;
  const currentProgress = stats.levelProgress[stats.currentLevel] || 0;

  const getPersonaIcon = (persona: PersonaStage): string => {
    const personaIcons: Record<PersonaStage, string> = {
      [PersonaStage.PLANKTON]: "fa-microbe",
      [PersonaStage.SHRIMP]: "fa-shrimp",
      [PersonaStage.CRAB]: "fa-crab",
      [PersonaStage.SMALL_FISH]: "fa-fish",
      [PersonaStage.OCTOPUS]: "fa-octopus",
      [PersonaStage.SEAL]: "fa-seal",
      [PersonaStage.DOLPHIN]: "fa-dolphin",
      [PersonaStage.SHARK]: "fa-shark",
      [PersonaStage.WHALE]: "fa-whale",
      [PersonaStage.GOD_WHALE]: "fa-globe",
    };
    return personaIcons[persona] || 'fa-fish';
  };

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
      history: [attempt, ...prev.history].slice(0, 1000),
      completedQuestionIds: attempt.isCorrect && !prev.completedQuestionIds.includes(attempt.id)
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
      // Level mode: update levelProgress, stars, currentLevel
      setStats(prev => {
        const newXp = prev.xp + xpGained;
        const currentLevelProgress = prev.levelProgress[prev.currentLevel] || 0;
        const newLevelProgress = Math.min(QUESTIONS_PER_LEVEL, currentLevelProgress + total);

        const updatedLevelProgress = {
          ...prev.levelProgress,
          [prev.currentLevel]: newLevelProgress
        };

        const currentStars = prev.acquiredStars?.[prev.currentLevel] || 0;
        const newStars = Math.max(currentStars, getStarsFromProgress(newLevelProgress));

        const updatedAcquiredStars = {
          ...(prev.acquiredStars || {}),
          [prev.currentLevel]: Math.max(currentStars, newStars)
        };

        let newLevel = prev.currentLevel;
        if (newLevelProgress >= QUESTIONS_PER_LEVEL && newLevel < 10) {
          newLevel += 1;
        }

        return {
          ...prev,
          xp: newXp,
          currentLevel: newLevel,
          highestUnlockedLevel: Math.max(prev.highestUnlockedLevel, newLevel),
          levelProgress: updatedLevelProgress,
          acquiredStars: updatedAcquiredStars,
          lastSessionScore: score,
          lastSessionTotal: total
        };
      });

      const currentLevelProgress = stats.levelProgress[stats.currentLevel] || 0;
      const newLevelProgress = Math.min(QUESTIONS_PER_LEVEL, currentLevelProgress + total);
      const currentStars = stats.acquiredStars?.[stats.currentLevel] || 0;
      const newStars = Math.max(currentStars, getStarsFromProgress(newLevelProgress));
      const starEarned = newStars > currentStars ? newStars : null;

      setShowResult({ score, total, starEarned });
    }

    setView('hub');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30 pb-28">
      <nav className="pt-[max(3rem, env(safe-area-inset-top))] px-2 pb-2 flex items-center justify-between border-b border-white/5 sticky top-0 z-50 glass">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('hub')}>
            <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <i className="fas fa-terminal text-white text-xs"></i>
            </div>
            <span className="font-bold text-lg tracking-tight hidden sm:inline">{t('app.title')}<span className="text-indigo-400">{t('app.subtitle')}</span></span>
          </div>

          <div className="h-8 w-[1px] bg-white/10 mx-2 hidden sm:block"></div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-3 bg-white/5 px-3 py-1.5 rounded-2xl border border-white/10">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm">
                <i className={`fas ${getPersonaIcon(currentPersona)} text-white`}></i>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none">{t('app.rank')}</span>
                <span className="text-sm font-bold text-slate-200 leading-tight">{currentPersona}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <i className="fas fa-bolt text-amber-400 text-sm"></i>
              <span className="text-sm font-bold text-indigo-400">{stats.xp.toLocaleString()}</span>
            </div>
            <button
              onClick={() => setShowSettingsMenu(!showSettingsMenu)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-all"
              title={t('settings.settings')}
            >
              <i className="fas fa-gear"></i>
            </button>
          </div>
        </div>

      </nav>

      {/* Settings at bottom - pb lifts gear above iPhone home-indicator; min 2rem when env is 0 in PWA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex justify-center pb-[max(2rem, env(safe-area-inset-bottom))] pt-2 bg-gradient-to-t from-slate-950 to-transparent">
        <button
          onClick={() => setShowSettingsMenu(!showSettingsMenu)}
          className="w-16 h-16 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all shadow-lg min-w-[64px] min-h-[64px]"
          title={t('settings.settings')}
        >
          <i className="fas fa-gear text-xl"></i>
        </button>
      </div>
      <SettingsMenu
        isOpen={showSettingsMenu}
        onClose={() => setShowSettingsMenu(false)}
        view={view}
        anchorBottom
          randomMode={randomMode}
          onToggleRandomMode={view === 'hub' || view === 'quiz' ? handleRandomModeToggle : undefined}
          onShowGlossary={view === 'hub' ? () => setView('glossary') : undefined}
          onShowIdSearch={view === 'hub' ? () => setShowIdSearch(true) : undefined}
          onShowIdLog={view === 'hub' ? () => setShowIdLog(true) : undefined}
          onShowLearningLog={view === 'hub' ? () => setView('log') : undefined}
          onShowOperations={view === 'quiz' ? () => setShowOperations(true) : undefined}
          onShowLevelSelector={() => setShowLevelSelector(true)}
          onToggleLanguage={toggleLanguage}
          onResetApp={() => setShowResetModal(true)}
      />

      <main className="container mx-auto px-4 py-3 max-w-4xl min-h-[calc(100dvh-160px)]">
        {view === 'quiz' ? (
          <QuizView
            level={stats.currentLevel}
            currentProgress={currentProgress}
            completedIds={stats.completedQuestionIds}
            onAttempt={recordAttempt}
            onComplete={handleQuizComplete}
            onExit={() => setView('hub')}
            randomizeTrigger={randomizeTrigger}
            randomMode={randomMode}
            randomModeStats={stats.randomModeStats}
          />
        ) : view === 'log' ? (
          <HistoryLog history={stats.history} onBack={() => setView('hub')} />
        ) : view === 'glossary' ? (
          <GlossaryView onBack={() => setView('hub')} />
        ) : showResult ? (
          <div className="max-w-md mx-auto p-10 glass rounded-3xl text-center space-y-6 animate-in zoom-in duration-500 shadow-2xl relative overflow-hidden">
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
              <div className="w-24 h-24 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-5xl mx-auto shadow-2xl shadow-emerald-500/20 border border-emerald-500/30">
                <i className="fas fa-arrow-up-right-dots"></i>
              </div>
            )}

            <div className="relative z-10">
              {showResult.starEarned ? (
                <>
                  <h2 className="text-3xl font-black mb-2 text-amber-400 bg-clip-text">{t('subLevels.subLevelComplete')}</h2>
                  <p className="text-slate-300">
                    {formatTranslation(t('subLevels.youEarnedStar'), {
                      star: showResult.starEarned === 1 ? t('subLevels.beginner')
                        : showResult.starEarned === 2 ? t('subLevels.intermediate')
                        : t('subLevels.expert')
                    })}
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
                  <div className="text-lg font-black text-indigo-400">
                    {showResult.prevScore} → {showResult.newScore} <span className="text-slate-400 font-normal">({showResult.newPersona})</span>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setShowResult(null)}
              className={`w-full py-4 rounded-2xl font-bold text-white transition-all transform active:scale-95 shadow-xl relative z-10 ${showResult.starEarned
                  ? 'bg-amber-500 hover:bg-amber-600 shadow-amber-500/30 text-amber-950 text-lg'
                  : 'bg-indigo-500 hover:bg-indigo-600 shadow-indigo-500/30'
                }`}
            >
              {showResult.starEarned ? t('subLevels.continueEvolution') : t('result.backToHub')}
            </button>
          </div>
        ) : (
          <EvolutionHub
            stats={stats}
            onStartQuiz={handleStartEvolution}
            onOpenSettings={() => setShowSettingsMenu(true)}
          />
        )}
      </main>

      <footer className="mt-auto border-t border-white/5 p-8 text-center text-slate-600 text-sm">
        <p>{t('footer.copyright')}</p>
      </footer>

      {/* Operations View Modal */}
      {showOperations && (
        <div className="fixed inset-0 z-[100] bg-slate-950 overflow-y-auto">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <OperationsView onBack={() => setShowOperations(false)} />
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
                onClick={() => setShowResetModal(false)}
                className="flex-1 py-3 bg-white/5 hover:bg-white/10 rounded-xl font-bold text-white transition-all border border-white/10"
              >
                {t('resetModal.cancel')}
              </button>
              <button
                onClick={confirmResetApp}
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
              <div className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center text-3xl ${randomMode ? 'bg-indigo-500/20 text-indigo-400' : 'bg-green-500/20 text-green-400'
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
                onClick={() => setShowRandomModeModal(false)}
                className="flex-1 py-3 bg-white/5 hover:bg-white/10 rounded-xl font-bold text-white transition-all border border-white/10"
              >
                {t('randomMode.cancel')}
              </button>
              <button
                onClick={randomMode ? confirmLevelMode : confirmRandomMode}
                className={`flex-1 py-3 rounded-xl font-bold text-white transition-all ${randomMode
                  ? 'bg-indigo-500 hover:bg-indigo-600 shadow-xl shadow-indigo-500/30'
                  : 'bg-green-500 hover:bg-green-600 shadow-xl shadow-green-500/30'
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
        <IdSearchModal
          onClose={() => setShowIdSearch(false)}
          onSaveToLog={saveToIdLog}
        />
      )}

      {/* ID Log View */}
      {showIdLog && (
        <IdLogView
          entries={stats.idLog}
          onClose={() => setShowIdLog(false)}
        />
      )}

      {/* Level Selector Modal */}
      {showLevelSelector && (
        <LevelSelectorModal
          currentLevel={stats.currentLevel}
          highestUnlockedLevel={stats.highestUnlockedLevel}
          onSelectLevel={handleLevelChange}
          onClose={() => setShowLevelSelector(false)}
          acquiredStars={stats.acquiredStars}
          randomMode={randomMode}
        />
      )}
    </div>
  );
};

export default App;