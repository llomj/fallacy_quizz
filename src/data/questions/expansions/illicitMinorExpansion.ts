import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Because every violin is a string instrument, Sam says no string instruments are violins.', 'Parce que chaque violon est un instrument a cordes, Sam dit qu aucun instrument a cordes n est un violon.'],
  ['Nina hears that all cats are mammals and concludes no mammals are cats.', 'Nina entend que tous les chats sont des mammiferes et conclut qu aucun mammifere n est un chat.'],
  ['Leo knows every square is a rectangle and then says no rectangles are squares.', 'Leo sait que chaque carre est un rectangle puis dit qu aucun rectangle n est un carre.'],
  ['Maya reads that all roses are flowers and says no flowers are roses.', 'Maya lit que toutes les roses sont des fleurs et dit qu aucune fleur n est une rose.'],
  ['Owen says all smartphones are phones, so no phones are smartphones.', 'Owen dit que tous les smartphones sont des telephones, donc aucun telephone n est un smartphone.'],
  ['Priya thinks because every gold ring is jewelry, no jewelry can be a gold ring.', 'Priya pense que parce que chaque bague en or est un bijou, aucun bijou ne peut etre une bague en or.'],
  ['Ben hears that all apples are fruit and then says no fruit is an apple.', 'Ben entend que toutes les pommes sont des fruits puis dit qu aucun fruit n est une pomme.'],
  ['Tara says all triangles have three sides, so no three sided figure can be a triangle.', 'Tara dit que tous les triangles ont trois cotes, donc aucune figure a trois cotes ne peut etre un triangle.'],
  ['Kai claims all guitars are instruments, therefore no instruments are guitars.', 'Kai affirme que toutes les guitares sont des instruments, donc aucun instrument n est une guitare.'],
  ['Jules argues that all buses are vehicles, so no vehicles are buses.', 'Jules soutient que tous les bus sont des vehicules, donc aucun vehicule n est un bus.'],
  ['Ava says all coffee mugs are cups, so no cups are coffee mugs.', 'Ava dit que toutes les tasses a cafe sont des tasses, donc aucune tasse n est une tasse a cafe.'],
  ['Noah hears that all pilots are trained and says no trained people are pilots.', 'Noah entend que tous les pilotes sont formes et dit qu aucune personne formee n est pilote.'],
  ['Mina thinks all poems use words, so no words are part of poems.', 'Mina pense que tous les poèmes utilisent des mots, donc aucun mot ne fait partie des poèmes.'],
  ['Eli knows every chair has legs and then says no legs belong to chairs.', 'Eli sait que chaque chaise a des pieds puis dit qu aucun pied n appartient aux chaises.'],
  ['Rina says all laptops are computers, so no computers are laptops.', 'Rina dit que tous les ordinateurs portables sont des ordinateurs, donc aucun ordinateur n est un ordinateur portable.'],
  ['Hugo claims all candles melt when hot, so nothing that melts when hot can be a candle.', 'Hugo affirme que toutes les bougies fondent quand il fait chaud, donc rien de ce qui fond quand il fait chaud ne peut etre une bougie.'],
  ['Lina says every book has pages, so no pages can belong to books.', 'Lina dit que chaque livre a des pages, donc aucune page ne peut appartenir aux livres.'],
  ['Grant hears that all roses smell nice and concludes nothing that smells nice is a rose.', 'Grant entend que toutes les roses sentent bon et conclut que rien de ce qui sent bon n est une rose.'],
  ['Zoe says every smartphone has a screen, so no screens can be smartphone screens.', 'Zoe dit que chaque smartphone a un ecran, donc aucun ecran ne peut etre un ecran de smartphone.'],
  ['Milo thinks all dogs are animals, so no animals are dogs.', 'Milo pense que tous les chiens sont des animaux, donc aucun animal n est un chien.'],
  ['Theo says every square is a shape, so no shapes can be squares.', 'Theo dit que chaque carre est une forme, donc aucune forme ne peut etre un carre.'],
  ['Pia hears that all jackets are clothing and says no clothing items are jackets.', 'Pia entend que toutes les vestes sont des vetements et dit qu aucun vetement n est une veste.'],
  ['Finn argues all books can be read, so nothing readable can be a book.', 'Finn soutient que tous les livres peuvent etre lus, donc rien de lisible ne peut etre un livre.'],
  ['Maya says every piano has keys, so no keys can belong to pianos.', 'Maya dit que chaque piano a des touches, donc aucune touche ne peut appartenir aux pianos.'],
  ['Sam claims all cars have wheels, so no wheels can be car wheels.', 'Sam affirme que toutes les voitures ont des roues, donc aucune roue ne peut etre une roue de voiture.'],
  ['Juno thinks all notebooks have pages, so no pages are notebook pages.', 'Juno pense que tous les carnets ont des pages, donc aucune page n est une page de carnet.'],
  ['Iris says every fox is an animal, so no animals are foxes.', 'Iris dit que chaque renard est un animal, donc aucun animal n est un renard.'],
  ['Cole hears that all songs use sound and says no sound can be part of songs.', 'Cole entend que toutes les chansons utilisent du son et dit qu aucun son ne peut faire partie des chansons.'],
  ['Nora thinks all pizzas are food, so no food can be pizza.', 'Nora pense que toutes les pizzas sont de la nourriture, donc aucune nourriture ne peut etre une pizza.'],
  ['Ari says every pen writes, so nothing that writes can be a pen.', 'Ari dit que chaque stylo ecrit, donc rien de ce qui ecrit ne peut etre un stylo.'],
  ['Rita hears that all stairs have steps and concludes no steps can belong to stairs.', 'Rita entend que tous les escaliers ont des marches et conclut qu aucune marche ne peut appartenir aux escaliers.'],
  ['Tia says all umbrellas protect from rain, so nothing that protects from rain is an umbrella.', 'Tia dit que tous les parapluies protègent de la pluie, donc rien de ce qui protege de la pluie n est un parapluie.'],
  ['Oli thinks every phone call uses a phone, so no phone calls can come from phones.', 'Oli pense que chaque appel telephonique utilise un telephone, donc aucun appel telephonique ne peut venir des telephones.'],
  ['Lara says all maps show places, so nothing that shows places can be a map.', 'Lara dit que toutes les cartes montrent des lieux, donc rien de ce qui montre des lieux ne peut etre une carte.'],
  ['Ben argues every bicycle has wheels, so no wheels can be bicycle wheels.', 'Ben soutient que chaque velo a des roues, donc aucune roue ne peut etre une roue de velo.'],
  ['Mina says all songs have melodies, so no melodies are songs.', 'Mina dit que toutes les chansons ont des melodies, donc aucune melodie n est une chanson.'],
  ['Drew thinks every painting has color, so no color can be part of a painting.', 'Drew pense que chaque peinture a de la couleur, donc aucune couleur ne peut faire partie d une peinture.'],
  ['Jade says all umbrellas are portable, so nothing portable can be an umbrella.', 'Jade dit que tous les parapluies sont portables, donc rien de portable ne peut etre un parapluie.'],
  ['Owen argues every tea cup holds tea, so no tea cups can hold tea.', 'Owen soutient que chaque tasse a the contient du the, donc aucune tasse a the ne peut contenir du the.'],
  ['Mila says all tables have tops, so no tops are table tops.', 'Mila dit que toutes les tables ont des plateaux, donc aucun plateau n est un plateau de table.'],
  ['Evan hears all birds have feathers and says no feathers belong to birds.', 'Evan entend que tous les oiseaux ont des plumes et dit qu aucune plume n appartient aux oiseaux.'],
  ['Kira thinks every coat has sleeves, so no sleeves can be coat sleeves.', 'Kira pense que chaque manteau a des manches, donc aucune manche ne peut etre une manche de manteau.'],
  ['Grant says all trains are vehicles, so no vehicles can be trains.', 'Grant dit que tous les trains sont des vehicules, donc aucun vehicule ne peut etre un train.'],
  ['Zara thinks every recipe uses ingredients, so nothing with ingredients can be a recipe.', 'Zara pense que chaque recette utilise des ingredients, donc rien de ce qui contient des ingredients ne peut etre une recette.'],
  ['Parker says all cameras take pictures, so no pictures can be from cameras.', 'Parker dit que toutes les cameras prennent des photos, donc aucune photo ne peut venir des cameras.'],
  ['Hana hears that every hat covers a head and says no head coverings are hats.', 'Hana entend que chaque chapeau couvre une tete et dit qu aucun couvre-chef n est un chapeau.'],
  ['Leo says all clocks tell time, so nothing that tells time can be a clock.', 'Leo dit que toutes les horloges donnent l heure, donc rien de ce qui donne l heure ne peut etre une horloge.'],
  ['Maya argues all sneakers are shoes, so no shoes can be sneakers.', 'Maya soutient que toutes les baskets sont des chaussures, donc aucune chaussure ne peut etre une basket.'],
  ['Nina says every lamp lights a room, so nothing that lights a room can be a lamp.', 'Nina dit que chaque lampe eclaire une piece, donc rien de ce qui eclaire une piece ne peut etre une lampe.'],
];

