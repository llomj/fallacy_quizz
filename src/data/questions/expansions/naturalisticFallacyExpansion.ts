import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says the homemade cleaner must be safer because it is natural, even though she mixed random plants in her kitchen sink.', 'Maya dit que le nettoyant fait maison doit etre plus sûr parce qu il est naturel, alors qu elle a mélangé des plantes au hasard dans l évier de sa cuisine.'],
  ['Leo rejects the doctor-recommended medicine because it is synthetic and chooses an untested herbal paste instead.', 'Leo rejette le médicament recommandé par le médecin parce qu il est synthétique et choisit à la place une pâte aux herbes non testée.'],
  ['Priya says the store-bought sunscreen is bad because the label lists chemicals, so she uses nothing on a sunny hike.', 'Priya dit que la crème solaire du magasin est mauvaise parce que l étiquette liste des produits chimiques, alors elle n utilise rien pendant une randonnée en plein soleil.'],
  ['Omar claims the natural juice must be healthier than water because it came from fruit, not a factory.', 'Omar affirme que le jus naturel doit être plus sain que l eau parce qu il vient d un fruit et non d une usine.'],
  ['Rina says a wooden toy is automatically better than a plastic one because wood is natural.', 'Rina dit qu un jouet en bois est automatiquement meilleur qu un jouet en plastique parce que le bois est naturel.'],
  ['Ben says the herbal remedy should work better than the pharmacy option because it was picked from a forest.', 'Ben dit que le remède aux plantes doit mieux marcher que l option de la pharmacie parce qu il a été cueilli en forêt.'],
  ['Zoe refuses the tap water filter because it is a machine, even though the city warned about lead in the pipes.', 'Zoé refuse le filtre à eau du robinet parce que c est une machine, même si la ville a averti d un risque de plomb dans les tuyaux.'],
  ['Kai says the organic cereal is healthier because it sounds natural, even though it has more sugar than the regular one.', 'Kai dit que les céréales bio sont plus saines parce que cela semble naturel, même si elles contiennent plus de sucre que les autres.'],
  ['Nora says the new eco detergent is better because it is plant-based, ignoring that it fails to remove grease.', 'Nora dit que la nouvelle lessive écologique est meilleure parce qu elle est à base de plantes, en oubliant qu elle enlève mal la graisse.'],
  ['Eli says the stone face cream must be gentle because it is made from rocks and clay.', 'Eli dit que la crème pour le visage à base de pierre doit etre douce parce qu elle est faite de roches et d argile.'],
  ['Lina says the raw milk drink is safer because it is less processed, ignoring the health warning on the bottle.', 'Lina dit que la boisson au lait cru est plus sûre parce qu elle est moins transformée, en ignorant l avertissement sanitaire sur la bouteille.'],
  ['Grant says the natural pain balm is best because a friend found it in a farmer market booth.', 'Grant dit que le baume naturel contre la douleur est le meilleur parce qu un ami l a trouvé sur un stand de marché paysan.'],
  ['Tia says the bamboo toothbrush must clean better because bamboo grows in nature.', 'Tia dit que la brosse à dents en bambou doit mieux nettoyer parce que le bambou pousse dans la nature.'],
  ['Noah says the chemical-free candle is harmless, even though it fills the room with smoke.', 'Noah dit que la bougie sans produits chimiques est inoffensive, même si elle remplit la pièce de fumée.'],
  ['Mia says the all-natural snack is better for kids, ignoring that it is mostly salt and sugar.', 'Mia dit que la collation totalement naturelle est meilleure pour les enfants, en oubliant qu elle contient surtout du sel et du sucre.'],
  ['Jules says the wild mushroom soup is superior because the mushrooms were found outdoors.', 'Jules dit que la soupe aux champignons sauvages est supérieure parce que les champignons ont été trouvés dehors.'],
  ['Ava says the lab-made vitamin is useless because it is artificial, even though it is the one the doctor suggested.', 'Ava dit que la vitamine fabriquée en laboratoire ne sert à rien parce qu elle est artificielle, alors que c est celle recommandée par le médecin.'],
  ['Finn says the natural dye must be safer, forgetting that poison ivy is natural too.', 'Finn dit que le colorant naturel doit etre plus sûr, en oubliant que l herbe à puce est naturelle elle aussi.'],
  ['Mina says the fresh herbal tea is the only real cure because it came from leaves instead of a bottle.', 'Mina dit que le thé aux herbes fraîches est le seul vrai remede parce qu il vient de feuilles et non d une bouteille.'],
  ['Theo says the non-GMO snack is automatically cleaner, even though the factory is still dirty.', 'Theo dit que la collation sans OGM est automatiquement plus propre, même si l usine est toujours sale.'],
  ['Juno says the clay mask must be safer for skin because it came from the earth.', 'Juno dit que le masque à l argile doit etre plus sûr pour la peau parce qu il vient de la terre.'],
  ['Iris says the natural fertilizer is best, even though the plants burned after too much was used.', 'Iris dit que l engrais naturel est le meilleur, même si les plantes ont brûlé après en avoir trop utilisé.'],
  ['Cole says the handmade soap has to be healthier because a machine did not make it.', 'Cole dit que le savon artisanal doit etre plus sain parce qu une machine ne l a pas fabriqué.'],
  ['Riley says the fruit syrup is better for everyone because it sounds more wholesome.', 'Riley dit que le sirop de fruits est meilleur pour tout le monde parce qu il a l air plus sain.'],
  ['Pia says the natural supplement can replace dinner because it is plant-based.', 'Pia dit que le complément naturel peut remplacer le dîner parce qu il est à base de plantes.'],
  ['Hugo says the stone water bottle is safest because stone comes from nature.', 'Hugo dit que la bouteille d eau en pierre est la plus sûre parce que la pierre vient de la nature.'],
  ['Sam says the organic snack bar must boost energy more because it is labeled natural.', 'Sam dit que la barre bio doit donner plus d énergie parce qu elle est étiquetée naturelle.'],
  ['Jade says the herbal sleep spray is better than a real treatment because it is all natural.', 'Jade dit que le spray aux herbes pour dormir est meilleur qu un vrai traitement parce qu il est totalement naturel.'],
  ['Owen says the unprocessed diet is always healthier, even if it is unbalanced and missing protein.', 'Owen dit que le régime non transformé est toujours plus sain, même s il est déséquilibré et manque de protéines.'],
  ['Lea says the handmade lotion must be safer because it was made in a small batch.', 'Lea dit que la lotion faite à la main doit etre plus sûre parce qu elle a été fabriquée en petite quantité.'],
  ['Maya says the river water should be fine because it looks natural, ignoring the warning about runoff.', 'Maya dit que l eau de la rivière devrait aller parce qu elle semble naturelle, en ignorant l avertissement sur le ruissellement.'],
  ['Ben says the organic burger is healthier because the bun came from a farm label.', 'Ben dit que le burger bio est plus sain parce que le pain vient d une étiquette de ferme.'],
  ['Ava says the crystal bracelet must improve mood because crystals come from the earth.', 'Ava dit que le bracelet en cristal doit améliorer l humeur parce que les cristaux viennent de la terre.'],
  ['Omar says the natural shampoo is better because it smells like herbs.', 'Omar dit que le shampoing naturel est meilleur parce qu il sent les herbes.'],
  ['Nina says the grass-fed snack is automatically good, even though it is still junk food.', 'Nina dit que la collation nourrie à l herbe est automatiquement bonne, même si cela reste de la malbouffe.'],
  ['Eli says the palm-oil-free cookie is virtuous, so he eats three bags.', 'Eli dit que le biscuit sans huile de palme est vertueux, alors il mange trois sachets.'],
  ['Lina says the salt lamp should help sleep because it is a natural rock.', 'Lina dit que la lampe de sel devrait aider à dormir parce que c est une roche naturelle.'],
  ['Grant says the all-natural deodorant must be safer, ignoring that it does not control odor.', 'Grant dit que le déodorant entièrement naturel doit etre plus sûr, en ignorant qu il ne controle pas l odeur.'],
  ['Tia says the bottled spring water is better than filtered water because springs are natural.', 'Tia dit que l eau de source en bouteille est meilleure que l eau filtrée parce que les sources sont naturelles.'],
  ['Noah says the untreated wooden spoon is healthier for cooking than a metal one because it is natural.', 'Noah dit que la cuillère en bois non traitée est plus saine pour cuisiner qu une cuillère en métal parce qu elle est naturelle.'],
  ['Mia says the cave honey is superior because no factory touched it.', 'Mia dit que le miel de grotte est supérieur parce qu aucune usine n y a touché.'],
  ['Jules says the natural flavoring must be honest, even though it is still a processed ingredient.', 'Jules dit que l arôme naturel doit etre honnête, même si c est toujours un ingrédient transformé.'],
  ['Ava says the farm-raised herb tea cannot be bad because farmers grew it.', 'Ava dit que le thé aux herbes cultivées à la ferme ne peut pas etre mauvais parce que des agriculteurs l ont fait pousser.'],
  ['Finn says the dirt-based skincare trend is safer because dirt is from nature.', 'Finn dit que la tendance de soins à base de terre est plus sûre parce que la terre vient de la nature.'],
  ['Mina says the beet juice energy shot is healthier than coffee because it is natural.', 'Mina dit que le shoot d énergie au jus de betterave est plus sain que le café parce qu il est naturel.'],
  ['Theo says the untreated wool sweater must be better for everyone because sheep are natural.', 'Theo dit que le pull en laine non traitée doit etre meilleur pour tout le monde parce que les moutons sont naturels.'],
  ['Juno says the herbal pet shampoo is safest because it comes from plants, not a lab.', 'Juno dit que le shampoing pour animaux aux herbes est le plus sûr parce qu il vient de plantes et non d un laboratoire.'],
  ['Iris says the mountain spring lotion can cure dry hands because mountain springs sound pure.', 'Iris dit que la lotion de source de montagne peut soigner les mains sèches parce que les sources de montagne semblent pures.'],
  ['Cole says the natural food coloring is healthier, even though it still changes the dessert the same way.', 'Cole dit que le colorant alimentaire naturel est plus sain, même s il change le dessert de la meme façon.'],
  ['Riley says the berry powder must be better than medicine because berries grow outside.', 'Riley dit que la poudre de baies doit etre meilleure qu un médicament parce que les baies poussent dehors.'],
  ['Pia says the eco bar soap is safe for every skin type because it is made from plant oils.', 'Pia dit que le savon solide écologique est sûr pour tous les types de peau parce qu il est fait d huiles végétales.'],
  ['Hugo says the unrefined sugar is better than the regular one because it feels more natural.', 'Hugo dit que le sucre non raffiné est meilleur que le sucre normal parce qu il paraît plus naturel.'],
  ['Sam says the hay-based pillow must improve sleep because hay comes from a field.', 'Sam dit que l oreiller en foin doit améliorer le sommeil parce que le foin vient d un champ.'],
  ['Jade says the nature-based app theme makes the app healthier somehow, so she recommends it.', 'Jade dit que le thème naturel de l application la rend d une certaine façon plus saine, alors elle la recommande.'],
  ['Owen says the river-rock diffuser is better because no one can spell the ingredients.', 'Owen dit que le diffuseur en galets de rivière est meilleur parce que personne ne peut épeler les ingrédients.'],
  ['Sophie says the natural soap must be safest for everyone, even though some natural oils irritate her skin.', 'Sophie dit que le savon naturel doit être le plus sûr pour tout le monde, même si certaines huiles naturelles irritent sa peau.'],
  ['Liam says the herbal candy is healthy because herbs grow outside.', 'Liam dit que le bonbon aux herbes est sain parce que les herbes poussent dehors.'],
  ['Emma says the raw juice is better than breakfast because it is untouched by machines.', 'Emma dit que le jus cru est meilleur que le petit-déjeuner parce qu il n a pas été touché par des machines.'],
  ['Diego says the unfiltered stream water must be pure because it comes from the woods.', 'Diego dit que l eau du ruisseau non filtrée doit être pure parce qu elle vient de la forêt.'],
  ['Lily says the natural detergent is ideal because it sounds gentler, even though it barely cleans.', 'Lily dit que la lessive naturelle est idéale parce qu elle semble plus douce, même si elle nettoie à peine.'],
  ['Hassan says the plant-based candle is healthier because it smells like leaves.', 'Hassan dit que la bougie à base de plantes est plus saine parce qu elle sent les feuilles.'],
  ['Ruby says the natural face cream is always safer, even though it caused a rash last week.', 'Ruby dit que la crème pour le visage naturelle est toujours plus sûre, même si elle lui a donné une éruption la semaine dernière.'],
  ['Noah says the stone-made cup must be better because stone is from nature.', 'Noah dit que la tasse en pierre doit être meilleure parce que la pierre vient de la nature.'],
  ['Chloe says the homemade juice is good for every situation because it came from fruit.', 'Chloe dit que le jus maison est bon pour toutes les situations parce qu il vient des fruits.'],
  ['Yusuf says the natural shampoo is superior, ignoring that it leaves his hair greasy.', 'Yusuf dit que le shampoing naturel est supérieur, en ignorant qu il laisse ses cheveux gras.'],
  ['Maya says the forest mushroom snack must be healthy because it is from the wild.', 'Maya dit que la collation aux champignons de la forêt doit être saine parce qu elle vient de la nature sauvage.'],
  ['Lucas says the clay cup is safer for drinks because it was shaped from earth.', 'Lucas dit que la tasse en argile est plus sûre pour les boissons parce qu elle a été façonnée à partir de terre.'],
  ['Ari says the organic chips are automatically good, even though they are still salty and fried.', 'Ari dit que les chips bio sont automatiquement bonnes, même si elles restent salées et frites.'],
  ['Mina says the untreated wood table is better because it has not been "polluted" by varnish.', 'Mina dit que la table en bois non traitée est meilleure parce qu elle n a pas été "polluée" par du vernis.'],
  ['Owen says the herbal bath soak is the best option because it is natural and smells nice.', 'Owen dit que le bain aux herbes est la meilleure option parce qu il est naturel et sent bon.'],
  ['Zara says the farm fresh snack is safer because it came from a field, not a factory.', 'Zara dit que la collation fraîche de ferme est plus sûre parce qu elle vient d un champ et non d une usine.'],
  ['Ben says the natural sweetener is healthier, even though it spikes his energy the same way sugar does.', 'Ben dit que l édulcorant naturel est plus sain, même s il fait monter son énergie comme le sucre.'],
  ['Nora says the bamboo plate must be better because bamboo grows quickly in nature.', 'Nora dit que l assiette en bambou doit être meilleure parce que le bambou pousse vite dans la nature.'],
  ['Eli says the organic snack is more virtuous because it has a leaf on the package.', 'Eli dit que la collation bio est plus vertueuse parce qu elle a une feuille sur l emballage.'],
  ['Pia says the herbal ointment is the right choice because it feels old-fashioned and natural.', 'Pia dit que la pommade aux herbes est le bon choix parce qu elle semble ancienne et naturelle.'],
  ['Theo says the fresh spring water must be healthier than food because water is natural.', 'Theo dit que l eau de source fraîche doit être plus saine que la nourriture parce que l eau est naturelle.'],
  ['Juno says the homemade lotion is always safer, ignoring that it uses a harsh essential oil.', 'Juno dit que la lotion maison est toujours plus sûre, en ignorant qu elle utilise une huile essentielle agressive.'],
  ['Iris says the garden-grown tea is better than medicine because gardens are wholesome.', 'Iris dit que le thé cultivé au jardin est meilleur qu un médicament parce que les jardins sont sains.'],
  ['Cole says the raw snack bar is automatically good because it is less processed.', 'Cole dit que la barre crue est automatiquement bonne parce qu elle est moins transformée.'],
  ['Riley says the natural dye is the safer choice, even though it stains everything in sight.', 'Riley dit que la teinture naturelle est le choix le plus sûr, même si elle tache tout ce qu elle touche.'],
  ['Pia says the tree bark remedy is better because it came from nature instead of a bottle.', 'Pia dit que le remède à base d écorce d arbre est meilleur parce qu il vient de la nature et non d une bouteille.'],
  ['Hugo says the all-natural snack is healthier because it feels more honest than the packaged one.', 'Hugo dit que la collation entièrement naturelle est plus saine parce qu elle paraît plus honnête que celle emballée.'],
  ['Sam says the homemade cleaner is best because a lab did not make it.', 'Sam dit que le nettoyant maison est le meilleur parce qu un laboratoire ne l a pas fabriqué.'],
  ['Jade says the natural protein powder is safer because it came from plants.', 'Jade dit que la poudre protéinée naturelle est plus sûre parce qu elle vient des plantes.'],
  ['Maya says the raw cookie dough is fine because it has fewer ingredients and feels natural.', 'Maya dit que la pâte à biscuits crue est correcte parce qu elle contient moins d ingrédients et semble naturelle.'],
  ['Ben says the eco shampoo is better because it is derived from herbs, not chemistry.', 'Ben dit que le shampoing écologique est meilleur parce qu il vient des herbes et non de la chimie.'],
  ['Ava says the mountain spring soap must be pure because the spring is natural.', 'Ava dit que le savon de source de montagne doit être pur parce que la source est naturelle.'],
  ['Omar says the wild berry drink is the healthiest choice because berries grow in the wild.', 'Omar dit que la boisson aux baies sauvages est le choix le plus sain parce que les baies poussent à l état sauvage.'],
  ['Nina says the unrefined salt is better because it looks more like the earth.', 'Nina dit que le sel non raffiné est meilleur parce qu il ressemble davantage à la terre.'],
  ['Eli says the plant-based spray is safer for kids, even though it still irritates his nose.', 'Eli dit que le spray à base de plantes est plus sûr pour les enfants, même s il lui irrite encore le nez.'],
  ['Lina says the natural mascara is superior because it came from bees and flowers.', 'Lina dit que le mascara naturel est supérieur parce qu il vient des abeilles et des fleurs.'],
  ['Grant says the untreated wooden bowl is healthier because wood is from nature.', 'Grant dit que le bol en bois non traité est plus sain parce que le bois vient de la nature.'],
  ['Tia says the herbal energy drink is the best because it sounds less artificial.', 'Tia dit que la boisson énergisante aux herbes est la meilleure parce qu elle semble moins artificielle.'],
  ['Finn says the natural toothpaste must be better because it is made from leaves and clay.', 'Finn dit que le dentifrice naturel doit être meilleur parce qu il est fait de feuilles et d argile.'],
  ['Mina says the fruit snack is healthy enough to replace lunch because fruit is natural.', 'Mina dit que la collation aux fruits est assez saine pour remplacer le déjeuner parce que les fruits sont naturels.'],
  ['Theo says the spring-fed water bottle is safe because springs are pure by definition.', 'Theo dit que la bouteille d eau de source est sûre parce que les sources sont pures par définition.'],
  ['Juno says the herbal lotion is always the right choice because it is less processed.', 'Juno dit que la lotion aux herbes est toujours le bon choix parce qu elle est moins transformée.'],
  ['Iris says the nature-themed vitamin is more effective because it feels closer to the body.', 'Iris dit que la vitamine sur le thème de la nature est plus efficace parce qu elle semble plus proche du corps.'],
  ['Cole says the natural soap bar must be the best because it comes from a small farm.', 'Cole dit que le savon naturel doit être le meilleur parce qu il vient d une petite ferme.'],
  ['Riley says the raw honey snack is automatically good because it is straight from the hive.', 'Riley dit que la collation au miel cru est automatiquement bonne parce qu elle vient directement de la ruche.'],
];

