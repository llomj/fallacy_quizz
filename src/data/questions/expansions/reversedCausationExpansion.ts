import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says the hot day must have been caused by the ice cream shop opening because more customers showed up after it opened.', 'Maya dit que la journee chaude a forcement ete causee par l ouverture du glacier parce que plus de clients sont arrives apres l ouverture.'],
  ['Leo claims the rain started because everyone pulled out umbrellas at the bus stop.', 'Leo affirme que la pluie a commence parce que tout le monde a sorti son parapluie a l arret de bus.'],
  ['Priya says the sunrise happened because the bakery turned on its ovens.', 'Priya dit que le lever du soleil a eu lieu parce que la boulangerie a allume ses fours.'],
  ['Omar says the traffic jam must have been caused by the coffee shop adding more seats.', 'Omar dit que l embouteillage a forcement ete cause par le cafe qui a ajoute plus de sieges.'],
  ['Rina thinks her test score went up because the teacher collected the papers sooner.', 'Rina pense que sa note a monte parce que le professeur a ramasse les copies plus tot.'],
  ['Ben says the storm arrived because the grocery store put out more bread.', 'Ben dit que l orage est arrive parce que l epicerie a sorti plus de pain.'],
  ['Zoe says the dog started barking because the mail truck pulled away.', 'Zoé dit que le chien s est mis a aboyer parce que le camion postal est parti.'],
  ['Kai says the plant grew because the pot was moved closer to the window after the leaves perked up.', 'Kai dit que la plante a grandi parce que le pot a ete rapproche de la fenetre apres que les feuilles se sont redressees.'],
  ['Nora says the room got quieter because the music app closed on its own.', 'Nora dit que la piece est devenue plus calme parce que l application de musique s est fermee toute seule.'],
  ['Eli says the meeting ended because everyone stopped taking notes.', 'Eli dit que la reunion s est terminee parce que tout le monde a cesse de prendre des notes.'],
  ['Lina says the road repair happened because the potholes disappeared.', 'Lina dit que la reparation de la route a eu lieu parce que les nids-de-poule ont disparu.'],
  ['Grant says the sales spike caused the poster to go up in the window.', 'Grant dit que la hausse des ventes a fait afficher l affiche dans la vitrine.'],
  ['Tia says the lights came on because the neighborhood felt safer.', 'Tia dit que les lumieres se sont allumees parce que le quartier se sentait plus sur.'],
  ['Noah says the class became easier because the students finished the homework faster.', 'Noah dit que la classe est devenue plus facile parce que les eleves ont fini le devoir plus vite.'],
  ['Mia says the café got busier because the cashier started smiling more.', 'Mia dit que le cafe est devenu plus frequente parce que la caissiere a commence a sourire davantage.'],
  ['Jules says the alarm rang because the toast burned after the fire started.', 'Jules dit que l alarme a sonne parce que le pain grille a brûle apres le debut du feu.'],
  ['Ava says the market opened earlier because the crowd arrived first.', 'Ava dit que le marche a ouvert plus tot parce que la foule est arrivee en premier.'],
  ['Finn says the music got louder because people began clapping.', 'Finn dit que la musique est devenue plus forte parce que les gens ont commence a applaudir.'],
  ['Mina says the garden bloomed because the bees came back.', 'Mina dit que le jardin a fleuri parce que les abeilles sont revenues.'],
  ['Theo says the bus was late because everyone boarded slowly.', 'Theo dit que le bus etait en retard parce que tout le monde est monte lentement.'],
  ['Juno says the snack aisle emptied because the sale started.', 'Juno dit que le rayon snacks s est vide parce que la promotion a commence.'],
  ['Iris says the baby fell asleep because the lullaby ended.', 'Iris dit que le bebe s est endormi parce que la berceuse s est arretee.'],
  ['Cole says the app lagged because he tapped the button twice after the delay began.', 'Cole dit que l application a ralenti parce qu il a appuye deux fois sur le bouton apres que le retard a commence.'],
  ['Riley says the crowd cheered because the scoreboard changed.', 'Riley dit que la foule a applaudi parce que le tableau d affichage a change.'],
  ['Pia says the teacher explained the rule because the class got confused.', 'Pia dit que le professeur a explique la regle parce que la classe etait deja confuse.'],
  ['Hugo says the checkout line moved because the staff opened a second register after the rush.', 'Hugo dit que la file de caisse a avance parce que le personnel a ouvert une deuxieme caisse apres la foule.'],
  ['Sam says the highway cleared because the accident had already been reported.', 'Sam dit que l autoroute s est degagee parce que l accident avait deja ete signale.'],
  ['Jade says the new policy was made because the complaints slowed down.', 'Jade dit que la nouvelle politique a ete adoptee parce que les plaintes ont ralenti.'],
  ['Owen says the dog calmed down because the thunder stopped after the dog relaxed.', 'Owen dit que le chien s est calme parce que le tonnerre a cesse apres que le chien s est detendu.'],
  ['Lea says the school assembly got shorter because the announcements finished.', 'Léa dit que l assemblee scolaire est devenue plus courte parce que les annonces se sont terminees.'],
  ['Maya says the soup cooled because the lid came off after dinner was served.', 'Maya dit que la soupe a refroidi parce que le couvercle a ete retire apres le service du repas.'],
  ['Ben says the website loaded faster because the ads disappeared.', 'Ben dit que le site s est charge plus vite parce que les publicites ont disparu.'],
  ['Ava says the picture looked brighter because the blinds were opened after the sunlight changed.', 'Ava dit que l image avait l air plus lumineuse parce que les stores ont ete ouverts apres le changement de lumiere du soleil.'],
  ['Omar says the park got crowded because the benches were added.', 'Omar dit que le parc est devenu plus rempli parce que des bancs ont ete ajoutes.'],
  ['Nina says the room got warm because the window closed after the heater kicked in.', 'Nina dit que la piece est devenue chaude parce que la fenetre a ete fermee apres le demarrage du chauffage.'],
  ['Eli says the chat became active because the moderator joined after the jokes started.', 'Eli dit que la discussion est devenue active parce que le moderateur est arrive apres le debut des blagues.'],
  ['Lina says the soup tasted salty because everyone asked for water once they noticed it.', 'Lina dit que la soupe avait un gout sale parce que tout le monde a demande de l eau apres l avoir remarque.'],
  ['Grant says the store was out of milk because the delivery truck came after the shelves emptied.', 'Grant dit que le magasin n avait plus de lait parce que le camion de livraison est arrive apres que les rayons se sont vides.'],
  ['Tia says the toddler got quieter because the cartoon stopped after the quiet began.', 'Tia dit que le tout-petit est devenu plus calme parce que le dessin anime s est arrete apres le debut du calme.'],
  ['Finn says the report looked cleaner because the formatting changed after the errors were fixed.', 'Finn dit que le rapport avait l air plus propre parce que la mise en forme a change apres la correction des erreurs.'],
  ['Mina says the road looked smoother because the resurfacing signs appeared.', 'Mina dit que la route avait l air plus lisse parce que les panneaux de resurfaçage sont apparus.'],
  ['Theo says the class paid more attention because the teacher lowered the volume once the room got focused.', 'Theo dit que la classe a plus fait attention parce que le professeur a baisse le volume une fois que la salle s est concentree.'],
  ['Juno says the storm became stronger because the sirens turned on.', 'Juno dit que l orage est devenu plus fort parce que les sirenes se sont declenchees.'],
  ['Iris says the team won because the confetti fell after the final whistle.', 'Iris dit que l equipe a gagne parce que les confettis sont tombes apres le coup de sifflet final.'],
  ['Cole says the queue shrank because the kiosk sign was updated.', 'Cole dit que la file a diminue parce que l affiche de la borne a ete mise a jour.'],
  ['Riley says the baby cried because the room got darker after the nap started.', 'Riley dit que le bebe a pleure parce que la piece est devenue plus sombre apres le debut de la sieste.'],
  ['Pia says the spreadsheet was wrong because the totals changed after the cells were edited.', 'Pia dit que le tableau etait faux parce que les totaux ont change apres la modification des cellules.'],
  ['Hugo says the parade began because the street was blocked off.', 'Hugo dit que le defile a commence parce que la rue avait ete barrée.'],
  ['Sam says the lecture got boring because the audience started yawning.', 'Sam dit que la conference est devenue ennuyeuse parce que le public a commence a bailler.'],
  ['Jade says the oven got hot because the timer ended after the cake was done.', 'Jade dit que le four est devenu chaud parce que le minuteur s est termine apres que le gateau etait pret.'],
  ['Maya says the app crashed because the warning badge disappeared.', 'Maya dit que l application a plante parce que le badge d avertissement a disparu.'],
  ["Nora says the sidewalk got wet because more people opened their umbrellas.", "Nora dit que le trottoir est devenu mouille parce que davantage de personnes ont ouvert leur parapluie."],
  ["Eli says the store must have been successful because the line got longer after the doors opened.", "Eli dit que le magasin a forcement reussi parce que la file a grossi apres l ouverture des portes."],
  ["Lina says her headache got better because the medicine bottle was placed on the table after she felt relief.", "Lina dit que son mal de tete s est ameliore parce que le flacon de medicament a ete pose sur la table apres qu elle s est sentie mieux."],
  ["Grant says the concert sounded louder because the crowd cheered after the music peaked.", "Grant dit que le concert semblait plus fort parce que la foule a applaudi apres que la musique a atteint son pic."],
  ["Tia says the office became calmer because the manager sent the quiet-hour email after everyone settled down.", "Tia dit que le bureau est devenu plus calme parce que le responsable a envoye le courriel d heure calme apres que tout le monde se soit apaise."],
  ["Noah says the soup got tastier because people added salt after they noticed it was bland.", "Noah dit que la soupe est devenue meilleure parce que les gens ont ajoute du sel apres avoir remarque qu elle etait fade."],
  ["Mia says the park felt friendlier because more families arrived after the festival started.", "Mia dit que le parc semblait plus accueillant parce que davantage de familles sont arrivees apres le debut du festival."],
  ["Ava says the room got brighter because the lamp was turned on after everyone could already see.", "Ava dit que la piece est devenue plus lumineuse parce que la lampe a ete allumee apres que tout le monde pouvait deja voir."],
  ["Finn says the meeting became productive because the agenda was printed after the discussion improved.", "Finn dit que la reunion est devenue productive parce que l ordre du jour a ete imprime apres l amelioration de la discussion."],
  ["Mina says the dog got calmer because the leash was clipped on after it settled.", "Mina dit que le chien est devenu plus calme parce que la laisse a ete attachee apres qu il se soit apaise."],
  ["Theo says the queue moved faster because a second cashier opened once the line shortened.", "Theo dit que la file a avance plus vite parce qu une deuxieme caisse a ouvert une fois la file raccourcie."],
  ["Juno says the laptop ran better because the cooling pad appeared after the update finished.", "Juno dit que l ordinateur portable fonctionnait mieux parce que le support de refroidissement est apparu apres la fin de la mise a jour."],
  ["Iris says the class got quieter because the teacher raised her hand after the silence began.", "Iris dit que la classe est devenue plus calme parce que le professeur a leve la main apres le debut du silence."],
  ["Cole says the game got exciting because the scoreboard lights flashed after the comeback started.", "Cole dit que le jeu est devenu passionnant parce que les lumieres du tableau ont clignote apres le debut de la remontee."],
  ["Riley says the garden looked healthier because the watering can came out after the plants revived.", "Riley dit que le jardin avait l air en meilleure sante parce que l arrosoir est sorti apres que les plantes se soient remises."],
  ["Pia says the queue at the bakery was proof the bread was fresh because the sign changed after the rush began.", "Pia dit que la file a la boulangerie prouvait que le pain etait frais parce que l affiche a change apres le debut de l affluence."],
  ["Hugo says the bus became late because passengers complained after the delay had already started.", "Hugo dit que le bus est devenu en retard parce que les passagers se sont plaints apres que le retard avait deja commence."],
  ["Sam says the lights flickered because everyone noticed the storm after the power dipped.", "Sam dit que les lumieres ont vacille parce que tout le monde a remarque l orage apres la baisse de courant."],
  ["Jade says the office looked busier because people sent more emails after the workload rose.", "Jade dit que le bureau avait l air plus occupe parce que les gens ont envoye plus de courriels apres que la charge de travail ait augmente."],
  ["Owen says the hallway got louder because the school bell rang after the crowd gathered.", "Owen dit que le couloir est devenu plus bruyant parce que la cloche a sonne apres que la foule se soit rassemblee."],
  ["Lea says the coffee tasted stronger because she stirred it after the caffeine hit.", "Lea dit que le cafe avait un gout plus fort parce qu elle l a remue apres que la cafeine ait fait effet."],
  ["Maya says the stream lagged because the chat messages increased after the freeze began.", "Maya dit que le stream a ralenti parce que les messages du chat ont augmente apres le debut du gel."],
  ["Ben says the theater got packed because the preview clip played after people sat down.", "Ben dit que le theatre s est rempli parce que l extrait est passe apres que les gens se soient assis."],
  ["Ava says the classroom looked smarter because the posters went up after the lesson ended.", "Ava dit que la classe avait l air plus intelligente parce que les affiches ont ete accrochees apres la fin du cours."],
  ["Omar says the street became safer because the police car drove by after the block was quiet.", "Omar dit que la rue est devenue plus sure parce que la voiture de police est passee apres que le quartier soit devenu calme."],
  ["Nina says the cookies were done because the timer beeped after she pulled them out.", "Nina dit que les biscuits etaient pret parce que la minuterie a sonne apres qu elle les ait sortis."],
  ["Eli says the app was fixed because the green checkmark appeared after the bug disappeared.", "Eli dit que l application etait reparee parce que la coche verte est apparue apres la disparition du bug."],
  ["Lina says the meeting ended because the chairs were stacked after everyone left.", "Lina dit que la reunion s est terminee parce que les chaises ont ete empilees apres le depart de tout le monde."],
  ["Grant says the venue became popular because social posts spread after tickets sold out.", "Grant dit que le lieu est devenu populaire parce que les publications ont circule apres la vente des billets."],
  ["Tia says the child started smiling because the toy was handed over after the smile appeared.", "Tia dit que l enfant a commence a sourire parce que le jouet a ete remis apres l apparition du sourire."],
  ["Finn says the radio sounded clearer because the station changed after the static eased.", "Finn dit que la radio avait un son plus clair parce que la station a change apres que les parasites se soient attenues."],
  ["Mina says the office smelled better because the air freshener was sprayed after the smell faded.", "Mina dit que le bureau sentait meilleur parce que le desodorisant a ete vaporise apres que l odeur se soit attenuee."],
  ["Theo says the line got shorter because more people left after the cashier sped up.", "Theo dit que la file est devenue plus courte parce que plus de personnes sont parties apres que la caissiere ait accelere."],
  ["Juno says the restaurant was popular because reviews came in after the dinner rush.", "Juno dit que le restaurant etait populaire parce que les avis sont arrives apres le service du soir."],
  ["Iris says the car seemed fixed because the mechanic installed a sticker after the engine stopped rattling.", "Iris dit que la voiture semblait reparee parce que le mecanicien a colle un autocollant apres que le moteur ait cesse de vibrer."],
  ["Cole says the neighborhood got peaceful because the kids went home after the street got quiet.", "Cole dit que le quartier est devenu paisible parce que les enfants sont rentres chez eux apres que la rue soit devenue calme."],
  ["Riley says the lecture improved because the slides changed after the audience paid attention.", "Riley dit que la conference s est amelioree parce que les diapositives ont change apres que le public se soit concentre."],
  ["Pia says the rain stopped because the umbrella was folded after the clouds moved away.", "Pia dit que la pluie s est arretee parce que le parapluie a ete replie apres le depart des nuages."],
  ["Hugo says the party got lively because the music started after people were already dancing.", "Hugo dit que la fete est devenue animée parce que la musique a commence apres que les gens dansaient deja."],
  ["Sam says the report improved because the title changed after the errors were fixed.", "Sam dit que le rapport s est ameliore parce que le titre a change apres la correction des erreurs."],
  ["Jade says the queue disappeared because the sign was removed after the customers entered.", "Jade dit que la file a disparu parce que le panneau a ete retire apres l entree des clients."],
  ["Maya says the classroom got warmer because the radiator clicked on after everyone took off their coats.", "Maya dit que la classe est devenue plus chaude parce que le radiateur s est mis en marche apres que tout le monde ait retire son manteau."],
  ["Ben says the website recovered because the loading spinner vanished after the page came back.", "Ben dit que le site s est retabli parce que le cercle de chargement a disparu apres le retour de la page."],
  ["Ava says the gym felt cleaner because the mop came out after the floor was already dry.", "Ava dit que la salle de sport paraissait plus propre parce que la serpillere est sortie apres que le sol etait deja sec."],
  ["Maya says the meeting was more serious because everyone stopped laughing after the agenda turned formal.", "Maya dit que la reunion est devenue plus serieuse parce que tout le monde a cesse de rire apres que l ordre du jour est devenu formel."],
  ["Leo says the market was crowded because the music got louder after the shoppers arrived.", "Leo dit que le marche etait bondé parce que la musique est devenue plus forte apres l arrivée des clients."],
  ["Nina says the classroom got focused because the teacher wrote the title on the board after the students settled down.", "Nina dit que la classe est devenue concentree parce que le professeur a ecrit le titre au tableau apres que les eleves se soient calmes."],
  ["Omar says the cafe smelled better because the windows opened after the coffee smell faded.", "Omar dit que le cafe sentait meilleur parce que les fenetres ont ete ouvertes apres que l odeur de cafe se soit estompee."],
  ["Tia says the game became tense because the scoreboard flashed after the final play was already underway.", "Tia dit que le jeu est devenu tendu parce que le tableau d affichage a clignote apres que l action finale etait deja en cours."],
];

