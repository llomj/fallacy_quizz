import type { Question } from '../types';
import {
  buildFoundationEnglishDetailed,
  buildFallacyEnglishDetailed,
  extractCommandExample,
} from './foundationDetailedFormatter';
import {
  getFallacyCodonExplanationEN,
  isFallacyPlaceholder,
} from '../data/fallacyCodonExplanations';

export type DetailedExplanationLevel = 'beginner' | 'intermediate' | 'expert';

/**
 * Returns the detailed explanation text for the given level.
 * Falls back to detailedExplanation when level-specific text is missing.
 * For fallacy questions (no CLI command), uses fallacy-specific formatter and
 * fallacy codon lookup when the question's text is a generic placeholder.
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

  if (!baseByLevel) return baseByLevel;

  const commandExample = extractCommandExample(
    q.question,
    q.explanation,
    q.detailedExplanationBeginner,
    q.detailedExplanationIntermediate,
    q.detailedExplanationExpert,
    q.options[q.correct_option_index]
  );

  const correctOption = q.options[q.correct_option_index];

  if (commandExample === undefined) {
    const baseText =
      isFallacyPlaceholder(baseByLevel) && correctOption
        ? getFallacyCodonExplanationEN(correctOption, level) ?? baseByLevel
        : baseByLevel;
    return buildFallacyEnglishDetailed({
      depth: level,
      baseText,
      shortText: q.explanation,
      questionText: q.question,
      correctOption,
    });
  }

  return buildFoundationEnglishDetailed({
    depth: level,
    baseText: baseByLevel,
    shortText: q.explanation,
    commandExample,
    questionText: q.question,
    correctOption,
  });
}
