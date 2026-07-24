import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["This soap must be safe because it is made from natural oils and smells like lavender in the bathroom.", "Ce savon doit être sans danger parce qu'il est fabriqué à partir d'huiles naturelles et sent la lavande dans la salle de bain."],
  ["A friend says the medicine is bad because it is synthetic, while the herb tea is good because it is natural and 'from the earth' after a hike.", "Un ami dit que le médicament est mauvais parce qu'il est synthétique, alors que la tisane est bonne parce qu'elle est naturelle et « vient de la terre » après une randonnee."],
  ["The ad claims the wooden toy is healthier than the plastic one just because it comes from a tree.", "La pub affirme que le jouet en bois est plus sain que le jouet en plastique simplement parce qu'il vient d'un arbre."],
  ["Mira refuses the clean water filter because 'real' water should come straight from a stream.", "Mira refuse le filtre à eau propre parce que la vraie eau devrait venir directement d'une rivière."],
  ["A shopper says the raw snack is better than the cooked one because it is less processed.", "Une cliente dit que la collation crue est meilleure que la cuite parce qu'elle est moins transformée."],
  ["Theo believes a plant-based cleaner cannot be harmful because plants are natural.", "Theo pense qu'un nettoyant à base de plantes ne peut pas être nocif parce que les plantes sont naturelles."],
  ["The coach says the barefoot shoes must be healthier because shoes should not look artificial.", "Le coach dit que les chaussures minimalistes doivent être plus saines parce que les chaussures ne devraient pas avoir l'air artificielles."],
  ["Nina assumes the untested mushroom tonic is safe because it grew in the wild.", "Nina suppose que le tonique de champignons non testé est sans danger parce qu'il a poussé à l'état sauvage."],
  ["A parent rejects the lab-grown meat because it is not 'real food'.", "Un parent rejette la viande cultivée en laboratoire parce que ce n'est pas de la vraie nourriture."],
  ["Omar says the clay cup is healthier than the ceramic one because clay is natural.", "Omar dit que la tasse en argile est plus saine que celle en céramique parce que l'argile est naturelle."],
  ["The blog says a salt scrub must be good for the skin because it is made from the sea.", "Le blog dit qu'un gommage au sel doit être bon pour la peau parce qu'il vient de la mer."],
  ["Lina trusts a wild berry jam simply because the berries were picked in a forest.", "Lina fait confiance à une confiture de baies sauvages simplement parce que les baies ont été cueillies en forêt."],
  ["A gardener says the insect spray is bad because it is produced in a factory.", "Un jardinier dit que le spray anti-insectes est mauvais parce qu'il est fabriqué en usine."],
  ["Ben insists the soil-based paint must be better because it comes from earth pigments.", "Ben insiste que la peinture à base de terre doit être meilleure parce qu'elle vient de pigments terrestres."],
  ["A flyer claims a natural supplement is safe for kids because it is 'just herbs'.", "Un prospectus affirme qu'un complément naturel est sans danger pour les enfants parce que ce sont 'juste des herbes'."],
  ["Priya says the mountain water bottle is superior because the water started in nature.", "Priya dit que la gourde d'eau de montagne est supérieure parce que l'eau a commencé dans la nature."],
  ["The seller says the bamboo phone case is automatically eco-friendly and better than any other case.", "Le vendeur dit que la coque de téléphone en bambou est automatiquement écologique et meilleure que toutes les autres."],
  ["A friend refuses the vaccines because viruses are natural too.", "Un ami refuse les vaccins parce que les virus sont aussi naturels."],
  ["The bakery calls its unbleached flour healthy just because it looks rustic.", "La boulangerie dit que sa farine non blanchie est saine simplement parce qu'elle a l'air rustique."],
  ["Maya says the herbal shampoo cannot irritate anyone because it smells like leaves.", "Maya dit que le shampoing aux plantes ne peut pas irriter qui que ce soit parce qu'il sent les feuilles."],
  ["A hiker prefers the muddy trail because it is more natural than the paved path.", "Un randonneur préfère le sentier boueux parce qu'il est plus naturel que le chemin pavé."],
  ["The poster says the unfiltered water is the purest option because nature did not touch it.", "L'affiche dit que l'eau non filtrée est l'option la plus pure parce que la nature ne l'a pas touchée."],
  ["Zoe thinks the handmade dye must be safe because it comes from flowers.", "Zoe pense que la teinture artisanale doit être sans danger parce qu'elle vient de fleurs."],
  ["A neighbor says the compost smell proves the fertilizer is better.", "Un voisin dit que l'odeur du compost prouve que l'engrais est meilleur."],
  ["The ad says this wooden toothbrush is best because plastic is unnatural.", "La pub dit que cette brosse à dents en bois est la meilleure parce que le plastique est artificiel."],
  ["Ravi insists the unscreened sunlight treatment is better than the controlled one because sun is natural.", "Ravi insiste pour dire que le traitement sans filtre solaire est meilleur que celui contrôlé parce que le soleil est naturel."],
  ["A customer says the wild honey must be safer than store honey because bees made it themselves.", "Une cliente dit que le miel sauvage doit être plus sûr que le miel du magasin parce que les abeilles l'ont fabriqué elles-mêmes."],
  ["The ad says the rock salt lamp will improve the room because salt comes from the earth.", "La pub dit que la lampe de sel de roche améliorera la pièce parce que le sel vient de la terre."],
  ["Noah rejects the lab-tested soap and buys the homemade batch only because it is natural-looking.", "Noah rejette le savon testé en laboratoire et achète le lot fait maison simplement parce qu'il paraît naturel."],
  ["The teacher says the old wooden desk is better because it feels more organic.", "L'enseignant dit que le vieux bureau en bois est meilleur parce qu'il semble plus organique."],
  ["A recipe app rates a raw dessert above a cooked one just because raw sounds healthier.", "Une application de recettes note un dessert cru au-dessus d'un dessert cuit simplement parce que cru paraît plus sain."],
  ["Mina says the sun-dried fabric must be safer because machines were not involved.", "Mina dit que le tissu séché au soleil doit être plus sûr parce que les machines n'ont pas été utilisées."],
  ["A shopper believes the mineral makeup is superior because it is from rocks.", "Une cliente croit que le maquillage minéral est supérieur parce qu'il vient des roches."],
  ["The neighborhood pet rule says outdoor dogs are healthier because indoor life is unnatural.", "La règle du quartier dit que les chiens d'extérieur sont plus sains parce que la vie en intérieur n'est pas naturelle."],
  ["Eli says the raw fish dish is automatically better because cooking changes nature.", "Eli dit que le plat de poisson cru est automatiquement meilleur parce que la cuisson change la nature."],
  ["A poster says natural light is always better than electricity.", "Une affiche dit que la lumière naturelle est toujours meilleure que l'électricité."],
  ["The salesman claims the leather bag is healthier for the planet because it came from an animal.", "Le vendeur affirme que le sac en cuir est meilleur pour la planète parce qu'il vient d'un animal."],
  ["Hugo says the beet juice must be safe because beets grow in the ground.", "Hugo dit que le jus de betterave doit être sans danger parce que les betteraves poussent dans la terre."],
  ["A friend rejects the disinfectant wipe because strong cleaning is 'unnatural'.", "Un ami rejette la lingette désinfectante parce qu'un nettoyage fort est 'contre nature'."],
  ["The flyer says the wildflower shampoo will fix everything because flowers are gentle.", "Le prospectus dit que le shampoing aux fleurs sauvages réparera tout parce que les fleurs sont douces."],
  ["Tara says the unpasteurized drink is better because processing is bad.", "Tara dit que la boisson non pasteurisée est meilleure parce que la transformation est mauvaise."],
  ["The shop advertises the bark tablet as better because it is closer to nature.", "La boutique fait la publicité du comprimé d'écorce comme meilleur parce qu'il est plus proche de la nature."],
  ["A student says the forest-school lesson must be true because it happened outdoors.", "Un élève dit que la leçon de l'école en forêt doit être vraie parce qu'elle s'est passée dehors."],
  ["The wellness speaker says the unrefined sugar is harmless because it is brown and natural.", "Le conférencier bien-être dit que le sucre non raffiné est inoffensif parce qu'il est brun et naturel."],
  ["A seller says the seaweed snack is healthier than chips because seaweed is from nature.", "Un vendeur dit que l'en-cas d'algues est plus sain que des chips parce que les algues viennent de la nature."],
  ["The manager wants the wild-themed office decor because nature means better work.", "Le manager veut une déco de bureau sur le thème sauvage parce que la nature signifie un meilleur travail."],
  ["Kim thinks the handmade candle is safe for babies because it is natural wax.", "Kim pense que la bougie faite main est sûre pour les bébés parce que c'est de la cire naturelle."],
  ["A parent says the mud mask is better because it came from the earth.", "Un parent dit que le masque à la boue est meilleur parce qu'il vient de la terre."],
  ["The ad says the organic sticker proves the snack is automatically good.", "La pub dit que l'étiquette bio prouve que la collation est automatiquement bonne."],
  ["Lea rejects the modern chair because wood is more natural than metal.", "Lea rejette la chaise moderne parce que le bois est plus naturel que le métal."],
  ["Maya says the herbal tincture must be harmless because it is made from roots.", "Maya dit que la teinture à base de plantes doit être inoffensive parce qu'elle est faite de racines."],
  ["A customer rejects the lab-grown leather because real leather sounds more natural.", "Une cliente rejette le cuir cultivé en laboratoire parce que le cuir réel semble plus naturel."],
  ["Theo believes the unfiltered juice is healthier because it looks cloudy and raw.", "Theo croit que le jus non filtré est plus sain parce qu'il paraît trouble et brut."],
  ["Nina says the stone face cream is better because it comes from minerals.", "Nina dit que la crème pour le visage à base de pierre est meilleure parce qu'elle vient des minéraux."],
  ["Omar refuses the filtered water bottle because pure water should taste like a stream.", "Omar refuse la bouteille d'eau filtrée parce que l'eau pure devrait avoir le goût d'un ruisseau."],
  ["Ben thinks the handmade soap is safer because factories are artificial.", "Ben pense que le savon fait main est plus sûr parce que les usines sont artificielles."],
  ["Priya says the wildflower syrup must be healthy because flowers are natural.", "Priya dit que le sirop aux fleurs sauvages doit être sain parce que les fleurs sont naturelles."],
  ["Leo argues the clay mug is better because it was shaped from earth.", "Leo affirme que la tasse en argile est meilleure parce qu'elle a été façonnée à partir de la terre."],
  ["Rina rejects the pasteurized drink because heating it feels unnatural.", "Rina rejette la boisson pasteurisée parce que la chauffer lui paraît contre nature."],
  ["Jules says the raw veggie wrap is automatically superior because it was not cooked.", "Jules dit que le wrap de légumes crus est automatiquement supérieur parce qu'il n'a pas été cuit."],
  [`Maya says the herbal tea must be safe because it grew in a garden.`, `Maya dit que la tisane doit etre sure parce qu elle a pousse dans un jardin.`],
  [`Leo rejects the disinfectant spray because strong cleaning feels unnatural.`, `Leo rejette le spray désinfectant parce qu un nettoyage fort lui semble contre nature.`],
  [`Nina says the raw dessert is healthier because it never saw an oven.`, `Nina dit que le dessert cru est plus sain parce qu il n a jamais vu de four.`],
  [`Owen thinks the bamboo toothbrush is automatically better than the plastic one.`, `Owen pense que la brosse à dents en bambou est automatiquement meilleure que celle en plastique.`],
  [`Priya trusts the wild berry jam because the berries came from a forest.`, `Priya fait confiance à la confiture de baies sauvages parce que les baies viennent d une forêt.`],
  [`Ben says the mud mask must be good because it comes from the earth.`, `Ben dit que le masque à la boue doit être bon parce qu il vient de la terre.`],
  [`Tara rejects the lab-tested soap because factories are artificial.`, `Tara rejette le savon testé en laboratoire parce que les usines sont artificielles.`],
  [`Kai says the raw fish dish is automatically better because it is uncooked.`, `Kai dit que le plat de poisson cru est automatiquement meilleur parce qu il n est pas cuit.`],
  [`Jules believes the salt lamp is healthier because salt comes from nature.`, `Jules croit que la lampe en sel est plus saine parce que le sel vient de la nature.`],
  [`Ava refuses the filtered water because real water should come from a stream.`, `Ava refuse l eau filtrée parce que la vraie eau devrait venir d un ruisseau.`],
  [`Noah says the plant-based cleaner cannot be harmful because plants are natural.`, `Noah dit que le nettoyant à base de plantes ne peut pas être nocif parce que les plantes sont naturelles.`],
  [`Mina says the handmade candle is safer because it uses natural wax.`, `Mina dit que la bougie faite main est plus sûre parce qu elle utilise de la cire naturelle.`],
  [`Eli trusts the unbleached flour because it looks rustic.`, `Eli fait confiance à la farine non blanchie parce qu elle a l air rustique.`],
  [`Rina says the forest-picked berry snack must be healthy because it came from nature.`, `Rina dit que l en-cas de baies cueillies en forêt doit être sain parce qu il vient de la nature.`],
  [`Hugo says the clay cup is better because plastic is unnatural.`, `Hugo dit que la tasse en argile est meilleure parce que le plastique est artificiel.`],
  [`Lina rejects the pasteurized juice because heating feels wrong.`, `Lina rejette le jus pasteurisé parce que le fait de le chauffer lui paraît faux.`],
  [`Grant believes the raw snack is better than the cooked one because it is less processed.`, `Grant croit que la collation crue est meilleure que la cuite parce qu elle est moins transformée.`],
  [`Zoe says the natural supplement must be harmless because it is 'just herbs'.`, `Zoe dit que le complément naturel doit être inoffensif parce que ce sont « juste des plantes ».`],
  [`Milo says the wood desk is better because it feels more organic.`, `Milo dit que le bureau en bois est meilleur parce qu il semble plus organique.`],
  [`Theo refuses the lab-grown meat because it is not real food.`, `Theo refuse la viande cultivée en laboratoire parce que ce n est pas de la vraie nourriture.`],
  [`Pia says the homemade soap is safer because it looks natural.`, `Pia dit que le savon fait maison est plus sûr parce qu il a l air naturel.`],
  [`Finn says the stone face cream is superior because it comes from minerals.`, `Finn dit que la crème minérale pour le visage est supérieure parce qu elle vient des minéraux.`],
  [`Maya says the unfiltered water bottle is the purest because nature did not touch it.`, `Maya dit que la bouteille d eau non filtrée est la plus pure parce que la nature ne l a pas touchée.`],
  [`Sam trusts the wild honey because bees made it themselves.`, `Sam fait confiance au miel sauvage parce que les abeilles l ont fabriqué elles-mêmes.`],
  [`Juno says the raw veggie wrap is automatically superior because it is uncooked.`, `Juno dit que le wrap de légumes crus est automatiquement supérieur parce qu il n est pas cuit.`],
  [`Iris rejects the disinfectant wipe because strong cleaning sounds artificial.`, `Iris rejette la lingette désinfectante parce qu un nettoyage fort semble artificiel.`],
  [`Cole says the organic sticker proves the snack is automatically good.`, `Cole dit que l étiquette bio prouve que la collation est automatiquement bonne.`],
  [`Nora believes the herbal shampoo cannot irritate anyone because it smells like leaves.`, `Nora croit que le shampoing aux herbes ne peut irriter personne parce qu il sent les feuilles.`],
  [`Ari says the mountain water bottle is healthier because the water started in nature.`, `Ari dit que la gourde d eau de montagne est plus saine parce que l eau a commencé dans la nature.`],
  [`Rita rejects the modern cleaner because it's from a factory.`, `Rita rejette le nettoyant moderne parce qu il vient d une usine.`],
  [`Tia says the wildflower syrup must be safer because flowers are gentle.`, `Tia dit que le sirop aux fleurs sauvages doit être plus sûr parce que les fleurs sont douces.`],
  [`Oli thinks the handmade bread is better because it feels more natural.`, `Oli pense que le pain fait main est meilleur parce qu il semble plus naturel.`],
  [`Lara says the bee's wax wrap is automatically healthier than plastic wrap.`, `Lara dit que l emballage à la cire d abeille est automatiquement plus sain que le film plastique.`],
  [`Ben rejects the filtered water pitcher because pure water should taste like a stream.`, `Ben rejette la carafe filtrante parce que l eau pure devrait avoir le goût d un ruisseau.`],
  [`Mina says the bark tablet is better because it is closer to nature.`, `Mina dit que le comprimé d écorce est meilleur parce qu il est plus proche de la nature.`],
  [`Drew believes the raw fish dish is best because cooking changes nature.`, `Drew croit que le plat de poisson cru est le meilleur parce que la cuisson change la nature.`],
  [`Jade says the organic label makes the snack automatically good.`, `Jade dit que l étiquette bio rend la collation automatiquement bonne.`],
  [`Owen trusts the plant-based cleaner because it is made from plants.`, `Owen fait confiance au nettoyant à base de plantes parce qu il est fait de plantes.`],
  [`Maya says the forest lotion must be safer because it smells earthy.`, `Maya dit que la lotion de forêt doit être plus sûre parce qu elle sent la terre.`],
  [`Ravi claims the untouched stream water is healthier because it looks natural.`, `Ravi affirme que l eau de ruisseau intacte est plus saine parce qu elle a l air naturelle.`],
];

