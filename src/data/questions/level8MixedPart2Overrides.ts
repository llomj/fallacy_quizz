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

const BEGINNER_EN = 'The mistake comes from reading events in the way that protects your self-image instead of the way the evidence supports.';
const INTERMEDIATE_EN = 'Informal Logic - Level 8 mixed failure: biased self-interpretation distorts both responsibility and success.';
const BEGINNER_FR = 'L’erreur vient du fait qu’on lit les événements de la manière qui protège son image de soi plutôt que selon ce que les preuves appuient.';
const INTERMEDIATE_FR = 'Logique informelle - Échec mixte de niveau 8 : l’interprétation biaisée de soi déforme à la fois la responsabilité et la réussite.';

export const LEVEL_8_MIXED_PART2_OVERRIDES_EN: Question[] = [
  makeQuestion(704, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"After bombing an interview, Carla says the hiring manager was threatened by her brilliance. After landing a different job, she says that win proves she is impossible to overlook."', ['Innuendo', 'Moving the Goalposts', 'Self-Serving Bias', 'Gish Gallop'], 2, 'She explains failure in a way that protects her ego and success in a way that glorifies it.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: every outcome is rewritten to keep the self-image flattering.'),
  makeQuestion(705, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"When Theo gets an A, he says it is pure talent. When he gets a C, he says the room lighting was weird, the chair was cursed, and the professor writes hostile exams."', ['Appeal to Pity', 'Self-Serving Bias', 'False Dilemma', 'Association Fallacy'], 1, 'Success is credited inward while failure is dumped on external excuses.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: praise flows inward, blame flows outward.'),
  makeQuestion(706, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"Mina says her group project succeeded because of her leadership, but when the next project collapses she says the team was doomed because everyone else lacked vision."', ['Restraint Bias', 'Wishful Thinking', 'Self-Serving Bias', 'Begging the Question'], 2, 'She takes personal ownership of success but treats failure as something caused by everyone else.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: responsibility is edited to favor the self no matter the result.'),
];

export const LEVEL_8_MIXED_PART2_OVERRIDES_FR: Question[] = [
  makeQuestion(704, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Après avoir raté un entretien, Carla dit que la recruteuse était menacée par son génie. Après avoir obtenu un autre poste, elle dit que cette réussite prouve qu’il est impossible de passer à côté d’elle."', ['Innuendo', 'Moving the Goalposts', 'Self-Serving Bias', 'Gish Gallop'], 2, 'Elle explique l’échec d’une manière qui protège son ego et la réussite d’une manière qui le glorifie.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : chaque résultat est réécrit pour garder une image flatteuse de soi.'),
  makeQuestion(705, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Quand Théo a un A, il dit que c’est du talent pur. Quand il a un C, il dit que l’éclairage était bizarre, que la chaise était maudite et que le professeur écrit des examens hostiles."', ['Appeal to Pity', 'Self-Serving Bias', 'False Dilemma', 'Association Fallacy'], 1, 'Le succès est attribué à soi-même tandis que l’échec est rejeté sur des excuses extérieures.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : les compliments entrent, la faute sort.'),
  makeQuestion(706, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Mina dit que son projet de groupe a réussi grâce à son leadership, mais quand le projet suivant s’effondre elle affirme que l’équipe était condamnée parce que les autres manquaient de vision."', ['Restraint Bias', 'Wishful Thinking', 'Self-Serving Bias', 'Begging the Question'], 2, 'Elle s’approprie personnellement la réussite mais traite l’échec comme la faute des autres.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : la responsabilité est montée pour favoriser le moi quel que soit le résultat.'),
];
