import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["The app must be trustworthy because its own ad says it is the best app.", "L'application doit etre fiable parce que sa propre pub dit que c'est la meilleure application."],
  ["Mila says the policy is fair because fair policies are the ones that seem fair to everyone.", "Mila dit que la politique est juste parce que les politiques justes sont celles qui paraissent justes a tout le monde."],
  ["The town is safe because safe towns are towns where nothing bad happens.", "La ville est sure parce que les villes sures sont des villes ou rien de mauvais n'arrive."],
  ["Ben says the movie is funny because funny movies are the ones that make people laugh.", "Ben dit que le film est drole parce que les films droles sont ceux qui font rire les gens."],
  ["The plan will work because successful plans are the ones that work.", "Le plan marchera parce que les plans qui reussissent sont ceux qui marchent."],
  ["Nora calls the store honest because honest stores are stores that tell the truth.", "Nora dit que le magasin est honnete parce que les magasins honnetes sont des magasins qui disent la verite."],
  ["Kai says the recipe is good because good recipes are recipes that taste good.", "Kai dit que la recette est bonne parce que les bonnes recettes sont des recettes qui ont bon gout."],
  ["The student says the class was easy because easy classes are the ones that felt easy.", "L'eleve dit que le cours etait facile parce que les cours faciles sont ceux qui semblaient faciles."],
  ["Priya says the coach is wise because wise coaches are the ones who give wise advice.", "Priya dit que l'entraineur est sage parce que les entraineurs sages sont ceux qui donnent des conseils sages."],
  ["The new phone is the best because the best phones are the ones that are best.", "Le nouveau telephone est le meilleur parce que les meilleurs telephones sont ceux qui sont les meilleurs."],
  ["Omar says the neighborhood is friendly because friendly neighborhoods are where friendly people live.", "Omar dit que le quartier est sympathique parce que les quartiers sympathiques sont ceux ou vivent des gens sympas."],
  ["The game is exciting because exciting games are the ones that feel exciting.", "Le jeu est captivant parce que les jeux captivants sont ceux qui paraissent captivants."],
  ["Lina insists the report is accurate because accurate reports are reports that get the facts right.", "Lina insiste que le rapport est exact parce que les rapports exacts sont des rapports qui donnent les bons faits."],
  ["The café is popular because popular cafés are cafés people like.", "Le café est populaire parce que les cafés populaires sont des cafés que les gens aiment."],
  ["Theo says the class rule is good because good rules are the rules that are good for everyone.", "Theo dit que la regle de classe est bonne parce que les bonnes regles sont celles qui sont bonnes pour tout le monde."],
  ["Mia says the charity is noble because noble charities are the ones that do noble work.", "Mia dit que l'association est noble parce que les associations nobles sont celles qui font un travail noble."],
  ["The jacket is stylish because stylish jackets are the jackets that look stylish.", "La veste est elegante parce que les vestes elegantes sont celles qui ont l'air elegantes."],
  ["Eli says the test score is impressive because impressive scores are scores that impress people.", "Eli dit que le resultat du test est impressionnant parce que les resultats impressionnants sont ceux qui impressionnent les gens."],
  ["The podcast is insightful because insightful podcasts are the ones that offer insight.", "Le podcast est eclairant parce que les podcasts eclairants sont ceux qui donnent des eclairages."],
  ["Jade says the rule is necessary because necessary rules are rules we need.", "Jade dit que la regle est necessaire parce que les regles necessaires sont celles dont nous avons besoin."],
  ["The garden is beautiful because beautiful gardens are the gardens that look beautiful.", "Le jardin est beau parce que les jardins beaux sont ceux qui ont l'air beaux."],
  ["Noah says the app is useful because useful apps are the ones that help you.", "Noah dit que l'application est utile parce que les applications utiles sont celles qui aident."],
  ["The manager is qualified because qualified managers are managers who qualify as qualified.", "Le manager est competent parce que les managers competents sont des managers qui ont le niveau requis."],
  ["Rina says the book is important because important books are the books that matter.", "Rina dit que le livre est important parce que les livres importants sont ceux qui comptent."],
  ["The road is dangerous because dangerous roads are roads where danger is present.", "La route est dangereuse parce que les routes dangereuses sont des routes ou le danger est present."],
  ["Ben says the rule is clear because clear rules are rules you can understand clearly.", "Ben dit que la regle est claire parce que les regles claires sont des regles qu'on comprend clairement."],
  ["Ava says the coach is effective because effective coaches are coaches who get results.", "Ava dit que l'entraineur est efficace parce que les entraineurs efficaces sont ceux qui obtiennent des resultats."],
  ["The dessert is delicious because delicious desserts are desserts that taste delicious.", "Le dessert est delicieux parce que les desserts delicieux sont des desserts qui ont un gout delicieux."],
  ["Leo says the city is modern because modern cities are cities with modern things.", "Leo dit que la ville est moderne parce que les villes modernes sont des villes avec des choses modernes."],
  ["The classroom is organized because organized classrooms are the ones that are organized.", "La classe est bien rangee parce que les classes organisees sont celles qui sont organisees."],
  ["Sera says the team is strong because strong teams are teams that are strong.", "Sera dit que l'equipe est forte parce que les equipes fortes sont des equipes fortes."],
  ["The movie ending makes sense because sensible endings are endings that make sense.", "La fin du film a du sens parce que les fins logiques sont des fins qui ont du sens."],
  ["Owen says the phone case is protective because protective cases protect phones.", "Owen dit que la coque du telephone est protectrice parce que les coques protectrices protegent les telephones."],
  ["The restaurant is classy because classy restaurants are restaurants with class.", "Le restaurant est chic parce que les restaurants chics sont des restaurants avec du chic."],
  ["Mina says the teacher is fair because fair teachers are teachers who act fairly.", "Mina dit que le professeur est juste parce que les professeurs justes sont des professeurs qui agissent justement."],
  ["The new policy is sensible because sensible policies are policies that make sense.", "La nouvelle politique est sensée parce que les politiques sensées sont celles qui ont du sens."],
  ["Kai says the concert is worth it because worth-it concerts are concerts worth going to.", "Kai dit que le concert en vaut la peine parce que les concerts qui valent le coup sont des concerts qui valent le coup d'y aller."],
  ["The path is safe because safe paths are paths you can walk on safely.", "Le chemin est sur parce que les chemins surs sont des chemins sur lesquels on peut marcher sans danger."],
  ["Talia says the app is accurate because accurate apps give accurate answers.", "Talia dit que l'application est precise parce que les applications precises donnent des reponses precises."],
  ["The class rule is important because important rules are rules that matter in class.", "La regle de classe est importante parce que les regles importantes sont celles qui comptent en classe."],
  ["The gift is thoughtful because thoughtful gifts are gifts chosen thoughtfully.", "Le cadeau est attentionne parce que les cadeaux attentionnes sont des cadeaux choisis avec attention."],
  ["Zoe says the guide is helpful because helpful guides are guides that help.", "Zoe dit que le guide est utile parce que les guides utiles sont des guides qui aident."],
  ["The route is efficient because efficient routes are routes that save time efficiently.", "L'itineraire est efficace parce que les itineraires efficaces sont ceux qui font gagner du temps efficacement."],
  ["Milo says the poster is persuasive because persuasive posters are posters that persuade.", "Milo dit que l'affiche est persuasive parce que les affiches persuasives sont des affiches qui persuadent."],
  ["The song is meaningful because meaningful songs are songs that mean something.", "La chanson est significative parce que les chansons significatives sont des chansons qui veulent dire quelque chose."],
  ["The system is reliable because reliable systems are systems people rely on.", "Le systeme est fiable parce que les systemes fiables sont des systemes sur lesquels on peut compter."],
  ["Priya says the shortcut is smart because smart shortcuts are shortcuts that are smart.", "Priya dit que le raccourci est intelligent parce que les raccourcis intelligents sont des raccourcis intelligents."],
  ["The job candidate is ready because ready candidates are candidates who are ready.", "Le candidat est pret parce que les candidats prets sont des candidats qui sont prets."],
  ["The new menu is welcoming because welcoming menus are menus that welcome everyone.", "Le nouveau menu est accueillant parce que les menus accueillants sont des menus qui accueillent tout le monde."],
  ["The meeting was productive because productive meetings are meetings that produce useful results.", "La reunion etait productive parce que les reunions productives sont des reunions qui produisent des resultats utiles."],
  ["Maya says the cafe is the best because the best cafes are the ones people call the best.", "Maya dit que le café est le meilleur parce que les meilleurs cafés sont ceux que les gens appellent les meilleurs."],
  ["Theo says the shortcut is safe because safe shortcuts are shortcuts you can safely take.", "Theo dit que le raccourci est sur parce que les raccourcis surs sont des raccourcis qu'on peut emprunter en toute securite."],
  ["Nina says the app is reliable because reliable apps are apps you can rely on.", "Nina dit que l'application est fiable parce que les applications fiables sont des applications sur lesquelles on peut compter."],
  ["Ben says the coach is wise because wise coaches are coaches who know wise things.", "Ben dit que l'entraineur est sage parce que les entraineurs sages sont des entraineurs qui savent des choses sages."],
  ["Omar says the rule is fair because fair rules are rules that are fair to everyone.", "Omar dit que la regle est juste parce que les regles justes sont des regles justes pour tout le monde."],
  ["Priya says the book is insightful because insightful books are books full of insight.", "Priya dit que le livre est eclairant parce que les livres eclairants sont pleins d'eclairages."],
  ["Leo says the team is strong because strong teams are teams that stay strong.", "Leo dit que l'equipe est forte parce que les equipes fortes sont des equipes qui restent fortes."],
  ["Rina says the film is moving because moving films are films that move you emotionally.", "Rina dit que le film est emouvant parce que les films emouvants sont des films qui vous emeuvent."],
  ["Jules says the party was fun because fun parties are the parties that are fun.", "Jules dit que la fete etait amusante parce que les fetes amusantes sont les fetes qui sont amusantes."],
  ["Ava says the plan will succeed because successful plans are plans that succeed.", "Ava dit que le plan reussira parce que les plans qui reussissent sont des plans qui reussissent."],
  ["Maya says the service is excellent because excellent services are services that excel.", "Maya dit que le service est excellent parce que les services excellents sont des services qui excellent."],
  ["Leo says the tool is useful because useful tools are tools that are useful.", "Leo dit que l'outil est utile parce que les outils utiles sont des outils utiles."],
  ["Nina says the route is convenient because convenient routes are routes that are convenient.", "Nina dit que l'itineraire est pratique parce que les itineraires pratiques sont des itineraires pratiques."],
  ["Owen says the class is interesting because interesting classes are classes that interest people.", "Owen dit que le cours est interessant parce que les cours interessants sont des cours qui interessent les gens."],
  ["Priya says the coat is warm because warm coats are coats that warm you up.", "Priya dit que le manteau est chaud parce que les manteaux chauds sont des manteaux qui vous rechauffent."],
  ["Ben says the app is secure because secure apps are apps that keep things secure.", "Ben dit que l'application est securisee parce que les applications securisees sont des applications qui gardent tout en securite."],
  ["Tara says the note is helpful because helpful notes are notes that help.", "Tara dit que la note est utile parce que les notes utiles sont des notes qui aident."],
  ["Kai says the solution is smart because smart solutions are solutions that are smart.", "Kai dit que la solution est intelligente parce que les solutions intelligentes sont des solutions intelligentes."],
  ["Jules says the shortcut is efficient because efficient shortcuts are shortcuts that save effort efficiently.", "Jules dit que le raccourci est efficace parce que les raccourcis efficaces sont des raccourcis qui economisent l'effort efficacement."],
  ["Ava says the report is clear because clear reports are reports that make things clear.", "Ava dit que le rapport est clair parce que les rapports clairs sont des rapports qui rendent les choses claires."],
  ["Noah says the teacher is kind because kind teachers are teachers who act kindly.", "Noah dit que le professeur est gentil parce que les professeurs gentils sont des professeurs qui agissent gentiment."],
  ["Mina says the movie is powerful because powerful movies are movies that have power.", "Mina dit que le film est puissant parce que les films puissants sont des films qui ont de la puissance."],
  ["Eli says the system is balanced because balanced systems are systems that stay balanced.", "Eli dit que le systeme est equilibre parce que les systemes equilibres sont des systemes qui restent equilibres."],
  ["Rina says the idea is brilliant because brilliant ideas are ideas that shine brilliantly.", "Rina dit que l'idee est brillante parce que les idees brillantes sont des idees qui brillent brillamment."],
  ["Hugo says the dessert is perfect because perfect desserts are desserts that are perfect.", "Hugo dit que le dessert est parfait parce que les desserts parfaits sont des desserts parfaits."],
  ["Lina says the schedule is organized because organized schedules are schedules that are organized.", "Lina dit que l'emploi du temps est organise parce que les emplois du temps organises sont des emplois du temps organises."],
  ["Grant says the offer is fair because fair offers are offers that are fair.", "Grant dit que l'offre est juste parce que les offres justes sont des offres justes."],
  ["Zoe says the guide is reliable because reliable guides are guides that you can rely on reliably.", "Zoe dit que le guide est fiable parce que les guides fiables sont des guides sur lesquels on peut compter de facon fiable."],
  ["Milo says the book is meaningful because meaningful books are books that mean something meaningful.", "Milo dit que le livre est significatif parce que les livres significatifs sont des livres qui veulent dire quelque chose de significatif."],
  ["Theo says the path is safe because safe paths are paths that keep you safe.", "Theo dit que le chemin est sur parce que les chemins surs sont des chemins qui vous gardent en securite."],
  ["Pia says the response is appropriate because appropriate responses are responses that fit appropriately.", "Pia dit que la reponse est appropriee parce que les reponses appropriees sont des reponses qui conviennent de facon appropriee."],
  ["Finn says the meal is healthy because healthy meals are meals that are healthy.", "Finn dit que le repas est sain parce que les repas sains sont des repas sains."],
  ["Maya says the room is cozy because cozy rooms are rooms that feel cozy.", "Maya dit que la piece est confortable parce que les pieces confortables sont des pieces qui donnent une sensation de confort."],
  ["Sam says the message is honest because honest messages are messages that tell the truth honestly.", "Sam dit que le message est honnete parce que les messages honnetes sont des messages qui disent la verite honnetement."],
  ["Juno says the team is creative because creative teams are teams that create creatively.", "Juno dit que l'equipe est creative parce que les equipes creatives sont des equipes qui creent de facon creative."],
  ["Iris says the book club is fun because fun book clubs are book clubs that are fun.", "Iris dit que le club de lecture est amusant parce que les clubs de lecture amusants sont des clubs de lecture amusants."],
  ["Cole says the warning is useful because useful warnings are warnings that are useful.", "Cole dit que l'avertissement est utile parce que les avertissements utiles sont des avertissements utiles."],
  ["Nora says the event is memorable because memorable events are events that are memorable.", "Nora dit que l'evenement est memorable parce que les evenements memorables sont des evenements memorables."],
  ["Ari says the method is practical because practical methods are methods that are practical.", "Ari dit que la methode est pratique parce que les methodes pratiques sont des methodes pratiques."],
  ["Rita says the path is direct because direct paths are paths that go straight.", "Rita dit que le chemin est direct parce que les chemins directs sont des chemins qui vont tout droit."],
  ["Tia says the advice is wise because wise advice is advice that is wise.", "Tia dit que le conseil est sage parce que les conseils sages sont des conseils sages."],
  ["Oli says the proposal is reasonable because reasonable proposals are proposals that make sense reasonably.", "Oli dit que la proposition est raisonnable parce que les propositions raisonnables sont des propositions qui ont du sens raisonnablement."],
  ["Lara says the answer is right because right answers are answers that are right.", "Lara dit que la reponse est juste parce que les reponses justes sont des reponses justes."],
  ["Ben says the garden is lovely because lovely gardens are gardens that look lovely.", "Ben dit que le jardin est charmant parce que les jardins charmants sont des jardins qui ont l'air charmants."],
  ["Mina says the computer is powerful because powerful computers are computers with power.", "Mina dit que l'ordinateur est puissant parce que les ordinateurs puissants sont des ordinateurs avec de la puissance."],
  ["Drew says the choice is smart because smart choices are choices that are smart.", "Drew dit que le choix est intelligent parce que les choix intelligents sont des choix intelligents."],
  ["Jade says the route is pleasant because pleasant routes are routes that feel pleasant.", "Jade dit que l'itineraire est agreable parce que les itineraires agreables sont des itineraires agreables."],
  ["Owen says the team is effective because effective teams are teams that work effectively.", "Owen dit que l'equipe est efficace parce que les equipes efficaces sont des equipes qui travaillent efficacement."],
  ["Maya says the shortcut is sensible because sensible shortcuts are shortcuts that make sense.", "Maya dit que le raccourci est sensé parce que les raccourcis sensés sont des raccourcis qui ont du sens."],
  ["Leo says the method is successful because successful methods are methods that succeed.", "Leo dit que la methode est fructueuse parce que les methodes fructueuses sont des methodes qui reussissent."]
];

