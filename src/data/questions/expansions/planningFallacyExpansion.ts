import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says she can clean the whole apartment in 20 minutes before guests arrive.', 'Maya dit qu elle peut nettoyer tout l appartement en 20 minutes avant l arrivée des invités.'],
  ['Leo thinks he can finish a full slideshow after dinner even though he has not started it yet.', 'Leo pense pouvoir terminer tout un diaporama après le dîner même s il ne l a pas encore commencé.'],
  ['Priya schedules a haircut, a grocery run, and a gym visit in one hour.', 'Priya prévoit une coupe de cheveux, des courses et une visite à la salle de sport en une heure.'],
  ['Omar assumes packing for a weekend trip will take five minutes because "it is just clothes."', 'Omar suppose que faire la valise pour un week-end prendra cinq minutes parce que "ce ne sont que des vêtements".'],
  ['Rina plans to write her essay the night before and expects it to go faster than usual.', 'Rina prévoit de rédiger sa dissertation la veille au soir et pense que cela ira plus vite que d habitude.'],
  ['Ben decides he can make dinner, answer emails, and clean the kitchen before 7 p.m.', 'Ben décide qu il peut préparer le dîner, répondre aux e-mails et nettoyer la cuisine avant 19 h.'],
  ['Zoe thinks moving furniture will only take one short trip in the car.', 'Zoé pense que déplacer les meubles ne prendra qu un seul court trajet en voiture.'],
  ['Kai assumes he can read the whole chapter, take notes, and still be ready for the quiz.', 'Kai suppose qu il peut lire tout le chapitre, prendre des notes et être quand même prêt pour le quiz.'],
  ['Nora says she can bake cupcakes for the class and still get to school early.', 'Nora dit qu elle peut préparer des cupcakes pour la classe et arriver quand même tôt à l école.'],
  ['Eli believes he can mow the lawn, shower, and leave for work without rushing.', 'Eli croit pouvoir tondre la pelouse, prendre une douche et partir au travail sans se presser.'],
  ['Lina plans a full redesign of her room after lunch and thinks it will be done before sunset.', 'Lina prévoit de refaire complètement sa chambre après le déjeuner et pense que ce sera terminé avant le coucher du soleil.'],
  ['Grant expects to fix the bike, visit the bank, and call his sister in one afternoon.', 'Grant s attend à réparer le vélo, aller à la banque et appeler sa sœur en une après-midi.'],
  ['Tia says the group project will be easy because "we just need to put it together."', 'Tia dit que le projet de groupe sera facile parce que "nous n avons qu à l assembler".'],
  ['Noah assumes he can tidy his desk and sort all the mail during a commercial break.', 'Noah suppose qu il peut ranger son bureau et trier tout le courrier pendant une pause pub.'],
  ['Mia thinks she can visit two friends, buy dinner, and still have time to study.', 'Mia pense pouvoir voir deux amis, acheter le dîner et avoir encore le temps d étudier.'],
  ['Jules believes the holiday cards will be quick because he only has a few names to write.', 'Jules croit que les cartes de fête seront rapides parce qu il n a que quelques noms à écrire.'],
  ['Ava says the report will be simple because the facts are already "mostly in her head."', 'Ava dit que le rapport sera simple parce que les faits sont déjà "presque dans sa tête".'],
  ['Finn plans to finish the online form, clean the car, and make lunch before noon.', 'Finn prévoit de remplir le formulaire en ligne, nettoyer la voiture et préparer le déjeuner avant midi.'],
  ['Mina assumes the gift wrapping will take less than ten minutes even with odd-shaped boxes.', 'Mina suppose que l emballage des cadeaux prendra moins de dix minutes même avec des boîtes de forme étrange.'],
  ['Theo thinks he can study for three subjects in a single late-night session.', 'Théo pense pouvoir réviser trois matières en une seule séance tardive.'],
  ['Juno says she can reorganize the closet after work and still watch a movie.', 'Juno dit qu elle peut réorganiser le placard après le travail et regarder quand même un film.'],
  ['Iris believes the event setup will be easy because everyone will just help a little.', 'Iris croit que l installation de l événement sera facile parce que tout le monde aidera juste un peu.'],
  ['Cole expects the houseplant shopping trip to be over in fifteen minutes.', 'Cole s attend à ce que l achat de plantes d intérieur soit terminé en quinze minutes.'],
  ['Riley says he can practice the speech once and be ready to present.', 'Riley dit qu il peut répéter le discours une seule fois et être prêt à le présenter.'],
  ['Pia assumes the desk shelves will assemble quickly because the box is not that big.', 'Pia suppose que les étagères du bureau s assembleront vite parce que la boîte n est pas si grande.'],
  ['Hugo plans to finish homework, wash dishes, and still play games for an hour.', 'Hugo prévoit de finir les devoirs, laver la vaisselle et jouer encore une heure.'],
  ['Sam thinks he can stop by the store "just for one thing" and leave in five minutes.', 'Sam pense pouvoir passer au magasin "juste pour une chose" et repartir en cinq minutes.'],
  ['Jade expects the study group to wrap up early because the topic looks short.', 'Jade s attend à ce que le groupe d étude se termine tôt parce que le sujet semble court.'],
  ['Owen says he can repaint one wall, clean the brushes, and cook dinner before dark.', 'Owen dit qu il peut repeindre un mur, nettoyer les pinceaux et préparer le dîner avant la nuit.'],
  ['Lea assumes the library run will be quick because she knows exactly what book she wants.', 'Léa suppose que le passage à la bibliothèque sera rapide parce qu elle sait exactement quel livre elle veut.'],
  ['Maya thinks she can answer all the emails in one sitting and then start the chores.', 'Maya pense pouvoir répondre à tous les e-mails en une seule fois puis commencer les tâches ménagères.'],
  ['Ben plans to build the shelf after dinner and believes there will still be time to relax.', 'Ben prévoit de monter l étagère après le dîner et croit qu il restera encore du temps pour se détendre.'],
  ['Ava says the morning routine will be shorter today even though she added extra steps.', 'Ava dit que la routine du matin sera plus courte aujourd hui même si elle a ajouté des étapes.'],
  ['Omar assumes he can walk to the store, buy supplies, and get back before the rain starts.', 'Omar suppose qu il peut aller à pied au magasin, acheter des fournitures et revenir avant que la pluie ne commence.'],
  ['Nina plans to pack for vacation, charge every device, and water the plants in one hour.', 'Nina prévoit de faire les valises, charger tous les appareils et arroser les plantes en une heure.'],
  ['Eli expects the assignment draft to take "maybe ten minutes" because he has done similar work before.', 'Eli s attend à ce que le brouillon du devoir prenne "peut-être dix minutes" parce qu il a déjà fait un travail similaire.'],
  ['Lina says she can stop at the bakery, gas station, and pharmacy without changing her route.', 'Lina dit qu elle peut passer à la boulangerie, à la station-service et à la pharmacie sans modifier son trajet.'],
  ['Grant believes the meeting prep is nearly done after choosing the slides.', 'Grant croit que la préparation de la réunion est presque terminée après avoir choisi les diapositives.'],
  ['Tia thinks the entire room can be cleaned before the phone battery dies.', 'Tia pense que toute la pièce peut être nettoyée avant que la batterie du téléphone ne se vide.'],
  ['Finn expects the recipe to be easy because the ingredients are already on the counter.', 'Finn s attend à ce que la recette soit facile parce que les ingrédients sont déjà sur le comptoir.'],
  ['Mina says the birthday poster will take one short craft session and nothing more.', 'Mina dit que l affiche d anniversaire prendra une seule petite séance bricolage et rien de plus.'],
  ['Theo assumes the commute plus the coffee stop will still leave him early.', 'Théo suppose que le trajet plus l arrêt café le laisseront quand même en avance.'],
  ['Juno thinks she can finish the tax paperwork and organize receipts in one evening.', 'Juno pense pouvoir terminer les papiers fiscaux et classer les reçus en une soirée.'],
  ['Iris believes the yard work will be manageable because "it is only a little trimming."', 'Iris croit que le travail du jardin sera gérable parce que "ce n est qu un peu de taille".'],
  ['Cole says the birthday shopping will be over quickly if he sticks to one aisle.', 'Cole dit que les achats d anniversaire seront vite finis s il reste dans une seule allée.'],
  ['Riley expects the weekend project to finish before lunch on Saturday.', 'Riley s attend à ce que le projet du week-end soit terminé avant le déjeuner de samedi.'],
  ['Pia thinks she can review the whole presentation one last time and still catch the bus.', 'Pia pense pouvoir relire toute la présentation une dernière fois et attraper quand même le bus.'],
  ['Hugo says the apartment cleanup will not take long because he has help this time.', 'Hugo dit que le nettoyage de l appartement ne prendra pas longtemps parce qu il a de l aide cette fois.'],
  ['Sam assumes the supermarket visit will be short because he only needs "a few basics."', 'Sam suppose que la visite au supermarché sera courte parce qu il n a besoin que de "quelques basiques".'],
  ['Jade thinks the garden planting, watering, and tool cleanup can all happen before lunch.', 'Jade pense que planter le jardin, arroser et ranger les outils peuvent tous se faire avant le déjeuner.'],
  ['Maya believes the presentation slides will be finished as soon as she adds the title.', 'Maya croit que les diapositives de présentation seront terminées dès qu elle ajoutera le titre.'],
  ['Ben assumes he can answer the survey, fold laundry, and take out trash while dinner cooks.', 'Ben suppose qu il peut répondre au sondage, plier le linge et sortir les poubelles pendant que le dîner cuit.'],
];

