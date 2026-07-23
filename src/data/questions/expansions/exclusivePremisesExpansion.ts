import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Either the cafe is famous or it is failing, so if it is failing it cannot be famous.', "Soit le cafe est celebre soit il echoue, donc s'il echoue il ne peut pas etre celebre."],
  ['The team says either the file is lost or the server crashed, so both cannot be true at once.', "L'equipe dit que soit le fichier est perdu soit le serveur a plante, donc les deux ne peuvent pas etre vrais en meme temps."],
  ['Mia says the meeting was either too short or too long, so there is no middle option.', "Mia dit que la reunion etait soit trop courte soit trop longue, donc il n'y a pas d'option intermediaire."],
  ['Omar assumes a recipe is either perfect or ruined, with nothing in between.', "Omar suppose qu'une recette est soit parfaite soit ratee, sans rien entre les deux."],
  ['Priya says a day at work is either a win or a disaster, and no ordinary day exists.', "Priya dit qu'une journee de travail est soit une victoire soit un desastre, et qu'aucune journee ordinaire n'existe."],
  ['Ben thinks the movie was either genius or worthless, so mixed reactions make no sense.', "Ben pense que le film etait soit genial soit sans valeur, donc les reactions partagees n'ont aucun sens."],
  ['Ava says the bus was either early or late, so exactly on time is impossible.', "Ava dit que le bus etait soit en avance soit en retard, donc etre pile a l'heure est impossible."],
  ['Leo says a shirt is either expensive or cheap, so a fair price cannot exist.', "Leo dit qu'une chemise est soit chere soit bon marche, donc un prix juste ne peut pas exister."],
  ['Nina says the app is either useful or useless, so it cannot be somewhat helpful.', "Nina dit que l'application est soit utile soit inutile, donc elle ne peut pas etre un peu aidante."],
  ['Theo says the lunch was either delicious or disgusting, so average is not allowed.', "Theo dit que le dejeuner etait soit delicieux soit degoutant, donc la moyenne n'est pas permise."],
  ['Mina says a friend is either loyal or fake, so imperfect loyalty does not count.', "Mina dit qu'un ami est soit loyal soit faux, donc une loyauté imparfaite ne compte pas."],
  ['Kai says the city is either safe or unsafe, so neighborhood-by-neighborhood differences do not matter.', "Kai dit que la ville est soit sure soit dangereuse, donc les differences quartier par quartier ne comptent pas."],
  ['Aria says the game is either fair or rigged, so luck and skill cannot both matter.', "Aria dit que le jeu est soit juste soit truque, donc la chance et l'habileté ne peuvent pas compter ensemble."],
  ['Noah says the phone is either broken or perfect, so minor glitches prove total failure.', "Noah dit que le telephone est soit casse soit parfait, donc de petits bugs prouvent un echec total."],
  ['Zoe says the song is either catchy or boring, so neutral opinions are impossible.', "Zoe dit que la chanson est soit entrainante soit ennuyeuse, donc les avis neutres sont impossibles."],
  ['Milo says a teacher is either strict or lazy, so a balanced teacher cannot exist.', "Milo dit qu'un professeur est soit strict soit paresseux, donc un professeur equilibre ne peut pas exister."],
  ['Lina says the room is either clean or filthy, so tidy-but-lived-in is off the table.', "Lina dit que la piece est soit propre soit sale, donc le propre mais habite est exclu."],
  ['Eli says the project is either fast or slow, so reasonable pacing is not a real thing.', "Eli dit que le projet est soit rapide soit lent, donc un rythme raisonnable n'est pas reel."],
  ['Tara says the answer is either yes or no, so maybe should be ignored.', "Tara dit que la reponse est soit oui soit non, donc peut-etre doit etre ignore."],
  ['Owen says the movie is either a masterpiece or trash, so mixed strengths do not count.', "Owen dit que le film est soit un chef-d'oeuvre soit nul, donc les forces melangees ne comptent pas."],
  ['Rina says the meal was either healthy or unhealthy, so some healthy parts do not matter.', "Rina dit que le repas etait soit sain soit malsain, donc certains elements sains ne comptent pas."],
  ['Ben says the road is either open or closed, so partial closures cannot happen.', "Ben dit que la route est soit ouverte soit fermee, donc les fermetures partielles ne peuvent pas exister."],
  ['Mia says the plan is either brilliant or stupid, so ordinary plans are impossible.', "Mia dit que le plan est soit brillant soit stupide, donc les plans ordinaires sont impossibles."],
  ['Theo says the cake is either sweet or bland, so balanced flavor cannot exist.', "Theo dit que le gateau est soit sucre soit fade, donc un gout equilibre ne peut pas exister."],
  ['Ava says the policy is either kind or cruel, so mixed motives vanish.', "Ava dit que la politique est soit gentille soit cruelle, donc les motifs mixtes disparaissent."],
  ['Leo says the report is either honest or dishonest, so small errors make it a lie.', "Leo dit que le rapport est soit honnete soit malhonnete, donc de petites erreurs en font un mensonge."],
  ['Nina says the phone call was either good or bad, so it cannot be okay.', "Nina dit que l'appel etait soit bon soit mauvais, donc il ne peut pas etre correct."],
  ['Priya says the car is either safe or unsafe, so good brakes on a noisy car are meaningless.', "Priya dit que la voiture est soit sure soit dangereuse, donc de bons freins sur une voiture bruyante ne signifient rien."],
  ['Finn says the room is either hot or cold, so warm is not a real description.', "Finn dit que la piece est soit chaude soit froide, donc tiede n'est pas une vraie description."],
  ['Mina says the test is either easy or impossible, so hard-but-fair is not allowed.', "Mina dit que le test est soit facile soit impossible, donc difficile mais juste n'est pas permis."],
  ['Kai says the restaurant is either fancy or cheap, so mid-range spots do not exist.', "Kai dit que le restaurant est soit chic soit bon marche, donc les restaurants de milieu de gamme n'existent pas."],
  ['Aria says the app is either popular or dead, so modest adoption is ignored.', "Aria dit que l'application est soit populaire soit morte, donc une adoption modeste est ignoree."],
  ['Noah says the homework was either done or not done, so partially finished work is impossible.', "Noah dit que les devoirs etaient soit faits soit non faits, donc le travail partiellement termine est impossible."],
  ['Zoe says the jacket is either stylish or ugly, so plain is not a valid answer.', "Zoe dit que la veste est soit elegante soit laide, donc simple n'est pas une reponse valide."],
  ['Milo says the trip was either smooth or disastrous, so a few delays do not fit.', "Milo dit que le voyage etait soit fluide soit desastreux, donc quelques retards ne rentrent pas."],
  ['Lina says the email was either polite or rude, so direct but kind is excluded.', "Lina dit que l'e-mail etait soit poli soit grossier, donc direct mais aimable est exclu."],
  ['Eli says the dish was either spicy or plain, so flavorful without heat makes no sense.', "Eli dit que le plat etait soit epice soit nature, donc savoureux sans piquant n'a aucun sens."],
  ['Tara says the school is either excellent or awful, so average reviews are nonsense.', "Tara dit que l'ecole est soit excellente soit affreuse, donc les avis moyens sont absurdes."],
  ['Owen says the book is either gripping or dull, so thoughtful-but-slow is impossible.', "Owen dit que le livre est soit captivant soit ennuyeux, donc reflechi mais lent est impossible."],
  ['Rina says the message is either clear or confusing, so a little unclear is not real.', "Rina dit que le message est soit clair soit confus, donc un peu flou n'est pas reel."],
  ['Ben says the party was either fun or a failure, so merely decent is dismissed.', "Ben dit que la fete etait soit amusante soit un echec, donc simplement correcte est ecartée."],
  ['Mia says the presentation was either amazing or terrible, so competent does not count.', "Mia dit que la presentation etait soit incroyable soit terrible, donc competente ne compte pas."],
  ['Theo says the workout is either painless or impossible, so hard but manageable is rejected.', "Theo dit que l'entrainement est soit sans douleur soit impossible, donc difficile mais gerable est rejeté."],
  ['Ava says the meeting was either productive or wasted, so some useful discussion is ignored.', "Ava dit que la reunion etait soit productive soit perdue, donc une partie utile de la discussion est ignoree."],
  ['Leo says the phone is either new or old, so recently repaired does not fit.', "Leo dit que le telephone est soit neuf soit vieux, donc récemment reparé ne convient pas."],
  ['Nina says the joke is either hilarious or not funny, so a small smile proves nothing.', "Nina dit que la blague est soit hilarante soit pas drôle, donc un petit sourire ne prouve rien."],
  ['Priya says the route is either the shortest or wrong, so a better scenic route is excluded.', "Priya dit que l'itineraire est soit le plus court soit faux, donc un meilleur itineraire pittoresque est exclu."],
  ['Finn says the roommate is either quiet or unbearable, so normal annoyances are dismissed.', "Finn dit que le colocataire est soit calme soit insupportable, donc les petites irritations normales sont rejetees."],
  ['Mina says the app is either safe or dangerous, so a few warnings do not matter.', "Mina dit que l'application est soit sure soit dangereuse, donc quelques avertissements ne comptent pas."],
  ['Kai says the day was either great or terrible, so an ordinary good day does not count.', "Kai dit que la journee etait soit super soit terrible, donc une journee ordinaire mais bonne ne compte pas."],
];

