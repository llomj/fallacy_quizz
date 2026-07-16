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

const BEGINNER_EN = 'The mistake comes from turning every result into a story that makes the speaker look wiser, stronger, or more unfairly treated.';
const INTERMEDIATE_EN = 'Informal Logic - Level 8 mixed failure: self-protective interpretation overrides fair judgment of causes and responsibility.';
const BEGINNER_FR = 'L’erreur vient du fait qu’on transforme chaque résultat en histoire où le locuteur paraît plus brillant, plus fort ou plus injustement traité.';
const INTERMEDIATE_FR = 'Logique informelle - Échec mixte de niveau 8 : l’interprétation protectrice de soi prend le dessus sur un jugement équitable des causes et des responsabilités.';

export const LEVEL_8_MIXED_PART4_OVERRIDES_EN: Question[] = [
  makeQuestion(710, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"After her video goes viral, Keira says people were smart enough to recognize quality. When her next upload flops, she says the algorithm clearly targeted her out of fear."', ['Self-Serving Bias', 'Appeal to Popularity', 'Regression Fallacy', 'Base Rate Fallacy'], 0, 'Success is treated as proof of personal excellence, while failure is blamed on an outside enemy.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: praise is claimed personally, but blame is reassigned externally.'),
  makeQuestion(711, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"Owen says the team won because he inspired everyone with his presence. When they lose the next week, he says morale was ruined by other people’s negativity."', ['Weak Analogy', 'Cherry Picking', 'Self-Serving Bias', 'Special Pleading'], 2, 'He takes ownership of the win but avoids ownership of the loss.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: the self gets the medal while others get the blame.'),
  makeQuestion(712, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"When Priya gets promoted, she says management finally noticed her genius. When a coworker gets promoted instead, she says the process was obviously political and meaningless."', ['False Dilemma', 'Self-Serving Bias', 'Appeal to Consequences', 'Association Fallacy'], 1, 'The same process is treated as valid when it favors her and corrupt when it does not.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: standards shift to protect self-esteem across opposite outcomes.'),
];

export const LEVEL_8_MIXED_PART4_OVERRIDES_FR: Question[] = [
  makeQuestion(710, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Après qu’une de ses vidéos devient virale, Keira dit que les gens ont été assez intelligents pour reconnaître la qualité. Quand la suivante échoue, elle dit que l’algorithme l’a clairement visée par peur."', ['Self-Serving Bias', 'Appeal to Popularity', 'Regression Fallacy', 'Base Rate Fallacy'], 0, 'Le succès est traité comme la preuve d’une excellence personnelle, tandis que l’échec est rejeté sur un ennemi extérieur.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : les compliments sont revendiqués personnellement, mais le blâme est déplacé vers l’extérieur.'),
  makeQuestion(711, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Owen dit que l’équipe a gagné parce qu’il a inspiré tout le monde par sa seule présence. Quand elle perd la semaine suivante, il dit que le moral a été saboté par la négativité des autres."', ['Weak Analogy', 'Cherry Picking', 'Self-Serving Bias', 'Special Pleading'], 2, 'Il s’approprie la victoire mais évite de s’approprier la défaite.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : le moi prend la médaille, les autres prennent la faute.'),
  makeQuestion(712, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Quand Priya obtient une promotion, elle dit que la direction a enfin remarqué son génie. Quand c’est un collègue qui est promu à sa place, elle dit que le processus était évidemment politique et sans valeur."', ['False Dilemma', 'Self-Serving Bias', 'Appeal to Consequences', 'Association Fallacy'], 1, 'Le même processus est jugé valable quand il la favorise et corrompu quand il ne la favorise pas.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : les critères changent pour protéger l’estime de soi face à des résultats opposés.'),
];
