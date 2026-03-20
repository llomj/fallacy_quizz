import type { Question } from '../types';
import { getQuestionById } from '../questionsBank';

export type UiLanguage = 'en' | 'fr';

export function asUiLang(language: string): UiLanguage {
  return language === 'fr' ? 'fr' : 'en';
}

/**
 * Swaps a shuffled question to the other locale while preserving the same option permutation
 * (so correct index / selected index stay valid after language toggle).
 */
export function remapQuestionToLanguage(
  q: Question,
  fromLang: UiLanguage,
  toLang: UiLanguage
): Question {
  if (fromLang === toLang) return q;
  const sourceCanon = getQuestionById(q.id, fromLang);
  const targetCanon = getQuestionById(q.id, toLang);
  if (!sourceCanon || !targetCanon) return q;

  const newOptions = q.options.map((opt) => {
    const origIdx = sourceCanon.options.findIndex((o) => o === opt);
    if (origIdx < 0) return opt;
    return targetCanon.options[origIdx];
  });

  const correctSourceValue = q.options[q.correct_option_index];
  const origIdxForCorrect = sourceCanon.options.findIndex((o) => o === correctSourceValue);
  const correctTargetValue =
    origIdxForCorrect >= 0
      ? targetCanon.options[origIdxForCorrect]
      : targetCanon.options[targetCanon.correct_option_index];
  const newCorrectIndex = newOptions.findIndex((o) => o === correctTargetValue);

  return {
    ...targetCanon,
    options: newOptions,
    correct_option_index: newCorrectIndex >= 0 ? newCorrectIndex : targetCanon.correct_option_index,
  };
}

export function mapSelectedIndexAfterRemap(
  oldQ: Question,
  newQ: Question,
  selectedIndex: number | null,
  fromLang: UiLanguage,
  toLang: UiLanguage
): number | null {
  if (selectedIndex === null || selectedIndex < 0) return null;
  const sourceCanon = getQuestionById(oldQ.id, fromLang);
  const targetCanon = getQuestionById(oldQ.id, toLang);
  if (!sourceCanon || !targetCanon) return selectedIndex;
  const selectedVal = oldQ.options[selectedIndex];
  const origIdx = sourceCanon.options.findIndex((o) => o === selectedVal);
  if (origIdx < 0) return selectedIndex;
  const newIdx = newQ.options.findIndex((o) => o === targetCanon.options[origIdx]);
  return newIdx >= 0 ? newIdx : selectedIndex;
}
