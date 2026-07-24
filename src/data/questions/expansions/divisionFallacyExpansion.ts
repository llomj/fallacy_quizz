import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["The company is profitable, so every employee must be rich.", "L'entreprise fait des bénéfices, donc chaque employé doit être riche."],
  ["The team is undefeated, so each player must be unbeatable in every situation.", "L'équipe est invaincue, donc chaque joueur doit être imbattable dans toutes les situations."],
  ["The cake is delicious, so every ingredient must taste delicious on its own.", "Le gâteau est délicieux, donc chaque ingrédient doit être délicieux tout seul."],
  ["The movie was a masterpiece, so every scene in it must be a masterpiece.", "Le film était un chef-d'œuvre, donc chaque scène doit être un chef-d'œuvre."],
  ["The apartment building is luxurious, so every apartment inside must be luxurious.", "L'immeuble est luxueux, donc chaque appartement à l'intérieur doit être luxueux."],
  ["The school is famous for excellent test scores, so every student must be a genius.", "L'école est connue pour ses excellents résultats, donc chaque élève doit être un génie."],
  ["The orchestra sounded amazing, so every instrument must sound amazing alone.", "L'orchestre sonnait très bien, donc chaque instrument doit sonner très bien tout seul."],
  ["The neighborhood is peaceful, so every street is perfectly quiet at all times.", "Le quartier est paisible, donc chaque rue est parfaitement calme en permanence."],
  ["The restaurant is expensive, so every dish on the menu must be expensive too.", "Le restaurant est cher, donc chaque plat du menu doit être cher lui aussi."],
  ["The city is safe overall, so every block must be safe at midnight.", "La ville est globalement sûre, donc chaque quartier doit être sûr à minuit."],
  ["The jar is heavy, so each cookie inside must be heavy.", "Le bocal est lourd, donc chaque biscuit à l'intérieur doit être lourd."],
  ["The package is fragile, so every item in it must be fragile.", "Le colis est fragile, donc chaque objet à l'intérieur doit être fragile."],
  ["The laptop is fast, so every part inside it must be fast.", "L'ordinateur portable est rapide, donc chaque pièce à l'intérieur doit être rapide."],
  ["The festival was brilliant, so every volunteer must be brilliant at organizing.", "Le festival était brillant, donc chaque bénévole doit être brillant pour organiser."],
  ["The car is reliable, so every bolt in it must be reliable.", "La voiture est fiable, donc chaque boulon doit être fiable."],
  ["The concert was loud, so every note must have been loud.", "Le concert était fort, donc chaque note devait être forte."],
  ["The phone is waterproof, so every component inside must survive a swim.", "Le téléphone est étanche, donc chaque composant à l'intérieur doit survivre à une baignade."],
  ["The library is quiet, so every book in it must be quiet too.", "La bibliothèque est silencieuse, donc chaque livre à l'intérieur doit être silencieux aussi."],
  ["The teacher is strict, so every rule in the class must be harsh.", "Le professeur est strict, donc chaque règle de la classe doit être dure."],
  ["The cake shop is famous, so every recipe there must be famous.", "La pâtisserie est célèbre, donc chaque recette là-bas doit être célèbre."],
  ["The robot is smart, so every screw inside it must be smart.", "Le robot est intelligent, donc chaque vis à l'intérieur doit être intelligente."],
  ["The hotel is comfortable, so every room must feel comfortable at the same level.", "L'hôtel est confortable, donc chaque chambre doit être confortable au même degré."],
  ["The mountain is beautiful, so every rock on it must be beautiful.", "La montagne est belle, donc chaque rocher dessus doit être beau."],
  ["The museum is impressive, so every painting in it must be impressive.", "Le musée est impressionnant, donc chaque tableau à l'intérieur doit être impressionnant."],
  ["The app has five stars, so every feature must be five-star quality.", "L'application a cinq étoiles, donc chaque fonction doit être de qualité cinq étoiles."],
  ["The city park is clean, so every bench there must be spotless.", "Le parc de la ville est propre, donc chaque banc doit y être impeccable."],
  ["The fundraiser was successful, so every donor must have given a large amount.", "La collecte de fonds a été un succès, donc chaque donateur a dû donner une grosse somme."],
  ["The car showroom is shiny, so every vehicle on the lot must be shiny.", "Le salon automobile est brillant, donc chaque véhicule sur le terrain doit être brillant."],
  ["The book was funny, so every chapter must be funny.", "Le livre était drôle, donc chaque chapitre doit être drôle."],
  ["The sports drink is popular, so every ingredient in it must be popular.", "La boisson de sport est populaire, donc chaque ingrédient doit être populaire."],
  ["The warehouse is huge, so every box inside must be huge.", "L'entrepôt est immense, donc chaque boîte à l'intérieur doit être immense."],
  ["The outfit is stylish, so every stitch in it must be stylish.", "La tenue est élégante, donc chaque couture doit être élégante."],
  ["The project went well, so every meeting in it must have gone well.", "Le projet s'est bien passé, donc chaque réunion liée à ce projet a dû bien se passer."],
  ["The cake is sweet, so every crumb must be sweet too.", "Le gâteau est sucré, donc chaque miette doit être sucrée aussi."],
  ["The company is innovative, so every employee must be innovative.", "L'entreprise est innovante, donc chaque employé doit être innovant."],
  ["The stadium was packed, so every seat must have been occupied by fans.", "Le stade était plein, donc chaque siège devait être occupé par des supporters."],
  ["The soup is hot, so every spoonful must burn your tongue.", "La soupe est chaude, donc chaque cuillerée doit brûler la langue."],
  ["The vacation was relaxing, so every day of it must have been perfectly restful.", "Les vacances étaient relaxantes, donc chaque jour devait être parfaitement reposant."],
  ["The gallery is expensive, so every painting in it must cost a fortune.", "La galerie est chère, donc chaque tableau à l'intérieur doit coûter une fortune."],
  ["The movie soundtrack was emotional, so every instrument in the orchestra must be emotional.", "La bande sonore du film était émouvante, donc chaque instrument de l'orchestre doit être émouvant."],
  ["The bakery smells amazing, so every loaf inside must taste amazing.", "La boulangerie sentait bon, donc chaque pain à l'intérieur doit avoir un goût incroyable."],
  ["The phone case is tough, so every corner of the phone must be tough too.", "La coque du téléphone est solide, donc chaque coin du téléphone doit être solide lui aussi."],
  ["The tournament was fair, so every game was perfectly fair from start to finish.", "Le tournoi était équitable, donc chaque partie était parfaitement équitable du début à la fin."],
  ["The garden is healthy, so every plant in it must be healthy.", "Le jardin est en bonne santé, donc chaque plante doit être en bonne santé."],
  ["The cruise was luxurious, so every meal on board must be luxurious.", "La croisière était luxueuse, donc chaque repas à bord doit être luxueux."],
  ["The research paper was strong, so every sentence in it must be strong.", "L'article de recherche était solide, donc chaque phrase doit être solide."],
  ["The town is friendly, so every resident must be friendly to strangers.", "La ville est accueillante, donc chaque habitant doit être aimable avec les inconnus."],
  ["The office is productive, so every desk must be productive.", "Le bureau est productif, donc chaque poste de travail doit être productif."],
  ["The chocolate bar is rich, so every square must be rich in flavor.", "La tablette de chocolat est riche, donc chaque carré doit être riche en goût."],
  ["The festival was eco-friendly, so every vendor must have been perfectly green.", "Le festival était écologique, donc chaque stand devait être parfaitement vert."],
  ["The phone is premium, so every feature must be premium.", "Le téléphone est haut de gamme, donc chaque fonction doit être haut de gamme."],
  ["The team won, so every player must have played perfectly.", "L'équipe a gagné, donc chaque joueur doit avoir joué parfaitement."],
  ["The class is advanced, so every student must understand every topic instantly.", "La classe est avancée, donc chaque élève doit comprendre chaque sujet instantanément."],
  ["The hotel is luxurious, so every room must feel like a suite.", "L'hôtel est luxueux, donc chaque chambre doit ressembler à une suite."],
  ["The app is popular, so every tool inside it must be excellent.", "L'application est populaire, donc chaque outil à l'intérieur doit être excellent."],
  ["The orchestra sounded brilliant, so every instrument player must be a virtuoso.", "L'orchestre sonnait brillamment, donc chaque musicien doit être un virtuose."],
  ["The city is busy, so every neighborhood must be crowded at all times.", "La ville est animée, donc chaque quartier doit être bondé en permanence."],
  ["The cake is rich, so every bite must be heavy and fancy.", "Le gâteau est riche, donc chaque bouchée doit être lourde et chic."],
  ["The library is quiet, so every book inside must be silent and serious.", "La bibliothèque est silencieuse, donc chaque livre à l'intérieur doit être silencieux et sérieux."],
  ["The festival was famous, so every volunteer must have been famous too.", "Le festival était célèbre, donc chaque bénévole devait être célèbre lui aussi."],
  ["The car is fast, so every screw in it must be fast.", "La voiture est rapide, donc chaque vis à l'intérieur doit être rapide."],
  ["The company is profitable, so every employee must be rich.", "L'entreprise fait des bénéfices, donc chaque employé doit être riche."],
  ["The team is undefeated, so each player must be unbeatable in every situation.", "L'équipe est invaincue, donc chaque joueur doit être imbattable dans toutes les situations."],
  ["The cake is delicious, so every ingredient must taste delicious on its own.", "Le gâteau est délicieux, donc chaque ingrédient doit être délicieux tout seul."],
  ["The movie was a masterpiece, so every scene in it must be a masterpiece.", "Le film était un chef-d'œuvre, donc chaque scène doit être un chef-d'œuvre."],
  ["The apartment building is luxurious, so every apartment inside must be luxurious.", "L'immeuble est luxueux, donc chaque appartement à l'intérieur doit être luxueux."],
  ["The school is famous for excellent test scores, so every student must be a genius.", "L'école est connue pour ses excellents résultats, donc chaque élève doit être un génie."],
  ["The orchestra sounded amazing, so every instrument must sound amazing alone.", "L'orchestre sonnait très bien, donc chaque instrument doit sonner très bien tout seul."],
  ["The neighborhood is peaceful, so every street is perfectly quiet at all times.", "Le quartier est paisible, donc chaque rue est parfaitement calme en permanence."],
  ["The restaurant is expensive, so every dish on the menu must be expensive too.", "Le restaurant est cher, donc chaque plat du menu doit être cher lui aussi."],
  ["The city is safe overall, so every block must be safe at midnight.", "La ville est globalement sûre, donc chaque quartier doit être sûr à minuit."],
  ["The sandwich is huge, so every ingredient must be huge.", "Le sandwich est enorme, donc chaque ingredient doit etre enorme."],
  ["The hotel lobby is luxurious, so every keycard must be luxurious.", "Le hall de l hotel est luxueux, donc chaque cle de chambre doit etre luxueuse."],
  ["The concert crowd was excited, so every person in it must be excited about every song.", "La foule du concert etait enthousiaste, donc chaque personne dedans doit etre enthousiasme par chaque chanson."],
  ["The app is well designed, so every line of code must be well designed.", "L application est bien concue, donc chaque ligne de code doit etre bien concue."],
  ["The library event was calm, so every visitor must be calm in every room.", "L evenement de la bibliotheque etait calme, donc chaque visiteur doit etre calme dans chaque salle."],
  ["The bicycle is light, so every bolt in it must be light.", "Le velo est leger, donc chaque boulon dedans doit etre leger."],
  ["The theater was elegant, so every seat must be elegant.", "Le theatre etait elegant, donc chaque siege doit etre elegant."],
  ["The teacher is brilliant, so every homework sheet must be brilliant.", "Le professeur est brillant, donc chaque feuille de devoir doit etre brillante."],
  ["The smartphone is advanced, so every app on it must be advanced.", "Le smartphone est avance, donc chaque application dessus doit etre avancee."],
  ["The school library is busy, so every book in it must be checked out.", "La bibliotheque scolaire est frequentee, donc chaque livre dedans doit etre emprunte."],
  ["The meal was healthy, so every spice in it must be healthy.", "Le repas etait sain, donc chaque epice dedans doit etre saine."],
  ["The museum is world famous, so every postcard there must be world famous.", "Le musee est mondialement celebre, donc chaque carte postale la-bas doit etre mondialement celebre."],
  ["The neighborhood is trendy, so every mailbox must be trendy.", "Le quartier est tendance, donc chaque boite aux lettres doit etre tendance."],
  ["The conference was high quality, so every coffee cup at it must be high quality.", "La conference etait de grande qualite, donc chaque tasse de cafe la-bas doit etre de grande qualite."],
  ["The game is polished, so every pixel in it must be polished.", "Le jeu est soigne, donc chaque pixel dedans doit etre soigne."],
  ["The restaurant has a great reputation, so every fork on the table must be great too.", "Le restaurant a une excellente reputation, donc chaque fourchette sur la table doit etre excellente elle aussi."],
  ["The stadium is famous, so every concession stand must be famous.", "Le stade est celebre, donc chaque stand de restauration doit etre celebre."],
  ["The class is smart overall, so every student must solve every problem instantly.", "La classe est brillante dans l ensemble, donc chaque eleve doit resoudre chaque probleme instantanement."],
  ["The resort is luxurious, so every hallway must feel like a palace.", "Le complexe est luxueux, donc chaque couloir doit ressembler a un palais."],
  ["The bakery is beloved, so every croissant must be beloved.", "La boulangerie est adoree, donc chaque croissant doit etre adore."],
  ["The campus is modern, so every bench outside must be modern.", "Le campus est moderne, donc chaque banc dehors doit etre moderne."],
  ["The project was a success, so every document inside it must be a success.", "Le projet a ete un succes, donc chaque document dedans doit etre un succes."],
  ["The store is expensive, so every receipt there must be expensive.", "Le magasin est cher, donc chaque ticket la-bas doit etre cher."],
  ["The festival was joyful, so every performer must be joyful at all times.", "Le festival etait joyeux, donc chaque artiste doit etre joyeux en permanence."],
  ["The company is respected, so every email it sends must be respected.", "L entreprise est respectee, donc chaque e-mail qu elle envoie doit etre respecte."],
  ["The movie was praised, so every prop in it must be praised.", "Le film a ete encense, donc chaque accessoire dedans doit etre encense."],
  ["The office is efficient, so every drawer there must be efficient.", "Le bureau est efficace, donc chaque tiroir la-bas doit etre efficace."],
  ["The city is prosperous, so every sidewalk must be prosperous.", "La ville est prospere, donc chaque trottoir doit etre prospere."],
  ["The train ride was smooth, so every seat on it must be smooth.", "Le trajet en train etait fluide, donc chaque siege dedans doit etre fluide."],
];

