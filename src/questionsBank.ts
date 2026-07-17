import type { Question } from './types';
import { FALLACY_QUESTIONS_EN, FALLACY_QUESTIONS_FR } from './data/questions/fallaciesData';
import { LEVEL_0_GEN_EN, LEVEL_0_GEN_FR } from './data/questions/level0Data';
import { APPEAL_TO_AUTHORITY_PACK_1_EN, APPEAL_TO_AUTHORITY_PACK_1_FR } from './data/questions/fallacyExpansions/appealToAuthorityPack1';
import { APPEAL_TO_AUTHORITY_PACK_2_EN, APPEAL_TO_AUTHORITY_PACK_2_FR } from './data/questions/fallacyExpansions/appealToAuthorityPack2';
import { APPEAL_TO_AUTHORITY_PACK_3_EN, APPEAL_TO_AUTHORITY_PACK_3_FR } from './data/questions/fallacyExpansions/appealToAuthorityPack3';
import { APPEAL_TO_AUTHORITY_PACK_4_EN, APPEAL_TO_AUTHORITY_PACK_4_FR } from './data/questions/fallacyExpansions/appealToAuthorityPack4';
import { APPEAL_TO_AUTHORITY_PACK_5_EN, APPEAL_TO_AUTHORITY_PACK_5_FR } from './data/questions/fallacyExpansions/appealToAuthorityPack5';
import { APPEAL_TO_CONSEQUENCES_PACK_1_EN, APPEAL_TO_CONSEQUENCES_PACK_1_FR } from './data/questions/fallacyExpansions/appealToConsequencesPack1';
import { APPEAL_TO_CONSEQUENCES_PACK_2_EN, APPEAL_TO_CONSEQUENCES_PACK_2_FR } from './data/questions/fallacyExpansions/appealToConsequencesPack2';
import { APPEAL_TO_FORCE_PACK_1_EN, APPEAL_TO_FORCE_PACK_1_FR } from './data/questions/fallacyExpansions/appealToForcePack1';
import { APPEAL_TO_FORCE_PACK_2_EN, APPEAL_TO_FORCE_PACK_2_FR } from './data/questions/fallacyExpansions/appealToForcePack2';
import { APPEAL_TO_IGNORANCE_PACK_1_EN, APPEAL_TO_IGNORANCE_PACK_1_FR } from './data/questions/fallacyExpansions/appealToIgnorancePack1';
import { APPEAL_TO_IGNORANCE_PACK_2_EN, APPEAL_TO_IGNORANCE_PACK_2_FR } from './data/questions/fallacyExpansions/appealToIgnorancePack2';
import { APPEAL_TO_IGNORANCE_PACK_3_EN, APPEAL_TO_IGNORANCE_PACK_3_FR } from './data/questions/fallacyExpansions/appealToIgnorancePack3';
import { APPEAL_TO_IGNORANCE_PACK_4_EN, APPEAL_TO_IGNORANCE_PACK_4_FR } from './data/questions/fallacyExpansions/appealToIgnorancePack4';
import { APPEAL_TO_IGNORANCE_PACK_5_EN, APPEAL_TO_IGNORANCE_PACK_5_FR } from './data/questions/fallacyExpansions/appealToIgnorancePack5';
import { APPEAL_TO_INCREDULITY_PACK_1_EN, APPEAL_TO_INCREDULITY_PACK_1_FR } from './data/questions/fallacyExpansions/appealToIncredulityPack1';
import { APPEAL_TO_INCREDULITY_PACK_2_EN, APPEAL_TO_INCREDULITY_PACK_2_FR } from './data/questions/fallacyExpansions/appealToIncredulityPack2';
import { APPEAL_TO_NATURE_PACK_1_EN, APPEAL_TO_NATURE_PACK_1_FR } from './data/questions/fallacyExpansions/appealToNaturePack1';
import { APPEAL_TO_NATURE_PACK_2_EN, APPEAL_TO_NATURE_PACK_2_FR } from './data/questions/fallacyExpansions/appealToNaturePack2';
import { APPEAL_TO_NOVELTY_PACK_1_EN, APPEAL_TO_NOVELTY_PACK_1_FR } from './data/questions/fallacyExpansions/appealToNoveltyPack1';
import { APPEAL_TO_NOVELTY_PACK_2_EN, APPEAL_TO_NOVELTY_PACK_2_FR } from './data/questions/fallacyExpansions/appealToNoveltyPack2';
import { APPEAL_TO_POPULARITY_PACK_1_EN, APPEAL_TO_POPULARITY_PACK_1_FR } from './data/questions/fallacyExpansions/appealToPopularityPack1';
import { APPEAL_TO_POPULARITY_PACK_2_EN, APPEAL_TO_POPULARITY_PACK_2_FR } from './data/questions/fallacyExpansions/appealToPopularityPack2';
import { EQUIVOCATION_PACK_1_EN, EQUIVOCATION_PACK_1_FR } from './data/questions/fallacyExpansions/equivocationPack1';
import { EQUIVOCATION_PACK_2_EN, EQUIVOCATION_PACK_2_FR } from './data/questions/fallacyExpansions/equivocationPack2';
import { STRAW_MAN_PACK_1_EN, STRAW_MAN_PACK_1_FR } from './data/questions/fallacyExpansions/strawManPack1';
import { STRAW_MAN_PACK_2_EN, STRAW_MAN_PACK_2_FR } from './data/questions/fallacyExpansions/strawManPack2';
import { SLIPPERY_SLOPE_PACK_1_EN, SLIPPERY_SLOPE_PACK_1_FR } from './data/questions/fallacyExpansions/slipperySlopePack1';
import { SLIPPERY_SLOPE_PACK_2_EN, SLIPPERY_SLOPE_PACK_2_FR } from './data/questions/fallacyExpansions/slipperySlopePack2';
import { RED_HERRING_PACK_1_EN, RED_HERRING_PACK_1_FR } from './data/questions/fallacyExpansions/redHerringPack1';
import { RED_HERRING_PACK_2_EN, RED_HERRING_PACK_2_FR } from './data/questions/fallacyExpansions/redHerringPack2';
import { FALSE_DILEMMA_PACK_1_EN, FALSE_DILEMMA_PACK_1_FR } from './data/questions/fallacyExpansions/falseDilemmaPack1';
import { FALSE_DILEMMA_PACK_2_EN, FALSE_DILEMMA_PACK_2_FR } from './data/questions/fallacyExpansions/falseDilemmaPack2';
import { AD_HOMINEM_PACK_1_EN, AD_HOMINEM_PACK_1_FR } from './data/questions/fallacyExpansions/adHominemPack1';
import { AD_HOMINEM_PACK_2_EN, AD_HOMINEM_PACK_2_FR } from './data/questions/fallacyExpansions/adHominemPack2';
import { BANDWAGON_PACK_1_EN, BANDWAGON_PACK_1_FR } from './data/questions/fallacyExpansions/bandwagonPack1';
import { BANDWAGON_PACK_2_EN, BANDWAGON_PACK_2_FR } from './data/questions/fallacyExpansions/bandwagonPack2';
import { APPEAL_TO_EMOTION_PACK_1_EN, APPEAL_TO_EMOTION_PACK_1_FR } from './data/questions/fallacyExpansions/appealToEmotionPack1';
import { APPEAL_TO_EMOTION_PACK_2_EN, APPEAL_TO_EMOTION_PACK_2_FR } from './data/questions/fallacyExpansions/appealToEmotionPack2';
import { APPEAL_TO_FEAR_PACK_1_EN, APPEAL_TO_FEAR_PACK_1_FR } from './data/questions/fallacyExpansions/appealToFearPack1';
import { APPEAL_TO_FEAR_PACK_2_EN, APPEAL_TO_FEAR_PACK_2_FR } from './data/questions/fallacyExpansions/appealToFearPack2';
import { APPEAL_TO_PITY_PACK_1_EN, APPEAL_TO_PITY_PACK_1_FR } from './data/questions/fallacyExpansions/appealToPityPack1';
import { APPEAL_TO_PITY_PACK_2_EN, APPEAL_TO_PITY_PACK_2_FR } from './data/questions/fallacyExpansions/appealToPityPack2';
import { FALSE_CAUSE_PACK_1_EN, FALSE_CAUSE_PACK_1_FR } from './data/questions/fallacyExpansions/falseCausePack1';
import { FALSE_CAUSE_PACK_2_EN, FALSE_CAUSE_PACK_2_FR } from './data/questions/fallacyExpansions/falseCausePack2';
import { APPEAL_TO_TRADITION_PACK_1_EN, APPEAL_TO_TRADITION_PACK_1_FR } from './data/questions/fallacyExpansions/appealToTraditionPack1';
import { APPEAL_TO_TRADITION_PACK_2_EN, APPEAL_TO_TRADITION_PACK_2_FR } from './data/questions/fallacyExpansions/appealToTraditionPack2';
import { WISHFUL_THINKING_PACK_1_EN, WISHFUL_THINKING_PACK_1_FR } from './data/questions/fallacyExpansions/wishfulThinkingPack1';
import { WISHFUL_THINKING_PACK_2_EN, WISHFUL_THINKING_PACK_2_FR } from './data/questions/fallacyExpansions/wishfulThinkingPack2';
import { CONFIRMATION_BIAS_PACK_1_EN, CONFIRMATION_BIAS_PACK_1_FR } from './data/questions/fallacyExpansions/confirmationBiasPack1';
import { CONFIRMATION_BIAS_PACK_2_EN, CONFIRMATION_BIAS_PACK_2_FR } from './data/questions/fallacyExpansions/confirmationBiasPack2';
import { REIFICATION_PACK_1_EN, REIFICATION_PACK_1_FR } from './data/questions/fallacyExpansions/reificationPack1';
import { REIFICATION_PACK_2_EN, REIFICATION_PACK_2_FR } from './data/questions/fallacyExpansions/reificationPack2';
import { ANCHORING_BIAS_PACK_1_EN, ANCHORING_BIAS_PACK_1_FR } from './data/questions/fallacyExpansions/anchoringBiasPack1';
import { ANCHORING_BIAS_PACK_2_EN, ANCHORING_BIAS_PACK_2_FR } from './data/questions/fallacyExpansions/anchoringBiasPack2';
import { SUNK_COST_PACK_1_EN, SUNK_COST_PACK_1_FR } from './data/questions/fallacyExpansions/sunkCostPack1';
import { SUNK_COST_PACK_2_EN, SUNK_COST_PACK_2_FR } from './data/questions/fallacyExpansions/sunkCostPack2';
import { GAMBLERS_FALLACY_PACK_1_EN, GAMBLERS_FALLACY_PACK_1_FR } from './data/questions/fallacyExpansions/gamblersFallacyPack1';
import { GAMBLERS_FALLACY_PACK_2_EN, GAMBLERS_FALLACY_PACK_2_FR } from './data/questions/fallacyExpansions/gamblersFallacyPack2';
import { AVAILABILITY_HEURISTIC_PACK_1_EN, AVAILABILITY_HEURISTIC_PACK_1_FR } from './data/questions/fallacyExpansions/availabilityHeuristicPack1';
import { AVAILABILITY_HEURISTIC_PACK_2_EN, AVAILABILITY_HEURISTIC_PACK_2_FR } from './data/questions/fallacyExpansions/availabilityHeuristicPack2';
import { SURVIVORSHIP_BIAS_PACK_1_EN, SURVIVORSHIP_BIAS_PACK_1_FR } from './data/questions/fallacyExpansions/survivorshipBiasPack1';
import { SURVIVORSHIP_BIAS_PACK_2_EN, SURVIVORSHIP_BIAS_PACK_2_FR } from './data/questions/fallacyExpansions/survivorshipBiasPack2';
import { HALO_EFFECT_PACK_1_EN, HALO_EFFECT_PACK_1_FR } from './data/questions/fallacyExpansions/haloEffectPack1';
import { HALO_EFFECT_PACK_2_EN, HALO_EFFECT_PACK_2_FR } from './data/questions/fallacyExpansions/haloEffectPack2';
import { FRAMING_EFFECT_PACK_1_EN, FRAMING_EFFECT_PACK_1_FR } from './data/questions/fallacyExpansions/framingEffectPack1';
import { FRAMING_EFFECT_PACK_2_EN, FRAMING_EFFECT_PACK_2_FR } from './data/questions/fallacyExpansions/framingEffectPack2';
import { TU_QUOQUE_PACK_1_EN, TU_QUOQUE_PACK_1_FR } from './data/questions/fallacyExpansions/tuQuoquePack1';
import { TU_QUOQUE_PACK_2_EN, TU_QUOQUE_PACK_2_FR } from './data/questions/fallacyExpansions/tuQuoquePack2';
import { DUNNING_KRUGER_PACK_1_EN, DUNNING_KRUGER_PACK_1_FR } from './data/questions/fallacyExpansions/dunningKrugerPack1';
import { DUNNING_KRUGER_PACK_2_EN, DUNNING_KRUGER_PACK_2_FR } from './data/questions/fallacyExpansions/dunningKrugerPack2';
import { HASTY_GENERALIZATION_PACK_1_EN, HASTY_GENERALIZATION_PACK_1_FR } from './data/questions/fallacyExpansions/hastyGeneralizationPack1';
import { HASTY_GENERALIZATION_PACK_2_EN, HASTY_GENERALIZATION_PACK_2_FR } from './data/questions/fallacyExpansions/hastyGeneralizationPack2';
import { FALSE_ANALOGY_PACK_1_EN, FALSE_ANALOGY_PACK_1_FR } from './data/questions/fallacyExpansions/falseAnalogyPack1';
import { FALSE_ANALOGY_PACK_2_EN, FALSE_ANALOGY_PACK_2_FR } from './data/questions/fallacyExpansions/falseAnalogyPack2';
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

