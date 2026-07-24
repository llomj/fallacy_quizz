import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya keeps skipping the smoke alarm batteries because replacing them feels more annoying than doing nothing.', 'Maya continue d ignorer les piles du détecteur de fumée parce que les remplacer lui semble plus pénible que ne rien faire.'],
  ['Leo refuses to call the plumber even though the leak is growing, because calling someone feels like "making a fuss."', 'Leo refuse d appeler le plombier même si la fuite grandit, parce qu appeler quelqu un lui donne l impression de "faire tout un drame".'],
  ['Priya does not tell her friend about the torn backpack strap because she does not want to "cause drama."', 'Priya ne dit pas à son amie que la sangle du sac est déchirée parce qu elle ne veut pas "créer de drame".'],
  ['Omar lets the frozen food thaw on the counter because throwing it away feels worse than doing nothing.', 'Omar laisse les aliments surgelés décongeler sur le comptoir parce que les jeter lui semble pire que ne rien faire.'],
  ['Rina sees a child choking slightly and waits because she hopes it will stop on its own without her stepping in.', 'Rina voit un enfant tousser légèrement en s étouffant et attend parce qu elle espère que cela s arrêtera tout seul sans qu elle intervienne.'],
  ['Ben ignores the cracked stair because fixing it would mean admitting the house has a problem.', 'Ben ignore la marche fissurée parce que la réparer reviendrait à admettre que la maison a un problème.'],
  ['Zoe leaves the important email unsent because saying nothing feels less risky than giving a bad answer.', 'Zoé laisse le courriel important non envoyé parce que ne rien dire lui semble moins risqué que donner une mauvaise réponse.'],
  ['Kai sees the bike light is dead and decides to ride anyway because buying a new one feels unnecessary.', 'Kai voit que la lumière du vélo est morte et décide quand même de rouler parce qu en acheter une nouvelle lui semble inutile.'],
  ['Nora knows the medicine expired but keeps it because throwing it out feels wasteful.', 'Nora sait que le médicament est périmé mais le garde parce que le jeter lui semble du gaspillage.'],
  ['Eli notices the store refund policy is wrong but decides not to mention it because it is not his problem.', 'Eli remarque que la politique de remboursement du magasin est fausse mais décide de ne rien dire parce que ce n est pas son problème.'],
  ['Lina sees the car tire is low and postpones checking it because stopping for air feels like extra effort.', 'Lina voit que le pneu de la voiture est gonflé bas et remet le contrôle à plus tard parce que s arrêter pour l air demande un effort supplémentaire.'],
  ['Grant keeps silent when the spreadsheet shows a bad formula, because pointing it out might slow the meeting.', 'Grant se tait quand le tableau montre une mauvaise formule, parce que le signaler pourrait ralentir la réunion.'],
  ['Tia watches her friend leave a purse on the bench and thinks maybe someone else will handle it.', 'Tia regarde son amie laisser son sac à main sur le banc et pense que peut-être quelqu un d autre s en chargera.'],
  ['Noah ignores the broken lock on the shed because the door still closes.', 'Noah ignore la serrure cassée du cabanon parce que la porte se ferme encore.'],
  ['Mia avoids telling the teacher the group missed a step because admitting it would be uncomfortable.', 'Mia évite de dire à l enseignante que le groupe a raté une étape parce qu admettre cela serait inconfortable.'],
  ['Jules leaves the baby gate open because closing it would interrupt the show he is watching.', 'Jules laisse la barrière pour bébé ouverte parce que la fermer interromprait l émission qu il regarde.'],
  ['Ava sees the stranger drop a wallet but walks on because getting involved feels awkward.', 'Ava voit un inconnu laisser tomber son portefeuille mais continue son chemin parce que s impliquer lui semble gênant.'],
  ['Finn notices the garden hose is leaking and waits because dealing with it now would ruin his break.', 'Finn remarque que le tuyau d arrosage fuit et attend parce que s en occuper maintenant gâcherait sa pause.'],
  ['Mina does not tell her coworker the deadline changed because sending another message feels annoying.', 'Mina ne dit pas à son collègue que la date limite a changé parce qu envoyer un autre message lui semble agaçant.'],
  ['Theo sees the oven door not closing well and keeps cooking because the meal is almost done.', 'Theo voit que la porte du four ferme mal et continue de cuisiner parce que le repas est presque prêt.'],
  ['Juno notices the loose railing but figures someone else will probably fix it someday.', 'Juno remarque la rambarde branlante mais se dit que quelqu un d autre la réparera probablement un jour.'],
  ['Iris hears the report has a missing section and decides not to ask for a correction.', 'Iris entend que le rapport a une section manquante et décide de ne pas demander de correction.'],
  ['Cole sees the sink drip all night and thinks a towel under it is good enough.', 'Cole voit le lavabo goutter toute la nuit et pense qu une serviette dessous suffit.'],
  ['Riley watches the class pet look sick and says the teacher will notice later.', 'Riley voit l animal de classe avoir l air malade et dit que l enseignante le remarquera plus tard.'],
  ['Pia knows the website privacy setting is wrong but leaves it because changing settings is tedious.', 'Pia sait que le réglage de confidentialité du site est faux mais le laisse parce que changer les paramètres est fastidieux.'],
  ['Hugo sees the car park on a hill with the brake off and says it probably will be fine for a minute.', 'Hugo voit la voiture garée en pente avec le frein desserré et dit qu elle ira probablement bien pendant une minute.'],
  ['Sam spots a wrong item on the invoice and keeps quiet because the amount is small.', 'Sam repère un mauvais article sur la facture et garde le silence parce que le montant est faible.'],
  ['Jade notices the school app is sending the wrong announcement and assumes someone else will complain.', 'Jade remarque que l application de l école envoie la mauvaise annonce et suppose que quelqu un d autre se plaindra.'],
  ['Owen knows the game controller battery is nearly dead but keeps playing until it dies.', 'Owen sait que la batterie de la manette est presque vide mais continue à jouer jusqu à ce qu elle meure.'],
  ['Lea sees the subscription bill has an extra charge and decides not to dispute it.', 'Léa voit que la facture de l abonnement a un supplément et décide de ne pas la contester.'],
  ['Maya watches a wet floor sign fall over and does not put it back up.', 'Maya voit qu un panneau sol mouillé est tombé et ne le remet pas en place.'],
  ['Ben notices the classroom window is open during a storm and leaves it because getting up is inconvenient.', 'Ben remarque que la fenêtre de la classe est ouverte pendant l orage et la laisse ainsi parce que se lever est gênant.'],
  ['Ava sees a child playing near the stairs and chooses not to warn the parent because it feels rude.', 'Ava voit un enfant jouer près des escaliers et choisit de ne pas prévenir le parent parce que cela lui semble impoli.'],
  ['Omar knows the quiz answer key is wrong but does not tell the instructor.', 'Omar sait que le corrigé du quiz est faux mais ne le dit pas au professeur.'],
  ['Nina hears the library book is overdue in her bag and ignores it until tomorrow.', 'Nina entend que le livre de bibliothèque est en retard dans son sac et l ignore jusqu à demain.'],
  ['Eli sees the fire extinguisher is missing from the wall but thinks the issue is probably minor.', 'Eli voit que l extincteur a disparu du mur mais pense que le problème est probablement mineur.'],
  ['Lina spots the shopping cart wheel wobbling and keeps using it anyway.', 'Lina voit que la roue du chariot de courses vacille et continue quand même à l utiliser.'],
  ['Grant knows the meeting room booking is wrong but leaves it because changing it might take time.', 'Grant sait que la réservation de la salle de réunion est incorrecte mais la laisse ainsi parce que la changer prendrait du temps.'],
  ['Tia sees a missing pill in the weekly dispenser and hopes the rest is enough.', 'Tia voit qu il manque une pilule dans le pilulier hebdomadaire et espère que le reste suffira.'],
  ['Finn notices the package is addressed to the wrong apartment and does nothing.', 'Finn remarque que le colis est adressé au mauvais appartement et ne fait rien.'],
  ['Mina hears the baby monitor battery is low and decides not to plug it in yet.', 'Mina entend que la batterie du babyphone est faible et décide de ne pas le brancher tout de suite.'],
  ['Theo sees a loose step on the porch and tells himself nobody will be hurt today.', 'Theo voit une marche branlante sur le perron et se dit que personne ne sera blessé aujourd hui.'],
  ['Juno notices the password was shared in the group chat and says fixing it can wait.', 'Juno remarque que le mot de passe a été partagé dans le groupe et dit que la correction peut attendre.'],
  ['Iris knows the sink is backing up but waits because the water still drains a little.', 'Iris sait que l évier refoule mais attend parce que l eau s écoule encore un peu.'],
  ['Cole sees the bike helmet strap is broken and rides without it because stopping feels like overreacting.', 'Cole voit que la jugulaire du casque de vélo est cassée et roule sans casque parce que s arrêter lui semble exagéré.'],
  ['Riley hears the smoke detector chirp and mutes it instead of replacing the battery.', 'Riley entend le détecteur de fumée biper et le met en sourdine au lieu de remplacer la pile.'],
  ['Pia notices the online form says the wrong address and decides not to correct it.', 'Pia remarque que le formulaire en ligne indique la mauvaise adresse et décide de ne pas la corriger.'],
  ['Hugo sees the fridge door left ajar and closes it only halfway.', 'Hugo voit que la porte du réfrigérateur est restée entrouverte et ne la referme qu à moitié.'],
  ['Sam hears the policy would help one classmate but stays out of it because it does not affect him personally.', 'Sam entend que la règle aiderait un camarade mais reste en dehors parce que cela ne le touche pas personnellement.'],
  ['Jade notices the report deadline is wrong and decides the editor will catch it.', 'Jade remarque que la date limite du rapport est erronée et décide que la rédactrice la verra.'],
  ['Maya sees the school bus driver skip a stop and says complaining would be pointless.', 'Maya voit le chauffeur de bus scolaire sauter un arrêt et dit que se plaindre serait inutile.'],
  ['Ben watches a small kitchen fire start in a pan and hesitates because calling for help would interrupt dinner.', 'Ben voit un petit départ de feu dans une poêle et hésite parce que demander de l aide interromprait le dîner.'],
];

