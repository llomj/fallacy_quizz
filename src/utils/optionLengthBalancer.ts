const EN_SUFFIXES = [
  ' (common in everyday arguments)',
  ' (seen in real discussions)',
  ' (frequent in everyday reasoning)',
  ' (typical in debate examples)',
];

const FR_SUFFIXES = [
  ' (courant dans les arguments du quotidien)',
  ' (vu dans les discussions reelles)',
  ' (frequent dans le raisonnement de tous les jours)',
  ' (typique dans les exemples de debat)',
];

const normalizeLength = (value: string): number => value.replace(/\s+/g, ' ').trim().length;

const isUnsafeOption = (value: string): boolean => {
  const text = value.trim();
  return text.includes('\n') || /\t/.test(text) || /^`[^`]+`$/.test(text);
};

/**
 * Breaks the "correct option is always longest" pattern in the rendered UI
 * without touching source question content. Index ordering and correctness stay unchanged.
 */
export const balanceDisplayedOptionLengths = (
  options: string[],
  correctIndex: number,
  questionId: number,
  language: string,
  questionFormat?: string
): string[] => {
  if (!Array.isArray(options) || options.length < 2) return options;
  if (questionFormat && questionFormat !== 'standard') return options;
  if (options.some(isUnsafeOption)) return options;
  if (correctIndex < 0 || correctIndex >= options.length) return options;

  const lengths = options.map(normalizeLength);
  const correctLength = lengths[correctIndex];
  const maxLength = Math.max(...lengths);
  const maxCount = lengths.filter((len) => len === maxLength).length;

  if (correctLength !== maxLength || maxCount !== 1) {
    return options;
  }

  const candidateIndexes = lengths
    .map((len, idx) => ({ len, idx }))
    .filter(({ idx }) => idx !== correctIndex)
    .sort((a, b) => b.len - a.len);

  if (candidateIndexes.length === 0) return options;

  const updated = [...options];
  const targetIndex = candidateIndexes[0].idx;
  let value = updated[targetIndex].trimEnd();
  const suffixes = language === 'fr' ? FR_SUFFIXES : EN_SUFFIXES;
  let cursor = (questionId + targetIndex) % suffixes.length;
  let guard = 0;

  while (normalizeLength(value) < correctLength && guard < suffixes.length * 2) {
    const suffix = suffixes[cursor % suffixes.length];
    if (!value.endsWith(suffix)) {
      value += suffix;
    }
    cursor += 1;
    guard += 1;
  }

  updated[targetIndex] = value;
  return updated;
};
