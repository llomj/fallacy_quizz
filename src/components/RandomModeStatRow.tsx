import React from 'react';

export interface RandomModeStatRowProps {
  totalAnswered: number;
  totalCorrect: number;
  /** 'hub' = compact EvolutionHub row; 'quiz' = row below the Codon explanation */
  variant: 'hub' | 'quiz';
  t: (key: string) => string;
}

/**
 * Total answered → Incorrect → Correct → Accuracy (incorrect = answered − correct).
 * Single implementation for hub + quiz keeps both stat rows consistent.
 */
export const RandomModeStatRow: React.FC<RandomModeStatRowProps> = ({
  totalAnswered,
  totalCorrect,
  variant,
  t
}) => {
  const incorrect = totalAnswered - totalCorrect;
  const isQuiz = variant === 'quiz';
  const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  if (isQuiz) {
    const quizStat = (label: string, value: string | number, colorClass: string) => (
      <div className="grid min-w-0 grid-rows-[2rem_1.5rem] text-center">
        <div className="flex min-h-0 items-end justify-center">
          <span className="text-[8px] font-bold uppercase leading-tight tracking-wider text-slate-400">
            {label}
          </span>
        </div>
        <span className={`flex h-6 items-center justify-center text-base font-black tabular-nums ${colorClass}`}>
          {value}
        </span>
      </div>
    );

    return (
      <div
        className="grid w-full grid-cols-4 gap-3"
        role="group"
        aria-label={`${t('hub.totalAnswered')}, ${t('hub.incorrect')}, ${t('hub.correct')}, ${t('hub.accuracy')}`}
      >
        {quizStat(t('hub.totalAnswered'), totalAnswered, 'text-white')}
        {quizStat(t('hub.incorrect'), incorrect, 'text-[#FF00FF]')}
        {quizStat(t('hub.correct'), totalCorrect, 'text-green-400')}
        {quizStat(t('hub.accuracy'), `${accuracy}%`, 'text-cyan-300')}
      </div>
    );
  }

  const hubStat = (label: string, value: string | number, colorClass: string) => (
    <div className="grid min-w-0 grid-rows-[2.25rem_1.75rem] text-center">
      <div className="flex min-h-0 items-end justify-center">
        <span className="text-[8px] font-bold uppercase leading-tight tracking-wider text-slate-400">
          {label}
        </span>
      </div>
      <span className={`flex h-7 items-center justify-center text-lg font-black tabular-nums ${colorClass}`}>
        {value}
      </span>
    </div>
  );

  return (
    <div
      className="grid w-full grid-cols-4 gap-2 sm:gap-3"
      role="group"
      aria-label={`${t('hub.totalAnswered')}, ${t('hub.incorrect')}, ${t('hub.correct')}, ${t('hub.accuracy')}`}
    >
      {hubStat(t('hub.totalAnswered'), totalAnswered, 'text-white')}
      {hubStat(t('hub.incorrect'), incorrect, 'text-[#FF00FF]')}
      {hubStat(t('hub.correct'), totalCorrect, 'text-green-400')}
      {hubStat(t('hub.accuracy'), `${accuracy}%`, 'text-cyan-300')}
    </div>
  );
};
