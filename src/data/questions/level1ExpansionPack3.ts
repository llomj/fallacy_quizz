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

const BEGINNER_AUTH_EN = 'The claim is treated as true because an authority said it, even though that is not enough by itself.';
const INTERMEDIATE_AUTH_EN = 'Informal Logic - The reasoning fails by substituting authority endorsement for direct support.';
const EXPERT_AUTH_EN = 'Logical Fallacies - Informal Logic - Relevance failure: testimony from an authority is used where actual evidence is needed.';
const BEGINNER_AUTH_FR = 'La thèse est présentée comme vraie parce qu’une autorité l’a affirmée, alors que cela ne suffit pas à lui seul.';
const INTERMEDIATE_AUTH_FR = 'Logique informelle - Le raisonnement échoue parce que l’aval d’une autorité remplace un soutien direct.';
const EXPERT_AUTH_FR = 'Sophismes logiques - Logique informelle - Échec de pertinence : le témoignage d’une autorité est utilisé là où de vraies preuves sont nécessaires.';

const BEGINNER_IGN_EN = 'The speaker treats a lack of proof against something as if that proved it true.';
const INTERMEDIATE_IGN_EN = 'Informal Logic - The reasoning fails by converting missing disproof into positive support.';
const EXPERT_IGN_EN = 'Logical Fallacies - Informal Logic - Evidence failure: absence of refutation is misused as evidence for the claim.';
const BEGINNER_IGN_FR = 'Le locuteur traite l’absence de preuve contre quelque chose comme si cela prouvait sa vérité.';
const INTERMEDIATE_IGN_FR = 'Logique informelle - Le raisonnement échoue en transformant l’absence de réfutation en soutien positif.';
const EXPERT_IGN_FR = 'Sophismes logiques - Logique informelle - Échec de preuve : l’absence de démenti est utilisée à tort comme preuve de la thèse.';

const BEGINNER_EMO_EN = 'Strong feelings are being used in place of a real reason.';
const INTERMEDIATE_EMO_EN = 'Informal Logic - The reasoning fails because emotional pressure replaces argument.';
const EXPERT_EMO_EN = 'Rhetorical/Discourse Tactics - Informal Logic - Relevance failure: emotion is used as persuasion where evidence is required.';
const BEGINNER_EMO_FR = 'Des émotions fortes sont utilisées à la place d’une vraie raison.';
const INTERMEDIATE_EMO_FR = 'Logique informelle - Le raisonnement échoue parce que la pression émotionnelle remplace l’argument.';
const EXPERT_EMO_FR = 'Tactiques rhétoriques et discursives - Logique informelle - Échec de pertinence : l’émotion sert à persuader là où il faudrait des preuves.';

const BEGINNER_FEAR_EN = 'The speaker tries to push agreement by making the audience anxious or scared.';
const INTERMEDIATE_FEAR_EN = 'Informal Logic - The reasoning fails because fear is used as leverage instead of evidence.';
const EXPERT_FEAR_EN = 'Cognitive Biases - Informal Logic - Relevance failure: threat imagery is substituted for argumentative support.';
const BEGINNER_FEAR_FR = 'Le locuteur cherche à obtenir l’accord en rendant le public anxieux ou effrayé.';
const INTERMEDIATE_FEAR_FR = 'Logique informelle - Le raisonnement échoue parce que la peur sert de levier à la place de la preuve.';
const EXPERT_FEAR_FR = 'Biais cognitifs - Logique informelle - Échec de pertinence : des images menaçantes remplacent le soutien argumentatif.';

