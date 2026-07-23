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
    id: 30151 + index,
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
    id: 30151 + index,
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
