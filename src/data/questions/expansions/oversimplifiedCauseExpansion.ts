import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says the whole class failed because the teacher spoke too fast, ignoring the hard test and the noisy room.', 'Maya dit que toute la classe a echoue parce que le professeur parlait trop vite, en ignorant le controle difficile et la salle bruyante.'],
  ['Leo says his bad mood came from one rude email, even though he had a stressful week, little sleep, and a long commute.', 'Leo dit que sa mauvaise humeur vient d un seul courriel impoli, alors qu il a eu une semaine stressante, peu de sommeil et un long trajet.'],
  ['Priya says the project collapsed because one teammate was late, ignoring the missing budget, unclear goals, and rushed deadline.', 'Priya dit que le projet a échoue parce qu un coequipier etait en retard, en ignorant le budget manquant, les objectifs flous et le delai serre.'],
  ['Omar says the city is louder because of one new bar, even though the road works and weekend crowds also changed.', 'Omar dit que la ville est plus bruyante a cause d un seul nouveau bar, alors que les travaux routiers et la foule du week-end ont aussi change.'],
  ['Rina says her grades dropped because she bought a new phone, ignoring the harder courses and the extra shifts at work.', 'Rina dit que ses notes ont baisse parce qu elle a achete un nouveau telephone, en ignorant les cours plus difficiles et les heures supplementaires au travail.'],
  ['Ben says the soup was ruined because of one spice, even though the broth was already too salty and cooked too long.', 'Ben dit que la soupe a ete ratee a cause d une seule epice, alors que le bouillon etait deja trop sale et trop cuit.'],
  ['Zoe says the team lost because of one missed shot, ignoring the weak defense and the turnovers all game.', 'Zoé dit que l equipe a perdu a cause d un seul tir rate, en ignorant la defense faible et les pertes de balle pendant tout le match.'],
  ['Kai says the garden died because of one hot afternoon, ignoring the weeks of poor watering and the tiny pots.', 'Kai dit que le jardin est mort a cause d une seule apres-midi chaude, en ignorant les semaines d arrosage insuffisant et les petits pots.'],
  ['Nora says the meeting went badly because one person interrupted, ignoring the unclear agenda and the rushed planning.', 'Nora dit que la reunion s est mal passee parce qu une personne a interrompu, en ignorant l ordre du jour flou et la planification baclee.'],
  ['Eli says the app was slow because of one update, ignoring the old phone and the weak network.', 'Eli dit que l application etait lente a cause d une seule mise a jour, en ignorant le vieux telephone et le reseau faible.'],
  ['Lina says the picnic got boring because of one cloudy hour, ignoring the bad snacks and the awkward silence.', 'Lina dit que le pique-nique est devenu ennuyeux a cause d une seule heure nuageuse, en ignorant les mauvais encas et le silence gene.'],
  ['Grant says the store lost customers because of one bad review, ignoring the high prices and the long checkout line.', 'Grant dit que le magasin a perdu des clients a cause d un seul mauvais avis, en ignorant les prix eleves et la longue file a la caisse.'],
  ['Tia says the movie failed because one joke did not land, ignoring the messy plot and flat acting.', 'Tia dit que le film a echoue parce qu une blague n a pas fait rire, en ignorant l intrigue brouillonne et le jeu plat des acteurs.'],
  ['Noah says the argument fell apart because one fact was wrong, ignoring the weak evidence and the shaky logic.', 'Noah dit que l argument s est effondre parce qu un fait etait faux, en ignorant les preuves faibles et la logique fragile.'],
  ['Mia says the bakery sold out because of one influencer post, ignoring the holiday rush and the bakerys good reputation.', 'Mia dit que la boulangerie a tout vendu a cause d une seule publication d influenceur, en ignorant l affluence des fetes et la bonne reputation de la boulangerie.'],
  ['Jules says the school behavior improved because of one new poster, ignoring the new counselor and the smaller class sizes.', 'Jules dit que le comportement a l ecole s est ameliore a cause d une seule nouvelle affiche, en ignorant la nouvelle conseillere et les classes plus petites.'],
  ['Ava says the road trip was fun because of one playlist, ignoring the good weather and the easy route.', 'Ava dit que le voyage en voiture etait amusant a cause d une seule playlist, en ignorant le beau temps et l itineraire facile.'],
  ['Finn says the sales team succeeded because of one pep talk, ignoring the training, incentives, and better leads.', 'Finn dit que l equipe commerciale a reussi a cause d un seul discours motivant, en ignorant la formation, les primes et les meilleurs prospects.'],
  ['Mina says her friend is late because of one alarm failure, ignoring the late bedtime and the traffic jam.', 'Mina dit que son amie est en retard a cause d une seule alarme qui a rate, en ignorant le coucher tardif et le bouchon.'],
  ['Theo says the party got wild because of one song, ignoring the drinks, the crowd, and the late hour.', 'Theo dit que la fete est devenue folle a cause d une seule chanson, en ignorant les boissons, la foule et l heure tardive.'],
  ['Juno says the child acted up because of one candy bar, ignoring the skipped nap and the long car ride.', 'Juno dit que l enfant a fait des difficultes a cause d une seule barre chocolatée, en ignorant la sieste sautee et le long trajet en voiture.'],
  ['Iris says the website crashed because of one button, ignoring the overloaded server and the bad code release.', 'Iris dit que le site a plante a cause d un seul bouton, en ignorant le serveur surcharge et la mauvaise mise en production du code.'],
  ['Cole says the room felt tense because of one complaint, ignoring the deadline pressure and the cold coffee.', 'Cole dit que la piece etait tendue a cause d une seule plainte, en ignorant la pression du delai et le cafe froid.'],
  ['Riley says the plant wilted because of one sunny day, ignoring the dry soil and the broken pot.', 'Riley dit que la plante a fane a cause d une seule journee ensoleillee, en ignorant la terre seche et le pot casse.'],
  ['Pia says the podcast lost listeners because of one guest, ignoring the long episodes and bad audio.', 'Pia dit que le podcast a perdu des auditeurs a cause d un seul invite, en ignorant les episodes trop longs et le mauvais son.'],
  ['Hugo says the trip was delayed because of one toll booth, ignoring the weather, the road closure, and the lunch stop.', 'Hugo dit que le voyage a ete retarde a cause d un seul peage, en ignorant la meteo, la route fermee et l arret dejeuner.'],
  ['Sam says the new recipe failed because of one ingredient, ignoring the poor measurements and the wrong oven temperature.', 'Sam dit que la nouvelle recette a echoue a cause d un seul ingredient, en ignorant les mauvaises mesures et la mauvaise temperature du four.'],
  ['Jade says the student failed because of one missing worksheet, ignoring the absences and the unfinished unit.', 'Jade dit que l eleve a echoue a cause d une seule fiche manquante, en ignorant les absences et l unite non terminee.'],
  ['Owen says the neighborhood feels unsafe because of one loud night, ignoring the brighter lights and the new patrols.', 'Owen dit que le quartier semble dangereux a cause d une seule nuit bruyante, en ignorant les lumieres plus fortes et les nouvelles patrouilles.'],
  ['Lea says the team chemistry changed because of one new hire, ignoring the manager change and the new schedule.', 'Lea dit que la chimie de l equipe a change a cause d une seule recrue, en ignorant le changement de manager et le nouvel horaire.'],
  ['Maya says the cafe got popular because of one mural, ignoring the better coffee and the cheaper prices.', 'Maya dit que le cafe est devenu populaire a cause d une seule fresque, en ignorant le meilleur cafe et les prix plus bas.'],
  ['Ben says the baby slept badly because of one toy, ignoring the heat, the nap timing, and the noise outside.', 'Ben dit que le bebe a mal dormi a cause d un seul jouet, en ignorant la chaleur, l horaire de la sieste et le bruit dehors.'],
  ['Ava says the fundraiser missed its goal because of one missed text, ignoring the small donor list and the weak promotion.', 'Ava dit que la collecte a rate son objectif a cause d un seul message non envoye, en ignorant la petite liste de donateurs et la faible promotion.'],
  ['Omar says the class became chaotic because of one prank, ignoring the substitute teacher and the Friday afternoon energy.', 'Omar dit que la classe est devenue chaotique a cause d une seule blague, en ignorant le professeur remplaçant et l energie du vendredi apres-midi.'],
  ['Nina says the laptop battery died because of one video call, ignoring the old battery and the brightness level.', 'Nina dit que la batterie de l ordinateur est morte a cause d un seul appel video, en ignorant la vieille batterie et le niveau de luminosite.'],
  ['Eli says the neighborhood lost charm because of one new sign, ignoring the empty storefronts and the cracked sidewalk.', 'Eli dit que le quartier a perdu son charme a cause d une seule nouvelle enseigne, en ignorant les vitrines vides et le trottoir fissure.'],
  ['Lina says the student was distracted because of one noisy classmate, ignoring the bad seating and the confusing assignment.', 'Lina dit que l eleve etait distrait a cause d un seul camarade bruyant, en ignorant la mauvaise place et le devoir confus.'],
  ['Grant says the family dinner was awkward because of one joke, ignoring the argument before dinner and the rushed cooking.', 'Grant dit que le diner de famille etait genant a cause d une seule blague, en ignorant la dispute avant le repas et la cuisine baclee.'],
  ['Tia says the online order was late because of one warehouse issue, ignoring the holiday surge and the missing address detail.', 'Tia dit que la commande en ligne etait en retard a cause d un seul probleme d entrepot, en ignorant l afflux des fetes et le detail d adresse manquant.'],
  ['Noah says the car made strange noises because of one pothole, ignoring the worn brakes and the low tire pressure.', 'Noah dit que la voiture a fait des bruits etranges a cause d un seul nid-de-poule, en ignorant les freins uses et la faible pression des pneus.'],
  ['Mia says the team stopped talking because of one awkward joke, ignoring the long meeting and the tense deadlines.', 'Mia dit que l equipe a cesse de parler a cause d une seule blague maladroite, en ignorant la longue reunion et les delais tendus.'],
  ['Jules says the shop looks fancy because of one chandelier, ignoring the polished floor and the expensive menu.', 'Jules dit que la boutique parait chic a cause d un seul lustre, en ignorant le sol poli et le menu cher.'],
  ['Ava says the student won because of one lucky guess, ignoring the study session and the two other correct answers.', 'Ava dit que l eleve a gagne a cause d une seule devinette chanceuse, en ignorant la seance d etude et les deux autres bonnes reponses.'],
  ['Hugo says the music festival succeeded because of one headline act, ignoring the food stalls, the marketing, and the sunny weather.', 'Hugo dit que le festival de musique a reussi a cause d une seule tete d affiche, en ignorant les stands de nourriture, la promotion et le beau temps.'],
  ['Sam says the app felt easier because of one new button, ignoring the simpler menu and the improved tutorial.', 'Sam dit que l application semblait plus facile a cause d un seul nouveau bouton, en ignorant le menu plus simple et le tutoriel ameliore.'],
  ['Jade says the school trip was memorable because of one photo, ignoring the shared bus ride and the long hike.', 'Jade dit que la sortie scolaire etait memorable a cause d une seule photo, en ignorant le trajet en bus partage et la longue randonnee.'],
  ['Owen says the debate was won because of one sharp comeback, ignoring the stronger evidence and the calmer tone.', 'Owen dit que le debat a ete gagne a cause d une seule replique brillante, en ignorant les preuves plus solides et le ton plus calme.'],
  ['Riley says the restaurant got bad reviews because of one cold appetizer, ignoring the noisy room and the slow service.', 'Riley dit que le restaurant a recu de mauvais avis a cause d une seule entree froide, en ignorant la salle bruyante et le service lent.'],
  ['Pia says the school assembly felt inspiring because of one speech, ignoring the music, the decorations, and the awards.', 'Pia dit que l assemblee scolaire etait inspirante a cause d un seul discours, en ignorant la musique, les decorations et les prix.'],
  ['Theo says the workout plan failed because of one skipped day, ignoring the overall consistency and the sleep improvement.', 'Theo dit que le plan d entrainement a echoue a cause d un seul jour saute, en ignorant la regularite globale et l amelioration du sommeil.'],
  ['Mina says the neighborhood became friendlier because of one block party, ignoring the years of local volunteering and the community garden.', 'Mina dit que le quartier est devenu plus amical a cause d une seule fete de voisinage, en ignorant les annees de benevolat local et le jardin communautaire.'],
  ['Kai says the class got quieter because of one new rule, ignoring the better seating and the teacher walking around more.', 'Kai dit que la classe est devenue plus calme a cause d une seule nouvelle regle, en ignorant la meilleure disposition des places et le professeur qui circulait davantage.'],
  ['Nora says the startup failed because of one bad investor call, ignoring the cash shortage and the weak product market fit.', 'Nora dit que la startup a echoue a cause d un seul mauvais appel avec un investisseur, en ignorant le manque de liquidites et le faible ajustement produit-marche.'],
  ['Eli says the birthday went wrong because of one broken candle, ignoring the rain, the late guests, and the missing cake knife.', 'Eli dit que l anniversaire a mal tourne a cause d une seule bougie cassee, en ignorant la pluie, les invites en retard et le couteau a gateau manquant.'],
  ['Lina says the company improved because of one new logo, ignoring the better customer support and the lower prices.', 'Lina dit que l entreprise s est amelioree a cause d un seul nouveau logo, en ignorant le meilleur service client et les prix plus bas.'],
  ['Grant says the trip became fun because of one funny photo, ignoring the relaxed schedule and the good company.', 'Grant dit que le voyage est devenu amusant a cause d une seule photo drole, en ignorant l emploi du temps relaxe et la bonne compagnie.'],
  ['Tia says the house felt warmer because of one new lamp, ignoring the repaired windows and the better insulation.', 'Tia dit que la maison semblait plus chaude a cause d une seule nouvelle lampe, en ignorant les fenetres reparees et la meilleure isolation.'],
  ['Noah says the class improved because of one pep rally, ignoring the tutoring program and the smaller groups.', 'Noah dit que la classe s est amelioree a cause d un seul rassemblement motivant, en ignorant le programme de tutorat et les petits groupes.'],
  ['Mia says the charity got more donations because of one video, ignoring the story, the timing, and the donor matching.', 'Mia dit que l association a obtenu plus de dons a cause d une seule video, en ignorant l histoire, le timing et le doublement des dons.'],
  ['Sophie says the neighborhood got friendlier because of one block party, ignoring the new community garden and the volunteer group.', 'Sophie dit que le quartier est devenu plus sympathique a cause d une seule fete de quartier, en ignorant le nouveau jardin communautaire et le groupe de benevoles.'],
  ['Liam says the app improved because of one new button, ignoring the simpler menu and the bug fixes.', 'Liam dit que l application s est amelioree a cause d un seul nouveau bouton, en ignorant le menu plus simple et les corrections de bugs.'],
  ['Emma says the class got quieter because of one rule, ignoring the better seating and the teacher walking around more.', 'Emma dit que la classe est devenue plus calme a cause d une seule regle, en ignorant la meilleure disposition des places et le professeur qui circulait davantage.'],
  ['Diego says the trip was successful because of one funny photo, ignoring the relaxed schedule and the good company.', 'Diego dit que le voyage a ete reussi a cause d une seule photo drole, en ignorant l emploi du temps detendu et la bonne compagnie.'],
  ['Lily says the fundraiser succeeded because of one viral post, ignoring the matching donation and the local press coverage.', 'Lily dit que la collecte a reussi a cause d une seule publication virale, en ignorant le don egalé et la couverture de la presse locale.'],
  ['Hassan says the meeting went well because of one cheerful joke, ignoring the clear agenda and the short duration.', 'Hassan dit que la reunion s est bien passee a cause d une seule blague joyeuse, en ignorant l ordre du jour clair et la courte duree.'],
  ['Ruby says the bakery sold out because of one influencer photo, ignoring the holiday rush and the lower prices.', 'Ruby dit que la boulangerie a tout vendu a cause d une seule photo d influenceur, en ignorant l affluence des fetes et les prix plus bas.'],
  ['Noah says the garden grew because of one sunny afternoon, ignoring the weeks of watering and the better soil.', 'Noah dit que le jardin a pousse a cause d un seul apres-midi ensoleille, en ignorant les semaines d arrosage et la meilleure terre.'],
  ['Chloe says the report was clear because of one good chart, ignoring the better structure and the careful editing.', 'Chloe dit que le rapport etait clair a cause d un seul bon graphique, en ignorant la meilleure structure et la revision attentive.'],
  ['Yusuf says the team won because of one great shot, ignoring the stronger defense and the turnovers from the other team.', 'Yusuf dit que l equipe a gagne a cause d un seul superbe tir, en ignorant la defense plus forte et les pertes de balle de l autre equipe.'],
  ['Maya says the party was fun because of one playlist, ignoring the friends, the snacks, and the easy conversation.', 'Maya dit que la fete etait amusante a cause d une seule playlist, en ignorant les amis, les collations et la conversation facile.'],
  ['Lucas says the store is popular because of one mural, ignoring the better coffee and the shorter checkout line.', 'Lucas dit que le magasin est populaire a cause d une seule fresque, en ignorant le meilleur cafe et la file d attente plus courte.'],
  ['Ari says the lesson worked because of one example, ignoring the practice, the review, and the small groups.', 'Ari dit que la leçon a marche a cause d un seul exemple, en ignorant la pratique, la revision et les petits groupes.'],
  ['Mina says the commute is better because of one new lane, ignoring the schedule change and the improved signals.', 'Mina dit que le trajet est meilleur a cause d une seule nouvelle voie, en ignorant le changement d horaire et les feux ameliores.'],
  ['Owen says the event was quiet because of one reminder text, ignoring the rain and the late start.', 'Owen dit que l evenement etait calme a cause d un seul texto de rappel, en ignorant la pluie et le depart tardif.'],
  ['Zara says the class behavior improved because of one poster, ignoring the new counselor and the smaller class size.', 'Zara dit que le comportement en classe s est ameliore a cause d une seule affiche, en ignorant la nouvelle conseillere et la classe plus petite.'],
  ['Ben says the laptop is fast because of one new charger, ignoring the fresh battery and the cleanup.', 'Ben dit que l ordinateur portable est rapide a cause d un seul nouveau chargeur, en ignorant la batterie neuve et le nettoyage.'],
  ['Nora says the road trip was smooth because of one stop, ignoring the traffic update and the easy route.', 'Nora dit que le road trip etait fluide a cause d un seul arret, en ignorant la mise a jour du trafic et l itineraire facile.'],
  ['Eli says the project succeeded because of one meeting, ignoring the planning, the budget, and the extra help.', 'Eli dit que le projet a reussi a cause d une seule reunion, en ignorant la planification, le budget et l aide supplementaire.'],
  ['Pia says the family dinner was great because of one dessert, ignoring the conversation and the shared cleanup.', 'Pia dit que le diner de famille etait genial a cause d un seul dessert, en ignorant la conversation et le rangement partage.'],
  ['Hugo says the app became easy because of one tutorial, ignoring the simpler layout and the updated labels.', 'Hugo dit que l application est devenue facile a cause d un seul tutoriel, en ignorant la disposition plus simple et les etiquettes mises a jour.'],
  ['Sam says the class was more engaged because of one game, ignoring the interesting topic and the smaller discussion groups.', 'Sam dit que la classe etait plus engagee a cause d un seul jeu, en ignorant le sujet interessant et les petits groupes de discussion.'],
  ['Jade says the road felt safer because of one traffic light, ignoring the lower speed limit and the new crosswalk.', 'Jade dit que la route semblait plus sûre a cause d un seul feu de circulation, en ignorant la limite de vitesse plus basse et le nouveau passage pieton.'],
  ['Owen says the coffee tasted better because of one sweetener, ignoring the better beans and the cleaner machine.', 'Owen dit que le cafe avait meilleur gout a cause d un seul edulcorant, en ignorant les meilleurs grains et la machine plus propre.'],
  ['Riley says the teacher was effective because of one praise-filled lesson, ignoring the steady routines and the homework review.', 'Riley dit que le professeur etait efficace a cause d une seule leçon pleine de compliments, en ignorant les routines stables et la revision des devoirs.'],
  ['Pia says the party was lively because of one song, ignoring the guests, the food, and the late hour.', 'Pia dit que la fete etait animee a cause d une seule chanson, en ignorant les invites, la nourriture et l heure tardive.'],
  ['Theo says the fundraiser hit its target because of one big donor, ignoring the many small gifts and the emails.', 'Theo dit que la collecte a atteint son objectif a cause d un seul gros donateur, en ignorant les nombreux petits dons et les courriels.'],
  ['Juno says the workout plan failed because of one tired day, ignoring the overall consistency and better sleep.', 'Juno dit que le plan d entrainement a echoue a cause d un seul jour de fatigue, en ignorant la regularite globale et le meilleur sommeil.'],
  ['Iris says the neighborhood improved because of one clean street, ignoring the volunteer cleanup and the new bins.', 'Iris dit que le quartier s est ameliore a cause d une seule rue propre, en ignorant le nettoyage benevole et les nouvelles poubelles.'],
  ['Cole says the speech was a success because of one applause burst, ignoring the clear structure and the practice.', 'Cole dit que le discours etait un succes a cause d une seule salve d applaudissements, en ignorant la structure claire et l entrainement.'],
  ['Riley says the trip was a mess because of one detour, ignoring the weather, the construction, and the rest stop.', 'Riley dit que le voyage etait un bazar a cause d un seul detour, en ignorant la meteo, les travaux et l aire de repos.'],
  ['Pia says the concert was disappointing because of one late song, ignoring the strong first half and the encore.', 'Pia dit que le concert etait decevant a cause d une seule chanson en retard, en ignorant le bon debut et le rappel final.'],
  ['Hugo says the shop is failing because of one broken sign, ignoring the busy weekend and the better reviews.', 'Hugo dit que la boutique est en train d echouer a cause d une seule enseigne cassee, en ignorant le week-end charge et les meilleurs avis.'],
  ['Sam says the group project failed because of one missing slide, ignoring the research and the shared editing.', 'Sam dit que le projet de groupe a echoue a cause d une seule diapositive manquante, en ignorant la recherche et la relecture partagee.'],
  ['Jade says the home dinner went badly because of one overcooked potato, ignoring the salad, the conversation, and the dessert.', 'Jade dit que le diner a la maison s est mal passe a cause d une seule pomme de terre trop cuite, en ignorant la salade, la conversation et le dessert.'],
  ['Maya says the class was boring because of one long explanation, ignoring the discussion and the hands-on activity.', 'Maya dit que le cours etait ennuyeux a cause d une seule longue explication, en ignorant la discussion et l activite pratique.'],
  ['Ben says the city feels unsafe because of one news story, ignoring the quiet streets and the improved lighting.', 'Ben dit que la ville semble dangereuse a cause d une seule information aux nouvelles, en ignorant les rues calmes et l eclairage ameliore.'],
  ['Ava says the book was bad because of one weak chapter, ignoring the strong characters and the satisfying ending.', 'Ava dit que le livre etait mauvais a cause d un seul chapitre faible, en ignorant les personnages forts et la fin satisfaisante.'],
  ['Omar says the office became productive because of one meeting, ignoring the new workflow and the smaller tasks list.', 'Omar dit que le bureau est devenu productif a cause d une seule reunion, en ignorant le nouveau flux de travail et la liste de taches plus courte.'],
  ['Nina says the vacation was amazing because of one sunset, ignoring the easy schedule and the friendly hosts.', 'Nina dit que les vacances etaient incroyables a cause d un seul coucher de soleil, en ignorant l emploi du temps facile et les hôtes sympathiques.'],
  ['Eli says the recipe was a disaster because of one spice, ignoring the wrong oven temperature and the skipped step.', 'Eli dit que la recette etait un desastre a cause d une seule epice, en ignorant la mauvaise temperature du four et l etape sautee.'],
];

