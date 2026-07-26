import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says P(E|H) and P(H|E) are the same thing, so the report is confused.', 'Maya dit que P(E|H) et P(H|E) sont la meme chose, donc le rapport est confus.'],
  ['Leo says the chance of a test result given illness is not the same as the chance of illness given a test result.', 'Leo dit que la chance d un resultat de test sachant la maladie n est pas la meme que la chance de maladie sachant un resultat de test.'],
  ['Priya says the file match was strong evidence, but she cannot swap the conditional direction.', 'Priya dit que la correspondance du fichier etait une forte preuve, mais qu elle ne peut pas inverser la direction conditionnelle.'],
  ['Omar says the alarm rate under threat is different from the threat rate after the alarm.', 'Omar dit que le taux d alarme sous menace est different du taux de menace apres l alarme.'],
  ['Rina says the symptom appearing with disease does not equal disease appearing with the symptom.', 'Rina dit que le symptome apparaissant avec la maladie n est pas egal a la maladie apparaissant avec le symptome.'],
  ['Ben says the rule on the label is conditional on the item, not the other way around.', 'Ben dit que la regle sur l etiquette est conditionnelle a l objet, pas l inverse.'],
  ['Zoe says the clue in the case file is about one conditional probability, not both.', 'Zoé dit que l indice dans le dossier concerne une seule probabilite conditionnelle, pas les deux.'],
  ['Kai says the scanner reading is not the same as the chance the scanner is reading correctly.', 'Kai dit que la lecture du scanner n est pas la meme chose que la chance que le scanner lise correctement.'],
  ['Nora says the doctor should separate the probability of a rash given the illness from the probability of the illness given the rash.', 'Nora dit que le medecin doit separer la probabilite d une eruption sachant la maladie de la probabilite de la maladie sachant l eruption.'],
  ['Eli says the same symbol changes meaning when you reverse the conditional.', 'Eli dit que le meme symbole change de sens quand on inverse la conditionnelle.'],
  ['Lina says the positive result is P(result|disease), not P(disease|result).', 'Lina dit que le resultat positif est P(resultat|maladie), pas P(maladie|resultat).'],
  ['Grant says the jury should not turn the evidence direction backward.', 'Grant dit que le jury ne doit pas inverser la direction de la preuve.'],
  ['Tia says the email filter score is conditional on spam, while the spam chance is conditional on the score.', 'Tia dit que le score du filtre email est conditionnel au spam, tandis que la chance de spam est conditionnelle au score.'],
  ['Noah says the checkpoint hit rate is not the same as the chance the person is dangerous.', 'Noah dit que le taux de detection au poste de controle n est pas la meme chose que la chance que la personne soit dangereuse.'],
  ['Mia says the lab note gives one direction of evidence, but not the reverse.', 'Mia dit que la note du laboratoire donne une direction de preuve, mais pas l inverse.'],
  ['Jules says the false-positive rate and the posterior probability are two different quantities.', 'Jules dit que le taux de faux positif et la probabilite posterieure sont deux quantites differentes.'],
  ['Ava says the question is about conditional direction, not just a bigger or smaller number.', 'Ava dit que la question concerne la direction conditionnelle, pas seulement un nombre plus grand ou plus petit.'],
  ['Finn says the same outcome can have different probabilities depending on which event you condition on.', 'Finn dit que le meme resultat peut avoir des probabilites differentes selon l evenement sur lequel on conditionne.'],
  ['Mina says the clue only tells you how the evidence behaves under one assumption.', 'Mina dit que l indice ne dit que comment la preuve se comporte sous une seule hypothese.'],
  ['Theo says the mistaken move is reversing the conditional and acting like it is still the same statement.', 'Theo dit que l erreur consiste a inverser la conditionnelle et a agir comme si c etait encore la meme affirmation.'],
  ['Juno says the breathalyzer reading is P(reading|drinking), not P(drinking|reading).', 'Juno dit que la lecture de l ethylotest est P(lecture|consommation), pas P(consommation|lecture).'],
  ['Iris says the result from the screening is evidence strength in one direction only.', 'Iris dit que le resultat du depistage est une force de preuve dans une seule direction.'],
  ['Cole says the table in the report should not be read backwards.', 'Cole dit que le tableau du rapport ne doit pas etre lu a l envers.'],
  ['Riley says the sign on the door tells you the rule for entry, not the probability of entry after the sign.', 'Riley dit que le panneau sur la porte indique la regle d entree, pas la probabilite d entree apres le panneau.'],
  ['Pia says the same clue can be correct evidence without being the same conditional.', 'Pia dit que le meme indice peut etre une preuve correcte sans etre la meme conditionnelle.'],
  ['Hugo says the graph shows how likely the evidence is under a hypothesis, not how likely the hypothesis is under the evidence.', 'Hugo dit que le graphique montre a quel point la preuve est probable sous une hypothese, pas a quel point l hypothese est probable sous la preuve.'],
  ['Sam says the detective should not mix up the direction of the conditional with the size of the number.', 'Sam dit que le detective ne doit pas confondre la direction de la conditionnelle avec la taille du nombre.'],
  ['Jade says the test result is one conditional; the diagnosis probability is another.', 'Jade dit que le resultat du test est une conditionnelle; la probabilite de diagnostic en est une autre.'],
  ['Owen says the random sample rate is conditional on the source, not the final belief.', 'Owen dit que le taux de l echantillon aleatoire est conditionnel a la source, pas a la croyance finale.'],
  ['Lea says the alert being triggered is not the same as the target being real.', 'Lea dit que le declenchement de l alerte n est pas la meme chose que la realite de la cible.'],
  ['Maya says the same number can live in two different conditionals and mean two different things.', 'Maya dit que le meme nombre peut vivre dans deux conditionnelles differentes et signifier deux choses differentes.'],
  ['Ben says the evidence direction is from hypothesis to observation, not from observation to hypothesis.', 'Ben dit que la direction de la preuve va de l hypothese vers l observation, pas de l observation vers l hypothese.'],
  ['Ava says the clue is useful, but only if you keep the conditional straight.', 'Ava dit que l indice est utile, mais seulement si on garde la conditionnelle claire.'],
  ['Omar says the report mixes up the conditional direction and therefore overstates the conclusion.', 'Omar dit que le rapport melange la direction conditionnelle et surestime donc la conclusion.'],
  ['Nina says the same finding can be written as P(F|H) without becoming P(H|F).', 'Nina dit que la meme constatation peut s ecrire P(F|H) sans devenir P(H|F).'],
  ['Eli says the background rate matters because it keeps the conditional directions from being mistaken.', 'Eli dit que le taux de fond compte parce qu il evite de confondre les directions conditionnelles.'],
  ['Lina says the screen result is one side of the equation and the diagnosis is the other.', 'Lina dit que le resultat du depistage est un cote de l equation et le diagnostic l autre.'],
  ['Grant says the menu icon warning is conditional on the app state, not the reverse.', 'Grant dit que l avertissement de l icone du menu est conditionnel a l etat de l application, pas l inverse.'],
  ['Tia says the same evidence can support a claim without turning into the claim itself.', 'Tia dit que la meme preuve peut soutenir une affirmation sans devenir cette affirmation elle-meme.'],
  ['Noah says the chart shows one conditional probability, not a direct fact about innocence or guilt.', 'Noah dit que le graphique montre une probabilite conditionnelle, pas un fait direct sur l innocence ou la culpabilite.'],
  ['Mia says the search hit means the evidence is compatible with the hypothesis, not that the hypothesis is proven.', 'Mia dit que la detection signifie que la preuve est compatible avec l hypothese, pas que l hypothese est prouvee.'],
  ['Jules says the school example is about keeping antecedent and consequent separate.', 'Jules dit que l exemple scolaire consiste a garder antecedent et consequent separes.'],
  ['Iris says the same finding can be expressed as a conditional likelihood, which is not the same as belief.', 'Iris dit que le meme resultat peut s exprimer comme une vraisemblance conditionnelle, ce qui n est pas la meme chose que la croyance.'],
  ['Cole says the clue is direction-sensitive, so reversing it creates a mistake.', 'Cole dit que l indice est sensible a la direction, donc l inverser cree une erreur.'],
  ['Riley says the probability of the evidence given the hypothesis is not the same as the probability of the hypothesis given the evidence.', 'Riley dit que la probabilite de la preuve sachant l hypothese n est pas la meme que la probabilite de l hypothese sachant la preuve.'],
  ['Pia says the conclusion depends on which event you are holding fixed.', 'Pia dit que la conclusion depend de l evenement que vous maintenez fixe.'],
  ['Hugo says the same number in the spreadsheet cannot be read in both directions at once.', 'Hugo dit que le meme nombre dans la feuille de calcul ne peut pas etre lu dans les deux directions a la fois.'],
  ['Sam says the clue is about evidence under a hypothesis, not hypothesis under evidence.', 'Sam dit que l indice concerne la preuve sous une hypothese, pas l hypothese sous la preuve.'],
  ['Jade says the formulas look similar, but the conditional direction flips the meaning.', 'Jade dit que les formules se ressemblent, mais que la direction conditionnelle en change le sens.'],
  ['Owen says the final lesson is to stop swapping P(A|B) with P(B|A).', 'Owen dit que la lecon finale est d arreter de permuter P(A|B) avec P(B|A).'],
  ['Mia says the medicine helping patients does not mean patients help the medicine appear.', 'Mia dit que le fait que le medicament aide les patients ne veut pas dire que les patients font apparaître le medicament.'],
  ['Leo says a smoke alarm going off is not the same as the chance of a fire given the alarm.', 'Leo dit qu une alarme incendie qui sonne n est pas la meme chose que la chance d un incendie sachant l alarme.'],
  ['Priya says a positive screen result is not the same as the chance of illness after the screen.', 'Priya dit qu un test de depistage positif n est pas la meme chose que la chance de maladie après le test.'],
  ['Omar says a package arriving damaged changes the chance of damage given shipping, not the reverse.', 'Omar dit qu un colis arrive abime change la chance d avoir un dommage sachant l expedition, pas l inverse.'],
  ['Rina says a dog barking at night is evidence under the noise condition, not proof that every noise means a dog.', 'Rina dit qu un chien qui aboie la nuit est une preuve sous la condition du bruit, pas la preuve que chaque bruit signifie un chien.'],
  ['Ben says a low battery warning is P(warning|battery low), not P(battery low|warning).', 'Ben dit qu un avertissement de batterie faible est P(avertissement|batterie faible), pas P(batterie faible|avertissement).'],
  ['Zoe says the email being flagged is one conditional, while spam being present is the other.', 'Zoé dit que le courriel signalé est une conditionnelle, tandis que la présence de spam en est une autre.'],
  ['Kai says a school absence note is not the same as the chance a student is sick after seeing the note.', 'Kai dit qu un mot d absence scolaire n est pas la meme chose que la chance qu un élève soit malade après avoir vu le mot.'],
  ['Nora says the survey response rate should not be mistaken for the chance a person responds given the survey.', 'Nora dit que le taux de réponse du sondage ne doit pas être confondu avec la chance qu une personne réponde sachant le sondage.'],
  ['Eli says the traffic camera catching a plate is one direction; the chance a driver gets caught after the plate is another.', 'Eli dit que la camera de circulation capturant une plaque est une direction ; la chance qu un conducteur soit pris après la plaque en est une autre.'],
  ['Lina says the test behaving badly under fraud is different from fraud being likely after a bad test.', 'Lina dit que le test qui se comporte mal sous la fraude est different de la fraude probable après un mauvais test.'],
  ['Grant says the package label is about how labels appear when a parcel is fragile, not how fragile it is after seeing the label.', 'Grant dit que l etiquette du colis concerne la façon dont les étiquettes apparaissent quand un colis est fragile, pas sa fragilité après avoir vu l etiquette.'],
  ['Tia says a fever being linked with flu does not mean flu is likely just because fever is present.', 'Tia dit qu une fièvre liée à la grippe ne veut pas dire que la grippe est probable juste parce que la fièvre est présente.'],
  ['Noah says the airport scanner rate is not the same as the chance of danger after the scan.', 'Noah dit que le taux du scanner de l aeroport n est pas la meme chose que la chance de danger après le scan.'],
  ['Mia says a product being recalled changes the odds of defects given the recall, not the odds of recall given defects.', 'Mia dit qu un produit rappelé change les chances de défauts sachant le rappel, pas les chances de rappel sachant les défauts.'],
  ['Jules says the math problem should not be read backward just because the answer looks similar.', 'Jules dit que le problème de maths ne doit pas être lu à l envers juste parce que la réponse se ressemble.'],
  ['Ava says a warning light appearing is evidence under one condition, not a direct belief about the condition itself.', 'Ava dit qu un voyant d alerte qui s allume est une preuve sous une condition, pas une croyance directe sur la condition elle-même.'],
  ['Finn says the same percentage can mean different things depending on whether you are asking about the test or the disease.', 'Finn dit que le meme pourcentage peut vouloir dire des choses differentes selon que l on parle du test ou de la maladie.'],
  ['Mina says the jury should ask what happens under the hypothesis before asking what the hypothesis is after the evidence.', 'Mina dit que le jury doit demander ce qui se passe sous l hypothese avant de demander ce qu est l hypothese après la preuve.'],
  ['Theo says the map clue is conditional on the route, not a direct probability that the route is correct.', 'Théo dit que l indice de la carte dépend de la route, pas d une probabilite directe que la route soit correcte.'],
  ['Juno says a red stamp on the form tells you something about the form under one rule, not the rule after the stamp.', 'Juno dit qu un tampon rouge sur le formulaire dit quelque chose sur le formulaire sous une règle, pas sur la règle après le tampon.'],
  ['Iris says the correlation between two events is not the same as either conditional probability.', 'Iris dit que la corrélation entre deux événements n est pas la meme chose que l une ou l autre des probabilités conditionnelles.'],
  ['Cole says the airline delay rate is one side of the question, while passenger delay risk is the other.', 'Cole dit que le taux de retard des compagnies est un coté de la question, tandis que le risque de retard pour le passager en est un autre.'],
  ['Riley says the positive result on the app is not the same as the chance of the problem after the result.', 'Riley dit que le résultat positif de l application n est pas la meme chose que la chance du probleme après le résultat.'],
  ['Pia says the clue tells you about the evidence if the hypothesis is true, not the hypothesis if the evidence is true.', 'Pia dit que l indice parle de la preuve si l hypothese est vraie, pas de l hypothese si la preuve est vraie.'],
  ['Hugo says the same number should be read as a conditional likelihood, not as a final verdict.', 'Hugo dit que le meme nombre doit être lu comme une vraisemblance conditionnelle, pas comme un verdict final.'],
  ['Sam says a bus being late after rain is not the same as rain being likely after a late bus.', 'Sam dit qu un bus en retard après la pluie n est pas la meme chose que de rendre la pluie probable après un bus en retard.'],
  ['Jade says the menu note about spicy food is about what happens if you choose spicy food, not the reverse.', 'Jade dit que la note du menu sur la nourriture épicée concerne ce qui arrive si vous choisissez l épicé, pas l inverse.'],
  ['Owen says a false alarm rate is not the same as guilt after an alarm.', 'Owen dit qu un taux de fausse alerte n est pas la meme chose que la culpabilité après une alerte.'],
  ['Lea says the badge scan result is evidence under one assumption and belief under another.', 'Léa dit que le résultat du scan du badge est une preuve sous une hypothèse et une croyance sous une autre.'],
  ['Maya says the same doctor note can be written as one conditional without becoming the other.', 'Maya dit que la même note du médecin peut s écrire comme une conditionnelle sans devenir l autre.'],
  ['Ben says the phone alert tells you how often alerts happen when the battery is low, not how likely low battery is after an alert.', 'Ben dit que l alerte du téléphone dit à quelle fréquence les alertes se produisent quand la batterie est faible, pas à quel point la batterie faible est probable après une alerte.'],
  ['Lina says the package scan is a clue about parcels under one state, not a state judgment after the scan.', 'Lina dit que le scan du colis est un indice sur les colis sous un état, pas un jugement sur l état après le scan.'],
  ['Omar says the experiment result is one conditional in the setup, not the setup itself.', 'Omar dit que le résultat de l expérience est une conditionnelle dans le montage, pas le montage lui-même.'],
  ['Nina says the checkmark in the app means one thing when the account is active and another when you ask about activation.', 'Nina dit que la coche dans l application veut dire une chose quand le compte est actif et une autre quand on parle de l activation.'],
  ['Eli says the same statistic should not be treated as both the cause and the effect.', 'Eli dit que la meme statistique ne doit pas être traitée comme la cause et l effet à la fois.'],
  ['Lina says the lab pattern indicates how a sample behaves under one condition, not how that condition behaves under the sample.', 'Lina dit que le motif du laboratoire indique comment un echantillon se comporte sous une condition, pas comment cette condition se comporte sous l echantillon.'],
  ['Grant says the rule checker reports one direction of probability and the diagnosis uses the other direction.', 'Grant dit que le vérificateur de règles rapporte une direction de probabilité et que le diagnostic utilise l autre direction.'],
  ['Tia says the school notice is about what happens if you miss class, not the chance of missing class after reading the notice.', 'Tia dit que l avis scolaire parle de ce qui se passe si vous manquez le cours, pas de la chance de manquer le cours après avoir lu l avis.'],
  ['Noah says the symptom chart gives P(symptom|illness), not P(illness|symptom).', 'Noah dit que le tableau des symptomes donne P(symptôme|maladie), pas P(maladie|symptôme).'],
  ['Mia says the security beep is evidence under the scanner rule, not the scanner rule under the beep.', 'Mia dit que le bip de sécurité est une preuve sous la règle du scanner, pas la règle du scanner sous le bip.'],
  ['Jules says the app metric can look impressive without telling you the chance of success after the metric.', 'Jules dit que la métrique de l application peut paraitre impressionnante sans indiquer la chance de réussite après la métrique.'],
  ['Iris says the search result score is not the same as the probability the query is true after the score.', 'Iris dit que le score du résultat de recherche n est pas la meme chose que la probabilité que la requête soit vraie après le score.'],
  ['Cole says the red light means stop under the rule, not that the rule becomes stop after the light.', 'Cole dit que le feu rouge signifie s arrêter sous la règle, pas que la règle devient s arrêter après le feu.'],
  ['Riley says the reminder email is one conditional; the chance of paying after the email is another.', 'Riley dit que le courriel de rappel est une conditionnelle ; la chance de payer après le courriel en est une autre.'],
  ['Pia says the same diagnostic number can be useful, but only in the correct direction.', 'Pia dit que le meme nombre diagnostique peut être utile, mais seulement dans la bonne direction.'],
  ['Hugo says the game notification is about what happens if you open the app, not what happens after the notification.', 'Hugo dit que la notification du jeu parle de ce qui se passe si vous ouvrez l application, pas de ce qui se passe après la notification.'],
  ['Sam says the evidence should be read as likelihood first and belief second.', 'Sam dit que la preuve doit être lue comme vraisemblance d abord et croyance ensuite.'],
  ['Jade says a valid conditional cannot be flipped just because the wording is compact.', 'Jade dit qu une conditionnelle valide ne peut pas etre inversée juste parce que la formulation est concise.'],
  ['Owen says the last step is to remember that the arrow points one way, not both.', 'Owen dit que la dernière étape est de se rappeler que la flèche pointe dans un sens, pas dans les deux.'],
];

