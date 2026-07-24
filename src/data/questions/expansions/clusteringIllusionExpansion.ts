import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["Sam thinks three rainy Mondays in a row mean Mondays are cursed.", "Sam pense que trois lundis pluvieux d'affilee veulent dire que les lundis sont maudits."],
  ["Mia sees two red lights and decides the whole city is against her.", "Mia voit deux feux rouges et decide que toute la ville est contre elle."],
  ["Omar notices three customers with the same jersey number and calls it a hidden pattern.", "Omar remarque trois clients avec le meme numero de maillot et y voit un motif cache."],
  ["Priya thinks the three spilled coffees at work prove the office has bad energy.", "Priya pense que les trois cafes renverses au travail prouvent que le bureau a une mauvaise energie."],
  ["Leo spots a streak of odd license plates and assumes the neighborhood is full of signs.", "Leo voit une serie de plaques d'immatriculation bizarres et suppose que le quartier regorge de signes."],
  ["Nina believes the two missed buses are more than bad luck and must be a warning.", "Nina croit que les deux bus rates sont plus que de la malchance et doivent etre un avertissement."],
  ["Theo treats a few messy desk drawers as proof the whole house is chaotic.", "Theo prend quelques tiroirs en desordre pour preuve que toute la maison est chaotique."],
  ["Ava thinks four people wearing blue at the cafe means blue shirts bring fortune.", "Ava pense que quatre personnes en bleu au cafe prouvent que les chemises bleues portent chance."],
  ["Finn sees three good test scores on the same day and decides that date is lucky.", "Finn voit trois bonnes notes le meme jour et decide que cette date porte chance."],
  ["Zoe notices a row of empty parking spaces and calls it a sign to stay home.", "Zoe remarque une rangée de places de parking vides et dit que c'est un signe pour rester chez elle."],
  ["Mina thinks the three dogs barking in a row means the whole street is haunted.", "Mina pense que les trois chiens qui aboient d'affilee veulent dire que toute la rue est hantee."],
  ["Kai sees a run of green traffic lights and says the universe is on his side.", "Kai voit une serie de feux verts et dit que l'univers est de son cote."],
  ["Aria assumes the three customers with umbrellas mean it will always rain at noon.", "Aria suppose que les trois clients avec parapluie signifient qu'il pleuvra toujours a midi."],
  ["Ben says the two bad meetings in a week prove Tuesdays are toxic.", "Ben dit que les deux mauvaises reunions d'une semaine prouvent que les mardis sont toxiques."],
  ["Rina notices three people coughing and concludes the whole room is unhealthy.", "Rina remarque trois personnes qui toussent et conclut que toute la salle est en mauvaise sante."],
  ["Milo thinks a cluster of bills arriving together means the month is doomed.", "Milo pense qu'un paquet de factures arrivant ensemble veut dire que le mois est foutu."],
  ["Lina sees several birds on one wire and calls it a secret message.", "Lina voit plusieurs oiseaux sur un fil et appelle cela un message secret."],
  ["Eli hears about a few bad dates in a row and decides dating apps are cursed.", "Eli entend parler de quelques mauvaises rencontres d'affilee et decide que les applis de rencontre sont maudites."],
  ["Tara thinks three late trains on one route prove the route is unlucky.", "Tara pense que trois trains en retard sur une ligne prouvent que cette ligne porte malheur."],
  ["Noah sees a cluster of parked scooters and says the street is a scooter hotspot.", "Noah voit un groupe de scooters stationnes et dit que la rue est un point chaud pour les scooters."],
  ["Nora thinks two broken mugs in the same week mean her kitchen is cursed.", "Nora pense que deux tasses cassees la meme semaine veulent dire que sa cuisine est maudite."],
  ["Jade sees the same song twice on a playlist and treats it as a fate signal.", "Jade voit la meme chanson deux fois sur une playlist et y voit un signal du destin."],
  ["Owen thinks three people sneezing near him means he always gets sick there.", "Owen pense que trois personnes qui eternuent pres de lui veulent dire qu'il tombe toujours malade la-bas."],
  ["Maya believes a streak of bad coffee means the whole cafe is evil.", "Maya croit qu'une serie de mauvais cafes signifie que le cafe entier est mauvais."],
  ["Finn sees four shoppers wearing the same brand and says the brand rules the city.", "Finn voit quatre clients portant la meme marque et dit que cette marque regne sur la ville."],
  ["Priya notices two delayed emails and assumes the whole team ignores deadlines.", "Priya remarque deux e-mails en retard et suppose que toute l'equipe ignore les delais."],
  ["Zoe sees three cars of the same color and calls it a hidden code.", "Zoe voit trois voitures de la meme couleur et appelle cela un code cache."],
  ["Leo thinks a cluster of loud neighbors means the building has bad karma.", "Leo pense qu'un groupe de voisins bruyants signifie que l'immeuble a un mauvais karma."],
  ["Mina sees a few successful interviews in the same month and says that month is magical.", "Mina voit quelques entretiens reussis dans le meme mois et dit que ce mois est magique."],
  ["Omar thinks two long checkout lines prove the store is always slow.", "Omar pense que deux longues files en caisse prouvent que le magasin est toujours lent."],
  ["Rina notices a run of broken pencils and blames the whole classroom.", "Rina remarque une serie de crayons casses et en blame toute la classe."],
  ["Ava sees three people arriving late to the same workshop and says punctuality does not exist there.", "Ava voit trois personnes arriver en retard au meme atelier et dit que la ponctualite n'existe pas la-bas."],
  ["Kai notices a clump of bad weather during his vacation and says that destination is doomed.", "Kai remarque un amas de mauvais temps pendant ses vacances et dit que cette destination est condamnee."],
  ["Nina thinks a bunch of noisy children in one park means that park is always wild.", "Nina pense qu'un groupe d'enfants bruyants dans un parc veut dire que ce parc est toujours agite."],
  ["Theo sees five people wearing hats and claims hats are trending everywhere.", "Theo voit cinq personnes portant des chapeaux et pretend que les chapeaux sont tendance partout."],
  ["Aria notices several parking tickets on the same block and thinks the block is cursed.", "Aria remarque plusieurs amendes de stationnement sur le meme trottoir et pense que le coin est maudit."],
  ["Ben sees two broken umbrellas in one storm and decides umbrellas never work.", "Ben voit deux parapluies casses pendant un orage et decide que les parapluies ne marchent jamais."],
  ["Milo sees a row of empty tables and says the restaurant is always deserted.", "Milo voit une rangee de tables vides et dit que le restaurant est toujours desert."],
  ["Lina sees four people laughing on a train and decides that route is the happy route.", "Lina voit quatre personnes rire dans un train et decide que cette ligne est la ligne heureuse."],
  ["Eli notices three people with the same ringtone and calls it evidence of a club.", "Eli remarque trois personnes avec la meme sonnerie et appelle cela la preuve d'un club."],
  ["Tara sees two bad traffic jams and says the road has a grudge against drivers.", "Tara voit deux gros bouchons et dit que la route en veut aux conducteurs."],
  ["Noah sees a cluster of wins and thinks the game is blessed, not just lucky.", "Noah voit un groupe de victoires et pense que le jeu est beni, pas simplement chanceux."],
  ["Jade sees a few cold classrooms and concludes the school has a cold personality.", "Jade voit quelques salles de classe froides et conclut que l'ecole a une personalite froide."],
  ["Owen notices three customers order the same drink and says that drink is the city standard.", "Owen remarque trois clients qui commandent la meme boisson et dit que cette boisson est le standard de la ville."],
  ["Maya thinks the cluster of loud alarms in one afternoon means alarms predict chaos.", "Maya pense que le groupe d'alarmes d'un apres-midi veut dire que les alarmes annoncent le chaos."],
  ["Finn sees four people with the same backpack and decides the backpack is a sign of success.", "Finn voit quatre personnes avec le meme sac a dos et decide que ce sac est un signe de succes."],
  ["Nora says the few bad apples in one box prove the whole orchard is rotten.", "Nora dit que quelques pommes pourries dans une caisse prouvent que tout le verger est pourri."],
  ["Zoe sees a cluster of rain clouds and says the sky is targeting her weekend.", "Zoe voit un amas de nuages de pluie et dit que le ciel vise son week-end."],
  ["Kai notices three great naps on the same couch and calls it a couch of destiny.", "Kai remarque trois bonnes siestes sur le meme canape et appelle cela un canape du destin."],
  ["Mina sees two people in matching jackets and assumes the store has a secret club.", "Mina voit deux personnes en vestes assorties et suppose que le magasin a un club secret."],
  ["Maya hears three rainy Mondays and decides Mondays themselves are unlucky.", "Maya entend trois lundis pluvieux et decide que les lundis eux-memes portent malheur."],
  ["Theo sees two red umbrellas at the bus stop and thinks red umbrellas attract delays.", "Theo voit deux parapluies rouges a l'arret de bus et pense que les parapluies rouges attirent les retards."],
  ["Nina notices four people wearing green in one cafe and calls it a lucky color spot.", "Nina remarque quatre personnes habillees en vert dans un cafe et appelle cela une tache de couleur porte-bonheur."],
  ["Ben spots a run of green lights and says the route is blessed.", "Ben remarque une serie de feux verts et dit que la route est benie."],
  ["Omar sees three people cough in one room and decides the room is cursed.", "Omar voit trois personnes tousser dans une piece et decide que la piece est maudite."],
  ["Priya sees a cluster of late trains and thinks that line has a personality problem.", "Priya voit un groupe de trains en retard et pense que cette ligne a un probleme de caractere."],
  ["Leo notices two customers with the same backpack and assumes the bag is a secret sign.", "Leo remarque deux clients avec le meme sac a dos et suppose que le sac est un signe secret."],
  ["Rina sees several good birthdays in the same week and says that week is magical.", "Rina voit plusieurs anniversaires heureux dans la meme semaine et dit que cette semaine est magique."],
  ["Jules spots three dogs barking near the park gate and calls it a bad omen for the park.", "Jules remarque trois chiens qui aboient pres de la porte du parc et appelle cela un mauvais presage pour le parc."],
  ["Ava notices two people in matching jackets and concludes the store has a hidden club.", "Ava remarque deux personnes en vestes assorties et conclut que le magasin a un club cache."]
  ,
  ["Milo sees three rainy Fridays and decides Fridays are bad-luck days.", "Milo voit trois vendredis pluvieux et decide que les vendredis sont des jours de malchance."],
  ["Nora notices two people in the same sneakers and thinks the mall has a secret code.", "Nora remarque deux personnes portant les memes baskets et pense que le centre commercial a un code secret."],
  ["Theo sees four green lights after lunch and says the afternoon is blessed.", "Theo voit quatre feux verts apres le dejeuner et dit que l'apres-midi est benie."],
  ["Priya spots three customers with the same tote bag and assumes it is the city uniform.", "Priya remarque trois clients avec le meme sac fourre-tout et suppose que c'est l'uniforme de la ville."],
  ["Ben sees a cluster of loud car alarms and says the block is cursed.", "Ben voit un groupe d'alarmes de voiture bruyantes et dit que le quartier est maudit."],
  ["Maya notices two great coffee days in a row and concludes the cafe always makes perfect coffee.", "Maya remarque deux bonnes journees de cafe d'affilee et conclut que le cafe fait toujours du cafe parfait."],
  ["Omar sees three people wearing blue hats and thinks blue hats bring good luck.", "Omar voit trois personnes portant des chapeaux bleus et pense que les chapeaux bleus portent chance."],
  ["Lina spots a row of empty benches and assumes the whole park is abandoned.", "Lina remarque une rangée de bancs vides et suppose que tout le parc est abandonne."],
  ["Finn notices four shoppers buying the same snack and says the snack must be taking over town.", "Finn remarque quatre acheteurs qui prennent le meme snack et dit que ce snack doit prendre le controle de la ville."],
  ["Zoe sees two trains arrive on time and decides the line is magically reliable.", "Zoe voit deux trains arriver a l'heure et decide que la ligne est magiquement fiable."],
  ["Mina sees three people sneeze near her and thinks the whole room is sick.", "Mina voit trois personnes eternuer pres d'elle et pense que toute la salle est malade."],
  ["Kai notices a cluster of red umbrellas and says red umbrellas cause rain.", "Kai remarque un groupe de parapluies rouges et dit que les parapluies rouges provoquent la pluie."],
  ["Aria sees five happy customers in one hour and says the shop is blessed.", "Aria voit cinq clients contents en une heure et dit que la boutique est benie."],
  ["Noah spots two broken mugs on the same shelf and thinks that shelf is cursed.", "Noah remarque deux tasses cassees sur la meme etagere et pense que cette etagere est maudite."],
  ["Rina sees three dogs in a row bark at the same bus and says the bus attracts bad energy.", "Rina voit trois chiens d'affilee aboyer sur le meme bus et dit que le bus attire une mauvaise energie."],
  ["Jade notices four people with the same haircut and concludes the salon has a trend signal.", "Jade remarque quatre personnes avec la meme coupe et conclut que le salon envoie un signal de tendance."],
  ["Eli sees a cluster of parking tickets and says that street must be watched by fate.", "Eli voit un groupe d'amendes de stationnement et dit que cette rue doit etre surveillee par le destin."],
  ["Tara notices two delayed emails in a row and assumes the whole team is careless.", "Tara remarque deux e-mails en retard d'affilee et suppose que toute l'equipe est negligente."],
  ["Milo sees a run of good luck in the same week and decides that week is magical.", "Milo voit une serie de chance dans la meme semaine et decide que cette semaine est magique."],
  ["Nina spots three people wearing green jackets and says green jackets are a lucky sign.", "Nina remarque trois personnes portant des vestes vertes et dit que les vestes vertes sont un signe de chance."],
  ["Owen sees a row of empty seats and says the event is a flop.", "Owen voit une rangée de sieges vides et dit que l'evenement est un flop."],
  ["Priya notices four people order the same drink and calls it proof of a hidden drink trend.", "Priya remarque quatre personnes qui commandent la meme boisson et appelle cela la preuve d'une tendance cachee."],
  ["Theo sees a cluster of loud kids in one park and says that park is always wild.", "Theo voit un groupe d'enfants bruyants dans un parc et dit que ce parc est toujours agite."],
  ["Maya notices three good classes in one month and says that month is a lucky month.", "Maya remarque trois bonnes classes dans le meme mois et dit que ce mois est un mois porte-bonheur."],
  ["Ben sees two rainy weekends and decides weekends are against him.", "Ben voit deux week-ends pluvieux et decide que les week-ends sont contre lui."],
  ["Lina spots four people with the same backpack and says the backpack is a success badge.", "Lina remarque quatre personnes avec le meme sac a dos et dit que ce sac est un badge de succes."],
  ["Finn sees three great photos in a row and assumes the camera is magical.", "Finn voit trois superbes photos d'affilee et suppose que l'appareil photo est magique."],
  ["Zoe notices a cluster of happy birthday balloons and thinks that corner of the store is special.", "Zoe remarque un groupe de ballons d'anniversaire heureux et pense que ce coin du magasin est special."],
  ["Kai sees two smooth bus rides and says the route is blessed.", "Kai voit deux trajets de bus sans probleme et dit que la ligne est benie."],
  ["Mina notices three people buying the same notebook and assumes it must be the city favorite.", "Mina remarque trois personnes qui achetent le meme carnet et suppose que c'est le favori de la ville."],
  ["Aria sees four people laughing in one train car and says that car always has good vibes.", "Aria voit quatre personnes rire dans la meme voiture de train et dit que ce wagon a toujours de bonnes vibrations."],
  ["Noah notices a cluster of broken pencils and says the classroom has bad luck.", "Noah remarque un groupe de crayons casses et dit que la classe a de la malchance."],
  ["Rina sees three good customer reviews in a row and says the store is perfect.", "Rina voit trois bons avis clients d'affilee et dit que le magasin est parfait."],
  ["Jade spots two umbrellas with the same color and concludes that color controls the weather.", "Jade remarque deux parapluies de la meme couleur et conclut que cette couleur controle le temps."],
  ["Eli sees a row of empty coffee cups and says the office is always exhausted.", "Eli voit une rangée de tasses de cafe vides et dit que le bureau est toujours epuisé."],
  ["Tara notices three people with the same ringtone and says that ringtone means something special.", "Tara remarque trois personnes avec la meme sonnerie et dit que cette sonnerie signifie quelque chose de special."],
  ["Lina sees a cluster of lost umbrellas at the cafe and says the cafe is cursed.", "Lina voit un groupe de parapluies oublies au cafe et dit que le cafe est maudit."],
  ["Finn notices three people wearing the same color on one train and says the train line has a vibe.", "Finn remarque trois personnes portant la meme couleur dans un train et dit que la ligne a une ambiance particuliere."],
  ["Zoe spots two good sales on the same afternoon and assumes that afternoon is always lucky.", "Zoe remarque deux bonnes soldes le meme apres-midi et suppose que cet apres-midi porte toujours chance."],
  ["Kai sees a row of empty tables after lunch and decides the restaurant is doomed.", "Kai voit une rangée de tables vides apres le dejeuner et decide que le restaurant est condamne."]
];

