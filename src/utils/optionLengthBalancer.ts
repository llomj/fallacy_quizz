/**
 * Options are shown exactly as stored in the question bank.
 * (Previously, wrong answers could get parenthetical length-padding suffixes
 * to reduce “longest option is correct” bias; that was removed as noisy in the UI.)
 */
export const balanceDisplayedOptionLengths = (
  options: string[],
  _correctIndex: number,
  _questionId: number,
  _language: string,
  _questionFormat?: string
): string[] => options;
