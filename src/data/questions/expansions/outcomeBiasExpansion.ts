import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says the driver was reckless because the trip ended with no crash, even though the driver was following the rules the whole time.', 'Maya dit que le chauffeur était imprudent parce que le trajet s est terminé sans accident, alors que le chauffeur respectait les règles tout le temps.'],
  ['Leo calls the decision stupid because the project failed, even though the team made a careful choice with the information they had.', 'Leo dit que la décision est stupide parce que le projet a échoué, alors que l équipe a fait un choix réfléchi avec les informations dont elle disposait.'],
  ['Priya says the nurse made a bad call because the patient got worse afterward, ignoring that the treatment was the standard one.', 'Priya dit que l infirmière a pris une mauvaise décision parce que le patient a empiré ensuite, en ignorant que le traitement était celui recommandé.'],
  ['Omar says the gamble was wise because it paid off, even though the odds were terrible from the start.', 'Omar dit que le pari était sage parce qu il a rapporté, alors que les chances étaient mauvaises dès le départ.'],
  ['Rina says the test answer was brilliant because it got lucky credit, even though the reasoning was flawed.', 'Rina dit que la réponse au test était brillante parce qu elle a obtenu de la chance, alors que le raisonnement était défectueux.'],
  ['Ben says the parent should have known better because the kid was fine after falling, ignoring that the parent reacted quickly and correctly.', 'Ben dit que le parent aurait dû mieux savoir parce que l enfant allait bien après la chute, en ignorant que le parent a réagi vite et correctement.'],
  ['Zoe says the coach made the wrong call because the team still lost, even though the play was sound.', 'Zoé dit que l entraîneur a fait le mauvais choix parce que l équipe a quand même perdu, alors que le jeu était solide.'],
  ['Kai says the investor was foolish because the stock dropped, even though the research behind the decision was reasonable.', 'Kai dit que l investisseur était stupide parce que l action a chuté, alors que la recherche derrière la décision était raisonnable.'],
  ['Nora says the doctor was careless because the patient recovered slowly, even though the treatment plan was medically appropriate.', 'Nora dit que le médecin était négligent parce que le patient a guéri lentement, alors que le plan de traitement était médicalement approprié.'],
  ['Eli says the student guessed the answer because it was wrong, even though the student used a good method.', 'Eli dit que l élève a deviné la réponse parce qu elle était fausse, alors que l élève a utilisé une bonne méthode.'],
  ['Lina says the friend should have stayed home because the picnic got rained on, even though the forecast had looked safe at the time.', 'Lina dit que l amie aurait dû rester à la maison parce que le pique-nique a été arrosé par la pluie, alors que la météo semblait sûre au moment du départ.'],
  ['Grant says the mechanic made a bad recommendation because the car still had trouble later, even though the fix was correct and another part failed.', 'Grant dit que le mécanicien a donné un mauvais conseil parce que la voiture a encore eu des problèmes plus tard, alors que la réparation était correcte et qu une autre pièce a lâché.'],
  ['Tia says the cashier was incompetent because the line moved slowly, even though the delay came from a card outage.', 'Tia dit que la caissière était incompétente parce que la file avançait lentement, alors que le retard venait d une panne de carte.'],
  ['Noah says the traveler was foolish because the flight was delayed, even though the traveler chose the best available option.', 'Noah dit que le voyageur était fou parce que le vol a été retardé, alors que le voyageur a choisi la meilleure option disponible.'],
  ['Mia says the babysitter was bad because the child cried, even though the crying was normal and short.', 'Mia dit que la baby-sitter était mauvaise parce que l enfant a pleuré, alors que les pleurs étaient normaux et brefs.'],
  ['Jules says the manager was irresponsible because the meeting ran long, even though the agenda had extra items added at the last minute.', 'Jules dit que la responsable était irresponsable parce que la réunion a duré longtemps, alors que l ordre du jour avait reçu des éléments ajoutés à la dernière minute.'],
  ['Ava says the rescue plan was a mistake because the ending was messy, even though the plan saved lives.', 'Ava dit que le plan de secours était une erreur parce que la fin a été chaotique, alors que le plan a sauvé des vies.'],
  ['Finn says the chef did a poor job because the dish got one bad review, even though the recipe and execution were strong.', 'Finn dit que le chef a mal travaillé parce que le plat a reçu un mauvais avis, alors que la recette et l exécution étaient solides.'],
  ['Mina says the teacher was unfair because the class disliked the quiz, even though the quiz matched the lesson.', 'Mina dit que l enseignante était injuste parce que la classe n a pas aimé le quiz, alors que le quiz correspondait au cours.'],
  ['Theo says the driver should not have taken the shortcut because the road was blocked, ignoring that the route was the sensible choice at the time.', 'Theo dit que le conducteur n aurait pas dû prendre le raccourci parce que la route était bloquée, en ignorant que l itinéraire était le choix sensé à ce moment-là.'],
  ['Juno says the volunteer made a bad decision because the shelter ended up overcrowded, even though the volunteer followed the requested plan.', 'Juno dit que la bénévole a pris une mauvaise décision parce que le refuge est devenu surchargé, alors que la bénévole a suivi le plan demandé.'],
  ['Iris says the product reviewer was wrong because the item broke later, even though the review was based on how it worked then.', 'Iris dit que l évaluatrice du produit s est trompée parce que l article s est cassé plus tard, alors que l avis était fondé sur son état à ce moment-là.'],
  ['Cole says the host made a bad call because the guests left early, even though the schedule changes were outside the host’s control.', 'Cole dit que l hôte a pris une mauvaise décision parce que les invités sont partis tôt, alors que les changements d horaire étaient hors du contrôle de l hôte.'],
  ['Riley says the emergency drill was pointless because no one got hurt, even though that was the whole goal.', 'Riley dit que l exercice d urgence était inutile parce que personne n a été blessé, alors que c était justement le but.'],
  ['Pia says the gambler was smart because the bet won, ignoring that the strategy was still terrible.', 'Pia dit que le joueur était malin parce que le pari a gagné, en ignorant que la stratégie était quand même mauvaise.'],
  ['Hugo says the navigator was clueless because the trip took longer, even though the road closure was unpredictable.', 'Hugo dit que le navigateur était perdu parce que le trajet a pris plus de temps, alors que la fermeture de route était imprévisible.'],
  ['Sam says the parent made the wrong call because the child got muddy, even though the child had fun and was safe.', 'Sam dit que le parent a pris la mauvaise décision parce que l enfant est arrivé couvert de boue, alors que l enfant s est amusé et était en sécurité.'],
  ['Jade says the study plan failed because the final grade was only average, even though it improved the student significantly.', 'Jade dit que le plan d étude a échoué parce que la note finale n était qu moyenne, alors qu il a beaucoup aidé l élève.'],
  ['Owen says the artist was not talented because the first show sold poorly, even though the art itself was strong.', 'Owen dit que l artiste n avait pas de talent parce que le premier spectacle s est mal vendu, alors que l art lui-même était fort.'],
  ['Lea says the waiter made a mistake because the table complained, even though the complaint came from a separate billing issue.', 'Léa dit que le serveur a fait une erreur parce que la table s est plainte, alors que la plainte venait d un autre problème de facture.'],
  ['Maya says the bus driver was reckless because the passengers arrived late, even though the traffic jam caused the delay.', 'Maya dit que le chauffeur de bus était imprudent parce que les passagers sont arrivés en retard, alors que l embouteillage a causé le retard.'],
  ['Ben says the coworker was lazy because the report got rejected, even though the report was rejected for a formatting glitch.', 'Ben dit que le collègue était paresseux parce que le rapport a été rejeté, alors que le rapport a été rejeté à cause d un problème de format.'],
  ['Ava says the hiker made a bad decision because the weather turned, even though the forecast had been clear when they left.', 'Ava dit que la randonneuse a pris une mauvaise décision parce que la météo a changé, alors que les prévisions étaient claires au départ.'],
  ['Omar says the programmer was sloppy because the app crashed later, even though a server outage caused it.', 'Omar dit que le programmeur était négligent parce que l application a planté plus tard, alors qu une panne de serveur en était la cause.'],
  ['Nina says the parent was overprotective because the child stayed clean, even though the child had simply played indoors.', 'Nina dit que le parent était trop protecteur parce que l enfant est resté propre, alors que l enfant avait simplement joué à l intérieur.'],
  ['Eli says the teacher should have trusted the other group because they got the better grade, even though the question sets were different.', 'Eli dit que l enseignante aurait dû faire confiance à l autre groupe parce qu il a eu la meilleure note, alors que les sujets étaient différents.'],
  ['Lina says the driver made a poor choice because the trip succeeded only after a detour, ignoring that the detour was the safe route.', 'Lina dit que le conducteur a fait un mauvais choix parce que le trajet n a réussi qu après un détour, en ignorant que le détour était la route sûre.'],
  ['Grant says the nurse should be blamed because the patient improved, even though the patient improved because the treatment worked.', 'Grant dit qu il faut blâmer l infirmière parce que le patient a été mieux, alors que le patient a été mieux parce que le traitement a fonctionné.'],
  ['Tia says the referee was wrong because the game ended in a loss, even though the call matched the rules.', 'Tia dit que l arbitre avait tort parce que le match s est terminé par une défaite, alors que la décision respectait les règles.'],
  ['Finn says the traveler was careless because the hotel was noisy, even though the hotel choice was the only affordable one.', 'Finn dit que le voyageur était négligent parce que l hôtel était bruyant, alors que le choix de l hôtel était le seul abordable.'],
  ['Mina says the restaurant host was bad because the meal got mixed reviews, even though the host only managed seating.', 'Mina dit que l hôte du restaurant était mauvais parce que le repas a reçu des avis mitigés, alors que l hôte gérait seulement les places.'],
  ['Theo says the parent made the wrong move because the birthday gift was unpopular, even though it was the safest option.', 'Theo dit que le parent a fait le mauvais choix parce que le cadeau d anniversaire n a pas plu, alors que c était l option la plus sûre.'],
  ['Juno says the support agent was bad because the customer left angry, even though the anger came from a separate policy issue.', 'Juno dit que l agent de support était mauvais parce que le client est parti en colère, alors que la colère venait d une autre politique.'],
  ['Iris says the coach made a mistake because the game was lost, even though the coach made the right tactical call.', 'Iris dit que l entraîneuse a fait une erreur parce que le match a été perdu, alors que l entraîneuse a pris la bonne décision tactique.'],
  ['Cole says the scientist was reckless because the experiment failed, even though the failure taught everyone something useful.', 'Cole dit que la scientifique était imprudente parce que l expérience a échoué, alors que l échec a enseigné quelque chose d utile à tout le monde.'],
  ['Riley says the delivery person was careless because the package arrived late, even though the road closure was the real issue.', 'Riley dit que le livreur était négligent parce que le colis est arrivé en retard, alors que la fermeture de la route était le vrai problème.'],
  ['Pia says the student was dumb because the answer did not work, even though the reasoning was the best available guess.', 'Pia dit que l élève était bête parce que la réponse n a pas marché, alors que le raisonnement était la meilleure hypothèse disponible.'],
  ['Hugo says the landlord made a bad call because the repair ended up expensive, even though the broken pipe was hidden behind the wall.', 'Hugo dit que le propriétaire a pris une mauvaise décision parce que la réparation a fini chère, alors que le tuyau cassé était caché derrière le mur.'],
  ['Sam says the organizer was irresponsible because the outdoor event got rained out, even though the weather changed at the last minute.', 'Sam dit que l organisateur était irresponsable parce que l événement extérieur a été gâché par la pluie, alors que la météo a changé à la dernière minute.'],
  ['Jade says the friend was foolish because the shortcut failed, even though the shortcut looked safe at the time.', 'Jade dit que l amie était folle parce que le raccourci a échoué, alors qu il semblait sûr à ce moment-là.'],
  ['Maya says the choice was bad because the day ended awkwardly, even though the plan was sound when it started.', 'Maya dit que le choix était mauvais parce que la journée s est terminée bizarrement, alors que le plan était solide au départ.'],
  ['Ben says the team leader should have predicted the outage, even though nobody could have known the grid would fail.', 'Ben dit que le chef d équipe aurait dû prévoir la panne, alors que personne ne pouvait savoir que le réseau tomberait en panne.'],
  ['Ava says the doctor was careless because the patient felt worse before improving, even though the treatment was still the correct one.', 'Ava dit que le médecin était négligent parce que le patient s est senti plus mal avant d aller mieux, alors que le traitement était quand même le bon.'],
  ['Sophie says the teacher was wrong because the class got quiet after the quiz, even though the quiz was fair and useful.', 'Sophie dit que le professeur avait tort parce que la classe est devenue silencieuse après le quiz, alors que le quiz était juste et utile.'],
  ['Liam says the gamble was smart because it hit the jackpot, even though it was still a reckless gamble.', 'Liam dit que le pari était intelligent parce quil a touché le jackpot, alors que c était quand même un pari risqué.'],
  ['Emma says the manager made a great call because the sales spike followed, even though the spike came from a holiday sale.', 'Emma dit que la responsable a pris une excellente décision parce que les ventes ont ensuite bondi, alors que la hausse venait d une vente de vacances.'],
  ['Diego says the parent was foolish because the toddler got messy, even though the child had been safe and happy.', 'Diego dit que le parent était fou parce que le tout-petit s est sali, alors que l enfant était en sécurité et content.'],
  ['Lily says the driver was irresponsible because the trip took longer, even though a road closure caused the delay.', 'Lily dit que le chauffeur était irresponsable parce que le trajet a pris plus de temps, alors qu une fermeture de route a causé le retard.'],
  ['Hassan says the chef made the wrong choice because the dish got mixed reviews, even though the ingredient swap was reasonable.', 'Hassan dit que le chef a fait le mauvais choix parce que le plat a reçu des avis partagés, alors que le changement d ingrédient était raisonnable.'],
  ['Ruby says the student guessed because the answer was wrong, even though the reasoning was careful and logical.', 'Ruby dit que l élève a deviné parce que la réponse était fausse, alors que le raisonnement était prudent et logique.'],
  ['Noah says the coach should be blamed because the team lost, even though the tactic was the right one for the matchup.', 'Noah dit que l entraîneur doit être blâmé parce que l équipe a perdu, alors que la tactique était la bonne pour ce match.'],
  ['Chloe says the investor was a genius because the stock rose, even though the rise came from a market-wide bounce.', 'Chloe dit que l investisseur était un génie parce que l action a monté, alors que la hausse venait d un rebond général du marché.'],
  ['Yusuf says the nurse was careless because the patient recovered slowly, even though the treatment usually takes time.', 'Yusuf dit que l infirmière était négligente parce que le patient a guéri lentement, alors que le traitement prend normalement du temps.'],
  ['Maya says the friend should have stayed home because the picnic got rained on, even though the forecast had looked fine.', 'Maya dit que l amie aurait dû rester à la maison parce que le pique-nique a été arrosé par la pluie, alors que les prévisions semblaient bonnes.'],
  ['Lucas says the app developer was wrong because the update led to complaints, even though the complaints were about a separate bug.', 'Lucas dit que la développeuse de l application avait tort parce que la mise à jour a provoqué des plaintes, alors que les plaintes concernaient un autre bug.'],
  ['Ari says the volunteer made a bad choice because the shelter ended overcrowded, even though the plan was the best available.', 'Ari dit que la bénévole a fait un mauvais choix parce que le refuge a fini surchargé, alors que le plan était le meilleur disponible.'],
  ['Mina says the cashier was incompetent because the line was slow, even though the delay came from a card outage.', 'Mina dit que la caissière était incompétente parce que la file avançait lentement, alors que le retard venait d une panne de carte.'],
  ['Owen says the hiker was reckless because the weather turned, even though the hike started under clear skies.', 'Owen dit que la randonneuse était imprudente parce que la météo a changé, alors que la randonnée a commencé sous un ciel dégagé.'],
  ['Zara says the artist was not talented because the first show sold poorly, even though the art itself was strong.', 'Zara dit que l artiste n avait pas de talent parce que le premier spectacle s est mal vendu, alors que l art lui-même était solide.'],
  ['Ben says the family vacation was a mistake because one day was rainy, even though the trip was planned carefully.', 'Ben dit que les vacances en famille étaient une erreur parce qu une journée était pluvieuse, alors que le voyage avait été planifié avec soin.'],
  ['Nora says the doctor made the wrong call because the patient got worse before improving, even though that pattern was expected.', 'Nora dit que le médecin a pris la mauvaise décision parce que le patient a empiré avant d aller mieux, alors que ce schéma était attendu.'],
  ['Eli says the delivery driver was bad because the package arrived late, even though the road closure caused it.', 'Eli dit que le livreur était mauvais parce que le colis est arrivé en retard, alors que la fermeture de la route en était la cause.'],
  ['Pia says the school project failed because the final poster looked messy, even though the research was excellent.', 'Pia dit que le projet scolaire a échoué parce que l affiche finale avait l air brouillonne, alors que la recherche était excellente.'],
  ['Theo says the neighbor was irresponsible because the barbecue ended early, even though the wind picked up unexpectedly.', 'Theo dit que le voisin était irresponsable parce que le barbecue s est terminé tôt, alors que le vent a soufflé de manière inattendue.'],
  ['Juno says the nurse was bad because the patient felt discomfort after treatment, even though that discomfort was normal.', 'Juno dit que l infirmière était mauvaise parce que le patient a ressenti une gêne après le traitement, alors que cette gêne était normale.'],
  ['Iris says the traveler was foolish because the flight was delayed, even though the traveler booked the safest option.', 'Iris dit que le voyageur était fou parce que le vol a été retardé, alors que le voyageur avait réservé l option la plus sûre.'],
  ['Cole says the parent made a poor choice because the kid had mud on their shoes, even though the kid had fun and stayed safe.', 'Cole dit que le parent a fait un mauvais choix parce que l enfant avait de la boue sur ses chaussures, alors que l enfant s est amusé et est resté en sécurité.'],
  ['Riley says the study plan was a failure because the grade was only average, even though the student improved a lot.', 'Riley dit que le plan d étude a été un échec parce que la note était seulement moyenne, alors que l élève a beaucoup progressé.'],
  ['Pia says the chef was lucky because the soup got a good review, even though the soup was made with skill.', 'Pia dit que le chef a eu de la chance parce que la soupe a reçu un bon avis, alors que la soupe était préparée avec talent.'],
  ['Hugo says the organizer was bad because the outdoor event got rained out, even though the weather changed at the last minute.', 'Hugo dit que l organisateur était mauvais parce que l événement en plein air a été gâché par la pluie, alors que la météo a changé à la dernière minute.'],
  ['Sam says the decision was stupid because it led to a messy ending, even though it was the least risky option.', 'Sam dit que la décision était stupide parce qu elle a mené à une fin chaotique, alors que c était l option la moins risquée.'],
  ['Jade says the teacher was wrong because the class disliked the quiz, even though the quiz matched the lesson.', 'Jade dit que le professeur avait tort parce que la classe n a pas aimé le quiz, alors que le quiz correspondait au cours.'],
  ['Owen says the rescue plan was a disaster because the scene looked chaotic, even though it saved lives.', 'Owen dit que le plan de secours était un désastre parce que la scène paraissait chaotique, alors qu il a sauvé des vies.'],
  ['Lea says the navigator was clueless because the trip took longer, even though there was an unexpected lane closure.', 'Lea dit que le navigateur était perdu parce que le trajet a pris plus de temps, alors qu il y avait une fermeture de voie imprévue.'],
  ['Maya says the student cheated because the answer was wrong, even though the student showed all the work.', 'Maya dit que l élève a triché parce que la réponse était fausse, alors que l élève a montré tout le travail.'],
  ['Ben says the mechanic was bad because the car still broke later, even though another part failed.', 'Ben dit que le mécanicien était mauvais parce que la voiture est encore tombée en panne plus tard, alors qu une autre pièce a lâché.'],
  ['Ava says the host was incompetent because guests left early, even though the schedule changed unexpectedly.', 'Ava dit que l hôte était incompétent parce que les invités sont partis tôt, alors que l horaire a changé de manière imprévue.'],
  ['Omar says the volunteer made the wrong move because the shelter got crowded, even though the volunteer followed the request.', 'Omar dit que la bénévole a fait le mauvais choix parce que le refuge est devenu bondé, alors que la bénévole a suivi la demande.'],
  ['Nina says the driver was reckless because the route took longer, even though traffic was the real problem.', 'Nina dit que la conductrice était imprudente parce que l itinéraire a pris plus de temps, alors que le trafic était le vrai problème.'],
  ['Eli says the scientist was careless because the experiment failed, even though the failure taught everyone something useful.', 'Eli dit que la scientifique était négligente parce que l expérience a échoué, alors que l échec a appris quelque chose d utile à tout le monde.'],
  ['Lina says the friend was foolish because the shortcut failed, even though the shortcut looked fine at the time.', 'Lina dit que l amie était folle parce que le raccourci a échoué, alors qu il semblait correct à ce moment-là.'],
  ['Grant says the parent was wrong because the child got messy, even though the child was playing happily.', 'Grant dit que le parent avait tort parce que l enfant s est sali, alors que l enfant jouait joyeusement.'],
  ['Tia says the planner was bad because the day ended awkwardly, even though the plan was sound when it started.', 'Tia dit que le planificateur était mauvais parce que la journée s est terminée bizarrement, alors que le plan était solide au départ.'],
  ['Finn says the doctor made a mistake because the patient felt worse before better, even though that was expected.', 'Finn dit que le médecin a fait une erreur parce que le patient s est senti plus mal avant d aller mieux, alors que c était attendu.'],
  ['Mina says the team leader was careless because the outage happened, even though nobody could have predicted it.', 'Mina dit que le chef d équipe était négligent parce que la panne est arrivée, alors que personne ne pouvait la prévoir.'],
  ['Theo says the route choice was wrong because the trip ended late, even though the route was the safest one.', 'Theo dit que le choix d itinéraire était mauvais parce que le trajet s est terminé tard, alors que l itinéraire était le plus sûr.'],
  ['Juno says the baker was dumb because the cookie batch burned, even though the oven thermostat had failed.', 'Juno dit que la boulangère était bête parce que la fournée de biscuits a brûlé, alors que le thermostat du four était défaillant.'],
  ['Iris says the organizer was bad because the fundraiser got less money than hoped, even though the event was well-run.', 'Iris dit que l organisatrice était mauvaise parce que la collecte a rapporté moins d argent qu espéré, alors que l événement était bien organisé.'],
  ['Cole says the bus driver was incompetent because the route arrived late, even though the delay came from a bridge closure.', 'Cole dit que le chauffeur de bus était incompétent parce que le trajet est arrivé en retard, alors que le retard venait de la fermeture d un pont.'],
  ['Riley says the parent made the wrong call because the birthday cake fell, even though the baker had stacked it badly beforehand.', 'Riley dit que le parent a pris la mauvaise décision parce que le gâteau d anniversaire est tombé, alors que le pâtissier l avait mal empilé avant.'],
];