const OPTIONS_EN = ['Naturalistic Fallacy', 'Appeal to Nature', 'False Dilemma', 'Begging the Question'];
const OPTIONS_FR = ['Sophisme naturaliste', 'Appel à la nature', 'Faux dilemme', 'Pétition de principe'];

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
      id: 43701 + index,
      level: 2,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Sophisme naturaliste' : 'Naturalistic Fallacy',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'Le fait qu une chose soit naturelle ne prouve pas qu elle est bonne, saine ou sûre.'
        : 'Something being natural does not prove that it is good, healthy, or safe.',
      detailedExplanationBeginner: isFrench
        ? 'Naturel n est pas automatiquement synonyme de meilleur.'
        : 'Natural does not automatically mean better.',
      detailedExplanationIntermediate: isFrench
        ? 'Le sophisme apparaît quand on traite "naturel" comme une preuve de valeur, sans regarder les risques, les preuves ou le contexte.'
        : 'The fallacy appears when someone treats "natural" as proof of value without checking the risks, evidence, or context.',
      detailedExplanationExpert: isFrench
        ? 'Le sophisme naturaliste confond une description avec une conclusion normative. Ce n est pas parce qu une chose vient de la nature, est peu transformee ou semble traditionnelle qu elle est automatiquement preferable. Pour juger correctement, il faut comparer l efficacité, la securite et les effets reels, pas seulement l origine.'
        : 'The naturalistic fallacy confuses a description with a normative conclusion. A thing is not automatically preferable just because it comes from nature, is less processed, or feels traditional. To judge it properly, compare effectiveness, safety, and actual outcomes, not just its origin.',
      questionFormat: 'standard',
    };
  });
}

export const NATURALISTIC_FALLACY_EXPANSION_EN: Question[] = createQuestions('en');
export const NATURALISTIC_FALLACY_EXPANSION_FR: Question[] = createQuestions('fr');
