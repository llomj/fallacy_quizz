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
