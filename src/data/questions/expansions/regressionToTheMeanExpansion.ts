import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya gets an unusually bad cold one week and then feels much better the next, so she says the tea she drank must have cured everything.', 'Maya attrape un rhume inhabituellement fort une semaine puis se sent beaucoup mieux la suivante, alors elle dit que le thé qu elle a bu a forcément tout guéri.'],
  ['Leo has a huge sales day after several weak ones and assumes his new ringtone brought the luck.', 'Leo fait une énorme journée de ventes après plusieurs journées faibles et suppose que sa nouvelle sonnerie lui a porté chance.'],
  ['Priya gets one awful quiz score after a string of good ones and her friend says the teacher suddenly turned against her.', 'Priya obtient une très mauvaise note à un quiz après une série de bonnes notes et son amie dit que le professeur s est soudainement retourné contre elle.'],
  ['Omar has a rough soccer game after playing brilliantly last weekend, and the crowd says he must be losing his touch.', 'Omar fait un mauvais match de foot après avoir été brillant le week-end dernier, et le public dit qu il doit perdre son niveau.'],
  ['Rina feels less stressed after a terrible deadline passes, and her roommate says the new candle solved her burnout.', 'Rina se sent moins stressée après le passage d une deadline terrible, et sa coloc dit que la nouvelle bougie a réglé son épuisement.'],
  ['Ben gets one amazing workout after a week of feeling sick, and he concludes the protein bar was magical.', 'Ben fait un entraînement incroyable après une semaine de maladie, et il conclut que la barre protéinée était magique.'],
  ['Zoe has a bad presentation after a very strong one and says the subject itself is becoming harder.', 'Zoé fait une mauvaise présentation après une très bonne, et dit que la matière devient elle-même plus difficile.'],
  ['Kai has a few bad days after a long run of good mood, and his sibling says the new playlist stopped working.', 'Kai a quelques mauvaises journées après une longue période de bonne humeur, et son frère ou sa soeur dit que la nouvelle playlist a cessé de marcher.'],
  ['Nora gets a huge positive review after a streak of mediocre ones and thinks the office coffee is the reason.', 'Nora reçoit une excellente évaluation après une série de commentaires moyens et pense que le café du bureau en est la raison.'],
  ['Eli feels calmer after a very tense week ends, and his friend says the breathing app fixed everything.', 'Eli se sent plus calme après la fin d une semaine très tendue, et son ami dit que l application de respiration a tout réglé.'],
  ['Lina gets a poor test result after several high scores and says the teacher must be grading unfairly now.', 'Lina obtient un mauvais résultat après plusieurs scores élevés et dit que le professeur doit noter de façon injuste maintenant.'],
  ['Grant has a burst of energy after a rough night of sleep and decides the new water bottle is responsible.', 'Grant a un regain d énergie après une mauvaise nuit de sommeil et décide que la nouvelle gourde en est responsable.'],
  ['Tia has one disappointing photo shoot after several great ones and assumes the camera got worse.', 'Tia fait une séance photo décevante après plusieurs très bonnes, et suppose que l appareil photo s est détérioré.'],
  ['Noah has a better mood after a stressful project finishes and says the extra snack he ate must have helped.', 'Noah est de meilleure humeur après la fin d un projet stressant et dit que le snack supplémentaire qu il a mangé a dû aider.'],
  ['Mia gets a mediocre cooking result after a string of excellent meals and says her kitchen skills are slipping.', 'Mia obtient un résultat de cuisine moyen après une série de repas excellents et dit que ses compétences de cuisine baissent.'],
  ['Jules sees one huge rebound after a slump and says the weekend nap was obviously the cure.', 'Jules voit un énorme rebond après une baisse et dit que la sieste du week-end était évidemment le remède.'],
  ['Ava gets a small exam improvement after one terrible week and assumes the private tutor caused the turnaround.', 'Ava obtient une légère amélioration à l examen après une semaine terrible et suppose que le tuteur privé a causé le retournement.'],
  ['Finn has a rough tennis match after a hot streak and says the court must be cursed.', 'Finn fait un mauvais match de tennis après une série brillante et dit que le court doit être maudit.'],
  ['Mina feels less pain after the worst flare-up ends, and her cousin says the bracelet finally worked.', 'Mina ressent moins de douleur après la fin de la pire poussée, et sa cousine dit que le bracelet a enfin fonctionné.'],
  ['Theo has one impressive day at the gym after a week of fatigue and assumes the new socks are the reason.', 'Théo fait une journée impressionnante à la salle après une semaine de fatigue et suppose que les nouvelles chaussettes en sont la raison.'],
  ['Juno gets a strong sales call after many weak ones and says the caller script was the game changer.', 'Juno fait un appel commercial très fort après beaucoup d appels faibles et dit que le script d appel a tout changé.'],
  ['Iris has a bad commute after several smooth ones and says the city is clearly falling apart.', 'Iris a un trajet pénible après plusieurs trajets fluides et dit que la ville se dégrade clairement.'],
  ['Cole gets better sleep after a horrible week and says the room paint must have helped.', 'Cole dort mieux après une horrible semaine et dit que la peinture de la chambre a dû aider.'],
  ['Riley has a huge rebound in basketball after a slump and thinks a new water break routine did it.', 'Riley fait un énorme rebond au basket après une mauvaise période et pense qu une nouvelle routine de pause eau y est pour quelque chose.'],
  ['Pia gets a lower score after several high quiz results and says the practice app must be useless.', 'Pia obtient un score plus bas après plusieurs bons résultats aux quiz et dit que l application d entraînement doit être inutile.'],
  ['Hugo feels relieved after a stressful trip ends and says the seat upgrade solved all travel problems.', 'Hugo se sent soulagé après la fin d un voyage stressant et dit que la mise à niveau du siège a résolu tous les problèmes de voyage.'],
  ['Sam sees one weak week after months of strong work and thinks his whole routine is collapsing.', 'Sam voit une semaine faible après des mois de bon travail et pense que toute sa routine s effondre.'],
  ['Jade has a great day after a string of bad ones and says the lucky socks must be powerful.', 'Jade passe une excellente journée après une série de mauvaises et dit que les chaussettes porte-bonheur doivent être puissantes.'],
  ['Owen has one terrible run after a streak of strong runs and says he is probably getting worse at running.', 'Owen fait une très mauvaise course après une série de bonnes courses et dit qu il devient probablement moins bon en course.'],
  ['Lea gets a calmer evening after a stressful week and says the fancy tea fixed her nervous system.', 'Léa passe une soirée plus calme après une semaine stressante et dit que le thé chic a réparé son système nerveux.'],
  ['Maya has a perfect first attempt at a puzzle, then a normal second one, and assumes the puzzle app made her smarter.', 'Maya réussit parfaitement sa première tentative de puzzle, puis une seconde normale, et suppose que l application l a rendue plus intelligente.'],
  ['Ben has a rough return to work after a vacation glow and says work is always miserable.', 'Ben reprend le travail dans la difficulté après l effet positif des vacances et dit que le travail est toujours misérable.'],
  ['Ava gets a better result after a bad exam streak ends and assumes the new pen was the reason.', 'Ava obtient un meilleur résultat après la fin d une série de mauvais examens et suppose que le nouveau stylo en est la raison.'],
  ['Omar sees a dip after a huge winning streak and says the game is punishing him.', 'Omar voit une baisse après une énorme série de victoires et dit que le jeu le punit.'],
  ['Nina feels less stressed after a brutal month ends and says the desk plant solved her burnout.', 'Nina se sent moins stressée après la fin d un mois brutal et dit que la plante de bureau a réglé son épuisement.'],
  ['Eli gets one weaker review after a run of glowing feedback and says the team has turned on him.', 'Eli reçoit une évaluation plus faible après une série d avis élogieux et dit que l équipe s est retournée contre lui.'],
  ['Lina has a huge improvement after a very bad first week of language practice and thinks the new notebook caused it.', 'Lina a une énorme amélioration après une très mauvaise première semaine de pratique de langue et pense que le nouveau carnet en est la cause.'],
  ['Grant has a bad evening after a surprisingly good afternoon and says the afternoon must have been fake luck.', 'Grant passe une mauvaise soirée après un après-midi surprenamment bon et dit que l après-midi devait être une chance fausse.'],
  ['Tia gets a smaller second check-in after an excellent first one and says the app stopped helping.', 'Tia obtient un deuxième contrôle plus faible après un premier excellent et dit que l application a cessé d aider.'],
  ['Finn feels much better after the worst part of a cold passes and says the new socks probably made it happen.', 'Finn se sent beaucoup mieux après le passage de la pire partie d un rhume et dit que les nouvelles chaussettes y sont probablement pour quelque chose.'],
  ['Mina has a rough practice after a string of strong performances and says the coach must be sabotaging her.', 'Mina fait un entraînement difficile après une série de bonnes performances et dit que l entraîneur doit la saboter.'],
  ['Theo gets a very average shift after a great sales week and says the store is losing momentum.', 'Théo passe un service très moyen après une excellente semaine de ventes et dit que le magasin perd de l élan.'],
  ['Juno has a bright mood after a bad patch ends and says the sunlight in the office fixed it.', 'Juno a une humeur plus lumineuse après la fin d une mauvaise période et dit que la lumière du bureau a tout réglé.'],
  ['Iris has a worse day after many good ones and says the good streak was too good to last.', 'Iris passe une journée plus mauvaise après beaucoup de bonnes et dit que la bonne série était trop belle pour durer.'],
  ['Cole gets a strong result after a slump and says his lucky mug must be helping again.', 'Cole obtient un bon résultat après une baisse et dit que sa tasse porte-bonheur l aide sûrement à nouveau.'],
  ['Riley has a weaker second try after one very strong first try and thinks his talent disappeared.', 'Riley fait un deuxième essai plus faible après un premier très fort et pense que son talent a disparu.'],
  ['Pia feels less overwhelmed after a hard deadline ends and says the new pen did the trick.', 'Pia se sent moins débordée après la fin d une deadline difficile et dit que le nouveau stylo a fait l affaire.'],
  ['Hugo gets a normal follow-up after an extreme high and says the follow-up proves the high was a fluke.', 'Hugo obtient un suivi normal après un pic extrême et dit que ce suivi prouve que le pic était un coup de chance.'],
  ['Sam sees a rebound after a rough week and says the rebound proves the bad week was unnatural.', 'Sam voit un rebond après une semaine difficile et dit que le rebond prouve que la mauvaise semaine n était pas naturelle.'],
  ['Ava has a lower score after a rare high score and says the teacher must have wanted to humble her.', 'Ava obtient une note plus basse après une note rare très élevée et dit que le professeur a dû vouloir l humilier.'],
  ['Noah feels better after a very bad migraine ends and says the special pillow ended the pain.', 'Noah se sent mieux après la fin d une très mauvaise migraine et dit que l oreiller spécial a mis fin à la douleur.'],
  ['Mina has one weak evening after a long strong streak and thinks her phone battery is draining her skill.', 'Mina passe une soirée faible après une longue série forte et pense que la batterie de son téléphone lui vide ses capacités.'],
];

