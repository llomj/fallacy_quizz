import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says the laptop is bad because the battery is weak, ignoring that the processor and screen are excellent for school.', "Maya dit que l ordinateur portable est mauvais parce que la batterie est faible, en ignorant que le processeur et l ecran sont excellents pour l ecole."],
  ['Leo calls the restaurant awful because one dish arrived late, without mentioning the great service and food quality at dinner.', "Leo dit que le restaurant est affreux parce qu un plat est arrive en retard, sans mentionner le bon service ni la qualite des plats au dîner."],
  ['Nina says the car is unreliable because the paint is scratched, even though the engine and brakes are fine.', 'Nina dit que la voiture est peu fiable parce que la peinture est rayee, alors que le moteur et les freins vont bien.'],
  ['Owen judges the school by one messy hallway and ignores the strong teachers and programs.', "Owen juge l ecole sur un seul couloir en desordre et ignore la qualite des enseignants et des programmes."],
  ['Priya says the phone is expensive, so the whole deal is bad, while ignoring the long warranty and good camera.', 'Priya dit que le telephone est cher, donc que toute l offre est mauvaise, en ignorant la longue garantie et la bonne camera.'],
  ['Ben thinks the apartment is terrible because the kitchen is small, even though the location and rent are great.', "Ben pense que l appartement est terrible parce que la cuisine est petite, alors que l emplacement et le loyer sont bons."],
  ['Tara calls the movie a failure because one scene dragged, while forgetting the strong acting and ending.', 'Tara appelle le film un echec parce qu une scene etait lente, en oubliant le jeu d acteurs et la fin solides.'],
  ['Kai says the course is useless because the homework is hard, ignoring the useful lessons and feedback.', 'Kai dit que le cours est inutile parce que les devoirs sont difficiles, en ignorant les lecons utiles et les retours.'],
  ['Jules decides the jacket is bad because one zipper sticks, even though the fabric and fit are excellent.', "Jules decide que la veste est mauvaise parce qu une fermeture coince, alors que le tissu et la coupe sont excellents."],
  ['Ava says the bakery is poor because the croissant was cold, while ignoring the fresh bread and kind staff.', 'Ava dit que la boulangerie est mediocre parce que le croissant etait froid, en ignorant le pain frais et le personnel aimable.'],
  ['Noah judges the team by one missed pass and ignores the strong defense and teamwork.', "Noah juge l equipe sur une passe ratee et ignore la bonne defense et l esprit d equipe."],
  ['Mina says the app is bad because one button is confusing, overlooking the easy setup and helpful reminders.', 'Mina dit que l application est mauvaise parce qu un bouton est confus, en oubliant la configuration facile et les rappels utiles.'],
  ['Eli says the hotel is awful because the pillow was too soft, ignoring the clean room and friendly check-in.', "Eli dit que l hotel est affreux parce que l oreiller etait trop mou, en ignorant la chambre propre et l accueil sympathique."],
  ['Rina says the new teacher is bad because the first quiz was hard, even though the explanations are clear.', 'Rina dit que le nouveau professeur est mauvais parce que le premier quiz etait difficile, alors que les explications sont claires.'],
  ['Hugo says the concert was disappointing because the sound in one corner was weak, ignoring the energetic performance.', 'Hugo dit que le concert etait decevant parce que le son dans un coin etait faible, en ignorant la prestation energique.'],
  ['Lina says the project is a mess because one file is mislabeled, ignoring the rest of the clean work.', "Lina dit que le projet est brouillon parce qu un fichier est mal etiquete, en ignorant le reste du travail propre."],
  ['Grant says the neighborhood is unsafe because one street was dark, while ignoring the busy shops and good lighting elsewhere.', 'Grant dit que le quartier est dangereux parce qu une rue etait sombre, en ignorant les commerces frequentes et l eclairage ailleurs.'],
  ['Zoe says the gym is terrible because one machine was broken, ignoring the helpful trainers and good equipment.', 'Zoe dit que la salle de sport est terrible parce qu une machine etait en panne, en ignorant les coachs utiles et le bon materiel.'],
  ['Milo says the class is boring because the first ten minutes were slow, ignoring the engaging discussion later.', 'Milo dit que le cours est ennuyeux parce que les dix premieres minutes etaient lentes, en ignorant la discussion interessante ensuite.'],
  ['Theo says the coffee shop is bad because the music was too loud, ignoring the good espresso and quick service.', 'Theo dit que le cafe est mauvais parce que la musique etait trop forte, en ignorant le bon espresso et le service rapide.'],
  ['Pia says the plan is weak because one chart looks messy, ignoring the solid evidence in the other charts.', "Pia dit que le plan est faible parce qu un graphique parait brouillon, en ignorant les preuves solides dans les autres graphiques."],
  ['Finn says the coach is unfair because one drill was hard, while ignoring the clear praise and support.', "Finn dit que l entraineur est injuste parce qu un exercice etait difficile, en ignorant les compliments et le soutien clairs."],
  ['Maya says the tablet is poor because the battery drains quickly, ignoring the bright screen and fast apps.', 'Maya dit que la tablette est mediocre parce que la batterie se vide vite, en ignorant l ecran lumineux et les applis rapides.'],
  ['Sam says the class trip was bad because the bus was late, ignoring the fun museum and lunch.', 'Sam dit que la sortie scolaire etait mauvaise parce que le bus etait en retard, en ignorant le musee amusant et le dejeuner.'],
  ['Juno says the shoes are useless because they squeak, ignoring the comfort and durability.', 'Juno dit que les chaussures sont inutiles parce qu elles grincent, en ignorant le confort et la solidite.'],
  ['Iris says the meeting was pointless because it ran long, ignoring the decisions that were actually made.', 'Iris dit que la reunion etait inutile parce qu elle a dure longtemps, en ignorant les decisions qui ont ete prises.'],
  ['Cole says the recipe is bad because one step is tricky, ignoring the great flavor at the end.', 'Cole dit que la recette est mauvaise parce qu une etape est difficile, en ignorant la bonne saveur a la fin.'],
  ['Nora says the car wash is bad because the vacuum line was long, ignoring the good wash result.', "Nora dit que le lavage auto est mauvais parce que la file de l aspirateur etait longue, en ignorant le bon resultat du lavage."],
  ['Ari says the store is terrible because one cashier was grumpy, ignoring the helpful other staff.', 'Ari dit que le magasin est terrible parce qu un caissier etait grognon, en ignorant les autres employes serviables.'],
  ['Rita says the book is bad because the first chapter is slow, ignoring the strong middle and ending.', 'Rita dit que le livre est mauvais parce que le premier chapitre est lent, en ignorant le milieu et la fin solides.'],
  ['Tia says the software is broken because one menu is hard to find, ignoring the useful features.', 'Tia dit que le logiciel est casse parce qu un menu est difficile a trouver, en ignorant les fonctions utiles.'],
  ['Oli says the picnic was ruined because it started to drizzle, ignoring the good food and conversation.', 'Oli dit que le pique-nique a ete ruine parce qu il a commence a bruiner, en ignorant la bonne nourriture et la conversation.'],
  ['Lara says the workout plan is bad because one exercise hurts, ignoring the overall progress.', "Lara dit que le programme d entrainement est mauvais parce qu un exercice fait mal, en ignorant les progres globaux."],
  ['Ben says the test is unfair because one question was confusing, ignoring the rest of the clear questions.', 'Ben dit que le test est injuste parce qu une question etait confuse, en ignorant le reste des questions claires.'],
  ['Mina says the course is worthless because the platform froze once, ignoring the useful lessons and notes.', 'Mina dit que le cours est sans valeur parce que la plateforme a gele une fois, en ignorant les lecons utiles et les notes.'],
  ['Drew says the car is disappointing because the cup holder is small, ignoring the safe driving and comfort.', 'Drew dit que la voiture est decevante parce que le porte-gobelet est petit, en ignorant la conduite sure et le confort.'],
  ['Jade says the interview was awful because the chair was uncomfortable, ignoring the good questions and rapport.', "Jade dit que l entretien etait affreux parce que la chaise etait inconfortable, en ignorant les bonnes questions et le contact humain."],
  ['Owen says the conference was bad because the wifi dropped once, ignoring the useful talks and networking.', 'Owen dit que la conference etait mauvaise parce que le wifi a coupe une fois, en ignorant les interventions utiles et le reseautage.'],
  ['Mila says the daycare is poor because one toy was missing, ignoring the caring staff and safe space.', 'Mila dit que la garderie est mediocre parce qu un jouet manquait, en ignorant le personnel attentionne et l espace sur.'],
  ['Evan says the restaurant is lousy because the bread basket was empty, ignoring the excellent entree and dessert.', 'Evan dit que le restaurant est nul parce que le panier a pain etait vide, en ignorant l entree et le dessert excellents.'],
  ['Kira says the phone call failed because there was a brief silence, ignoring that the issue was solved.', "Kira dit que l appel a echoue parce qu il y a eu un bref silence, en ignorant que le probleme a ete resolu."],
  ['Grant says the event is bad because the sign was too small, ignoring the great speakers and crowd.', 'Grant dit que l evenement est mauvais parce que l affiche etait trop petite, en ignorant les excellents intervenants et la foule.'],
  ['Zara says the training was useless because one slide had too much text, ignoring the clear examples.', 'Zara dit que la formation etait inutile parce qu une diapositive avait trop de texte, en ignorant les exemples clairs.'],
  ['Parker says the vacation rental is bad because the shower is weak, ignoring the great view and location.', 'Parker dit que la location de vacances est mauvaise parce que la douche est faible, en ignorant la belle vue et l emplacement.'],
  ['Hana says the office is awful because the coffee machine was empty, ignoring the supportive team.', "Hana dit que le bureau est affreux parce que la machine a cafe etait vide, en ignorant l equipe soutenante."],
  ['Leo says the meal was bad because the soup was salty, ignoring the excellent main course.', 'Leo dit que le repas etait mauvais parce que la soupe etait salee, en ignorant le plat principal excellent.'],
  ['Maya says the school trip was pointless because the bus seats were cramped, ignoring the museum and friends.', 'Maya dit que la sortie scolaire etait inutile parce que les sieges du bus etaient etroits, en ignorant le musee et les amis.'],
  ['Nina says the whole service is bad because one waiter forgot a napkin, ignoring the rest of the attentive staff.', "Nina dit que tout le service est mauvais parce qu un serveur a oublie une serviette, en ignorant le reste du personnel attentionne."],
  ['Ezra says the phone repair was a disaster because the screen protector was miscut, ignoring that the phone itself was fixed.', 'Ezra dit que la reparation du telephone etait un desastre parce que le film de protection etait mal coupe, en ignorant que le telephone a lui-meme ete repare.'],
  ['Cleo says the class was awful because the last worksheet was messy, ignoring the good explanations and practice.', 'Cleo dit que le cours etait affreux parce que la derniere feuille etait brouillonne, en ignorant les bonnes explications et l entrainement.'],
  ["Ava says the new sofa is terrible because one cushion is lopsided, ignoring the comfort and sturdy frame.", "Ava dit que le nouveau canape est terrible parce qu un coussin est de travers, en ignorant le confort et la structure solide."],
  ["Leo calls the whole bakery bad because the icing on one cupcake was too sweet, ignoring the fresh bread and friendly staff.", "Leo dit que toute la boulangerie est mauvaise parce que le glacage d un cupcake etait trop sucre, en ignorant le pain frais et le personnel aimable."],
  ["Mina says the laptop is useless because the charger cable is short, even though the battery and screen are excellent.", "Mina dit que l ordinateur portable est inutile parce que le cable du chargeur est court, alors que la batterie et l ecran sont excellents."],
  ["Ben says the park is boring because one fountain was off, ignoring the playground and the shaded picnic area.", "Ben dit que le parc est ennuyeux parce qu une fontaine etait arretee, en ignorant l aire de jeux et la zone de pique-nique ombragee."],
  ["Nora says the school is bad because one locker sticks, while ignoring the great teachers and music program.", "Nora dit que l ecole est mauvaise parce qu un casier coince, en ignorant les bons professeurs et le programme de musique."],
  ["Jules says the delivery service is awful because one box arrived dented, ignoring that the rest came on time and intact.", "Jules dit que le service de livraison est affreux parce qu une boite est arrivee cabossee, en ignorant que le reste etait a l heure et intact."],
  ["Tia says the gym is terrible because one treadmill squeaks, ignoring the clean floor and helpful trainers.", "Tia dit que la salle de sport est terrible parce qu un tapis de course grince, en ignorant le sol propre et les coachs serviables."],
  ["Hugo says the movie was a flop because one joke missed, ignoring the strong plot and acting.", "Hugo dit que le film est un echec parce qu une blague est tombee a plat, en ignorant l intrigue solide et le jeu d acteurs."],
  ["Priya says the hotel is a disaster because the curtain was crooked, ignoring the clean sheets and great breakfast.", "Priya dit que l hotel est un desastre parce que le rideau etait de travers, en ignorant les draps propres et le petit dejeuner excellent."],
  ["Omar says the app is bad because the menu took two taps to open, ignoring the useful reminders and easy search.", "Omar dit que l application est mauvaise parce que le menu a demande deux pressions pour s ouvrir, en ignorant les rappels utiles et la recherche facile."],
  ["Lina says the road trip was ruined because the first gas station had a long line, ignoring the fun stops and music.", "Lina dit que le road trip a ete ruine parce que la premiere station-service avait une longue file, en ignorant les pauses amusantes et la musique."],
  ["Milo says the class was pointless because the first example was confusing, ignoring the clear explanations that followed.", "Milo dit que le cours etait inutile parce que le premier exemple etait confus, en ignorant les explications claires qui ont suivi."],
  ["Zoe says the restaurant is bad because the napkins were thin, ignoring the tasty food and quick service.", "Zoe dit que le restaurant est mauvais parce que les serviettes etaient fines, en ignorant la bonne nourriture et le service rapide."],
  ["Grant says the whole team is weak because one player missed a shot, ignoring the strong defense and passing.", "Grant dit que toute l equipe est faible parce qu un joueur a rate un tir, en ignorant la bonne defense et les passes."],
  ["Rina says the house is awful because the hallway light flickers, ignoring the bright rooms and warm kitchen.", "Rina dit que la maison est affreuse parce que la lumiere du couloir clignote, en ignorant les pieces lumineuses et la cuisine chaleureuse."],
  ["Finn says the class trip was bad because the bus seat was stiff, ignoring the museum visit and free time with friends.", "Finn dit que la sortie scolaire etait mauvaise parce que le siege du bus etait dur, en ignorant la visite du musee et le temps libre avec les amis."],
  ["Maya says the shoes are useless because one lace is frayed, ignoring the comfort and good grip.", "Maya dit que les chaussures sont inutiles parce qu un lacet est effiloche, en ignorant le confort et la bonne adhesion."],
  ["Cole says the presentation was terrible because one slide had too much text, ignoring the strong examples and confident delivery.", "Cole dit que la presentation etait terrible parce qu une diapositive avait trop de texte, en ignorant les bons exemples et la livraison assuree."],
  ["Iris says the phone plan is bad because customer support was slow once, ignoring the cheap price and reliable coverage.", "Iris dit que l offre telephone est mauvaise parce que le support client a ete lent une fois, en ignorant le prix bas et la couverture fiable."],
  ["Oli says the picnic was ruined because one sandwich got soggy, ignoring the sunshine and fun conversation.", "Oli dit que le pique-nique a ete ruine parce qu un sandwich est devenu mouille, en ignorant le soleil et la bonne conversation."],
  ["Drew says the new desk is awful because one drawer jams, ignoring the roomy top and sturdy legs.", "Drew dit que le nouveau bureau est affreux parce qu un tiroir coince, en ignorant le grand plateau et les pieds solides."],
  ["Jade says the concert was disappointing because the opening act was weak, ignoring the main performance and crowd energy.", "Jade dit que le concert etait decevant parce que la premiere partie etait faible, en ignorant la prestation principale et l energie du public."],
  ["Ari says the doctor is bad because the waiting room was crowded, ignoring the careful exam and clear advice.", "Ari dit que le medecin est mauvais parce que la salle d attente etait pleine, en ignorant l examen attentif et les conseils clairs."],
  ["Parker says the laptop is overpriced because the sticker on the box was ugly, ignoring the speed and battery life.", "Parker dit que l ordinateur portable est trop cher parce que l etiquette sur la boite etait laide, en ignorant la vitesse et l autonomie."],
  ["Hana says the field trip was boring because the bus ride was long, ignoring the hands-on exhibit and lunch outside.", "Hana dit que la sortie etait ennuyeuse parce que le trajet en bus etait long, en ignorant l exposition interactive et le dejeuner dehors."],
  ["Leo says the game is bad because the tutorial was too short, ignoring the fun levels and smooth controls.", "Leo dit que le jeu est mauvais parce que le tutoriel etait trop court, en ignorant les niveaux amusants et les commandes fluides."],
  ["Nina says the wedding was a failure because one speech ran long, ignoring the food, dancing, and joyful mood.", "Nina dit que le mariage etait un echec parce qu un discours a dure trop longtemps, en ignorant la nourriture, la danse et la bonne humeur."],
  ["Sam says the garden is useless because one plant wilted, ignoring the flowers that are thriving.", "Sam dit que le jardin est inutile parce qu une plante a fane, en ignorant les fleurs qui poussent bien."],
  ["Kira says the whole project is broken because one chart had a typo, ignoring the accurate data and clear conclusion.", "Kira dit que tout le projet est casse parce qu un graphique avait une faute de frappe, en ignorant les donnees exactes et la conclusion claire."],
  ["Grant says the hotel is bad because the elevator was slow, ignoring the clean room and the view from the balcony.", "Grant dit que l hotel est mauvais parce que l ascenseur etait lent, en ignorant la chambre propre et la vue du balcon."],
  ["Tara says the class is awful because one assignment was hard, ignoring the helpful notes and office hours.", "Tara dit que le cours est affreux parce qu un devoir etait difficile, en ignorant les notes utiles et les heures de permanence."],
  ["Mina says the bakery is mediocre because the pastry counter was crowded, ignoring the delicious cake and fresh bread.", "Mina dit que la boulangerie est mediocre parce que le comptoir des patisseries etait bondé, en ignorant le gateau delicieux et le pain frais."],
  ["Noah says the phone is terrible because the wallpaper looked boring, ignoring the camera and fast charging.", "Noah dit que le telephone est terrible parce que le fond d ecran paraissait ennuyeux, en ignorant la camera et la charge rapide."],
  ["Lara says the office is awful because the printer jammed, ignoring the quiet room and supportive coworkers.", "Lara dit que le bureau est affreux parce que l imprimante s est bloquee, en ignorant le calme des lieux et les collegues soutenants."],
  ["Juno says the trip was pointless because one museum exhibit was closed, ignoring the river walk and local food.", "Juno dit que le voyage etait inutile parce qu une exposition du musee etait fermee, en ignorant la promenade au bord de la riviere et la cuisine locale."],
  ["Milo says the club is bad because one meeting started late, ignoring the useful planning and fun activities.", "Milo dit que le club est mauvais parce qu une reunion a commence en retard, en ignorant la planification utile et les activites amusantes."],
  ["Rita says the new car is awful because the cup holder is shallow, ignoring the smooth ride and safety features.", "Rita dit que la nouvelle voiture est affreuse parce que le porte-gobelet est peu profond, en ignorant la conduite douce et les equipements de securite."],
  ["Evan says the whole season was bad because one game was lost, ignoring the wins and strong improvement.", "Evan dit que toute la saison etait mauvaise parce qu un match a ete perdu, en ignorant les victoires et la forte progression."],
  ["Zara says the app is useless because one icon is confusing, ignoring the useful reminders and fast search.", "Zara dit que l application est inutile parce qu une icone est confuse, en ignorant les rappels utiles et la recherche rapide."],
  ["Pia says the wedding venue is bad because the parking lot was crowded, ignoring the beautiful room and kind staff.", "Pia dit que la salle de mariage est mauvaise parce que le parking etait charge, en ignorant la belle salle et le personnel gentil."],
  ["Ben says the course is worthless because the first quiz was tricky, ignoring the skills learned later.", "Ben dit que le cours ne vaut rien parce que le premier quiz etait piégeux, en ignorant les competences apprises ensuite."],
  ["Nora says the dinner was a disaster because the drinks were warm, ignoring the tasty main course and dessert.", "Nora dit que le dîner etait un desastre parce que les boissons etaient tièdes, en ignorant le plat principal savoureux et le dessert."],
  ["Ava says the team is awful because one player was late, ignoring the good communication and strong finish.", "Ava dit que l equipe est affreuse parce qu un joueur etait en retard, en ignorant la bonne communication et la belle fin."],
  ["Hugo says the market is bad because one seller was rude, ignoring the many friendly vendors and good prices.", "Hugo dit que le marche est mauvais parce qu un vendeur etait malpoli, en ignorant les nombreux vendeurs aimables et les bons prix."],
  ["Mila says the library is boring because one shelf was messy, ignoring the quiet rooms and helpful librarians.", "Mila dit que la bibliotheque est ennuyeuse parce qu une etagere etait en desordre, en ignorant les salles calmes et les bibliothecaires serviables."],
  ["Theo says the workshop was useless because the projector glitched, ignoring the useful advice and practice time.", "Theo dit que latelier etait inutile parce que le projecteur a bugue, en ignorant les conseils utiles et le temps de pratique."],
  ["Cleo says the whole neighborhood is bad because one sidewalk is cracked, ignoring the parks and friendly shops.", "Cleo dit que tout le quartier est mauvais parce qu un trottoir est fissure, en ignorant les parcs et les commerces sympathiques."],
  ["Kai says the app store rating is misleading because one review was harsh, ignoring the many positive reviews and downloads.", "Kai dit que la note de la boutique d applications est trompeuse parce qu un avis etait severe, en ignorant les nombreux avis positifs et les telechargements."],
  ["Lina says the picnic site is bad because a wasp flew by, ignoring the shade, games, and good food.", "Lina dit que le lieu du pique-nique est mauvais parce qu une guepe est passee, en ignorant l ombre, les jeux et la bonne nourriture."],
  ["Owen says the class is terrible because the chairs are squeaky, ignoring the clear lessons and supportive teacher.", "Owen dit que le cours est terrible parce que les chaises grincent, en ignorant les lecons claires et le professeur soutenant."],
];

