import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya sees one cloudy patch in the forecast and assumes the whole picnic will be ruined.', 'Maya voit une seule zone nuageuse dans la météo et suppose que tout le pique-nique sera gâché.'],
  ['Leo hears the train is five minutes late and starts acting like the whole trip is doomed.', 'Leo apprend que le train a cinq minutes de retard et commence à agir comme si tout le trajet était fichu.'],
  ['Priya gets one critical comment on her draft and decides the essay is a disaster.', 'Priya reçoit un seul commentaire critique sur son brouillon et décide que la dissertation est une catastrophe.'],
  ['Omar notices a small mistake in the app and assumes the update will be a total mess.', 'Omar remarque une petite erreur dans l application et suppose que la mise à jour sera un désastre complet.'],
  ['Rina expects the birthday dinner to go badly because the first restaurant she wanted was full.', 'Rina s attend à ce que le dîner d anniversaire se passe mal parce que le premier restaurant qu elle voulait était complet.'],
  ['Ben sees rain in the morning and tells everyone the whole weekend is probably ruined.', 'Ben voit de la pluie le matin et dit à tout le monde que tout le week-end est probablement gâché.'],
  ['Zoe gets one difficult homework problem and immediately says the entire assignment is impossible.', 'Zoé rencontre un seul problème difficile dans les devoirs et dit aussitôt que tout le devoir est impossible.'],
  ['Kai misses one bus and acts like the rest of the commute will definitely go wrong.', 'Kai rate un seul bus et agit comme si le reste du trajet allait forcément mal se passer.'],
  ['Nora gets a slow reply from her boss and assumes the meeting tomorrow will be awful.', 'Nora reçoit une réponse lente de son patron et suppose que la réunion de demain sera terrible.'],
  ['Eli drops a spoon on the floor and says the whole dinner is now a disaster.', 'Eli fait tomber une cuillère par terre et dit que tout le dîner est maintenant un désastre.'],
  ['Lina forgets one detail in her presentation and thinks the audience will hate everything else.', 'Lina oublie un détail dans sa présentation et pense que le public va détester tout le reste.'],
  ['Grant hears the forecast mention wind and immediately packs as if the trip will be miserable.', 'Grant entend la météo parler de vent et fait ses valises comme si le voyage allait être pénible.'],
  ['Tia sees a red warning icon on her phone and assumes the battery will fail soon.', 'Tia voit une icône d avertissement rouge sur son téléphone et suppose que la batterie va bientôt lâcher.'],
  ['Noah gets stuck at one red light and concludes the whole drive will be frustrating.', 'Noah reste bloqué à un seul feu rouge et conclut que tout le trajet sera frustrant.'],
  ['Mia hears there may be delays at the store and decides shopping will be a waste of time.', 'Mia entend qu il pourrait y avoir des retards au magasin et décide que faire les courses sera une perte de temps.'],
  ['Jules sees a few clouds at lunch and says the afternoon will definitely be gloomy.', 'Jules voit quelques nuages à midi et dit que l après-midi sera forcément morose.'],
  ['Ava gets one awkward text and assumes the friendship is falling apart.', 'Ava reçoit un seul message gênant et suppose que l amitié s effondre.'],
  ['Finn thinks his run is ruined because the first kilometer felt hard.', 'Finn pense que sa course est gâchée parce que le premier kilomètre lui a paru difficile.'],
  ['Mina hears the printer make a weird noise and predicts a big office breakdown.', 'Mina entend l imprimante faire un bruit étrange et prévoit une grosse panne au bureau.'],
  ['Theo says the concert will be disappointing because the opening act was not amazing.', 'Théo dit que le concert sera décevant parce que la première partie n était pas incroyable.'],
  ['Juno worries the interview is already lost because she stumbled over one answer.', 'Juno s inquiète en pensant que l entretien est déjà perdu parce qu elle a buté sur une seule réponse.'],
  ['Iris checks her email late and assumes the missed message means something bad happened.', 'Iris consulte ses e-mails tard et suppose que le message manqué signifie qu il s est passé quelque chose de grave.'],
  ['Cole finds one spilled drink at the picnic and starts calling the whole outing a failure.', 'Cole voit une boisson renversée au pique-nique et commence à qualifier toute la sortie d échec.'],
  ['Riley has one slow group chat reply and assumes nobody wants to work with him.', 'Riley reçoit une seule réponse lente dans le groupe et suppose que personne ne veut travailler avec lui.'],
  ['Pia gets a low quiz score and concludes her entire term is going badly.', 'Pia obtient une mauvaise note à un quiz et conclut que tout son trimestre se passe mal.'],
  ['Hugo hears the car make a squeak and fears the repair bill will be huge.', 'Hugo entend la voiture couiner et craint que la facture de réparation soit énorme.'],
  ['Sam sees one crowded aisle and decides the grocery trip is a nightmare.', 'Sam voit une allée bondée et décide que les courses sont un cauchemar.'],
  ['Jade opens the assignment instructions and says there are too many steps to succeed.', 'Jade ouvre les consignes du devoir et dit qu il y a trop d étapes pour réussir.'],
  ['Owen gets stuck behind one slow truck and assumes the road trip will drag on forever.', 'Owen reste derrière un seul camion lent et suppose que le voyage va traîner sans fin.'],
  ['Lea hears her favorite café is closed for a day and says the whole week is ruined.', 'Léa apprend que son café préféré est fermé une journée et dit que toute la semaine est gâchée.'],
  ['Maya sees a typo in her message and decides the whole note looks careless.', 'Maya voit une faute de frappe dans son message et décide que toute la note paraît négligente.'],
  ['Ben finds the first chapter difficult and assumes the book will be unbearable.', 'Ben trouve le premier chapitre difficile et suppose que le livre sera insupportable.'],
  ['Ava notices her shoes are muddy and decides the whole outfit is hopeless.', 'Ava remarque que ses chaussures sont boueuses et décide que toute la tenue est fichue.'],
  ['Omar hears the museum might close early and expects the outing to go badly.', 'Omar entend que le musée pourrait fermer tôt et s attend à ce que la sortie se passe mal.'],
  ['Nina gets one confusing notification and assumes the whole app is broken.', 'Nina reçoit une seule notification confuse et suppose que toute l application est cassée.'],
  ['Eli says the team presentation will fail because one slide is out of order.', 'Eli dit que la présentation de l équipe va échouer parce qu une diapositive est dans le mauvais ordre.'],
  ['Lina sees the bakery run out of her favorite pastry and decides breakfast is ruined.', 'Lina voit que la boulangerie n a plus sa viennoiserie préférée et décide que le petit-déjeuner est gâché.'],
  ['Grant gets one delayed email and assumes the whole project is in trouble.', 'Grant reçoit un seul e-mail en retard et suppose que tout le projet est en difficulté.'],
  ['Tia misses one practice shot and tells herself the game will be a blowout.', 'Tia rate un tir à l entraînement et se dit que le match sera une défaite écrasante.'],
  ['Finn sees a small crack on a cup and assumes the whole set is unsafe.', 'Finn voit une petite fissure sur une tasse et suppose que tout le service est dangereux.'],
  ['Mina hears a friend cough once and begins expecting everyone to get sick.', 'Mina entend une amie tousser une fois et commence à s attendre à ce que tout le monde tombe malade.'],
  ['Theo gets one awkward silence at dinner and says the evening is already ruined.', 'Théo subit un seul silence gênant au dîner et dit que la soirée est déjà gâchée.'],
  ['Juno opens the calendar and panics because the week looks busy before she even starts.', 'Juno ouvre le calendrier et panique parce que la semaine semble chargée avant même de commencer.'],
  ['Iris sees the first line of feedback and assumes the rest of the review will be brutal.', 'Iris voit la première ligne de retour et suppose que le reste de l évaluation sera brutal.'],
  ['Cole hears about one missing package and concludes the whole delivery service is hopeless.', 'Cole entend parler d un seul colis manquant et conclut que tout le service de livraison est désespérant.'],
  ['Riley notices a tiny scratch on the table and says the new apartment is a mess.', 'Riley remarque une minuscule rayure sur la table et dit que le nouvel appartement est un désordre.'],
  ['Pia gets one "maybe" from a friend and assumes the plan will fall apart.', 'Pia reçoit un seul "peut-être" d une amie et suppose que le plan va s effondrer.'],
  ['Hugo sees one dark cloud over the park and expects the whole outing to turn bad.', 'Hugo voit un seul nuage sombre au-dessus du parc et s attend à ce que toute la sortie tourne mal.'],
  ['Sam gets one rejected login and thinks the website is clearly failing.', 'Sam se voit refuser une connexion une fois et pense que le site web est clairement en panne.'],
  ['Jade hears the news mention a strike and assumes the whole commute is doomed.', 'Jade entend aux informations qu il y a une grève et suppose que tout le trajet est fichu.'],
  ['Maya sees one email typo from a coworker and decides the person is not competent.', 'Maya voit une faute de frappe dans un e-mail d un collègue et décide que la personne n est pas compétente.'],
  ['Ben notices the first half of the hike is steep and says the whole day will be miserable.', 'Ben remarque que la première moitié de la randonnée est raide et dit que toute la journée sera pénible.'],
  ['Ava gets a late refund and assumes the store will never fix anything properly.', 'Ava reçoit un remboursement en retard et suppose que le magasin ne corrigera jamais rien correctement.'],
  ['Theo sees one bad review and decides the restaurant must be awful.', 'Théo voit un seul mauvais avis et décide que le restaurant doit être horrible.'],
  ['Sophie sees one cloudy afternoon and assumes the whole vacation will be miserable.', 'Sophie voit un seul après-midi nuageux et suppose que toutes les vacances seront misérables.'],
  ['Liam gets one slow reply from a friend and thinks the friendship is in trouble.', 'Liam reçoit une seule réponse lente d un ami et pense que l amitié est en danger.'],
  ['Emma notices one typo in the flyer and expects the event to be a complete failure.', 'Emma remarque une seule faute de frappe sur le flyer et s attend à ce que l événement soit un échec total.'],
  ['Diego misses one question on a practice test and decides the exam will go terribly.', 'Diego rate une question sur un test d entraînement et décide que l examen ira très mal.'],
  ['Lily hears a rumor about delays and assumes the whole school trip will be a disaster.', 'Lily entend une rumeur de retards et suppose que toute la sortie scolaire sera un désastre.'],
  ['Hassan sees a small scratch on the car and predicts expensive problems ahead.', 'Hassan voit une petite rayure sur la voiture et prédit des problèmes coûteux à venir.'],
  ['Ruby gets one "we need to talk" text and immediately imagines the worst possible news.', 'Ruby reçoit un seul message "il faut qu on parle" et imagine aussitôt la pire nouvelle possible.'],
  ['Noah spots one empty shelf at the store and thinks the whole shopping trip is doomed.', 'Noah repère une seule étagère vide au magasin et pense que toute la sortie courses est fichue.'],
  ['Chloe hears that the meeting might run long and assumes the entire day will be ruined.', 'Chloe entend que la réunion pourrait durer longtemps et suppose que toute la journée sera gâchée.'],
  ['Yusuf gets one wrong answer in class and believes he is falling behind in every subject.', 'Yusuf donne une mauvaise réponse en classe et croit qu il prend du retard dans toutes les matières.'],
  ['Maya sees one rainy forecast and decides the weekend is completely lost.', 'Maya voit une seule prévision de pluie et décide que le week-end est complètement perdu.'],
  ['Lucas gets one lukewarm comment on his idea and thinks nobody values it.', 'Lucas reçoit un commentaire tiède sur son idée et pense que personne ne la valorise.'],
  ['Ari hears about a train delay and imagines the whole commute turning into chaos.', 'Ari entend parler d un retard de train et imagine que tout le trajet va tourner au chaos.'],
  ['Mina notices one smudge on the glass and thinks the whole apartment is dirty.', 'Mina remarque une seule tache sur la vitre et pense que tout l appartement est sale.'],
  ['Owen sees one difficult worksheet and assumes the entire course will be impossible.', 'Owen voit une seule fiche de travail difficile et suppose que tout le cours sera impossible.'],
  ['Zara gets one missed call from her boss and expects the rest of the day to go badly.', 'Zara reçoit un appel manqué de son patron et s attend à ce que le reste de la journée se passe mal.'],
  ['Ben hears the store is out of one item and thinks the whole market is useless.', 'Ben apprend que le magasin n a plus un article et pense que tout le marché est inutile.'],
  ['Nora sees one awkward silence at lunch and decides the whole friendship is failing.', 'Nora subit un seul silence gênant au déjeuner et décide que toute l amitié est en train d échouer.'],
  ['Eli gets one low score on a quiz and predicts he will bomb the whole semester.', 'Eli obtient une mauvaise note à un quiz et prédit qu il va rater tout le semestre.'],
  ['Pia hears a small problem with the printer and expects the entire office to fall apart.', 'Pia entend un petit problème avec l imprimante et s attend à ce que tout le bureau s écroule.'],
  ['Theo sees one crowded aisle and says grocery shopping is always a nightmare.', 'Theo voit une seule allée bondée et dit que les courses sont toujours un cauchemar.'],
  ['Juno gets one critical edit on her report and assumes the report is a failure.', 'Juno reçoit une seule modification critique sur son rapport et suppose que le rapport est un échec.'],
  ['Iris sees a dark cloud overhead and acts like the picnic is doomed.', 'Iris voit un nuage sombre au-dessus d elle et agit comme si le pique-nique était condamné.'],
  ['Cole hears one negative news story and decides the whole neighborhood is unsafe.', 'Cole entend une seule information négative et décide que tout le quartier n est pas sûr.'],
  ['Riley gets one confusing text and thinks the whole evening is going to be awful.', 'Riley reçoit un seul texto confus et pense que toute la soirée va être horrible.'],
  ['Pia sees one missing ingredient and says cooking dinner is pointless.', 'Pia voit un seul ingrédient manquant et dit que préparer le dîner ne sert à rien.'],
  ['Hugo hears the dentist might mention a cavity and imagines a painful week ahead.', 'Hugo entend que le dentiste pourrait parler d une carie et imagine une semaine douloureuse à venir.'],
  ['Sam gets one delayed package and concludes online shopping always goes wrong.', 'Sam reçoit un seul colis en retard et conclut que les achats en ligne tournent toujours mal.'],
  ['Jade notices one mistake in her message and assumes the recipient thinks she is careless.', 'Jade remarque une seule erreur dans son message et suppose que le destinataire la pense négligente.'],
  ['Maya sees one bad headline and expects the whole city to be falling apart.', 'Maya voit un seul titre négatif et s attend à ce que toute la ville s effondre.'],
  ['Ben hears about a parking ticket and decides the whole outing is ruined.', 'Ben entend parler d une contravention de stationnement et décide que toute la sortie est gâchée.'],
  ['Ava gets one difficult stretch in her run and believes the rest will be hopeless.', 'Ava rencontre une seule portion difficile pendant sa course et croit que le reste sera désespérant.'],
  ['Omar sees one spot of bad weather and assumes the outdoor event will fail.', 'Omar voit une seule zone de mauvais temps et suppose que l événement en plein air va échouer.'],
  ['Nina gets one "maybe later" from a friend and starts expecting rejection everywhere.', 'Nina reçoit un seul "peut-être plus tard" d une amie et commence à s attendre au rejet partout.'],
  ['Eli hears one complaint and says the whole plan is probably terrible.', 'Eli entend une plainte et dit que tout le plan est probablement terrible.'],
  ['Lina spots one messy corner and says the whole house is a disaster.', 'Lina repère un seul coin en désordre et dit que toute la maison est en désordre.'],
  ['Grant gets one slow morning and predicts the entire week will drag.', 'Grant connaît une seule matinée lente et prédit que toute la semaine va traîner.'],
  ['Tia sees one unkind comment on a post and thinks nobody likes her work.', 'Tia voit un seul commentaire méchant sur une publication et pense que personne n aime son travail.'],
  ['Finn hears a single warning about traffic and assumes the road trip will be awful.', 'Finn entend un seul avertissement sur la circulation et suppose que le road trip sera horrible.'],
  ['Mina notices one awkward pause in a call and decides the conversation failed.', 'Mina remarque une seule pause gênante dans un appel et décide que la conversation a échoué.'],
  ['Theo gets one disappointing slice of cake and says the whole party was bad.', 'Théo reçoit une seule part de gâteau décevante et dit que toute la fête était mauvaise.'],
  ['Juno sees one slow day at work and concludes the job is going nowhere.', 'Juno voit une seule journée lente au travail et conclut que le travail n avance nulle part.'],
  ['Iris hears one skeptical remark about her idea and expects the idea to be rejected everywhere.', 'Iris entend une remarque sceptique sur son idée et s attend à ce qu elle soit rejetée partout.'],
  ['Cole gets one wet sock on the hike and says the whole hike was a bad idea.', 'Cole a une seule chaussette mouillée pendant la randonnée et dit que toute la randonnée était une mauvaise idée.'],
  ['Riley hears one problem with the booking and assumes the whole trip is doomed.', 'Riley entend un seul problème de réservation et suppose que tout le voyage est condamné.'],
  ['Pia sees one typo on the poster and thinks nobody will come to the event.', 'Pia voit une seule faute de frappe sur l affiche et pense que personne ne viendra à l événement.'],
];

