import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya asks why the rent went up, and the landlord starts talking about how hard it is to own a building.', 'Maya demande pourquoi le loyer a augmente, et le proprietaire commence a parler de la difficulte de posseder un immeuble.'],
  ['Leo asks if the meeting can start on time, but the manager talks about how busy the whole department has been.', 'Leo demande si la reunion peut commencer a l heure, mais le manager parle de la charge de travail de tout le service.'],
  ['Priya asks whether the charger is defective, and the seller starts praising the phone case instead.', 'Priya demande si le chargeur est defectueux, et le vendeur se met a vanter la coque du telephone a la place.'],
  ['Omar questions the missed refund, and the clerk talks about how many customers the store serves each day.', 'Omar interroge le remboursement manqué, et l employe parle du nombre de clients que le magasin sert chaque jour.'],
  ['Rina asks why the app keeps crashing, and support replies that the new logo looks modern.', 'Rina demande pourquoi l application plante sans cesse, et le support repond que le nouveau logo a l air moderne.'],
  ['Ben asks about the broken promise, but his friend starts telling a joke about traffic.', 'Ben demande des explications sur la promesse rompue, mais son ami commence a raconter une blague sur la circulation.'],
  ['Zoe asks if the class trip is safe, and the teacher talks about how educational the museum is.', 'Zoé demande si la sortie scolaire est sure, et le professeur parle plutot du caractere educatif du musee.'],
  ['Kai asks whether the hotel is clean, and the host replies that the lobby has new plants.', 'Kai demande si l hotel est propre, et l hote repond que le hall a de nouvelles plantes.'],
  ['Nora asks why the bill is higher than expected, and the rep keeps mentioning customer loyalty.', 'Nora demande pourquoi la facture est plus elevee que prevu, et le conseiller parle sans cesse de la fidelite des clients.'],
  ['Eli asks if the policy will actually help, and the speaker switches to how popular the campaign has become.', 'Eli demande si la politique aidera vraiment, et l orateur passe a la popularite de la campagne.'],
  ['Lina asks why the bus was late, and the driver talks about how difficult the route usually is.', 'Lina demande pourquoi le bus etait en retard, et le chauffeur parle de la difficulte habituelle de l itineraire.'],
  ['Grant asks whether the subscription was cancelled, and the agent starts discussing a new feature.', 'Grant demande si l abonnement a ete annule, et l agent commence a parler d une nouvelle fonction.'],
  ['Tia asks if the homework is due tomorrow, and the teacher explains why planning is important in general.', 'Tia demande si le devoir est a rendre demain, et le professeur explique l importance generale de la planification.'],
  ['Noah asks why the coffee tastes burnt, and the barista says the shop uses ethically sourced beans.', 'Noah demande pourquoi le cafe a un gout de brule, et le barista dit que le magasin utilise des grains issus du commerce equitable.'],
  ['Mia asks if the seat is broken, and the attendant starts talking about how busy the train line is.', 'Mia demande si le siege est casse, et le controleur commence a parler de l affluence sur la ligne.'],
  ['Jules asks why the invoice lists extra charges, and the billing clerk says the company has won awards.', 'Jules demande pourquoi la facture affiche des frais supplementaires, et la comptable dit que l entreprise a gagne des prix.'],
  ['Ava asks if the dog is vaccinated, and the owner starts describing the dog’s personality.', 'Ava demande si le chien est vaccine, et le proprietaire se met a decrire la personnalite du chien.'],
  ['Finn asks why the road is closed, and the official talks about the town’s future growth.', 'Finn demande pourquoi la route est fermee, et le responsable parle de la croissance future de la ville.'],
  ['Mina asks if the report is accurate, and the colleague answers that everyone is stressed lately.', 'Mina demande si le rapport est exact, et la collegue repond que tout le monde est stressé en ce moment.'],
  ['Theo asks why the printer keeps jamming, and the technician talks about how old the office is.', 'Theo demande pourquoi l imprimante bloque sans cesse, et le technicien parle de l age du bureau.'],
  ['Juno asks whether the refund will come through, and the agent starts explaining the holiday schedule.', 'Juno demande si le remboursement arrivera, et l agent commence a expliquer le calendrier des vacances.'],
  ['Iris asks if the snack contains nuts, and the server talks about how popular the café is.', 'Iris demande si l en-cas contient des noix, et le serveur parle de la popularite du cafe.'],
  ['Cole asks why the app still logs him out, and support mentions that many users love the new design.', 'Cole demande pourquoi l application le deconnecte encore, et le support mentionne que beaucoup d utilisateurs adorent le nouveau design.'],
  ['Riley asks if the package was delivered, and the courier talks about the weather instead.', 'Riley demande si le colis a ete livre, et le livreur parle plutot de la meteo.'],
  ['Pia asks why the class got a surprise quiz, and the teacher talks about discipline in general.', 'Pia demande pourquoi la classe a eu un controle surprise, et le professeur parle de la discipline en general.'],
  ['Hugo asks whether the seat upgrade was worth it, and the agent says the airline has a new app.', 'Hugo demande si la mise a niveau du siege valait le coup, et l agent dit que la compagnie a une nouvelle application.'],
  ['Sam asks why the food arrived cold, and the restaurant replies that the chef works hard.', 'Sam demande pourquoi la nourriture est arrivee froide, et le restaurant repond que le chef travaille dur.'],
  ['Jade asks whether the password change was required, and IT talks about cybersecurity trends.', 'Jade demande si le changement de mot de passe etait necessaire, et le service informatique parle des tendances en cybersécurité.'],
  ['Owen asks why the refund was denied, and the rep starts discussing the company’s mission.', 'Owen demande pourquoi le remboursement a ete refuse, et le conseiller commence a parler de la mission de l entreprise.'],
  ['Lea asks if the classmate copied her notes, and the classmate says she is really good at art.', 'Léa demande si la camarade a copie ses notes, et la camarade dit qu elle est tres douee en art.'],
  ['Maya asks whether the concert sound was bad, and the organizer says the band has a strong fan base.', 'Maya demande si le son du concert etait mauvais, et l organisateur dit que le groupe a une grande base de fans.'],
  ['Ben asks why the package was late again, and customer service says they appreciate his patience.', 'Ben demande pourquoi le colis etait encore en retard, et le service client dit qu ils apprecient sa patience.'],
  ['Ava asks whether the software bug is fixed, and the developer starts talking about next quarter’s roadmap.', 'Ava demande si le bug du logiciel est corrige, et le developpeur commence a parler de la feuille de route du prochain trimestre.'],
  ['Omar asks if the store overcharged him, and the cashier talks about the store’s new uniforms.', 'Omar demande si le magasin lui a trop facture, et le caissier parle des nouveaux uniformes du magasin.'],
  ['Nina asks why the project deadline changed, and the manager says the team is very committed.', 'Nina demande pourquoi la date limite du projet a change, et le manager dit que l equipe est tres engagee.'],
  ['Eli asks whether the internet outage was caused by maintenance, and the provider talks about service improvements.', 'Eli demande si la panne internet etait due a la maintenance, et le fournisseur parle d ameliorations de service.'],
  ['Lina asks if the seat assignment can be changed, and the agent replies that the plane is almost full.', 'Lina demande si l attribution du siege peut etre changee, et l agent repond que l avion est presque plein.'],
  ['Grant asks why the bill includes a mystery fee, and the clerk mentions how hard pricing is these days.', 'Grant demande pourquoi la facture contient des frais mysterieux, et la caissiere parle de la difficulte de fixer les prix aujourd hui.'],
  ['Tia asks whether the photo edit was done, and her friend starts talking about the album cover.', 'Tia demande si la retouche photo a ete faite, et son amie commence a parler de la couverture de l album.'],
  ['Finn asks why the car still rattles, and the mechanic talks about how reliable the model is overall.', 'Finn demande pourquoi la voiture cliquette encore, et le mecanicien parle de la fiabilite generale du modele.'],
  ['Mina asks whether the refund form was received, and the agent says the company values transparency.', 'Mina demande si le formulaire de remboursement a ete recu, et l agent dit que l entreprise valorise la transparence.'],
  ['Theo asks if the lamp is the wrong size, and the seller starts discussing the store’s return policy.', 'Theo demande si la lampe est de la mauvaise taille, et le vendeur commence a parler de la politique de retour du magasin.'],
  ['Juno asks why the checkout lane is so slow, and the cashier talks about how friendly the staff are.', 'Juno demande pourquoi la caisse avance si lentement, et la caissiere parle de la gentillesse du personnel.'],
  ['Iris asks whether the translation is correct, and the editor says the document looks professional.', 'Iris demande si la traduction est correcte, et la redactrice dit que le document a l air professionnel.'],
  ['Cole asks why the timer reset, and the support agent talks about how the app helps people every day.', 'Cole demande pourquoi le minuteur s est reinitialise, et le support parle de la façon dont l application aide les gens chaque jour.'],
  ['Riley asks if the claim is backed up, and the speaker mentions how sincere he sounded.', 'Riley demande si l affirmation est etayee, et l orateur parle de la sincerite de son ton.'],
  ['Pia asks why the kitchen order is wrong, and the server says the restaurant has many happy customers.', 'Pia demande pourquoi la commande de cuisine est incorrecte, et le serveur dit que le restaurant a beaucoup de clients satisfaits.'],
  ['Hugo asks whether the price match will be honored, and the clerk starts talking about the store’s reputation.', 'Hugo demande si l alignement de prix sera respecte, et la vendeuse commence a parler de la reputation du magasin.'],
  ['Sam asks why the speaker avoided the question, and the panel host says the event is about innovation.', 'Sam demande pourquoi l intervenant a evite la question, et l animateur du panel dit que l evenement porte sur l innovation.'],
  ['Jade asks if the order can be corrected, and the delivery rep talks about the company’s growth.', 'Jade demande si la commande peut etre corrigee, et le livreur parle de la croissance de l entreprise.'],
  ['Maya asks why the form was rejected, and the official says the office is short-staffed but trying hard.', 'Maya demande pourquoi le formulaire a ete refuse, et le responsable dit que le bureau manque de personnel mais fait de son mieux.'],
  ["Nora asks why the thermostat was changed, and the roommate starts talking about how expensive electricity is.", "Nora demande pourquoi le thermostat a ete change, et le colocataire commence a parler du cout eleve de l electricite."],
  ["Eli asks whether the refund will arrive today, and the agent talks about the company's holiday poster.", "Eli demande si le remboursement arrivera aujourd hui, et l agent parle de l affiche de vacances de l entreprise."],
  ["Mina asks why the soccer practice was cancelled, and the coach starts praising the team spirit.", "Mina demande pourquoi l entrainement de foot a ete annule, et l entraineur commence a vanter l esprit d equipe."],
  ["Kai asks if the laptop repair is done, and the technician talks about how busy the shop has been.", "Kai demande si la reparation de l ordinateur est terminee, et le technicien parle de l atelier tres occupe."],
  ["Ava asks why the grocery bill is higher, and the cashier talks about the store's new music playlist.", "Ava demande pourquoi l addition de courses est plus elevee, et la caissiere parle de la nouvelle playlist du magasin."],
  ["Leo asks whether the heating was fixed, and the landlord starts discussing the building's history.", "Leo demande si le chauffage a ete repare, et le proprietaire commence a parler de l histoire de l immeuble."],
  ["Priya asks why the package was opened, and the neighbor talks about how polite the delivery driver seemed.", "Priya demande pourquoi le colis a ete ouvert, et la voisine parle de la politesse du livreur."],
  ["Ben asks if the app charge is a mistake, and support replies with a story about their new office.", "Ben demande si le prelevement de l application est une erreur, et le support raconte une histoire sur leur nouveau bureau."],
  ["Zoe asks why the class got an extra essay, and the teacher talks about how inspiring the subject is.", "Zoé demande pourquoi la classe a eu une dissertation supplementaire, et le professeur parle de la facon inspirante dont le sujet est."],
  ["Hugo asks whether the bike repair was done correctly, and the mechanic says the weather has been awful.", "Hugo demande si la reparation du velo a ete bien faite, et le mecanicien dit que le temps a ete horrible."],
  ["Lina asks why the meeting was moved, and the manager starts talking about company values.", "Lina demande pourquoi la reunion a ete deplacee, et la responsable commence a parler des valeurs de l entreprise."],
  ["Sam asks why the soup tastes strange, and the cook talks about how fresh the herbs are.", "Sam demande pourquoi la soupe a un gout bizarre, et le cuisinier parle de la fraicheur des herbes."],
  ["Rina asks whether the late fee can be removed, and the clerk starts praising the town's festival.", "Rina demande si les frais de retard peuvent etre retires, et l employe se met a vanter le festival de la ville."],
  ["Jules asks if the screen crack is covered, and the agent talks about how many loyal customers they have.", "Jules demande si la fissure de l ecran est couverte, et l agent parle du nombre de clients fideles."],
  ["Tia asks why the class project was graded harshly, and the instructor talks about how important learning is.", "Tia demande pourquoi le projet de classe a ete note severement, et le formateur parle de l importance de l apprentissage."],
  ["Milo asks if the seat belt alarm is faulty, and the mechanic starts discussing the model's popularity.", "Milo demande si l alarme de ceinture est defectueuse, et le mecanicien commence a parler de la popularite du modele."],
  ["Nina asks why the dog walker arrived late, and the walker talks about traffic in the city.", "Nina demande pourquoi le promeneur de chien est arrive en retard, et le promeneur parle de la circulation en ville."],
  ["Grant asks whether the library book can be renewed, and the librarian talks about how much the community loves reading.", "Grant demande si le livre de bibliotheque peut etre prolonge, et la bibliothecaire parle de l amour de la lecture dans la communaute."],
  ["Omar asks why the oven kept turning off, and the repair person talks about the kitchen being old.", "Omar demande pourquoi le four continuait de s eteindre, et le reparateur parle de l age de la cuisine."],
  ["Maya asks whether the online course is accessible, and the host says the website looks nice on mobile.", "Maya demande si le cours en ligne est accessible, et l animateur dit que le site est joli sur mobile."],
  ["Finn asks why the refund line is so slow, and the clerk talks about how hard customer service is.", "Finn demande pourquoi la file des remboursements est si lente, et l employe parle de la difficulte du service client."],
  ["Pia asks if the door lock was fixed, and the neighbor starts talking about neighborhood safety in general.", "Pia demande si la serrure de la porte a ete reparee, et le voisin commence a parler de la securite du quartier en general."],
  ["Cole asks why the snack machine ate his money, and support replies that the company cares about users.", "Cole demande pourquoi le distributeur a avale son argent, et le support repond que l entreprise se soucie des utilisateurs."],
  ["Iris asks whether the language exam will be postponed, and the teacher talks about how beautiful the curriculum is.", "Iris demande si l examen de langue sera reporte, et le professeur parle de la beaute du programme."],
  ["Owen asks why the elevator stopped, and the building manager talks about maintenance planning.", "Owen demande pourquoi l ascenseur s est arrete, et le gestionnaire parle de la planification de la maintenance."],
  ["Mina asks whether the fake charge is being reversed, and the agent talks about a new customer survey.", "Mina demande si le faux prelevement est annule, et l agent parle d un nouveau sondage client."],
  ["Lara asks why the order came without sauce, and the server talks about how popular the restaurant is.", "Lara demande pourquoi la commande est arrivee sans sauce, et le serveur parle de la popularite du restaurant."],
  ["Jade asks if the water leak was reported, and the handyman talks about how busy the whole block is.", "Jade demande si la fuite d eau a ete signalee, et le bricoleur parle de l occupation de tout l immeuble."],
  ["Ari asks why the gym machine squeaks, and the trainer talks about the gym's new branding.", "Ari demande pourquoi la machine de sport grince, et l entraineur parle de la nouvelle image de la salle."],
  ["Rita asks if the train refund is possible, and the clerk starts talking about the station renovation.", "Rita demande si le remboursement du train est possible, et l employe commence a parler de la renovation de la gare."],
  ["Drew asks why the printer still jams, and IT talks about how many documents the office prints.", "Drew demande pourquoi l imprimante bloque encore, et le service informatique parle du nombre de documents imprimés au bureau."],
  ["Hana asks whether the ticket fee is valid, and the seller talks about the event's great lineup.", "Hana demande si les frais du billet sont valides, et le vendeur parle de la bonne programmation de l evenement."],
  ["Theo asks why the charger overheats, and the tech says the shop has won a local award.", "Theo demande pourquoi le chargeur surchauffe, et le technicien dit que l atelier a gagné un prix local."],
  ["Riley asks if the contract clause can be changed, and the lawyer talks about how common contracts are.", "Riley demande si la clause du contrat peut etre modifiee, et l avocat parle du caractere courant des contrats."],
  ["Juno asks why the subway platform was closed, and the attendant talks about public transit in general.", "Juno demande pourquoi le quai du metro a ete ferme, et l agent parle des transports publics en general."],
  ["Maya asks whether the store overbilled her, and the manager says the staff are trying their best.", "Maya demande si le magasin lui a trop facture, et la responsable dit que le personnel fait de son mieux."],
  ["Ben asks why the window was left open, and the roommate starts talking about fresh air.", "Ben demande pourquoi la fenetre est restee ouverte, et le colocataire commence a parler d air frais."],
  ["Noah asks if the refund email is real, and the agent talks about how many scams exist online.", "Noah demande si le courriel de remboursement est vrai, et l agent parle du nombre d arnaques en ligne."],
  ["Lina asks why the garden hose was broken, and the neighbor talks about the flowers blooming nicely.", "Lina demande pourquoi le tuyau du jardin etait casse, et le voisin parle des fleurs qui fleurissent bien."],
  ["Kira asks whether the schedule change was approved, and the coordinator talks about how flexible the team is.", "Kira demande si le changement d horaire a ete approuve, et la coordinatrice parle de la flexibilite de l equipe."],
  ["Grant asks why the AC still barely works, and the landlord talks about the neighborhood having great restaurants.", "Grant demande pourquoi la climatisation fonctionne encore a peine, et le proprietaire parle des bons restaurants du quartier."],
  ["Tara asks whether the refund was processed, and the clerk starts describing the store's holiday hours.", "Tara demande si le remboursement a ete traite, et l employe commence a decrire les horaires de vacances du magasin."],
  ["Eli asks why the assignment is missing feedback, and the professor talks about how much he values curiosity.", "Eli demande pourquoi le devoir n a pas de commentaires, et le professeur parle de l importance de la curiosite."],
  ["Milo asks if the broken handle will be replaced, and the agent talks about how many people use the service.", "Milo demande si la poignee cassee sera remplacee, et l agent parle du nombre de personnes qui utilisent le service."],
  ["Nora asks why the event started late, and the organizer talks about the nice venue decorations.", "Nora demande pourquoi l evenement a commence en retard, et l organisatrice parle de la jolie decoration de la salle."],
  ["Parker asks whether the payment error will be corrected, and the rep starts talking about the company's new mascot.", "Parker demande si l erreur de paiement sera corrigee, et le conseiller commence a parler de la nouvelle mascotte de l entreprise."],
  ["Mia asks why the app keeps freezing, and support replies that the interface looks polished.", "Mia demande pourquoi l application se fige sans cesse, et le support repond que l interface est soignee."],
  ["Oli asks whether the refund form was lost, and the clerk talks about the office coffee machine.", "Oli demande si le formulaire de remboursement a ete perdu, et l employe parle de la machine a cafe du bureau."],
  ["Zara asks why the assignment instructions were unclear, and the teacher says the course has excellent reviews.", "Zara demande pourquoi les consignes du devoir etaient floues, et le professeur dit que le cours a d excellentes evaluations."],
];

