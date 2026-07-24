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