const OPTIONS_EN = ['Division Fallacy', 'Composition Fallacy', 'Hasty Generalization', 'False Equivalence'];
const OPTIONS_FR = ['Sophisme de division', 'Sophisme de composition', 'Généralisation hâtive', 'Fausse équivalence'];

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

export const DIVISION_FALLACY_EXPANSION_EN: Question[] = SCENARIOS.map(([english], index) => {
  const correctIndex = index % 4;
  return {
    id: 36701 + index,
    level: 1,
    persona_stage: PersonaStage.PLANKTON,
    concept: 'Division Fallacy',
    difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Which fallacy is used here?\n\n"${english}"`,
    options: rotatedOptions(OPTIONS_EN, correctIndex),
    correct_option_index: correctIndex,
    explanation: 'A property of the whole is incorrectly assigned to each part or member.',
    detailedExplanationBeginner: 'The whole is treated as if every part must share the same property.',
    detailedExplanationIntermediate: 'A feature of a group, object, or system is assumed to belong automatically to each individual part.',
    detailedExplanationExpert: 'This is the division fallacy. What is true of the whole does not automatically apply to each component. A team can be excellent while a single player is average, and a luxury hotel can contain ordinary rooms.',
    questionFormat: 'standard'
  };
});

export const DIVISION_FALLACY_EXPANSION_FR: Question[] = SCENARIOS.map(([, french], index) => {
  const correctIndex = index % 4;
  return {
    id: 36701 + index,
    level: 1,
    persona_stage: PersonaStage.PLANKTON,
    concept: 'Sophisme de division',
    difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Quel sophisme est utilisé ici ?\n\n"${french}"`,
    options: rotatedOptions(OPTIONS_FR, correctIndex),
    correct_option_index: correctIndex,
    explanation: 'Une propriété du tout est attribuée à tort à chacune des parties ou à chacun des membres.',
    detailedExplanationBeginner: "On traite le tout comme si chaque partie devait partager la même propriété.",
    detailedExplanationIntermediate: "On suppose automatiquement qu'une caractéristique d'un groupe, d'un objet ou d'un système appartient à chaque partie.",
    detailedExplanationExpert: "C'est le sophisme de division. Ce qui est vrai du tout ne s'applique pas automatiquement à chacun de ses composants. Une équipe peut être excellente alors qu'un joueur est moyen, et un hôtel de luxe peut contenir des chambres ordinaires.",
    questionFormat: 'standard'
  };
});
