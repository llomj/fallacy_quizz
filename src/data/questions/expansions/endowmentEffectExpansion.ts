import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["Leo refuses to sell the mug he got for free at work, even though he never uses it and a neighbor offered good money for it at lunch yesterday.", "Leo refuse de vendre la tasse gratuite reçue au travail, même s'il ne l'utilise jamais et qu'un voisin a offert un bon prix pour elle au déjeuner hier."],
  ["Maya thinks her old chair is worth more than a better new one just because she has sat in it for years by her desk at home after school.", "Maya pense que sa vieille chaise vaut plus qu'une chaise neuve plus confortable simplement parce qu'elle l'utilise depuis des années a son bureau a la maison apres l ecole."],
  ["Nora will not trade the plain notebook she was given, because it already feels like hers.", "Nora ne veut pas échanger le carnet simple qu'on lui a donné, parce qu'il lui semble déjà être à elle."],
  ["Omar refuses a free upgrade at the store because he likes the cheap gadget he already owns.", "Omar refuse une mise à niveau gratuite en magasin parce qu'il aime le gadget bon marché qu'il possède déjà."],
  ["Priya would rather keep the old lamp she assembled herself than take a nicer one for the same price.", "Priya préfère garder l'ancienne lampe qu'elle a montée elle-même plutôt que d'en prendre une plus jolie au même prix."],
  ["Ben thinks his used soccer ball is special and would not swap it for a better one from the shop.", "Ben pense que son ballon de football usagé est spécial et ne l'échangerait pas contre un meilleur en magasin."],
  ["Ava refuses to sell the concert poster because it was pinned on her wall first.", "Ava refuse de vendre l'affiche du concert parce qu'elle a été accrochée sur son mur en premier."],
  ["Theo insists his old headphones are better than the new pair, even though the new ones sound clearer.", "Theo insiste pour dire que ses vieux écouteurs sont meilleurs que la nouvelle paire, même si les nouveaux sonnent mieux."],
  ["Lina will not part with the coupon booklet she never opens, because it feels like a personal treasure.", "Lina ne veut pas se séparer du carnet de coupons qu'elle n'ouvre jamais, parce qu'il lui semble être un trésor personnel."],
  ["Jules overvalues the glass he painted himself and will not let anyone buy it.", "Jules surestime la valeur du verre qu'il a peint lui-même et ne veut laisser personne l'acheter."],
  ["Rosa rejects a trade for her old backpack because she has carried it to every class.", "Rosa refuse un échange pour son vieux sac à dos parce qu'elle l'a porté à chaque cours."],
  ["Eli says his free kitchen timer is worth more than a digital one simply because he received it as a gift.", "Eli dit que son minuteur de cuisine gratuit vaut plus qu'un minuteur numérique simplement parce qu'il l'a reçu en cadeau."],
  ["Mina will not replace a scratched bottle because it was her first purchase after moving out.", "Mina ne veut pas remplacer une bouteille rayée parce que c'était son premier achat après avoir quitté la maison."],
  ["Noah thinks his souvenir keychain has special value that a new one can never match.", "Noah pense que son porte-clés souvenir a une valeur spéciale qu'un nouveau ne pourra jamais égaler."],
  ["Kim refuses a better desk chair because the old one is 'the chair I started with.'", "Kim refuse une meilleure chaise de bureau parce que l'ancienne est « celle avec laquelle j'ai commencé »."],
  ["Salma will not exchange her plain jacket for a warmer one because she already made memories in it.", "Salma ne veut pas échanger sa veste simple contre une plus chaude parce qu'elle y a déjà fait des souvenirs."],
  ["Hugo overprices the book he borrowed and then bought cheaply at a sale, acting like it is priceless.", "Hugo surévalue le livre qu'il a emprunté puis acheté à bas prix en solde, comme s'il était inestimable."],
  ["Lea believes her battered water bottle should stay with her forever because it survived many trips.", "Lea croit que sa gourde cabossée devrait rester avec elle pour toujours parce qu'elle a survécu à de nombreux trajets."],
  ["Max refuses to upgrade the plain phone case because it is the one he has always used.", "Max refuse de changer la coque de téléphone basique parce que c'est celle qu'il a toujours utilisée."],
  ["Tia will not sell the free desk organizer she never needed, because it is hers now.", "Tia ne veut pas vendre l'organisateur de bureau gratuit dont elle n'avait pas besoin, parce qu'il lui appartient maintenant."],
  ["Paul thinks the hand-me-down bike is worth more than it is because he has repaired it twice.", "Paul pense que le vélo d'occasion vaut plus qu'il ne vaut réellement parce qu'il l'a réparé deux fois."],
  ["Yara keeps the souvenir mug over a newer one since the souvenir feels emotionally loaded.", "Yara garde le mug souvenir plutôt qu'un plus récent, car le souvenir lui paraît chargé émotionnellement."],
  ["Dan would rather keep the cracked tablet than take a newer model, because the old one is already his.", "Dan préfère garder la tablette fissurée plutôt que d'en prendre une plus récente, parce que l'ancienne lui appartient déjà."],
  ["Mina demands too much money for a scratched game controller because she bought it last year.", "Mina demande trop d'argent pour une manette de jeu rayée parce qu'elle l'a achetée l'année dernière."],
  ["Eric says the free tote bag is too special to give away, even though he has five others.", "Eric dit que le sac réutilisable gratuit est trop spécial pour être donné, même s'il en a cinq autres."],
  ["Grace would keep the dull kitchen knife over a sharper one because she is used to the handle.", "Grace garderait le couteau de cuisine émoussé plutôt qu'un plus aiguisé parce qu'elle est habituée au manche."],
  ["Owen thinks the old board game is priceless because it came from his cousin.", "Owen pense que l'ancien jeu de société est inestimable parce qu'il vient de son cousin."],
  ["Mila refuses a better seat cushion because the flat one is the one she already owns.", "Mila refuse un meilleur coussin d'assise parce que le plat est celui qu'elle possède déjà."],
  ["Jin overvalues the plain notebook from orientation because it has his first notes in it.", "Jin surestime la valeur du carnet simple de la rentrée parce qu'il contient ses premières notes."],
  ["Ravi thinks his old sunglasses are worth keeping at any price because he first bought them on vacation.", "Ravi pense que ses vieilles lunettes de soleil valent d'être conservées à tout prix parce qu'il les a achetées pour la première fois en vacances."],
  ["Sofia will not trade the rough scarf for a softer one, because the rough scarf is hers.", "Sofia ne veut pas échanger l'écharpe rugueuse contre une plus douce, parce que l'écharpe rugueuse est à elle."],
  ["Ben says the used backpack should cost extra because he got it before starting college.", "Ben dit que le sac à dos usagé devrait coûter plus cher parce qu'il l'a eu avant de commencer l'université."],
  ["Nora refuses a better desk calendar because the old one already marks her dates.", "Nora refuse un meilleur calendrier de bureau parce que l'ancien marque déjà ses dates."],
  ["Alex believes the chipped mug is more valuable than a pristine one because he drank from it every morning.", "Alex croit que la tasse ébréchée a plus de valeur qu'une tasse impeccable parce qu'il y buvait chaque matin."],
  ["Maya will not switch to a better pair of headphones because the old pair is part of her routine.", "Maya ne veut pas passer à une meilleure paire d'écouteurs parce que l'ancienne fait partie de sa routine."],
  ["Theo refuses a fair trade for the scarf his friend knitted for him.", "Theo refuse un échange équitable pour l'écharpe que son ami lui a tricotée."],
  ["Lina says the old water bottle is 'too mine' to replace, even when the new one is free.", "Lina dit que la vieille gourde est « trop à elle » pour être remplacée, même si la nouvelle est gratuite."],
  ["Omar values the scratched board game more than a new copy simply because it is his copy.", "Omar donne plus de valeur au jeu de société rayé qu'à une nouvelle copie simplement parce que c'est sa copie."],
  ["Priya will not sell the lamp with the crooked shade because it was the first thing she bought for her apartment.", "Priya ne veut pas vendre la lampe à l'abat-jour de travers parce que c'était la première chose qu'elle a achetée pour son appartement."],
  ["Nina keeps a free pen with no ink because she considers it part of her desk set.", "Nina garde un stylo gratuit sans encre parce qu'elle le considère comme faisant partie de son bureau."],
  ["Eli thinks his worn-out shoes deserve a higher resale price because he walked home in them after the rain.", "Eli pense que ses chaussures usées méritent un prix de revente plus élevé parce qu'il est rentré chez lui avec sous la pluie."],
  ["Rosa refuses a better travel mug because the old one has traveled with her on every commute.", "Rosa refuse un meilleur mug de voyage parce que l'ancien l'a accompagnée à chaque trajet."],
  ["Jules insists the used desk plant is worth keeping because he watered it first.", "Jules insiste pour dire que la plante de bureau d'occasion vaut la peine d'être gardée parce qu'il l'a arrosée en premier."],
  ["Ava overestimates the value of her old pen set because it sits in the cup she likes.", "Ava surestime la valeur de son vieux lot de stylos parce qu'il se trouve dans le pot qu'elle aime."],
  ["Noah refuses to swap his cracked lunchbox because it is the one he brought to every shift.", "Noah refuse d'échanger sa boîte à lunch fissurée parce que c'est celle qu'il a apportée à chaque service."],
  ["Kim says the hand-me-down lamp has sentimental value far beyond a newer version.", "Kim dit que la lampe héritée a une valeur sentimentale bien supérieure à celle d'une version plus récente."],
  ["Salma thinks the old mug is superior because it survived one move and one spill.", "Salma pense que l'ancienne tasse est meilleure parce qu'elle a survécu à un déménagement et à un renversement."],
  ["Hugo treats his used notebook as if no amount of replacement offers could match it.", "Hugo traite son carnet usagé comme si aucune offre de remplacement ne pouvait l'égaler."],
  ["Lea will not accept a better keyboard because the current one is already on her desk.", "Lea n'acceptera pas un meilleur clavier parce que l'actuel est déjà sur son bureau."],
  ["Max gives the old headphones a premium price because they were his first big purchase.", "Max donne aux vieux écouteurs un prix premium parce qu'ils ont été son premier gros achat."],
  ["Tia considers the free tote bag valuable just because she chose it from the stack.", "Tia considère le sac gratuit comme précieux simplement parce qu'elle l'a choisi dans la pile."],
  ["Paul refuses to replace the scuffed mug because it has his favorite logo.", "Paul refuse de remplacer la tasse rayée parce qu'elle porte son logo préféré."],
];

