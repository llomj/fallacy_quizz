import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says the cafe should offer oat milk, and Ben replies that she wants to ban cows from the country.', 'Maya dit que le cafe devrait proposer du lait d avoine, et Ben repond qu elle veut interdire les vaches dans le pays.'],
  ['Leo suggests two bike lanes downtown, and Nora says he wants to rip up every road and force everyone onto bicycles.', 'Leo propose deux pistes cyclables en centre-ville, et Nora dit qu il veut arracher toutes les routes et forcer tout le monde a faire du velo.'],
  ['Priya asks for quieter office headphones, and Omar says she wants to outlaw all conversation at work.', 'Priya demande des ecouteurs de bureau plus silencieux, et Omar dit qu elle veut interdire toute conversation au travail.'],
  ['Noah proposes a later school start, and Lina says he is trying to make students sleep until noon forever.', 'Noah propose de commencer l ecole plus tard, et Lina dit qu il essaie de faire dormir les eleves jusqu a midi pour toujours.'],
  ['Ava wants a weekend-only email policy, and Theo says she wants to destroy communication completely.', 'Ava veut une politique de courriels reservee au week-end, et Theo dit qu elle veut detruire completement la communication.'],
  ['Jules asks for one vegetarian option at lunch, and Mina says he wants to force everyone to eat salad every day.', 'Jules demande une seule option vegetarienne au déjeuner, et Mina dit qu il veut forcer tout le monde a manger de la salade chaque jour.'],
  ['Hugo suggests one extra fire drill, and Grant says he thinks the building should live in constant panic.', 'Hugo propose un exercice d evacuation supplementaire, et Grant dit qu il pense que le batiment devrait vivre dans la panique constante.'],
  ['Rina wants a cleaner shared kitchen, and Zoe says she is demanding a luxury hotel renovation.', 'Rina veut une cuisine commune plus propre, et Zoe dit qu elle exige une renovation de hotel de luxe.'],
  ['Eli asks to split the bill by what people ordered, and Sam says he wants to turn dinner into an IRS audit.', 'Eli demande que l addition soit partagee selon les commandes, et Sam dit qu il veut transformer le dîner en controle fiscal.'],
  ['Tia proposes one quiet hour in the apartment, and Juno says she wants a monastery with no laughter.', 'Tia propose une heure calme dans l appartement, et Juno dit qu elle veut un monastere sans rire.'],
  ['Ben suggests a shorter meeting agenda, and Pia says he wants to silence all important work.', 'Ben propose un ordre du jour de reunion plus court, et Pia dit qu il veut faire taire tout travail important.'],
  ['Lara asks to label the spice jars, and Owen says she wants to run a food laboratory.', 'Lara demande d etiqueter les pots a epices, et Owen dit qu elle veut diriger un laboratoire alimentaire.'],
  ['Maya wants one extra bathroom break on road trips, and Kira says she is planning a luxury cruise with bathroom stops every ten minutes.', 'Maya veut une pause toilettes de plus pendant les trajets, et Kira dit qu elle prevoit une croisiere de luxe avec des pauses toutes les dix minutes.'],
  ['Finn suggests turning down one noisy notification, and Avery says he wants to delete every app from the phone.', 'Finn propose de couper une notification bruyante, et Avery dit qu il veut supprimer toutes les applications du telephone.'],
  ['Nina asks for one more day to finish the report, and Cole says she wants deadlines to disappear forever.', 'Nina demande un jour de plus pour finir le rapport, et Cole dit qu elle veut faire disparaitre les dates limites pour toujours.'],
  ['Mia recommends replacing the broken chair in the lobby, and Dan says she wants to furnish the whole building like a palace.', 'Mia recommande de remplacer la chaise cassee du hall, et Dan dit qu elle veut meubler tout le batiment comme un palais.'],
  ['Omar says the app should save drafts automatically, and Rosa says he wants users to stop thinking entirely.', 'Omar dit que l application devrait enregistrer les brouillons automatiquement, et Rosa dit qu il veut que les utilisateurs arretent completement de reflechir.'],
  ['Jade suggests a smaller class project, and Yusuf says she wants to make school a vacation.', 'Jade propose un projet de classe plus petit, et Youssef dit qu elle veut transformer l ecole en vacances.'],
  ['Ari asks for better wheelchair access at the cafe, and Lea says he wants to rebuild the whole street.', 'Ari demande une meilleure accessibilite en fauteuil au cafe, et Lea dit qu il veut reconstruire toute la rue.'],
  ['Pia wants the store to stop blasting music, and Finn says she wants a silent universe.', 'Pia veut que le magasin arrete de diffuser de la musique tres fort, et Finn dit qu elle veut un univers silencieux.'],
  ['Grant suggests a cap on meeting length, and Tara says he wants to ban collaboration.', 'Grant propose de limiter la duree des reunions, et Tara dit qu il veut interdire toute collaboration.'],
  ['Zoe asks for one more public bench, and Hugo says she wants everyone to live in the park.', 'Zoe demande un banc public de plus, et Hugo dit qu elle veut que tout le monde vive dans le parc.'],
  ['Ravi wants the software to stop asking for the password every five minutes, and Juno says he wants no security at all.', 'Ravi veut que le logiciel cesse de demander le mot de passe toutes les cinq minutes, et Juno dit qu il ne veut aucune securite du tout.'],
  ['Sofia suggests a paper copy of the schedule, and Eli says she wants to shut down the calendar app.', 'Sofia propose une copie papier de l horaire, et Eli dit qu elle veut fermer l application calendrier.'],
  ['Lina asks for one calm study room, and Ben says she wants the library turned into a spa.', 'Lina demande une salle d etude calme, et Ben dit qu elle veut transformer la bibliotheque en spa.'],
  ['Theo wants the coach to swap one drill, and Nora says he wants to rewrite the whole sport.', 'Theo veut que l entraineur change un seul exercice, et Nora dit qu il veut reecrire tout le sport.'],
  ['Maya asks the restaurant to list ingredients more clearly, and Owen says she wants a legal contract with every sandwich.', 'Maya demande que le restaurant indique mieux les ingredients, et Owen dit qu elle veut un contrat juridique avec chaque sandwich.'],
  ['Kai suggests one optional online class, and Rina says he wants students to live on screens forever.', 'Kai propose un seul cours en ligne facultatif, et Rina dit qu il veut que les eleves vivent devant des ecrans pour toujours.'],
  ['Ava wants the office to use the same folder names, and Malik says she is demanding total control of the filing room.', 'Ava veut que le bureau utilise les memes noms de dossiers, et Malik dit qu elle exige un controle total de la salle d archivage.'],
  ['Hana asks for better lighting in the hallway, and Grace says she wants the house turned into a movie set.', 'Hana demande un meilleur eclairage dans le couloir, et Grace dit qu elle veut transformer la maison en decor de cinema.'],
  ['Dylan suggests one extra safety sign at the pool, and Tia says he wants a lifeguard army on every tile.', 'Dylan propose un panneau de securite supplementaire a la piscine, et Tia dit qu il veut une armee de sauveteurs sur chaque carreau.'],
  ['Mina asks the cafe to offer a cheaper lunch special, and Sam says she wants every meal to cost nothing.', 'Mina demande que le cafe propose un plat du jour moins cher, et Sam dit qu elle veut que tous les repas soient gratuits.'],
  ['Owen proposes a shared calendar for the team, and Priya says he wants to police everyone s personal life.', 'Owen propose un calendrier partage pour l equipe, et Priya dit qu il veut surveiller la vie personnelle de tout le monde.'],
  ['Lea wants the school to print handouts on both sides, and Hugo says she wants to bankrupt the copy room.', 'Lea veut que l ecole imprime les documents recto verso, et Hugo dit qu elle veut ruiner la salle de photocopie.'],
  ['Ben asks for a single rain shelter at the bus stop, and Juno says he wants the city to build a tunnel network.', 'Ben demande un seul abri contre la pluie a l arret de bus, et Juno dit qu il veut que la ville construise un reseau de tunnels.'],
  ['Nora suggests a quiet corner for calls, and Eli says she wants the whole office to whisper.', 'Nora propose un coin tranquille pour les appels, et Eli dit qu elle veut que tout le bureau chuchote.'],
  ['Ari asks for clearer labels on the spice shelf, and Zoe says he wants a culinary museum.', 'Ari demande des etiquettes plus claires sur l etagere a epices, et Zoe dit qu il veut un musee culinaire.'],
  ['Tara proposes one extra parent pickup lane, and Grant says she wants a highway built through the playground.', 'Tara propose une voie supplementaire pour les departs des parents, et Grant dit qu elle veut faire passer une autoroute dans la cour de recreation.'],
  ['Jade asks the team to use one template for reports, and Finn says she wants creativity erased from the workplace.', 'Jade demande que l equipe utilise un seul modele de rapport, et Finn dit qu elle veut effacer toute creativite du travail.'],
  ['Rosa wants the website to show prices upfront, and Omar says she wants to turn shopping into a tax form.', 'Rosa veut que le site affiche les prix des le depart, et Omar dit qu elle veut transformer le shopping en formulaire fiscal.'],
  ['Parker asks for a simpler return policy, and Maya says he wants the store to give away everything.', 'Parker demande une politique de retour plus simple, et Maya dit qu il veut que le magasin donne tout gratuitement.'],
  ['Kira suggests a small campus map at each entrance, and Leo says she wants the entire campus recharted by satellites.', 'Kira propose une petite carte du campus a chaque entree, et Leo dit qu elle veut que tout le campus soit recartographie par satellite.'],
  ['Mila wants the family to save receipts for big purchases, and Nina says she wants a spreadsheet for every spoon.', 'Mila veut que la famille garde les reçus des gros achats, et Nina dit qu elle veut un tableau pour chaque cuillere.'],
  ['Oli asks to reduce pop-up ads, and Lara says he wants the internet to become silent and empty.', 'Oli demande de reduire les publicites surgissantes, et Lara dit qu il veut que l internet devienne silencieux et vide.'],
  ['Evan says the community garden should use assigned plots, and Ben says he wants to divide the whole neighborhood with fences.', 'Evan dit que le jardin communautaire devrait avoir des parcelles attribuees, et Ben dit qu il veut diviser tout le quartier avec des clotures.'],
  ['Maya asks the bakery to add one sugar-free muffin, and Theo says she wants to outlaw dessert.', 'Maya demande que la boulangerie ajoute un seul muffin sans sucre, et Theo dit qu elle veut interdire les desserts.'],
  ['Noah suggests the app should remember the login, and Rita says he wants to erase passwords from the universe.', 'Noah propose que l application se souvienne de la connexion, et Rita dit qu il veut effacer les mots de passe de l univers.'],
  ['Lina asks for one more support agent on weekends, and Owen says she wants a giant call center in every kitchen.', 'Lina demande un conseiller de soutien de plus le week-end, et Owen dit qu elle veut un immense centre d appels dans chaque cuisine.'],
  ['Hugo says the school should let students swap one elective, and Pia says he wants to redesign the entire curriculum from scratch.', 'Hugo dit que l ecole devrait laisser les eleves echanger une seule option, et Pia dit qu il veut reinventer tout le programme de zero.'],
  ['Ava wants a better queue system at the clinic, and Sam says she wants to run the hospital like a theme park ride.', 'Ava veut un meilleur systeme de file d attente a la clinique, et Sam dit qu elle veut gerer l hopital comme une attraction de parc.'],
];

