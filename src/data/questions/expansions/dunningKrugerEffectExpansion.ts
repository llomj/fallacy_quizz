import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["After watching two cooking videos, Ben insists he could cater a wedding better than a professional chef.", "Après avoir regardé deux vidéos de cuisine, Ben insiste sur le fait qu'il pourrait mieux gérer un mariage qu'un chef professionnel."],
  ["Maya reads one article about investing and says the bank should hire her as chief financial officer.", "Maya lit un article sur l'investissement et dit que la banque devrait l'engager comme directrice financière."],
  ["Theo fixes a squeaky door and tells everyone he is basically a better engineer than the maintenance team.", "Theo répare une porte qui grince et dit à tout le monde qu'il est presque un meilleur ingénieur que l'équipe de maintenance."],
  ["Lina wins a trivia round and concludes she could write a university textbook on every subject.", "Lina gagne une manche de quiz et conclut qu'elle pourrait écrire un manuel universitaire sur n'importe quel sujet."],
  ["Omar learns one magic trick and announces he is ready to perform on television.", "Omar apprend un tour de magie et annonce qu'il est prêt à passer à la télévision."],
  ["Priya gets one compliment on her slide deck and says she should lead all company presentations now.", "Priya reçoit un compliment sur son diaporama et dit qu'elle devrait désormais diriger toutes les présentations de l'entreprise."],
  ["Nina passes a practice driving test once and starts giving parking advice to everyone at the office.", "Nina réussit un test de conduite d'entraînement une fois et commence à donner des conseils de stationnement à tout le bureau."],
  ["Eli solves a simple math puzzle and tells his friend he must be a natural genius at statistics.", "Eli résout une petite énigme de maths et dit à son ami qu'il doit être un génie naturel des statistiques."],
  ["Rosa repairs a phone screen and says she could probably build the whole phone from scratch.", "Rosa répare l'écran d'un téléphone et dit qu'elle pourrait probablement fabriquer tout le téléphone de zéro."],
  ["Jules watches a debate clip and assumes he can out-argue a lawyer at city hall.", "Jules regarde un extrait de débat et suppose qu'il peut battre un avocat en arguments à l'hôtel de ville."],
  ["Ava reads the headlines from one research paper and calls herself an expert on climate policy.", "Ava lit les titres d'un seul article de recherche et se dit experte en politique climatique."],
  ["Noah wins a board game and claims he could manage a logistics company without training.", "Noah gagne un jeu de société et affirme qu'il pourrait diriger une entreprise de logistique sans formation."],
  ["Kim figures out her new coffee machine and says she could now teach electrical engineering.", "Kim comprend sa nouvelle machine à café et dit qu'elle pourrait maintenant enseigner le génie électrique."],
  ["Salma watches a home-repair clip and starts giving construction advice to the neighborhood contractor.", "Salma regarde une vidéo de bricolage et commence à donner des conseils de construction à l'entrepreneur du quartier."],
  ["Hugo answers a few quiz questions correctly and tells his class he should be the history teacher.", "Hugo répond correctement à quelques questions de quiz et dit à sa classe qu'il devrait être professeur d'histoire."],
  ["Lea finishes one online course and says she can already out-design the agency's senior team.", "Lea termine un cours en ligne et dit qu'elle peut déjà surpasser l'équipe senior de l'agence en design."],
  ["Max learns how to use a spreadsheet and insists he understands business strategy better than the manager.", "Max apprend à utiliser un tableur et insiste sur le fait qu'il comprend mieux la stratégie commerciale que le manager."],
  ["Tia reads a beginner guide to photography and immediately starts correcting professional photographers.", "Tia lit un guide de photographie pour débutants et commence immédiatement à corriger des photographes professionnels."],
  ["Paul passes a first-aid quiz and says he should be running the whole hospital.", "Paul réussit un quiz de secourisme et dit qu'il devrait diriger tout l'hôpital."],
  ["Yara watches three clips on public speaking and claims she can coach CEOs now.", "Yara regarde trois extraits sur la prise de parole et affirme qu'elle peut maintenant coacher des dirigeants."],
  ["Dan learns the rules of chess and declares he could beat a master by confidence alone.", "Dan apprend les règles des échecs et déclare qu'il pourrait battre un maître à la seule force de la confiance."],
  ["Mina reads a single article about nutrition and starts correcting the dietitian at lunch.", "Mina lit un seul article sur la nutrition et commence à corriger la diététicienne au déjeuner."],
  ["Eric assembles one chair and says he is probably ready to design furniture for hotels.", "Eric monte une chaise et dit qu'il est probablement prêt à concevoir des meubles pour les hôtels."],
  ["Grace solves one coding tutorial and claims she can lead the app rewrite next week.", "Grace termine un tutoriel de code et affirme qu'elle peut diriger la réécriture de l'application la semaine prochaine."],
  ["Owen wins a karaoke contest and believes he can sing on any professional stage.", "Owen gagne un concours de karaoké et pense qu'il peut chanter sur n'importe quelle scène professionnelle."],
  ["Mila bakes one loaf of bread and says she is basically ready to open a bakery chain.", "Mila cuit un pain et dit qu'elle est pratiquement prête à ouvrir une chaîne de boulangeries."],
  ["Jin installs a smart light bulb and claims he now understands home automation better than the electrician.", "Jin installe une ampoule connectée et affirme qu'il comprend maintenant mieux la domotique que l'électricien."],
  ["Ravi reads a blog post about taxes and announces he can outsmart an accountant.", "Ravi lit un article de blog sur les impôts et annonce qu'il peut être plus malin qu'un comptable."],
  ["Sofia fixes one jammed drawer and says her carpentry opinion should settle the renovation plan.", "Sofia répare un tiroir coincé et dit que son avis de menuiserie devrait régler le plan de rénovation."],
  ["Ben watches a golf tutorial and insists he could join the pro circuit after one practice round.", "Ben regarde un tutoriel de golf et insiste sur le fait qu'il pourrait rejoindre le circuit professionnel après une seule séance."],
  ["Nora learns the names of a few stars and calls herself an amateur astronomer with authority.", "Nora apprend le nom de quelques étoiles et se dit astronome amateur faisant autorité."],
  ["Alex resets a router once and starts offering IT support to everyone on the floor.", "Alex redémarre un routeur une fois et commence à offrir son aide informatique à tout l'étage."],
  ["Maya reads a quick guide to French and tells native speakers their grammar is wrong.", "Maya lit un guide rapide de français et dit aux locuteurs natifs que leur grammaire est fausse."],
  ["Theo wins one argument in a group chat and says he is ready for politics.", "Theo gagne un argument dans un groupe de discussion et dit qu'il est prêt pour la politique."],
  ["Lina learns how to prune a plant and believes she can run a botanical garden.", "Lina apprend à tailler une plante et pense qu'elle peut gérer un jardin botanique."],
  ["Omar understands a recipe substitution and says he could write a cookbook for restaurants.", "Omar comprend un remplacement d'ingrédient et dit qu'il pourrait écrire un livre de cuisine pour des restaurants."],
  ["Priya gets a lucky score on a practice exam and tells everyone she has already mastered the topic.", "Priya obtient un score chanceux à un examen d'entraînement et dit à tout le monde qu'elle maîtrise déjà le sujet."],
  ["Nina figures out one social-media setting and claims she can advise the platform's designers.", "Nina comprend un réglage des réseaux sociaux et affirme qu'elle peut conseiller les concepteurs de la plateforme."],
  ["Eli reads a summary of philosophy and starts correcting the professor's lecture notes.", "Eli lit un résumé de philosophie et commence à corriger les notes de cours du professeur."],
  ["Rosa paints one shelf and says she can probably decorate the whole hotel.", "Rosa peint une étagère et dit qu'elle peut probablement décorer tout l'hôtel."],
  ["Jules learns one shortcut in a software app and believes he can train the support staff.", "Jules apprend un raccourci dans un logiciel et pense qu'il peut former l'équipe d'assistance."],
  ["Ava memorizes a few legal terms and acts like she can draft contracts alone.", "Ava mémorise quelques termes juridiques et agit comme si elle pouvait rédiger des contrats toute seule."],
  ["Noah understands one chess opening and says he could coach the national team.", "Noah comprend une ouverture d'échecs et dit qu'il pourrait entraîner l'équipe nationale."],
  ["Kim fixes a typo in a report and says she is now an expert editor.", "Kim corrige une faute de frappe dans un rapport et dit qu'elle est maintenant une éditrice experte."],
  ["Salma learns a new workout move and tells the trainer she knows more than he does.", "Salma apprend un nouveau mouvement de sport et dit à l'entraîneur qu'elle en sait plus que lui."],
  ["Hugo reads one article about law enforcement and tells officers how to do their job.", "Hugo lit un article sur la police et dit aux agents comment faire leur travail."],
  ["Lea organizes one event and says she can run the entire conference center.", "Lea organise un événement et dit qu'elle peut gérer tout le centre de conférences."],
  ["Max watches a handyman clip and starts correcting the plumber on pipe work.", "Max regarde une vidéo de bricolage et commence à corriger le plombier sur la plomberie."],
  ["Tia learns a painting technique and claims she is ready for an art gallery commission.", "Tia apprend une technique de peinture et affirme qu'elle est prête pour une commande de galerie d'art."],
  ["Paul scores well on a practice quiz and tells the teacher the exam was easy for him, so he must be very advanced.", "Paul réussit bien un quiz d'entraînement et dit au professeur que l'examen était facile pour lui, donc il doit être très avancé."],
  ["Yara reads one science article and starts explaining medicine to her doctor.", "Yara lit un article scientifique et commence à expliquer la médecine à son médecin."],
  ["A trainee watches two plumbing clips and says he can redesign the city's water system.", "Un apprenti regarde deux vidéos de plomberie et dit qu'il peut redessiner tout le réseau d'eau de la ville."],
  ["Mia learns one design tool and tells her coworkers she is ready to run the whole studio.", "Mia apprend un outil de design et dit à ses collègues qu'elle est prête à diriger tout le studio."],
  ["Theo fixes a login bug once and starts giving security advice to the IT department.", "Theo corrige un bug de connexion une fois et commence à donner des conseils de sécurité au service informatique."],
  ["Ben reads a beginner guide to finance and tells his friends he can beat professional traders.", "Ben lit un guide de finance pour débutants et dit à ses amis qu'il peut battre des traders professionnels."],
  ["Ava memorizes a few medical terms and acts like she can diagnose the whole clinic.", "Ava mémorise quelques termes médicaux et agit comme si elle pouvait diagnostiquer toute la clinique."],
  ["Omar learns one guitar chord and says he is basically ready for a world tour.", "Omar apprend un accord de guitare et dit qu'il est pratiquement prêt pour une tournée mondiale."],
  ["Priya solves a couple of logic puzzles and starts correcting the teacher's reasoning.", "Priya résout quelques énigmes logiques et commence à corriger le raisonnement du professeur."],
  ["Nina changes a website color and says she can now manage the entire product team.", "Nina change une couleur de site web et dit qu'elle peut maintenant gérer toute l'équipe produit."],
  ["Eli follows one fitness video and announces he is qualified to coach athletes.", "Eli suit une vidéo de fitness et annonce qu'il est qualifié pour entraîner des athlètes."],
  ["Rosa fixes one typo in an email and says she should oversee corporate communications.", "Rosa corrige une faute de frappe dans un e-mail et dit qu'elle devrait superviser les communications de l'entreprise."],
  ["Maya watches two cooking videos and says she could cater a wedding better than a chef.", "Maya regarde deux vidéos de cuisine et dit qu'elle pourrait mieux gérer un mariage qu'un chef."],
  ["Theo fixes one squeaky door and starts offering construction advice to the whole block.", "Theo répare une porte qui grince et commence à donner des conseils de construction à tout le quartier."],
  ["Nina reads one finance article and calls herself ready to run a bank.", "Nina lit un article de finance et se dit prête à diriger une banque."],
  ["Ben wins one trivia round and says he could write a university textbook.", "Ben gagne une manche de quiz et dit qu'il pourrait écrire un manuel universitaire."],
  ["Omar learns one magic trick and announces he is ready for television.", "Omar apprend un tour de magie et annonce qu'il est prêt pour la télévision."],
  ["Priya gets one compliment on a slide deck and says she should lead all company talks.", "Priya reçoit un compliment sur son diaporama et dit qu'elle devrait diriger tous les exposés de l'entreprise."],
  ["Leo passes one driving practice test and starts giving parking advice to everyone.", "Leo réussit un test de conduite d'entraînement et commence à donner des conseils de stationnement à tout le monde."],
  ["Rina solves one math puzzle and decides she is a natural genius at statistics.", "Rina résout une petite énigme de maths et décide qu'elle est un génie naturel des statistiques."],
  ["Jules repairs a phone screen and says he could build a phone from scratch.", "Jules répare un écran de téléphone et dit qu'il pourrait construire un téléphone de zéro."],
  ["Ava watches a debate clip and assumes she can out-argue a lawyer at city hall.", "Ava regarde un extrait de débat et suppose qu'elle peut battre un avocat en arguments à l'hôtel de ville."],
  ["Lina watches one sewing tutorial and says she is ready to design the whole fashion line.", "Lina regarde un tutoriel de couture et dit qu'elle est prête à concevoir toute la ligne de mode."],
  ["Noah learns one photo edit trick and tells his friends he could run a studio.", "Noah apprend une astuce de retouche photo et dit à ses amis qu'il pourrait diriger un studio."],
  ["Mia solves a single crossword and starts correcting the puzzle editor's work.", "Mia résout une seule grille de mots croises et commence a corriger le travail de l'editeur."],
  ["Theo reads one gardening post and says he is ready to design a public park.", "Theo lit un article de jardinage et dit qu'il est pret a concevoir un parc public."],
  ["Ava wins one game of darts and declares she is basically a professional coach.", "Ava gagne une partie de flechettes et declare qu'elle est pratiquement une coach professionnelle."],
  ["Ben assembles a desk lamp and claims he now understands all home wiring.", "Ben assemble une lampe de bureau et affirme qu'il comprend maintenant tout le cablage domestique."],
  ["Rina learns one recipe swap and starts advising a restaurant menu.", "Rina apprend un remplacement dans une recette et commence a conseiller un menu de restaurant."],
  ["Eli installs one app plugin and says he can rebuild the whole platform.", "Eli installe un module d'application et dit qu'il peut reconstruire toute la plateforme."],
  ["Priya passes one practice quiz and tells her class she should be teaching the course.", "Priya reussit un quiz d'entrainement et dit a sa classe qu'elle devrait enseigner le cours."],
  ["Omar fixes one bike tire and says he is ready to open a repair shop.", "Omar repare un pneu de velo et dit qu'il est pret a ouvrir un atelier."],
  ["Sofia reads a short finance thread and tells her coworkers how to run the company budget.", "Sofia lit un court fil sur la finance et dit a ses collegues comment gerer le budget de l'entreprise."],
  ["Jules learns one magic card trick and thinks he can headline a theater show.", "Jules apprend un tour de cartes et pense qu'il peut etre la tete d'affiche d'un spectacle de theatre."],
  ["Tara watches a clip about speaking clearly and starts giving public speaking lessons.", "Tara regarde une video sur la prise de parole claire et commence a donner des cours d'art oratoire."],
  ["Max reads one article about space and says he could explain astronomy to a class.", "Max lit un article sur l'espace et dit qu'il pourrait expliquer l'astronomie a une classe."],
  ["Lena learns one guitar chord and announces she is ready to front a band.", "Lena apprend un accord de guitare et annonce qu'elle est prete a chanter dans un groupe."],
  ["Hugo fixes one typo in a report and calls himself the office's best editor.", "Hugo corrige une faute de frappe dans un rapport et se dit le meilleur editeur du bureau."],
  ["Nina watches one cooking stream and says she should cater the next office party.", "Nina regarde un stream de cuisine et dit qu'elle devrait s'occuper du prochain repas du bureau."],
  ["Alex reads one investing tip and tells everyone he can beat market analysts.", "Alex lit un conseil d'investissement et dit a tout le monde qu'il peut battre les analystes du marche."],
  ["Kim repairs one loose shelf and starts critiquing every carpenter in town.", "Kim repare une etagere branlante et commence a critiquer tous les menuisiers de la ville."],
  ["Lea completes one language app lesson and tells native speakers they are speaking wrong.", "Lea termine une lecon d'application de langue et dit aux locuteurs natifs qu'ils parlent mal."],
  ["Paul gets one good score on a practice test and says the real exam will be trivial.", "Paul obtient une bonne note a un test d'entrainement et dit que le vrai examen sera trivial."],
  ["Grace learns one spreadsheet formula and says she can lead the finance team.", "Grace apprend une formule de tableur et dit qu'elle peut diriger l'equipe finance."],
  ["Yara reads a post about video editing and says she could produce a film trailer.", "Yara lit un article sur le montage video et dit qu'elle pourrait produire une bande-annonce de film."],
  ["Dan learns one meditation trick and tells his friends he can teach mindfulness retreats.", "Dan apprend une astuce de meditation et dit a ses amis qu'il peut enseigner des retraites de pleine conscience."],
  ["Mila watches a single makeup tutorial and says she should lead a beauty brand.", "Mila regarde un seul tutoriel de maquillage et dit qu'elle devrait diriger une marque de beaute."],
  ["Eric fixes one app setting and says he understands software architecture now.", "Eric change un seul parametre d'application et dit qu'il comprend maintenant l'architecture logicielle."],
  ["Tia reads a short article on weather and starts correcting the meteorologist.", "Tia lit un court article sur la meteo et commence a corriger le meteorologue."],
  ["Nora wins one board game and says she is ready to mentor strategy executives.", "Nora gagne un jeu de societe et dit qu'elle est prete a coacher des cadres strategiques."],
  ["Pia watches a single home repair video and says she is basically ready to redesign every apartment.", "Pia regarde une seule video de bricolage et dit qu'elle est pratiquement prete a redesigner chaque appartement."],
];

