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

const BEGINNER_EN = 'The mistake comes from quietly rewriting causes and credit so the story always flatters the speaker.';
const INTERMEDIATE_EN = 'Informal Logic - Level 8 mixed failure: ego-protective storytelling bends responsibility, praise, and blame.';
const BEGINNER_FR = 'L’erreur vient du fait qu’on réécrit discrètement les causes et le mérite pour que l’histoire avantage toujours le locuteur.';
const INTERMEDIATE_FR = 'Logique informelle - Échec mixte de niveau 8 : un récit protecteur pour l’ego déforme la responsabilité, les compliments et le blâme.';

export const LEVEL_8_MIXED_PART3_OVERRIDES_EN: Question[] = [
  makeQuestion(707, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"When Ruby’s presentation gets applause, she says the audience recognized excellence. When the next presentation gets awkward silence, she says the room was full of jealous people with no taste."', ['Self-Serving Bias', 'Appeal to Popularity', 'Base Rate Fallacy', 'Appeal to Tradition'], 0, 'She interprets success as proof of her talent and failure as proof of other people’s defects.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: the story changes so the self always looks impressive.'),
  makeQuestion(708, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"After winning one debate, Jules says he is naturally brilliant. After losing the next one, he says the moderator was biased, the microphone was cursed, and the chair angle ruined his thinking."', ['False Dilemma', 'Wishful Thinking', 'Self-Serving Bias', 'Weak Analogy'], 2, 'The speaker keeps personal credit for the win and exports blame for the loss.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: self-credit stays local while responsibility for failure is outsourced.'),
  makeQuestion(709, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"Nico says his startup’s success came from his vision, but when the follow-up launch flops he says the market was too stupid to understand genius on schedule."', ['Association Fallacy', 'Self-Serving Bias', 'Circular Reasoning', 'Appeal to Flattery'], 1, 'He claims ownership of the good outcome while blaming outside forces for the bad one.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: achievement is personalized, failure is externalized.'),
];

export const LEVEL_8_MIXED_PART3_OVERRIDES_FR: Question[] = [
  makeQuestion(707, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Quand l’exposé de Ruby reçoit des applaudissements, elle dit que le public a reconnu l’excellence. Quand l’exposé suivant provoque un silence gêné, elle dit que la salle était remplie de jaloux sans goût."', ['Self-Serving Bias', 'Appeal to Popularity', 'Base Rate Fallacy', 'Appeal to Tradition'], 0, 'Elle interprète le succès comme la preuve de son talent et l’échec comme la preuve des défauts des autres.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : l’histoire change pour que le moi paraisse toujours impressionnant.'),
  makeQuestion(708, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Après avoir gagné un débat, Jules dit qu’il est naturellement brillant. Après avoir perdu le suivant, il dit que le modérateur était biaisé, que le micro était maudit et que l’angle de la chaise a saboté sa pensée."', ['False Dilemma', 'Wishful Thinking', 'Self-Serving Bias', 'Weak Analogy'], 2, 'Le locuteur garde le mérite de la victoire et exporte la faute de la défaite.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : le mérite reste chez soi, la responsabilité de l’échec part ailleurs.'),
  makeQuestion(709, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Nico dit que le succès de sa startup vient de sa vision, mais quand le lancement suivant échoue il affirme que le marché était trop bête pour comprendre le génie à temps."', ['Association Fallacy', 'Self-Serving Bias', 'Circular Reasoning', 'Appeal to Flattery'], 1, 'Il s’approprie le bon résultat tout en rejetant le mauvais sur des forces extérieures.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : la réussite est personnalisée, l’échec est externalisé.'),
];
