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

const BEGINNER_EN = 'The mistake comes from treating good outcomes as proof of personal greatness and bad outcomes as somebody else’s fault.';
const INTERMEDIATE_EN = 'Informal Logic - Level 8 mixed failure: self-protective bias reshapes praise, blame, and fairness to preserve the ego.';
const BEGINNER_FR = 'L’erreur vient du fait qu’on traite les bons résultats comme la preuve de sa grandeur personnelle et les mauvais comme la faute des autres.';
const INTERMEDIATE_FR = 'Logique informelle - Échec mixte de niveau 8 : un biais protecteur du moi remodèle l’éloge, le blâme et l’équité pour préserver l’ego.';

export const LEVEL_8_MIXED_PART6_OVERRIDES_EN: Question[] = [
  makeQuestion(716, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"When Leo’s recipe gets compliments, he says his instincts are unmatched. When the same dish burns the next night, he says the oven clearly has a grudge against visionaries."', ['Self-Serving Bias', 'Appeal to Ridicule', 'False Cause', 'Special Pleading'], 0, 'Compliments are treated as proof of talent, while mistakes are blamed on outside causes.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: personal credit is hoarded while blame is outsourced.'),
  makeQuestion(717, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"Tara says her podcast grew because she is naturally magnetic. When listeners stop showing up, she says society has lost the ability to appreciate depth."', ['Weak Analogy', 'Self-Serving Bias', 'Appeal to Consequences', 'Bandwagon Fallacy'], 1, 'She uses one story when things go well and a completely different standard when they do not.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: self-image determines the explanation more than the evidence does.'),
  makeQuestion(718, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"After winning a client, Ben says his charisma closed the deal. After losing the next client, he says the whole industry is rigged against honest talent."', ['Wishful Thinking', 'Regression Fallacy', 'Self-Serving Bias', 'Association Fallacy'], 2, 'He credits himself for the success and blames the system for the failure.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: the same ego-protective filter is applied to opposite results.'),
];

export const LEVEL_8_MIXED_PART6_OVERRIDES_FR: Question[] = [
  makeQuestion(716, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Quand la recette de Léo reçoit des compliments, il dit que son instinct est inégalable. Quand le même plat brûle le lendemain, il dit que le four a clairement une rancune contre les visionnaires."', ['Self-Serving Bias', 'Appeal to Ridicule', 'False Cause', 'Special Pleading'], 0, 'Les compliments sont traités comme une preuve de talent, tandis que les erreurs sont rejetées sur des causes extérieures.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : le mérite personnel est gardé, le blâme est exporté.'),
  makeQuestion(717, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Tara dit que son podcast a grandi parce qu’elle est naturellement magnétique. Quand les auditeurs cessent de venir, elle dit que la société a perdu la capacité d’apprécier la profondeur."', ['Weak Analogy', 'Self-Serving Bias', 'Appeal to Consequences', 'Bandwagon Fallacy'], 1, 'Elle utilise une histoire quand tout va bien et un standard complètement différent quand ce n’est pas le cas.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : l’image de soi détermine l’explication plus que les preuves.'),
  makeQuestion(718, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Après avoir gagné un client, Ben dit que son charisme a scellé l’affaire. Après avoir perdu le client suivant, il dit que tout le secteur est truqué contre le talent honnête."', ['Wishful Thinking', 'Regression Fallacy', 'Self-Serving Bias', 'Association Fallacy'], 2, 'Il s’attribue le succès et reproche l’échec au système.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : le même filtre protecteur de l’ego est appliqué à des résultats opposés.'),
];
