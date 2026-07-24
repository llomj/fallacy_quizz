import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  [
    'The sign says, "Kids make nutritious snacks at the café after school." Leo concludes the café turns children into food.',
    'La pancarte dit : « Les enfants font de bons goûters au café apres l ecole. » Leo conclut que le café transforme les enfants en nourriture.'
  ],
  [
    'A listing says, "Apartment for rent by owner with balcony view near park." Mia assumes the owner comes with a balcony.',
    'Une annonce dit : « Appartement à louer par propriétaire avec vue sur balcon pres du parc. » Mia croit que le propriétaire possède lui-même un balcon.'
  ],
  [
    'The headline reads, "Police help dog bite victim at parade downtown." Ben concludes the police helped a dog bite someone.',
    'Le titre dit : « La police aide la victime d une morsure de chien au défilé en centre-ville. » Ben comprend que la police a aidé le chien à mordre.'
  ],
  [
    'Nora says, "I saw the cyclist with binoculars." Sam insists the cyclist must have been carrying binoculars.',
    'Nora dit : « J’ai vu le cycliste avec des jumelles. » Sam affirme que les jumelles appartenaient forcément au cycliste.'
  ],
  [
    'The note says, "Feed the cat food in the blue bowl." Kai puts cat food itself into a second meal.',
    'La note dit : « Donne la nourriture au chat dans le bol bleu. » Kai suppose que le chat, et non le bol, doit être dans quelque chose de bleu.'
  ],
  [
    'A poster promises, "Free coffee for tired workers and students." Ana claims only tired workers qualify, while every student does.',
    'Une affiche promet : « Café gratuit pour travailleurs fatigués et étudiants. » Ana affirme que la fatigue ne concerne que les travailleurs.'
  ],
  [
    'The teacher says, "Draw a picture of your dog in a superhero cape." Omar puts the cape on the picture frame.',
    'La professeure dit : « Dessinez votre chien avec une cape de super-héros. » Omar met la cape autour du dessin.'
  ],
  [
    'A message reads, "Meet me by the bank." Priya waits beside a river while Jules waits outside a financial bank.',
    'Un message dit : « Retrouve-moi près de la banque. » Priya attend près d’une rive tandis que Jules attend devant une agence bancaire.'
  ],
  [
    'The menu advertises, "Chicken cooked with herbs and tourists love it." Max argues the tourists were cooked with the herbs too.',
    'Le menu annonce : « Poulet cuisiné aux herbes et adoré des touristes. » Max prétend que les touristes ont aussi été cuisinés.'
  ],
  [
    'The coach says, "We need more experienced players and referees." Lina concludes only the players need experience.',
    'L’entraîneur dit : « Il nous faut davantage de joueurs et d’arbitres expérimentés. » Lina conclut que seuls les arbitres doivent être expérimentés.'
  ],
  [
    'A shop sign says, "We sell shoes for men with rubber soles." Theo asks whether customers without rubber feet may enter.',
    'Une affiche dit : « Chaussures pour hommes à semelles en caoutchouc. » Theo demande si les hommes sans semelles en caoutchouc peuvent entrer.'
  ],
  [
    'The invitation says, "Bring your friends wearing funny hats." Salma concludes that hatless friends are forbidden.',
    'L’invitation dit : « Venez avec vos amis portant des chapeaux amusants. » Salma conclut que les amis sans chapeau sont interdits.'
  ],
  [
    'A review says, "The chef served the actor with a silver spoon." Eric assumes the actor arrived carrying the spoon.',
    'Une critique dit : « Le chef a servi l’acteur avec une cuillère en argent. » Eric suppose que la cuillère appartenait à l’acteur.'
  ],
  [
    'The text reads, "I photographed the bird on the balcony." Zoe concludes the photographer, not the bird, stood on the balcony.',
    'Le message dit : « J’ai photographié l’oiseau sur le balcon. » Zoe conclut que seule la photographe se trouvait sur le balcon.'
  ],
  [
    'A notice says, "Visitors may photograph paintings with permission." Hugo assumes the paintings must grant permission.',
    'Une notice dit : « Les visiteurs peuvent photographier les tableaux avec autorisation. » Hugo suppose que les tableaux doivent donner leur accord.'
  ],
  [
    'The ad says, "Wanted: dog walker for energetic poodle in sneakers." Ava expects the poodle to be wearing sneakers.',
    'L’annonce dit : « Cherche promeneur pour caniche énergique en baskets. » Ava s’attend à voir le caniche chaussé de baskets.'
  ],
  [
    'The email says, "Cancel the meeting with the manager on Friday." Dan cancels Friday itself from the calendar.',
    'Le courriel dit : « Annule la réunion avec la directrice vendredi. » Dan ne sait pas si l’annulation ou la réunion doit avoir lieu vendredi.'
  ],
  [
    'A headline says, "Mayor announces bus changes after protest." Mei concludes the protest happened after the announcement.',
    'Un titre dit : « Le maire annonce des changements de bus après la manifestation. » Mei conclut que la manifestation a suivi l’annonce.'
  ],
  [
    'The recipe says, "Mix the berries and cream that is cold." Ravi insists only the cream, never the berries, must be cold.',
    'La recette dit : « Mélangez les fruits et la crème froide. » Ravi affirme que seuls les fruits ne peuvent pas être froids.'
  ],
  [
    'A sign says, "Slow children crossing." Fatima concludes that only slow-moving children use this crossing.',
    'Le panneau dit : « Attention enfants lents. » Fatima conclut que seuls les enfants qui marchent lentement traversent ici.'
  ],
  [
    'The landlord writes, "No pets allowed outside cages." Paul argues uncaged pets are allowed as long as they stay indoors.',
    'Le propriétaire écrit : « Animaux interdits hors des cages. » Paul affirme que les animaux sans cage sont permis s’ils restent dedans.'
  ],
  [
    'The guide says, "You can see the castle from the hill with a telescope." Iris claims the hill has a telescope attached.',
    'Le guide dit : « On voit le château depuis la colline avec un télescope. » Iris affirme que le télescope est fixé à la colline.'
  ],
  [
    'A card says, "For sale: baby stroller never used by grandmother." Malik concludes the grandmother herself was never used.',
    'Une carte dit : « À vendre : poussette jamais utilisée par grand-mère. » Malik prétend que c’est la grand-mère qui n’a jamais été utilisée.'
  ],
  [
    'The principal says, "Students who skip class frequently fail." Clara concludes that every class-skipper fails frequently rather than skips frequently.',
    'La directrice dit : « Les élèves qui manquent souvent les cours échouent. » Clara comprend qu’ils échouent souvent, pas qu’ils manquent souvent les cours.'
  ],
  [
    'A headline reads, "Hospital sued by seven-foot doctors." Noah concludes every doctor involved is seven feet tall.',
    'Un titre dit : « Hôpital poursuivi par des médecins de deux mètres. » Noah conclut que leur taille est la raison de la poursuite.'
  ],
  [
    'The instruction says, "Put the cake in the fridge covered in foil." Emma wraps the fridge in foil.',
    'L’instruction dit : « Mettez le gâteau au réfrigérateur couvert de papier aluminium. » Emma recouvre le réfrigérateur de papier aluminium.'
  ],
  [
    'A report says, "The guard stopped the visitor with the red bag." Luis assumes the guard used the bag to stop the visitor.',
    'Un rapport dit : « Le garde a arrêté le visiteur avec le sac rouge. » Luis suppose que le garde s’est servi du sac pour l’arrêter.'
  ],
  [
    'The doctor says, "Take one tablet daily with water and food." Grace concludes the water must also be eaten with food.',
    'Le médecin dit : « Prenez un comprimé chaque jour avec de l’eau et de la nourriture. » Grace conclut qu’il faut aussi manger l’eau.'
  ],
  [
    'A bulletin says, "Lost wallet found near school by teacher." Mateo claims the teacher was lost near the school.',
    'Un bulletin dit : « Portefeuille perdu retrouvé près de l’école par une enseignante. » Mateo affirme que c’était l’enseignante qui était perdue.'
  ],
  [
    'The host says, "We invited the singers and dancers from Paris." Kim concludes all the singers are local and only the dancers are from Paris.',
    'L’animateur dit : « Nous avons invité les chanteurs et les danseurs de Paris. » Kim conclut que seuls les danseurs viennent de Paris.'
  ],
  [
    'A label says, "Small dog shampoo." Tom cannot tell whether it is a small bottle or shampoo for small dogs, but argues it must be the bottle.',
    'L’étiquette dit : « Petit shampooing pour chien. » Tom ne sait pas si le flacon est petit ou si le chien l’est, mais choisit forcément le flacon.'
  ],
  [
    'The message says, "Tell Alex I need the report before lunch." Rina claims Alex, rather than the report, must arrive before lunch.',
    'Le message dit : « Dis à Alex que j’ai besoin du rapport avant midi. » Rina affirme qu’Alex, et non le rapport, doit arriver avant midi.'
  ],
  [
    'A news alert says, "Firefighters rescue woman from burning car in pajamas." Jon concludes the car was wearing pajamas.',
    'Une alerte dit : « Les pompiers sauvent d’une voiture en feu une femme en pyjama. » Jon conclut que la voiture portait le pyjama.'
  ],
  [
    'The rule says, "Employees cannot eat at desks with customers." Yara argues employees may eat at empty desks.',
    'La règle dit : « Les employés ne peuvent pas manger aux bureaux avec les clients. » Yara affirme qu’ils peuvent manger dès que les clients partent.'
  ],
  [
    'A note says, "Please wash the cups and plates on the table." Adam washes only the plates because he says only they are on the table.',
    'Une note dit : « Lavez les tasses et les assiettes sur la table. » Adam ne lave que les assiettes, car il affirme que seules elles sont sur la table.'
  ],
  [
    'The tour guide says, "We will visit the museum with the dinosaur skeleton." Sofia expects the museum building to carry the skeleton around.',
    'Le guide dit : « Nous visiterons le musée avec le squelette de dinosaure. » Sofia croit que le squelette accompagnera le groupe.'
  ],
  [
    'The caption says, "Chef cooks duck with one eye." Eli concludes the chef has only one eye.',
    'La légende dit : « Le chef cuisine un canard avec un seul œil. » Eli conclut que c’est le chef qui n’a qu’un œil.'
  ],
  [
    'A job post seeks "a French teacher for beginners." Mila assumes the teacher, not the students, must be a beginner.',
    'Une annonce cherche « un professeur de français pour débutants ». Mila suppose que le professeur, et non les élèves, doit débuter.'
  ],
  [
    'The schedule says, "Yoga for parents and children under twelve." Ken concludes only the children, not the parents, must be under twelve.',
    'Le planning dit : « Yoga pour parents et enfants de moins de douze ans. » Ken prétend que la limite d’âge ne concerne que les enfants.'
  ],
  [
    'A headline reads, "Actor reveals secret marriage in magazine." Lucie concludes the wedding ceremony happened inside a magazine.',
    'Un titre dit : « Un acteur révèle son mariage secret dans un magazine. » Lucie conclut que le mariage a eu lieu dans le magazine.'
  ],
  [
    'The memo says, "Managers discussed hiring assistants quickly." Amir concludes they discussed the topic quickly, not hiring quickly.',
    'La note dit : « Les responsables ont discuté d’embaucher rapidement des assistants. » Amir conclut que la discussion, et non l’embauche, était rapide.'
  ],
  [
    'A sign says, "Old books and magazines wanted." Lea insists only the books need to be old.',
    'Une affiche dit : « Recherche vieux livres et magazines. » Lea affirme que seuls les livres doivent être anciens.'
  ],
  [
    'The waiter says, "I served soup to the guest in a cracked bowl." Sam concludes the guest was sitting inside the bowl.',
    'Le serveur dit : « J’ai servi de la soupe au client dans un bol fêlé. » Sam conclut que le client se trouvait dans le bol.'
  ],
  [
    'The text says, "I watched the movie with my cousin." Nina concludes the movie came with a cousin as a special feature.',
    'Le message dit : « J’ai regardé le film avec ma cousine. » Nina conclut que la cousine faisait partie du film.'
  ],
  [
    'A flyer offers "piano lessons for adults at night." Jules argues the adults themselves must be nocturnal.',
    'Un prospectus propose « des cours de piano pour adultes le soir ». Jules affirme que les adultes doivent eux-mêmes être nocturnes.'
  ],
  [
    'The report says, "The cyclist hit the pedestrian with a backpack." Maya assumes the backpack was used as the weapon.',
    'Le rapport dit : « Le cycliste a heurté le piéton avec un sac à dos. » Maya suppose que le sac a servi d’arme.'
  ],
  [
    'A message says, "Call the mechanic about the car that is noisy." Theo concludes the mechanic, rather than the car, is noisy.',
    'Un message dit : « Appelle le mécanicien au sujet de la voiture qui est bruyante. » Theo conclut que le mécanicien est bruyant.'
  ],
  [
    'The ad promises "fast repairs for phones and tablets." Nora claims only phones are repaired quickly.',
    'L’annonce promet « des réparations rapides pour téléphones et tablettes ». Nora affirme que seules les réparations de téléphones sont rapides.'
  ],
  [
    'The coach says, "Practice shooting baskets with your teammate smiling." Omar insists the teammate must smile, not the player.',
    'L’entraîneur dit : « Entraîne-toi à tirer avec ton coéquipier en souriant. » Omar affirme que seul le coéquipier doit sourire.'
  ],
  [
    'A notice says, "Guests should leave coats by the door with wet umbrellas." Priya hangs the coats on the umbrellas.',
    'Une notice dit : « Les invités doivent laisser les manteaux près de la porte avec les parapluies mouillés. » Priya suspend les manteaux aux parapluies.'
  ],
  [
    'A sign reads, "Sell paintings from local artists on weekends." Theo thinks only the artists work on weekends.',
    'Une pancarte dit : « Vendre des tableaux d’artistes locaux le week-end. » Theo pense que seuls les artistes travaillent le week-end.'
  ],
  [
    'A memo says, "Call the office about the broken printer in room four." Jade assumes the office is broken.',
    'Une note dit : « Appeler le bureau à propos de l’imprimante cassée dans la salle quatre. » Jade suppose que le bureau est cassé.'
  ],
  [
    'A poster says, "Students should bring notebooks and snacks in the morning." Ben thinks only the snacks must be in the morning.',
    'Une affiche dit : « Les élèves doivent apporter des cahiers et des collations le matin. » Ben pense que seules les collations doivent être apportées le matin.'
  ],
  [
    'A brochure offers "museum tours for families and children under twelve." Lina concludes the families must be under twelve.',
    'Une brochure propose des « visites de musée pour les familles et les enfants de moins de douze ans ». Lina conclut que les familles doivent avoir moins de douze ans.'
  ],
  [
    'A recipe says "Serve soup with bread and butter." Omar serves the soup on top of bread and butter.',
    'Une recette dit : « Servez la soupe avec du pain et du beurre. » Omar sert la soupe sur le pain et le beurre.'
  ],
  [
    'A notice says, "Workers with dogs please use the side gate." Priya thinks only the dogs should use the gate.',
    'Une notice dit : « Les travailleurs avec des chiens, veuillez utiliser la porte latérale. » Priya pense que seuls les chiens doivent utiliser la porte.'
  ],
  [
    'A warning says, "Doctor warns about nurses with masks." Eli assumes the nurses are the ones warning.',
    'Un avertissement dit : « Le médecin met en garde au sujet des infirmières avec des masques. » Eli suppose que ce sont les infirmières qui préviennent.'
  ],
  [
    'A label says, "Place the cake in the box with the ribbon." Maya puts the ribbon inside the box as well.',
    'Une étiquette dit : « Placez le gâteau dans la boîte avec le ruban. » Maya met aussi le ruban dans la boîte.'
  ],
  [
    'A flyer advertises "fresh apples in baskets on sale." Noah thinks only baskets are fresh.',
    'Un prospectus annonce des « pommes fraîches dans des paniers en promotion ». Noah pense que seuls les paniers sont frais.'
  ],
  [
    'A note says, "Meet the lawyer from the station in office two." Ava waits for the station lawyer to arrive at office two.',
    'Une note dit : « Rencontrez l’avocat de la gare dans le bureau deux. » Ava attend que l’avocat de la gare arrive au bureau deux.'
  ]
  [
    'The sign says, "Students with tablets get help from tutors." Maya thinks only tablet owners may ask for help.',
    'L’affiche dit : « Les élèves avec des tablettes obtiennent de l’aide des tuteurs. » Maya pense que seuls les propriétaires de tablettes peuvent demander de l’aide.'
  ],
  [
    'A poster reads, "Bring pizza for kids and teachers." Theo assumes the pizza is for the teachers only.',
    'Une affiche dit : « Apportez de la pizza pour les enfants et les enseignants. » Theo suppose que la pizza est réservée aux enseignants.'
  ],
  [
    'The note says, "Borrow a ladder from the neighbor near the garage." Ava thinks the neighbor is near the garage.',
    'La note dit : « Emprunte une échelle au voisin près du garage. » Ava pense que le voisin se trouve près du garage.'
  ],
  [
    'The flyer says, "We need volunteers to serve soup and coffee." Ben believes the volunteers must be soup and coffee.',
    'Le tract dit : « Nous avons besoin de bénévoles pour servir la soupe et le café. » Ben croit que les bénévoles doivent être de la soupe et du café.'
  ],
  [
    'A message says, "I saw the artist with the telescope at the station." Nina concludes the artist owns the telescope.',
    'Un message dit : « J’ai vu l’artiste avec le télescope à la gare. » Nina conclut que l’artiste possède le télescope.'
  ],
  [
    'The announcement says, "Tickets for parents and kids are available online." Omar thinks only parents can buy the tickets.',
    'L’annonce dit : « Les billets pour parents et enfants sont disponibles en ligne. » Omar pense que seuls les parents peuvent acheter les billets.'
  ],
  [
    'The sign says, "Call the doctor on duty after lunch." Priya assumes the doctor is on duty after lunch only.',
    'Le panneau dit : « Appelle le médecin de garde après le déjeuner. » Priya suppose que le médecin n’est de garde qu’après le déjeuner.'
  ],
  [
    'A caption says, "The chef served the guests with forks." Leo thinks the guests brought the forks.',
    'Une légende dit : « Le chef a servi les invités avec des fourchettes. » Leo pense que les invités ont apporté les fourchettes.'
  ],
  [
    'The form says, "Parents of children with allergies must sign." Rina thinks only allergic children have parents.',
    'Le formulaire dit : « Les parents d’enfants allergiques doivent signer. » Rina pense que seuls les enfants allergiques ont des parents.'
  ],
  [
    'A review says, "The coach interviewed players with microphones." Jade assumes the players were carrying the microphones.',
    'Une critique dit : « L’entraîneur a interrogé les joueurs avec des microphones. » Jade suppose que les joueurs tenaient les microphones.'
  ],
  [
    'The sign says, "We recommend food for dogs with chicken flavor." Alex wonders if the dogs are flavored like chicken.',
    'L’affiche dit : « Nous recommandons une nourriture pour chiens au goût de poulet. » Alex se demande si les chiens ont un goût de poulet.'
  ],
  [
    'Mia reads, "Call the artist with the blue scarf." She thinks the artist is wearing a scarf-shaped blue call.',
    'Mia lit : « Appelez l’artiste avec l’écharpe bleue. » Elle pense que l’artiste porte un appel bleu en forme d’écharpe.'
  ],
  [
    'Ben sees, "I watched the chef with the camera." He assumes the chef is made of camera.',
    'Ben lit : « J’ai regardé le chef avec la caméra. » Il suppose que le chef est fait de caméra.'
  ],
  [
    'Nina reads, "We invited the dancers with glitter shoes." She thinks the glitter shoes sent the invitation.',
    'Nina lit : « Nous avons invité les danseurs avec des chaussures à paillettes. » Elle pense que les chaussures ont envoyé l’invitation.'
  ],
  [
    'Theo sees, "Find the keys in the drawer with the receipts." He looks for a drawer made of receipts.',
    'Theo lit : « Trouvez les clés dans le tiroir avec les reçus. » Il cherche un tiroir fait de reçus.'
  ],
  [
    'Ava reads, "Meet the teacher with the map in room four." She thinks the teacher is inside the map.',
    'Ava lit : « Rencontrez l’enseignante avec la carte en salle quatre. » Elle pense que l’enseignante est dans la carte.'
  ],
  [
    'Omar sees, "Bring soup for the guests in the garden." He assumes the guests are in the soup.',
    'Omar lit : « Apportez de la soupe pour les invités dans le jardin. » Il suppose que les invités sont dans la soupe.'
  ],
  [
    'Priya reads, "Students with laptops may enter." She thinks only laptop-shaped students are allowed.',
    'Priya lit : « Les élèves avec des ordinateurs portables peuvent entrer. » Elle pense que seuls les élèves en forme d’ordinateur sont autorisés.'
  ],
  [
    'Leo sees, "Talk to the guard with questions about the gate." He thinks the guard is made of questions.',
    'Leo lit : « Parlez au gardien avec des questions sur la porte. » Il pense que le gardien est fait de questions.'
  ],
  [
    'Rina reads, "We need towels for kids at the pool." She thinks the kids are in the towels.',
    'Rina lit : « Nous avons besoin de serviettes pour les enfants à la piscine. » Elle pense que les enfants sont dans les serviettes.'
  ],
  [
    'Jasper sees, "The manager interviewed workers with microphones." He assumes the workers were holding the microphones.',
    'Jasper lit : « Le responsable a interrogé les employés avec des micros. » Il suppose que les employés tenaient les micros.'
  ],
  [
    'Maya reads, "Bring snacks for the team in the office." She thinks the team is inside the office snacks.',
    'Maya lit : « Apportez des collations pour l’équipe dans le bureau. » Elle pense que l’équipe se trouve dans les collations du bureau.'
  ],
  [
    'Hugo sees, "The chef cooked the fish with white wine." He assumes the fish had the white wine.',
    'Hugo lit : « Le chef a cuisiné le poisson avec du vin blanc. » Il suppose que le poisson avait le vin blanc.'
  ],
  [
    'Layla reads, "Visitors can see the tower with binoculars." She thinks the tower owns the binoculars.',
    'Layla lit : « Les visiteurs peuvent voir la tour avec des jumelles. » Elle pense que la tour possède les jumelles.'
  ],
  [
    'Clara sees, "We need volunteers for the concert with smiles." She thinks only smiles can volunteer.',
    'Clara lit : « Nous avons besoin de bénévoles pour le concert avec le sourire. » Elle pense que seuls les sourires peuvent être bénévoles.'
  ],
  [
    'Dylan reads, "Parents with strollers should use the side door." He thinks the side door belongs to the strollers.',
    'Dylan lit : « Les parents avec des poussettes doivent utiliser la porte latérale. » Il pense que la porte appartient aux poussettes.'
  ],
  [
    'Sofia sees, "Give the dog food to the puppy in the bowl." She thinks the puppy is made of the bowl.',
    'Sofia lit : « Donnez la nourriture pour chien au chiot dans le bol. » Elle pense que le chiot est fait du bol.'
  ],
  [
    'Reed reads, "Call the doctor about the patient with a fever." He thinks the patient is the fever.',
    'Reed lit : « Appelez le médecin au sujet du patient avec de la fièvre. » Il pense que le patient est la fièvre.'
  ],
  [
    'Emma sees, "The artist painted the wall with stars." She assumes the wall is covered in star-shaped paint.',
    'Emma lit : « L’artiste a peint le mur avec des étoiles. » Elle suppose que le mur est couvert de peinture en forme d’étoiles.'
  ],
  [
    'Ari reads, "Meet the mechanic with the red toolbox." He thinks the mechanic is inside the toolbox.',
    'Ari lit : « Rencontrez le mécanicien avec la boîte à outils rouge. » Il pense que le mécanicien est dans la boîte à outils.'
  ],
  [
    'Mina sees, "We invited the singers and actors from Lyon." She thinks only the actors are from Lyon.',
    'Mina lit : « Nous avons invité les chanteurs et les acteurs de Lyon. » Elle pense que seuls les acteurs viennent de Lyon.'
  ],
  [
    'Tessa reads, "Serve dessert to the children at the table." She thinks the table is a child.',
    'Tessa lit : « Servez le dessert aux enfants à la table. » Elle pense que la table est un enfant.'
  ],
  [
    'Jonah sees, "The reporter interviewed the runner with a camera." He thinks the runner had the camera as clothing.',
    'Jonah lit : « La journaliste a interrogé le coureur avec une caméra. » Il pense que le coureur avait la caméra comme vêtement.'
  ],
  [
    'Kira reads, "Bring the books for the class in backpacks." She thinks only backpack-shaped classes may read.',
    'Kira lit : « Apportez les livres pour la classe dans les sacs à dos. » Elle pense que seules les classes en forme de sac à dos peuvent lire.'
  ],
  [
    'Evan sees, "We need chairs for the guests in the hall." He assumes the guests are inside the chairs.',
    'Evan lit : « Nous avons besoin de chaises pour les invités dans le hall. » Il suppose que les invités sont dans les chaises.'
  ],
  [
    'Rory reads, "The farmer fed the chickens with grain." He thinks the chickens are made of grain.',
    'Rory lit : « Le fermier a nourri les poules avec du grain. » Il pense que les poules sont faites de grain.'
  ],
  [
    'Hugo sees, "Photos of the bridge with boats are on display." He assumes the bridge is made of boats.',
    'Hugo lit : « Des photos du pont avec des bateaux sont exposées. » Il suppose que le pont est fait de bateaux.'
  ],
  [
    'Maya reads, "Students with questions should see the tutor." She thinks the tutor is full of questions.',
    'Maya lit : « Les élèves avec des questions doivent voir le tuteur. » Elle pense que le tuteur est plein de questions.'
  ],
  [
    'Theo sees, "The nurse spoke to the child with the book." He thinks the child is a book.',
    'Theo lit : « L’infirmière a parlé à l’enfant avec le livre. » Il pense que l’enfant est un livre.'
  ],
  [
    'Ava reads, "The artist left the gallery with the paintings." She thinks the gallery was carrying the paintings.',
    'Ava lit : « L’artiste a quitté la galerie avec les tableaux. » Elle pense que la galerie portait les tableaux.'
  ]
];

