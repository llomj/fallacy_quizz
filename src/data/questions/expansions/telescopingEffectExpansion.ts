import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says the concert was only last month even though it happened nearly a year ago.', 'Maya dit que le concert a eu lieu il y a seulement un mois alors qu il s est passe il y a presque un an.'],
  ['Leo swears the argument with his brother was a few days ago, but it was actually last winter.', 'Leo jure que la dispute avec son frere date de quelques jours, alors qu elle remonte en fait a l hiver dernier.'],
  ['Priya says she started the hobby this spring, but she actually began two springs ago.', 'Priya dit qu elle a commence ce loisir ce printemps, mais elle l a en fait commence il y a deux printemps.'],
  ['Omar remembers the road trip as being last summer, even though it happened three summers ago.', 'Omar se souvient du road trip comme s il avait eu lieu l ete dernier, alors qu il s est passe il y a trois etes.'],
  ['Rina says the bad review was recent, but the email is from 2023.', 'Rina dit que le mauvais avis est recent, mais le courriel date de 2023.'],
  ['Ben thinks his old apartment leak happened only a month before he moved, but it was much earlier.', 'Ben pense que la fuite de son ancien appartement a eu lieu seulement un mois avant son demenagement, mais c etait bien plus tot.'],
  ['Zoe says the family reunion was just last holiday season when it was really several years ago.', 'Zoé dit que la reunion de famille a eu lieu la derniere saison des fetes alors qu elle remonte en realite a plusieurs annees.'],
  ['Kai remembers the workplace fight as happening “not long ago,” but it was over two years back.', 'Kai se souvient de la dispute au travail comme si elle datait de « pas longtemps », alors qu elle remonte a plus de deux ans.'],
  ['Nora says the school trip was in elementary school when it actually happened in middle school.', 'Nora dit que la sortie scolaire a eu lieu a l ecole primaire alors qu elle s est passee en college.'],
  ['Eli says the dentist visit was last week, but the receipt proves it was from last year.', 'Eli dit que la visite chez le dentiste date de la semaine derniere, mais le reçu prouve que c etait l annee derniere.'],
  ['Lina says the birthday dinner was “a couple of months ago” even though it was almost three years ago.', 'Lina dit que le diner d anniversaire date de « quelques mois » alors qu il remonte a presque trois ans.'],
  ['Grant says the online order was delayed yesterday, but the tracking page shows it was months ago.', 'Grant dit que la commande en ligne a ete retardee hier, mais le suivi montre que c etait il y a des mois.'],
  ['Tia says the breakup was last spring, but it happened the spring before that.', 'Tia dit que la rupture a eu lieu au printemps dernier, mais elle a eu lieu le printemps precedent.'],
  ['Noah says the argument happened recently, although the text thread is from 2022.', 'Noah dit que la dispute est recente, bien que la conversation texte date de 2022.'],
  ['Mia says the first time she tried the recipe was this winter, but it was actually years earlier.', 'Mia dit que la premiere fois qu elle a essaye la recette etait cet hiver, mais c etait en fait des annees plus tot.'],
  ['Jules says the move to the new city was “just last year” when it was much longer ago.', 'Jules dit que le demenagement dans la nouvelle ville date de « l annee derniere » alors que c etait bien plus ancien.'],
  ['Ava says the team meeting was last Friday, but it was the Friday before that.', 'Ava dit que la reunion d equipe a eu lieu vendredi dernier, mais c etait le vendredi d avant.'],
  ['Finn says the car repair was only a few weeks ago, but the invoice says otherwise.', 'Finn dit que la reparation de la voiture date de seulement quelques semaines, mais la facture dit le contraire.'],
  ['Mina says the camping trip was in recent memory, though it was before her current job.', 'Mina dit que le voyage de camping est encore recent, alors qu il a eu lieu avant son emploi actuel.'],
  ['Theo says the kitchen remodel was last year, but it was actually four years ago.', 'Theo dit que la renovation de la cuisine a eu lieu l annee derniere, mais c etait en fait il y a quatre ans.'],
  ['Juno says the family pet died only recently, but the vet records show it was much earlier.', 'Juno dit que l animal de compagnie de la famille est mort recemment, mais les dossiers du veterinaire montrent que c etait bien plus tot.'],
  ['Iris says the school play happened “not too long ago,” but it was before the pandemic.', 'Iris dit que la piece de l ecole s est passee « il n y a pas si longtemps », mais c etait avant la pandemie.'],
  ['Cole says the flight delay was from this month, but it was from last year.', 'Cole dit que le retard de vol date de ce mois-ci, mais il date de l annee derniere.'],
  ['Riley says the library renovation is new, but it opened years ago.', 'Riley dit que la renovation de la bibliotheque est recente, mais elle a ouvert il y a des annees.'],
  ['Pia says the office party was last season, though it happened two seasons ago.', 'Pia dit que la fete du bureau a eu lieu la saison derniere, alors qu elle a eu lieu il y a deux saisons.'],
  ['Hugo says the road closure started yesterday, but the sign has been up for months.', 'Hugo dit que la route est fermee depuis hier, mais le panneau est la depuis des mois.'],
  ['Sam says the old class prank happened “not long before graduation,” but it was in freshman year.', 'Sam dit que l ancienne farce de classe a eu lieu « peu de temps avant le diplome », mais c etait en premiere annee.'],
  ['Jade says the festival was last summer when it was actually the summer before last.', 'Jade dit que le festival a eu lieu l ete dernier alors qu il s est en fait passe l ete d avant.'],
  ['Owen says the coachs speech was last week, but it was at least a year ago.', 'Owen dit que le discours de l entraineur date de la semaine derniere, mais il remonte a au moins un an.'],
  ['Lea says the house guest stayed over recently, though the visit was before her last birthday.', 'Lea dit que l invite a la maison a sejourne recemment, alors que la visite a eu lieu avant son dernier anniversaire.'],
  ['Maya says the viral post was from this morning, but it was actually from last month.', 'Maya dit que la publication virale date de ce matin, mais elle date en fait du mois dernier.'],
  ['Ben says the dentist cancelled yesterday, but it was actually two months ago.', 'Ben dit que le dentiste a annule hier, mais c etait en fait il y a deux mois.'],
  ['Ava says the road trip happened in 2025, but the photos show 2023.', 'Ava dit que le road trip a eu lieu en 2025, mais les photos montrent 2023.'],
  ['Omar says the old promotion was last quarter, but it was two years earlier.', 'Omar dit que l ancienne promotion date du trimestre dernier, mais c etait deux ans avant.'],
  ['Nina says the neighborhood fire was last month, even though it was in a much older news archive.', 'Nina dit que l incendie du quartier a eu lieu le mois dernier, alors qu il figure dans des archives bien plus anciennes.'],
  ['Eli says the movie night was “just recently,” but it was before his last job change.', 'Eli dit que la soiree cinema a eu lieu « recemment », mais c etait avant son dernier changement de travail.'],
  ['Lina says the doctor appointment was this year, but the reminder says last year.', 'Lina dit que le rendez-vous chez le medecin a eu lieu cette annee, mais le rappel dit l annee derniere.'],
  ['Grant says the software bug showed up yesterday, but the patch notes are from six months ago.', 'Grant dit que le bug logiciel est apparu hier, mais les notes du correctif datent de six mois.'],
  ['Tia says the family dinner was recent, but it happened before her cousin had a baby.', 'Tia dit que le diner de famille est recent, mais il s est passe avant que sa cousine ait un bebe.'],
  ['Noah says the school fundraiser was last fall, but it was the fall before that.', 'Noah dit que la collecte de fonds de l ecole a eu lieu l automne dernier, mais c etait l automne d avant.'],
  ['Mia says the apology email came in today, but it was sent weeks ago.', 'Mia dit que le courriel d excuses est arrive aujourd hui, mais il a ete envoye il y a des semaines.'],
  ['Jules says the wedding was in the recent past, though it happened before their first apartment.', 'Jules dit que le mariage est dans un passe recent, alors qu il a eu lieu avant leur premier appartement.'],
  ['Ava says the game night was last month, but the invite is from last year.', 'Ava dit que la soiree jeux a eu lieu le mois dernier, mais l invitation date de l annee derniere.'],
  ['Finn says the train delay was yesterday, but the station notice is from last winter.', 'Finn dit que le retard du train a eu lieu hier, mais l avis de gare date de l hiver dernier.'],
  ['Mina says the office announcement was this week, but it was at least a year old.', 'Mina dit que l annonce du bureau est de cette semaine, mais elle a au moins un an.'],
  ['Theo says the school closure was last year, although the calendar says it was three years ago.', 'Theo dit que la fermeture de l ecole a eu lieu l annee derniere, alors que le calendrier indique que c etait il y a trois ans.'],
  ['Juno says the road trip photo is from last weekend, but the filename says 2024.', 'Juno dit que la photo du road trip date du week-end dernier, mais le nom du fichier indique 2024.'],
  ['Iris says the doctor called recently, but the voicemail is from before her promotion.', 'Iris dit que le medecin a appele recemment, mais le message vocal date d avant sa promotion.'],
  ['Cole says the charity event was not long ago, but the flyer is from several summers back.', 'Cole dit que l evenement caritatif n est pas ancien, mais l affiche date de plusieurs etes en arriere.'],
  ['Riley says the concert ticket was from this year, but it was printed last year.', 'Riley dit que le billet de concert est de cette annee, mais il a ete imprime l annee derniere.'],
  ['Pia says the move happened months ago, but the email chain shows it was years ago.', 'Pia dit que le demenagement a eu lieu il y a des mois, mais la chaine de courriels montre que c etait il y a des annees.'],
  ['Hugo says the first phone was used recently, though it was from his old school days.', 'Hugo dit que le premier telephone a ete utilise recemment, alors qu il remonte a ses annees de college.'],
];