// Level 0 owns IDs 1001-1300. Exclude only that window from fallaciesData so
// expanded fallacy packs can safely use IDs above 1300 without being dropped.
const FALLACY_GAME_IDS_ONLY_EN = applyAllQuestionOverrides(
  FALLACY_QUESTIONS_EN.filter((q) => q.id < 1001 || q.id > 1300),
  [
    APPEAL_TO_AUTHORITY_PACK_1_EN,
    APPEAL_TO_AUTHORITY_PACK_2_EN,
    APPEAL_TO_AUTHORITY_PACK_3_EN,
    APPEAL_TO_AUTHORITY_PACK_4_EN,
    APPEAL_TO_AUTHORITY_PACK_5_EN,
    APPEAL_TO_CONSEQUENCES_PACK_1_EN,
    APPEAL_TO_CONSEQUENCES_PACK_2_EN,
    APPEAL_TO_FORCE_PACK_1_EN,
    APPEAL_TO_FORCE_PACK_2_EN,
    APPEAL_TO_IGNORANCE_PACK_1_EN,
    APPEAL_TO_IGNORANCE_PACK_2_EN,
    APPEAL_TO_IGNORANCE_PACK_3_EN,
    APPEAL_TO_IGNORANCE_PACK_4_EN,
    APPEAL_TO_IGNORANCE_PACK_5_EN,
    APPEAL_TO_INCREDULITY_PACK_1_EN,
    APPEAL_TO_INCREDULITY_PACK_2_EN,
    APPEAL_TO_NATURE_PACK_1_EN,
    APPEAL_TO_NATURE_PACK_2_EN,
    APPEAL_TO_NOVELTY_PACK_1_EN,
    APPEAL_TO_NOVELTY_PACK_2_EN,
    APPEAL_TO_POPULARITY_PACK_1_EN,
    APPEAL_TO_POPULARITY_PACK_2_EN,
    EQUIVOCATION_PACK_1_EN,
    EQUIVOCATION_PACK_2_EN,
    STRAW_MAN_PACK_1_EN,
    STRAW_MAN_PACK_2_EN,
    SLIPPERY_SLOPE_PACK_1_EN,
    SLIPPERY_SLOPE_PACK_2_EN,
    RED_HERRING_PACK_1_EN,
    RED_HERRING_PACK_2_EN,
    FALSE_DILEMMA_PACK_1_EN,
    FALSE_DILEMMA_PACK_2_EN,
    AD_HOMINEM_PACK_1_EN,
    AD_HOMINEM_PACK_2_EN,
    BANDWAGON_PACK_1_EN,
    BANDWAGON_PACK_2_EN,
    APPEAL_TO_EMOTION_PACK_1_EN,
    APPEAL_TO_EMOTION_PACK_2_EN,
    APPEAL_TO_FEAR_PACK_1_EN,
    APPEAL_TO_FEAR_PACK_2_EN,
    APPEAL_TO_PITY_PACK_1_EN,
    APPEAL_TO_PITY_PACK_2_EN,
    FALSE_CAUSE_PACK_1_EN,
    FALSE_CAUSE_PACK_2_EN,
    APPEAL_TO_TRADITION_PACK_1_EN,
    APPEAL_TO_TRADITION_PACK_2_EN,
    WISHFUL_THINKING_PACK_1_EN,
    WISHFUL_THINKING_PACK_2_EN,
    CONFIRMATION_BIAS_PACK_1_EN,
    CONFIRMATION_BIAS_PACK_2_EN,
    REIFICATION_PACK_1_EN,
    REIFICATION_PACK_2_EN,
    ANCHORING_BIAS_PACK_1_EN,
    ANCHORING_BIAS_PACK_2_EN,
    SUNK_COST_PACK_1_EN,
    SUNK_COST_PACK_2_EN,
    GAMBLERS_FALLACY_PACK_1_EN,
    GAMBLERS_FALLACY_PACK_2_EN,
    AVAILABILITY_HEURISTIC_PACK_1_EN,
    AVAILABILITY_HEURISTIC_PACK_2_EN,
    SURVIVORSHIP_BIAS_PACK_1_EN,
    SURVIVORSHIP_BIAS_PACK_2_EN,
    HALO_EFFECT_PACK_1_EN,
    HALO_EFFECT_PACK_2_EN,
    FRAMING_EFFECT_PACK_1_EN,
    FRAMING_EFFECT_PACK_2_EN,
    TU_QUOQUE_PACK_1_EN,
    TU_QUOQUE_PACK_2_EN,
    DUNNING_KRUGER_PACK_1_EN,
    DUNNING_KRUGER_PACK_2_EN,
    HASTY_GENERALIZATION_PACK_1_EN,
    HASTY_GENERALIZATION_PACK_2_EN,
    FALSE_ANALOGY_PACK_1_EN,
    FALSE_ANALOGY_PACK_2_EN,
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
    APPEAL_TO_CONSEQUENCES_PACK_1_FR,
    APPEAL_TO_CONSEQUENCES_PACK_2_FR,
    APPEAL_TO_FORCE_PACK_1_FR,
    APPEAL_TO_FORCE_PACK_2_FR,
    APPEAL_TO_IGNORANCE_PACK_1_FR,
    APPEAL_TO_IGNORANCE_PACK_2_FR,
    APPEAL_TO_IGNORANCE_PACK_3_FR,
    APPEAL_TO_IGNORANCE_PACK_4_FR,
    APPEAL_TO_IGNORANCE_PACK_5_FR,
    APPEAL_TO_INCREDULITY_PACK_1_FR,
    APPEAL_TO_INCREDULITY_PACK_2_FR,
    APPEAL_TO_NATURE_PACK_1_FR,
    APPEAL_TO_NATURE_PACK_2_FR,
    APPEAL_TO_NOVELTY_PACK_1_FR,
    APPEAL_TO_NOVELTY_PACK_2_FR,
    APPEAL_TO_POPULARITY_PACK_1_FR,
    APPEAL_TO_POPULARITY_PACK_2_FR,
    EQUIVOCATION_PACK_1_FR,
    EQUIVOCATION_PACK_2_FR,
    STRAW_MAN_PACK_1_FR,
    STRAW_MAN_PACK_2_FR,
    SLIPPERY_SLOPE_PACK_1_FR,
    SLIPPERY_SLOPE_PACK_2_FR,
    RED_HERRING_PACK_1_FR,
    RED_HERRING_PACK_2_FR,
    FALSE_DILEMMA_PACK_1_FR,
    FALSE_DILEMMA_PACK_2_FR,
    AD_HOMINEM_PACK_1_FR,
    AD_HOMINEM_PACK_2_FR,
    BANDWAGON_PACK_1_FR,
    BANDWAGON_PACK_2_FR,
    APPEAL_TO_EMOTION_PACK_1_FR,
    APPEAL_TO_EMOTION_PACK_2_FR,
    APPEAL_TO_FEAR_PACK_1_FR,
    APPEAL_TO_FEAR_PACK_2_FR,
    APPEAL_TO_PITY_PACK_1_FR,
    APPEAL_TO_PITY_PACK_2_FR,
    FALSE_CAUSE_PACK_1_FR,
    FALSE_CAUSE_PACK_2_FR,
    APPEAL_TO_TRADITION_PACK_1_FR,
    APPEAL_TO_TRADITION_PACK_2_FR,
    WISHFUL_THINKING_PACK_1_FR,
    WISHFUL_THINKING_PACK_2_FR,
    CONFIRMATION_BIAS_PACK_1_FR,
    CONFIRMATION_BIAS_PACK_2_FR,
    REIFICATION_PACK_1_FR,
    REIFICATION_PACK_2_FR,
    ANCHORING_BIAS_PACK_1_FR,
    ANCHORING_BIAS_PACK_2_FR,
    SUNK_COST_PACK_1_FR,
    SUNK_COST_PACK_2_FR,
    GAMBLERS_FALLACY_PACK_1_FR,
    GAMBLERS_FALLACY_PACK_2_FR,
    AVAILABILITY_HEURISTIC_PACK_1_FR,
    AVAILABILITY_HEURISTIC_PACK_2_FR,
    SURVIVORSHIP_BIAS_PACK_1_FR,
    SURVIVORSHIP_BIAS_PACK_2_FR,
    HALO_EFFECT_PACK_1_FR,
    HALO_EFFECT_PACK_2_FR,
    FRAMING_EFFECT_PACK_1_FR,
    FRAMING_EFFECT_PACK_2_FR,
    TU_QUOQUE_PACK_1_FR,
    TU_QUOQUE_PACK_2_FR,
    DUNNING_KRUGER_PACK_1_FR,
    DUNNING_KRUGER_PACK_2_FR,
    HASTY_GENERALIZATION_PACK_1_FR,
    HASTY_GENERALIZATION_PACK_2_FR,
    FALSE_ANALOGY_PACK_1_FR,
    FALSE_ANALOGY_PACK_2_FR,
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
