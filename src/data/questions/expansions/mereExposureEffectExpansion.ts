import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Mia starts liking a brand of tea only because she has seen the box on the shelf every week at the store.', 'Mia commence à aimer une marque de thé simplement parce qu elle voit la boîte sur l étagère chaque semaine au magasin.'],
  ['Leo keeps choosing the same sandwich because the wrapper has become familiar from lunch breaks.', 'Leo continue de choisir le même sandwich parce que son emballage lui est devenu familier pendant les pauses déjeuner.'],
  ['Nina trusts a song more after hearing it in the cafe every morning.', 'Nina fait davantage confiance à une chanson après l avoir entendue tous les matins au café.'],
  ['Owen says he prefers the blue notebook because he has seen it around the office for months.', 'Owen dit qu il préfère le carnet bleu parce qu il l a vu traîner au bureau pendant des mois.'],
  ['Priya starts thinking the new bakery is better simply because she passes it every day.', 'Priya commence à penser que la nouvelle boulangerie est meilleure simplement parce qu elle passe devant tous les jours.'],
  ['Ben likes the same pasta sauce more after seeing the jar in the fridge all week.', 'Ben aime davantage la même sauce pour pâtes après avoir vu le pot dans le frigo toute la semaine.'],
  ['Tara feels more comfortable with a coworker after seeing them at the coffee machine every morning.', 'Tara se sent plus à l aise avec un collègue après l avoir vu chaque matin à la machine à café.'],
  ['Kai prefers the familiar phone wallpaper because it has been on the screen for months.', 'Kai préfère le fond d écran familier parce qu il est resté sur l écran pendant des mois.'],
  ['Jules starts calling one store reliable after walking past it on the way to work for a month.', 'Jules finit par dire qu un magasin est fiable après être passé devant en allant au travail pendant un mois.'],
  ['Ava likes a joke in a group chat more after seeing it repeated a few times.', 'Ava apprécie davantage une blague dans un groupe de discussion après l avoir vue répétée plusieurs fois.'],
  ['Noah thinks a podcast host is smarter after hearing the opening intro every day.', 'Noah pense qu un animateur de podcast est plus intelligent après avoir entendu l introduction chaque jour.'],
  ['Mina chooses the cereal she has seen in ads all month, even without tasting it.', 'Mina choisit les céréales qu elle a vues en publicité tout le mois, sans même les goûter.'],
  ['Eli feels warmer toward a classmate after seeing them in three different classes.', 'Eli se sent plus sympathique envers un camarade après l avoir vu dans trois cours différents.'],
  ['Rina starts believing a restaurant is good because her bus stops near it daily.', 'Rina commence à croire qu un restaurant est bon parce que son bus s arrête près de lui tous les jours.'],
  ['Hugo trusts a local gym more after seeing its sign every commute.', 'Hugo fait davantage confiance à une salle de sport locale après avoir vu son enseigne à chaque trajet.'],
  ['Lina prefers the same mug because it has become part of her morning routine.', 'Lina préfère la même tasse parce qu elle fait désormais partie de sa routine du matin.'],
  ['Grant likes a bookstore more after seeing the window display on every walk home.', 'Grant aime davantage une librairie après avoir vu sa vitrine à chaque retour à pied.'],
  ['Zoe feels a little friendlier toward a neighbor she keeps spotting at the mailbox.', 'Zoe se sent un peu plus amicale envers une voisine qu elle croise sans cesse à la boîte aux lettres.'],
  ['Milo favors the same email newsletter because it keeps appearing in his inbox.', 'Milo favorise la même lettre d information parce qu elle revient sans cesse dans sa boîte mail.'],
  ['Theo starts buying one snack more often because he has seen the package a lot.', 'Theo commence à acheter plus souvent un snack parce qu il a souvent vu son emballage.'],
  ['Pia thinks the old jacket looks better now that she has worn it many times.', 'Pia pense que la vieille veste a meilleure allure maintenant qu elle l a portée de nombreuses fois.'],
  ['Finn trusts a cartoon character more after watching reruns all summer.', 'Finn fait davantage confiance à un personnage de dessin animé après avoir regardé des rediffusions tout l été.'],
  ['Maya says the same cafe feels cozier because she has passed it on every school run.', 'Maya dit que le même café semble plus accueillant parce qu elle est passée devant à chaque trajet scolaire.'],
  ['Sam likes a grocery brand more after seeing it on the top shelf every week.', 'Sam aime davantage une marque de supermarché après l avoir vue sur l étagère du haut chaque semaine.'],
  ['Juno becomes attached to a ringtone because the phone has played it hundreds of times.', 'Juno s attache à une sonnerie parce que le téléphone l a jouée des centaines de fois.'],
  ['Iris thinks the gym playlist is good because she hears it during every workout.', 'Iris pense que la playlist de la salle est bonne parce qu elle l entend à chaque séance.'],
  ['Cole starts liking a neighbor after exchanging greetings at the elevator all month.', 'Cole commence à aimer un voisin après avoir échangé des salutations dans l ascenseur tout le mois.'],
  ['Nora buys the same soap again because the label is familiar from the bathroom shelf.', 'Nora rachète le même savon parce que l étiquette lui est familière depuis l étagère de la salle de bain.'],
  ['Ari feels more positive about a brand of shoes after seeing other students wear them.', 'Ari se sent plus positif à propos d une marque de chaussures après avoir vu d autres étudiants la porter.'],
  ['Rita keeps using the same map app because the icon has become reassuring.', 'Rita continue d utiliser la même application de carte parce que l icône est devenue rassurante.'],
  ['Tia starts preferring a local pizza place after driving by it every Friday night.', 'Tia commence à préférer une pizzeria locale après être passée devant chaque vendredi soir.'],
  ['Oli thinks a TV show is better because clips keep showing up in his feed.', 'Oli pense qu une série est meilleure parce que des extraits reviennent sans cesse dans son flux.'],
  ['Lara likes the same pen more because it has been on her desk since orientation.', 'Lara aime davantage le même stylo parce qu il est sur son bureau depuis la rentrée.'],
  ['Ben trusts a coffee blend more after seeing the box in every break room.', 'Ben fait davantage confiance à un mélange de café après avoir vu la boîte dans chaque salle de pause.'],
  ['Mina starts feeling loyal to a brand of cereal just because it appears in the pantry often.', 'Mina commence à se sentir fidèle à une marque de céréales simplement parce qu elle apparaît souvent dans le garde-manger.'],
  ['Drew likes the same hoodie more after wearing it to every late-night study session.', 'Drew aime davantage le même sweat à capuche après l avoir porté à chaque séance d étude tardive.'],
  ['Jade thinks a neighborhood park is nicer because she walks through it daily.', 'Jade pense qu un parc de quartier est plus agréable parce qu elle le traverse tous les jours.'],
  ['Owen trusts a food truck more after seeing it parked outside work all week.', 'Owen fait davantage confiance à un food truck après l avoir vu garé devant le travail toute la semaine.'],
  ['Mila starts preferring the same notebook cover because it has been in her bag for months.', 'Mila commence à préférer la même couverture de carnet parce qu elle est dans son sac depuis des mois.'],
  ['Evan thinks a bakery smells better because he passes it on every commute.', 'Evan pense qu une boulangerie sent meilleur parce qu il passe devant à chaque trajet.'],
  ['Kira likes the same app icon more because she has tapped it every day.', 'Kira aime davantage la même icône d application parce qu elle l a touchée chaque jour.'],
  ['Grant starts believing a coworker is dependable after seeing them at the same desk each morning.', 'Grant commence à croire qu un collègue est fiable après l avoir vu au même bureau chaque matin.'],
  ['Zara prefers the same notebook because its cover feels familiar from repeated use.', 'Zara préfère le même carnet parce que sa couverture lui semble familière à force d usage.'],
  ['Parker thinks a movie poster looks better after seeing it on the wall for weeks.', 'Parker pense qu une affiche de film est plus belle après l avoir vue au mur pendant des semaines.'],
  ['Hana feels more favorably about a bus route because she sees the same stops every day.', 'Hana se sent plus favorable à propos d une ligne de bus parce qu elle voit les mêmes arrêts tous les jours.'],
  ['Leo starts preferring the same chips brand because it has been in his lunch bag all semester.', 'Leo commence à préférer la même marque de chips parce qu elle est dans son sac de déjeuner tout le semestre.'],
  ['Maya trusts a book more after seeing it on the nightstand for a month.', 'Maya fait davantage confiance à un livre après l avoir vu sur la table de nuit pendant un mois.'],
  ['Nina feels attached to a plant because she has passed it on the windowsill every morning.', 'Nina s attache à une plante parce qu elle est passée devant sur le rebord de la fenêtre chaque matin.'],
  [`After seeing the same bakery sign on every commute, Owen starts feeling like the bakery must be good.`, `Apres avoir vu la meme enseigne de boulangerie a chaque trajet, Owen commence a se dire que la boulangerie doit etre bonne.`],
  [`Priya likes a podcast more after hearing the intro every morning for a week.`, `Priya aime davantage un podcast apres avoir entendu son introduction chaque matin pendant une semaine.`],
  [`Ben trusts the same coffee blend more after spotting the box in every break room.`, `Ben fait davantage confiance au meme melange de cafe apres avoir vu la boite dans chaque salle de pause.`],
  [`Tara feels warmer toward a coworker after seeing them by the kettle every day.`, `Tara se sent plus chaleureuse envers un collegue apres l avoir vu chaque jour pres de la bouilloire.`],
  [`Mina starts preferring a local park after walking through it on every school run.`, `Mina commence a preferer un parc local apres le traverser a chaque trajet scolaire.`],
  [`Jules likes the same ringtone more after hearing it hundreds of times on his phone.`, `Jules aime davantage la meme sonnerie apres l avoir entendue des centaines de fois sur son telephone.`],
  [`Ava thinks a neighbor seems friendlier after exchanging the same greeting all month.`, `Ava pense qu une voisine parait plus sympathique apres avoir echangé le meme salut tout le mois.`],
  [`Theo starts favoring a cereal brand after seeing it in ads again and again.`, `Theo commence a favoriser une marque de cereales apres l avoir vue dans les pubs encore et encore.`],
  [`Nora grows more attached to a mug after using it every morning for weeks.`, `Nora s attache davantage a une tasse apres l avoir utilisee chaque matin pendant des semaines.`],
  [`Milo thinks a shop looks better just because he has passed it for months.`, `Milo pense qu une boutique a meilleure allure simplement parce qu il est passe devant pendant des mois.`],
];

