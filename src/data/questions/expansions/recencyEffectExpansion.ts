import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya hears ten compliments about her presentation, but the one awkward silence at the end is all she can remember on the walk home.', 'Maya entend dix compliments sur sa présentation, mais le seul silence gênant à la fin est tout ce dont elle se souvient sur le chemin du retour.'],
  ['Leo likes the whole movie, yet the last scene is what he keeps talking about at dinner.', 'Leo aime tout le film, mais la dernière scène est ce dont il parle sans cesse au dîner.'],
  ['Priya has a good day at work, but one sharp email before leaving colors her memory of the whole shift.', 'Priya passe une bonne journée au travail, mais un seul e-mail sec avant de partir colore son souvenir de tout le service.'],
  ['Omar enjoys the school trip, though the bus ride back is the part he remembers most.', 'Omar apprécie la sortie scolaire, mais le trajet en bus du retour est la partie dont il se souvient le plus.'],
  ['Rina reads an article with careful arguments, but the last alarming paragraph is the one she repeats later.', 'Rina lit un article avec des arguments nuancés, mais le dernier paragraphe alarmiste est celui qu elle répète ensuite.'],
  ['Ben gets several helpful comments on his essay, yet the final correction is the only thing he notices after class.', 'Ben reçoit plusieurs remarques utiles sur sa dissertation, mais la dernière correction est la seule chose qu il remarque après le cours.'],
  ['Zoe enjoys most of the restaurant meal, but the final cold bite is what she remembers on the drive home.', 'Zoé apprécie presque tout le repas au restaurant, mais la dernière bouchée froide est ce dont elle se souvient sur le chemin du retour.'],
  ['Kai watches a long meeting with many good points, but the closing criticism is what sticks with him.', 'Kai suit une longue réunion avec beaucoup de bons points, mais la critique finale est ce qui reste avec lui.'],
  ['Nora has a pleasant weekend, yet Sunday night stress is the part she thinks defines the whole break.', 'Nora passe un week-end agréable, mais le stress du dimanche soir est la partie qu elle croit définir tout le repos.'],
  ['Eli hears a podcast with balanced discussion, but the last dramatic line is what he quotes later.', 'Eli écoute un podcast avec une discussion équilibrée, mais la dernière phrase dramatique est celle qu il cite ensuite.'],
  ['Lina reads a product review with many positives, but the closing complaint is the only thing she remembers.', 'Lina lit un avis produit avec beaucoup de points positifs, mais la plainte finale est la seule chose dont elle se souvient.'],
  ['Grant has a smooth flight, yet the bumpy landing is the memory that dominates the trip.', 'Grant a un vol tranquille, mais l atterrissage cahoteux est le souvenir qui domine tout le voyage.'],
  ['Tia attends a class discussion with many ideas, but the final disagreement is what she tells her friends about.', 'Tia assiste à une discussion en classe avec beaucoup d idées, mais le dernier désaccord est ce qu elle raconte à ses amis.'],
  ['Noah enjoys the museum, though the last crowded room is the detail he brings up afterward.', 'Noah apprécie le musée, mais la dernière salle bondée est le détail qu il évoque ensuite.'],
  ['Mia has a cheerful phone call, but the awkward goodbye is what she keeps replaying.', 'Mia a un appel téléphonique joyeux, mais l au revoir gênant est ce qu elle rejoue sans cesse.'],
  ['Jules likes the game night, yet the final lost round is the only part he wants to discuss.', 'Jules aime la soirée jeu, mais la dernière manche perdue est la seule partie dont il veut parler.'],
  ['Ava reads a chapter full of useful advice, but the final warning is the line she underlines.', 'Ava lit un chapitre rempli de conseils utiles, mais le dernier avertissement est la phrase qu elle souligne.'],
  ['Finn has a nice dinner with friends, though the last awkward joke shapes his memory of the night.', 'Finn passe un bon dîner avec des amis, mais la dernière blague gênante façonne son souvenir de la soirée.'],
  ['Mina watches a sports game with many strong plays, but the closing mistake is what she complains about.', 'Mina regarde un match avec beaucoup de belles actions, mais l erreur finale est ce dont elle se plaint.'],
  ['Theo finishes a project with good teamwork, but the last tense exchange is what he calls "the real story."', 'Theo termine un projet avec un bon esprit d équipe, mais le dernier échange tendu est ce qu il appelle "la vraie histoire".'],
  ['Juno has a calm doctor visit, yet the final wait in the hallway is what she remembers most.', 'Juno a une visite calme chez le médecin, mais la dernière attente dans le couloir est ce dont elle se souvient le plus.'],
  ['Iris listens to a lecture with plenty of clear points, but the ending joke is what she repeats later.', 'Iris écoute une conférence avec beaucoup d idées claires, mais la blague de fin est ce qu elle répète ensuite.'],
  ['Cole enjoys the picnic, though the rain that came at the very end is what he describes first.', 'Cole profite du pique-nique, mais la pluie arrivée tout à la fin est ce qu il décrit en premier.'],
  ['Riley has a productive workshop, but the last confusing slide is the one he says mattered most.', 'Riley suit un atelier productif, mais la dernière diapositive confuse est celle qu il dit avoir le plus compté.'],
  ['Pia reads a long thread with many helpful replies, but the final sarcastic reply is all she remembers.', 'Pia lit un long fil avec beaucoup de réponses utiles, mais la dernière réponse sarcastique est tout ce dont elle se souvient.'],
  ['Hugo enjoys the concert, though the final encore is the moment he replays afterward.', 'Hugo aime le concert, mais le rappel final est le moment qu il rejoue ensuite.'],
  ['Sam has a fine family visit, but the goodbye at the door becomes the emotional highlight in his head.', 'Sam passe une bonne visite familiale, mais les adieux à la porte deviennent dans sa tête le moment le plus marquant.'],
  ['Jade gets through a training session with many useful tips, but the closing criticism is what stays with her.', 'Jade suit une séance de formation avec beaucoup de conseils utiles, mais la critique finale est ce qui reste avec elle.'],
  ['Owen sees a balanced news report, yet the final sentence is the one that drives his opinion.', 'Owen voit un reportage équilibré, mais la dernière phrase est celle qui oriente son avis.'],
  ['Lea reads a novel with a slow build and a strong ending, and the ending alone defines the whole book for her.', 'Léa lit un roman avec une montée lente et une fin forte, et seule la fin définit tout le livre pour elle.'],
  ['Maya has several good meetings, but the last tense one makes the whole week feel bad.', 'Maya a plusieurs bonnes réunions, mais la dernière tendue donne à toute la semaine un air mauvais.'],
  ['Ben likes the hotel stay, though the checkout problem is the story he tells afterward.', 'Ben aime le séjour à l hôtel, mais le problème au départ est l histoire qu il raconte ensuite.'],
  ['Ava reads a recipe with clear steps, but the final caution about heat is what she keeps in mind.', 'Ava lit une recette avec des étapes claires, mais la dernière mise en garde sur la chaleur est ce qu elle garde en tête.'],
  ['Omar hears a presentation full of facts, yet the final emotional line is what he remembers from it.', 'Omar entend une présentation pleine de faits, mais la dernière phrase émotionnelle est ce dont il se souvient.'],
  ['Nina has a good shopping trip, but the last item being out of stock is what she mentions afterward.', 'Nina fait une bonne sortie shopping, mais le dernier article en rupture de stock est ce qu elle mentionne ensuite.'],
  ['Eli enjoys a community meeting, though the closing complaint is the part that lingers.', 'Eli apprécie une réunion de quartier, mais la plainte finale est la partie qui persiste.'],
  ['Lina spends most of the afternoon laughing with friends, but the final awkward pause shapes her memory of the day.', 'Lina passe la plupart de l après-midi à rire avec des amis, mais la dernière pause gênante façonne son souvenir de la journée.'],
  ['Grant listens to a long explanation and only the last example feels convincing to him.', 'Grant écoute une longue explication et seul le dernier exemple lui semble convaincant.'],
  ['Tia has many positive class moments, but the final test score is the only thing she talks about.', 'Tia vit beaucoup de bons moments en classe, mais la note du dernier test est la seule chose dont elle parle.'],
  ['Finn gets several reassuring updates, yet the final delay message is what keeps him worried.', 'Finn reçoit plusieurs nouvelles rassurantes, mais le dernier message de retard est ce qui continue de l inquiéter.'],
  ['Mina reads a careful comparison of phones, but the last line about battery life decides it for her.', 'Mina lit une comparaison attentive de téléphones, mais la dernière phrase sur l autonomie décide pour elle.'],
  ['Theo enjoys most of the road trip, but the final traffic jam becomes the whole trip in memory.', 'Théo apprécie presque tout le voyage, mais le dernier bouchon devient tout le voyage dans sa mémoire.'],
  ['Juno hears a fair debate, yet the final voice in the room feels like the strongest point.', 'Juno entend un débat équilibré, mais la dernière voix dans la salle lui paraît être l argument le plus fort.'],
  ['Iris reads a helpful forum thread, but the closing complaint is the only post she remembers.', 'Iris lit un fil de forum utile, mais la plainte finale est le seul message dont elle se souvient.'],
  ['Cole has a long day of praise at work, but the final correction at the end of the shift dominates his mood.', 'Cole passe une longue journée de compliments au travail, mais la dernière correction en fin de service domine son humeur.'],
  ['Riley enjoys a party full of friendly faces, though the final awkward goodbye is what sticks.', 'Riley profite d une fête pleine de visages amicaux, mais le dernier au revoir gênant est ce qui reste.'],
  ['Pia reads a report with many strengths, yet the last caveat is the part she uses to judge it.', 'Pia lit un rapport avec beaucoup de points forts, mais la dernière réserve est la partie qu elle utilise pour le juger.'],
  ['Hugo has a smooth appointment, but the final five-minute delay makes the whole visit feel bad.', 'Hugo a un rendez-vous fluide, mais le dernier retard de cinq minutes fait paraître toute la visite mauvaise.'],
  ['Sam hears a lecture with many examples, but the final warning makes the whole talk seem serious.', 'Sam entend une conférence avec beaucoup d exemples, mais le dernier avertissement fait paraître toute la présentation sérieuse.'],
  ['Jade enjoys the practice session, though the last mistake is all she wants to fix.', 'Jade apprécie la séance d entraînement, mais la dernière erreur est tout ce qu elle veut corriger.'],
  ['Maya remembers a long cheerful conversation, but the final awkward sentence is what stands out.', 'Maya se souvient d une longue conversation joyeuse, mais la dernière phrase gênante est ce qui ressort.'],
  ['Ben has a solid vacation overall, yet the last delayed train is what defines it afterward.', 'Ben passe globalement de bonnes vacances, mais le dernier train retardé est ce qui les définit ensuite.'],
  ['Ava enjoys a full family meal, but the closing comment from one relative is what she repeats later.', 'Ava aime un repas de famille complet, mais le commentaire final d un proche est ce qu elle répète ensuite.'],
  ['Omar reads a useful thread, but the last response is the one he considers most important.', 'Omar lit un fil utile, mais la dernière réponse est celle qu il considère comme la plus importante.'],
  ['Nora hears a balanced explanation, but the final reminder about danger is what she remembers at bedtime.', 'Nora entend une explication équilibrée, mais le dernier rappel du danger est ce dont elle se souvient au coucher.'],
];

