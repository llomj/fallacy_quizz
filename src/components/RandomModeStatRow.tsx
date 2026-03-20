import React from 'react';

export interface RandomModeStatRowProps {
  totalAnswered: number;
  totalCorrect: number;
  /** 'hub' = EvolutionHub tiles; 'quiz' = compact quiz header */
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

  const labelCls = isQuiz
    ? 'text-[8px] font-bold uppercase leading-tight tracking-wider text-slate-400'
    : 'text-[9px] font-bold uppercase leading-tight tracking-wider text-slate-400';
  const numCls = isQuiz ? 'text-base font-black tabular-nums' : 'text-lg font-black tabular-nums';

  // Per-tile: top row = label (bottom-aligned so short labels don’t drop the digit); bottom row = fixed height so all 0s share one baseline.
  const tileCls = isQuiz
    ? 'grid min-h-[3.25rem] min-w-0 flex-1 grid-rows-[minmax(0,1fr)_1.75rem] rounded-xl border border-white/10 bg-slate-900/70 px-2 py-1.5 text-center'
    : 'grid min-h-[5rem] grid-rows-[minmax(0,1fr)_2rem] rounded-2xl border border-white/15 bg-slate-900/60 p-3 text-center';

  const outerCls = isQuiz
    ? 'mb-2 flex w-full min-w-0 gap-2'
    : 'grid w-full grid-cols-3 gap-3';

  const numRowCls = isQuiz
    ? 'flex h-7 items-center justify-center'
    : 'flex h-8 items-center justify-center';

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