const OPTIONS_EN = ['Straw Man', 'Red Herring', 'False Dilemma', 'Appeal to Emotion'];
const OPTIONS_FR = ['Homme de paille', 'Fausse piste', 'Fausse dichotomie', "Appel à l'émotion"];

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
      id: 41601 + index,
      level: 1,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? 'Homme de paille' : 'Straw Man',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'On déforme la position de quelqu un pour attaquer une version plus extrême ou plus ridicule.'
        : 'Someone is misrepresented so the argument attacks a more extreme or ridiculous version.',
      detailedExplanationBeginner: isFrench
        ? 'On attaque une version déformee de l idee, pas l idee elle meme.'
        : 'The argument attacks a distorted version of the idea, not the idea itself.',
      detailedExplanationIntermediate: isFrench
        ? 'Le sophisme consiste à transformer une proposition nuancée en caricature pour la rendre plus facile à rejeter.'
        : 'The fallacy turns a nuanced proposal into a caricature so it is easier to reject.',
      detailedExplanationExpert: isFrench
        ? "L'homme de paille remplace la these d'origine par une version plus radicale, plus stupide ou plus absolue, puis réfute cette version fabriquée. Le problème n'est pas seulement l'exagération, mais le déplacement du débat vers une cible qui n'était pas défendue."
        : 'Straw man replaces the original thesis with a more extreme, foolish, or absolute version, then refutes that manufactured target. The problem is not just exaggeration, but moving the debate onto a position that was never defended.',
      questionFormat: 'standard',
    };
  });
}

export const STRAW_MAN_EXPANSION_EN: Question[] = createQuestions('en');
export const STRAW_MAN_EXPANSION_FR: Question[] = createQuestions('fr');
