import React from 'react';
import { UserStats, PersonaStage } from '../types';
import { LEVELS, QUESTIONS_PER_LEVEL, TOTAL_QUESTIONS, STAR_PROGRESS_THRESHOLD, getStarsFromAccuracy, getRandomModeScore, getPersonaFromRandomScore, getNextRandomModeThreshold } from '../constants';
import { PersonaBadge } from './PersonaBadge';
import { ProgressBar } from './ProgressBar';
import { useLanguage } from '../contexts/LanguageContext';
import { formatTranslation } from '../translations';

interface EvolutionHubProps {
  stats: UserStats;
  onStartQuiz: () => void;
  onPlayClickSound?: () => void;
}

export const EvolutionHub: React.FC<EvolutionHubProps> = ({ stats, onStartQuiz, onPlayClickSound }) => {
  const { t, language } = useLanguage();
  const randomMode = stats.randomMode ?? false;
  const rm = stats.randomModeStats ?? { totalAnswered: 0, totalCorrect: 0 };
  const randomScore = getRandomModeScore(rm);
  const randomPersona = getPersonaFromRandomScore(randomScore);
  const nextThreshold = getNextRandomModeThreshold(randomScore);
  const currentLevelInfo = LEVELS.find(l => l.level === stats.currentLevel) || LEVELS[0];
  const progress = stats.levelProgress[stats.currentLevel] || 0;

  const totalCompleted = stats.completedQuestionIds.length;
  const totalPossible = TOTAL_QUESTIONS;
  const globalPercentage = Math.round((totalCompleted / totalPossible) * 100);

  const lastAccuracy = stats.lastSessionScore !== undefined && stats.lastSessionTotal
    ? Math.round((stats.lastSessionScore / stats.lastSessionTotal) * 100)
    : null;

  // Stars 0–5 from accuracy; stay blank until progress reaches STAR_PROGRESS_THRESHOLD (~10%).
  // Always derive from accuracy for display (not acquiredStars) so stale migration data never shows wrong stars.
  const correct = stats.correctPerLevel?.[stats.currentLevel] ?? 0;
  const percentCorrect = progress > 0 ? (100 * correct) / progress : 0;
  const earnedStars = progress < STAR_PROGRESS_THRESHOLD ? 0 : getStarsFromAccuracy(percentCorrect);

  const displayPersona = randomMode ? randomPersona : currentLevelInfo.persona;

  const getPersonaTranslationKey = (persona: string): string => {
    if (persona === 'Small Fish') return 'smallFish';
    if (persona === 'God Whale') return 'godWhale';
    return persona.toLowerCase();
  };

  const displayPersonaStr = t(`personas.${getPersonaTranslationKey(displayPersona)}` as any);

  const renderStars = () => {
    return (
      <div className="flex gap-2 justify-center mt-3">
        {[1, 2, 3, 4, 5].map(starNum => (
          <div
            key={starNum}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500
              ${starNum <= earnedStars
                ? 'bg-amber-400 text-amber-900 shadow-[0_0_15px_rgba(251,191,36,0.5)] scale-110'
                : 'bg-slate-800 text-slate-600 border border-white/5'
              }`}
          >
            <i className={`fas fa-star ${starNum <= earnedStars ? 'animate-pulse' : ''} text-sm`}></i>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="flex flex-col items-center gap-1.5 py-1.5 border-b border-white/5 mb-1">
        <PersonaBadge stage={displayPersona} size="md" />
        <div className="text-center space-y-1">
          <h1 className="text-xl font-black text-white tracking-tight uppercase">
            {randomMode ? t('hub.randomModeLabel') : `${formatTranslation(t('hub.evolutionStage'), { level: stats.currentLevel })} ${stats.currentLevel}`}
          </h1>
          <div className="flex items-center gap-2 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF00FF] animate-pulse"></span>
            <span className="text-slate-400 font-bold text-[10px] tracking-widest uppercase">
              {displayPersonaStr} {t('hub.class')}
            </span>
          </div>
          {!randomMode && renderStars()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className={`glass rounded-3xl p-8 space-y-6 flex flex-col justify-between ${randomMode ? 'border-fuchsia-500/30 bg-fuchsia-500/5' : ''}`}>
          {randomMode ? (
            <>
              <div>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <i className="fas fa-shuffle text-[#FF00FF]"></i> {t('hub.randomModeLabel')}
                </h3>
                <p className="text-slate-400 leading-relaxed text-xs">
                  {t('hub.randomModeDescription')}
                </p>
              </div>
              <div className="space-y-4 pt-6 border-t border-white/5">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-900/50 rounded-2xl p-3 border border-white/5">
                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1">{t('hub.totalAnswered')}</div>
                    <div className="text-lg font-black text-white">{rm.totalAnswered}</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-2xl p-3 border border-white/5">
                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1">{t('hub.correct')}</div>
                    <div className="text-lg font-black text-yellow-300">{rm.totalCorrect}</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-2xl p-3 border border-white/5 col-span-2">
                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1">{t('hub.accuracy')}</div>
                    <div className="text-lg font-black text-[#FF00FF]">
                      {rm.totalAnswered > 0 ? Math.round((rm.totalCorrect / rm.totalAnswered) * 100) : 0}%
                    </div>
                  </div>
                  <div className="bg-slate-900/50 rounded-2xl p-3 border border-white/5 col-span-2">
                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1">{t('hub.evolutionScore')}</div>
                    <div className="text-lg font-black text-yellow-300">{randomScore}</div>
                  </div>
                  {rm.lastSessionStars != null && (
                    <div className="bg-slate-900/50 rounded-2xl p-3 border border-amber-500/30 col-span-2 flex items-center gap-2">
                      <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">{formatTranslation(t('hub.lastRunStars'), { count: rm.lastSessionStars! })}</div>
                      <div className="flex gap-0.5 ml-1">
                        {[1, 2, 3, 4, 5].map(starNum => (
                          <i key={starNum} className={`fas fa-star text-[10px] ${starNum <= rm.lastSessionStars! ? 'text-amber-400' : 'text-slate-700/50'}`} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                {nextThreshold && (
                  <>
                    <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                      <span>{formatTranslation(t('hub.pointsToNext'), { points: nextThreshold.minScore - randomScore, persona: nextThreshold.persona })}</span>
                      <span>{randomScore} / {nextThreshold.minScore}</span>
                    </div>
                    <ProgressBar current={randomScore} total={nextThreshold.minScore} colorClass="bg-[#FF00FF]" />
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              <div>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <i className="fas fa-dna text-yellow-300"></i> {t('hub.currentGenome')}
                </h3>
                <p className="text-slate-400 leading-relaxed text-xs">
                  {t(`levels.level${currentLevelInfo.level}` as any)}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {(language === 'fr' ? currentLevelInfo.conceptsFr : currentLevelInfo.conceptsEn).map(c => (
                    <span key={c} className="px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-300 text-[9px] font-mono border border-yellow-400/40">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-4 pt-6 border-t border-white/5">
                <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  <span>
                    {(earnedStars === 0 || earnedStars === 1) && t('subLevels.beginnerProgress')}
                    {(earnedStars === 2 || earnedStars === 3) && t('subLevels.intermediateProgress')}
                    {earnedStars === 4 && t('subLevels.expertProgress')}
                    {earnedStars === 5 && t('subLevels.masteryProgress')}
                  </span>
                  <span>{progress} / {QUESTIONS_PER_LEVEL}</span>
                </div>
                <ProgressBar current={progress} total={QUESTIONS_PER_LEVEL} colorClass="bg-yellow-400" />
                <div className="flex justify-between text-[8px] text-slate-600 font-black tracking-widest px-1">
                  <span>{t('subLevels.beginnerCaps')}</span>
                  <span className="ml-4">{t('subLevels.intermediateCaps')}</span>
                  <span>{t('subLevels.expertCaps')}</span>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="glass rounded-3xl p-8 space-y-6 flex flex-col justify-between border-yellow-300/30 bg-yellow-300/5">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <i className="fas fa-microchip text-yellow-300"></i> {t('hub.nextMutation')}
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-900/50 rounded-2xl p-4 border border-white/5">
                <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1">{t('hub.batchSize')}</div>
                <div className="text-lg font-black text-white">15 {t('hub.questions')}</div>
              </div>
              <div className="bg-slate-900/50 rounded-2xl p-4 border border-white/5">
                <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1">{t('hub.lastAccuracy')}</div>
                <div className={`text-lg font-black ${lastAccuracy !== null ? 'text-amber-400' : 'text-slate-700'}`}>
                  {lastAccuracy !== null ? `${lastAccuracy}%` : '---'}
                </div>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed">
              {randomMode ? t('hub.randomModeAbsorbText') : `${t('hub.absorbText')} ${formatTranslation(t('hub.mutationsRemaining'), { count: QUESTIONS_PER_LEVEL - progress })}`}
            </p>
          </div>

          <button
            onClick={() => { onPlayClickSound?.(); onStartQuiz(); }}
            className="w-full py-4 bg-gradient-to-r from-yellow-300 to-[#FF00FF] hover:from-yellow-200 hover:to-fuchsia-400 text-slate-950 rounded-2xl font-black text-lg transition-all transform hover:scale-[1.02] active:scale-95 shadow-2xl shadow-fuchsia-500/40 flex items-center justify-center gap-3"
          >
            {t('hub.continueMutation')} <i className="fas fa-chevron-right text-sm"></i>
          </button>
        </div>
      </div>

      <div className="glass rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 border-white/5">
        <div className="flex items-center gap-4 flex-1">
          <div className="w-14 h-14 rounded-2xl bg-slate-800 flex flex-col items-center justify-center border border-white/5">
            <span className="text-xl font-black text-white">{globalPercentage}%</span>
            <span className="text-[7px] font-bold text-slate-500 uppercase tracking-widest">{t('hub.mastery')}</span>
          </div>
          <div>
            <h4 className="font-bold text-xs text-slate-200">{t('hub.globalProgress')}</h4>
            <p className="text-[10px] text-slate-500">{totalCompleted} / {totalPossible} {t('hub.conceptsText')}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
          {LEVELS.map(l => (
            <div
              key={l.level}
              className={`w-1.5 h-6 rounded-full transition-all duration-500 ${
                l.level < stats.currentLevel
                  ? 'bg-yellow-300'
                  : l.level === stats.currentLevel
                  ? 'bg-[#FF00FF]/70 animate-pulse'
                  : 'bg-slate-800'
              }`}
              title={t(`personas.${getPersonaTranslationKey(l.persona)}` as any)}
            />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};
