import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says the kettle is broken because it leaks water, but then says the leak is fine because all kettles leak a little.', 'Maya dit que la bouilloire est cassee parce qu elle fuit de l eau, mais dit ensuite que la fuite est normale parce que toutes les bouilloires fuient un peu.'],
  ['Leo claims his homework was late because the printer jammed, then says the printer jammed because the homework was late.', 'Leo affirme que ses devoirs etaient en retard parce que l imprimante a bloque, puis dit que l imprimante a bloque parce que les devoirs etaient en retard.'],
  ['Nina says the meeting was bad because everyone was tired, and also says everyone was tired because the meeting was bad.', 'Nina dit que la reunion etait mauvaise parce que tout le monde etait fatigue, et dit aussi que tout le monde etait fatigue parce que la reunion etait mauvaise.'],
  ['Owen says the soup was cold because the lid was off, then says the lid was off because the soup was cold.', 'Owen dit que la soupe etait froide parce que le couvercle etait ouvert, puis dit que le couvercle etait ouvert parce que la soupe etait froide.'],
  ['Priya says the app is slow because the phone is old, then says the phone is old because the app is slow.', 'Priya dit que l application est lente parce que le telephone est vieux, puis dit que le telephone est vieux parce que l application est lente.'],
  ['Ben says the team lost because the coach made a bad joke, then says the bad joke was bad because the team lost.', 'Ben dit que l equipe a perdu parce que l entraineur a fait une mauvaise blague, puis dit que la blague etait mauvaise parce que l equipe a perdu.'],
  ['Tara says the plant died because nobody watered it, then says nobody watered it because the plant died.', 'Tara dit que la plante est morte parce que personne ne l a arrosee, puis dit que personne ne l a arrosee parce que la plante est morte.'],
  ['Kai says the charger failed because the cord bent, then says the cord bent because the charger failed.', 'Kai dit que le chargeur a cesse de fonctionner parce que le cable a ete plie, puis dit que le cable a ete plie parce que le chargeur a cesse de fonctionner.'],
  ['Jules says the class was quiet because the teacher was absent, then says the teacher was absent because the class was quiet.', 'Jules dit que la classe etait calme parce que le professeur etait absent, puis dit que le professeur etait absent parce que la classe etait calme.'],
  ['Ava says the road was empty because the parade ended early, then says the parade ended early because the road was empty.', 'Ava dit que la route etait vide parce que le defile s est termine tot, puis dit que le defile s est termine tot parce que la route etait vide.'],
  ['Noah says the package arrived because the driver called, then says the driver called because the package arrived.', 'Noah dit que le colis est arrive parce que le livreur a appele, puis dit que le livreur a appele parce que le colis est arrive.'],
  ['Mina says the budget is tight because the trip was expensive, then says the trip was expensive because the budget is tight.', 'Mina dit que le budget est serre parce que le voyage etait cher, puis dit que le voyage etait cher parce que le budget est serre.'],
  ['Eli says the room is messy because the kids played, then says the kids played because the room is messy.', 'Eli dit que la piece est en desordre parce que les enfants ont joue, puis dit que les enfants ont joue parce que la piece est en desordre.'],
  ['Rina says the presentation failed because the slides were cluttered, then says the slides were cluttered because the presentation failed.', 'Rina dit que la presentation a echoue parce que les diapositives etaient chargees, puis dit que les diapositives etaient chargees parce que la presentation a echoue.'],
  ['Hugo says the dinner was awkward because nobody spoke, then says nobody spoke because the dinner was awkward.', 'Hugo dit que le diner etait genant parce que personne ne parlait, puis dit que personne ne parlait parce que le diner etait genant.'],
  ['Lina says the policy is unfair because people are upset, then says people are upset because the policy is unfair.', 'Lina dit que la politique est injuste parce que les gens sont en colere, puis dit que les gens sont en colere parce que la politique est injuste.'],
  ['Grant says the shop is expensive because customers leave, then says customers leave because the shop is expensive.', 'Grant dit que la boutique est chere parce que les clients partent, puis dit que les clients partent parce que la boutique est chere.'],
  ['Zoe says the road is dangerous because cars speed by, then says cars speed by because the road is dangerous.', 'Zoe dit que la route est dangereuse parce que les voitures passent vite, puis dit que les voitures passent vite parce que la route est dangereuse.'],
  ['Milo says the event was boring because people checked their phones, then says people checked their phones because the event was boring.', 'Milo dit que l evenement etait ennuyeux parce que les gens regardaient leur telephone, puis dit que les gens regardaient leur telephone parce que l evenement etait ennuyeux.'],
  ['Theo says the phone died because the battery was old, then says the battery was old because the phone died.', 'Theo dit que le telephone est tombe en panne parce que la batterie etait vieille, puis dit que la batterie etait vieille parce que le telephone est tombe en panne.'],
  ['Pia says the office is cold because the heater is off, then says the heater is off because the office is cold.', 'Pia dit que le bureau est froid parce que le chauffage est eteint, puis dit que le chauffage est eteint parce que le bureau est froid.'],
  ['Finn says the cake failed because the oven was hot, then says the oven was hot because the cake failed.', 'Finn dit que le gateau a rate parce que le four etait chaud, puis dit que le four etait chaud parce que le gateau a rate.'],
  ['Maya says the text was misunderstood because it was vague, then says it was vague because it was misunderstood.', 'Maya dit que le texte a ete mal compris parce qu il etait vague, puis dit qu il etait vague parce qu il a ete mal compris.'],
  ['Sam says the delay happened because the traffic was bad, then says the traffic was bad because there was a delay.', 'Sam dit que le retard est arrive parce que la circulation etait mauvaise, puis dit que la circulation etait mauvaise parce qu il y avait un retard.'],
  ['Juno says the game felt unfair because the rules were confusing, then says the rules were confusing because the game felt unfair.', 'Juno dit que le jeu semblait injuste parce que les regles etaient confuses, puis dit que les regles etaient confuses parce que le jeu semblait injuste.'],
  ['Iris says the cafe line was long because service was slow, then says service was slow because the cafe line was long.', 'Iris dit que la file du cafe etait longue parce que le service etait lent, puis dit que le service etait lent parce que la file du cafe etait longue.'],
  ['Cole says the battery drained because the app was open, then says the app was open because the battery drained.', 'Cole dit que la batterie s est videe parce que l application etait ouverte, puis dit que l application etait ouverte parce que la batterie s est videe.'],
  ['Nora says the office was noisy because the door was open, then says the door was open because the office was noisy.', 'Nora dit que le bureau etait bruyant parce que la porte etait ouverte, puis dit que la porte etait ouverte parce que le bureau etait bruyant.'],
  ['Ari says the shopping cart wobbled because a wheel was bent, then says the wheel was bent because the cart wobbled.', 'Ari dit que le chariot du magasin tanguait parce qu une roue etait tordue, puis dit que la roue etait tordue parce que le chariot tanguait.'],
  ['Rita says the call was confusing because everyone talked at once, then says everyone talked at once because the call was confusing.', 'Rita dit que l appel etait confus parce que tout le monde parlait en meme temps, puis dit que tout le monde parlait en meme temps parce que l appel etait confus.'],
  ['Tia says the kitchen smelled strange because the window was shut, then says the window was shut because the kitchen smelled strange.', 'Tia dit que la cuisine avait une odeur bizarre parce que la fenetre etait fermee, puis dit que la fenetre etait fermee parce que la cuisine avait une odeur bizarre.'],
  ['Oli says the class was restless because the lesson dragged on, then says the lesson dragged on because the class was restless.', 'Oli dit que la classe etait agitee parce que la lecon s etirait, puis dit que la lecon s etirait parce que la classe etait agitee.'],
  ['Lara says the phone rang because the meeting was over, then says the meeting was over because the phone rang.', 'Lara dit que le telephone a sonne parce que la reunion etait terminee, puis dit que la reunion etait terminee parce que le telephone a sonne.'],
  ['Ben says the sign was crooked because the wind blew, then says the wind blew because the sign was crooked.', 'Ben dit que le panneau etait de travers parce que le vent soufflait, puis dit que le vent soufflait parce que le panneau etait de travers.'],
  ['Mina says the ride was rough because the road was bumpy, then says the road was bumpy because the ride was rough.', 'Mina dit que le trajet etait cahoteux parce que la route etait bossue, puis dit que la route etait bossue parce que le trajet etait cahoteux.'],
  ['Drew says the debate went in circles because nobody answered directly, then says nobody answered directly because the debate went in circles.', 'Drew dit que le debat tournait en rond parce que personne ne repondait directement, puis dit que personne ne repondait directement parce que le debat tournait en rond.'],
  ['Jade says the printer jammed because the paper curled, then says the paper curled because the printer jammed.', 'Jade dit que l imprimante a bloque parce que le papier a roule, puis dit que le papier a roule parce que l imprimante a bloque.'],
  ['Owen says the room was hot because the fan stopped, then says the fan stopped because the room was hot.', 'Owen dit que la piece etait chaude parce que le ventilateur s est arrete, puis dit que le ventilateur s est arrete parce que la piece etait chaude.'],
  ['Mila says the route was confusing because the map was wrong, then says the map was wrong because the route was confusing.', 'Mila dit que l itineraire etait confus parce que la carte etait fausse, puis dit que la carte etait fausse parce que l itineraire etait confus.'],
  ['Evan says the class was late because the bell did not ring, then says the bell did not ring because the class was late.', 'Evan dit que la classe etait en retard parce que la cloche n a pas sonne, puis dit que la cloche n a pas sonne parce que la classe etait en retard.'],
  ['Kira says the soup spilled because the bowl tipped, then says the bowl tipped because the soup spilled.', 'Kira dit que la soupe s est renversee parce que le bol a bascule, puis dit que le bol a bascule parce que la soupe s est renversee.'],
  ['Grant says the page loaded slowly because the site was busy, then says the site was busy because the page loaded slowly.', 'Grant dit que la page s est chargee lentement parce que le site etait occupe, puis dit que le site etait occupe parce que la page s est chargee lentement.'],
  ['Zara says the announcement was ignored because people were distracted, then says people were distracted because the announcement was ignored.', 'Zara dit que l annonce a ete ignoree parce que les gens etaient distraits, puis dit que les gens etaient distraits parce que l annonce a ete ignoree.'],
  ['Parker says the meeting lasted long because nobody could agree, then says nobody could agree because the meeting lasted long.', 'Parker dit que la reunion a dure longtemps parce que personne ne pouvait se mettre d accord, puis dit que personne ne pouvait se mettre d accord parce que la reunion a dure longtemps.'],
  ['Hana says the coffee was weak because the grounds were old, then says the grounds were old because the coffee was weak.', 'Hana dit que le cafe etait faible parce que le marc etait vieux, puis dit que le marc etait vieux parce que le cafe etait faible.'],
  ['Leo says the road was blocked because the truck parked badly, then says the truck parked badly because the road was blocked.', 'Leo dit que la route etait bloquee parce que le camion etait mal gare, puis dit que le camion etait mal gare parce que la route etait bloquee.'],
  ['Maya says the phone buzzed because the message arrived, then says the message arrived because the phone buzzed.', 'Maya dit que le telephone a vibre parce que le message est arrive, puis dit que le message est arrive parce que le telephone a vibre.'],
  ['Nina says the team was late because the subway was slow, then says the subway was slow because the team was late.', 'Nina dit que l equipe etait en retard parce que le metro etait lent, puis dit que le metro etait lent parce que l equipe etait en retard.'],
  [`Owen says the kettle is noisy because the water boils, then says the water boils because the kettle is noisy.`, `Owen dit que la bouilloire est bruyante parce que l eau bout, puis dit que l eau bout parce que la bouilloire est bruyante.`],
  [`Priya says the homework was confusing because the teacher rushed, then says the teacher rushed because the homework was confusing.`, `Priya dit que les devoirs etaient confus parce que le professeur s est precipite, puis dit que le professeur s est precipite parce que les devoirs etaient confus.`],
  [`Ben says the cafe was crowded because the chairs were full, then says the chairs were full because the cafe was crowded.`, `Ben dit que le cafe etait bondé parce que les chaises etaient prises, puis dit que les chaises etaient prises parce que le cafe etait bondé.`],
  [`Tara says the toy broke because the child played rough, then says the child played rough because the toy broke.`, `Tara dit que le jouet s est casse parce que l enfant jouait brutalement, puis dit que l enfant jouait brutalement parce que le jouet s est casse.`],
  [`Kai says the email was ignored because it was too long, then says it was too long because it was ignored.`, `Kai dit que le courriel a ete ignore parce qu il etait trop long, puis dit qu il etait trop long parce qu il a ete ignore.`],
  [`Jules says the bus was late because traffic was bad, then says traffic was bad because the bus was late.`, `Jules dit que le bus etait en retard parce que la circulation etait mauvaise, puis dit que la circulation etait mauvaise parce que le bus etait en retard.`],
  [`Ava says the room smelled weird because the window was shut, then says the window was shut because the room smelled weird.`, `Ava dit que la piece sentait bizarre parce que la fenetre etait fermee, puis dit que la fenetre etait fermee parce que la piece sentait bizarre.`],
  [`Milo says the printer jammed because the paper was curled, then says the paper was curled because the printer jammed.`, `Milo dit que l imprimante a bloque parce que le papier etait roule, puis dit que le papier etait roule parce que l imprimante a bloque.`],
  [`Theo says the call was confusing because people talked over each other, then says people talked over each other because the call was confusing.`, `Theo dit que l appel etait confus parce que les gens se coupaient la parole, puis dit que les gens se coupaient la parole parce que l appel etait confus.`],
  [`Mina says the class was restless because the lesson dragged, then says the lesson dragged because the class was restless.`, `Mina dit que la classe etait agitee parce que la lecon s eternisait, puis dit que la lecon s eternisait parce que la classe etait agitee.`],
  [`Nora says the shop is unpopular because nobody enters, then says nobody enters because the shop is unpopular.`, `Nora dit que la boutique n est pas populaire parce que personne n y entre, puis dit que personne n y entre parce que la boutique n est pas populaire.`],
  [`Maya says the movie was boring because people checked their phones, then says people checked their phones because the movie was boring.`, `Maya dit que le film etait ennuyeux parce que les gens regardaient leur telephone, puis dit que les gens regardaient leur telephone parce que le film etait ennuyeux.`],
  [`Leo says the coffee is weak because the cup is still full, then says the cup is still full because the coffee is weak.`, `Leo dit que le cafe est faible parce que la tasse est encore pleine, puis dit que la tasse est encore pleine parce que le cafe est faible.`],
  [`Priya says the class is late because the bell did not ring, then says the bell did not ring because the class is late.`, `Priya dit que la classe est en retard parce que la cloche n a pas sonne, puis dit que la cloche n a pas sonne parce que la classe est en retard.`],
  [`Ben says the noodles are cold because the lid is off, then says the lid is off because the noodles are cold.`, `Ben dit que les nouilles sont froides parce que le couvercle est ouvert, puis dit que le couvercle est ouvert parce que les nouilles sont froides.`],
  [`Tara says the lesson is dull because nobody is taking notes, then says nobody is taking notes because the lesson is dull.`, `Tara dit que la lecon est ennuyeuse parce que personne ne prend de notes, puis dit que personne ne prend de notes parce que la lecon est ennuyeuse.`],
  [`Kai says the printer is broken because the page will not load, then says the page will not load because the printer is broken.`, `Kai dit que l imprimante est cassee parce que la page ne charge pas, puis dit que la page ne charge pas parce que l imprimante est cassee.`],
  [`Jules says the bus is late because the station is empty, then says the station is empty because the bus is late.`, `Jules dit que le bus est en retard parce que la station est vide, puis dit que la station est vide parce que le bus est en retard.`],
  [`Ava says the kitchen is messy because dinner was rushed, then says dinner was rushed because the kitchen is messy.`, `Ava dit que la cuisine est en desordre parce que le dîner a ete baclé, puis dit que le dîner a ete baclé parce que la cuisine est en desordre.`],
  [`Noah says the meeting was long because nobody agreed, then says nobody agreed because the meeting was long.`, `Noah dit que la reunion a ete longue parce que personne n etait d accord, puis dit que personne n etait d accord parce que la reunion a ete longue.`],
  [`Mina says the room is cold because the heater is off, then says the heater is off because the room is cold.`, `Mina dit que la piece est froide parce que le chauffage est eteint, puis dit que le chauffage est eteint parce que la piece est froide.`],
  [`Eli says the game was unfair because the rules were confusing, then says the rules were confusing because the game was unfair.`, `Eli dit que le jeu etait injuste parce que les regles etaient confuses, puis dit que les regles etaient confuses parce que le jeu etait injuste.`],
  [`Rina says the call was noisy because everyone was stressed, then says everyone was stressed because the call was noisy.`, `Rina dit que l appel etait bruyant parce que tout le monde etait stresse, puis dit que tout le monde etait stresse parce que l appel etait bruyant.`],
  [`Hugo says the road was empty because the parade ended early, then says the parade ended early because the road was empty.`, `Hugo dit que la route etait vide parce que le defile s est termine tot, puis dit que le defile s est termine tot parce que la route etait vide.`],
  [`Lina says the app is slow because the phone is old, then says the phone is old because the app is slow.`, `Lina dit que l application est lente parce que le telephone est vieux, puis dit que le telephone est vieux parce que l application est lente.`],
  [`Grant says the bakery smells sweet because the cakes are baking, then says the cakes are baking because the bakery smells sweet.`, `Grant dit que la boulangerie sent bon parce que les gâteaux cuisent, puis dit que les gâteaux cuisent parce que la boulangerie sent bon.`],
  [`Zoe says the team lost because the coach was quiet, then says the coach was quiet because the team lost.`, `Zoe dit que l equipe a perdu parce que l entraineur etait silencieux, puis dit que l entraineur etait silencieux parce que l equipe a perdu.`],
  [`Milo says the bike is rusty because it sat outside, then says it sat outside because the bike is rusty.`, `Milo dit que le velo est rouille parce qu il est reste dehors, puis dit qu il est reste dehors parce que le velo est rouille.`],
  [`Theo says the restaurant feels empty because the music is low, then says the music is low because the restaurant feels empty.`, `Theo dit que le restaurant semble vide parce que la musique est basse, puis dit que la musique est basse parce que le restaurant semble vide.`],
  [`Pia says the backpack is heavy because the books are inside, then says the books are inside because the backpack is heavy.`, `Pia dit que le sac a dos est lourd parce que les livres sont dedans, puis dit que les livres sont dedans parce que le sac a dos est lourd.`],
  [`Finn says the chat is awkward because nobody laughs, then says nobody laughs because the chat is awkward.`, `Finn dit que la discussion est genante parce que personne ne rit, puis dit que personne ne rit parce que la discussion est genante.`],
  [`Maya says the store is busy because the line is long, then says the line is long because the store is busy.`, `Maya dit que le magasin est bondé parce que la file est longue, puis dit que la file est longue parce que le magasin est bondé.`],
  [`Sam says the music is loud because people dance, then says people dance because the music is loud.`, `Sam dit que la musique est forte parce que les gens dansent, puis dit que les gens dansent parce que la musique est forte.`],
  [`Juno says the phone is dead because the screen is dark, then says the screen is dark because the phone is dead.`, `Juno dit que le telephone est mort parce que l ecran est noir, puis dit que l ecran est noir parce que le telephone est mort.`],
  [`Iris says the draft is messy because the ideas are unclear, then says the ideas are unclear because the draft is messy.`, `Iris dit que le brouillon est brouillon parce que les idees sont floues, puis dit que les idees sont floues parce que le brouillon est brouillon.`],
  [`Cole says the kitchen is warm because the oven is on, then says the oven is on because the kitchen is warm.`, `Cole dit que la cuisine est chaude parce que le four est allume, puis dit que le four est allume parce que la cuisine est chaude.`],
  [`Nora says the office is tense because nobody smiles, then says nobody smiles because the office is tense.`, `Nora dit que le bureau est tendu parce que personne ne sourit, puis dit que personne ne sourit parce que le bureau est tendu.`],
  [`Ari says the road is slippery because it rained, then says it rained because the road is slippery.`, `Ari dit que la route est glissante parce qu il a plu, puis dit qu il a plu parce que la route est glissante.`],
  [`Rita says the meeting is pointless because the agenda is short, then says the agenda is short because the meeting is pointless.`, `Rita dit que la reunion ne sert a rien parce que l ordre du jour est court, puis dit que l ordre du jour est court parce que la reunion ne sert a rien.`],
  [`Tia says the socks are wet because the floor is soaked, then says the floor is soaked because the socks are wet.`, `Tia dit que les chaussettes sont mouillees parce que le sol est trempe, puis dit que le sol est trempe parce que les chaussettes sont mouillees.`],
  [`Oli says the lunch was late because the kitchen was busy, then says the kitchen was busy because the lunch was late.`, `Oli dit que le déjeuner est arrive en retard parce que la cuisine etait occupee, puis dit que la cuisine etait occupee parce que le déjeuner est arrive en retard.`],
  [`Lara says the room is loud because the windows are open, then says the windows are open because the room is loud.`, `Lara dit que la piece est bruyante parce que les fenetres sont ouvertes, puis dit que les fenetres sont ouvertes parce que la piece est bruyante.`],
  [`Ben says the project is stuck because nobody replies, then says nobody replies because the project is stuck.`, `Ben dit que le projet est bloque parce que personne ne repond, puis dit que personne ne repond parce que le projet est bloque.`],
  [`Mina says the drawer is jammed because it is full, then says it is full because the drawer is jammed.`, `Mina dit que le tiroir est coince parce qu il est plein, puis dit qu il est plein parce que le tiroir est coince.`],
  [`Drew says the workshop is chaotic because the tools are everywhere, then says the tools are everywhere because the workshop is chaotic.`, `Drew dit que l atelier est chaotique parce que les outils sont partout, puis dit que les outils sont partout parce que l atelier est chaotique.`],
  [`Jade says the photo is blurry because the camera shook, then says the camera shook because the photo is blurry.`, `Jade dit que la photo est floue parce que l appareil a bouge, puis dit que l appareil a bouge parce que la photo est floue.`],
  [`Owen says the bread is stale because it sat out, then says it sat out because the bread is stale.`, `Owen dit que le pain est rassis parce qu il est reste dehors, puis dit qu il est reste dehors parce que le pain est rassis.`],
  [`Mila says the room is stuffy because the fan stopped, then says the fan stopped because the room is stuffy.`, `Mila dit que la piece est etouffante parce que le ventilateur s est arrete, puis dit que le ventilateur s est arrete parce que la piece est etouffante.`],
  [`Evan says the path is muddy because it rained, then says it rained because the path is muddy.`, `Evan dit que le chemin est boueux parce qu il a plu, puis dit qu il a plu parce que le chemin est boueux.`],
  [`Kira says the argument dragged on because nobody backed down, then says nobody backed down because the argument dragged on.`, `Kira dit que la dispute s eternisait parce que personne ne cédait, puis dit que personne ne cédait parce que la dispute s eternisait.`],
  [`Grant says the room is bright because the curtains are open, then says the curtains are open because the room is bright.`, `Grant dit que la piece est lumineuse parce que les rideaux sont ouverts, puis dit que les rideaux sont ouverts parce que la piece est lumineuse.`],
  [`Zara says the package is damaged because the box is bent, then says the box is bent because the package is damaged.`, `Zara dit que le colis est abime parce que la boite est tordue, puis dit que la boite est tordue parce que le colis est abime.`],
];

