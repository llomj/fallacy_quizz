import type { Question } from './types';
import { FALLACY_QUESTIONS_EN, FALLACY_QUESTIONS_FR } from './data/questions/fallaciesData';
import { LEVEL_0_GEN_EN, LEVEL_0_GEN_FR } from './data/questions/level0Data';

// Level 0 owns IDs 1001–1300. Filter out any overlapping legacy entries from
// fallaciesData so every question ID resolves to exactly one canonical record.
const FALLACY_GAME_IDS_ONLY_EN = FALLACY_QUESTIONS_EN.filter((q) => q.id < 1000);
const FALLACY_GAME_IDS_ONLY_FR = FALLACY_QUESTIONS_FR.filter((q) => q.id < 1000);

export const QUESTIONS_BANK_EN: Question[] = [...FALLACY_GAME_IDS_ONLY_EN, ...LEVEL_0_GEN_EN];
export const QUESTIONS_BANK_FR: Question[] = [...FALLACY_GAME_IDS_ONLY_FR, ...LEVEL_0_GEN_FR];

export const QUESTIONS_BANK: Question[] = QUESTIONS_BANK_EN; // Default fallback

/** Max question ID (1-based). Must match the highest id in fallaciesData. */
export const MAX_QUESTION_ID = Math.max(...QUESTIONS_BANK_EN.map((q) => q.id));

/** Returns the question bank for the given language (EN or FR). */
export function getQuestionBank(language: string): Question[] {
  return language === 'fr' ? QUESTIONS_BANK_FR : QUESTIONS_BANK_EN;
}

/** Returns a canonical question by id from the EN or FR bank for language remapping. */
export function getQuestionById(id: number, lang: 'en' | 'fr'): Question | undefined {
  const bank = lang === 'fr' ? QUESTIONS_BANK_FR : QUESTIONS_BANK_EN;
  return bank.find((q) => q.id === id);
}