const OPTIONS_EN = ['Regression to the Mean', 'Regression Fallacy', 'Post Hoc', 'Availability Heuristic'];
const OPTIONS_FR = ['Régression vers la moyenne', 'Sophisme de régression', 'Post hoc', 'Heuristique de disponibilité'];

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
      id: 39601 + index,
      level: 5,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? 'Régression vers la moyenne' : 'Regression to the Mean',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel phénomène est illustré ici ?' : 'Which phenomenon is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'Un résultat extrême est suivi d un retour plus normal, et on confond cela avec une cause précise.'
        : 'An extreme result is followed by a more normal one, and that natural bounce-back is mistaken for a specific cause.',
      detailedExplanationBeginner: isFrench
        ? 'Le retour vers la moyenne peut arriver tout seul.'
        : 'A return toward the average can happen on its own.',
      detailedExplanationIntermediate: isFrench
        ? 'La régression vers la moyenne décrit le fait que des résultats très hauts ou très bas sont souvent suivis de résultats plus normaux, même sans intervention spéciale.'
        : 'Regression to the mean describes how very high or very low results are often followed by more normal ones, even without any special intervention.',
      detailedExplanationExpert: isFrench
        ? "Ce phénomène statistique apparaît parce qu une mesure extrême combine souvent un vrai signal et une part de hasard. Quand le hasard se réduit à l observation suivante, le résultat revient vers la moyenne. L erreur consiste à attribuer ce retour naturel à une cause inventée, comme un remède, une punition, un changement de stratégie ou un coup de chance."
        : 'This statistical phenomenon appears because an extreme measurement often combines real signal with a share of chance. When the chance component is less extreme on the next observation, the result moves back toward the average. The mistake is to credit that natural return to an invented cause, such as a remedy, punishment, strategy change, or lucky charm.',
      questionFormat: 'standard',
    };
  });
}

export const REGRESSION_TO_THE_MEAN_EXPANSION_EN: Question[] = createQuestions('en');
export const REGRESSION_TO_THE_MEAN_EXPANSION_FR: Question[] = createQuestions('fr');