export const LEVEL_1_EXPANSION_PACK_3_EN: Question[] = [
  makeQuestion(1341, 'Logical Fallacies', 'Identify the logical fallacy in this example:\n\n"A famous actor says this sleep gummy changed his life, so it must be medically effective."', ['Appeal to Authority', 'Wishful Thinking', 'Red Herring', 'Straw Man'], 0, 'Celebrity praise is being used as if it settled a medical question.', BEGINNER_AUTH_EN, INTERMEDIATE_AUTH_EN, EXPERT_AUTH_EN),
  makeQuestion(1342, 'Logical Fallacies', 'Identify the logical fallacy in this example:\n\n"My dentist says this brand of blender is the best on the market, so I am buying it."', ['Appeal to Fear', 'Appeal to Authority', 'Ad Hominem', 'Slippery Slope'], 1, 'Being a dentist does not make someone an authority on blenders.', BEGINNER_AUTH_EN, INTERMEDIATE_AUTH_EN, EXPERT_AUTH_EN),
  makeQuestion(1343, 'Logical Fallacies', 'Identify the logical fallacy in this example:\n\n"The CEO posted on social media that the office air is perfectly safe, so there is no reason to test it."', ['Bandwagon Fallacy', 'Appeal to Popularity', 'Appeal to Authority', 'Wishful Thinking'], 2, 'The CEO\'s statement is being used instead of actual verification.', BEGINNER_AUTH_EN, INTERMEDIATE_AUTH_EN, EXPERT_AUTH_EN),
  makeQuestion(1344, 'Logical Fallacies', 'Identify the logical fallacy in this example:\n\n"A lifestyle influencer says this backpack fixes posture, so it probably works better than physical therapy."', ['Appeal to Authority', 'False Dilemma', 'Red Herring', 'Appeal to Tradition'], 0, 'The influencer\'s endorsement is not enough to prove the claim.', BEGINNER_AUTH_EN, INTERMEDIATE_AUTH_EN, EXPERT_AUTH_EN),
  makeQuestion(1345, 'Logical Fallacies', 'Identify the logical fallacy in this example:\n\n"My uncle hosts a sports podcast, and he says the housing market will crash next month, so that settles it."', ['Wishful Thinking', 'Appeal to Pity', 'Appeal to Authority', 'Red Herring'], 2, 'Podcast confidence is being treated as economic evidence.', BEGINNER_AUTH_EN, INTERMEDIATE_AUTH_EN, EXPERT_AUTH_EN),

  makeQuestion(1346, 'Logical Fallacies', 'Identify the logical fallacy in this example:\n\n"No one has proved that a tiny dragon is not living in my shed, so I should probably start charging it rent."', ['Appeal to Ignorance', 'Appeal to Authority', 'Slippery Slope', 'Ad Hominem'], 0, 'Not disproving the dragon does not prove it is there.', BEGINNER_IGN_EN, INTERMEDIATE_IGN_EN, EXPERT_IGN_EN),
  makeQuestion(1347, 'Logical Fallacies', 'Identify the logical fallacy in this example:\n\n"You cannot prove the office microwave is not haunted, so we should assume the ghost hates soup."', ['Wishful Thinking', 'Appeal to Ignorance', 'Red Herring', 'False Dilemma'], 1, 'A lack of proof against the haunting is being treated as proof for it.', BEGINNER_IGN_EN, INTERMEDIATE_IGN_EN, EXPERT_IGN_EN),
  makeQuestion(1348, 'Logical Fallacies', 'Identify the logical fallacy in this example:\n\n"Nobody has demonstrated that my lucky socks do not improve Wi-Fi, so I am keeping them next to the router forever."', ['Appeal to Fear', 'Bandwagon Fallacy', 'Appeal to Ignorance', 'Straw Man'], 2, 'Missing disproof is being used as if it confirmed the weird claim.', BEGINNER_IGN_EN, INTERMEDIATE_IGN_EN, EXPERT_IGN_EN),
  makeQuestion(1349, 'Logical Fallacies', 'Identify the logical fallacy in this example:\n\n"Since you cannot prove the neighbor is not spying through her bird feeder, suspicion is the only rational response."', ['Red Herring', 'Wishful Thinking', 'Slippery Slope', 'Appeal to Ignorance'], 3, 'The speaker wrongly treats unrefuted suspicion as established fact.', BEGINNER_IGN_EN, INTERMEDIATE_IGN_EN, EXPERT_IGN_EN),
  makeQuestion(1350, 'Logical Fallacies', 'Identify the logical fallacy in this example:\n\n"Science has not ruled out that my cat understands tax law, so I am calling her my financial adviser."', ['Appeal to Ignorance', 'Appeal to Popularity', 'Appeal to Pity', 'Appeal to Tradition'], 0, 'A gap in disproof is not evidence for the cat\'s expertise.', BEGINNER_IGN_EN, INTERMEDIATE_IGN_EN, EXPERT_IGN_EN),

  makeQuestion(1351, 'Rhetorical/Discourse Tactics', 'Identify the logical fallacy in this example:\n\n"You have to fund my film project. If you say no, you will crush the dreams of a deeply sensitive artist who already bought a velvet cape."', ['Appeal to Emotion', 'Appeal to Authority', 'Ad Hominem', 'Appeal to Tradition'], 0, 'The plea leans on emotion instead of giving a solid reason to fund the project.', BEGINNER_EMO_EN, INTERMEDIATE_EMO_EN, EXPERT_EMO_EN),
  makeQuestion(1352, 'Rhetorical/Discourse Tactics', 'Identify the logical fallacy in this example:\n\n"Please approve my vacation request. My suitcase has already been emotionally preparing for the beach."', ['Wishful Thinking', 'Appeal to Emotion', 'Red Herring', 'Bandwagon Fallacy'], 1, 'The claim depends on emotional framing rather than a real workplace reason.', BEGINNER_EMO_EN, INTERMEDIATE_EMO_EN, EXPERT_EMO_EN),
  makeQuestion(1353, 'Rhetorical/Discourse Tactics', 'Identify the logical fallacy in this example:\n\n"You cannot criticize this restaurant. The chef looks so sad when people mention the overcooked pasta."', ['Appeal to Fear', 'Slippery Slope', 'Appeal to Emotion', 'Appeal to Popularity'], 2, 'The chef\'s sadness is being used to block evaluation of the food itself.', BEGINNER_EMO_EN, INTERMEDIATE_EMO_EN, EXPERT_EMO_EN),
  makeQuestion(1354, 'Rhetorical/Discourse Tactics', 'Identify the logical fallacy in this example:\n\n"Do not question my plan to adopt three goats. Think about how heartbroken my Pinterest board would be."', ['Straw Man', 'Appeal to Emotion', 'Appeal to Ignorance', 'Red Herring'], 1, 'The argument leans on emotional imagery instead of practical reasons.', BEGINNER_EMO_EN, INTERMEDIATE_EMO_EN, EXPERT_EMO_EN),
  makeQuestion(1355, 'Rhetorical/Discourse Tactics', 'Identify the logical fallacy in this example:\n\n"We should keep the broken fountain in the courtyard because tearing it out would make the pigeons feel abandoned."', ['Red Herring', 'Wishful Thinking', 'Appeal to Tradition', 'Appeal to Emotion'], 3, 'The emotional picture is being used instead of relevant justification.', BEGINNER_EMO_EN, INTERMEDIATE_EMO_EN, EXPERT_EMO_EN),

  makeQuestion(1356, 'Cognitive Biases', 'Identify the logical fallacy in this example:\n\n"If we do not buy this deluxe doorbell camera today, burglars will probably choose our house tonight."', ['Appeal to Fear', 'Appeal to Popularity', 'Ad Hominem', 'Wishful Thinking'], 0, 'The argument relies on anxiety about danger rather than evidence that the threat is likely.', BEGINNER_FEAR_EN, INTERMEDIATE_FEAR_EN, EXPERT_FEAR_EN),
  makeQuestion(1357, 'Cognitive Biases', 'Identify the logical fallacy in this example:\n\n"Vote for this parking rule, or the entire downtown area will become a lawless asphalt nightmare."', ['Red Herring', 'Appeal to Fear', 'Straw Man', 'Appeal to Tradition'], 1, 'A scary image is being used to force agreement.', BEGINNER_FEAR_EN, INTERMEDIATE_FEAR_EN, EXPERT_FEAR_EN),
  makeQuestion(1358, 'Cognitive Biases', 'Identify the logical fallacy in this example:\n\n"Sign up for this productivity course, or you will be left behind, unemployed, and eating instant noodles forever."', ['Bandwagon Fallacy', 'Wishful Thinking', 'Appeal to Fear', 'Appeal to Authority'], 2, 'The sales pitch uses fear of failure instead of proof that the course works.', BEGINNER_FEAR_EN, INTERMEDIATE_FEAR_EN, EXPERT_FEAR_EN),
  makeQuestion(1359, 'Cognitive Biases', 'Identify the logical fallacy in this example:\n\n"If the school bans phones during class, children will forget how to call for help and civilization will unravel."', ['Appeal to Pity', 'Slippery Slope', 'Appeal to Tradition', 'Appeal to Fear'], 3, 'The listener is pushed toward agreement through alarmist consequences.', BEGINNER_FEAR_EN, INTERMEDIATE_FEAR_EN, EXPERT_FEAR_EN),
  makeQuestion(1360, 'Cognitive Biases', 'Identify the logical fallacy in this example:\n\n"Use this skin cream right now, or every wrinkle you have ever feared will arrive by Tuesday."', ['Appeal to Fear', 'Red Herring', 'Ad Hominem', 'Bandwagon Fallacy'], 0, 'The pitch tries to scare the audience into agreement.', BEGINNER_FEAR_EN, INTERMEDIATE_FEAR_EN, EXPERT_FEAR_EN),
];

