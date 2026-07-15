import type { Question } from '../../types';
import { PersonaStage, SubLevel } from '../../types';

function makeQuestion(
  id: number,
  concept: string,
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
    difficulty: 1,
    subLevel: SubLevel.BEGINNER,
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

const BEGINNER_EN = 'The mistake comes from treating what you want to be true as if that desire itself were evidence.';
const INTERMEDIATE_EN = 'Informal Logic - Level 8 beginner failure: hope, preference, or emotional comfort is smuggled in as proof.';
const BEGINNER_FR = 'L’erreur consiste à traiter ce qu’on aimerait vrai comme si ce désir constituait déjà une preuve.';
const INTERMEDIATE_FR = 'Logique informelle - Échec débutant de niveau 8 : l’espoir, la préférence ou le confort émotionnel sont glissés dans le raisonnement comme s’il s’agissait de preuves.';

export const LEVEL_8_OVERRIDES_EN: Question[] = [
  makeQuestion(631, 'Logical Fallacies', 'Identify the logical fallacy in this example:\n\n"Nora refuses to back up her files because she keeps saying, ‘My laptop cannot die this week. I have too much going on.’"', ['Wishful Thinking', 'Appeal to Tradition', 'False Dilemma', 'Middle Ground Fallacy'], 0, 'Wanting a problem not to happen does not make it less likely.', BEGINNER_EN, INTERMEDIATE_EN, 'Logical Fallacies - Informal Logic - Level 8 beginner failure: a preferred outcome is mistaken for evidence about reality.'),
  makeQuestion(632, 'Logical Fallacies', 'Identify the logical fallacy in this example:\n\n"Eli buys a lottery ticket and tells everyone he is basically halfway rich already because he can really feel this one working out."', ['Wishful Thinking', 'Composition Fallacy', 'Special Pleading', 'Appeal to Ignorance'], 0, 'His confidence and desire are being used as if they changed the odds.', BEGINNER_EN, INTERMEDIATE_EN, 'Logical Fallacies - Informal Logic - Level 8 beginner failure: optimism is being substituted for probability.'),
  makeQuestion(633, 'Logical Fallacies', 'Identify the logical fallacy in this example:\n\n"Maya ignores the storm warning and says, ‘It has to stay sunny for my picnic. The universe would not ruin my cheese board like that.’"', ['Genetic Fallacy', 'Wishful Thinking', 'Red Herring', 'Association Fallacy'], 1, 'Her hope for a pleasant outcome is not evidence about the weather forecast.', BEGINNER_EN, INTERMEDIATE_EN, 'Logical Fallacies - Informal Logic - Level 8 beginner failure: emotional preference is allowed to overrule the evidence.'),
];

export const LEVEL_8_OVERRIDES_FR: Question[] = [
  makeQuestion(631, 'Sophismes logiques', 'Identifiez le sophisme dans cet exemple :\n\n"Nora refuse de sauvegarder ses fichiers parce qu’elle répète : « Mon ordinateur ne peut pas tomber en panne cette semaine. J’ai trop de choses à faire. »"', ['Wishful Thinking', 'Appeal to Tradition', 'False Dilemma', 'Middle Ground Fallacy'], 0, 'Le fait de vouloir qu’un problème n’arrive pas ne le rend pas moins probable.', BEGINNER_FR, INTERMEDIATE_FR, 'Sophismes logiques - Logique informelle - Échec débutant de niveau 8 : un résultat préféré est pris à tort pour une preuve sur la réalité.'),
  makeQuestion(632, 'Sophismes logiques', 'Identifiez le sophisme dans cet exemple :\n\n"Eli achète un ticket de loterie et dit à tout le monde qu’il est pratiquement à moitié riche, parce qu’il sent vraiment que ce ticket va marcher."', ['Wishful Thinking', 'Composition Fallacy', 'Special Pleading', 'Appeal to Ignorance'], 0, 'Sa confiance et son envie sont utilisées comme si elles modifiaient les probabilités.', BEGINNER_FR, INTERMEDIATE_FR, 'Sophismes logiques - Logique informelle - Échec débutant de niveau 8 : l’optimisme remplace le calcul des chances.'),
  makeQuestion(633, 'Sophismes logiques', 'Identifiez le sophisme dans cet exemple :\n\n"Maya ignore l’alerte météo et dit : « Il faut que le temps reste beau pour mon pique-nique. L’univers ne va quand même pas saboter mon plateau de fromages. »"', ['Genetic Fallacy', 'Wishful Thinking', 'Red Herring', 'Association Fallacy'], 1, 'Son espoir d’un bon résultat n’est pas une preuve concernant les prévisions météo.', BEGINNER_FR, INTERMEDIATE_FR, 'Sophismes logiques - Logique informelle - Échec débutant de niveau 8 : la préférence émotionnelle prend le dessus sur les preuves.'),
];
