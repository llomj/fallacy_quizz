import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["If it rains, the sidewalk gets wet. The sidewalk is wet, so it must have rained.", "S'il pleut, le trottoir est mouillé. Le trottoir est mouillé, donc il a forcément plu."],
  ["If Maya bakes cookies, the kitchen smells sweet. The kitchen smells sweet, so Maya must be baking cookies.", "Si Maya prépare des cookies, la cuisine sent bon. La cuisine sent bon, donc Maya prépare forcément des cookies."],
  ["If the cat knocks over the plant, there will be soil on the floor. There is soil on the floor, so the cat did it.", "Si le chat renverse la plante, il y aura de la terre par terre. Il y a de la terre par terre, donc c'est forcément le chat."],
  ["If Leo misses the bus, he arrives late. Leo arrived late, so he must have missed the bus.", "Si Leo rate le bus, il arrive en retard. Leo est arrivé en retard, donc il a forcément raté le bus."],
  ["If the battery is dead, the phone will not start. The phone will not start, so the battery must be dead.", "Si la batterie est vide, le téléphone ne démarre pas. Le téléphone ne démarre pas, donc la batterie est forcément vide."],
  ["If Ana wins the race, the crowd cheers. The crowd is cheering, so Ana must have won.", "Si Ana gagne la course, la foule applaudit. La foule applaudit, donc Ana a forcément gagné."],
  ["If the freezer door is open, the ice cream melts. The ice cream melted, so the freezer door was open.", "Si la porte du congélateur est ouverte, la glace fond. La glace a fondu, donc la porte était forcément ouverte."],
  ["If Omar studies all night, he looks tired. Omar looks tired, so he studied all night.", "Si Omar étudie toute la nuit, il a l'air fatigué. Omar a l'air fatigué, donc il a étudié toute la nuit."],
  ["If the dog wants a walk, it waits by the door. The dog is by the door, so it must want a walk.", "Si le chien veut sortir, il attend près de la porte. Le chien est près de la porte, donc il veut forcément sortir."],
  ["If the café has live music, every table fills up. Every table is full, so there must be live music.", "Si le café propose de la musique en direct, toutes les tables se remplissent. Toutes les tables sont pleines, donc il y a forcément de la musique en direct."],
  ["If Nina uses the blender, the baby wakes up. The baby woke up, so Nina used the blender.", "Si Nina utilise le mixeur, le bébé se réveille. Le bébé s'est réveillé, donc Nina a utilisé le mixeur."],
  ["If a storm is coming, the sky turns dark. The sky is dark, so a storm must be coming.", "Si une tempête approche, le ciel devient sombre. Le ciel est sombre, donc une tempête approche forcément."],
  ["If the team scores, Sam honks the car horn. Sam honked, so the team must have scored.", "Si l'équipe marque, Sam klaxonne. Sam a klaxonné, donc l'équipe a forcément marqué."],
  ["If the router fails, the video freezes. The video froze, so the router must have failed.", "Si le routeur tombe en panne, la vidéo se fige. La vidéo s'est figée, donc le routeur est forcément tombé en panne."],
  ["If Jules orders pizza, the doorbell rings at seven. The doorbell rang at seven, so Jules ordered pizza.", "Si Jules commande une pizza, la sonnette retentit à dix-neuf heures. Elle a sonné à dix-neuf heures, donc Jules a commandé une pizza."],
  ["If the heater is on, the room feels warm. The room feels warm, so the heater is on.", "Si le chauffage est allumé, la pièce est chaude. La pièce est chaude, donc le chauffage est forcément allumé."],
  ["If Priya practices piano, the neighbor closes his window. He closed his window, so Priya must be practicing.", "Si Priya joue du piano, le voisin ferme sa fenêtre. Il a fermé sa fenêtre, donc Priya joue forcément du piano."],
  ["If the school cancels class, students celebrate online. Students are celebrating online, so class was cancelled.", "Si l'école annule les cours, les élèves fêtent cela en ligne. Les élèves font la fête en ligne, donc les cours ont forcément été annulés."],
  ["If Ben drinks espresso, he talks quickly. Ben is talking quickly, so he drank espresso.", "Si Ben boit un espresso, il parle vite. Ben parle vite, donc il a forcément bu un espresso."],
  ["If the washing machine leaks, the laundry floor gets wet. The floor is wet, so the machine leaked.", "Si la machine à laver fuit, le sol de la buanderie est mouillé. Le sol est mouillé, donc la machine a forcément fui."],
  ["If a package arrives, Salma receives a notification. Salma got a notification, so the package arrived.", "Si un colis arrive, Salma reçoit une notification. Salma a reçu une notification, donc le colis est forcément arrivé."],
  ["If Theo tells a joke, Mei laughs. Mei is laughing, so Theo must have told a joke.", "Si Theo raconte une blague, Mei rit. Mei rit, donc Theo a forcément raconté une blague."],
  ["If the library is closed, its front lights are off. The lights are off, so the library is closed.", "Si la bibliothèque est fermée, ses lumières de façade sont éteintes. Elles sont éteintes, donc la bibliothèque est forcément fermée."],
  ["If Clara goes jogging, her shoes get muddy. Her shoes are muddy, so she went jogging.", "Si Clara va courir, ses chaussures deviennent boueuses. Elles sont boueuses, donc Clara est forcément allée courir."],
  ["If the microwave finishes, it beeps. It beeped, so the microwave must have finished.", "Si le micro-ondes a terminé, il sonne. Il a sonné, donc il a forcément terminé."],
  ["If Ravi waters the garden, the hose lies on the lawn. The hose is on the lawn, so Ravi watered the garden.", "Si Ravi arrose le jardin, le tuyau reste sur la pelouse. Le tuyau est sur la pelouse, donc Ravi a forcément arrosé."],
  ["If the cinema shows a blockbuster, the parking lot is crowded. It is crowded, so a blockbuster is showing.", "Si le cinéma projette un grand succès, le parking est bondé. Le parking est bondé, donc le cinéma projette forcément un grand succès."],
  ["If Fatima forgets her umbrella, her hair gets wet. Her hair is wet, so she forgot her umbrella.", "Si Fatima oublie son parapluie, ses cheveux sont mouillés. Ses cheveux sont mouillés, donc elle a forcément oublié son parapluie."],
  ["If the smoke alarm detects smoke, it chirps loudly. It is chirping, so it detected smoke.", "Si le détecteur repère de la fumée, il sonne fort. Il sonne, donc il a forcément détecté de la fumée."],
  ["If the bakery sells out, a sign appears in the window. There is a sign, so the bakery sold out.", "Si la boulangerie a tout vendu, une pancarte apparaît en vitrine. Il y a une pancarte, donc tout a forcément été vendu."],
  ["If Eric takes the shortcut, he passes the red bridge. Eric passed the red bridge, so he took the shortcut.", "Si Eric prend le raccourci, il passe par le pont rouge. Eric est passé par le pont rouge, donc il a forcément pris le raccourci."],
  ["If the laptop updates, it restarts. The laptop restarted, so it installed an update.", "Si l'ordinateur se met à jour, il redémarre. Il a redémarré, donc il a forcément installé une mise à jour."],
  ["If Zoe adds chili, the soup tastes spicy. The soup is spicy, so Zoe added chili.", "Si Zoe ajoute du piment, la soupe est épicée. La soupe est épicée, donc Zoe a forcément ajouté du piment."],
  ["If the elevator is broken, people use the stairs. People are using the stairs, so the elevator is broken.", "Si l'ascenseur est en panne, les gens prennent l'escalier. Les gens prennent l'escalier, donc l'ascenseur est forcément en panne."],
  ["If Kai opens the bird feeder, seeds spill below it. Seeds are on the ground, so Kai opened the feeder.", "Si Kai ouvre la mangeoire, des graines tombent dessous. Il y a des graines au sol, donc Kai a forcément ouvert la mangeoire."],
  ["If the concert ends, taxis line up outside. Taxis are lined up, so the concert ended.", "Si le concert se termine, les taxis s'alignent dehors. Les taxis sont alignés, donc le concert est forcément terminé."],
  ["If Lucie uses blue paint, her hands turn blue. Her hands are blue, so she used blue paint.", "Si Lucie utilise de la peinture bleue, ses mains deviennent bleues. Ses mains sont bleues, donc elle a forcément utilisé cette peinture."],
  ["If the power goes out, the hallway is dark. The hallway is dark, so the power went out.", "Si le courant est coupé, le couloir est sombre. Le couloir est sombre, donc le courant est forcément coupé."],
  ["If Noah cooks popcorn, the fire alarm complains. The alarm is sounding, so Noah cooked popcorn.", "Si Noah prépare du pop-corn, l'alarme incendie proteste. L'alarme sonne, donc Noah a forcément préparé du pop-corn."],
  ["If the pool opens, children queue at the gate. Children are queuing, so the pool is open.", "Si la piscine ouvre, les enfants font la queue au portail. Ils font la queue, donc la piscine est forcément ouverte."],
  ["If Mila charges her electric bike, a green light appears. The green light is on, so she charged the bike.", "Si Mila recharge son vélo électrique, un voyant vert s'allume. Le voyant est allumé, donc elle a forcément rechargé le vélo."],
  ["If the restaurant serves curry, the hallway smells of spices. It smells of spices, so curry is being served.", "Si le restaurant sert du curry, le couloir sent les épices. Le couloir sent les épices, donc le restaurant sert forcément du curry."],
  ["If the football field floods, practice moves indoors. Practice is indoors, so the field flooded.", "Si le terrain de football est inondé, l'entraînement se déroule à l'intérieur. Il se déroule à l'intérieur, donc le terrain est forcément inondé."],
  ["If the moon is full, Amir photographs the beach. Amir is photographing the beach, so the moon is full.", "Si la lune est pleine, Amir photographie la plage. Amir photographie la plage, donc la lune est forcément pleine."],
  ["If the office runs out of coffee, Dan becomes grumpy. Dan is grumpy, so the office ran out of coffee.", "Si le bureau n'a plus de café, Dan devient grognon. Dan est grognon, donc il n'y a forcément plus de café."],
  ["If the train approaches, the crossing bell rings. The bell is ringing, so a train is approaching.", "Si le train approche, la cloche du passage à niveau sonne. Elle sonne, donc un train approche forcément."],
  ["If Emma wears her new boots, friends compliment them. Friends complimented her boots, so she wore the new pair.", "Si Emma porte ses nouvelles bottes, ses amis les complimentent. Ses amis ont complimenté ses bottes, donc elle portait forcément la nouvelle paire."],
  ["If the aquarium light turns on, the fish gather near the glass. The fish gathered there, so the light was turned on.", "Si la lumière de l'aquarium s'allume, les poissons se rassemblent près de la vitre. Ils s'y sont rassemblés, donc la lumière a forcément été allumée."],
  ["If the neighbor grills onions, our balcony smells smoky. The balcony smells smoky, so the neighbor grilled onions.", "Si le voisin fait griller des oignons, notre balcon sent la fumée. Le balcon sent la fumée, donc le voisin a forcément grillé des oignons."],
    ["If Yara wins at board games, she sings a victory song. Yara is singing it, so she must have won.", "Si Yara gagne à un jeu de société, elle chante sa chanson de victoire. Elle la chante, donc elle a forcément gagné."],
    ["If the bakery opens early, the street smells like bread. It smells like bread, so the bakery opened early.", "Si la boulangerie ouvre tôt, la rue sent le pain. Elle sent le pain, donc la boulangerie a forcément ouvert tôt."],
    ["If Maya waters the basil, the leaves look greener. The leaves look greener, so Maya watered the basil.", "Si Maya arrose le basilic, les feuilles paraissent plus vertes. Elles paraissent plus vertes, donc Maya a forcément arrosé le basilic."],
    ["If the movie is over, the lights come on. The lights are on, so the movie is over.", "Si le film est terminé, les lumières s'allument. Les lumières sont allumées, donc le film est forcément terminé."],
    ["If Zoe bakes bread, the apartment feels warm. The apartment feels warm, so Zoe baked bread.", "Si Zoé fait du pain, l'appartement paraît chaud. L'appartement paraît chaud, donc Zoé a forcément fait du pain."],
    ["If the dog plays outside, muddy paw prints appear. Muddy paw prints are there, so the dog played outside.", "Si le chien joue dehors, des traces de pattes boueuses apparaissent. Il y a des traces boueuses, donc le chien a forcément joué dehors."],
    ["If the bus brakes hard, passengers lean forward. The passengers leaned forward, so the bus braked hard.", "Si le bus freine brusquement, les passagers se penchent vers l'avant. Les passagers se sont penchés en avant, donc le bus a forcément freiné brusquement."],
    ["If Priya adds cinnamon, the pudding tastes sweet. The pudding tastes sweet, so Priya added cinnamon.", "Si Priya ajoute de la cannelle, le pudding a un goût sucré. Le pudding a un goût sucré, donc Priya a forcément ajouté de la cannelle."],
    ["If the concert starts, taxis line up outside. Taxis are lined up outside, so the concert started.", "Si le concert commence, des taxis se rangent dehors. Des taxis sont rangés dehors, donc le concert a forcément commencé."],
    ["If class ends, everyone packs up quickly. Everyone is packing up quickly, so class must have ended.", "Si le cours se termine, tout le monde range ses affaires rapidement. Tout le monde range ses affaires, donc le cours est forcément terminé."],
    ["If Omar takes the shortcut, he arrives before lunch. He arrived before lunch, so he took the shortcut.", "Si Omar prend le raccourci, il arrive avant le déjeuner. Il est arrivé avant le déjeuner, donc il a forcément pris le raccourci."]
  ["If the bakery uses fresh berries, the muffins taste brighter. The muffins taste brighter, so fresh berries were used.", "Si la boulangerie utilise des fruits rouges frais, les muffins ont un goût plus vif. Les muffins ont un goût plus vif, donc des fruits rouges frais ont forcément été utilisés."],
  ["If Sam waters the fern, the leaves perk up. The leaves perked up, so Sam watered the fern.", "Si Sam arrose la fougère, les feuilles se redressent. Les feuilles se sont redressées, donc Sam a forcément arrosé la fougère."],
  ["If the library opens the study room, students whisper inside. Students are whispering inside, so the study room opened.", "Si la bibliothèque ouvre la salle d'étude, les élèves chuchotent à l'intérieur. Les élèves chuchotent à l'intérieur, donc la salle d'étude a forcément ouvert."],
  ["If Leo charges his headphones, the light turns green. The light is green, so Leo charged the headphones.", "Si Leo charge ses écouteurs, le voyant devient vert. Le voyant est vert, donc Leo a forcément chargé les écouteurs."],
  ["If the soccer coach calls practice, cleats line the hall. Cleats are in the hall, so the coach called practice.", "Si l'entraîneur de foot convoque l'entraînement, des crampons alignent le couloir. Les crampons sont dans le couloir, donc l'entraîneur a forcément convoqué l'entraînement."],
  ["If Nina uses the oven, the kitchen smells warm. The kitchen smells warm, so Nina used the oven.", "Si Nina utilise le four, la cuisine sent le chaud. La cuisine sent le chaud, donc Nina a forcément utilisé le four."],
  ["If the tram arrives, the platform fills fast. The platform is full, so the tram arrived.", "Si le tram arrive, le quai se remplit vite. Le quai est plein, donc le tram est forcément arrivé."],
  ["If Priya opens her planner, sticky notes appear everywhere. Sticky notes are everywhere, so Priya opened her planner.", "Si Priya ouvre son agenda, des post-it apparaissent partout. Les post-it sont partout, donc Priya a forcément ouvert son agenda."],
  ["If the storm knocks out the lights, candles appear in windows. Candles are in the windows, so the storm knocked out the lights.", "Si l'orage coupe les lumières, des bougies apparaissent aux fenêtres. Des bougies sont aux fenêtres, donc l'orage a forcément coupé les lumières."],
  ["If the class wins trivia, someone rings a bell. The bell rang, so the class won trivia.", "Si la classe gagne au quiz, quelqu'un sonne une cloche. La cloche a sonné, donc la classe a forcément gagné au quiz."]
];

