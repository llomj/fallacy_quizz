import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['After hearing one new song at a party, Maya starts noticing it in every store and cafe.', "Apres avoir entendu une nouvelle chanson a une fete, Maya la remarque dans chaque magasin et cafe."],
  ['Leo buys a blue jacket and suddenly sees blue jackets on every commute to work.', "Leo achete une veste bleue et voit soudain des vestes bleues a chaque trajet vers le travail."],
  ['Once Priya learns a word from a podcast, she keeps spotting it in books all week.', "Une fois que Priya apprend un mot dans un podcast, elle le repere dans des livres toute la semaine."],
  ['Noah adopts a corgi and feels like every neighbor now owns a corgi too.', "Noah adopte un corgi et a l'impression que tous ses voisins en ont un aussi."],
  ['After buying a green water bottle, Emma notices green bottles everywhere in class.', "Apres avoir achete une gourde verte, Emma remarque des gourdes vertes partout en cours."],
  ['Jules hears a new slang term once and then thinks everyone at school is using it.', "Jules entend une expression d'argot une fois puis croit que tout le monde a l'ecole l'utilise."],
  ['After switching to oat milk, Sofia starts seeing oat milk on every cafe menu.', "Apres etre passee au lait d'avoine, Sofia voit du lait d'avoine sur tous les menus de cafe."],
  ['Ben notices one biker with a matching helmet and then feels like every biker has one.', "Ben remarque un cycliste avec un casque assorti puis a l'impression que tous les cyclistes en ont un."],
  ['After hearing about a local bakery, Tia thinks the bakery suddenly appears on every corner.', "Apres avoir entendu parler d'une boulangerie locale, Tia croit qu'elle apparait soudain a tous les coins de rue."],
  ['Kai learns the name "Ari" and then keeps hearing it at playgrounds and in ads.', "Kai apprend le prenom « Ari » puis l'entend sans cesse dans les parcs et les pubs."],
  ['After getting a smartwatch, Lila notices smartwatches on every wrist at the gym.', "Apres avoir achete une montre connectee, Lila remarque des montres connectees a chaque poignet a la salle de sport."],
  ['Omar reads about a rare plant and starts seeing that plant in every window display.', "Omar lit au sujet d'une plante rare et commence a la voir dans chaque vitrine."],
  ['Once Hana joins a chess club, she feels like everyone suddenly plays chess.', "Une fois qu'Hana rejoint un club d'echecs, elle a l'impression que tout le monde joue soudain aux echecs."],
  ['After buying a red backpack, Max feels like every student now carries the same backpack.', "Apres avoir achete un sac a dos rouge, Max a l'impression que tous les eleves portent le meme."],
  ['Nina learns about a hiking trail and then sees signs for that trail in every outdoor store.', "Nina apprend l'existence d'un sentier de randonnee et voit ensuite ce sentier dans chaque magasin de plein air."],
  ['After hearing a new coffee order, Eli thinks the order is suddenly everywhere.', "Apres avoir entendu une nouvelle commande de cafe, Eli croit qu'elle est soudain partout."],
  ['Zara buys a raincoat and then notices raincoats on every bus seat.', "Zara achete un impermeable et remarque ensuite des impermeables sur tous les sieges du bus."],
  ['After seeing one video on sourdough, Owen feels like everyone is baking sourdough now.', "Apres avoir vu une video sur le pain au levain, Owen a l'impression que tout le monde en fait maintenant."],
  ['Mina hears a new celebrity name once and then spots it in headlines all day.', "Mina entend un nouveau nom de celebrita une fois puis le voit dans les titres toute la journee."],
  ['After buying running shoes, Drew starts noticing that same shoe model everywhere on the street.', "Apres avoir achete des chaussures de course, Drew remarque ce meme modele partout dans la rue."],
  ['Pia learns the phrase "quiet quitting" and then hears it in every office conversation.', "Pia apprend l'expression « quiet quitting » puis l'entend dans chaque conversation de bureau."],
  ['After getting a cat, Theo feels like every friend has also become a cat person.', "Apres avoir pris un chat, Theo a l'impression que tous ses amis sont aussi devenus des amoureux des chats."],
  ['Rita hears one ad for a meal kit and then notices meal kit ads everywhere online.', "Rita entend une pub pour un kit repas puis remarque des pubs de kits repas partout en ligne."],
  ['After learning about a new board game, Finn keeps seeing that game in stores and videos.', "Apres avoir decouvert un nouveau jeu de societe, Finn le voit partout en magasin et en video."],
  ['Maya sees one person wearing the same sneakers she bought and suddenly notices them on every block.', "Maya voit une personne portant les memes baskets qu'elle a achetees puis les remarque a chaque coin de rue."],
  ['After planting basil, Noah thinks basil plants are suddenly in every kitchen window.', "Apres avoir plante du basilic, Noah pense que les plants de basilic sont soudain dans toutes les fenetres de cuisine."],
  ['Lea hears a new podcast name once and then hears it mentioned in every chat.', "Lea entend un nouveau nom de podcast une fois puis l'entend cite dans toutes les conversations."],
  ['After buying a yellow umbrella, Jules notices yellow umbrellas on every rainy street.', "Apres avoir achete un parapluie jaune, Jules remarque des parapluies jaunes sur chaque rue mouillee."],
  ['Ava learns a new recipe and then thinks everyone is posting that recipe online.', "Ava apprend une nouvelle recette et croit ensuite que tout le monde la publie en ligne."],
  ['After hearing about a nearby museum exhibit, Sam feels like the exhibit is being advertised everywhere.', "Apres avoir entendu parler d'une exposition de musee proche, Sam a l'impression qu'elle est annoncee partout."],
  ['Iris buys a refillable bottle and then sees the exact bottle on every desk.', "Iris achete une bouteille reutilisable puis voit la meme bouteille sur chaque bureau."],
  ['After reading about a bird call, Jonah starts hearing that bird call on every walk.', "Apres avoir lu sur le chant d'un oiseau, Jonah commence a l'entendre a chaque promenade."],
  ['Tara hears a new nickname once and suddenly thinks everyone is using it.', "Tara entend un nouveau surnom une fois et pense soudain que tout le monde l'utilise."],
  ['After getting a haircut, Cole notices the same haircut on everyone in the train car.', "Apres s'etre fait couper les cheveux, Cole remarque la meme coupe sur tout le monde dans le train."],
  ['Nora learns about a neighborhood festival and then sees flyers for it on every pole.', "Nora apprend l'existence d'un festival de quartier puis voit des affiches partout sur les poteaux."],
  ['After buying a notebook with a fox on it, Lio keeps spotting fox designs everywhere.', "Apres avoir achete un carnet avec un renard dessus, Lio voit des motifs de renard partout."],
  ['Mila hears one mention of a train line and then thinks everyone rides that line.', "Mila entend une fois parler d'une ligne de train puis croit que tout le monde la prend."],
  ['After trying a new snack, Ezra starts seeing the same snack at every checkout counter.', "Apres avoir essaye un nouveau snack, Ezra voit ce meme snack a chaque caisse."],
  ['Penny buys a plant stand and then notices plant stands in every home photo.', "Penny achete un support pour plante puis remarque des supports a plantes dans chaque photo de maison."],
  ['After hearing about a charity shirt, Alex feels like half the town owns the shirt.', "Apres avoir entendu parler d'un t-shirt caritatif, Alex a l'impression que la moitie de la ville le possede."],
  ['Sami learns a new app name and then keeps noticing it in articles and podcasts.', "Sami apprend le nom d'une nouvelle application puis le remarque sans cesse dans les articles et podcasts."],
  ['After seeing one cloud shaped like a dragon, Olivia starts spotting dragons in every cloud.', "Apres avoir vu un nuage en forme de dragon, Olivia commence a voir des dragons dans chaque nuage."],
  ['Grant buys a reusable lunch container and then sees the same container in office kitchens.', "Grant achete un contenant a repas reutilisable puis voit le meme dans les cuisines de bureau."],
  ['After hearing a new hairstyle name, Bea thinks every salon is offering it.', "Apres avoir entendu le nom d'une nouvelle coiffure, Bea pense que tous les salons la proposent."],
  ['Dylan reads one article about a book genre and then sees that genre everywhere online.', "Dylan lit un article sur un genre de livres puis voit ce genre partout en ligne."],
  ['After buying a striped towel, Kira notices striped towels at every pool.', "Apres avoir achete une serviette rayee, Kira remarque des serviettes rayees a chaque piscine."],
  ['Milo learns about a local volunteer group and then notices their shirts all over town.', "Milo apprend l'existence d'un groupe de benevoles local puis remarque leurs t-shirts partout en ville."],
  ['After hearing a new coffee roast name, Juno starts seeing that roast on every shelf.', "Apres avoir entendu le nom d'une nouvelle torréfaction de cafe, Juno la voit sur chaque etagere."],
  ['After buying a yellow notebook, Quinn suddenly notices yellow notebooks in every classroom photo online.', 'Apres avoir achete un carnet jaune, Quinn remarque soudain des carnets jaunes dans chaque photo de classe en ligne.'],
  ['Lena hears a new neighborhood cafe name once and then spots it on every delivery bike in town.', "Lena entend une fois le nom d'un nouveau cafe de quartier puis le voit sur chaque velo de livraison en ville."],
  ['After reading about a type of mushroom, Ben starts noticing that mushroom in grocery ads and cooking shows.', "Apres avoir lu sur un type de champignon, Ben commence a le remarquer dans les pubs d epicerie et les emissions de cuisine."],
  ['Tara buys a striped tote bag and then feels like every commuter has the same bag on the train.', "Tara achete un sac cabas raye et a l impression que tous les usagers du train ont le meme sac."],
  ['After hearing one comedian mention "rest days", Omar thinks every fitness post is talking about rest days.', 'Apres avoir entendu un comedien parler de « jours de repos », Omar pense que chaque publication sportive parle de jours de repos.'],
  ['Mina learns a new plant name and then sees it written on signs, labels, and receipts all week.', "Mina apprend un nouveau nom de plante puis le voit ecrit sur des panneaux, des etiquettes et des tickets toute la semaine."],
  ['After trying a cinnamon latte, Ava notices cinnamon lattes on every menu board she passes.', 'Apres avoir essaye un latte a la cannelle, Ava remarque des lattes a la cannelle sur chaque tableau de menu qu elle croise.'],
  ['Jules hears a new gaming term once and then keeps hearing it in every livestream chat.', "Jules entend une fois un nouveau terme de jeu puis le reentend dans chaque chat de diffusion en direct."],
  ['After buying a white lamp, Iris starts seeing white lamps in apartment ads everywhere.', "Apres avoir achete une lampe blanche, Iris commence a voir des lampes blanches partout dans les annonces d appartement."],
  ['Theo reads one article about electric bikes and then feels like every street now has one.', "Theo lit un article sur les velos electriques puis a l impression que chaque rue en a un maintenant."],
  ['After hearing a new band name, Nora notices posters for that band in every cafe window.', "Apres avoir entendu le nom d un nouveau groupe, Nora remarque des affiches de ce groupe dans chaque vitrine de cafe."],
  ['After buying a travel mug, Sam keeps spotting the exact same mug in office kitchens and train cars.', "Apres avoir achete un mug de voyage, Sam ne cesse de voir le meme mug dans les cuisines de bureau et les wagons de train."],
  ['Once Lina tries a lemon cake, she suddenly notices lemon cake on every bakery shelf.', "Une fois que Lina essaie un gateau au citron, elle remarque soudain du gateau au citron sur chaque etagere de boulangerie."],
  ['After hearing about a dog breed, Omar starts seeing that breed at every park walk.', "Apres avoir entendu parler d une race de chien, Omar commence a voir cette race a chaque promenade au parc."],
  ['Maya gets into birdwatching and then feels like every tree branch has the same bird on it.', "Maya se met a observer les oiseaux puis a l impression que chaque branche porte le meme oiseau."],
  ['After one friend mentions a podcast, Priya hears that podcast name in cars, shops, and headlines all day.', "Apres qu une amie mentionne un podcast, Priya entend son nom dans les voitures, les magasins et les titres toute la journee."],
  ['Ben buys a black notebook and then notices black notebooks in every meeting and lecture.', "Ben achete un carnet noir puis remarque des carnets noirs dans chaque reunion et chaque cours."],
  ['After reading one article on sour candy, Tia feels like every checkout aisle has sour candy now.', "Apres avoir lu un article sur les bonbons acidules, Tia a l impression que chaque caisse en propose maintenant."],
  ['Jin hears a new street food name once and then keeps spotting it on menus all over town.', "Jin entend une fois le nom d un nouveau plat de rue puis le voit partout sur les menus en ville."],
  ['After getting a green mug, Rosa suddenly notices green mugs in every office photo online.', "Apres avoir achete une tasse verte, Rosa remarque soudain des tasses vertes dans chaque photo de bureau en ligne."],
  ['Luca learns a new bike brand and then thinks every rider on the road is using it.', "Luca apprend le nom d une nouvelle marque de velo et pense ensuite que tous les cyclistes l utilisent."],
  ['Mila hears one mention of a neighborhood dog walker and then notices dog walkers on every street.', "Mila entend une fois parler d un promeneur de chien du quartier puis remarque des promeneurs de chien dans chaque rue."],
  ['After learning a new tea brand, Owen starts spotting that brand on every office shelf.', "Apres avoir appris le nom d une nouvelle marque de the, Owen commence a la reperer sur chaque etagere de bureau."],
  ['Priya buys a purple pen and then thinks every meeting room has the same pen.', "Priya achete un stylo violet puis pense que chaque salle de reunion a le meme stylo."],
  ['After hearing about a local ramen shop, Ben feels like ramen shops are on every corner.', "Apres avoir entendu parler d un restaurant de ramen local, Ben a l impression que les ramen sont a chaque coin de rue."],
  ['Tara reads one post about sourdough starters and then sees them mentioned in every cooking chat.', "Tara lit une publication sur les levains puis les voit mentionnes dans chaque discussion de cuisine."],
  ['After buying a white sneaker, Jules starts noticing white sneakers on every train platform.', "Apres avoir achete une basket blanche, Jules commence a remarquer des baskets blanches sur chaque quai de train."],
  ['Ava learns a new author name and then keeps seeing it in bookshop windows.', "Ava apprend le nom d un nouvel auteur puis le voit sans cesse dans les vitrines des librairies."],
  ['After hearing a new coffee roast name, Theo feels like every cafe board lists it.', "Apres avoir entendu le nom d une nouvelle torréfaction de cafe, Theo a l impression que tous les tableaux de cafe la listent."],
  ['Nina gets a yellow phone case and then thinks every student has the same case.', "Nina achete une coque de telephone jaune puis pense que chaque etudiant a la meme coque."],
  ['After discovering a new hiking app, Eli notices its logo on every ad he scrolls past.', "Apres avoir decouvert une nouvelle application de randonnee, Eli remarque son logo sur chaque pub qu il fait defiler."],
  ['Rita learns one song lyric and then hears it quoted in every group chat.', "Rita apprend une parole de chanson puis l entend citer dans chaque discussion de groupe."],
  ['After buying a blue notebook, Noah suddenly notices blue notebooks in every lecture hall.', "Apres avoir achete un carnet bleu, Noah remarque soudain des carnets bleus dans chaque amphitheatre."],
  ['Zoe hears about a new salad place and then thinks every lunch crowd is talking about salads.', "Zoe entend parler d un nouveau restaurant de salades puis pense que chaque groupe de midi parle de salades."],
  ['After trying a cinnamon cookie, Cole starts seeing cinnamon cookies on every dessert menu.', "Apres avoir essaye un biscuit a la cannelle, Cole commence a voir des biscuits a la cannelle sur chaque menu de dessert."],
  ['Maya reads one article about compact cameras and then sees compact cameras in every camera store.', "Maya lit un article sur les appareils photo compacts puis voit des appareils photo compacts dans chaque magasin photo."],
  ['After hearing a coworker mention a standing desk, Grant notices standing desks in every office ad.', "Apres avoir entendu un collegue parler d un bureau debout, Grant remarque des bureaux debout dans chaque pub de bureau."],
  ['Lina gets a red scarf and then feels like everyone on the bus is wearing a red scarf.', "Lina achete une echarpe rouge puis a l impression que tout le monde dans le bus porte une echarpe rouge."],
  ['After learning a new dog trick, Jasper keeps seeing videos of that trick all day.', "Apres avoir appris un nouveau tour de chien, Jasper ne cesse de voir des videos de ce tour toute la journee."],
  ['Pia hears one friend talk about a matcha latte and then notices matcha lattes on every counter.', "Pia entend une amie parler d un matcha latte puis remarque des matcha lattes sur chaque comptoir."],
  ['After buying a black water bottle, Maya thinks black water bottles are suddenly the default everywhere.', "Apres avoir achete une gourde noire, Maya pense que les gourdes noires sont soudain partout."],
  ['Omar learns a new game title and then sees it mentioned in every streaming clip.', "Omar apprend le titre d un nouveau jeu puis le voit mentionne dans chaque extrait de streaming."],
  ['After hearing a new neighborhood pizza place name once, Lena notices it on every food delivery flyer.', "Apres avoir entendu une fois le nom d une nouvelle pizzeria de quartier, Lena le remarque sur chaque flyer de livraison."],
  ['Finn buys a striped mug and then starts spotting striped mugs in every office kitchen.', "Finn achete une tasse rayee puis commence a reperer des tasses rayees dans chaque cuisine de bureau."],
  ['After reading about a new coding framework, Iris sees it in every tech article headline.', "Apres avoir lu sur un nouveau framework de code, Iris le voit dans chaque titre d article technique."],
  ['Dylan learns a new fitness class name and then thinks every gym poster is advertising it.', "Dylan apprend le nom d un nouveau cours de fitness puis pense que chaque affiche de salle de sport en fait la pub."],
  ['After trying a plum tart, Tia notices plum tarts in every bakery window.', "Apres avoir essaye une tarte aux prunes, Tia remarque des tartes aux prunes dans chaque vitrine de boulangerie."],
  ['Jules hears one mention of a green backpack and then sees green backpacks in every hallway.', "Jules entend une fois parler d un sac a dos vert puis voit des sacs a dos verts dans chaque couloir."],
  ['After buying a desk calendar, Sam notices desk calendars on every coworker’s desk.', "Apres avoir achete un calendrier de bureau, Sam remarque des calendriers de bureau sur le bureau de chaque collegue."],
  ['Rosa learns about a new art exhibit and then feels like every poster in town is about it.', "Rosa apprend l existence d une nouvelle exposition d art puis a l impression que chaque affiche en ville parle d elle."],
  ['After hearing a single mention of a curry place, Ben starts seeing curry ads on every app.', "Apres avoir entendu une seule fois parler d un restaurant de curry, Ben commence a voir des pubs de curry sur chaque application."],
  ['Ari buys a silver notebook and then thinks every student has the same silver notebook.', "Ari achete un carnet argenté puis pense que chaque etudiant a le meme carnet argenté."]
];

