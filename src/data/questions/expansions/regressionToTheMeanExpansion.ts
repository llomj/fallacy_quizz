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
  ['Sophie has a terrible first day back at the gym after a month off and says the new headphones made her weaker.', 'Sophie fait une très mauvaise première journée de reprise à la salle après un mois d arrêt et dit que les nouveaux écouteurs l ont rendue plus faible.'],
  ['Liam gets one great score after several poor practice rounds and says the blue notebook is his lucky charm.', 'Liam obtient une très bonne note après plusieurs mauvaises parties d entraînement et dit que le carnet bleu est son porte-bonheur.'],
  ['Emma feels less anxious after the worst of her exam week is over and says the desk lamp fixed her nerves.', 'Emma se sent moins anxieuse après la fin de la pire partie de sa semaine d examens et dit que la lampe de bureau a réglé ses nerfs.'],
  ['Diego has a rough cooking night after a week of excellent meals and says the kitchen timer caused it.', 'Diego passe une mauvaise soirée cuisine après une semaine de repas excellents et dit que le minuteur de cuisine en est la cause.'],
  ['Lily sees one unusually bad customer review after many good ones and says the cafe has suddenly gone downhill.', 'Lily voit un avis client inhabituellement mauvais après beaucoup de bons et dit que le cafe a soudainement régressé.'],
  ['Hassan gets a strong second quiz after a very weak first one and assumes the new pen gave him a boost.', 'Hassan obtient un deuxième quiz très bon après un premier très faible et suppose que le nouveau stylo lui a donné un coup de pouce.'],
  ['Ruby has a bad rehearsal after a run of excellent ones and says the stage lights must be cursed.', 'Ruby fait une mauvaise répétition après une série d excellentes et dit que les lumières de la scène doivent être maudites.'],
  ['Noah feels calmer after a chaotic family gathering ends and says the candle on the table fixed everything.', 'Noah se sent plus calme après la fin d un rassemblement familial chaotique et dit que la bougie sur la table a tout réglé.'],
  ['Chloe gets one huge spike in productivity after a slow month and says the new mug unlocked her focus.', 'Chloe connaît une énorme hausse de productivité après un mois lent et dit que la nouvelle tasse a débloqué sa concentration.'],
  ['Yusuf has a poor basketball game after a hot streak and thinks his shoes betrayed him.', 'Yusuf fait un mauvais match de basket après une série en feu et pense que ses chaussures l ont trahi.'],
  ['Maya gets a better mood after a tense argument ends and says her phone wallpaper healed the day.', 'Maya retrouve une meilleure humeur après la fin d une dispute tendue et dit que le fond d écran de son téléphone a guéri la journée.'],
  ['Lucas has a weak run after several very strong ones and says the park bench he used beforehand ruined him.', 'Lucas fait une course faible après plusieurs très bonnes et dit que le banc du parc qu il a utilisé avant l a ruiné.'],
  ['Ari sees a rebound in sales after a slump and concludes the new stapler deserves credit.', 'Ari voit un rebond des ventes après une baisse et conclut que la nouvelle agrafeuse mérite le mérite.'],
  ['Mina gets one low homework score after many high ones and says the teacher has started targeting her.', 'Mina obtient une note faible aux devoirs après beaucoup de bonnes et dit que le professeur a commencé à la cibler.'],
  ['Owen feels less tired after a brutal weekend and says the socks he wore are why.', 'Owen se sent moins fatigué après un week-end brutal et dit que les chaussettes qu il portait en sont la raison.'],
  ['Zara has a rocky first day at a new job after weeks of confidence and says the office chair is bad luck.', 'Zara passe une première journée difficile dans un nouveau travail après des semaines de confiance et dit que la chaise de bureau porte malheur.'],
  ['Ben gets a surprisingly good follow-up result after a very low score and says the commute playlist fixed his brain.', 'Ben obtient un résultat de suivi surprenamment bon après une note très basse et dit que la playlist du trajet a réparé son cerveau.'],
  ['Nora feels better after the peak of her cold passes and says the orange pen on her desk cured her.', 'Nora se sent mieux après le passage du pic de son rhume et dit que le stylo orange sur son bureau l a guérie.'],
  ['Eli has a mediocre second day after an excellent opening day and says the whole project is failing.', 'Eli passe un deuxième jour moyen après une excellente première journée et dit que tout le projet est en train d échouer.'],
  ['Pia gets a calmer afternoon after a long stressful morning and says the playlist in the bakery was the medicine.', 'Pia passe un après-midi plus calme après une longue matinée stressante et dit que la playlist de la boulangerie était le remède.'],
  ['Theo sees a rebound in his tennis after a slump and thinks the towel he used is a performance tool.', 'Theo voit un rebond dans son tennis après une baisse et pense que la serviette qu il a utilisée est un outil de performance.'],
  ['Sara has one great study session after several poor ones and assumes the classroom window caused it.', 'Sara fait une excellente séance d étude après plusieurs mauvaises et suppose que la fenêtre de la salle de classe en est la cause.'],
  ['Milo feels less overwhelmed after a deadline passes and says the extra notebook saved his week.', 'Milo se sent moins dépassé après le passage d une échéance et dit que le carnet supplémentaire a sauvé sa semaine.'],
  ['Iris gets a weaker report after a streak of strong ones and says the office printer is to blame.', 'Iris obtient un rapport plus faible après une série de bons et dit que l imprimante du bureau est à blâmer.'],
  ['Jude has a burst of confidence after a rough patch and says the coffee cup on his desk is magical.', 'Jude connaît un regain de confiance après une période difficile et dit que la tasse de café sur son bureau est magique.'],
  ['Layla gets a bad result after several good ones and says the new calendar app ruined her timing.', 'Layla obtient un mauvais résultat après plusieurs bons et dit que la nouvelle application de calendrier a ruiné son timing.'],
  ['Finn feels stronger after a weak training month ends and says the hallway light gave him power.', 'Finn se sent plus fort après la fin d un mois d entraînement faible et dit que la lumière du couloir lui a donné de la force.'],
  ['Hana sees one excellent photo after many dull ones and says the scarf she wore made her artistic.', 'Hana voit une photo excellente après beaucoup de photos ternes et dit que l écharpe qu elle portait l a rendue artistique.'],
  ['Ravi has a much better second attempt after a bad first one and assumes the chair rotation helped.', 'Ravi réussit bien mieux sa deuxième tentative après une première mauvaise et suppose que la rotation de chaise a aidé.'],
  ['Lena feels less stressed after the hardest part of the week ends and says the new mug fixed her mood.', 'Lena se sent moins stressée après la fin de la partie la plus dure de la semaine et dit que la nouvelle tasse a réglé son humeur.'],
  ['Jon gets a rough morning after several smooth ones and says the elevator button has bad energy.', 'Jon passe une matinée difficile après plusieurs matinées fluides et dit que le bouton d ascenseur a une mauvaise énergie.'],
  ['Mara sees a return to normal after a wildly successful event and says the successful event was a miracle.', 'Mara voit un retour à la normale après un événement extrêmement réussi et dit que l événement réussi était un miracle.'],
  ['Omar gets a lighter workload after a heavy week and says the desk organizer caused the change.', 'Omar a une charge de travail plus légère après une semaine lourde et dit que l organiseur de bureau a provoqué le changement.'],
  ['Clara has a poor singing rehearsal after a string of good ones and says the hall acoustics are cursed.', 'Clara fait une mauvaise répétition de chant après une série de bonnes et dit que l acoustique de la salle est maudite.'],
  ['Ezra feels better after a migraine peak passes and says the lamp shade on the couch fixed him.', 'Ezra se sent mieux après le passage du pic de la migraine et dit que l abat-jour sur le canapé l a réparé.'],
  ['Fiona gets a big rebound in test scores after a slump and says the new highlighter is the reason.', 'Fiona obtient un gros rebond dans ses notes après une baisse et dit que le nouveau surligneur en est la raison.'],
  ['Gabe has one awful shift after several easy ones and says the kitchen radio brought the bad luck.', 'Gabe fait un service horrible après plusieurs faciles et dit que la radio de la cuisine a apporté la malchance.'],
  ['Helena sees a calmer mood after a stormy morning and says the chair cushion did all the work.', 'Helena se sent plus calme après une matinée agitée et dit que le coussin de chaise a tout fait.'],
  ['Ivo gets an average workout after a very strong streak and says he has lost all progress.', 'Ivo fait un entraînement moyen après une série très forte et dit qu il a perdu tout son progrès.'],
  ['Jenna has one great interview after a poor month and says the lipstick she wore made the difference.', 'Jenna fait un excellent entretien après un mauvais mois et dit que le rouge à lèvres qu elle portait a fait la différence.'],
  ['Khalil feels more focused after a brutal week ends and says the office plant fixed his attention.', 'Khalil se sent plus concentré après la fin d une semaine brutale et dit que la plante du bureau a réparé son attention.'],
  ['Luna gets a weaker day after a run of strong ones and says the day itself has turned bad.', 'Luna passe une journée plus faible après une série de journées fortes et dit que la journée elle-même est devenue mauvaise.'],
  ['Mason has a rebound after a slump and says the rebound proves the slump was fake.', 'Mason connaît un rebond après une baisse et dit que ce rebond prouve que la baisse était artificielle.'],
  ['Nadia has a poor quiz after several strong ones and says the subject has become impossible.', 'Nadia fait un mauvais quiz après plusieurs bons et dit que la matière est devenue impossible.'],
  ['Oli feels less sore after the worst part of a workout passes and says the new towel healed him.', 'Oli se sent moins courbaturé après le passage de la pire partie de l entraînement et dit que la nouvelle serviette l a guéri.'],
  ['Parker gets a big rebound in energy after a tired week and says the hallway snack machine is the key.', 'Parker retrouve beaucoup d énergie après une semaine de fatigue et dit que le distributeur du couloir est la clé.'],
  ['Quinn sees one low reading after many high ones and says the whole system is broken.', 'Quinn voit une faible mesure après beaucoup de mesures élevées et dit que tout le système est cassé.'],
  ['Rosa has a better mood after a difficult call ends and says the red notebook caused the relief.', 'Rosa a une meilleure humeur après la fin d un appel difficile et dit que le carnet rouge a provoqué le soulagement.'],
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
