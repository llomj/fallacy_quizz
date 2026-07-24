import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Mia thinks a bigger house would fix everything because she only imagines the extra room and not the cleaning.', "Mia pense qu'une maison plus grande reglerait tout parce qu'elle imagine seulement la piece en plus et pas le nettoyage."],
  ['Theo assumes moving to the city will make life perfect because he focuses on nightlife and forgets the rent.', "Theo suppose que déménager en ville rendrait la vie parfaite parce qu'il se concentre sur la vie nocturne et oublie le loyer."],
  ['Ava says a new phone will make every day better because she is fixated on the camera.', "Ava dit qu'un nouveau telephone rendra chaque jour meilleur parce qu'elle se fixe sur l'appareil photo."],
  ['Ben thinks one vacation spot would solve his stress because he keeps picturing the beach.', "Ben pense qu'un seul endroit de vacances reglerait son stress parce qu'il imagine sans cesse la plage."],
  ['Rina believes a pay raise would fix her whole job because she only focuses on salary.', "Rina croit qu'une augmentation reglerait tout son travail parce qu'elle se concentre seulement sur le salaire."],
  ['Owen says a fancy car would change his life because he is stuck on the parking lot image.', "Owen dit qu'une voiture chic changerait sa vie parce qu'il est bloque sur l'image du parking."],
  ['Nina thinks one new gadget would make her organized because she focuses on the desk setup.', "Nina pense qu'un seul nouveau gadget la rendrait organisee parce qu'elle se concentre sur l'installation du bureau."],
  ['Priya says a bigger TV would make movie nights magical because she only thinks about the screen size.', "Priya dit qu'une plus grande television rendrait les soirees film magiques parce qu'elle ne pense qu'a la taille de l'ecran."],
  ['Leo believes a better apartment would end all conflicts because he focuses on the kitchen.', "Leo croit qu'un meilleur appartement mettrait fin a tous les conflits parce qu'il se focalise sur la cuisine."],
  ['Milo says a longer lunch break would fix the day because he only imagines the extra time.', "Milo dit qu'une pause dejeuner plus longue reglerait la journee parce qu'il imagine seulement le temps en plus."],
  ['Lina assumes a new notebook would improve her grades because she is fixated on the cover.', "Lina suppose qu'un nouveau carnet ameliorerait ses notes parce qu'elle est fixee sur la couverture."],
  ['Kai thinks living near a park would make him healthier because he keeps picturing the trees.', "Kai pense que vivre pres d'un parc le rendrait plus sain parce qu'il imagine sans cesse les arbres."],
  ['Zoe says a cleaner kitchen would make cooking fun because she only focuses on the neatness.', "Zoe dit qu'une cuisine plus propre rendrait la cuisine amusante parce qu'elle se concentre seulement sur le rangement."],
  ['Finn believes a louder speaker would make parties better because he fixates on volume.', "Finn croit qu'une enceinte plus puissante rendrait les fetes meilleures parce qu'il se focalise sur le volume."],
  ['Mina says a bigger desk would solve her work problems because she only imagines the surface area.', "Mina dit qu'un bureau plus grand resoudrait ses problemes de travail parce qu'elle imagine seulement la surface."],
  ['Eli thinks moving closer to the office would end exhaustion because he focuses on commute time.', "Eli pense qu'habiter plus pres du bureau mettrait fin a la fatigue parce qu'il se concentre sur le temps de trajet."],
  ['Tara says a new playlist would make her morning perfect because she is stuck on the first song.', "Tara dit qu'une nouvelle playlist rendrait sa matinee parfaite parce qu'elle reste bloquee sur la premiere chanson."],
  ['Noah believes a bigger monitor would remove stress because he only sees the screen width.', "Noah croit qu'un moniteur plus grand supprimerait le stress parce qu'il ne voit que la largeur de l'ecran."],
  ['Rina says a vacation home would cure burnout because she fixates on the porch.', "Rina dit qu'une maison de vacances guerirait l'epuisement parce qu'elle se focalise sur le porche."],
  ['Jasper thinks a nicer desk chair would fix his whole workflow because he only imagines comfort.', "Jasper pense qu'une chaise de bureau plus confortable reglerait tout son flux de travail parce qu'il n'imagine que le confort."],
  ['Maya says a quieter street would make the neighborhood perfect because she fixates on noise.', "Maya dit qu'une rue plus calme rendrait le quartier parfait parce qu'elle se fixe sur le bruit."],
  ['Hugo believes a new coffee maker would transform mornings because he only focuses on the aroma.', "Hugo croit qu'une nouvelle cafetiere transformerait les matins parce qu'il se concentre seulement sur l'odeur."],
  ['Layla thinks a faster internet plan would solve every frustration because she focuses on buffering.', "Layla pense qu'un forfait internet plus rapide resoudrait chaque frustration parce qu'elle se concentre sur le chargement."],
  ['Clara says a brighter office would make work exciting because she is stuck on the light fixtures.', "Clara dit qu'un bureau plus lumineux rendrait le travail excitant parce qu'elle est bloquee sur les luminaires."],
  ['Dylan thinks a new backpack would make school easier because he only imagines the pockets.', "Dylan pense qu'un nouveau sac a dos rendrait l'ecole plus facile parce qu'il imagine seulement les poches."],
  ['Sofia says a larger fridge would make meal prep effortless because she focuses on storage.', "Sofia dit qu'un frigo plus grand rendrait la preparation des repas sans effort parce qu'elle se concentre sur le rangement."],
  ['Reed believes a better gym membership would make him fit because he fixates on the machines.', "Reed croit qu'un meilleur abonnement de salle de sport le rendrait en forme parce qu'il se focalise sur les machines."],
  ['Emma thinks a new pen would improve her writing because she focuses on the ink color.', "Emma pense qu'un nouveau stylo ameliorerait son ecriture parce qu'elle se concentre sur la couleur de l'encre."],
  ['Ari says a larger screen would solve boredom because he only thinks about the display.', "Ari dit qu'un ecran plus grand reglerait l'ennui parce qu'il ne pense qu'a l'affichage."],
  ['Mina believes a nicer balcony would make home life perfect because she keeps picturing plants.', "Mina croit qu'un meilleur balcon rendrait la vie a la maison parfaite parce qu'elle imagine sans cesse les plantes."],
  ['Cole says a warmer coat would fix winter because he focuses on the fabric.', "Cole dit qu'un manteau plus chaud reglerait l'hiver parce qu'il se focalise sur le tissu."],
  ['Tessa thinks a better classroom projector would improve learning because she only imagines the image size.', "Tessa pense qu'un meilleur projecteur de classe ameliorerait l'apprentissage parce qu'elle imagine seulement la taille de l'image."],
  ['Jonah says a quieter dog would solve all problems because he fixates on barking.', "Jonah dit qu'un chien plus calme resoudrait tous les problemes parce qu'il se focalise sur les aboiements."],
  ['Kira thinks a better mattress would make life amazing because she focuses on sleep.', "Kira pense qu'un meilleur matelas rendrait la vie incroyable parce qu'elle se concentre sur le sommeil."],
  ['Parker says a bigger pantry would make cooking easy because he only imagines shelves.', "Parker dit qu'un garde-manger plus grand rendrait la cuisine facile parce qu'il imagine seulement les etageres."],
  ['Nora believes a nicer uniform would fix school morale because she focuses on appearance.', "Nora croit qu'un uniforme plus joli reglerait le moral de l'ecole parce qu'elle se concentre sur l'apparence."],
  ['Evan says a new desk lamp would make late work pleasant because he fixes on the glow.', "Evan dit qu'une nouvelle lampe de bureau rendrait le travail tardif agreable parce qu'il se fixe sur la lueur."],
  ['Stella thinks a garden would cure stress because she only imagines the flowers.', "Stella pense qu'un jardin guerirait le stress parce qu'elle n'imagine que les fleurs."],
  ['Ray says a quieter phone would make him patient because he focuses on notifications.', "Ray dit qu'un telephone plus silencieux le rendrait patient parce qu'il se concentre sur les notifications."],
  ['Jade believes a more stylish bag would make travel easier because she fixates on looks.', "Jade croit qu'un sac plus elegant rendrait le voyage plus facile parce qu'elle se focalise sur l'apparence."],
  ['Drew says a bigger fridge would end all grocery stress because he imagines the space.', "Drew dit qu'un plus grand frigo mettrait fin au stress des courses parce qu'il imagine l'espace."],
  ['Lara thinks a bigger screen on her laptop would make her productive because she focuses on width.', "Lara pense qu'un ecran plus grand sur son portable la rendrait productive parce qu'elle se concentre sur la largeur."],
  ['Oli says a nicer neighborhood cafe would make every morning better because he fixates on ambience.', "Oli dit qu'un cafe de quartier plus agreable rendrait chaque matin meilleur parce qu'il se focalise sur l'ambiance."],
  ['Mia believes a better suitcase would stop travel problems because she focuses on the wheels.', "Mia croit qu'une meilleure valise arreterait les problemes de voyage parce qu'elle se concentre sur les roues."],
  ['Felix thinks a prettier calendar would make him organized because he keeps staring at the layout.', "Felix pense qu'un calendrier plus joli le rendrait organise parce qu'il ne regarde que la mise en page."],
  ['Iris says a new chair would make meetings bearable because she only thinks of padding.', "Iris dit qu'une nouvelle chaise rendrait les reunions supportables parce qu'elle ne pense qu'au rembourrage."],
  ['Grant believes a bigger kitchen sink would make dishes enjoyable because he fixates on depth.', "Grant croit qu'un evier de cuisine plus grand rendrait la vaisselle agreable parce qu'il se focalise sur la profondeur."],
  ['Juno says a better jacket would improve every trip because she focuses on the zipper.', "Juno dit qu'une meilleure veste ameliorerait chaque trajet parce qu'elle se concentre sur la fermeture eclair."],
  ['Pia thinks a cleaner dashboard would make driving calm because she fixates on the icons.', "Pia pense qu'un tableau de bord plus propre rendrait la conduite calme parce qu'elle se focalise sur les icones."],
  ['Maya thinks a bigger apartment would solve loneliness because she focuses on the extra room.', "Maya pense qu'un appartement plus grand reglerait la solitude parce qu'elle se concentre sur l'espace supplementaire."],
  ['Theo believes moving to the city would fix every problem because he only imagines the lights.', "Theo croit que demenager en ville reglerait tous les problemes parce qu'il n'imagine que les lumieres."],
  ['Ava says a new laptop would make work magical because she fixates on the bigger screen.', "Ava dit qu'un nouvel ordinateur portable rendrait le travail magique parce qu'elle se focalise sur l'ecran plus grand."],
  ['Ben thinks a beach house would end stress because he pictures the ocean view.', "Ben pense qu'une maison de plage mettrait fin au stress parce qu'il imagine la vue sur l'ocean."],
  ['Nina says a fancier phone would make mornings better because she focuses on the camera.', "Nina dit qu'un telephone plus chic rendrait les matins meilleurs parce qu'elle se concentre sur l'appareil photo."],
  ['Omar thinks a shorter commute would make him happy because he only imagines the saved time.', "Omar pense qu'un trajet plus court le rendrait heureux parce qu'il n'imagine que le temps gagne."],
  ['Priya says a new sofa would fix family time because she focuses on the cushion depth.', "Priya dit qu'un nouveau canape reglerait le temps en famille parce qu'elle se concentre sur la profondeur des coussins."],
  ['Leo believes a nicer kitchen would make cooking fun because he fixates on the countertop.', "Leo croit qu'une cuisine plus belle rendrait la cuisine amusante parce qu'il se focalise sur le plan de travail."],
  ['Rina says a bigger TV would make weekends perfect because she keeps picturing the screen size.', "Rina dit qu'une plus grande television rendrait les week-ends parfaits parce qu'elle imagine sans cesse la taille de l'ecran."],
  ['Jade thinks a quieter car would make life peaceful because she focuses on the engine noise.', "Jade pense qu'une voiture plus silencieuse rendrait la vie paisible parce qu'elle se concentre sur le bruit du moteur."],
  ['Maya thinks a bigger apartment would solve everything because she only imagines the extra room and not the cleaning.', "Maya pense qu'une maison plus grande reglerait tout parce qu'elle imagine seulement la piece en plus et pas le nettoyage."],
  ['Theo assumes moving to the city will make life perfect because he focuses on nightlife and forgets the rent.', "Theo suppose que déménager en ville rendrait la vie parfaite parce qu'il se concentre sur la vie nocturne et oublie le loyer."],
  ['Ava says a new phone will make every day better because she is fixated on the camera.', "Ava dit qu'un nouveau telephone rendra chaque jour meilleur parce qu'elle se fixe sur l'appareil photo."],
  ['Ben thinks one vacation spot would solve his stress because he keeps picturing the beach.', "Ben pense qu'un seul endroit de vacances reglerait son stress parce qu'il imagine sans cesse la plage."],
  ['Rina believes a pay raise would fix her whole job because she only focuses on salary.', "Rina croit qu'une augmentation reglerait tout son travail parce qu'elle se concentre seulement sur le salaire."],
  ['Owen says a fancy car would change his life because he is stuck on the parking lot image.', "Owen dit qu'une voiture chic changerait sa vie parce qu'il est bloque sur l'image du parking."],
  ['Nina thinks one new gadget would make her organized because she focuses on the desk setup.', "Nina pense qu'un seul nouveau gadget la rendrait organisee parce qu'elle se concentre sur l'installation du bureau."],
  ['Priya says a bigger TV would make movie nights magical because she only thinks about the screen size.', "Priya dit qu'une plus grande television rendrait les soirees film magiques parce qu'elle ne pense qu'a la taille de l'ecran."],
  ['Leo believes a better apartment would end all conflicts because he focuses on the kitchen.', "Leo croit qu'un meilleur appartement mettrait fin a tous les conflits parce qu'il se focalise sur la cuisine."],
  ['Milo says a longer lunch break would fix the day because he only imagines the extra time.', "Milo dit qu'une pause dejeuner plus longue reglerait la journee parce qu'il imagine seulement le temps en plus."],
  ['Lena says a new rug would make her whole home feel cozy because she focuses on the living room.', "Lena dit qu'un nouveau tapis rendrait toute sa maison chaleureuse parce qu'elle se concentre sur le salon."],
  ['Noah thinks a balcony view would solve his apartment boredom because he only imagines sunsets.', "Noah pense qu'une vue de balcon reglerait son ennui d'appartement parce qu'il imagine seulement les couchers de soleil."],
  ['Maya believes a nicer lunch spot would fix her workday because she fixates on the patio.', "Maya croit qu'un lieu de dejeuner plus agreable reglerait sa journee de travail parce qu'elle se focalise sur la terrasse."],
  ['Eli says a quieter keyboard would make coding fun because he focuses on the clicking sound.', "Eli dit qu'un clavier plus silencieux rendrait le code amusant parce qu'il se concentre sur le bruit des touches."],
  ['Tara assumes a bigger closet would make mornings easy because she only imagines the extra hangers.', "Tara suppose qu'un placard plus grand rendrait les matins faciles parce qu'elle imagine seulement les cintres en plus."],
  ['Hugo thinks a new city bike would make commuting exciting because he fixates on the frame color.', "Hugo pense qu'un nouveau velo de ville rendrait les trajets excitants parce qu'il se focalise sur la couleur du cadre."],
  ['Sofia says a warmer blanket would solve bedtime because she only imagines being wrapped up.', "Sofia dit qu'une couverture plus chaude reglerait l'heure du coucher parce qu'elle imagine seulement etre enveloppee."],
  ['Cole believes a fresh coat of paint would make the office productive because he focuses on the walls.', "Cole croit qu'une nouvelle couche de peinture rendrait le bureau productif parce qu'il se concentre sur les murs."],
  ['Jade thinks a fancier water bottle would make exercise easier because she fixates on the design.', "Jade pense qu'une bouteille d'eau plus chic rendrait l'exercice plus facile parce qu'elle se focalise sur le design."],
  ['Ben says a bigger porch would fix family visits because he imagines the extra space.', "Ben dit qu'un porche plus grand reglerait les visites familiales parce qu'il imagine l'espace supplementaire."],
  ['Rina believes a quieter fan would make summer bearable because she only notices the noise.', "Rina croit qu'un ventilateur plus silencieux rendrait l'ete supportable parce qu'elle ne remarque que le bruit."],
  ['Ari thinks a nicer coffee mug would improve his mornings because he focuses on the shape.', "Ari pense qu'une tasse a cafe plus jolie ameliorerait ses matins parce qu'il se concentre sur la forme."],
  ['Nora says a bigger laptop bag would make travel smooth because she fixates on compartments.', "Nora dit qu'un sac d'ordinateur plus grand rendrait le voyage fluide parce qu'elle se focalise sur les compartiments."],
  ['Dylan assumes a brighter hallway would make the whole school feel happier because he focuses on the lights.', "Dylan suppose qu'un couloir plus lumineux rendrait toute l'ecole plus heureuse parce qu'il se concentre sur les lumieres."],
  ['Pia thinks a softer pillow would solve her sleeping problems because she only imagines the fluff.', "Pia pense qu'un oreiller plus doux reglerait ses problemes de sommeil parce qu'elle imagine seulement le moelleux."],
  ['Mia says a better steering wheel cover would make driving calm because she fixates on the grip.', "Mia dit qu'une meilleure housse de volant rendrait la conduite calme parce qu'elle se focalise sur la prise en main."],
  ['Finn believes a cleaner desk would make homework easy because he notices the empty surface.', "Finn croit qu'un bureau plus propre rendrait les devoirs faciles parce qu'il remarque la surface vide."],
  ['Lara thinks a wider hallway would make the apartment feel luxurious because she only imagines walking through it.', "Lara pense qu'un couloir plus large donnerait a l'appartement une sensation de luxe parce qu'elle imagine seulement y marcher."],
  ['Oli says a stronger fan would make the whole room better because he focuses on the breeze.', "Oli dit qu'un ventilateur plus puissant rendrait toute la piece meilleure parce qu'il se concentre sur le courant d'air."],
  ['Zoe believes a new wallpaper would solve boredom at home because she fixates on the pattern.', "Zoe croit qu'un nouveau papier peint reglerait l'ennui a la maison parce qu'elle se focalise sur le motif."],
  ['Ray thinks a fancier lunchbox would make workdays happy because he imagines the lid.', "Ray pense qu'une boite a repas plus chic rendrait les journees de travail heureuses parce qu'il imagine le couvercle."],
  ['Clara says a bigger shower would make mornings perfect because she focuses on the extra water.', "Clara dit qu'une douche plus grande rendrait les matins parfaits parce qu'elle se concentre sur l'eau en plus."],
  ['Mina believes a prettier notebook would make studying easy because she fixates on the cover.', "Mina croit qu'un carnet plus joli rendrait l'etude facile parce qu'elle se focalise sur la couverture."],
  ['Jasper thinks a quieter elevator would make the building feel premium because he only hears the chime.', "Jasper pense qu'un ascenseur plus silencieux donnerait au batiment une impression premium parce qu'il n'entend que la sonnerie."],
  ['Evan says a better umbrella would make rainy days nice because he focuses on the handle.', "Evan dit qu'un meilleur parapluie rendrait les jours de pluie agreables parce qu'il se concentre sur la poignee."],
  ['Iris believes a new desk plant would fix her mood because she only imagines the leaves.', "Iris croit qu'une nouvelle plante de bureau reglerait son humeur parce qu'elle imagine seulement les feuilles."],
  ['Grant thinks a larger window would solve cabin fever because he fixates on the view.', "Grant pense qu'une fenetre plus grande reglerait le sentiment d'enfermement parce qu'il se focalise sur la vue."],
  ['Layla says a nicer lunch break chair would make work feel relaxing because she focuses on the cushion.', "Layla dit qu'une chaise de pause dejeuner plus agreable rendrait le travail relaxant parce qu'elle se concentre sur le coussin."],
  ['Theo believes a better shower head would make every morning great because he only imagines the spray.', "Theo croit qu'un meilleur pommeau de douche rendrait chaque matin genial parce qu'il n'imagine que le jet."],
  ['Mila thinks a bigger back yard would make weekends unforgettable because she fixates on the grass.', "Mila pense qu'un plus grand jardin rendrait les week-ends inoubliables parce qu'elle se focalise sur l'herbe."],
  ['Owen says a larger desk plant would make remote work calm because he only imagines the leaves.', "Owen dit qu'une plante de bureau plus grande rendrait le teletravail calme parce qu'il n'imagine que les feuilles."]
];

