import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["The team has three strong players, so the whole team must be unbeatable.", "L'equipe a trois joueurs forts, donc toute l'equipe doit etre imbattable."],
  ["Because each brick is small, the wall must be weak.", "Parce que chaque brique est petite, le mur doit etre fragile."],
  ["Every ingredient tastes good on its own, so the soup has to be excellent.", "Chaque ingredient a bon gout seul, donc la soupe doit etre excellente."],
  ["The city has many quiet streets, so the entire city is peaceful.", "La ville a beaucoup de rues calmes, donc toute la ville est paisible."],
  ["The class has smart students, so the whole class must understand everything.", "La classe a des eleves intelligents, donc toute la classe doit tout comprendre."],
  ["Each app feature is useful, so the app can do no wrong.", "Chaque fonctionnalite de l'application est utile, donc l'application ne peut pas se tromper."],
  ["The car has good tires and a good radio, so the car is a perfect machine.", "La voiture a de bons pneus et une bonne radio, donc la voiture est une machine parfaite."],
  ["Every LEGO piece fits well, so the finished model will be indestructible.", "Chaque piece de LEGO s'emboite bien, donc le modele fini sera indestructible."],
  ["The restaurant has a great menu and nice plates, so the whole place is amazing.", "Le restaurant a un excellent menu et de belles assiettes, donc tout l'endroit est incroyable."],
  ["The phone has a fast screen and a bright camera, so the whole phone is flawless.", "Le telephone a un ecran rapide et une camera lumineuse, donc tout le telephone est sans defaut."],
  ["Because each thread is strong, the shirt must never tear.", "Parce que chaque fil est solide, la chemise ne doit jamais se dechirer."],
  ["Every musician in the band is talented, so the band cannot sound bad.", "Chaque musicien du groupe est talentueux, donc le groupe ne peut pas mal sonner."],
  ["The neighborhood has beautiful houses, so the whole neighborhood must be luxurious.", "Le quartier a de belles maisons, donc tout le quartier doit etre luxueux."],
  ["The salad has fresh lettuce and tomatoes, so the entire meal is healthy.", "La salade a de la laitue fraiche et des tomates, donc tout le repas est sain."],
  ["The office has good chairs, so the company must treat workers well.", "Le bureau a de bonnes chaises, donc l'entreprise doit bien traiter les employes."],
  ["Each person in the crowd is calm, so the crowd itself can never become tense.", "Chaque personne dans la foule est calme, donc la foule elle-meme ne peut jamais devenir tendue."],
  ["The bike has two durable wheels, so the entire bike is indestructible.", "Le velo a deux roues durables, donc tout le velo est indestructible."],
  ["Every light in the house works, so the house is perfectly maintained.", "Chaque lumiere de la maison fonctionne, donc la maison est parfaitement entretenue."],
  ["The school has a good library and friendly staff, so every part of the school is excellent.", "L'ecole a une bonne bibliotheque et un personnel aimable, donc chaque partie de l'ecole est excellente."],
  ["Because each note in the melody is pleasant, the song has no weak spots.", "Parce que chaque note de la melodie est agreable, la chanson n'a aucun point faible."],
  ["The salad bowl is full of healthy items, so the whole buffet is healthy.", "Le bol de salade est plein d'aliments sains, donc tout le buffet est sain."],
  ["Every task is easy separately, so the whole project is easy.", "Chaque tache est facile separément, donc tout le projet est facile."],
  ["The backpack has light items, so the backpack can never feel heavy.", "Le sac a dos contient des objets legers, donc le sac a dos ne peut jamais sembler lourd."],
  ["Each slice of cake tastes fine, so the whole cake must be perfect.", "Chaque part de gateau a bon gout, donc tout le gateau doit etre parfait."],
  ["The website has clear buttons and nice colors, so the whole business is trustworthy.", "Le site a des boutons clairs et de belles couleurs, donc toute l'entreprise est digne de confiance."],
  ["Every room is tidy, so the apartment is luxurious.", "Chaque piece est rangee, donc l'appartement est luxueux."],
  ["The toy parts are harmless, so the assembled toy can never be dangerous.", "Les pieces du jouet sont inoffensives, donc le jouet assemble ne peut jamais etre dangereux."],
  ["Each person in the orchestra plays well, so the concert can only be perfect.", "Chaque personne dans l'orchestre joue bien, donc le concert ne peut etre que parfait."],
  ["The grocery items are all cheap, so the whole week of shopping is cheap.", "Les articles d'epicerie sont tous bon marche, donc toute la semaine de courses est bon marche."],
  ["Every chapter is short, so the whole book is short enough for anyone.", "Chaque chapitre est court, donc tout le livre est assez court pour tout le monde."],
  ["The shoes are each comfortable, so the pair must be ideal for marathon running.", "Les chaussures sont chacune confortables, donc la paire doit etre ideale pour courir un marathon."],
  ["Each slice of pizza is warm, so the whole delivery is hot.", "Chaque part de pizza est chaude, donc toute la livraison est chaude."],
  ["The office plants look healthy, so the entire office must be a great workplace.", "Les plantes du bureau ont l'air en bonne sante, donc tout le bureau doit etre un excellent lieu de travail."],
  ["Every board in the shelf is straight, so the shelf will never wobble.", "Chaque planche de l'etagere est droite, donc l'etagere ne vacillera jamais."],
  ["The movie has good jokes and a nice soundtrack, so the plot has no problems.", "Le film a de bonnes blagues et une belle bande-son, donc l'intrigue n'a aucun probleme."],
  ["Each child in the class is polite, so the whole class is perfect.", "Chaque enfant de la classe est poli, donc toute la classe est parfaite."],
  ["The app's icons are neat, so the whole app is well designed.", "Les icones de l'application sont nettes, donc toute l'application est bien concue."],
  ["Every panel of the fence is painted well, so the fence is guaranteed strong.", "Chaque panneau de la cloture est bien peint, donc la cloture est forcement solide."],
  ["The pantry has plenty of snacks, so the whole party will be fun.", "Le garde-manger a plein de snacks, donc toute la fete sera amusante."],
  ["Every button on the remote works, so the remote will never fail.", "Chaque bouton de la telecommande fonctionne, donc la telecommande ne tombera jamais en panne."],
  ["The ingredients are all fresh, so the final burger must be gourmet.", "Les ingredients sont tous frais, donc le burger final doit etre gourmet."],
  ["Each story in the anthology is good, so the anthology as a whole has no flaws.", "Chaque histoire de l'anthologie est bonne, donc l'anthologie dans son ensemble n'a aucun defaut."],
  ["The hotel has soft pillows and fast elevators, so the entire stay will be luxurious.", "L'hotel a des oreillers moelleux et des ascenseurs rapides, donc tout le sejour sera luxueux."],
  ["Every student in the group solved one problem, so the whole group must be brilliant.", "Chaque eleve du groupe a resolu un probleme, donc tout le groupe doit etre brillant."],
  ["The car's dashboard is simple and clear, so the entire car is simple and clear.", "Le tableau de bord de la voiture est simple et clair, donc toute la voiture est simple et claire."],
  ["The flowers are each pretty, so the whole garden is perfect.", "Les fleurs sont chacune jolies, donc tout le jardin est parfait."],
  ["Each song on the playlist is calm, so the playlist can never bother anyone.", "Chaque chanson de la playlist est calme, donc la playlist ne peut jamais deranger personne."],
  ["The dinner ingredients are all organic, so the entire dinner is automatically healthy.", "Les ingredients du diner sont tous bio, donc tout le diner est automatiquement sain."],
  ["Every sentence in the speech is clear, so the speech must be persuasive.", "Chaque phrase du discours est claire, donc le discours doit etre convaincant."],
  ["The game pieces are tiny, so the board game must be easy for everyone.", "Les pieces du jeu sont minuscules, donc le jeu de societe doit etre facile pour tout le monde."],
];

