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
    level: 1,
    persona_stage: PersonaStage.PLANKTON,
    concept,
    difficulty: 1,
    subLevel: SubLevel.BEGINNER,
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

const BEGINNER_TRAD_EN = 'The claim is treated as right just because it is old, familiar, or customary.';
const INTERMEDIATE_TRAD_EN = 'Informal Logic - The reasoning fails by treating tradition itself as evidence.';
const EXPERT_TRAD_EN = 'Social & Institutional Behaviors - Informal Logic - Relevance failure: age and custom are used as a substitute for justification.';
const BEGINNER_TRAD_FR = 'La thèse est présentée comme correcte simplement parce qu’elle est ancienne, familière ou habituelle.';
const INTERMEDIATE_TRAD_FR = 'Logique informelle - Le raisonnement échoue en traitant la tradition elle-même comme une preuve.';
const EXPERT_TRAD_FR = 'Comportements sociaux et institutionnels - Logique informelle - Échec de pertinence : l’ancienneté et l’habitude remplacent la justification.';

const BEGINNER_POP_EN = 'Popularity is being used as if it proved truth or quality.';
const INTERMEDIATE_POP_EN = 'Informal Logic - The reasoning fails because social approval is substituted for evidence.';
const EXPERT_POP_EN = 'Social & Institutional Behaviors - Informal Logic - Relevance failure: crowd agreement is mistaken for proof.';
const BEGINNER_POP_FR = 'La popularité est utilisée comme si elle prouvait la vérité ou la qualité.';
const INTERMEDIATE_POP_FR = 'Logique informelle - Le raisonnement échoue parce que l’approbation sociale remplace la preuve.';
const EXPERT_POP_FR = 'Comportements sociaux et institutionnels - Logique informelle - Échec de pertinence : l’accord de la foule est pris pour une preuve.';

const BEGINNER_WISH_EN = 'The speaker treats hope or preference as if it changed reality.';
const INTERMEDIATE_WISH_EN = 'Informal Logic - The reasoning fails because desire is smuggled in as evidence.';
const EXPERT_WISH_EN = 'Logical Fallacies - Informal Logic - Relevance failure: a preferred outcome is mistaken for support for the claim.';
const BEGINNER_WISH_FR = 'Le locuteur traite son espoir ou sa préférence comme si cela changeait la réalité.';
const INTERMEDIATE_WISH_FR = 'Logique informelle - Le raisonnement échoue parce que le désir est glissé à la place d’une preuve.';
const EXPERT_WISH_FR = 'Sophismes logiques - Logique informelle - Échec de pertinence : un résultat souhaité est confondu avec un soutien réel de la thèse.';

const BEGINNER_CONF_EN = 'Only the evidence that fits the existing belief gets noticed, while the rest is ignored.';
const INTERMEDIATE_CONF_EN = 'Informal Logic - The reasoning fails through selective attention to belief-friendly evidence.';
const EXPERT_CONF_EN = 'Cognitive Biases - Informal Logic - Evidence failure: confirming cases are privileged while disconfirming cases are filtered out.';
const BEGINNER_CONF_FR = 'Seules les preuves qui vont dans le sens de la croyance sont retenues, tandis que le reste est ignoré.';
const INTERMEDIATE_CONF_FR = 'Logique informelle - Le raisonnement échoue par attention sélective aux éléments favorables à la croyance.';
const EXPERT_CONF_FR = 'Biais cognitifs - Logique informelle - Échec de preuve : les cas confirmants sont privilégiés tandis que les cas contraires sont filtrés.';

