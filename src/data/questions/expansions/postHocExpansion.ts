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
