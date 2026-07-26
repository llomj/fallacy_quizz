import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya ignores three bad reviews and only shows her friends the one five-star review for the cafe.', 'Maya ignore trois mauvais avis et ne montre a ses amis que l avis cinq etoiles du cafe.'],
  ['Ben leaves out the repair bills and only mentions that his used car ran fine on one short trip.', 'Ben omet les factures de reparation et ne mentionne que le fait que sa voiture d occasion a bien roule pendant un court trajet.'],
  ['Priya shows the nice vacation photos but skips the pictures of the rainy days and lost luggage.', 'Priya montre les jolies photos de vacances mais saute celles des jours de pluie et des bagages perdus.'],
  ['Noah tells the story of the winning project and forgets to mention the three failed drafts before it.', 'Noah raconte l histoire du projet gagnant et oublie de mentionner les trois brouillons ratés avant celui-ci.'],
  ['Lina praises the new recipe after leaving out the burned batch she made first.', 'Lina fait l eloge de la nouvelle recette en passant sous silence la fournée brûlee qu elle avait faite d abord.'],
  ['Theo says the gym plan works because he ignores the weeks he skipped completely.', 'Theo dit que le programme de salle marche parce qu il ignore les semaines ou il n y est pas du tout allé.'],
  ['Ava calls the class project a success while leaving out the parts the group had to redo twice.', 'Ava appelle le projet de classe un succes tout en laissant de cote les parties que le groupe a du refaire deux fois.'],
  ['Omar recommends the phone because he leaves out the battery problems and slow updates.', 'Omar recommande le telephone parce qu il omet les problemes de batterie et les mises a jour lentes.'],
  ['Rina insists the road trip was perfect and never mentions the two detours and the flat tire.', 'Rina insiste sur le fait que le voyage en voiture etait parfait et ne parle jamais des deux detours ni du pneu creve.'],
  ['Jules says the podcast is brilliant because he does not bring up the episodes with missing facts.', 'Jules dit que le podcast est brillant parce qu il ne parle pas des episodes aux faits manquants.'],
  ['Mina claims the fundraiser was easy while hiding the canceled donations and awkward phone calls.', 'Mina affirme que la collecte de fonds etait facile tout en cachant les dons annules et les appels genants.'],
  ['Eli presents the school report as strong and leaves out the low scores on the last two tests.', 'Eli presente le rapport scolaire comme solide et passe sous silence les mauvaises notes des deux derniers tests.'],
  ['Hugo says the camping weekend was smooth while omitting the broken tent pole and the soaked shoes.', 'Hugo dit que le week-end de camping s est bien passe en omettant le mât de tente casse et les chaussures trempees.'],
  ['Lea calls the new job amazing while skipping the unpaid overtime and the confusing training.', 'Lea appelle le nouveau travail extraordinaire tout en passant sous silence les heures sup non payees et la formation confuse.'],
  ['Grant says the dinner party was a hit because he only talks about the dessert and not the cold main course.', 'Grant dit que le diner a ete un succes parce qu il ne parle que du dessert et pas du plat principal froid.'],
  ['Tia says the online class is great while leaving out the broken videos and missing answers.', 'Tia dit que le cours en ligne est excellent tout en laissant de cote les videos cassees et les reponses manquantes.'],
  ['Nora praises the neighborhood market while ignoring the expired food and the missing price tags.', 'Nora fait l eloge du marche du quartier tout en ignorant les aliments perimes et les etiquettes de prix manquantes.'],
  ['Sam says the new app is simple because he leaves out the three menus that confuse everyone.', 'Sam dit que la nouvelle application est simple parce qu il omet les trois menus qui embrouillent tout le monde.'],
  ['Jade says the road safety campaign is working while not mentioning the crash reports that still rose.', 'Jade dit que la campagne de securite routiere fonctionne sans mentionner les rapports d accident qui ont quand meme augmente.'],
  ['Owen tells people the game night was fun and forgets the two arguments and the broken controller.', 'Owen dit aux gens que la soiree jeux etait amusante et oublie les deux disputes et la manette cassee.'],
  ['Ari says the budget trip was easy while leaving out the extra fees and the late bus.', 'Ari dit que le voyage bon marche etait facile tout en omettant les frais supplementaires et le bus en retard.'],
  ['Pia says the school club is welcoming and does not mention the members who were ignored.', 'Pia dit que le club scolaire est accueillant et ne mentionne pas les membres qui ont ete ignores.'],
  ['Ben says the kitchen upgrade was perfect while hiding the leak under the sink.', 'Ben dit que la renovation de la cuisine etait parfaite tout en cachant la fuite sous l evier.'],
  ['Zoe says the workshop was useful while leaving out the hour spent waiting for supplies.', 'Zoe dit que l atelier etait utile tout en passant sous silence l heure passee a attendre les fournitures.'],
  ['Ravi says the road bike is a bargain while ignoring the squeaky brakes and cracked bell.', 'Ravi dit que le velo de route est une bonne affaire tout en ignorant les freins qui grincent et la sonnette fissuree.'],
  ['Sofia says the fundraiser was impressive because she skips the canceled booths and the empty tables.', 'Sofia dit que la collecte de fonds etait impressionnante parce qu elle saute les stands annules et les tables vides.'],
  ['Lara says the new shoes are comfortable while leaving out the blisters from day two.', 'Lara dit que les nouvelles chaussures sont confortables tout en oubliant les ampoules du deuxieme jour.'],
  ['Cole says the team retreat was productive and does not bring up the half-day spent waiting for the room.', 'Cole dit que la retraite d equipe a ete productive et ne parle pas de la demi-journee passee a attendre la salle.'],
  ['Maya says the school assembly was inspiring while omitting the technical glitches and dead microphone.', 'Maya dit que l assemblee scolaire etait inspirante en omettant les problemes techniques et le micro en panne.'],
  ['Ezra says the bakery is always good because he leaves out the stale rolls at the end of the day.', 'Ezra dit que la boulangerie est toujours bonne parce qu il omet les petits pains rassises de fin de journee.'],
  ['Nina says the apartment tour went well and ignores the noisy street and broken light switch.', 'Nina dit que la visite de l appartement s est bien passee et ignore la rue bruyante et l interrupteur casse.'],
  ['Hana says the volunteer event was a success while not mentioning the supplies that never arrived.', 'Hana dit que l evenement benevole a ete un succes sans mentionner les fournitures qui ne sont jamais arrivees.'],
  ['Dylan says the new chair is great while leaving out the wobble and the missing screw.', 'Dylan dit que la nouvelle chaise est excellente tout en omettant le balancement et la vis manquante.'],
  ['Penny says the travel package is amazing while hiding the two hotel changes and the lost reservation.', 'Penny dit que le forfait voyage est incroyable tout en cachant les deux changements d hotel et la reservation perdue.'],
  ['Kira says the festival was smooth while not mentioning the rain delays and the closed food stand.', 'Kira dit que le festival s est bien passe sans mentionner les retards dus a la pluie et le stand de nourriture ferme.'],
  ['Finn says the school fundraiser was easy while skipping the part where half the forms came back wrong.', 'Finn dit que la collecte de fonds de l ecole etait facile tout en passant sous silence le fait que la moitie des formulaires sont revenus faux.'],
  ['Juno says the coffee subscription is perfect while omitting the late deliveries and missing cup sizes.', 'Juno dit que l abonnement cafe est parfait tout en omettant les livraisons en retard et les tailles de tasses manquantes.'],
  ['Olivia says the team lunch was a hit while leaving out the cold fries and the missing napkins.', 'Olivia dit que le dejeuner d equipe a ete un succes tout en laissant de cote les frites froides et les serviettes manquantes.'],
  ['Mila says the music class is great while ignoring the teacher cancellations and the shared instrument shortage.', 'Mila dit que le cours de musique est excellent tout en ignorant les annulations du professeur et la penurie d instruments partages.'],
  ['Leo says the city project is working while never mentioning the neighborhoods still left out.', 'Leo dit que le projet de la ville fonctionne sans jamais mentionner les quartiers encore exclus.'],
  ['Tara says the new backpack is durable while skipping the torn zipper and loose strap.', 'Tara dit que le nouveau sac a dos est durable tout en passant sous silence la fermeture eclairee dechiree et la sangle lâche.'],
  ['Hugo says the food festival was fun while omitting the hour-long line for water.', 'Hugo dit que le festival culinaire etait amusant tout en omettant l heure d attente pour de l eau.'],
  ['Lea says the school fundraiser looked successful while hiding the unsold raffle tickets.', 'Lea dit que la collecte de fonds de l ecole semblait reussie tout en cachant les billets de tombola invendus.'],
  ['Max says the online course is excellent while leaving out the broken captions and missing quizzes.', 'Max dit que le cours en ligne est excellent tout en laissant de cote les sous-titres casses et les quiz manquants.'],
  ['Yara says the new cookware set is fantastic while ignoring the warped pan and loose handle.', 'Yara dit que le nouveau set de casseroles est fantastique tout en ignorant la poele deformee et la poignee lâche.'],
  ['Dan says the office move was smooth while not mentioning the lost boxes and the broken monitor.', 'Dan dit que le demenagement du bureau s est bien passe sans mentionner les cartons perdus et l ecran casse.'],
  ['Rosa says the clinic visit was efficient while leaving out the two hours spent in the waiting room.', 'Rosa dit que la visite a la clinique etait efficace tout en omettant les deux heures passees en salle d attente.'],
  ['Alicia says the group hike was a great idea while hiding the wrong turn and the muddy trail.', 'Alicia dit que la randonnee de groupe etait une excellente idee tout en cachant le mauvais chemin et le sentier boueux.'],
  ['Owen says the new desk setup is perfect while ignoring the cable mess behind it.', 'Owen dit que la nouvelle installation de bureau est parfaite tout en ignorant le fouillis de cables derriere.'],
  ['Maya says the charity dinner was wonderful while leaving out the undercooked main dish and empty seats.', 'Maya dit que le diner caritatif etait merveilleux tout en laissant de cote le plat principal pas assez cuit et les sieges vides.'],
  ['Maya says the new cafe is flawless while leaving out the hour-long wait for coffee.', 'Maya dit que le nouveau cafe est sans faille tout en passant sous silence l heure d attente pour le cafe.'],
  ['Ben says the car is a great deal while ignoring the repair receipts stuffed in the glove box.', 'Ben dit que la voiture est une bonne affaire tout en ignorant les factures de reparation entassees dans la boîte a gants.'],
  ['Priya says the school trip went well while leaving out the kids who got left behind at the museum.', 'Priya dit que la sortie scolaire s est bien passee tout en laissant de cote les enfants restes au musee.'],
  ['Noah says the app update was smooth while skipping the crash reports from half the users.', 'Noah dit que la mise a jour de l application s est bien passee tout en passant sous silence les rapports de plantage de la moitie des utilisateurs.'],
  ['Lina says the party was a hit while not mentioning the people who left after ten minutes.', 'Lina dit que la fete a ete un succes sans mentionner les personnes qui sont parties apres dix minutes.'],
  ['Theo says the class project was easy while leaving out the redo that took the weekend.', 'Theo dit que le projet de classe etait facile tout en omettant la refonte qui a pris le week-end.'],
  ['Ava says the hotel was lovely while ignoring the broken elevator and the missing towels.', 'Ava dit que l hotel etait charmant tout en ignorant l ascenseur en panne et les serviettes manquantes.'],
  ['Omar says the flight was fine while leaving out the two-hour tarmac delay.', 'Omar dit que le vol etait correct tout en passant sous silence le retard de deux heures sur le tarmac.'],
  ['Rina says the fundraiser was simple while not mentioning the sponsors who backed out.', 'Rina dit que la collecte de fonds etait simple sans mentionner les sponsors qui se sont retires.'],
  ['Jules says the concert was amazing while hiding the terrible sound during the first set.', 'Jules dit que le concert etait incroyable tout en cachant le son terrible pendant le premier set.'],
  ['Mina says the new desk chair is perfect while leaving out the back pain after an hour.', 'Mina dit que la nouvelle chaise de bureau est parfaite tout en laissant de cote le mal de dos au bout d une heure.'],
  ['Eli says the team retreat was productive while omitting the afternoon spent waiting for check-in.', 'Eli dit que la retraite d equipe a ete productive tout en omettant l apres-midi passee a attendre l enregistrement.'],
  ['Hugo says the cooking class was great while not mentioning the missing ingredients.', 'Hugo dit que le cours de cuisine etait super sans mentionner les ingredients manquants.'],
  ['Lea says the neighborhood market is a success while leaving out the stalls that never opened.', 'Lea dit que le marche du quartier est un succes tout en laissant de cote les stands qui ne se sont jamais ouverts.'],
  ['Grant says the new software is excellent while ignoring the bug reports piling up.', 'Grant dit que le nouveau logiciel est excellent tout en ignorant les rapports de bogues qui s accumulent.'],
  ['Tia says the family road trip was relaxing while not mentioning the three wrong turns.', 'Tia dit que le voyage en famille etait relaxant sans mentionner les trois mauvais tournants.'],
  ['Nora says the school fundraiser looked great while leaving out the unsold tickets.', 'Nora dit que la collecte de fonds de l ecole semblait super tout en omettant les billets invendus.'],
  ['Sam says the volunteer event was a breeze while skipping the supplies that never arrived.', 'Sam dit que l evenement benevole etait un jeu d enfant tout en passant sous silence les fournitures qui ne sont jamais arrivees.'],
  ['Jade says the restaurant is fantastic while ignoring the cold fries and the missing napkins.', 'Jade dit que le restaurant est fantastique tout en ignorant les frites froides et les serviettes manquantes.'],
  ['Owen says the new laptop is perfect while leaving out the battery that dies early.', 'Owen dit que le nouvel ordinateur portable est parfait tout en laissant de cote la batterie qui se vide trop tot.'],
  ['Ari says the workshop was useful while not mentioning the half hour spent finding the room.', 'Ari dit que l atelier etait utile sans mentionner la demi-heure passee a trouver la salle.'],
  ['Pia says the birthday brunch was delightful while omitting the burnt toast and the late guest.', 'Pia dit que le brunch d anniversaire etait charmant tout en omettant les toasts brûles et l invite en retard.'],
  ['Ben says the neighborhood cleanup went well while hiding the trash bags that ripped open.', 'Ben dit que le nettoyage du quartier s est bien passe tout en cachant les sacs poubelles qui se sont dechires.'],
  ['Zoe says the new phone case is sturdy while leaving out the crack from the first drop.', 'Zoé dit que la nouvelle coque de telephone est solide tout en laissant de cote la fissure apres la premiere chute.'],
  ['Ravi says the online course is great while not mentioning the broken captions.', 'Ravi dit que le cours en ligne est super sans mentionner les sous-titres casses.'],
  ['Sofia says the museum visit was inspiring while hiding the closed gallery wing.', 'Sofia dit que la visite du musee etait inspirante tout en cachant l aile fermee de la galerie.'],
  ['Lara says the office move was smooth while leaving out the missing monitor cable.', 'Lara dit que le demenagement du bureau s est bien passe tout en laissant de cote le cable d ecran manquant.'],
  ['Cole says the camping trip was wonderful while not mentioning the wet tent floor.', 'Cole dit que le voyage de camping etait merveilleux sans mentionner le sol humide de la tente.'],
  ['Maya says the new backpack is amazing while omitting the zipper that keeps sticking.', 'Maya dit que le nouveau sac a dos est incroyable tout en omettant la fermeture eclairee qui coince sans cesse.'],
  ['Ezra says the charity dinner was a triumph while leaving out the empty dessert table.', 'Ezra dit que le diner caritatif etait un triomphe tout en laissant de cote la table des desserts vide.'],
  ['Nina says the road safety campaign is working while ignoring the crash numbers that went up.', 'Nina dit que la campagne de securite routiere fonctionne tout en ignorant les chiffres d accident qui ont augmente.'],
  ['Hana says the new app is simple while skipping the three menus that confuse everyone.', 'Hana dit que la nouvelle application est simple tout en passant sous silence les trois menus qui embrouillent tout le monde.'],
  ['Dylan says the class workshop was fun while leaving out the hour spent waiting for materials.', 'Dylan dit que latelier de classe etait amusant tout en laissant de cote l heure passee a attendre le materiel.'],
  ['Penny says the bike ride was easy while not mentioning the flat tire and the steep hill.', 'Penny dit que la balade a velo etait facile sans mentionner le pneu creve et la colline raide.'],
  ['Kira says the office lunch was great while hiding the cold soup and missing forks.', 'Kira dit que le dejeuner du bureau etait excellent tout en cachant la soupe froide et les fourchettes manquantes.'],
  ['Finn says the school assembly was impressive while leaving out the dead microphone.', 'Finn dit que l assemblee scolaire etait impressionnante tout en laissant de cote le micro en panne.'],
  ['Juno says the travel package is a bargain while omitting the hotel changes.', 'Juno dit que le forfait voyage est une affaire tout en omettant les changements d hotel.'],
  ['Olivia says the coffee subscription is perfect while not mentioning the late deliveries.', 'Olivia dit que l abonnement cafe est parfait sans mentionner les livraisons en retard.'],
  ['Mila says the sports camp was great while ignoring the missing water stations.', 'Mila dit que le camp sportif etait super tout en ignorant les points d eau manquants.'],
  ['Leo says the school fair was a hit while leaving out the rain delays.', 'Leo dit que la foire scolaire a ete un succes tout en laissant de cote les retards dus a la pluie.'],
  ['Tara says the family dinner was lovely while skipping the undercooked main dish.', 'Tara dit que le dîner de famille etait charmant tout en passant sous silence le plat principal pas assez cuit.'],
  ['Hugo says the group hike went perfectly while not mentioning the wrong turn.', 'Hugo dit que la randonnee de groupe s est parfaitement passee sans mentionner le mauvais chemin.'],
  ['Lea says the webinar was excellent while leaving out the chat that froze twice.', 'Lea dit que le webinaire etait excellent tout en laissant de cote le chat qui a gele deux fois.'],
  ['Max says the old chair is fine while ignoring the wobble every time he sits down.', 'Max dit que la vieille chaise va bien tout en ignorant le balancement chaque fois qu il s assoit.'],
  ['Yara says the charity walk was a success while hiding the volunteer no-shows.', 'Yara dit que la marche caritative a ete un succes tout en cachant les absences de benevoles.'],
  ['Dan says the new printer is reliable while not mentioning the paper jams.', 'Dan dit que la nouvelle imprimante est fiable sans mentionner les bourrages papier.'],
  ['Rosa says the game night was hilarious while leaving out the argument over rules.', 'Rosa dit que la soiree jeux etait hilarante tout en laissant de cote la dispute sur les regles.'],
  ['Alicia says the restaurant review is fair while omitting the free dessert they got.', 'Alicia dit que la critique du restaurant est juste tout en omettant le dessert gratuit qu elle a reçu.'],
  ['Owen says the new desk setup is perfect while leaving out the cable tangle behind it.', 'Owen dit que la nouvelle installation de bureau est parfaite tout en laissant de cote l enchevetrement de cables derriere.'],
];

