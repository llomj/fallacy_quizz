import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Sam says you either work overtime every night or you do not care about the team, as if normal effort does not exist on weekdays.', "Sam dit que soit tu fais des heures sup tous les soirs soit tu ne te soucies pas de l'equipe, comme si l effort normal n existait pas en semaine."],
  ['Mia says the trip was either luxury or a disaster, with no normal vacation in between, so she ignores the decent parts from the beach days.', "Mia dit que le voyage etait soit luxueux soit desastreux, sans vacance normale entre les deux, alors elle ignore les parties correctes des jours a la plage."],
  ['Theo says the new phone is either perfect or useless because one feature bugs him.', "Theo dit que le nouveau telephone est soit parfait soit inutile parce qu'une seule fonction le derange."],
  ['Ava says you either agree with every rule at the office or you want chaos.', "Ava dit que soit tu es d'accord avec chaque regle au bureau soit tu veux le chaos."],
  ['Leo says the movie is either genius or trash, so mixed feelings are impossible.', "Leo dit que le film est soit genial soit nul, donc les sentiments melanges sont impossibles."],
  ['Nina says the cake is either homemade or fake, so store-bought does not count.', "Nina dit que le gateau est soit fait maison soit faux, donc acheté en magasin ne compte pas."],
  ['Priya says the roommate is either silent or unbearable, so ordinary annoyances disappear.', "Priya dit que le colocataire est soit silencieux soit insupportable, donc les irritations ordinaires disparaissent."],
  ['Ben says the city is either safe or doomed, leaving no room for neighborhood differences.', "Ben dit que la ville est soit sure soit condamnee, sans place pour les differences de quartier."],
  ['Rina says the lunch is either healthy or junk, so a decent balanced meal is ignored.', "Rina dit que le dejeuner est soit sain soit de la malbouffe, donc un repas equilibre correct est ignore."],
  ['Owen says the teacher is either strict or lazy, as if no steady middle ground exists.', "Owen dit que le professeur est soit strict soit paresseux, comme si aucun juste milieu stable n'existait."],
  ['Zoe says the app is either revolutionary or worthless, so useful but imperfect software is dismissed.', "Zoe dit que l'application est soit revolutionnaire soit sans valeur, donc les logiciels utiles mais imparfaits sont rejetes."],
  ['Kai says the policy is either kind or cruel, so tradeoffs are treated as weakness.', "Kai dit que la politique est soit gentille soit cruelle, donc les compromis sont traites comme une faiblesse."],
  ['Milo says the class is either easy or impossible, because one quiz was hard.', "Milo dit que le cours est soit facile soit impossible, parce qu'un seul quiz etait difficile."],
  ['Lina says the date was either amazing or awful, so ordinary good dates vanish.', "Lina dit que le rendez-vous etait soit incroyable soit affreux, donc les rendez-vous ordinaires mais bons disparaissent."],
  ['Eli says the commute is either by car or a waste of time, so biking is off the table.', "Eli dit que le trajet est soit en voiture soit une perte de temps, donc le velo est exclu."],
  ['Tara says the website is either modern or broken, so dated but functional design is ignored.', "Tara dit que le site est soit moderne soit casse, donc un design vieilli mais fonctionnel est ignore."],
  ['Noah says the manager is either a hero or a villain, so ordinary mixed leadership is excluded.', "Noah dit que le manager est soit un heros soit un mechant, donc un leadership mixte ordinaire est exclu."],
  ['Mina says a restaurant is either overpriced or cheap, so fair pricing never exists.', "Mina dit qu'un restaurant est soit trop cher soit bon marche, donc un prix juste n'existe jamais."],
  ['Ari says the game is either competitive or boring, so relaxed fun is impossible.', "Ari dit que le jeu est soit competitif soit ennuyeux, donc le plaisir detendu est impossible."],
  ['Hugo says the email is either rude or perfect, so concise and polite is not allowed.', "Hugo dit que l'e-mail est soit impoli soit parfait, donc concis et poli n'est pas permis."],
  ['Layla says the conversation is either deep or meaningless, so casual talk does not count.', "Layla dit que la conversation est soit profonde soit sans interet, donc la discussion legerement informelle ne compte pas."],
  ['Clara says the course is either inspiring or a failure, so merely solid teaching is erased.', "Clara dit que le cours est soit inspirant soit un echec, donc un enseignement simplement solide est efface."],
  ['Dylan says the movie is either for adults or for kids, so teens are treated as invisible.', "Dylan dit que le film est soit pour adultes soit pour enfants, donc les adolescents sont invisibles."],
  ['Sofia says the event was either packed or empty, so a comfortable crowd is impossible.', "Sofia dit que l'evenement etait soit bondé soit vide, donc une foule confortable est impossible."],
  ['Reed says the budget is either cutting everything or wasting money, so careful trimming disappears.', "Reed dit que le budget soit coupe tout soit gaspille l'argent, donc les coupes prudentes disparaissent."],
  ['Emma says the feedback is either praise or hate, so useful criticism is ignored.', "Emma dit que le retour est soit un compliment soit de la haine, donc la critique utile est ignoree."],
  ['Jasper says the route is either fastest or wrong, so scenic but sensible routes do not exist.', "Jasper dit que l'itineraire est soit le plus rapide soit faux, donc les routes pittoresques mais raisonnables n'existent pas."],
  ['Rory says the room is either messy or spotless, so lived-in tidy is not a thing.', "Rory dit que la piece est soit en désordre soit impeccable, donc le range mais habite n'est pas une chose."],
  ['Pia says the plan is either bold or cowardly, so cautious confidence is erased.', "Pia dit que le plan est soit audacieux soit lâche, donc la prudence confiante est effacee."],
  ['Grant says the team is either focused or distracted, so normal off-topic moments are treated as failure.', "Grant dit que l'equipe est soit concentree soit distraite, donc les moments hors sujet normaux sont traites comme un echec."],
  ['Juno says the book is either brilliant or unreadable, so average but enjoyable books vanish.', "Juno dit que le livre est soit brillant soit illisible, donc les livres moyens mais agreables disparaissent."],
  ['Kira says the bakery is either magical or bad, so ordinary good pastries do not count.', "Kira dit que la boulangerie est soit magique soit mauvaise, donc les patisseries ordinaires mais bonnes ne comptent pas."],
  ['Parker says the presentation is either a triumph or a flop, so competent work gets no credit.', "Parker dit que la presentation est soit un triomphe soit un flop, donc le travail competent n'obtient aucun credit."],
  ['Nora says the child is either polite or rude, so shy or tired behavior is missed.', "Nora dit que l'enfant est soit poli soit grossier, donc la timidite ou la fatigue passent a cote."],
  ['Evan says the laptop is either fast or dead, so decent middle-tier performance is dismissed.', "Evan dit que l'ordinateur portable est soit rapide soit mort, donc les performances correctes du milieu de gamme sont rejetees."],
  ['Stella says the party was either unforgettable or a waste, so pleasant but modest fun is overlooked.', "Stella dit que la fete etait soit inoubliable soit une perte de temps, donc le plaisir modeste mais agreable est ignore."],
  ['Ray says the dog is either trained or hopeless, so still-learning progress is ignored.', "Ray dit que le chien est soit dresse soit sans espoir, donc les progres encore en cours sont ignores."],
  ['Jade says the policy is either freedom or oppression, so routine rules become dramatic.', "Jade dit que la politique est soit la liberte soit l'oppression, donc les regles de routine deviennent dramatiques."],
  ['Drew says the workout is either easy or impossible, so challenging but manageable is excluded.', "Drew dit que l'entrainement est soit facile soit impossible, donc difficile mais gerable est exclu."],
  ['Lara says the class is either brilliant or hopeless, so average progress is invisible.', "Lara dit que la classe est soit brillante soit desesperee, donc les progres moyens sont invisibles."],
  ['Oli says the city is either exciting or boring, so calm but pleasant places are forgotten.', "Oli dit que la ville est soit excitante soit ennuyeuse, donc les endroits calmes mais agreables sont oublies."],
  ['Mia says the project is either on time or a disaster, so slightly late but solid work is ignored.', "Mia dit que le projet est soit a l'heure soit un desastre, donc le travail un peu en retard mais solide est ignore."],
  ['Felix says the speaker is either charismatic or useless, so quiet competence is overlooked.', "Felix dit que l'orateur est soit charismatique soit inutile, donc la competence discrète est ignoree."],
  ['Iris says the school lunch is either delicious or inedible, so ordinary meals lose their place.', "Iris dit que le repas scolaire est soit delicieux soit immangeable, donc les repas ordinaires perdent leur place."],
  ['Grant says the schedule is either perfect or broken, so workable compromises disappear.', "Grant dit que l'emploi du temps est soit parfait soit casse, donc les compromis utilisables disparaissent."],
  ['Juno says the phone plan is either amazing or a scam, so fair but basic options are excluded.', "Juno dit que le forfait telephone est soit incroyable soit une arnaque, donc les options justes mais basiques sont exclues."],
  ['Pia says the art is either meaningful or pointless, so simple decoration is not allowed.', "Pia dit que l'art est soit significatif soit inutile, donc la decoration simple n'est pas permise."],
  ['Mason says the road is either smooth or destroyed, so slightly bumpy roads are treated as failures.', "Mason dit que la route est soit lisse soit detruite, donc les routes un peu cahoteuses sont traitees comme des echecs."],
  ['Tessa says the meeting is either productive or wasted, so partially useful meetings are ignored.', "Tessa dit que la reunion est soit productive soit perdue, donc les reunions partiellement utiles sont ignorees."],
  ['Maya says the movie is either a masterpiece or trash, so a pretty good film cannot exist.', "Maya dit que le film est soit un chef-d'oeuvre soit nul, donc un film plutot bon ne peut pas exister."],
  ['Theo says the dinner is either homemade or fake, so restaurant food does not count as real food.', "Theo dit que le dîner est soit fait maison soit faux, donc la nourriture du restaurant ne compte pas comme de la vraie nourriture."],
  ['Ava says the class is either easy or impossible, so a challenging but manageable class is ignored.', "Ava dit que le cours est soit facile soit impossible, donc un cours difficile mais gerable est ignore."],
  ['Ben says the policy is either freedom or oppression, so routine rules disappear from the discussion.', "Ben dit que la politique est soit la liberte soit l'oppression, donc les regles de routine disparaissent du debat."],
  ['Nina says the city is either safe or doomed, so ordinary neighborhood differences are erased.', "Nina dit que la ville est soit sure soit condamnee, donc les differences ordinaires entre quartiers sont effacees."],
  ['Omar says the app is either brilliant or useless, so useful but imperfect software is ignored.', "Omar dit que l'application est soit brillante soit inutile, donc les logiciels utiles mais imparfaits sont ignores."],
  ['Priya says the lunch is either healthy or junk, so a balanced meal does not count.', "Priya dit que le dejeuner est soit sain soit de la malbouffe, donc un repas equilibre ne compte pas."],
  ['Leo says the teacher is either strict or lazy, so steady, normal teaching is excluded.', "Leo dit que le professeur est soit strict soit paresseux, donc un enseignement normal et regulier est exclu."],
  ['Rina says the team is either focused or distracted, so mild off-topic moments are treated like failure.', "Rina dit que l'equipe est soit concentree soit distraite, donc les petits ecarts de sujet sont traites comme un echec."],
  ['Jade says the relationship is either perfect or broken, so ordinary work-in-progress relationships vanish.', "Jade dit que la relation est soit parfaite soit brisee, donc les relations ordinaires en evolution disparaissent."]
];