const OPTIONS_EN = ['Omission Bias', 'Status Quo Bias', 'Pessimism Bias', 'Optimism Bias'];
const OPTIONS_FR = ["Biais d'omission", 'Biais du statu quo', 'Biais de pessimisme', "Biais d'optimisme"];

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
      id: 43851 + index,
      level: 5,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? "Biais d'omission" : 'Omission Bias',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La personne préfère ne rien faire, meme si l inaction laisse le probleme empirer.'
        : 'The person prefers doing nothing, even when inaction lets the problem get worse.',
      detailedExplanationBeginner: isFrench
        ? 'Ne rien faire peut sembler plus facile, mais ce n est pas toujours la meilleure option.'
        : 'Doing nothing may feel easier, but it is not always the best choice.',
      detailedExplanationIntermediate: isFrench
        ? 'Le biais d omission conduit à juger une action nuisible comme pire qu une omission tout aussi nuisible, simplement parce que l on a agi.'
        : 'Omission bias leads people to judge a harmful action as worse than an equally harmful omission simply because they acted.',
      detailedExplanationExpert: isFrench
        ? "Le biais d omission apparaît quand on accorde une valeur morale différente à un dommage causé par action et à un dommage causé par inertie, même si les conséquences sont comparables. Il pousse à reporter, minimiser ou éviter des décisions qui exigeraient d intervenir, surtout lorsque l intervention comporte un risque émotionnel, social ou symbolique. La correction consiste à comparer les conséquences réelles, pas seulement le sentiment de culpabilité associé à l action."
        : 'Omission bias appears when people assign different moral weight to harm caused by action and harm caused by inaction, even when the consequences are comparable. It pushes people to delay, minimize, or avoid decisions that require intervention, especially when intervention carries emotional, social, or symbolic risk. The fix is to compare the actual consequences, not just the guilt attached to acting.',
      questionFormat: 'standard',
    };
  });
}

export const OMISSION_BIAS_EXPANSION_EN: Question[] = createQuestions('en');
export const OMISSION_BIAS_EXPANSION_FR: Question[] = createQuestions('fr');
