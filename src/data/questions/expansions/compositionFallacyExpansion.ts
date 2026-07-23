import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['The team has two star scorers, so the whole squad must win every game automatically.', "L'equipe a deux buteurs vedettes, donc tout le groupe doit gagner chaque match automatiquement."],
  ['Because every tomato in the crate looks fresh, the whole sauce must be perfect.', 'Parce que chaque tomate dans la caisse a l’air fraiche, toute la sauce doit etre parfaite.'],
  ['The apartment has a bright kitchen and a clean bathroom, so the entire building must be amazing.', 'L appartement a une cuisine lumineuse et une salle de bain propre, donc tout l immeuble doit etre incroyable.'],
  ['Every student in the club is good at one subject, so the club as a whole is brilliant at everything.', 'Chaque eleve du club est bon dans une matiere, donc le club entier est brillant dans tout.'],
  ['The garden has healthy roses and healthy herbs, so the whole yard is indestructible.', 'Le jardin a des roses en bonne sante et des herbes en bonne sante, donc tout le terrain est indestructible.'],
  ['Each app menu is simple, so the app must be simple to use in every situation.', 'Chaque menu de l application est simple, donc l application doit etre simple a utiliser dans toutes les situations.'],
  ['Because the bread slices are soft, the whole sandwich must be delicate and strong.', 'Parce que les tranches de pain sont moelleuses, tout le sandwich doit etre delicat et solide.'],
  ['The movie has one funny scene and one great song, so the entire plot has no flaws.', 'Le film a une scene drole et une excellente chanson, donc toute l intrigue n a aucun defaut.'],
  ['Every wheel on the bike spins smoothly, so the bike can never break down.', 'Chaque roue du velo tourne bien, donc le velo ne peut jamais tomber en panne.'],
  ['The office has a good coffee machine and comfy chairs, so the company must be excellent.', "Le bureau a une bonne machine a cafe et des chaises confortables, donc l entreprise doit etre excellente."],
  ['Because each LEGO piece fits, the finished castle must survive any fall.', 'Parce que chaque piece de LEGO s emboite, le chateau termine doit resister a toute chute.'],
  ['The class has smart students, so the whole class must understand every topic instantly.', 'La classe a des eleves intelligents, donc toute la classe doit comprendre chaque sujet instantanement.'],
  ['Each ingredient in the fridge is cheap, so the whole dinner will be cheap and tasty.', 'Chaque ingredient du frigo est bon marche, donc tout le diner sera bon marche et savoureux.'],
  ['The train has clean windows and quiet seats, so the entire rail network must be efficient.', 'Le train a des vitres propres et des sieges calmes, donc tout le reseau ferroviaire doit etre efficace.'],
  ['Because every chapter is short, the book must be easy for anyone to master in one afternoon.', 'Parce que chaque chapitre est court, le livre doit etre facile a maitriser pour tout le monde en une apres-midi.'],
  ['The bakery has fresh bread and nice packaging, so every pastry there must be gourmet.', 'La boulangerie a du pain frais et un bel emballage, donc chaque patisserie doit etre gastronomique.'],
  ['Each song on the playlist is calm, so the party itself has to be calm too.', 'Chaque chanson de la playlist est calme, donc la fete elle-meme doit etre calme aussi.'],
  ['The hotel room has soft sheets and a good lamp, so the whole trip will be luxurious.', 'La chambre d hotel a des draps doux et une bonne lampe, donc tout le voyage sera luxueux.'],
  ['The playground has sturdy swings and a bright slide, so the entire park is perfectly safe.', 'Le terrain de jeu a des balancoires solides et un toboggan lumineux, donc tout le parc est parfaitement sur.'],
  ['Every file on the laptop opens fast, so the whole laptop is powerful.', 'Chaque fichier sur l ordinateur s ouvre vite, donc tout l ordinateur est puissant.'],
  ['The salad has fresh lettuce and ripe tomatoes, so the buffet must be healthy overall.', 'La salade a de la laitue fraiche et des tomates mures, donc le buffet doit etre sain dans l ensemble.'],
  ['Because each room in the house is tidy, the house must be perfect for a magazine shoot.', 'Parce que chaque piece de la maison est rangee, la maison doit etre parfaite pour une seance photo.'],
  ['The concert had great lighting and clean sound, so the whole band has no weak points.', 'Le concert avait un bon eclairage et un son propre, donc tout le groupe n a aucun point faible.'],
  ['The phone has a fast screen and a nice camera, so the phone can do everything well.', 'Le telephone a un ecran rapide et une belle camera, donc le telephone peut tout faire correctement.'],
  ['Every person in the crowd is relaxed, so the crowd can never become chaotic.', 'Chaque personne dans la foule est detendue, donc la foule ne peut jamais devenir chaotique.'],
  ['The shoes are each comfortable, so the pair must be perfect for a marathon tomorrow.', 'Les chaussures sont chacune confortables, donc la paire doit etre parfaite pour un marathon demain.'],
  ['The desk has one clean drawer and a neat top, so the whole office is highly organized.', 'Le bureau a un tiroir propre et un dessus range, donc tout le bureau est tres organise.'],
  ['Because every board on the shelf is straight, the shelf will never wobble.', 'Parce que chaque planche de l etagere est droite, l etagere ne vacillera jamais.'],
  ['The movie has good jokes and a catchy soundtrack, so the plot must be flawless.', 'Le film a de bonnes blagues et une bande-son accrocheuse, donc l intrigue doit etre sans faute.'],
  ['The kids in the class are polite, so the class as a whole can never misbehave.', 'Les enfants de la classe sont polis, donc toute la classe ne peut jamais mal se comporter.'],
  ['The website has clear icons and pretty colors, so the whole company must be trustworthy.', 'Le site a des icones claires et de jolies couleurs, donc toute l entreprise doit etre digne de confiance.'],
  ['Every panel of the fence is painted well, so the fence is guaranteed to be strong.', 'Chaque panneau de la cloture est bien peint, donc la cloture est garantie solide.'],
  ['The pantry is full of snacks, so the entire party will definitely be fun.', 'Le garde-manger est plein de snacks, donc toute la fete sera forcement amusante.'],
  ['Every button on the remote works, so the remote will never fail.', 'Chaque bouton de la telecommande fonctionne, donc la telecommande ne tombera jamais en panne.'],
  ['The ingredients are all fresh, so the final burger must be gourmet.', 'Les ingredients sont tous frais, donc le burger final doit etre gastronomique.'],
  ['Each story in the anthology is good, so the whole anthology has no flaws.', "Chaque histoire de l anthologie est bonne, donc l anthologie dans son ensemble n a aucun defaut."],
  ['The bakery has nice smells and fast service, so every item there must be worth the price.', 'La boulangerie a de bonnes odeurs et un service rapide, donc chaque article doit valoir le prix.'],
  ['Every student in the group solved one problem, so the whole group must be brilliant.', 'Chaque eleve du groupe a resolu un probleme, donc tout le groupe doit etre brillant.'],
  ['The car dashboard is simple and clear, so the entire car is simple and clear too.', 'Le tableau de bord de la voiture est simple et clair, donc toute la voiture est aussi simple et claire.'],
  ['The flowers are each pretty, so the whole garden is perfect.', 'Les fleurs sont chacune jolies, donc tout le jardin est parfait.'],
  ['Each song on the playlist is calm, so the playlist can never annoy anyone.', 'Chaque chanson de la playlist est calme, donc la playlist ne peut jamais deranger personne.'],
  ['The dinner ingredients are all organic, so the entire dinner is automatically healthy.', 'Les ingredients du diner sont tous bio, donc tout le diner est automatiquement sain.'],
  ['Every sentence in the speech is clear, so the speech must be persuasive.', 'Chaque phrase du discours est claire, donc le discours doit etre persuasif.'],
  ['The game pieces are tiny, so the board game must be easy for everyone.', 'Les pieces du jeu sont minuscules, donc le jeu de societe doit etre facile pour tout le monde.'],
  ['Because the first section of the report is polished, the whole report must be airtight.', 'Parce que la premiere partie du rapport est soignee, tout le rapport doit etre inattaquable.'],
  ['The cafe has good napkins and clean tables, so the entire cafe is a top-tier experience.', 'Le cafe a de bonnes serviettes et des tables propres, donc tout le cafe est une experience haut de gamme.'],
  ['Every chapter of the manual is readable, so the product must be foolproof.', 'Chaque chapitre du manuel est lisible, donc le produit doit etre infaillible.'],
  ['The drawers all open smoothly, so the dresser can never have a structural problem.', 'Tous les tiroirs s ouvrent bien, donc la commode ne peut pas avoir de probleme structurel.'],
  ['The classroom has bright posters and nice desks, so the lesson itself is perfect.', 'La salle de classe a des affiches lumineuses et de bons bureaux, donc la lecon elle-meme est parfaite.'],
  ['Each part of the playlist sounds good, so the whole party soundtrack will energize everyone.', 'Chaque morceau de la playlist sonne bien, donc toute la bande-son de la fete va energiser tout le monde.'],
  ['Each runner on the relay team is fast, so the team must break the record without practice.', 'Chaque coureur de l’equipe de relais est rapide, donc l’equipe doit battre le record sans s’entrainer.'],
  ['Every brick in the wall is light, so the wall must be easy to lift by hand.', 'Chaque brique du mur est legere, donc le mur doit etre facile a soulever a la main.'],
  ['All the ingredients are tasty on their own, so the stew will automatically be delicious.', 'Tous les ingredients sont bons chacun de leur cote, donc le ragoût sera automatiquement delicieux.'],
  ['Each worker is polite, so the whole office can never have conflict.', 'Chaque employe est poli, donc tout le bureau ne peut jamais avoir de conflit.'],
  ['The car has strong tires and a strong engine, so the whole car is indestructible.', 'La voiture a des pneus solides et un moteur solide, donc toute la voiture est indestructible.'],
  ['Every student solved one part of the worksheet, so the class has mastered the subject completely.', 'Chaque eleve a resolu une partie de la fiche, donc la classe a totalement maitrise la matiere.'],
  ['The movie has great acting and great music, so the entire plot cannot be confusing.', 'Le film a un excellent jeu d’acteur et une excellente musique, donc toute l’intrigue ne peut pas etre confuse.'],
  ['Each ingredient in the salad is fresh, so the whole buffet must be healthy no matter how much people eat.', 'Chaque ingredient de la salade est frais, donc tout le buffet doit etre sain quelle que soit la quantite mangee.'],
  ['The computer has a fast keyboard and a bright screen, so the whole machine is automatically professional-grade.', 'L’ordinateur a un clavier rapide et un ecran lumineux, donc toute la machine est automatiquement de niveau professionnel.'],
  ['Every seat in the stadium is comfortable, so the crowd experience must be perfect.', 'Chaque siege du stade est confortable, donc l’experience de la foule doit etre parfaite.']
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
