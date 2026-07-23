import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["After six rainy picnic days and one sunny one, Sam only mentions the sunny day to prove summer is perfect.", "Apres six jours de pique-nique pluvieux et un seul ensoleille, Sam ne parle que du jour ensoleille pour prouver que l'ete est parfait."],
  ["Mia highlights the one positive review and ignores the ten bad ones.", "Mia met en avant le seul avis positif et ignore les dix mauvais."],
  ["Omar says the neighborhood is safe because one street had no crime last year, leaving out the rest.", "Omar dit que le quartier est sur parce qu'une rue n'a pas connu de crime l'an dernier, en laissant de cote le reste."],
  ["Priya only cites the two successful sales and forgets the eight failed launches.", "Priya ne cite que les deux ventes reussies et oublie les huit lancements rates."],
  ["Ben remembers only the lucky lottery winner when talking about gambling.", "Ben ne se souvient que du gagnant chanceux a la loterie quand il parle de jeu."],
  ["The coach uses the one win to argue the team is on a perfect streak.", "L'entraineur utilise la seule victoire pour pretendre que l'equipe est sur une serie parfaite."],
  ["Nina talks about the one smooth flight and skips the three delayed ones.", "Nina parle du seul vol sans probleme et passe sous silence les trois vols retardes."],
  ["Leo says the app is reliable because he only mentions the one day it did not crash.", "Leo dit que l'application est fiable parce qu'il ne mentionne que le seul jour ou elle n'a pas plante."],
  ["A manager praises the single productive meeting and ignores the long unproductive week.", "Un manager loue la seule reunion productive et ignore la longue semaine improductive."],
  ["Tara says the restaurant is amazing because she only remembers the one good meal.", "Tara dit que le restaurant est incroyable parce qu'elle ne se souvient que du seul bon repas."],
  ["Jade points to the one student who liked the assignment and skips the many who struggled.", "Jade pointe vers l'eleve qui a aime le devoir et saute les nombreux eleves en difficulte."],
  ["Theo claims the town is thriving because one new shop opened downtown.", "Theo affirme que la ville prospere parce qu'une nouvelle boutique a ouvert au centre-ville."],
  ["Rina says the class is easy because she only highlights the one easy quiz.", "Rina dit que le cours est facile parce qu'elle ne met en avant que le seul controle facile."],
  ["Milo says every summer is dry because he remembers one dry July and not the wet ones.", "Milo dit que chaque ete est sec parce qu'il se souvient d'un seul juillet sec et pas des mois humides."],
  ["A student says the teacher is fair because one test felt fair and the rest are ignored.", "Un eleve dit que le professeur est juste parce qu'un test lui a paru juste et que le reste est ignore."],
  ["Noah says the product works because he only talks about the one case it helped.", "Noah dit que le produit fonctionne parce qu'il ne parle que du seul cas ou il a aide."],
  ["Zoe says the city is friendly because one hotel clerk was nice.", "Zoe dit que la ville est accueillante parce qu'un employe d'hotel a ete aimable."],
  ["Aria says the policy is popular because one team voted for it and the others are omitted.", "Aria dit que la politique est populaire parce qu'une equipe a vote pour elle et que les autres sont oubliees."],
  ["Finn says the gym is safe because he only counts the days nobody got hurt.", "Finn dit que la salle est sure parce qu'il ne compte que les jours ou personne ne s'est blesse."],
  ["Mina says the neighborhood is quiet because she notices the one calm block and ignores the noisy ones.", "Mina dit que le quartier est calme parce qu'elle remarque le seul bloc tranquille et ignore les bruyants."],
  ["Eli says the teacher must be brilliant because one lesson was good.", "Eli dit que le professeur doit etre brillant parce qu'un seul cours etait bon."],
  ["Owen says the movie is a masterpiece because the ending landed well, ignoring the rest.", "Owen dit que le film est un chef-d'oeuvre parce que la fin est reussie, en ignorant le reste."],
  ["Lina says the market is cheap because one stall had a discount.", "Lina dit que le marche est bon marche parce qu'un stand avait une reduction."],
  ["Kai says the work schedule is humane because one day had a short shift.", "Kai dit que l'emploi du temps est humain parce qu'un jour avait une petite plage horaire."],
  ["Maya says the car is dependable because one trip went smoothly.", "Maya dit que la voiture est fiable parce qu'un trajet s'est bien passe."],
  ["Priya says the school is excellent because one club did well this year.", "Priya dit que l'ecole est excellente parce qu'un club a bien reussi cette annee."],
  ["Ben says the city is affordable because he only remembers the one cheap coffee stand.", "Ben dit que la ville est abordable parce qu'il ne se souvient que du seul stand de cafe bon marche."],
  ["Nora says the speaker is trustworthy because one quote sounded wise.", "Nora dit que l'orateur est digne de confiance parce qu'une seule citation paraissait sage."],
  ["Mia says the vacation spot is peaceful because she only mentions the quiet morning.", "Mia dit que le lieu de vacances est paisible parce qu'elle ne mentionne que le matin calme."],
  ["Theo says the service is fast because one order arrived quickly.", "Theo dit que le service est rapide parce qu'une commande est arrivee vite."],
  ["Rina says the neighborhood school is great because one parent praised it.", "Rina dit que l'ecole du quartier est excellente parce qu'un parent l'a elogee."],
  ["Omar says the software is clean because one screen looked tidy.", "Omar dit que le logiciel est propre parce qu'un ecran avait l'air range."],
  ["Jade says the bakery is outstanding because one croissant was perfect.", "Jade dit que la boulangerie est remarquable parce qu'un croissant etait parfait."],
  ["Milo says the class is engaged because one discussion was lively.", "Milo dit que la classe est concernee parce qu'une discussion etait animee."],
  ["Tara says the city is safe because one subway line felt fine.", "Tara dit que la ville est sure parce qu'une ligne de metro s'est bien passee."],
  ["Leo says the family doctor is excellent because one appointment went well.", "Leo dit que le medecin de famille est excellent parce qu'un rendez-vous s'est bien passe."],
  ["Nia says the neighborhood is expensive because one house had a high rent.", "Nia dit que le quartier est cher parce qu'une maison avait un loyer eleve."],
  ["Ava says the event was a success because the keynote speaker was good.", "Ava dit que l'evenement a ete un succes parce que l'orateur principal etait bon."],
  ["Finn says the phone brand is great because one friend liked it.", "Finn dit que la marque de telephone est super parce qu'un ami l'a aimee."],
  ["Maya says the town council is competent because one project finished on time.", "Maya dit que le conseil municipal est competent parce qu'un projet a ete termine a temps."],
  ["Owen says the new policy works because the first month looked okay.", "Owen dit que la nouvelle politique fonctionne parce que le premier mois avait l'air correct."],
  ["Lina says the concert series is brilliant because one performance had a big crowd.", "Lina dit que la serie de concerts est brillante parce qu'une prestation a attire une grande foule."],
  ["Noah says the restaurant is amazing because the dessert was perfect and nothing else matters.", "Noah dit que le restaurant est incroyable parce que le dessert etait parfait et que le reste ne compte pas."],
  ["Priya says the city library is the best because one reading room was quiet.", "Priya dit que la bibliotheque municipale est la meilleure parce qu'une salle de lecture etait calme."],
  ["Aria says the team is unstoppable because one game had a big win.", "Aria dit que l'equipe est imbattable parce qu'un match s'est termine par une grosse victoire."],
  ["Theo says the new gadget is flawless because one feature works well.", "Theo dit que le nouveau gadget est sans defaut parce qu'une fonctionnalite marche bien."],
  ["Zoe says the apartment building is excellent because one neighbor was helpful.", "Zoe dit que l'immeuble est excellent parce qu'un voisin a ete serviable."],
  ["Eli says the class trip is safe because one bus ride was smooth.", "Eli dit que la sortie de classe est sure parce qu'un trajet en bus s'est bien passe."],
  ["Mina says the mayor is a genius because one speech sounded strong.", "Mina dit que le maire est un genie parce qu'un discours sonnait fort."],
  ["Kai says the store is honest because one cashier was polite.", "Kai dit que le magasin est honnete parce qu'un caissier etait poli."],
];