const OPTIONS_EN = ['Pessimism Bias', 'Negativity Bias', 'Catastrophizing', 'Availability Heuristic'];
const OPTIONS_FR = ['Biais de pessimisme', 'Biais de négativité', 'Catastrophisme', 'Heuristique de disponibilité'];

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

function createQuestions(language: 'en' | 'fr'): Question[] {
  return SCENARIOS.map(([english, french], index) => {
    const correctIndex = index % 4;
    const isFrench = language === 'fr';
    return {
      id: 37451 + index,
      level: 5,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? 'Biais de pessimisme' : 'Pessimism Bias',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La personne imagine surtout le pire et donne trop de poids aux problèmes possibles.'
        : 'The person imagines the worst outcome first and gives too much weight to possible problems.',
      detailedExplanationBeginner: isFrench
        ? 'Le pire scénario prend la place d une estimation réaliste.'
        : 'The worst-case scenario is taking over a realistic estimate.',
      detailedExplanationIntermediate: isFrench
        ? "Le biais de pessimisme pousse à surestimer les problèmes, les retards ou les échecs possibles, même quand la situation réelle est beaucoup moins grave."
        : 'Pessimism bias pushes someone to overestimate problems, delays, or failures, even when the real situation is much less severe.',
      detailedExplanationExpert: isFrench
        ? "Ce biais peut servir de protection quand il incite à la prudence, mais il devient trompeur lorsqu il transforme une petite alerte en catastrophe certaine. Dans la pratique, il réduit la prise de risque utile, augmente l anxiété et peut empêcher de voir les issues normales ou favorables."
        : 'This bias can be protective when it encourages caution, but it becomes misleading when it turns a small warning into a certain catastrophe. In practice, it reduces useful risk-taking, increases anxiety, and can block the recognition of normal or favorable outcomes.',
      questionFormat: 'standard',
    };
  });
}

export const PESSIMISM_BIAS_EXPANSION_EN: Question[] = createQuestions('en');
export const PESSIMISM_BIAS_EXPANSION_FR: Question[] = createQuestions('fr');
