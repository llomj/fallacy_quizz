import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["After hearing one complaint about the app, Sam ignores the stack of positive reviews and says it is clearly bad, because the complaint matches what he wanted to believe about updates on his phone.", "Apres avoir entendu une seule plainte sur l'application, Sam ignore la pile d'avis positifs et dit qu'elle est clairement mauvaise, parce que la plainte correspond a ce qu'il voulait croire sur les mises a jour de son telephone."],
  ["Mia already thinks homework is pointless, so she only notices stories that make homework look useless and skips the rest from teachers and parents.", "Mia pense deja que les devoirs sont inutiles, donc elle ne remarque que les histoires qui font passer les devoirs pour inutiles et saute le reste venant des professeurs et des parents."],
  ["Omar loves his new phone, so he keeps reading tests that praise it and skips the critical ones.", "Omar adore son nouveau telephone, donc il ne lit que les tests qui le louent et saute ceux qui le critiquent."],
  ["Priya believes the city is unsafe, and every siren she hears becomes proof in her mind.", "Priya croit que la ville est dangereuse, et chaque sirene qu'elle entend devient une preuve dans son esprit."],
  ["Ben thinks the cafe is amazing, so he remembers every nice barista and forgets the rude cashier.", "Ben pense que le cafe est genial, donc il se souvient de chaque barista aimable et oublie le caissier impoli."],
  ["Ava is sure the teacher is unfair, so she focuses on every strict rule and ignores the kind moments.", "Ava est sure que le professeur est injuste, donc elle se concentre sur chaque regle stricte et ignore les moments gentils."],
  ["Leo wants the school rumor to be true, so he only listens to classmates who repeat it.", "Leo veut que la rumeur de l'ecole soit vraie, donc il n'ecoute que les camarades qui la repettent."],
  ["Nina already likes the restaurant, so she only remembers the great meal and not the slow service.", "Nina aime deja le restaurant, donc elle ne retient que le bon repas et pas le service lent."],
  ["Theo believes exercise fixes everything, so he treats any positive story about workouts as confirmation.", "Theo croit que l'exercice resout tout, donc il traite toute histoire positive sur l'entrainement comme une confirmation."],
  ["Jade thinks the new policy is wrong, and every awkward example makes her more certain.", "Jade pense que la nouvelle politique est mauvaise, et chaque exemple maladroit la rend plus certaine."],
  ["Finn assumes cats are sneaky, so he notices only the cat moments that look sneaky.", "Finn suppose que les chats sont sournois, donc il remarque seulement les moments de chat qui paraissent sournois."],
  ["Mina thinks the weather app is useless, so she only remembers the days it got the forecast wrong.", "Mina pense que l'appli meteo est inutile, donc elle ne se souvient que des jours ou la prevision etait fausse."],
  ["Kai believes his favorite team is cursed, and every bad bounce feels like proof.", "Kai croit que son equipe preferee est maudite, et chaque mauvais rebond lui semble une preuve."],
  ["Rina already trusts the doctor, so she only reads the patient stories that praise the clinic.", "Rina fait deja confiance au medecin, donc elle ne lit que les temoignages qui louent la clinique."],
  ["Owen is convinced the road is dangerous, so he notices only the near misses.", "Owen est convaincu que la route est dangereuse, donc il remarque seulement les presque accidents."],
  ["Lina wants the movie to be brilliant, so she keeps talking about the clever twist and ignores the flat middle.", "Lina veut que le film soit brillant, donc elle parle sans cesse du retournement malin et ignore le milieu plat."],
  ["Maya already thinks remote work is best, so she bookmarks only the articles that agree.", "Maya pense deja que le travail a distance est le meilleur, donc elle ne met en favori que les articles qui sont d'accord."],
  ["Noah thinks the new game is unfair, so every loss becomes more evidence in his head.", "Noah pense que le nouveau jeu est injuste, donc chaque defaite devient encore plus de preuve dans sa tete."],
  ["Aria believes the school lunch is terrible, so she notices only the bad meals.", "Aria croit que le repas de l'ecole est terrible, donc elle ne remarque que les mauvais repas."],
  ["Zoe trusts the mechanic, so she remembers the one honest repair and forgets the rest.", "Zoe fait confiance au mecanicien, donc elle se souvient de la seule reparation honnete et oublie le reste."],
  ["Milo assumes people are rude, so a short reply is enough to confirm it.", "Milo suppose que les gens sont impolis, donc une reponse courte suffit a le confirmer."],
  ["Tara thinks the book club is boring, so she only notices the dull chapters.", "Tara pense que le club de lecture est ennuyeux, donc elle ne remarque que les chapitres ennuyeux."],
  ["Eli believes all politicians lie, so he spot-checks only the worst quotes.", "Eli croit que tous les politiciens mentent, donc il ne verifie que les pires citations."],
  ["Nora already likes the neighborhood, so every friendly wave feels like proof.", "Nora aime deja le quartier, donc chaque signe amical lui semble etre une preuve."],
  ["Ben thinks the new class is too hard, so he remembers only the confusing instructions.", "Ben pense que le nouveau cours est trop difficile, donc il retient seulement les consignes confuses."],
  ["Priya believes her favorite store is honest, so she ignores the bad receipt story.", "Priya croit que son magasin prefere est honnete, donc elle ignore l'histoire du mauvais ticket de caisse."],
  ["Kai decides the trip was a disaster, so any small delay becomes huge in memory.", "Kai decide que le voyage etait une catastrophe, donc chaque petit retard devient enorme dans sa memoire."],
  ["Ava thinks the app is fast, so she only pays attention when it loads quickly.", "Ava pense que l'application est rapide, donc elle ne fait attention que lorsqu'elle se charge vite."],
  ["Finn is sure the coach is brilliant, so he only sees the wins as coach magic.", "Finn est sur que l'entraineur est genial, donc il voit seulement les victoires comme de la magie de l'entraineur."],
  ["Mina thinks the park is unsafe, so every dog bark sounds like a warning.", "Mina pense que le parc n'est pas sur, donc chaque aboiement de chien ressemble a un avertissement."],
  ["Leo likes the bakery, so he only remembers the perfect croissant and not the dry bread.", "Leo aime la boulangerie, donc il ne se souvient que du croissant parfait et pas du pain sec."],
  ["Rina thinks the team is disciplined, so she notices only the tidy moments.", "Rina pense que l'equipe est disciplinee, donc elle remarque seulement les moments ordonnes."],
  ["Omar believes the gadget is fragile, so any scratch becomes proof.", "Omar croit que le gadget est fragile, donc toute rayure devient une preuve."],
  ["Jade is sure the class is careless, so she only recalls the missing homework.", "Jade est sure que la classe est negligente, donc elle ne se souvient que des devoirs manquants."],
  ["Theo thinks the city is friendly, so he stores only the good encounters.", "Theo pense que la ville est accueillante, donc il garde seulement les bonnes rencontres."],
  ["Lina believes the website is untrustworthy, so one typo seems suspicious.", "Lina croit que le site est peu fiable, donc une faute de frappe lui semble louche."],
  ["Noah wants the product to be worth it, so he only checks reviews that say it lasts.", "Noah veut que le produit en vaille la peine, donc il ne consulte que les avis qui disent qu'il dure."],
  ["Maya is convinced the manager is unfair, so any criticism sounds personal.", "Maya est convaincue que le manager est injuste, donc toute critique lui semble personnelle."],
  ["Zoe thinks the road trip was perfect, so she only tells the fun parts.", "Zoe pense que le road trip etait parfait, donc elle ne raconte que les parties amusantes."],
  ["Aria believes the new rules are bad, so she notices every awkward side effect.", "Aria croit que les nouvelles regles sont mauvaises, donc elle remarque chaque effet secondaire genant."],
  ["Ben trusts the podcast host, so he keeps the episodes that agree with him.", "Ben fait confiance au presentateur du podcast, donc il garde les episodes qui vont dans son sens."],
  ["Milo thinks the gym is amazing, so he only remembers the clean machines.", "Milo pense que la salle de sport est geniale, donc il ne se souvient que des machines propres."],
  ["Priya believes the school is failing, so every bad day feels like a trend.", "Priya croit que l'ecole echoue, donc chaque mauvaise journee lui semble etre une tendance."],
  ["Eli assumes the cafe is pricey, so he only notices the expensive specials.", "Eli suppose que le cafe est cher, donc il ne remarque que les menus speciaux couteux."],
  ["Nora thinks the documentary was biased, so she only highlights the scenes that fit.", "Nora pense que le documentaire etait biaise, donc elle ne souligne que les scenes qui collent a son idee."],
  ["Kai believes the car brand is perfect, so he treats every positive comment as decisive.", "Kai croit que la marque de voiture est parfaite, donc il traite chaque commentaire positif comme decisif."],
  ["Tara is sure the neighborhood is noisy, so she filters out the quiet evenings.", "Tara est sure que le quartier est bruyant, donc elle filtre les soirees calmes."],
  ["Owen thinks the class is fun, so every good joke becomes a reason to agree.", "Owen pense que la classe est amusante, donc chaque bonne blague devient une raison d'etre d'accord."],
  ["Mina believes the new recipe is terrible, so she zeroes in on every tiny mistake.", "Mina croit que la nouvelle recette est horrible, donc elle se concentre sur chaque petite erreur."],
  ["Jade thinks the presentation was boring, so she only remembers the parts that dragged.", "Jade pense que la presentation etait ennuyeuse, donc elle ne se souvient que des passages qui trainaient."],
  ["After hearing one compliment, Leo ignores the rest of the mixed feedback and keeps quoting only the praise.", "Apres avoir entendu un seul compliment, Leo ignore le reste des avis partages et ne cite que l'eloge."],
  ["Mia already thinks the new boss is tough, so she remembers every strict email and forgets the helpful ones.", "Mia pense deja que la nouvelle cheffe est dure, donc elle retient chaque email strict et oublie les messages utiles."],
  ["Ben likes the bike route, so he only notices the pleasant rides and skips the complaints.", "Ben aime l'itineraire a velo, donc il ne remarque que les trajets agreables et ignore les plaintes."],
  ["Ava expects the book to be brilliant, so she reads every clever line as proof and ignores the weak chapters.", "Ava s'attend a ce que le livre soit genial, donc elle lit chaque phrase ingenieuse comme une preuve et ignore les chapitres faibles."],
  ["Theo thinks the neighborhood is getting worse, so he notices every siren and ignores the peaceful nights.", "Theo pense que le quartier se degrade, donc il remarque chaque sirene et ignore les nuits tranquilles."],
  ["Nina already distrusts the app, so a single bug feels like confirmation while the working features disappear from view.", "Nina se mefie deja de l'application, donc un seul bug lui semble confirmer son idee pendant que les fonctions qui marchent passent inaperçues."],
  ["Omar believes his team is unlucky, so every close loss becomes a sign and every win is an exception.", "Omar croit que son equipe n'a pas de chance, donc chaque defaite serre de pres devient un signe et chaque victoire une exception."],
  ["Priya likes the teacher, so she only remembers the kind comments and forgets the harsher ones.", "Priya aime le professeur, donc elle ne retient que les remarques gentilles et oublie les plus severes."],
  ["Maya thinks the city is safe, so she filters out the headlines that say otherwise.", "Maya pense que la ville est sure, donc elle filtre les titres qui disent le contraire."],
  ["Jade is convinced the podcast is smart, so she only hears the episodes that sound thoughtful.", "Jade est convaincue que le podcast est intelligent, donc elle n'entend que les episodes qui paraissent reflechis."],
  ["Maya already thinks the app is useless, so she only opens bug reports that agree.", "Maya pense deja que l'application est inutile, donc elle n'ouvre que les rapports de bug qui vont dans son sens."],
  ["Theo believes the coach is brilliant, so he only notices articles that praise the coach.", "Theo croit que l'entraineur est genial, donc il ne remarque que les articles qui louent l'entraineur."],
  ["Nina wants the rumor to be true, so every vague detail feels like proof.", "Nina veut que la rumeur soit vraie, donc chaque detail vague lui semble etre une preuve."],
  ["Ben thinks the class is unfair, so he only remembers the strict parts.", "Ben pense que le cours est injuste, donc il ne se souvient que des parties strictes."],
  ["Omar already likes the restaurant, so he filters out the slow service stories.", "Omar aime deja le restaurant, donc il filtre les histoires de service lent."],
  ["Priya believes the city is unsafe, so she keeps reading only scary headlines.", "Priya croit que la ville n'est pas sure, donc elle continue a lire seulement les titres effrayants."],
  ["Leo wants his first opinion to survive, so he ignores every counterexample.", "Leo veut que sa premiere opinion survive, donc il ignore chaque contre-exemple."],
  ["Rina trusts the mechanic, so she only notices the successful repairs.", "Rina fait confiance au mecanicien, donc elle ne remarque que les reparations reussies."],
  ["Jules thinks the game is rigged, so every loss feels like confirmation.", "Jules pense que le jeu est truque, donc chaque defaite lui semble confirmer son idee."],
  ["Ava decides the teacher is kind, so she forgets the sharp feedback and keeps the warm comments.", "Ava decide que le professeur est gentil, donc elle oublie les retours tranchants et garde les commentaires chaleureux."],
  ["Mina already thinks the city council is useless, so she only reads complaints that agree.", "Mina pense deja que le conseil municipal est inutile, donc elle ne lit que les plaintes qui vont dans son sens."],
  ["Leo trusts the new phone, so he notices every positive review and skips the bad ones.", "Leo fait confiance au nouveau telephone, donc il remarque chaque avis positif et saute les mauvais."],
  ["Nora believes the cafe is wonderful, so she only remembers the friendly baristas.", "Nora croit que le cafe est merveilleux, donc elle ne retient que les baristas aimables."],
  ["Priya is sure the train line is awful, so every delay feels like more proof.", "Priya est sure que la ligne de train est horrible, donc chaque retard lui semble etre une preuve supplementaire."],
  ["Omar wants the rumor to be true, so he keeps asking the people who repeat it.", "Omar veut que la rumeur soit vraie, donc il continue a demander aux personnes qui la repettent."],
  ["Mia already thinks exercise is pointless, so she only notices stories about sore muscles.", "Mia pense deja que l'exercice est inutile, donc elle ne remarque que les histoires de muscles endoloris."],
  ["Ben assumes the school rule is stupid, so he remembers only the strict announcements.", "Ben suppose que la regle de l'ecole est stupide, donc il se souvient seulement des annonces strictes."],
  ["Ava thinks the game is amazing, so she tunes out every critical review.", "Ava pense que le jeu est incroyable, donc elle ignore chaque critique."],
  ["Theo believes the restaurant is bad, so he keeps pointing at the cold fries and ignores the rest.", "Theo croit que le restaurant est mauvais, donc il continue a montrer les frites froides et ignore le reste."],
  ["Nina is convinced the podcast is biased, so she only remembers the one comment that fits.", "Nina est convaincue que le podcast est biaise, donc elle ne retient que le seul commentaire qui correspond."],
  ["Eli thinks the new manager is harsh, so he notices every short reply and nothing else.", "Eli pense que le nouveau manager est dur, donc il remarque chaque reponse courte et rien d'autre."],
  ["Rina already likes the neighborhood, so she filters out the noisy-night stories.", "Rina aime deja le quartier, donc elle filtre les histoires de nuits bruyantes."],
  ["Kai believes the bakery is best, so he remembers the perfect croissant and forgets the stale bread.", "Kai croit que la boulangerie est la meilleure, donc il se souvient du croissant parfait et oublie le pain rassis."],
  ["Lina thinks the app is broken, so every glitch feels like proof while the smooth parts disappear.", "Lina pense que l'application est cassee, donc chaque bug lui semble etre une preuve tandis que les parties fluides disparaissent."],
  ["Maya wants the class to be easy, so she keeps the one good quiz and forgets the hard homework.", "Maya veut que le cours soit facile, donc elle garde le seul bon quiz et oublie les devoirs difficiles."],
  ["Jules believes the coach is a genius, so he only watches the winning clips.", "Jules croit que l'entraineur est un genie, donc il ne regarde que les extraits de victoire."],
  ["Tara is sure the city is unsafe, so she notices every siren and ignores the quiet nights.", "Tara est sure que la ville est dangereuse, donc elle remarque chaque sirene et ignore les nuits calmes."],
  ["Noah thinks the car brand is perfect, so he treats positive comments as decisive and ignores recalls.", "Noah pense que la marque de voiture est parfaite, donc il traite les commentaires positifs comme decisifs et ignore les rappels."],
  ["Zoe believes the documentary was biased, so she only talks about the scenes that support her view.", "Zoe croit que le documentaire etait biaise, donc elle ne parle que des scenes qui soutiennent son idee."],
  ["Owen thinks the lunch room is hostile, so one sharp joke becomes proof in his mind.", "Owen pense que la salle de repas est hostile, donc une seule blague piquante devient une preuve dans son esprit."],
  ["Priya likes the doctor, so she remembers the reassuring visit and forgets the rushed one.", "Priya aime le medecin, donc elle se souvient de la visite rassurante et oublie la visite precipitee."],
  ["Milo thinks the festival is great, so he only notices the fun photos.", "Milo pense que le festival est genial, donc il ne remarque que les photos amusantes."],
  ["Aria believes the new rule is wrong, so every awkward side effect feels like confirmation.", "Aria croit que la nouvelle regle est mauvaise, donc chaque effet secondaire genant lui semble confirmer son idee."],
  ["Ben trusts the mechanic, so he keeps the repair that went well and ignores the bad quote.", "Ben fait confiance au mecanicien, donc il garde la reparation qui s'est bien passee et ignore le mauvais devis."],
  ["Lena thinks the website is shady, so one typo feels suspicious to her.", "Lena pense que le site est louche, donc une faute de frappe lui semble suspecte."],
  ["Theo is convinced the trip was awful, so he tells only the bad stories.", "Theo est convaincu que le voyage etait horrible, donc il ne raconte que les mauvaises histoires."],
  ["Mina believes the gym is perfect, so she filters out every complaint from her friends.", "Mina croit que la salle de sport est parfaite, donc elle filtre chaque plainte de ses amis."],
  ["Rory thinks the teacher is unfair, so he only remembers the harsh quiz feedback.", "Rory pense que le professeur est injuste, donc il ne se souvient que des retours severes sur le quiz."],
  ["Ava wants the store to be honest, so she ignores the returned item story.", "Ava veut que le magasin soit honnete, donc elle ignore l'histoire de l'article retourne."],
  ["Sam thinks the new class is too hard, so he only pays attention to the confusing homework and ignores the easy parts.", "Sam pense que le nouveau cours est trop difficile, donc il fait seulement attention aux devoirs confus et ignore les parties faciles."],
];

