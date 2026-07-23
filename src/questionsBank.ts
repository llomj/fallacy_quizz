import type { Question } from './types';
import { FALLACY_QUESTIONS_EN, FALLACY_QUESTIONS_FR } from './data/questions/fallaciesData';
import { LEVEL_0_GEN_EN, LEVEL_0_GEN_FR } from './data/questions/level0Data';
import { AD_HOMINEM_EXPANSION_EN, AD_HOMINEM_EXPANSION_FR } from './data/questions/expansions/adHominemExpansion';
import { AFFIRMATIVE_FROM_NEGATIVE_EXPANSION_EN, AFFIRMATIVE_FROM_NEGATIVE_EXPANSION_FR } from './data/questions/expansions/affirmativeConclusionFromNegativePremisesExpansion';
import { AFFIRMING_CONSEQUENT_EXPANSION_EN, AFFIRMING_CONSEQUENT_EXPANSION_FR } from './data/questions/expansions/affirmingConsequentExpansion';
import { AMPHIBOLY_EXPANSION_EN, AMPHIBOLY_EXPANSION_FR } from './data/questions/expansions/amphibolyExpansion';
import { ANCHORING_BIAS_EXPANSION_EN, ANCHORING_BIAS_EXPANSION_FR } from './data/questions/expansions/anchoringBiasExpansion';
import { ANECDOTAL_FALLACY_EXPANSION_EN, ANECDOTAL_FALLACY_EXPANSION_FR } from './data/questions/expansions/anecdotalFallacyExpansion';
import { APOPHENIA_EXPANSION_EN, APOPHENIA_EXPANSION_FR } from './data/questions/expansions/apopheniaExpansion';
import { APPEAL_TO_AUTHORITY_EXPANSION_EN, APPEAL_TO_AUTHORITY_EXPANSION_FR } from './data/questions/expansions/appealToAuthorityExpansion';
import { APPEAL_TO_EMOTION_EXPANSION_EN, APPEAL_TO_EMOTION_EXPANSION_FR } from './data/questions/expansions/appealToEmotionExpansion';
import { APPEAL_TO_FEAR_EXPANSION_EN, APPEAL_TO_FEAR_EXPANSION_FR } from './data/questions/expansions/appealToFearExpansion';
import { APPEAL_TO_IGNORANCE_EXPANSION_EN, APPEAL_TO_IGNORANCE_EXPANSION_FR } from './data/questions/expansions/appealToIgnoranceExpansion';
import { APPEAL_TO_INCREDULITY_EXPANSION_EN, APPEAL_TO_INCREDULITY_EXPANSION_FR } from './data/questions/expansions/appealToIncredulityExpansion';
import { APPEAL_TO_NATURE_EXPANSION_EN, APPEAL_TO_NATURE_EXPANSION_FR } from './data/questions/expansions/appealToNatureExpansion';
import { APPEAL_TO_NOVELTY_EXPANSION_EN, APPEAL_TO_NOVELTY_EXPANSION_FR } from './data/questions/expansions/appealToNoveltyExpansion';
import { APPEAL_TO_POPULARITY_EXPANSION_EN, APPEAL_TO_POPULARITY_EXPANSION_FR } from './data/questions/expansions/appealToPopularityExpansion';

const LEVEL_0_ID_START = 1001;
const LEVEL_0_ID_END = 1300;
const FALLACY_COLLISION_OFFSET = 20000;

/**
 * Level 0 permanently owns IDs 1001-1300. Earlier expansion work reused 298
 * of those IDs, so remap only that collision range while preserving every
 * generated question and keeping the same deterministic IDs in EN and FR.
 */
function remapFallacyIdCollisions(questions: Question[]): Question[] {
  // Some legacy generated arrays contain sparse slots. flatMap skips those
  // slots instead of turning them into undefined values during bank assembly.
  return questions.flatMap((question) => {
    if (!question) return [];

    if (question.id < LEVEL_0_ID_START || question.id > LEVEL_0_ID_END) {
      return [question];
    }

    return [{
      ...question,
      id: question.id + FALLACY_COLLISION_OFFSET,
    }];
  });
}

function createQuestionBank(fallacies: Question[], foundations: Question[]): Question[] {
  const bank = [...remapFallacyIdCollisions(fallacies), ...foundations];
  const seenIds = new Set<number>();

  for (const question of bank) {
    if (seenIds.has(question.id)) {
      throw new Error(`Duplicate question ID in assembled bank: ${question.id}`);
    }
    if (
      question.options.length < 2 ||
      question.correct_option_index < 0 ||
      question.correct_option_index >= question.options.length
    ) {
      throw new Error(`Invalid answer configuration for question ID ${question.id}`);
    }
    seenIds.add(question.id);
  }

  return bank;
}

