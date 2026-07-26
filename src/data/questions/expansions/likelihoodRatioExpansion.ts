import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says the 20:1 test result is strong evidence for the disease, but she still wants the prior risk.', 'Maya dit que le resultat du test a 20 contre 1 est une forte preuve de maladie, mais elle veut quand meme connaitre le risque initial.'],
  ['Leo explains that the fingerprint match is 500 times more likely under guilt than innocence, which is the evidence strength he needs.', 'Leo explique que la correspondance d empreinte est 500 fois plus probable sous la culpabilite que sous l innocence, ce qui est la force de preuve dont il a besoin.'],
  ['Priya says the airport scanner gives a 12:1 likelihood ratio, so the alert is meaningful even before the base rate.', 'Priya dit que le scanner de l aeroport donne un rapport de vraisemblance de 12 pour 1, donc l alerte est significative meme avant le taux de base.'],
  ['Omar compares two weather forecasts and says the better one is the one with the higher likelihood ratio against rain.', 'Omar compare deux previsions meteo et dit que la meilleure est celle qui a le rapport de vraisemblance le plus eleve contre la pluie.'],
  ['Rina says the smoke detector is useful because it is far more likely to beep when there is a fire than when there is not.', 'Rina dit que le detecteur de fumee est utile parce qu il est bien plus probable de sonner lorsqu il y a un incendie que lorsqu il n y en a pas.'],
  ['Ben treats a positive malware scan as evidence strength, not as the final probability of infection.', 'Ben traite une analyse positive de malware comme une force de preuve, pas comme la probabilite finale d infection.'],
  ['Zoe says the 1,000:1 DNA ratio tells you how informative the DNA match is, not directly how guilty the suspect is.', 'Zoé dit que le rapport ADN de 1 000 pour 1 indique a quel point la correspondance ADN est informative, pas directement a quel point le suspect est coupable.'],
  ['Kai says the cheaper detector is worse because it has a lower ratio of true positives to false positives.', 'Kai dit que le detecteur moins cher est moins bon parce qu il a un rapport plus faible entre vrais positifs et faux positifs.'],
  ['Nora says the home pregnancy test gives evidence about pregnancy, but it still has to be combined with the prior chance.', 'Nora dit que le test de grossesse donne des indices sur une grossesse, mais qu il faut encore le combiner avec la chance initiale.'],
  ['Eli says the new security alert is only as good as its ratio of hits under threat versus no threat.', 'Eli dit que la nouvelle alerte de securite ne vaut que par son rapport entre les resultats sous menace et sans menace.'],
  ['Lina says the doctor is right to ask how often the symptom appears when sick versus when healthy.', 'Lina dit que le medecin a raison de demander a quelle frequence le symptome apparait quand on est malade par rapport a quand on est en bonne sante.'],
  ['Grant says the forensic clue matters because it is much more likely if the suspect is guilty.', 'Grant dit que l indice medico-légal compte parce qu il est bien plus probable si le suspect est coupable.'],
  ['Tia says the software bug report is persuasive because the crash happens far more often with the bug than without it.', 'Tia dit que le rapport de bug est convaincant parce que le plantage arrive bien plus souvent avec le bug que sans lui.'],
  ['Noah says the cafeteria smell is weak evidence for fish because that smell also appears on cleaning day.', 'Noah dit que l odeur de la cantine est une faible preuve de poisson parce que cette odeur apparait aussi le jour du nettoyage.'],
  ['Mia says the rare-name match is informative because it is far more probable under guilt than innocence.', 'Mia dit que la correspondance de nom rare est informative parce qu elle est bien plus probable sous la culpabilite que sous l innocence.'],
  ['Jules says the alert from the sensor should be interpreted as a ratio, not as certainty.', 'Jules dit que l alerte du capteur doit etre comprise comme un rapport, pas comme une certitude.'],
  ['Ava says the positive bus complaint is meaningful because it is much more likely when service is actually bad.', 'Ava dit que la plainte positive sur le bus a du sens parce qu elle est bien plus probable quand le service est vraiment mauvais.'],
  ['Finn says the library rumor is weak evidence because the same rumor appears in ordinary gossip too.', 'Finn dit que la rumeur de la bibliotheque est une preuve faible parce que la meme rumeur apparait aussi dans les commérages ordinaires.'],
  ['Mina says the hospital should ask whether the symptom is much more common in the disease group than the healthy group.', 'Mina dit que l hopital doit se demander si le symptome est beaucoup plus courant dans le groupe malade que dans le groupe sain.'],
  ['Theo says the match on the shoe matters only if it changes the odds a lot compared with innocent people.', 'Theo dit que la correspondance sur la chaussure compte seulement si elle change beaucoup les probabilites par rapport aux personnes innocentes.'],
  ['Juno says the email filter works by comparing how likely a phrase is in spam versus normal mail.', 'Juno dit que le filtre d email fonctionne en comparant a quel point une phrase est probable dans le spam par rapport au courrier normal.'],
  ['Iris says the result from the lab is not enough alone, but the likelihood ratio gives real evidence strength.', 'Iris dit que le resultat du laboratoire ne suffit pas seul, mais que le rapport de vraisemblance donne une vraie force de preuve.'],
  ['Cole says the scanner is useful when the ratio of signal under threat to signal under no threat is high.', 'Cole dit que le scanner est utile lorsque le rapport du signal sous menace au signal sans menace est eleve.'],
  ['Riley says the 30:1 clue is not guilt itself, but it is a strong clue.', 'Riley dit que l indice 30 contre 1 n est pas la culpabilite elle-meme, mais c est un indice fort.'],
  ['Pia says the court should understand the evidence as a ratio of patterns, not a direct guilt percentage.', 'Pia dit que le tribunal doit comprendre la preuve comme un rapport de motifs, pas comme un pourcentage direct de culpabilite.'],
  ['Hugo says the medical screen is valuable because positive results are much more common in sick patients.', 'Hugo dit que le depistage medical est utile parce que les resultats positifs sont bien plus courants chez les patients malades.'],
  ['Sam says the theater review is only interesting if the review pattern is very different from random chatter.', 'Sam dit que la critique de theatre n a d interet que si le motif des critiques est tres different d un bavardage aleatoire.'],
  ['Jade says the parking sensor is a good detector because it beeps far more often when a car is there.', 'Jade dit que le capteur de stationnement est un bon detecteur parce qu il bippe bien plus souvent lorsqu une voiture est la.'],
  ['Owen says the phone message should be judged by how much more likely it is under real emergencies than under normal texting.', 'Owen dit que le message telephone doit etre juge par sa probabilite bien plus forte en cas d urgence reelle qu en texte normal.'],
  ['Lea says the quiz result should not be treated as guilt, only as evidence that shifts the odds.', 'Lea dit que le resultat du quiz ne doit pas etre traite comme une culpabilite, seulement comme une preuve qui modifie les probabilites.'],
  ['Maya says the support ticket is strong evidence if it happens much more often when the app is broken.', 'Maya dit que le ticket de support est une forte preuve s il arrive beaucoup plus souvent lorsque l application est casse.'],
  ['Ben says the teacher should care more about the ratio of correct answers under mastery versus guessing.', 'Ben dit que le professeur devrait accorder plus d importance au rapport de bonnes reponses sous maitrise que sous hasard.'],
  ['Ava says the security badge beep is only useful if it is far more likely for an intruder than for an employee.', 'Ava dit que le bip du badge de securite n est utile que s il est bien plus probable chez un intrus que chez un employe.'],
  ['Omar says the clue from the shoe sole is evidence because it changes the odds much more for the suspect than for the public.', 'Omar dit que l indice de la semelle est une preuve parce qu il change les probabilites bien plus pour le suspect que pour le public.'],
  ['Nina says the lab result should be explained by how the test behaves in sick people compared with healthy people.', 'Nina dit que le resultat du labo doit etre explique par la facon dont le test se comporte chez les malades par rapport aux personnes saines.'],
  ['Eli says the positive review count matters only after we know how rare positive reviews are in general.', 'Eli dit que le nombre d avis positifs ne compte qu apres avoir su a quel point les avis positifs sont rares en general.'],
  ['Lina says the exact same evidence can point in different directions once the prior odds change.', 'Lina dit que la meme preuve exacte peut pointer dans des directions differentes une fois les probabilites initiales changees.'],
  ['Grant says the family photo match is only meaningful if it is much more likely for the right family than for random families.', 'Grant dit que la correspondance de photo de famille n a de sens que si elle est bien plus probable pour la bonne famille que pour des familles aleatoires.'],
  ['Tia says the cheap alert system is bad because its true hit rate is only slightly better than its false alarm rate.', 'Tia dit que le systeme d alerte bon marche est mauvais parce que son taux de vrai signal n est que legerement meilleur que son taux de fausse alerte.'],
  ['Noah says the car alarm tells you something only if it is much more likely when the car is actually stolen.', 'Noah dit que l alarme de voiture n indique quelque chose que si elle est bien plus probable quand la voiture est vraiment volee.'],
  ['Mia says the positive review from a tiny sample is just a weak ratio, not a final verdict.', 'Mia dit que l avis positif d un petit echantillon n est qu un rapport faible, pas un verdict final.'],
  ['Jules says the clue from the crowded train station is powerful only if it is far more common in the target case than in ordinary mornings.', 'Jules dit que l indice de la gare bondée n est puissant que s il est bien plus courant dans le cas cible que dans les matins ordinaires.'],
  ['Iris says the medical result is a ratio of how the evidence behaves under illness versus health.', 'Iris dit que le resultat medical est un rapport entre la facon dont la preuve se comporte sous maladie et sous sante.'],
  ['Cole says the positive reading from the device is useful evidence, but only after comparing it with the false-positive background.', 'Cole dit que la lecture positive de l appareil est une preuve utile, mais seulement apres la comparaison avec le bruit de fond des faux positifs.'],
  ['Riley says the threat indicator should be judged as a likelihood ratio, not as a direct probability of danger.', 'Riley dit que l indicateur de menace doit etre juge comme un rapport de vraisemblance, pas comme une probabilite directe de danger.'],
  ['Pia says the clue in the case file changes the odds, which is exactly why the likelihood ratio matters.', 'Pia dit que l indice dans le dossier change les probabilites, et c est exactement pourquoi le rapport de vraisemblance compte.'],
  ['Hugo says the evidence is informative because it separates guilt from innocence better than random guessing.', 'Hugo dit que la preuve est informative parce qu elle distingue mieux la culpabilite de l innocence que le hasard.'],
  ['Sam says the travel warning is only useful if the warning is much more common when a delay is real.', 'Sam dit que l avertissement de voyage n est utile que s il est beaucoup plus courant lorsqu un retard est reel.'],
  ['Jade says the school test is useful if correct answers are far more likely when the student knows the material.', 'Jade dit que le test scolaire est utile si les bonnes reponses sont bien plus probables lorsque l eleve connait la matiere.'],
  ['Theo says the key question is how much the evidence changes the odds, not whether it feels scary.', 'Theo dit que la vraie question est de savoir a quel point la preuve change les probabilites, pas si elle fait peur.'],
  ['Juno says the clue is only strong if it occurs much more often in the guilty scenario than in the innocent one.', 'Juno dit que l indice n est fort que s il apparait beaucoup plus souvent dans le scenario coupable que dans le scenario innocent.'],
  ['Maya says the final takeaway is the ratio, because that is the part that tells you how informative the evidence is.', 'Maya dit que le point final est le rapport, parce que c est ce qui indique a quel point la preuve est informative.'],
  ['Leo says the grocery receipt match is stronger evidence if it shows up much more often in the theft scenario than in normal shopping.', 'Leo dit que la correspondance du ticket de caisse est une preuve plus forte si elle apparait beaucoup plus souvent dans le scenario de vol que dans des courses normales.'],
  ['Priya says the hotel keycard beep is only informative if it is much more common when the guest is breaking rules.', 'Priya dit que le bip de la carte de chambre n est informatif que s il est beaucoup plus courant quand l invite enfreint les regles.'],
  ['Omar says the app alert should be judged by the ratio of alerts under real fraud versus ordinary use.', 'Omar dit que l alerte de l application doit etre jugee par le rapport des alertes sous vraie fraude par rapport a l usage ordinaire.'],
  ['Rina says the doctor wants to know whether the symptom is much likelier in the sick group than in the healthy group.', 'Rina dit que le medecin veut savoir si le symptome est beaucoup plus probable dans le groupe malade que dans le groupe sain.'],
  ['Ben says the security camera signal matters because it is far more common when someone is actually sneaking in.', 'Ben dit que le signal de la camera de securite compte parce qu il est beaucoup plus courant quand quelqu un s infiltre vraiment.'],
  ['Zoe says the spam filter score is evidence strength, not a final spam percentage.', 'Zoé dit que le score du filtre antispam est une force de preuve, pas un pourcentage final de spam.'],
  ['Kai says the positive lab marker is useful because it is much more likely under disease than under health.', 'Kai dit que le marqueur positif du labo est utile parce qu il est beaucoup plus probable sous maladie que sous sante.'],
  ['Nora says the clue on the glove should be judged by how much it changes the odds, not by how dramatic it feels.', 'Nora dit que l indice sur le gant doit etre juge par le changement de probabilites qu il provoque, pas par son cote dramatique.'],
  ['Eli says the parking sensor is meaningful if the beep appears far more often when a car is present.', 'Eli dit que le capteur de stationnement est significatif si le bip apparait beaucoup plus souvent quand une voiture est presente.'],
  ['Lina says the school badge alert is only useful if it fires much more often for intruders than for students.', 'Lina dit que l alerte du badge scolaire n est utile que si elle se declenche beaucoup plus souvent pour les intrus que pour les eleves.'],
  ['Grant says the restaurant smell becomes evidence when it is much more likely in the fish-day scenario than on cleanup day.', 'Grant dit que l odeur du restaurant devient une preuve quand elle est beaucoup plus probable le jour du poisson que le jour du nettoyage.'],
  ['Tia says the telecom warning is informative only if it is far more likely under a real outage.', 'Tia dit que l alerte telecom est informative seulement si elle est bien plus probable lors d une vraie panne.'],
  ['Noah says the sales report clue matters if it is much more common in the fraud scenario than in ordinary sales.', 'Noah dit que l indice du rapport de ventes compte s il est beaucoup plus courant dans le scenario de fraude que dans les ventes ordinaires.'],
  ['Mia says the device ping is only helpful if it happens much more often when the machine is actually faulty.', 'Mia dit que le ping de l appareil n est utile que s il arrive beaucoup plus souvent lorsque la machine est vraiment defectueuse.'],
  ['Jules says the rumor is weak evidence if it appears almost as often in casual gossip as in the real story.', 'Jules dit que la rumeur est une preuve faible si elle apparait presque aussi souvent dans les commérages ordinaires que dans la vraie histoire.'],
  ['Ava says the positive result should be compared with the background rate of positive results in ordinary people.', 'Ava dit que le resultat positif doit etre compare au taux de fond des resultats positifs chez les gens ordinaires.'],
  ['Finn says the clue is strong when the pattern is much rarer under innocence than under guilt.', 'Finn dit que l indice est fort lorsque le motif est beaucoup plus rare sous innocence que sous culpabilite.'],
  ['Mina says the alert tells you something only when the ratio of true hits to false hits is high.', 'Mina dit que l alerte n indique quelque chose que lorsque le rapport entre vrais signaux et faux signaux est eleve.'],
  ['Theo says the court should ask how much more likely the evidence is if the suspect really did it.', 'Theo dit que le tribunal doit demander a quel point la preuve est plus probable si le suspect l a vraiment fait.'],
  ['Juno says the weather app should be judged by whether its rain signal is much more common before rain than on dry days.', 'Juno dit que l appli meteo doit etre jugee par la frequenc du signal de pluie avant la pluie par rapport aux jours secs.'],
  ['Iris says the fraud flag is useful if it appears much more often under fraud than under honest use.', 'Iris dit que le signal de fraude est utile s il apparait beaucoup plus souvent en cas de fraude que lors d une utilisation honnete.'],
  ['Cole says the test answer is informative because correct answers are much more likely when the student studied.', 'Cole dit que la reponse au test est informative parce que les bonnes reponses sont beaucoup plus probables quand l eleve a etudie.'],
  ['Riley says the clue from the recipe card matters if it is far more likely in the missing-dish version than the normal version.', 'Riley dit que l indice de la carte recette compte s il est bien plus probable dans la version du plat manquant que dans la version normale.'],
  ['Pia says the badge beep should be treated as a ratio of how often it occurs under trespass versus under regular entry.', 'Pia dit que le bip du badge doit etre traite comme un rapport de frequence sous intrusion versus sous entree normale.'],
  ['Hugo says the medical sign is evidence because it separates illness from wellness better than chance.', 'Hugo dit que le signe medical est une preuve parce qu il separe la maladie de la bonne sante mieux que le hasard.'],
  ['Sam says the lottery ticket rumor is only interesting if it is much more likely in the winning story than in everyday chatter.', 'Sam dit que la rumeur du ticket de loterie n est interessante que si elle est beaucoup plus probable dans l histoire gagnante que dans les commérages quotidiens.'],
  ['Jade says the positive swipe is meaningful when it is far more common for a real staff member than for a random passerby.', 'Jade dit que le passage de badge positif a du sens quand il est bien plus courant pour un vrai employe que pour un passant aleatoire.'],
  ['Owen says the signal strength matters only if it changes the odds in favor of the disease a lot.', 'Owen dit que la force du signal compte seulement si elle change beaucoup les probabilites en faveur de la maladie.'],
  ['Lea says the questionnaire result is a clue because it is much likelier if the person actually has the condition.', 'Lea dit que le resultat du questionnaire est un indice parce qu il est beaucoup plus probable si la personne a vraiment la condition.'],
  ['Maya says the printout is not a verdict; it is a ratio that helps update the odds.', 'Maya dit que le tirage n est pas un verdict; c est un rapport qui aide a mettre a jour les probabilites.'],
  ['Ben says the medical scanner output is only useful when you know how often it shows up in sick patients compared with healthy ones.', 'Ben dit que la sortie du scanner medical n est utile que si l on sait a quelle frequence elle apparait chez les malades par rapport aux personnes saines.'],
  ['Ava says the complaint log matters if the pattern is much more common in the faulty-service scenario than in the normal-service scenario.', 'Ava dit que le journal de plaintes compte si le motif est beaucoup plus courant dans le scenario de service defectueux que dans celui de service normal.'],
  ['Omar says the tiny alert is only strong evidence if it is much rarer under innocence than under guilt.', 'Omar dit que la petite alerte n est une forte preuve que si elle est beaucoup plus rare sous innocence que sous culpabilite.'],
  ['Nina says the key question is the evidence ratio, not the final probability yet.', 'Nina dit que la vraie question est le rapport de preuve, pas encore la probabilite finale.'],
  ['Eli says the exam clue is strong when it is much more likely in the intended answer than in the distractor answer.', 'Eli dit que l indice de l examen est fort quand il est beaucoup plus probable dans la bonne reponse que dans la mauvaise reponse.'],
  ['Lina says the score matters only if it is much more common in the target case than in ordinary cases.', 'Lina dit que le score compte seulement s il est beaucoup plus courant dans le cas cible que dans les cas ordinaires.'],
  ['Grant says the alert is useful if the true-positive to false-positive ratio is large.', 'Grant dit que l alerte est utile si le rapport vrais positifs sur faux positifs est grand.'],
  ['Tia says the clue from the inbox is evidence strength, not a direct accusation.', 'Tia dit que l indice de la boite de reception est une force de preuve, pas une accusation directe.'],
  ['Noah says the lab signal is compelling because it is far more common with the condition than without it.', 'Noah dit que le signal du labo est convaincant parce qu il est bien plus courant avec la condition que sans elle.'],
  ['Mia says the pattern is informative if it shifts the odds much more than random noise would.', 'Mia dit que le motif est informatif s il fait bouger les probabilites bien plus que ne le ferait le bruit aleatoire.'],
  ['Jules says the warning light is evidence because it is much likelier under a breakdown than normal operation.', 'Jules dit que le voyant d avertissement est une preuve parce qu il est beaucoup plus probable lors d une panne que lors d un fonctionnement normal.'],
  ['Iris says the test outcome is a ratio, and ratios need priors before they become guilt probabilities.', 'Iris dit que le resultat du test est un rapport, et les rapports ont besoin de probabilites initiales avant de devenir des probabilites de culpabilite.'],
  ['Cole says the clue is strong when the same result is rare in innocent cases and common in guilty ones.', 'Cole dit que l indice est fort quand le meme resultat est rare dans les cas innocents et courant dans les cas coupables.'],
  ['Riley says the evidence is best understood as something that changes the odds, not something that ends the reasoning.', 'Riley dit que la preuve se comprend mieux comme quelque chose qui change les probabilites, pas comme quelque chose qui termine le raisonnement.'],
  ['Pia says the detector is useful if the positive result is much more likely in the target condition than in the background.', 'Pia dit que le detecteur est utile si le resultat positif est beaucoup plus probable dans la condition cible que dans le bruit de fond.'],
  ['Hugo says the keycard beep is only meaningful when the odds swing strongly toward the intrusion scenario.', 'Hugo dit que le bip de la carte n a de sens que lorsque les probabilites basculent fortement vers le scenario d intrusion.'],
  ['Sam says the clue from the packet is a likelihood ratio because it compares two competing stories.', 'Sam dit que l indice du paquet est un rapport de vraisemblance parce qu il compare deux histoires concurrentes.'],
  ['Jade says the positive flag is not enough on its own, but it is powerful evidence when the ratio is large.', 'Jade dit que le signal positif ne suffit pas a lui seul, mais c est une preuve puissante quand le rapport est grand.'],
];