const EN = ['Confirmation Bias', 'Disconfirmation Bias', 'Cherry Picking', 'Availability Heuristic'];
const FR = ['Biais de confirmation', 'Biais de disconfirmation', 'Selection des faits', 'Heuristique de disponibilite'];

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
      id: 32851 + i,
      level: 6,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Biais de confirmation' : 'Confirmation Bias',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? FR : EN, c),
      correct_option_index: c,
      explanation: fr
        ? "La personne cherche surtout ce qui confirme deja ce qu'elle pense et ignore le reste."
        : 'The person looks mainly for what already supports what they believe and ignores the rest.',
      detailedExplanationBeginner: fr
        ? "On ne voit que les infos qui confirment son idee."
        : 'You notice only the information that confirms your idea.',
      detailedExplanationIntermediate: fr
        ? "Ce biais pousse a chercher, lire et retenir surtout ce qui va dans le sens de sa conclusion preferree."
        : 'This bias pushes people to seek, read, and remember mainly what supports their preferred conclusion.',
      detailedExplanationExpert: fr
        ? "Le biais de confirmation renforce les croyances existantes en filtrant les preuves; il peut aussi faire paraitre une hypothese plus forte qu'elle ne l'est parce que les contradictions sont mises de cote."
        : 'Confirmation bias reinforces existing beliefs by filtering evidence; it can make a hypothesis seem stronger than it is because contradictions are pushed aside.',
      questionFormat: 'standard',
    };
  });
}

export const CONFIRMATION_BIAS_EXPANSION_EN: Question[] = make();
export const CONFIRMATION_BIAS_EXPANSION_FR: Question[] = make(true);
