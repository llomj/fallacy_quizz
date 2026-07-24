import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says the analyst sounds scientific by saying "1 in 20,000," but the number still does not answer the real question of guilt.', 'Maya dit que l analyste a l air scientifique en disant « 1 sur 20 000 », mais ce nombre ne repond toujours pas a la vraie question de la culpabilite.'],
  ['Leo says the lab report sounds precise, yet it confuses a rare test hit with the chance that the suspect actually did it.', 'Leo dit que le rapport de labo a l air precis, mais il confond un signal rare du test avec la chance que le suspect soit vraiment responsable.'],
  ['Priya says the security score looks impressive, but the math is wrong because it treats a false alarm rate like proof.', 'Priya dit que le score de securite semble impressionnant, mais les maths sont fausses car il traite un taux de fausse alerte comme une preuve.'],
  ['Omar says the phrase "99.9% accurate" sounds official, even though the conclusion about guilt is still backwards.', 'Omar dit que l expression « 99,9 % exact » sonne officielle, alors que la conclusion sur la culpabilite reste a l envers.'],
  ['Rina says the expert uses clean numbers, but the numbers only describe the test, not the final chance of guilt.', 'Rina dit que l expert utilise des chiffres propres, mais ces chiffres decrivent seulement le test, pas la chance finale de culpabilite.'],
  ['Ben says the report feels precise because it has decimals, but decimals do not fix a bad probability swap.', 'Ben dit que le rapport semble precis parce qu il contient des decimales, mais les decimales ne corrigent pas un mauvais echange de probabilites.'],
  ['Zoe says the evidence sounds exact when the analyst says "one case in ten thousand," yet that is not the posterior probability.', 'Zoé dit que la preuve semble exacte quand l analyste dit « un cas sur dix mille », mais ce n est pas la probabilite posterieure.'],
  ['Kai says the scanner output looks like a hard fact, but it is still just a signal that needs context.', 'Kai dit que la sortie du scanner ressemble a un fait incontestable, mais ce n est toujours qu un signal qui a besoin de contexte.'],
  ['Nora says the courtroom chart seems convincing because it is numerically tidy, even though the inference is invalid.', 'Nora dit que le graphique du tribunal semble convaincant parce qu il est numeriquement propre, alors que l inference est invalide.'],
  ['Eli says the airport system sounds trustworthy when it gives a tiny false-positive rate, but that does not equal guilt.', 'Eli dit que le systeme aeroportuaire semble fiable quand il donne un minuscule taux de faux positifs, mais cela n egale pas la culpabilite.'],
  ['Lina says the doctor’s test note is written like a formula, but a formula is not the same as the final diagnosis probability.', 'Lina dit que la note du medecin est ecrite comme une formule, mais une formule n est pas la meme chose que la probabilite finale du diagnostic.'],
  ['Grant says the fraud check looks scientific because it gives one neat percentage, yet the percentage is only one side of the calculation.', 'Grant dit que le controle de fraude semble scientifique parce qu il donne un pourcentage net, alors que ce pourcentage n est qu un cote du calcul.'],
  ['Tia says the alarm sounds data-driven, but the data being quoted is the wrong probability.', 'Tia dit que l alarme semble pilotee par les donnees, mais les donnees citees sont la mauvaise probabilite.'],
  ['Noah says the DNA report looks precise enough to close the case, even though it never converted rarity into guilt correctly.', 'Noah dit que le rapport ADN semble assez precis pour clore l affaire, alors qu il n a jamais correctement converti la rarete en culpabilite.'],
  ['Mia says the shop sensor uses "scientific" language, but the language hides a basic math error.', 'Mia dit que le capteur du magasin utilise un langage « scientifique », mais ce langage cache une erreur de maths elementaire.'],
  ['Jules says the scorecard appears objective, yet it quietly swaps the chance of evidence for the chance of guilt.', 'Jules dit que la grille de notation parait objective, mais elle echange discrètement la chance de la preuve contre la chance de culpabilite.'],
  ['Ava says the result sounds more serious when it is expressed as a tiny percentage, but tiny percentages can still be misleading.', 'Ava dit que le resultat parait plus grave quand il est exprime en tout petit pourcentage, mais les petits pourcentages peuvent quand meme tromper.'],
  ['Finn says the monitor report is crisp and exact, but exact wording does not make the conclusion correct.', 'Finn dit que le rapport du moniteur est net et exact, mais une formulation exacte ne rend pas la conclusion correcte.'],
  ['Mina says the analyst uses enough digits to look credible, while still making the same probability inversion.', 'Mina dit que l analyste utilise assez de chiffres pour paraitre credible, tout en faisant la meme inversion de probabilite.'],
  ['Theo says the lab printout feels like hard science, but hard science still needs the right formula.', 'Theo dit que le tirage du labo ressemble a de la science dure, mais la science dure a quand meme besoin de la bonne formule.'],
  ['Juno says the warning is framed like a certainty score, yet it is really a misread of the evidence.', 'Juno dit que l avertissement est presente comme un score de certitude, alors qu il s agit en realite d une mauvaise lecture de la preuve.'],
  ['Iris says the prosecution uses a polished number that sounds final, though it only measures the evidence under innocence.', 'Iris dit que l accusation utilise un chiffre poli qui sonne definitif, alors qu il mesure seulement la preuve sous innocence.'],
  ['Cole says the count looks exact because it is machine-generated, but machine-generated does not mean logically valid.', 'Cole dit que le compte semble exact parce qu il est genere par machine, mais genere par machine ne veut pas dire logiquement valide.'],
  ['Riley says the test result is dressed up as proof, even though it is only a piece of the larger probability puzzle.', 'Riley dit que le resultat du test est habille en preuve, alors qu il n est qu une piece du plus grand puzzle probabiliste.'],
  ['Pia says the statistic sounds official enough to stop questions, but the conclusion still needs Bayesian updating.', 'Pia dit que la statistique sonne assez officielle pour faire taire les questions, mais la conclusion a quand meme besoin d une mise a jour bayesienne.'],
  ['Hugo says the report has the tone of certainty, but the tone is not the same as the math.', 'Hugo dit que le rapport a un ton de certitude, mais le ton n est pas la meme chose que les maths.'],
  ['Sam says the number is neat and confident, yet the neatness hides that the base rate was ignored.', 'Sam dit que le nombre est propre et sur de lui, mais cette propriete cache que le taux de base a ete ignore.'],
  ['Jade says the machine gives a polished score, but polished scores can still be built on the wrong inference.', 'Jade dit que la machine donne un score poli, mais des scores polis peuvent quand meme reposer sur une inference fausse.'],
  ['Owen says the prosecutor sounds rigorous when quoting a rare event rate, yet rigor is missing if the posterior is never computed.', 'Owen dit que le procureur semble rigoureux en citant un taux d evenement rare, mais la rigueur manque si le posterior n est jamais calcule.'],
  ['Lea says the evidence is translated into a single impressive number, but the number is not the answer.', 'Lea dit que la preuve est traduite en un seul nombre impressionnant, mais ce nombre n est pas la reponse.'],
  ['Maya says the lab result is precise in form and wrong in meaning.', 'Maya dit que le resultat du labo est precis dans la forme et faux dans le sens.'],
  ['Ben says the analyst’s phrasing makes the math sound settled when it is not.', 'Ben dit que la facon de parler de l analyste donne l impression que les maths sont reglees alors que ce n est pas le cas.'],
  ['Ava says the quoted percentage feels like evidence of guilt, but the percentage is just evidence of a test outcome.', 'Ava dit que le pourcentage cite ressemble a une preuve de culpabilite, mais ce pourcentage n est qu une preuve du resultat d un test.'],
  ['Omar says the report looks polished enough to trust, even though the logic inside is broken.', 'Omar dit que le rapport semble assez soigne pour etre digne de confiance, alors que la logique a l interieur est casse.'],
  ['Nina says the number is easy to repeat in a news clip, which makes it sound more scientific than it is.', 'Nina dit que le nombre est facile a repeter dans un extrait de journal, ce qui le fait sonner plus scientifique qu il ne l est.'],
  ['Eli says the evidence is being sold like a final answer when it is only the false-alarm side of the test.', 'Eli dit que la preuve est vendue comme une reponse finale alors qu elle n est que le cote fausse alarme du test.'],
  ['Lina says the clean statistic hides the messier truth that the same signal can appear in innocent people.', 'Lina dit que la statistique propre cache la verite plus sale: le meme signal peut apparaitre chez des innocents.'],
  ['Grant says the reading is mathematically tidy but conceptually upside down.', 'Grant dit que la lecture est mathematiquement propre mais conceptuellement a l envers.'],
  ['Tia says the quote sounds like the final verdict, but it only describes the measurement rule.', 'Tia dit que la citation sonne comme le verdict final, mais elle ne decrit que la regle de mesure.'],
  ['Noah says the conclusion is wrapped in scientific clothing, though the underlying inference still fails.', 'Noah dit que la conclusion est enveloppee dans des vetements scientifiques, alors que l inference de base echoue toujours.'],
  ['Mia says the percentage is presented as if it were destiny, not just a test statistic.', 'Mia dit que le pourcentage est presente comme s il s agissait du destin, et non d une simple statistique de test.'],
  ['Jules says the report gives a confident-sounding number, but confidence is not correctness.', 'Jules dit que le rapport donne un nombre qui sonne confiant, mais la confiance n est pas la justesse.'],
  ['Iris says the number is sharp and memorable, which makes the bad inference easier to sell.', 'Iris dit que le nombre est net et memorable, ce qui rend la mauvaise inference plus facile a vendre.'],
  ['Cole says the chart looks like science class, but it is really an argument dressed up as certainty.', 'Cole dit que le graphique ressemble a un cours de sciences, mais c est en realite un argument deguisé en certitude.'],
  ['Riley says the result sounds exact enough to skip the rest of the reasoning.', 'Riley dit que le resultat sonne assez exact pour sauter le reste du raisonnement.'],
  ['Pia says the test percentage is not the probability you should walk away believing.', 'Pia dit que le pourcentage du test n est pas la probabilite que vous devriez retenir en sortant.'],
  ['Hugo says the official-looking math still needs the right interpretation, or it becomes nonsense.', 'Hugo dit que les maths a l air officielles ont quand meme besoin de la bonne interpretation, sinon elles deviennent du nonsense.'],
  ['Sam says the result is precise in the same way a wrong map can be precise.', 'Sam dit que le resultat est precis de la meme facon qu une carte fausse peut etre precise.'],
  ['Jade says the statistics are sharp, but sharp statistics can still point the wrong way.', 'Jade dit que les statistiques sont pointues, mais des statistiques pointues peuvent quand meme pointer dans la mauvaise direction.'],
  ['Owen says the expert is confusing a rare hit with a likely guilty person.', 'Owen dit que l expert confond un signal rare avec une personne probablement coupable.'],
  ['Lea says the number sounds like an answer because it is narrow and specific, but it is the wrong number to quote.', 'Lea dit que le nombre sonne comme une reponse parce qu il est etroit et precis, mais c est le mauvais nombre a citer.'],
];

