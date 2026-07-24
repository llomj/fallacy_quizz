import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['After the store runs out of apples, Maya says she knew the shipment would fail by Tuesday.', 'Apres que le magasin est en rupture de pommes, Maya dit qu elle savait que la livraison allait echouer mardi.'],
  ['Leo reads the weather app after the picnic and says the rain was obvious all along from the start.', 'Leo lit l application meteo apres le pique-nique et dit que la pluie etait evidente depuis le debut.'],
  ['Nina hears about a broken elevator and says the building was obviously unsafe.', 'Nina entend parler d un ascenseur en panne et dit que le batiment etait evidemment dangereux.'],
  ['Owen sees the team lose and says he knew the coach picked the wrong strategy.', 'Owen voit l equipe perdre et dit qu il savait que l entraineur avait choisi la mauvaise strategie.'],
  ['Priya gets the answer key and says the quiz was clearly easy the whole time.', 'Priya recoit le corrigé et dit que le quiz etait clairement facile depuis le debut.'],
  ['Ben misses the train and says he knew the schedule would not work.', 'Ben rate le train et dit qu il savait que l horaire ne fonctionnerait pas.'],
  ['Tara sees a movie twist and says she saw it coming from the start.', 'Tara voit un retournement de film et dit qu elle l avait vu venir depuis le debut.'],
  ['Kai hears the company fire the manager and says the warning signs were obvious.', 'Kai entend que l entreprise renvoie le directeur et dit que les signes etaient evidents.'],
  ['Jules says the recipe failure was predictable after the meal is ruined.', 'Jules dit que l echec de la recette etait previsible une fois le repas rate.'],
  ['Ava watches the game end badly and says the loss made perfect sense all along.', 'Ava regarde le match se terminer mal et dit que la defaite avait parfaitement du sens depuis le debut.'],
  ['Noah says the test score was unsurprising after he sees the final grade.', 'Noah dit que la note etait sans surprise apres avoir vu la note finale.'],
  ['Mina says the traffic jam was obvious after she arrives late.', 'Mina dit que l embouteillage etait evident apres etre arrivee en retard.'],
  ['Eli says the app crash was easy to predict once the update fails.', 'Eli dit que le plantage de l application etait facile a prevoir une fois la mise a jour ratee.'],
  ['Rina says the argument ending badly was inevitable after it is over.', 'Rina dit que la dispute qui finit mal etait inevitable une fois terminee.'],
  ['Hugo says the old chair breaking was not a surprise after it already falls apart.', 'Hugo dit que la vieille chaise qui casse n etait pas une surprise une fois qu elle s est deja effondree.'],
  ['Lina says the restaurant closing was the obvious outcome after it shuts down.', 'Lina dit que la fermeture du restaurant etait l issue evidente apres sa fermeture.'],
  ['Grant says the pitch failing was predictable once the investor says no.', 'Grant dit que la proposition allait echouer une fois que l investisseur a dit non.'],
  ['Zoe says the class drama was easy to foresee after everyone starts gossiping.', 'Zoe dit que le drame en classe etait facile a prevoir une fois que tout le monde commence a ragoter.'],
  ['Milo says the power outage was bound to happen after the lights go out.', 'Milo dit que la panne de courant devait arriver une fois les lumières eteintes.'],
  ['Theo says the car trouble was obvious after the engine stalls.', 'Theo dit que le probleme de voiture etait evident une fois le moteur cale.'],
  ['Pia says the project failure was obvious now that the deadline is missed.', 'Pia dit que l echec du projet etait evident maintenant que la date limite est depassee.'],
  ['Finn says the bad review was expected after the customer already complains.', 'Finn dit que le mauvais avis etait attendu une fois que le client se plaint deja.'],
  ['Maya says the team breakup was inevitable after the last meeting ends badly.', 'Maya dit que la rupture de l equipe etait inevitable apres la mauvaise fin de la derniere reunion.'],
  ['Sam says the game strategy was flawed because the team lost, so it had to be wrong.', 'Sam dit que la strategie du jeu etait defectueuse parce que l equipe a perdu, donc elle devait etre mauvaise.'],
  ['Juno says the interview went badly exactly as she "always knew" it would.', 'Juno dit que l entretien s est mal passe exactement comme elle le "savait" depuis le debut.'],
  ['Iris says the scooter battery dying was expected after it stops mid-ride.', 'Iris dit que la batterie du scooter qui se vide etait attendue une fois qu il s arrete en route.'],
  ['Cole says the bakery line was obvious after everyone is already waiting.', 'Cole dit que la file de la boulangerie etait evidente une fois que tout le monde attend deja.'],
  ['Nora says the garden pests were predictable after the plants get eaten.', 'Nora dit que les parasites du jardin etaient previsibles une fois les plantes mangees.'],
  ['Ari says the fundraiser failing was no surprise after donations stop coming in.', 'Ari dit que l echec de la collecte n etait pas une surprise une fois que les dons cessent d arriver.'],
  ['Rita says the meeting being boring was obvious after people start checking phones.', 'Rita dit que la reunion etait ennuyeuse une fois que les gens commencent a regarder leur telephone.'],
  ['Tia says the bus delay was easy to call after the bus is already late.', 'Tia dit que le retard du bus etait facile a deviner une fois le bus deja en retard.'],
  ['Oli says the campsite getting muddy was predictable after the rain finally arrives.', 'Oli dit que le campement allait devenir boueux une fois la pluie enfin arrivee.'],
  ['Lara says the phone breaking was inevitable after it stops charging.', 'Lara dit que le telephone devait casser une fois qu il ne charge plus.'],
  ['Ben says the class presentation flop was obvious after the projector fails.', 'Ben dit que l echec de la presentation etait evident une fois le projecteur en panne.'],
  ['Mina says the team confusion was obvious after nobody understands the instructions.', 'Mina dit que la confusion de l equipe etait evidente une fois que personne ne comprend les consignes.'],
  ['Drew says the fundraiser success was always guaranteed after the crowd appears.', 'Drew dit que le succes de la collecte etait toujours garanti une fois la foule arrivee.'],
  ['Jade says the bad date was predictable after the conversation goes silent.', 'Jade dit que le mauvais rendez-vous etait previsible une fois que la conversation se tait.'],
  ['Owen says the checkout problem was obvious after the card reader freezes.', 'Owen dit que le probleme de caisse etait evident une fois que le lecteur de carte se bloque.'],
  ['Mila says the quiz was too easy after she already sees her perfect score.', 'Mila dit que le quiz etait trop facile une fois qu elle voit deja son score parfait.'],
  ['Evan says the plan collapse was no surprise after the first person leaves.', 'Evan dit que l effondrement du plan n etait pas une surprise une fois que la premiere personne part.'],
  ['Kira says the garden watering mistake was obvious after the flowers wilt.', 'Kira dit que l erreur d arrosage du jardin etait evidente une fois les fleurs fanes.'],
  ['Grant says the store sale was the right call after the stock clears out.', 'Grant dit que la promotion du magasin etait la bonne decision une fois le stock ecoule.'],
  ['Zara says the camping trip weather was obvious after the tent leaks.', 'Zara dit que la meteo du camping etait evidente une fois que la tente fuit.'],
  ['Parker says the budget was doomed after the numbers stop balancing.', 'Parker dit que le budget etait condamne une fois que les chiffres cessent de s equilibrer.'],
  ['Hana says the handshake deal was bad after the agreement falls apart.', 'Hana dit que l accord verbal etait mauvais une fois qu il s ecroule.'],
  ['Leo says the class prank was obviously going to get caught after the teacher walks in.', 'Leo dit que la farce de classe allait evidemment etre decouverte une fois que le professeur entre.'],
  ['Maya says the new route was obviously faster after the commute improves.', 'Maya dit que le nouvel itineraire etait evidemment plus rapide une fois que le trajet s ameliore.'],
  ['Nina says the chat rule was necessary after the argument explodes.', 'Nina dit que la regle du chat etait necessaire une fois que la dispute eclate.'],
  ['Owen says the old laptop slowing down was predictable after it freezes.', 'Owen dit que le vieux portable qui ralentit etait previsible une fois qu il se fige.'],
  ['Priya says the picnic weather was "obviously" going to be bad after clouds gather.', 'Priya dit que le temps du pique-nique allait "evidemment" etre mauvais une fois les nuages rassembles.'],
  ['Ben says the group project failure was obvious after the final slide is missing.', 'Ben dit que l echec du projet de groupe etait evident une fois la derniere diapositive manquante.'],
  ['Maya says the market crash was easy to predict after the chart already drops.', 'Maya dit que le krach boursier etait facile a prevoir une fois que le graphique a deja baisse.'],
  ['Ben says the spelling bee loss was obvious after the final round ends badly.', 'Ben dit que la defaite au concours d orthographe etait evidente une fois que la derniere manche se termine mal.'],
  ['Priya says the picnic rain was "always coming" after the umbrella opens.', 'Priya dit que la pluie du pique-nique allait "forcément" arriver une fois le parapluie ouvert.'],
  ['Noah says the committee breakup was predictable after the meeting already falls apart.', 'Noah dit que la rupture du comite etait previsible une fois la reunion deja en train de s effondrer.'],
  ['Lina says the app review was obvious after the star rating tanks.', 'Lina dit que la critique de l application etait evidente une fois que la note chute.'],
  ['Theo says the soccer loss made sense after the red card is shown.', 'Theo dit que la defaite au football avait du sens une fois que le carton rouge est sorti.'],
  ['Ava says the friendship fallout was "clear" after the last message goes unanswered.', 'Ava dit que la dispute entre amis etait "claire" une fois que le dernier message reste sans reponse.'],
  ['Omar says the concert delay was bound to happen after the stage lights fail.', 'Omar dit que le retard du concert devait arriver une fois que les lumieres de scene tombent en panne.'],
  ['Rita says the dessert disaster was obvious after the oven timer breaks.', 'Rita dit que le desastre du dessert etait evident une fois que le minuteur du four casse.'],
  ['Jules says the meeting ran long because it was "obviously" going to after the agenda ballooned.', 'Jules dit que la reunion a dure longtemps parce qu elle allait "evidemment" durer ainsi une fois l ordre du jour allonge.'],
  ['Maya says the group project collapse was obvious after the first disagreement shows up.', 'Maya dit que l effondrement du projet de groupe etait evident une fois le premier desaccord apparu.'],
  ['Leo says the café line was predictable after the barista gets overwhelmed.', 'Leo dit que la file du café etait previsible une fois que le barista est deborde.'],
  ['Nina says the road trip detour was inevitable after the GPS reroutes once.', 'Nina dit que le detour du voyage etait inevitable une fois que le GPS reroute.'],
  ['Owen says the app bug was obvious after the update crashes on one phone.', 'Owen dit que le bug de l application etait evident une fois que la mise a jour plante sur un telephone.'],
  ['Priya says the class debate went badly because the argument was doomed from the start.', 'Priya dit que le debat de classe s est mal passe parce que l argument etait condamne depuis le debut.'],
  ['Ben says the rainstorm was easy to see coming after the sidewalk is wet.', 'Ben dit que l orage etait facile a voir venir une fois que le trottoir est mouille.'],
  ['Tara says the fundraiser success was obvious after the final donation comes in.', 'Tara dit que le succes de la collecte etait evident une fois le dernier don arrive.'],
  ['Kai says the team breakup was predictable after the last message is sent.', 'Kai dit que la rupture de l equipe etait previsible une fois le dernier message envoye.'],
  ['Jules says the class test was clearly going to be hard after the first question feels tricky.', 'Jules dit que le test de classe allait clairement etre difficile une fois que la premiere question semble piégeuse.'],
  ['Ava says the parking app failure was obvious after the screen freezes.', 'Ava dit que la panne de l application de stationnement etait evidente une fois l ecran figé.'],
  ['Noah says the plan falling apart was inevitable after the first person backs out.', 'Noah dit que l effondrement du plan etait inevitable une fois que la premiere personne se retire.'],
  ['Mina says the presentation flop was easy to predict after the projector flickers.', 'Mina dit que l echec de la presentation etait facile a prevoir une fois que le projecteur scintille.'],
  ['Eli says the meeting going long was obvious after the agenda keeps growing.', 'Eli dit que la reunion qui dure longtemps etait evidente une fois que l ordre du jour continue de grossir.'],
  ['Rina says the movie twist was clear after the villain appears twice.', 'Rina dit que le retournement du film etait clair une fois que le vilain apparait deux fois.'],
  ['Hugo says the project delay was bound to happen after the client changes one thing.', 'Hugo dit que le retard du projet devait arriver une fois que le client change une chose.'],
  ['Lina says the restaurant issue was obvious after the waiter drops one plate.', 'Lina dit que le probleme du restaurant etait evident une fois que le serveur fait tomber une assiette.'],
  ['Grant says the team losing was predictable after the captain gets injured.', 'Grant dit que la defaite de l equipe etait previsible une fois que le capitaine est blesse.'],
  ['Zoe says the bakery selling out was obvious after the first tray is gone.', 'Zoe dit que la boulangerie qui vend tout etait evidente une fois que le premier plateau est vide.'],
  ['Milo says the phone battery dying was inevitable after the screen brightness is maxed out.', 'Milo dit que la batterie du telephone qui se vide etait inevitable une fois la luminosite au maximum.'],
  ['Theo says the argument ending in silence was obvious after both people stop replying.', 'Theo dit que la dispute finissant dans le silence etait evidente une fois que les deux personnes ne repondent plus.'],
  ['Pia says the road closure was easy to foresee after the cones go up.', 'Pia dit que la fermeture de route etait facile a prevoir une fois les cones installes.'],
  ['Finn says the quiz being hard was obvious after the first two questions feel tricky.', 'Finn dit que le quiz difficile etait evident une fois que les deux premieres questions paraissent ardues.'],
  ['Maya says the camp getting muddy was obvious after one raincloud passes over.', 'Maya dit que le campement boueux etait evident une fois qu un nuage de pluie passe au-dessus.'],
  ['Sam says the class prank being caught was predictable after the teacher walks by.', 'Sam dit que la farce de classe serait attrapee facilement une fois que le professeur passe.'],
  ['Juno says the budget problem was obvious after the spreadsheet turns red.', 'Juno dit que le probleme de budget etait evident une fois que le tableur devient rouge.'],
  ['Iris says the game loss was no surprise after the star player misses once.', 'Iris dit que la defaite du jeu n etait pas une surprise une fois que le joueur star rate une fois.'],
  ['Cole says the family argument was obvious after the third person joins in.', 'Cole dit que la dispute familiale etait evidente une fois que la troisieme personne s en mele.'],
  ['Nora says the app review tanking was expected after the crash report posts.', 'Nora dit que la chute de la note de l application etait attendue une fois le rapport de crash publie.'],
  ['Ari says the train delay was clearly coming after the station announcement.', 'Ari dit que le retard du train allait clairement arriver apres l annonce en gare.'],
  ['Rita says the plan failing was obvious after the first deadline slips.', 'Rita dit que l echec du plan etait evident une fois le premier delai depasse.'],
  ['Tia says the picnic being ruined was foreseeable after the clouds get darker.', 'Tia dit que le pique-nique ruine etait previsible une fois que les nuages s assombrissent.'],
  ['Oli says the deal collapsing was obvious after the buyer goes quiet.', 'Oli dit que l accord qui s effondre etait evident une fois que l acheteur se tait.'],
  ['Lara says the room turning awkward was predictable after the joke falls flat.', 'Lara dit que la piece devenant genante etait previsible une fois que la blague tombe a plat.'],
  ['Ben says the game being lost was obvious after the final shot misses.', 'Ben dit que le match perdu etait evident une fois que le tir final rate.'],
  ['Mina says the meeting ending badly was inevitable after the first interruption.', 'Mina dit que la reunion se terminant mal etait inevitable apres la premiere interruption.'],
  ['Drew says the dessert disaster was obvious after the oven beeps twice.', 'Drew dit que le desastre du dessert etait evident une fois que le four bippe deux fois.'],
  ['Jade says the road trip being late was predictable after the gas light comes on.', 'Jade dit que le voyage en retard etait previsible une fois que le voyant d essence s allume.'],
  ['Parker says the team breakdown was obvious after the coach raises his voice once.', 'Parker dit que la rupture de l equipe etait evidente une fois que l entraineur eleve la voix une fois.'],
  ['Maya says the argument being lost was always clear after the other side makes one strong point.', 'Maya dit que l argument perdu etait toujours clair une fois que l autre camp a avance un seul point fort.'],
];