const EN = ['Cherry Picking', 'Biased Sample', 'Availability Heuristic', 'False Dilemma'];
const FR = ['Cherry-picking', 'Échantillon biaisé', 'Heuristique de disponibilité', 'Fausse dichotomie'];

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
      id: 32601 + i,
      level: 6,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Cherry-picking' : 'Cherry Picking',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? FR : EN, c),
      correct_option_index: c,
      explanation: fr
        ? "On ne garde que les exemples favorables et on cache le reste des donnees."
        : 'Only the favorable examples are kept while the rest of the data is hidden.',
      detailedExplanationBeginner: fr
        ? "Choisir seulement ce qui arrange fausse la conclusion."
        : 'Selecting only the convenient evidence distorts the conclusion.',
      detailedExplanationIntermediate: fr
        ? "Quand on retire les contre-exemples ou les donnees genantes, on donne une image trompeuse de la realite."
        : 'When you remove counterexamples or awkward data, you give a misleading picture of reality.',
      detailedExplanationExpert: fr
        ? "Le cherry-picking consiste a selectionner intentionnellement des donnees favorables tout en ignorant les elements contraires, ce qui produit une generalisation injustifiee."
        : 'Cherry-picking intentionally selects favorable data while ignoring opposing evidence, producing an unjustified generalization.',
      questionFormat: 'standard',
    };
  });
}

export const CHERRY_PICKING_EXPANSION_EN: Question[] = make();
export const CHERRY_PICKING_EXPANSION_FR: Question[] = make(true);
