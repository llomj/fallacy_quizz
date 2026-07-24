import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['A DNA match looks rare, so Maya says the suspect is almost certainly guilty, ignoring how many people could match by chance.', 'Une correspondance ADN parait rare, donc Maya dit que le suspect est presque certainement coupable, en ignorant combien de personnes pourraient correspondre par hasard.'],
  ['Leo hears a medical test is 99 percent accurate and concludes a positive result means the patient is 99 percent likely to be sick.', 'Leo entend qu un test medical est fiable a 99 pour cent et conclut qu un resultat positif signifie que le patient a 99 pour cent de chances d etre malade.'],
  ['Priya sees one fingerprint on a glass and assumes it proves who used the cup.', 'Priya voit une seule empreinte digitale sur un verre et suppose qu elle prouve qui a utilise la tasse.'],
  ['Omar thinks a positive alarm alert means the factory must definitely be in danger.', 'Omar pense qu une alerte positive signifie que l usine doit forcement etre en danger.'],
  ['Rina says the odds of a rare name matching a database are so small that any match must mean guilt.', 'Rina dit que les chances qu un nom rare corresponde a une base de donnees sont si faibles que toute correspondance doit signifier la culpabilite.'],
  ['Ben hears that a face-recognition system flagged one person and treats the flag as proof.', 'Ben entend qu un systeme de reconnaissance faciale a signale une personne et traite le signalement comme une preuve.'],
  ['Zoe assumes one positive breath test means the driver was drunk, even though false positives exist.', 'Zoé suppose qu un seul test d haleine positif signifie que le conducteur etait ivre, alors que des faux positifs existent.'],
  ['Kai thinks a rare footprint at a campsite must belong to the thief.', 'Kai pense qu une empreinte rare au campement doit appartenir au voleur.'],
  ['Nora sees a positive glitch report and says the app is clearly broken for everyone.', 'Nora voit un rapport de bug positif et dit que l application est clairement cassee pour tout le monde.'],
  ['Eli hears one lab result came back abnormal and assumes the disease is confirmed.', 'Eli entend qu un resultat de laboratoire est revenu anormal et suppose que la maladie est confirmee.'],
  ['Lina says a one-in-a-million match means the defendant is almost surely guilty.', 'Lina dit qu une correspondance d une chance sur un million signifie que l accuse est presque surement coupable.'],
  ['Grant reads that a security scan caught a threat and assumes the threat was real without checking the false-alarm rate.', 'Grant lit qu un scan de securite a detecte une menace et suppose que la menace etait reelle sans verifier le taux de fausse alerte.'],
  ['Tia thinks a positive pregnancy test always means the same thing regardless of the base rate.', 'Tia pense qu un test de grossesse positif veut toujours dire la meme chose, quel que soit le taux de base.'],
  ['Noah says a rare match in a lineup proves the police found the right person.', 'Noah dit qu une correspondance rare dans un alignement prouve que la police a trouve la bonne personne.'],
  ['Mia assumes a positive malware alert means her laptop must be infected.', 'Mia suppose qu une alerte positive de malware signifie forcement que son ordinateur est infecte.'],
  ['Jules thinks a rare gene marker on its own proves a child will get a disease.', 'Jules pense qu un marqueur genetique rare prouve a lui seul qu un enfant aura une maladie.'],
  ['Ava hears "the test came back positive" and jumps straight to guilt in a fraud case.', 'Ava entend « le test est revenu positif » et saute directement a la culpabilite dans une affaire de fraude.'],
  ['Finn says a rare pattern in a traffic camera image must identify the driver.', 'Finn dit qu un motif rare sur une image de camera de circulation doit identifier le conducteur.'],
  ['Mina assumes a positive note from a detector means the alarm was real, not just a sensor hiccup.', 'Mina suppose qu une note positive d un detecteur signifie que l alarme etait reelle, pas juste un probleme de capteur.'],
  ['Theo hears the lab says "high probability" and treats it as "almost certain" guilt.', 'Théo entend que le laboratoire parle de « haute probabilite » et le traite comme une culpabilite « presque certaine ».'],
  ['Juno thinks a single positive match in a huge database leaves no room for error.', 'Juno pense qu une seule correspondance positive dans une enorme base de donnees ne laisse aucune place a l erreur.'],
  ['Iris sees an allergy test report and assumes positive means dangerous in every case.', 'Iris voit un rapport de test d allergie et suppose que positif veut dire dangereux dans tous les cas.'],
  ['Cole says a positive field test for a substance proves the substance was definitely present.', 'Cole dit qu un test de terrain positif pour une substance prouve que la substance etait forcement presente.'],
  ['Riley hears one rare watch match and decides the owner must be the suspect.', 'Riley entend qu une montre rare correspond et decide que le proprietaire doit etre le suspect.'],
  ['Pia reads a positive vote count from a small sample and treats it like a verdict.', 'Pia lit un compte de votes positif dans un petit echantillon et le traite comme un verdict.'],
  ['Hugo sees one positive result from a charity screening and assumes the person definitely needs treatment.', 'Hugo voit un resultat positif dans un depistage caritatif et suppose que la personne a forcement besoin d un traitement.'],
  ['Sam believes a rare coin trace found on a shoe means the shoe owner committed the crime.', 'Sam croit qu une trace rare de piece trouvee sur une chaussure signifie que le proprietaire a commis le crime.'],
  ['Jade says a positive signal from a home monitor means the house is unsafe, full stop.', 'Jade dit qu un signal positif d un moniteur domestique signifie que la maison est dangereuse, point final.'],
  ['Owen thinks a positive result from one app survey proves the whole user base agrees.', 'Owen pense qu un resultat positif d un sondage dans l application prouve que toute la base d utilisateurs est d accord.'],
  ['Lea assumes a rare password match in a breach report points straight to one culprit.', 'Léa suppose qu une correspondance rare de mot de passe dans un rapport de fuite pointe directement un coupable.'],
  ['Maya hears the scanner found a tiny trace and says the trace alone settles the case.', 'Maya entend que le scanner a trouve une minuscule trace et dit que la trace seule règle l affaire.'],
  ['Ben believes a positive smoke detector in one kitchen means the whole building is burning.', 'Ben croit qu un detecteur de fumee positif dans une cuisine signifie que tout l immeuble brûle.'],
  ['Ava treats one positive result from a cheap home test as absolute proof.', 'Ava traite un seul resultat positif d un test maison bon marche comme une preuve absolue.'],
  ['Omar thinks a rare match in a sports jersey photo identifies the suspect beyond doubt.', 'Omar pense qu une correspondance rare dans une photo de maillot de sport identifie le suspect sans doute possible.'],
  ['Nina says a positive result from a noisy machine must be correct because machines do not lie.', 'Nina dit qu un resultat positif d une machine bruyante doit etre correct parce que les machines ne mentent pas.'],
  ['Eli hears a body scanner gave a hit and treats the hit like certainty.', 'Eli entend qu un scanner corporel a donne un resultat et traite ce resultat comme une certitude.'],
  ['Lina believes a positive lab note means the sample itself is guilty of contamination.', 'Lina croit qu une note positive du laboratoire signifie que l echantillon est coupable de contamination.'],
  ['Grant thinks a rare account login match proves the account owner was the attacker.', 'Grant pense qu une correspondance rare de connexion de compte prouve que le proprietaire du compte etait l attaquant.'],
  ['Tia says a positive screen in one clinic proves the same disease everywhere.', 'Tia dit qu un depistage positif dans une clinique prouve la meme maladie partout.'],
  ['Finn assumes a positive reading from a faulty sensor means the danger was real.', 'Finn suppose qu une lecture positive d un capteur defectueux signifie que le danger etait reel.'],
  ['Mina hears a positive detection in a huge crowd and says the system must have found the right person.', 'Mina entend une detection positive dans une grande foule et dit que le systeme a forcement trouve la bonne personne.'],
  ['Theo thinks a positive match in a fingerprint database settles the whole investigation.', 'Théo pense qu une correspondance positive dans une base d empreintes regle toute l enquete.'],
  ['Juno says a positive medication screen means the athlete definitely cheated.', 'Juno dit qu un test medicament positif signifie que l athlète a forcement triche.'],
  ['Iris treats a positive alert from a cheap detector as better than looking at the actual odds.', 'Iris traite une alerte positive d un detecteur bon marche comme plus fiable que l examen des probabilites reelles.'],
  ['Cole thinks a single positive checkmark on a form proves the whole report is correct.', 'Cole pense qu une seule case cochee positive sur un formulaire prouve que tout le rapport est correct.'],
  ['Riley reads a positive result from a quick test and skips the confirmation step.', 'Riley lit un resultat positif d un test rapide et saute l etape de confirmation.'],
  ['Pia sees a positive light on a monitor and calls the case closed.', 'Pia voit une lumiere positive sur un moniteur et declare l affaire close.'],
  ['Hugo believes a rare match from a background check is enough to convict someone.', 'Hugo croit qu une correspondance rare d une verification d antecedents suffit a condamner quelqu un.'],
  ['Sam says a positive result from an unreliable app means the suspect is done for.', 'Sam dit qu un resultat positif d une appli peu fiable signifie que le suspect est cuit.'],
  ['Jade assumes the first positive label in a report proves the whole report is right.', 'Jade suppose que la premiere etiquette positive dans un rapport prouve que tout le rapport est juste.'],
  ['Maya treats a positive hit in a narrow sample as if it were the same as proof in the full population.', 'Maya traite un resultat positif dans un petit echantillon comme s il equivalait a une preuve dans toute la population.'],
];

