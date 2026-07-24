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
  ['Maya thinks she parked on the third floor, but she is remembering a different garage.', "Maya pense s'etre garee au troisieme etage, mais elle se rappelle d'un autre parking."],
  ['Theo remembers a blue notebook from class, but it was actually the cover of a textbook.', "Theo se souvient d'un carnet bleu en classe, mais c'etait en fait la couverture d'un manuel."],
  ['Ava is sure she heard the phone ring, but it was a ringtone from a video.', "Ava est sure d'avoir entendu le telephone sonner, mais c'etait une sonnerie dans une video."],
  ['Ben recalls a full apology, but only a quick sorry was said.', "Ben se rappelle des excuses completes, mais un simple desole a ete dit."],
  ['Nina thinks the cashier handed back the wrong bill, but she is mixing up two receipts.', "Nina pense que la caissiere a rendu le mauvais billet, mais elle melange deux tickets de caisse."],
  ['Omar remembers the class visiting a zoo, but it was a wildlife documentary shown in class.', "Omar se souvient que la classe a visite un zoo, mais c'etait un documentaire animalier montre en classe."],
  ['Priya is certain the warning came from the teacher, but it was a message on the projector.', "Priya est certaine que l'avertissement venait du professeur, mais c'etait un message affiche au projecteur."],
  ['Leo thinks the red shirt was on a friend, but it was on a mannequin in the store.', "Leo pense que la chemise rouge etait sur un ami, mais elle etait sur un mannequin dans le magasin."],
  ['Rina recalls a whole conversation about moving, but it was only a text thread she skimmed.', "Rina se rappelle toute une conversation sur un demenagement, mais c'etait seulement une discussion qu'elle a parcourue rapidement."],
  ['Jade believes the package arrived in the morning, but she is remembering the tracking update time.', "Jade croit que le colis est arrive le matin, mais elle se souvient de l'heure de mise a jour du suivi."]
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
