import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says the same test result can mean different things if the disease is common in one group and rare in another.', 'Maya dit que le meme resultat de test peut avoir des sens differents si la maladie est courante dans un groupe et rare dans un autre.'],
  ['Leo says the evidence looks stronger after dinner, but the prior odds were already different.', 'Leo dit que la preuve semble plus forte apres le diner, mais les probabilites initiales etaient deja differentes.'],
  ['Priya says a positive scan in a crowded city should not be read the same way as a positive scan in a small town.', 'Priya dit qu un scan positif dans une ville dense ne doit pas etre lu de la meme facon qu un scan positif dans une petite ville.'],
  ['Omar says the clue can support one conclusion in court and a weaker one at home because the starting chances differ.', 'Omar dit que l indice peut soutenir une conclusion au tribunal et une conclusion plus faible a la maison parce que les chances de depart different.'],
  ['Rina says the same alarm bell means more in a factory than in a classroom because the background rate is different.', 'Rina dit que la meme alarme signifie davantage dans une usine que dans une salle de classe parce que le taux de fond est different.'],
  ['Ben says two people can get the same warning label, but one case may be more convincing because of the base rate.', 'Ben dit que deux personnes peuvent recevoir le meme avertissement, mais qu un cas peut etre plus convaincant a cause du taux de base.'],
  ['Zoe says the result should be compared with the prior odds instead of treated as a universal verdict.', 'Zoé dit que le resultat doit etre compare aux probabilites initiales au lieu d etre traite comme un verdict universel.'],
  ['Kai says the same DNA clue does not tell the same story when the suspect pool is tiny versus huge.', 'Kai dit que le meme indice ADN ne raconte pas la meme histoire quand le groupe de suspects est petit ou enorme.'],
  ['Nora says the lab finding can point one way in an outbreak and another way in a routine checkup.', 'Nora dit que le resultat du labo peut orienter dans un sens lors d une epidemie et dans un autre lors d un examen de routine.'],
  ['Eli says the positive alert is informative, but the conclusion changes when you change the prior chance.', 'Eli dit que l alerte positive est informative, mais que la conclusion change quand on change la chance initiale.'],
  ['Lina says the same symptom matters more when the illness is rare than when it is common.', 'Lina dit que le meme symptome compte davantage lorsque la maladie est rare que lorsqu elle est courante.'],
  ['Grant says the evidence should not be turned into a single probability without the context of the starting odds.', 'Grant dit que la preuve ne doit pas etre transformee en une seule probabilite sans le contexte des chances de depart.'],
  ['Tia says a courthouse rumor and a classroom rumor can use the same clue differently because the situations are not the same.', 'Tia dit qu une rumeur de tribunal et une rumeur de classe peuvent utiliser le meme indice différemment parce que les situations ne sont pas les memes.'],
  ['Noah says the same airport hit gives a different conclusion if the searched item is common or rare.', 'Noah dit que le meme signal a l aeroport donne une conclusion differente si l objet recherche est courant ou rare.'],
  ['Mia says the evidence can stay identical while the posterior odds change because the prior changes.', 'Mia dit que la preuve peut rester identique tandis que les probabilites a posteriori changent parce que le prior change.'],
  ['Jules says the false-positive rate alone does not tell the whole story.', 'Jules dit que le seul taux de faux positifs ne raconte pas toute l histoire.'],
  ['Ava says the same yes-no answer can be much more persuasive in one setting than another.', 'Ava dit que la meme reponse oui-non peut etre beaucoup plus persuasive dans un contexte que dans un autre.'],
  ['Finn says a weak clue in a very rare case can still be powerful, while the same clue in a common case is less impressive.', 'Finn dit qu un faible indice dans un cas tres rare peut quand meme etre puissant, tandis que le meme indice dans un cas courant est moins impressionnant.'],
  ['Mina says the police should judge the clue by how it changes the odds, not by how scary it sounds.', 'Mina dit que la police doit juger l indice par la facon dont il change les probabilites, pas par son aspect effrayant.'],
  ['Theo says the evidence strength is the same, but the conclusion is not, because the prior is different.', 'Theo dit que la force de la preuve est la meme, mais pas la conclusion, parce que le prior est different.'],
  ['Juno says the same positive screen can mean almost nothing in a healthy population and a lot in a high-risk population.', 'Juno dit que le meme depistage positif peut ne presque rien vouloir dire dans une population saine et beaucoup dans une population a haut risque.'],
  ['Iris says the clue is conditional on the hypothesis, so the answer changes when the hypothesis changes.', 'Iris dit que l indice est conditionnel a l hypothese, donc la reponse change quand l hypothese change.'],
  ['Cole says the same smoke signal can support different stories depending on whether the kitchen was already busy.', 'Cole dit que le meme signal de fumee peut soutenir des histoires differentes selon que la cuisine etait deja occupee ou non.'],
  ['Riley says the doctor should not confuse evidence strength with the final diagnosis probability.', 'Riley dit que le medecin ne doit pas confondre la force de la preuve avec la probabilite finale du diagnostic.'],
  ['Pia says a clue that is useful in one town can be less useful in another town with different background rates.', 'Pia dit qu un indice utile dans une ville peut etre moins utile dans une autre ville avec des taux de fond differents.'],
  ['Hugo says the same flag on a file means different things if clean files are common or rare.', 'Hugo dit que le meme drapeau sur un fichier signifie des choses differentes si les fichiers propres sont courants ou rares.'],
  ['Sam says the likelihood of the clue is not the same as the probability of the conclusion.', 'Sam dit que la vraisemblance de l indice n est pas la meme chose que la probabilite de la conclusion.'],
  ['Jade says the exact same evidence can push the odds much more when the starting odds are low.', 'Jade dit que la meme preuve exacte peut faire davantage bouger les probabilites lorsque les chances de depart sont faibles.'],
  ['Owen says the clue in the report needs the base rate before it can be understood.', 'Owen dit que l indice dans le rapport a besoin du taux de base avant de pouvoir etre compris.'],
  ['Lea says a rare signal in a rare case and the same signal in a common case do not deserve the same interpretation.', 'Lea dit qu un signal rare dans un cas rare et le meme signal dans un cas courant ne meritent pas la meme interpretation.'],
  ['Maya says the answer depends on the prior probability, so the same proof can point in different directions.', 'Maya dit que la reponse depend de la probabilite initiale, donc la meme preuve peut pointer dans des directions differentes.'],
  ['Ben says the pattern in the evidence can be the same even when the conclusion changes.', 'Ben dit que le motif de la preuve peut etre le meme meme quand la conclusion change.'],
  ['Ava says the positive result from the test should be translated into odds, not treated as certainty.', 'Ava dit que le resultat positif du test doit etre converti en probabilites, pas traite comme une certitude.'],
  ['Omar says the same clue is louder when the alternative explanation is less common.', 'Omar dit que le meme indice est plus fort quand l explication alternative est moins courante.'],
  ['Nina says the report should separate the strength of the evidence from the chance of the final claim.', 'Nina dit que le rapport doit separer la force de la preuve de la chance de la conclusion finale.'],
  ['Eli says the result is informative, but only relative to how often the hypothesis was plausible at the start.', 'Eli dit que le resultat est informatif, mais seulement par rapport a la frequence a laquelle l hypothese etait plausible au depart.'],
  ['Lina says the same matched feature can be weak in one setting and strong in another.', 'Lina dit que la meme caracteristique correspondante peut etre faible dans un contexte et forte dans un autre.'],
  ['Grant says the clue and the conclusion are linked, but they are not the same number.', 'Grant dit que l indice et la conclusion sont lies, mais qu ils ne sont pas le meme nombre.'],
  ['Tia says the right question is how the evidence updates prior odds, not whether the evidence alone feels convincing.', 'Tia dit que la bonne question est de savoir comment la preuve met a jour les probabilites initiales, pas si la preuve semble convaincante toute seule.'],
  ['Noah says the same warning can mean different things when the background risk changes.', 'Noah dit que le meme avertissement peut vouloir dire des choses differentes quand le risque de fond change.'],
  ['Mia says the screen result is only one part of the calculation, not the final answer.', 'Mia dit que le resultat du depistage n est qu une partie du calcul, pas la reponse finale.'],
  ['Jules says the clue is not an absolute probability; it is evidence that has to be combined with context.', 'Jules dit que l indice n est pas une probabilite absolue; c est une preuve qui doit etre combinee avec le contexte.'],
  ['Iris says the same number can support different conclusions when the base rate is different.', 'Iris dit que le meme nombre peut soutenir des conclusions differentes quand le taux de base est different.'],
  ['Cole says the same match on paper can be more or less meaningful depending on the prior chance.', 'Cole dit que la meme correspondance sur papier peut etre plus ou moins significative selon la chance initiale.'],
  ['Riley says the evidence should be interpreted as a change in odds, not as a standalone fact.', 'Riley dit que la preuve doit etre interpretee comme un changement de probabilites, pas comme un fait autonome.'],
  ['Pia says the exact same test can lead to different decisions in different populations.', 'Pia dit que le meme test exact peut mener a des decisions differentes dans des populations differentes.'],
  ['Hugo says the clue means one thing if the target case is rare and another if it is common.', 'Hugo dit que l indice signifie une chose si le cas cible est rare et une autre s il est courant.'],
  ['Sam says the conclusion depends on the prior odds, which is why the same evidence can support different stories.', 'Sam dit que la conclusion depend des probabilites initiales, c est pourquoi la meme preuve peut soutenir des histoires differentes.'],
  ['Jade says the result is a ratio of support, not a direct probability of guilt or innocence.', 'Jade dit que le resultat est un rapport de soutien, pas une probabilite directe de culpabilite ou d innocence.'],
  ['Owen says the same evidence should be read through the background rate first.', 'Owen dit que la meme preuve doit d abord etre lue a travers le taux de fond.'],
  ['Lea says the final takeaway changes when the prior changes, even if the evidence does not.', 'Lea dit que la conclusion finale change quand le prior change, meme si la preuve ne change pas.'],
  ["Nora says the same positive result should not mean the same thing in a clinic and in a general screening program.", "Nora dit que le meme resultat positif ne doit pas vouloir dire la meme chose dans une clinique et dans un programme de depistage general."],
  ["Eli says a clue can be useful in one neighborhood and weak in another because the base rates differ.", "Eli dit qu un indice peut etre utile dans un quartier et faible dans un autre parce que les taux de base diffèrent."],
  ["Lina says the same email warning needs the size of the inbox before you know what it means.", "Lina dit que le meme avertissement par courriel a besoin de la taille de la boite de reception avant qu on sache ce qu il veut dire."],
  ["Grant says a single positive can be more alarming in a rare-condition test than in a common-condition test.", "Grant dit qu un seul resultat positif peut etre plus inquietant dans un test de maladie rare que dans un test de maladie courante."],
  ["Tia says the same clue in a school survey and a hospital survey will not carry the same weight.", "Tia dit que le meme indice dans une enquete scolaire et une enquete hospitaliere n aura pas le meme poids."],
  ["Noah says the report must compare the evidence to the starting chances, not just to the headline.", "Noah dit que le rapport doit comparer la preuve aux chances de depart, pas seulement au titre."],
  ["Mia says the exact same scan can point to different conclusions when the patient group changes.", "Mia dit que le meme scan exact peut mener a des conclusions differentes quand le groupe de patients change."],
  ["Ava says the clue is not universal; it becomes more or less meaningful with the population.", "Ava dit que l indice n est pas universel; il devient plus ou moins significatif avec la population."],
  ["Finn says the same test result should be read with the prior probability, not alone.", "Finn dit que le meme resultat de test doit etre lu avec la probabilite initiale, pas seul."],
  ["Mina says the same score can support different stories if the starting odds are different.", "Mina dit que le meme score peut soutenir des histoires differentes si les probabilites initiales sont differentes."],
  ["Theo says one piece of evidence can shift odds a lot in one setting and little in another.", "Theo dit qu une piece de preuve peut faire beaucoup bouger les probabilites dans un contexte et peu dans un autre."],
  ["Juno says the same alert in a low-risk group and a high-risk group should not be treated alike.", "Juno dit que la meme alerte dans un groupe a faible risque et un groupe a haut risque ne doit pas etre traitee pareil."],
  ["Iris says the same clue on paper can have different force depending on the background rate.", "Iris dit que le meme indice sur papier peut avoir une force differente selon le taux de fond."],
  ["Cole says the conclusion changes when the prior changes, even if the test does not.", "Cole dit que la conclusion change quand le prior change, meme si le test ne change pas."],
  ["Riley says the same data point can make sense in one town and mislead in another.", "Riley dit que le meme point de donnees peut avoir du sens dans une ville et induire en erreur dans une autre."],
  ["Pia says the evidence should be translated into odds, not treated as a yes-or-no answer.", "Pia dit que la preuve doit etre traduite en probabilites, pas traitee comme une reponse oui-non."],
  ["Hugo says the same warning sign can mean different levels of concern depending on the setting.", "Hugo dit que le meme panneau d avertissement peut signifier differents niveaux d inquietude selon le contexte."],
  ["Sam says the same symptom can mean a lot in a rare disease and little in a common cold.", "Sam dit que le meme symptome peut vouloir dire beaucoup dans une maladie rare et peu dans un rhume courant."],
  ["Jade says the same report needs the prior odds before it can be interpreted correctly.", "Jade dit que le meme rapport a besoin des probabilites initiales avant de pouvoir etre interprete correctement."],
  ["Owen says identical evidence can lead to different conclusions because the starting assumptions differ.", "Owen dit qu une preuve identique peut mener a des conclusions differentes parce que les hypotheses de depart differèrent."],
  ["Lea says a strong clue is still only part of the answer, not the whole answer.", "Lea dit qu un indice fort n est quand meme qu une partie de la reponse, pas toute la reponse."],
  ["Maya says the same positive screen should be checked against how common the condition was first.", "Maya dit que le meme depistage positif doit etre compare a la frequence initiale de la condition."],
  ["Ben says the same file flag means less when false alarms are common.", "Ben dit que le meme drapeau sur un fichier signifie moins quand les fausses alertes sont frequentes."],
  ["Nora says the same clue should not be judged without the prior chance of the claim being true.", "Nora dit que le meme indice ne doit pas etre juge sans la chance initiale que l affirmation soit vraie."],
  ["Eli says the same evidence can be stronger or weaker depending on the hidden base rate.", "Eli dit que la meme preuve peut etre plus forte ou plus faible selon le taux de base cache."],
  ["Lina says the answer depends on what we thought before the evidence arrived.", "Lina dit que la reponse depend de ce que nous pensions avant l arrivee de la preuve."],
  ["Grant says the same match in a search can be impressive in a rare case and ordinary in a common one.", "Grant dit que la meme correspondance dans une recherche peut etre impressionnante dans un cas rare et ordinaire dans un cas courant."],
  ["Tia says the same alert needs context from the population before you call it meaningful.", "Tia dit que la meme alerte a besoin du contexte de la population avant qu on la dise significative."],
  ["Noah says a clue can support one belief at one prior and a different belief at another prior.", "Noah dit qu un indice peut soutenir une croyance avec un prior et une autre croyance avec un autre prior."],
  ["Mia says the same evidence can be almost decisive in one group and barely useful in another.", "Mia dit que la meme preuve peut etre presque decisive dans un groupe et a peine utile dans un autre."],
  ["Ava says the base rate decides how far the evidence should move the conclusion.", "Ava dit que le taux de base decide jusqu ou la preuve doit faire bouger la conclusion."],
  ["Finn says the same scan result should not be read as one universal answer.", "Finn dit que le meme resultat de scan ne doit pas etre lu comme une reponse universelle."],
  ["Mina says a single clue can be a big deal only if the starting odds are right.", "Mina dit qu un seul indice peut etre important seulement si les probabilites de depart sont adequates."],
  ["Theo says the same test can give different decisions to different patients.", "Theo dit que le meme test peut donner des decisions differentes a des patients differents."],
  ["Juno says the same signal should be interpreted as updated odds, not as certainty.", "Juno dit que le meme signal doit etre interprete comme une mise a jour des probabilites, pas comme une certitude."],
  ["Iris says the final meaning changes when the prior changes, even if the evidence stays fixed.", "Iris dit que le sens final change quand le prior change, meme si la preuve reste fixe."],
  ["Cole says the same result can seem weak in one population and strong in another.", "Cole dit que le meme resultat peut sembler faible dans une population et fort dans une autre."],
  ["Riley says the clue should be judged by how much it changes the odds.", "Riley dit que l indice doit etre juge par la facon dont il change les probabilites."],
  ["Pia says a same-looking case can tell two different stories when the background risk changes.", "Pia dit qu un cas de meme apparence peut raconter deux histoires differentes quand le risque de fond change."],
  ["Hugo says the same warning is only meaningful if you know the base rate first.", "Hugo dit que le meme avertissement n est significatif que si l on connait d abord le taux de base."],
  ["Sam says the same evidence is not the same conclusion.", "Sam dit que la meme preuve n est pas la meme conclusion."],
  ["Jade says the conclusion depends on the prior, so the evidence can point different ways.", "Jade dit que la conclusion depend du prior, donc la preuve peut pointer dans des directions differentes."],
  ["Owen says one measurement can support different answers in different settings.", "Owen dit qu une mesure peut soutenir differentes reponses dans differents contextes."],
  ["Lea says the probability of the result is not the same as the probability of the claim.", "Lea dit que la probabilite du resultat n est pas la meme que la probabilite de l affirmation."],
  ["Maya says the same positive screen matters less in a mass screening than in a specialist clinic.", "Maya dit que le meme test positif compte moins dans un depistage de masse que dans une clinique specialisee."],
  ["Ben says the same clue can point to different conclusions when the base rate changes.", "Ben dit que le meme indice peut mener a des conclusions differentes quand le taux de base change."],
  ["Nora says the result should be read in context, not treated as one fixed answer.", "Nora dit que le resultat doit etre lu dans le contexte, pas traite comme une seule reponse fixe."],
  ["Eli says the same evidence can be strong evidence for one claim and weak evidence for another.", "Eli dit que la meme preuve peut etre une forte preuve pour une affirmation et une faible preuve pour une autre."],
  ["Lina says the prior odds decide how convincing the same clue should feel.", "Lina dit que les probabilites initiales decident a quel point le meme indice doit sembler convaincant."],
];

