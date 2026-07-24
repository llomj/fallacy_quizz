import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Rita is sure she locked the car, but she only remembers it because she saw the keychain later.', "Rita est sure d'avoir ferme la voiture, mais elle ne s'en souvient que parce qu'elle a vu le porte-cle plus tard."],
  ['Ben remembers a birthday party that was actually a school play he attended years ago.', "Ben se souvient d'une fete d'anniversaire qui etait en realite une piece de theatre scolaire qu'il avait vue il y a des annees."],
  ['Mina thinks she met the celebrity, but she only saw them on a giant screen.', "Mina pense avoir rencontre la celebrite, mais elle ne l'a vue que sur un ecran geant."],
  ['Theo recalls hearing the alarm, though the sound came from a movie on TV.', "Theo se rappelle avoir entendu l'alarme, alors que le son venait d'un film a la television."],
  ['Ava is certain she packed the charger, but she is remembering another trip.', "Ava est sure d'avoir range le chargeur, mais elle se souvient d'un autre voyage."],
  ['Leo remembers a teacher praising him, but the praise was for another student.', "Leo se souvient qu'un professeur l'a felicite, mais les compliments etaient pour un autre eleve."],
  ['Nina thinks her friend promised to call, but she is mixing it up with a text message.', "Nina pense que son amie a promis d'appeler, mais elle confond cela avec un message texte."],
  ['Owen is sure he saw the package arrive, but he only saw a delivery notice.', "Owen est sur d'avoir vu le colis arriver, mais il n'a vu qu'un avis de livraison."],
  ['Priya remembers winning a prize at the fair, but she only got a ribbon at school.', "Priya se souvient d'avoir gagne un prix a la foire, mais elle n'a obtenu qu'un ruban a l'ecole."],
  ['Milo thinks he heard the neighbor apologize, but it was a scene in a podcast.', "Milo pense avoir entendu le voisin s'excuser, mais c'etait une scene dans un podcast."],
  ['Lina recalls a full conversation that was actually two short messages.', "Lina se rappelle une conversation complete qui n'etait en realite que deux petits messages."],
  ['Kai is sure the meeting happened in the afternoon, but it was from a calendar reminder.', "Kai est sur que la reunion a eu lieu l'apres-midi, mais il s'agissait d'un rappel de calendrier."],
  ['Zoe thinks she heard her name in the room, but the sound came from a video outside.', "Zoe pense avoir entendu son nom dans la piece, mais le son venait d'une video a l'exterieur."],
  ['Finn remembers a red shirt at the party, but it was a jacket in a photo.', "Finn se souvient d'une chemise rouge a la fete, mais c'etait une veste sur une photo."],
  ['Mina believes she mailed the form, but she only filled it out and left it on the table.', "Mina croit avoir poste le formulaire, mais elle l'a seulement rempli et laisse sur la table."],
  ['Eli is convinced the app crashed twice, but one was a frozen screen and one was a lag spike.', "Eli est convaincu que l'application a plante deux fois, mais l'un etait un ecran bloque et l'autre un pic de ralentissement."],
  ['Tara thinks her cousin was at dinner, but she is remembering a FaceTime call.', "Tara pense que son cousin etait au diner, mais elle se souvient en fait d'un appel FaceTime."],
  ['Noah recalls the dog stealing a sandwich, but the dog only smelled the plate.', "Noah se rappelle que le chien a vole un sandwich, mais le chien a seulement renifle l'assiette."],
  ['Rina is sure the class voted for the field trip, but she is remembering the teacher poll.', "Rina est sure que la classe a vote pour la sortie, mais elle se souvient en fait du sondage du professeur."],
  ['Jasper remembers hearing a whistle, but it was the kettle in the next room.', "Jasper se souvient avoir entendu un sifflement, mais c'etait la bouilloire dans la piece voisine."],
  ['Maya thinks she saw the receipt in her wallet, but it was a photo on her phone.', "Maya pense avoir vu le recu dans son portefeuille, mais c'etait une photo sur son telephone."],
  ['Hugo remembers being invited first, but he is mixing up the guest list with the waitlist.', "Hugo se souvient d'avoir ete invite en premier, mais il confond la liste d'invites et la liste d'attente."],
  ['Layla is sure the store closed early, but she remembers a different shop.', "Layla est sure que le magasin a ferme tot, mais elle se souvient d'une autre boutique."],
  ['Clara recalls a joke from her manager, but it was repeated by a coworker.', "Clara se rappelle une blague de son responsable, mais elle a ete repetee par un collegue."],
  ['Dylan thinks the bus was late, but he was looking at the wrong route.', "Dylan pense que le bus etait en retard, mais il regardait le mauvais itineraire."],
  ['Sofia remembers the room being blue, but the photo was filtered.', "Sofia se souvient que la piece etait bleue, mais la photo etait filtree."],
  ['Reed is sure he bought toothpaste yesterday, but he bought it last week.', "Reed est sur d'avoir achete du dentifrice hier, mais il l'a achete la semaine derniere."],
  ['Emma thinks the team agreed in the chat, but she is remembering a different thread.', "Emma pense que l'equipe etait d'accord dans le chat, mais elle se souvient d'un autre fil."],
  ['Ari remembers a warning from the doctor, but it was actually from a TV ad.', "Ari se souvient d'un avertissement du medecin, mais il venait en fait d'une pub tele."],
  ['Mina is sure the cake was chocolate, but she is mixing it with another birthday.', "Mina est sure que le gateau etait au chocolat, mais elle le confond avec un autre anniversaire."],
  ['Cole recalls his friend saying yes, but the friend only nodded politely.', "Cole se rappelle que son ami a dit oui, mais l'ami a seulement hoché la tete poliment."],
  ['Tessa thinks the concert was outdoors, but she is remembering the parking lot line.', "Tessa pense que le concert etait en plein air, mais elle se souvient de la file du parking."],
  ['Jonah remembers winning the argument, but it was a disagreement he walked away from.', "Jonah se souvient avoir gagne l'argument, mais c'etait un desaccord qu'il a simplement quitte."],
  ['Kira thinks she saw the file on her desk, but it was in an email attachment.', "Kira pense avoir vu le fichier sur son bureau, mais il etait dans une piece jointe de courriel."],
  ['Parker recalls the lamp breaking in the kitchen, but it broke in the hallway.', "Parker se rappelle que la lampe s'est cassée dans la cuisine, mais elle s'est cassée dans le couloir."],
  ['Nora is sure the class had a substitute, but it was only a video lesson.', "Nora est sure que la classe avait un remplaçant, mais c'etait seulement une lecon video."],
  ['Evan remembers the package being lost, but it was marked delivered to the porch.', "Evan se souvient que le colis etait perdu, mais il etait marque comme livre sur le perron."],
  ['Stella thinks she heard applause for her idea, but it was for the speaker before her.', "Stella pense avoir entendu des applaudissements pour son idee, mais c'etait pour l'orateur avant elle."],
  ['Ray remembers the store owner refusing help, but the owner was helping another customer.', "Ray se souvient que le proprietaire du magasin a refuse d'aider, mais il aidait un autre client."],
  ['Jade is sure she saw the timer at ten minutes, but it was ten seconds.', "Jade est sure d'avoir vu la minuterie a dix minutes, mais c'etait dix secondes."],
  ['Drew thinks the announcement was about the parking lot, but it was about the playground.', "Drew pense que l'annonce concernait le parking, mais elle parlait de la cour de recreation."],
  ['Lara recalls a manager yelling, but it was a loud laugh in the hallway.', "Lara se rappelle qu'un responsable criait, mais c'etait un rire fort dans le couloir."],
  ['Oli remembers the class reading one article, but it was two summaries.', "Oli se souvient que la classe a lu un article, mais c'etait deux resumes."],
  ['Mia is sure she returned the book, but she only renewed it.', "Mia est sure d'avoir rendu le livre, mais elle l'a seulement renouvelle."],
  ['Felix thinks the noise came from upstairs, but it was from the basement.', "Felix pense que le bruit venait de l'etage, mais il venait du sous-sol."],
  ['Iris recalls the soup being too salty, but she is mixing it with last night’s meal.', "Iris se rappelle que la soupe etait trop salee, mais elle la confond avec le repas d'hier soir."],
  ['Grant thinks he heard the deadline change, but he only heard a rumor about it.', "Grant pense avoir entendu le delai changer, mais il n'a entendu qu'une rumeur a ce sujet."],
  ['Juno remembers the meeting starting late, but she is thinking of another meeting.', "Juno se souvient que la reunion a commence en retard, mais elle pense a une autre reunion."],
  ['Pia is sure the receipt was in the envelope, but it was the envelope from a different bill.', "Pia est sure que le recu etait dans l'enveloppe, mais c'etait l'enveloppe d'une autre facture."],
  ['Maya thinks she parked on the third floor, but she is remembering a different garage.', "Maya pense s'etre garee au troisieme etage, mais elle se rappelle d'un autre parking."],
  ['Theo remembers a blue notebook from class, but it was actually the cover of a textbook.', "Theo se souvient d'un carnet bleu en classe, mais c'etait en fait la couverture d'un manuel."],
  ['Ava is sure she heard the phone ring, but it was a ringtone from a video.', "Ava est sure d'avoir entendu le telephone sonner, mais c'etait une sonnerie dans une video."],
  ['Ben recalls a full apology, but only a quick sorry was said.', "Ben se rappelle des excuses completes, mais un simple desole a ete dit."],
  ['Nina thinks the cashier handed back the wrong bill, but she is mixing up two receipts.', "Nina pense que la caissiere a rendu le mauvais billet, mais elle melange deux tickets de caisse."],
  ['Omar remembers the class visiting a zoo, but it was a wildlife documentary shown in class.', "Omar se souvient que la classe a visite un zoo, mais c'etait un documentaire animalier montre en classe."],
  ['Priya is certain the warning came from the teacher, but it was a message on the projector.', "Priya est certaine que l'avertissement venait du professeur, mais c'etait un message affiche au projecteur."],
  ['Leo thinks the red shirt was on a friend, but it was on a mannequin in the store.', "Leo pense que la chemise rouge etait sur un ami, mais elle etait sur un mannequin dans le magasin."],
  ['Rina recalls a whole conversation about moving, but it was only a text thread she skimmed.', "Rina se rappelle toute une conversation sur un demenagement, mais c'etait seulement une discussion qu'elle a parcourue rapidement."],
  ['Jade believes the package arrived in the morning, but she is remembering the tracking update time.', "Jade croit que le colis est arrive le matin, mais elle se souvient de l'heure de mise a jour du suivi."],
  ['Maya thinks she parked on the third floor, but she is remembering a different garage.', "Maya pense s'etre garee au troisieme etage, mais elle se souvient d'un autre parking."],
  ['Theo remembers a blue notebook from class, but it was actually the cover of a textbook.', "Theo se souvient d'un carnet bleu en classe, mais c'etait en fait la couverture d'un manuel."],
  ['Ava is sure she heard the phone ring, but it was a ringtone from a video.', "Ava est sure d'avoir entendu le telephone sonner, mais c'etait une sonnerie dans une video."],
  ['Ben recalls a full apology, but only a quick sorry was said.', "Ben se rappelle des excuses completes, mais un simple desole a ete dit."],
  ['Nina thinks the cashier handed back the wrong bill, but she is mixing up two receipts.', "Nina pense que la caissiere a rendu le mauvais billet, mais elle melange deux tickets de caisse."],
  ['Omar remembers the class visiting a zoo, but it was a wildlife documentary shown in class.', "Omar se souvient que la classe a visite un zoo, mais c'etait un documentaire animalier montre en classe."],
  ['Priya is certain the warning came from the teacher, but it was a message on the projector.', "Priya est certaine que l'avertissement venait du professeur, mais c'etait un message affiche au projecteur."],
  ['Leo thinks the red shirt was on a friend, but it was on a mannequin in the store.', "Leo pense que la chemise rouge etait sur un ami, mais elle etait sur un mannequin dans le magasin."],
  ['Rina recalls a whole conversation about moving, but it was only a text thread she skimmed.', "Rina se rappelle toute une conversation sur un demenagement, mais c'etait seulement une discussion qu'elle a parcourue rapidement."],
  ['Jade believes the package arrived in the morning, but she is remembering the tracking update time.', "Jade croit que le colis est arrive le matin, mais elle se souvient de l'heure de mise a jour du suivi."],
  ['Noah is sure he promised to call after lunch, but he only thought about doing it.', "Noah est sur d'avoir promis d'appeler apres le dejeuner, mais il a seulement pense le faire."],
  ['Lina remembers a friend lending her a scarf, but she only saw it on a chair at the cafe.', "Lina se souvient qu'une amie lui a prete une echarpe, mais elle l'a seulement vue sur une chaise au cafe."],
  ['Owen thinks the meeting was moved to Friday, but he is recalling a draft email that was never sent.', "Owen pense que la reunion a ete deplacee a vendredi, mais il se souvient d'un brouillon de courriel jamais envoye."],
  ['Iris is certain her brother ate the last cookie, but she is mixing it up with a joke he made about it.', "Iris est certaine que son frere a mange le dernier biscuit, mais elle confond cela avec une blague qu'il a faite."],
  ['Tara recalls hearing the landlord knock, but it was the neighbor closing a door.', "Tara se rappelle avoir entendu le proprietaire frapper, mais c'etait le voisin qui fermait une porte."],
  ['Eli remembers the app showing a green icon, but he is thinking of a different app.', "Eli se souvient que l'application affichait une icone verte, mais il pense a une autre application."],
  ['Mina is sure the babysitter said bedtime was nine, but she actually read it in a group message.', "Mina est sure que la gardienne a dit que le coucher etait a neuf heures, mais elle l'a en fait lu dans un message de groupe."],
  ['Jasper recalls a firefighter giving directions at the fair, but it was a volunteer in a bright jacket.', "Jasper se rappelle qu'un pompier donnait des indications a la foire, mais c'etait un benevole en veste vive."],
  ['Zoe thinks she heard her coach praise her name, but the cheer was for another player.', "Zoe pense avoir entendu son coach citer son nom, mais les encouragements etaient pour une autre joueuse."],
  ['Parker believes the train was cancelled, but he is remembering a platform announcement about delays.', "Parker croit que le train a ete annule, mais il se souvient d'une annonce de quai sur les retards."],
  ['Clara remembers a cashier saying the card was declined, but she only saw the screen flash red.', "Clara se souvient qu'une caissiere a dit que la carte avait ete refusee, mais elle a seulement vu l'ecran devenir rouge."],
  ['Dylan is sure the school sent the field-trip note home, but he is mixing it with a flyer in his backpack.', "Dylan est sur que l'ecole a envoye la note de sortie a la maison, mais il la confond avec un prospectus dans son sac."],
  ['Hugo thinks he saw his sister at the mall, but it was someone wearing the same coat.', "Hugo pense avoir vu sa soeur au centre commercial, mais c'etait quelqu'un portant le meme manteau."],
  ['Sofia recalls the doctor saying rest for a week, but she is remembering advice from an online clip.', "Sofia se rappelle que le medecin a dit de se reposer une semaine, mais elle se souvient d'un conseil vu dans une video en ligne."],
  ['Grant believes he locked the front door, but he is confusing it with checking it twice.', "Grant croit avoir verrouille la porte d'entree, mais il confond cela avec le fait de la verifier deux fois."],
  ['Maya is sure the cake had strawberries, but she is remembering the poster in the bakery window.', "Maya est sure que le gateau avait des fraises, mais elle se souvient de l'affiche dans la vitrine de la boulangerie."],
  ['Felix recalls a taxi driver asking for cash, but it was a tip screen on the app.', "Felix se rappelle qu'un chauffeur de taxi a demande de l'argent liquide, mais c'etait un ecran de pourboire dans l'application."],
  ['Nora thinks the team agreed in person, but she is thinking of a summary someone posted later.', "Nora pense que l'equipe etait d'accord en personne, mais elle pense a un resume publie plus tard."],
  ['Ben remembers the microwave beeping at midnight, but it was a timer from a cooking video.', "Ben se souvient que le micro-ondes a sonne a minuit, mais c'etait un minuteur dans une video de cuisine."],
  ['Ari is certain the museum guide said the statue was ancient, but he is repeating a caption from the exhibit.', "Ari est certain que le guide du musee a dit que la statue etait ancienne, mais il repete une legende de l'exposition."],
  ['Pia recalls her friend texting "I am here", but the message actually said "I am near".', "Pia se rappelle que son amie a ecrit \"je suis ici\", mais le message disait en fait \"je suis pres\"."],
  ['Liam thinks the bus driver waved at him, but the driver was signaling another lane.', "Liam pense que le chauffeur de bus lui a fait signe, mais le conducteur signalait une autre voie."],
  ['Rita remembers the store changing its hours, but she is reading a post from a different branch.', "Rita se souvient que le magasin a change ses horaires, mais elle lit une publication d'une autre succursale."],
  ['Cole is sure he heard thunder before the rain, but he is remembering fireworks from a festival.', "Cole est sur d'avoir entendu le tonnerre avant la pluie, mais il se souvient de feux d'artifice d'un festival."],
  ['Juno thinks the teacher called on her first, but she is mixing it with a practice round.', "Juno pense que le professeur l'a interrogee en premier, mais elle confond cela avec un tour d'entrainement."],
  ['Mila recalls the package being left at the apartment door, but she is thinking of a neighbor delivery.', "Mila se rappelle que le colis a ete laisse a la porte de l'appartement, mais elle pense a une livraison du voisin."],
  ['Ray believes he promised to bring chips, but he only liked the message in the chat.', "Ray croit avoir promis d'apporter des chips, mais il a seulement aime le message dans le chat."],
  ['Tessa remembers the plumber saying next week, but it was the receptionist at the desk.', "Tessa se souvient que le plombier a dit la semaine prochaine, mais c'etait la receptionniste au comptoir."],
  ['Evan thinks the class used a projector, but he is remembering a video shown at home.', "Evan pense que la classe a utilise un projecteur, mais il se souvient d'une video regardee a la maison."],
  ['Layla is sure the dog ran into the yard, but she is mixing it with a scene from a show.', "Layla est sure que le chien a couru dans la cour, mais elle confond cela avec une scene d'une serie."],
  ['Jade recalls the recipe calling for sugar, but she is remembering a different version of the dish.', "Jade se rappelle que la recette demandait du sucre, mais elle pense a une autre version du plat."]
];

