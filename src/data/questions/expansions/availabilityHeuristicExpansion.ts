import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["After hearing one story about a missed train, Jules assumes every trip is a disaster and starts packing snacks for three days before leaving home.", "Apres avoir entendu une histoire de train manque, Jules suppose que chaque trajet est un desastre et commence a preparer des collations pour trois jours avant de quitter la maison."],
  ["A bad news clip makes Nina think the whole city is unsafe, even though she has only visited the airport gift shop and taxi stand.", "Un extrait d'actualites inquietant fait penser a Nina que toute la ville est dangereuse, alors qu'elle n'a visite que la boutique de souvenirs de l'aeroport et la station de taxis."],
  ["Milo saw two dog bites on social media and now assumes every dog is aggressive.", "Milo a vu deux morsures de chien sur les reseaux sociaux et suppose maintenant que tous les chiens sont agressifs."],
  ["Because her uncle had car trouble last winter, Sana thinks every electric car is unreliable.", "Parce que son oncle a eu une panne de voiture l'hiver dernier, Sana pense que toutes les voitures electriques sont peu fiables."],
  ["Theo remembers one expensive restaurant mistake and decides all restaurants downtown are overpriced.", "Theo se souvient d'une seule mauvaise note au restaurant et decide que tous les restaurants du centre-ville sont hors de prix."],
  ["After one loud thunderstorm, Priya believes this summer will be full of storms.", "Apres un seul orage violent, Priya croit que cet ete sera rempli d'orages."],
  ["A viral video of a rude cashier makes Ben think every cashier is rude.", "Une video virale d'un caissier impoli fait penser a Ben que tous les caissiers sont impolis."],
  ["After one classmate failed a group project, Ava assumes group work always goes badly.", "Apres l'echec d'un camarade dans un travail de groupe, Ava suppose que le travail en equipe se passe toujours mal."],
  ["Omar hears one story about a scam and now distrusts every online seller.", "Omar entend une histoire d'arnaque et se mefie maintenant de tous les vendeurs en ligne."],
  ["Because one medicine gave her headache, Lila says all medicine causes headaches.", "Parce qu'un medicament lui a donne mal a la tete, Lila dit que tous les medicaments donnent mal a la tete."],
  ["A friend had one bad bus ride, so Kai thinks public transit is always late.", "Un ami a eu un mauvais trajet en bus, alors Kai pense que les transports publics sont toujours en retard."],
  ["After one famous athlete was caught cheating, Marco thinks every athlete cheats.", "Apres qu'un athlete celebre a ete pris en train de tricher, Marco pense que tous les athletes trichent."],
  ["Zoe remembers one awkward speech and assumes she is terrible at public speaking.", "Zoe se souvient d'un seul discours genant et suppose qu'elle est nulle a l'oral."],
  ["A single bad camping trip makes Leo think camping is always miserable.", "Un seul mauvais sejour en camping fait penser a Leo que le camping est toujours penible."],
  ["Because one neighbor's cat scratched him, Aria thinks all cats are mean.", "Parce qu'un chat du voisin l'a griffe, Aria pense que tous les chats sont mechants."],
  ["After one difficult algebra test, Sam assumes math class will always be impossible.", "Apres un test d'algebre difficile, Sam suppose que le cours de maths sera toujours impossible."],
  ["A noisy concert last year makes Dana think every concert will be overwhelming.", "Un concert bruyant l'annee derniere fait penser a Dana que tous les concerts seront epuisants."],
  ["A doctor mentions a rare side effect, and Eli starts believing the treatment is unsafe for everyone.", "Un medecin mentionne un effet secondaire rare et Eli commence a croire que le traitement est dangereux pour tout le monde."],
  ["After seeing one kitchen fire on the news, Rina treats all cooking as risky.", "Apres avoir vu un incendie de cuisine aux informations, Rina considere que cuisiner est dangereux."],
  ["A single rude email makes Noor think the whole company has a toxic culture.", "Un seul e-mail impoli fait penser a Noor que toute l'entreprise a une culture toxique."],
  ["Because her cousin got lost on a trail, Hana assumes all hiking trails are confusing.", "Parce que sa cousine s'est perdue sur un sentier, Hana suppose que tous les sentiers de randonnee sont confus."],
  ["One bad haircut convinces Owen that every barber is bad.", "Une seule mauvaise coupe convainc Owen que tous les coiffeurs sont mauvais."],
  ["After one nightmare about snakes, Mia believes snakes are always dangerous.", "Apres un cauchemar avec des serpents, Mia croit que les serpents sont toujours dangereux."],
  ["A loud story about a bike crash makes Tariq think cycling is more dangerous than driving.", "Une histoire spectaculaire d'accident de velo fait penser a Tariq que le velo est plus dangereux que la voiture."],
  ["Because the last online order arrived late, June assumes all delivery apps are slow.", "Parce que sa derniere commande en ligne est arrivee en retard, June suppose que toutes les applications de livraison sont lentes."],
  ["A neighbor once had mold in the basement, so Felix thinks every old house has mold.", "Un voisin a deja eu de la moisissure au sous-sol, alors Felix pense que toutes les vieilles maisons en ont."],
  ["After one awkward date, Elsa decides dating apps are a waste of time.", "Apres un rendez-vous genant, Elsa decide que les applications de rencontre sont une perte de temps."],
  ["One dramatic story about a shark makes Victor think every beach is unsafe.", "Une histoire spectaculaire de requin fait penser a Victor que toutes les plages sont dangereuses."],
  ["Because his friend lost money on crypto, Noah thinks every investment is a scam.", "Parce que son ami a perdu de l'argent en crypto, Noah pense que tout investissement est une arnaque."],
  ["A single bad flight meal makes Imani say airline food is always terrible.", "Un seul mauvais repas en avion fait dire a Imani que la nourriture des compagnies aeriennes est toujours terrible."],
  ["After hearing one bad review, Paula assumes the whole movie is awful.", "Apres avoir entendu un seul mauvais avis, Paula suppose que tout le film est nul."],
  ["A minor fall at the gym makes Chris think exercise is unsafe.", "Une petite chute a la salle fait penser a Chris que le sport est dangereux."],
  ["Because one teacher was unfair, Jade believes all teachers are unfair.", "Parce qu'un professeur a ete injuste, Jade croit que tous les professeurs sont injustes."],
  ["A headline about one allergic reaction makes Ben assume the snack is risky for everyone.", "Un titre parlant d'une reaction allergique fait supposer a Ben que l'en-cas est risque pour tout le monde."],
  ["After a single bad camping weather report, Nora cancels every outdoor plan.", "Apres un seul bulletin meteo defavorable pour le camping, Nora annule tous les projets en plein air."],
  ["One story about a noisy roommate makes Ethan think apartment living is impossible.", "Une histoire de colocataire bruyant fait penser a Ethan que vivre en appartement est impossible."],
  ["Because one app crashed, Sora thinks the phone brand is unreliable.", "Parce qu'une application a plante, Sora pense que la marque du telephone est peu fiable."],
  ["A cousin once got sunburned, so Lina says every sunny day is dangerous.", "Une cousine a deja pris un coup de soleil, alors Lina dit que chaque jour de soleil est dangereux."],
  ["After one bad hotel stay, Amir assumes all hotels are dirty.", "Apres un seul mauvais sejour a l'hotel, Amir suppose que tous les hotels sont sales."],
  ["A friend saw one thief on a train and now avoids trains entirely.", "Un ami a vu un voleur dans un train et evite maintenant tous les trains."],
  ["Because a single class poll was negative, Quinn thinks nobody likes the new rule.", "Parce qu'un seul sondage de classe etait negatif, Quinn pense que personne n'aime la nouvelle regle."],
  ["A scary article about one dog attack makes Rosa distrust every neighborhood dog.", "Un article alarmant sur une attaque de chien fait que Rosa se mefie de tous les chiens du quartier."],
  ["After one bad coffee, Malik says all coffee tastes burnt.", "Apres un seul mauvais cafe, Malik dit que tout le cafe a un gout de brule."],
  ["A cousin's one bad haircut makes Erin think salons are a gamble.", "La mauvaise coupe d'un cousin fait penser a Erin que les salons de coiffure sont un pari."],
  ["Because a storm caused one outage, Grant assumes the power grid is always fragile.", "Parce qu'un orage a provoque une panne, Grant suppose que le reseau electrique est toujours fragile."],
  ["After hearing one story about a bad landlord, Tia believes every rental is a trap.", "Apres avoir entendu une histoire de mauvais proprietaire, Tia croit que toute location est un piege."],
  ["A single bad test run makes Cole think the new software is doomed.", "Un seul test rate fait penser a Cole que le nouveau logiciel est condamne."],
  ["Because one relative got lost abroad, Yara assumes travel is too risky.", "Parce qu'un proche s'est perdu a l'etranger, Yara suppose que voyager est trop risque."],
  ["A dramatic clip of one kitchen accident makes Hugo fear every knife.", "Un extrait dramatique d'accident de cuisine fait craindre a Hugo tous les couteaux."],
  ["After one bad supermarket coupon error, Petra thinks every self-checkout machine is broken.", "Apres une seule erreur de coupon au supermarche, Petra pense que toutes les bornes de caisse automatique sont cassees."],
  ["Maya remembers one plane delay and now expects every flight to be late.", "Maya se souvient d'un seul retard d'avion et s'attend maintenant à ce que tous les vols soient en retard."],
  ["Theo sees one post about a scam and starts distrusting every online seller.", "Theo voit une publication sur une arnaque et commence à se méfier de tous les vendeurs en ligne."],
  ["Nina hears one bad story about a dog and assumes every dog is dangerous.", "Nina entend une seule mauvaise histoire de chien et suppose que tous les chiens sont dangereux."],
  ["Ben watches one video of a food allergy and thinks all snacks are risky.", "Ben regarde une vidéo sur une allergie alimentaire et pense que tous les en-cas sont risqués."],
  ["Omar experiences one rude cashier and now expects bad service everywhere.", "Omar vit l'expérience d'un seul caissier impoli et attend maintenant un mauvais service partout."],
  ["Priya reads one storm warning and cancels every outdoor plan for the month.", "Priya lit un seul avertissement de tempête et annule tous les projets extérieurs du mois."],
  ["Leo hears one story about a bad landlord and assumes every landlord is awful.", "Leo entend une seule histoire de mauvais propriétaire et suppose que tous les propriétaires sont horribles."],
  ["Rina sees one meme about a failed app update and treats every update as a disaster.", "Rina voit un mème sur une mise à jour ratée et considère chaque mise à jour comme un désastre."],
  ["Jules remembers one embarrassing speech and now avoids speaking at all.", "Jules se souvient d'un seul discours gênant et évite maintenant de parler du tout."],
  ["Ava watches one scary clip about a bicycle crash and decides cycling is always unsafe.", "Ava regarde un clip effrayant sur un accident de vélo et décide que le vélo est toujours dangereux."],
  ["Maya hears one story about a shoplifting arrest and thinks every store is full of thieves.", "Maya entend une histoire d'arrestation pour vol à l'étalage et pense que tous les magasins sont remplis de voleurs."],
  ["Leo sees one viral clip of a bad flight and now expects every plane ride to be awful.", "Leo voit un clip viral sur un mauvais vol et s'attend maintenant à ce que chaque trajet en avion soit horrible."],
  ["Nina remembers one rude waiter and assumes every restaurant has terrible service.", "Nina se souvient d'un seul serveur impoli et suppose que tous les restaurants ont un service terrible."],
  ["Owen watched one video of a car fire and now thinks every car is a fire hazard.", "Owen a regardé une vidéo d'une voiture en feu et pense maintenant que chaque voiture est un danger d'incendie."],
  ["Priya sees one post about a bad landlord and decides renting is always a trap.", "Priya voit une publication sur un mauvais propriétaire et décide que louer est toujours un piège."],
  ["Ben hears one scary story about a dog bite and now avoids every dog in the neighborhood.", "Ben entend une histoire effrayante de morsure de chien et évite maintenant tous les chiens du quartier."],
  ["Tara saw one comment about a broken phone and assumes that brand is unreliable.", "Tara a vu un commentaire sur un téléphone cassé et suppose que cette marque est peu fiable."],
  ["Kai remembers one awkward presentation and thinks public speaking is impossible.", "Kai se souvient d'une présentation gênante et pense que parler en public est impossible."],
  ["Jules hears one podcast episode about a scam and becomes suspicious of every online seller.", "Jules écoute un épisode de podcast sur une arnaque et devient méfiant envers tous les vendeurs en ligne."],
  ["Ava read one headline about a kitchen fire and now treats all cooking as risky.", "Ava a lu un titre sur un incendie de cuisine et considère maintenant que cuisiner est risqué."],
  ["Noah watched one clip of a rough camping trip and now thinks camping is always miserable.", "Noah a regardé un clip sur un séjour de camping difficile et pense maintenant que le camping est toujours pénible."],
  ["Mina saw one post about a late package and now expects every delivery to be slow.", "Mina a vu une publication sur un colis en retard et s'attend maintenant à ce que chaque livraison soit lente."],
  ["Eli heard one story about a bad exam and now assumes math class is a nightmare.", "Eli a entendu une histoire sur un mauvais examen et suppose maintenant que le cours de maths est un cauchemar."],
  ["Rina remembers one bad haircut and now distrusts every salon.", "Rina se souvient d'une seule mauvaise coupe et se méfie maintenant de tous les salons."],
  ["Hugo saw one dramatic clip about a shark and now thinks every beach is dangerous.", "Hugo a vu un clip spectaculaire sur un requin et pense maintenant que chaque plage est dangereuse."],
  ["Lina hears one rumor about a toxic office and now expects every workplace to be awful.", "Lina entend une rumeur sur un bureau toxique et s'attend maintenant à ce que chaque lieu de travail soit horrible."],
  ["Grant saw one photo of a messy apartment and now assumes apartment living is impossible.", "Grant a vu une photo d'un appartement en désordre et suppose maintenant que vivre en appartement est impossible."],
  ["Zoe remembers one bad coffee and now thinks all coffee tastes burnt.", "Zoe se souvient d'un seul mauvais café et pense maintenant que tout le café a un goût de brûlé."],
  ["Milo saw one story about a rude cashier and now expects every cashier to be rude.", "Milo a vu une histoire sur un caissier impoli et s'attend maintenant à ce que chaque caissier soit impoli."],
  ["Theo heard one account of a lost wallet and now thinks trains are unsafe.", "Theo a entendu un récit de portefeuille perdu et pense maintenant que les trains sont dangereux."],
  ["Pia watched one video of a bad dog chase and now distrusts every dog.", "Pia a regardé une vidéo d'une mauvaise poursuite par un chien et se méfie maintenant de tous les chiens."],
  ["Finn saw one post about a failed app update and now distrusts every software update.", "Finn a vu une publication sur une mise à jour d'application ratée et se méfie maintenant de chaque mise à jour logicielle."],
  ["Maya remembers one storm delay and now expects every flight to be late.", "Maya se souvient d'un seul retard dû à une tempête et s'attend maintenant à ce que chaque vol soit en retard."],
  ["Sam heard one story about a bad landlord and now assumes all rentals are traps.", "Sam a entendu une histoire de mauvais propriétaire et suppose maintenant que toutes les locations sont des pièges."],
  ["Juno read one scary article about a bike crash and now feels cycling is unsafe.", "Juno a lu un article effrayant sur un accident de vélo et pense maintenant que faire du vélo est dangereux."],
  ["Iris saw one viral clip of a failed product and now assumes the whole brand is bad.", "Iris a vu un clip viral d'un produit raté et suppose maintenant que toute la marque est mauvaise."],
  ["Cole heard one story about a bad school rule and now thinks all rules are useless.", "Cole a entendu une histoire de mauvaise règle scolaire et pense maintenant que toutes les règles sont inutiles."],
  ["Nora remembers one loud neighbor and now thinks apartment living is always noisy.", "Nora se souvient d'un seul voisin bruyant et pense maintenant que vivre en appartement est toujours bruyant."],
  ["Ari watched one clip of a bad restaurant service and now avoids restaurants downtown.", "Ari a regardé un clip sur un mauvais service de restaurant et évite maintenant les restaurants du centre-ville."],
  ["Rita saw one allergic reaction video and now treats every snack as dangerous.", "Rita a vu une vidéo de réaction allergique et considère maintenant chaque collation comme dangereuse."],
  ["Tia heard one bad story about a used car and now thinks every used car is broken.", "Tia a entendu une mauvaise histoire sur une voiture d'occasion et pense maintenant que toutes les voitures d'occasion sont cassées."],
  ["Oli saw one messy group project and now assumes teamwork always fails.", "Oli a vu un projet de groupe en désordre et suppose maintenant que le travail d'équipe échoue toujours."],
  ["Lara remembers one awful hotel stay and now thinks all hotels are dirty.", "Lara se souvient d'un seul séjour horrible à l'hôtel et pense maintenant que tous les hôtels sont sales."],
  ["Ben heard one scam story and now distrusts every email.", "Ben a entendu une histoire d'arnaque et se méfie maintenant de tous les courriels."],
  ["Mina saw one dramatic kitchen accident and now fears every knife.", "Mina a vu un accident de cuisine dramatique et craint maintenant tous les couteaux."],
  ["Drew watched one bad flight and now expects every airline to disappoint him.", "Drew a regardé un mauvais vol et s'attend maintenant à ce que chaque compagnie aérienne le déçoive."],
  ["Jade heard one story about a rough campsite and now thinks all camping trips are disasters.", "Jade a entendu une histoire de camping difficile et pense maintenant que tous les séjours en camping sont des désastres."],
  ["Owen saw one video of a failed makeover and now assumes salons cannot be trusted.", "Owen a vu une vidéo d'une transformation ratée et suppose maintenant qu'on ne peut pas faire confiance aux salons."],
  ["Mila read one post about a hacked account and now treats every app as unsafe.", "Mila a lu une publication sur un compte piraté et considère maintenant chaque application comme dangereuse."],
  ["Evan heard one story about a rude teacher and now thinks all teachers are unfair.", "Evan a entendu une histoire de professeur impoli et pense maintenant que tous les professeurs sont injustes."],
];