const OPTIONS_EN = ['Telescoping Effect', 'False Memory', 'Hindsight Bias', 'Recency Effect'];
const OPTIONS_FR = ['Effet de télescopage', 'Faux souvenir', 'Biais rétrospectif', 'Effet de récence'];

function rotate(options: string[], correctIndex: number): string[] {
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
    const isFrench = language === 'fr';
    const correctIndex = index % 4;
    return {
      id: 42401 + index,
      level: 5,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Effet de télescopage' : 'Telescoping Effect',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotate(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'Un souvenir est deplace dans le temps et semble plus recent ou plus ancien qu il ne l est.'
        : 'A memory gets displaced in time and seems more recent or older than it really is.',
      detailedExplanationBeginner: isFrench
        ? 'Le souvenir n est pas a la bonne date.'
        : 'The memory is placed at the wrong date.',
      detailedExplanationIntermediate: isFrench
        ? "L effet de telescopage survient quand on brouille l intervalle de temps d un evenement. Les gens rapprochent souvent les souvenirs anciens du present ou eloignent des souvenirs recents, ce qui fausse la chronologie."
        : 'Telescoping effect happens when people blur the time interval of an event. They often pull old memories closer to the present or push recent ones farther away, which distorts the timeline.',
      detailedExplanationExpert: isFrench
        ? "Ce biais de datation est souvent combine a la familiarite et a la reconstruction narrative: on se rappelle le contenu general, mais pas la borne temporelle exacte. Comme la date n est pas encodee avec precision, le cerveau la remplace par une estimation intuitive qui semble plausible."
        : 'This dating bias often combines with familiarity and narrative reconstruction: we remember the gist, but not the exact time boundary. Because the date is not encoded precisely, the brain replaces it with a plausible intuitive estimate.',
      questionFormat: 'standard',
    };
  });
}

export const TELESCOPING_EFFECT_EXPANSION_EN: Question[] = createQuestions('en');
export const TELESCOPING_EFFECT_EXPANSION_FR: Question[] = createQuestions('fr');
