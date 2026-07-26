import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says the club debate got meaner the longer it went on, and now nobody can tell what the original issue was.', 'Maya dit que le debat du club est devenu plus mechant au fur et a mesure, et maintenant personne ne peut dire quel etait le probleme de depart.'],
  ['Leo notices that every extra comment in the thread makes the discussion less about facts and more about ego.', 'Leo remarque que chaque commentaire supplementaire rend la discussion moins factuelle et plus centree sur l ego.'],
  ['Priya says the meeting is no longer about the budget after everyone started trying to sound smarter than the others.', 'Priya dit que la reunion ne porte plus sur le budget apres que tout le monde a commence a vouloir avoir l air plus intelligent que les autres.'],
  ['Omar says the more people argue in the chat, the less anyone is talking about the actual question.', 'Omar dit que plus les gens se disputent dans le chat, moins quelqu un parle de la question reale.'],
  ['Rina thinks the panel stopped being useful once each speaker began attacking the others instead of the topic.', 'Rina pense que le panel a cesse d etre utile une fois que chaque intervenant a commence a attaquer les autres au lieu du sujet.'],
  ['Ben says the discussion about school rules turned into a contest over who sounded toughest.', 'Ben dit que la discussion sur les regles de l ecole est devenue un concours pour voir qui avait l air le plus dur.'],
  ['Zoe says the longer the post stays up, the more people act like winning matters more than being accurate.', 'Zoé dit que plus la publication reste en ligne, plus les gens agissent comme si gagner comptait plus qu etre exact.'],
  ['Kai says the argument about the schedule became a show about who could insult better.', 'Kai dit que le debat sur l emploi du temps est devenu un spectacle sur celui qui pouvait mieux insulter.'],
  ['Nora says the committee forgot the original proposal after the second round of posturing.', 'Nora dit que le comite a oublie la proposition initiale apres la deuxieme phase de poses.'],
  ['Eli says the class discussion got worse every time someone tried to make the comeback line sharper.', 'Eli dit que la discussion de classe est devenue pire chaque fois que quelqu un essayait de rendre sa repartie plus mordante.'],
  ['Lina says the town hall no longer answers the question because everyone wants the last word.', 'Lina dit que la reunion publique ne repond plus à la question parce que tout le monde veut avoir le dernier mot.'],
  ['Grant says the review stopped being helpful once the replies turned into a fight over tone.', 'Grant dit que la critique a cesse d etre utile une fois que les reponses se sont transformees en bataille sur le ton.'],
  ['Tia says the more heated the comments get, the more the discussion drifts away from the evidence.', 'Tia dit que plus les commentaires deviennent passionnes, plus la discussion s eloigne des preuves.'],
  ['Noah says the group chat turned into a contest to sound the most offended.', 'Noah dit que la conversation de groupe est devenue un concours pour paraitre le plus offense.'],
  ['Mia says the policy question disappeared after people started scoring points with sarcasm.', 'Mia dit que la question de politique a disparu apres que les gens ont commence à marquer des points avec du sarcasme.'],
  ['Jules says the debate on whether to repaint the office became about who could be the sharpest critic.', 'Jules dit que le debat sur la peinture du bureau portait sur celui qui pouvait etre le critique le plus mordant.'],
  ['Ava says the thread about delivery delays turned into a popularity contest for the best insult.', 'Ava dit que le fil sur les retards de livraison est devenu un concours de popularite pour la meilleure insulte.'],
  ['Finn says the more someone keeps arguing, the more the whole exchange feels like a power struggle.', 'Finn dit que plus quelqu un continue à argumenter, plus tout l echange ressemble à une lutte de pouvoir.'],
  ['Mina says the original complaint about the noise got buried under personal attacks.', 'Mina dit que la plainte initiale sur le bruit a ete enterree sous les attaques personnelles.'],
  ['Theo says the discussion about refunds stopped being about refunds once people started trying to embarrass each other.', 'Theo dit que la discussion sur les remboursements n a plus porte sur les remboursements une fois que les gens ont commence à essayer de se ridiculiser.'],
  ['Juno says the meeting became less about solving the problem and more about proving who was smartest.', 'Juno dit que la reunion s est moins consacree à resoudre le probleme et plus à prouver qui etait le plus intelligent.'],
  ['Iris says the forum post got uglier with every reply, and the answer never came back.', 'Iris dit que le message du forum est devenu plus laid à chaque reponse, et que la reponse n est jamais revenue.'],
  ['Cole says the discussion about homework turned into a battle over who was less wrong.', 'Cole dit que la discussion sur les devoirs est devenue une bataille pour savoir qui avait le moins tort.'],
  ['Riley says the meeting about safety got lost once everyone started trying to dominate the room.', 'Riley dit que la reunion sur la securite s est perdue une fois que tout le monde a commence à vouloir dominer la salle.'],
  ['Pia says the longer the argument goes, the less anyone remembers the first question.', 'Pia dit que plus le debat dure, moins quelqu un se souvient de la premiere question.'],
  ['Hugo says the discussion about the app became a fight over who could sound more certain.', 'Hugo dit que la discussion sur l application est devenue une lutte pour savoir qui pouvait paraitre le plus certain.'],
  ['Sam says the meeting about vacation days ended with everyone defending their pride.', 'Sam dit que la reunion sur les jours de vacances s est terminee avec tout le monde en train de defendre son orgueil.'],
  ['Jade says the thread on parking rules got meaner until the original rule was ignored.', 'Jade dit que le fil sur les regles de stationnement est devenu plus mechant jusqu a ce que la regle initiale soit ignoree.'],
  ['Owen says each new reply in the debate made it feel less like a discussion and more like a duel.', 'Owen dit que chaque nouvelle reponse dans le debat lui donnait moins l impression d une discussion et plus celle d un duel.'],
  ['Lea says the argument about shared chores turned into a fight about respect.', 'Léa dit que le debat sur les corvees partagees est devenu une dispute sur le respect.'],
  ['Maya says the group stopped solving the issue once they started trying to win the argument in front of everyone.', 'Maya dit que le groupe a cesse de regler le probleme une fois qu il a commence à essayer de gagner le debat devant tout le monde.'],
  ['Ben says the more the email chain grows, the more it sounds like people are trying to save face.', 'Ben dit que plus la chaine de courriels s allonge, plus on a l impression que les gens essaient de sauver la face.'],
  ['Ava says the debate on the school trip became about who could embarrass whom.', 'Ava dit que le debat sur la sortie scolaire portait sur qui pouvait embarrasser qui.'],
  ['Omar says the original point about the broken printer vanished after everyone started posturing.', 'Omar dit que le point de depart sur l imprimante en panne a disparu apres que tout le monde a commence à poser.'],
  ['Nina says the argument over the playlist became a contest to sound the most offended by taste.', 'Nina dit que la dispute sur la playlist est devenue un concours pour paraitre le plus choque par le gout des autres.'],
  ['Eli says the chat about office snacks turned into a fight over who was more mature.', 'Eli dit que la discussion sur les snacks du bureau est devenue une bataille pour savoir qui etait le plus mature.'],
  ['Lina says the committee forgot the numbers after the debate turned into status theater.', 'Lina dit que le comite a oublie les chiffres une fois le debat transforme en theatre de statut.'],
  ['Grant says the conversation about deadlines got less useful each time someone tried to score a witty line.', 'Grant dit que la conversation sur les delais est devenue moins utile chaque fois que quelqu un essayait de marquer une repartie spirituelle.'],
  ['Tia says the thread on remote work became a clash of identities instead of a policy discussion.', 'Tia dit que le fil sur le teletravail est devenu un choc d identites au lieu d une discussion sur la politique.'],
  ['Finn says the group stopped listening once the replies became competition for the last clapback.', 'Finn dit que le groupe a cesse d ecouter une fois que les reponses sont devenues un concours pour la meilleure pique.'],
  ['Mina says the budget meeting failed because nobody wanted to look wrong.', 'Mina dit que la reunion budgetaire a echoue parce que personne ne voulait avoir l air dans l erreur.'],
  ['Theo says the discussion about neighborhood parking became about humiliation, not parking.', 'Theo dit que la discussion sur le stationnement de quartier concernait l humiliation, pas le stationnement.'],
  ['Juno says the more people kept arguing, the farther the conversation moved from the actual problem.', 'Juno dit que plus les gens continuaient à se disputer, plus la conversation s eloignait du probleme reel.'],
  ['Iris says the debate about lunch orders ended with everybody defending their dignity.', 'Iris dit que le debat sur les commandes de dejeuner s est termine avec tout le monde en train de defendre sa dignite.'],
  ['Cole says the issue about noise complaints got buried under who sounded more offended.', 'Cole dit que la question des plaintes pour bruit a ete enterree sous la question de savoir qui semblait le plus offense.'],
  ['Riley says the whole argument became a performance for the audience instead of a search for truth.', 'Riley dit que tout le debat est devenu une performance pour le public au lieu d une recherche de la verite.'],
  ['Pia says the meeting about work rotations got stuck in a contest to see who would back down first.', 'Pia dit que la reunion sur les rotations de travail est restee bloquee dans un concours pour voir qui cederait en premier.'],
  ['Hugo says the more dramatic the replies got, the less anyone cared about the original proposal.', 'Hugo dit que plus les reponses devenaient dramatiques, moins quelqu un se souciait de la proposition de depart.'],
  ['Sam says the thread on school dress code became a battle for control instead of a debate.', 'Sam dit que le fil sur le code vestimentaire est devenu une bataille pour le controle au lieu d un debat.'],
  ['Jade says the discussion about the broken elevator stopped being about repairs once pride took over.', 'Jade dit que la discussion sur l ascenseur en panne a cesse de porter sur les reparations une fois que l orgueil a pris le dessus.'],
  ['Maya says the complaint about office coffee turned into a contest over who was the most insulted.', 'Maya dit que la plainte sur le café du bureau est devenue un concours pour savoir qui etait le plus offense.'],
  ['Leo says the argument about the movie schedule stopped being about timing and became about who could mock the other best.', 'Leo dit que le debat sur l horaire du film ne portait plus sur l horaire et est devenu une question de savoir qui pouvait le mieux se moquer de l autre.'],
  ['Priya says the question of the missing package got lost once everyone started defending their competence.', 'Priya dit que la question du colis manquant s est perdue une fois que tout le monde a commence à defendre sa competence.'],
  ['Omar says the discussion about rent became a fight over who was more reasonable.', 'Omar dit que la discussion sur le loyer est devenue une bataille pour savoir qui etait le plus raisonnable.'],
  ['Rina says the chat about the group project turned into a contest of who looked more mature.', 'Rina dit que la discussion sur le projet de groupe est devenue un concours pour voir qui avait l air le plus mature.'],
  ['Ben says the thread about the broken printer stopped being about the printer after the first insult.', 'Ben dit que le fil sur l imprimante en panne a cesse de porter sur l imprimante apres la premiere insulte.'],
  ['Zoe says the committee discussion about the fundraiser became a battle over who was being disrespectful.', 'Zoé dit que la discussion du comite sur la collecte est devenue une bataille sur la question de savoir qui manquait de respect.'],
  ['Kai says the argument over the bus route turned into a duel of sarcastic one-liners.', 'Kai dit que la dispute sur la ligne de bus est devenue un duel de reparties sarcastiques.'],
  ['Nora says the meeting about the weekend plan dissolved into everyone trying to save face.', 'Nora dit que la reunion sur le programme du week-end s est dissoute dans la volonté de chacun de sauver la face.'],
  ['Eli says the discussion about the software bug got lost after people started bragging about their expertise.', 'Eli dit que la discussion sur le bogue logiciel s est perdue quand les gens ont commence à se vanter de leur expertise.'],
  ['Lina says the argument about kitchen chores became about who was being petty.', 'Lina dit que l argument sur les corvees de cuisine est devenu une question de savoir qui etait mesquin.'],
  ['Grant says the school policy chat ended up as a contest over who could sound more offended.', 'Grant dit que l echange sur la politique de l ecole s est termine en concours pour savoir qui avait l air le plus offense.'],
  ['Tia says the neighborhood parking debate drifted into a fight over status.', 'Tia dit que le debat sur le stationnement du quartier a dérivé en lutte de statut.'],
  ['Noah says the food order discussion became less about food and more about humiliation.', 'Noah dit que la discussion sur la commande de nourriture ne portait plus sur la nourriture mais sur l humiliation.'],
  ['Mia says the question about the missing charger disappeared once everyone began trading insults.', 'Mia dit que la question du chargeur disparu a disparu une fois que tout le monde a commence à echanger des insultes.'],
  ['Jules says the office policy thread became a competition for the sharpest comeback.', 'Jules dit que le fil sur la politique du bureau est devenu une compétition pour la meilleure repartie.'],
  ['Ava says the debate about the shared calendar turned into a contest of confidence, not facts.', 'Ava dit que le debat sur le calendrier partagé est devenu un concours de confiance en soi, pas de faits.'],
  ['Finn says the disagreement over the lamp stopped being about the lamp once pride entered the room.', 'Finn dit que le désaccord sur la lampe a cesse de porter sur la lampe une fois que l orgueil est entre dans la salle.'],
  ['Mina says the group chat about the party became a fight for the last word.', 'Mina dit que la conversation de groupe sur la fete est devenue une bataille pour le dernier mot.'],
  ['Theo says the conversation about the late train turned into a public display of ego.', 'Théo dit que la conversation sur le train en retard est devenue une demonstration publique d ego.'],
  ['Juno says the issue of the lost receipt got buried under people trying to look clever.', 'Juno dit que l affaire du reçu perdu a ete enterree sous des gens qui essayaient d avoir l air malins.'],
  ['Iris says the debate about the shared bathroom got worse when everyone started trying to dominate the room.', 'Iris dit que le debat sur la salle de bain partagee s est empiré quand tout le monde a commence à vouloir dominer la pièce.'],
  ['Cole says the complaint about the noisy fan turned into a showdown over who was more offended.', 'Cole dit que la plainte sur le ventilateur bruyant est devenue une confrontation pour savoir qui etait le plus offense.'],
  ['Riley says the argument about weekend plans became a battle over reputation.', 'Riley dit que l argument sur les plans du week-end est devenu une bataille de reputation.'],
  ['Pia says the discussion about the broken button stopped being about fixing it and became about who looked weaker.', 'Pia dit que la discussion sur le bouton cassé a cesse de porter sur la réparation et est devenue une question de savoir qui avait l air le plus faible.'],
  ['Hugo says the thread about the class trip lost its point after everyone started defending their image.', 'Hugo dit que le fil sur la sortie de classe a perdu son sens après que tout le monde a commence à defendre son image.'],
  ['Sam says the talk about the missing stapler became a duel of clever insults.', 'Sam dit que la discussion sur la agrafeuse disparue est devenue un duel d insultes ingenieuses.'],
  ['Jade says the conversation about the shared playlist turned into a contest of who was less wrong.', 'Jade dit que la conversation sur la playlist partagée est devenue un concours pour savoir qui avait le moins tort.'],
  ['Owen says the issue of the broken app stopped mattering once people started acting superior.', 'Owen dit que le probleme de l application cassée a cesse de compter une fois que les gens ont commence à se comporter avec superiorité.'],
  ['Lea says the discussion about the group photo became a fight over who got embarrassed more.', 'Léa dit que la discussion sur la photo de groupe est devenue une dispute sur qui etait le plus embarrasse.'],
  ['Maya says the topic of the scratched table vanished under a wave of pride and sarcasm.', 'Maya dit que le sujet de la table raye a disparu sous une vague d orgueil et de sarcasme.'],
  ['Ben says the conversation about the schedule change turned into a competition for the last jab.', 'Ben dit que la conversation sur le changement d horaire est devenue un concours pour la derniere pique.'],
  ['Ava says the debate about the canceled picnic became a contest over who sounded most wronged.', 'Ava dit que le debat sur le pique-nique annulé est devenu un concours pour savoir qui semblait le plus lésé.'],
  ['Omar says the argument about the door lock stopped being about safety after the first sarcastic remark.', 'Omar dit que l argument sur la serrure de la porte a cesse de porter sur la sécurité après la premiere remarque sarcastique.'],
  ['Nina says the discussion about the missing mug became a fight for pride instead of a search for the mug.', 'Nina dit que la discussion sur la tasse disparue est devenue une lutte d orgueil au lieu d une recherche de la tasse.'],
  ['Eli says the meeting about the printer ink became a contest for who could sound most offended.', 'Eli dit que la reunion sur l encre de l imprimante est devenue un concours pour savoir qui avait l air le plus offense.'],
  ['Lina says the talk about the broken doorbell became a battle to see who could dismiss whom fastest.', 'Lina dit que la discussion sur la sonnette cassée est devenue une bataille pour voir qui pourrait rejeter qui le plus vite.'],
  ['Grant says the complaint about the neighbor noise got swallowed by a performance of wounded pride.', 'Grant dit que la plainte sur le bruit du voisin a ete avalee par une demonstration d orgueil blesse.'],
  ['Tia says the conversation about the lost password turned into a referendum on who was more competent.', 'Tia dit que la conversation sur le mot de passe perdu est devenue un referendum sur la competence de chacun.'],
  ['Finn says the discussion about the shared tools became about who was more insulting.', 'Finn dit que la discussion sur les outils partages est devenue une question de savoir qui etait le plus insultant.'],
  ['Mina says the office argument about seating arrangements turned into a duel of egos.', 'Mina dit que l argument du bureau sur les places assises est devenu un duel d egos.'],
  ['Theo says the issue of the missing charger stopped being about the charger after everyone began grandstanding.', 'Theo dit que la question du chargeur perdu a cesse de porter sur le chargeur une fois que tout le monde a commence à faire du theatre.'],
  ['Juno says the talk about the lunch order became a contest to prove who was more considerate.', 'Juno dit que la discussion sur la commande du déjeuner est devenue un concours pour prouver qui était le plus attentionné.'],
  ['Iris says the debate about the broken speaker became a squabble over tone, not solutions.', 'Iris dit que le débat sur le haut-parleur cassé est devenu une querelle sur le ton, pas sur les solutions.'],
  ['Cole says the complaint about the late reply turned into a game of who could sound more hurt.', 'Cole dit que la plainte sur la reponse tardive est devenue un jeu pour savoir qui pouvait paraitre le plus blesse.'],
  ['Riley says the disagreement about the desk fan became a status contest instead of a repair plan.', 'Riley dit que le désaccord sur le ventilateur de bureau est devenu un concours de statut au lieu d un plan de réparation.'],
  ['Pia says the topic of the spilled drink got lost under a pile of defensive jokes.', 'Pia dit que le sujet de la boisson renversée a disparu sous une pile de blagues défensives.'],
  ['Hugo says the discussion about the broken window became about who was too sensitive.', 'Hugo dit que la discussion sur la fenêtre cassée est devenue une question de savoir qui etait trop sensible.'],
  ['Nina says the parking complaint stopped being about the spot and became a contest over who could sound more offended.', 'Nina dit que la plainte sur le stationnement a cesse de porter sur la place et est devenue un concours pour savoir qui pouvait paraitre le plus offense.'],
  ['Maya says the argument about the broken copier became a battle over who deserved respect.', 'Maya dit que l argument sur la photocopieuse en panne est devenu une bataille sur la question de savoir qui meritait du respect.'],
];

