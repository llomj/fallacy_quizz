import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya ignores the blinking check-engine light because looking at it makes her nervous.', 'Maya ignore le voyant moteur qui clignote parce que le regarder la rend nerveuse.'],
  ['Leo avoids opening his bank app because he does not want to see the balance.', 'Leo évite d ouvrir son application bancaire parce qu il ne veut pas voir le solde.'],
  ['Priya does not read the warning labels on a new cleaner because that would feel stressful.', 'Priya ne lit pas les avertissements sur un nouveau nettoyant parce que cela lui semblerait stressant.'],
  ['Omar skips the doctor follow-up because he would rather not think about the test results yet.', 'Omar saute le rendez-vous de suivi chez le médecin parce qu il préfère ne pas penser aux résultats du test pour l instant.'],
  ['Rina leaves her email inbox unopened all morning so she can pretend there are no urgent messages.', 'Rina laisse sa boîte mail fermée toute la matinée pour pouvoir faire comme s il n y avait aucun message urgent.'],
  ['Ben hears the roof leak getting worse but says it will probably disappear if he ignores it long enough.', 'Ben entend la fuite du toit s aggraver mais dit qu elle disparaîtra probablement s il l ignore assez longtemps.'],
  ['Zoe refuses to check the class grade portal because she is afraid the number will be lower than expected.', 'Zoé refuse de consulter le portail des notes du cours parce qu elle a peur que la note soit plus basse que prévu.'],
  ['Kai avoids the smoke alarm battery warning and hopes it will stop beeping by itself.', 'Kai évite l avertissement de pile du détecteur de fumée et espère qu il cessera de biper tout seul.'],
  ['Nora does not ask about the rent increase because she would rather stay in the dark.', 'Nora ne pose pas de question sur la hausse du loyer parce qu elle préfère rester dans l ignorance.'],
  ['Eli sees his website traffic crash but stops checking the analytics dashboard.', 'Eli voit le trafic de son site s effondrer mais cesse de consulter le tableau d analyse.'],
  ['Lina leaves the unread school notice on the table because opening it might be bad news.', 'Lina laisse l avis de l école non lu sur la table parce que l ouvrir pourrait annoncer une mauvaise nouvelle.'],
  ['Grant does not call the mechanic back because he does not want to hear the estimate.', 'Grant ne rappelle pas le mécanicien parce qu il ne veut pas entendre le devis.'],
  ['Tia notices her plant is wilting but keeps walking past it instead of checking the soil.', 'Tia remarque que sa plante fane mais continue de passer devant sans vérifier la terre.'],
  ['Noah avoids opening the delivery app because a late package would annoy him.', 'Noah évite d ouvrir l application de livraison parce qu un colis en retard l agacerait.'],
  ['Mia does not read the fire drill memo because she assumes everything is fine.', 'Mia ne lit pas la note sur l exercice incendie parce qu elle suppose que tout va bien.'],
  ['Jules ignores the low tire pressure warning because the drive still feels okay.', 'Jules ignore le voyant de pression basse des pneus parce que la conduite semble encore correcte.'],
  ['Ava never checks the savings account because she does not want to know how much she spent.', 'Ava ne consulte jamais le compte épargne parce qu elle ne veut pas savoir combien elle a dépensé.'],
  ['Finn avoids the dentist call after the reminder text because he is hoping the tooth pain will vanish.', 'Finn évite d appeler le dentiste après le rappel par message parce qu il espère que la douleur dentaire disparaîtra.'],
  ['Mina leaves the overdue library notice in her bag and acts like it is not there.', 'Mina laisse l avis de retard de la bibliothèque dans son sac et agit comme s il n existait pas.'],
  ['Theo refuses to look at the nutrition facts because the snack tastes good enough.', 'Theo refuse de regarder les informations nutritionnelles parce que la collation a déjà bon goût.'],
  ['Juno does not open the app update notes because she fears learning something changed.', 'Juno n ouvre pas les notes de mise à jour parce qu elle craint d apprendre qu un changement a eu lieu.'],
  ['Iris ignores the missing receipt warning and hopes the store will not ask for it.', 'Iris ignore l avertissement sur le reçu manquant et espère que le magasin ne le demandera pas.'],
  ['Cole sees the garage door sensor flashing red and decides not to investigate.', 'Cole voit le capteur de la porte du garage clignoter en rouge et décide de ne pas enquêter.'],
  ['Riley avoids the budget spreadsheet because facing the overspending would be uncomfortable.', 'Riley évite le tableau budgétaire parce qu affronter les dépenses excessives serait inconfortable.'],
  ['Pia does not check whether the oven is still on because she is busy and does not want another task.', 'Pia ne vérifie pas si le four est encore allumé parce qu elle est occupée et ne veut pas une tâche de plus.'],
  ['Hugo leaves the message from the landlord unread because he assumes it is probably annoying.', 'Hugo laisse le message du propriétaire non lu parce qu il suppose qu il est probablement agaçant.'],
  ['Sam ignores the school portal alert about missing homework because he hopes it will go away.', 'Sam ignore l alerte du portail scolaire sur les devoirs manquants parce qu il espère qu elle disparaîtra.'],
  ['Jade refuses to open the medical bill because she would rather not see the number.', 'Jade refuse d ouvrir la facture médicale parce qu elle préfère ne pas voir le montant.'],
  ['Owen does not check the freezer temperature after the power outage because he fears bad news.', 'Owen ne vérifie pas la température du congélateur après la panne de courant parce qu il craint une mauvaise nouvelle.'],
  ['Lea lets the cracked phone case stay broken because fixing it would force her to think about the drop.', 'Léa laisse la coque cassée du téléphone cassée parce que la réparer l obligerait à penser à la chute.'],
  ['Maya does not ask for the project feedback because no news feels easier than criticism.', 'Maya ne demande pas le retour sur le projet parce qu aucune nouvelle semble plus facile à supporter que la critique.'],
  ['Ben avoids the insurance app because reviewing the policy would mean admitting he never understood it.', 'Ben évite l application d assurance parce que relire la police reviendrait à admettre qu il ne l a jamais comprise.'],
  ['Ava does not open the email about her exam score because she is scared of disappointment.', 'Ava n ouvre pas le courriel concernant sa note à l examen parce qu elle a peur d être déçue.'],
  ['Omar leaves the broken fence alone because he does not want to confront the repair cost.', 'Omar laisse la clôture cassée tranquille parce qu il ne veut pas affronter le coût de la réparation.'],
  ['Nina keeps the ignore list on her phone and does not return the call from the school.', 'Nina garde la liste de blocage sur son téléphone et ne rappelle pas l école.'],
  ['Eli does not review the shared document comments because negative feedback feels easier to skip.', 'Eli ne relit pas les commentaires du document partagé parce qu il est plus facile d ignorer un retour négatif.'],
  ['Lina hears the storm warning but closes the weather app before reading the details.', 'Lina entend l avertissement de tempête mais ferme l application météo avant de lire les détails.'],
  ['Grant does not ask the client for clarification because uncertainty feels less painful than possible criticism.', 'Grant ne demande pas de clarification au client parce que l incertitude semble moins douloureuse qu une critique possible.'],
  ['Tia sees the rejected payment notice and keeps refreshing the page instead of fixing the card.', 'Tia voit l avis de paiement refusé et continue d actualiser la page au lieu de corriger la carte.'],
  ['Finn avoids the room where the smoke smell is strongest because he does not want to know what burned.', 'Finn évite la pièce où l odeur de fumée est la plus forte parce qu il ne veut pas savoir ce qui a brûlé.'],
  ['Mina does not look at the rejected job application because she would rather imagine the result was fine.', 'Mina ne regarde pas la candidature refusée parce qu elle préfère imaginer que le résultat était bon.'],
  ['Theo leaves the router warning light alone because restarting it would make the problem real.', 'Theo laisse le voyant d alerte du routeur tranquille parce que le redémarrer rendrait le problème réel.'],
  ['Juno does not open the envelope from the tax office because the answer could be unpleasant.', 'Juno n ouvre pas l enveloppe du service des impôts parce que la réponse pourrait être désagréable.'],
  ['Iris ignores the cracked window because she has no patience for another household problem.', 'Iris ignore la fenêtre fissurée parce qu elle n a pas la patience d un autre problème à la maison.'],
  ['Cole avoids checking the battery level on the portable speaker because low numbers make him anxious.', 'Cole évite de vérifier le niveau de batterie de l enceinte portable parce que les chiffres bas l angoissent.'],
  ['Riley leaves the unread school message alone because he hopes missing the deadline will somehow not matter.', 'Riley laisse le message scolaire non lu parce qu il espère que rater la date limite ne comptera pas.'],
  ['Pia does not look at the car mileage because the number might mean it needs a service soon.', 'Pia ne regarde pas le kilométrage de la voiture parce que ce chiffre pourrait signifier qu elle a bientôt besoin d une révision.'],
  ['Hugo skips the call from the bank because knowing about the fee would feel worse than not knowing yet.', 'Hugo ignore l appel de la banque parce que savoir pour les frais serait pire que de ne pas le savoir pour l instant.'],
  ['Sam keeps the warning label face down on the shelf so he can pretend it is not there.', 'Sam garde l étiquette d avertissement face cachée sur l étagère pour pouvoir faire comme si elle n existait pas.'],
  ['Jade does not check the refrigerator light because opening the door might reveal spoiled food.', 'Jade ne vérifie pas la lumière du réfrigérateur parce qu ouvrir la porte pourrait révéler de la nourriture avariée.'],
  ['Maya postpones reading the envelope from the landlord because the unknown feels safer than the answer.', 'Maya remet la lecture de l enveloppe du propriétaire parce que l inconnu semble plus sûr que la réponse.'],
  ['Ari ignores the low oil light because checking it would mean dealing with the repair.', 'Ari ignore le voyant d huile basse parce que le vérifier voudrait dire s occuper de la réparation.'],
  ['Mina avoids opening the school portal because the grade could be lower than she hoped.', 'Mina évite d ouvrir le portail scolaire parce que la note pourrait être plus basse qu elle ne l espérait.'],
  ['Owen leaves the overdue water bill unread because the amount might be upsetting.', 'Owen laisse la facture d eau en retard non lue parce que le montant pourrait être inquiétant.'],
  ['Lina does not look at the car inspection report because she fears bad news.', 'Lina ne regarde pas le rapport du contrôle technique parce qu elle craint une mauvaise nouvelle.'],
  ['Theo ignores the flashing router light because restarting it would make the problem real.', 'Theo ignore le voyant clignotant du routeur parce que le redémarrer rendrait le problème réel.'],
  ['Nora keeps the doctor reminder on mute because the appointment might lead to tests.', 'Nora garde le rappel du médecin en sourdine parce que le rendez-vous pourrait mener à des examens.'],
  ['Ben avoids checking the savings app after shopping because the total might sting.', 'Ben évite de consulter l application d épargne après avoir fait du shopping parce que le total pourrait faire mal.'],
  ['Mia does not open the email from her boss because she suspects criticism.', 'Mia n ouvre pas le courriel de son patron parce qu elle soupçonne une critique.'],
  ['Grant leaves the cracked phone screen untouched because fixing it would be annoying.', 'Grant laisse l écran fissuré du téléphone sans rien faire parce que le réparer serait agaçant.'],
  ['Jules ignores the smoke smell in the kitchen because he hopes it will vanish.', 'Jules ignore l odeur de fumée dans la cuisine parce qu il espère qu elle disparaîtra.'],
  ['Ava refuses to check the balance after the weekend because she would rather not know.', 'Ava refuse de vérifier le solde après le week-end parce qu elle préfère ne pas savoir.'],
  ['Rina skips the repair quote because seeing the price would feel worse than delaying.', 'Rina saute le devis de réparation parce que voir le prix semblerait pire que de retarder.'],
  ['Noah keeps the warning label folded over so he can pretend the risk is not there.', 'Noah garde l étiquette d avertissement pliée pour pouvoir faire comme si le risque n existait pas.'],
  ['Tia avoids the feedback form because reading criticism would be uncomfortable.', 'Tia évite le formulaire de retour parce que lire les critiques serait inconfortable.'],
  ['Kai does not open the message from the landlord because rent trouble feels easier to ignore.', 'Kai n ouvre pas le message du propriétaire parce que les problèmes de loyer semblent plus faciles à ignorer.'],
  ['Lea leaves the broken fence alone because facing the cost would be stressful.', 'Léa laisse la clôture cassée tranquille parce qu affronter le coût serait stressant.'],
  ['Hugo does not read the exam results because disappointment seems easier to avoid.', 'Hugo ne lit pas les résultats de l examen parce que la déception semble plus facile à éviter.'],
  ['Pia avoids the delivery app alert because a late package would be annoying.', 'Pia évite l alerte de l application de livraison parce qu un colis en retard serait agaçant.'],
  ['Eli ignores the refrigerator temp warning because opening the freezer might reveal waste.', 'Eli ignore l alerte de température du réfrigérateur parce qu ouvrir le congélateur pourrait révéler du gaspillage.'],
  ['Sara keeps the unread school message archived because the deadline might have passed.', 'Sara archive le message scolaire non lu parce que la date limite a peut-être passé.'],
  ['Finn does not check the tire warning because he hopes the car will be fine today.', 'Finn ne vérifie pas le voyant des pneus parce qu il espère que la voiture ira bien aujourd hui.'],
  ['Jade postpones looking at the medical bill because the number could be upsetting.', 'Jade remet le fait de regarder la facture médicale parce que le montant pourrait être bouleversant.'],
  ['Milo avoids the shared document comments because negative feedback would sting.', 'Milo évite les commentaires du document partagé parce qu un retour négatif ferait mal.'],
  ['Zara does not open the envelope from the tax office because the answer might be bad.', 'Zara n ouvre pas l enveloppe du service des impôts parce que la réponse pourrait être mauvaise.'],
  ['Iris ignores the bank call because hearing about fees would be unpleasant.', 'Iris ignore l appel de la banque parce qu entendre parler de frais serait désagréable.'],
  ['Cole leaves the oven warning light alone because he does not want another chore.', 'Cole laisse le voyant d alerte du four tranquille parce qu il ne veut pas une tâche de plus.'],
  ['Ari avoids checking the phone storage because full memory would mean deleting photos.', 'Ari évite de vérifier le stockage du téléphone parce qu une mémoire pleine voudrait dire supprimer des photos.'],
  ['Rita does not read the rejection email because it would feel better to delay.', 'Rita ne lit pas le courriel de refus parce qu il semblerait meilleur de retarder.'],
  ['Lina leaves the cracked window alone because dealing with it means more work.', 'Lina laisse la fenêtre fissurée parce que s en occuper veut dire plus de travail.'],
  ['Omar does not ask about the rent increase because the answer could be painful.', 'Omar ne pose pas de question sur la hausse du loyer parce que la réponse pourrait être douloureuse.'],
  ['Nina avoids the class portal because seeing missing work would make her anxious.', 'Nina évite le portail de la classe parce que voir les devoirs manquants la rendrait anxieuse.'],
  ['Grant keeps the message from his mechanic unread because repair costs are stressful.', 'Grant laisse le message de son mécanicien non lu parce que les frais de réparation sont stressants.'],
  ['Tia ignores the low battery warning on the smoke alarm because replacing it feels bothersome.', 'Tia ignore l avertissement de batterie faible du détecteur de fumée parce que le remplacer semble pénible.'],
  ['Noah does not open the invoice because seeing the total would ruin his mood.', 'Noah n ouvre pas la facture parce que voir le total gâcherait son humeur.'],
  ['Mia avoids the project feedback because criticism would be uncomfortable to face.', 'Mia évite le retour sur le projet parce que la critique serait inconfortable à affronter.'],
  ['Theo leaves the weather alert unread because storm prep would be inconvenient.', 'Theo laisse l alerte météo non lue parce que se préparer à l orage serait peu pratique.'],
  ['Nora does not check the gym membership renewal because the fee might be high.', 'Nora ne vérifie pas le renouvellement de l abonnement à la salle parce que les frais pourraient être élevés.'],
  ['Ben avoids the email about his score because he does not want to know if he failed.', 'Ben évite le courriel à propos de sa note parce qu il ne veut pas savoir s il a échoué.'],
  ['Ava leaves the unread package notice on the counter because a delay would be annoying.', 'Ava laisse l avis de colis non lu sur le comptoir parce qu un retard serait agaçant.'],
  ['Rina does not open the repair estimate because it might force a decision.', 'Rina n ouvre pas le devis de réparation parce qu il pourrait l obliger à décider.'],
  ['Jules ignores the bank notification because fee details would be unpleasant.', 'Jules ignore la notification de la banque parce que les détails des frais seraient désagréables.'],
  ['Mina avoids the printer error message because it could mean a tedious fix.', 'Mina évite le message d erreur de l imprimante parce qu il pourrait vouloir dire une réparation fastidieuse.'],
  ['Owen leaves the unread landlord text alone because it feels easier not to know.', 'Owen laisse le texto non lu du propriétaire parce qu il semble plus facile de ne pas savoir.'],
  ['Lina does not inspect the wet ceiling because confirming the leak would be stressful.', 'Lina n inspecte pas le plafond humide parce que confirmer la fuite serait stressant.'],
  ['Hugo skips the doctor portal because test results might be scary.', 'Hugo saute le portail du médecin parce que les résultats d examen pourraient être effrayants.'],
  ['Pia does not open the school notice because she prefers not to know about extra homework.', 'Pia n ouvre pas l avis de l école parce qu elle préfère ne pas savoir pour les devoirs supplémentaires.'],
  ['Eli leaves the cracked mug on the shelf because replacing it would be an extra task.', 'Eli laisse la tasse fissurée sur l étagère parce que la remplacer serait une tâche en plus.'],
  ['Sara avoids checking the ride-share receipt because the fare could be higher than expected.', 'Sara évite de vérifier le reçu de covoiturage parce que le tarif pourrait être plus élevé que prévu.'],
  ['Finn does not read the performance review because he fears criticism more than ignorance.', 'Finn ne lit pas l évaluation de performance parce qu il craint la critique plus que l ignorance.'],
];

