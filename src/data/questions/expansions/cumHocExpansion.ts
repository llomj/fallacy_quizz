import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["Sam bought a new mug and his emails got better, so the mug improved his work.", "Sam a achete une nouvelle tasse et ses e-mails sont devenus meilleurs, donc la tasse a ameliore son travail."],
  ["Mia wore blue shoes and the meeting went well, so blue shoes must boost meetings.", "Mia a porte des chaussures bleues et la reunion s'est bien passee, donc les chaussures bleues doivent ameliorer les reunions."],
  ["Omar ate pasta and later got a promotion, so pasta causes promotion.", "Omar a mange des pates puis a obtenu une promotion, donc les pates causent les promotions."],
  ["Priya watered her plant and the sun came out, so watering plants makes sunshine.", "Priya a arrose sa plante et le soleil est sorti, donc arroser les plantes fait venir le soleil."],
  ["Ben listened to jazz and his dog calmed down, so jazz calms dogs.", "Ben a ecoute du jazz et son chien s'est calme, donc le jazz calme les chiens."],
  ["Ava bought a planner and her stress dropped, so planners reduce stress by themselves.", "Ava a achete un agenda et son stress a baisse, donc les agendas reduisent le stress par eux-memes."],
  ["Leo wore a cap and the cafe was busy, so caps make cafes busy.", "Leo a porte une casquette et le cafe etait plein, donc les casquettes rendent les cafes pleins."],
  ["Nina sent one friendly text and her friend replied quickly, so friendly texts control reply speed.", "Nina a envoye un message aimable et son amie a repondu vite, donc les messages aimables controlent la vitesse de reponse."],
  ["Theo turned on a lamp and the room got tidy, so lamps clean rooms.", "Theo a allume une lampe et la piece est devenue rangee, donc les lampes nettoient les pieces."],
  ["Jade wore sneakers and the bus arrived, so sneakers summon buses.", "Jade a porte des baskets et le bus est arrive, donc les baskets invoquent les bus."],
  ["Finn had coffee and the spreadsheet looked easier, so coffee simplifies spreadsheets.", "Finn a bu un cafe et le tableur semblait plus simple, donc le cafe simplifie les tableurs."],
  ["Mina used a sticky note and remembered the deadline, so sticky notes create memory.", "Mina a utilise un post-it et s'est souvenue de l'echeance, donc les post-its creent la memoire."],
  ["Kai bought a plant and the apartment felt calmer, so plants make apartments calm.", "Kai a achete une plante et l'appartement semblait plus calme, donc les plantes rendent les appartements calmes."],
  ["Aria wore headphones and the line moved faster, so headphones speed up queues.", "Aria a porte des ecouteurs et la file a avance plus vite, donc les ecouteurs accelerent les files."],
  ["Noah cleaned his desk and the weekend felt easier, so desk cleaning improves weekends.", "Noah a range son bureau et le week-end semblait plus facile, donc ranger le bureau ameliore les week-ends."],
  ["Zoe used a new pen and the class was focused, so pens cause focus.", "Zoe a utilise un nouveau stylo et la classe etait concentree, donc les stylos causent la concentration."],
  ["Milo took the stairs and got good news, so stairs deliver good news.", "Milo a pris les escaliers et a recu une bonne nouvelle, donc les escaliers apportent de bonnes nouvelles."],
  ["Lina opened the windows and the recipe worked, so windows fix recipes.", "Lina a ouvert les fenetres et la recette a marche, donc les fenetres reparent les recettes."],
  ["Eli wore a watch and people were polite, so watches make manners.", "Eli a porte une montre et les gens etaient polis, donc les montres rendent les gens polis."],
  ["Tara packed snacks and the drive was smooth, so snacks prevent traffic.", "Tara a emporte des collations et le trajet s'est bien passe, donc les collations empechent le trafic."],
  ["Owen put on sunscreen and the day was fun, so sunscreen creates fun days.", "Owen a mis de la creme solaire et la journee etait amusante, donc la creme solaire cree des journees amusantes."],
  ["Rina took notes and the lecture was memorable, so note-taking makes lectures memorable.", "Rina a pris des notes et le cours etait memorable, donc prendre des notes rend les cours memorables."],
  ["Ben watered the lawn and the mail arrived, so watering lawns delivers mail.", "Ben a arrose la pelouse et le courrier est arrive, donc arroser la pelouse livre le courrier."],
  ["Mia turned on music and the soup tasted better, so music improves soup.", "Mia a mis de la musique et la soupe avait meilleur gout, donc la musique ameliorе la soupe."],
  ["Theo bought a timer and dinner was ready, so timers cook dinner.", "Theo a achete un minuteur et le dîner etait pret, donc les minuteurs cuisinent le dîner."],
  ["Ava used a notebook and the idea became clearer, so notebooks create clarity.", "Ava a utilise un carnet et l'idee est devenue plus claire, donc les carnets creent la clarte."],
  ["Leo wore clean socks and the presentation landed well, so socks improve presentations.", "Leo a porte des chaussettes propres et la presentation a bien marche, donc les chaussettes ameliorent les presentations."],
  ["Nina bought tea and the room felt warmer, so tea heats rooms.", "Nina a achete du the et la piece semblait plus chaude, donc le the chauffe les pieces."],
  ["Priya turned off notifications and the afternoon was calm, so notifications cause chaos.", "Priya a coupe les notifications et l'apres-midi etait calme, donc les notifications causent le chaos."],
  ["Finn used a calendar and the project improved, so calendars improve projects.", "Finn a utilise un calendrier et le projet s'est amelioré, donc les calendriers ameliorent les projets."],
  ["Mina washed dishes and the sunset was beautiful, so dishes control sunsets.", "Mina a fait la vaisselle et le coucher de soleil etait beau, donc la vaisselle controle les couchers de soleil."],
  ["Kai grabbed his coat and the train came, so coats summon trains.", "Kai a pris son manteau et le train est arrive, donc les manteaux invoquent les trains."],
  ["Aria added salt and the call went well, so salt improves phone calls.", "Aria a ajoute du sel et l'appel s'est bien passe, donc le sel ameliore les appels."],
  ["Noah turned on air conditioning and the message was clearer, so AC improves writing.", "Noah a allume la climatisation et le message etait plus clair, donc la climatisation améliore l'écriture."],
  ["Zoe used a marker and the room got quieter, so markers silence rooms.", "Zoe a utilise un marqueur et la piece est devenue plus calme, donc les marqueurs font taire les pieces."],
  ["Milo cooked rice and the phone battery lasted longer, so rice extends battery life.", "Milo a cuit du riz et la batterie du telephone a dure plus longtemps, donc le riz prolonge la batterie."],
  ["Lina bought a candle and the chat was nicer, so candles improve conversations.", "Lina a achete une bougie et la conversation etait plus sympa, donc les bougies ameliorent les conversations."],
  ["Eli made tea and the checklist got shorter, so tea shortens checklists.", "Eli a prepare du the et la liste de verification s'est raccourcie, donc le the raccourcit les listes."],
  ["Tara used a basket and the road was less crowded, so baskets reduce traffic.", "Tara a utilise un panier et la route etait moins chargee, donc les paniers reduisent le trafic."],
  ["Owen brushed his hair and the sales went up, so hair brushing increases sales.", "Owen s'est brosse les cheveux et les ventes ont augmente, donc se coiffer augmente les ventes."],
  ["Rina bought a pillow and the class got quieter, so pillows make classrooms quiet.", "Rina a achete un oreiller et la classe est devenue plus calme, donc les oreillers rendent les classes calmes."],
  ["Ben used a map and the pizza arrived, so maps order pizza.", "Ben a utilise une carte et la pizza est arrivee, donc les cartes commandent des pizzas."],
  ["Mia put on gloves and the team smiled, so gloves improve morale.", "Mia a mis des gants et l'equipe a souri, donc les gants ameliorent le moral."],
  ["Theo listened to rain and the homework got done, so rain motivates homework.", "Theo a ecoute la pluie et les devoirs ont ete faits, donc la pluie motive les devoirs."],
  ["Ava bought a ruler and the debate ended, so rulers end debates.", "Ava a achete une regle et le debat s'est termine, donc les regles mettent fin aux debats."],
  ["Leo used a spoon and the park felt safer, so spoons protect parks.", "Leo a utilise une cuillere et le parc semblait plus sur, donc les cuilleres protegent les parcs."],
  ["Nina wore a scarf and the meeting was shorter, so scarves shorten meetings.", "Nina a porte une echarpe et la reunion a ete plus courte, donc les echarpes raccourcissent les reunions."],
  ["Priya read a headline and the sandwich tasted better, so headlines improve lunch.", "Priya a lu un titre et le sandwich avait meilleur gout, donc les titres ameliorent le dejeuner."],
  ["Finn opened a window and the budget improved, so windows save money.", "Finn a ouvert une fenetre et le budget s'est ameliore, donc les fenetres economisent de l'argent."],
  ["Mina wore a sweater and the movie ended well, so sweaters improve endings.", "Mina a porte un pull et le film s'est bien termine, donc les pulls ameliorent les fins."],
  ["Kai used a highlighter and the meeting was kinder, so highlighters create kindness.", "Kai a utilise un surligneur et la reunion etait plus aimable, donc les surligneurs creent de la gentillesse."],
  ["Aria packed a charger and the coffee was delicious, so chargers improve coffee.", "Aria a emporte un chargeur et le cafe etait delicieux, donc les chargeurs ameliorent le cafe."],
  ['A student notices people with umbrellas also buy coffee and says umbrellas make people want coffee.', 'Un eleve remarque que les gens avec des parapluies achetent aussi du cafe et dit que les parapluies donnent envie de cafe.'],
  ['Mia sees tidy desks in rooms with happy teams and says tidy desks create happy teams.', 'Mia voit des bureaux ranges dans des pieces avec des equipes heureuses et dit que les bureaux ranges creent des equipes heureuses.'],
  ['Omar sees more headphones in quiet cars and says headphones make cars quiet.', 'Omar voit plus de casques audio dans les voitures calmes et dit que les casques rendent les voitures calmes.'],
  ['Priya notices snacks and laughter together and says snacks directly create laughter.', 'Priya remarque des collations et des rires ensemble et dit que les collations creeent directement les rires.'],
  ['Ben sees clean kitchens in homes with relaxed families and says clean kitchens cause relaxation.', 'Ben voit des cuisines propres dans des maisons avec des familles detendues et dit que les cuisines propres causent la detente.'],
  ['Ava sees more phones at concerts and says phones cause the concerts.', 'Ava voit plus de telephones aux concerts et dit que les telephones causent les concerts.'],
  ['Leo notices gym bags and sore legs and says the bags made people sore.', 'Leo remarque des sacs de gym et des jambes douloureuses et dit que les sacs ont rendu les gens douloureux.'],
  ['Nina sees calmer afternoons after school clubs start and says clubs magically calm afternoons.', 'Nina voit des apres-midis plus calmes apres le debut des clubs scolaires et dit que les clubs apaisent magiquement les apres-midis.'],
  ['Theo notices more open books in quiet rooms and says books create silence.', 'Theo remarque plus de livres ouverts dans les pieces calmes et dit que les livres creent le silence.'],
  ['Jade sees brighter screens in busy offices and says screens make offices busy.', 'Jade voit des ecrans plus lumineux dans les bureaux occupes et dit que les ecrans rendent les bureaux occupes.'],
  ['Maya sees coffee and rain show up together and says coffee must make storms.', 'Maya voit le cafe et la pluie apparaitre ensemble et dit que le cafe doit provoquer les orages.'],
  ['Theo sees more umbrellas on wet days and says umbrellas are the reason for wet days.', 'Theo voit plus de parapluies les jours humides et dit que les parapluies sont la raison des jours humides.'],
  ['Nina notices music at the gym and says music creates exercise.', 'Nina remarque de la musique a la salle de sport et dit que la musique cree l exercice.'],
  ['Ben sees candles and birthday cake in the same room and says candles cause birthdays.', 'Ben voit des bougies et un gateau d anniversaire dans la meme piece et dit que les bougies causent les anniversaires.'],
  ['Omar notices more hats in winter and says hats create winter.', 'Omar remarque plus de chapeaux en hiver et dit que les chapeaux creent l hiver.'],
  ['Priya sees phones and long lines together and says phones make lines longer.', 'Priya voit des telephones et de longues files ensemble et dit que les telephones rallongent les files.'],
  ['Leo sees laughter near the snack table and says snacks cause jokes.', 'Leo voit des rires pres de la table de collations et dit que les collations causent les blagues.'],
  ['Rina notices quiet rooms and open books together and says books cause silence.', 'Rina remarque des pieces calmes et des livres ouverts ensemble et dit que les livres causent le silence.'],
  ['Jules sees raincoats and gray skies together and says raincoats bring clouds.', 'Jules voit des impermeables et un ciel gris ensemble et dit que les impermeables apportent les nuages.'],
  ['Ava sees clean desks and focused students at the same time and says desks create concentration.', 'Ava voit des bureaux ranges et des eleves concentres en meme temps et dit que les bureaux creent la concentration.'],
  ['Mia sees a wet sidewalk and a spilled drink and says the sidewalk caused the spill.', 'Mia voit un trottoir mouille et une boisson renversee et dit que le trottoir a cause le renversement.'],
  ['Noah sees more umbrellas on rainy mornings and says umbrellas summon rain.', 'Noah voit plus de parapluies les matins pluvieux et dit que les parapluies appellent la pluie.'],
  ['Priya sees calm music and a tidy desk together and says music cleans desks.', 'Priya voit de la musique calme et un bureau range ensemble et dit que la musique nettoie les bureaux.'],
  ['Ben sees a new pen and a good quiz score and says the pen made the score.', 'Ben voit un nouveau stylo et une bonne note de quiz et dit que le stylo a fait la note.'],
  ['Ava sees a coffee cup and a short meeting and says coffee shortens meetings.', 'Ava voit une tasse de cafe et une reunion courte et dit que le cafe raccourcit les reunions.'],
  ['Leo sees rain jackets and gray skies and says jackets bring bad weather.', 'Leo voit des impermeables et un ciel gris et dit que les impermeables apportent le mauvais temps.'],
  ['Rina sees headphones and a focused student and says headphones create focus.', 'Rina voit des ecouteurs et un eleve concentre et dit que les ecouteurs creent la concentration.'],
  ['Theo sees a planner and a less stressful afternoon and says planners remove stress.', 'Theo voit un agenda et un apres-midi moins stressant et dit que les agendas retirent le stress.'],
  ['Mila sees candles and a birthday cake and says candles cause birthdays.', 'Mila voit des bougies et un gateau d anniversaire et dit que les bougies causent les anniversaires.'],
  ['Omar sees a phone charger and a lively group chat and says chargers make people talkative.', 'Omar voit un chargeur de telephone et un groupe bavard et dit que les chargeurs rendent les gens bavards.'],
  ['Nina sees a clean kitchen and a happy family and says the kitchen causes happiness.', 'Nina voit une cuisine propre et une famille heureuse et dit que la cuisine cause le bonheur.'],
  ['Eli sees a map and a successful trip and says maps guarantee success.', 'Eli voit une carte et un voyage reussi et dit que les cartes garantissent le succes.'],
  ['Tara sees music in the background and a smooth drive and says music makes traffic disappear.', 'Tara voit de la musique en fond et un trajet fluide et dit que la musique fait disparaitre le trafic.'],
  ['Kai sees a timer and dinner ready on time and says timers cook dinner.', 'Kai voit un minuteur et un diner pret a l heure et dit que les minuteurs cuisinent le diner.'],
  ['Zoe sees a notebook and a clearer idea and says notebooks create clarity.', 'Zoe voit un carnet et une idee plus claire et dit que les carnets creent la clarte.'],
  ['Lina sees clean socks and a good presentation and says socks improve speaking.', 'Lina voit des chaussettes propres et une bonne presentation et dit que les chaussettes ameliorent la prise de parole.'],
  ['Finn sees tea and a warmer room and says tea heats houses.', 'Finn voit du the et une piece plus chaude et dit que le the chauffe les maisons.'],
  ['Mina sees notifications off and a calm afternoon and says notifications cause chaos.', 'Mina voit les notifications coupees et un apres-midi calme et dit que les notifications causent le chaos.'],
  ['Jules sees a calendar and a better project and says calendars fix projects.', 'Jules voit un calendrier et un meilleur projet et dit que les calendriers reparrent les projets.'],
  ['Aria sees dishes washed and a pretty sunset and says dishes control the sky.', 'Aria voit la vaisselle faite et un beau coucher de soleil et dit que la vaisselle controle le ciel.'],
  ['Milo sees a coat and a train arriving and says coats summon trains.', 'Milo voit un manteau et un train qui arrive et dit que les manteaux invoquent les trains.'],
  ['Sofia sees salt in soup and a pleasant call and says salt improves phone calls.', 'Sofia voit du sel dans la soupe et un appel agreable et dit que le sel ameliorе les appels.'],
  ['Hugo sees a window open and a clearer message and says windows improve writing.', 'Hugo voit une fenetre ouverte et un message plus clair et dit que les fenetres ameliorent l ecriture.'],
  ['Lea sees a marker and a quieter room and says markers silence rooms.', 'Lea voit un marqueur et une piece plus calme et dit que les marqueurs font taire les pieces.'],
  ['Dan sees rice cooking and a charged phone battery and says rice powers phones.', 'Dan voit du riz cuire et une batterie de telephone chargee et dit que le riz alimente les telephones.'],
  ['Rosa sees a candle and a nice conversation and says candles improve conversation.', 'Rosa voit une bougie et une bonne conversation et dit que les bougies ameliorent les conversations.'],
  ['Paul sees a spoon and a tidy park and says spoons protect parks.', 'Paul voit une cuillere et un parc propre et dit que les cuilleres protegent les parcs.'],
  ['Grace sees a scarf and a shorter meeting and says scarves shorten meetings.', 'Grace voit une echarpe et une reunion plus courte et dit que les echarpes raccourcissent les reunions.'],
];