const OPTIONS_EN = ["Sayre's Law", 'Ad Hominem', 'Motte-and-Bailey', 'Confirmation Bias'];
const OPTIONS_FR = ['Loi de Sayre', 'Ad Hominem', 'Motte et Bailey', 'Biais de confirmation'];

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
      id: 40401 + index,
      level: 3,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Loi de Sayre' : "Sayre's Law",
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel principe est illustré ici ?' : 'Which principle is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'Plus une dispute enfle, plus elle cesse de parler du sujet initial et devient une affaire d ego.'
        : 'The larger the dispute gets, the less it is about the original issue and the more it becomes an ego contest.',
      detailedExplanationBeginner: isFrench
        ? 'Quand les egos montent, le sujet disparait.'
        : 'When egos rise, the topic disappears.',
      detailedExplanationIntermediate: isFrench
        ? "La loi de Sayre dit qu un debat tend à devenir plus mesquin, plus bruyant et moins utile quand les participants cherchent à gagner plutot qu à comprendre."
        : "Sayre's Law says a debate tends to get nastier, louder, and less useful when people try to win instead of understand.",
      detailedExplanationExpert: isFrench
        ? "Ce principe ne signifie pas que tout debat vif est inutile; il souligne que l objectif implicite d un echange peut glisser de la recherche de verite vers la sauvegarde du statut, du visage social ou du prestige. Quand le ton remplace le contenu, la discussion s auto-detruit."
        : 'This principle does not mean every heated discussion is useless; it says the implicit goal of a conversation can drift from finding truth toward protecting status, face, or prestige. Once tone replaces content, the discussion starts destroying itself.',
      questionFormat: 'standard',
    };
  });
}

export const SAYRES_LAW_EXPANSION_EN: Question[] = createQuestions('en');
export const SAYRES_LAW_EXPANSION_FR: Question[] = createQuestions('fr');