const OPTIONS_EN = ['Planning Fallacy', 'Optimism Bias', 'Procrastination', 'Sunk Cost Fallacy'];
const OPTIONS_FR = ['Sophisme de planification', "Biais d'optimisme", 'Procrastination', 'Sophisme des coûts irrécupérables'];

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
      id: 37651 + index,
      level: 5,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? 'Sophisme de planification' : 'Planning Fallacy',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La personne sous-estime le temps, les étapes ou l effort nécessaires pour finir.'
        : 'The person underestimates the time, steps, or effort required to finish.',
      detailedExplanationBeginner: isFrench
        ? 'Le plan paraît plus rapide qu il ne le sera en réalité.'
        : 'The plan looks faster than it will actually be.',
      detailedExplanationIntermediate: isFrench
        ? 'Le sophisme de planification apparaît quand on imagine un futur déroulement trop lisse et qu on oublie les retards, les interruptions et les imprévus ordinaires.'
        : 'The planning fallacy appears when someone imagines a future task going too smoothly and forgets about delays, interruptions, and ordinary surprises.',
      detailedExplanationExpert: isFrench
        ? "Ce biais ne signifie pas seulement être mauvais en organisation. Il s agit d une erreur systématique qui pousse à juger un projet depuis la version idéale imaginée dans sa tête plutôt que depuis les statistiques réelles ou les expériences passées. Dans la vie quotidienne, cela produit des agendas trop serrés, des promesses irréalistes et des échéances qui glissent."
        : 'This bias is not just being bad at organization. It is a systematic error that makes people judge a project from the ideal version in their head instead of from real statistics or past experience. In everyday life, it leads to overloaded schedules, unrealistic promises, and deadlines that slip.',
      questionFormat: 'standard',
    };
  });
}

export const PLANNING_FALLACY_EXPANSION_EN: Question[] = createQuestions('en');
export const PLANNING_FALLACY_EXPANSION_FR: Question[] = createQuestions('fr');
