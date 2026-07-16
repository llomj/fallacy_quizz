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

const BEGINNER_EN = 'The mistake comes from judging the same event by two different standards depending on whether it helps or hurts the speaker.';
const INTERMEDIATE_EN = 'Informal Logic - Level 8 mixed failure: ego-defense distorts how success, failure, fairness, and talent are interpreted.';
const BEGINNER_FR = 'L’erreur vient du fait qu’on juge le même événement avec deux standards différents selon qu’il aide ou non le locuteur.';
const INTERMEDIATE_FR = 'Logique informelle - Échec mixte de niveau 8 : la défense de l’ego déforme l’interprétation du succès, de l’échec, de l’équité et du talent.';

export const LEVEL_8_MIXED_PART5_OVERRIDES_EN: Question[] = [
  makeQuestion(713, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"When Zara’s joke gets laughs, she says she has elite timing. When the next joke dies, she says the audience was exhausted, uncultured, and spiritually unavailable."', ['Appeal to Ridicule', 'Self-Serving Bias', 'Regression Fallacy', 'False Premise'], 1, 'She credits success to her talent and failure to defects in the audience.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: one rule for winning, another for losing.'),
  makeQuestion(714, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"Malik says his investment gains prove he has incredible instincts. When the same strategy loses money a month later, he says the market became irrational the moment he entered it."', ['Wishful Thinking', 'Self-Serving Bias', 'Appeal to Consequences', 'Gambler\'s Fallacy'], 1, 'Profits are credited to personal brilliance while losses are blamed on outside chaos.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: the interpretation changes to keep the self-image heroic.'),
  makeQuestion(715, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"Emma says the class loved her essay because it was clearly the strongest one. When a different essay wins the prize, she says the teacher was swayed by politics, vibes, and lunar mischief."', ['Self-Serving Bias', 'Association Fallacy', 'Weak Analogy', 'Appeal to Flattery'], 0, 'She treats praise as proof of merit but rejection as proof of corruption or nonsense.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: favorable outcomes are trusted, unfavorable ones are delegitimized.'),
];

export const LEVEL_8_MIXED_PART5_OVERRIDES_FR: Question[] = [
  makeQuestion(713, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Quand la blague de Zara fait rire, elle dit qu’elle a un timing d’élite. Quand la suivante tombe à plat, elle dit que le public était fatigué, inculte et spirituellement indisponible."', ['Appeal to Ridicule', 'Self-Serving Bias', 'Regression Fallacy', 'False Premise'], 1, 'Elle attribue le succès à son talent et l’échec aux défauts du public.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : une règle pour gagner, une autre pour perdre.'),
  makeQuestion(714, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Malik dit que ses gains en investissement prouvent qu’il a des instincts incroyables. Quand la même stratégie lui fait perdre de l’argent un mois plus tard, il dit que le marché est devenu irrationnel au moment précis où il est entré."', ['Wishful Thinking', 'Self-Serving Bias', 'Appeal to Consequences', 'Gambler\'s Fallacy'], 1, 'Les profits sont attribués à son génie personnel tandis que les pertes sont rejetées sur le chaos extérieur.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : l’interprétation change pour garder une image héroïque de soi.'),
  makeQuestion(715, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Emma dit que la classe a adoré son essai parce que c’était clairement le meilleur. Quand un autre essai gagne le prix, elle dit que le professeur a été influencé par la politique, l’ambiance et des malices lunaires."', ['Self-Serving Bias', 'Association Fallacy', 'Weak Analogy', 'Appeal to Flattery'], 0, 'Elle traite l’éloge comme une preuve de mérite mais le rejet comme une preuve de corruption ou d’absurdité.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : les résultats favorables sont jugés fiables, les autres sont discrédités.'),
];