const OPTIONS_EN = ['Frequency Illusion', 'Confirmation Bias', 'Availability Heuristic', 'Apophenia'];
const OPTIONS_FR = ['Illusion de fréquence', 'Biais de confirmation', 'Heuristique de disponibilité', 'Apophénie'];

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
      id: 34901 + i,
      level: 4,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Illusion de fréquence' : 'Frequency Illusion',
      difficulty: i < 43 ? 1 : i < 50 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? 'Le fait de remarquer quelque chose une premiere fois le fait paraitre plus frequent, meme si la frequence n a pas change.'
        : 'Noticing something for the first time makes it feel more common, even when the actual frequency has not changed.',
      detailedExplanationBeginner: fr
        ? 'Une nouvelle chose attire votre attention et semble partout.'
        : 'A new thing grabs your attention and suddenly seems everywhere.',
      detailedExplanationIntermediate: fr
        ? "L'illusion de frequence arrive quand un element recemment remarque parait revenir sans cesse parce que votre attention est maintenant reglee dessus."
        : 'The frequency illusion happens when a recently noticed thing seems to keep reappearing because your attention is now tuned to it.',
      detailedExplanationExpert: fr
        ? "Ce biais de selection perceptive ne change pas le monde observe; il change surtout ce que le cerveau filtre, retient et reconstruit apres un nouvel apprentissage."
        : 'This perceptual selection bias does not change the world; it mainly changes what the brain filters, stores, and reconstructs after new learning.',
      questionFormat: 'standard',
    };
  });
}

export const FREQUENCY_ILLUSION_EXPANSION_EN: Question[] = make();
export const FREQUENCY_ILLUSION_EXPANSION_FR: Question[] = make(true);
