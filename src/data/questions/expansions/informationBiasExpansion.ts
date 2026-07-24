import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya keeps reading more and more reviews after she already has enough to choose a laptop.', "Maya continue de lire encore plus d avis alors qu elle en a deja assez pour choisir un ordinateur portable."],
  ['Leo opens ten tabs about one vacation and still feels like he needs more information before booking.', "Leo ouvre dix onglets sur un seul voyage et a toujours l impression d avoir besoin de plus d informations avant de reserver."],
  ['Nina asks for extra details on a simple lunch plan until the decision becomes harder, not easier.', "Nina demande des details supplementaires sur un simple plan de dejeuner jusqu a ce que la decision devienne plus difficile, pas plus facile."],
  ['Owen keeps searching for articles about one phone purchase and gets more confused instead of clearer.', "Owen continue de chercher des articles sur un seul achat de telephone et devient plus confus au lieu d etre plus clair."],
  ['Priya wants one more chart, then one more source, then one more graph, and never feels ready to decide.', "Priya veut un graphique de plus, puis une source de plus, puis un autre graphique, et ne se sent jamais prete a decider."],
  ['Ben says he cannot pick a restaurant until he reads every review in town.', "Ben dit qu il ne peut pas choisir un restaurant tant qu il n a pas lu tous les avis de la ville."],
  ['Tara keeps adding details to a simple travel plan and makes it harder to act.', "Tara continue d ajouter des details a un simple plan de voyage et rend l action plus difficile."],
  ['Kai studies one product comparison for hours and still thinks he is missing something essential.', "Kai etudie une comparaison de produit pendant des heures et pense encore qu il lui manque quelque chose d essentiel."],
  ['Jules asks for more and more data on a coffee order and ends up delaying lunch.', "Jules demande toujours plus de donnees sur une commande de cafe et finit par retarder le dejeuner."],
  ['Ava believes one more spreadsheet will make the budget decision finally obvious.', "Ava croit qu une feuille de calcul de plus rendra enfin la decision budgetaire evidente."],
  ['Noah keeps researching a harmless weekend plan until the choice becomes exhausting.', "Noah continue de chercher sur un simple plan de week-end jusqu a ce que le choix devienne epuisant."],
  ['Mina wants another comparison chart before choosing toothpaste.', "Mina veut un autre tableau comparatif avant de choisir un dentifrice."],
  ['Eli keeps asking for extra explanations about a bus schedule until nobody wants to decide.', "Eli demande sans cesse des explications supplementaires sur un horaire de bus jusqu a ce que personne ne veuille decider."],
  ['Rina says she needs to know every possible outcome before picking a movie.', "Rina dit qu elle doit connaitre tous les resultats possibles avant de choisir un film."],
  ['Hugo keeps reading reviews of a toaster until the number of opinions becomes overwhelming.', "Hugo continue de lire des avis sur un grille-pain jusqu a ce que le nombre d opinions devienne accablant."],
  ['Lina collects three more sources for a tiny school choice and cannot move forward.', "Lina recueille trois sources de plus pour un petit choix scolaire et ne peut pas avancer."],
  ['Grant keeps googling a dinner option until the simple choice feels huge.', "Grant continue de chercher sur internet une option de diner jusqu a ce que le choix simple paraisse enorme."],
  ['Zoe says she needs more facts about a pizza topping than about her homework.', "Zoe dit qu elle a besoin de plus de faits sur une garniture de pizza que sur ses devoirs."],
  ['Milo reads more and more about a new backpack and somehow feels less certain.', "Milo lit de plus en plus sur un nouveau sac a dos et se sent pourtant moins sur de lui."],
  ['Theo cannot choose a seat because he keeps gathering extra details about every row.', "Theo ne peut pas choisir une place parce qu il recueille sans cesse des details supplementaires sur chaque rang."],
  ['Pia asks for another list of pros and cons and then another one.', "Pia demande une autre liste des avantages et des inconvenients puis encore une autre."],
  ['Finn keeps comparing two simple cafes until the outing feels impossible to plan.', "Finn continue de comparer deux cafes simples jusqu a ce que la sortie paraisse impossible a organiser."],
  ['Maya says she needs one more article about a new jacket before she can buy it.', "Maya dit qu elle a besoin d un article de plus sur une nouvelle veste avant de pouvoir l acheter."],
  ['Sam gathers more and more information about a car wash and never books the appointment.', "Sam rassemble de plus en plus d informations sur un lavage auto et ne prend jamais rendez-vous."],
  ['Juno turns a quick lunch decision into a full research project.', "Juno transforme une decision rapide pour le dejeuner en projet de recherche complet."],
  ['Iris keeps opening new tabs about a class project until the original question gets buried.', "Iris ouvre sans cesse de nouveaux onglets sur un projet de classe jusqu a ce que la question initiale soit enterree."],
  ['Cole says he needs one more video review before buying paper towels.', "Cole dit qu il lui faut une video de plus avant d acheter du papier essuie-tout."],
  ['Nora says the more she learns about a simple purchase, the less ready she feels.', "Nora dit que plus elle apprend sur un achat simple, moins elle se sent prete."],
  ['Ari asks for extra details about a haircut until the appointment feels stressful.', "Ari demande des details supplementaires sur une coupe de cheveux jusqu a ce que le rendez-vous devienne stressant."],
  ['Rita keeps checking rankings for a cheap blender and cannot stop gathering data.', "Rita continue de verifier les classements pour un mixeur bon marche et ne peut pas cesser de rassembler des donnees."],
  ['Tia thinks more information will always reduce doubt, even when it just creates noise.', "Tia pense que plus d informations reduiront toujours le doute, meme si cela cree seulement du bruit."],
  ['Oli keeps reading about a basic lamp and ends up overwhelmed by choice.', "Oli continue de lire sur une lampe basique et finit par etre submerge par le choix."],
  ['Lara wants one more explanation about a meeting time and keeps delaying the reply.', "Lara veut une explication de plus sur une heure de reunion et continue de retarder sa reponse."],
  ['Ben says he cannot decide on a snack until he knows every calorie fact.', "Ben dit qu il ne peut pas choisir un snack tant qu il ne connait pas tous les faits sur les calories."],
  ['Mina believes the safest decision is to collect endless details first.', "Mina croit que la decision la plus sure est de collecter d abord des details sans fin."],
  ['Drew keeps gathering background about a game night until nobody has energy left.', "Drew continue de reunir des informations sur une soiree de jeux jusqu a ce que personne n ait plus d energie."],
  ['Jade keeps comparing two shirts as if one more fact will make perfection appear.', "Jade continue de comparer deux chemises comme si un fait de plus allait faire apparaitre la perfection."],
  ['Owen says he needs more research on a library book than on a serious choice.', "Owen dit qu il a besoin de plus de recherche sur un livre de bibliotheque que sur un vrai choix."],
  ['Mila keeps collecting opinions about a water bottle and never gets to the point.', "Mila continue de recueillir des avis sur une bouteille d eau et n en vient jamais au fait."],
  ['Evan assumes the answer must exist if he just keeps looking for another source.', "Evan suppose que la reponse doit exister s il continue simplement a chercher une autre source."],
  ['Kira says she needs every detail before she can pick a bus route.', "Kira dit qu elle a besoin de chaque detail avant de pouvoir choisir un trajet de bus."],
  ['Grant keeps over-researching a cheap notebook and makes it feel like a major decision.', "Grant continue de trop rechercher un carnet bon marche et en fait une decision majeure."],
  ['Zara wants extra facts about a sandwich and then extra facts about the facts.', "Zara veut des faits supplementaires sur un sandwich puis des faits supplementaires sur les faits."],
  ['Parker gets stuck in a loop of reading and rereading simple options.', "Parker reste bloque dans une boucle de lecture et de relecture d options simples."],
  ['Hana says a choice feels risky unless she has more and more information.', "Hana dit qu un choix parait risqué tant qu elle n a pas toujours plus d informations."],
  ['Leo keeps adding context to a small decision until it becomes paralyzing.', "Leo continue d ajouter du contexte a une petite decision jusqu a ce qu elle devienne paralysante."],
  ['Maya thinks one more fact about a notebook would finally make the answer obvious.', "Maya pense qu un fait de plus sur un carnet rendrait enfin la reponse evidente."],
  ['Nina keeps searching for a perfect answer even though the choice is already simple.', "Nina continue de chercher une reponse parfaite alors que le choix est deja simple."],
  [`After reading five reviews of a toaster, Mila starts hunting for five more even though she already knows she wants one with wide slots.`, `Apres avoir lu cinq avis sur un grille-pain, Mila cherche encore cinq autres avis alors qu elle sait deja qu elle en veut un avec de larges fentes.`],
  [`Owen keeps opening tabs about a sandwich order and makes the lunch decision harder than it needs to be.`, `Owen ouvre sans cesse des onglets sur une commande de sandwich et rend la decision du dejeuner plus difficile qu elle ne devrait l etre.`],
  [`Priya wants one more comparison for a cheap backpack, then one more, then one more, and never buys anything.`, `Priya veut une comparaison de plus pour un sac a dos bon marche, puis encore une, puis encore une, et n achete jamais rien.`],
  [`Ben asks for every detail about a bus route even though he only needs to know one departure time.`, `Ben demande chaque detail sur un trajet de bus alors qu il a seulement besoin de connaitre une heure de depart.`],
  [`Tara keeps researching a basic coffee maker until the decision feels bigger than her budget.`, `Tara continue de rechercher une machine a cafe basique jusqu a ce que la decision paraisse plus grande que son budget.`],
  [`Jules insists he needs another article about a phone case before choosing between two colors.`, `Jules insiste pour lire encore un article sur une coque de telephone avant de choisir entre deux couleurs.`],
  [`Mina turns a simple lunch choice into a spreadsheet of opinions, prices, and ratings.`, `Mina transforme un choix simple de dejeuner en tableau de calcul avec opinions, prix et notes.`],
  [`Theo keeps gathering facts about a movie until he is too tired to go.`, `Theo continue de reunir des faits sur un film jusqu a etre trop fatigue pour y aller.`],
  [`Lina says she needs every possible detail about a notebook before deciding whether to buy it.`, `Lina dit qu elle a besoin de chaque detail possible sur un carnet avant de decider de l acheter.`],
  [`Noah keeps reading more and more about a weekend hike until the trail feels impossible to choose.`, `Noah lit toujours plus sur une randonnee de week-end jusqu a ce que le sentier paraisse impossible a choisir.`],
  [`Alya keeps reading forum threads about a blender until the simple purchase feels like a thesis.`, `Alya continue de lire des fils de forum sur un mixeur jusqu a ce que l achat simple ressemble a une these.`],
  [`Ben wants one more article about a bus pass even though he only needs the afternoon schedule.`, `Ben veut encore un article sur un pass de bus alors qu il a seulement besoin de l horaire de l apres-midi.`],
  [`Cleo keeps comparing three nearly identical notebooks until none of them feel good enough.`, `Cleo continue de comparer trois carnets presque identiques jusqu a ce qu aucun ne lui semble assez bon.`],
  [`Drew asks for more facts about a sandwich and ends up colder about lunch than before.`, `Drew demande plus de faits sur un sandwich et finit encore moins motive pour le dejeuner qu avant.`],
  [`Eli says he needs one more review of a lamp, then one more review of the reviews.`, `Eli dit qu il lui faut encore un avis sur une lampe, puis encore un avis sur les avis.`],
  [`Faye keeps opening tabs about a movie ticket and turns a five-minute choice into an hour.`, `Faye ouvre sans cesse des onglets sur un billet de cinema et transforme un choix de cinq minutes en une heure.`],
  [`Gabe insists on more details about a haircut, even though the style is already picked.`, `Gabe insiste pour obtenir plus de details sur une coupe de cheveux alors que le style est deja choisi.`],
  [`Hana wants extra data about a school backpack and forgets what color she wanted.`, `Hana veut des donnees supplementaires sur un sac a dos scolaire et oublie la couleur qu elle voulait.`],
  [`Iris keeps checking ratings for a cheap kettle until the decision feels impossible.`, `Iris continue de verifier les notes d une bouilloire bon marche jusqu a ce que la decision paraisse impossible.`],
  [`Jules asks for another comparison chart for two coffee brands and still feels unsure.`, `Jules demande encore un tableau comparatif pour deux marques de cafe et se sent toujours incertain.`],
  [`Kai says he cannot buy paper towels until he knows every possible brand story.`, `Kai dit qu il ne peut pas acheter d essuie-tout tant qu il ne connait pas toute l histoire de chaque marque.`],
  [`Lina keeps researching a train trip until she misses the discount.`, `Lina continue de se renseigner sur un trajet en train jusqu a manquer la reduction.`],
  [`Milo wants another source about a snack choice, then another source about the source.`, `Milo veut encore une source sur un choix de collation, puis encore une source sur la source.`],
  [`Nora keeps collecting facts about a phone case and loses interest in the phone itself.`, `Nora continue de rassembler des faits sur une coque de telephone et perd interet pour le telephone lui-meme.`],
  [`Omar asks for more and more details about a game night snack, making the plan stall.`, `Omar demande de plus en plus de details sur une collation pour la soiree jeux, ce qui bloque le plan.`],
  [`Pia says she needs extra information about a water bottle even though she just wants one that does not leak.`, `Pia dit qu elle a besoin de plus d informations sur une bouteille d eau alors qu elle en veut juste une qui ne fuit pas.`],
  [`Quinn keeps reading rankings for a grocery list and turns soap into a mystery.`, `Quinn continue de lire des classements pour une liste de courses et transforme le savon en mystere.`],
  [`Rina asks for one more chart about two shirt colors and cannot choose either.`, `Rina demande encore un graphique sur deux couleurs de chemise et ne peut choisir aucune des deux.`],
  [`Sam keeps searching about a parking app and ends up more confused than informed.`, `Sam continue de chercher des infos sur une appli de stationnement et finit plus confus que renseigne.`],
  [`Tia wants every possible detail about a movie time and misses the show.`, `Tia veut chaque detail possible sur l horaire d un film et rate la séance.`],
  [`Uma keeps comparing lunch options until the salad gets cold.`, `Uma continue de comparer des options de dejeuner jusqu a ce que la salade refroidisse.`],
  [`Vik says he needs another review before choosing a cheap pen.`, `Vik dit qu il lui faut encore un avis avant de choisir un stylo bon marche.`],
  [`Wren keeps researching a weekend walk and makes it sound like a flight plan.`, `Wren continue de se renseigner sur une promenade de week-end et la fait ressembler a un plan de vol.`],
  [`Xavier asks for more facts about a notebook than about a car loan.`, `Xavier demande plus de faits sur un carnet que sur un pret auto.`],
  [`Yara keeps collecting opinions about a desk chair until sitting down feels like a decision crisis.`, `Yara continue de recueillir des avis sur une chaise de bureau jusqu a ce que s asseoir ressemble a une crise de decision.`],
  [`Zane wants one more graph before picking a cereal.`, `Zane veut encore un graphique avant de choisir un cereale.`],
  [`Mina keeps checking ingredient lists for a cookie and forgets she already knows she likes it.`, `Mina continue de verifier les listes d ingredients d un biscuit et oublie qu elle sait deja qu elle l aime.`],
  [`Noah turns a simple phone charger choice into a giant research spiral.`, `Noah transforme un simple choix de chargeur de telephone en enorme spirale de recherche.`],
  [`Priya keeps opening new tabs about a museum ticket and loses the afternoon.`, `Priya ouvre sans cesse de nouveaux onglets sur un billet de musee et perd l apres-midi.`],
  [`Theo asks for more evidence about a restaurant's menu than about the actual food.`, `Theo demande plus de preuves sur le menu d un restaurant que sur la nourriture elle-meme.`],
  [`Ava keeps collecting pros and cons about a backpack and never clicks buy.`, `Ava continue de rassembler des avantages et des inconvenients sur un sac a dos et n appuie jamais sur acheter.`],
  [`Ben insists on one more explanation about a bus route, then one more about why he needs the explanation.`, `Ben insiste pour obtenir encore une explication sur un trajet de bus, puis encore une sur la raison pour laquelle il a besoin de cette explication.`],
  [`Cora keeps comparing pillow reviews until bedtime is gone.`, `Cora continue de comparer des avis sur des oreillers jusqu a ce que l heure de dormir disparaisse.`],
  [`Dylan wants every detail about a water bottle and treats a purchase like an audit.`, `Dylan veut chaque detail sur une bouteille d eau et traite un achat comme un audit.`],
  [`Emma keeps looking up facts about a sandwich shop until lunch is over.`, `Emma continue de chercher des faits sur une sandwicherie jusqu a ce que le dejeuner soit termine.`],
  [`Finn asks for a full research folder on a hairbrush.`, `Finn demande un dossier de recherche complet sur une brosse a cheveux.`],
  [`Gia keeps reading about a board game and makes a small choice feel risky.`, `Gia continue de lire sur un jeu de societe et fait paraitre un petit choix risqué.`],
  [`Hugo wants more facts about a library book than about his exam.`, `Hugo veut plus de faits sur un livre de bibliotheque que sur son examen.`],
  [`Ivy keeps gathering data on a coffee mug and can't move on.`, `Ivy continue de reunir des donnees sur une tasse a cafe et n avance plus.`],
  [`Jade says she needs another source on a movie sequel before buying popcorn.`, `Jade dit qu il lui faut encore une source sur une suite de film avant d acheter du popcorn.`],
  [`Kian keeps searching a simple snack question until the answer gets buried.`, `Kian continue de chercher sur une simple question de collation jusqu a ce que la reponse soit ensevelie.`],
  [`Lara keeps collecting extra notes about a calendar app and postpones the invitation.`, `Lara continue de collecter des notes supplementaires sur une appli de calendrier et reporte l invitation.`],
];

