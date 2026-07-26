import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says real gamers do not pause for snacks, so when Leo takes a break, she says he is not a true gamer.', 'Maya dit que les vrais joueurs ne font pas de pause pour manger, alors quand Leo s arrête, elle dit que ce n est pas un vrai joueur.'],
  ['Priya says a true vegan would never eat honey, so when her friend mentions honey on toast, she says she is not really vegan.', 'Priya dit qu une vraie vegan ne mangerait jamais de miel, alors quand son amie mentionne du miel sur du pain grillé, elle dit qu elle n est pas vraiment vegan.'],
  ['Omar says real fans never complain about a band, so anyone who criticizes the new album is "not a real fan."', 'Omar dit que les vrais fans ne se plaignent jamais d un groupe, alors toute personne qui critique le nouvel album "n est pas un vrai fan".'],
  ['Rina says a true dog lover would always want a giant breed, so she dismisses someone who prefers a small dog.', 'Rina dit qu un vrai amoureux des chiens voudrait toujours une grande race, alors elle rejette quelqu un qui préfère un petit chien.'],
  ['Ben says real runners wake up before sunrise every day, so he claims his coworker is not a runner because she sleeps in on weekends.', 'Ben dit que les vrais coureurs se lèvent avant le lever du soleil tous les jours, alors il affirme que sa collègue n est pas coureuse parce qu elle fait la grasse matinee le week-end.'],
  ['Zoe says a true chef never uses shortcuts, so when a baker buys pre-made pastry dough, Zoe calls him fake.', 'Zoé dit qu un vrai chef n utilise jamais de raccourcis, alors quand un boulanger achete de la pate a tarte prete a l emploi, Zoé dit qu il est faux.'],
  ['Kai says real artists only use expensive supplies, so he says his friend who paints with markers is not an artist.', 'Kai dit que les vrais artistes n utilisent que du matériel cher, alors il dit que son ami qui peint avec des feutres n est pas un artiste.'],
  ['Nora says a true mountain hiker must love camping, so she excludes someone who only does day hikes.', 'Nora dit qu un vrai randonneur de montagne doit aimer camper, alors elle exclut quelqu un qui ne fait que des randonnées à la journée.'],
  ['Eli says real readers finish every book they start, so he says his sister is not a reader because she abandons boring books.', 'Eli dit que les vrais lecteurs finissent tous les livres qu ils commencent, alors il dit que sa sœur n est pas lectrice parce qu elle abandonne les livres ennuyeux.'],
  ['Lina says a true coffee person drinks black coffee only, so she mocks anyone who adds milk.', 'Lina dit qu une vraie personne du café boit uniquement du café noir, alors elle se moque de toute personne qui ajoute du lait.'],
  ['Grant says a real musician can play by ear immediately, so he says a beginner pianist is not a musician yet.', 'Grant dit qu un vrai musicien peut jouer a l oreille tout de suite, alors il dit qu un pianiste débutant n est pas encore musicien.'],
  ['Tia says true parents never ask for help, so she calls her brother less of a parent when he hires a babysitter.', 'Tia dit que les vrais parents ne demandent jamais d aide, alors elle dit que son frère est moins parent quand il engage une baby-sitter.'],
  ['Noah says a real student always gets perfect grades, so he says the student who passes with B grades does not count.', 'Noah dit qu un vrai étudiant obtient toujours des notes parfaites, alors il dit que l étudiant qui réussit avec des B ne compte pas.'],
  ['Mia says true cyclists never use e-bikes, so she says her friend is not really cycling.', 'Mia dit que les vrais cyclistes n utilisent jamais de vélos électriques, alors elle dit que son amie ne fait pas vraiment du vélo.'],
  ['Jules says a genuine tea drinker only likes one kind of tea, so he says anyone who enjoys green and black tea is just pretending.', 'Jules dit qu un vrai amateur de thé n aime qu une seule variété de thé, alors il dit que toute personne qui aime le thé vert et le thé noir fait semblant.'],
  ['Ava says a true photographer never uses portrait mode, so she says her cousin is not a real photographer.', 'Ava dit qu un vrai photographe n utilise jamais le mode portrait, alors elle dit que sa cousine n est pas une vraie photographe.'],
  ['Finn says a real movie fan watches only classics, so he dismisses someone who loves recent comedies.', 'Finn dit qu un vrai fan de cinéma ne regarde que des classiques, alors il rejette quelqu un qui adore les comedies recentes.'],
  ['Mina says a true gamer never plays mobile games, so she says her sister is not really into games.', 'Mina dit qu un vrai joueur ne joue jamais a des jeux mobiles, alors elle dit que sa sœur ne s intéresse pas vraiment aux jeux.'],
  ['Theo says a real baker makes everything from scratch, so he says the person who buys dough is not a baker.', 'Theo dit qu un vrai boulanger fait tout à partir de rien, alors il dit que la personne qui achète de la pâte n est pas boulanger.'],
  ['Juno says true cyclists never wear helmets because "the pros are fearless," so she dismisses her cautious friend.', 'Juno dit que les vrais cyclistes ne portent jamais de casque parce que "les pros n ont pas peur", alors elle rejette son ami prudent.'],
  ['Iris says real musicians never need lessons, so she says the person taking classes is not serious.', 'Iris dit que les vrais musiciens n ont jamais besoin de cours, alors elle dit que la personne qui suit des leçons n est pas sérieuse.'],
  ['Cole says a true hiker always owns expensive gear, so he says the budget hiker is not part of the group.', 'Cole dit qu un vrai randonneur possède toujours du matériel cher, alors il dit que le randonneur au budget serré ne fait pas partie du groupe.'],
  ['Riley says real readers love long novels only, so he says the comic-book fan does not count as a reader.', 'Riley dit que les vrais lecteurs aiment seulement les longs romans, alors il dit que le fan de bandes dessinées ne compte pas comme lecteur.'],
  ['Pia says a true vegetarian would never eat restaurant fries, so she says her friend ordering fries is cheating.', 'Pia dit qu un vrai végétarien ne mangerait jamais des frites de restaurant, alors elle dit que son amie qui commande des frites triche.'],
  ['Hugo says real travelers never use package tours, so he says his aunt is not a traveler because she booked a tour.', 'Hugo dit que les vrais voyageurs n utilisent jamais de voyages organisés, alors il dit que sa tante n est pas voyageuse parce qu elle a réservé une tournée.'],
  ['Sam says a true baker should never buy yeast, so he says the baker at the market is not authentic.', 'Sam dit qu un vrai boulanger ne devrait jamais acheter de levure, alors il dit que le boulanger du marché n est pas authentique.'],
  ['Jade says a real gardener grows everything from seed, so she says the person who buys seedlings is fake.', 'Jade dit qu un vrai jardinier fait pousser tout à partir de graines, alors elle dit que la personne qui achète des plants est fausse.'],
  ['Owen says true fans never miss a live stream, so he says anyone with a busy job is not really a fan.', 'Owen dit que les vrais fans ne ratent jamais un direct, alors il dit que toute personne avec un travail prenant n est pas vraiment fan.'],
  ['Lea says a genuine gamer uses only one platform, so she says someone who plays on PC and console is not a real gamer.', 'Lea dit qu un vrai joueur utilise une seule plateforme, alors elle dit que quelqu un qui joue sur PC et console n est pas un vrai joueur.'],
  ['Maya says real cooks never follow recipes, so she says her roommate who reads instructions is not a real cook.', 'Maya dit que les vrais cuisiniers ne suivent jamais les recettes, alors elle dit que sa colocataire qui lit les instructions n est pas une vraie cuisinière.'],
  ['Ben says a true runner never listens to music, so he says the jogging friend with headphones is just pretending.', 'Ben dit qu un vrai coureur n écoute jamais de musique, alors il dit que l ami qui court avec des écouteurs fait juste semblant.'],
  ['Ava says a real musician never needs a tuner, so she calls the student with a clip-on tuner a fake.', 'Ava dit qu un vrai musicien n a jamais besoin d accordeur, alors elle appelle faux l élève avec un accordeur à pince.'],
  ['Omar says a true fan of the team never complains about the coach, so he dismisses the season ticket holder who is frustrated.', 'Omar dit qu un vrai fan de l équipe ne se plaint jamais de l entraîneur, alors il rejette l abonné frustré.'],
  ['Nina says a genuine cat person would prefer every cat equally, so she says someone with a favorite cat is not a cat person.', 'Nina dit qu une vraie personne à chats aimerait tous les chats de la meme façon, alors elle dit que quelqu un qui a un chat préféré n est pas une personne à chats.'],
  ['Eli says a true coder never uses templates, so he says the web developer who uses a starter layout is not a real coder.', 'Eli dit qu un vrai codeur n utilise jamais de modèles, alors il dit que le développeur web qui utilise un modèle de départ n est pas un vrai codeur.'],
  ['Lina says a real book club member finishes every book on time, so she says the member who returns one late is not authentic.', 'Lina dit qu un vrai membre d un club de lecture finit tous les livres à temps, alors elle dit que le membre qui en rend un en retard n est pas authentique.'],
  ['Grant says a true craft brewer never likes sweet drinks, so he says the brewer who enjoys soda is not serious about beer.', 'Grant dit qu un vrai brasseur artisanal n aime jamais les boissons sucrées, alors il dit que le brasseur qui aime le soda n est pas sérieux au sujet de la bière.'],
  ['Tia says a real parent never gets tired, so she says the exhausted parent after a night shift is not doing it right.', 'Tia dit qu un vrai parent n est jamais fatigué, alors elle dit que le parent épuisé après une nuit de travail ne fait pas les choses correctement.'],
  ['Noah says a genuine gamer should know every release date, so he says the casual player is not a true gamer.', 'Noah dit qu un vrai joueur devrait connaître chaque date de sortie, alors il dit que le joueur occasionnel n est pas un vrai joueur.'],
  ['Mia says a true foodie never eats fast food, so she says her friend who grabs fries on a road trip is not a foodie.', 'Mia dit qu un vrai gourmand ne mange jamais de fast food, alors elle dit que son amie qui prend des frites sur la route n est pas une gourmande.'],
  ['Jules says a real cyclist only uses one gear, so he says the mountain biker with many gears is fake.', 'Jules dit qu un vrai cycliste n utilise qu une seule vitesse, alors il dit que le vététiste avec plusieurs vitesses est faux.'],
  ['Ava says a true language learner never forgets words, so she says the student who blanks out in class is not learning.', 'Ava dit qu un vrai apprenant de langue n oublie jamais les mots, alors elle dit que l étudiant qui bloque en classe n apprend pas.'],
  ['Finn says a real singer never uses backing tracks, so he says the performer with support tracks is not a singer.', 'Finn dit qu un vrai chanteur n utilise jamais de piste d accompagnement, alors il dit que l interprète avec des pistes de soutien n est pas chanteur.'],
  ['Mina says a true teacher never asks for a lesson plan, so she says the teacher who prepares one is not experienced.', 'Mina dit qu un vrai professeur ne demande jamais de plan de cours, alors elle dit que le professeur qui en prépare un n est pas expérimenté.'],
  ['Theo says a genuine sports fan never switches teams, so he says the person who moved cities and likes the local club is fake.', 'Theo dit qu un vrai fan de sport ne change jamais d équipe, alors il dit que la personne qui a déménagé et aime le club local est fausse.'],
  ['Juno says a real artist never sells prints, so he says the painter who sells prints is not an artist.', 'Juno dit qu un vrai artiste ne vend jamais d impressions, alors il dit que le peintre qui vend des impressions n est pas un artiste.'],
  ['Iris says a true camper never brings a phone, so she says the camper checking maps on a phone is not authentic.', 'Iris dit qu un vrai campeur n apporte jamais de téléphone, alors elle dit que le campeur qui vérifie les cartes sur un téléphone n est pas authentique.'],
  ['Cole says a genuine fan of jazz never listens to pop, so he says the person with mixed playlists is not a jazz fan.', 'Cole dit qu un vrai fan de jazz n écoute jamais de pop, alors il dit que la personne avec des playlists mixtes n est pas fan de jazz.'],
  ['Riley says a real home cook never orders takeout, so he says the parent who orders pizza on Friday is not a home cook.', 'Riley dit qu un vrai cuisinier à domicile ne commande jamais à emporter, alors il dit que le parent qui commande une pizza le vendredi n est pas un cuisinier à domicile.'],
  ['Pia says a true runner never walks during a race, so she says the race-walker is not a runner.', 'Pia dit qu un vrai coureur ne marche jamais pendant une course, alors elle dit que le marcheur de course n est pas coureur.'],
  ['Hugo says a real gamer never plays cozy games, so he says the player who likes them is not a gamer.', 'Hugo dit qu un vrai joueur ne joue jamais à des jeux tranquilles, alors il dit que le joueur qui les aime n est pas un joueur.'],
  ['Sam says a true reader only likes paper books, so he says the e-book fan is not a real reader.', 'Sam dit qu un vrai lecteur n aime que les livres papier, alors il dit que le fan de livres numériques n est pas un vrai lecteur.'],
  ['Nora says a true cyclist never uses a lock, so she says the rider who locks the bike is not a cyclist.', 'Nora dit qu un vrai cycliste n utilise jamais de cadenas, alors elle dit que le cycliste qui verrouille son vélo n est pas cycliste.'],
  ['Sophie says a true coffee fan never uses instant coffee, so she says the student with instant coffee is not a real coffee person.', 'Sophie dit qu un vrai amateur de cafe n utilise jamais de cafe instantane, alors elle dit que l etudiante avec du cafe instantane n est pas une vraie personne du cafe.'],
  ['Liam says a genuine baker never buys bread, so he says the neighbor who buys a loaf is not a real baker.', 'Liam dit qu un vrai boulanger n achete jamais de pain, alors il dit que le voisin qui achete une baguette n est pas un vrai boulanger.'],
  ['Emma says a true traveler always leaves the country, so she says the person who explores nearby towns is not really traveling.', 'Emma dit qu un vrai voyageur quitte toujours le pays, alors elle dit que la personne qui explore les villes voisines ne voyage pas vraiment.'],
  ['Diego says a real coder never uses autocomplete, so he says the developer who uses it is only pretending.', 'Diego dit qu un vrai codeur n utilise jamais l autocompletion, alors il dit que le developpeur qui l utilise fait seulement semblant.'],
  ['Lily says a true dog person must like big dogs only, so she says someone who loves small dogs is fake.', 'Lily dit qu une vraie personne a chiens doit aimer seulement les grands chiens, alors elle dit que quelqu un qui aime les petits chiens est faux.'],
  ['Hassan says a genuine reader only finishes hard books, so he says the comic fan is not a real reader.', 'Hassan dit qu un vrai lecteur ne termine que les livres difficiles, alors il dit que le fan de bandes dessinées n est pas un vrai lecteur.'],
  ['Ruby says a real runner never takes rest days, so she says the athlete who rests is not a runner.', 'Ruby dit qu un vrai coureur ne prend jamais de jour de repos, alors elle dit que l athlète qui se repose n est pas coureur.'],
  ['Noah says a true artist never uses tracing, so he says the person who sketches from a reference is fake.', 'Noah dit qu un vrai artiste n utilise jamais le calque, alors il dit que la personne qui dessine a partir d une reference est fausse.'],
  ['Chloe says a genuine tea drinker only likes one flavor, so she says the person who likes many teas is not authentic.', 'Chloe dit qu un vrai buveur de thé n aime qu une seule saveur, alors elle dit que la personne qui aime plusieurs thés n est pas authentique.'],
  ['Yusuf says a real musician never practices with apps, so he says the student using a practice app is not serious.', 'Yusuf dit qu un vrai musicien ne s exerce jamais avec des applications, alors il dit que l etudiant qui utilise une application de pratique n est pas serieux.'],
  ['Maya says a true gamer only plays competitive games, so she says the puzzle fan is not really a gamer.', 'Maya dit qu un vrai joueur ne joue qu a des jeux competitifs, alors elle dit que le fan de puzzles n est pas vraiment un joueur.'],
  ['Lucas says a genuine cyclist never uses an e-bike, so he says the commuter on an e-bike is not a cyclist.', 'Lucas dit qu un vrai cycliste n utilise jamais de velo electrique, alors il dit que le navetteur sur velo electrique n est pas cycliste.'],
  ['Ari says a real cook never follows a recipe, so he says the home cook with a recipe is not a cook.', 'Ari dit qu un vrai cuisinier ne suit jamais de recette, alors il dit que le cuisinier a la maison avec une recette n est pas cuisinier.'],
  ['Mina says a true fan never complains, so she says the frustrated supporter is not a fan at all.', 'Mina dit qu un vrai fan ne se plaint jamais, alors elle dit que le supporter frustré n est pas du tout un fan.'],
  ['Owen says a genuine photographer only uses a fancy camera, so he says the phone photographer is not real.', 'Owen dit qu un vrai photographe n utilise qu un appareil couteux, alors il dit que le photographe au telephone n est pas reel.'],
  ['Zara says a true parent never needs childcare, so she says the parent who hires a babysitter is not a real parent.', 'Zara dit qu un vrai parent n a jamais besoin de garde denfants, alors elle dit que le parent qui engage une baby-sitter n est pas un vrai parent.'],
  ['Ben says a real student never uses notes, so he says the student with flashcards is cheating.', 'Ben dit qu un vrai etudiant n utilise jamais de notes, alors il dit que l etudiant avec des cartes memoires triche.'],
  ['Nora says a genuine foodie only eats fancy restaurants, so she says the person who likes street food is not a foodie.', 'Nora dit qu un vrai gourmet ne mange que dans des restaurants chics, alors elle dit que la personne qui aime la cuisine de rue n est pas une gourmande.'],
  ['Eli says a true movie fan only likes dramas, so he says the comedy lover is not a real fan.', 'Eli dit qu un vrai fan de cinema n aime que les drames, alors il dit que l amateur de comedies n est pas un vrai fan.'],
  ['Pia says a real gardener never buys plants, so she says the person who buys seedlings is not a gardener.', 'Pia dit qu un vrai jardinier n achete jamais de plantes, alors elle dit que la personne qui achete des plants n est pas jardiniere.'],
  ['Theo says a true hiker always camps overnight, so he says the day hiker does not count.', 'Theo dit qu un vrai randonneur campe toujours une nuit, alors il dit que le randonneur a la journee ne compte pas.'],
  ['Juno says a genuine singer never uses sheet music, so he says the singer who reads notes is fake.', 'Juno dit qu un vrai chanteur n utilise jamais de partition, alors il dit que le chanteur qui lit des notes est faux.'],
  ['Iris says a real gamer only plays on one console, so she says the multi-platform player is not a gamer.', 'Iris dit qu un vrai joueur ne joue que sur une seule console, alors elle dit que le joueur multi-plateforme n est pas un joueur.'],
  ['Cole says a true reader only likes long novels, so he says the comic-book reader is not a reader.', 'Cole dit qu un vrai lecteur n aime que les longs romans, alors il dit que le lecteur de bandes dessinees n est pas un lecteur.'],
  ['Riley says a real cyclist never wears bright colors, so he says the neon-jacket rider is not authentic.', 'Riley dit qu un vrai cycliste ne porte jamais de couleurs vives, alors il dit que le cycliste en veste fluo n est pas authentique.'],
  ['Pia says a true baker never buys flour, so she says the baker who buys flour is fake.', 'Pia dit qu un vrai boulanger n achete jamais de farine, alors elle dit que le boulanger qui achete de la farine est faux.'],
  ['Hugo says a genuine coder never searches online, so he says the developer who checks docs is not a coder.', 'Hugo dit qu un vrai codeur ne cherche jamais en ligne, alors il dit que le developpeur qui consulte la documentation n est pas codeur.'],
  ['Sam says a real tea person never drinks herbal tea, so he says the herbal-tea fan is not a tea person.', 'Sam dit qu une vraie personne du thé ne boit jamais de tisane, alors il dit que le fan de tisane n est pas une personne du thé.'],
  ['Jade says a true fan of the team never criticizes referees, so she says the upset supporter is not a real fan.', 'Jade dit qu un vrai fan de l equipe ne critique jamais les arbitres, alors elle dit que le supporter mecontent n est pas un vrai fan.'],
  ['Owen says a real traveler only goes abroad, so he says the weekend road-tripper is not a traveler.', 'Owen dit qu un vrai voyageur ne va qu a l etranger, alors il dit que le routard du week-end n est pas un voyageur.'],
  ['Lea says a genuine cat person loves every cat equally, so she says the person with a favorite cat is not a cat person.', 'Lea dit qu une vraie personne a chats aime tous les chats de la meme maniere, alors elle dit que la personne qui a un chat prefere n est pas une personne a chats.'],
  ['Maya says a true runner never slows down, so she says the jogger who walks uphill is not a runner.', 'Maya dit qu un vrai coureur ne ralentit jamais, alors elle dit que le joggeur qui marche en montée n est pas coureur.'],
  ['Ben says a real musician never plays covers, so he says the singer in a cover band is fake.', 'Ben dit qu un vrai musicien ne joue jamais de reprises, alors il dit que le chanteur d un groupe de reprises est faux.'],
  ['Ava says a true art lover only likes paintings, so she says the sculpture fan does not count.', 'Ava dit qu un vrai amateur d art n aime que les peintures, alors elle dit que le fan de sculpture ne compte pas.'],
  ['Finn says a real cyclist never rides slowly, so he says the relaxed rider is not a cyclist.', 'Finn dit qu un vrai cycliste ne roule jamais lentement, alors il dit que le cycliste tranquille n est pas cycliste.'],
  ['Mina says a genuine book lover never reads rereads, so she says the person rereading a favorite novel is not a book lover.', 'Mina dit qu un vrai amoureux des livres ne relit jamais, alors elle dit que la personne qui relit un roman prefere n est pas une amoureuse des livres.'],
  ['Theo says a true baker never uses a mixer, so he says the baker using one is not authentic.', 'Theo dit qu un vrai boulanger n utilise jamais de batteur, alors il dit que le boulanger qui en utilise un n est pas authentique.'],
  ['Juno says a real gamer never enjoys story games, so he says the player who likes story games is not a gamer.', 'Juno dit qu un vrai joueur n aime jamais les jeux narratifs, alors il dit que le joueur qui aime les jeux narratifs n est pas un joueur.'],
  ['Iris says a true parent never asks for a break, so she says the tired parent is not a real parent.', 'Iris dit qu un vrai parent ne demande jamais de pause, alors elle dit que le parent fatigue n est pas un vrai parent.'],
  ['Cole says a genuine foodie never eats from a truck, so he says the food-truck fan is not a foodie.', 'Cole dit qu un vrai gourmet ne mange jamais dans un camion, alors il dit que le fan de food truck n est pas un gourmet.'],
  ['Riley says a true student always studies alone, so he says the study-group member is not a real student.', 'Riley dit qu un vrai etudiant etudie toujours seul, alors il dit que le membre du groupe d etude n est pas un vrai etudiant.'],
  ['Pia says a real fan never changes opinions, so she says the supporter who changed his mind is fake.', 'Pia dit qu un vrai fan ne change jamais d avis, alors elle dit que le supporter qui a change d avis est faux.'],
  ['Hugo says a genuine cyclist never stops for water, so he says the rider who drinks water is not serious.', 'Hugo dit qu un vrai cycliste ne s arrete jamais pour boire, alors il dit que le cycliste qui boit de l eau n est pas serieux.'],
  ['Sam says a true reader never prefers short stories, so he says the short-story fan is not a reader.', 'Sam dit qu un vrai lecteur ne prefere jamais les nouvelles, alors il dit que l amateur de nouvelles n est pas un lecteur.'],
  ['Nora says a real artist never asks for feedback, so she says the painter who wants comments is not an artist.', 'Nora dit qu un vrai artiste ne demande jamais de retour, alors elle dit que le peintre qui veut des commentaires n est pas un artiste.'],
  ['Maya says a true tea fan never likes iced tea, so she says the person who drinks iced tea is not really into tea.', 'Maya dit qu un vrai fan de thé n aime jamais le thé glacé, alors elle dit que la personne qui boit du thé glacé ne s interesse pas vraiment au thé.'],
  ['Leo says a real cyclist never uses a map app, so he says the rider checking directions is just a tourist.', 'Leo dit qu un vrai cycliste n utilise jamais d application de carte, alors il dit que le cycliste qui verifie son itineraire est juste un touriste.'],
];

