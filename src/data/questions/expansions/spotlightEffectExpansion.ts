import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya thinks everyone at the cafe noticed the tiny coffee stain on her sleeve, but nobody looks up from their phones.', 'Maya pense que tout le monde au cafe a remarque la petite tache de cafe sur sa manche, mais personne ne quitte son telephone des yeux.'],
  ['Ben feels sure the room is judging his haircut, even though everyone is busy picking their own seats.', 'Ben est persuade que la salle juge sa coupe de cheveux, alors que tout le monde cherche surtout sa propre place.'],
  ['Priya assumes her small mistake in the meeting is unforgettable, but the group has already moved on.', 'Priya suppose que sa petite erreur en reunion est inoubliable, mais le groupe est déjà passe a autre chose.'],
  ['Noah thinks the class is staring at his new shoes, but they are mostly waiting for the teacher to start.', 'Noah pense que la classe fixe ses nouvelles chaussures, mais les eleves attendent surtout que le professeur commence.'],
  ['Lina believes everyone noticed her voice crack during the presentation, though the audience was taking notes.', 'Lina croit que tout le monde a remarque sa voix qui a craque pendant la presentation, alors que le public prenait des notes.'],
  ['Theo is convinced the cashier saw him make a wrong turn in line, but the cashier is helping the next customer.', 'Theo est convaincu que la caissiere l a vu se tromper de file, mais elle aide le client suivant.'],
  ['Ava worries the office saw her spill water on the table, even though most people were looking at the slides.', 'Ava s inquiete que le bureau ait vu l eau qu elle a renversee sur la table, alors que la plupart des gens regardaient les diapositives.'],
  ['Omar thinks the whole park noticed him jogging slowly, but everyone is focused on their own workout.', 'Omar pense que tout le parc a remarque qu il faisait son jogging lentement, mais chacun se concentre sur son propre entrainement.'],
  ['Rina assumes her typo in the group chat is the only thing people will talk about, yet the chat has already moved on.', 'Rina suppose que sa faute de frappe dans le groupe de discussion sera la seule chose dont les gens parleront, alors que le groupe est déjà passe à autre chose.'],
  ['Jules feels certain that the whole class heard his chair squeak, though the room is noisy and distracted.', 'Jules est sur que toute la classe a entendu sa chaise grincer, alors que la salle est bruyante et distraite.'],
  ['Mina thinks the neighbors noticed her late arrival, but they are busy unloading groceries.', 'Mina pense que les voisins ont remarque son arrivee tardive, mais ils dechargent leurs courses.'],
  ['Eli believes everyone remembers the joke he told, even though the meeting has already gone back to business.', 'Eli croit que tout le monde se souvient de la blague qu il a faite, alors que la reunion est déjà revenue aux affaires.'],
  ['Hugo worries the whole bus saw him drop his ticket, but most riders are asleep or reading.', 'Hugo craint que tout le bus l ait vu faire tomber son ticket, mais la plupart des passagers dorment ou lisent.'],
  ['Lea assumes her small stumble on the stairs became the main story of the day, but nobody mentions it.', 'Lea suppose que son petit faux pas dans les escaliers est devenu la grande histoire de la journee, mais personne n en parle.'],
  ['Grant thinks the delivery driver is judging his messy porch, while the driver is checking the address.', 'Grant pense que le livreur juge son porche en bazar, alors que le livreur verifie l adresse.'],
  ['Tia feels sure the entire school saw her spill juice, but the hallway was full of people looking elsewhere.', 'Tia est sure que toute l ecole l a vue renverser son jus, mais le couloir etait plein de gens regardant ailleurs.'],
  ['Nora worries everyone noticed she mispronounced one word, though the conversation kept flowing.', 'Nora s inquiete que tout le monde ait remarque qu elle a mal prononce un mot, alors que la conversation a continue normalement.'],
  ['Sam thinks the whole office noticed his wrinkled shirt, but the meeting was about deadlines.', 'Sam pense que tout le bureau a remarque sa chemise froissee, mais la reunion parlait des dates limites.'],
  ['Jade assumes the barista remembers her awkward order forever, even though the cafe is packed every morning.', 'Jade suppose que le barista se souviendra de sa commande maladroite pour toujours, alors que le cafe est bondé chaque matin.'],
  ['Owen is convinced the crowd at the concert saw him miss one lyric, but the lights were down.', 'Owen est convaincu que la foule du concert l a vu rater un seul mot, mais les lumieres etaient baissees.'],
  ['Ari feels like everyone at the gym noticed his bad rep count, but most people are tracking their own workout.', 'Ari a l impression que tout le monde à la salle a remarque son mauvais nombre de repetitions, mais la plupart suivent leur propre entrainement.'],
  ['Pia thinks the teacher will remember her one wrong answer all week, though other students had many more answers to review.', 'Pia pense que le professeur se souviendra de sa seule mauvaise reponse toute la semaine, alors que d autres eleves avaient bien plus de reponses a revoir.'],
  ['Ben assumes the café staff saw him spill sugar, but they are busy clearing another table.', 'Ben suppose que le personnel du cafe l a vu renverser du sucre, mais il est occupe a nettoyer une autre table.'],
  ['Zoe worries that everyone at the party saw her trip, yet the music was loud and people were dancing.', 'Zoe craint que tout le monde à la fete l ait vue trébucher, alors que la musique etait forte et que les gens dansaient.'],
  ['Ravi feels sure the group noticed his shaky handwriting, though everyone is focused on their own papers.', 'Ravi est certain que le groupe a remarque son ecriture tremblante, alors que chacun se concentre sur sa propre feuille.'],
  ['Sofia thinks the school assembly is about her because she got called on once, but the assembly is about the schedule.', 'Sofia pense que l assemblee scolaire parle d elle parce qu on l a interrogee une fois, mais elle parle de l horaire.'],
  ['Lara assumes her new bag is the center of attention on the train, while everyone is staring out the window.', 'Lara suppose que son nouveau sac est au centre de l attention dans le train, alors que tout le monde regarde par la fenetre.'],
  ['Cole believes his blush made the whole room focus on him, though most people are reading the agenda.', 'Cole croit que son rougissement a fait se concentrer toute la salle sur lui, alors que la plupart lisent l ordre du jour.'],
  ['Maya thinks the whole table noticed she forgot a fork, but nobody at dinner seems to care.', 'Maya pense que toute la table a remarque qu elle avait oublie une fourchette, mais personne au diner ne semble s en soucier.'],
  ['Ezra feels like everyone in the shop saw him hesitate at the register, yet the cashier is looking at the screen.', 'Ezra a l impression que tout le monde dans la boutique l a vu hesiter à la caisse, alors que la caissiere regarde l ecran.'],
  ['Nina assumes her tiny laugh drew attention in the movie, though the theater stayed dark and quiet.', 'Nina suppose que son petit rire a attire l attention au cinema, alors que la salle est restee sombre et calme.'],
  ['Hana worries the meeting was derailed by her one question, but the group keeps discussing the main topic.', 'Hana craint que la reunion ait ete deroutee par sa seule question, mais le groupe continue de discuter du sujet principal.'],
  ['Dylan thinks the whole line saw his coffee spill, but the people behind him are just chatting.', 'Dylan pense que toute la file a vu son cafe se renverser, mais les personnes derriere lui discutent simplement.'],
  ['Penny believes her small typo in the email will define her reputation, though the email is one of dozens.', 'Penny croit que sa petite faute de frappe dans le courriel definira sa reputation, alors que ce courriel n est qu un parmi des dizaines.'],
  ['Kira assumes the whole neighborhood noticed her gardening gloves, but most neighbors are inside.', 'Kira suppose que tout le quartier a remarque ses gants de jardinage, mais la plupart des voisins sont à l interieur.'],
  ['Finn thinks the team saw him arrive five minutes late, yet the meeting had already started without him.', 'Finn pense que l equipe l a vu arriver avec cinq minutes de retard, alors que la reunion avait déjà commence sans lui.'],
  ['Juno feels sure the waiter heard her ask for extra ice, but the restaurant is loud and crowded.', 'Juno est sure que le serveur a entendu sa demande de glace supplementaire, mais le restaurant est bruyant et bondé.'],
  ['Olivia worries the class noticed her notebook cover, though everyone is copying the assignment prompt.', 'Olivia s inquiete que la classe ait remarque la couverture de son carnet, alors que tout le monde copie l enonce du devoir.'],
  ['Mila thinks her one awkward wave at the neighbor became a big moment, but the neighbor did not even look over.', 'Mila pense que son seul salut maladroit au voisin est devenu un grand moment, mais le voisin n a meme pas regarde.'],
  ['Leo assumes his sports jersey made him the star of the café, but the café is busy with everyone else.', 'Leo suppose que son maillot de sport a fait de lui la star du cafe, mais le cafe est occupe par tout le monde.'],
  ['Tara feels like everyone on the street noticed her phone call, while most people are walking with headphones on.', 'Tara a l impression que tout le monde dans la rue a remarque son appel telephonique, alors que la plupart marchent avec des ecouteurs.'],
  ['Hugo thinks the whole room noticed his shoelace coming undone, but the speaker is still talking.', 'Hugo pense que toute la salle a remarque que son lacet etait defait, mais l orateur parle toujours.'],
  ['Lea worries the audience saw her pause, though the pause was barely a second.', 'Lea s inquiete que le public ait vu sa pause, alors que la pause n a dure qu une seconde.'],
  ['Max thinks his one sneeze turned heads at the library, but the library is full of rustling pages.', 'Max pense qu un seul eternuement a fait tourner les tetes à la bibliotheque, mais la bibliotheque est pleine de pages qui bruissent.'],
  ['Yara assumes the checkout clerk saw the stain on her sleeve, but the clerk is scanning items quickly.', 'Yara suppose que la caissiere a vu la tache sur sa manche, mais elle scanne les articles rapidement.'],
  ['Dan feels like everyone at work saw his tired face, though everyone looks tired on Monday.', 'Dan a l impression que tout le monde au travail a vu son visage fatigue, alors que tout le monde a l air fatigue le lundi.'],
  ['Rosa thinks her one wrong guess in trivia was memorable to all, but the team is laughing about another question.', 'Rosa pense que sa seule mauvaise reponse au quiz a ete memorable pour tous, mais l equipe rit d une autre question.'],
  ['Alicia believes her new glasses made everyone notice her, though the classmates are focused on the projector.', 'Alicia croit que ses nouvelles lunettes ont fait que tout le monde la remarque, alors que les camarades regardent le projecteur.'],
  ['Owen assumes his one comment in the meeting is replaying in everyone’s mind, but the meeting moved on.', 'Owen suppose que son seul commentaire en reunion repasse dans la tete de tout le monde, mais la reunion est passée à autre chose.'],
  ['Maya feels like everyone saw her drop one fork at lunch, though most people are talking over each other.', 'Maya a l impression que tout le monde l a vue faire tomber une fourchette au dejeuner, alors que la plupart parlent en meme temps.'],
  ['Maya thinks the whole bus noticed her sing along quietly, but most riders are looking out the window.', 'Maya pense que tout le bus a remarque qu elle chantait doucement, mais la plupart des passagers regardent par la fenetre.'],
  ['Ben assumes everyone at the picnic saw his shirt button come undone, though people are focused on the food.', 'Ben suppose que tout le monde au pique-nique a vu un bouton de sa chemise se detacher, alors que les gens se concentrent sur la nourriture.'],
  ['Priya feels like the entire class noticed her pen run out of ink, but nobody is paying attention to her desk.', 'Priya a l impression que toute la classe a remarque que son stylo n avait plus d encre, mais personne ne fait attention à son bureau.'],
  ['Noah thinks the cashier saw his awkward card decline, yet the cashier is already helping the next customer.', 'Noah pense que la caissiere a vu son paiement refuse maladroitement, alors qu elle aide déjà le client suivant.'],
  ['Lina believes everyone noticed her zipper was half open, though most coworkers are checking their messages.', 'Lina croit que tout le monde a remarque que sa fermeture etait à moitié ouverte, alors que la plupart des collegues consultent leurs messages.'],
  ['Theo is sure the crowd saw him miss one step on the stairs, but people are walking past without looking.', 'Theo est sur que la foule l a vu rater une marche dans les escaliers, mais les gens passent sans regarder.'],
  ['Ava worries the whole room heard her laugh snort, even though the speaker kept talking.', 'Ava s inquiete que toute la salle ait entendu son rire nasal, alors que l orateur a continue à parler.'],
  ['Omar assumes his notebook doodle made him the center of attention, but everyone is copying the assignment.', 'Omar suppose que le dessin dans son cahier l a mis au centre de l attention, mais tout le monde copie le devoir.'],
  ['Rina thinks the neighbors noticed her struggling with the grocery bags, but they are inside and have not looked out.', 'Rina pense que les voisins l ont vue lutter avec ses sacs de courses, mais ils sont à l interieur et n ont pas regarde dehors.'],
  ['Jules feels like the whole concert crowd saw him arrive late, though the lights were low and the line was moving.', 'Jules a l impression que toute la foule du concert l a vu arriver en retard, alors que les lumieres etaient basses et que la file avançait.'],
  ['Mina thinks everyone in the office noticed her mismatched socks, but the team is arguing over the slide deck.', 'Mina pense que tout le bureau a remarque ses chaussettes assorties, mais l equipe se dispute au sujet du diaporama.'],
  ['Eli believes his phone ringtone embarrassed him in front of the entire café, even though the café was loud.', 'Eli croit que la sonnerie de son telephone l a embarrassé devant tout le café, alors que le café etait bruyant.'],
  ['Hugo thinks the driver saw him drop a receipt at the curb, but the driver is looking for parking.', 'Hugo pense que le chauffeur l a vu faire tomber un reçu au bord du trottoir, mais le chauffeur cherche une place de stationnement.'],
  ['Lea assumes everyone in the library noticed her chair scrape, though pages and keyboards are louder.', 'Lea suppose que tout le monde à la bibliotheque a remarque le grincement de sa chaise, alors que les pages et les claviers sont plus bruyants.'],
  ['Grant feels certain his one yawn in the meeting was obvious to all, though several people are yawning too.', 'Grant est certain que son seul baillement en reunion etait evident pour tous, alors que plusieurs personnes baillent aussi.'],
  ['Tia thinks the whole train saw her drop her glove, but the car is packed and nobody reacts.', 'Tia pense que tout le train l a vue faire tomber son gant, mais la voiture est bondée et personne ne reagit.'],
  ['Nora worries the class noticed her cracked voice on one sentence, though the lesson kept moving.', 'Nora s inquiete que la classe ait remarque sa voix cassée sur une phrase, alors que le cours a continue.'],
  ['Sam assumes the waiter is remembering his awkward joke forever, though the restaurant is serving other tables.', 'Sam suppose que le serveur se souviendra de sa blague maladroite pour toujours, alors que le restaurant sert d autres tables.'],
  ['Jade thinks every driver at the light saw her stall the car, but everyone is focused on their own lane.', 'Jade pense que chaque conducteur au feu l a vue caler la voiture, mais tout le monde se concentre sur sa propre voie.'],
  ['Owen believes the whole gym saw his shirt ride up, but most people are staring at mirrors.', 'Owen croit que toute la salle de sport a vu son tee-shirt remonter, mais la plupart des gens regardent dans les miroirs.'],
  ['Ari feels like the teacher is still thinking about his wrong answer, though the next question is already on the board.', 'Ari a l impression que le professeur pense encore à sa mauvaise reponse, alors que la question suivante est déjà au tableau.'],
  ['Pia worries that everyone at the market saw her drop one apple, though shoppers are hurrying past.', 'Pia s inquiete que tout le monde au marche l ait vue faire tomber une pomme, alors que les acheteurs passent rapidement.'],
  ['Ben assumes the whole room noticed his pen cap flying off, but the discussion is on the projector.', 'Ben suppose que toute la salle a remarque le bouchon de son stylo qui a saute, mais la discussion porte sur le projecteur.'],
  ['Zoe thinks the café line saw her hesitate over the menu, yet people are reading the specials too.', 'Zoé pense que la file du cafe l a vue hesiter devant le menu, mais les gens lisent aussi les suggestions.'],
  ['Ravi feels like the group chat will never forget his typo, even though three new jokes came after it.', 'Ravi a l impression que le groupe de discussion n oubliera jamais sa faute de frappe, alors que trois nouvelles blagues sont arrivees après.'],
  ['Sofia thinks the hall saw her backpack zipper break, but everyone is moving toward class.', 'Sofia pense que le couloir a vu la fermeture de son sac casser, mais tout le monde se dirige vers le cours.'],
  ['Lara assumes the clinic staff noticed her awkward check-in, though the receptionist has checked in dozens of people.', 'Lara suppose que le personnel de la clinique a remarque son enregistrement maladroit, alors que la receptionniste a enregistré des dizaines de personnes.'],
  ['Cole feels sure the neighbor saw him wave too enthusiastically, but the neighbor was talking on the phone.', 'Cole est sur que le voisin l a vu faire un signe trop enthousiaste, mais le voisin parlait au telephone.'],
  ['Maya thinks her one cough at the lecture made everyone stare, though the lecture was full of coughing.', 'Maya pense que sa seule toux pendant la conference a fait regarder tout le monde, alors que la conference etait pleine de toux.'],
  ['Ezra assumes the customer behind him saw his card get declined, but the customer is looking at the snack shelf.', 'Ezra suppose que le client derriere lui a vu sa carte etre refusee, mais le client regarde l etagere de snacks.'],
  ['Nina worries that the coach noticed her hair sticking up, though the team is focused on practice.', 'Nina craint que l entraineur ait remarque ses cheveux en bataille, alors que l equipe se concentre sur l entrainement.'],
  ['Hana feels like her small spill on the table became the event of the night, but dinner continues normally.', 'Hana a l impression que sa petite tache sur la table est devenue l evenement de la soiree, mais le dîner continue normalement.'],
  ['Dylan thinks the whole bookstore saw him read the wrong aisle sign, but the clerk is shelving books.', 'Dylan pense que toute la librairie l a vu lire le mauvais panneau d allée, mais le vendeur range les livres.'],
  ['Penny assumes the coworkers noticed her stumble over one word in the presentation, though they are checking their notes.', 'Penny suppose que les collegues ont remarque qu elle a bute sur un mot pendant la presentation, alors qu ils consultent leurs notes.'],
  ['Kira feels like everyone on the sidewalk heard her phone fall, but the street is busy and loud.', 'Kira a l impression que tout le monde sur le trottoir a entendu tomber son telephone, mais la rue est animee et bruyante.'],
  ['Finn thinks the cashier will remember his one awkward question, though many customers ask the same thing.', 'Finn pense que la caissiere se souviendra de sa seule question maladroite, alors que beaucoup de clients demandent la meme chose.'],
  ['Juno worries the whole museum noticed her bag squeak, even though the gallery is full of footsteps.', 'Juno s inquiete que tout le musee ait remarque le grincement de son sac, alors que la galerie est pleine de pas.'],
  ['Olivia assumes the teacher noticed her late notebook opening, but the teacher is writing on the board.', 'Olivia suppose que le professeur a remarque l ouverture tardive de son cahier, mais le professeur ecrit au tableau.'],
  ['Mila thinks the bus driver saw her miss the seat, though the driver is watching traffic.', 'Mila pense que le chauffeur de bus l a vue manquer le siege, mais le chauffeur surveille la circulation.'],
  ['Leo feels like everyone in line saw his sleeve catch on the bag, but nobody turns around.', 'Leo a l impression que tout le monde dans la file a vu sa manche se coincer dans le sac, mais personne ne se retourne.'],
  ['Tara assumes the audience noticed she skipped one word, while the audience is already clapping.', 'Tara suppose que le public a remarque qu elle a saute un mot, alors que le public applaudit déjà.'],
  ['Hugo thinks the entire room saw him adjust his glasses, but people are still talking in small groups.', 'Hugo pense que toute la salle l a vu reajuster ses lunettes, mais les gens parlent encore en petits groupes.'],
  ['Lea worries that her one awkward pause became the highlight of the speech, though the listeners are discussing the main point.', 'Lea craint que sa seule pause maladroite soit devenue le moment fort du discours, alors que les auditeurs discutent du point principal.'],
  ['Max believes the whole café saw him pay with coins, but the counter is too crowded for anyone to care.', 'Max croit que tout le café l a vu payer avec des pieces, mais le comptoir est trop bondé pour que quelqu un s en soucie.'],
  ['Yara feels like the whole office noticed her mismatched notebook, though most desks are covered in papers.', 'Yara a l impression que tout le bureau a remarque son carnet dépareille, alors que la plupart des bureaux sont couverts de papiers.'],
  ['Dan thinks the class saw his chair wobble, but the teacher is already writing the next instruction.', 'Dan pense que la classe a vu sa chaise vaciller, mais le professeur ecrit déjà la consigne suivante.'],
  ['Rosa assumes the store staff noticed her dropped coupon, though the staff are helping another customer.', 'Rosa suppose que le personnel du magasin a remarque son coupon tombe, alors que le personnel aide un autre client.'],
  ['Alicia feels sure the whole room heard her whisper, even though the projector fan is louder.', 'Alicia est sure que toute la salle a entendu son chuchotement, alors que le ventilateur du projecteur est plus bruyant.'],
  ['Owen thinks the group noticed his tiny hesitation before speaking, but the conversation is already moving fast.', 'Owen pense que le groupe a remarque sa petite hesitation avant de parler, mais la conversation avance déjà vite.'],
  ['Maya thinks everyone at the market saw her drop one grape, but the crowd is focused on the fruit stand.', 'Maya pense que tout le monde au marche l a vue faire tomber un raisin, mais la foule se concentre sur l etal de fruits.'],
];

