import type { Question } from '../types';
import { getQuestionById } from '../questionsBank';
import { translateQuestionText, translateOptionText } from './translateQuestion';

export type UiLanguage = 'en' | 'fr';

export function asUiLang(language: string): UiLanguage {
  return language === 'fr' ? 'fr' : 'en';
}

/**
 * Swaps a shuffled question to the other locale.
 * 
 * For question banks where EN and FR share the same scenarios (e.g. Level 0 / IDs 1001–1300),
 * the option texts are actual translations, so we can remap them positionally and keep the
 * shuffled order intact.
 * 
 * For independent question banks (e.g. Levels 1–10 / IDs 1–900) where the EN and FR entries 
 * are completely different questions, we TRANSLATE the current question in place rather 
 * than swapping to a different French question. This ensures the user sees the same scenario
 * translated, not a different question from the FR bank.
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

  // Check if the shuffled options can actually be found in the source canon.
  // If none of them match, the two banks have independent content (not translations)
  // and we should translate in place instead of swapping to target question.
  const matchCount = q.options.filter(
    (opt) => sourceCanon.options.findIndex((o) => o === opt) >= 0
  ).length;

  if (matchCount === 0) {
    // Independent question banks – translate the current question IN PLACE
    // so user sees the same scenario translated, not a different question.
    const translatedQuestion = translateQuestionText(q.question, toLang);
    const translatedOptions = q.options.map(opt => translateOptionText(opt, toLang));
    
    // Find the correct option index in translated options (by finding matching translated text)
    let newCorrectIndex = q.correct_option_index;
    const originalCorrectValue = q.options[q.correct_option_index];
    const translatedCorrectValue = translateOptionText(originalCorrectValue, toLang);
    const foundIndex = translatedOptions.findIndex(o => o === translatedCorrectValue);
    if (foundIndex >= 0) newCorrectIndex = foundIndex;

    return {
      ...q,
      question: translatedQuestion,
      options: translatedOptions,
      correct_option_index: newCorrectIndex,
    };
  }

  // Translation banks – preserve the shuffled permutation.
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
  
  const selectedVal = oldQ.options[selectedIndex];
  const translatedSelectedVal = translateOptionText(selectedVal, toLang);
  
  // For in-place translation, find the translated selected option in the new options
  const newIdx = newQ.options.findIndex(o => o === translatedSelectedVal);
  if (newIdx >= 0) return newIdx;
  
  // Fallback: try the canonical lookup
  const sourceCanon = getQuestionById(oldQ.id, fromLang);
  const targetCanon = getQuestionById(oldQ.id, toLang);
  if (!sourceCanon || !targetCanon) return selectedIndex;
  
  const origIdx = sourceCanon.options.findIndex((o) => o === selectedVal);
  if (origIdx < 0) return null; // independent banks – can't map the selection; clear it
  const mappedIdx = newQ.options.findIndex((o) => o === targetCanon.options[origIdx]);
  return mappedIdx >= 0 ? mappedIdx : selectedIndex;
}