const OPTIONS_EN = ['Amphiboly', 'Equivocation', 'Accent Fallacy', 'Composition Fallacy'];
const OPTIONS_FR = ['Amphibologie', 'Équivoque', 'Sophisme de l’accent', 'Sophisme de composition'];

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

export const AMPHIBOLY_EXPANSION_EN: Question[] = SCENARIOS.map(([english], index) => {
  const correctIndex = index % 4;
  return {
    id: 30181 + index,
    level: 4,
    persona_stage: PersonaStage.SMALL_FISH,
    concept: 'Amphiboly',
    difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Which fallacy is used here?\n\n"${english}"`,
    options: rotatedOptions(OPTIONS_EN, correctIndex),
    correct_option_index: correctIndex,
    explanation: 'The conclusion exploits ambiguous grammar, attaching a phrase or modifier to the wrong part of the sentence.',
    detailedExplanationBeginner: 'The sentence structure allows two readings, and the argument chooses one without justification.',
    detailedExplanationIntermediate: 'Unlike ordinary word ambiguity, amphiboly comes from grammar or sentence structure. Rearranging or punctuating the sentence would reveal the competing readings.',
    detailedExplanationExpert: 'Amphiboly draws an unwarranted inference from syntactic ambiguity. A modifier, coordination, pronoun, or prepositional phrase has more than one possible attachment, but the reasoning treats one parse as established.',
    questionFormat: 'standard'
  };
});

export const AMPHIBOLY_EXPANSION_FR: Question[] = SCENARIOS.map(([, french], index) => {
  const correctIndex = index % 4;
  return {
    id: 30181 + index,
    level: 4,
    persona_stage: PersonaStage.SMALL_FISH,
    concept: 'Amphibologie',
    difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Quel sophisme est utilisé ici ?\n\n"${french}"`,
    options: rotatedOptions(OPTIONS_FR, correctIndex),
    correct_option_index: correctIndex,
    explanation: 'La conclusion exploite une ambiguïté grammaticale en rattachant un complément ou un qualificatif à la mauvaise partie de la phrase.',
    detailedExplanationBeginner: 'La structure de la phrase permet deux lectures, et le raisonnement en choisit une sans justification.',
    detailedExplanationIntermediate: 'Contrairement à une simple ambiguïté de mot, l’amphibologie vient de la grammaire ou de la structure. Reformuler ou ponctuer la phrase ferait apparaître les deux lectures.',
    detailedExplanationExpert: 'L’amphibologie tire une conclusion injustifiée d’une ambiguïté syntaxique. Un complément, une coordination, un pronom ou un groupe prépositionnel possède plusieurs rattachements possibles, mais le raisonnement traite une seule analyse comme certaine.',
    questionFormat: 'standard'
  };
});
