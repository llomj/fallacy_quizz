import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Every unicorn in the story has a horn, so there must be at least one real unicorn somewhere.', "Chaque licorne du récit a une corne, donc il doit forcément exister au moins une vraie licorne quelque part."],
  ['All dragons in the game breathe fire, so fire-breathing dragons must exist outside the game.', "Tous les dragons du jeu crachent du feu, donc des dragons cracheurs de feu doivent exister hors du jeu."],
  ['Every perfect pizza is round, so a round pizza must be perfect.', "Chaque pizza parfaite est ronde, donc une pizza ronde doit etre parfaite."],
  ['All emergency phones are red, so a red phone is definitely an emergency phone.', "Tous les telephones d'urgence sont rouges, donc un telephone rouge est forcement un telephone d'urgence."],
  ['Every patient in the example has a fever, so fevered patients must exist in the waiting room.', "Chaque patient de l'exemple a de la fievre, donc des patients febriles doivent exister dans la salle d'attente."],
  ['All students in the puzzle have lockers, so lockers must exist for all students in real life.', "Tous les eleves de l'enigme ont des casiers, donc des casiers doivent exister pour tous les eleves dans la vraie vie."],
  ['Every golden ticket in the movie gets you in, so any golden ticket must mean admission.', "Chaque billet d'or du film donne l'acces, donc n'importe quel billet d'or doit signifier l'entree."],
  ['All talking animals in the cartoon are wise, so a wise animal must be talking.', "Tous les animaux parlants du dessin anime sont sages, donc un animal sage doit parler."],
  ['Every perfect sandwich has two slices, so two slices make a perfect sandwich.', "Chaque sandwich parfait a deux tranches, donc deux tranches font un sandwich parfait."],
  ['All emergency exits are green, so a green door is an emergency exit.', "Toutes les sorties de secours sont vertes, donc une porte verte est une sortie de secours."],
  ['Every winning team in the quiz had blue shirts, so blue shirts create winners.', "Chaque equipe gagnante du quiz portait des chemises bleues, donc les chemises bleues créent des gagnants."],
  ['All kings in the game wear crowns, so any crowned person must be a king.', "Tous les rois du jeu portent des couronnes, donc toute personne couronnee doit etre un roi."],
  ['Every concert ticket in the ad is expensive, so expensive tickets are concert tickets.', "Tous les billets de concert dans la pub sont chers, donc les billets chers sont des billets de concert."],
  ['All robots in the novel can sing, so singing robots must be real.', "Tous les robots du roman savent chanter, donc des robots chanteurs doivent etre reellement existants."],
  ['Every safe bridge in the riddle is long, so long bridges must be safe.', "Chaque pont sur dans l'enigme est long, donc les ponts longs doivent etre surs."],
  ['All lucky coins in the cartoon are silver, so silver coins must be lucky coins.', "Toutes les pieces chanceuses du dessin anime sont en argent, donc les pieces en argent doivent etre chanceuses."],
  ['Every fast train in the example is quiet, so quiet trains must be fast.', "Tous les trains rapides de l'exemple sont silencieux, donc les trains silencieux doivent etre rapides."],
  ['All healthy pets in the ad have shiny fur, so shiny fur proves a pet is healthy.', "Tous les animaux de compagnie en bonne sante de la pub ont un poil brillant, donc un poil brillant prouve qu'un animal est en bonne sante."],
  ['Every prime minister in the puzzle is tall, so any tall person is a prime minister.', "Chaque premier ministre de l'énigme est grand, donc toute personne grande est un premier ministre."],
  ['All quiet classrooms in the story have blue walls, so blue walls make a classroom quiet.', "Toutes les classes calmes du récit ont des murs bleus, donc des murs bleus rendent une classe calme."],
  ['Every perfect score on the sheet is a 100, so any 100 is a perfect score.', "Chaque score parfait sur la feuille est 100, donc tout 100 est un score parfait."],
  ['All heroic cats in the comic wear capes, so capes create heroic cats.', "Tous les chats héroïques de la bande dessinée portent des capes, donc les capes créent des chats héroïques."],
  ['Every safe password in the example is long, so long passwords are always safe.', "Chaque mot de passe sûr de l'exemple est long, donc les mots de passe longs sont toujours sûrs."],
  ['All smart watches in the review cost a lot, so expensive watches are smart watches.', "Toutes les montres connectées de l'avis coûtent cher, donc les montres chères sont des montres connectées."],
  ['Every gentle dog in the story has floppy ears, so floppy ears guarantee gentleness.', "Chaque chien doux du récit a des oreilles tombantes, donc les oreilles tombantes garantissent la douceur."],
  ['All famous authors in the clue drink tea, so tea drinkers must be famous authors.', "Tous les auteurs célèbres de l'indice boivent du thé, donc les buveurs de thé doivent être des auteurs célèbres."],
  ['Every secure door in the puzzle has a lock, so a lock proves a door is secure.', "Chaque porte sûre de l'énigme a une serrure, donc une serrure prouve qu'une porte est sûre."],
  ['All lucky days in the calendar are sunny, so sunny days must be lucky days.', "Tous les jours chanceux du calendrier sont ensoleillés, donc les jours ensoleillés doivent être chanceux."],
  ['Every clean shirt in the bag is folded, so folded shirts must be clean.', "Chaque chemise propre du sac est pliée, donc les chemises pliées doivent etre propres."],
  ['All smart kids in the note are quiet, so quiet kids must be smart.', "Tous les enfants intelligents de la note sont calmes, donc les enfants calmes doivent etre intelligents."],
  ['Every paid invoice in the story is stamped, so stamped invoices must be paid.', "Chaque facture payee du récit est tamponnee, donc les factures tamponnees doivent etre payees."],
  ['All friendly cats in the cartoon purr, so any purring cat must be friendly.', "Tous les chats amicaux du dessin anime ronronnent, donc tout chat qui ronronne doit etre amical."],
  ['Every correct answer in the workbook is circled, so a circled answer must be correct.', "Chaque bonne reponse du cahier est entouree, donc une reponse entouree doit etre correcte."],
  ['All brave firefighters in the poster wear helmets, so helmets create bravery.', "Tous les pompiers courageux de l'affiche portent des casques, donc les casques créent le courage."],
  ['Every tested battery in the sample is charged, so charged batteries must be tested.', "Chaque batterie testee de l'échantillon est chargee, donc les batteries chargees doivent etre testees."],
  ['All helpful neighbors in the example bring soup, so soup-bringers must be helpful neighbors.', "Tous les voisins serviables de l'exemple apportent de la soupe, donc les apporteurs de soupe doivent etre des voisins serviables."],
  ['Every safe bridge in the riddle has rails, so rails prove a bridge is safe.', "Chaque pont sur de l'énigme a des rampes, donc les rampes prouvent qu'un pont est sur."],
  ['All sunny vacations in the postcard are at the beach, so every beach trip is a sunny vacation.', "Toutes les vacances ensoleillees de la carte postale se passent a la plage, donc chaque voyage a la plage est des vacances ensoleillees."],
  ['Every neat desk in the office has a lamp, so lamps make desks neat.', "Chaque bureau range du bureau a une lampe, donc les lampes rendent les bureaux ranges."],
  ['All rare books in the library are old, so old books must be rare.', "Tous les livres rares de la bibliotheque sont anciens, donc les livres anciens doivent etre rares."],
  ['Every safe recipe in the notebook uses fresh ingredients, so fresh ingredients prove safety.', "Chaque recette sûre du carnet utilise des ingrédients frais, donc des ingrédients frais prouvent la sécurité."],
  ['All good jokes in the chat made someone laugh, so any laugh means the joke was good.', "Toutes les bonnes blagues du chat ont fait rire quelqu'un, donc tout rire signifie que la blague etait bonne."],
  ['Every winning lottery ticket in the fantasy story is blue, so blue tickets must win.', "Chaque billet gagnant de loterie dans l'histoire fantastique est bleu, donc les billets bleus doivent gagner."],
  ['All calm kids in the playground are reading, so readers are calm kids.', "Tous les enfants calmes de la cour lisent, donc les lecteurs sont des enfants calmes."],
  ['Every working flashlight in the drawer has new batteries, so new batteries guarantee a working flashlight.', "Chaque lampe de poche qui marche dans le tiroir a des piles neuves, donc des piles neuves garantissent une lampe qui marche."],
  ['All honest answers in the form are short, so short answers must be honest.', "Toutes les réponses honnêtes du formulaire sont courtes, donc les réponses courtes doivent être honnêtes."],
  ['Every successful launch in the example had clouds, so clouds make launches successful.', "Chaque lancement réussi de l'exemple avait des nuages, donc les nuages rendent les lancements réussis."],
  ['All happy dogs in the note have wagging tails, so wagging tails mean a dog is happy.', "Tous les chiens heureux de la note remuent la queue, donc une queue qui remue signifie qu'un chien est heureux."],
  ['Every accurate map in the drawer is folded, so folded maps are accurate.', "Chaque carte exacte du tiroir est pliee, donc les cartes pliees sont exactes."],
  ['All good teammates in the story text each other, so people who text are good teammates.', "Tous les bons coéquipiers du récit s'envoient des messages, donc les personnes qui envoient des messages sont de bons coéquipiers."],
  ["Maya says there must be a real unicorn because every unicorn in the story has a horn.", "Maya dit qu'il doit y avoir une vraie licorne parce que chaque licorne du récit a une corne."],
  ["Theo says a red emergency phone proves all red phones are for emergencies.", "Theo dit qu'un téléphone rouge d'urgence prouve que tous les téléphones rouges servent aux urgences."],
  ["Nina says a green door is definitely an emergency exit because all emergency exits are green.", "Nina dit qu'une porte verte est forcément une sortie de secours parce que toutes les sorties de secours sont vertes."],
  ["Ben says a tall person must be a prime minister because every prime minister in the puzzle is tall.", "Ben dit qu'une personne grande doit être un premier ministre parce que chaque premier ministre de l'énigme est grand."],
  ["Omar says a round pizza must be perfect because every perfect pizza is round.", "Omar dit qu'une pizza ronde doit être parfaite parce que chaque pizza parfaite est ronde."],
  ["Priya says a silver coin must be lucky because every lucky coin in the cartoon is silver.", "Priya dit qu'une pièce en argent doit être chanceuse parce que chaque pièce chanceuse du dessin animé est en argent."],
  ["Leo says any lock proves a door is secure because secure doors in the puzzle have locks.", "Leo dit que toute serrure prouve qu'une porte est sûre parce que les portes sûres de l'énigme ont des serrures."],
  ["Rina says a folded shirt must be clean because every clean shirt in the bag is folded.", "Rina dit qu'une chemise pliée doit être propre parce que chaque chemise propre du sac est pliée."],
  ["Jules says a quiet kid must be smart because all smart kids in the note are quiet.", "Jules dit qu'un enfant calme doit être intelligent parce que tous les enfants intelligents de la note sont calmes."],
  ["Ava says blue walls must make a classroom quiet because every quiet classroom in the story has blue walls.", "Ava dit que des murs bleus doivent rendre une classe calme parce que toutes les classes calmes du récit ont des murs bleus."]
];