const OPTIONS_EN = ['Exclusive Premises', 'False Dilemma', 'Appeal to Popularity', 'Equivocation'];
const OPTIONS_FR = ['Prémisses exclusives', 'Fausse dichotomie', 'Appel à la popularité', 'Équivoque'];

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
      id: 33701 + i,
      level: 6,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Prémisses exclusives' : 'Exclusive Premises',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Le raisonnement suppose à tort que toutes les possibilités pertinentes sont déjà épuisées."
        : 'The argument wrongly assumes all relevant possibilities have already been exhausted.',
      detailedExplanationBeginner: fr
        ? "On oublie qu'il peut rester une option intermédiaire."
        : 'It ignores that a middle option may still exist.',
      detailedExplanationIntermediate: fr
        ? "Les prémisses exclusives forcent un choix artificiel entre des options qui ne s'excluent pas vraiment."
        : 'Exclusive premises force a false choice between options that are not truly mutually exclusive.',
      detailedExplanationExpert: fr
        ? "Ce sophisme ressemble à une fausse dichotomie mais se concentre sur des prémisses qui excluent à tort des combinaisons possibles ou des nuances intermédiaires."
        : 'This fallacy resembles a false dilemma but focuses on premises that wrongly exclude possible combinations or middle ground.',
      questionFormat: 'standard',
    };
  });
}

export const EXCLUSIVE_PREMISES_EXPANSION_EN: Question[] = make();
export const EXCLUSIVE_PREMISES_EXPANSION_FR: Question[] = make(true);
