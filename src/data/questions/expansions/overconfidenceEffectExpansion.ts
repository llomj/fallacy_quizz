import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Nina insists she can win the office trivia night without studying because she remembers everything perfectly.', 'Nina insiste sur le fait qu elle peut gagner la soirée quiz du bureau sans réviser parce qu elle se souvient de tout parfaitement.'],
  ['Leo says he can fix the leaky sink in ten minutes even though he has never repaired plumbing before.', 'Léo dit qu il peut réparer l évier qui fuit en dix minutes alors qu il n a jamais réparé de plomberie auparavant.'],
  ['Maya is certain she will ace the driving test because she has practiced once around the block.', 'Maya est certaine qu elle réussira l examen de conduite parce qu elle a fait un tour de pâté de maisons pour s entraîner.'],
  ['Omar promises the team he can finish a full presentation during lunch, including the slides he has not started.', 'Omar promet à l équipe qu il peut terminer toute une présentation pendant le déjeuner, y compris les diapositives qu il n a pas encore commencées.'],
  ['Priya buys the cheapest hiking shoes and says the trail will be easy because she is in good shape.', 'Priya achète les chaussures de randonnée les moins chères et dit que le sentier sera facile parce qu elle est en forme.'],
  ['Ben says he can guess the password on the first try because he is good at patterns.', 'Ben dit qu il peut deviner le mot de passe du premier coup parce qu il est fort pour repérer les schémas.'],
  ['Zoe tells her friends she will definitely remember all the ingredients without writing a grocery list.', 'Zoé dit à ses amis qu elle se souviendra forcément de tous les ingrédients sans faire de liste de courses.'],
  ['Kai claims he can run a 10K at his fastest pace even though he has never paced a race before.', 'Kai affirme qu il peut courir un 10 km à son rythme le plus rapide alors qu il n a jamais géré une course auparavant.'],
  ['Nora says the interview will be effortless because she answered a few practice questions well.', 'Nora dit que l entretien sera facile parce qu elle a bien répondu à quelques questions d entraînement.'],
  ['Eli is sure he can assemble the bookshelf without reading the instructions because the pieces look simple.', 'Eli est sûr qu il peut monter l étagère sans lire les instructions parce que les pièces ont l air simples.'],
  ['Lina says she can bake a perfect cake for the party even though she has burned the last two batches.', 'Lina dit qu elle peut préparer un gâteau parfait pour la fête alors qu elle a brûlé les deux dernières fournées.'],
  ['Grant tells his coworkers he can estimate the budget by eye and will not need to check the spreadsheet.', 'Grant dit à ses collègues qu il peut estimer le budget à vue d œil et qu il n aura pas besoin de vérifier le tableur.'],
  ['Tia says she can speak for the whole neighborhood because she chatted with three people at the mailbox.', 'Tia dit qu elle peut parler au nom de tout le quartier parce qu elle a discuté avec trois personnes à la boîte aux lettres.'],
  ['Noah insists the side business will take off because he is confident in his idea, not because he has tested it.', 'Noah insiste sur le fait que l activité secondaire va décoller parce qu il a confiance en son idée, pas parce qu il l a testée.'],
  ['Mia says she can stay awake through the night shift without coffee because she once did it on a road trip.', 'Mia dit qu elle peut rester éveillée pendant le service de nuit sans café parce qu elle l a déjà fait une fois pendant un voyage.'],
  ['Jules claims he can win the bake sale competition by improvising, since he "just knows" what tastes good.', 'Jules affirme qu il peut gagner le concours de pâtisserie en improvisant, puisqu il "sait" tout simplement ce qui est bon.'],
  ['Ava says the repair will be cheap because she watched one tutorial and now feels ready.', 'Ava dit que la réparation coûtera peu cher parce qu elle a regardé un tutoriel et se sent maintenant prête.'],
  ['Finn tells everyone he can predict the stock market because he got one lucky pick right last month.', 'Finn dit à tout le monde qu il peut prévoir le marché boursier parce qu il a eu un bon coup de chance le mois dernier.'],
  ['Mina believes she can juggle three deadlines at once because she has never missed a homework due date.', 'Mina croit qu elle peut gérer trois échéances en même temps parce qu elle n a jamais manqué de date pour un devoir.'],
  ['Theo says he can lead the group hike without checking the map because he is "pretty sure" he knows the area.', 'Théo dit qu il peut mener la randonnée de groupe sans consulter la carte parce qu il est "presque sûr" de connaître la zone.'],
  ['Juno says she will definitely spot the bug in the code because she has a good eye.', 'Juno dit qu elle repérera forcément le bug dans le code parce qu elle a un bon œil.'],
  ['Iris orders the most advanced coffee machine and says she will master it instantly because she is smart.', 'Iris commande la machine à café la plus avancée et dit qu elle la maîtrisera tout de suite parce qu elle est intelligente.'],
  ['Cole says he can give legal advice at the party because he has watched a lot of courtroom shows.', 'Cole dit qu il peut donner des conseils juridiques à la fête parce qu il a regardé beaucoup de séries judiciaires.'],
  ['Riley says he can finish the apartment move in one afternoon because "moving is just lifting things."', 'Riley dit qu il peut finir le déménagement de l appartement en une après-midi parce que "déménager, c est juste soulever des choses".'],
  ['Pia says she can learn the new app in five minutes because she is naturally tech-savvy.', 'Pia dit qu elle peut apprendre la nouvelle application en cinq minutes parce qu elle est naturellement à l aise avec la technologie.'],
  ['Hugo is certain he can negotiate the rent down because he once got a free dessert after complaining.', 'Hugo est certain qu il peut faire baisser le loyer parce qu il a déjà obtenu un dessert gratuit après une plainte.'],
  ['Sam says he can remember every detail of the meeting because he "basically" never forgets important things.', 'Sam dit qu il peut se rappeler chaque détail de la réunion parce qu il "n oublie" quasiment jamais les choses importantes.'],
  ['Jade says she can train the puppy in a weekend because she read a post about positive reinforcement.', 'Jade dit qu elle peut dresser le chiot en un week-end parce qu elle a lu un article sur le renforcement positif.'],
  ['Owen says he can sort out the tax forms alone because the numbers do not look that scary.', 'Owen dit qu il peut remplir les formulaires fiscaux seul parce que les chiffres n ont pas l air si effrayants.'],
  ['Lea says she can host the whole birthday party alone because last year went "mostly fine."', 'Léa dit qu elle peut organiser tout l anniversaire seule parce que l année dernière s est "à peu près bien" passée.'],
  ['Maya says she can fix the Wi-Fi router by guessing the settings because she has a natural sense for gadgets.', 'Maya dit qu elle peut réparer le routeur Wi-Fi en devinant les réglages parce qu elle a un sens naturel des gadgets.'],
  ['Ben says he can finish a marathon training plan after two easy runs because the hard part is just staying motivated.', 'Ben dit qu il peut terminer un plan d entraînement pour marathon après deux sorties faciles parce que la partie difficile, c est juste de rester motivé.'],
  ['Ava says she can lead the charity auction because talking to a crowd is basically the same as texting.', 'Ava dit qu elle peut animer la vente aux enchères car parler à un public revient presque à envoyer des messages.'],
  ['Omar says he can translate the brochure even if he does not know the language well, because he can "figure it out."', 'Omar dit qu il peut traduire la brochure même s il ne connaît pas bien la langue, parce qu il peut "comprendre au fur et à mesure".'],
  ['Nina says she can get the best deal on the phone contract because she hates paying full price.', 'Nina dit qu elle peut obtenir la meilleure offre pour le contrat téléphonique parce qu elle déteste payer le prix fort.'],
  ['Eli says he can grill for thirty guests because he made burgers for four friends once.', 'Eli dit qu il peut griller pour trente invités parce qu il a déjà fait des burgers pour quatre amis.'],
  ['Lina says she can judge the movie contest because she knows what she likes.', 'Lina dit qu elle peut juger le concours de films parce qu elle sait ce qu elle aime.'],
  ['Grant says he can estimate the home repair timeline because he has watched a lot of renovation clips.', 'Grant dit qu il peut estimer le délai des réparations de la maison parce qu il a regardé beaucoup de vidéos de rénovation.'],
  ['Tia says she can win the quiz app tournament because she is "usually right" on trivia nights.', 'Tia dit qu elle peut gagner le tournoi de quiz parce qu elle a "souvent raison" lors des soirées quiz.'],
  ['Finn says he can choose the safest route home without looking at traffic because he knows the city well enough.', 'Finn dit qu il peut choisir l itinéraire le plus sûr pour rentrer sans regarder le trafic parce qu il connaît assez bien la ville.'],
  ['Mina says she can manage the weekend schedule because she has always been good at keeping plans in her head.', 'Mina dit qu elle peut gérer le programme du week-end parce qu elle a toujours été douée pour garder les plans en tête.'],
  ['Theo says he can repair the bike chain without tools because he has the "right instinct."', 'Théo dit qu il peut réparer la chaîne du vélo sans outils parce qu il a le "bon instinct".'],
  ['Juno says she can finish the proposal before dinner because she types quickly, so writing must be easy.', 'Juno dit qu elle peut terminer la proposition avant le dîner parce qu elle tape vite, donc écrire doit être facile.'],
  ['Iris says she can outsmart the security quiz because it will probably be obvious.', 'Iris dit qu elle peut déjouer le quiz de sécurité parce qu il sera probablement évident.'],
  ['Cole says he can predict the weather by looking at the sky for one minute.', 'Cole dit qu il peut prévoir la météo en regardant le ciel pendant une minute.'],
  ['Riley says he can coach the team because he has played a few matches and understands the game.', 'Riley dit qu il peut entraîner l équipe parce qu il a joué quelques matchs et comprend le jeu.'],
  ['Pia says she can handle the client complaint calmly because she has never lost an argument online.', 'Pia dit qu elle peut gérer calmement la plainte du client parce qu elle n a jamais perdu une dispute en ligne.'],
  ['Hugo says he can lead the road trip because he has "excellent instincts" and no need for GPS.', 'Hugo dit qu il peut diriger le road trip parce qu il a de "très bons instincts" et n a pas besoin de GPS.'],
  ['Sam says he can solve the scheduling conflict in one call because he is good under pressure.', 'Sam dit qu il peut résoudre le conflit d emploi du temps en un appel parce qu il est bon sous pression.'],
  ['Jade says she can launch the fundraiser with no plan because she is sure it will all work out.', 'Jade dit qu elle peut lancer la collecte de fonds sans plan parce qu elle est sûre que tout ira bien.'],
  ['Owen says he can judge the whole class project on sight because the first draft looked polished.', 'Owen dit qu il peut juger tout le projet de classe d un coup d œil parce que le premier brouillon paraissait soigné.'],
];

