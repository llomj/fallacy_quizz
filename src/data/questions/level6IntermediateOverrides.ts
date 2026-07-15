import type { Question } from '../../types';
import { PersonaStage, SubLevel } from '../../types';

function makeQuestion(
  id: number,
  concept: string,
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
    level: 6,
    persona_stage: PersonaStage.SEAL,
    concept,
    difficulty: 2,
    subLevel: SubLevel.INTERMEDIATE,
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

const BEGINNER_EN = 'The mistake comes from a sharper reasoning shortcut where the options are artificially narrowed, different things are treated as equal, or a bad argument is mistaken for a false claim.';
const INTERMEDIATE_EN = 'Informal Logic - Level 6 intermediate failure: the reasoning collapses nuance into fake binaries, false equivalences, or the mistaken idea that weak argument automatically means false conclusion.';
const BEGINNER_FR = 'L’erreur vient d’un raccourci de raisonnement plus net où les options sont artificiellement réduites, où des choses différentes sont traitées comme équivalentes, ou où un mauvais argument est pris pour une conclusion fausse.';
const INTERMEDIATE_FR = 'Logique informelle - Échec intermédiaire de niveau 6 : le raisonnement écrase les nuances en faux binaires, en fausses équivalences, ou en l’idée erronée qu’un argument faible rend automatiquement la conclusion fausse.';

export const LEVEL_6_INTERMEDIATE_OVERRIDES_EN: Question[] = [
  makeQuestion(534, 'Logical Fallacies', 'Identify the logical fallacy in this example:\n\n"The director tells the team, ‘Either we launch exactly my version tonight or we may as well shut the whole company down.’"', ['Status Quo Bias', 'Incomplete Comparison', 'Quoting Out of Context', 'False Dichotomy'], 3, 'He presents only two extreme options while ignoring the many realistic middle choices.', BEGINNER_EN, INTERMEDIATE_EN, 'Logical Fallacies - Informal Logic - Level 6 intermediate failure: a forced binary replaces the real decision space.'),
  makeQuestion(535, 'Logical Fallacies', 'Identify the logical fallacy in this example:\n\n"A commentator says criticizing a transportation policy is basically the same thing as betraying the country."', ['False Equivalence', 'Fallacy Fallacy', 'Hot-Hand Fallacy', 'Weak Analogy'], 0, 'Two very different actions are being treated as if they were morally or logically identical.', BEGINNER_EN, INTERMEDIATE_EN, 'Logical Fallacies - Informal Logic - Level 6 intermediate failure: a dramatic comparison erases the real difference between unlike things.'),
  makeQuestion(536, 'Logical Fallacies', 'Identify the logical fallacy in this example:\n\n"Rina says downloading one movie illegally is morally the same as running an international theft ring."', ['Appeal to Antiquity', 'False Equivalence', 'Straw Man', 'No True Scotsman'], 1, 'The comparison ignores the major differences in scale and context.', BEGINNER_EN, INTERMEDIATE_EN, 'Logical Fallacies - Informal Logic - Level 6 intermediate failure: unequal acts are flattened into fake sameness.'),
  makeQuestion(537, 'Logical Fallacies', 'Identify the logical fallacy in this example:\n\n"A host says that asking for more evidence is basically the same as denying the event ever happened."', ['Availability Heuristic', 'Red Herring', 'False Equivalence', 'Correlation Equals Causation'], 2, 'Requesting proof and outright denial are not the same position.', BEGINNER_EN, INTERMEDIATE_EN, 'Logical Fallacies - Informal Logic - Level 6 intermediate failure: skepticism is mislabeled as total rejection.'),

  makeQuestion(538, 'Logical Fallacies', 'Identify the logical fallacy in this example:\n\n"After hearing a debater use one weak analogy, Jules says, ‘Great, then her entire conclusion must be false.’"', ['Fallacy Fallacy', 'Unit Bias', 'Risk Compensation', 'Non Sequitur'], 0, 'A flaw in the argument does not automatically prove the conclusion false.', BEGINNER_EN, INTERMEDIATE_EN, 'Logical Fallacies - Informal Logic - Level 6 intermediate failure: bad reasoning is mistaken for disproof.'),
  makeQuestion(539, 'Logical Fallacies', 'Identify the logical fallacy in this example:\n\n"The startup founder gives a terrible presentation, so Mara decides the product idea itself cannot possibly be good."', ['Guilt by Association', "Sayre's Law", 'Fallacy Fallacy', 'Moralistic Fallacy'], 2, 'A poor defense of the idea is being confused with a refutation of the idea.', BEGINNER_EN, INTERMEDIATE_EN, 'Logical Fallacies - Informal Logic - Level 6 intermediate failure: the quality of the pitch is being confused with the truth of the claim.'),
  makeQuestion(540, 'Logical Fallacies', 'Identify the logical fallacy in this example:\n\n"Because the article explaining climate science used a sloppy chart, Ben concludes climate science itself must be wrong."', ['Fallacy Fallacy', 'Questionable Cause', 'Faulty Generalization', 'Overconfidence Effect'], 0, 'The weak explanation may be flawed, but that alone does not settle the underlying claim.', BEGINNER_EN, INTERMEDIATE_EN, 'Logical Fallacies - Informal Logic - Level 6 intermediate failure: a flawed presentation is treated as if it falsifies the subject.'),
];

export const LEVEL_6_INTERMEDIATE_OVERRIDES_FR: Question[] = [
  makeQuestion(534, 'Sophismes logiques', 'Identifiez le sophisme dans cet exemple :\n\n"Le directeur dit à l’équipe : « Soit on lance exactement ma version ce soir, soit on peut carrément fermer toute l’entreprise. »"', ['Status Quo Bias', 'Incomplete Comparison', 'Quoting Out of Context', 'False Dichotomy'], 3, 'Il ne présente que deux options extrêmes en ignorant toutes les alternatives réalistes entre les deux.', BEGINNER_FR, INTERMEDIATE_FR, 'Sophismes logiques - Logique informelle - Échec intermédiaire de niveau 6 : un faux binaire remplace le véritable espace de décision.'),
  makeQuestion(535, 'Sophismes logiques', 'Identifiez le sophisme dans cet exemple :\n\n"Un commentateur affirme que critiquer une politique de transport revient pratiquement à trahir le pays."', ['False Equivalence', 'Fallacy Fallacy', 'Hot-Hand Fallacy', 'Weak Analogy'], 0, 'Deux actions très différentes sont traitées comme si elles étaient moralement ou logiquement identiques.', BEGINNER_FR, INTERMEDIATE_FR, 'Sophismes logiques - Logique informelle - Échec intermédiaire de niveau 6 : une comparaison dramatique efface la vraie différence entre des choses dissemblables.'),
  makeQuestion(536, 'Sophismes logiques', 'Identifiez le sophisme dans cet exemple :\n\n"Rina dit que télécharger illégalement un film, c’est moralement la même chose que diriger un réseau international de vol."', ['Appeal to Antiquity', 'False Equivalence', 'Straw Man', 'No True Scotsman'], 1, 'La comparaison ignore les différences majeures d’échelle et de contexte.', BEGINNER_FR, INTERMEDIATE_FR, 'Sophismes logiques - Logique informelle - Échec intermédiaire de niveau 6 : des actes inégaux sont aplatis en une fausse identité.'),
  makeQuestion(537, 'Sophismes logiques', 'Identifiez le sophisme dans cet exemple :\n\n"Un animateur affirme que demander davantage de preuves revient pratiquement à nier que l’événement a eu lieu."', ['Availability Heuristic', 'Red Herring', 'False Equivalence', 'Correlation Equals Causation'], 2, 'Demander des preuves et nier totalement ne sont pas la même position.', BEGINNER_FR, INTERMEDIATE_FR, 'Sophismes logiques - Logique informelle - Échec intermédiaire de niveau 6 : le scepticisme est étiqueté à tort comme un rejet total.'),

  makeQuestion(538, 'Sophismes logiques', 'Identifiez le sophisme dans cet exemple :\n\n"Après avoir entendu une seule analogie faible dans un débat, Jules dit : « Parfait, donc toute sa conclusion doit être fausse. »"', ['Fallacy Fallacy', 'Unit Bias', 'Risk Compensation', 'Non Sequitur'], 0, 'Une faille dans l’argument ne prouve pas automatiquement que la conclusion est fausse.', BEGINNER_FR, INTERMEDIATE_FR, 'Sophismes logiques - Logique informelle - Échec intermédiaire de niveau 6 : un mauvais raisonnement est pris pour une réfutation.'),
  makeQuestion(539, 'Sophismes logiques', 'Identifiez le sophisme dans cet exemple :\n\n"Le fondateur de la startup fait une présentation catastrophique, alors Mara décide que l’idée du produit ne peut pas être bonne."', ['Guilt by Association', "Sayre's Law", 'Fallacy Fallacy', 'Moralistic Fallacy'], 2, 'Une mauvaise défense de l’idée est confondue avec une réfutation de l’idée.', BEGINNER_FR, INTERMEDIATE_FR, 'Sophismes logiques - Logique informelle - Échec intermédiaire de niveau 6 : la qualité du discours est confondue avec la vérité de l’affirmation.'),
  makeQuestion(540, 'Sophismes logiques', 'Identifiez le sophisme dans cet exemple :\n\n"Parce que l’article expliquant la science du climat utilisait un graphique maladroit, Ben conclut que la science du climat elle-même doit être fausse."', ['Fallacy Fallacy', 'Questionable Cause', 'Faulty Generalization', 'Overconfidence Effect'], 0, 'L’explication peut être mauvaise, mais cela ne tranche pas à lui seul la question de fond.', BEGINNER_FR, INTERMEDIATE_FR, 'Sophismes logiques - Logique informelle - Échec intermédiaire de niveau 6 : une présentation défaillante est traitée comme si elle falsifiait le sujet.'),
];