const OPTIONS_EN = ['Existential Fallacy', 'False Dilemma', 'Equivocation', 'Hasty Generalization'];
const OPTIONS_FR = ['Sophisme existentiel', 'Fausse dichotomie', 'Équivoque', 'Généralisation hâtive'];

function rotate(a: string[], i: number) {
  const r = a.slice(1);
  r.splice(i, 0, a[0]);
  return r;
}

function sub(i: number) {
  return i < 17 ? SubLevel.BEGINNER : i < 34 ? SubLevel.INTERMEDIATE : SubLevel.EXPERT;
}

function make(fr = false): Question[] {
  return SCENARIOS.map((s, i) => {
    const c = i % 4;
    return {
      id: 33801 + i,
      level: 6,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Sophisme existentiel' : 'Existential Fallacy',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? "On conclut à l'existence d'au moins un objet à partir d'une affirmation qui ne parle que de tous les objets d'une classe."
        : 'It jumps from a statement about all members of a class to the claim that at least one such thing exists.',
      detailedExplanationBeginner: fr
        ? "Dire que tout A a une propriété ne prouve pas qu'il existe un A."
        : 'Saying every A has a property does not prove that any A exists.',
      detailedExplanationIntermediate: fr
        ? "Le sophisme existentiel apparaît quand on prend une affirmation universelle pour une preuve d'existence, alors qu'elle ne fait que décrire une structure logique."
        : 'The existential fallacy appears when a universal statement is treated as proof of existence, even though it only describes logical form.',
      detailedExplanationExpert: fr
        ? "En logique classique, l'énoncé universel n'implique pas l'existence de ses sujets; il faut une prémisse existentielle séparée pour passer de 'tous' à 'au moins un'."
        : 'In classical logic, a universal statement does not imply that its subject exists; a separate existential premise is needed to move from “all” to “at least one.”',
      questionFormat: 'standard',
    };
  });
}

export const EXISTENTIAL_FALLACY_EXPANSION_EN: Question[] = make();
export const EXISTENTIAL_FALLACY_EXPANSION_FR: Question[] = make(true);