const EN = ['Availability Heuristic', 'Bias Blind Spot', 'Base Rate Fallacy', 'Confirmation Bias'];
const FR = ['Heuristique de disponibilité', 'Angle mort du biais', 'Negligence du taux de base', 'Biais de confirmation'];

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
      id: 32001 + i,
      level: 10,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Heuristique de disponibilite' : 'Availability Heuristic',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? FR : EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Un exemple recent, frappant ou facile a retenir donne l'impression que le cas est plus courant qu'il ne l'est."
        : 'A recent, vivid, or easy-to-remember example makes the case feel more common than it really is.',
      detailedExplanationBeginner: fr
        ? "Ce qui vient vite a l'esprit semble plus frequent qu'en realite."
        : 'What comes easily to mind can seem more common than it is.',
      detailedExplanationIntermediate: fr
        ? "Quand un souvenir est frappant ou recent, on l'utilise comme raccourci pour estimer la frequence ou la probabilite."
        : 'When a memory is vivid or recent, people use it as a shortcut for estimating frequency or probability.',
      detailedExplanationExpert: fr
        ? "L'heuristique de disponibilite remplace une verification des taux reels par la facilite de rappel, ce qui amplifie les exemples marquants et invisibilise les cas ordinaires."
        : 'The availability heuristic replaces a check of actual rates with how easily examples come to mind, which amplifies memorable cases and hides ordinary ones.',
      questionFormat: 'standard',
    };
  });
}

export const AVAILABILITY_HEURISTIC_EXPANSION_EN: Question[] = make();
export const AVAILABILITY_HEURISTIC_EXPANSION_FR: Question[] = make(true);
