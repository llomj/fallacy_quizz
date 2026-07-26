import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya circles the three days her team sold extra coffee and ignores the ten normal days before it.', 'Maya entoure les trois jours ou son equipe a vendu plus de cafe et ignore les dix jours normaux avant cela.'],
  ['Leo says his lucky socks work because he only counts the wins and forgets the losses.', 'Leo dit que ses chaussettes porte-bonheur fonctionnent parce qu il ne compte que les victoires et oublie les defaites.'],
  ['Priya points to one neighborhood with two new bakeries and says that area is clearly the citys food hotspot.', 'Priya pointe un quartier avec deux nouvelles boulangeries et dit que cette zone est clairement le centre culinaire de la ville.'],
  ['Omar highlights the one week his running pace improved and ignores the months where it stayed flat.', 'Omar met en avant la seule semaine ou son allure de course a progresse et ignore les mois ou elle est restee stable.'],
  ['Rina says the school newsletter proves the reading program works because it only showcases the best class.', 'Rina dit que le bulletin de l ecole prouve que le programme de lecture marche parce qu il ne montre que la meilleure classe.'],
  ['Ben maps the six best online reviews and calls the restaurant universally amazing.', 'Ben relie les six meilleurs avis en ligne et appelle le restaurant unanimement excellent.'],
  ['Zoe draws a circle around the rainy days when she forgot an umbrella and says rain always ruins her schedule.', 'Zoé trace un cercle autour des jours de pluie ou elle a oublie son parapluie et dit que la pluie ruine toujours son emploi du temps.'],
  ['Kai points to one month of lower spending and says the budget app is the reason his finances are fixed.', 'Kai montre un mois de depenses plus faibles et dit que l application de budget est la raison pour laquelle ses finances sont reglees.'],
  ['Nora highlights the three quiet classes after lunch and says the new seating plan improves every lesson.', 'Nora met en avant les trois classes calmes apres le dejeuner et dit que le nouveau plan de salle ameliore chaque cours.'],
  ['Eli says the citys bike lanes are working because he only looks at the blocks where traffic already changed.', 'Eli dit que les pistes cyclables de la ville fonctionnent parce quil ne regarde que les blocs ou la circulation a deja change.'],
  ['Lina circles the four days her desk was clean and says she is naturally organized.', 'Lina entoure les quatre jours ou son bureau etait propre et dit qu elle est naturellement organisee.'],
  ['Grant says the skincare routine is perfect because he only mentions the few photos with clear skin.', 'Grant dit que la routine de soins est parfaite parce qu il ne cite que les quelques photos avec une peau nette.'],
  ['Tia points to one group of students who liked the lecture and says the talk was a huge success.', 'Tia montre un groupe d eleves qui ont aime le cours et dit que la conference etait un enorme succes.'],
  ['Noah says the game strategy is unbeatable because he only remembers the matches he won by a lot.', 'Noah dit que la strategie de jeu est imbattable parce qu il se souvient seulement des matchs qu il a gagnes largement.'],
  ['Mia marks the one busy Saturday and says the new shop layout fixed the whole store.', 'Mia marque le seul samedi charge et dit que la nouvelle disposition du magasin a tout regle.'],
  ['Jules says his podcast ranking proves the episode format works because he only counts the top downloads.', 'Jules dit que le classement de son podcast prouve que le format des episodes marche parce qu il ne compte que les meilleurs telechargements.'],
  ['Ava says the neighborhood is safer because she only compares the street after the new lights were added.', 'Ava dit que le quartier est plus sur parce qu elle compare seulement la rue apres l ajout des nouvelles lumieres.'],
  ['Finn says the app launch succeeded because he focuses on the first 20 excited users and not the rest.', 'Finn dit que le lancement de l application a reussi parce qu il se concentre sur les 20 premiers utilisateurs enthousiastes et pas sur les autres.'],
  ['Mina says her study method is best because she only charts the chapters where her scores jumped.', 'Mina dit que sa methode d etude est la meilleure parce qu elle trace seulement les chapitres ou ses notes ont monte.'],
  ['Theo says the grocery store is cheaper because he only compares the items that happened to be on sale.', 'Theo dit que l epicerie est moins chere parce qu il compare seulement les articles qui etaient en promotion.'],
  ['Juno says the band is underrated because she only plots the weeks when their streams spiked.', 'Juno dit que le groupe est sous-estime parce qu elle trace seulement les semaines ou leurs ecoutes ont explose.'],
  ['Iris says the local park is always empty because she only counts the mornings when it rains.', 'Iris dit que le parc local est toujours vide parce qu elle ne compte que les matins de pluie.'],
  ['Cole says the new desk chair is a winner because he only mentions the few times it felt good.', 'Cole dit que la nouvelle chaise de bureau est gagnante parce qu il ne mentionne que les quelques fois ou elle etait agreable.'],
  ['Riley says the bakery is the best in town because he only circles the days they sold out early.', 'Riley dit que la boulangerie est la meilleure de la ville parce qu il entoure seulement les jours ou tout s est vendu tot.'],
  ['Pia says the language app is amazing because she only remembers the streak days where she felt fluent.', 'Pia dit que l application de langue est incroyable parce qu elle se souvient seulement des jours de serie ou elle se sentait a l aise.'],
  ['Hugo says the office coffee is great because he only highlights the cups that were brewed well.', 'Hugo dit que le cafe du bureau est excellent parce qu il met en avant seulement les tasses bien preparees.'],
  ['Sam says the school lunch menu is a hit because he only notes the two meals everyone liked.', 'Sam dit que le menu de cantine est un succes parce qu il ne note que les deux repas que tout le monde a apprecies.'],
  ['Jade says the city cycling program is perfect because she only tracks the riders who already loved biking.', 'Jade dit que le programme cycliste de la ville est parfait parce qu elle ne suit que les cyclistes qui aimaient deja faire du velo.'],
  ['Owen says his room cleaning system works because he only compares the one tidy week and ignores the others.', 'Owen dit que son systeme de rangement marche parce qu il compare seulement la seule semaine propre et ignore les autres.'],
  ['Lea says the concert was flawless because she only circles the songs that got loud cheers.', 'Lea dit que le concert etait sans faute parce qu elle entoure seulement les chansons qui ont reçu de grands applaudissements.'],
  ['Maya says the new planner is magical because she only notes the few days she stayed on track.', 'Maya dit que le nouveau agenda est magique parce qu elle ne note que les quelques jours ou elle a tenu le cap.'],
  ['Ben says the gym program is clearly effective because he only charts the people who kept going.', 'Ben dit que le programme de salle est clairement efficace parce qu il trace seulement les personnes qui ont continue.'],
  ['Ava says the city recycling campaign is a success because she only lists the blocks with better bins.', 'Ava dit que la campagne de recyclage de la ville est un succes parce qu elle liste seulement les quartiers avec de meilleures poubelles.'],
  ['Omar says the new burger place is famous because he only points to the weekend lineups.', 'Omar dit que le nouveau burger est fameux parce qu il montre seulement les files du week-end.'],
  ['Nina says the test prep course is excellent because she only counts the students who passed after using it.', 'Nina dit que le cours de preparation est excellent parce qu elle ne compte que les eleves qui ont reussi apres l avoir utilise.'],
  ['Eli says the city bus schedule is perfect because he only marks the routes that ran on time.', 'Eli dit que l horaire des bus est parfait parce qu il note seulement les trajets arrivés a l heure.'],
  ['Lina says the home workout app is unbeatable because she only graphs the weeks she was motivated.', 'Lina dit que l application de sport a la maison est imbattable parce qu elle trace seulement les semaines ou elle etait motivee.'],
  ['Grant says the charity drive was amazing because he only looks at the donation days with the biggest spikes.', 'Grant dit que la collecte caritative etait incroyable parce qu il ne regarde que les jours de dons avec les plus grosses hausses.'],
  ['Tia says the city market is always lively because she only counts the Saturday crowds.', 'Tia dit que le marche de la ville est toujours anime parce qu elle ne compte que les foules du samedi.'],
  ['Noah says the rain jacket is perfect because he only remembers the storms where it kept him dry.', 'Noah dit que la veste de pluie est parfaite parce qu il se souvient seulement des tempetes ou elle l a garde au sec.'],
  ['Mia says the new teacher is brilliant because she only notes the lessons where the class behaved well.', 'Mia dit que la nouvelle prof est brillante parce qu elle ne note que les cours ou la classe s est bien comportee.'],
  ['Jules says the side hustle is booming because he only follows the days with big payouts.', 'Jules dit que son petit boulot explose parce qu il ne suit que les jours avec de gros paiements.'],
  ['Ava says the office renovation was a success because she only circles the polished conference room.', 'Ava dit que la renovation du bureau est un succes parce qu elle entoure seulement la salle de reunion polie.'],
  ['Finn says the local bakery draws crowds because he only looks at the mornings when croissants sold out.', 'Finn dit que la boulangerie locale attire les foules parce qu il ne regarde que les matins ou les croissants se sont vendus.'],
  ['Mina says the train system is reliable because she only measures the lines that ran smoothly after repairs.', 'Mina dit que le reseau ferroviaire est fiable parce qu elle mesure seulement les lignes qui ont bien roule apres les reparations.'],
  ['Theo says the study group is productive because he only records the nights when everyone showed up.', 'Theo dit que le groupe d etude est productif parce qu il enregistre seulement les soirees ou tout le monde etait la.'],
  ['Juno says the neighborhood is booming because she only maps the streets with new cafes.', 'Juno dit que le quartier est en plein essor parce qu elle ne cartographie que les rues avec de nouveaux cafes.'],
  ['Iris says the dog training plan works because she only celebrates the commands the dog already knew.', 'Iris dit que le plan d education du chien marche parce qu elle ne celebre que les ordres que le chien connaissait deja.'],
  ['Cole says the startup pitch was amazing because he only circles the investors who nodded.', 'Cole dit que le pitch de la startup etait incroyable parce qu il entoure seulement les investisseurs qui ont hoché la tete.'],
  ['Riley says the summer camp was a smash because he only counts the kids who wanted to come back.', 'Riley dit que le camp d ete a cartonne parce qu il ne compte que les enfants qui voulaient revenir.'],
  ['Pia says the new notebook system is perfect because she only tracks the pages where she wrote neatly.', 'Pia dit que le nouveau systeme de carnet est parfait parce qu elle ne suit que les pages ou elle a ecrit proprement.'],
  ['Hugo says the festival poster design worked because he only notes the posts that got shared.', 'Hugo dit que le design de l affiche du festival a marche parce qu il ne note que les publications partagées.'],
  ['Sophie says the new study lamp improved grades because she only looks at the students who passed after buying one.', 'Sophie dit que la nouvelle lampe d etude a ameliore les notes parce qu elle ne regarde que les eleves qui ont reussi apres en avoir achete une.'],
  ['Liam says the cafe is thriving because he only counts the afternoons when the patio was full.', 'Liam dit que le cafe prospere parce qu il ne compte que les apres-midis ou la terrasse etait pleine.'],
  ['Emma says the phone case is amazing because she only remembers the drops where the phone survived.', 'Emma dit que la coque de telephone est incroyable parce qu elle ne se rappelle que des chutes ou le telephone a survécu.'],
  ['Diego says the city art program is a success because he only maps the blocks with new murals.', 'Diego dit que le programme artistique de la ville est un succes parce qu il ne cartographie que les quartiers avec de nouvelles fresques.'],
  ['Lily says the umbrella brand is unbeatable because she only notes the storms when it stayed dry.', 'Lily dit que la marque de parapluie est imbattable parce qu elle ne note que les tempetes ou elle est restee au sec.'],
  ['Hassan says the online course works because he only looks at the learners who finished the final module.', 'Hassan dit que le cours en ligne fonctionne parce qu il ne regarde que les apprenants qui ont termine le dernier module.'],
  ['Ruby says the school cafeteria is better because she only highlights the days when her favorite meal was served.', 'Ruby dit que la cantine scolaire est meilleure parce qu elle met en avant seulement les jours ou son repas prefere etait servi.'],
  ['Noah says the new running app is magical because he only records the weeks when he felt motivated.', 'Noah dit que la nouvelle application de course est magique parce qu il n enregistre que les semaines ou il se sentait motive.'],
  ['Chloe says the bookstore is booming because she only looks at the mornings when the new release table emptied fast.', 'Chloe dit que la librairie prospere parce qu elle ne regarde que les matins ou la table des nouveautes s est videe vite.'],
  ['Yusuf says the bike lock is great because he only counts the days when nobody touched his bike.', 'Yusuf dit que le cadenas de velo est excellent parce qu il ne compte que les jours ou personne n a touche a son velo.'],
  ['Maya says the group project was perfect because she only remembers the slides that looked polished.', 'Maya dit que le projet de groupe etait parfait parce qu elle ne se souvient que des diapositives qui avaient l air soignees.'],
  ['Lucas says the music playlist is a hit because he only tracks the songs people asked to replay.', 'Lucas dit que la playlist musicale est un succes parce qu il ne suit que les chansons que les gens ont voulu rejouer.'],
  ['Ari says the city garden program is amazing because he only notes the weekends with packed volunteer sign-ups.', 'Ari dit que le programme de jardin de la ville est incroyable parce qu il ne note que les week-ends avec beaucoup d inscriptions de benevoles.'],
  ['Mina says the new pen is lucky because she only remembers the tests where she scored well after using it.', 'Mina dit que le nouveau stylo porte bonheur parce qu elle ne se souvient que des tests ou elle a bien reussi apres l avoir utilise.'],
  ['Owen says the lunch spot is the best because he only compares the days the special sold out.', 'Owen dit que l endroit du dejeuner est le meilleur parce qu il compare seulement les jours ou le plat du jour a ete vendu.'],
  ['Zara says the language tutor is brilliant because she only focuses on the lessons where she understood everything.', 'Zara dit que le tuteur de langue est brillant parce qu elle se concentre seulement sur les leçons ou elle a tout compris.'],
  ['Ben says the neighborhood is safer because he only counts the nights when the street looked quiet.', 'Ben dit que le quartier est plus sur parce qu il ne compte que les nuits ou la rue paraissait calme.'],
  ['Nora says the new planner is fantastic because she only charts the weeks when her schedule went smoothly.', 'Nora dit que le nouvel agenda est fantastique parce qu elle ne trace que les semaines ou son planning s est bien passe.'],
  ['Eli says the gym class is effective because he only looks at the members who kept attending.', 'Eli dit que le cours de sport est efficace parce qu il ne regarde que les membres qui ont continue a venir.'],
  ['Pia says the rainy season is always awful because she only remembers the downpours that ruined plans.', 'Pia dit que la saison des pluies est toujours affreuse parce qu elle ne se souvient que des averses qui ont ruine les plans.'],
  ['Theo says the office snack shelf is popular because he only watches the afternoons when it emptied.', 'Theo dit que l etagere de collations du bureau est populaire parce qu il ne regarde que les apres-midis ou elle se vidait.'],
  ['Sara says the volunteer program is successful because she only circles the shifts with the most sign-ups.', 'Sara dit que le programme de benevolat est un succes parce qu elle entoure seulement les services avec le plus d inscriptions.'],
  ['Milo says the new headphones are perfect because he only remembers the days they sounded crisp.', 'Milo dit que les nouveaux ecouteurs sont parfaits parce qu il se souvient seulement des jours ou le son etait net.'],
  ['Iris says the community event is a hit because she only plots the nights with the biggest crowd.', 'Iris dit que l evenement communautaire est un succes parce qu elle trace seulement les soirees avec la plus grosse foule.'],
  ['Jude says the project tracker is accurate because he only notes the tasks that finished early.', 'Jude dit que le suivi de projet est precis parce qu il ne note que les taches terminees en avance.'],
  ['Layla says the cafe music is perfect because she only remembers the hours when nobody complained.', 'Layla dit que la musique du cafe est parfaite parce qu elle ne se souvient que des heures ou personne ne s est plaint.'],
  ['Finn says the charity run was a huge success because he only counts the runners who crossed the finish line smiling.', 'Finn dit que la course caritative a ete un enorme succes parce qu il ne compte que les coureurs qui ont franchi l arrivee en souriant.'],
  ['Hana says the new couch is comfortable because she only thinks about the moments when she was relaxed.', 'Hana dit que le nouveau canape est confortable parce qu elle ne pense qu aux moments ou elle etait detendue.'],
  ['Ravi says the training manual works because he only looks at the teams that already knew the basics.', 'Ravi dit que le manuel de formation fonctionne parce qu il ne regarde que les equipes qui connaissaient deja les bases.'],
  ['Lena says the school assembly was inspiring because she only remembers the applause at the end.', 'Lena dit que l assemblee scolaire etait inspirante parce qu elle ne se souvient que des applaudissements a la fin.'],
  ['Jon says the weather forecast is amazing because he only circles the days it happened to be right.', 'Jon dit que la prévision météo est incroyable parce qu il entoure seulement les jours ou elle etait juste.'],
  ['Mara says the new recipe is a winner because she only counts the times it looked good in photos.', 'Mara dit que la nouvelle recette est gagnante parce qu elle ne compte que les fois ou elle avait l air bonne en photo.'],
  ['Omar says the playground upgrade is perfect because he only tracks the kids who kept playing on the new equipment.', 'Omar dit que la mise a niveau de l aire de jeux est parfaite parce qu il ne suit que les enfants qui ont continue a jouer sur le nouveau materiel.'],
  ['Clara says the office plant is helping morale because she only notices the days it looked fresh.', 'Clara dit que la plante du bureau aide le moral parce qu elle ne remarque que les jours ou elle avait l air fraiche.'],
  ['Ezra says the weekend market is a hit because he only remembers the stalls with long lines.', 'Ezra dit que le marche du week-end est un succes parce qu il ne se souvient que des stands avec de longues files.'],
  ['Fiona says the new textbook is easy because she only highlights the pages that matched her notes.', 'Fiona dit que le nouveau manuel est facile parce qu elle ne met en avant que les pages qui correspondaient a ses notes.'],
  ['Gabe says the school bus route is efficient because he only counts the mornings without delays.', 'Gabe dit que la ligne de bus scolaire est efficace parce qu il ne compte que les matins sans retard.'],
  ['Helena says the fundraising email is great because she only looks at the days donations jumped.', 'Helena dit que le courriel de collecte de fonds est excellent parce qu elle ne regarde que les jours ou les dons ont augmente.'],
  ['Ivo says the team hoodie is lucky because he only remembers the games they won while wearing it.', 'Ivo dit que le sweat d equipe porte bonheur parce qu il se souvient seulement des matchs gagnes en le portant.'],
  ['Jenna says the new desk setup is perfect because she only measures the hours she felt focused.', 'Jenna dit que la nouvelle installation du bureau est parfaite parce qu elle ne mesure que les heures ou elle se sentait concentree.'],
  ['Khalil says the city festival is popular because he only notes the nights with fireworks.', 'Khalil dit que le festival de la ville est populaire parce qu il ne note que les soirees avec des feux d artifice.'],
  ['Luna says the cooking class is excellent because she only counts the recipes she got right.', 'Luna dit que le cours de cuisine est excellent parce qu elle ne compte que les recettes reussies.'],
  ['Mason says the new shuttle is convenient because he only remembers the rides that were on time.', 'Mason dit que la nouvelle navette est pratique parce qu il se souvient seulement des trajets a l heure.'],
  ['Nadia says the volunteer drive is amazing because she only looks at the weeks with the biggest signup sheets.', 'Nadia dit que la campagne de benevolat est incroyable parce qu elle ne regarde que les semaines avec les plus grandes listes d inscriptions.'],
  ['Oli says the class notes are brilliant because he only follows the topics that showed up on the test.', 'Oli dit que les notes de cours sont brillantes parce qu il ne suit que les sujets qui sont tombes a l examen.'],
  ['Parker says the city recycling plan is working because he only charts the blocks where people already cared about sorting.', 'Parker dit que le plan de recyclage de la ville fonctionne parce qu il trace seulement les quartiers ou les gens se souciaient deja du tri.'],
  ['Quinn says the weekend hike was incredible because he only remembers the scenic parts.', 'Quinn dit que la randonnee du week-end etait incroyable parce qu il ne se souvient que des parties panoramiques.'],
  ['Rosa says the new keyboard is amazing because she only tracks the typing sessions when it felt smooth.', 'Rosa dit que le nouveau clavier est incroyable parce qu elle ne suit que les sessions de frappe ou il etait fluide.'],
];

