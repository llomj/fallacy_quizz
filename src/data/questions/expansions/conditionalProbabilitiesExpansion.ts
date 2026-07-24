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