const OPTIONS_EN = ['Information Bias', 'Availability Heuristic', 'Analysis Paralysis', 'Confirmation Bias'];
const OPTIONS_FR = ["Biais d'information", 'Heuristique de disponibilité', 'Paralysie de l’analyse', 'Biais de confirmation'];

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
      id: 36201 + i,
      level: 4,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? "Biais d'information" : 'Information Bias',
      difficulty: i < 43 ? 1 : i < 50 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Plus d information ne signifie pas toujours une meilleure decision."
        : 'More information does not always lead to a better decision.',
      detailedExplanationBeginner: fr
        ? "Quand le choix est deja simple, trop d informations embrouillent la decision."
        : 'When a choice is already simple, too much information muddies the decision.',
      detailedExplanationIntermediate: fr
        ? "Le biais d information pousse a croire que demander toujours plus de details reduira le doute, alors qu au contraire cela peut ralentir ou bloquer la decision."
        : 'Information bias makes us think that asking for more and more details will reduce doubt, even though it can slow down or block the decision.',
      detailedExplanationExpert: fr
        ? "Ce biais apparait quand on confond quantite d information et utilite cognitive, puis qu on traite la collecte supplementaire comme une strategie de precision au lieu d un cout de charge mentale."
        : 'This bias appears when we confuse information quantity with cognitive usefulness, then treat extra gathering as precision strategy instead of a mental-load cost.',
      questionFormat: 'standard',
    };
  });
}

export const INFORMATION_BIAS_EXPANSION_EN: Question[] = make();
export const INFORMATION_BIAS_EXPANSION_FR: Question[] = make(true);
