import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya wore her lucky socks and then aced the quiz, so she thinks the socks caused the grade.', 'Maya a porté ses chaussettes porte-bonheur puis a réussi le quiz, donc elle pense que les chaussettes ont causé la note.'],
  ['Leo cleaned his desk and later got an email with good news, so he assumes the clean desk made the email happen.', 'Leo a rangé son bureau puis a reçu un e-mail de bonnes nouvelles, donc il suppose que le bureau rangé a provoqué l e-mail.'],
  ['Priya ate oatmeal before work and the meeting went well, so she says the oatmeal brought success.', 'Priya a mangé des flocons d avoine avant le travail et la réunion s est bien passée, donc elle dit que les flocons d avoine ont apporté le succès.'],
  ['Omar turned on a fan and the room felt nicer, so he believes the fan fixed the whole day.', 'Omar a allumé un ventilateur et la pièce s est sentie mieux, donc il croit que le ventilateur a arrangé toute la journée.'],
  ['Rina put on a blue sweater and her friend texted back, so she thinks the sweater made the reply happen.', 'Rina a mis un pull bleu et son amie a répondu par message, donc elle pense que le pull a provoqué la réponse.'],
  ['Ben walked to the store and avoided traffic, so he claims walking caused the empty roads.', 'Ben est allé au magasin à pied et a évité les embouteillages, donc il affirme que marcher a causé les routes vides.'],
  ['Zoe took a short nap and then felt focused, so she says the nap definitely made her sharp.', 'Zoé a fait une courte sieste puis s est sentie concentrée, donc elle dit que la sieste l a clairement rendue plus vive.'],
  ['Kai watered the plant and it looked better later, so he thinks the watering alone fixed it.', 'Kai a arrosé la plante et elle avait meilleure allure plus tard, donc il pense que l arrosage seul l a réparée.'],
  ['Nora sent her résumé after brewing tea and got an interview, so she credits the tea.', 'Nora a envoyé son CV après avoir préparé du thé et a obtenu un entretien, donc elle attribue cela au thé.'],
  ['Eli put on headphones and the room got quiet, so he says the headphones made the noise stop.', 'Eli a mis des écouteurs et la pièce est devenue calme, donc il dit que les écouteurs ont fait cesser le bruit.'],
  ['Lina started using a new notebook and then stayed organized for a week, so she blames the notebook.', 'Lina a commencé à utiliser un nouveau carnet puis est restée organisée pendant une semaine, donc elle attribue cela au carnet.'],
  ['Grant ate lunch and the headache eased, so he says the sandwich fixed his head.', 'Grant a déjeuné et son mal de tête a diminué, donc il dit que le sandwich a soigné sa tête.'],
  ['Tia wore a red jacket and found parking quickly, so she thinks the jacket helped.', 'Tia a porté une veste rouge et a trouvé une place rapidement, donc elle pense que la veste l a aidée.'],
  ['Noah turned in his homework early and the teacher smiled, so he assumes the early turn-in caused the smile.', 'Noah a rendu ses devoirs tôt et le professeur a souri, donc il suppose que le dépôt anticipé a provoqué le sourire.'],
  ['Mia bought a new phone case and later got a message from a friend, so she links the case to the text.', 'Mia a acheté une nouvelle coque de téléphone puis a reçu un message d une amie, donc elle relie la coque au message.'],
  ['Jules drank water before the run and finished strong, so he says the water made the run easy.', 'Jules a bu de l eau avant la course et a fini fort, donc il dit que l eau a rendu la course facile.'],
  ['Ava read for ten minutes and then remembered more on the test, so she thinks the reading caused the memory.', 'Ava a lu pendant dix minutes puis a mieux retenu au test, donc elle pense que la lecture a causé la mémoire.'],
  ['Finn wiped the kitchen counter and the smell went away, so he believes the wiping solved the smell.', 'Finn a essuyé le plan de travail et l odeur a disparu, donc il croit que l essuyage a réglé l odeur.'],
  ['Mina wore a new bracelet and got compliments later, so she says the bracelet brought the praise.', 'Mina a porté un nouveau bracelet et a reçu des compliments plus tard, donc elle dit que le bracelet a apporté les compliments.'],
  ['Theo backed up his files and the laptop stopped crashing, so he says the backup fixed the laptop.', 'Théo a sauvegardé ses fichiers et l ordinateur a cessé de planter, donc il dit que la sauvegarde a réparé l ordinateur.'],
  ['Juno took a different route home and missed a delay, so she believes the route caused the luck.', 'Juno a pris un autre chemin pour rentrer et a évité un retard, donc elle croit que l itinéraire a créé la chance.'],
  ['Iris bought a cheaper brand of soap and the skin irritation eased, so she credits the soap change.', 'Iris a acheté une marque de savon moins chère et l irritation a diminué, donc elle attribue cela au changement de savon.'],
  ['Cole skipped dessert and later felt less tired, so he says skipping dessert made him energetic.', 'Cole a sauté le dessert puis s est senti moins fatigué, donc il dit que sauter le dessert l a rendu énergique.'],
  ['Riley wore his lucky cap and then the team won, so he assumes the cap caused the win.', 'Riley a porté sa casquette porte-bonheur puis l équipe a gagné, donc il suppose que la casquette a causé la victoire.'],
  ['Pia checked her grades after cleaning her room and found an improvement, so she links cleaning to the grade change.', 'Pia a consulté ses notes après avoir rangé sa chambre et a vu une amélioration, donc elle relie le rangement au changement de note.'],
  ['Hugo bought fresh fruit and the week felt healthier, so he says the fruit fixed everything.', 'Hugo a acheté des fruits frais et la semaine a semblé plus saine, donc il dit que les fruits ont tout réparé.'],
  ['Sam used a planner and then finished on time, so he thinks the planner itself made time appear.', 'Sam a utilisé un agenda puis a fini à l heure, donc il pense que l agenda a fait apparaître le temps.'],
  ['Jade switched to a new pen and her note looked better, so she says the pen improved the writing.', 'Jade a pris un nouveau stylo et sa note paraissait meilleure, donc elle dit que le stylo a amélioré l écriture.'],
  ['Owen ate soup and later felt warmer, so he says the soup changed the weather inside.', 'Owen a mangé de la soupe puis s est senti plus au chaud, donc il dit que la soupe a changé la météo intérieure.'],
  ['Lea washed her hair and then got a nice comment, so she assumes the shampoo caused the compliment.', 'Léa s est lavé les cheveux puis a reçu un joli compliment, donc elle suppose que le shampoing a provoqué le compliment.'],
  ['Maya slept with the window open and woke up refreshed, so she says the open window caused the freshness.', 'Maya a dormi fenêtre ouverte et s est réveillée reposée, donc elle dit que la fenêtre ouverte a causé le repos.'],
  ['Ben organized his notes and then understood the chapter better, so he blames the notes for the understanding.', 'Ben a organisé ses notes puis a mieux compris le chapitre, donc il attribue la compréhension aux notes.'],
  ['Ava bought flowers and the apartment felt brighter, so she thinks the flowers made the day happy.', 'Ava a acheté des fleurs et l appartement a paru plus lumineux, donc elle pense que les fleurs ont rendu la journée heureuse.'],
  ['Omar finished a workout and got good sleep, so he says the workout caused the sleep.', 'Omar a terminé une séance de sport et a bien dormi, donc il dit que l entraînement a causé le sommeil.'],
  ['Nina wore headphones while studying and did well, so she thinks the headphones were the secret.', 'Nina a porté des écouteurs en révisant et a bien réussi, donc elle pense que les écouteurs étaient le secret.'],
  ['Eli watered the garden and the flowers bloomed later, so he claims the watering caused all the blooming.', 'Eli a arrosé le jardin et les fleurs ont fleuri plus tard, donc il affirme que l arrosage a causé toute la floraison.'],
  ['Lina sent a thank-you text and then the plan moved forward, so she says the text caused the progress.', 'Lina a envoyé un message de remerciement puis le projet a avancé, donc elle dit que le message a causé le progrès.'],
  ['Grant used a new mug and his coffee tasted better, so he believes the mug changed the flavor.', 'Grant a utilisé une nouvelle tasse et son café avait meilleur goût, donc il croit que la tasse a changé la saveur.'],
  ['Tia made her bed and then felt more ready for the day, so she credits the bed for her mood.', 'Tia a fait son lit puis s est sentie plus prête pour la journée, donc elle attribue cela au lit pour son humeur.'],
  ['Finn opened a window and the room felt less stuffy, so he says the window fixed the air.', 'Finn a ouvert une fenêtre et la pièce est devenue moins étouffante, donc il dit que la fenêtre a réparé l air.'],
  ['Mina took a photo before the meeting and everything went smoothly, so she links the photo to the smooth meeting.', 'Mina a pris une photo avant la réunion et tout s est bien passé, donc elle relie la photo à la réunion fluide.'],
  ['Theo wore a watch and arrived on time, so he thinks the watch made punctuality happen.', 'Théo a porté une montre et est arrivé à l heure, donc il pense que la montre a fait arriver à l heure.'],
  ['Juno cleaned her bag and then found her keys, so she says the cleaning caused the keys to appear.', 'Juno a rangé son sac puis a trouvé ses clés, donc elle dit que le rangement a fait apparaître les clés.'],
  ['Iris drank tea and later felt less stressed, so she credits the tea for the calm.', 'Iris a bu du thé puis s est sentie moins stressée, donc elle attribue le calme au thé.'],
  ['Cole put on sunscreen and did not burn, so he believes the sunscreen alone guaranteed success.', 'Cole a mis de la crème solaire et n a pas brûlé, donc il croit que la crème solaire a garanti le succès.'],
  ['Riley wrote a to-do list and then got everything done, so he says the list caused the productivity.', 'Riley a écrit une liste de tâches puis a tout terminé, donc il dit que la liste a causé la productivité.'],
  ['Pia changed her alarm tone and stopped snoozing, so she thinks the tone fixed her habit.', 'Pia a changé la sonnerie du réveil et a arrêté de repousser l alarme, donc elle pense que la sonnerie a corrigé son habitude.'],
  ['Hugo ate breakfast and then focused better, so he assumes the breakfast was the only reason.', 'Hugo a pris son petit-déjeuner puis s est mieux concentré, donc il suppose que le petit-déjeuner était la seule raison.'],
  ['Sam took a break and returned with better ideas, so he says the break created the ideas.', 'Sam a fait une pause et est revenu avec de meilleures idées, donc il dit que la pause a créé les idées.'],
  ['Jade changed seats and the discussion improved, so she thinks the seat change caused the better talk.', 'Jade a changé de place et la discussion s est améliorée, donc elle pense que le changement de siège a causé une meilleure conversation.'],
  ['Maya put on comfortable shoes and walked farther, so she says the shoes made distance easy.', 'Maya a mis des chaussures confortables et a marché plus loin, donc elle dit que les chaussures ont rendu la distance facile.'],
  ['Ben ate a snack and then solved the problem, so he says the snack solved the problem too.', 'Ben a mangé un snack puis a résolu le problème, donc il dit que le snack a aussi résolu le problème.'],
  ['Zoe drank coffee and then answered emails faster, so she says the coffee made her productive.', 'Zoé a bu du café puis a répondu aux e-mails plus vite, donc elle dit que le café l a rendue productive.'],
  ['Kai wore a lucky shirt and the bus arrived soon after, so he thinks the shirt summoned the bus.', 'Kai a porté une chemise porte-bonheur et le bus est arrivé peu après, donc il pense que la chemise a fait venir le bus.'],
  ['Nora cleaned her glasses and then read better, so she says cleaning the glasses improved her intelligence.', 'Nora a nettoyé ses lunettes puis a mieux lu, donc elle dit que le nettoyage des lunettes a amélioré son intelligence.'],
  ['Eli took pain medicine and later felt better, so he assumes the medicine worked immediately.', 'Éli a pris un antidouleur et s est senti mieux plus tard, donc il suppose que le médicament a agi immédiatement.'],
  ['Lina opened the curtains and the room felt happier, so she blames the curtains for the mood change.', 'Lina a ouvert les rideaux et la pièce a paru plus joyeuse, donc elle attribue le changement d humeur aux rideaux.'],
  ['Grant watered the garden and the plants perked up after rain, so he says his watering caused the recovery.', 'Grant a arrosé le jardin et les plantes ont repris après la pluie, donc il dit que son arrosage a causé la reprise.'],
  ['Tia sent a reminder and the team finished their work later that day, so she thinks the reminder caused the finish.', 'Tia a envoyé un rappel et l équipe a terminé son travail plus tard dans la journée, donc elle pense que le rappel a causé la fin.'],
  ['Noah wore a new watch and then arrived early, so he claims the watch gave him better time management.', 'Noah a porté une nouvelle montre puis est arrivé en avance, donc il affirme que la montre lui a donné une meilleure gestion du temps.'],
  ['Mia ate breakfast and the class felt easier, so she says breakfast made the lesson simpler.', 'Mia a pris son petit-déjeuner et le cours lui a semblé plus facile, donc elle dit que le petit-déjeuner a simplifié la leçon.'],
  ['Jules washed the car and the weather cleared, so he jokes that the car wash changed the forecast.', 'Jules a lavé la voiture et le temps s est dégagé, donc il plaisante en disant que le lavage a changé la météo.'],
  ['Ava organized her desk and then found the missing note, so she says the organization caused the discovery.', 'Ava a rangé son bureau puis a retrouvé la note manquante, donc elle dit que le rangement a causé la découverte.'],
  ['Finn took a short walk and later felt calmer, so he assumes the walk fixed his stress.', 'Finn a fait une courte marche puis s est senti plus calme, donc il suppose que la marche a réglé son stress.'],
  ['Mina wore running shoes to work and then had a better day, so she credits the shoes for everything.', 'Mina a porté des chaussures de course au travail puis a passé une meilleure journée, donc elle attribue tout cela aux chaussures.'],
  ['Theo ate soup and then his cold eased, so he says the soup cured the cold.', 'Théo a mangé de la soupe puis son rhume s est atténué, donc il dit que la soupe a guéri le rhume.'],
  ['Juno took a photo of her to-do list and finished tasks later, so she thinks the photo helped.', 'Juno a pris une photo de sa liste de tâches et a terminé les tâches plus tard, donc elle pense que la photo a aidé.'],
  ['Iris changed her seat and the meeting became more useful, so she credits the chair.', 'Iris a changé de place et la réunion est devenue plus utile, donc elle attribue cela à la chaise.'],
  ['Cole cleaned his phone screen and then got a call, so he says cleaning summoned the call.', 'Cole a nettoyé l écran de son téléphone puis a reçu un appel, donc il dit que le nettoyage a provoqué l appel.'],
  ['Riley put on a hoodie and then understood the chapter better, so he credits the hoodie.', 'Riley a mis un sweat à capuche puis a mieux compris le chapitre, donc il attribue cela au sweat.'],
  ['Pia drank water after exercising and felt great, so she says the water caused the whole recovery.', 'Pia a bu de l eau après avoir fait du sport et s est sentie super bien, donc elle dit que l eau a causé toute la récupération.'],
  ['Hugo finished lunch and then the meeting went smoothly, so he thinks lunch fixed the meeting.', 'Hugo a terminé son déjeuner puis la réunion s est bien déroulée, donc il pense que le déjeuner a réglé la réunion.'],
  ['Sam listened to music and the trip felt shorter, so he claims the music shortened the road.', 'Sam a écouté de la musique et le trajet a semblé plus court, donc il affirme que la musique a raccourci la route.'],
  ['Jade changed her alarm and then woke up earlier, so she says the alarm caused punctuality.', 'Jade a changé son réveil puis s est réveillée plus tôt, donc elle dit que le réveil a causé la ponctualité.'],
  ['Owen read a motivational quote and later worked faster, so he believes the quote caused speed.', 'Owen a lu une citation motivante puis a travaillé plus vite, donc il croit que la citation a causé la vitesse.'],
  ['Lea cleaned her glasses and then noticed the room was brighter, so she says the glasses changed the light.', 'Léa a nettoyé ses lunettes puis a remarqué que la pièce était plus lumineuse, donc elle dit que les lunettes ont changé la lumière.'],
  ['Maya used a different mug and her coffee tasted better, so she credits the mug for the flavor.', 'Maya a utilisé une tasse différente et son café avait meilleur goût, donc elle attribue la saveur à la tasse.'],
  ['Ben closed his laptop and then felt less stressed, so he says shutting the laptop cured stress.', 'Ben a fermé son ordinateur puis s est senti moins stressé, donc il dit que fermer l ordinateur a guéri le stress.'],
  ['Ava walked outside and a call came in, so she says the walk caused the phone call.', 'Ava est sortie marcher et un appel est arrivé, donc elle dit que la marche a causé l appel.'],
  ['Omar tidied the kitchen and later the guests praised the house, so he blames the praise on the cleaning.', 'Omar a rangé la cuisine et plus tard les invités ont complimenté la maison, donc il attribue les compliments au nettoyage.'],
  ['Nina bought a new notebook and then remembered tasks better, so she says the notebook improved memory.', 'Nina a acheté un nouveau carnet puis a mieux retenu les tâches, donc elle dit que le carnet a amélioré la mémoire.'],
  ['Eli took a shower and his mood lifted, so he thinks the shower made the whole day better.', 'Éli a pris une douche et son humeur est montée, donc il pense que la douche a rendu toute la journée meilleure.'],
  ['Lina watered the plant and then the leaves looked fine, so she claims the watering fixed the plant instantly.', 'Lina a arrosé la plante puis les feuilles avaient l air correctes, donc elle affirme que l arrosage a réparé la plante instantanément.'],
  ['Grant used a planner and then got through the week, so he says the planner created all the progress.', 'Grant a utilisé un agenda puis a traversé la semaine, donc il dit que l agenda a créé tout le progrès.'],
  ['Tia wore headphones and later had a productive afternoon, so she says the headphones caused productivity.', 'Tia a porté des écouteurs puis a eu un après-midi productif, donc elle dit que les écouteurs ont causé la productivité.'],
  ['Noah ate dinner and then his headache faded, so he says dinner cured the headache.', 'Noah a dîné puis son mal de tête a disparu, donc il dit que le dîner a guéri le mal de tête.'],
  ['Mia organized her files and then the project moved forward, so she credits file sorting for all progress.', 'Mia a organisé ses fichiers puis le projet a avancé, donc elle attribue tout le progrès au tri des fichiers.'],
  ['Jules wore lucky socks and then the line moved faster, so he says the socks helped the store.', 'Jules a porté des chaussettes porte-bonheur puis la file a avancé plus vite, donc il dit que les chaussettes ont aidé le magasin.'],
  ['Ava wrote a reminder note and then remembered to call, so she says the note caused memory.', 'Ava a écrit un mot de rappel puis s est souvenue d appeler, donc elle dit que le mot a causé la mémoire.'],
  ['Finn opened the blinds and then felt awake, so he thinks the blinds caused alertness.', 'Finn a ouvert les stores puis s est senti éveillé, donc il pense que les stores ont causé l alerte.'],
  ['Mina drank tea and then the meeting felt easier, so she says the tea fixed the meeting.', 'Mina a bu du thé puis la réunion lui a semblé plus facile, donc elle dit que le thé a réglé la réunion.'],
  ['Theo put on shoes and then got to class on time, so he says the shoes caused punctuality.', 'Théo a mis ses chaussures puis est arrivé à l heure en cours, donc il dit que les chaussures ont causé la ponctualité.'],
  ['Juno cleaned the table and then dinner was nicer, so she credits the table cleaning with the nice meal.', 'Juno a nettoyé la table puis le dîner a été plus agréable, donc elle attribue le bon repas au nettoyage de la table.'],
  ['Iris made a shopping list and then spent less money, so she says the list caused savings.', 'Iris a fait une liste de courses puis a dépensé moins d argent, donc elle dit que la liste a causé les économies.'],
  ['Cole took a break and then finished his task, so he says the break caused completion.', 'Cole a fait une pause puis a terminé sa tâche, donc il dit que la pause a causé l achèvement.'],
  ['Riley listened to a podcast and then answered an email quickly, so he thinks the podcast improved typing.', 'Riley a écouté un podcast puis a répondu rapidement à un e-mail, donc il pense que le podcast a amélioré la frappe.'],
  ['Pia changed her shoes and later walked more comfortably, so she says the shoes changed the day.', 'Pia a changé de chaussures puis a marché plus confortablement, donc elle dit que les chaussures ont changé la journée.'],
  ['Hugo bought fresh bread and then the morning felt better, so he blames the bread for the mood.', 'Hugo a acheté du pain frais puis la matinée a semblé meilleure, donc il attribue l humeur au pain.'],
  ['Sam used a calendar app and later missed fewer dates, so he says the app fixed his timing.', 'Sam a utilisé une appli calendrier et a ensuite raté moins de dates, donc il dit que l appli a réglé son sens du timing.'],
  ['Ben put away the dishes and then the evening calmed down, so he says the dishes caused peace.', 'Ben a rangé la vaisselle puis la soirée s est calmée, donc il dit que la vaisselle a causé la paix.'],
];