const EN = ['Clustering Illusion', 'Apophenia', 'Gambler\'s Fallacy', 'Confirmation Bias'];
const FR = ['Illusion des séries', 'Apophénie', 'Erreur du joueur', 'Biais de confirmation'];

const rotate = (a: string[], i: number) => {
  const r = a.slice(1);
  r.splice(i, 0, a[0]);
  return r;
};

const sub = (i: number) => (i < 17 ? SubLevel.BEGINNER : i < 34 ? SubLevel.INTERMEDIATE : SubLevel.EXPERT);

function make(fr = false): Question[] {
  return SCENARIOS.map((s, i) => {
    const c = i % 4;
    return {
      id: 32751 + i,
      level: 3,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Illusion des séries' : 'Clustering Illusion',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? FR : EN, c),
      correct_option_index: c,
      explanation: fr
        ? "On voit un motif dans des coïncidences ou des groupes de faits pourtant normaux."
        : 'A pattern is being seen in coincidences or clusters of events that are actually normal.',
      detailedExplanationBeginner: fr
        ? "On croit voir un motif special alors que c'est juste une serie aleatoire."
        : 'You think you see a special pattern when it is just a random streak.',
      detailedExplanationIntermediate: fr
        ? "L'illusion des series fait croire qu'un groupe d'evenements rapproches a une signification cachee alors qu'il peut simplement resulter du hasard."
        : 'Clustering illusion makes a nearby group of events seem meaningful even when it may just be chance.',
      detailedExplanationExpert: fr
        ? "Le cerveau repere facilement des formes et des regroupements, mais il surinterprete parfois des sequences aleatoires comme si elles revelaient une cause ou une intention."
        : 'The brain is good at spotting shapes and clusters, but it sometimes overreads random sequences as if they reveal a cause or intention.',
      questionFormat: 'standard',
    };
  });
}

export const CLUSTERING_ILLUSION_EXPANSION_EN: Question[] = make();
export const CLUSTERING_ILLUSION_EXPANSION_FR: Question[] = make(true);
