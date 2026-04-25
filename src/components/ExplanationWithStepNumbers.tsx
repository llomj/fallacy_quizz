import React from 'react';

/**
 * Lines that start with a numbered step marker (digit(s), period, space) per AGENTS.md §14.
 * Renders the marker in the app yellow accent; rest of the line uses bodyClassName.
 *
 * Also highlights section header lines used in the two-tier Detail panel format:
 *   Description:, Description :, Example (...), Exemple (...),
 *   How it works, Comment ça fonctionne, Why it matters, Pourquoi c'est important,
 *   One-line version, En une phrase, The uncomfortable implication, L'implication inconfortable,
 *   Key concept inside it, Concept clé, So:, Donc :, Why this is a fallacy,
 *   and any line that is exactly a fallacy name header (the first non-blank line of a Detail block).
 */
const STEP_LINE = /^(\d{1,3})\.\s(.*)$/;

/** Header lines that get yellow accent highlight in the Detail panel. */
const HEADER_LINE = /^(Description\s*:|Description\s*：|Example\s*\(|Exemple\s*\(|How it works|Comment ça fonctionne|Why it matters|Pourquoi c'est important|One-line version|En une phrase|The uncomfortable implication|L'implication inconfortable|Key concept inside it|Concept clé|So:|Donc\s*:|Why this is a fallacy|Pourquoi c'est une erreur|The formula|La formule|Explains why:|Explique pourquoi\s*:)(.*)$/;

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
        const prefix = idx > 0 ? '\n' : '';
        const stepMatch = line.match(STEP_LINE);
        if (stepMatch) {
          return (
            <span key={idx}>
              {prefix}
              <span className={stepClassName}>
                {stepMatch[1]}.{' '}
              </span>
              {stepMatch[2]}
            </span>
          );
        }
        const headerMatch = line.match(HEADER_LINE);
        if (headerMatch) {
          return (
            <span key={idx}>
              {prefix}
              <span className={stepClassName}>{line}</span>
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