const OPTIONS_EN = ['Affirming the Consequent', 'Denying the Antecedent', 'Post Hoc', 'False Cause'];
const OPTIONS_FR = ['Affirmation du conséquent', "Négation de l'antécédent", 'Post hoc', 'Fausse cause'];

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

export const AFFIRMING_CONSEQUENT_EXPANSION_EN: Question[] = SCENARIOS.map(([english], index) => {
  const correctIndex = index % 4;
  return {
    id: 30121 + index,
    level: 5,
    persona_stage: PersonaStage.OCTOPUS,
    concept: 'Affirming the Consequent',
    difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Which fallacy is used here?\n\n"${english}"`,
    options: rotatedOptions(OPTIONS_EN, correctIndex),
    correct_option_index: correctIndex,
    explanation: 'The result can have several possible causes, so seeing the result does not prove this particular condition happened.',
    detailedExplanationBeginner: 'It reverses an if-then rule: Q does not prove P just because P would produce Q.',
    detailedExplanationIntermediate: 'The argument has the invalid form: if P, then Q; Q; therefore P. Another cause could also produce Q.',
    detailedExplanationExpert: 'Affirming the consequent mistakes a sufficient condition for a necessary one. The conditional guarantees Q when P occurs, but it does not state that P is the only route to Q.',
    questionFormat: 'standard'
  };
});

export const AFFIRMING_CONSEQUENT_EXPANSION_FR: Question[] = SCENARIOS.map(([, french], index) => {
  const correctIndex = index % 4;
  return {
    id: 30121 + index,
    level: 5,
    persona_stage: PersonaStage.OCTOPUS,
    concept: 'Affirmation du conséquent',
    difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Quel sophisme est utilisé ici ?\n\n"${french}"`,
    options: rotatedOptions(OPTIONS_FR, correctIndex),
    correct_option_index: correctIndex,
    explanation: "Le résultat peut avoir plusieurs causes : l'observer ne prouve donc pas que cette condition précise s'est produite.",
    detailedExplanationBeginner: "Le raisonnement inverse une règle conditionnelle : Q ne prouve pas P simplement parce que P entraînerait Q.",
    detailedExplanationIntermediate: "L'argument prend la forme invalide : si P, alors Q ; Q ; donc P. Une autre cause pourrait également produire Q.",
    detailedExplanationExpert: "L'affirmation du conséquent confond une condition suffisante avec une condition nécessaire. La règle garantit Q lorsque P se produit, mais elle ne dit pas que P est le seul chemin vers Q.",
    questionFormat: 'standard'
  };
});