const OPTIONS_EN = ['Focusing Illusion', 'Anchoring Bias', 'False Balance', 'False Equivalence'];
const OPTIONS_FR = ["Illusion de focalisation", 'Biais d’ancrage', 'Faux équilibre', 'Fausse équivalence'];

function rotate(a: string[], i: number) {
  const r = a.slice(1);
  r.splice(i, 0, a[0]);
  return r;
}

function sub(i: number) {
  return i < 17 ? SubLevel.BEGINNER : i < 34 ? SubLevel.INTERMEDIATE : SubLevel.EXPERT;
}

function make(fr = false): Question[] {
  return SCENARIOS.map((s, i) => {
    const c = i % 4;
    return {
      id: 34601 + i,
      level: 6,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? "Illusion de focalisation" : 'Focusing Illusion',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? "On surestime l'impact d'un seul aspect saillant et on oublie tout le reste."
        : 'One salient aspect is overweighted while everything else is ignored.',
      detailedExplanationBeginner: fr
        ? "On se concentre trop sur un seul détail."
        : 'Too much attention is placed on one detail.',
      detailedExplanationIntermediate: fr
        ? "L'illusion de focalisation fait croire qu'une caractéristique visible domine toute l'expérience."
        : 'The focusing illusion makes one visible feature seem to dominate the whole experience.',
      detailedExplanationExpert: fr
        ? "Ce biais d'évaluation survient lorsque l'on juge une situation complexe à partir d'un attribut saillant, ce qui déforme la valeur globale perçue."
        : 'This judgment bias happens when a complex situation is evaluated from one salient attribute, distorting overall perceived value.',
      questionFormat: 'standard',
    };
  });
}

export const FOCUSING_ILLUSION_EXPANSION_EN: Question[] = make();
export const FOCUSING_ILLUSION_EXPANSION_FR: Question[] = make(true);