const OPTIONS_EN = ['Suppressed Evidence', 'Cherry Picking', 'Confirmation Bias', 'False Attribution'];
const OPTIONS_FR = ['Preuve supprimée', 'Cerises (sélection biaisée)', 'Biais de confirmation', 'Fausse attribution'];

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
      id: 42001 + index,
      level: 2,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Preuve supprimée' : 'Suppressed Evidence',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La personne cache ou omet les elements qui contredisent son point de vue.'
        : 'The person hides or omits details that would weaken their point.',
      detailedExplanationBeginner: isFrench
        ? 'On ne montre qu une partie de l histoire.'
        : 'Only part of the story is shown.',
      detailedExplanationIntermediate: isFrench
        ? 'La preuve supprimée apparait quand quelqu un presente seulement les faits qui l avantagent et laisse de cote les contre-exemples.'
        : 'Suppressed evidence appears when someone presents only the facts that help them and leaves out the counterexamples.',
      detailedExplanationExpert: isFrench
        ? 'Ce sophisme fausse le raisonnement en filtrant les donnees avant meme qu elles soient jugees. En cachant ce qui contredit la conclusion, on cree artificiellement une impression de solidite ou de succes. Le probleme n est pas seulement le mensonge direct, mais le tri des elements pertinents qui empeche une evaluation honnete.'
        : 'This fallacy distorts reasoning by filtering the data before it is judged. By hiding what contradicts the conclusion, it creates an artificial sense of strength or success. The problem is not only direct lying, but also the selective removal of relevant evidence that blocks an honest evaluation.',
      questionFormat: 'standard',
    };
  });
}

export const SUPPRESSED_EVIDENCE_EXPANSION_EN: Question[] = createQuestions('en');
export const SUPPRESSED_EVIDENCE_EXPANSION_FR: Question[] = createQuestions('fr');
