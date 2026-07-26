import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says the vacation was perfect because she only remembers the sunsets and forgets the lost luggage.', 'Maya dit que les vacances etaient parfaites parce qu elle se souvient seulement des couchers de soleil et oublie la valise perdue.'],
  ['Leo looks back on last year’s apartment and calls it cozy, ignoring the mold and noisy pipes.', 'Leo repense à son appartement de l annee derniere et le dit douillet, en ignorant la moisissure et les tuyaux bruyants.'],
  ['Priya says the school field trip was amazing now that the bus ride is over, even though the day was mostly waiting around.', 'Priya dit que la sortie scolaire etait incroyable maintenant que le trajet en bus est termine, meme si la journee etait surtout faite d attente.'],
  ['Omar remembers his old job as relaxing, forgetting the constant overtime he complained about.', 'Omar se souvient de son ancien travail comme d un emploi relaxant, en oubliant les heures supplementaires constantes dont il se plaignait.'],
  ['Rina says the breakup was not that bad because she only recalls the cute text messages, not the arguments.', 'Rina dit que la rupture n etait pas si grave parce qu elle ne se rappelle que des messages mignons, pas des disputes.'],
  ['Ben thinks the camping trip was magical because the photos hide the mosquitoes and wet tent.', 'Ben pense que le camping etait magique parce que les photos cachent les moustiques et la tente mouillee.'],
  ['Zoe says middle school was easier than it was because she remembers the friends, not the awkward days.', 'Zoé dit que le college etait plus simple qu il ne l etait parce qu elle se rappelle des amis, pas des moments gênants.'],
  ['Kai says the old neighborhood was safer because he remembers the block parties and forgets the broken streetlights.', 'Kai dit que l ancien quartier etait plus sur parce qu il se souvient des fetes de quartier et oublie les lampadaires casses.'],
  ['Nora says the first car was a gem because she remembers the freedom and not the constant repairs.', 'Nora dit que la premiere voiture etait une perle parce qu elle se souvient de la liberte et pas des reparations constantes.'],
  ['Eli thinks the family road trip was a success because the worst traffic jam is hazy in his memory.', 'Eli pense que le voyage en famille a ete une reussite parce que le pire bouchon est flou dans sa memoire.'],
  ['Lina says the old school cafeteria was better because she only remembers the fun lunch table jokes.', 'Lina dit que l ancienne cantine etait meilleure parce qu elle ne se souvient que des blagues drôles à table.'],
  ['Grant says the summer job was great because the boring shifts have faded from memory.', 'Grant dit que le travail d ete etait genial parce que les postes ennuyeux se sont estompes dans sa memoire.'],
  ['Tia says the house hunt was easy because she forgets the dozen rejected offers.', 'Tia dit que la recherche de maison etait facile parce qu elle oublie la douzaine d offres refusees.'],
  ['Noah says the concert was better in the past because he only recalls the finale, not the long wait outside.', 'Noah dit que le concert etait meilleur autrefois parce qu il ne se rappelle que du final, pas de la longue attente dehors.'],
  ['Mia says her old phone was amazing because she remembers the one time it worked perfectly.', 'Mia dit que son ancien telephone etait incroyable parce qu elle se rappelle seulement de la fois où il a parfaitement marche.'],
  ['Jules says the first year at college was wonderful because he forgets being homesick every weekend.', 'Jules dit que la premiere annee d universite etait merveilleuse parce qu il oublie avoir eu le mal du pays chaque week-end.'],
  ['Ava says the old team was more fun because she remembers the celebrations and not the endless planning meetings.', 'Ava dit que l ancienne equipe etait plus amusante parce qu elle se souvient des celebrations et non des reunions de planification interminables.'],
  ['Finn says the train commute used to be peaceful because he ignores the delays and cancellations.', 'Finn dit que le trajet en train etait autrefois paisible parce qu il ignore les retards et les annulations.'],
  ['Mina says the winter break was relaxing because she forgets the chores and family drama.', 'Mina dit que les vacances d hiver etaient reposantes parce qu elle oublie les corvees et le drame familial.'],
  ['Theo says the old neighborhood diner tasted better because he remembers the pie and not the sticky booths.', 'Theo dit que l ancien diner du quartier avait meilleur gout parce qu il se souvient de la tarte et pas des banquettes collantes.'],
  ['Juno says her old laptop was faster because she forgets how often it crashed.', 'Juno dit que son ancien ordinateur etait plus rapide parce qu elle oublie a quelle frequence il plantait.'],
  ['Iris says the office before the move was calmer because she remembers the quiet mornings and not the broken heater.', 'Iris dit que le bureau avant le demenagement etait plus calme parce qu elle se souvient des matinees silencieuses et pas du chauffage en panne.'],
  ['Cole says the old game was more exciting because he forgets the loading screens.', 'Cole dit que l ancien jeu etait plus excitant parce qu il oublie les ecrans de chargement.'],
  ['Riley says the family vacation house was perfect because he remembers the beach and forgets the ants.', 'Riley dit que la maison de vacances familiale etait parfaite parce qu il se souvient de la plage et oublie les fourmis.'],
  ['Pia says the old class was friendlier because she only recalls the nice teacher and not the pop quizzes.', 'Pia dit que l ancienne classe etait plus sympa parce qu elle ne se rappelle que du professeur gentil et pas des quiz surprises.'],
  ['Hugo says the old neighborhood store was warmer because he remembers the smiles and not the long checkout line.', 'Hugo dit que l ancien magasin du quartier etait plus chaleureux parce qu il se souvient des sourires et pas de la longue file.'],
  ['Sam says the old summer was the best because he forgets the heatwave and mosquito bites.', 'Sam dit que l ancien ete etait le meilleur parce qu il oublie la canicule et les piqures de moustiques.'],
  ['Jade says her first apartment was adorable because she remembers decorating it and not the broken stove.', 'Jade dit que son premier appartement etait adorable parce qu elle se souvient de la decoration et pas de la cuisiniere casse.'],
  ['Owen says the trip to grandma’s was better years ago because he only recalls the pie and not the cramped car ride.', 'Owen dit que les visites chez grand-mere etaient meilleures autrefois parce qu il ne se rappelle que de la tarte et pas du trajet en voiture serre.'],
  ['Lea says the old workplace was simpler because she forgets the chaotic launch week.', 'Léa dit que l ancien lieu de travail etait plus simple parce qu elle oublie la semaine de lancement chaotique.'],
  ['Maya says the birthday party was flawless because she remembers the cake, not the speaker malfunction.', 'Maya dit que la fete d anniversaire etait sans faute parce qu elle se souvient du gateau, pas de la panne de haut-parleur.'],
  ['Ben says the road trip was a dream because he forgets the arguments over playlists.', 'Ben dit que le voyage en voiture etait un reve parce qu il oublie les disputes sur les playlists.'],
  ['Ava says the old subscription service was worth it because she remembers the bonus feature and not the hidden fees.', 'Ava dit que l ancien abonnement valait le coup parce qu elle se souvient de la fonctionnalite bonus et pas des frais caches.'],
  ['Omar says the old grocery store was better because he remembers the friendly cashier and not the empty shelves.', 'Omar dit que l ancienne epicerie etait meilleure parce qu il se souvient de la caissiere gentille et pas des rayons vides.'],
  ['Nina says the first year of the club was the best because she forgets the awkward introductions.', 'Nina dit que la premiere annee du club etait la meilleure parce qu elle oublie les presentations gênantes.'],
  ['Eli says the old school bus was nicer because he remembers the seat near his friends.', 'Eli dit que l ancien bus scolaire etait plus sympa parce qu il se souvient de la place pres de ses amis.'],
  ['Lina says the old season of the show was brilliant because she forgets the filler episodes.', 'Lina dit que l ancienne saison de l emission etait brillante parce qu elle oublie les episodes de remplissage.'],
  ['Grant says the old software was easier because he remembers the shortcuts and not the crashes.', 'Grant dit que l ancien logiciel etait plus facile parce qu il se souvient des raccourcis et pas des plantages.'],
  ['Tia says the old classroom was inspiring because she recalls the art projects and not the broken projector.', 'Tia dit que l ancienne salle de classe etait inspirante parce qu elle se rappelle des projets d art et pas du projecteur en panne.'],
  ['Finn says the old gym was better because he remembers the music and not the broken lockers.', 'Finn dit que l ancienne salle de sport etait meilleure parce qu il se souvient de la musique et pas des casiers casses.'],
  ['Mina says the old office snacks were amazing because she remembers the cookies and forgets the stale chips.', 'Mina dit que les anciens snacks du bureau etaient geniaux parce qu elle se souvient des biscuits et oublie les chips rassises.'],
  ['Theo says the old commute was quicker because he forgets the winter detours.', 'Theo dit que l ancien trajet etait plus rapide parce qu il oublie les detours d hiver.'],
  ['Juno says the old vacation town was charming because she remembers the sunset view and not the overpriced food.', 'Juno dit que l ancienne ville de vacances etait charmante parce qu elle se souvient de la vue au coucher du soleil et pas de la nourriture hors de prix.'],
  ['Iris says the old phone plan was better because she remembers the unlimited texts and not the dead zones.', 'Iris dit que l ancien forfait telephone etait meilleur parce qu elle se souvient des SMS illimites et pas des zones sans reseau.'],
  ['Cole says the old class schedule was perfect because he forgets the 7 a.m. exams.', 'Cole dit que l ancien emploi du temps etait parfait parce qu il oublie les examens à 7 heures du matin.'],
  ['Riley says the old apartment had character because he remembers the sunlight and not the noisy neighbors.', 'Riley dit que l ancien appartement avait du caractere parce qu il se souvient de la lumiere du soleil et pas des voisins bruyants.'],
  ['Pia says the old summer camp was legendary because she forgets the homesickness.', 'Pia dit que l ancien camp d ete etait legendaire parce qu elle oublie le mal du pays.'],
  ['Hugo says the old laptop keyboard was pleasant because he remembers the typing feel and not the sticky keys.', 'Hugo dit que l ancien clavier de portable etait agreable parce qu il se souvient de la sensation de frappe et pas des touches collantes.'],
  ['Sam says the old neighborhood bakery was better because he only remembers the smell of fresh bread.', 'Sam dit que l ancienne boulangerie du quartier etait meilleure parce qu il ne se souvient que de l odeur du pain frais.'],
  ['Jade says the old family road trips were fun because she remembers the sing-alongs and forgets the back-seat fights.', 'Jade dit que les anciens voyages en voiture en famille etaient amusants parce qu elle se souvient des chants et oublie les disputes à l arriere.'],
  ['Maya says the old school days were simple because she forgets the stress of every exam week.', 'Maya dit que les anciens jours d ecole etaient simples parce qu elle oublie le stress de chaque semaine d examen.'],
  ["Nora says the old summer camp was amazing because she remembers the campfire and not the homesickness.", "Nora dit que l ancien camp d ete etait incroyable parce qu elle se souvient du feu de camp et pas du mal du pays."],
  ["Eli says the first apartment was perfect because he remembers decorating it and forgets the broken heater.", "Eli dit que le premier appartement etait parfait parce qu il se souvient de la decoration et oublie le chauffage en panne."],
  ["Lina says the road trip was a dream because she recalls the music and not the car arguments.", "Lina dit que le voyage en voiture etait un reve parce qu elle se rappelle de la musique et pas des disputes en voiture."],
  ["Grant says the old school cafeteria was cozy because he remembers the friends and not the overcooked pasta.", "Grant dit que l ancienne cantine etait douillette parce qu il se souvient des amis et pas des pates trop cuites."],
  ["Tia says her old phone was great because she remembers the photos and forgets the constant freezing.", "Tia dit que son ancien telephone etait genial parce qu elle se souvient des photos et oublie les blocages constants."],
  ["Noah says the neighborhood diner used to be magical because he remembers the pie and not the sticky tables.", "Noah dit que le diner du quartier etait magique parce qu il se souvient de la tarte et pas des tables collantes."],
  ["Mia says the family vacation house was wonderful because she remembers the beach and forgets the ant problem.", "Mia dit que la maison de vacances familiale etait merveilleuse parce qu elle se souvient de la plage et oublie le probleme des fourmis."],
  ["Ava says the old job was relaxing because she only remembers the friendly coworkers and not the overtime.", "Ava dit que l ancien travail etait reposant parce qu elle ne se souvient que des collegues sympas et pas des heures supplementaires."],
  ["Finn says the train commute was peaceful because he forgets the delays and crowded mornings.", "Finn dit que le trajet en train etait paisible parce qu il oublie les retards et les matinees bondées."],
  ["Mina says the winter break was perfect because she remembers the movies and not the family drama.", "Mina dit que les vacances d hiver etaient parfaites parce qu elle se souvient des films et pas du drame familial."],
  ["Theo says the old neighborhood was safer because he recalls the block parties and not the broken streetlights.", "Theo dit que l ancien quartier etait plus sur parce qu il se rappelle les fetes de quartier et pas les lampadaires casses."],
  ["Juno says college was easier back then because she forgets the stressful deadlines.", "Juno dit que l universite etait plus facile autrefois parce qu elle oublie les delais stressants."],
  ["Iris says the old office was calmer because she remembers the coffee breaks and not the broken heater.", "Iris dit que l ancien bureau etait plus calme parce qu elle se souvient des pauses cafe et pas du chauffage en panne."],
  ["Cole says the old video game was better because he remembers the boss fights and not the loading screens.", "Cole dit que l ancien jeu video etait meilleur parce qu il se souvient des combats de boss et pas des ecrans de chargement."],
  ["Riley says the old team was more fun because he remembers the celebrations and forgets the endless meetings.", "Riley dit que l ancienne equipe etait plus amusante parce qu il se souvient des celebrations et oublie les reunions interminables."],
  ["Pia says the first year at college was wonderful because she only recalls the friends and not the homesickness.", "Pia dit que la premiere annee a l universite etait merveilleuse parce qu elle ne se rappelle que des amis et pas du mal du pays."],
  ["Hugo says the old apartment had character because he remembers the sunlight and forgets the noisy pipes.", "Hugo dit que l ancien appartement avait du caractere parce qu il se souvient de la lumiere du soleil et oublie les tuyaux bruyants."],
  ["Sam says the old summer was the best because he remembers the beach and not the heatwave.", "Sam dit que l ancien ete etait le meilleur parce qu il se souvient de la plage et pas de la canicule."],
  ["Jade says the old bakery was better because she remembers the smell of fresh bread and not the long wait.", "Jade dit que l ancienne boulangerie etait meilleure parce qu elle se souvient de l odeur du pain frais et pas de la longue attente."],
  ["Owen says the club was more exciting years ago because he only remembers the parties and not the planning drama.", "Owen dit que le club etait plus excitant il y a quelques annees parce qu il ne se souvient que des fetes et pas du drame d organisation."],
  ["Lea says the first car was amazing because she remembers the freedom and not the constant repairs.", "Lea dit que la premiere voiture etait incroyable parce qu elle se souvient de la liberte et pas des reparations constantes."],
  ["Max says the old school bus was nicer because he remembers the seat by his friends and forgets the winter delays.", "Max dit que l ancien bus scolaire etait plus sympa parce qu il se souvient de la place pres de ses amis et oublie les retards d hiver."],
  ["Yara says the family road trips were fun because she remembers the singing and forgets the sibling fights.", "Yara dit que les voyages en voiture en famille etaient amusants parce qu elle se souvient des chansons et oublie les disputes entre freres et soeurs."],
  ["Dan says the old workplace was simple because he remembers the lunch breaks and not the launch chaos.", "Dan dit que l ancien lieu de travail etait simple parce qu il se souvient des pauses dejeuner et pas du chaos du lancement."],
  ["Rosa says the summer job was great because she remembers the coworkers and forgets the dull shifts.", "Rosa dit que le travail d ete etait genial parce qu elle se souvient des collegues et oublie les postes ennuyeux."],
  ["Alicia says the old class was friendlier because she remembers the kind teacher and forgets the pop quizzes.", "Alicia dit que l ancienne classe etait plus sympathique parce qu elle se souvient du professeur gentil et oublie les quiz surprises."],
  ["Owen says the old game night was perfect because he remembers the laughter and forgets the arguments over rules.", "Owen dit que l ancienne soiree jeux etait parfaite parce qu il se souvient des rires et oublie les disputes sur les regles."],
  ["Maya says the first apartment was adorable because she remembers the decorations and not the broken stove.", "Maya dit que le premier appartement etait adorable parce qu elle se souvient des decorations et pas de la cuisiniere casse."],
  ["Ben says the old road trip was a dream because he forgets the traffic and only remembers the music.", "Ben dit que l ancien voyage en voiture etait un reve parce qu il oublie le trafic et ne se souvient que de la musique."],
  ["Ava says the subscription service was worth it because she remembers the bonus feature and not the hidden fees.", "Ava dit que le service d abonnement valait le coup parce qu elle se souvient de la fonction bonus et pas des frais caches."],
  ["Omar says the old grocery store was better because he remembers the friendly cashier and forgets the empty shelves.", "Omar dit que l ancienne epicerie etait meilleure parce qu il se souvient de la caissiere gentille et oublie les rayons vides."],
  ["Nina says the club's first year was the best because she only remembers the parties and not the awkward introductions.", "Nina dit que la premiere annee du club etait la meilleure parce qu elle ne se souvient que des fetes et pas des presentations gênantes."],
  ["Eli says the school bus used to be nicer because he remembers the seat by his friend and forgets the long wait.", "Eli dit que le bus scolaire etait plus sympa parce qu il se souvient de la place pres de son ami et oublie la longue attente."],
  ["Lina says the old TV show was brilliant because she forgets the filler episodes and remembers the big reveal.", "Lina dit que l ancienne serie etait brillante parce qu elle oublie les episodes de remplissage et se rappelle la grande revelation."],
  ["Grant says the old software was easier because he remembers the shortcuts and not the crashes.", "Grant dit que l ancien logiciel etait plus facile parce qu il se souvient des raccourcis et pas des plantages."],
  ["Tia says the classroom used to be inspiring because she recalls the art projects and not the broken projector.", "Tia dit que l ancienne salle de classe etait inspirante parce qu elle se rappelle les projets d art et pas du projecteur en panne."],
  ["Finn says the old gym was better because he remembers the music and not the broken lockers.", "Finn dit que l ancienne salle de sport etait meilleure parce qu il se souvient de la musique et pas des casiers casses."],
  ["Mina says the office snacks used to be amazing because she remembers the cookies and forgets the stale chips.", "Mina dit que les snacks du bureau etaient geniaux parce qu elle se souvient des biscuits et oublie les chips rassises."],
  ["Theo says the old commute was quicker because he forgets the winter detours.", "Theo dit que l ancien trajet etait plus rapide parce qu il oublie les detours d hiver."],
  ["Juno says the vacation town was charming because she remembers the sunset view and not the overpriced food.", "Juno dit que la ville de vacances etait charmante parce qu elle se souvient de la vue au coucher du soleil et pas de la nourriture hors de prix."],
  ["Iris says the old phone plan was better because she remembers the unlimited texts and not the dead zones.", "Iris dit que l ancien forfait telephone etait meilleur parce qu elle se souvient des SMS illimites et pas des zones sans reseau."],
  ["Cole says the class schedule was perfect because he forgets the 7 a.m. exams.", "Cole dit que l ancien emploi du temps etait parfait parce qu il oublie les examens a 7 heures du matin."],
  ["Riley says the old apartment had character because he remembers the sunlight and not the noisy neighbors.", "Riley dit que l ancien appartement avait du caractere parce qu il se souvient de la lumiere du soleil et pas des voisins bruyants."],
  ["Pia says summer camp was legendary because she forgets the homesickness.", "Pia dit que le camp d ete etait legendaire parce qu elle oublie le mal du pays."],
  ["Hugo says the old laptop keyboard was pleasant because he remembers the typing feel and not the sticky keys.", "Hugo dit que l ancien clavier de portable etait agreable parce qu il se souvient de la sensation de frappe et pas des touches collantes."],
  ["Sam says the neighborhood bakery was better because he only remembers the smell of fresh bread.", "Sam dit que la boulangerie du quartier etait meilleure parce qu il ne se souvient que de l odeur du pain frais."],
  ["Jade says the family road trips were fun because she remembers the sing-alongs and forgets the back-seat fights.", "Jade dit que les voyages en voiture en famille etaient amusants parce qu elle se souvient des chants et oublie les disputes a l arriere."],
  ["Maya says school days were simple because she forgets the stress of every exam week.", "Maya dit que les jours d ecole etaient simples parce qu elle oublie le stress de chaque semaine d examen."],
  ["Nora says the old movie theater was charming because she remembers the popcorn and not the broken seats.", "Nora dit que l ancien cinema etait charmant parce qu elle se souvient du pop-corn et pas des sieges casses."],
];

