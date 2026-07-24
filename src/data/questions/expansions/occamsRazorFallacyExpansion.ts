import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says the missing keys must be in the couch because that is the simplest explanation, even though she also lent them to a friend.', 'Maya dit que les clés manquantes doivent être dans le canapé parce que c est l explication la plus simple, alors qu elle les a aussi prêtées à une amie.'],
  ['Leo says the app crash is probably just a coincidence because "one simple bug" sounds cleaner than a messy chain of causes.', 'Leo dit que le plantage de l application est sûrement juste une coïncidence parce qu "un simple bug" paraît plus propre qu une chaîne de causes compliquée.'],
  ['Priya says the burnt toast must mean the toaster is bad, ignoring the power flicker that happened at the same time.', 'Priya dit que le pain grillé brûlé veut dire que le grille-pain est défectueux, en ignorant la micro-coupure de courant survenue au même moment.'],
  ['Omar says the car won’t start because the battery is dead, even though the gas tank is empty and the dashboard was already warning about fuel.', 'Omar dit que la voiture ne démarre pas parce que la batterie est morte, alors que le réservoir est vide et que le tableau de bord signalait déjà le carburant.'],
  ['Rina says the neighborhood cats are getting bigger because people feed them more, but winter and a new shelter also changed the scene.', 'Rina dit que les chats du quartier grossissent parce que les gens les nourrissent davantage, mais l hiver et un nouvel abri ont aussi changé la situation.'],
  ['Ben says the meeting ran long because the chairs were uncomfortable, as if comfort alone explains everything.', 'Ben dit que la réunion a duré longtemps parce que les chaises étaient inconfortables, comme si le confort expliquait tout à lui seul.'],
  ['Zoe says the printer jam was caused by bad luck because "printers are complicated," skipping the obvious paper mismatch.', 'Zoé dit que le bourrage de l imprimante venait de la malchance parce que "les imprimantes sont compliquées", en sautant le mauvais format de papier évident.'],
  ['Kai says the class was quiet because the students were all focused, ignoring the fact that the power went out and the projector died.', 'Kai dit que la classe était calme parce que les élèves étaient tous concentrés, en ignorant le fait que le courant avait sauté et que le projecteur était éteint.'],
  ['Nora says the soup tasted bland because the recipe was too simple, even though the cook forgot salt.', 'Nora dit que la soupe était fade parce que la recette était trop simple, alors que la cuisinière avait juste oublié le sel.'],
  ['Eli says the phone screen cracked because it was cursed, which sounds neat until you notice it fell on tile.', 'Eli dit que l écran du téléphone s est fissuré parce qu il était maudit, ce qui est joli jusqu à ce qu on remarque qu il est tombé sur du carrelage.'],
  ['Lina says the garden failed because the plants were the wrong type, ignoring the drought and the broken sprinkler.', 'Lina dit que le jardin a échoué parce que les plantes étaient du mauvais type, en ignorant la sécheresse et le sprinkler cassé.'],
  ['Grant says the dog barked because it is an anxious breed, skipping the delivery person at the door.', 'Grant dit que le chien a aboyé parce que c est une race anxieuse, en oubliant le livreur à la porte.'],
  ['Tia says the traffic light outage must be a single wiring issue, though the road crew was also replacing the transformer.', 'Tia dit que la panne du feu de circulation doit venir d un seul problème de câblage, alors que les travaux remplaçaient aussi le transformateur.'],
  ['Noah says the cake sunk because the oven was "mean," instead of considering underbaking and a late baking powder date.', 'Noah dit que le gâteau est retombé parce que le four était "méchant", au lieu de penser à une cuisson insuffisante et à la date de péremption de la levure.'],
  ['Mia says the website slowed down because the server is old, even though a flood of users and a bad plugin were the real issues.', 'Mia dit que le site a ralenti parce que le serveur est vieux, alors qu une vague d utilisateurs et un mauvais plugin étaient les vrais problèmes.'],
  ['Jules says the bike squeaks because it is cheap, ignoring the loose bolt and dry chain.', 'Jules dit que le vélo grince parce qu il est bon marché, en ignorant le boulon desserré et la chaîne sèche.'],
  ['Ava says the class did poorly because the lesson was too hard, ignoring that everyone studied in the wrong chapter.', 'Ava dit que la classe a mal réussi parce que la leçon était trop difficile, en oubliant que tout le monde avait étudié le mauvais chapitre.'],
  ['Finn says the streetlight flicker means the neighborhood grid is failing, though a storm already hit the block.', 'Finn dit que le scintillement du lampadaire signifie que le réseau du quartier est en panne, alors qu une tempête avait déjà touché le bloc.'],
  ['Mina says the store had low sales because customers are fickle, ignoring the construction that blocked the front door.', 'Mina dit que le magasin avait peu de ventes parce que les clients sont capricieux, en ignorant les travaux qui bloquaient la porte d entrée.'],
  ['Theo says the alarm beeped because the system is fragile, skipping the low battery warning on the screen.', 'Theo dit que l alarme a bipé parce que le système est fragile, en sautant l avertissement de batterie faible à l écran.'],
  ['Juno says the fish died because the tank was cursed, not because the filter had been off for two days.', 'Juno dit que les poissons sont morts parce que l aquarium était maudit, pas parce que le filtre était éteint depuis deux jours.'],
  ['Iris says the new rule reduced complaints because it was elegant, even though staffing also changed.', 'Iris dit que la nouvelle règle a réduit les plaintes parce qu elle était élégante, alors que le personnel avait aussi changé.'],
  ['Cole says the slow internet is just "how the router is," ignoring the neighbor streaming in the next room.', 'Cole dit que l internet lent est juste "comme ça avec le routeur", en ignorant le voisin qui streamait dans la pièce à côté.'],
  ['Riley says the team lost because the captain was unlucky, overlooking the injury to the best player.', 'Riley dit que l équipe a perdu parce que le capitaine n avait pas de chance, en oubliant la blessure du meilleur joueur.'],
  ['Pia says the coffee tasted burnt because the beans are too dark, ignoring that the machine ran too hot.', 'Pia dit que le café avait un goût brûlé parce que les grains sont trop foncés, en ignorant que la machine tournait trop chaud.'],
  ['Hugo says the app notification failed because "phones are weird," instead of checking Do Not Disturb mode.', 'Hugo dit que la notification de l application a raté parce que "les téléphones sont bizarres", au lieu de vérifier le mode Ne pas déranger.'],
  ['Sam says the window rattles because the house is old, ignoring the storm wind and the loose latch.', 'Sam dit que la fenêtre claque parce que la maison est vieille, en ignorant le vent de la tempête et le loquet desserré.'],
  ['Jade says the meeting agenda was ignored because people are disrespectful, not because the agenda arrived ten minutes late.', 'Jade dit que l ordre du jour a été ignoré parce que les gens sont irrespectueux, et non parce qu il est arrivé dix minutes en retard.'],
  ['Owen says the pastry is soggy because the baker is careless, skipping the sealed container that trapped steam.', 'Owen dit que la pâtisserie est molle parce que le boulanger est négligent, en sautant le contenant fermé qui a retenu la vapeur.'],
  ['Lea says the bus arrived late because it always does, even though the route was detoured by roadwork.', 'Lea dit que le bus est arrivé en retard parce qu il est toujours en retard, alors que la ligne avait été déviée par des travaux.'],
  ['Maya says the dog got muddy because it is a messy dog, ignoring the puddle and the open gate.', 'Maya dit que le chien est couvert de boue parce que c est un chien sale, en ignorant la flaque et la porte ouverte.'],
  ['Ben says the quiz was unfair because the teacher is strict, instead of noticing that the review sheet omitted half the topics.', 'Ben dit que le quiz était injuste parce que l enseignante est sévère, au lieu de remarquer que la feuille de révision omettait la moitié des sujets.'],
  ['Ava says the lights dimmed because the building is haunted, ignoring the shared power strip overload.', 'Ava dit que les lumières se sont tamisées parce que le bâtiment est hanté, en ignorant la surcharge de la multiprise commune.'],
  ['Omar says the phone heats up because of the case color, not because the game app drains the battery.', 'Omar dit que le téléphone chauffe à cause de la couleur de la coque, et non parce que l application de jeu vide la batterie.'],
  ['Nina says the job interview went badly because she was nervous, forgetting the interviewer arrived irritated from another meeting.', 'Nina dit que l entretien d embauche s est mal passé parce qu elle était nerveuse, en oubliant que l intervieweur arrivait énervé d une autre réunion.'],
  ['Eli says the billboard is effective because it is huge, ignoring that the brand also bought prime placement.', 'Eli dit que le panneau publicitaire est efficace parce qu il est énorme, en ignorant que la marque a aussi acheté un emplacement de choix.'],
  ['Lina says the alarm went off because the system hates her, while the real issue was the smoke from burnt bread.', 'Lina dit que l alarme s est déclenchée parce que le système la déteste, alors que le vrai problème venait de la fumée du pain brûlé.'],
  ['Grant says the podcast blew up because it was simple, not because it was featured on the homepage.', 'Grant dit que le podcast a explosé parce qu il était simple, et non parce qu il a été mis en avant sur la page d accueil.'],
  ['Tia says the meeting solved itself because one suggestion was obvious, though the obvious suggestion came from a specialist.', 'Tia dit que la réunion s est résolue d elle-même parce qu une suggestion était évidente, alors que cette suggestion venait d un spécialiste.'],
  ['Noah says the shoes wore out because the brand is weak, ignoring that he walked twice as much this month.', 'Noah dit que les chaussures se sont usées parce que la marque est mauvaise, en ignorant qu il a marché deux fois plus ce mois-ci.'],
  ['Mia says the classroom was noisy because students are rude, missing the fire drill announcement.', 'Mia dit que la classe était bruyante parce que les élèves sont impolis, en manquant l annonce de l exercice incendie.'],
  ['Jules says the car smells weird because it is old, not because a grocery bag leaked in the trunk.', 'Jules dit que la voiture sent bizarre parce qu elle est vieille, et non parce qu un sac de courses a coulé dans le coffre.'],
  ['Ari says the project failed because the idea was too basic, ignoring the missing budget approval.', 'Ari dit que le projet a échoué parce que l idée était trop basique, en ignorant l absence d approbation budgétaire.'],
  ['Rita says the video looks amateur because the camera is cheap, not because the lighting was terrible.', 'Rita dit que la vidéo a l air amateur parce que la caméra est bon marché, et non parce que l éclairage était terrible.'],
  ['Tia says the bread rose badly because yeast is unreliable, forgetting the cold kitchen and expired packet.', 'Tia dit que le pain a mal levé parce que la levure est peu fiable, en oubliant la cuisine froide et le sachet périmé.'],
  ['Grant says the presentation bombed because slides are boring, instead of noticing the presenter read every line.', 'Grant dit que la présentation a raté parce que les diapositives sont ennuyeuses, au lieu de remarquer que le présentateur lisait chaque ligne.'],
  ['Hugo says the museum felt dull because museums are dull, ignoring the school group that had already been there for hours.', 'Hugo dit que le musée semblait ennuyeux parce que les musées sont ennuyeux, en ignorant le groupe scolaire déjà présent depuis des heures.'],
  ['Jules says the soup was too salty because the spoon was large, not because the cook doubled the seasoning.', 'Jules dit que la soupe était trop salée parce que la cuillère était grande, et non parce que le cuisinier a doublé l assaisonnement.'],
  ['Mia says the neighborhood app failed because tech is complicated, ignoring the outage from the city server maintenance.', 'Mia dit que l application du quartier a échoué parce que la tech est compliquée, en ignorant la panne due à la maintenance du serveur municipal.'],
  ['Sam says the picnic was ruined because blankets are bad, overlooking the surprise thunderstorm.', 'Sam dit que le pique-nique a été gâché parce que les couvertures sont nulles, en oubliant l orage surprise.'],
  ['Zoe says the new rule is useless because it did not fix everything instantly, ignoring the problem it actually targeted.', 'Zoé dit que la nouvelle règle est inutile parce qu elle n a pas tout corrigé instantanément, en ignorant le problème qu elle visait réellement.'],
];