const OPTIONS_EN = ['Texas Sharpshooter Fallacy', 'Cherry Picking', 'Data Dredging', 'Hasty Generalization'];
const OPTIONS_FR = ['Sophisme du tireur du Texas', 'Cerises (sélection biaisée)', 'Fouille de données', 'Généralisation hâtive'];

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
      id: 42501 + index,
      level: 2,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Sophisme du tireur du Texas' : 'Texas Sharpshooter Fallacy',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'On selectionne seulement les points qui donnent l illusion d un motif, puis on oublie les points qui contredisent ce motif.'
        : 'Only the points that fit a pattern are selected, while the points that contradict it are ignored.',
      detailedExplanationBeginner: isFrench
        ? 'On dessine la cible apres avoir vu les tirs.'
        : 'The target is drawn after the shots are already known.',
      detailedExplanationIntermediate: isFrench
        ? "Le sophisme du tireur du Texas apparait quand on prend quelques cas qui semblent alignes et qu on fait comme si le motif avait ete prevu d avance. Le reste des donnees disparaît du tableau."
        : 'The Texas sharpshooter fallacy appears when a few cases are selected because they seem aligned, then treated as if the pattern had been predicted in advance. The rest of the data disappears from view.',
      detailedExplanationExpert: isFrench
        ? "La structure est post hoc et selectionnee: on ne teste pas une hypothese sur l ensemble des donnees, on repere apres coup les coincidences qui confirment un motif narratif. C est proche de la fouille de donnees, mais avec l accent mis sur le tracage arbitraire du contour autour des succes visibles."
        : 'The structure is post hoc and selective: instead of testing a hypothesis against the full data, we retrospectively spot coincidences that support a narrative pattern. It is close to data dredging, but with extra emphasis on arbitrarily tracing a contour around the visible hits.',
      questionFormat: 'standard',
    };
  });
}

export const TEXAS_SHARPSHOOTER_EXPANSION_EN: Question[] = createQuestions('en');
export const TEXAS_SHARPSHOOTER_EXPANSION_FR: Question[] = createQuestions('fr');
