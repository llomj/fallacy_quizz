import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya sees a smile in the marks on a toast crust and says the toast is trying to tell her something.', 'Maya voit un sourire dans les marques sur une croûte de pain grillé et dit que le toast essaie de lui dire quelque chose.'],
  ['Leo hears a melody in the hum of the air conditioner and thinks the machine is singing to him.', 'Léo entend une mélodie dans le bourdonnement du climatiseur et pense que la machine lui chante une chanson.'],
  ['Priya notices a face shape in the foam of her coffee and treats it like a hidden message.', 'Priya remarque une forme de visage dans la mousse de son café et la traite comme un message caché.'],
  ['Omar sees a cat in the shadow of a cracked sidewalk and insists the pavement made a cat image on purpose.', 'Omar voit un chat dans l ombre d un trottoir fissuré et insiste pour dire que le trottoir a fait apparaître un chat exprès.'],
  ['Rina looks at clouds and says one cloud is a dragon watching her commute.', 'Rina regarde les nuages et dit qu un nuage est un dragon qui surveille son trajet.'],
  ['Ben sees a smiley face in two burnt spots on a pancake and laughs at the "sign."', 'Ben voit un visage souriant dans deux taches brûlées sur une crêpe et rit devant le "signe".'],
  ['Zoe hears a word in the fan noise and thinks the room is answering her question.', 'Zoé entend un mot dans le bruit du ventilateur et pense que la pièce répond à sa question.'],
  ['Kai spots a person shape in the branches of a tree and says the tree is waving.', 'Kai repère une silhouette humaine dans les branches d un arbre et dit que l arbre fait signe.'],
  ['Nora sees an eye in a knot in the wood and says the table is watching her lunch.', 'Nora voit un œil dans un nœud du bois et dit que la table regarde son déjeuner.'],
  ['Eli finds a face in the front of his car and says the car looks judgmental.', 'Éli trouve un visage à l avant de sa voiture et dit que la voiture a l air jugeante.'],
  ['Lina hears her name in the rain on the window and thinks the weather is calling her.', 'Lina entend son nom dans la pluie sur la fenêtre et pense que le temps l appelle.'],
  ['Grant sees an animal shape in the stains on the wall and calls it a hidden fox.', 'Grant voit une forme d animal dans les taches sur le mur et l appelle un renard caché.'],
  ['Tia stares at the moon and thinks its dark patches spell out a secret symbol.', 'Tia fixe la lune et pense que ses zones sombres forment un symbole secret.'],
  ['Noah sees a grinning mouth in the grille of a microwave and says the appliance looks excited.', 'Noah voit une bouche souriante dans la grille d un micro-ondes et dit que l appareil a l air excité.'],
  ['Mia watches the backsplash tiles and says one stain looks exactly like her old math teacher.', 'Mia regarde les carreaux de la crédence et dit qu une tache ressemble exactement à son ancien professeur de maths.'],
  ['Jules says the bark pattern on a tree trunk clearly shows a bird flying.', 'Jules dit que le motif de l écorce sur un tronc montre clairement un oiseau en vol.'],
  ['Ava sees a tiny heart in the bubbles of her soda and says the drink approves of her choice.', 'Ava voit un petit cœur dans les bulles de son soda et dit que la boisson approuve son choix.'],
  ['Finn hears footsteps in the washing machine and thinks the machine has a tiny person inside.', 'Finn entend des pas dans la machine à laver et pense qu il y a une petite personne à l intérieur.'],
  ['Mina spots a skull in the shadow of a jacket on a chair and gets spooked.', 'Mina repère un crâne dans l ombre d une veste sur une chaise et prend peur.'],
  ['Theo sees a bird in the splatter pattern on a window and says the rain painted it.', 'Théo voit un oiseau dans le motif des éclaboussures sur une fenêtre et dit que la pluie l a peint.'],
  ['Juno looks at the cracks in the pavement and says they form a map from the universe.', 'Juno regarde les fissures du trottoir et dit qu elles forment une carte venue de l univers.'],
  ['Iris hears a voice in the heater fan and thinks the house is trying to speak.', 'Iris entend une voix dans le ventilateur du chauffage et pense que la maison essaie de parler.'],
  ['Cole sees a rabbit in the foam on top of soup and says dinner is making jokes.', 'Cole voit un lapin dans la mousse au-dessus de la soupe et dit que le dîner plaisante.'],
  ['Riley notices a smiling face in the dashboard lights and says the car is happy to start.', 'Riley remarque un visage souriant dans les voyants du tableau de bord et dit que la voiture est heureuse de démarrer.'],
  ['Pia spots a bird shape in the pattern of a carpet and insists the rug is alive.', 'Pia repère une forme d oiseau dans le motif d un tapis et insiste pour dire que le tapis est vivant.'],
  ['Hugo sees a tiny person in the way shadows fall across a bookshelf and waves back.', 'Hugo voit une petite personne dans la façon dont les ombres tombent sur une étagère et lui fait signe en retour.'],
  ['Sam hears a tune in the refrigerator motor and says the fridge has a favorite song.', 'Sam entend un air dans le moteur du réfrigérateur et dit que le frigo a une chanson préférée.'],
  ['Jade finds a dog face in the pattern of her bath bubbles and takes a photo.', 'Jade trouve un visage de chien dans le motif des bulles de son bain et prend une photo.'],
  ['Owen says the burnt edges of a cookie spell out a warning sign.', 'Owen dit que les bords brûlés d un biscuit dessinent un panneau d avertissement.'],
  ['Lea sees a rabbit in the clouds above the bus stop and says it is following her.', 'Léa voit un lapin dans les nuages au-dessus de l arrêt de bus et dit qu il la suit.'],
  ['Maya hears her phone vibrate and thinks the buzzing pattern says hello.', 'Maya entend son téléphone vibrer et pense que le motif de bourdonnement dit bonjour.'],
  ['Ben sees a face in the bark of a park tree and calls it a forest guardian.', 'Ben voit un visage dans l écorce d un arbre du parc et l appelle un gardien de la forêt.'],
  ['Ava spots a fish in the stains on a restaurant napkin and says the napkin is artistic.', 'Ava repère un poisson dans les taches sur une serviette de restaurant et dit que la serviette est artistique.'],
  ['Omar thinks the lines in a cracked phone screen form a lightning bolt message.', 'Omar pense que les lignes sur un écran de téléphone fissuré forment un message en forme d éclair.'],
  ['Nina says the foam on her latte clearly shows a face winking at her.', 'Nina dit que la mousse de son latte montre clairement un visage qui lui fait un clin d œil.'],
  ['Eli hears a rhythm in the drip from the sink and says the faucet is drumming.', 'Éli entend un rythme dans la goutte du robinet et dit que le robinet joue de la batterie.'],
  ['Lina sees a bird in the folds of a curtain and calls it a lucky sign.', 'Lina voit un oiseau dans les plis d un rideau et l appelle un signe de chance.'],
  ['Grant spots a smiling mouth in the grill of a street vent and says the sidewalk is cheerful.', 'Grant repère une bouche souriante dans la grille d une bouche d aération et dit que le trottoir est joyeux.'],
  ['Tia finds a cat shape in the melted ice on a tray and takes it as a message.', 'Tia trouve une forme de chat dans la glace fondue sur un plateau et y voit un message.'],
  ['Noah says the pattern on a rainy window looks like a person waving goodbye.', 'Noah dit que le motif sur une fenêtre de pluie ressemble à une personne qui fait signe au revoir.'],
  ['Mia hears a whisper in the hum of a laptop fan and thinks the computer is warning her.', 'Mia entend un murmure dans le bourdonnement du ventilateur de l ordinateur portable et pense que l ordinateur l avertit.'],
  ['Jules sees a heart shape in the foam from dish soap and says the sink approves.', 'Jules voit un cœur dans la mousse du liquide vaisselle et dit que l évier approuve.'],
  ['Ava notices a face in the pattern of peeled paint and says the wall is staring.', 'Ava remarque un visage dans le motif de la peinture écaillée et dit que le mur fixe du regard.'],
  ['Finn sees a rabbit in the shadow under his desk and says the classroom has a pet.', 'Finn voit un lapin dans l ombre sous son bureau et dit que la salle de classe a un animal de compagnie.'],
  ['Mina hears a chorus in the noise of a traffic vent and says the street is singing.', 'Mina entend un chœur dans le bruit d une bouche d aération de circulation et dit que la rue chante.'],
  ['Theo spots a face in the wood grain of a table and says dinner has a visitor.', 'Théo repère un visage dans le grain du bois d une table et dit que le dîner a un visiteur.'],
  ['Juno sees a tiny ship in the shape of a soap bubble and imagines a voyage.', 'Juno voit un petit bateau dans la forme d une bulle de savon et imagine un voyage.'],
  ['Iris hears words in the hiss of a radiator and thinks the heater is complaining.', 'Iris entend des mots dans le sifflement d un radiateur et pense que le chauffage se plaint.'],
  ['Cole sees a face in the pattern of a brick wall and says the building is watching the street.', 'Cole voit un visage dans le motif d un mur de briques et dit que le bâtiment surveille la rue.'],
  ['Riley notices a frog shape in the spilled coffee stain on the table and laughs.', 'Riley remarque une forme de grenouille dans la tache de café renversé sur la table et rit.'],
  ['Pia says the clouds arranged themselves into a smiling emoji just for her walk.', 'Pia dit que les nuages se sont arrangés en emoji souriant juste pour sa promenade.'],
  ['Hugo thinks the pattern in the curtain fabric is spelling out his initials.', 'Hugo pense que le motif du tissu du rideau épelle ses initiales.'],
];

