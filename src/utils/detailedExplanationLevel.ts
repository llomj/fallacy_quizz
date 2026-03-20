import type { Question } from '../types';
import { buildFallacyEnglishDetailed } from './foundationDetailedFormatter';
import { getFallacyCodonExplanationEN, isFallacyPlaceholder } from '../data/fallacyCodonExplanations';
import { LEVEL_0_STANDALONE_EN } from '../data/inDepth/level0StandaloneInDepth';
import { LEVEL_1_STANDALONE_EN } from '../data/inDepth/level1StandaloneInDepth';
import { LEVELS_2_TO_10_STANDALONE_EN } from '../data/inDepth/level2to10StandaloneInDepth';

export type DetailedExplanationLevel = 'beginner' | 'intermediate' | 'expert';

/**
 * Returns the detailed explanation text for the given level.
 * Falls back to detailedExplanation when level-specific text is missing.
 * Prefers question-specific text if it's not a placeholder;
 * otherwise uses rich codon explanations when the correct option (fallacy name) exists.
 *
 * Level 0: full standalone in-depth copy from `level0StandaloneInDepth.ts` when present for this ID (English).
 * Level 1: same pattern via `level1StandaloneInDepth.ts` (IDs 1–90).
 * Levels 2–10: same pattern via `level2to10StandaloneInDepth.ts` (IDs 91–900).
 */
export function getDetailedExplanationForLevel(
  q: Question,
  level: DetailedExplanationLevel
): string | undefined {
  if (q.level === 0) {
    const standalone = LEVEL_0_STANDALONE_EN[q.id]?.[level];
    if (standalone) return standalone;
  }
  if (q.level === 1) {
    const standalone = LEVEL_1_STANDALONE_EN[q.id]?.[level];
    if (standalone) return standalone;
  }
  if (q.level >= 2 && q.level <= 10) {
    const standalone = LEVELS_2_TO_10_STANDALONE_EN[q.id]?.[level];
    if (standalone) return standalone;
  }

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

