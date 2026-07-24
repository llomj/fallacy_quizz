import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Dana says the lab test only gives a 2% false positive rate, so the suspect must be 98% innocent.', 'Dana dit que le test de laboratoire a seulement 2 % de faux positifs, donc le suspect doit etre 98 % innocent.'],
  ['Owen says the scanner rarely flags innocent bags, so this bag is almost certainly innocent.', 'Owen dit que le scanner signale rarement les sacs innocents, donc ce sac est presque certainement innocent.'],
  ['Maya says the clinic found a rare marker, but that only means the patient is probably innocent.', 'Maya dit que la clinique a trouve un marqueur rare, mais que cela veut seulement dire que le patient est probablement innocent.'],
  ['Liam says the security badge failed once, so the visitor is probably innocent of any breach.', 'Liam dit que le badge de securite a echoue une fois, donc le visiteur est probablement innocent de toute violation.'],
  ['Priya says the alarm is wrong only 1 time in 100, so the person it accused is 99% innocent.', 'Priya dit que l alarme se trompe seulement 1 fois sur 100, donc la personne accusee est 99 % innocente.'],
  ['Noah says the fingerprint mismatch proves innocence because the match rate is low among innocent people.', 'Noah dit que la non-correspondance d empreinte prouve l innocence parce que le taux de correspondance est faible chez les innocents.'],
  ['Zoe says the school scanner barely ever misreads a clean pass, so the student is basically innocent.', 'Zoé dit que le scanner scolaire lit rarement mal une autorisation valide, donc l eleve est pratiquement innocent.'],
  ['Eli says the home alarm went off, but since false alarms are rare the family is nearly innocent of a break-in.', 'Eli dit que l alarme de la maison a sonne, mais comme les fausses alertes sont rares, la famille est presque innocente d une effraction.'],
  ['Ava says the positive phone trace is useless because innocent users can be traced too, so the call must be innocent.', 'Ava dit que la trace positive du telephone est inutile parce que les utilisateurs innocents peuvent aussi etre traces, donc l appel doit etre innocent.'],
  ['Theo says the restaurant receipt points to innocence because only a small fraction of innocent people would leave that pattern.', 'Theo dit que le reçu du restaurant indique l innocence parce qu une petite fraction seulement de personnes innocentes laisserait ce motif.'],
  ['Juno says the driver passed the breath test once, so the evidence says he is probably innocent.', 'Juno dit que le conducteur a reussi le test d alcool une fois, donc la preuve dit qu il est probablement innocent.'],
  ['Mia says the dye test looked clean, and that means the painter is almost certainly innocent of damage.', 'Mia dit que le test de teinture paraissait propre, et cela veut dire que le peintre est presque certainement innocent du degat.'],
  ['Finn says the airport check only gives a small chance of false alarm, so the traveler is basically innocent.', 'Finn dit que le controle aeroportuaire ne donne qu une petite chance de fausse alarme, donc le voyageur est pratiquement innocent.'],
  ['Lea says the fever result is common in sick people, so the child must be innocent of having the illness.', 'Lea dit que le resultat de fievre est courant chez les malades, donc l enfant doit etre innocent d avoir la maladie.'],
  ['Hugo says the slow checkout line proves the cashier is innocent of hiding money because the queue error is rare.', 'Hugo dit que la file lente prouve que la caissiere est innocente de cacher de l argent parce que l erreur de file est rare.'],
  ['Riley says the software flag is almost never triggered by clean files, so this file is innocent.', 'Riley dit que l alerte logicielle est presque jamais declenchee par les fichiers propres, donc ce fichier est innocent.'],
  ['Pia says the rare VIN match means the car owner is 99% innocent, which is the wrong conclusion.', 'Pia dit que la correspondance rare du VIN signifie que le proprietaire de la voiture est innocent a 99 %, ce qui est la mauvaise conclusion.'],
  ['Ben says the positive smoke reading is enough to make the apartment innocent of fire damage.', 'Ben dit que la lecture positive de fumee suffit a rendre l appartement innocent de degats d incendie.'],
  ['Nina says the app crash log was uncommon, so the developer is innocent of any bug.', 'Nina dit que le journal de plantage de l application etait rare, donc le developpeur est innocent de tout bug.'],
  ['Cole says the check-in error is unlikely among innocent guests, so the guest must be innocent.', 'Cole dit que l erreur d enregistrement est improbable chez les invites innocents, donc l invite doit etre innocent.'],
  ['Jade says the museum sensor barely ever false-alarms, so the visitor is innocent.', 'Jade dit que le capteur du musee declenche presque jamais de fausse alarme, donc le visiteur est innocent.'],
  ['Omar says the tax audit match is so rare among innocent returns that the filer is innocent.', 'Omar dit que la correspondance du controle fiscal est si rare chez les declarations innocentes que le declarant est innocent.'],
  ['Tia says the classroom whisper test only caught one innocent student in a hundred, so this student is innocent.', 'Tia dit que le test de chuchotement en classe n a attrape qu un eleve innocent sur cent, donc cet eleve est innocent.'],
  ['Grant says the license plate alert is accurate enough that the driver is effectively innocent.', 'Grant dit que l alerte de plaque d immatriculation est assez precise pour que le conducteur soit effectivement innocent.'],
  ['Iris says the medical screen is positive, but that only shows the patient is probably innocent.', 'Iris dit que le depistage medical est positif, mais que cela montre seulement que le patient est probablement innocent.'],
  ['Sam says the password check almost never mistakes a real user, so the flagged account is innocent.', 'Sam dit que la verification de mot de passe se trompe presque jamais sur un vrai utilisateur, donc le compte signale est innocent.'],
  ['Mina says the broken toy sensor gave one alarm, but the child is still innocent of breaking it.', 'Mina dit que le capteur du jouet casse a donne une alerte, mais que l enfant est quand meme innocent de l avoir casse.'],
  ['Jules says the bus pass scan had a tiny false-positive rate, so the passenger is innocent.', 'Jules dit que le scan du titre de bus avait un taux de faux positif minime, donc le passager est innocent.'],
  ['Lina says the dog barked at the package, but that only means the courier is innocent of theft.', 'Lina dit que le chien a aboye sur le colis, mais cela veut seulement dire que le livreur est innocent du vol.'],
  ['Maya says the cash register alert must mean the cashier is innocent because the alert is so rare.', 'Maya dit que l alerte de caisse doit vouloir dire que la caissiere est innocente parce que cette alerte est si rare.'],
  ['Eli says the positive mail filter result is enough to call the message innocent.', 'Eli dit que le resultat positif du filtre de courrier suffit a declarer le message innocent.'],
  ['Ava says the airport security beep is so uncommon among innocent travelers that this traveler is innocent.', 'Ava dit que le bip de securite aeroportuaire est si rare chez les voyageurs innocents que ce voyageur est innocent.'],
  ['Theo says the photograph match looks strong, so the person in the photo is probably innocent.', 'Theo dit que la correspondance de photo semble forte, donc la personne sur la photo est probablement innocente.'],
  ['Juno says the symptom pattern was rare, so the doctor can label the patient innocent of the condition.', 'Juno dit que le motif des symptomes etait rare, donc le medecin peut qualifier le patient d innocent de la maladie.'],
  ['Mia says the warranty claim was flagged, but the low false-alarm rate means the claim is innocent.', 'Mia dit que la demande de garantie a ete signalee, mais le faible taux de fausse alarme veut dire que la demande est innocente.'],
  ['Finn says the library scanner is so reliable that any alert makes the borrower innocent.', 'Finn dit que le scanner de bibliotheque est si fiable que toute alerte rend l emprunteur innocent.'],
  ['Lea says the receipt mismatch is more likely in innocent shoppers than guilty ones, so the shopper is innocent.', 'Lea dit que l ecart de reçu est plus probable chez les acheteurs innocents que chez les coupables, donc l acheteur est innocent.'],
  ['Hugo says the emergency alert was false only once in a hundred cases, so this alert target is innocent.', 'Hugo dit que l alerte d urgence etait fausse seulement une fois sur cent, donc la cible de l alerte est innocente.'],
  ['Riley says the checkout code error is rare enough that the customer must be innocent.', 'Riley dit que l erreur de code a la caisse est assez rare pour que le client soit necessairement innocent.'],
  ['Pia says the hospital bracelet scan almost never flags healthy people, so this patient is innocent.', 'Pia dit que le scan du bracelet d hopital signale presque jamais les personnes saines, donc ce patient est innocent.'],
  ['Ben says the noise complaint was positive, but that only shows the neighbor is innocent of making it.', 'Ben dit que la plainte pour bruit etait positive, mais cela montre seulement que le voisin est innocent de l avoir faite.'],
  ['Nina says the storage room alarm rarely hits by mistake, so the worker accused is innocent.', 'Nina dit que l alarme du local de stockage se declenche rarement par erreur, donc le travailleur accuse est innocent.'],
  ['Cole says the checkout lane barcode error is so uncommon that the shopper is innocent.', 'Cole dit que l erreur de code-barres a la caisse est si peu commune que l acheteur est innocent.'],
  ['Jade says the refund form matched the suspicious pattern, and that means the customer is innocent.', 'Jade dit que le formulaire de remboursement correspondait au motif suspect, et cela veut dire que le client est innocent.'],
  ['Omar says the positive security hit is only useful if it proves innocence, which is the mistake.', 'Omar dit que le signal de securite positif n est utile que s il prouve l innocence, ce qui est l erreur.'],
  ['Tia says the nutrition app warning was rare, so the user is innocent of any bad intake.', 'Tia dit que l avertissement de l application nutrition etait rare, donc l utilisateur est innocent de toute mauvaise consommation.'],
  ['Grant says the fingerprint alert is meaningful, but it does not directly tell you the probability of innocence.', 'Grant dit que l alerte d empreinte est significative, mais qu elle ne donne pas directement la probabilite d innocence.'],
  ['Iris says the monitor noise pattern is weak evidence that the room is innocent of fault.', 'Iris dit que le motif de bruit du moniteur est une faible preuve que la piece est innocente de la panne.'],
  ['Sam says the final step is to ask how likely innocence is after the result, not to confuse it with the result itself.', 'Sam dit que la derniere etape est de se demander a quel point l innocence est probable apres le resultat, pas de confondre cela avec le resultat lui-meme.'],
  ['Mina says the door sensor barely false-alarms, so the accused tenant is innocent.', 'Mina dit que le capteur de porte declenche a peine de fausses alertes, donc le locataire accuse est innocent.'],
  ['Jules says the positive match in the file only shifts the odds; it does not prove innocence outright.', 'Jules dit que la correspondance positive dans le dossier ne fait que modifier les probabilites; elle ne prouve pas l innocence directement.'],
  ['Lina says the rare alert is not a probability of innocence; it is only a clue about the evidence.', 'Lina dit que la rare alerte n est pas une probabilite d innocence; c est seulement un indice sur la preuve.'],
];