const OPTIONS_EN = ['Red Herring', 'Straw Man', 'Appeal to Emotion', 'False Dilemma'];
const OPTIONS_FR = ['Hors sujet', "Homme de paille", "Appel à l'émotion", 'Fausse dichotomie'];

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
      id: 39401 + index,
      level: 2,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? 'Hors sujet' : 'Red Herring',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La réponse détourne la conversation vers un autre sujet au lieu de répondre à la question.'
        : 'The reply diverts the conversation to another topic instead of answering the question.',
      detailedExplanationBeginner: isFrench
        ? 'On change de sujet pour éviter la question.'
        : 'The topic changes to dodge the question.',
      detailedExplanationIntermediate: isFrench
        ? "Le hors sujet survient quand quelqu un remplace le point en discussion par une distraction qui semble liée, mais qui ne répond pas réellement à la question initiale."
        : 'A red herring happens when someone replaces the point under discussion with a distraction that seems related but does not actually answer the original question.',
      detailedExplanationExpert: isFrench
        ? "Ce sophisme fonctionne par déviation cognitive: une remarque sur la météo, la popularité, le contexte ou les intentions détourne l attention du contenu pertinent. Il peut être involontaire ou stratégique, mais dans les deux cas il empêche l évaluation de la question de départ."
        : 'This fallacy works through cognitive diversion: a remark about the weather, popularity, context, or intentions pulls attention away from the relevant content. It can be accidental or strategic, but in both cases it blocks evaluation of the original question.',
      questionFormat: 'standard',
    };
  });
}

export const RED_HERRING_EXPANSION_EN: Question[] = createQuestions('en');
export const RED_HERRING_EXPANSION_FR: Question[] = createQuestions('fr');
