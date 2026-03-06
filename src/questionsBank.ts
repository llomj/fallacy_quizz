import type { Question } from './types';
import { FALLACY_QUESTIONS_EN, FALLACY_QUESTIONS_FR } from './data/questions/fallaciesData';

// Logical fallacies question bank.
// Generated from cyberpunk logic JSON data.

export const QUESTIONS_BANK_EN: Question[] = FALLACY_QUESTIONS_EN;
export const QUESTIONS_BANK_FR: Question[] = FALLACY_QUESTIONS_FR;

export const QUESTIONS_BANK: Question[] = QUESTIONS_BANK_EN; // Default fallback

/** Returns the question bank for the given language (EN or FR). */
export function getQuestionBank(language: string): Question[] {
  return language === 'fr' ? QUESTIONS_BANK_FR : QUESTIONS_BANK_EN;
}
