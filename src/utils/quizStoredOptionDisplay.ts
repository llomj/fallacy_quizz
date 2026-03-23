import type { Question } from '../types';
import { getQuestionById } from '../questionsBank';
import { translateOptionText } from './translateQuestion';

/**
 * Show a stored quiz answer label in the current UI language.
 * History attempts store the option string from the session (possibly shuffled order);
 * we resolve the canonical slot via EN/FR banks so French mode shows French fallacy names.
 */
export function displayStoredQuizOptionLabel(
  language: string,
  questionId: number,
  storedLabel: string,
  translatedOptions: string[],
  bankQuestion: Question
): string {
  const direct = bankQuestion.options.indexOf(storedLabel);
  if (direct >= 0 && translatedOptions[direct] !== undefined) {
    return translatedOptions[direct];
  }
  const en = getQuestionById(questionId, 'en');
  const fromEn = en?.options.indexOf(storedLabel) ?? -1;
  if (fromEn >= 0 && translatedOptions[fromEn] !== undefined) {
    return translatedOptions[fromEn];
  }
  const fr = getQuestionById(questionId, 'fr');
  const fromFr = fr?.options.indexOf(storedLabel) ?? -1;
  if (fromFr >= 0 && translatedOptions[fromFr] !== undefined) {
    return translatedOptions[fromFr];
  }
  return language === 'fr' ? translateOptionText(storedLabel, 'fr') : storedLabel;
}
