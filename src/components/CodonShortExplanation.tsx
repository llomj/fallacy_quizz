import React from 'react';
import { normalizeExplanationWhitespace } from '../utils/explanationWhitespace';

interface CodonShortExplanationProps {
  text: string;
}

/** Shared fallacy Codon body so ordinary prose is never mistaken for source code. */
export const CodonShortExplanation: React.FC<CodonShortExplanationProps> = ({ text }) => (
  <p className="quiz-accent-text whitespace-pre-wrap text-sm font-medium leading-relaxed tracking-normal">
    {normalizeExplanationWhitespace(text)}
  </p>
);
