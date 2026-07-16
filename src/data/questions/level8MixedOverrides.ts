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

const BEGINNER_EN = 'The mistake comes from overestimating self-control or rewriting events to flatter yourself instead of judging what the evidence shows.';
const INTERMEDIATE_EN = 'Informal Logic - Level 8 mixed failure: confidence about self-restraint or self-image replaces clear-eyed reasoning.';
const BEGINNER_FR = 'L’erreur vient du fait qu’on surestime son propre contrôle ou qu’on réécrit les événements pour se valoriser au lieu de juger selon les preuves.';
const INTERMEDIATE_FR = 'Logique informelle - Échec mixte de niveau 8 : la confiance dans sa maîtrise de soi ou dans son image personnelle remplace un raisonnement lucide.';

export const LEVEL_8_MIXED_OVERRIDES_EN: Question[] = [
  makeQuestion(700, 'Cognitive Biases', 3, SubLevel.EXPERT, 'Identify the logical fallacy in this example:\n\n"Darren says he can spend the weekend in Vegas, carry a single emergency bill, and definitely resist blowing the rest because he knows himself too well to lose control."', ['Limited Scope', 'Weak Analogy', 'Restraint Bias', 'Abusive Ad Hominem'], 2, 'He is overestimating his ability to control his own future impulses in a tempting situation.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: imagined self-control is rated far higher than evidence justifies.'),
  makeQuestion(701, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"Nina keeps a giant cake in the fridge for a party tomorrow and says, ‘It is fine, I can absolutely stop after one bite at midnight.’"', ['Reification', 'The Gambler\'s Fallacy', 'Restraint Bias', 'Appeal to Wealth'], 2, 'She is assuming future temptation will be easier to resist than it probably will be.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: confidence about future restraint outruns realistic self-knowledge.'),
  makeQuestion(702, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"Leo downloads three games during finals week and says none of them will distract him because he can quit whenever he wants."', ['Selection Bias', 'The Pro-Innovation Bias', 'The Illusion of Validity', 'Restraint Bias'], 3, 'He is overconfident about his ability to resist distraction once it is available.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: easy confidence about self-discipline is standing in for evidence.'),
  makeQuestion(703, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"After her risky shortcut works once, Ava says, ‘That happened because I am resourceful.’ When the same trick fails the next day, she blames bad luck and incompetent coworkers."', ['Innuendo', 'Moving the Goalposts', 'Self-Serving Bias', 'Gish Gallop'], 2, 'She credits success to her own skill but blames failure on outside forces.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: outcomes are explained in whatever way protects the ego.'),
];

export const LEVEL_8_MIXED_OVERRIDES_FR: Question[] = [
  makeQuestion(700, 'Biais cognitifs', 3, SubLevel.EXPERT, 'Identifiez le sophisme dans cet exemple :\n\n"Darren dit qu’il peut passer le week-end à Vegas, garder un seul billet d’urgence, et résister sans problème au reste parce qu’il se connaît trop bien pour perdre le contrôle."', ['Limited Scope', 'Weak Analogy', 'Restraint Bias', 'Abusive Ad Hominem'], 2, 'Il surestime sa capacité à contrôler ses propres impulsions futures dans une situation tentante.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : la maîtrise de soi imaginée est évaluée bien plus haut que ce que les preuves justifient.'),
  makeQuestion(701, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Nina garde un énorme gâteau au frigo pour la fête de demain et dit : « Ce n’est pas grave, je peux totalement m’arrêter après une seule bouchée à minuit. »"', ['Reification', 'The Gambler\'s Fallacy', 'Restraint Bias', 'Appeal to Wealth'], 2, 'Elle suppose qu’il sera plus facile de résister à la tentation future que ce ne le sera probablement vraiment.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : la confiance dans sa retenue future dépasse une connaissance réaliste de soi.'),
  makeQuestion(702, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Léo télécharge trois jeux pendant la période d’examens et dit qu’aucun ne le distraira parce qu’il peut arrêter quand il veut."', ['Selection Bias', 'The Pro-Innovation Bias', 'The Illusion of Validity', 'Restraint Bias'], 3, 'Il se montre trop confiant dans sa capacité à résister à la distraction une fois qu’elle est disponible.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : une confiance facile dans l’autodiscipline remplace les preuves.'),
  makeQuestion(703, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Après qu’un raccourci risqué a marché une fois, Ava dit : « C’est parce que je suis débrouillarde. » Quand le même coup échoue le lendemain, elle accuse la malchance et ses collègues incompétents."', ['Innuendo', 'Moving the Goalposts', 'Self-Serving Bias', 'Gish Gallop'], 2, 'Elle attribue le succès à son talent personnel mais rejette l’échec sur des causes extérieures.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : les résultats sont expliqués de la manière qui protège le mieux l’ego.'),
];
