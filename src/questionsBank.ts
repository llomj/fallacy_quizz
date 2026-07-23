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
import { APPEAL_TO_TRADITION_EXPANSION_EN, APPEAL_TO_TRADITION_EXPANSION_FR } from './data/questions/expansions/appealToTraditionExpansion';
import { ARGUMENT_FROM_NUMBERS_EXPANSION_EN, ARGUMENT_FROM_NUMBERS_EXPANSION_FR } from './data/questions/expansions/argumentFromNumbersExpansion';
import { AVAILABILITY_HEURISTIC_EXPANSION_EN, AVAILABILITY_HEURISTIC_EXPANSION_FR } from './data/questions/expansions/availabilityHeuristicExpansion';
import { BANDWAGON_EXPANSION_EN, BANDWAGON_EXPANSION_FR } from './data/questions/expansions/bandwagonExpansion';
import { BARNUM_EFFECT_EXPANSION_EN, BARNUM_EFFECT_EXPANSION_FR } from './data/questions/expansions/barnumEffectExpansion';
import { BASE_RATE_NEGLECT_EXPANSION_EN, BASE_RATE_NEGLECT_EXPANSION_FR } from './data/questions/expansions/baseRateNeglectExpansion';
import { BEGGING_THE_QUESTION_EXPANSION_EN, BEGGING_THE_QUESTION_EXPANSION_FR } from './data/questions/expansions/beggingQuestionExpansion';
import { BEN_FRANKLIN_EFFECT_EXPANSION_EN, BEN_FRANKLIN_EFFECT_EXPANSION_FR } from './data/questions/expansions/benFranklinEffectExpansion';
import { BIASED_SAMPLE_EXPANSION_EN, BIASED_SAMPLE_EXPANSION_FR } from './data/questions/expansions/biasedSampleExpansion';
import { BRANDOLINIS_LAW_EXPANSION_EN, BRANDOLINIS_LAW_EXPANSION_FR } from './data/questions/expansions/brandolinisLawExpansion';
import { CHOICE_SUPPORTIVE_BIAS_EXPANSION_EN, CHOICE_SUPPORTIVE_BIAS_EXPANSION_FR } from './data/questions/expansions/choiceSupportiveBiasExpansion';
import { CHERRY_PICKING_EXPANSION_EN, CHERRY_PICKING_EXPANSION_FR } from './data/questions/expansions/cherryPickingExpansion';
import { CIRCULAR_REASONING_EXPANSION_EN, CIRCULAR_REASONING_EXPANSION_FR } from './data/questions/expansions/circularReasoningExpansion';
import { CLUSTERING_ILLUSION_EXPANSION_EN, CLUSTERING_ILLUSION_EXPANSION_FR } from './data/questions/expansions/clusteringIllusionExpansion';
import { COMPOSITION_FALLACY_EXPANSION_EN, COMPOSITION_FALLACY_EXPANSION_FR } from './data/questions/expansions/compositionFallacyExpansion';
import { CONFIRMATION_BIAS_EXPANSION_EN, CONFIRMATION_BIAS_EXPANSION_FR } from './data/questions/expansions/confirmationBiasExpansion';
import { CONSISTENCY_BIAS_EXPANSION_EN, CONSISTENCY_BIAS_EXPANSION_FR } from './data/questions/expansions/consistencyBiasExpansion';
import { CONTINUUM_FALLACY_EXPANSION_EN, CONTINUUM_FALLACY_EXPANSION_FR } from './data/questions/expansions/continuumFallacyExpansion';
import { CORRELATION_EQUALS_CAUSATION_EXPANSION_EN, CORRELATION_EQUALS_CAUSATION_EXPANSION_FR } from './data/questions/expansions/correlationEqualsCausationExpansion';
import { CRYPTOMNESIA_EXPANSION_EN, CRYPTOMNESIA_EXPANSION_FR } from './data/questions/expansions/cryptomnesiaExpansion';
import { CUM_HOC_EXPANSION_EN, CUM_HOC_EXPANSION_FR } from './data/questions/expansions/cumHocExpansion';
import { DATA_DREDGING_EXPANSION_EN, DATA_DREDGING_EXPANSION_FR } from './data/questions/expansions/dataDredgingExpansion';
import { DENYING_THE_ANTECEDENT_EXPANSION_EN, DENYING_THE_ANTECEDENT_EXPANSION_FR } from './data/questions/expansions/denyingAntecedentExpansion';
import { EQUIVOCATION_EXPANSION_EN, EQUIVOCATION_EXPANSION_FR } from './data/questions/expansions/equivocationExpansion';
import { ETYMOLOGICAL_FALLACY_EXPANSION_EN, ETYMOLOGICAL_FALLACY_EXPANSION_FR } from './data/questions/expansions/etymologicalFallacyExpansion';
import { EXCLUSIVE_PREMISES_EXPANSION_EN, EXCLUSIVE_PREMISES_EXPANSION_FR } from './data/questions/expansions/exclusivePremisesExpansion';
import { EXISTENTIAL_FALLACY_EXPANSION_EN, EXISTENTIAL_FALLACY_EXPANSION_FR } from './data/questions/expansions/existentialFallacyExpansion';
import { FALSE_ATTRIBUTION_EXPANSION_EN, FALSE_ATTRIBUTION_EXPANSION_FR } from './data/questions/expansions/falseAttributionExpansion';
import { FALSE_BALANCE_EXPANSION_EN, FALSE_BALANCE_EXPANSION_FR } from './data/questions/expansions/falseBalanceExpansion';
import { FALSE_CONSENSUS_EFFECT_EXPANSION_EN, FALSE_CONSENSUS_EFFECT_EXPANSION_FR } from './data/questions/expansions/falseConsensusEffectExpansion';
import { FALSE_DILEMMA_EXPANSION_EN, FALSE_DILEMMA_EXPANSION_FR } from './data/questions/expansions/falseDilemmaExpansion';
import { FALSE_EQUIVALENCE_EXPANSION_EN, FALSE_EQUIVALENCE_EXPANSION_FR } from './data/questions/expansions/falseEquivalenceExpansion';
import { FALSE_MEMORIES_EXPANSION_EN, FALSE_MEMORIES_EXPANSION_FR } from './data/questions/expansions/falseMemoriesExpansion';
import { FAULTY_GENERALIZATION_EXPANSION_EN, FAULTY_GENERALIZATION_EXPANSION_FR } from './data/questions/expansions/faultyGeneralizationExpansion';
import { FOCUSING_ILLUSION_EXPANSION_EN, FOCUSING_ILLUSION_EXPANSION_FR } from './data/questions/expansions/focusingIllusionExpansion';
import { FOUR_TERM_FALLACY_EXPANSION_EN, FOUR_TERM_FALLACY_EXPANSION_FR } from './data/questions/expansions/fourTermFallacyExpansion';

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
  [...FALLACY_QUESTIONS_EN, ...AD_HOMINEM_EXPANSION_EN, ...AFFIRMATIVE_FROM_NEGATIVE_EXPANSION_EN, ...AFFIRMING_CONSEQUENT_EXPANSION_EN, ...AMPHIBOLY_EXPANSION_EN, ...ANCHORING_BIAS_EXPANSION_EN, ...ANECDOTAL_FALLACY_EXPANSION_EN, ...APOPHENIA_EXPANSION_EN, ...APPEAL_TO_AUTHORITY_EXPANSION_EN, ...APPEAL_TO_EMOTION_EXPANSION_EN, ...APPEAL_TO_FEAR_EXPANSION_EN, ...APPEAL_TO_IGNORANCE_EXPANSION_EN, ...APPEAL_TO_INCREDULITY_EXPANSION_EN, ...APPEAL_TO_NATURE_EXPANSION_EN, ...APPEAL_TO_NOVELTY_EXPANSION_EN, ...APPEAL_TO_POPULARITY_EXPANSION_EN, ...APPEAL_TO_TRADITION_EXPANSION_EN, ...ARGUMENT_FROM_NUMBERS_EXPANSION_EN, ...AVAILABILITY_HEURISTIC_EXPANSION_EN, ...BANDWAGON_EXPANSION_EN, ...BARNUM_EFFECT_EXPANSION_EN, ...BASE_RATE_NEGLECT_EXPANSION_EN, ...BEGGING_THE_QUESTION_EXPANSION_EN, ...BEN_FRANKLIN_EFFECT_EXPANSION_EN, ...BIASED_SAMPLE_EXPANSION_EN, ...BRANDOLINIS_LAW_EXPANSION_EN, ...CHERRY_PICKING_EXPANSION_EN, ...CHOICE_SUPPORTIVE_BIAS_EXPANSION_EN, ...CIRCULAR_REASONING_EXPANSION_EN, ...CLUSTERING_ILLUSION_EXPANSION_EN, ...COMPOSITION_FALLACY_EXPANSION_EN, ...CONFIRMATION_BIAS_EXPANSION_EN, ...CONSISTENCY_BIAS_EXPANSION_EN, ...CONTINUUM_FALLACY_EXPANSION_EN, ...CORRELATION_EQUALS_CAUSATION_EXPANSION_EN, ...CRYPTOMNESIA_EXPANSION_EN, ...CUM_HOC_EXPANSION_EN, ...DATA_DREDGING_EXPANSION_EN, ...DENYING_THE_ANTECEDENT_EXPANSION_EN, ...EQUIVOCATION_EXPANSION_EN, ...ETYMOLOGICAL_FALLACY_EXPANSION_EN, ...EXCLUSIVE_PREMISES_EXPANSION_EN, ...EXISTENTIAL_FALLACY_EXPANSION_EN, ...FALSE_ATTRIBUTION_EXPANSION_EN, ...FALSE_BALANCE_EXPANSION_EN, ...FALSE_CONSENSUS_EFFECT_EXPANSION_EN, ...FALSE_DILEMMA_EXPANSION_EN, ...FALSE_EQUIVALENCE_EXPANSION_EN, ...FALSE_MEMORIES_EXPANSION_EN, ...FAULTY_GENERALIZATION_EXPANSION_EN, ...FOCUSING_ILLUSION_EXPANSION_EN, ...FOUR_TERM_FALLACY_EXPANSION_EN],
  LEVEL_0_GEN_EN
);
export const QUESTIONS_BANK_FR: Question[] = createQuestionBank(
  [...FALLACY_QUESTIONS_FR, ...AD_HOMINEM_EXPANSION_FR, ...AFFIRMATIVE_FROM_NEGATIVE_EXPANSION_FR, ...AFFIRMING_CONSEQUENT_EXPANSION_FR, ...AMPHIBOLY_EXPANSION_FR, ...ANCHORING_BIAS_EXPANSION_FR, ...ANECDOTAL_FALLACY_EXPANSION_FR, ...APOPHENIA_EXPANSION_FR, ...APPEAL_TO_AUTHORITY_EXPANSION_FR, ...APPEAL_TO_EMOTION_EXPANSION_FR, ...APPEAL_TO_FEAR_EXPANSION_FR, ...APPEAL_TO_IGNORANCE_EXPANSION_FR, ...APPEAL_TO_INCREDULITY_EXPANSION_FR, ...APPEAL_TO_NATURE_EXPANSION_FR, ...APPEAL_TO_NOVELTY_EXPANSION_FR, ...APPEAL_TO_POPULARITY_EXPANSION_FR, ...APPEAL_TO_TRADITION_EXPANSION_FR, ...ARGUMENT_FROM_NUMBERS_EXPANSION_FR, ...AVAILABILITY_HEURISTIC_EXPANSION_FR, ...BANDWAGON_EXPANSION_FR, ...BARNUM_EFFECT_EXPANSION_FR, ...BASE_RATE_NEGLECT_EXPANSION_FR, ...BEGGING_THE_QUESTION_EXPANSION_FR, ...BEN_FRANKLIN_EFFECT_EXPANSION_FR, ...BIASED_SAMPLE_EXPANSION_FR, ...BRANDOLINIS_LAW_EXPANSION_FR, ...CHERRY_PICKING_EXPANSION_FR, ...CHOICE_SUPPORTIVE_BIAS_EXPANSION_FR, ...CIRCULAR_REASONING_EXPANSION_FR, ...CLUSTERING_ILLUSION_EXPANSION_FR, ...COMPOSITION_FALLACY_EXPANSION_FR, ...CONFIRMATION_BIAS_EXPANSION_FR, ...CONSISTENCY_BIAS_EXPANSION_FR, ...CONTINUUM_FALLACY_EXPANSION_FR, ...CORRELATION_EQUALS_CAUSATION_EXPANSION_FR, ...CRYPTOMNESIA_EXPANSION_FR, ...CUM_HOC_EXPANSION_FR, ...DATA_DREDGING_EXPANSION_FR, ...DENYING_THE_ANTECEDENT_EXPANSION_FR, ...EQUIVOCATION_EXPANSION_FR, ...ETYMOLOGICAL_FALLACY_EXPANSION_FR, ...EXCLUSIVE_PREMISES_EXPANSION_FR, ...EXISTENTIAL_FALLACY_EXPANSION_FR, ...FALSE_ATTRIBUTION_EXPANSION_FR, ...FALSE_BALANCE_EXPANSION_FR, ...FALSE_CONSENSUS_EFFECT_EXPANSION_FR, ...FALSE_DILEMMA_EXPANSION_FR, ...FALSE_EQUIVALENCE_EXPANSION_FR, ...FALSE_MEMORIES_EXPANSION_FR, ...FAULTY_GENERALIZATION_EXPANSION_FR, ...FOCUSING_ILLUSION_EXPANSION_FR, ...FOUR_TERM_FALLACY_EXPANSION_FR],
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
