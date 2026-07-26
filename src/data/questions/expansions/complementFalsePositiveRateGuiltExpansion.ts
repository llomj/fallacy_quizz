import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says the lab found only 1 innocent person in 50,000 would show this marker, so the suspect is basically guilty.', 'Maya dit que le laboratoire a trouve que seulement 1 innocent sur 50 000 montrerait ce marqueur, donc le suspect est pratiquement coupable.'],
  ['Leo says the bank pattern is so rare among innocent accounts that it means fraud.', 'Leo dit que le motif bancaire est si rare parmi les comptes innocents qu il signifie une fraude.'],
  ['Priya says the airport screen almost never hits innocent travelers, so the traveler must be guilty.', 'Priya dit que le scan de l aeroport touche presque jamais les voyageurs innocents, donc le voyageur doit etre coupable.'],
  ['Omar says the classroom badge signal is rare enough in honest students to prove cheating.', 'Omar dit que le signal du badge en classe est assez rare chez les eleves honnetes pour prouver la triche.'],
  ['Rina says the package scanner barely ever alarms on clean shipments, so the shipment is criminal.', 'Rina dit que le scanner de colis declenche presque jamais d alarme sur les expéditions propres, donc l expédition est criminelle.'],
  ['Ben says the driver is guilty because the road camera barely ever false-alarms on innocent cars.', 'Ben dit que le conducteur est coupable parce que la camera de route declenche presque jamais de fausses alertes sur les voitures innocentes.'],
  ['Zoe says the app warning is so uncommon for honest users that the account is fraudulent.', 'Zoé dit que l avertissement de l application est si rare chez les utilisateurs honnetes que le compte est frauduleux.'],
  ['Kai says the hospital alert is basically proof of guilt because healthy people almost never trigger it.', 'Kai dit que l alerte de l hopital est pratiquement une preuve de culpabilite parce que les personnes saines la declenchent presque jamais.'],
  ['Nora says the office badge beep means the employee is guilty because the false hit rate is tiny.', 'Nora dit que le bip du badge du bureau signifie que l employe est coupable parce que le taux de faux signal est minuscule.'],
  ['Eli says the rare phone trace shows the caller is guilty, not just suspicious.', 'Eli dit que la trace telephonique rare montre que l appelant est coupable, pas seulement suspect.'],
  ['Lina says the warehouse sensor is so reliable that a positive reading equals guilt.', 'Lina dit que le capteur de l entrepot est si fiable qu une lecture positive equivaut a la culpabilite.'],
  ['Grant says the train ticket scan is too rare in honest riders for innocence to matter.', 'Grant dit que le scan du billet de train est trop rare chez les voyageurs honnetes pour que l innocence compte.'],
  ['Tia says the security gate warning means the visitor is guilty because honest visitors almost never cause it.', 'Tia dit que l avertissement de la porte de securite signifie que le visiteur est coupable parce que les visiteurs honnetes le causent presque jamais.'],
  ['Noah says the tax software hit is almost a conviction because legitimate returns almost never match.', 'Noah dit que le signal du logiciel fiscal est presque une condamnation parce que les declarations legitimes correspondent presque jamais.'],
  ['Mia says the checkout lane alert means the shopper is guilty because innocent shoppers almost never set it off.', 'Mia dit que l alerte de la caisse signifie que l acheteur est coupable parce que les acheteurs innocents la declenchent presque jamais.'],
  ['Jules says the rare pattern on the radar is enough to call the pilot guilty.', 'Jules dit que le motif rare sur le radar suffit pour declarer le pilote coupable.'],
  ['Ava says the lab result is 99.9% guilt because the false alarm rate is tiny.', 'Ava dit que le resultat du labo est une culpabilite a 99,9 % parce que le taux de fausse alarme est minuscule.'],
  ['Finn says the hotel keycard beep is nearly proof of theft because innocent guests rarely trigger it.', 'Finn dit que le bip de la carte d hotel est presque une preuve de vol parce que les invites innocents le declenchent rarement.'],
  ['Mina says the online filter hit means the user is guilty of spam because clean accounts barely ever trigger it.', 'Mina dit que le signal du filtre en ligne signifie que l utilisateur est coupable de spam parce que les comptes propres le declenchent a peine.'],
  ['Theo says the medical test says guilt because the healthy rate is tiny.', 'Theo dit que le test medical dit la culpabilite parce que le taux chez les sains est minuscule.'],
  ['Juno says the airport kiosk warning is enough to convict because innocent passengers hardly ever see it.', 'Juno dit que l avertissement du kiosque de l aeroport suffit pour condamner parce que les passagers innocents le voient presque jamais.'],
  ['Iris says the signature check makes the sender guilty because the false-hit rate is tiny.', 'Iris dit que la verification de signature rend l expéditeur coupable parce que le taux de faux signal est minuscule.'],
  ['Cole says the office scanner is so specific that the positive result means guilt.', 'Cole dit que le scanner du bureau est si specifique qu un resultat positif signifie la culpabilite.'],
  ['Riley says the sensor tone is rare among innocent employees, so the worker is guilty.', 'Riley dit que le signal sonore du capteur est rare chez les employes innocents, donc le travailleur est coupable.'],
  ['Pia says the parking badge alert is basically the same as a guilty verdict.', 'Pia dit que l alerte du badge de stationnement est pratiquement la meme chose qu un verdict de culpabilite.'],
  ['Hugo says the rare alarm on the food order means the cook must have tampered with it.', 'Hugo dit que la rare alarme sur la commande alimentaire signifie que le cuisinier a forcement manipule la commande.'],
  ['Sam says the compliance check is so seldom wrong on honest filings that the filer is guilty.', 'Sam dit que le controle de conformite se trompe si rarement sur les declarations honnetes que le declarant est coupable.'],
  ['Jade says the call center warning means the agent is guilty because clean calls almost never trigger it.', 'Jade dit que l avertissement du centre d appel signifie que l agent est coupable parce que les appels propres le declenchent presque jamais.'],
  ['Owen says the rare door chime proves the tenant is guilty of trespassing.', 'Owen dit que la rare sonnette de porte prouve que le locataire est coupable d intrusion.'],
  ['Lea says the shipment alert is so rare in legitimate deliveries that the shipper is guilty.', 'Lea dit que l alerte de livraison est si rare dans les livraisons legitimes que l expediteur est coupable.'],
  ['Maya says the scanner can almost tell guilt by itself because honest people rarely cause that result.', 'Maya dit que le scanner peut presque lire la culpabilite tout seul parce que les gens honnetes causent rarement ce resultat.'],
  ['Ben says the watchlist hit means the passenger is guilty because innocent people rarely show it.', 'Ben dit que l alerte de liste de surveillance signifie que le passager est coupable parce que les innocents la montrent rarement.'],
  ['Ava says the storage alarm is basically a guilty verdict because the false-positive rate is so low.', 'Ava dit que l alarme du stockage est pratiquement un verdict de culpabilite parce que le taux de faux positifs est si bas.'],
  ['Omar says the lab scan makes the patient look guilty, full stop.', 'Omar dit que le scan du labo fait paraitre le patient coupable, point final.'],
  ['Nina says the rare form match proves the applicant is guilty of fraud.', 'Nina dit que la correspondance rare du formulaire prouve que le demandeur est coupable de fraude.'],
  ['Eli says the app ping is close enough to certainty to call it guilt.', 'Eli dit que le ping de l application est assez proche de la certitude pour l appeler culpabilite.'],
  ['Lina says the school scanner warning means cheating because honest students barely ever trigger it.', 'Lina dit que l avertissement du scanner scolaire signifie la triche parce que les eleves honnetes le declenchent a peine.'],
  ['Grant says the match on the receipt is rare enough that the customer must be guilty.', 'Grant dit que la correspondance sur le reçu est assez rare pour que le client soit necessairement coupable.'],
  ['Tia says the positive gate beep is basically a conviction.', 'Tia dit que le bip positif de la porte est pratiquement une condamnation.'],
  ['Noah says the rare barcode warning means the clerk is guilty of a switch.', 'Noah dit que l avertissement rare du code-barres signifie que le caissier est coupable d un echange.'],
  ['Mia says the message filter hit tells you the sender is guilty of spam, not merely that the message is suspicious.', 'Mia dit que le signal du filtre de message vous dit que l expéditeur est coupable de spam, pas seulement que le message est suspect.'],
  ['Jules says the small false-hit rate is basically the same as guilt.', 'Jules dit que le petit taux de faux signal est pratiquement la meme chose que la culpabilite.'],
  ['Iris says the freight alarm is so uncommon in innocent shipments that the shipment is guilty.', 'Iris dit que l alarme de fret est si rare dans les envois innocents que l envoi est coupable.'],
  ['Cole says the scan being positive means guilt because the device is usually right.', 'Cole dit que le scan positif signifie la culpabilite parce que l appareil a generalement raison.'],
  ['Riley says the rare badge tone makes the staff member look guilty beyond doubt.', 'Riley dit que le bip rare du badge fait paraitre le membre du personnel coupable au-dela de tout doute.'],
  ['Pia says the alarm ratio is low enough that guilt is the only sensible conclusion.', 'Pia dit que le ratio d alarme est assez bas pour que la culpabilite soit la seule conclusion sensée.'],
  ['Hugo says the scan of the lab coat is practically a confession because it rarely false-alarms.', 'Hugo dit que le scan de la blouse du labo est pratiquement un aveu parce qu il declenche rarement de fausses alertes.'],
  ['Sam says the rare notification means the customer is guilty of tampering.', 'Sam dit que la notification rare signifie que le client est coupable de manipulation.'],
  ['Jade says the positive gate signal proves the visitor is guilty because clean visitors almost never set it off.', 'Jade dit que le signal positif de la porte prouve que le visiteur est coupable parce que les visiteurs propres le declenchent presque jamais.'],
  ['Owen says the final clue is not the posterior, just the tiny false-positive complement.', 'Owen dit que le dernier indice n est pas le posterior, juste le petit complement du faux positif.'],
  ['Lea says the complement of the false-positive rate sounds impressive, but it is not the probability of guilt.', 'Lea dit que le complement du taux de faux positifs semble impressionnant, mais ce n est pas la probabilite de culpabilite.'],
  ['Maya says the clinic alert means guilt because innocent cases almost never trigger it.', 'Maya dit que l alerte de la clinique signifie la culpabilite parce que les cas innocents la declenchent presque jamais.'],
  ['Ben says the rare security ping proves the passenger is guilty of hiding something.', 'Ben dit que le rare bip de securite prouve que le passager cache quelque chose et est coupable.'],
  ['Priya says the office badge match is enough to convict because the false-hit rate is tiny.', 'Priya dit que la correspondance du badge du bureau suffit pour condamner parce que le taux de faux signal est minuscule.'],
  ['Noah says the lab result should be read as guilt, not just a warning.', 'Noah dit que le resultat du laboratoire doit etre lu comme de la culpabilite, pas juste comme un avertissement.'],
  ['Lina says the airport scanner is basically a verdict because honest travelers almost never trigger it.', 'Lina dit que le scanner de l aeroport est pratiquement un verdict parce que les voyageurs honnetes le declenchent presque jamais.'],
  ['Theo says the package alert means the sender is guilty because clean shipments rarely set it off.', 'Theo dit que l alerte du colis signifie que l expéditeur est coupable parce que les expéditions propres la declenchent rarement.'],
  ['Ava says the train gate beep is enough to call the rider guilty.', 'Ava dit que le bip de la porte du train suffit pour appeler le voyageur coupable.'],
  ['Omar says the positive signal on the app means the account is fraudulent.', 'Omar dit que le signal positif de l application signifie que le compte est frauduleux.'],
  ['Rina says the hospital scan is so specific that a positive result equals guilt.', 'Rina dit que le scanner de l hopital est si specifique qu un resultat positif equivaut a la culpabilite.'],
  ['Jules says the warehouse scanner almost never hits honest shipments, so the shipment is guilty.', 'Jules dit que le scanner de l entrepot touche presque jamais les expéditions honnetes, donc l expédition est coupable.'],
  ['Mina says the false-positive rate is tiny enough that the warning is a near-certain conviction.', 'Mina dit que le taux de faux positif est assez minuscule pour que l avertissement soit une condamnation quasi certaine.'],
  ['Eli says the bank alert should be read as guilt because clean accounts rarely cause it.', 'Eli dit que l alerte bancaire doit etre lue comme de la culpabilite parce que les comptes propres la causent rarement.'],
  ['Hugo says the badge reader hit means the employee is guilty because innocent employees barely ever trigger it.', 'Hugo dit que le signal du lecteur de badge signifie que l employe est coupable parce que les employes innocents le declenchent a peine.'],
  ['Lea says the phone trace is enough to convict because the false-alert rate is so low.', 'Lea dit que la trace telephonique suffit pour condamner parce que le taux de fausse alerte est si bas.'],
  ['Grant says the positive alarm on the storage room proves tampering.', 'Grant dit que l alarme positive sur la salle de stockage prouve une manipulation.'],
  ['Tia says the airport alert means the traveler is guilty because the innocent-hit rate is tiny.', 'Tia dit que l alerte de l aeroport signifie que le voyageur est coupable parce que le taux de signal chez les innocents est minuscule.'],
  ['Nora says the scanner reading is too rare in honest cases for innocence to be plausible.', 'Nora dit que la lecture du scanner est trop rare dans les cas honnetes pour que l innocence soit plausible.'],
  ['Sam says the rare code match is basically the same as proof of fraud.', 'Sam dit que la rare correspondance de code est pratiquement la meme chose qu une preuve de fraude.'],
  ['Jade says the security gate beep leaves no serious room for innocence.', 'Jade dit que le bip de la porte de securite ne laisse aucune place serieuse a l innocence.'],
  ['Owen says the lab machine output means guilt because the false-positive rate is so small.', 'Owen dit que la sortie de la machine du labo signifie la culpabilite parce que le taux de faux positif est si petit.'],
  ['Ari says the positive badge alert means the worker cheated, full stop.', 'Ari dit que l alerte positive du badge signifie que le travailleur a triche, point final.'],
  ['Pia says the check-in scan is almost a confession because honest users barely ever trigger it.', 'Pia dit que le scan d enregistrement est presque un aveu parce que les utilisateurs honnetes le declenchent a peine.'],
  ['Ben says the customer must be guilty because the receipt alert is too rare in honest cases.', 'Ben dit que le client doit etre coupable parce que l alerte du reçu est trop rare dans les cas honnetes.'],
  ['Zoe says the positive kiosk alert is enough to call the guest guilty of a rule break.', 'Zoé dit que l alerte positive du kiosque suffit pour appeler l invite coupable d une infraction.'],
  ['Ravi says the rare warehouse beep proves the box was tampered with.', 'Ravi dit que le rare bip de l entrepot prouve que la boite a ete manipulee.'],
  ['Sofia says the clinic result should be treated like guilt because the complement is so high.', 'Sofia dit que le resultat de la clinique devrait etre traite comme de la culpabilite parce que le complement est si eleve.'],
  ['Lara says the positive phone check means the owner is guilty because the error rate is tiny.', 'Lara dit que la verification positive du telephone signifie que le proprietaire est coupable parce que le taux d erreur est minuscule.'],
  ['Cole says the rare scanner alert means the seller is guilty of something.', 'Cole dit que l alerte rare du scanner signifie que le vendeur est coupable de quelque chose.'],
  ['Maya says the positive signal is enough to convict because honest cases almost never show it.', 'Maya dit que le signal positif suffit pour condamner parce que les cas honnetes ne le montrent presque jamais.'],
  ['Ezra says the billing check means the customer is guilty because clean accounts rarely trigger it.', 'Ezra dit que le controle de facturation signifie que le client est coupable parce que les comptes propres le declenchent rarement.'],
  ['Nina says the watchlist hit means the passenger is guilty, not just noteworthy.', 'Nina dit que la correspondance de la liste de surveillance signifie que le passager est coupable, pas seulement remarquable.'],
  ['Hana says the rare alarm on the form should be read as guilt.', 'Hana dit que la rare alarme sur le formulaire devrait etre lue comme de la culpabilite.'],
  ['Dylan says the positive check light is practically proof because false checks are rare.', 'Dylan dit que le voyant de verification positif est pratiquement une preuve parce que les fausses verifications sont rares.'],
  ['Penny says the scanner alert means the rider is guilty because honest riders barely ever set it off.', 'Penny dit que l alerte du scanner signifie que le voyageur est coupable parce que les voyageurs honnetes la declenchent a peine.'],
  ['Kira says the low false-positive rate makes the alarm close enough to certainty.', 'Kira dit que le faible taux de faux positif rend l alarme assez proche de la certitude.'],
  ['Finn says the rare office ping means the employee must be guilty of misuse.', 'Finn dit que le rare bip du bureau signifie que l employe doit etre coupable d usage abusif.'],
  ['Juno says the positive door signal leaves innocence without a real chance.', 'Juno dit que le signal positif de la porte ne laisse pas a l innocence une vraie chance.'],
  ['Olivia says the lab alert is almost identical to a guilty verdict because the false-hit rate is tiny.', 'Olivia dit que l alerte du laboratoire est presque identique a un verdict de culpabilite parce que le taux de faux signal est minuscule.'],
  ['Mila says the package scan means the sender is guilty because clean packages barely trigger it.', 'Mila dit que le scan du colis signifie que l expéditeur est coupable parce que les colis propres le declenchent a peine.'],
  ['Leo says the airport kiosk warning is enough to call the traveler guilty.', 'Leo dit que l avertissement du kiosque de l aeroport suffit pour appeler le voyageur coupable.'],
  ['Tara says the rare system hit proves the account is fraudulent.', 'Tara dit que le rare signal du systeme prouve que le compte est frauduleux.'],
  ['Hugo says the positive check on the badge reader means the worker is guilty because innocent users almost never trigger it.', 'Hugo dit que la verification positive sur le lecteur de badge signifie que le travailleur est coupable parce que les utilisateurs innocents le declenchent presque jamais.'],
  ['Lea says the false-positive rate is so tiny that guilt is the obvious answer.', 'Lea dit que le taux de faux positif est si minuscule que la culpabilite est la reponse evidente.'],
  ['Max says the scanner hit is basically a confession.', 'Max dit que le signal du scanner est pratiquement une confession.'],
  ['Yara says the positive alert on the lab device makes innocence implausible.', 'Yara dit que l alerte positive sur l appareil du labo rend l innocence peu plausible.'],
  ['Dan says the rare beep at the gate means the visitor is guilty of sneaking in.', 'Dan dit que le rare bip a la porte signifie que le visiteur est coupable de s etre infiltre.'],
  ['Rosa says the positive signal is so specific that the suspect is guilty for sure.', 'Rosa dit que le signal positif est si specifique que le suspect est certainement coupable.'],
  ['Alicia says the evidence should be treated as a conviction because honest cases almost never produce it.', 'Alicia dit que la preuve devrait etre traitee comme une condamnation parce que les cas honnetes la produisent presque jamais.'],
];

