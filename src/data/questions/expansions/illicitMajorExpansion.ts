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