const OPTIONS_EN = ['Rosy Retrospection', 'Hindsight Bias', 'Peak-End Rule', 'Availability Heuristic'];
const OPTIONS_FR = ['Rétrospection idyllique', 'Biais rétrospectif', 'Règle du pic-fin', 'Heuristique de disponibilité'];

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
    const correctIndex = index % 4;
    const isFrench = language === 'fr';
    return {
      id: 40201 + index,
      level: 5,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? 'Rétrospection idyllique' : 'Rosy Retrospection',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'Le souvenir devient plus rose que la réalité, parce qu on oublie les details penibles.'
        : 'Memory turns rosier than reality because the painful details fade away.',
      detailedExplanationBeginner: isFrench
        ? 'On se rappelle surtout le bon et on gomme le reste.'
        : 'People remember the good parts and smooth over the rest.',
      detailedExplanationIntermediate: isFrench
        ? 'La retrospection idyllique fait paraitre un evenement passe plus agreable qu il ne l etait vraiment, parce que les details negatives s effacent avec le temps.'
        : 'Rosy retrospection makes a past event seem better than it really was because the negative details fade with time.',
      detailedExplanationExpert: isFrench
        ? "Ce biais ne signifie pas que tout souvenir positif est faux; il montre que la mémoire reconstruit le passe et met souvent en avant les moments saillants, plaisants ou identitaires. Quand on evalue une ancienne situation, il faut reconstituer l ensemble des contraintes, pas seulement la version adoucie qui reste en tete."
        : 'This bias does not mean every positive memory is fake; it shows that memory reconstructs the past and often highlights the most pleasant, salient, or identity-affirming moments. When judging a past situation, you need the whole set of constraints, not just the softened version that remains.',
      questionFormat: 'standard',
    };
  });
}

export const ROSY_RETROSPECTION_EXPANSION_EN: Question[] = createQuestions('en');
export const ROSY_RETROSPECTION_EXPANSION_FR: Question[] = createQuestions('fr');
