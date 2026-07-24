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
