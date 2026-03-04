import type { Question } from '../types';
import {
  buildFoundationEnglishDetailed,
  extractCommandExample,
  isFoundationQuestion,
} from './foundationDetailedFormatter';

export type DetailedExplanationLevel = 'beginner' | 'intermediate' | 'expert';

/**
 * Returns the detailed explanation text for the given level.
 * Falls back to detailedExplanation when level-specific text is missing.
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
  if (!isFoundationQuestion(q.id, q.level)) return baseByLevel;

  const commandExample = extractCommandExample(
    q.question,
    q.explanation,
    q.detailedExplanationBeginner,
    q.detailedExplanationIntermediate,
    q.detailedExplanationExpert,
    q.options[q.correct_option_index]
  );

  return buildFoundationEnglishDetailed({
    depth: level,
    baseText: baseByLevel,
    shortText: q.explanation,
    commandExample,
    questionText: q.question,
    correctOption: q.options[q.correct_option_index],
  });
}