const OPTIONS_EN = [
  'The likelihood ratio',
  'The probability of innocence',
  'The same evidence can support different conclusions depending on the prior probability',
  'The two probabilities are conditional on different things',
];

const OPTIONS_FR = [
  'Le rapport de vraisemblance',
  'La probabilité d innocence',
  'La même preuve peut mener à des conclusions différentes selon la probabilité initiale',
  'Les deux probabilités sont conditionnelles à des choses différentes',
];

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
      id: 42601 + index,
      level: 7,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Le rapport de vraisemblance' : 'The likelihood ratio',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel concept statistique est illustré ici ?' : 'Which statistical concept is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'Le rapport de vraisemblance mesure la force de la preuve, pas la probabilité finale de culpabilité.'
        : 'The likelihood ratio measures evidence strength, not the final probability of guilt.',
      detailedExplanationBeginner: isFrench
        ? 'Un grand rapport dit que la preuve est utile.'
        : 'A big ratio says the evidence is useful.',
      detailedExplanationIntermediate: isFrench
        ? 'Il compare la vraisemblance de la preuve sous deux hypotheses différentes.'
        : 'It compares how likely the evidence is under two different hypotheses.',
      detailedExplanationExpert: isFrench
        ? 'En raisonnement bayésien, le rapport de vraisemblance LR = P(E|H1) / P(E|H0) quantifie la force d un indice. Il ne remplace pas la probabilité a posteriori; il doit etre combiné avec les probabilites initiales pour produire une conclusion. Confondre le ratio avec la probabilité finale revient a sauter une étape essentielle de l inference.'
        : 'In Bayesian reasoning, the likelihood ratio LR = P(E|H1) / P(E|H0) quantifies the strength of a clue. It does not replace the posterior probability; it must be combined with the prior probabilities to produce a conclusion. Confusing the ratio with the final probability skips a necessary step in the inference.',
      questionFormat: 'standard',
    };
  });
}

export const LIKELIHOOD_RATIO_EXPANSION_EN: Question[] = createQuestions('en');
export const LIKELIHOOD_RATIO_EXPANSION_FR: Question[] = createQuestions('fr');
