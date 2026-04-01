import React from 'react';

/**
 * Lines that start with a numbered step marker (digit(s), period, space) per AGENTS.md §14.
 * Renders the marker in the app yellow accent; rest of the line uses bodyClassName.
 */
const STEP_LINE = /^(\d{1,3})\.\s(.*)$/;

export type ExplanationWithStepNumbersProps = {
  text: string;
  /** Color for non-marker text (default: slate body in log/search panels). */
  bodyClassName?: string;
  /** Color for "N. " at line start — match in-depth / show-detailed accent for that surface. */
  stepClassName?: string;
  /** Extra classes on the wrapper (e.g. text-sm, bg-transparent). */
  className?: string;
};

export function ExplanationWithStepNumbers({
  text,
  bodyClassName = 'text-slate-300',
  stepClassName = 'text-yellow-300 font-semibold',
  className = '',
}: ExplanationWithStepNumbersProps) {
  const lines = text.split('\n');
  return (
    <div className={`whitespace-pre-wrap leading-relaxed ${bodyClassName} ${className}`.trim()}>
      {lines.map((line, idx) => {
        const m = line.match(STEP_LINE);
        const prefix = idx > 0 ? '\n' : '';
        if (m) {
          return (
            <span key={idx}>
              {prefix}
              <span className={stepClassName}>
                {m[1]}.{' '}
              </span>
              {m[2]}
            </span>
          );
        }
        return (
          <span key={idx}>
            {prefix}
            {line}
          </span>
        );
      })}
    </div>
  );
}