const OPTIONS_EN = ['False Dilemma', 'Exclusive Premises', 'Bandwagon', 'Appeal to Popularity'];
const OPTIONS_FR = ['Fausse dichotomie', 'Prémisses exclusives', 'Effet de groupe', 'Appel à la popularité'];

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
      id: 34201 + i,
      level: 6,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Fausse dichotomie' : 'False Dilemma',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Le raisonnement présente seulement deux options alors qu'il en existe davantage."
        : 'The reasoning presents only two options when more than two exist.',
      detailedExplanationBeginner: fr
        ? "On force un choix entre deux extrêmes."
        : 'A choice is forced between two extremes.',
      detailedExplanationIntermediate: fr
        ? "La fausse dichotomie efface les nuances, les compromis et les autres possibilités raisonnables."
        : 'False dilemma erases nuance, compromise, and other reasonable options.',
      detailedExplanationExpert: fr
        ? "Ce sophisme réduit artificiellement l'espace des possibilités en imposant une exclusivité là où le contexte autorise plusieurs réponses compatibles."
        : 'This fallacy artificially narrows the possibility space by imposing exclusivity where the context allows multiple compatible answers.',
      questionFormat: 'standard',
    };
  });
}

export const FALSE_DILEMMA_EXPANSION_EN: Question[] = make();
export const FALSE_DILEMMA_EXPANSION_FR: Question[] = make(true);
