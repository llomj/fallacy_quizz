import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["Sam says because one extra drop of rain does not matter, flooding can never happen.", "Sam dit que parce qu'une goutte de pluie de plus ne compte pas, une inondation ne peut jamais arriver."],
  ["Mia says if a movie is not perfect, it must be worthless.", "Mia dit que si un film n'est pas parfait, il doit etre sans valeur."],
  ["Omar argues that if a restaurant is not empty, it is already too crowded.", "Omar soutient que si un restaurant n'est pas vide, il est deja trop rempli."],
  ["Priya says if homework is only a little late, it is the same as never doing it.", "Priya dit que si les devoirs sont un peu en retard, c'est pareil que de ne jamais les rendre."],
  ["Ben claims a small scratch makes a phone completely broken.", "Ben affirme qu'une petite rayure rend un telephone completement casse."],
  ["Ava says if one person in the class is loud, the whole class is chaotic.", "Ava dit que si une personne de la classe est bruyante, toute la classe est chaotique."],
  ["Leo says a tiny mistake means the whole project failed.", "Leo dit qu'une petite erreur signifie que tout le projet a echoue."],
  ["Nina says if a jacket is not warm enough for a snowstorm, it is useless in winter.", "Nina dit que si une veste n'est pas assez chaude pour une tempete de neige, elle est inutile en hiver."],
  ["Theo says if a meal is not gourmet, it is basically bad.", "Theo dit que si un repas n'est pas gastronomique, il est pratiquement mauvais."],
  ["Jade says if the line is not short, the shop must be terrible.", "Jade dit que si la file n'est pas courte, le magasin doit etre terrible."],
  ["Finn says if a plan is not flawless, it should be abandoned immediately.", "Finn dit que si un plan n'est pas sans faille, il faut l'abandonner immediatement."],
  ["Mina says if a test is a little hard, it is unfair.", "Mina dit que si un test est un peu difficile, il est injuste."],
  ["Kai says if a road is not perfectly smooth, it is dangerous.", "Kai dit que si une route n'est pas parfaitement lisse, elle est dangereuse."],
  ["Aria says if a budget is slightly over, it is completely ruined.", "Aria dit que si un budget depasse un peu, il est completement ruine."],
  ["Noah says if the coffee is not hot enough, it is undrinkable.", "Noah dit que si le cafe n'est pas assez chaud, il est imbuvable."],
  ["Zoe says a small delay means the whole trip is a disaster.", "Zoe dit qu'un petit retard signifie que tout le voyage est une catastrophe."],
  ["Milo says if a class is not easy, it is impossible.", "Milo dit que si un cours n'est pas facile, il est impossible."],
  ["Lina says if a park is not quiet all the time, it is noisy.", "Lina dit que si un parc n'est pas calme tout le temps, il est bruyant."],
  ["Eli says if a game is not thrilling every second, it is boring.", "Eli dit que si un jeu n'est pas palpitant chaque seconde, il est ennuyeux."],
  ["Tara says if a shirt is not comfortable in every situation, it is a bad shirt.", "Tara dit que si une chemise n'est pas confortable dans toutes les situations, c'est une mauvaise chemise."],
  ["Owen says if a neighborhood has one loud night, it is always loud.", "Owen dit que si un quartier a une seule nuit bruyante, il est toujours bruyant."],
  ["Rina says if a recipe is not perfect on the first try, it is a failure.", "Rina dit que si une recette n'est pas parfaite au premier essai, c'est un echec."],
  ["Ben says if a hotel is not luxurious, it is not worth staying in.", "Ben dit que si un hotel n'est pas luxueux, il ne vaut pas la peine d'y dormir."],
  ["Mia says if a phone battery drops a little, it is dying.", "Mia dit que si la batterie d'un telephone baisse un peu, elle est en train de mourir."],
  ["Theo says if a person is not instantly friendly, they are rude.", "Theo dit que si une personne n'est pas instantanement aimable, elle est impolie."],
  ["Ava says if a lesson has one confusing moment, the whole lesson is bad.", "Ava dit que si une lecon a un seul moment confus, toute la lecon est mauvaise."],
  ["Leo says if the parking lot is not empty, finding a spot is hopeless.", "Leo dit que si le parking n'est pas vide, trouver une place est sans espoir."],
  ["Nina says if a show is not funny in every scene, it is not funny at all.", "Nina dit que si une emission n'est pas drole dans chaque scene, elle n'est pas drole du tout."],
  ["Priya says if a school is not perfect, it is a bad school.", "Priya dit que si une ecole n'est pas parfaite, c'est une mauvaise ecole."],
  ["Kai says if a presentation is not smooth, nobody will listen.", "Kai dit que si une presentation n'est pas fluide, personne n'ecoutera."],
  ["Mina says if the weather is not ideal, the whole day is ruined.", "Mina dit que si le temps n'est pas ideal, toute la journee est ruinee."],
  ["Omar says if a chair is not perfect, it is unusable.", "Omar dit que si une chaise n'est pas parfaite, elle est inutilisable."],
  ["Aria says if one customer complains, the whole service must be bad.", "Aria dit que si un seul client se plaint, tout le service doit etre mauvais."],
  ["Finn says if a shortcut is not the fastest possible, it is pointless.", "Finn dit que si un raccourci n'est pas le plus rapide possible, il est inutile."],
  ["Jade says if a park has any litter, it is filthy.", "Jade dit que si un parc a un peu de dechets, il est sale."],
  ["Noah says if a classmate makes one mistake, they are a bad student.", "Noah dit que si un camarade fait une erreur, c'est un mauvais eleve."],
  ["Lina says if a story is not exciting from start to finish, it is worthless.", "Lina dit que si une histoire n'est pas passionnante du debut a la fin, elle ne vaut rien."],
  ["Eli says if a bike is not perfect on hills, it is bad everywhere.", "Eli dit que si un velo n'est pas parfait en cote, il est mauvais partout."],
  ["Tara says if the food is not restaurant quality, it should be rejected.", "Tara dit que si la nourriture n'est pas de qualite restaurant, il faut la rejeter."],
  ["Milo says if a meeting is slightly long, it was a waste.", "Milo dit que si une reunion dure un peu longtemps, c'etait une perte de temps."],
  ["Zoe says if a sweater is not warm enough in the coldest weather, it is useless.", "Zoe dit que si un pull n'est pas assez chaud par grand froid, il est inutile."],
  ["Ben says if a joke is not hilarious to everyone, it fails.", "Ben dit que si une blague ne fait pas rire tout le monde, elle echoue."],
  ["Rina says if a plan has one awkward step, the whole plan is bad.", "Rina dit que si un plan a une etape maladroite, tout le plan est mauvais."],
  ["Mia says if a neighborhood is not peaceful every hour, it is chaotic.", "Mia dit que si un quartier n'est pas paisible a toute heure, il est chaotique."],
  ["Kai says if a phone case is not indestructible, it is worthless.", "Kai dit que si une coque de telephone n'est pas indestructible, elle ne vaut rien."],
  ["Theo says if a class is not easy for beginners, it is too hard for everyone.", "Theo dit que si un cours n'est pas facile pour les debutants, il est trop difficile pour tout le monde."],
  ["Ava says if a restaurant has one bad dish, the whole menu is bad.", "Ava dit que si un restaurant a un seul mauvais plat, tout le menu est mauvais."],
  ["Owen says if a store is not cheap enough, it is expensive.", "Owen dit que si un magasin n'est pas assez bon marche, il est cher."],
  ["Nina says if a game is not perfect, it has no value.", "Nina dit que si un jeu n'est pas parfait, il n'a aucune valeur."],
  ["Priya says if a house is not ideal, it is a terrible house.", "Priya dit que si une maison n'est pas ideale, c'est une maison terrible."],
  ["Finn says if a week has one bad day, the week was bad.", "Finn dit que si une semaine a un mauvais jour, la semaine etait mauvaise."],
];