const OPTIONS_EN = ['Reversed Causation', 'Correlation Does Not Prove Causation', 'Post Hoc', 'Regression to the Mean'];
const OPTIONS_FR = ['Causalité inversée', 'La corrélation ne prouve pas la causalité', 'Post hoc', 'Régression vers la moyenne'];

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
      id: 39901 + index,
      level: 3,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Causalité inversée' : 'Reversed Causation',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La cause et l effet sont inverses: on attribue a la cause ce qui est en realite une consequence, un signe ou un effet secondaire.'
        : 'The cause and effect are flipped: something that is really a consequence, signal, or side effect gets treated as the cause.',
      detailedExplanationBeginner: isFrench
        ? 'On prend l effet pour la cause.'
        : 'The effect is mistaken for the cause.',
      detailedExplanationIntermediate: isFrench
        ? 'La causalite inversee apparait quand une personne voit deux evenements liés et suppose que le second a provoque le premier, alors que la direction va dans l autre sens.'
        : 'Reversed causation happens when someone sees two related events and assumes the second caused the first, when the direction actually runs the other way.',
      detailedExplanationExpert: isFrench
        ? "Ce sophisme inverse la fleche causale. Un changement, une reaction ou une presence peut sembler expliquer un resultat alors qu il en est seulement la consequence. Pour verifier la relation, il faut tester la direction du lien, chercher des facteurs communs et distinguer antecedent, consequence et simple correlation."
        : 'This fallacy reverses the causal arrow. A change, reaction, or presence can look like the explanation for an outcome even though it is only the consequence. To check the relationship, you need to test direction, look for shared causes, and separate antecedent, consequence, and simple correlation.',
      questionFormat: 'standard',
    };
  });
}

export const REVERSED_CAUSATION_EXPANSION_EN: Question[] = createQuestions('en');
export const REVERSED_CAUSATION_EXPANSION_FR: Question[] = createQuestions('fr');
