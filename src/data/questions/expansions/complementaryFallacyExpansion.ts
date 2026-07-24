import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says the lab warned that innocent people trigger this result only 1 time in 10,000, so the suspect is 99.99% guilty.', 'Maya dit que le laboratoire a averti que les innocents declenchent ce resultat seulement 1 fois sur 10 000, donc le suspect est coupable a 99,99 %.'],
  ['Leo says the security scan is so rare among innocent travelers that the flagged traveler must be guilty.', 'Leo dit que le scan de securite est si rare chez les voyageurs innocents que le voyageur signale doit etre coupable.'],
  ['Priya says the phone trace was almost never seen in innocent users, so the call is almost certainly criminal.', 'Priya dit que la trace telephonique etait presque jamais vue chez les utilisateurs innocents, donc l appel est presque certainement criminel.'],
  ['Omar says the blood marker is only found in 1 out of 50,000 innocent people, so the defendant is basically guilty.', 'Omar dit que le marqueur sanguin n est trouve que chez 1 innocent sur 50 000, donc le defendant est pratiquement coupable.'],
  ['Rina says the airport alarm means guilt because the false-alarm rate is tiny.', 'Rina dit que l alarme aeroportuaire signifie la culpabilite parce que le taux de fausse alarme est minuscule.'],
  ['Ben says the warehouse badge beep proves the worker is guilty because innocent workers almost never cause it.', 'Ben dit que le bip du badge de l entrepot prouve que le travailleur est coupable parce que les travailleurs innocents le declenchent presque jamais.'],
  ['Zoe says the test result looks like a 99.8% guilty signal because only 0.2% of innocent people would get it.', 'Zoé dit que le resultat du test ressemble a un signal de culpabilite a 99,8 % parce que seulement 0,2 % des innocents l auraient.'],
  ['Kai says the app warning is so uncommon among clean users that the account is surely fraudulent.', 'Kai dit que l avertissement de l application est si rare chez les utilisateurs propres que le compte est surement frauduleux.'],
  ['Nora says the smoke detector made the family look guilty of fire damage because false alarms are rare.', 'Nora dit que le detecteur de fumee a fait paraitre la famille coupable de degats d incendie parce que les fausses alertes sont rares.'],
  ['Eli says the hotel keycard glitch means theft because innocent guests rarely trigger it.', 'Eli dit que le bug de la carte d hotel signifie un vol parce que les invites innocents le declenchent rarement.'],
  ['Lina says the rare shoe pattern makes the defendant look guilty on its own.', 'Lina dit que le motif rare de chaussure fait paraitre le defendant coupable a lui seul.'],
  ['Grant says the fingerprint match should be read as almost certain guilt because the false-positive rate is tiny.', 'Grant dit que la correspondance d empreinte doit etre lue comme une culpabilite quasi certaine parce que le taux de faux positif est minuscule.'],
  ['Tia says the airline alert is basically a guilt meter because innocent passengers almost never trigger it.', 'Tia dit que l alerte aerienne est pratiquement un compteur de culpabilite parce que les passagers innocents la declenchent presque jamais.'],
  ['Noah says the rare server log means the engineer is guilty, not just suspicious.', 'Noah dit que le journal rare du serveur signifie que l ingenieur est coupable, pas seulement suspect.'],
  ['Mia says the clinic result is 99% guilt because only 1% of healthy people show it.', 'Mia dit que le resultat de la clinique est une culpabilite a 99 % parce que seulement 1 % des personnes saines le montrent.'],
  ['Jules says the school scanner almost never flags innocent students, so this student must have cheated.', 'Jules dit que le scanner de l ecole signale presque jamais les eleves innocents, donc cet eleve doit avoir triche.'],
  ['Ava says the cargo alarm is strong proof of theft because it almost never goes off by mistake.', 'Ava dit que l alarme du cargo est une forte preuve de vol parce qu elle ne se declenche presque jamais par erreur.'],
  ['Finn says the warning light is basically a conviction because the false-alert rate is so low.', 'Finn dit que le voyant d avertissement est pratiquement une condamnation parce que le taux de fausse alerte est si bas.'],
  ['Mina says the chat filter hit means the user is guilty of spam because innocent people rarely get tagged.', 'Mina dit que le signal du filtre de discussion signifie que l utilisateur est coupable de spam parce que les innocents sont rarement tagues.'],
  ['Theo says the rare event log is enough to call the account guilty.', 'Theo dit que le journal d evenements rare suffit pour declarer le compte coupable.'],
  ['Juno says the bracelet scan makes the patient look guilty of stealing medication because the scan almost never lies.', 'Juno dit que le scan du bracelet fait paraitre le patient coupable de vol de medicaments parce que le scan ment presque jamais.'],
  ['Iris says the 1 in 20,000 code match means the driver is guilty with near certainty.', 'Iris dit que la correspondance de code a 1 sur 20 000 signifie que le conducteur est coupable avec une quasi-certitude.'],
  ['Cole says the package marker is too rare for innocence, so guilt is the only explanation.', 'Cole dit que le marqueur du colis est trop rare pour l innocence, donc la culpabilite est la seule explication.'],
  ['Riley says the positive siren cannot be ignored because innocent people almost never trigger it.', 'Riley dit que la sirene positive ne peut pas etre ignoree parce que les innocents la declenchent presque jamais.'],
  ['Pia says the train ticket scan is 99.95% guilt because the scan almost never hits honest riders.', 'Pia dit que le scan du billet de train est une culpabilite a 99,95 % parce que le scan touche presque jamais les voyageurs honnêtes.'],
  ['Hugo says the rare kitchen alarm means the cook must be guilty of a safety violation.', 'Hugo dit que l alarme rare de la cuisine signifie que le cuisinier doit etre coupable d une violation de securite.'],
  ['Sam says the audit flag proves fraud because innocent invoices almost never match it.', 'Sam dit que le signal d audit prouve la fraude parce que les factures innocentes y correspondent presque jamais.'],
  ['Jade says the school badge alert means the student is guilty because the error rate is tiny.', 'Jade dit que l alerte du badge scolaire signifie que l eleve est coupable parce que le taux d erreur est minuscule.'],
  ['Owen says the alarm on the rental car makes the driver look guilty of tampering.', 'Owen dit que l alarme de la voiture de location fait paraitre le conducteur coupable de manipulation.'],
  ['Lea says the pharmacy scan is so uncommon in innocent purchases that the buyer must be guilty.', 'Lea dit que le scan de la pharmacie est si rare dans les achats innocents que l acheteur doit etre coupable.'],
  ['Maya says the airport body scanner tells you guilt directly because it almost never false-alarms.', 'Maya dit que le scanner corporel de l aeroport donne directement la culpabilite parce qu il declenche presque jamais de fausses alertes.'],
  ['Ben says the positive lock beep is almost proof of guilt because clean users seldom cause it.', 'Ben dit que le bip positif de la serrure est presque une preuve de culpabilite parce que les utilisateurs propres le causent rarement.'],
  ['Ava says the security camera alert is so rare among innocent shoppers that this shopper is guilty.', 'Ava dit que l alerte de la camera de securite est si rare chez les acheteurs innocents que cet acheteur est coupable.'],
  ['Omar says the rare code mismatch means the employee is guilty, full stop.', 'Omar dit que le code rare qui ne correspond pas signifie que l employe est coupable, point final.'],
  ['Nina says the positive door scan is close enough to certainty to call it guilt.', 'Nina dit que le scan positif de la porte est assez proche de la certitude pour l appeler culpabilite.'],
  ['Eli says the same evidence can be read as guilt because the false-positive rate is very small.', 'Eli dit que la meme preuve peut etre lue comme une culpabilite parce que le taux de faux positif est tres petit.'],
  ['Lina says the alert on the laptop is so rare in innocent devices that the user is guilty.', 'Lina dit que l alerte sur l ordinateur portable est si rare sur les appareils innocents que l utilisateur est coupable.'],
  ['Grant says the bottle seal match proves guilt because the seal almost never matches by accident.', 'Grant dit que la correspondance du sceau de la bouteille prouve la culpabilite parce que le sceau correspond presque jamais par accident.'],
  ['Tia says the rent check warning means the tenant is guilty because the innocent rate is tiny.', 'Tia dit que l avertissement du cheque de loyer signifie que le locataire est coupable parce que le taux innocent est minuscule.'],
  ['Noah says the match on the office badge means the employee is guilty of entry fraud.', 'Noah dit que la correspondance sur le badge du bureau signifie que l employe est coupable de fraude d entree.'],
  ['Mia says the radio signal is enough for guilt because clean signals almost never look that way.', 'Mia dit que le signal radio suffit pour la culpabilite parce que les signaux propres ressemblent presque jamais a cela.'],
  ['Jules says the rare parking sensor hit means the driver is guilty of a hit-and-run.', 'Jules dit que le rare signal du capteur de parking signifie que le conducteur est coupable d un delit de fuite.'],
  ['Iris says the check-out flag gives near-certainty of guilt, not just a clue.', 'Iris dit que le drapeau de sortie donne une quasi-certitude de culpabilite, pas seulement un indice.'],
  ['Cole says the laptop warning is so uncommon in honest users that fraud is the only reasonable conclusion.', 'Cole dit que l avertissement de l ordinateur portable est si rare chez les utilisateurs honnetes que la fraude est la seule conclusion raisonnable.'],
  ['Riley says the positive kiosk alert means guilt because mistakes are unusual.', 'Riley dit que l alerte positive du kiosque signifie la culpabilite parce que les erreurs sont inhabituelles.'],
  ['Pia says the rare badge tone makes the worker look guilty beyond doubt.', 'Pia dit que le bip rare du badge fait paraitre le travailleur coupable au-dela de tout doute.'],
  ['Hugo says the tax software hit means the filer is guilty because innocent filings rarely trigger it.', 'Hugo dit que le signal du logiciel fiscal signifie que le declarant est coupable parce que les declarations innocentes le declenchent rarement.'],
  ['Sam says the positive alert on the lab machine is almost a verdict.', 'Sam dit que l alerte positive sur la machine du labo est presque un verdict.'],
  ['Jade says the mailroom scanner makes the sender guilty because the false-hit rate is tiny.', 'Jade dit que le scanner du courrier rend l expéditeur coupable parce que le taux de faux signal est minuscule.'],
  ['Owen says the last thing to check is whether the small false-positive rate was mistaken for guilt.', 'Owen dit que la derniere chose a verifier est de savoir si le petit taux de faux positif a ete pris pour de la culpabilite.'],
  ['Lea says the evidence is strong, but the complement of the false-positive rate still is not the posterior.', 'Lea dit que la preuve est forte, mais le complement du taux de faux positif n est toujours pas le posterior.'],
];