export const LEVEL_1_EXPANSION_PACK_2_EN: Question[] = [
  makeQuestion(1321, 'Social & Institutional Behaviors', 'Identify the logical fallacy in this example:\n\n"We cannot switch the neighborhood festival playlist. It has always started with the same three cheesy songs, and that is how it should stay."', ['Appeal to Tradition', 'Ad Hominem', 'Red Herring', 'Wishful Thinking'], 0, 'The fact that something has been done for a long time does not by itself show it is best.', BEGINNER_TRAD_EN, INTERMEDIATE_TRAD_EN, EXPERT_TRAD_EN),
  makeQuestion(1322, 'Social & Institutional Behaviors', 'Identify the logical fallacy in this example:\n\n"My family has always overcooked pasta, so that must be the proper way to make it."', ['Appeal to Popularity', 'Appeal to Tradition', 'Straw Man', 'Appeal to Fear'], 1, 'A family habit is being treated as proof that the habit is correct.', BEGINNER_TRAD_EN, INTERMEDIATE_TRAD_EN, EXPERT_TRAD_EN),
  makeQuestion(1323, 'Social & Institutional Behaviors', 'Identify the logical fallacy in this example:\n\n"The office still uses paper forms because that is how the founder did it in 1987, so digitizing them would obviously be wrong."', ['Slippery Slope', 'Ad Hominem', 'Appeal to Tradition', 'Bandwagon Fallacy'], 2, 'Old practice alone is not a reason to reject improvement.', BEGINNER_TRAD_EN, INTERMEDIATE_TRAD_EN, EXPERT_TRAD_EN),
  makeQuestion(1324, 'Social & Institutional Behaviors', 'Identify the logical fallacy in this example:\n\n"Our street has always parked cars half on the sidewalk, so nobody should question it now."', ['Wishful Thinking', 'Appeal to Authority', 'Appeal to Tradition', 'False Dilemma'], 2, 'Custom is being used to shield the practice from criticism.', BEGINNER_TRAD_EN, INTERMEDIATE_TRAD_EN, EXPERT_TRAD_EN),
  makeQuestion(1325, 'Social & Institutional Behaviors', 'Identify the logical fallacy in this example:\n\n"We should keep the school mascot costume unbearably hot and itchy because students before us suffered through it too."', ['Appeal to Tradition', 'Appeal to Novelty', 'Red Herring', 'Appeal to Pity'], 0, 'Past suffering does not justify preserving a bad tradition.', BEGINNER_TRAD_EN, INTERMEDIATE_TRAD_EN, EXPERT_TRAD_EN),

  makeQuestion(1326, 'Social & Institutional Behaviors', 'Identify the logical fallacy in this example:\n\n"This smoothie shop has a line out the door, so the mango-kale special must be incredible."', ['Appeal to Popularity', 'False Cause', 'Wishful Thinking', 'Slippery Slope'], 0, 'A crowd may show popularity, not actual quality.', BEGINNER_POP_EN, INTERMEDIATE_POP_EN, EXPERT_POP_EN),
  makeQuestion(1327, 'Social & Institutional Behaviors', 'Identify the logical fallacy in this example:\n\n"Everyone in my building uses that budgeting app, so it has to be the smartest way to manage money."', ['Ad Hominem', 'Appeal to Popularity', 'Red Herring', 'Straw Man'], 1, 'Widespread use does not prove the app is best.', BEGINNER_POP_EN, INTERMEDIATE_POP_EN, EXPERT_POP_EN),
  makeQuestion(1328, 'Social & Institutional Behaviors', 'Identify the logical fallacy in this example:\n\n"The whole group chat thinks the rumor is true, so there is no point checking whether it is accurate."', ['Appeal to Fear', 'Bandwagon Fallacy', 'Ad Hominem', 'Wishful Thinking'], 1, 'Group belief is being treated as if it settled the facts.', BEGINNER_POP_EN, INTERMEDIATE_POP_EN, EXPERT_POP_EN),
  makeQuestion(1329, 'Social & Institutional Behaviors', 'Identify the logical fallacy in this example:\n\n"If millions of people watch that productivity guru, her advice cannot possibly be nonsense."', ['Red Herring', 'Appeal to Authority', 'Appeal to Popularity', 'False Dilemma'], 2, 'Large audiences do not guarantee sound advice.', BEGINNER_POP_EN, INTERMEDIATE_POP_EN, EXPERT_POP_EN),
  makeQuestion(1330, 'Social & Institutional Behaviors', 'Identify the logical fallacy in this example:\n\n"All the cool parents at school bought this science kit, so obviously it is the best one."', ['Appeal to Pity', 'Wishful Thinking', 'Slippery Slope', 'Appeal to Popularity'], 3, 'Social status and popularity are replacing evidence about quality.', BEGINNER_POP_EN, INTERMEDIATE_POP_EN, EXPERT_POP_EN),

  makeQuestion(1331, 'Logical Fallacies', 'Identify the logical fallacy in this example:\n\n"I do not need to bring an umbrella. It cannot rain on my day off. That would be rude."', ['Wishful Thinking', 'Appeal to Tradition', 'Ad Hominem', 'Red Herring'], 0, 'Wanting a sunny day is not evidence about the weather.', BEGINNER_WISH_EN, INTERMEDIATE_WISH_EN, EXPERT_WISH_EN),
  makeQuestion(1332, 'Logical Fallacies', 'Identify the logical fallacy in this example:\n\n"This cake will definitely turn out fine even though I forgot the sugar. I am choosing positive energy."', ['Appeal to Popularity', 'Wishful Thinking', 'Slippery Slope', 'False Cause'], 1, 'Positive feelings do not replace missing ingredients.', BEGINNER_WISH_EN, INTERMEDIATE_WISH_EN, EXPERT_WISH_EN),
  makeQuestion(1333, 'Logical Fallacies', 'Identify the logical fallacy in this example:\n\n"My phone battery cannot die before boarding. I have manifested too hard for that."', ['Ad Hominem', 'Red Herring', 'Wishful Thinking', 'Appeal to Fear'], 2, 'Manifesting a preferred outcome does not change the battery level.', BEGINNER_WISH_EN, INTERMEDIATE_WISH_EN, EXPERT_WISH_EN),
  makeQuestion(1334, 'Logical Fallacies', 'Identify the logical fallacy in this example:\n\n"We are absolutely going to win trivia night because I already promised everyone a victory burger."', ['Bandwagon Fallacy', 'Wishful Thinking', 'Appeal to Tradition', 'Straw Man'], 1, 'Making plans for a win is not evidence that the win will happen.', BEGINNER_WISH_EN, INTERMEDIATE_WISH_EN, EXPERT_WISH_EN),
  makeQuestion(1335, 'Logical Fallacies', 'Identify the logical fallacy in this example:\n\n"The landlord must approve my pet deposit refund. I have decided that this month is for blessings only."', ['Red Herring', 'False Dilemma', 'Appeal to Novelty', 'Wishful Thinking'], 3, 'A desired outcome is being treated as if it proves itself.', BEGINNER_WISH_EN, INTERMEDIATE_WISH_EN, EXPERT_WISH_EN),

  makeQuestion(1336, 'Cognitive Biases', 'Identify the logical fallacy in this example:\n\n"Every time my bus is late, I remember it for days. The dozens of times it arrives on time do not count, so the route is obviously always late."', ['Confirmation Bias', 'Appeal to Fear', 'Slippery Slope', 'Wishful Thinking'], 0, 'The speaker remembers only the evidence that supports the complaint.', BEGINNER_CONF_EN, INTERMEDIATE_CONF_EN, EXPERT_CONF_EN),
  makeQuestion(1337, 'Cognitive Biases', 'Identify the logical fallacy in this example:\n\n"Jules thinks his neighbor hates him, so he notices every short hello but ignores the times she brings his packages inside."', ['Appeal to Tradition', 'Confirmation Bias', 'Red Herring', 'Appeal to Popularity'], 1, 'He is filtering the evidence to favor his existing belief.', BEGINNER_CONF_EN, INTERMEDIATE_CONF_EN, EXPERT_CONF_EN),
  makeQuestion(1338, 'Cognitive Biases', 'Identify the logical fallacy in this example:\n\n"Mina believes her cat is a genius, so she proudly records every successful trick and forgets the 40 times the cat just stares at the wall."', ['Ad Hominem', 'Straw Man', 'Confirmation Bias', 'Appeal to Pity'], 2, 'Only the confirming cases are being counted.', BEGINNER_CONF_EN, INTERMEDIATE_CONF_EN, EXPERT_CONF_EN),
  makeQuestion(1339, 'Cognitive Biases', 'Identify the logical fallacy in this example:\n\n"Theo is convinced the new manager is unfair, so he collects every annoying decision but shrugs off the ones that help the team."', ['Wishful Thinking', 'Bandwagon Fallacy', 'Red Herring', 'Confirmation Bias'], 3, 'The evidence is being sorted in a one-sided way.', BEGINNER_CONF_EN, INTERMEDIATE_CONF_EN, EXPERT_CONF_EN),
  makeQuestion(1340, 'Cognitive Biases', 'Identify the logical fallacy in this example:\n\n"Sara believes oat milk ruins coffee, so she notices every bad oat latte and instantly forgets the good ones."', ['Appeal to Novelty', 'Confirmation Bias', 'Ad Hominem', 'Appeal to Authority'], 1, 'She pays attention only to experiences that support her prior view.', BEGINNER_CONF_EN, INTERMEDIATE_CONF_EN, EXPERT_CONF_EN),
];

