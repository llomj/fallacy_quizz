import React from 'react';

export interface RandomModeStatRowProps {
  totalAnswered: number;
  totalCorrect: number;
  /** 'hub' = EvolutionHub tiles; 'quiz' = borderless row below the Codon explanation */
  variant: 'hub' | 'quiz';
  t: (key: string) => string;
}

/**
 * Total answered → Incorrect → Correct (incorrect = answered − correct).
 * Single implementation for hub + quiz so the Incorrect tile cannot drift out of sync.
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
      <div className="flex min-w-0 flex-col items-center text-center">
        <span className="text-[8px] font-bold uppercase leading-tight tracking-wider text-slate-400">
          {label}
        </span>
        <span className={`mt-1 text-base font-black tabular-nums ${colorClass}`}>{value}</span>
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

  const labelCls = 'text-[9px] font-bold uppercase leading-tight tracking-wider text-slate-400';
  const numCls = 'text-lg font-black tabular-nums';

  // Per-tile: top row = label (bottom-aligned so short labels don’t drop the digit); bottom row = fixed height so all 0s share one baseline.
  const tileCls = 'grid min-h-[5rem] grid-rows-[minmax(0,1fr)_2rem] rounded-2xl border border-white/15 bg-slate-900/60 p-3 text-center';
  const outerCls = 'grid w-full grid-cols-3 gap-3';
  const numRowCls = 'flex h-8 items-center justify-center';

  return (
    <div
      className={outerCls}
      role="group"
      aria-label={`${t('hub.totalAnswered')}, ${t('hub.incorrect')}, ${t('hub.correct')}`}
    >
      <div className={tileCls}>
        <div className="flex min-h-0 items-end justify-center px-0.5 text-center">
          <span className={labelCls}>{t('hub.totalAnswered')}</span>
        </div>
        <div className={`${numRowCls} ${numCls} text-white`}>{totalAnswered}</div>
      </div>
      <div className={tileCls}>
        <div className="flex min-h-0 items-end justify-center px-0.5 text-center">
          <span className={labelCls}>{t('hub.incorrect')}</span>
        </div>
        <div className={`${numRowCls} ${numCls} text-[#FF00FF]`}>{incorrect}</div>
      </div>
      <div className={tileCls}>
        <div className="flex min-h-0 items-end justify-center px-0.5 text-center">
          <span className={labelCls}>{t('hub.correct')}</span>
        </div>
        <div className={`${numRowCls} ${numCls} text-green-400`}>{totalCorrect}</div>
      </div>
    </div>
  );
};
