import type { Question } from '../types';
import { getFallacyOptionFrench } from '../data/fallacyOptionTranslations';
import { getQuestionById } from '../questionsBank';
import { translateQuestionText } from './translateQuestion';

export type UiLanguage = 'en' | 'fr';

export function asUiLang(language: string): UiLanguage {
  return language === 'fr' ? 'fr' : 'en';
}

/**
 * Preserve the exact active scenario when the user switches languages mid-quiz.
 *
 * Reason: the FR bank is not reliably aligned with the EN bank across all levels yet,
 * so remapping by id can jump to a different scenario. For an in-progress batch we keep
 * the same question object and translate it in place. Freshly loaded batches still come
 * from the selected language bank.
 */
export function remapQuestionToLanguage(
  q: Question,
  fromLang: UiLanguage,
  toLang: UiLanguage
): Question {
  if (fromLang === toLang) return q;

  if (toLang === 'fr') {
    return {
      ...q,
      question: translateQuestionText(q.question, 'fr'),
      options: q.options.map((option) => getFallacyOptionFrench(option)),
    };
  }

  const targetQuestion = getQuestionById(q.id, 'en');
  return targetQuestion ? { ...targetQuestion } : q;
}

export function mapSelectedIndexAfterRemap(
  oldQ: Question,
  newQ: Question,
  selectedIndex: number | null,
  fromLang: UiLanguage,
  toLang: UiLanguage
): number | null {
  if (selectedIndex === null || selectedIndex < 0) return null;

  // In-place translation preserves option order, so the selected answer can stay put.
  if (oldQ.id === newQ.id && oldQ.options.length === newQ.options.length) {
    return selectedIndex;
  }

  return null;
}
