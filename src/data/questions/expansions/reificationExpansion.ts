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
