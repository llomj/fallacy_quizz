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
  ['Ari says the bakery burned the bread because the oven hates her, ignoring the tray left on the top rack.', 'Ari dit que la boulangerie a brûlé le pain parce que le four la déteste, en ignorant la plaque laissée sur la grille du haut.'],
  ['Mina says the laptop froze because computers are cursed, skipping the spilled tea on the keyboard.', 'Mina dit que l ordinateur a figé parce que les ordinateurs sont maudits, en oubliant le thé renversé sur le clavier.'],
  ['Owen says the store was empty because customers are lazy, ignoring the road closure in front of it.', 'Owen dit que le magasin était vide parce que les clients sont paresseux, en ignorant la route fermée devant.'],
  ['Lina says the class failed because the lesson was strange, not because the exam covered unseen chapters.', 'Lina dit que la classe a échoué parce que la leçon était étrange, et non parce que l examen portait sur des chapitres non vus.'],
  ['Theo says the car battery died because the model is bad, ignoring that the headlights were left on overnight.', 'Theo dit que la batterie de la voiture est morte parce que le modèle est mauvais, en ignorant que les phares étaient restés allumés toute la nuit.'],
  ['Nora says the soup was bland because the chef is careless, not because she forgot to add salt at the table.', 'Nora dit que la soupe était fade parce que le chef est négligent, et non parce qu elle a oublié d ajouter le sel à table.'],
  ['Ben says the meeting was useless because meetings are pointless, ignoring that nobody had the slide deck.', 'Ben dit que la réunion était inutile parce que les réunions sont inutiles, en ignorant que personne n avait le diaporama.'],
  ['Mia says the dog barked because dogs are dramatic, overlooking the stranger walking past the gate.', 'Mia dit que le chien a aboyé parce que les chiens sont dramatiques, en oubliant l inconnu qui passait devant le portail.'],
  ['Grant says the website crashed because the color scheme is ugly, ignoring the traffic spike after the sale.', 'Grant dit que le site a planté parce que la palette de couleurs est moche, en ignorant l afflux de trafic après la vente.'],
  ['Jules says the toast was burned because the toaster is evil, not because he set it too high.', 'Jules dit que le toast était brûlé parce que le grille-pain est méchant, et non parce qu il l a réglé trop fort.'],
  ['Ava says the lights flickered because the house is haunted, overlooking the storm outside.', 'Ava dit que les lumières ont clignoté parce que la maison est hantée, en oubliant l orage dehors.'],
  ['Rina says the project failed because the idea was basic, ignoring the missing budget approval.', 'Rina dit que le projet a échoué parce que l idée était basique, en ignorant l absence d approbation du budget.'],
  ['Noah says the coffee was weak because the beans are bad, not because he used too much water.', 'Noah dit que le café était faible parce que les grains sont mauvais, et non parce qu il a mis trop d eau.'],
  ['Tia says the train was late because trains are lazy, ignoring the signal problem ahead.', 'Tia dit que le train était en retard parce que les trains sont paresseux, en ignorant le problème de signal devant.'],
  ['Kai says the bill was high because the restaurant is greedy, overlooking the extra dessert they ordered.', 'Kai dit que l addition était élevée parce que le restaurant est gourmand, en oubliant le dessert supplémentaire commandé.'],
  ['Lea says the presentation was awkward because the slides were plain, not because the speaker skipped rehearsal.', 'Lea dit que la présentation était maladroite parce que les diapositives étaient simples, et non parce que l oratrice a sauté la répétition.'],
  ['Hugo says the game was lost because the uniforms were unlucky, ignoring the red card in the first half.', 'Hugo dit que le match a été perdu parce que les uniformes portaient malheur, en ignorant le carton rouge en première mi-temps.'],
  ['Pia says the soup boiled over because the pot is cursed, skipping the high heat setting.', 'Pia dit que la soupe a débordé parce que la casserole est maudite, en oubliant le réglage de feu trop élevé.'],
  ['Eli says the class was noisy because the room is cursed, ignoring the surprise assembly announcement.', 'Eli dit que la classe était bruyante parce que la salle est maudite, en ignorant l annonce surprise de l assemblée.'],
  ['Sara says the app update broke things because updates are bad, not because the phone was nearly full.', 'Sara dit que la mise à jour a cassé des choses parce que les mises à jour sont mauvaises, et non parce que le téléphone était presque plein.'],
  ['Finn says the sandwich tasted strange because the wrapper is shiny, overlooking the sauce that spilled on it.', 'Finn dit que le sandwich avait un goût étrange parce que l emballage brille, en oubliant la sauce renversée dessus.'],
  ['Jade says the market was crowded because the sign is handwritten, ignoring the weekend sale.', 'Jade dit que le marché était bondé parce que l enseigne est écrite à la main, en ignorant la vente du week-end.'],
  ['Milo says the lecture was dull because the professor wore gray, not because the slides were unreadable.', 'Milo dit que le cours était ennuyeux parce que le professeur portait du gris, et non parce que les diapositives étaient illisibles.'],
  ['Zara says the bus smelled weird because it is old, overlooking the wet umbrella someone left inside.', 'Zara dit que le bus sentait bizarre parce qu il est vieux, en oubliant le parapluie mouillé laissé à l intérieur.'],
  ['Iris says the report is wrong because the title is too fancy, ignoring the missing data source.', 'Iris dit que le rapport est faux parce que le titre est trop chic, en ignorant la source de données manquante.'],
  ['Cole says the dog is tired because the leash is red, not because they went on a long walk.', 'Cole dit que le chien est fatigué parce que la laisse est rouge, et non parce qu ils ont fait une longue promenade.'],
  ['Ari says the museum felt cold because the art is serious, overlooking the broken heater.', 'Ari dit que le musée semblait froid parce que l art est sérieux, en oubliant le chauffage cassé.'],
  ['Rita says the coffee is strong because the cup is heavy, ignoring the extra scoop of grounds.', 'Rita dit que le café est fort parce que la tasse est lourde, en ignorant la cuillère supplémentaire de café moulu.'],
  ['Lina says the sandwich was stale because the wrapper shines, not because it sat out overnight.', 'Lina dit que le sandwich était rassis parce que l emballage brille, et non parce qu il est resté dehors toute la nuit.'],
  ['Omar says the rule is fair because it was printed on white paper, overlooking who it actually benefits.', 'Omar dit que la règle est juste parce qu elle a été imprimée sur du papier blanc, en oubliant qui elle avantage vraiment.'],
  ['Nina says the project will succeed because the marker is green, ignoring that the deadline is tomorrow.', 'Nina dit que le projet réussira parce que le marqueur est vert, en ignorant que la date limite est demain.'],
  ['Grant says the neighborhood is friendly because the doorbells are quiet, not because people actually help each other.', 'Grant dit que le quartier est sympathique parce que les sonnettes sont silencieuses, et non parce que les gens s aident vraiment.'],
  ['Tia says the website is trustworthy because the footer looks tidy, overlooking the broken links on every page.', 'Tia dit que le site web est digne de confiance parce que le pied de page est net, en oubliant les liens cassés sur chaque page.'],
  ['Noah says the theater is amazing because the seats are red, ignoring the projector that kept cutting out.', 'Noah dit que le théâtre est incroyable parce que les sièges sont rouges, en ignorant le projecteur qui coupait sans cesse.'],
  ['Mia says the recipe is better because the cookbook has glossy pages, not because the ingredients changed.', 'Mia dit que la recette est meilleure parce que le livre de cuisine a des pages brillantes, et non parce que les ingrédients ont changé.'],
  ['Jules says the road sign is accurate because the pole is straight, overlooking the bent sign face.', 'Jules dit que le panneau routier est exact parce que le poteau est droit, en oubliant la face du panneau tordue.'],
  ['Ava says the team practice worked because the water bottles were cold, ignoring the actual drills they repeated.', 'Ava dit que l entraînement de l équipe a marché parce que les bouteilles d eau étaient froides, en ignorant les exercices qu ils ont réellement répétés.'],
  ['Rita says the laptop is fast because the charger is long, not because it has more memory.', 'Rita dit que l ordinateur portable est rapide parce que le chargeur est long, et non parce qu il a plus de mémoire.'],
  ['Tia says the café is charming because the sugar packets are folded, overlooking the friendly staff.', 'Tia dit que le café est charmant parce que les sachets de sucre sont pliés, en oubliant le personnel sympathique.'],
  ['Grant says the assembly was inspiring because the microphone was wireless, ignoring the student speeches.', 'Grant dit que l assemblée était inspirante parce que le micro était sans fil, en ignorant les discours des élèves.'],
  ['Hugo says the soup recipe is authentic because the bowl has a pattern, not because it comes from the right region.', 'Hugo dit que la recette de soupe est authentique parce que le bol a un motif, et non parce qu elle vient de la bonne région.'],
  ['Jules says the quiz is fair because the answer sheet is blue, overlooking the balanced mix of questions.', 'Jules dit que le quiz est équitable parce que la feuille de réponses est bleue, en oubliant le mélange équilibré de questions.'],
  ['Mia says the office is efficient because the printer is near the door, not because workflows were improved.', 'Mia dit que le bureau est efficace parce que l imprimante est près de la porte, et non parce que les flux de travail ont été améliorés.'],
  ['Sam says the new schedule will reduce stress because it is color-coded, ignoring the longer commute it created.', 'Sam dit que le nouvel horaire réduira le stress parce qu il est codé par couleurs, en ignorant le trajet plus long qu il a créé.'],
  ['Zoe says the picnic will be relaxing because the blanket is soft, overlooking the quiet park and no phones rule.', 'Zoé dit que le pique-nique sera relaxant parce que la couverture est douce, en oubliant le parc calme et la règle sans téléphone.'],
  ['Maya says the bakery is best because the sign is handwritten, ignoring the fresh bread and friendly service.', 'Maya dit que la boulangerie est la meilleure parce que l enseigne est écrite à la main, en ignorant le pain frais et le service sympathique.'],
  ['Leo says the router is broken because it is old, overlooking the outage from the provider.', 'Leo dit que le routeur est cassé parce qu il est vieux, en oubliant la panne du fournisseur.'],
  ['Priya says the class is failing because the room is small, not because the final was moved up a week.', 'Priya dit que la classe échoue parce que la salle est petite, et non parce que l examen final a été avancé d une semaine.'],
  ['Omar says the shop is unpopular because the shelves are plain, ignoring the roadworks blocking the entrance.', 'Omar dit que la boutique est impopulaire parce que les étagères sont simples, en ignorant les travaux qui bloquent l entrée.'],
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