const OPTIONS_EN = ['Pareidolia', 'Clustering Illusion', 'Apophenia', 'Illusory Correlation'];
const OPTIONS_FR = ['Paréidolie', 'Illusion de regroupement', 'Apophénie', 'Corrélation illusoire'];

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
      id: 44151 + index,
      level: 3,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Paréidolie' : 'Pareidolia',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La personne perçoit une forme significative dans un stimulus vague ou aléatoire.'
        : 'The person perceives a meaningful shape in a vague or random stimulus.',
      detailedExplanationBeginner: isFrench
        ? 'Le cerveau voit parfois des visages ou des motifs dans le hasard.'
        : 'The brain sometimes sees faces or patterns in randomness.',
      detailedExplanationIntermediate: isFrench
        ? 'La paréidolie consiste à reconnaître trop vite une forme familière dans des données sans intention claire.'
        : 'Pareidolia is the quick recognition of a familiar form in data with no clear intent.',
      detailedExplanationExpert: isFrench
        ? 'La paréidolie est une tendance perceptive à transformer des stimuli ambigus en objets ou messages significatifs. Elle aide parfois à repérer des dangers, mais elle produit aussi des faux positifs dans les nuages, les taches, les bruits ou les textures. La bonne réponse ne suppose pas une signification cachée sans preuve indépendante.'
        : 'Pareidolia is a perceptual tendency to turn ambiguous stimuli into meaningful objects or messages. It can help detect threats, but it also creates false positives in clouds, stains, noises, and textures. The correct response does not assume hidden meaning without independent evidence.',
      questionFormat: 'standard',
    };
  });
}

export const PAREIDOLIA_EXPANSION_EN: Question[] = createQuestions('en');
export const PAREIDOLIA_EXPANSION_FR: Question[] = createQuestions('fr');