export const QUESTIONS_BANK_EN: Question[] = createQuestionBank(
  [...FALLACY_QUESTIONS_EN, ...AD_HOMINEM_EXPANSION_EN, ...AFFIRMATIVE_FROM_NEGATIVE_EXPANSION_EN, ...AFFIRMING_CONSEQUENT_EXPANSION_EN, ...AMPHIBOLY_EXPANSION_EN, ...ANCHORING_BIAS_EXPANSION_EN, ...ANECDOTAL_FALLACY_EXPANSION_EN, ...APOPHENIA_EXPANSION_EN, ...APPEAL_TO_AUTHORITY_EXPANSION_EN, ...APPEAL_TO_EMOTION_EXPANSION_EN, ...APPEAL_TO_FEAR_EXPANSION_EN, ...APPEAL_TO_IGNORANCE_EXPANSION_EN, ...APPEAL_TO_INCREDULITY_EXPANSION_EN, ...APPEAL_TO_NATURE_EXPANSION_EN, ...APPEAL_TO_NOVELTY_EXPANSION_EN, ...APPEAL_TO_POPULARITY_EXPANSION_EN],
  LEVEL_0_GEN_EN
);
export const QUESTIONS_BANK_FR: Question[] = createQuestionBank(
  [...FALLACY_QUESTIONS_FR, ...AD_HOMINEM_EXPANSION_FR, ...AFFIRMATIVE_FROM_NEGATIVE_EXPANSION_FR, ...AFFIRMING_CONSEQUENT_EXPANSION_FR, ...AMPHIBOLY_EXPANSION_FR, ...ANCHORING_BIAS_EXPANSION_FR, ...ANECDOTAL_FALLACY_EXPANSION_FR, ...APOPHENIA_EXPANSION_FR, ...APPEAL_TO_AUTHORITY_EXPANSION_FR, ...APPEAL_TO_EMOTION_EXPANSION_FR, ...APPEAL_TO_FEAR_EXPANSION_FR, ...APPEAL_TO_IGNORANCE_EXPANSION_FR, ...APPEAL_TO_INCREDULITY_EXPANSION_FR, ...APPEAL_TO_NATURE_EXPANSION_FR, ...APPEAL_TO_NOVELTY_EXPANSION_FR, ...APPEAL_TO_POPULARITY_EXPANSION_FR],
  LEVEL_0_GEN_FR
);

function assertLanguageBankParity(en: Question[], fr: Question[]): void {
  if (en.length !== fr.length) {
    throw new Error(`EN/FR question-bank length mismatch: ${en.length} vs ${fr.length}`);
  }

  const frById = new Map(fr.map((question) => [question.id, question]));
  for (const question of en) {
    const frenchQuestion = frById.get(question.id);
    if (!frenchQuestion) {
      throw new Error(`Missing French question for ID ${question.id}`);
    }
    if (frenchQuestion.level !== question.level) {
      throw new Error(`EN/FR level mismatch for question ID ${question.id}`);
    }
  }
}

assertLanguageBankParity(QUESTIONS_BANK_EN, QUESTIONS_BANK_FR);

const QUESTION_BANK_IDS = new Set(QUESTIONS_BANK_EN.map((question) => question.id));

/** True when an ID belongs to the assembled fallacy quiz rather than legacy CLI content. */
export function isQuestionBankId(id: number): boolean {
  return QUESTION_BANK_IDS.has(id);
}

export const QUESTIONS_BANK: Question[] = QUESTIONS_BANK_EN;

/** Highest assembled question ID, including remapped expansion records. */
export const MAX_QUESTION_ID = Math.max(...QUESTIONS_BANK_EN.map((question) => question.id));

/** Returns the question bank for the requested language. */
export function getQuestionBank(language: string): Question[] {
  return language === 'fr' ? QUESTIONS_BANK_FR : QUESTIONS_BANK_EN;
}

/** Returns the matching localized question without changing its scenario ID. */
export function getQuestionById(id: number, lang: 'en' | 'fr'): Question | undefined {
  const bank = lang === 'fr' ? QUESTIONS_BANK_FR : QUESTIONS_BANK_EN;
  return bank.find((question) => question.id === id);
}
