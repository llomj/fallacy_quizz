import type { Question } from '../types';
import { getQuestionById } from '../questionsBank';

export type UiLanguage = 'en' | 'fr';

export function asUiLang(language: string): UiLanguage {
  return language === 'fr' ? 'fr' : 'en';
}

/**
 * Gets the French version of a question from the FR question bank.
 * This ensures the user sees the proper French translation of the same scenario,
 * not a machine-translated version.
 */
export function remapQuestionToLanguage(
  q: Question,
  fromLang: UiLanguage,
  toLang: UiLanguage
): Question {
  if (fromLang === toLang) return q;
  
  // Get the question with the same ID from the target language bank
  const targetQuestion = getQuestionById(q.id, toLang);
  if (!targetQuestion) return q;
  
  return { ...targetQuestion };
}

export function mapSelectedIndexAfterRemap(
  oldQ: Question,
  newQ: Question,
  selectedIndex: number | null,
  fromLang: UiLanguage,
  toLang: UiLanguage
): number | null {
  if (selectedIndex === null || selectedIndex < 0) return null;
  
  // The FR bank has different options, so we can't map the selection
  // Reset answered state instead (handled by caller)
  return null;
}
