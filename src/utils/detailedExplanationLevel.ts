import type { Question } from '../types';
import { buildFallacyEnglishDetailed } from './foundationDetailedFormatter';
import { getFallacyCodonExplanationEN } from '../data/fallacyCodonExplanations';

export type DetailedExplanationLevel = 'beginner' | 'intermediate' | 'expert';

/**
 * Returns the detailed explanation text for the given level.
 * Falls back to detailedExplanation when level-specific text is missing.
 * Prefers rich codon explanations when the correct option (fallacy name) exists
 * in the codon map; otherwise uses question text if it's not a generic placeholder.
 */
export function getDetailedExplanationForLevel(
  q: Question,
  level: DetailedExplanationLevel
): string | undefined {
  const fallback = q.detailedExplanation;
  const baseByLevel = (() => {
    switch (level) {
      case 'beginner':
        return q.detailedExplanationBeginner ?? fallback;
      case 'intermediate':
        return q.detailedExplanationIntermediate ?? fallback;
      case 'expert':
        return q.detailedExplanationExpert ?? fallback;
      default:
        return fallback;
    }
  })();

  const correctOption = q.options[q.correct_option_index];

  // Prefer rich codon explanations whenever we have a matching fallacy entry
  const codonText = correctOption ? getFallacyCodonExplanationEN(correctOption, level) : undefined;
  const baseText = codonText ?? baseByLevel;

  if (!baseText) return undefined;

  return buildFallacyEnglishDetailed({
    depth: level,
    baseText,
    shortText: q.explanation,
    questionText: q.question,
    correctOption,
  });
}
