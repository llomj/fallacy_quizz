import type { Question } from '../../types';
import { PersonaStage, SubLevel } from '../../types';

function makeQuestion(
  id: number,
  concept: string,
  difficulty: number,
  subLevel: SubLevel,
  question: string,
  options: string[],
  correct_option_index: number,
  explanation: string,
  detailedExplanationBeginner: string,
  detailedExplanationIntermediate: string,
  detailedExplanationExpert: string
): Question {
  return {
    id,
    level: 8,
    persona_stage: PersonaStage.SHARK,
    concept,
    difficulty,
    subLevel,
    question,
    options,
    correct_option_index,
    explanation,
    detailedExplanationBeginner,
    detailedExplanationIntermediate,
    detailedExplanationExpert,
    questionFormat: 'standard',
  };
}

const BEGINNER_EN = 'The mistake comes from using one flattering story for success and a different protective story for failure.';
const INTERMEDIATE_EN = 'Informal Logic - Level 8 mixed failure: explanations are being bent around ego protection rather than kept consistent across outcomes.';
const BEGINNER_FR = 'L’erreur vient du fait qu’on utilise une histoire flatteuse pour le succès et une autre, protectrice, pour l’échec.';
const INTERMEDIATE_FR = 'Logique informelle - Échec mixte de niveau 8 : les explications sont tordues pour protéger l’ego au lieu de rester cohérentes d’un résultat à l’autre.';

export const LEVEL_8_MIXED_PART11_OVERRIDES_EN: Question[] = [
  makeQuestion(731, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"When Elsa’s proposal gets approved, she says smart people immediately spot quality. When her next proposal is rejected, she says committees exist mainly to punish originality."', ['Self-Serving Bias', 'Appeal to Fear', 'False Dilemma', 'Weak Analogy'], 0, 'Approval is treated as evidence of her excellence, while rejection is blamed on a hostile system.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: the standard of interpretation changes with the speaker’s personal outcome.'),
  makeQuestion(732, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"After his song gets praise, Jamal says people can hear real artistry. When the next song gets ignored, he says audiences have been corrupted by trivial noise."', ['Regression Fallacy', 'Self-Serving Bias', 'Appeal to Tradition', 'False Premise'], 1, 'He credits success to his own merit and blames failure on the audience.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: one explanation elevates the self, the other excuses the setback.'),
  makeQuestion(733, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"After her class fills up, Dana says students can tell who the best teacher is. When registrations dip, she says the calendar, weather, and collapse of standards are obviously to blame."', ['Self-Serving Bias', 'Appeal to Ridicule', 'Association Fallacy', 'Middle Ground Fallacy'], 0, 'She treats success as proof of teaching ability but treats decline as caused by everything except herself.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: self-credit is stable, self-criticism vanishes.'),
];

export const LEVEL_8_MIXED_PART11_OVERRIDES_FR: Question[] = [
  makeQuestion(731, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Quand la proposition d’Elsa est approuvée, elle dit que les gens intelligents reconnaissent tout de suite la qualité. Quand la suivante est rejetée, elle dit que les comités existent surtout pour punir l’originalité."', ['Self-Serving Bias', 'Appeal to Fear', 'False Dilemma', 'Weak Analogy'], 0, 'L’approbation est traitée comme une preuve de son excellence, tandis que le rejet est attribué à un système hostile.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : le standard d’interprétation change avec le résultat personnel du locuteur.'),
  makeQuestion(732, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Après que sa chanson reçoit des compliments, Jamal dit que les gens savent reconnaître le vrai talent. Quand la chanson suivante est ignorée, il dit que le public a été corrompu par du bruit sans intérêt."', ['Regression Fallacy', 'Self-Serving Bias', 'Appeal to Tradition', 'False Premise'], 1, 'Il attribue le succès à son mérite personnel et l’échec au public.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : une explication grandit le moi, l’autre excuse le revers.'),
  makeQuestion(733, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Quand son cours affiche complet, Dana dit que les étudiants savent reconnaître la meilleure professeure. Quand les inscriptions baissent, elle dit que le calendrier, la météo et l’effondrement des standards sont évidemment en cause."', ['Self-Serving Bias', 'Appeal to Ridicule', 'Association Fallacy', 'Middle Ground Fallacy'], 0, 'Elle traite le succès comme une preuve de son talent pédagogique mais la baisse comme causée par tout sauf elle-même.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : l’auto-crédit reste stable, l’autocritique disparaît.'),
];