const OPTIONS_EN = [
  'It sounds scientific and precise while being mathematically wrong',
  "Prosecutor's Fallacy",
  'Base Rate Neglect',
  'Likelihood Ratio',
];

const OPTIONS_FR = [
  'Cela sonne scientifique et précis tout en étant mathématiquement faux',
  'Sophisme du procureur',
  'Négligence du taux de base',
  'Rapport de vraisemblance',
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
      id: 43301 + index,
      level: 7,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench
        ? 'Cela sonne scientifique et précis tout en étant mathématiquement faux'
        : 'It sounds scientific and precise while being mathematically wrong',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel concept est illustré ici ?' : 'Which concept is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'Le chiffre semble précis, mais il décrit le test et non la probabilité finale.'
        : 'The number looks precise, but it describes the test and not the final probability.',
      detailedExplanationBeginner: isFrench
        ? 'Un chiffre scientifique peut quand meme etre le mauvais chiffre.'
        : 'A scientific-looking number can still be the wrong number.',
      detailedExplanationIntermediate: isFrench
        ? 'Le probleme est de confondre une probabilite de faux signal avec une probabilite finale.'
        : 'The problem is confusing a false-alarm probability with a final probability.',
      detailedExplanationExpert: isFrench
        ? 'Cette erreur donne une apparence scientifique a une inference invalide. Le chiffre cite peut etre exact en tant que taux de faux positif ou statistique conditionnelle, mais il ne devient pas pour autant une probabilite posterieure. Sans combiner la vraisemblance, le prior et la probabilite totale de la preuve, le resultat reste mathématiquement trompeur.'
        : 'This error gives a scientific appearance to an invalid inference. The quoted number may be exact as a false-positive rate or conditional statistic, but it does not become a posterior probability. Without combining the likelihood, the prior, and the total probability of the evidence, the result stays mathematically misleading.',
      questionFormat: 'standard',
    };
  });
}

export const SCIENTIFIC_PRECISION_MATHEMATICALLY_WRONG_EXPANSION_EN: Question[] = createQuestions('en');
export const SCIENTIFIC_PRECISION_MATHEMATICALLY_WRONG_EXPANSION_FR: Question[] = createQuestions('fr');