const OPTIONS_EN = ['Illicit Minor', 'Undistributed Middle', 'Affirming the Consequent', 'Composition Fallacy'];
const OPTIONS_FR = ['Terme mineur illicite', 'Moyen terme non distribué', 'Affirmation du conséquent', 'Sophisme de composition'];

function rotate(a: string[], i: number) {
  const r = a.slice(1);
  r.splice(i, 0, a[0]);
  return r;
}

function sub(i: number) {
  return i < 43 ? SubLevel.BEGINNER : i < 50 ? SubLevel.INTERMEDIATE : SubLevel.EXPERT;
}

function make(fr = false): Question[] {
  return SCENARIOS.map((s, i) => {
    const c = i % 4;
    return {
      id: 35501 + i,
      level: 6,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Terme mineur illicite' : 'Illicit Minor',
      difficulty: i < 43 ? 1 : i < 50 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Le raisonnement attribue a une partie de la classe une conclusion qui ne vaut que pour l ensemble ou pour un autre ensemble plus large."
        : 'The reasoning assigns part of a class a conclusion that only belongs to the whole class or a larger class.',
      detailedExplanationBeginner: fr
        ? 'Une proprieté du tout ne peut pas etre donnee a une partie sans preuve.'
        : 'A whole-class property cannot be handed to a part without proof.',
      detailedExplanationIntermediate: fr
        ? "Le terme mineur illicite apparait quand on utilise une conclusion trop restreinte pour une categorie plus petite que celle visee par les premisses."
        : 'An illicit minor appears when a conclusion is used too narrowly for a smaller category than the premises justify.',
      detailedExplanationExpert: fr
        ? "Le defaut logique consiste a faire passer un predicat general a un sous-ensemble sans distribution adequate; le syllogisme semble prudent mais il coupe la relation logique attendue."
        : 'The logical flaw is moving a general predicate onto a subset without adequate distribution; the syllogism looks cautious but breaks the intended logical relation.',
      questionFormat: 'standard',
    };
  });
}

export const ILLICIT_MINOR_EXPANSION_EN: Question[] = make();
export const ILLICIT_MINOR_EXPANSION_FR: Question[] = make(true);
