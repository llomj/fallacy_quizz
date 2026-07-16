import type { Question } from './types';
import { FALLACY_QUESTIONS_EN, FALLACY_QUESTIONS_FR } from './data/questions/fallaciesData';
import { LEVEL_0_GEN_EN, LEVEL_0_GEN_FR } from './data/questions/level0Data';
import { APPEAL_TO_AUTHORITY_PACK_1_EN, APPEAL_TO_AUTHORITY_PACK_1_FR } from './data/questions/fallacyExpansions/appealToAuthorityPack1';
import { APPEAL_TO_AUTHORITY_PACK_2_EN, APPEAL_TO_AUTHORITY_PACK_2_FR } from './data/questions/fallacyExpansions/appealToAuthorityPack2';
import { APPEAL_TO_AUTHORITY_PACK_3_EN, APPEAL_TO_AUTHORITY_PACK_3_FR } from './data/questions/fallacyExpansions/appealToAuthorityPack3';
import { APPEAL_TO_AUTHORITY_PACK_4_EN, APPEAL_TO_AUTHORITY_PACK_4_FR } from './data/questions/fallacyExpansions/appealToAuthorityPack4';
import { APPEAL_TO_AUTHORITY_PACK_5_EN, APPEAL_TO_AUTHORITY_PACK_5_FR } from './data/questions/fallacyExpansions/appealToAuthorityPack5';
import { APPEAL_TO_IGNORANCE_PACK_1_EN, APPEAL_TO_IGNORANCE_PACK_1_FR } from './data/questions/fallacyExpansions/appealToIgnorancePack1';
import { APPEAL_TO_IGNORANCE_PACK_2_EN, APPEAL_TO_IGNORANCE_PACK_2_FR } from './data/questions/fallacyExpansions/appealToIgnorancePack2';
import { APPEAL_TO_IGNORANCE_PACK_3_EN, APPEAL_TO_IGNORANCE_PACK_3_FR } from './data/questions/fallacyExpansions/appealToIgnorancePack3';
import { LEVEL_1_OVERRIDES_EN, LEVEL_1_OVERRIDES_FR } from './data/questions/level1Overrides';
import { LEVEL_1_EXPANSION_PACK_1_EN, LEVEL_1_EXPANSION_PACK_1_FR } from './data/questions/level1ExpansionPack1';
import { LEVEL_1_EXPANSION_PACK_2_EN, LEVEL_1_EXPANSION_PACK_2_FR } from './data/questions/level1ExpansionPack2';
import { LEVEL_1_EXPANSION_PACK_3_EN, LEVEL_1_EXPANSION_PACK_3_FR } from './data/questions/level1ExpansionPack3';
import { LEVEL_2_OVERRIDES_EN, LEVEL_2_OVERRIDES_FR } from './data/questions/level2Overrides';
import { LEVEL_2_INTERMEDIATE_OVERRIDES_EN, LEVEL_2_INTERMEDIATE_OVERRIDES_FR } from './data/questions/level2IntermediateOverrides';
import { LEVEL_2_EXPERT_OVERRIDES_EN, LEVEL_2_EXPERT_OVERRIDES_FR } from './data/questions/level2ExpertOverrides';
import { LEVEL_3_OVERRIDES_EN, LEVEL_3_OVERRIDES_FR } from './data/questions/level3Overrides';
import { LEVEL_3_INTERMEDIATE_OVERRIDES_EN, LEVEL_3_INTERMEDIATE_OVERRIDES_FR } from './data/questions/level3IntermediateOverrides';
import { LEVEL_3_EXPERT_OVERRIDES_EN, LEVEL_3_EXPERT_OVERRIDES_FR } from './data/questions/level3ExpertOverrides';
import { LEVEL_4_OVERRIDES_EN, LEVEL_4_OVERRIDES_FR } from './data/questions/level4Overrides';
import { LEVEL_4_INTERMEDIATE_OVERRIDES_EN, LEVEL_4_INTERMEDIATE_OVERRIDES_FR } from './data/questions/level4IntermediateOverrides';
import { LEVEL_4_EXPERT_OVERRIDES_EN, LEVEL_4_EXPERT_OVERRIDES_FR } from './data/questions/level4ExpertOverrides';
import { LEVEL_5_OVERRIDES_EN, LEVEL_5_OVERRIDES_FR } from './data/questions/level5Overrides';
import { LEVEL_5_INTERMEDIATE_OVERRIDES_EN, LEVEL_5_INTERMEDIATE_OVERRIDES_FR } from './data/questions/level5IntermediateOverrides';
import { LEVEL_5_EXPERT_OVERRIDES_EN, LEVEL_5_EXPERT_OVERRIDES_FR } from './data/questions/level5ExpertOverrides';
import { LEVEL_6_OVERRIDES_EN, LEVEL_6_OVERRIDES_FR } from './data/questions/level6Overrides';
import { LEVEL_6_INTERMEDIATE_OVERRIDES_EN, LEVEL_6_INTERMEDIATE_OVERRIDES_FR } from './data/questions/level6IntermediateOverrides';
import { LEVEL_6_EXPERT_OVERRIDES_EN, LEVEL_6_EXPERT_OVERRIDES_FR } from './data/questions/level6ExpertOverrides';
import { LEVEL_7_OVERRIDES_EN, LEVEL_7_OVERRIDES_FR } from './data/questions/level7Overrides';
import { LEVEL_8_OVERRIDES_EN, LEVEL_8_OVERRIDES_FR } from './data/questions/level8Overrides';
import { LEVEL_8_INTERMEDIATE_OVERRIDES_EN, LEVEL_8_INTERMEDIATE_OVERRIDES_FR } from './data/questions/level8IntermediateOverrides';
import { LEVEL_8_EXPERT_OVERRIDES_EN, LEVEL_8_EXPERT_OVERRIDES_FR } from './data/questions/level8ExpertOverrides';
import { LEVEL_8_EXPERT_PART2_OVERRIDES_EN, LEVEL_8_EXPERT_PART2_OVERRIDES_FR } from './data/questions/level8ExpertPart2Overrides';
import { LEVEL_8_MIXED_OVERRIDES_EN, LEVEL_8_MIXED_OVERRIDES_FR } from './data/questions/level8MixedOverrides';
import { LEVEL_8_MIXED_PART2_OVERRIDES_EN, LEVEL_8_MIXED_PART2_OVERRIDES_FR } from './data/questions/level8MixedPart2Overrides';
import { LEVEL_8_MIXED_PART3_OVERRIDES_EN, LEVEL_8_MIXED_PART3_OVERRIDES_FR } from './data/questions/level8MixedPart3Overrides';
import { LEVEL_8_MIXED_PART4_OVERRIDES_EN, LEVEL_8_MIXED_PART4_OVERRIDES_FR } from './data/questions/level8MixedPart4Overrides';
import { LEVEL_8_MIXED_PART5_OVERRIDES_EN, LEVEL_8_MIXED_PART5_OVERRIDES_FR } from './data/questions/level8MixedPart5Overrides';
import { LEVEL_8_MIXED_PART6_OVERRIDES_EN, LEVEL_8_MIXED_PART6_OVERRIDES_FR } from './data/questions/level8MixedPart6Overrides';
import { LEVEL_8_MIXED_PART7_OVERRIDES_EN, LEVEL_8_MIXED_PART7_OVERRIDES_FR } from './data/questions/level8MixedPart7Overrides';
import { LEVEL_8_MIXED_PART8_OVERRIDES_EN, LEVEL_8_MIXED_PART8_OVERRIDES_FR } from './data/questions/level8MixedPart8Overrides';
import { LEVEL_8_MIXED_PART9_OVERRIDES_EN, LEVEL_8_MIXED_PART9_OVERRIDES_FR } from './data/questions/level8MixedPart9Overrides';
import { LEVEL_8_MIXED_PART10_OVERRIDES_EN, LEVEL_8_MIXED_PART10_OVERRIDES_FR } from './data/questions/level8MixedPart10Overrides';
import { LEVEL_8_MIXED_PART11_OVERRIDES_EN, LEVEL_8_MIXED_PART11_OVERRIDES_FR } from './data/questions/level8MixedPart11Overrides';
import { LEVEL_8_MIXED_PART12_OVERRIDES_EN, LEVEL_8_MIXED_PART12_OVERRIDES_FR } from './data/questions/level8MixedPart12Overrides';
import { LEVEL_8_MIXED_PART13_OVERRIDES_EN, LEVEL_8_MIXED_PART13_OVERRIDES_FR } from './data/questions/level8MixedPart13Overrides';
import { LEVEL_8_MIXED_PART14_OVERRIDES_EN, LEVEL_8_MIXED_PART14_OVERRIDES_FR } from './data/questions/level8MixedPart14Overrides';
import { LEVEL_8_MIXED_PART15_OVERRIDES_EN, LEVEL_8_MIXED_PART15_OVERRIDES_FR } from './data/questions/level8MixedPart15Overrides';
import { LEVEL_8_MIXED_PART16_OVERRIDES_EN, LEVEL_8_MIXED_PART16_OVERRIDES_FR } from './data/questions/level8MixedPart16Overrides';
import { LEVEL_8_MIXED_PART17_OVERRIDES_EN, LEVEL_8_MIXED_PART17_OVERRIDES_FR } from './data/questions/level8MixedPart17Overrides';
import { LEVEL_8_MIXED_PART18_OVERRIDES_EN, LEVEL_8_MIXED_PART18_OVERRIDES_FR } from './data/questions/level8MixedPart18Overrides';
import { LEVEL_8_MIXED_PART19_OVERRIDES_EN, LEVEL_8_MIXED_PART19_OVERRIDES_FR } from './data/questions/level8MixedPart19Overrides';