const EN = ['Appeal to Nature', 'Appeal to Popularity', 'False Dilemma', 'Bandwagon'];
const FR = ["Appel à la nature", 'Appel à la popularité', 'Fausse dichotomie', 'Effet de mode'];

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
      id: 30601 + i,
      level: 1,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? "Appel à la nature" : 'Appeal to Nature',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? FR : EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Quelque chose est jugé bon, sûr ou meilleur seulement parce qu'il est naturel, brut ou peu transformé."
        : 'Something is treated as good, safe, or better only because it is natural, raw, or less processed.',
      detailedExplanationBeginner: fr
        ? "Nature ne veut pas dire meilleur."
        : 'Natural does not automatically mean better.',
      detailedExplanationIntermediate: fr
        ? "Une chose naturelle peut être dangereuse, et une chose artificielle peut être utile ou plus sûre."
        : 'A natural thing can still be harmful, and an artificial thing can still be useful or safer.',
      detailedExplanationExpert: fr
        ? "L'appel à la nature confond une description de l'origine d'une chose avec une évaluation de sa valeur, de sa sécurité ou de sa qualité."
        : 'Appeal to nature confuses a description of where something comes from with a judgment about its value, safety, or quality.',
      questionFormat: 'standard',
    };
  });
}

export const APPEAL_TO_NATURE_EXPANSION_EN: Question[] = make();
export const APPEAL_TO_NATURE_EXPANSION_FR: Question[] = make(true);
