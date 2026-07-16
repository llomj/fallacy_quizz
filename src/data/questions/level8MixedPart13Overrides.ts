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

const BEGINNER_EN = 'The mistake comes from praising yourself when things work and inventing outside excuses when they do not.';
const INTERMEDIATE_EN = 'Informal Logic - Level 8 mixed failure: the explanation keeps shifting so success looks deserved and failure looks externally imposed.';
const BEGINNER_FR = 'L’erreur vient du fait qu’on se félicite quand ça marche et qu’on invente des excuses extérieures quand ça ne marche pas.';
const INTERMEDIATE_FR = 'Logique informelle - Échec mixte de niveau 8 : l’explication se déplace sans cesse pour que le succès paraisse mérité et l’échec imposé de l’extérieur.';

export const LEVEL_8_MIXED_PART13_OVERRIDES_EN: Question[] = [
  makeQuestion(737, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"When Arman’s short film wins an award, he says the judges knew authentic talent when they saw it. When the next film gets nothing, he says festivals have become allergic to honesty."', ['Regression Fallacy', 'Self-Serving Bias', 'Appeal to Pity', 'Straw Man'], 1, 'He credits success to his own talent and blames failure on flaws in the system.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: positive results validate the self, negative results indict the environment.'),
  makeQuestion(738, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"Tina says her restaurant got rave reviews because diners can always detect quality. When reviews dip the next month, she says food critics have clearly been captured by mediocrity."', ['Appeal to Tradition', 'False Cause', 'Self-Serving Bias', 'Base Rate Fallacy'], 2, 'Good reviews are treated as proof of excellence, bad reviews as proof of everyone else’s bad judgment.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: feedback is only trusted when it flatters the speaker.'),
  makeQuestion(739, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"When Omar’s workshop sells out, he says people crave substance. When the next one struggles, he says the city must have temporarily lost interest in depth."', ['Self-Serving Bias', 'Weak Analogy', 'Middle Ground Fallacy', 'Appeal to Consequences'], 0, 'He treats strong turnout as proof of his value and weak turnout as a problem with the public.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: success is personalized, while failure is attributed to cultural decline.'),
];

export const LEVEL_8_MIXED_PART13_OVERRIDES_FR: Question[] = [
  makeQuestion(737, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Quand le court-métrage d’Arman gagne un prix, il dit que les juges ont reconnu le vrai talent. Quand le film suivant ne reçoit rien, il dit que les festivals sont devenus allergiques à l’honnêteté."', ['Regression Fallacy', 'Self-Serving Bias', 'Appeal to Pity', 'Straw Man'], 1, 'Il attribue le succès à son talent et l’échec aux défauts du système.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : les résultats positifs valident le moi, les négatifs accusent l’environnement.'),
  makeQuestion(738, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Tina dit que son restaurant a reçu des critiques élogieuses parce que les clients savent toujours reconnaître la qualité. Quand les critiques baissent le mois suivant, elle dit que les critiques gastronomiques ont clairement été capturés par la médiocrité."', ['Appeal to Tradition', 'False Cause', 'Self-Serving Bias', 'Base Rate Fallacy'], 2, 'Les bonnes critiques sont traitées comme une preuve d’excellence, les mauvaises comme une preuve du mauvais jugement des autres.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : le retour n’est jugé fiable que lorsqu’il flatte le locuteur.'),
  makeQuestion(739, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Quand l’atelier d’Omar affiche complet, il dit que les gens ont soif de fond. Quand le suivant peine à se remplir, il dit que la ville a dû perdre temporairement son intérêt pour la profondeur."', ['Self-Serving Bias', 'Weak Analogy', 'Middle Ground Fallacy', 'Appeal to Consequences'], 0, 'Il traite une forte fréquentation comme la preuve de sa valeur et une faible comme un problème du public.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : le succès est personnalisé, tandis que l’échec est attribué au déclin culturel.'),
];
