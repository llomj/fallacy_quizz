import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya thinks the neighbor left the gate open because he forgot, not because he wanted trouble.', "Maya pense que le voisin a laisse le portail ouvert parce qu il a oublie, et non parce qu il voulait des problemes."],
  ["Leo assumes the missing file was misplaced by accident rather than deleted on purpose.", "Leo suppose que le fichier manquant a ete egare par accident plutot que supprime volontairement."],
  ['Nina says the rude email probably came from a rushed mistake, not a secret attack.', "Nina dit que le courriel impoli venait probablement d une erreur precipitee, et non d une attaque cachee."],
  ['Owen believes the bad delivery happened because the driver was overwhelmed, not malicious.', "Owen croit que la mauvaise livraison est arrivee parce que le chauffeur etait deborde, et non par malveillance."],
  ['Priya thinks the broken lamp was left that way by carelessness, not by sabotage.', "Priya pense que la lampe cassee a ete laissee ainsi par negligence, et non par sabotage."],
  ['Ben says the late reply was probably forgetfulness, not an insult.', "Ben dit que la reponse tardive etait probablement un oubli, pas une insulte."],
  ['Tara assumes the messy desk came from a busy morning, not a plan to annoy anyone.', "Tara suppose que le bureau en desordre vient d une matinee chargee, et non d un plan pour agacer quelqu un."],
  ['Kai thinks the missing chair was moved by mistake, not stolen to cause drama.', "Kai pense que la chaise manquante a ete deplacee par erreur, et non volee pour creer un drame."],
  ['Jules says the typo in the flyer was probably rushed editing, not a hidden message.', "Jules dit que la faute de frappe dans le prospectus venait probablement d une relecture trop rapide, pas d un message cache."],
  ['Ava believes the noisy neighbor was just being careless with the music, not trying to start a feud.', "Ava croit que le voisin bruyant etait simplement maladroit avec sa musique, et non qu il cherchait a declencher une querelle."],
  ['Noah thinks the forgotten anniversary was absent-mindedness, not a deliberate slight.', "Noah pense que l anniversaire oublie etait de l etourderie, pas un affront volontaire."],
  ['Mina says the spilled coffee was likely a clumsy hand, not a plot to ruin the morning.', "Mina dit que le cafe renverse venait probablement d une main maladroite, pas d un complot pour ruiner la matinee."],
  ['Eli assumes the slow reply came from a packed schedule, not from ignoring the message on purpose.', "Eli suppose que la reponse lente venait d un agenda charge, et non d une negligence volontaire du message."],
  ['Rina thinks the broken promise was probably confusion, not malice.', "Rina pense que la promesse non tenue venait probablement d une confusion, et non de la malveillance."],
  ['Hugo says the wrong order was a mix-up, not a personal insult from the kitchen.', "Hugo dit que la mauvaise commande etait une erreur de confusion, pas une insulte personnelle de la cuisine."],
  ['Lina believes the cold greeting was just awkwardness, not a deliberate snub.', "Lina croit que l accueil froid etait simplement de la gene, pas un snobisme volontaire."],
  ['Grant thinks the lost package was misrouted, not hidden by someone trying to be mean.', "Grant pense que le colis perdu a ete mal achemine, pas cache par quelqu un qui voulait etre mechant."],
  ['Zoe says the forgotten password was likely human error, not a scheme to lock her out.', "Zoe dit que le mot de passe oublie venait probablement d une erreur humaine, et non d une combine pour la bloquer."],
  ['Milo assumes the awkward pause was nerves, not disrespect.', "Milo suppose que le silence gene venait du stress, pas du manque de respect."],
  ['Theo believes the broken link was a tech glitch, not someone trying to sabotage the project.', "Theo croit que le lien casse etait un bug technique, pas quelqu un qui essayait de saboter le projet."],
  ['Pia says the missed call was probably accidental, not a deliberate brush-off.', "Pia dit que l appel manque etait probablement accidentel, pas un rejet volontaire."],
  ['Finn thinks the bad parking was a mistake, not an intentional way to block the driveway.', "Finn pense que le mauvais stationnement etait une erreur, pas une maniere intentionnelle de bloquer l entree."],
  ['Maya assumes the empty fridge shelf was a simple oversight, not a sign of selfishness.', "Maya suppose que l etagere vide du frigo etait une simple omission, pas un signe d egoisme."],
  ['Sam says the confusing sign was probably rushed design, not a trap.', "Sam dit que le panneau confus venait probablement d un design precipite, pas d un piege."],
  ['Juno thinks the late bus was delayed by traffic, not because the driver wanted to annoy riders.', "Juno pense que le bus en retard a ete bloque par la circulation, pas parce que le chauffeur voulait agacer les passagers."],
  ['Iris believes the broken chair at the meeting was wear and tear, not someone being hostile.', "Iris croit que la chaise cassee pendant la reunion etait de l usure, pas quelqu un de hostile."],
  ['Cole says the unclear instructions were sloppy, not a trick to make people fail.', "Cole dit que les instructions floues etaient brouillonnes, pas un piege pour faire echouer les gens."],
  ['Nora thinks the delayed text was because the phone was ignored, not because the sender was trying to hurt her.', "Nora pense que le texto retarde venait du fait que le telephone etait ignore, pas parce que l expediteur voulait lui faire du mal."],
  ['Ari says the forgotten lunch was likely stress, not a deliberate act of disrespect.', "Ari dit que le dejeuner oublie etait probablement du stress, pas un acte volontaire d irrespect."],
  ['Rita assumes the missing vote was confusion, not sabotage.', "Rita suppose que le vote manquant venait d une confusion, pas d un sabotage."],
  ['Tia thinks the messy spreadsheet was a rushed entry error, not a prank.', "Tia pense que le tableur en desordre venait d une saisie precipitee, pas d une blague."],
  ['Oli says the broken printer was probably old hardware, not a plan to stop the report.', "Oli dit que l imprimante cassee etait probablement du vieux materiel, pas un plan pour arreter le rapport."],
  ['Lara believes the missed pickup was a scheduling mistake, not a personal attack.', "Lara croit que l oubli du ramassage etait une erreur de planning, pas une attaque personnelle."],
  ['Ben thinks the rude tone was probably fatigue, not a secret grudge.', "Ben pense que le ton sec venait probablement de la fatigue, pas d une rancune cachee."],
  ['Mina says the broken promise was likely poor planning, not cruelty.', "Mina dit que la promesse rompue venait probablement d une mauvaise planification, pas de la cruauté."],
  ['Drew assumes the missing item was accidentally left out, not taken to provoke people.', "Drew suppose que l objet manquant a ete oublie par accident, pas vole pour provoquer les gens."],
  ['Jade thinks the late answer was probably distraction, not disrespect.', "Jade pense que la reponse tardive etait probablement une distraction, pas du manque de respect."],
  ['Owen says the awkward comment was clumsy wording, not a calculated insult.', "Owen dit que le commentaire genant etait une formulation maladroite, pas une insulte calculee."],
  ['Mila believes the bad coordination was overwhelmed staff, not bad faith.', "Mila croit que la mauvaise coordination venait d un personnel deborde, pas de la mauvaise foi."],
  ['Evan thinks the missed email was an inbox mistake, not an attempt to exclude him.', "Evan pense que le courriel manque etait une erreur de boite de reception, pas une tentative de l exclure."],
  ['Kira says the spilled paint was probably clumsiness, not vandalism.', "Kira dit que la peinture renversee venait probablement de la maladresse, pas d un acte de vandalisme."],
  ['Grant believes the odd schedule was a planning slip, not a personal vendetta.', "Grant croit que l horaire etrange etait un raté de planification, pas une vendetta personnelle."],
  ['Zara thinks the missing note was lost in the shuffle, not hidden on purpose.', "Zara pense que la note manquante s est perdue dans le tri, pas cachee volontairement."],
  ['Parker says the blunt message was probably stress, not hostility.', "Parker dit que le message abrupt venait probablement du stress, pas de l hostilite."],
  ['Hana assumes the broken promise was forgetfulness, not a scheme.', "Hana suppose que la promesse rompue etait un oubli, pas un stratageme."],
  ['Leo thinks the mistaken delivery was just a mix-up, not a cruel joke.', "Leo pense que la mauvaise livraison etait simplement une confusion, pas une blague cruelle."],
  ['Maya says the delayed response was probably a busy day, not passive aggression.', "Maya dit que la reponse retardee venait probablement d une journee chargee, pas d une aggression passive."],
  ['Nina believes the messy notes were rushed work, not a way to make someone fail.', "Nina croit que les notes brouillonnes etaient du travail precipite, pas une maniere de faire echouer quelqu un."],
  ['After the cafe closes early, Liam assumes the owner forgot to update the hours instead of trying to annoy customers.', "Apres que le cafe ferme tot, Liam suppose que le proprietaire a oublie de mettre a jour les horaires plutot que d essayer d embeter les clients."],
  ['Sophie thinks the missing signature on the form was probably an oversight, not a secret attempt to block the request.', "Sophie pense que la signature manquante sur le formulaire etait probablement un oubli, pas une tentative cachee de bloquer la demande."],
  ['After a friend cancels dinner, Owen assumes she is overwhelmed with work, not mad at him.', "Apres qu une amie annule le diner, Owen suppose qu elle est debordee par le travail, pas qu elle lui en veut."],
  ['Priya says the broken link in the email was likely a copy-paste mistake, not sabotage.', "Priya dit que le lien casse dans le courriel etait probablement une erreur de copier-coller, pas du sabotage."],
  ['When the shop gives the wrong size, Maya thinks the clerk was rushed, not rude on purpose.', "Quand la boutique donne la mauvaise taille, Maya pense que le vendeur etait presse, pas impoli expres."],
  ['Theo believes the silent group chat came from people being busy, not from them freezing him out.', "Theo croit que le groupe silencieux venait des gens occupes, pas d une mise a l ecart volontaire."],
  ['After a printer jams, Nina assumes old equipment is the cause, not that someone wanted to ruin her report.', "Apres qu une imprimante se bloque, Nina suppose que le vieux materiel est la cause, pas que quelqu un voulait ruiner son rapport."],
  ['Ben says the weird typo on the poster was probably done in a rush, not as a hidden insult.', "Ben dit que l etrange faute sur l affiche etait probablement due a la precipitation, pas a une insulte cachee."],
  ['When the neighbor forgets to wave, Iris thinks he simply did not notice her, rather than trying to snub her.', "Quand le voisin oublie de saluer, Iris pense qu il ne l a simplement pas vue, plutot que d essayer de la snober."],
  ['Grant believes the late package was routed badly by the courier, not delivered late out of spite.', "Grant croit que le colis en retard a ete mal achemine par le livreur, pas remis en retard par vengeance."],
  ['After a teacher sounds abrupt, Zoe assumes stress is the reason, not that the teacher dislikes the class.', "Apres qu un professeur semble abrupt, Zoe suppose que le stress en est la raison, pas que le professeur n aime pas la classe."],
  ['Maya assumes the missing stapler was simply borrowed and forgotten, not taken to cause trouble.', "Maya suppose que l agrafeuse manquante a simplement ete empruntee puis oubliee, pas prise pour causer des problemes."],
  ['Ben thinks the typo in the group message came from rushing, not from someone trying to be rude.', "Ben pense que la faute de frappe dans le message de groupe venait de la precipitation, pas de quelqu un qui voulait etre impoli."],
  ['Priya says the late reply was probably an inbox flood, not a deliberate brush-off.', "Priya dit que la reponse tardive venait probablement d une boite de reception surchargee, pas d un rejet volontaire."],
  ['Noah assumes the broken chair was old and weak, not broken on purpose.', "Noah suppose que la chaise cassee etait vieille et fragile, pas cassee volontairement."],
  ['Lina believes the awkward comment came from nerves, not from mean intent.', "Lina croit que le commentaire genant venait du trac, pas d une intention mechant."],
  ['Theo says the misfiled document was a filing error, not a secret trick.', "Theo dit que le document mal classe etait une erreur de classement, pas un stratageme secret."],
  ['Ava thinks the missed call was accidental because the phone was probably in a bag.', "Ava pense que l appel manque etait accidentel parce que le telephone etait probablement dans un sac."],
  ['Omar assumes the sloppy cleanup came from being short-staffed, not from not caring.', "Omar suppose que le nettoyage brouillon venait d un manque de personnel, pas d un manque d interet."],
  ['Rosa says the rude tone was likely exhaustion, not hostility.', "Rosa dit que le ton sec venait probablement de la fatigue, pas de l hostilite."],
  ['Jules thinks the lost note was mislaid in the rush, not hidden to be annoying.', "Jules pense que la note perdue a ete egaree dans la precipitation, pas cachee pour etre enervante."],
  ['Mia thinks the broken coffee machine was probably neglected maintenance, not a plan to annoy the office.', "Mia pense que la machine a cafe cassee venait probablement d un manque d entretien, pas d un plan pour agacer le bureau."],
  ['After the neighbor forgets the trash day, Leo assumes it was a simple mix-up, not a targeted snub.', "Apres que le voisin oublie le jour des poubelles, Leo suppose qu il s agit d une simple confusion, pas d un snobisme vise."],
  ['Nina says the late grocery order was probably just too many orders, not someone trying to ruin dinner.', "Nina dit que la commande d epicerie en retard venait probablement d une surcharge de commandes, pas de quelqu un qui voulait ruiner le diner."],
  ['Owen thinks the missing pen from the desk was borrowed and forgotten, not stolen to be petty.', "Owen pense que le stylo manque sur le bureau a ete emprunte puis oublie, pas vole pour faire du mesquin."],
  ['Priya assumes the confusing sign was rushed design, not a trap to make people fail.', "Priya suppose que le panneau confus venait d une conception precipitee, pas d un piege pour faire echouer les gens."],
  ['Ben believes the curt text came from stress, not from someone secretly disliking him.', "Ben croit que le texto sec venait du stress, pas de quelqu un qui ne l aimait secretement pas."],
  ['Tara says the printer jam was old hardware, not sabotage by a coworker.', "Tara dit que le bourrage de l imprimante venait d un vieux materiel, pas d un sabotage par un collegue."],
  ['Kai thinks the empty snack shelf was a stocking mistake, not selfishness.', "Kai pense que l etagere de collations vide venait d une erreur de remplissage, pas d egoisme."],
  ['Juno assumes the canceled lunch was because the person was overwhelmed, not because they wanted to offend her.', "Juno suppose que le dejeuner annule venait du fait que la personne etait debordee, pas parce qu elle voulait l offenser."],
  ['Milo believes the typo in the presentation slide was a rushed edit, not a hidden insult.', "Milo croit que la faute de frappe sur la diapositive venait d une modification precipitee, pas d une insulte cachee."],
  ['Rina says the delayed reply in chat was probably notification overload, not a brush-off.', "Rina dit que la reponse retardee dans le chat venait probablement d un trop-plein de notifications, pas d un rejet."],
  ['Grant assumes the broken lock was worn out, not tampered with to cause drama.', "Grant suppose que la serrure cassee etait usee, pas manipulee pour creer du drame."],
  ['Zoe thinks the rude cashier was having a rough day, not trying to be mean on purpose.', "Zoe pense que la caissiere impolie passait une mauvaise journee, pas qu elle essayait d etre mechante exprès."],
  ['Lina believes the missing RSVP came from forgetting, not from a deliberate slight.', "Lina croit que l absence de reponse venait de l oubli, pas d une offense deliberée."],
  ['Hugo says the awkward pause at dinner was nerves, not a sign of hostility.', "Hugo dit que le silence gene au diner venait du trac, pas d un signe d hostilite."],
  ['Ari assumes the wrong order at the cafe was a kitchen mix-up, not a personal jab.', "Ari suppose que la mauvaise commande au cafe etait une confusion de cuisine, pas une pique personnelle."],
  ['Maya thinks the messy room was caused by a hectic morning, not by someone wanting to upset her.', "Maya pense que la chambre en desordre venait d une matinee chaotique, pas de quelqu un qui voulait la contrarier."],
  ['Theo says the missing homework file was probably saved in the wrong folder, not deleted out of spite.', "Theo dit que le fichier de devoir manquant a probablement ete enregistre dans le mauvais dossier, pas supprime par mepris."],
  ['Pia believes the odd message punctuation was a typo, not a coded insult.', "Pia croit que la ponctuation bizarre du message etait une faute de frappe, pas une insulte codee."],
  ['Evan assumes the noisy upstairs neighbor was distracted, not deliberately trying to keep everyone awake.', "Evan suppose que le voisin bruyant du dessus etait distrait, pas qu il essayait deliberement d empecher tout le monde de dormir."],
  ['Mina thinks the missing stapler in the office was misplaced during cleanup, not taken to annoy the team.', "Mina pense que l agrafeuse manquante au bureau a ete egaree pendant le nettoyage, pas prise pour agacer l equipe."],
  ['Jade says the late pickup text was probably a scheduling slip, not a power move.', "Jade dit que le texto de ramassage en retard etait probablement un raté de planification, pas un coup de force."],
  ['Cole believes the broken microphone was an equipment issue, not a prank.', "Cole croit que le micro casse etait un probleme d equipement, pas une farce."],
  ['Nora assumes the forgotten coffee run was an honest mistake, not disrespect.', "Nora suppose que le cafe oublie etait une erreur sincere, pas un manque de respect."],
  ['Sam thinks the messy spreadsheet came from rushing before a deadline, not from laziness.', "Sam pense que le tableur en desordre venait d une course contre la montre avant l echeance, pas de la paresse."],
  ['Iris says the abrupt goodbye was probably fatigue, not a secret grudge.', "Iris dit que l au revoir abrupt venait probablement de la fatigue, pas d une rancune secrete."],
  ['After the lights go out, Omar assumes the power cut was an outage, not a scheme.', "Apres la panne de lumiere, Omar suppose qu il s agit d une coupure de courant, pas d une machination."],
  ['Mina thinks the missing office mug was washed and returned somewhere else, not taken to be petty.', "Mina pense que la tasse de bureau manquante a ete lavee puis remise ailleurs, pas prise pour etre mesquine."],
  ['Ben assumes the awkward silence after his joke means people are tired, not that they are plotting against him.', "Ben suppose que le silence gene apres sa blague veut dire que les gens sont fatigues, pas qu ils complotent contre lui."],
  ['Rita says the broken hallway light was probably old wiring, not someone trying to make the place creepy.', "Rita dit que la lumiere cassee du couloir venait probablement d un vieux cablage, pas de quelqu un qui voulait rendre l endroit inquietant."],
  ['Tia thinks the delayed group update was because nobody had the full information, not because they wanted to exclude her.', "Tia pense que la mise a jour de groupe tardive venait du fait que personne n avait toutes les informations, pas parce qu ils voulaient l exclure."]
];

