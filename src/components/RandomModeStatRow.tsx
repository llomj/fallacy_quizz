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
  const stat = (label: string, value: string | number, colorClass: string) => (
    <div className="flex min-w-0 flex-1 flex-col items-center justify-start gap-1 text-center">
      <span className="flex h-8 items-end justify-center text-[8px] font-bold uppercase leading-tight tracking-normal text-slate-400">
        {label}
      </span>
      <span className={`flex h-7 items-center justify-center font-black tabular-nums ${isQuiz ? 'text-base' : 'text-lg'} ${colorClass}`}>
        {value}
      </span>
    </div>
  );

  return (
    <div
      className="flex w-full flex-nowrap items-start gap-0"
      data-testid={`random-mode-stats-${variant}`}
      role="group"
      aria-label={`${t('hub.totalAnswered')}, ${t('hub.incorrect')}, ${t('hub.correct')}, ${t('hub.accuracy')}`}
    >
      {stat(t('hub.totalAnswered'), totalAnswered, 'text-white')}
      {stat(t('hub.incorrect'), incorrect, 'text-[#FF00FF]')}
      {stat(t('hub.correct'), totalCorrect, 'text-green-400')}
      {stat(t('hub.accuracy'), `${accuracy}%`, 'text-cyan-300')}
    </div>
  );
};