const OPTIONS_EN = [
  'Treating the complement of the false positive rate as the probability of guilt',
  'The complementary fallacy',
  'Ignoring the base rate',
  'The likelihood ratio',
];

const OPTIONS_FR = [
  'Traiter le complément du taux de faux positifs comme la probabilité de culpabilité',
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
      id: 43201 + index,
      level: 7,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Le sophisme du complément' : 'Treating the complement of the false positive rate as the probability of guilt',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel concept statistique est illustré ici ?' : 'Which statistical concept is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'Le complément du taux de faux positifs n est pas la probabilité finale de culpabilité.'
        : 'The complement of the false-positive rate is not the final probability of guilt.',
      detailedExplanationBeginner: isFrench
        ? 'Un petit taux de faux positifs ne donne pas automatiquement une grande probabilite de culpabilite.'
        : 'A small false-positive rate does not automatically give a large probability of guilt.',
      detailedExplanationIntermediate: isFrench
        ? 'Il faut distinguer la rarete du faux signal de la probabilite finale du suspect.'
        : 'You must distinguish the rarity of a false signal from the suspect’s final probability.',
      detailedExplanationExpert: isFrench
        ? 'Cette erreur confond le complement du faux positif avec la probabilite de culpabilite. La bonne lecture bayesienne exige de combiner la vraisemblance P(E|G), la probabilite initiale P(G), et la probabilite totale de la preuve P(E). Le complement d une petite probabilite peut sembler enormement probant, mais il ne mesure pas la probabilite finale.'
        : 'This error confuses the complement of the false-positive rate with the probability of guilt. The correct Bayesian reading requires combining the likelihood P(E|G), the prior probability P(G), and the total probability of the evidence P(E). The complement of a small probability can sound hugely probative, but it does not measure the final probability.',
      questionFormat: 'standard',
    };
  });
}

export const COMPLEMENT_FALSE_POSITIVE_RATE_GUILT_EXPANSION_EN: Question[] = createQuestions('en');
export const COMPLEMENT_FALSE_POSITIVE_RATE_GUILT_EXPANSION_FR: Question[] = createQuestions('fr');