const OPTIONS_EN = ['Outcome Bias', 'Hindsight Bias', 'Moral Luck', 'Availability Heuristic'];
const OPTIONS_FR = ['Biais de résultat', 'Biais rétrospectif', 'Chance morale', 'Heuristique de disponibilité'];

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
      id: 43951 + index,
      level: 5,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? 'Biais de résultat' : 'Outcome Bias',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'On juge la qualité d une décision uniquement à partir du résultat final.'
        : 'A decision is judged only by its final outcome.',
      detailedExplanationBeginner: isFrench
        ? 'Un bon choix peut quand meme finir mal.'
        : 'A good choice can still end badly.',
      detailedExplanationIntermediate: isFrench
        ? "Le biais de résultat consiste à confondre le processus et l issue: un mauvais résultat ne prouve pas que la décision était mauvaise."
        : 'Outcome bias confuses process and result: a bad outcome does not prove the decision was bad.',
      detailedExplanationExpert: isFrench
        ? "Ce biais pousse à réévaluer une décision après coup en fonction de sa chance ou de son issue, au lieu d examiner les informations disponibles au moment où la décision a été prise. Il pénalise les décisions prudentes qui finissent mal et récompense parfois des paris risqués qui réussissent par hasard. L évaluation correcte doit mesurer la qualité du raisonnement, la gestion du risque et le contexte réel, pas seulement le verdict final."
        : 'This bias pushes people to reevaluate a decision after the fact according to luck or outcome, instead of examining the information available when the choice was made. It punishes prudent decisions that end badly and sometimes rewards risky bets that happened to work. Proper evaluation should measure reasoning quality, risk management, and the real context, not just the final verdict.',
      questionFormat: 'standard',
    };
  });
}

export const OUTCOME_BIAS_EXPANSION_EN: Question[] = createQuestions('en');
export const OUTCOME_BIAS_EXPANSION_FR: Question[] = createQuestions('fr');