const EN = ['Continuum Fallacy', 'False Dichotomy', 'Hasty Generalization', 'All-or-Nothing Thinking'];
const FR = ['Sophisme du continuum', 'Fausse dichotomie', 'Généralisation hâtive', 'Pensée tout ou rien'];

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
      id: 32951 + i,
      level: 6,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Sophisme du continuum' : 'Continuum Fallacy',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? FR : EN, c),
      correct_option_index: c,
      explanation: fr
        ? "On traite une difference de degre comme si elle ne changeait jamais de nature."
        : 'It treats a difference of degree as if it could never matter in kind.',
      detailedExplanationBeginner: fr
        ? "Petit changement ne veut pas dire aucun changement."
        : 'A small change can still matter.',
      detailedExplanationIntermediate: fr
        ? "Le sophisme du continuum refuse de reconnaitre qu'un seuil ou une accumulation peuvent rendre une difference significative."
        : 'The continuum fallacy refuses to accept that a threshold or accumulation can make a difference significant.',
      detailedExplanationExpert: fr
        ? "Il confond variation continue et pertinence pratique; quand on pousse ce raisonnement trop loin, on efface des seuils utiles pour juger, regler ou agir."
        : 'It confuses continuous variation with practical relevance; pushed too far, it erases useful thresholds for judging, regulating, or acting.',
      questionFormat: 'standard',
    };
  });
}

export const CONTINUUM_FALLACY_EXPANSION_EN: Question[] = make();
export const CONTINUUM_FALLACY_EXPANSION_FR: Question[] = make(true);