const OPTIONS_EN = ['Hindsight Bias', 'Availability Heuristic', 'False Consensus Effect', 'Outcome Bias'];
const OPTIONS_FR = ['Biais retrospectif', 'Heuristique de disponibilite', 'Effet de faux consensus', 'Biais du resultat'];

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
      id: 38201 + index,
      level: 4,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Biais retrospectif' : 'Hindsight Bias',
      difficulty: index < 43 ? 1 : index < 50 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais ou sophisme est montre ici ?' : 'Which bias or fallacy is shown here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'On croit qu un resultat etait facile a prevoir apres coup, meme si on ne le savait pas avant.'
        : 'A result feels easy to predict after the fact, even when it was not clear before.',
      detailedExplanationBeginner: isFrench
        ? 'Apres coup, tout parait plus evident qu avant.'
        : 'After the fact, everything looks more obvious than it did before.',
      detailedExplanationIntermediate: isFrench
        ? "Le biais retrospectif fait croire qu on 'savait deja' ce qui allait arriver, ce qui fausse le souvenir de notre prediction initiale."
        : 'Hindsight bias makes us think we "knew it all along," which distorts how we remember our original prediction.',
      detailedExplanationExpert: isFrench
        ? "Ce biais reconstruit le passe a partir du resultat connu: une fois l issue visible, la chaine d evenements parait plus lineaire, plus certaine et plus previsible qu elle ne l etait reellement."
        : 'This bias reconstructs the past from the known outcome: once the result is visible, the chain of events seems more linear, certain, and predictable than it really was.',
      questionFormat: 'standard',
    };
  });
}

export const HINDSIGHT_BIAS_EXPANSION_EN: Question[] = createQuestions('en');
export const HINDSIGHT_BIAS_EXPANSION_FR: Question[] = createQuestions('fr');