const OPTIONS_EN = ["Hanlon's Razor", 'Fundamental Attribution Error', 'Just-World Hypothesis', 'Ad Hominem'];
const OPTIONS_FR = ['Rasoir de Hanlon', 'Erreur fondamentale d attribution', 'Hypothèse du monde juste', 'Attaque ad hominem'];

function rotatedOptions(options: string[], correctIndex: number): string[] {
  const distractors = options.slice(1);
  const result = [...distractors];
  result.splice(correctIndex, 0, options[0]);
  return result;
}

function subLevelFor(index: number): SubLevel {
  if (index < 43) return SubLevel.BEGINNER;
  if (index < 50) return SubLevel.INTERMEDIATE;
  return SubLevel.EXPERT;
}

export const HANLONS_RAZOR_EXPANSION_EN: Question[] = SCENARIOS.map(([english], index) => {
  const correctIndex = index % 4;
  return {
    id: 37801 + index,
    level: 3,
    persona_stage: PersonaStage.CRAB,
    concept: "Hanlon's Razor",
    difficulty: index < 43 ? 1 : index < 50 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Which principle is illustrated here?\n\n"${english}"`,
    options: rotatedOptions(OPTIONS_EN, correctIndex),
    correct_option_index: correctIndex,
    explanation: 'The situation is explained by mistake, carelessness, or overload instead of assuming malice.',
    detailedExplanationBeginner: 'Simple mistakes are more likely than evil intent.',
    detailedExplanationIntermediate: 'This principle warns against jumping straight to a hostile explanation when a clumsy or stressed explanation fits just as well.',
    detailedExplanationExpert: "Hanlon's Razor is a practical reasoning principle: when an event can be explained by ignorance, fatigue, or error, those causes should be considered before assuming bad faith or deliberate harm.",
    questionFormat: 'standard',
  };
});

export const HANLONS_RAZOR_EXPANSION_FR: Question[] = SCENARIOS.map(([, french], index) => {
  const correctIndex = index % 4;
  return {
    id: 37801 + index,
    level: 3,
    persona_stage: PersonaStage.CRAB,
    concept: 'Rasoir de Hanlon',
    difficulty: index < 43 ? 1 : index < 50 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Quel principe est illustré ici ?\n\n"${french}"`,
    options: rotatedOptions(OPTIONS_FR, correctIndex),
    correct_option_index: correctIndex,
    explanation: 'La situation est expliquée par une erreur, de la négligence ou de la surcharge plutot que par la malveillance.',
    detailedExplanationBeginner: 'Les erreurs simples sont plus probables qu une intention malveillante.',
    detailedExplanationIntermediate: 'Ce principe rappelle qu il faut éviter de sauter directement a une explication hostile quand une explication maladroite ou fatiguée convient tout aussi bien.',
    detailedExplanationExpert: "Le rasoir de Hanlon est un principe pratique de raisonnement : lorsqu un evenement peut s expliquer par l ignorance, la fatigue ou l erreur, ces causes doivent etre envisagees avant d attribuer une mauvaise foi ou un tort deliberé.",
    questionFormat: 'standard',
  };
});