const OPTIONS_EN = [
  'The same evidence can support different conclusions depending on the prior probability',
  'The likelihood ratio',
  'The probability of innocence',
  'The two probabilities are conditional on different things',
];

const OPTIONS_FR = [
  'La même preuve peut mener à des conclusions différentes selon la probabilité initiale',
  'Le rapport de vraisemblance',
  'La probabilité d innocence',
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
      id: 42801 + index,
      level: 7,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench
        ? 'La même preuve peut mener à des conclusions différentes selon la probabilité initiale'
        : 'The same evidence can support different conclusions depending on the prior probability',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel concept statistique est illustré ici ?' : 'Which statistical concept is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La même preuve peut soutenir des conclusions différentes quand les probabilités initiales changent.'
        : 'The same evidence can support different conclusions when the prior probabilities change.',
      detailedExplanationBeginner: isFrench
        ? 'La preuve ne parle pas seule: le contexte compte.'
        : 'Evidence does not speak alone: context matters.',
      detailedExplanationIntermediate: isFrench
        ? 'Un même indice peut être plus ou moins convaincant selon le taux de base.'
        : 'The same clue can be more or less convincing depending on the base rate.',
      detailedExplanationExpert: isFrench
        ? 'Le point clé est la distinction entre la vraisemblance de la preuve et l inference finale. Une observation peut avoir la meme force de liaison avec une hypothese, mais produire des conclusions differentes une fois que les probabilites initiales et les autres informations contextuelles sont prises en compte. C est pourquoi l interpretation correcte de l evidence doit toujours passer par la mise a jour bayesienne, et non par une lecture brute du signal.'
        : 'The key point is the distinction between the likelihood of the evidence and the final inference. An observation can have the same evidential strength relative to one hypothesis, yet produce different conclusions once prior probabilities and other contextual information are taken into account. Correct interpretation therefore has to go through Bayesian updating rather than a raw reading of the signal.',
      questionFormat: 'standard',
    };
  });
}

export const SAME_EVIDENCE_DIFFERENT_CONCLUSIONS_EXPANSION_EN: Question[] = createQuestions('en');
export const SAME_EVIDENCE_DIFFERENT_CONCLUSIONS_EXPANSION_FR: Question[] = createQuestions('fr');
