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