const OPTIONS_EN = [
  'The probability of innocence',
  'The likelihood ratio',
  'The same evidence can support different conclusions depending on the prior probability',
  'The two probabilities are conditional on different things',
];

const OPTIONS_FR = [
  'La probabilité d innocence',
  'Le rapport de vraisemblance',
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
      id: 42701 + index,
      level: 7,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'La probabilité d innocence' : 'The probability of innocence',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel concept statistique est illustré ici ?' : 'Which statistical concept is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La probabilité d innocence ne se lit pas directement sur le taux de faux positifs.'
        : 'The probability of innocence is not read directly from the false-positive rate.',
      detailedExplanationBeginner: isFrench
        ? 'Un test rare ne donne pas automatiquement la bonne probabilite.'
        : 'A rare test result does not automatically give the right probability.',
      detailedExplanationIntermediate: isFrench
        ? 'Il faut distinguer la frequence d un resultat chez les innocents de la probabilite qu une personne soit innocente apres le resultat.'
        : 'You must distinguish the frequency of a result among innocent people from the probability that a person is innocent after the result.',
      detailedExplanationExpert: isFrench
        ? 'Cette erreur confond P(E|I) avec P(I|E). Un faible taux de faux positifs ou une rarete du signal chez les innocents ne signifie pas que la personne accusee a une forte probabilite d innocence. Pour obtenir cette probabilite, il faut combiner la vraisemblance avec la probabilité initiale et les autres informations pertinentes.'
        : 'This error confuses P(E|I) with P(I|E). A low false-positive rate or a rare signal among innocent people does not mean the accused person has a high probability of innocence. To get that probability, you have to combine the likelihood with the prior probability and the other relevant information.',
      questionFormat: 'standard',
    };
  });
}

export const PROBABILITY_OF_INNOCENCE_EXPANSION_EN: Question[] = createQuestions('en');
export const PROBABILITY_OF_INNOCENCE_EXPANSION_FR: Question[] = createQuestions('fr');
