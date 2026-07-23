import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says the new schedule must be either perfect or terrible, so she picks a middle time even though the middle still clashes with lunch.', 'Maya dit que le nouvel horaire doit être soit parfait soit terrible, alors elle choisit une heure moyenne même si ce milieu tombe encore pendant le déjeuner.'],
  ['Leo insists the answer has to be somewhere between yes and no, so he settles on maybe without checking the facts.', 'Leo insiste pour dire que la réponse doit être quelque part entre oui et non, alors il choisit peut-être sans vérifier les faits.'],
  ['Nina says one friend loves the movie and another hates it, so the movie must be average.', 'Nina dit qu une amie adore le film et qu une autre le déteste, donc le film doit être moyen.'],
  ['Owen thinks if one person says the plan is too strict and another says it is too loose, the safe choice is the middle one.', 'Owen pense que si une personne dit que le plan est trop strict et qu une autre dit qu il est trop laxiste, le choix sûr est celui du milieu.'],
  ['Priya says the coffee cannot be very hot or very cold, so lukewarm must always be best.', 'Priya dit que le café ne peut pas être très chaud ni très froid, donc tiède doit toujours être le meilleur choix.'],
  ['Ben says the class rule should be halfway between no homework and homework every night.', 'Ben dit que la règle de classe devrait être à mi-chemin entre zéro devoir et des devoirs tous les soirs.'],
  ['Tara claims the restaurant must be fair if one review loves it and one review hates it.', 'Tara affirme que le restaurant doit être correct si un avis l adore et qu un autre le déteste.'],
  ['Kai thinks the truth about the app must be between “best ever” and “total scam.”', 'Kai pense que la vérité sur l application doit être entre « la meilleure de tous les temps » et « l arnaque totale ».'],
  ['Jules says if one neighbor wants silence and another wants parties, the only reasonable answer is moderate noise at all times.', 'Jules dit que si un voisin veut le silence et qu un autre veut des fêtes, la seule réponse raisonnable est un bruit modéré tout le temps.'],
  ['Ava says the book cannot be brilliant or awful, so it must land in the middle.', 'Ava dit que le livre ne peut pas être génial ni horrible, donc il doit se situer au milieu.'],
  ['Noah argues the new rule should be neither fast nor slow, but exactly average, even if timing is the real issue.', 'Noah soutient que la nouvelle règle ne devrait être ni rapide ni lente, mais exactement moyenne, même si le vrai problème est le timing.'],
  ['Mina says the answer to the school debate must be halfway between both sides no matter what the evidence says.', 'Mina dit que la réponse au débat scolaire doit être à mi-chemin entre les deux camps quoi que disent les preuves.'],
  ['Eli treats a gentle suggestion and a harsh complaint as proof the best policy is splitting the difference.', 'Eli traite une suggestion douce et une plainte virulente comme la preuve que la meilleure politique est de couper la poire en deux.'],
  ['Rina says the speaker on the left and the speaker on the right must both be partly correct, so the truth must be in the center.', 'Rina dit que l orateur de gauche et l orateur de droite doivent être partiellement corrects, donc la vérité doit se trouver au centre.'],
  ['Hugo decides the thermostat should stay midway because one roommate is cold and the other is hot.', 'Hugo décide que le thermostat doit rester au milieu parce qu un colocataire a froid et que l autre a chaud.'],
  ['Lina says the meeting proposal must be a compromise even if the compromise still breaks the deadline.', 'Lina dit que la proposition de réunion doit être un compromis même si ce compromis fait quand même rater la date limite.'],
  ['Grant says the fruit is either too sweet or not sweet enough, so the ideal fruit must be in between.', 'Grant dit que le fruit est soit trop sucré soit pas assez sucré, donc le fruit idéal doit être entre les deux.'],
  ['Zoe says the work trip cannot be all business or all fun, so the answer is to split every activity in half.', 'Zoe dit que le voyage de travail ne peut être ni entièrement professionnel ni entièrement amusant, donc la solution est de diviser chaque activité en deux.'],
  ['Milo says the policy should be “half strict, half relaxed” without explaining what that means.', 'Milo dit que la politique devrait être « à moitié stricte, à moitié souple » sans expliquer ce que cela veut dire.'],
  ['Theo says the movie cannot be a masterpiece or a disaster, so the reasonable score is always five out of ten.', 'Theo dit que le film ne peut être ni un chef-d œuvre ni un désastre, donc la note raisonnable est toujours cinq sur dix.'],
  ['Pia says the city is either too loud or too quiet, so she supports a rule that keeps it at a middle level all day.', 'Pia dit que la ville est soit trop bruyante soit trop calme, donc elle soutient une règle qui la maintient à un niveau moyen toute la journée.'],
  ['Finn says the price must be between expensive and cheap, so he ignores whether it is actually fair.', 'Finn dit que le prix doit être entre cher et bon marché, donc il ignore s il est réellement juste.'],
  ['Maya says if one kid wants more recess and another wants less, then the school should choose the exact middle regardless of safety.', 'Maya dit que si un enfant veut plus de récréation et un autre moins, l école devrait choisir exactement le milieu quelle que soit la sécurité.'],
  ['Sam says the answer is probably halfway because the two opinions sound equally loud.', 'Sam dit que la réponse est probablement à mi-chemin parce que les deux opinions ont un volume égal.'],
  ['Juno says the app feature must be neither on nor off, but some compromise setting in the middle.', 'Juno dit que la fonction de l application ne peut être ni activée ni désactivée, mais doit avoir un réglage intermédiaire.'],
  ['Iris says the recipe must use half the sugar because one person likes very sweet desserts and another likes none.', 'Iris dit que la recette doit utiliser la moitié du sucre parce qu une personne aime les desserts très sucrés et une autre n en veut pas.'],
  ['Cole says the bus route should be a middle route even if that adds an extra hour.', 'Cole dit que l itinéraire du bus devrait être intermédiaire même si cela ajoute une heure.'],
  ['Nora says the new phone can only be judged by averaging one fan and one hater.', 'Nora dit que le nouveau téléphone ne peut être jugé qu en faisant la moyenne d un fan et d un détracteur.'],
  ['Ari says the weather report must be in the middle if one source predicts rain and another predicts sun.', 'Ari dit que le bulletin météo doit être au milieu si une source annonce de la pluie et qu une autre annonce du soleil.'],
  ['Rita says a good compromise between a broken chair and a luxury chair is a chair that is still broken.', 'Rita dit qu un bon compromis entre une chaise cassée et une chaise de luxe est une chaise qui reste cassée.'],
  ['Tia says the answer to the argument is always somewhere between both positions, even if one is clearly unsupported.', 'Tia dit que la réponse au débat se trouve toujours quelque part entre les deux positions, même si l une n est clairement pas soutenue.'],
  ['Oli says the truth about the cafe must be between “worst in town” and “best in town.”', 'Oli dit que la vérité sur le café doit être entre « le pire de la ville » et « le meilleur de la ville ».'],
  ['Lara says the doctor should recommend a middle dose just because one patient wants more and another wants less.', 'Lara dit que le médecin devrait recommander une dose moyenne simplement parce qu un patient veut plus et un autre moins.'],
  ['Ben says the test cannot be too hard or too easy, so the best test is always the middle difficulty.', 'Ben dit que le test ne peut être ni trop dur ni trop facile, donc le meilleur test est toujours de difficulté moyenne.'],
  ['Mina says the two neighbors disagree, so their compromise proposal must be the truth.', 'Mina dit que les deux voisins sont en désaccord, donc leur proposition de compromis doit être la vérité.'],
  ['Drew says the article is balanced because it mentions both strong evidence and weak evidence.', 'Drew dit que l article est équilibré parce qu il mentionne à la fois des preuves solides et des preuves faibles.'],
  ['Jade says the best vacation is a mix of relaxing and exciting, so every activity should be half of each.', 'Jade dit que les meilleures vacances sont un mélange de détente et d excitation, donc chaque activité devrait être moitié de chaque.'],
  ['Owen says the room temperature must be split right down the middle because one person is sweating and another is shivering.', 'Owen dit que la température de la pièce doit être coupée exactement en deux parce qu une personne transpire et qu une autre grelotte.'],
  ['Mila says the budget choice is middle-of-the-road, even though the cheaper option is enough.', 'Mila dit que le choix budgétaire doit être moyen, même si l option moins chère suffit.'],
  ['Evan says the policy should land between “allow everything” and “ban everything,” no matter the details.', 'Evan dit que la politique devrait se situer entre « tout autoriser » et « tout interdire », quels que soient les détails.'],
  ['Kira says the club rule should be the midpoint between two extreme suggestions, even if one suggestion is nonsense.', 'Kira dit que la règle du club devrait être le point médian entre deux propositions extrêmes, même si l une est absurde.'],
  ['Grant says the science claim must be average because one person on each side is arguing loudly.', 'Grant dit que l affirmation scientifique doit être moyenne parce qu une personne de chaque côté parle fort.'],
  ['Zara says a compromise between a lie and the truth is probably close enough.', 'Zara dit qu un compromis entre un mensonge et la vérité est probablement assez proche.'],
  ['Parker says the best answer is always the middle, even when the middle ignores the actual numbers.', 'Parker dit que la meilleure réponse est toujours le milieu, même quand le milieu ignore les chiffres réels.'],
  ['Hana says if one side wants a tiny change and the other wants a huge change, the sensible answer is an average change.', 'Hana dit que si un camp veut un petit changement et l autre un grand changement, la réponse sensée est un changement moyen.'],
  ['Leo says the dinner menu should be exactly halfway between healthy and indulgent choices.', 'Leo dit que le menu du dîner devrait être exactement à mi-chemin entre des choix sains et gourmands.'],
  ['Maya says the plan must be moderate because the two complaints sound equally strong.', 'Maya dit que le plan doit être modéré parce que les deux plaintes semblent aussi fortes.'],
  ['Nina says the answer to the report should be a compromise, even though one side has the data.', 'Nina dit que la réponse au rapport devrait être un compromis, même si un camp a les données.'],
];