const OPTIONS_EN = [
  'Treating 1 - P(E|¬G) as P(G|E)',
  'The complementary fallacy',
  'Ignoring the base rate',
  'The likelihood ratio',
];

const OPTIONS_FR = [
  'Traiter 1 - P(E|¬G) comme P(G|E)',
  'Le sophisme du complément',
  'Ignorer le taux de base',
  'Le rapport de vraisemblance',
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
      id: 43101 + index,
      level: 7,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Le sophisme du complément' : 'The complementary fallacy',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel concept statistique est illustré ici ?' : 'Which statistical concept is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'Le complement du taux de faux positif n est pas la probabilite finale de culpabilite.'
        : 'The complement of the false-positive rate is not the final probability of guilt.',
      detailedExplanationBeginner: isFrench
        ? 'Un petit taux de faux positif ne donne pas automatiquement une grande probabilite de culpabilite.'
        : 'A small false-positive rate does not automatically give a large probability of guilt.',
      detailedExplanationIntermediate: isFrench
        ? 'Il faut distinguer la rarete du faux signal de la probabilite finale du suspect.'
        : 'You must distinguish the rarity of a false signal from the suspect’s final probability.',
      detailedExplanationExpert: isFrench
        ? 'Cette erreur confond 1 - P(E|¬G) avec P(G|E). La bonne formule bayesienne exige de combiner la vraisemblance P(E|G), la probabilite initiale P(G), et la probabilite totale de la preuve P(E). Le complement du taux de faux positif peut sonner comme une quasi-certitude, mais il ne mesure pas la probabilite finale de culpabilite.'
        : 'This error confuses 1 - P(E|¬G) with P(G|E). The correct Bayesian formula requires combining the likelihood P(E|G), the prior probability P(G), and the total probability of the evidence P(E). The complement of the false-positive rate can sound like near-certainty, but it does not measure the final probability of guilt.',
      questionFormat: 'standard',
    };
  });
}

export const COMPLEMENTARY_FALLACY_EXPANSION_EN: Question[] = createQuestions('en');
export const COMPLEMENTARY_FALLACY_EXPANSION_FR: Question[] = createQuestions('fr');
