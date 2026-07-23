import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  [
    "Maya's bike-lane idea is obviously terrible; she cannot even parallel park at the grocery store.",
    "L'idée de Maya sur les pistes cyclables est forcément mauvaise : elle ne sait même pas faire un créneau au supermarché."
  ],
  [
    "Do not listen to Leo's lunch-menu proposal; he burns toast at home and forgets salt.",
    "N'écoutez pas la proposition de Leo pour le menu : chez lui, il brûle même ses tartines et oublie le sel."
  ],
  [
    "Nina's remote-work plan cannot be sensible because she wears pajamas during video calls on Mondays.",
    "Le plan de télétravail de Nina ne peut pas être sérieux puisqu'elle porte un pyjama pendant les visioconférences du lundi."
  ],
  [
    "Omar says our building should recycle more, but his bedroom is a mess, so ignore him.",
    "Omar dit que notre immeuble devrait mieux recycler, mais sa chambre est en désordre, alors ignorez-le."
  ],
  [
    "Priya's budgeting advice is worthless; look at the cracked screen on her phone.",
    "Les conseils budgétaires de Priya ne valent rien : regardez l'écran fissuré de son téléphone."
  ],
  [
    "Sam's dog-park proposal is ridiculous because everyone knows he prefers cats.",
    "La proposition de Sam pour un parc à chiens est ridicule, car tout le monde sait qu'il préfère les chats."
  ],
  [
    "Tara's bus-schedule suggestion must be wrong; she was late to breakfast yesterday.",
    "La suggestion de Tara sur les horaires de bus est forcément mauvaise : hier, elle était en retard au petit-déjeuner."
  ],
  [
    "Do not support Jules's school-garden plan; he once killed a cactus.",
    "Ne soutenez pas le projet de jardin scolaire de Jules : un jour, il a même fait mourir un cactus."
  ],
  [
    "Ava wants quiet hours in the apartment, but her laugh is annoying, so her argument is invalid.",
    "Ava veut des heures calmes dans l'immeuble, mais son rire est agaçant, donc son argument ne vaut rien."
  ],
  [
    "Ben's game strategy is nonsense because he lost the last round.",
    "La stratégie de jeu de Ben est absurde puisqu'il a perdu la manche précédente."
  ],
  [
    "Kai's ideas about affordable rent mean nothing because he still lives with his parents.",
    "Les idées de Kai sur les loyers abordables ne valent rien puisqu'il vit encore chez ses parents."
  ],
  [
    "Ignore Sofia's recipe improvements; she orders takeout twice a week.",
    "Ignorez les améliorations de recette proposées par Sofia : elle commande à emporter deux fois par semaine."
  ],
  [
    "Eli's storm warning cannot be trusted because he forgot his umbrella this morning.",
    "L'alerte à l'orage d'Eli n'est pas crédible puisqu'il a oublié son parapluie ce matin."
  ],
  [
    "Mei's concern about app security is silly because her phone is three years old.",
    "L'inquiétude de Mei sur la sécurité de l'application est ridicule parce que son téléphone a trois ans."
  ],
  [
    "Noah's exercise plan must be bad; he cannot even touch his toes.",
    "Le programme sportif de Noah doit être mauvais : il n'arrive même pas à toucher ses orteils."
  ],
  [
    "Do not consider Lina's book-club choice; she misspelled a word in a text message.",
    "Ne considérez pas le choix de Lina pour le club de lecture : elle a fait une faute dans un SMS."
  ],
  [
    "Hugo's road-safety proposal is useless because he failed his driving test years ago.",
    "La proposition de Hugo sur la sécurité routière est inutile puisqu'il a raté son permis il y a des années."
  ],
  [
    "Zoe's request for a better coffee machine makes no sense because she usually drinks tea.",
    "La demande de Zoe pour une meilleure machine à café n'a aucun sens puisqu'elle boit généralement du thé."
  ],
  [
    "Amir's childcare-policy argument is irrelevant because he does not have children.",
    "L'argument d'Amir sur la politique de garde d'enfants ne compte pas puisqu'il n'a pas d'enfants."
  ],
  [
    "We can dismiss Clara's concert review because she sings badly at karaoke.",
    "On peut rejeter la critique du concert faite par Clara puisqu'elle chante faux au karaoké."
  ],
  [
    "Theo's case for solar panels is laughable; his hair is dyed bright green.",
    "L'argument de Theo en faveur des panneaux solaires est risible : ses cheveux sont teints en vert vif."
  ],
  [
    "Ignore Grace's savings plan; she bought expensive shoes last month.",
    "Ignorez le plan d'épargne de Grace : elle a acheté des chaussures coûteuses le mois dernier."
  ],
  [
    "Malik's team schedule cannot work because his desk is untidy.",
    "Le planning d'équipe de Malik ne peut pas fonctionner puisque son bureau est mal rangé."
  ],
  [
    "Ana's museum-accessibility proposal is foolish because she walks slowly.",
    "La proposition d'Ana sur l'accessibilité du musée est stupide parce qu'elle marche lentement."
  ],
  [
    "Ravi's argument for later class times is wrong because he sleeps late on weekends.",
    "L'argument de Ravi pour commencer les cours plus tard est faux puisqu'il dort tard le week-end."
  ],
  [
    "Do not believe Emma's case for healthy snacks; she ate cake at a birthday party.",
    "Ne croyez pas l'argument d'Emma pour des goûters sains : elle a mangé du gâteau à un anniversaire."
  ],
  [
    "Luis's animal-shelter funding plan is bad because his dog once chewed a sofa.",
    "Le plan de Luis pour financer le refuge animalier est mauvais parce que son chien a autrefois mâché un canapé."
  ],
  [
    "Fatima's public Wi-Fi proposal is unreliable; she forgot her own password yesterday.",
    "La proposition de Fatima pour le Wi-Fi public n'est pas fiable : hier, elle a oublié son propre mot de passe."
  ],
  [
    "Ignore Ken's argument for ergonomic chairs because he slouches.",
    "Ignorez l'argument de Ken pour des chaises ergonomiques puisqu'il se tient voûté."
  ],
  [
    "Mila's town-festival plan must be awful because she cannot dance.",
    "Le projet de fête municipale de Mila doit être affreux puisqu'elle ne sait pas danser."
  ],
  [
    "Jon's suggestion to extend library hours is worthless because he owns unread books.",
    "La suggestion de Jon d'allonger les horaires de la bibliothèque ne vaut rien puisqu'il possède des livres qu'il n'a pas lus."
  ],
  [
    "Do not support Lea's anti-bullying proposal; her haircut looks strange.",
    "Ne soutenez pas la proposition de Lea contre le harcèlement : sa coiffure est bizarre."
  ],
  [
    "Dr. Chen's science result must be false because his lab coat is wrinkled.",
    "Le résultat scientifique du docteur Chen doit être faux parce que sa blouse est froissée."
  ],
  [
    "Iris's neighborhood-lighting proposal is childish because she is afraid of the dark.",
    "La proposition d'Iris sur l'éclairage du quartier est enfantine puisqu'elle a peur du noir."
  ],
  [
    "Paul's transit-fare argument does not count because he rides a bicycle.",
    "L'argument de Paul sur le prix des transports ne compte pas puisqu'il se déplace à vélo."
  ],
  [
    "Sara's exam-format suggestion is nonsense because she failed a math test when she was twelve.",
    "La suggestion de Sara sur le format des examens est absurde puisqu'elle a raté un contrôle de maths à douze ans."
  ],
  [
    "Ignore Dan's water-conservation argument; he sometimes takes long showers.",
    "Ignorez l'argument de Dan sur l'économie d'eau : il lui arrive de prendre de longues douches."
  ],
  [
    "Yara's idea for clearer allergy labels is silly because she is a picky eater.",
    "L'idée de Yara pour des étiquettes d'allergènes plus claires est ridicule puisqu'elle est difficile avec la nourriture."
  ],
  [
    "Max's data-privacy concern is invalid because he posts selfies online.",
    "L'inquiétude de Max sur la confidentialité des données est invalide puisqu'il publie des selfies en ligne."
  ],
  [
    "Nora's proposal for playground shade is ridiculous because she gets sunburned easily.",
    "La proposition de Nora pour ombrager l'aire de jeux est ridicule puisqu'elle attrape facilement des coups de soleil."
  ],
  [
    "Do not consider Alex's overtime policy; he left work early once.",
    "Ne considérez pas la politique d'Alex sur les heures supplémentaires : une fois, il est parti tôt du travail."
  ],
  [
    "Kim's case for art funding is worthless because she only draws stick figures.",
    "L'argument de Kim pour financer l'art ne vaut rien puisqu'elle ne dessine que des bonshommes bâtons."
  ],
  [
    "Ignore Mateo's repair-budget proposal; his toolbox is rusty.",
    "Ignorez la proposition de Mateo pour le budget des réparations : sa boîte à outils est rouillée."
  ],
  [
    "Lucie's sleep advice must be wrong because she snores.",
    "Les conseils de Lucie sur le sommeil doivent être faux puisqu'elle ronfle."
  ],
  [
    "Do not trust Adam's community-garden plan; a plant died on his balcony.",
    "Ne faites pas confiance au projet de jardin partagé d'Adam : une plante est morte sur son balcon."
  ],
  [
    "Mina's meeting agenda is clearly bad because she talks too quickly.",
    "L'ordre du jour proposé par Mina est forcément mauvais parce qu'elle parle trop vite."
  ],
  [
    "Eric's phone-free dinner idea is hypocritical nonsense because he checks his watch.",
    "L'idée d'Eric d'un dîner sans téléphone est une absurdité hypocrite puisqu'il regarde sa montre."
  ],
  [
    "Ignore Salma's hiking-sign proposal; she got lost on a trail once.",
    "Ignorez la proposition de Salma sur les panneaux de randonnée : elle s'est perdue une fois sur un sentier."
  ],
  [
    "Tom's pet-adoption rules are ridiculous because his hamster escaped when he was a child.",
    "Les règles d'adoption proposées par Tom sont ridicules puisque son hamster s'est échappé quand il était enfant."
  ],
  [
    "Do not follow Rina's emergency-drill plan; she screamed when she saw a spider.",
    "Ne suivez pas le plan d'évacuation de Rina : elle a crié en voyant une araignée."
  ]
];