function mergeQuestionSet(base: Question[], additions: Question[]): Question[] {
  const additionMap = new Map(additions.map((question) => [question.id, question]));
  const merged = base.map((question) => additionMap.get(question.id) ?? question);
  const existingIds = new Set(base.map((question) => question.id));
  const appended = additions.filter((question) => !existingIds.has(question.id));
  return [...merged, ...appended];
}

function applyAllQuestionOverrides(base: Question[], overrideSets: Question[][]): Question[] {
  return overrideSets.reduce((questions, overrides) => mergeQuestionSet(questions, overrides), base);
}

// Level 0 owns IDs 1001–1300. Exclude only that window from fallaciesData so
// expanded fallacy packs can safely use IDs above 1300 without being dropped.
const FALLACY_GAME_IDS_ONLY_EN = applyAllQuestionOverrides(
  FALLACY_QUESTIONS_EN.filter((q) => q.id < 1001 || q.id > 1300),
  [
    APPEAL_TO_AUTHORITY_PACK_1_EN,
    APPEAL_TO_AUTHORITY_PACK_2_EN,
    APPEAL_TO_AUTHORITY_PACK_3_EN,
    APPEAL_TO_AUTHORITY_PACK_4_EN,
    APPEAL_TO_AUTHORITY_PACK_5_EN,
    APPEAL_TO_IGNORANCE_PACK_1_EN,
    APPEAL_TO_IGNORANCE_PACK_2_EN,
    APPEAL_TO_IGNORANCE_PACK_3_EN,
    LEVEL_1_OVERRIDES_EN,
    LEVEL_1_EXPANSION_PACK_1_EN,
    LEVEL_1_EXPANSION_PACK_2_EN,
    LEVEL_1_EXPANSION_PACK_3_EN,
    LEVEL_2_OVERRIDES_EN,
    LEVEL_2_INTERMEDIATE_OVERRIDES_EN,
    LEVEL_2_EXPERT_OVERRIDES_EN,
    LEVEL_3_OVERRIDES_EN,
    LEVEL_3_INTERMEDIATE_OVERRIDES_EN,
    LEVEL_3_EXPERT_OVERRIDES_EN,
    LEVEL_4_OVERRIDES_EN,
    LEVEL_4_INTERMEDIATE_OVERRIDES_EN,
    LEVEL_4_EXPERT_OVERRIDES_EN,
    LEVEL_5_OVERRIDES_EN,
    LEVEL_5_INTERMEDIATE_OVERRIDES_EN,
    LEVEL_5_EXPERT_OVERRIDES_EN,
    LEVEL_6_OVERRIDES_EN,
    LEVEL_6_INTERMEDIATE_OVERRIDES_EN,
    LEVEL_6_EXPERT_OVERRIDES_EN,
    LEVEL_7_OVERRIDES_EN,
    LEVEL_8_OVERRIDES_EN,
    LEVEL_8_INTERMEDIATE_OVERRIDES_EN,
    LEVEL_8_EXPERT_OVERRIDES_EN,
    LEVEL_8_EXPERT_PART2_OVERRIDES_EN,
    LEVEL_8_MIXED_OVERRIDES_EN,
    LEVEL_8_MIXED_PART2_OVERRIDES_EN,
    LEVEL_8_MIXED_PART3_OVERRIDES_EN,
    LEVEL_8_MIXED_PART4_OVERRIDES_EN,
    LEVEL_8_MIXED_PART5_OVERRIDES_EN,
    LEVEL_8_MIXED_PART6_OVERRIDES_EN,
    LEVEL_8_MIXED_PART7_OVERRIDES_EN,
    LEVEL_8_MIXED_PART8_OVERRIDES_EN,
    LEVEL_8_MIXED_PART9_OVERRIDES_EN,
    LEVEL_8_MIXED_PART10_OVERRIDES_EN,
    LEVEL_8_MIXED_PART11_OVERRIDES_EN,
    LEVEL_8_MIXED_PART12_OVERRIDES_EN,
    LEVEL_8_MIXED_PART13_OVERRIDES_EN,
    LEVEL_8_MIXED_PART14_OVERRIDES_EN,
    LEVEL_8_MIXED_PART15_OVERRIDES_EN,
    LEVEL_8_MIXED_PART16_OVERRIDES_EN,
    LEVEL_8_MIXED_PART17_OVERRIDES_EN,
    LEVEL_8_MIXED_PART18_OVERRIDES_EN,
    LEVEL_8_MIXED_PART19_OVERRIDES_EN,
  ]
);
const FALLACY_GAME_IDS_ONLY_FR = applyAllQuestionOverrides(
  FALLACY_QUESTIONS_FR.filter((q) => q.id < 1001 || q.id > 1300),
  [
    APPEAL_TO_AUTHORITY_PACK_1_FR,
    APPEAL_TO_AUTHORITY_PACK_2_FR,
    APPEAL_TO_AUTHORITY_PACK_3_FR,
    APPEAL_TO_AUTHORITY_PACK_4_FR,
    APPEAL_TO_AUTHORITY_PACK_5_FR,
    APPEAL_TO_IGNORANCE_PACK_1_FR,
    APPEAL_TO_IGNORANCE_PACK_2_FR,
    APPEAL_TO_IGNORANCE_PACK_3_FR,
    LEVEL_1_OVERRIDES_FR,
    LEVEL_1_EXPANSION_PACK_1_FR,
    LEVEL_1_EXPANSION_PACK_2_FR,
    LEVEL_1_EXPANSION_PACK_3_FR,
    LEVEL_2_OVERRIDES_FR,
    LEVEL_2_INTERMEDIATE_OVERRIDES_FR,
    LEVEL_2_EXPERT_OVERRIDES_FR,
    LEVEL_3_OVERRIDES_FR,
    LEVEL_3_INTERMEDIATE_OVERRIDES_FR,
    LEVEL_3_EXPERT_OVERRIDES_FR,
    LEVEL_4_OVERRIDES_FR,
    LEVEL_4_INTERMEDIATE_OVERRIDES_FR,
    LEVEL_4_EXPERT_OVERRIDES_FR,
    LEVEL_5_OVERRIDES_FR,
    LEVEL_5_INTERMEDIATE_OVERRIDES_FR,
    LEVEL_5_EXPERT_OVERRIDES_FR,
    LEVEL_6_OVERRIDES_FR,
    LEVEL_6_INTERMEDIATE_OVERRIDES_FR,
    LEVEL_6_EXPERT_OVERRIDES_FR,
    LEVEL_7_OVERRIDES_FR,
    LEVEL_8_OVERRIDES_FR,
    LEVEL_8_INTERMEDIATE_OVERRIDES_FR,
    LEVEL_8_EXPERT_OVERRIDES_FR,
    LEVEL_8_EXPERT_PART2_OVERRIDES_FR,
    LEVEL_8_MIXED_OVERRIDES_FR,
    LEVEL_8_MIXED_PART2_OVERRIDES_FR,
    LEVEL_8_MIXED_PART3_OVERRIDES_FR,
    LEVEL_8_MIXED_PART4_OVERRIDES_FR,
    LEVEL_8_MIXED_PART5_OVERRIDES_FR,
    LEVEL_8_MIXED_PART6_OVERRIDES_FR,
    LEVEL_8_MIXED_PART7_OVERRIDES_FR,
    LEVEL_8_MIXED_PART8_OVERRIDES_FR,
    LEVEL_8_MIXED_PART9_OVERRIDES_FR,
    LEVEL_8_MIXED_PART10_OVERRIDES_FR,
    LEVEL_8_MIXED_PART11_OVERRIDES_FR,
    LEVEL_8_MIXED_PART12_OVERRIDES_FR,
    LEVEL_8_MIXED_PART13_OVERRIDES_FR,
    LEVEL_8_MIXED_PART14_OVERRIDES_FR,
    LEVEL_8_MIXED_PART15_OVERRIDES_FR,
    LEVEL_8_MIXED_PART16_OVERRIDES_FR,
    LEVEL_8_MIXED_PART17_OVERRIDES_FR,
    LEVEL_8_MIXED_PART18_OVERRIDES_FR,
    LEVEL_8_MIXED_PART19_OVERRIDES_FR,
  ]
);

export const QUESTIONS_BANK_EN: Question[] = [...FALLACY_GAME_IDS_ONLY_EN, ...LEVEL_0_GEN_EN];
export const QUESTIONS_BANK_FR: Question[] = [...FALLACY_GAME_IDS_ONLY_FR, ...LEVEL_0_GEN_FR];

export const QUESTIONS_BANK: Question[] = QUESTIONS_BANK_EN; // Default fallback

/** Max question ID (1-based). Must match the highest id in the active English bank. */
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