const OPTIONS_EN = ['Mere Exposure Effect', 'Availability Heuristic', 'Endowment Effect', 'Halo Effect'];
const OPTIONS_FR = ['Effet de simple exposition', 'Heuristique de disponibilité', 'Effet de dotation', 'Effet de halo'];

function rotatedOptions(options: string[], correctIndex: number): string[] {
  const distractors = options.slice(1);
  const result = [...distractors];
  result.splice(correctIndex, 0, options[0]);
  return result;
}

function subLevelFor(index: number): SubLevel {
  if (index < 43) return SubLevel.BEGINNER;
  if (index < 50) return SubLevel.INTERMEDIATE;
  return SubLevel.EXPERT;
}

function createQuestions(language: 'en' | 'fr'): Question[] {
  return SCENARIOS.map(([english, french], index) => {
    const correctIndex = index % 4;
    const isFrench = language === 'fr';
    return {
      id: 38801 + index,
      level: 3,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Effet de simple exposition' : 'Mere Exposure Effect',
      difficulty: index < 43 ? 1 : index < 50 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? "Plus une chose est vue ou entendue, plus elle paraît familière et sympathique."
        : 'The more something is seen or heard, the more familiar and likable it feels.',
      detailedExplanationBeginner: isFrench
        ? "La répétition donne une impression positive."
        : 'Repeated exposure creates a positive feeling.',
      detailedExplanationIntermediate: isFrench
        ? "On confond facilement familiarité et vraie qualité."
        : 'People easily confuse familiarity with real quality.',
      detailedExplanationExpert: isFrench
        ? "L effet de simple exposition montre que la familiarité répétée peut augmenter l appréciation sans qu il y ait de nouveau contenu pertinent; l impression remplace alors l évaluation."
        : 'The mere exposure effect shows that repeated familiarity can increase liking without new relevant information; feeling replaces evaluation.',
      questionFormat: 'standard',
    };
  });
}

export const MERE_EXPOSURE_EFFECT_EXPANSION_EN: Question[] = createQuestions('en');
export const MERE_EXPOSURE_EFFECT_EXPANSION_FR: Question[] = createQuestions('fr');
