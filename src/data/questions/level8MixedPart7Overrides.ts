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

const BEGINNER_EN = 'The mistake comes from changing the explanation whenever needed so the speaker still looks gifted or unfairly treated.';
const INTERMEDIATE_EN = 'Informal Logic - Level 8 mixed failure: self-serving interpretation keeps the ego polished by bending the story around outcomes.';
const BEGINNER_FR = 'L’erreur vient du fait qu’on change l’explication dès que nécessaire pour que le locuteur paraisse toujours doué ou injustement traité.';
const INTERMEDIATE_FR = 'Logique informelle - Échec mixte de niveau 8 : l’interprétation auto-favorable garde l’ego intact en tordant le récit autour des résultats.';

export const LEVEL_8_MIXED_PART7_OVERRIDES_EN: Question[] = [
  makeQuestion(719, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"When Sonia gets invited back to speak, she says her ideas are irresistible. When she is not invited the next month, she says the organizers are terrified of bold thinkers."', ['Self-Serving Bias', 'Appeal to Fear', 'False Equivalence', 'Wishful Thinking'], 0, 'Good outcomes are attributed to her brilliance, bad ones to other people’s weakness or bias.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: results are explained in whatever way best flatters the self.'),
  makeQuestion(720, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"After winning employee of the month, Marco says talent always rises. After being passed over the next quarter, he says awards are meaningless office theater."', ['Appeal to Ridicule', 'Regression Fallacy', 'Self-Serving Bias', 'Association Fallacy'], 2, 'He treats the system as valid when it rewards him and pointless when it does not.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: standards are reversed to preserve status and self-respect.'),
  makeQuestion(721, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"Lila says her shop had a great weekend because customers can sense quality. When sales crash the next week, she says people must have been distracted by bad weather and shallow trends."', ['False Premise', 'Self-Serving Bias', 'Appeal to Tradition', 'Nirvana Fallacy'], 1, 'Success is personalized; failure is externalized.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: the speaker keeps ownership of wins while outsourcing losses.'),
];

export const LEVEL_8_MIXED_PART7_OVERRIDES_FR: Question[] = [
  makeQuestion(719, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Quand Sonia est réinvitée pour parler, elle dit que ses idées sont irrésistibles. Quand elle ne l’est pas le mois suivant, elle dit que les organisateurs ont peur des penseurs audacieux."', ['Self-Serving Bias', 'Appeal to Fear', 'False Equivalence', 'Wishful Thinking'], 0, 'Les bons résultats sont attribués à son génie, les mauvais à la faiblesse ou au biais des autres.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : les résultats sont expliqués de la façon la plus flatteuse pour le moi.'),
  makeQuestion(720, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Après avoir gagné le prix d’employé du mois, Marco dit que le talent finit toujours par être reconnu. Quand il est ignoré le trimestre suivant, il dit que les récompenses ne sont qu’un théâtre de bureau sans importance."', ['Appeal to Ridicule', 'Regression Fallacy', 'Self-Serving Bias', 'Association Fallacy'], 2, 'Il juge le système valable quand il le récompense et vide de sens quand ce n’est pas le cas.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : les critères sont inversés pour préserver le statut et l’estime de soi.'),
  makeQuestion(721, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Lila dit que sa boutique a eu un excellent week-end parce que les clients savent reconnaître la qualité. Quand les ventes s’effondrent la semaine suivante, elle dit que les gens ont dû être distraits par le mauvais temps et des modes superficielles."', ['False Premise', 'Self-Serving Bias', 'Appeal to Tradition', 'Nirvana Fallacy'], 1, 'Le succès est personnalisé ; l’échec est externalisé.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : le locuteur garde la propriété des victoires et sous-traite les défaites.'),
];
