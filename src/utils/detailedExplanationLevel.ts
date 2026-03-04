import type { Question } from '../types';

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
}
