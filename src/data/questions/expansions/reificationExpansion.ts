import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says the economy is angry because prices keep rising, as if the economy were a person with moods.', 'Maya dit que l economie est en colere parce que les prix montent sans cesse, comme si l economie etait une personne avec des humeurs.'],
  ['Leo talks about "the will of the algorithm" as if a recommendation system had its own intentions.', 'Leo parle de « la volonte de l algorithme » comme si un systeme de recommandations avait ses propres intentions.'],
  ['Priya says the market wanted her to lose money, instead of saying the stock simply dropped.', 'Priya dit que le marche voulait qu elle perde de l argent, au lieu de dire simplement que l action a baisse.'],
  ['Omar says the calendar betrayed him when his meeting overlapped with lunch.', 'Omar dit que le calendrier l a trahi lorsque sa reunion a chevauche le déjeuner.'],
  ['Rina says the rules are a wall that refuses to listen, as if the rules could hear her.', 'Rina dit que les regles sont un mur qui refuse d ecouter, comme si les regles pouvaient l entendre.'],
  ['Ben says the app is being stubborn because it does not open fast enough.', 'Ben dit que l application est tetue parce qu elle ne s ouvre pas assez vite.'],
  ['Zoe says the deadline is hunting her down, instead of saying she is under time pressure.', 'Zoé dit que la date limite la chasse, au lieu de dire qu elle subit une pression de temps.'],
  ['Kai says the spreadsheet hates him because one formula keeps failing.', 'Kai dit que le tableur le deteste parce qu une formule echoue sans cesse.'],
  ['Nora says the problem is a beast that needs to be fed, as if the problem were living.', 'Nora dit que le probleme est une bete qu il faut nourrir, comme si le probleme etait vivant.'],
  ['Eli says the budget is a monster swallowing every plan.', 'Eli dit que le budget est un monstre qui avale tous les projets.'],
  ['Lina says the queue is a lazy line that refuses to move.', 'Lina dit que la file est une ligne paresseuse qui refuse d avancer.'],
  ['Grant says the phone battery is sabotaging his day.', 'Grant dit que la batterie du telephone sabote sa journée.'],
  ['Tia says the homework is a cruel thing trying to ruin her weekend.', 'Tia dit que le devoir est une chose cruelle qui essaie de ruiner son week-end.'],
  ['Noah says the weather is punishing him personally.', 'Noah dit que le temps le punit personnellement.'],
  ['Mia says the traffic is plotting against her commute.', 'Mia dit que la circulation complote contre son trajet.'],
  ['Jules says the printer is being dramatic.', 'Jules dit que l imprimante fait son drama.'],
  ['Ava says the coffee shop is a mood and not a place.', 'Ava dit que le café est une ambiance et non un lieu.'],
  ['Finn says the schedule is bullying him.', 'Finn dit que l emploi du temps le harcèle.'],
  ['Mina says the inbox is attacking her every morning.', 'Mina dit que la boîte de réception l attaque chaque matin.'],
  ['Theo says the app update has a grudge against him.', 'Théo dit que la mise à jour de l appli lui en veut.'],
  ['Juno says the meeting agenda is a trap.', 'Juno dit que l ordre du jour est un piège.'],
  ['Iris says the chapter is stubborn because it will not make sense on the first read.', 'Iris dit que le chapitre est têtu parce qu il ne veut pas être compris au premier passage.'],
  ['Cole says the report is hiding the truth from him.', 'Cole dit que le rapport lui cache la vérité.'],
  ['Riley says the city is moody because the train was late again.', 'Riley dit que la ville est lunatique parce que le train est encore en retard.'],
  ['Pia says the recipe is being mean because the dough is sticky.', 'Pia dit que la recette est méchante parce que la pâte est collante.'],
  ['Hugo says the timer is nervous and keeps rushing him.', 'Hugo dit que le minuteur est nerveux et le presse sans cesse.'],
  ['Sam says the form is rude because it keeps asking the same question.', 'Sam dit que le formulaire est impoli parce qu il pose toujours la même question.'],
  ['Jade says the assignment is a wall between her and the weekend.', 'Jade dit que le devoir est un mur entre elle et le week-end.'],
  ['Owen says the system is being passive-aggressive when it auto-refreshes.', 'Owen dit que le système fait de l agression passive quand il se rafraîchit tout seul.'],
  ['Lea says the phone is clingy because it keeps sending notifications.', 'Léa dit que le téléphone est collant parce qu il envoie sans cesse des notifications.'],
  ['Maya says the market is generous when her savings go up.', 'Maya dit que le marché est généreux quand ses économies montent.'],
  ['Ben says the quiz is out to get him because the last question was hard.', 'Ben dit que le quiz en a après lui parce que la dernière question était difficile.'],
  ['Ava says the laptop is tired after slowing down.', 'Ava dit que l ordinateur est fatigué après avoir ralenti.'],
  ['Omar says the deadline is a beast sleeping in the corner until Friday.', 'Omar dit que la date limite est une bête qui dort dans un coin jusqu à vendredi.'],
  ['Nina says the parking app is jealous because it charges fees.', 'Nina dit que l appli de stationnement est jalouse parce qu elle facture des frais.'],
  ['Eli says the lesson is cold and refuses to meet him halfway.', 'Eli dit que la leçon est froide et refuse de faire un pas vers lui.'],
  ['Lina says the calendar is hostile because her busy week stacked up.', 'Lina dit que le calendrier est hostile parce que sa semaine chargée s est accumulée.'],
  ['Grant says the desk lamp is helping him think.', 'Grant dit que la lampe de bureau l aide à penser.'],
  ['Tia says the exam is a giant that wants her to fail.', 'Tia dit que l examen est un géant qui veut qu elle échoue.'],
  ['Finn says the app is being a diva because it crashes under load.', 'Finn dit que l appli fait la diva parce qu elle plante sous la charge.'],
  ['Mina says the homework is heavier than it should be.', 'Mina dit que le devoir est plus lourd qu il ne devrait l être.'],
  ['Theo says the spreadsheet is lying when a total looks wrong.', 'Théo dit que le tableur ment quand un total semble faux.'],
  ['Juno says the library is a calm machine that helps her focus.', 'Juno dit que la bibliothèque est une machine calme qui l aide à se concentrer.'],
  ['Iris says the platform is on a mission to annoy her.', 'Iris dit que la plateforme a pour mission de l agacer.'],
  ['Cole says the weekend is a reward handed out by the universe.', 'Cole dit que le week-end est une récompense distribuée par l univers.'],
  ['Riley says the notebook is loyal because it never crashes.', 'Riley dit que le carnet est fidèle parce qu il ne plante jamais.'],
  ['Pia says the group chat is a tiny courtroom judging her slowly.', 'Pia dit que le groupe de discussion est un petit tribunal qui la juge lentement.'],
  ['Hugo says the traffic light is being unreasonable.', 'Hugo dit que le feu de circulation est déraisonnable.'],
  ['Sam says the training video is a gatekeeper keeping him out.', 'Sam dit que la vidéo de formation est un gardien qui l empêche d entrer.'],
  ['Jade says the website is a maze that wants her lost.', 'Jade dit que le site est un labyrinthe qui veut la perdre.'],
  ['Maya says the reminder is a little coach pushing her forward.', 'Maya dit que le rappel est un petit coach qui la pousse en avant.'],
  ['Ben says the task list is a mountain instead of a list.', 'Ben dit que la liste des tâches est une montagne et non une liste.'],
  ['Sophie says the budget is a monster eating every paycheck.', 'Sophie dit que le budget est un monstre qui mange chaque salaire.'],
  ['Liam says the schedule is a machine that never sleeps.', 'Liam dit que le planning est une machine qui ne dort jamais.'],
  ['Emma says the group chat is a courtroom judging her every minute.', 'Emma dit que le groupe de discussion est un tribunal qui la juge chaque minute.'],
  ['Diego says the office policy is a brick wall blocking all progress.', 'Diego dit que la politique du bureau est un mur de briques qui bloque tout progrès.'],
  ['Lily says the inbox is a hungry animal that needs feeding.', 'Lily dit que la boîte de réception est un animal affamé qu il faut nourrir.'],
  ['Hassan says the exam is a giant waiting at the door.', 'Hassan dit que l examen est un géant qui attend à la porte.'],
  ['Ruby says the spreadsheet is a liar because one cell looks wrong.', 'Ruby dit que le tableur ment parce qu une cellule semble fausse.'],
  ['Noah says the traffic jam is a stubborn wall on the road.', 'Noah dit que le bouchon est un mur têtu sur la route.'],
  ['Chloe says the app is a bossy little creature with demands.', 'Chloe dit que l application est une petite créature autoritaire avec des exigences.'],
  ['Yusuf says the deadline is a wolf chasing him across the week.', 'Yusuf dit que la date limite est un loup qui le poursuit toute la semaine.'],
  ['Maya says the timetable is a beast that never lets go.', 'Maya dit que l emploi du temps est une bête qui ne lâche jamais prise.'],
  ['Lucas says the printer is a grumpy old man when it jams.', 'Lucas dit que l imprimante est un vieil homme grincheux quand elle se bloque.'],
  ['Ari says the website is a maze that traps visitors.', 'Ari dit que le site est un labyrinthe qui piège les visiteurs.'],
  ['Mina says the math problem is a brick in her way.', 'Mina dit que le problème de maths est une brique sur son chemin.'],
  ['Owen says the phone battery is a traitor at lunch.', 'Owen dit que la batterie du téléphone est une traîtresse à midi.'],
  ['Zara says the rulebook is a living thing that refuses to move.', 'Zara dit que le règlement est un être vivant qui refuse de bouger.'],
  ['Ben says the calendar is a tyrant bossing him around.', 'Ben dit que le calendrier est un tyran qui lui donne des ordres.'],
  ['Nora says the lesson is a fog bank hiding the answer.', 'Nora dit que la leçon est un banc de brouillard qui cache la réponse.'],
  ['Eli says the data point is a tiny rebel refusing to fit.', 'Eli dit que le point de données est un petit rebelle qui refuse de rentrer dans le rang.'],
  ['Pia says the project is a mountain range instead of one task.', 'Pia dit que le projet est une chaîne de montagnes et non une seule tâche.'],
  ['Theo says the notification is a tap on the shoulder from nowhere.', 'Theo dit que la notification est une tape sur l épaule venue de nulle part.'],
  ['Sara says the queue is a sleepy snake that will not wake up.', 'Sara dit que la file est un serpent endormi qui ne veut pas se réveiller.'],
  ['Milo says the meeting is a vacuum sucking the energy out of him.', 'Milo dit que la réunion est un vide qui aspire son énergie.'],
  ['Iris says the form is a gatekeeper blocking her from finishing.', 'Iris dit que le formulaire est un gardien qui l empêche de terminer.'],
  ['Jude says the parking lot is a puzzle with bad intentions.', 'Jude dit que le parking est un puzzle avec de mauvaises intentions.'],
  ['Layla says the support ticket is a black hole swallowing time.', 'Layla dit que le ticket d assistance est un trou noir qui avale le temps.'],
  ['Finn says the assignment is a boulder sitting on his desk.', 'Finn dit que le devoir est un rocher posé sur son bureau.'],
  ['Hana says the calendar reminder is a tiny alarm clock bossing her around.', 'Hana dit que le rappel du calendrier est un petit réveil qui lui donne des ordres.'],
  ['Ravi says the policy is a cage around creativity.', 'Ravi dit que la politique est une cage autour de la créativité.'],
  ['Lena says the server is a sleepy giant when it slows down.', 'Lena dit que le serveur est un géant endormi quand il ralentit.'],
  ['Jon says the file folder is a maze hiding the right document.', 'Jon dit que le dossier est un labyrinthe qui cache le bon document.'],
  ['Mara says the question bank is a beast with too many heads.', 'Mara dit que la banque de questions est une bête à trop de têtes.'],
  ['Omar says the chart is a mirror that tells the truth by itself.', 'Omar dit que le graphique est un miroir qui dit la vérité tout seul.'],
  ['Clara says the app crash is a sabotage plot.', 'Clara dit que le plantage de l application est un complot de sabotage.'],
  ['Ezra says the group project is a tug-of-war rope.', 'Ezra dit que le travail de groupe est une corde de tir à la corde.'],
  ['Fiona says the lesson is a locked door keeping the idea out.', 'Fiona dit que la leçon est une porte verrouillée qui empêche l idée d entrer.'],
  ['Gabe says the parking meter is a hungry machine.', 'Gabe dit que l horodateur est une machine affamée.'],
  ['Helena says the exam review is a staircase, not a wall.', 'Helena dit que la révision d examen est un escalier, pas un mur.'],
  ['Ivo says the spreadsheet total is a verdict from the universe.', 'Ivo dit que le total du tableur est un verdict de l univers.'],
  ['Jenna says the reminder app is a coach with a whistle.', 'Jenna dit que l application de rappel est un coach avec un sifflet.'],
  ['Khalil says the commute is a dragon breathing fire at his schedule.', 'Khalil dit que le trajet est un dragon qui crache du feu sur son planning.'],
  ['Luna says the checklist is a ladder helping her climb out.', 'Luna dit que la liste de contrôle est une échelle qui l aide à grimper dehors.'],
  ['Mason says the feedback email is a hammer hitting his confidence.', 'Mason dit que le courriel de retour est un marteau qui frappe sa confiance.'],
  ['Nadia says the algorithm is a picky judge deciding her fate.', 'Nadia dit que l algorithme est un juge difficile qui décide de son sort.'],
  ['Oli says the homework pile is a cliff on his desk.', 'Oli dit que la pile de devoirs est une falaise sur son bureau.'],
  ['Parker says the support line is a tunnel with no light.', 'Parker dit que la ligne d assistance est un tunnel sans lumière.'],
  ['Quinn says the browser tabs are a swarm buzzing at her.', 'Quinn dit que les onglets du navigateur sont un essaim qui bourdonne autour d elle.'],
  ['Rosa says the sales target is a moving target with legs.', 'Rosa dit que l objectif de vente est une cible mouvante avec des jambes.'],
];