const OPTIONS_EN = ['Post Hoc', 'Correlation Equals Causation', 'Confirmation Bias', 'False Cause'];
const OPTIONS_FR = ['Post hoc', 'Corrélation égale causalité', 'Biais de confirmation', 'Fausse cause'];

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
      id: 37851 + index,
      level: 3,
      persona_stage: PersonaStage.RABBIT,
      concept: isFrench ? 'Post hoc' : 'Post Hoc',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La personne suppose qu un événement a causé le suivant simplement parce qu il est arrivé avant.'
        : 'The person assumes one event caused the next just because it happened first.',
      detailedExplanationBeginner: isFrench
        ? 'Avant ne veut pas dire cause.'
        : 'Before does not automatically mean cause.',
      detailedExplanationIntermediate: isFrench
        ? "Le post hoc apparaît quand on confond l ordre des événements avec une vraie relation causale."
        : 'Post hoc appears when someone confuses the order of events with a real causal link.',
      detailedExplanationExpert: isFrench
        ? "Ce sophisme est une forme classique de fausse causalité. Il saute de « X s est produit avant Y » à « X a provoqué Y », sans vérifier les causes alternatives, la coïncidence ou les facteurs communs. C est très fréquent dans les anecdotes du quotidien, où deux choses qui se suivent semblent liées alors qu elles ne le sont peut-être pas."
        : 'This fallacy is a classic form of false causation. It jumps from "X happened before Y" to "X caused Y" without checking alternative causes, coincidence, or shared background factors. It is common in everyday anecdotes, where two things that happen in sequence seem linked even though they may not be.',
      questionFormat: 'standard',
    };
  });
}

export const POST_HOC_EXPANSION_EN: Question[] = createQuestions('en');
export const POST_HOC_EXPANSION_FR: Question[] = createQuestions('fr');
