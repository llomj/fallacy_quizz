import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Because every fruit in the basket is a berry, Sam says the strawberry must be a berry too.', 'Parce que tous les fruits du panier sont des baies, Sam dit que la fraise doit aussi etre une baie.'],
  ['Nina sees that all birds can fly and concludes penguins must be able to fly as well.', 'Nina voit que tous les oiseaux peuvent voler et conclut que les pingouins doivent aussi pouvoir voler.'],
  ['Leo hears that all teachers are adults and assumes all adults are teachers.', 'Leo entend que tous les professeurs sont des adultes et suppose que tous les adultes sont des professeurs.'],
  ['Maya reads that every square has four sides and then says every four sided shape is a square.', 'Maya lit que chaque carre a quatre cotes puis dit que toute forme a quatre cotes est un carre.'],
  ['Owen knows all roses are flowers and then calls every flower a rose.', 'Owen sait que toutes les roses sont des fleurs et appelle ensuite toutes les fleurs des roses.'],
  ['Priya thinks every phone has a battery, so every battery must be a phone.', 'Priya pense que chaque telephone a une batterie, donc chaque batterie doit etre un telephone.'],
  ['Ben says all guitars are instruments, so all instruments are guitars.', 'Ben dit que toutes les guitares sont des instruments, donc tous les instruments sont des guitares.'],
  ['Tara hears that all dogs are animals and then says all animals are dogs.', 'Tara entend que tous les chiens sont des animaux puis dit que tous les animaux sont des chiens.'],
  ['Kai notices that every square is a rectangle and then claims every rectangle is a square.', 'Kai remarque que chaque carre est un rectangle puis affirme que chaque rectangle est un carre.'],
  ['Jules thinks all athletes move a lot, so anyone who moves a lot is an athlete.', 'Jules pense que tous les athletes bougent beaucoup, donc toute personne qui bouge beaucoup est un athlete.'],
  ['Ava knows all maps are drawings and then concludes all drawings are maps.', 'Ava sait que toutes les cartes sont des dessins et conclut que tous les dessins sont des cartes.'],
  ['Noah says every burger is food, so every food is a burger.', 'Noah dit que chaque hamburger est de la nourriture, donc toute nourriture est un hamburger.'],
  ['Mina hears that all nurses are trained and says all trained people are nurses.', 'Mina entend que toutes les infirmieres sont formees et dit que toutes les personnes formees sont des infirmieres.'],
  ['Eli thinks every triangle has three sides, so every three sided shape is a triangle.', 'Eli pense que tout triangle a trois cotes, donc toute forme a trois cotes est un triangle.'],
  ['Rina says all online orders are purchases, so all purchases are online orders.', 'Rina dit que toutes les commandes en ligne sont des achats, donc tous les achats sont des commandes en ligne.'],
  ['Hugo sees that all keys open something and then says everything that opens something is a key.', 'Hugo voit que toutes les cles ouvrent quelque chose puis dit que tout ce qui ouvre quelque chose est une cle.'],
  ['Lina thinks every doctor studied medicine, so everyone who studied medicine is a doctor.', 'Lina pense que chaque medecin a etudie la medecine, donc toute personne qui a etudie la medecine est medecin.'],
  ['Grant hears that all candles melt when hot and then says everything that melts when hot is a candle.', 'Grant entend que toutes les bougies fondent quand il fait chaud puis dit que tout ce qui fond quand il fait chaud est une bougie.'],
  ['Zoe says every phone has a screen, so every screen must be a phone.', 'Zoe dit que chaque telephone a un ecran, donc chaque ecran doit etre un telephone.'],
  ['Milo believes all poems use words, so all word using things are poems.', 'Milo croit que tous les poemes utilisent des mots, donc toutes les choses qui utilisent des mots sont des poemes.'],
  ['Theo says all cars have wheels, so anything with wheels is a car.', 'Theo dit que toutes les voitures ont des roues, donc tout ce qui a des roues est une voiture.'],
  ['Pia thinks every book has pages, so every page belongs to a book.', 'Pia pense que chaque livre a des pages, donc chaque page appartient a un livre.'],
  ['Finn hears that all spiders are arachnids and then says all arachnids are spiders.', 'Finn entend que toutes les araignees sont des arachnides puis dit que tous les arachnides sont des araignees.'],
  ['Maya says every jacket is clothing, so every piece of clothing is a jacket.', 'Maya dit que chaque veste est un vetement, donc chaque piece de vetement est une veste.'],
  ['Sam knows all oceans are water and then insists all water is an ocean.', 'Sam sait que tous les oceans sont de l eau et insiste pour dire que toute l eau est un ocean.'],
  ['Juno thinks all stairs have steps, so all steps are stairs.', 'Juno pense que tous les escaliers ont des marches, donc toutes les marches sont des escaliers.'],
  ['Iris says every chair has legs, so every thing with legs is a chair.', 'Iris dit que chaque chaise a des pieds, donc toute chose qui a des pieds est une chaise.'],
  ['Cole hears that all novels are books and then says all books are novels.', 'Cole entend que tous les romans sont des livres puis dit que tous les livres sont des romans.'],
  ['Nora assumes every song uses sound, so everything that uses sound is a song.', 'Nora suppose que chaque chanson utilise du son, donc tout ce qui utilise du son est une chanson.'],
  ['Ari says all phones can call, so all things that can call are phones.', 'Ari dit que tous les telephones peuvent appeler, donc toutes les choses qui peuvent appeler sont des telephones.'],
  ['Rita thinks every classroom has chairs, so every chair is a classroom.', 'Rita pense que chaque salle de classe a des chaises, donc chaque chaise est une salle de classe.'],
  ['Tia knows all spoons are utensils and then says all utensils are spoons.', 'Tia sait que toutes les cuilleres sont des ustensiles puis dit que tous les ustensiles sont des cuilleres.'],
  ['Oli hears that every plane flies and concludes everything that flies is a plane.', 'Oli entend que chaque avion vole et conclut que tout ce qui vole est un avion.'],
  ['Lara says all passwords have characters, so all characters are passwords.', 'Lara dit que tous les mots de passe ont des caracteres, donc tous les caracteres sont des mots de passe.'],
  ['Ben thinks every lamp gives light, so everything that gives light is a lamp.', 'Ben pense que chaque lampe donne de la lumiere, donc tout ce qui donne de la lumiere est une lampe.'],
  ['Mina says all cats are pets, so all pets are cats.', 'Mina dit que tous les chats sont des animaux de compagnie, donc tous les animaux de compagnie sont des chats.'],
  ['Drew hears that every triangle is a polygon and then says every polygon is a triangle.', 'Drew entend que tout triangle est un polygone puis dit que tout polygone est un triangle.'],
  ['Jade concludes that because all smoothies are drinks, all drinks are smoothies.', 'Jade conclut que parce que tous les smoothies sont des boissons, toutes les boissons sont des smoothies.'],
  ['Owen says every pen writes, so everything that writes is a pen.', 'Owen dit que chaque stylo ecrit, donc tout ce qui ecrit est un stylo.'],
  ['Mila thinks all podcasts use sound, so everything with sound is a podcast.', 'Mila pense que tous les podcasts utilisent du son, donc tout ce qui a du son est un podcast.'],
  ['Evan hears all babies are young and then says all young people are babies.', 'Evan entend que tous les bebes sont jeunes puis dit que toutes les personnes jeunes sont des bebes.'],
  ['Kira says every scarf is clothing, so every clothing item is a scarf.', 'Kira dit que chaque echarpe est un vetement, donc chaque vetement est une echarpe.'],
  ['Grant assumes all roads connect places, so everything that connects places is a road.', 'Grant suppose que toutes les routes relient des lieux, donc tout ce qui relie des lieux est une route.'],
  ['Zara thinks every notebook has pages, so every page is a notebook.', 'Zara pense que chaque carnet a des pages, donc chaque page est un carnet.'],
  ['Parker says all mugs are cups, so all cups are mugs.', 'Parker dit que toutes les tasses sont des bols, donc tous les bols sont des tasses.'],
  ['Hana hears that every train has wheels and then says every wheel is a train.', 'Hana entend que chaque train a des roues puis dit que chaque roue est un train.'],
  ['Leo claims all pencils make marks, so everything that makes marks is a pencil.', 'Leo affirme que tous les crayons font des marques, donc tout ce qui fait des marques est un crayon.'],
  ['Maya says all movies are stories, so all stories are movies.', 'Maya dit que tous les films sont des histoires, donc toutes les histoires sont des films.'],
  ['Nina thinks every helmet protects a head, so every head protection must be a helmet.', 'Nina pense que chaque casque protege une tete, donc toute protection de tete doit etre un casque.'],
  ['Maya says every dolphin is a mammal, so every mammal must be a dolphin.', 'Maya dit que chaque dauphin est un mammifere, donc tout mammifere doit etre un dauphin.'],
  ['Ben thinks every square is a shape, so every shape is a square.', 'Ben pense que chaque carre est une forme, donc toute forme est un carre.'],
  ['Priya says every violin is a string instrument, so every string instrument is a violin.', 'Priya dit que chaque violon est un instrument a cordes, donc tout instrument a cordes est un violon.'],
  ['Leo argues every apple is fruit, so every fruit is an apple.', 'Leo soutient que chaque pomme est un fruit, donc tout fruit est une pomme.'],
  ['Ava says every coat is clothing, so every piece of clothing is a coat.', 'Ava dit que chaque manteau est un vetement, donc toute piece de vetement est un manteau.'],
  ['Owen believes every rose is a flower, so every flower is a rose.', 'Owen croit que chaque rose est une fleur, donc toute fleur est une rose.'],
  ['Nina says every triangle is a polygon, so every polygon is a triangle.', 'Nina dit que chaque triangle est un polygone, donc tout polygone est un triangle.'],
  ['Milo thinks every laptop is a computer, so every computer is a laptop.', 'Milo pense que chaque ordinateur portable est un ordinateur, donc chaque ordinateur est un ordinateur portable.'],
  ['Tara says every mug is a cup, so every cup is a mug.', 'Tara dit que chaque tasse a cafe est une tasse, donc toute tasse est une tasse a cafe.'],
  ['Jules argues every bicycle is a vehicle, so every vehicle is a bicycle.', 'Jules soutient que chaque velo est un vehicule, donc tout vehicule est un velo.'],
  ['Maya says every singer is a performer, so every performer must be a singer.', 'Maya dit que chaque chanteur est un interprete, donc tout interprete doit etre un chanteur.'],
  ['Leo thinks every notebook is stationery, so every stationery item is a notebook.', 'Leo pense que chaque carnet est de la papeterie, donc tout article de papeterie est un carnet.'],
  ['Nina says every pizza is food, so every food is pizza.', 'Nina dit que chaque pizza est de la nourriture, donc toute nourriture est une pizza.'],
  ['Owen concludes every sweater is warm, so everything warm is a sweater.', 'Owen conclut que chaque pull est chaud, donc tout ce qui est chaud est un pull.'],
  ['Priya argues every bus is transport, so every transport is a bus.', 'Priya soutient que chaque bus est un transport, donc tout transport est un bus.'],
  ['Ben says every dog is a pet, so every pet is a dog.', 'Ben dit que chaque chien est un animal de compagnie, donc chaque animal de compagnie est un chien.'],
  ['Tara says every notebook is paper, so every paper thing is a notebook.', 'Tara dit que chaque carnet est du papier, donc toute chose en papier est un carnet.'],
  ['Kai thinks every phone is a device, so every device is a phone.', 'Kai pense que chaque telephone est un appareil, donc tout appareil est un telephone.'],
  ['Jules says every piano is an instrument, so every instrument is a piano.', 'Jules dit que chaque piano est un instrument, donc tout instrument est un piano.'],
  ['Ava claims every jacket is outerwear, so every outerwear item is a jacket.', 'Ava affirme que chaque veste est un vetement d exterieur, donc tout vetement d exterieur est une veste.'],
  ['Noah thinks every sandwich is lunch, so every lunch item is a sandwich.', 'Noah pense que chaque sandwich est un dejeuner, donc chaque dejeuner est un sandwich.'],
  ['Mina says every broom cleans, so everything that cleans is a broom.', 'Mina dit que chaque balai nettoie, donc tout ce qui nettoie est un balai.'],
  ['Eli assumes every backpack carries things, so everything that carries things is a backpack.', 'Eli suppose que chaque sac a dos transporte des choses, donc tout ce qui transporte des choses est un sac a dos.'],
  ['Rina says every scarf is clothing, so all clothing must be scarves.', 'Rina dit que chaque echarpe est un vetement, donc tout vetement doit etre une echarpe.'],
  ['Hugo argues every notebook is for writing, so everything for writing is a notebook.', 'Hugo soutient que chaque carnet sert a ecrire, donc tout ce qui sert a ecrire est un carnet.'],
  ['Lina says every bike helmet protects, so everything that protects is a bike helmet.', 'Lina dit que chaque casque de velo protege, donc tout ce qui protege est un casque de velo.'],
  ['Grant says every cactus is a plant, so every plant is a cactus.', 'Grant dit que chaque cactus est une plante, donc toute plante est un cactus.'],
  ['Zoe thinks every recipe uses ingredients, so every ingredient list is a recipe.', 'Zoe pense que chaque recette utilise des ingredients, donc toute liste d ingredients est une recette.'],
  ['Milo says every movie has a plot, so every plot is a movie.', 'Milo dit que chaque film a une intrigue, donc chaque intrigue est un film.'],
  ['Theo says every chair has a seat, so every seat is a chair.', 'Theo dit que chaque chaise a une assise, donc chaque assise est une chaise.'],
  ['Pia claims every email has text, so every text is an email.', 'Pia affirme que chaque courriel a du texte, donc tout texte est un courriel.'],
  ['Finn says every towel dries things, so every drying thing is a towel.', 'Finn dit que chaque serviette seche les choses, donc tout ce qui seche est une serviette.'],
  ['Maya says every map shows places, so every place showing thing is a map.', 'Maya dit que chaque carte montre des lieux, donc toute chose qui montre des lieux est une carte.'],
  ['Sam thinks every candle gives light, so every light source is a candle.', 'Sam pense que chaque bougie donne de la lumiere, donc toute source de lumiere est une bougie.'],
  ['Juno says every spoon is cutlery, so every cutlery item must be a spoon.', 'Juno dit que chaque cuillere est un couvert, donc tout couvert doit etre une cuillere.'],
  ['Iris says every comic is a story, so every story is a comic.', 'Iris dit que chaque bande dessinee est une histoire, donc toute histoire est une bande dessinee.'],
  ['Cole says every train is transport, so every transport must be a train.', 'Cole dit que chaque train est un moyen de transport, donc tout moyen de transport doit etre un train.'],
  ['Nora says every glove covers a hand, so every hand covering thing is a glove.', 'Nora dit que chaque gant couvre une main, donc toute chose qui couvre une main est un gant.'],
  ['Ari says every pillow is soft, so everything soft is a pillow.', 'Ari dit que chaque oreiller est doux, donc tout ce qui est doux est un oreiller.'],
  ['Rita says every phone has buttons or a screen, so anything with buttons or a screen is a phone.', 'Rita dit que chaque telephone a des boutons ou un ecran, donc tout ce qui a des boutons ou un ecran est un telephone.'],
  ['Tia says every bottle holds liquid, so every liquid holder is a bottle.', 'Tia dit que chaque bouteille contient un liquide, donc tout contenant de liquide est une bouteille.'],
  ['Oli says every shirt is clothing, so all clothing is a shirt.', 'Oli dit que chaque chemise est un vetement, donc tout vetement est une chemise.'],
  ['Lara says every castle is a building, so every building is a castle.', 'Lara dit que chaque chateau est un batiment, donc tout batiment est un chateau.'],
  ['Ben says every song is music, so every music piece is a song.', 'Ben dit que chaque chanson est de la musique, donc toute piece musicale est une chanson.'],
  ['Mina says every glove is worn on a hand, so everything worn on a hand is a glove.', 'Mina dit que chaque gant se porte sur une main, donc tout ce qui se porte sur une main est un gant.'],
  ['Drew says every apple pie is dessert, so every dessert is apple pie.', 'Drew dit que chaque tarte aux pommes est un dessert, donc tout dessert est une tarte aux pommes.'],
  ['Jade says every ruler measures, so everything that measures is a ruler.', 'Jade dit que chaque regle mesure, donc tout ce qui mesure est une regle.'],
  ['Owen says every wallet holds cards, so everything that holds cards is a wallet.', 'Owen dit que chaque portefeuille contient des cartes, donc tout ce qui contient des cartes est un portefeuille.'],
  ['Mila says every helmet protects, so every protector is a helmet.', 'Mila dit que chaque casque protege, donc tout protecteur est un casque.'],
  ['Evan says every notebook is bound paper, so every bound paper item is a notebook.', 'Evan dit que chaque carnet est du papier relie, donc tout article de papier relie est un carnet.'],
  ['Kira says every door opens something, so every opening thing is a door.', 'Kira dit que chaque porte ouvre quelque chose, donc tout ce qui ouvre quelque chose est une porte.'],
];