const OPTIONS_EN = ['Kettle Logic', 'False Dilemma', 'Circular Reasoning', 'Shifting the Burden of Proof'];
const OPTIONS_FR = ['Logique de la bouilloire', 'Fausse dichotomie', 'Raisonnement circulaire', 'Renversement de la charge de la preuve'];

function rotatedOptions(options: string[], correctIndex: number): string[] {
  const distractors = options.slice(1);
  const result = [...distractors];
  result.splice(correctIndex, 0, options[0]);
  return result;
}

function subLevelFor(index: number): SubLevel {
  if (index < 43) return SubLevel.BEGINNER;
  if (index < 50) return SubLevel.INTERMEDIATE;
  return SubLevel.EXPERT;
}

function createQuestions(language: 'en' | 'fr'): Question[] {
  return SCENARIOS.map(([english, french], index) => {
    const correctIndex = index % 4;
    const isFrench = language === 'fr';
    return {
      id: 38501 + index,
      level: 4,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Logique de la bouilloire' : 'Kettle Logic',
      difficulty: index < 43 ? 1 : index < 50 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais ou sophisme est montre ici ?' : 'Which bias or fallacy is shown here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? "La personne defend sa position avec des explications incompatibles entre elles."
        : 'The person defends a position with explanations that conflict with each other.',
      detailedExplanationBeginner: isFrench
        ? 'On accepte plusieurs excuses qui ne peuvent pas toutes etre vraies en meme temps.'
        : 'Multiple excuses are accepted even though they cannot all be true at once.',
      detailedExplanationIntermediate: isFrench
        ? "La logique de la bouilloire consiste a utiliser des justifications contradictoires pour proteger la meme conclusion."
        : 'Kettle logic uses contradictory justifications to protect the same conclusion.',
      detailedExplanationExpert: isFrench
        ? "Le sophisme apparait lorsqu une personne tente d eviter la critique en empilant des raisons incompatibles: la defense se fragmente, mais la conclusion est gardee intacte."
        : 'The fallacy appears when a person avoids criticism by stacking incompatible reasons: the defense fragments, but the conclusion is kept intact.',
      questionFormat: 'standard',
    };
  });
}

export const KETTLE_LOGIC_EXPANSION_EN: Question[] = createQuestions('en');
export const KETTLE_LOGIC_EXPANSION_FR: Question[] = createQuestions('fr');