const OPTIONS_EN = ['Ostrich Effect', 'Avoidance', 'Negativity Bias', 'Sunk Cost Fallacy'];
const OPTIONS_FR = ['Effet autruche', 'Évitement', 'Biais de négativité', 'Syndrome des coûts irrécupérables'];

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
      id: 43901 + index,
      level: 5,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? 'Effet autruche' : 'Ostrich Effect',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La personne évite l information gênante au lieu de la regarder en face.'
        : 'The person avoids unpleasant information instead of facing it directly.',
      detailedExplanationBeginner: isFrench
        ? 'Ignorer le problème ne le fait pas disparaître.'
        : 'Ignoring a problem does not make it disappear.',
      detailedExplanationIntermediate: isFrench
        ? "L effet autruche apparaît quand quelqu un détourne le regard d un risque, d une mauvaise nouvelle ou d un avertissement pour éviter l inconfort immédiat."
        : 'The ostrich effect appears when someone turns away from a risk, bad news, or warning to avoid immediate discomfort.',
      detailedExplanationExpert: isFrench
        ? "Cet effet n est pas simplement de la paresse: c est une stratégie d évitement qui réduit l anxiété à court terme mais augmente souvent le dommage à long terme. En finance, en santé, en maintenance ou en travail, refuser de vérifier un chiffre, un résultat ou une alerte peut transformer un petit problème en crise. La bonne réponse est de recueillir l information malgré l inconfort, puis d agir avec un plan concret."
        : 'This effect is not just laziness: it is an avoidance strategy that lowers anxiety in the short term but often increases harm over time. In finance, health, maintenance, or work, refusing to check a number, result, or alert can turn a small problem into a crisis. The better response is to gather the information despite the discomfort, then act on it with a concrete plan.',
      questionFormat: 'standard',
    };
  });
}

export const OSTRICH_EFFECT_EXPANSION_EN: Question[] = createQuestions('en');
export const OSTRICH_EFFECT_EXPANSION_FR: Question[] = createQuestions('fr');