const OPTIONS_EN = ["Prosecutor's Fallacy", 'Base Rate Neglect', 'Appeal to Ignorance', 'False Dilemma'];
const OPTIONS_FR = ['Sophisme du procureur', 'Negligence du taux de base', "Appel à l'ignorance", 'Fausse dichotomie'];

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
    const correctIndex = index % 4;
    const isFrench = language === 'fr';
    return {
      id: 38051 + index,
      level: 7,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Sophisme du procureur' : "Prosecutor's Fallacy",
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'Une preuve rare ou un test positif est confondu avec la probabilité qu une personne soit réellement coupable.'
        : 'A rare piece of evidence or positive test is confused with the chance that a person is actually guilty.',
      detailedExplanationBeginner: isFrench
        ? 'Un résultat rare ne dit pas tout sur la culpabilité.'
        : 'A rare result does not tell the whole story about guilt.',
      detailedExplanationIntermediate: isFrench
        ? "Le sophisme du procureur apparaît quand on transforme une probabilité d avoir l indice en probabilité d être coupable, ce qui n est pas la meme chose."
        : 'The prosecutor\'s fallacy appears when someone turns the chance of seeing the evidence into the chance of guilt, which is not the same thing.',
      detailedExplanationExpert: isFrench
        ? "Le point clé est la distinction entre P(preuve | innocence) et P(innocence | preuve). Un indice peut etre rare chez des personnes innocentes sans que cela rende automatiquement la culpabilité probable, surtout si le groupe étudié est grand ou si le test produit des faux positifs. C est un glissement classique des probabilites conditionnelles vers une conclusion trop forte."
        : 'The key point is the difference between P(evidence | innocence) and P(innocence | evidence). A clue can be rare among innocent people without automatically making guilt likely, especially when the group is large or the test produces false positives. It is a classic slide from conditional probabilities to an overstrong conclusion.',
      questionFormat: 'standard',
    };
  });
}

export const PROSECUTORS_FALLACY_EXPANSION_EN: Question[] = createQuestions('en');
export const PROSECUTORS_FALLACY_EXPANSION_FR: Question[] = createQuestions('fr');
