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
  ['Zoe thinks she can clean the garage, sort donations, and still make it to dinner on time.', 'Zoé pense qu elle peut nettoyer le garage, trier les dons et arriver quand même à l heure au dîner.'],
  ['Kai assumes the report will be done in an hour because he already opened the document.', 'Kai suppose que le rapport sera terminé en une heure parce qu il a déjà ouvert le document.'],
  ['Nora plans to grocery shop, call her mom, and start laundry before sunset.', 'Nora prévoit de faire les courses, appeler sa mère et lancer une machine avant le coucher du soleil.'],
  ['Eli thinks painting one wall will lead to finishing the whole apartment that evening.', 'Eli pense que peindre un seul mur mènera à finir tout l appartement le soir même.'],
  ['Lina says the birthday cake and the party setup can both be done in one quick run.', 'Lina dit que le gâteau d anniversaire et la mise en place de la fête peuvent tous deux être faits en une seule petite sortie.'],
  ['Grant assumes he can read the article, write notes, and prepare questions during lunch.', 'Grant suppose qu il peut lire l article, prendre des notes et préparer des questions pendant le déjeuner.'],
  ['Tia thinks the team can finish the slides after one short meeting and no more.', 'Tia pense que l équipe peut finir les diapositives après une seule courte réunion et rien de plus.'],
  ['Noah believes he can vacuum, mop, and organize the closet before the coffee gets cold.', 'Noah croit qu il peut passer l aspirateur, laver le sol et ranger le placard avant que le café ne refroidisse.'],
  ['Mia plans to do all her errands in one loop because "everything is close enough."', 'Mia prévoit de faire toutes ses courses en une seule boucle parce que "tout est assez proche".'],
  ['Jules says he can study for history and math together and still relax afterward.', 'Jules dit qu il peut réviser l histoire et les maths en même temps et se détendre ensuite.'],
  ['Ava thinks the move will only take a couple of boxes because the rest is already packed.', 'Ava pense que le déménagement ne prendra que quelques cartons parce que le reste est déjà emballé.'],
  ['Finn assumes the workshop prep is almost done after printing the handouts.', 'Finn suppose que la préparation de l atelier est presque terminée après avoir imprimé les documents.'],
  ['Mina says she can cook, set the table, and reply to messages without missing the movie.', 'Mina dit qu elle peut cuisiner, mettre la table et répondre aux messages sans rater le film.'],
  ['Theo believes the small apartment cleanup will stay small even after he starts.', 'Théo croit que le petit nettoyage de l appartement restera petit même après avoir commencé.'],
  ['Juno plans to finish the application, the cover letter, and the references after work.', 'Juno prévoit de terminer la candidature, la lettre de motivation et les références après le travail.'],
  ['Iris thinks the short walk to the store means she can also stop at the bank and post office.', 'Iris pense que la courte marche jusqu au magasin signifie qu elle peut aussi passer à la banque et à la poste.'],
  ['Cole says the homework will be easy because he understands the first question.', 'Cole dit que les devoirs seront faciles parce qu il comprend la première question.'],
  ['Riley assumes he can bake, clean, and still leave the house looking calm.', 'Riley suppose qu il peut cuisiner, nettoyer et laisser la maison en ordre.'],
  ['Pia thinks the event setup will be done fast because the tablecloths are already folded.', 'Pia pense que l installation de l événement ira vite parce que les nappes sont déjà pliées.'],
  ['Hugo plans to finish the project proposal during the commute.', 'Hugo prévoit de terminer la proposition de projet pendant le trajet.'],
  ['Sam says he can phone the bank, fix the calendar, and do a grocery stop in one trip.', 'Sam dit qu il peut appeler la banque, corriger le calendrier et faire un détour par les courses en un seul trajet.'],
  ['Jade thinks the group cleanup will be over once the trash bags are out.', 'Jade pense que le nettoyage de groupe sera terminé une fois les sacs poubelle sortis.'],
  ['Owen assumes the weekend assignment can be finished in a single Sunday afternoon.', 'Owen suppose que le devoir du week-end peut être terminé en un seul après-midi de dimanche.'],
  ['Lea says the thank-you cards will only take a few minutes because there are not many guests.', 'Léa dit que les cartes de remerciement ne prendront que quelques minutes parce qu il n y a pas beaucoup d invités.'],
  ['Maya plans to reorganize the pantry and still have time to start a new show.', 'Maya prévoit de réorganiser le garde-manger et d avoir encore le temps de commencer une nouvelle série.'],
  ['Ben assumes the driveway cleaning will be quick because the dirt looks thin.', 'Ben suppose que le nettoyage de l allée sera rapide parce que la saleté semble mince.'],
  ['Ava thinks she can write the essay, make dinner, and shower all before 9 p.m.', 'Ava pense pouvoir écrire la dissertation, préparer le dîner et prendre une douche avant 21 h.'],
  ['Omar plans to fix his bike, clean the chain, and test it in one short break.', 'Omar prévoit de réparer son vélo, nettoyer la chaîne et le tester pendant une courte pause.'],
  ['Nina says the class decorations will be finished once the balloons are inflated.', 'Nina dit que les décorations de classe seront terminées une fois les ballons gonflés.'],
  ['Eli assumes the laundry will be folded quickly because the basket is not full.', 'Eli suppose que le linge sera plié rapidement parce que le panier n est pas plein.'],
  ['Lina thinks the road trip prep is basically done after choosing music.', 'Lina pense que la préparation du voyage est en gros terminée après avoir choisi la musique.'],
  ['Grant says the presentation will stay under time because the topic is familiar.', 'Grant dit que la présentation restera dans le temps imparti parce que le sujet est familier.'],
  ['Tia plans to answer all messages, water plants, and make tea before starting work.', 'Tia prévoit de répondre à tous les messages, arroser les plantes et faire du thé avant de commencer le travail.'],
  ['Finn assumes the craft project will be easy because he already has glue.', 'Finn suppose que le projet bricolage sera facile parce qu il a déjà de la colle.'],
  ['Mina thinks the yard work can be done before lunch because the grass is not very high.', 'Mina pense que le jardin peut être fait avant le déjeuner parce que l herbe n est pas très haute.'],
  ['Theo says he can pack, print tickets, and still have time to nap.', 'Théo dit qu il peut faire les valises, imprimer les billets et avoir encore le temps de faire une sieste.'],
  ['Juno assumes the internship application is almost finished after one paragraph.', 'Juno suppose que la candidature de stage est presque terminée après un seul paragraphe.'],
  ['Iris thinks the apartment cleaning can be split into "tiny easy pieces" and still end fast.', 'Iris pense que le nettoyage de l appartement peut être découpé en "toutes petites étapes faciles" et finir vite.'],
  ['Cole expects the book summary, the email reply, and the grocery run to fit into one lunch break.', 'Cole s attend à ce que le résumé du livre, la réponse au courriel et les courses tiennent dans une seule pause déjeuner.'],
  ['Riley says the weekend chores will be painless because he started early.', 'Riley dit que les corvées du week-end seront sans douleur parce qu il a commencé tôt.'],
  ['Pia assumes the planning meeting will turn into the actual event prep without extra time.', 'Pia suppose que la réunion de préparation se transformera en préparation réelle de l événement sans temps supplémentaire.'],
  ['Hugo thinks the repair estimate is low because the broken thing looks small.', 'Hugo pense que l estimation de réparation est faible parce que la chose cassée a l air petite.'],
  ['Sam says he can run all his errands after work and still cook from scratch.', 'Sam dit qu il peut faire toutes ses courses après le travail et cuisiner quand même à partir de rien.'],
  ['Jade expects the guest room to be ready once she makes the bed.', 'Jade s attend à ce que la chambre d amis soit prête une fois le lit fait.'],
  ['Owen plans to finish the budget and the taxes in one quiet evening.', 'Owen prévoit de finir le budget et les impôts en une seule soirée tranquille.'],
  ['Lea thinks the hike prep will be quick because the backpack is already nearby.', 'Léa pense que la préparation de la randonnée sera rapide parce que le sac à dos est déjà à proximité.'],
  ['Maya assumes the whole afternoon is enough for a task she has never timed before.', 'Maya suppose que tout l après-midi suffit pour une tâche qu elle n a jamais chronométrée.'],
  ['Ben says the family visit, grocery stop, and cleaning can all happen without overlap.', 'Ben dit que la visite de famille, le passage aux courses et le nettoyage peuvent tous se faire sans chevauchement.'],
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