const OPTIONS_EN = ['Overconfidence Effect', 'Dunning-Kruger Effect', 'Optimism Bias', 'Self-Serving Bias'];
const OPTIONS_FR = ["Effet de surconfiance", 'Effet Dunning-Kruger', "Biais d'optimisme", 'Biais auto-complaisant'];

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
    const isFrench = language === 'fr';
    const correctIndex = index % 4;
    return {
      id: 44001 + index,
      level: 5,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? "Effet de surconfiance" : 'Overconfidence Effect',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La personne surestime sa propre précision, sa capacité ou son contrôle.'
        : 'The person overestimates their own accuracy, ability, or control.',
      detailedExplanationBeginner: isFrench
        ? 'Se sentir très sûr de soi ne veut pas dire avoir raison.'
        : 'Feeling very sure does not mean being right.',
      detailedExplanationIntermediate: isFrench
        ? "L effet de surconfiance apparaît quand quelqu un évalue ses compétences ou ses chances beaucoup trop haut, souvent sans assez de preuves."
        : 'The overconfidence effect appears when someone rates their skills or chances far too highly, often without enough evidence.',
      detailedExplanationExpert: isFrench
        ? "Ce biais touche la façon dont les gens prédisent leurs performances, leurs délais et la justesse de leurs jugements. Il est fréquent après un petit succès, une expérience limitée ou un domaine que l on croit maîtriser. Le remède pratique consiste à utiliser des repères concrets, des tests réels et des retours extérieurs plutôt que la seule sensation de certitude."
        : 'This bias affects how people predict their performance, deadlines, and the correctness of their judgments. It is common after a small success, limited experience, or in a domain someone thinks they already control. The practical fix is to use concrete benchmarks, real tests, and outside feedback instead of confidence alone.',
      questionFormat: 'standard',
    };
  });
}

export const OVERCONFIDENCE_EFFECT_EXPANSION_EN: Question[] = createQuestions('en');
export const OVERCONFIDENCE_EFFECT_EXPANSION_FR: Question[] = createQuestions('fr');