const OPTIONS_EN = ['No True Scotsman', 'Special Pleading', 'Circular Reasoning', 'Hasty Generalization'];
const OPTIONS_FR = ['Aucun vrai Écossais', 'Plaidoyer spécial', 'Raisonnement circulaire', 'Généralisation hâtive'];

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

function createQuestions(language: 'en' | 'fr'): Question[] {
  return SCENARIOS.map(([english, french], index) => {
    const isFrench = language === 'fr';
    const correctIndex = index % 4;
    return {
      id: 43801 + index,
      level: 2,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Aucun vrai Écossais' : 'No True Scotsman',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La définition est modifiée pour rejeter un contre-exemple qui dérange.'
        : 'The definition is changed to reject an inconvenient counterexample.',
      detailedExplanationBeginner: isFrench
        ? 'On change la règle pour sauver l affirmation.'
        : 'The rule is changed to protect the claim.',
      detailedExplanationIntermediate: isFrench
        ? 'Le sophisme apparaît quand on dit qu un vrai membre du groupe ne ferait jamais cela, puis on exclut tout contre-exemple en le declarant pas vraiment membre.'
        : 'The fallacy appears when someone says a true member of the group would never do that, then excludes every counterexample by declaring it not a real member.',
      detailedExplanationExpert: isFrench
        ? 'Aucun vrai Ecossais consiste à redéfinir une catégorie après coup pour protéger une généralisation contre un cas contraire. Le mouvement logique ne change pas les faits, il change la frontière d appartenance afin que la conclusion survive à la réfutation. C est proche du plaidoyer spécial, mais l accent est mis sur l exclusion ad hoc des contre-exemples par redéfinition du groupe.'
        : 'No True Scotsman consists in redefining a category after the fact to protect a generalization from a counterexample. The logic does not change the facts; it changes the membership boundary so the conclusion survives refutation. It is close to special pleading, but the emphasis is on excluding counterexamples by redrawing the group definition.',
      questionFormat: 'standard',
    };
  });
}

export const NO_TRUE_SCOTSMAN_EXPANSION_EN: Question[] = createQuestions('en');
export const NO_TRUE_SCOTSMAN_EXPANSION_FR: Question[] = createQuestions('fr');