export const LEVEL_1_EXPANSION_PACK_3_FR: Question[] = [
  makeQuestion(1341, 'Sophismes logiques', 'Identifiez le sophisme dans cet exemple :\n\n"Un acteur célèbre dit que cette gomme pour dormir a changé sa vie, donc elle doit être médicalement efficace."', ['Appeal to Authority', 'Wishful Thinking', 'Red Herring', 'Straw Man'], 0, 'L\'approbation d\'une célébrité est utilisée comme si elle réglait une question médicale.', BEGINNER_AUTH_FR, INTERMEDIATE_AUTH_FR, EXPERT_AUTH_FR),
  makeQuestion(1342, 'Sophismes logiques', 'Identifiez le sophisme dans cet exemple :\n\n"Mon dentiste dit que cette marque de blender est la meilleure du marché, donc je vais l\'acheter."', ['Appeal to Fear', 'Appeal to Authority', 'Ad Hominem', 'Slippery Slope'], 1, 'Être dentiste ne fait pas de quelqu\'un une autorité sur les blenders.', BEGINNER_AUTH_FR, INTERMEDIATE_AUTH_FR, EXPERT_AUTH_FR),
  makeQuestion(1343, 'Sophismes logiques', 'Identifiez le sophisme dans cet exemple :\n\n"Le PDG a publié sur les réseaux que l\'air du bureau est parfaitement sain, donc il n\'y a aucune raison de le tester."', ['Bandwagon Fallacy', 'Appeal to Popularity', 'Appeal to Authority', 'Wishful Thinking'], 2, 'La déclaration du PDG est utilisée à la place d\'une vraie vérification.', BEGINNER_AUTH_FR, INTERMEDIATE_AUTH_FR, EXPERT_AUTH_FR),
  makeQuestion(1344, 'Sophismes logiques', 'Identifiez le sophisme dans cet exemple :\n\n"Une influenceuse lifestyle dit que ce sac à dos corrige la posture, donc il fonctionne probablement mieux que la kiné."', ['Appeal to Authority', 'False Dilemma', 'Red Herring', 'Appeal to Tradition'], 0, 'L\'approbation de l\'influenceuse ne suffit pas à prouver la thèse.', BEGINNER_AUTH_FR, INTERMEDIATE_AUTH_FR, EXPERT_AUTH_FR),
  makeQuestion(1345, 'Sophismes logiques', 'Identifiez le sophisme dans cet exemple :\n\n"Mon oncle anime un podcast sportif, et il dit que le marché immobilier va s\'effondrer le mois prochain, donc c\'est réglé."', ['Wishful Thinking', 'Appeal to Pity', 'Appeal to Authority', 'Red Herring'], 2, 'L\'assurance d\'un animateur de podcast est traitée comme une preuve économique.', BEGINNER_AUTH_FR, INTERMEDIATE_AUTH_FR, EXPERT_AUTH_FR),

  makeQuestion(1346, 'Sophismes logiques', 'Identifiez le sophisme dans cet exemple :\n\n"Personne n\'a prouvé qu\'un minuscule dragon ne vit pas dans mon cabanon, donc je devrais sans doute commencer à lui demander un loyer."', ['Appeal to Ignorance', 'Appeal to Authority', 'Slippery Slope', 'Ad Hominem'], 0, 'Le fait de ne pas réfuter le dragon ne prouve pas qu\'il est là.', BEGINNER_IGN_FR, INTERMEDIATE_IGN_FR, EXPERT_IGN_FR),
  makeQuestion(1347, 'Sophismes logiques', 'Identifiez le sophisme dans cet exemple :\n\n"Tu ne peux pas prouver que le micro-ondes du bureau n\'est pas hanté, donc on devrait supposer que le fantôme déteste la soupe."', ['Wishful Thinking', 'Appeal to Ignorance', 'Red Herring', 'False Dilemma'], 1, 'L\'absence de preuve contre le fantôme est traitée comme une preuve pour lui.', BEGINNER_IGN_FR, INTERMEDIATE_IGN_FR, EXPERT_IGN_FR),
  makeQuestion(1348, 'Sophismes logiques', 'Identifiez le sophisme dans cet exemple :\n\n"Personne n\'a démontré que mes chaussettes porte-bonheur n\'améliorent pas le Wi-Fi, donc je vais les garder à côté du routeur pour toujours."', ['Appeal to Fear', 'Bandwagon Fallacy', 'Appeal to Ignorance', 'Straw Man'], 2, 'L\'absence de réfutation est utilisée comme si elle confirmait cette drôle de thèse.', BEGINNER_IGN_FR, INTERMEDIATE_IGN_FR, EXPERT_IGN_FR),
  makeQuestion(1349, 'Sophismes logiques', 'Identifiez le sophisme dans cet exemple :\n\n"Puisque tu ne peux pas prouver que la voisine n\'espionne pas à travers sa mangeoire à oiseaux, la suspicion est la seule réponse rationnelle."', ['Red Herring', 'Wishful Thinking', 'Slippery Slope', 'Appeal to Ignorance'], 3, 'Le locuteur traite à tort un soupçon non réfuté comme un fait établi.', BEGINNER_IGN_FR, INTERMEDIATE_IGN_FR, EXPERT_IGN_FR),
  makeQuestion(1350, 'Sophismes logiques', 'Identifiez le sophisme dans cet exemple :\n\n"La science n\'a pas exclu que mon chat comprenne le droit fiscal, donc je l\'appelle désormais mon conseillère financière."', ['Appeal to Ignorance', 'Appeal to Popularity', 'Appeal to Pity', 'Appeal to Tradition'], 0, 'Un manque de réfutation ne prouve pas l\'expertise du chat.', BEGINNER_IGN_FR, INTERMEDIATE_IGN_FR, EXPERT_IGN_FR),

  makeQuestion(1351, 'Tactiques rhétoriques et discursives', 'Identifiez le sophisme dans cet exemple :\n\n"Vous devez financer mon projet de film. Si vous dites non, vous briserez les rêves d\'un artiste hypersensible qui a déjà acheté une cape en velours."', ['Appeal to Emotion', 'Appeal to Authority', 'Ad Hominem', 'Appeal to Tradition'], 0, 'La demande s\'appuie sur l\'émotion au lieu de donner une vraie raison de financer le projet.', BEGINNER_EMO_FR, INTERMEDIATE_EMO_FR, EXPERT_EMO_FR),
  makeQuestion(1352, 'Tactiques rhétoriques et discursives', 'Identifiez le sophisme dans cet exemple :\n\n"S\'il vous plaît, approuvez ma demande de congés. Ma valise s\'est déjà préparée émotionnellement pour la plage."', ['Wishful Thinking', 'Appeal to Emotion', 'Red Herring', 'Bandwagon Fallacy'], 1, 'La thèse repose sur une mise en scène émotionnelle plutôt que sur une vraie raison professionnelle.', BEGINNER_EMO_FR, INTERMEDIATE_EMO_FR, EXPERT_EMO_FR),
  makeQuestion(1353, 'Tactiques rhétoriques et discursives', 'Identifiez le sophisme dans cet exemple :\n\n"Vous ne pouvez pas critiquer ce restaurant. Le chef a l\'air tellement triste quand quelqu\'un parle des pâtes trop cuites."', ['Appeal to Fear', 'Slippery Slope', 'Appeal to Emotion', 'Appeal to Popularity'], 2, 'La tristesse du chef sert ici à empêcher d\'évaluer la nourriture elle-même.', BEGINNER_EMO_FR, INTERMEDIATE_EMO_FR, EXPERT_EMO_FR),
  makeQuestion(1354, 'Tactiques rhétoriques et discursives', 'Identifiez le sophisme dans cet exemple :\n\n"Ne remettez pas en question mon plan d\'adopter trois chèvres. Pensez à quel point mon tableau Pinterest aurait le cœur brisé."', ['Straw Man', 'Appeal to Emotion', 'Appeal to Ignorance', 'Red Herring'], 1, 'L\'argument s\'appuie sur des images émotionnelles plutôt que sur des raisons pratiques.', BEGINNER_EMO_FR, INTERMEDIATE_EMO_FR, EXPERT_EMO_FR),
  makeQuestion(1355, 'Tactiques rhétoriques et discursives', 'Identifiez le sophisme dans cet exemple :\n\n"On devrait garder la fontaine cassée dans la cour parce que l\'enlever ferait se sentir abandonnés les pigeons."', ['Red Herring', 'Wishful Thinking', 'Appeal to Tradition', 'Appeal to Emotion'], 3, 'L\'image émotionnelle est utilisée à la place d\'une justification pertinente.', BEGINNER_EMO_FR, INTERMEDIATE_EMO_FR, EXPERT_EMO_FR),

  makeQuestion(1356, 'Biais cognitifs', 'Identifiez le sophisme dans cet exemple :\n\n"Si on n\'achète pas cette caméra de sonnette deluxe aujourd\'hui, des cambrioleurs choisiront probablement notre maison dès ce soir."', ['Appeal to Fear', 'Appeal to Popularity', 'Ad Hominem', 'Wishful Thinking'], 0, 'L\'argument repose sur l\'anxiété face au danger plutôt que sur des preuves que la menace est probable.', BEGINNER_FEAR_FR, INTERMEDIATE_FEAR_FR, EXPERT_FEAR_FR),
  makeQuestion(1357, 'Biais cognitifs', 'Identifiez le sophisme dans cet exemple :\n\n"Votez pour cette règle de stationnement, sinon tout le centre-ville deviendra un cauchemar asphalté sans loi."', ['Red Herring', 'Appeal to Fear', 'Straw Man', 'Appeal to Tradition'], 1, 'Une image effrayante est utilisée pour forcer l\'accord.', BEGINNER_FEAR_FR, INTERMEDIATE_FEAR_FR, EXPERT_FEAR_FR),
  makeQuestion(1358, 'Biais cognitifs', 'Identifiez le sophisme dans cet exemple :\n\n"Inscris-toi à cette formation en productivité, sinon tu seras largué, sans emploi, et condamné aux nouilles instantanées pour toujours."', ['Bandwagon Fallacy', 'Wishful Thinking', 'Appeal to Fear', 'Appeal to Authority'], 2, 'Le discours commercial utilise la peur de l\'échec au lieu de prouver l\'efficacité de la formation.', BEGINNER_FEAR_FR, INTERMEDIATE_FEAR_FR, EXPERT_FEAR_FR),
  makeQuestion(1359, 'Biais cognitifs', 'Identifiez le sophisme dans cet exemple :\n\n"Si l\'école interdit les téléphones en classe, les enfants oublieront comment appeler à l\'aide et la civilisation s\'effondrera."', ['Appeal to Pity', 'Slippery Slope', 'Appeal to Tradition', 'Appeal to Fear'], 3, 'L\'auditeur est poussé vers l\'accord par des conséquences alarmistes.', BEGINNER_FEAR_FR, INTERMEDIATE_FEAR_FR, EXPERT_FEAR_FR),
  makeQuestion(1360, 'Biais cognitifs', 'Identifiez le sophisme dans cet exemple :\n\n"Utilisez cette crème pour la peau tout de suite, sinon chaque ride que vous avez jamais redoutée arrivera d\'ici mardi."', ['Appeal to Fear', 'Red Herring', 'Ad Hominem', 'Bandwagon Fallacy'], 0, 'Le discours tente d\'effrayer le public pour obtenir son accord.', BEGINNER_FEAR_FR, INTERMEDIATE_FEAR_FR, EXPERT_FEAR_FR),
];