const OPTIONS_EN = ['Occam\'s Razor Fallacy', 'Overcomplication', 'False Dilemma', 'Appeal to Authority'];
const OPTIONS_FR = ["Mauvais usage du rasoir d'Occam", 'Surcomplication', 'Faux dilemme', 'Appel à l autorité'];

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
    const isFrench = language === 'fr';
    const correctIndex = index % 4;
    return {
      id: 43601 + index,
      level: 3,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? "Mauvais usage du rasoir d'Occam" : "Occam's Razor Fallacy",
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel raisonnement est illustré ici ?' : 'Which reasoning error is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La simplicité d une explication ne la rend pas automatiquement vraie.'
        : 'A simple explanation is not automatically the true one.',
      detailedExplanationBeginner: isFrench
        ? 'Le plus simple n est pas toujours le plus juste.'
        : 'The simplest explanation is not always the right one.',
      detailedExplanationIntermediate: isFrench
        ? 'Le sophisme apparaît quand on choisit l explication la plus simple juste parce qu elle paraît plus élégante, sans verifier les autres causes possibles.'
        : 'The fallacy appears when someone picks the simplest explanation just because it feels elegant, without checking other possible causes.',
      detailedExplanationExpert: isFrench
        ? 'Le rasoir d Occam est un principe de recherche d hypothèses parcimonieuses, pas une preuve que l hypothèse la plus simple est vraie. Le mauvais usage survient quand on transforme "ne pas multiplier les entités sans nécessité" en "la réponse la plus simple est forcement la bonne". Dans les cas reels, il faut comparer la simplicité avec les preuves disponibles, la causalité possible et les explications concurrentes.'
        : 'Occam\'s razor is a principle for preferring parsimonious hypotheses, not a proof that the simplest hypothesis is true. The fallacy appears when "do not multiply entities beyond necessity" gets turned into "the simplest answer must be right." In real cases, simplicity has to be weighed against the evidence, plausible causation, and competing explanations.',
      questionFormat: 'standard',
    };
  });
}

export const OCCAMS_RAZOR_FALLACY_EXPANSION_EN: Question[] = createQuestions('en');
export const OCCAMS_RAZOR_FALLACY_EXPANSION_FR: Question[] = createQuestions('fr');
