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

const BEGINNER_EN = 'The mistake comes from protecting your ego by treating wins as proof of personal greatness and losses as somebody else’s failure.';
const INTERMEDIATE_EN = 'Informal Logic - Level 8 mixed failure: outcome stories are bent to defend self-image rather than explain events honestly.';
const BEGINNER_FR = 'L’erreur vient du fait qu’on protège son ego en traitant les victoires comme la preuve d’une grandeur personnelle et les pertes comme l’échec de quelqu’un d’autre.';
const INTERMEDIATE_FR = 'Logique informelle - Échec mixte de niveau 8 : les récits autour des résultats sont tordus pour défendre l’image de soi au lieu d’expliquer honnêtement les événements.';

export const LEVEL_8_MIXED_PART8_OVERRIDES_EN: Question[] = [
  makeQuestion(722, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"After his app gets featured, Devin says true innovation always finds him. When the next app launch sinks, he says users were too lazy to understand the future."', ['Appeal to Novelty', 'Self-Serving Bias', 'Appeal to Consequences', 'Straw Man'], 1, 'He credits success to his own brilliance and blames failure on the shortcomings of others.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: wins are personalized while losses are pushed onto the audience.'),
  makeQuestion(723, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"When Jasmine aces the exam, she says discipline always wins. When she fails the next one, she says the test was written by chaos in human form."', ['False Cause', 'Wishful Thinking', 'Self-Serving Bias', 'Red Herring'], 2, 'She uses one explanation that flatters herself for success and another that protects her from blame for failure.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: causes are swapped depending on which version is kinder to the ego.'),
  makeQuestion(724, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"Victor says his campaign gained volunteers because people recognize leadership. When volunteer numbers drop, he says the public has become allergic to competence."', ['Self-Serving Bias', 'Bandwagon Fallacy', 'Base Rate Fallacy', 'Middle Ground Fallacy'], 0, 'Positive results are explained as proof of his excellence, while negative ones become evidence of everyone else’s defects.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: the self is credited for success and insulated from failure.'),
];

export const LEVEL_8_MIXED_PART8_OVERRIDES_FR: Question[] = [
  makeQuestion(722, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Après que son appli est mise en avant, Devin dit que la vraie innovation finit toujours par le trouver. Quand l’appli suivante coule, il dit que les utilisateurs étaient trop paresseux pour comprendre l’avenir."', ['Appeal to Novelty', 'Self-Serving Bias', 'Appeal to Consequences', 'Straw Man'], 1, 'Il attribue le succès à son propre génie et l’échec aux limites des autres.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : les victoires sont personnalisées tandis que les pertes sont rejetées sur le public.'),
  makeQuestion(723, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Quand Jasmine réussit brillamment l’examen, elle dit que la discipline gagne toujours. Quand elle rate le suivant, elle dit que le test a été écrit par le chaos incarné."', ['False Cause', 'Wishful Thinking', 'Self-Serving Bias', 'Red Herring'], 2, 'Elle utilise une explication flatteuse pour le succès et une autre qui la protège du blâme pour l’échec.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : les causes sont échangées selon la version la plus douce pour l’ego.'),
  makeQuestion(724, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Victor dit que sa campagne a gagné des bénévoles parce que les gens reconnaissent le leadership. Quand leur nombre baisse, il dit que le public est devenu allergique à la compétence."', ['Self-Serving Bias', 'Bandwagon Fallacy', 'Base Rate Fallacy', 'Middle Ground Fallacy'], 0, 'Les résultats positifs sont expliqués comme une preuve de son excellence, tandis que les négatifs deviennent une preuve des défauts des autres.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : le moi est crédité du succès et protégé contre l’échec.'),
];