const OPTIONS_EN = ['Reification', 'Personification', 'Causal Oversimplification', 'False Dilemma'];
const OPTIONS_FR = ['Réification', 'Personnification', 'Simplification causale', 'Fausse dichotomie'];

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
      id: 39701 + index,
      level: 2,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? 'Réification' : 'Reification',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'On traite une idée, un système ou un chiffre abstrait comme une chose réelle ou vivante.'
        : 'An abstract idea, system, or number is treated like a real, concrete thing.',
      detailedExplanationBeginner: isFrench
        ? "Une idée n'est pas une chose qu'on peut toucher."
        : 'An idea is not a thing you can touch.',
      detailedExplanationIntermediate: isFrench
        ? 'La réification transforme quelque chose d abstrait en objet concret dans le langage, ce qui donne l impression qu une idée a une existence matérielle ou une volonté propre.'
        : 'Reification turns something abstract into a concrete object in language, making it seem like an idea has material existence or its own will.',
      detailedExplanationExpert: isFrench
        ? "Ce sophisme apparaît quand on oublie qu un concept est une construction utile pour décrire le monde, pas une entité autonome. Parler d un système, d une moyenne, d un marché ou d une règle comme d une chose vivante peut masquer les causes réelles, les relations entre éléments et les limites du modèle employé."
        : 'This fallacy appears when we forget that a concept is a useful construction for describing the world, not an autonomous entity. Talking about a system, an average, a market, or a rule as if it were a living thing can hide real causes, relationships, and the limits of the model being used.',
      questionFormat: 'standard',
    };
  });
}

export const REIFICATION_EXPANSION_EN: Question[] = createQuestions('en');
export const REIFICATION_EXPANSION_FR: Question[] = createQuestions('fr');