const OPTIONS_EN = [
  'The two probabilities are conditional on different things',
  'The likelihood ratio',
  'The probability of innocence',
  'The same evidence can support different conclusions depending on the prior probability',
];

const OPTIONS_FR = [
  'Les deux probabilités sont conditionnelles à des choses différentes',
  'Le rapport de vraisemblance',
  'La probabilité d innocence',
  'La même preuve peut mener à des conclusions différentes selon la probabilité initiale',
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
      id: 42901 + index,
      level: 7,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Les deux probabilités sont conditionnelles à des choses différentes' : 'The two probabilities are conditional on different things',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel concept statistique est illustré ici ?' : 'Which statistical concept is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'Les deux probabilites conditionnelles peuvent paraitre proches mais elles ne comparent pas la meme chose.'
        : 'The two conditional probabilities can look similar, but they do not compare the same thing.',
      detailedExplanationBeginner: isFrench
        ? 'La direction du calcul change le sens.'
        : 'The direction of the calculation changes the meaning.',
      detailedExplanationIntermediate: isFrench
        ? 'P(A|B) et P(B|A) ne sont pas interchangeables.'
        : 'P(A|B) and P(B|A) are not interchangeable.',
      detailedExplanationExpert: isFrench
        ? 'Cette erreur consiste a confondre la condition sur laquelle on calcule. P(E|H) mesure la frequence de l evidence si l hypothese est vraie, alors que P(H|E) est la probabilite de l hypothese apres avoir observe la preuve. On ne peut pas passer de l une a l autre sans utiliser le taux de base et les autres informations pertinentes.'
        : 'This error comes from confusing which condition you are calculating under. P(E|H) measures how often the evidence appears if the hypothesis is true, while P(H|E) is the probability of the hypothesis after observing the evidence. You cannot move from one to the other without using the base rate and the other relevant information.',
      questionFormat: 'standard',
    };
  });
}

export const CONDITIONAL_PROBABILITIES_EXPANSION_EN: Question[] = createQuestions('en');
export const CONDITIONAL_PROBABILITIES_EXPANSION_FR: Question[] = createQuestions('fr');