const OPTIONS_EN = ['Recency Effect', 'Primacy Effect', 'Availability Heuristic', 'Salience Bias'];
const OPTIONS_FR = ['Effet de récence', 'Effet de primauté', 'Heuristique de disponibilité', 'Biais de saillance'];

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
      id: 39301 + index,
      level: 3,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Effet de récence' : 'Recency Effect',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La dernière information reçue prend trop de place dans le jugement.'
        : 'The most recent information takes up too much space in the judgment.',
      detailedExplanationBeginner: isFrench
        ? 'La fin pèse plus que le reste.'
        : 'The ending weighs more than the rest.',
      detailedExplanationIntermediate: isFrench
        ? 'L effet de récence fait surestimer ce qui vient d être vu ou entendu, parce que l esprit le garde encore frais.'
        : 'The recency effect makes us overvalue what we just saw or heard because it is still fresh in memory.',
      detailedExplanationExpert: isFrench
        ? "Ce biais vient de limites de mémoire de travail et d attention: les éléments les plus récents restent plus accessibles que les éléments plus anciens. Dans une conversation, une évaluation, une critique ou un débat, cela peut fausser le jugement en donnant à la dernière phrase plus de poids qu elle n en mérite."
        : 'This bias comes from limits in working memory and attention: the most recent items stay more accessible than earlier items. In a conversation, review, criticism, or debate, it can distort judgment by giving the last statement more weight than it deserves.',
      questionFormat: 'standard',
    };
  });
}

export const RECENCY_EFFECT_EXPANSION_EN: Question[] = createQuestions('en');
export const RECENCY_EFFECT_EXPANSION_FR: Question[] = createQuestions('fr');
