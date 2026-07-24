import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["After six rainy picnic days and one sunny one, Sam says the whole summer is perfect because of the single sunny picnic at the lake.", "Apres six jours de pique-nique pluvieux et un seul ensoleille, Sam dit que tout l'ete est parfait a cause du seul pique-nique ensoleille au lac."],
  ["Mia highlights the one positive review about the cake and ignores the ten bad ones.", "Mia met en avant le seul avis positif sur le gateau et ignore les dix mauvais."],
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
  ["Maya says the movie is perfect because she only talks about the ending she liked.", "Maya dit que le film est parfait parce qu'elle ne parle que de la fin qu'elle a aimee."],
  ["Theo praises the app because he ignores the crashes and only mentions the cute icon.", "Theo vante l'application parce qu'il ignore les plantages et ne mentionne que la jolie icone."],
  ["Nina says the school lunch is amazing because she only counts the one good day.", "Nina dit que la cantine scolaire est incroyable parce qu'elle ne compte que le seul bon jour."],
  ["Ben says the trip was a success because he only remembers the beach photo.", "Ben dit que le voyage etait une reussite parce qu'il ne se souvient que de la photo de plage."],
  ["Omar claims the car is reliable because he only mentions the week it started on the first try.", "Omar affirme que la voiture est fiable parce qu'il ne parle que de la semaine ou elle a demarre du premier coup."],
  ["Priya says the teacher is fair because she only brings up the one kind grading comment.", "Priya dit que le professeur est juste parce qu'elle ne mentionne que le seul commentaire de notation gentil."],
  ["Leo says the new phone is great because he only compares the camera and ignores the battery.", "Leo dit que le nouveau telephone est super parce qu'il ne compare que l'appareil photo et ignore la batterie."],
  ["Rina says the town festival was perfect because she only recalls the fireworks.", "Rina dit que la fete de la ville etait parfaite parce qu'elle ne se rappelle que des feux d'artifice."],
  ["Jules says the book was inspiring because he only quotes the one chapter he liked.", "Jules dit que le livre etait inspirant parce qu'il ne cite que le chapitre qu'il a aime."],
  ["Ava says the restaurant is wonderful because she only talks about the dessert and not the slow service.", "Ava dit que le restaurant est merveilleux parce qu'elle ne parle que du dessert et pas du service lent."]
  ,
  ["Milo says the school fundraiser was a huge success because he only mentions the one cake table that sold out.", "Milo dit que la collecte de fonds de l'ecole a ete un grand succes parce qu'il ne mentionne que la seule table de gateaux qui a tout vendu."],
  ["Nora says the neighborhood app is useful because she only talks about the one helpful alert and ignores the spam.", "Nora dit que l'application de quartier est utile parce qu'elle ne parle que de la seule alerte utile et ignore le spam."],
  ["Theo says the workshop was great because he only remembers the one fun exercise and forgets the boring parts.", "Theo dit que l'atelier etait genial parce qu'il ne se souvient que du seul exercice amusant et oublie les parties ennuyeuses."],
  ["Priya says the cafe is excellent because she only brings up the one perfect latte.", "Priya dit que le cafe est excellent parce qu'elle ne mentionne que le seul latte parfait."],
  ["Ben says the new phone is amazing because he only shows the one photo that came out sharp.", "Ben dit que le nouveau telephone est incroyable parce qu'il ne montre que la seule photo nette."],
  ["Maya says the team is unstoppable because she only points to the one game they won comfortably.", "Maya dit que l'equipe est imbattable parce qu'elle ne pointe que le seul match gagne facilement."],
  ["Omar says the road trip was smooth because he only remembers the one hour with no traffic.", "Omar dit que le road trip s'est bien passe parce qu'il ne se rappelle que de la seule heure sans circulation."],
  ["Zoe says the apartment is perfect because she only notices the sunny window and ignores the noisy street.", "Zoe dit que l'appartement est parfait parce qu'elle ne remarque que la fenetre ensoleillee et ignore la rue bruyante."],
  ["Kai says the gym membership is worth it because he only talks about the one day he felt energetic.", "Kai dit que l'abonnement a la salle vaut le coup parce qu'il ne parle que du seul jour ou il s'est senti en forme."],
  ["Rina says the meeting was productive because she only highlights the one decision everyone agreed on.", "Rina dit que la reunion a ete productive parce qu'elle ne met en avant que la seule decision sur laquelle tout le monde etait d'accord."],
  ["Lina says the movie is brilliant because she only quotes the one clever joke.", "Lina dit que le film est genial parce qu'elle ne cite que la seule blague intelligente."],
  ["Finn says the city is cheap because he only mentions the one street with discounted coffee.", "Finn dit que la ville est bon marche parce qu'il ne mentionne que la seule rue avec du cafe a prix reduit."],
  ["Nia says the class is easy because she only brings up the one quiz she aced.", "Nia dit que le cours est facile parce qu'elle ne mentionne que le seul controle qu'elle a reussi."],
  ["Aria says the concert was perfect because she only remembers the final song.", "Aria dit que le concert etait parfait parce qu'elle ne se rappelle que de la derniere chanson."],
  ["Eli says the software is clean because he only points to one tidy screen and ignores the bugs.", "Eli dit que le logiciel est propre parce qu'il ne pointe qu'un ecran bien range et ignore les bugs."],
  ["Mina says the vacation spot is peaceful because she only talks about the quiet morning before the crowds arrived.", "Mina dit que le lieu de vacances est paisible parce qu'elle ne parle que du matin calme avant l'arrivee des foules."],
  ["Owen says the bakery is the best because he only remembers the one perfect croissant.", "Owen dit que la boulangerie est la meilleure parce qu'il ne se souvient que du seul croissant parfait."],
  ["Jade says the class trip was safe because she only recalls the smooth bus ride.", "Jade dit que la sortie scolaire etait sure parce qu'elle ne se rappelle que du trajet en bus sans probleme."],
  ["Milo says the festival was amazing because he only mentions the fireworks and skips the long lines.", "Milo dit que le festival etait incroyable parce qu'il ne mentionne que les feux d'artifice et saute les longues files."],
  ["Priya says the restaurant is flawless because she only talks about the dessert and not the cold starter.", "Priya dit que le restaurant est sans faute parce qu'elle ne parle que du dessert et pas de l'entree froide."],
  ["Theo says the manager is brilliant because he only cites the one helpful email.", "Theo dit que le manager est brillant parce qu'il ne cite que le seul e-mail utile."],
  ["Nora says the school is outstanding because she only remembers the one friendly teacher.", "Nora dit que l'ecole est remarquable parce qu'elle ne se rappelle que du seul professeur sympathique."],
  ["Ben says the new policy is great because he only brings up the one easy step.", "Ben dit que la nouvelle regle est excellente parce qu'il ne mentionne que la seule etape facile."],
  ["Maya says the app is reliable because she only talks about the one afternoon it behaved.", "Maya dit que l'application est fiable parce qu'elle ne parle que de l'apres-midi ou elle a bien fonctionne."],
  ["Omar says the city is safe because he only counts the one calm block he walked through.", "Omar dit que la ville est sure parce qu'il ne compte que le seul bloc tranquille qu'il a traverse."],
  ["Lina says the teacher is fair because she only cites the one kind comment.", "Lina dit que le professeur est juste parce qu'elle ne cite que le seul commentaire gentil."],
  ["Finn says the phone company is amazing because he only remembers the one month without a bill problem.", "Finn dit que l'operateur telephonique est incroyable parce qu'il ne se souvient que du seul mois sans probleme de facture."],
  ["Rina says the workshop was worth it because she only focuses on the one useful tip.", "Rina dit que l'atelier en valait la peine parce qu'elle ne se concentre que sur le seul conseil utile."],
  ["Kai says the coffee shop is perfect because he only talks about the one barista who smiled.", "Kai dit que le cafe est parfait parce qu'il ne parle que du seul barista qui a souri."],
  ["Zoe says the neighborhood is friendly because she only remembers the one neighbor who helped carry groceries.", "Zoe dit que le quartier est sympathique parce qu'elle ne se rappelle que du seul voisin qui a aide a porter les courses."],
  ["Eli says the exam was reasonable because he only points to the one question he knew.", "Eli dit que l'examen etait raisonnable parce qu'il ne pointe que la seule question qu'il connaissait."],
  ["Mina says the concert series is outstanding because she only mentions the one performance she loved.", "Mina dit que la serie de concerts est remarquable parce qu'elle ne mentionne que la seule prestation qu'elle a adoree."],
  ["Noah says the store is affordable because he only remembers the one sale item.", "Noah dit que le magasin est abordable parce qu'il ne se souvient que du seul article en solde."],
  ["Aria says the training was excellent because she only talks about the one fun breakout activity.", "Aria dit que la formation etait excellente parce qu'elle ne parle que de la seule activite de groupe amusante."],
  ["Jade says the event was a success because she only cites the one person who complimented it.", "Jade dit que l'evenement a ete un succes parce qu'elle ne cite que la seule personne qui l'a complimente."],
  ["Owen says the neighborhood market is great because he only points to the one friendly cashier.", "Owen dit que le marche de quartier est genial parce qu'il ne pointe que le seul caissier amical."],
  ["Priya says the car is dependable because she only mentions the one morning it started right away.", "Priya dit que la voiture est fiable parce qu'elle ne mentionne que le seul matin ou elle a demarre tout de suite."],
  ["Theo says the school lunch is amazing because he only talks about the one day with pizza.", "Theo dit que la cantine scolaire est incroyable parce qu'il ne parle que du seul jour avec de la pizza."],
  ["Maya says the neighborhood festival is perfect because she only remembers the one great band.", "Maya dit que la fete de quartier est parfaite parce qu'elle ne se souvient que du seul groupe genial."],
  ["Ben says the product is a hit because he only asks the friend who liked the packaging.", "Ben dit que le produit est un succes parce qu'il ne demande qu'a l'ami qui a aime l'emballage."]
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
