import React from 'react';

/**
 * Lines that start with a numbered step marker (digit(s), period, space) per AGENTS.md §14.
 * Renders the marker in a distinct color; the rest of the line uses bodyClassName.
 *
 * Also highlights section header lines used in the two-tier Detail panel format:
 *   Description:, Description :, Example (...), Exemple (...),
 *   How it works, Comment ça fonctionne, Why it matters, Pourquoi c'est important,
 *   One-line version, En une phrase, The uncomfortable implication, L'implication inconfortable,
 *   Key concept inside it, Concept clé, So:, Donc :, Why this is a fallacy,
 *   and any line that is exactly a fallacy name header (the first non-blank line of a Detail block).
 */
const STEP_LINE = /^(\d{1,3})([.)])\s+(.*)$/;
const BULLET_LINE = /^([-•→])\s+(.*)$/;

/** Header lines that get yellow accent highlight in the Detail panel. */
const HEADER_LINE = /^(Description\s*:|Description\s*：|Example\s*\(|Exemple\s*\(|How it works|Comment ça fonctionne|Why it matters|Pourquoi c'est important|One-line version|En une phrase|The uncomfortable implication|L'implication inconfortable|Key concept inside it|Concept clé|So:|Donc\s*:|Why this is a fallacy|Pourquoi c'est une erreur|The formula|La formule|Explains why:|Explique pourquoi\s*:)(.*)$/;

export type ExplanationWithStepNumbersProps = {
  text: string;
  /** Color for non-marker text (default: slate body in log/search panels). */
  bodyClassName?: string;
  /** Color for section headings — match the in-depth accent for that surface. */
  stepClassName?: string;
  /** Color for numbered markers. Kept separate from the panel accent for easy scanning. */
  numberClassName?: string;
  /** Extra classes on the wrapper (e.g. text-sm, bg-transparent). */
  className?: string;
};

export function ExplanationWithStepNumbers({
  text,
  bodyClassName = 'text-slate-300',
  stepClassName = 'text-yellow-300 font-semibold',
  numberClassName = 'text-cyan-300 font-black',
  className = '',
}: ExplanationWithStepNumbersProps) {
  const lines = text.split('\n');
  return (
    <div className={`whitespace-pre-wrap leading-relaxed tracking-normal ${bodyClassName} ${className}`.trim()}>
      {lines.map((line, idx) => {
        if (!line.trim()) {
          return <span key={idx} className="block h-2" aria-hidden="true" />;
        }

        const stepMatch = line.match(STEP_LINE);
        if (stepMatch) {
          return (
            <span key={idx} className="mb-2 flex items-start gap-2 last:mb-0">
              <span className={`shrink-0 ${numberClassName}`}>
                {stepMatch[1]}{stepMatch[2]}
              </span>
              <span>{stepMatch[3]}</span>
            </span>
          );
        }

        const bulletMatch = line.match(BULLET_LINE);
        if (bulletMatch) {
          return (
            <span key={idx} className="mb-2 flex items-start gap-2 last:mb-0">
              <span className="shrink-0 opacity-80">{bulletMatch[1]}</span>
              <span>{bulletMatch[2]}</span>
            </span>
          );
        }

        const headerMatch = line.match(HEADER_LINE);
        if (headerMatch) {
          return (
            <span key={idx} className="mb-2 mt-3 block first:mt-0 last:mb-0">
              <span className={stepClassName}>{line}</span>
            </span>
          );
        }
        return (
          <span key={idx} className="mb-2 block last:mb-0">{line}</span>
        );
      })}
    </div>
  );
}