const OPTIONS_EN = ['False Memories', 'Availability Heuristic', 'Cryptomnesia', 'Confirmation Bias'];
const OPTIONS_FR = ['Faux souvenirs', 'Heuristique de disponibilité', 'Cryptomnésie', 'Biais de confirmation'];

function rotate(a: string[], i: number) {
  const r = a.slice(1);
  r.splice(i, 0, a[0]);
  return r;
}

function sub(i: number) {
  return i < 17 ? SubLevel.BEGINNER : i < 34 ? SubLevel.INTERMEDIATE : SubLevel.EXPERT;
}

function make(fr = false): Question[] {
  return SCENARIOS.map((s, i) => {
    const c = i % 4;
    return {
      id: 34401 + i,
      level: 6,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Faux souvenirs' : 'False Memories',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Le souvenir reconstruit remplace ce qui s'est réellement passé."
        : 'A reconstructed memory replaces what actually happened.',
      detailedExplanationBeginner: fr
        ? "On se trompe sur un souvenir."
        : 'A memory is being mistaken.',
      detailedExplanationIntermediate: fr
        ? "Ce biais apparaît quand on mélange un souvenir précis avec une autre source ou une autre scène."
        : 'This bias appears when a specific memory is mixed with another source or scene.',
      detailedExplanationExpert: fr
        ? "Les faux souvenirs sont des reconstructions mnésiques plausibles mais erronées, souvent renforcées par des indices ultérieurs ou une mauvaise attribution de source."
        : 'False memories are plausible but inaccurate reconstructions, often reinforced by later cues or source misattribution.',
      questionFormat: 'standard',
    };
  });
}

export const FALSE_MEMORIES_EXPANSION_EN: Question[] = make();
export const FALSE_MEMORIES_EXPANSION_FR: Question[] = make(true);