const OPTIONS_EN = ['Endowment Effect', 'IKEA Effect', 'Status Quo Bias', 'Sunk Cost Fallacy'];
const OPTIONS_FR = ['Effet de dotation', 'Effet IKEA', 'Biais du statu quo', 'Sophisme des coûts irrécupérables'];

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

export const ENDOWMENT_EFFECT_EXPANSION_EN: Question[] = SCENARIOS.map(([english], index) => {
  const correctIndex = index % 4;
  return {
    id: 37001 + index,
    level: 3,
    persona_stage: PersonaStage.PLANKTON,
    concept: 'Endowment Effect',
    difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Which fallacy or bias is shown here?\n\n"${english}"`,
    options: rotatedOptions(OPTIONS_EN, correctIndex),
    correct_option_index: correctIndex,
    explanation: 'The item is valued more highly simply because the person already owns it or feels attached to it.',
    detailedExplanationBeginner: 'Ownership makes the item feel more valuable.',
    detailedExplanationIntermediate: 'The person overvalues something because it already belongs to them, not because it is objectively better.',
    detailedExplanationExpert: 'This is the endowment effect: people tend to assign extra value to things once they own them. The judgment is driven by ownership and attachment rather than by objective comparison.',
    questionFormat: 'standard'
  };
});

export const ENDOWMENT_EFFECT_EXPANSION_FR: Question[] = SCENARIOS.map(([, french], index) => {
  const correctIndex = index % 4;
  return {
    id: 37001 + index,
    level: 3,
    persona_stage: PersonaStage.PLANKTON,
    concept: 'Effet de dotation',
    difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Quel sophisme ou biais est montré ici ?\n\n"${french}"`,
    options: rotatedOptions(OPTIONS_FR, correctIndex),
    correct_option_index: correctIndex,
    explanation: "L'objet est jugé plus précieux simplement parce que la personne le possède déjà ou y tient.",
    detailedExplanationBeginner: "La possession rend l'objet plus précieux.",
    detailedExplanationIntermediate: "La personne surévalue quelque chose parce que cela lui appartient déjà, et non parce que l'objet est objectivement meilleur.",
    detailedExplanationExpert: "C'est l'effet de dotation : les gens attribuent souvent une valeur supplémentaire aux choses une fois qu'ils les possèdent. Le jugement est guidé par la possession et l'attachement plutôt que par une comparaison objective.",
    questionFormat: 'standard'
  };
});