const EN = ['Composition Fallacy', 'Division Fallacy', 'Hasty Generalization', 'False Cause'];
const FR = ['Erreur de composition', 'Erreur de division', 'Généralisation hâtive', 'Fausse cause'];

const rotate = (a: string[], i: number) => {
  const r = a.slice(1);
  r.splice(i, 0, a[0]);
  return r;
};

const sub = (i: number) => (i < 17 ? SubLevel.BEGINNER : i < 34 ? SubLevel.INTERMEDIATE : SubLevel.EXPERT);

function make(fr = false): Question[] {
  return SCENARIOS.map((s, i) => {
    const c = i % 4;
    return {
      id: 32801 + i,
      level: 6,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Erreur de composition' : 'Composition Fallacy',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? FR : EN, c),
      correct_option_index: c,
      explanation: fr
        ? "On attribue au tout une propriete observee chez les parties, sans preuve que le tout partage vraiment cette propriete."
        : 'It assumes the whole has a property because the parts have it, without proof that the whole really shares it.',
      detailedExplanationBeginner: fr
        ? "Ce qui est vrai pour les petites pieces n'est pas forcement vrai pour l'ensemble."
        : 'What is true for the parts is not automatically true for the whole.',
      detailedExplanationIntermediate: fr
        ? "L'erreur de composition prend des qualites locales et les transforme en conclusion globale sans verifier comment les parties interagissent."
        : 'The composition fallacy turns local qualities into a global conclusion without checking how the parts interact.',
      detailedExplanationExpert: fr
        ? "Ce sophisme confond proprietes des elements et proprietes du systeme complet; un bon element, ou meme plusieurs bons elements, ne garantit pas un bon ensemble."
        : 'This fallacy confuses properties of the elements with properties of the full system; one good part, or even many good parts, does not guarantee a good whole.',
      questionFormat: 'standard',
    };
  });
}

export const COMPOSITION_FALLACY_EXPANSION_EN: Question[] = make();
export const COMPOSITION_FALLACY_EXPANSION_FR: Question[] = make(true);