const EN = ['Begging the Question', 'Vicious Circle', 'Confirmation Bias', 'False Dilemma'];
const FR = ['Pétition de principe', 'Cercle vicieux', 'Biais de confirmation', 'Fausse dichotomie'];

const rotate = (a: string[], i: number) => {
  const r = a.slice(1);
  r.splice(i, 0, a[0]);
  return r;
};

const sub = (i: number) => (i < 17 ? SubLevel.BEGINNER : i < 34 ? SubLevel.INTERMEDIATE : SubLevel.EXPERT);

function make(fr = false): Question[] {
  return SCENARIOS.map((s, i) => {
    const c = i % 4;
    return {
      id: 32301 + i,
      level: 6,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Pétition de principe' : 'Begging the Question',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? FR : EN, c),
      correct_option_index: c,
      explanation: fr
        ? "La conclusion est deja incluse dans la definition ou la formulation de la premisse, donc l'argument tourne en rond."
        : 'The conclusion is already tucked into the premise, so the argument just circles back on itself.',
      detailedExplanationBeginner: fr
        ? "On prouve une idee avec elle-meme."
        : 'The claim is proved with itself.',
      detailedExplanationIntermediate: fr
        ? "Au lieu d'apporter une vraie raison externe, l'argument reformule la conclusion comme si elle etait evidemment vraie."
        : 'Instead of bringing an outside reason, the argument restates the conclusion as if it were already obvious.',
      detailedExplanationExpert: fr
        ? "La petition de principe utilise une structure circulaire: ce qu'il faut demontrer sert de preuve, souvent sous une forme legerement reformulee, ce qui bloque toute verification independante."
        : 'Begging the question uses a circular structure: what needs proving is used as proof, often in a slightly reworded form, which blocks independent verification.',
      questionFormat: 'standard',
    };
  });
}

export const BEGGING_THE_QUESTION_EXPANSION_EN: Question[] = make();
export const BEGGING_THE_QUESTION_EXPANSION_FR: Question[] = make(true);
