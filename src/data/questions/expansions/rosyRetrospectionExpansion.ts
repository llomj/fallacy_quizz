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
