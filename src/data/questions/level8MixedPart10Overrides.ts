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

const BEGINNER_EN = 'The mistake comes from making your victories about your talent and your setbacks about unfair forces outside you.';
const INTERMEDIATE_EN = 'Informal Logic - Level 8 mixed failure: outcome interpretation is being biased to preserve pride and dodge responsibility.';
const BEGINNER_FR = 'L’erreur vient du fait qu’on fait de ses victoires la preuve de son talent et de ses revers la faute de forces injustes extérieures.';
const INTERMEDIATE_FR = 'Logique informelle - Échec mixte de niveau 8 : l’interprétation des résultats est biaisée pour préserver la fierté et éviter la responsabilité.';

export const LEVEL_8_MIXED_PART10_OVERRIDES_EN: Question[] = [
  makeQuestion(728, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"When Nora’s design wins the client pitch, she says genius always shines through. When the next design is rejected, she says the client was afraid of bold art."', ['Appeal to Emotion', 'Regression Fallacy', 'Self-Serving Bias', 'Red Herring'], 2, 'The win is treated as proof of her greatness, while the loss is blamed on the client’s weakness.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: praise is personalized while criticism is reclassified as fear or bias.'),
  makeQuestion(729, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"Derek says his stream grew because he has rare charisma. When viewers leave the next month, he says attention spans have collapsed across civilization."', ['Wishful Thinking', 'Self-Serving Bias', 'False Cause', 'Association Fallacy'], 1, 'He claims personal credit for the success and blames a broad outside decline for the failure.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: the explanation changes direction to keep self-worth intact.'),
  makeQuestion(730, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"After her workshop sells out, Mina says people recognize real expertise. When the follow-up workshop half-fills, she says the public must be distracted by shallow trends again."', ['Base Rate Fallacy', 'Self-Serving Bias', 'False Dilemma', 'Appeal to Antiquity'], 1, 'A good result is credited to her ability, but a weak result is blamed on the crowd.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: one standard is used for flattering evidence and another for the rest.'),
];

export const LEVEL_8_MIXED_PART10_OVERRIDES_FR: Question[] = [
  makeQuestion(728, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Quand le design de Nora gagne le pitch client, elle dit que le génie finit toujours par briller. Quand le design suivant est refusé, elle dit que le client avait peur de l’art audacieux."', ['Appeal to Emotion', 'Regression Fallacy', 'Self-Serving Bias', 'Red Herring'], 2, 'La victoire est traitée comme une preuve de sa grandeur, tandis que la défaite est rejetée sur la faiblesse du client.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : l’éloge est personnalisé tandis que la critique est reclassée comme peur ou biais.'),
  makeQuestion(729, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Derek dit que son stream a grandi parce qu’il a un charisme rare. Quand les spectateurs partent le mois suivant, il dit que la capacité d’attention s’est effondrée dans toute la civilisation."', ['Wishful Thinking', 'Self-Serving Bias', 'False Cause', 'Association Fallacy'], 1, 'Il s’attribue le succès personnellement et attribue l’échec à un déclin extérieur général.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : l’explication change de direction pour préserver l’estime de soi.'),
  makeQuestion(730, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Après que son atelier affiche complet, Mina dit que les gens reconnaissent la vraie expertise. Quand l’atelier suivant se remplit à moitié, elle dit que le public a encore dû être distrait par des modes superficielles."', ['Base Rate Fallacy', 'Self-Serving Bias', 'False Dilemma', 'Appeal to Antiquity'], 1, 'Un bon résultat est attribué à son talent, mais un résultat plus faible est reproché à la foule.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : un standard sert pour les preuves flatteuses et un autre pour le reste.'),
];