export const LEVEL_1_EXPANSION_PACK_2_FR: Question[] = [
  makeQuestion(1321, 'Comportements sociaux et institutionnels', 'Identifiez le sophisme dans cet exemple :\n\n"On ne peut pas changer la playlist de la fête du quartier. Elle a toujours commencé par les trois mêmes chansons ringardes, donc c\'est forcément comme ça qu\'il faut continuer."', ['Appeal to Tradition', 'Ad Hominem', 'Red Herring', 'Wishful Thinking'], 0, 'Le fait qu\'une chose existe depuis longtemps ne montre pas à lui seul qu\'elle est meilleure.', BEGINNER_TRAD_FR, INTERMEDIATE_TRAD_FR, EXPERT_TRAD_FR),
  makeQuestion(1322, 'Comportements sociaux et institutionnels', 'Identifiez le sophisme dans cet exemple :\n\n"Dans ma famille, on a toujours trop cuit les pâtes, donc ce doit être la vraie bonne manière de les préparer."', ['Appeal to Popularity', 'Appeal to Tradition', 'Straw Man', 'Appeal to Fear'], 1, 'Une habitude familiale est traitée comme la preuve que cette habitude est correcte.', BEGINNER_TRAD_FR, INTERMEDIATE_TRAD_FR, EXPERT_TRAD_FR),
  makeQuestion(1323, 'Comportements sociaux et institutionnels', 'Identifiez le sophisme dans cet exemple :\n\n"Le bureau utilise encore des formulaires papier parce que le fondateur faisait comme ça en 1987, donc les numériser serait évidemment une erreur."', ['Slippery Slope', 'Ad Hominem', 'Appeal to Tradition', 'Bandwagon Fallacy'], 2, 'Une vieille pratique ne suffit pas à rejeter une amélioration.', BEGINNER_TRAD_FR, INTERMEDIATE_TRAD_FR, EXPERT_TRAD_FR),
  makeQuestion(1324, 'Comportements sociaux et institutionnels', 'Identifiez le sophisme dans cet exemple :\n\n"Dans notre rue, on a toujours garé les voitures à moitié sur le trottoir, donc personne ne devrait remettre ça en question aujourd\'hui."', ['Wishful Thinking', 'Appeal to Authority', 'Appeal to Tradition', 'False Dilemma'], 2, 'L\'habitude sert ici de bouclier contre la critique.', BEGINNER_TRAD_FR, INTERMEDIATE_TRAD_FR, EXPERT_TRAD_FR),
  makeQuestion(1325, 'Comportements sociaux et institutionnels', 'Identifiez le sophisme dans cet exemple :\n\n"On devrait garder le costume de mascotte de l\'école insupportablement chaud et qui gratte, parce que les élèves d\'avant ont souffert avec lui eux aussi."', ['Appeal to Tradition', 'Appeal to Novelty', 'Red Herring', 'Appeal to Pity'], 0, 'Les souffrances passées ne justifient pas le maintien d\'une mauvaise tradition.', BEGINNER_TRAD_FR, INTERMEDIATE_TRAD_FR, EXPERT_TRAD_FR),

  makeQuestion(1326, 'Comportements sociaux et institutionnels', 'Identifiez le sophisme dans cet exemple :\n\n"Cette boutique de smoothies a une file qui sort jusque dans la rue, donc le spécial mangue-kale doit être incroyable."', ['Appeal to Popularity', 'False Cause', 'Wishful Thinking', 'Slippery Slope'], 0, 'Une foule peut montrer la popularité, pas la qualité réelle.', BEGINNER_POP_FR, INTERMEDIATE_POP_FR, EXPERT_POP_FR),
  makeQuestion(1327, 'Comportements sociaux et institutionnels', 'Identifiez le sophisme dans cet exemple :\n\n"Tout le monde dans mon immeuble utilise cette application de budget, donc ce doit être la manière la plus intelligente de gérer son argent."', ['Ad Hominem', 'Appeal to Popularity', 'Red Herring', 'Straw Man'], 1, 'Une utilisation répandue ne prouve pas que l\'application est la meilleure.', BEGINNER_POP_FR, INTERMEDIATE_POP_FR, EXPERT_POP_FR),
  makeQuestion(1328, 'Comportements sociaux et institutionnels', 'Identifiez le sophisme dans cet exemple :\n\n"Tout le groupe de discussion pense que la rumeur est vraie, donc cela ne sert à rien de vérifier si elle est exacte."', ['Appeal to Fear', 'Bandwagon Fallacy', 'Ad Hominem', 'Wishful Thinking'], 1, 'La croyance du groupe est traitée comme si elle réglait les faits.', BEGINNER_POP_FR, INTERMEDIATE_POP_FR, EXPERT_POP_FR),
  makeQuestion(1329, 'Comportements sociaux et institutionnels', 'Identifiez le sophisme dans cet exemple :\n\n"Si des millions de personnes regardent cette gourou de la productivité, ses conseils ne peuvent pas être absurdes."', ['Red Herring', 'Appeal to Authority', 'Appeal to Popularity', 'False Dilemma'], 2, 'Un grand public ne garantit pas des conseils solides.', BEGINNER_POP_FR, INTERMEDIATE_POP_FR, EXPERT_POP_FR),
  makeQuestion(1330, 'Comportements sociaux et institutionnels', 'Identifiez le sophisme dans cet exemple :\n\n"Tous les parents cools de l\'école ont acheté ce kit scientifique, donc c\'est forcément le meilleur."', ['Appeal to Pity', 'Wishful Thinking', 'Slippery Slope', 'Appeal to Popularity'], 3, 'Le statut social et la popularité remplacent ici toute preuve de qualité.', BEGINNER_POP_FR, INTERMEDIATE_POP_FR, EXPERT_POP_FR),

  makeQuestion(1331, 'Sophismes logiques', 'Identifiez le sophisme dans cet exemple :\n\n"Je n\'ai pas besoin de prendre un parapluie. Il ne peut pas pleuvoir pendant mon jour de repos. Ce serait impoli."', ['Wishful Thinking', 'Appeal to Tradition', 'Ad Hominem', 'Red Herring'], 0, 'Avoir envie d\'une journée ensoleillée n\'est pas une preuve sur la météo.', BEGINNER_WISH_FR, INTERMEDIATE_WISH_FR, EXPERT_WISH_FR),
  makeQuestion(1332, 'Sophismes logiques', 'Identifiez le sophisme dans cet exemple :\n\n"Ce gâteau va forcément être réussi même si j\'ai oublié le sucre. Je choisis l\'énergie positive."', ['Appeal to Popularity', 'Wishful Thinking', 'Slippery Slope', 'False Cause'], 1, 'Les bonnes ondes ne remplacent pas les ingrédients manquants.', BEGINNER_WISH_FR, INTERMEDIATE_WISH_FR, EXPERT_WISH_FR),
  makeQuestion(1333, 'Sophismes logiques', 'Identifiez le sophisme dans cet exemple :\n\n"La batterie de mon téléphone ne peut pas mourir avant l\'embarquement. J\'ai trop manifesté pour ça."', ['Ad Hominem', 'Red Herring', 'Wishful Thinking', 'Appeal to Fear'], 2, 'Manifester un résultat préféré ne change pas le niveau de batterie.', BEGINNER_WISH_FR, INTERMEDIATE_WISH_FR, EXPERT_WISH_FR),
  makeQuestion(1334, 'Sophismes logiques', 'Identifiez le sophisme dans cet exemple :\n\n"On va forcément gagner la soirée quiz, parce que j\'ai déjà promis à tout le monde un burger de la victoire."', ['Bandwagon Fallacy', 'Wishful Thinking', 'Appeal to Tradition', 'Straw Man'], 1, 'Faire des plans pour une victoire ne prouve pas que la victoire arrivera.', BEGINNER_WISH_FR, INTERMEDIATE_WISH_FR, EXPERT_WISH_FR),
  makeQuestion(1335, 'Sophismes logiques', 'Identifiez le sophisme dans cet exemple :\n\n"Le propriétaire doit forcément me rendre ma caution pour l\'animal. J\'ai décidé que ce mois-ci serait placé sous le signe des bénédictions seulement."', ['Red Herring', 'False Dilemma', 'Appeal to Novelty', 'Wishful Thinking'], 3, 'Un résultat désiré est traité comme s\'il se prouvait lui-même.', BEGINNER_WISH_FR, INTERMEDIATE_WISH_FR, EXPERT_WISH_FR),

  makeQuestion(1336, 'Biais cognitifs', 'Identifiez le sophisme dans cet exemple :\n\n"Chaque fois que mon bus est en retard, je m\'en souviens pendant des jours. Les dizaines de fois où il arrive à l\'heure ne comptent pas, donc cette ligne est évidemment toujours en retard."', ['Confirmation Bias', 'Appeal to Fear', 'Slippery Slope', 'Wishful Thinking'], 0, 'Le locuteur ne retient que les éléments qui soutiennent sa plainte.', BEGINNER_CONF_FR, INTERMEDIATE_CONF_FR, EXPERT_CONF_FR),
  makeQuestion(1337, 'Biais cognitifs', 'Identifiez le sophisme dans cet exemple :\n\n"Jules pense que sa voisine le déteste, donc il remarque chaque salut un peu sec mais ignore les fois où elle rentre ses colis à l\'intérieur."', ['Appeal to Tradition', 'Confirmation Bias', 'Red Herring', 'Appeal to Popularity'], 1, 'Il filtre les preuves pour favoriser sa croyance de départ.', BEGINNER_CONF_FR, INTERMEDIATE_CONF_FR, EXPERT_CONF_FR),
  makeQuestion(1338, 'Biais cognitifs', 'Identifiez le sophisme dans cet exemple :\n\n"Mina est convaincue que son chat est un génie, alors elle enregistre fièrement chaque tour réussi et oublie les 40 fois où le chat fixe juste le mur."', ['Ad Hominem', 'Straw Man', 'Confirmation Bias', 'Appeal to Pity'], 2, 'Seuls les cas qui confirment sont pris en compte.', BEGINNER_CONF_FR, INTERMEDIATE_CONF_FR, EXPERT_CONF_FR),
  makeQuestion(1339, 'Biais cognitifs', 'Identifiez le sophisme dans cet exemple :\n\n"Theo est convaincu que le nouveau manager est injuste, alors il collectionne toutes les décisions agaçantes mais balaie celles qui aident l\'équipe."', ['Wishful Thinking', 'Bandwagon Fallacy', 'Red Herring', 'Confirmation Bias'], 3, 'Les preuves sont triées d\'une manière totalement à sens unique.', BEGINNER_CONF_FR, INTERMEDIATE_CONF_FR, EXPERT_CONF_FR),
  makeQuestion(1340, 'Biais cognitifs', 'Identifiez le sophisme dans cet exemple :\n\n"Sara pense que le lait d\'avoine ruine le café, donc elle remarque chaque mauvais latte à l\'avoine et oublie aussitôt les bons."', ['Appeal to Novelty', 'Confirmation Bias', 'Ad Hominem', 'Appeal to Authority'], 1, 'Elle ne prête attention qu\'aux expériences qui soutiennent sa vision préalable.', BEGINNER_CONF_FR, INTERMEDIATE_CONF_FR, EXPERT_CONF_FR),
];