const OPTIONS_EN = ['Spotlight Effect', 'Halo Effect', 'Egocentric Bias', 'False Consensus Effect'];
const OPTIONS_FR = ['Effet de projecteur', 'Effet de halo', 'Biais égocentrique', 'Effet de faux consensus'];

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
      id: 41201 + index,
      level: 3,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? 'Effet de projecteur' : 'Spotlight Effect',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La personne surestime combien les autres remarquent ses propres erreurs, son apparence ou ses petits moments genants.'
        : 'The person overestimates how much others notice their own mistakes, appearance, or awkward moments.',
      detailedExplanationBeginner: isFrench
        ? 'On croit etre beaucoup plus remarque qu on ne l est vraiment.'
        : 'You think you are noticed far more than you really are.',
      detailedExplanationIntermediate: isFrench
        ? 'L effet de projecteur fait croire que l attention des autres est centree sur nous alors qu elle est souvent repartie ailleurs.'
        : 'The spotlight effect makes it seem like other people are focused on us when their attention is usually elsewhere.',
      detailedExplanationExpert: isFrench
        ? "Ce biais vient d une egocentration de l attention perçue: on utilise notre propre conscience vive de nos défauts ou accidents comme si elle reflétait la visibilité pour les autres. En réalité, les observateurs disposent d une attention limitée et oublient vite les petits détails qui nous semblent enormes."
        : 'This bias comes from an egocentric overestimate of perceived attention: we use our own vivid awareness of flaws or slips as if it reflected visibility to others. In reality, observers have limited attention and quickly forget details that feel huge to us.',
      questionFormat: 'standard',
    };
  });
}

export const SPOTLIGHT_EFFECT_EXPANSION_EN: Question[] = createQuestions('en');
export const SPOTLIGHT_EFFECT_EXPANSION_FR: Question[] = createQuestions('fr');
