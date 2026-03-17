import type { Question } from '../types';
import { buildFallacyEnglishDetailed } from './foundationDetailedFormatter';
import { getFallacyCodonExplanationEN, isFallacyPlaceholder } from '../data/fallacyCodonExplanations';

export type DetailedExplanationLevel = 'beginner' | 'intermediate' | 'expert';

/**
 * Returns the detailed explanation text for the given level.
 * Falls back to detailedExplanation when level-specific text is missing.
 * Prefers question-specific text if it's not a placeholder;
 * otherwise uses rich codon explanations when the correct option (fallacy name) exists.
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

  // If we have unique, question-specific text that isn't a generic placeholder, use it first.
  if (baseByLevel && !isFallacyPlaceholder(baseByLevel)) {
    return buildFallacyEnglishDetailed({
      depth: level,
      baseText: baseByLevel,
      shortText: q.explanation,
      questionText: q.question,
      correctOption,
    });
  }

  // Otherwise, fallback to the rich codon definitions if available.
  const codonText = correctOption
    ? getFallacyCodonExplanationEN(correctOption, level)
    : undefined;
  const finalBase = codonText ?? baseByLevel;

  if (!finalBase) return undefined;

  return buildFallacyEnglishDetailed({
    depth: level,
    baseText: finalBase,
    shortText: q.explanation,
    questionText: q.question,
    correctOption,
  });
}

