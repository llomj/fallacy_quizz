import type { Question } from '../types';
import { translateQuestionText, translateOptionText } from './translateQuestion';

export type UiLanguage = 'en' | 'fr';

export function asUiLang(language: string): UiLanguage {
  return language === 'fr' ? 'fr' : 'en';
}

/**
 * Translates a question to the other language in place.
 * 
 * This ensures the user sees the SAME scenario translated, not a different question
 * from the target language bank. Works for all question banks regardless of whether
 * EN and FR share scenarios or have different content.
 */
export function remapQuestionToLanguage(
  q: Question,
  fromLang: UiLanguage,
  toLang: UiLanguage
): Question {
  if (fromLang === toLang) return q;
  
  // Always translate in place - this ensures the same scenario is shown in the target language
  const translatedQuestion = translateQuestionText(q.question, toLang);
  const translatedOptions = q.options.map(opt => translateOptionText(opt, toLang));
  
  // Find the correct option index in translated options
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

export function mapSelectedIndexAfterRemap(
  oldQ: Question,
  newQ: Question,
  selectedIndex: number | null,
  fromLang: UiLanguage,
  toLang: UiLanguage
): number | null {
  if (selectedIndex === null || selectedIndex < 0) return null;
  
  // Translate the selected option and find it in the new options
  const selectedVal = oldQ.options[selectedIndex];
  const translatedSelectedVal = translateOptionText(selectedVal, toLang);
  
  const newIdx = newQ.options.findIndex(o => o === translatedSelectedVal);
  if (newIdx >= 0) return newIdx;
  
  return null;
}
