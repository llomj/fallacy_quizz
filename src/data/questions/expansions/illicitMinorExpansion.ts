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
  ['Maya says every violin string belongs to a violin, so no violin strings can belong to violins.', 'Maya dit que chaque corde de violon appartient a un violon, donc aucune corde de violon ne peut appartenir a un violon.'],
  ['Ben says every coat has sleeves, so no sleeves can belong to coats.', 'Ben dit que chaque manteau a des manches, donc aucune manche ne peut appartenir aux manteaux.'],
  ['Priya says every map shows a place, so nothing that shows a place can be a map.', 'Priya dit que chaque carte montre un lieu, donc rien de ce qui montre un lieu ne peut etre une carte.'],
  ['Leo says every book has pages, so no pages can be part of books.', 'Leo dit que chaque livre a des pages, donc aucune page ne peut faire partie des livres.'],
  ['Ava says every chair has legs, so no legs can belong to chairs.', 'Ava dit que chaque chaise a des pieds, donc aucun pied ne peut appartenir aux chaises.'],
  ['Owen says every clock tells time, so nothing that tells time can be a clock.', 'Owen dit que chaque horloge donne l heure, donc rien de ce qui donne l heure ne peut etre une horloge.'],
  ['Nina says every phone has a screen, so no screens can be phone screens.', 'Nina dit que chaque telephone a un ecran, donc aucun ecran ne peut etre un ecran de telephone.'],
  ['Milo says every car has wheels, so no wheels can belong to cars.', 'Milo dit que chaque voiture a des roues, donc aucune roue ne peut appartenir aux voitures.'],
  ['Tara says every song has sound, so no sound can be part of songs.', 'Tara dit que chaque chanson a du son, donc aucun son ne peut faire partie des chansons.'],
  ['Jules says every umbrella protects from rain, so nothing that protects from rain can be an umbrella.', 'Jules dit que chaque parapluie protege de la pluie, donc rien de ce qui protege de la pluie ne peut etre un parapluie.'],
  ['Maya says every pizza has cheese, so no cheese can be part of pizza.', 'Maya dit que chaque pizza a du fromage, donc aucun fromage ne peut faire partie d une pizza.'],
  ['Leo argues every notebook has paper, so no paper can belong to notebooks.', 'Leo soutient que chaque carnet a du papier, donc aucun papier ne peut appartenir aux carnets.'],
  ['Nina says every coat has fabric, so nothing made of fabric can be a coat.', 'Nina dit que chaque manteau a du tissu, donc rien de fabrique en tissu ne peut etre un manteau.'],
  ['Owen thinks every sandwich has bread, so no bread can be part of a sandwich.', 'Owen pense que chaque sandwich a du pain, donc aucun pain ne peut faire partie d un sandwich.'],
  ['Priya says every lamp needs electricity, so nothing that needs electricity can be a lamp.', 'Priya dit que chaque lampe a besoin d electricite, donc rien de ce qui a besoin d electricite ne peut etre une lampe.'],
  ['Ben says every book has a cover, so no covers can belong to books.', 'Ben dit que chaque livre a une couverture, donc aucune couverture ne peut appartenir aux livres.'],
  ['Tara argues every mug has a handle, so nothing with a handle can be a mug.', 'Tara soutient que chaque tasse a une anse, donc rien de ce qui a une anse ne peut etre une tasse.'],
  ['Kai says every phone has a battery, so no batteries can be phones.', 'Kai dit que chaque telephone a une batterie, donc aucune batterie ne peut etre un telephone.'],
  ['Jules thinks every car has a steering wheel, so nothing with a steering wheel can be a car.', 'Jules pense que chaque voiture a un volant, donc rien de ce qui a un volant ne peut etre une voiture.'],
  ['Ava says every chair has a seat, so no seats can belong to chairs.', 'Ava dit que chaque chaise a une assise, donc aucune assise ne peut appartenir aux chaises.'],
  ['Noah says every pen has ink, so nothing with ink can be a pen.', 'Noah dit que chaque stylo a de l encre, donc rien de ce qui a de l encre ne peut etre un stylo.'],
  ['Mina says every scarf keeps you warm, so nothing warm can be a scarf.', 'Mina dit que chaque echarpe tient chaud, donc rien de chaud ne peut etre une echarpe.'],
  ['Eli argues every spoon is for eating, so nothing for eating can be a spoon.', 'Eli soutient que chaque cuillere sert a manger, donc rien de ce qui sert a manger ne peut etre une cuillere.'],
  ['Rina says every shirt has sleeves, so no sleeves can belong to shirts.', 'Rina dit que chaque chemise a des manches, donc aucune manche ne peut appartenir aux chemises.'],
  ['Hugo says every train has passengers, so nothing with passengers can be a train.', 'Hugo dit que chaque train a des passagers, donc rien de ce qui a des passagers ne peut etre un train.'],
  ['Lina says every umbrella has a handle, so no handles can be umbrellas.', 'Lina dit que chaque parapluie a une poignee, donc aucune poignee ne peut etre un parapluie.'],
  ['Grant says every bottle holds liquid, so nothing holding liquid can be a bottle.', 'Grant dit que chaque bouteille contient un liquide, donc rien de ce qui contient un liquide ne peut etre une bouteille.'],
  ['Zoe says every map shows places, so nothing that shows places can be a map.', 'Zoe dit que chaque carte montre des lieux, donc rien de ce qui montre des lieux ne peut etre une carte.'],
  ['Milo says every notebook is for writing, so nothing for writing can be a notebook.', 'Milo dit que chaque carnet sert a ecrire, donc rien de ce qui sert a ecrire ne peut etre un carnet.'],
  ['Theo says every towel dries things, so nothing that dries things can be a towel.', 'Theo dit que chaque serviette seche les choses, donc rien de ce qui seche les choses ne peut etre une serviette.'],
  ['Pia says every helmet protects a head, so nothing that protects a head can be a helmet.', 'Pia dit que chaque casque protege une tete, donc rien de ce qui protege une tete ne peut etre un casque.'],
  ['Finn says every candle gives light, so nothing that gives light can be a candle.', 'Finn dit que chaque bougie donne de la lumiere, donc rien de ce qui donne de la lumiere ne peut etre une bougie.'],
  ['Maya says every bicycle has wheels, so no wheels can belong to bicycles.', 'Maya dit que chaque velo a des roues, donc aucune roue ne peut appartenir aux velos.'],
  ['Sam says every pizza is food, so no food can be part of pizza.', 'Sam dit que chaque pizza est de la nourriture, donc aucune nourriture ne peut faire partie d une pizza.'],
  ['Juno says every coat is clothing, so no clothing can be a coat.', 'Juno dit que chaque manteau est un vetement, donc aucun vetement ne peut etre un manteau.'],
  ['Iris says every song uses sound, so no sound can belong to songs.', 'Iris dit que chaque chanson utilise du son, donc aucun son ne peut appartenir aux chansons.'],
  ['Cole says every book has pages, so nothing with pages can be a book.', 'Cole dit que chaque livre a des pages, donc rien de ce qui a des pages ne peut etre un livre.'],
  ['Nora says every fox is an animal, so nothing that is an animal can be a fox.', 'Nora dit que chaque renard est un animal, donc rien qui est un animal ne peut etre un renard.'],
  ['Ari says every phone call uses a phone, so nothing that uses a phone can be a phone call.', 'Ari dit que chaque appel telephonique utilise un telephone, donc rien de ce qui utilise un telephone ne peut etre un appel telephonique.'],
  ['Rita says every chair has legs, so nothing with legs can be a chair.', 'Rita dit que chaque chaise a des pieds, donc rien de ce qui a des pieds ne peut etre une chaise.'],
  ['Tia says every laptop is a computer, so no computers can be laptops.', 'Tia dit que chaque ordinateur portable est un ordinateur, donc aucun ordinateur ne peut etre un ordinateur portable.'],
  ['Oli says every violin has strings, so nothing with strings can be a violin.', 'Oli dit que chaque violon a des cordes, donc rien de ce qui a des cordes ne peut etre un violon.'],
  ['Lara says every mug is a cup, so no cups can be mugs.', 'Lara dit que chaque tasse a cafe est une tasse, donc aucune tasse ne peut etre une tasse a cafe.'],
  ['Ben says every rose is a flower, so nothing that is a flower can be a rose.', 'Ben dit que chaque rose est une fleur, donc rien de ce qui est une fleur ne peut etre une rose.'],
  ['Mina says every train is a vehicle, so nothing that is a vehicle can be a train.', 'Mina dit que chaque train est un vehicule, donc rien de ce qui est un vehicule ne peut etre un train.'],
  ['Drew says every map has symbols, so no symbols can be part of maps.', 'Drew dit que chaque carte a des symboles, donc aucun symbole ne peut faire partie des cartes.'],
  ['Jade says every sweater is clothing, so no clothing item can be a sweater.', 'Jade dit que chaque pull est un vetement, donc aucun vetement ne peut etre un pull.'],
  ['Owen says every piano has keys, so nothing with keys can be a piano.', 'Owen dit que chaque piano a des touches, donc rien de ce qui a des touches ne peut etre un piano.'],
  ['Mila says every umbrella protects from rain, so nothing that protects from rain can be an umbrella.', 'Mila dit que chaque parapluie protege de la pluie, donc rien de ce qui protege de la pluie ne peut etre un parapluie.'],
  ['Evan says every backpack carries things, so nothing that carries things can be a backpack.', 'Evan dit que chaque sac a dos transporte des choses, donc rien de ce qui transporte des choses ne peut etre un sac a dos.'],
  ['Kira says every phone has buttons or a screen, so nothing with buttons or a screen can be a phone.', 'Kira dit que chaque telephone a des boutons ou un ecran, donc rien de ce qui a des boutons ou un ecran ne peut etre un telephone.'],
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
