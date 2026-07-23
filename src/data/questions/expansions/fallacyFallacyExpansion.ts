import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Alex says the article is wrong because one paragraph had a typo, even though the data still supports it.', "Alex dit que l article est faux parce qu un paragraphe contenait une faute de frappe, meme si les donnees l appuient toujours."],
  ['Maya rejects the budget proposal because the speaker cleared her throat twice before lunch.', "Maya rejette la proposition budgetaire parce que l oratrice s est racle la gorge deux fois avant le dejeuner."],
  ['Theo says the forecast is invalid because the presenter wore bright socks.', 'Theo dit que la prevision est invalide parce que le presentateur portait des chaussettes voyantes.'],
  ['Lina dismisses the safety plan because the manager mixed up two slide titles.', 'Lina rejette le plan de securite parce que la responsable a confondu deux titres de diapositives.'],
  ['Omar insists the rule is false because the debater sounded nervous.', 'Omar insiste pour dire que la regle est fausse parce que le debatteur avait l air nerveux.'],
  ['Priya thinks the charity appeal is worthless because the flyer had a typo.', "Priya pense que l appel aux dons ne vaut rien parce que le prospectus contenait une faute de frappe."],
  ['Ben says the doctor must be wrong because the doctor arrived late.', 'Ben dit que le medecin doit avoir tort parce qu il est arrive en retard.'],
  ['Ava rejects the school policy because a supporter of it made a bad joke.', "Ava rejette la politique scolaire parce qu un de ses partisans a fait une mauvaise blague."],
  ['Noah claims the restaurant review is invalid because the reviewer is picky about noise.', 'Noah affirme que la critique du restaurant est invalide parce que le critique est pointilleux sur le bruit.'],
  ['Rosa says the travel tip is wrong because the person sharing it once got lost.', 'Rosa dit que le conseil de voyage est faux parce que la personne qui le partageait s est deja perdue.'],
  ['Jules dismisses the recycling idea because the speaker forgot her water bottle.', 'Jules balaie l idee de recyclage parce que l oratrice a oublie sa gourde.'],
  ['Eli says the claim about rent is nonsense because the presenter used a dramatic voice.', 'Eli dit que l affirmation sur le loyer est absurde parce que le presentateur avait une voix dramatique.'],
  ['Nora thinks the exercise plan is bad because the coach had messy handwriting.', "Nora pense que le programme sportif est mauvais parce que l entraineur a une ecriture brouillonne."],
  ['Kim rejects the museum proposal because the author made a rude comment on social media.', 'Kim rejette la proposition du musee parce que son auteur a fait un commentaire grossier sur les reseaux sociaux.'],
  ['Salma says the app update is wrong because the designer wore bright shoes.', "Salma dit que la mise a jour de l application est fausse parce que le designer portait des chaussures vives."],
  ['Hugo argues the class project failed because one teammate arrived sweaty.', "Hugo pretend que le projet de classe a echoue parce qu un coequipier est arrive en sueur."],
  ['Lea believes the film critique is useless because the critic likes cats.', 'Lea croit que la critique du film ne vaut rien parce que le critique aime les chats.'],
  ['Max says the town plan is bad because the speaker had a scratchy voice.', 'Max dit que le plan de la ville est mauvais parce que l orateur avait la voix rauque.'],
  ['Tia dismisses the homework guideline because the teacher mispronounced a name.', 'Tia rejette la consigne de devoir parce que le professeur a mal prononce un nom.'],
  ['Paul says the fundraiser should not be trusted because the organizer checked his phone during the talk.', "Paul dit qu il ne faut pas faire confiance a la collecte parce que l organisateur a regarde son telephone pendant la presentation."],
  ['Yara rejects the podcast advice because the host made a bad prediction once.', "Yara rejette le conseil du podcast parce que l animateur a fait une mauvaise prediction un jour."],
  ['Dan says the traffic solution is useless because the speaker used a slideshow with too many colors.', 'Dan dit que la solution de circulation est inutile parce que l orateur a utilise un diaporama trop colore.'],
  ['Mina dismisses the cafeteria change because the presenter coughed mid-sentence.', "Mina rejette le changement de cafetaria parce que la personne qui presentait a tousse au milieu d une phrase."],
  ['Eric says the climate suggestion is wrong because one supporter of it was rude in the comments.', "Eric dit que la suggestion climatique est fausse parce qu un de ses partisans a ete grossier dans les commentaires."],
  ['Grace thinks the volunteer schedule is nonsense because the meeting started five minutes late.', 'Grace pense que le planning des benevoles est absurde parce que la reunion a commence avec cinq minutes de retard.'],
  ['Owen rejects the charity report because the accountant wore sneakers.', "Owen rejette le rapport de l association parce que le comptable portait des baskets."],
  ['Mila says the garden plan is bad because the speaker laughed at the wrong moment.', "Mila dit que le projet de jardin est mauvais parce que l orateur a ri au mauvais moment."],
  ['Jin thinks the library suggestion is invalid because the author has a messy desk.', 'Jin pense que la proposition pour la bibliotheque est invalide parce que son auteur a un bureau en desordre.'],
  ['Ravi dismisses the class announcement because the poster had poor graphics.', "Ravi balaie l annonce de la classe parce que l affiche avait des graphismes mediocres."],
  ['Sofia says the safety warning is false because the speaker spoke too quickly.', "Sofia dit que l avertissement de securite est faux parce que l orateur parlait trop vite."],
  ['Ben argues the city survey is invalid because the respondent spelled a street name wrong.', "Ben dit que le sondage de la ville n est pas valable parce qu un repondant a mal orthographie un nom de rue."],
  ['Nora rejects the lunch menu because the chef once made a bad joke on stage.', 'Nora rejette le menu du dejeuner parce que le chef a deja fait une mauvaise blague sur scene.'],
  ['Alex says the study is useless because the researcher wore a wrinkled shirt.', "Alex dit que l etude ne vaut rien parce que le chercheur portait une chemise froissee."],
  ['Maya thinks the neighborhood notice is wrong because the speaker paused too often.', "Maya pense que l avis du quartier est faux parce que l orateur faisait trop de pauses."],
  ['Theo dismisses the training plan because the trainer had one bad day.', "Theo rejette le plan de formation parce que l entraineur a eu une mauvaise journee."],
  ['Lina says the new policy is bad because the author was awkward at lunch.', "Lina dit que la nouvelle politique est mauvaise parce que son auteur etait maladroit au dejeuner."],
  ['Omar thinks the event summary is misleading because the editor used an exclamation mark.', "Omar pense que le resume de l evenement est trompeur parce que l editeur a utilise un point d exclamation."],
  ['Priya dismisses the climate graph because the presenter blinked a lot.', 'Priya rejette le graphique climatique parce que la personne qui le presentait clignait beaucoup des yeux.'],
  ['Nina says the school calendar is wrong because the email subject was too casual.', "Nina dit que le calendrier scolaire est faux parce que l objet du courriel etait trop familier."],
  ['Eli rejects the road closure notice because the speaker had a cold.', 'Eli rejette l avis de fermeture de route parce que l orateur avait un rhume.'],
  ['Rosa thinks the food truck review is invalid because the reviewer likes spicy food.', 'Rosa pense que la critique du food truck est invalide parce que le critique aime la nourriture epicee.'],
  ['Jules says the health tip is bad because the presenter held the paper with two hands.', 'Jules dit que le conseil sante est mauvais parce que la presentatrice tenait la feuille avec deux mains.'],
  ['Ava dismisses the transit plan because the speaker used a joke at the start.', "Ava balaie le plan de transport parce que l orateur a commence par une blague."],
  ['Noah says the recycling chart is false because the designer used a blue background.', "Noah dit que le graphique sur le recyclage est faux parce que le designer a utilise un fond bleu."],
  ['Kim rejects the meeting minutes because the secretary typed too slowly.', 'Kim rejette le compte rendu de reunion parce que la secretaire tapait trop lentement.'],
  ['Salma thinks the volunteer appeal is bad because the speaker misread one number.', "Salma pense que l appel aux benevoles est mauvais parce que l orateur a mal lu un chiffre."],
  ['Hugo says the app idea is nonsense because the founder wore a loud jacket.', 'Hugo dit que l idee d application est absurde parce que le fondateur portait une veste voyante.'],
  ['Lea dismisses the school assembly because the microphone squeaked once.', "Lea rejette l assemblee scolaire parce que le micro a couine une fois."],
  ['Max thinks the restaurant inspection is unreliable because the inspector smiled too much.', "Max pense que l inspection du restaurant n est pas fiable parce que l inspecteur souriait trop."],
  ['Iris says the survey result is fake because the presenter shuffled her notes.', 'Iris dit que le resultat du sondage est faux parce que la presentatrice a melange ses notes.'],
  ['Gabe says the city plan is garbage because the architect wore a red tie.', "Gabe dit que le plan de la ville est nul parce que l architecte portait une cravate rouge."],
  ['Tara dismisses the workshop because the host repeated one word.', 'Tara rejette l atelier parce que l animatrice a repete un mot.'],
];

