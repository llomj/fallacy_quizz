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

const BEGINNER_EN = 'The mistake comes from keeping one explanation for your wins and a different one for your losses, just to protect your ego.';
const INTERMEDIATE_EN = 'Informal Logic - Level 8 mixed failure: causal stories are being selectively edited so the speaker stays admirable and never responsible.';
const BEGINNER_FR = 'L’erreur vient du fait qu’on garde une explication pour ses victoires et une autre pour ses défaites, juste pour protéger son ego.';
const INTERMEDIATE_FR = 'Logique informelle - Échec mixte de niveau 8 : les récits causaux sont modifiés sélectivement pour que le locuteur reste admirable et jamais responsable.';

export const LEVEL_8_MIXED_PART12_OVERRIDES_EN: Question[] = [
  makeQuestion(734, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"When Priya’s newsletter grows, she says thoughtful readers always find excellence. When subscriptions fall, she says inbox culture has become allergic to substance."', ['Self-Serving Bias', 'Appeal to Nature', 'False Dilemma', 'Regression Fallacy'], 0, 'Growth is credited to her quality, while decline is blamed on everyone else’s bad habits.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: the same person gets credit for success and immunity from failure.'),
  makeQuestion(735, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"After his speech gets a standing ovation, Rowan says the room recognized rare brilliance. When the next speech lands badly, he says the crowd was intimidated by ideas above their level."', ['Wishful Thinking', 'Self-Serving Bias', 'Appeal to Flattery', 'Straw Man'], 1, 'He treats praise as evidence of genius and criticism as evidence of the audience’s deficiency.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: personal merit explains the wins, public failure explains the losses.'),
  makeQuestion(736, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"Lena says her café was packed because customers know quality. When the room is half-empty the next week, she says people must have surrendered to convenience and bad taste."', ['Base Rate Fallacy', 'Association Fallacy', 'Self-Serving Bias', 'Appeal to Consequences'], 2, 'A good turnout is credited to her excellence, while a poor turnout is blamed on the customers.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: external excuses appear exactly when self-criticism would be needed.'),
];

export const LEVEL_8_MIXED_PART12_OVERRIDES_FR: Question[] = [
  makeQuestion(734, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Quand la newsletter de Priya grandit, elle dit que les lecteurs réfléchis finissent toujours par trouver l’excellence. Quand les abonnements baissent, elle dit que la culture des boîtes mail est devenue allergique au fond."', ['Self-Serving Bias', 'Appeal to Nature', 'False Dilemma', 'Regression Fallacy'], 0, 'La croissance est attribuée à sa qualité, tandis que la baisse est reprochée aux mauvaises habitudes des autres.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : la même personne reçoit le mérite du succès et l’immunité face à l’échec.'),
  makeQuestion(735, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Après que son discours reçoit une ovation, Rowan dit que la salle a reconnu une rare brillance. Quand le discours suivant passe mal, il dit que la foule était intimidée par des idées au-dessus de son niveau."', ['Wishful Thinking', 'Self-Serving Bias', 'Appeal to Flattery', 'Straw Man'], 1, 'Il traite les applaudissements comme une preuve de génie et les critiques comme une preuve de la faiblesse du public.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : le mérite personnel explique les victoires, l’échec du public explique les défaites.'),
  makeQuestion(736, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Lena dit que son café était plein parce que les clients savent reconnaître la qualité. Quand la salle est à moitié vide la semaine suivante, elle dit que les gens ont dû céder à la facilité et au mauvais goût."', ['Base Rate Fallacy', 'Association Fallacy', 'Self-Serving Bias', 'Appeal to Consequences'], 2, 'Une bonne fréquentation est attribuée à son excellence, tandis qu’une mauvaise est reprochée aux clients.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : les excuses extérieures apparaissent exactement quand l’autocritique serait nécessaire.'),
];