const OPTIONS_EN = ['Incomplete Comparison', 'Faulty Generalization', 'False Dilemma', 'Cherry Picking'];
const OPTIONS_FR = ['Comparaison incomplète', 'Généralisation hâtive', 'Faux dilemme', 'Cherrypicking'];

function rotate(a: string[], i: number) {
  const r = a.slice(1);
  r.splice(i, 0, a[0]);
  return r;
}

function sub(i: number) {
  return i < 43 ? SubLevel.BEGINNER : i < 50 ? SubLevel.INTERMEDIATE : SubLevel.EXPERT;
}

function make(fr = false): Question[] {
  return SCENARIOS.map((s, i) => {
    const c = i % 4;
    return {
      id: 36101 + i,
      level: 4,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Comparaison incomplète' : 'Incomplete Comparison',
      difficulty: i < 43 ? 1 : i < 50 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? "On juge une chose sur une seule partie ou un seul probleme en ignorant le reste de l information."
        : 'We judge something by one part or one problem while ignoring the rest of the information.',
      detailedExplanationBeginner: fr
        ? "Une mauvaise piece du puzzle ne suffit pas a juger tout le tableau."
        : 'One bad piece of the puzzle is not enough to judge the whole picture.',
      detailedExplanationIntermediate: fr
        ? "La comparaison incomplète apparait quand on retient seulement un aspect negatif ou positif et qu on traite ce fragment comme si c etait une evaluation globale."
        : 'Incomplete comparison appears when we keep only one negative or positive aspect and treat that fragment like a full evaluation.',
      detailedExplanationExpert: fr
        ? "Cette erreur de cadrage donne une impression trompeuse de verdict total parce qu elle omet les elements decisifs qui contredisent la conclusion partielle."
        : 'This framing error creates a misleading total verdict because it leaves out the decisive elements that contradict the partial conclusion.',
      questionFormat: 'standard',
    };
  });
}

export const INCOMPLETE_COMPARISON_EXPANSION_EN: Question[] = make();
export const INCOMPLETE_COMPARISON_EXPANSION_FR: Question[] = make(true);