const OPTIONS_EN = ['Fallacy Fallacy', 'Ad Hominem', 'Red Herring', 'No True Scotsman'];
const OPTIONS_FR = ['Sophisme du sophisme', 'Attaque ad hominem', 'Fausse piste', 'Aucun vrai Écossais'];

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

export const FALLACY_FALLACY_EXPANSION_EN: Question[] = SCENARIOS.map(([english], index) => {
  const correctIndex = index % 4;
  return {
    id: 37101 + index,
    level: 6,
    persona_stage: PersonaStage.PLANKTON,
    concept: 'Fallacy Fallacy',
    difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Which fallacy is used here?\n\n"${english}"`,
    options: rotatedOptions(OPTIONS_EN, correctIndex),
    correct_option_index: correctIndex,
    explanation: 'The argument is rejected because of a flaw in its form or presentation, not because its conclusion has actually been disproved.',
    detailedExplanationBeginner: 'A bad argument does not automatically mean the conclusion is false.',
    detailedExplanationIntermediate: 'The response attacks a weakness in the reasoning and treats that as proof that the conclusion itself must be wrong.',
    detailedExplanationExpert: 'This is the fallacy fallacy: a flawed argument can still accidentally support a true conclusion. The correct move is to separate the quality of the reasoning from the truth of the claim.',
    questionFormat: 'standard'
  };
});

export const FALLACY_FALLACY_EXPANSION_FR: Question[] = SCENARIOS.map(([, french], index) => {
  const correctIndex = index % 4;
  return {
    id: 37101 + index,
    level: 6,
    persona_stage: PersonaStage.PLANKTON,
    concept: 'Sophisme du sophisme',
    difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Quel sophisme est utilisé ici ?\n\n"${french}"`,
    options: rotatedOptions(OPTIONS_FR, correctIndex),
    correct_option_index: correctIndex,
    explanation: "L'argument est rejeté à cause d'un défaut de forme ou de présentation, pas parce que sa conclusion a été réfutée.",
    detailedExplanationBeginner: "Un mauvais argument ne rend pas automatiquement la conclusion fausse.",
    detailedExplanationIntermediate: "La réponse attaque une faiblesse du raisonnement et traite cela comme une preuve que la conclusion elle-même doit être fausse.",
    detailedExplanationExpert: "C'est le sophisme du sophisme : un argument défectueux peut malgré tout soutenir par hasard une conclusion vraie. Il faut séparer la qualité du raisonnement de la vérité de l'affirmation.",
    questionFormat: 'standard'
  };
});