const OPTIONS_EN = ['Middle Ground Fallacy', 'False Dilemma', 'False Balance', 'Appeal to Moderation'];
const OPTIONS_FR = ['Sophisme du juste milieu', 'Fausse dichotomie', 'Faux équilibre', 'Appel à la modération'];

function rotatedOptions(options: string[], correctIndex: number): string[] {
  const distractors = options.slice(1);
  const result = [...distractors];
  result.splice(correctIndex, 0, options[0]);
  return result;
}

function subLevelFor(index: number): SubLevel {
  if (index < 43) return SubLevel.BEGINNER;
  if (index < 50) return SubLevel.INTERMEDIATE;
  return SubLevel.EXPERT;
}

function createQuestions(language: 'en' | 'fr'): Question[] {
  return SCENARIOS.map(([english, french], index) => {
    const correctIndex = index % 4;
    const isFrench = language === 'fr';
    return {
      id: 38901 + index,
      level: 2,
      persona_stage: PersonaStage.SHRIMP,
      concept: isFrench ? 'Sophisme du juste milieu' : 'Middle Ground Fallacy',
      difficulty: index < 43 ? 1 : index < 50 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? "Le raisonnement suppose que la solution correcte se trouve automatiquement au milieu entre deux positions opposées."
        : 'The reasoning assumes the correct solution must automatically sit in the middle between two opposing positions.',
      detailedExplanationBeginner: isFrench
        ? "Le milieu n est pas toujours la bonne réponse."
        : 'The middle is not always the right answer.',
      detailedExplanationIntermediate: isFrench
        ? "Le sophisme du juste milieu confond compromis et vérité, même quand un camp a plus de preuves."
        : 'The middle ground fallacy confuses compromise with truth, even when one side has more evidence.',
      detailedExplanationExpert: isFrench
        ? "Ce biais de symétrie donne une valeur égale à des positions inégales, et transforme une opposition en moyenne artificielle au lieu d évaluer les raisons."
        : 'This symmetry bias gives equal value to unequal positions and turns disagreement into an artificial average instead of evaluating the reasons.',
      questionFormat: 'standard',
    };
  });
}

export const MIDDLE_GROUND_FALLACY_EXPANSION_EN: Question[] = createQuestions('en');
export const MIDDLE_GROUND_FALLACY_EXPANSION_FR: Question[] = createQuestions('fr');
