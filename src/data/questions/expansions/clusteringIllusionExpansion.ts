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
