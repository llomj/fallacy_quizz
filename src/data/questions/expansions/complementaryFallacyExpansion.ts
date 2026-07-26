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
  ['Maya says the positive lab hit means the patient is guilty because innocent cases almost never trigger it.', 'Maya dit que le resultat positif du labo signifie que le patient est coupable parce que les cas innocents le declenchent presque jamais.'],
  ['Ben says the rare badge ping proves the worker stole something because honest workers rarely cause it.', 'Ben dit que le rare bip du badge prouve que le travailleur a vole quelque chose parce que les travailleurs honnetes le causent rarement.'],
  ['Priya says the airport scanner makes the traveler guilty because the false alarm rate is tiny.', 'Priya dit que le scanner de l aeroport rend le voyageur coupable parce que le taux de fausse alarme est minuscule.'],
  ['Noah says the test light means guilt because almost no innocent person triggers it.', 'Noah dit que le voyant du test signifie la culpabilite parce que presque aucun innocent ne le declenche.'],
  ['Lina says the office monitor warning means fraud because the honest-user false-hit rate is very low.', 'Lina dit que l avertissement du moniteur de bureau signifie fraude parce que le taux de faux signal chez les utilisateurs honnetes est tres bas.'],
  ['Theo says the rare keycard beep means the guest is guilty of trespassing.', 'Theo dit que le rare bip de la carte-clé signifie que l invite est coupable d intrusion.'],
  ['Ava says the clinic alert is basically a verdict because clean patients seldom trigger it.', 'Ava dit que l alerte de la clinique est pratiquement un verdict parce que les patients propres la declenchent rarement.'],
  ['Omar says the package scan is so rare in innocent deliveries that the parcel must be suspicious.', 'Omar dit que le scan du colis est si rare dans les livraisons innocentes que le paquet doit etre suspect.'],
  ['Rina says the hotel door beep is proof of theft because honest guests almost never set it off.', 'Rina dit que le bip de la porte de l hotel prouve un vol parce que les invites honnetes le declenchent presque jamais.'],
  ['Jules says the school badge flash means cheating because the innocent false-positive rate is tiny.', 'Jules dit que le flash du badge scolaire signifie triche parce que le taux de faux positif chez les innocents est minuscule.'],
  ['Mina says the server log makes the admin guilty because the alert is rare among innocent admins.', 'Mina dit que le journal du serveur rend l administrateur coupable parce que l alerte est rare chez les admins innocents.'],
  ['Eli says the car alarm proves tampering because the mistake rate is too low to matter.', 'Eli dit que l alarme de la voiture prouve une manipulation parce que le taux d erreur est trop bas pour compter.'],
  ['Hugo says the scanner hit means the customer is guilty, not just flagged.', 'Hugo dit que le signal du scanner signifie que le client est coupable, pas seulement signale.'],
  ['Lea says the positive door alert should be treated like a conviction because false positives are uncommon.', 'Lea dit que l alerte positive de la porte devrait etre traitee comme une condamnation parce que les faux positifs sont rares.'],
  ['Grant says the lab match is close enough to proof to skip any other explanation.', 'Grant dit que la correspondance du labo est assez proche d une preuve pour ignorer toute autre explication.'],
  ['Tia says the rare security ping means the visitor is guilty because innocent visitors almost never see it.', 'Tia dit que le rare bip de securite signifie que le visiteur est coupable parce que les visiteurs innocents le voient presque jamais.'],
  ['Nora says the payment alert makes the shopper guilty because the false alert rate is tiny.', 'Nora dit que l alerte de paiement rend le client coupable parce que le taux de fausse alerte est minuscule.'],
  ['Sam says the positive wristband scan means the patient stole medicine because honest patients rarely trigger it.', 'Sam dit que le scan positif du bracelet signifie que le patient a vole des medicaments parce que les patients honnetes le declenchent rarement.'],
  ['Jade says the small false-positive rate on the check-in machine is enough to declare guilt.', 'Jade dit que le petit taux de faux positif sur la machine d enregistrement suffit pour declarer la culpabilite.'],
  ['Owen says the taxi meter alert is basically proof because innocent riders barely ever trigger it.', 'Owen dit que l alerte du compteur de taxi est pratiquement une preuve parce que les passagers innocents la declenchent a peine.'],
  ['Ari says the warehouse scanner hit means fraud because the false-hit rate is almost zero.', 'Ari dit que le signal du scanner de l entrepot signifie une fraude parce que le taux de faux signal est presque nul.'],
  ['Pia says the train gate beep means guilt because honest passengers seldom cause it.', 'Pia dit que le bip de la porte du train signifie la culpabilite parce que les voyageurs honnetes le causent rarement.'],
  ['Ben says the rare code alert means the account is guilty because it almost never happens by mistake.', 'Ben dit que la rare alerte de code signifie que le compte est coupable parce qu elle n arrive presque jamais par erreur.'],
  ['Zoe says the positive bag scan is enough to convict because innocent bags hardly ever trigger it.', 'Zoé dit que le scan positif du sac suffit pour condamner parce que les sacs innocents le declenchent presque jamais.'],
  ['Ravi says the positive kiosk beep should be treated as certainty, not just evidence.', 'Ravi dit que le bip positif du kiosque devrait etre traite comme une certitude, pas juste comme une preuve.'],
  ['Sofia says the rare phone warning makes the owner guilty because the honest-user rate is tiny.', 'Sofia dit que l avertissement rare du telephone rend le proprietaire coupable parce que le taux d utilisateurs honnetes est minuscule.'],
  ['Lara says the lab machine hit is basically a verdict because the false-positive rate is so low.', 'Lara dit que le signal de la machine du labo est pratiquement un verdict parce que le taux de faux positif est si bas.'],
  ['Cole says the mailroom scanner makes the sender guilty because clean mail hardly ever triggers it.', 'Cole dit que le scanner du courrier rend l expéditeur coupable parce que le courrier propre le declenche a peine.'],
  ['Maya says the office gate alert means theft because innocent employees almost never set it off.', 'Maya dit que l alerte de la porte du bureau signifie un vol parce que les employes innocents la declenchent presque jamais.'],
  ['Ezra says the positive check signal makes the driver guilty because the false alarm rate is tiny.', 'Ezra dit que le signal de verification positif rend le conducteur coupable parce que le taux de fausse alarme est minuscule.'],
  ['Nina says the scanner reading is so uncommon in honest cases that guilt is the only serious option.', 'Nina dit que la lecture du scanner est si rare dans les cas honnetes que la culpabilite est la seule option serieuse.'],
  ['Hana says the alert on the badge reader is close enough to certainty that innocence can be ruled out.', 'Hana dit que l alerte du lecteur de badge est assez proche de la certitude pour exclure l innocence.'],
  ['Dylan says the tiny false-positive rate on the monitor means the user must be guilty.', 'Dylan dit que le minuscule taux de faux positif sur le moniteur signifie que l utilisateur doit etre coupable.'],
  ['Penny says the rare beep at the exit means the shopper is guilty of theft.', 'Penny dit que le rare bip a la sortie signifie que le client est coupable de vol.'],
  ['Kira says the positive lab result is enough to call the patient guilty.', 'Kira dit que le resultat positif du laboratoire suffit pour appeler le patient coupable.'],
  ['Finn says the airport warning is almost proof because innocent travelers almost never trip it.', 'Finn dit que l alerte de l aeroport est presque une preuve parce que les voyageurs innocents la declenchent presque jamais.'],
  ['Juno says the low false-hit rate on the tag reader means the guest is guilty.', 'Juno dit que le faible taux de faux signal du lecteur d etiquette signifie que l invite est coupable.'],
  ['Olivia says the positive door check makes the resident guilty because mistakes are so rare.', 'Olivia dit que la verification positive de la porte rend le resident coupable parce que les erreurs sont si rares.'],
  ['Mila says the signal is strong enough that the suspect should be treated as guilty.', 'Mila dit que le signal est assez fort pour que le suspect soit traite comme coupable.'],
  ['Leo says the machine hit is almost a conviction because honest users almost never cause it.', 'Leo dit que le signal de la machine est presque une condamnation parce que les utilisateurs honnetes le causent presque jamais.'],
  ['Tara says the warning is such a rare false alarm that guilt is the obvious conclusion.', 'Tara dit que l avertissement est une si rare fausse alarme que la culpabilite est la conclusion evidente.'],
  ['Hugo says the positive scan means the traveler is guilty because the innocent rate is tiny.', 'Hugo dit que le scan positif signifie que le voyageur est coupable parce que le taux innocent est minuscule.'],
  ['Lea says the barcode error is enough to conclude the customer cheated.', 'Lea dit que l erreur de code-barres suffit pour conclure que le client a triche.'],
  ['Max says the alarm is too uncommon in honest cases for innocence to be plausible.', 'Max dit que l alarme est trop rare dans les cas honnetes pour que l innocence soit plausible.'],
  ['Yara says the system hit means the user is guilty and should be treated that way.', 'Yara dit que le signal du systeme signifie que l utilisateur est coupable et doit etre traite ainsi.'],
  ['Dan says the rare match on the badge reader should settle the case.', 'Dan dit que la rare correspondance sur le lecteur de badge devrait regler l affaire.'],
  ['Rosa says the positive check is almost a conviction, not just a hint.', 'Rosa dit que la verification positive est presque une condamnation, pas juste une piste.'],
  ['Alicia says the tiny false-positive rate means there is no real room for innocence.', 'Alicia dit que le minuscule taux de faux positif signifie qu il n y a pas vraiment de place pour l innocence.'],
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