const OPTIONS_EN = ['Ad Hominem', 'Straw Man', 'Red Herring', 'Appeal to Popularity'];
const OPTIONS_FR = ['Attaque ad hominem', 'Homme de paille', 'Fausse piste', 'Appel à la popularité'];

function rotatedOptions(options: string[], correctIndex: number): string[] {
  const distractors = options.slice(1);
  const result = [...distractors];
  result.splice(correctIndex, 0, options[0]);
  return result;
}

function subLevelFor(index: number): SubLevel {
  if (index < 17) return SubLevel.BEGINNER;
  if (index < 34) return SubLevel.INTERMEDIATE;
  return SubLevel.EXPERT;
}

export const AD_HOMINEM_EXPANSION_EN: Question[] = SCENARIOS.map(([english], index) => {
  const correctIndex = index % 4;
  return {
    id: 30001 + index,
    level: 1,
    persona_stage: PersonaStage.PLANKTON,
    concept: 'Ad Hominem',
    difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Which fallacy is used here?\n\n"${english}"`,
    options: rotatedOptions(OPTIONS_EN, correctIndex),
    correct_option_index: correctIndex,
    explanation: 'The response attacks a personal trait instead of addressing the actual proposal or argument.',
    detailedExplanationBeginner: 'The person is attacked while the argument itself is left unanswered.',
    detailedExplanationIntermediate: 'A personal detail is treated as if it disproved the claim, even though that detail is irrelevant to whether the reasoning is sound.',
    detailedExplanationExpert: 'This is ad hominem: attention shifts from evaluating premises and evidence to judging the speaker. The criticism may be true, but it does not logically refute the claim.',
    questionFormat: 'standard'
  };
});

export const AD_HOMINEM_EXPANSION_FR: Question[] = SCENARIOS.map(([, french], index) => {
  const correctIndex = index % 4;
  return {
    id: 30001 + index,
    level: 1,
    persona_stage: PersonaStage.PLANKTON,
    concept: 'Attaque ad hominem',
    difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Quel sophisme est utilisé ici ?\n\n"${french}"`,
    options: rotatedOptions(OPTIONS_FR, correctIndex),
    correct_option_index: correctIndex,
    explanation: "La réponse attaque un trait personnel au lieu d'examiner la proposition ou l'argument.",
    detailedExplanationBeginner: "La personne est attaquée, tandis que son argument reste sans réponse.",
    detailedExplanationIntermediate: "Un détail personnel est présenté comme s'il réfutait l'affirmation, alors qu'il ne dit rien sur la solidité du raisonnement.",
    detailedExplanationExpert: "C'est une attaque ad hominem : l'attention quitte les prémisses et les preuves pour juger la personne. La critique peut être vraie, mais elle ne réfute pas logiquement l'affirmation.",
    questionFormat: 'standard'
  };
});