const EN = ['Cum Hoc', 'Correlation Equals Causation', 'Post Hoc Ergo Propter Hoc', 'Coincidence'];
const FR = ['Cum Hoc', 'Corrélation égale causalité', 'Post hoc ergo propter hoc', 'Coïncidence'];

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
      id: 33151 + i,
      level: 3,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Cum Hoc' : 'Cum Hoc',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? FR : EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Deux evenements se produisent ensemble, et on les prend a tort pour une cause et un effet."
        : 'Two events happen together, and they are wrongly treated as cause and effect.',
      detailedExplanationBeginner: fr
        ? "Ensemble ne veut pas dire cause."
        : 'Together does not mean caused.',
      detailedExplanationIntermediate: fr
        ? "Cum hoc confond la simple cooccurrence avec un lien causal; le fait que deux choses arrivent en meme temps ne montre pas qu'elles s'influencent."
        : 'Cum hoc confuses simple co-occurrence with a causal link; the fact that two things happen together does not show they influence each other.',
      detailedExplanationExpert: fr
        ? "Le sophisme du cum hoc ignore les causes tierces, les sens inverses et les coïncidences; il faut distinguer association statistique et mecanisme causal."
        : 'The cum hoc fallacy ignores third causes, reverse direction, and coincidences; statistical association must be distinguished from causal mechanism.',
      questionFormat: 'standard',
    };
  });
}

export const CUM_HOC_EXPANSION_EN: Question[] = make();
export const CUM_HOC_EXPANSION_FR: Question[] = make(true);
