import type { QuestionAttempt } from '../types';

/** After this many correct answers for the same question at the same level, it is excluded from new batches. */
export const MAX_CORRECT_REPEATS_PER_LEVEL = 2;

/**
 * Question IDs that have been answered correctly at least `MAX_CORRECT_REPEATS_PER_LEVEL` times
 * for that question's level (tracked via attempt.level). Those questions are not drawn again
 * for that level so the same item does not repeat more than twice after correct answers.
 */
export function getIdsExhaustedByCorrectRepeats(
  history: QuestionAttempt[],
  maxRepeats: number = MAX_CORRECT_REPEATS_PER_LEVEL
): number[] {
  const byLevel = new Map<number, Map<number, number>>();
  for (const a of history) {
    if (!a.isCorrect) continue;
    if (!byLevel.has(a.level)) byLevel.set(a.level, new Map());
    const m = byLevel.get(a.level)!;
    m.set(a.id, (m.get(a.id) ?? 0) + 1);
  }
  const exhausted = new Set<number>();
  for (const idMap of byLevel.values()) {
    for (const [id, count] of idMap) {
      if (count >= maxRepeats) exhausted.add(id);
    }
  }
  return [...exhausted];
}
