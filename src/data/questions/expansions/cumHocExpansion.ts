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