const OPTIONS_EN = ['Illicit Major', 'Undistributed Middle', 'Affirming the Consequent', 'Composition Fallacy'];
const OPTIONS_FR = ['Terme majeur illicite', 'Moyen terme non distribué', 'Affirmation du conséquent', 'Sophisme de composition'];

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
      id: 35401 + i,
      level: 6,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Terme majeur illicite' : 'Illicit Major',
      difficulty: i < 43 ? 1 : i < 50 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Le raisonnement attribue au groupe entier une propriete observee chez une partie du groupe."
        : 'The reasoning gives the whole group a property that only some members have.',
      detailedExplanationBeginner: fr
        ? 'Ce qui vaut pour quelques membres ne vaut pas forcement pour tout le groupe.'
        : 'What fits some members does not automatically fit the whole group.',
      detailedExplanationIntermediate: fr
        ? "Le terme majeur illicite apparait quand une conclusion utilise un terme trop large sans base logique suffisante."
        : 'An illicit major term appears when a conclusion uses a term too broadly without enough logical support.',
      detailedExplanationExpert: fr
        ? "Le probleme vient du passage illegitime d un predicat partiel a une classe entiere, ce qui force une generalisation que les premisses ne justifient pas."
        : 'The problem comes from illegitimately moving a partial predicate to an entire class, forcing a generalization the premises do not support.',
      questionFormat: 'standard',
    };
  });
}

export const ILLICIT_MAJOR_EXPANSION_EN: Question[] = make();
export const ILLICIT_MAJOR_EXPANSION_FR: Question[] = make(true);