const OPTIONS_EN = ['Dunning-Kruger Effect', 'Overconfidence Effect', 'Impostor Syndrome', 'Self-Serving Bias'];
const OPTIONS_FR = ['Effet Dunning-Kruger', "Effet de surconfiance", "Syndrome de l'imposteur", 'Biais auto-complaisant'];

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

export const DUNNING_KRUGER_EFFECT_EXPANSION_EN: Question[] = SCENARIOS.map(([english], index) => {
  const correctIndex = index % 4;
  return {
    id: 36801 + index,
    level: 3,
    persona_stage: PersonaStage.PLANKTON,
    concept: 'Dunning-Kruger Effect',
    difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Which fallacy or bias is shown here?\n\n"${english}"`,
    options: rotatedOptions(OPTIONS_EN, correctIndex),
    correct_option_index: correctIndex,
    explanation: 'A little knowledge is being treated as proof of expertise far beyond what the person actually knows.',
    detailedExplanationBeginner: 'Small success is mistaken for real expertise.',
    detailedExplanationIntermediate: 'The person overestimates their ability because they know just enough to feel confident.',
    detailedExplanationExpert: 'This is the Dunning-Kruger effect: limited skill can make a person poorly calibrated about their own competence, leading to overconfident claims that are not supported by actual mastery.',
    questionFormat: 'standard'
  };
});

export const DUNNING_KRUGER_EFFECT_EXPANSION_FR: Question[] = SCENARIOS.map(([, french], index) => {
  const correctIndex = index % 4;
  return {
    id: 36801 + index,
    level: 3,
    persona_stage: PersonaStage.PLANKTON,
    concept: 'Effet Dunning-Kruger',
    difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Quel sophisme ou biais est montré ici ?\n\n"${french}"`,
    options: rotatedOptions(OPTIONS_FR, correctIndex),
    correct_option_index: correctIndex,
    explanation: "Un petit peu de connaissance est pris pour une vraie expertise, bien au-delà de ce que la personne sait réellement.",
    detailedExplanationBeginner: "Un petit succès est confondu avec une vraie expertise.",
    detailedExplanationIntermediate: "La personne surestime sa capacité parce qu'elle en sait juste assez pour se sentir confiante.",
    detailedExplanationExpert: "C'est l'effet Dunning-Kruger : une compétence limitée peut conduire à une mauvaise évaluation de sa propre compétence, ce qui produit des affirmations trop sûres d'elles et non soutenues par une vraie maîtrise.",
    questionFormat: 'standard'
  };
});