const OPTIONS_EN = ['Oversimplified Cause', 'Neglecting Confounders', 'Post Hoc', 'Hasty Generalization'];
const OPTIONS_FR = ['Cause simplifiée à l excès', 'Négligence des facteurs de confusion', 'Post hoc', 'Généralisation hâtive'];

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
      id: 44051 + index,
      level: 3,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Cause simplifiée à l excès' : 'Oversimplified Cause',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel raisonnement est illustré ici ?' : 'Which reasoning error is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La personne reduit un probleme complexe a une seule cause simple.'
        : 'The person reduces a complex problem to one simple cause.',
      detailedExplanationBeginner: isFrench
        ? 'Un probleme compliqué a souvent plusieurs causes.'
        : 'A complicated problem often has several causes.',
      detailedExplanationIntermediate: isFrench
        ? 'L erreur consiste a traiter une seule cause comme si elle expliquait tout, alors que d autres facteurs comptent aussi.'
        : 'The error is treating one cause as if it explained everything, when other factors matter too.',
      detailedExplanationExpert: isFrench
        ? 'Le raisonnement saute trop vite vers une explication unique et ignore les causes concurrentes, les facteurs de confusion et les interactions. Pour juger correctement, il faut comparer les causes possibles et mesurer leur poids respectif au lieu de pointer seulement la cause la plus visible.'
        : 'The reasoning jumps too quickly to a single explanation and ignores competing causes, confounders, and interactions. Proper judgment requires comparing possible causes and weighing them instead of pointing at the most visible one.',
      questionFormat: 'standard',
    };
  });
}

export const OVERSIMPLIFIED_CAUSE_EXPANSION_EN: Question[] = createQuestions('en');
export const OVERSIMPLIFIED_CAUSE_EXPANSION_FR: Question[] = createQuestions('fr');
