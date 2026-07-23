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
