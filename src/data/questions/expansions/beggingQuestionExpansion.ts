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
  ["Ava says the plan will succeed because successful plans are plans that succeed.", "Ava dit que le plan reussira parce que les plans qui reussissent sont des plans qui reussissent."]
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
