import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya feels better after taking a sugar pill because she expected it to work.', 'Maya se sent mieux après avoir pris une pilule de sucre parce qu elle s attendait à ce qu elle agisse.'],
  ['Leo says the new headache tablets are amazing, even though they are just the same vitamins in a different bottle.', 'Leo dit que les nouveaux comprimés contre le mal de tête sont incroyables, alors que ce sont juste les mêmes vitamines dans un autre flacon.'],
  ['Priya starts sleeping better after buying an expensive pillow and assumes the pillow must be the reason.', 'Priya dort mieux après avoir acheté un oreiller cher et suppose que l oreiller doit en être la raison.'],
  ['Omar feels less stressed after wearing a bracelet he was told would help.', 'Omar se sent moins stressé après avoir porté un bracelet qu on lui avait dit utile.'],
  ['Rina drinks "focus tea" before studying and thinks it makes her smarter right away.', 'Rina boit un "thé concentration" avant de réviser et pense qu il la rend plus intelligente sur-le-champ.'],
  ['Ben uses a fake pain patch and insists the soreness fades because the patch is "strong."', 'Ben utilise un faux patch antidouleur et insiste pour dire que la douleur diminue parce que le patch est "puissant".'],
  ['Zoe feels more energetic after changing to a new water bottle and credits the bottle itself.', 'Zoé se sent plus énergique après avoir changé de gourde et attribue cela à la gourde elle-même.'],
  ['Kai takes a placebo from a fitness app challenge and says it fixed his motivation.', 'Kai prend un placebo d un défi d application de fitness et dit que cela a réparé sa motivation.'],
  ['Nora thinks her cough improves after a warm drink she believes is medicine.', 'Nora pense que sa toux s améliore après une boisson chaude qu elle croit être un médicament.'],
  ['Eli buys an "anti-jet lag" sock and feels the trip will be easier because of it.', 'Eli achète une chaussette "anti-jet lag" et sent que le voyage sera plus facile grâce à elle.'],
  ['Lina gets a fake allergy tablet and says it works because her nose clears up.', 'Lina prend un faux comprimé contre les allergies et dit qu il marche parce que son nez se débouche.'],
  ['Grant feels less nervous after a mock stress test and assumes the dummy procedure helped.', 'Grant se sent moins nerveux après un faux test de stress et suppose que la procédure factice l a aidé.'],
  ['Tia rubs on a scented cream and says her wrist pain is gone because the cream was special.', 'Tia applique une crème parfumée et dit que sa douleur au poignet a disparu parce que la crème était spéciale.'],
  ['Noah drinks plain water from a "detox" bottle and feels healthier because the label promised it.', 'Noah boit de l eau ordinaire dans une bouteille "détox" et se sent en meilleure santé parce que l étiquette le promettait.'],
  ['Mia takes a fake sleep aid and notices she falls asleep faster simply because she expects relief.', 'Mia prend un faux somnifère et remarque qu elle s endort plus vite simplement parce qu elle s attend à être soulagée.'],
  ['Jules uses a "calm stone" in his pocket and says it works whenever he gets anxious.', 'Jules garde une "pierre calme" dans sa poche et dit qu elle marche dès qu il devient anxieux.'],
  ['Ava changes her desk lamp and believes the new light cured her eye strain.', 'Ava change sa lampe de bureau et croit que la nouvelle lumière a guéri sa fatigue visuelle.'],
  ['Finn takes a tablet that contains no active ingredient and later says his cold is gone.', 'Finn prend un comprimé sans ingrédient actif et dit plus tard que son rhume a disparu.'],
  ['Mina wears "performance socks" to a walk and decides they made the walk easier.', 'Mina porte des "chaussettes de performance" pour une balade et décide qu elles ont rendu la marche plus facile.'],
  ['Theo tries a fake energy shot and feels alert because he expected a boost.', 'Théo essaye un faux shot d énergie et se sent alerte parce qu il attendait un coup de fouet.'],
  ['Juno takes a candy labeled as medicine and reports that her stomach feels better.', 'Juno prend un bonbon présenté comme médicament et dit que son estomac se sent mieux.'],
  ['Iris puts on a "joint support" band and says her knee hurts less immediately.', 'Iris met un bracelet "soutien articulaire" et dit que son genou fait moins mal tout de suite.'],
  ['Cole uses a fake anti-snoring spray and declares it solved the problem overnight.', 'Cole utilise un faux spray anti-ronflement et déclare que le problème est réglé du jour au lendemain.'],
  ['Riley drinks a warm mug of water and thinks it is a special recovery drink.', 'Riley boit une tasse d eau chaude et pense que c est une boisson spéciale de récupération.'],
  ['Pia gets a tiny improvement after a harmless treatment and credits the treatment completely.', 'Pia constate une petite amélioration après un traitement inoffensif et attribue tout le mérite au traitement.'],
  ['Hugo puts on a "focus" hat before work and says it helps him concentrate.', 'Hugo met un chapeau "concentration" avant le travail et dit qu il l aide à se concentrer.'],
  ['Sam uses a fake throat lozenge and says his voice is suddenly clearer.', 'Sam utilise un faux bonbon pour la gorge et dit que sa voix est soudain plus claire.'],
  ['Jade feels calmer after sitting in a special chair she was told was therapeutic.', 'Jade se sent plus calme après s être assise dans une chaise spéciale qu on lui a présentée comme thérapeutique.'],
  ['Owen believes a mock supplement works because his training session felt good afterward.', 'Owen croit qu un faux complément agit parce que sa séance d entraînement s est bien passée après coup.'],
  ['Lea drinks "sleep water" and assumes the ritual itself made her tired.', 'Léa boit de "l eau du sommeil" et suppose que le rituel lui-même l a rendue fatiguée.'],
  ['Maya is sure a fake nausea pill helped because her stomach settled while she rested.', 'Maya est sure qu une fausse pilule contre les nausées a aidé parce que son estomac s est calmé pendant qu elle se reposait.'],
  ['Ben says a placebo patch fixed his back because the pain eased after he put it on.', 'Ben dit qu un faux patch a réglé son dos parce que la douleur a diminué après l avoir posé.'],
  ['Ava uses a no-ingredient spray before a meeting and feels more confident.', 'Ava utilise un spray sans ingrédient avant une réunion et se sent plus confiante.'],
  ['Omar thinks a "brain boost" lozenge improved his memory after he finished studying.', 'Omar pense qu un bonbon "boost cérébral" a amélioré sa mémoire après qu il a fini de réviser.'],
  ['Nina takes part in a blind trial and reports a benefit from the inactive treatment.', 'Nina participe à un essai en aveugle et signale un bénéfice du traitement inactif.'],
  ['Eli wears a warm scarf and thinks it prevented the cold he expected.', 'Eli porte une écharpe chaude et pense qu elle a empêché le rhume qu il craignait.'],
  ['Lina uses a fake migraine roller and says the pain easing proves it works.', 'Lina utilise un faux rouleau contre la migraine et dit que l apaisement de la douleur prouve que ça marche.'],
  ['Grant tastes a harmless tonic and says it must be helping because it feels different.', 'Grant goûte un tonique inoffensif et dit qu il doit aider parce que cela semble différent.'],
  ['Tia holds a "relief stone" during a test and feels the anxiety fade.', 'Tia tient une "pierre de soulagement" pendant un examen et sent son anxiété diminuer.'],
  ['Finn buys placebo gum and says it fixes his focus for the afternoon.', 'Finn achète un chewing-gum placebo et dit qu il règle son attention pour l après-midi.'],
  ['Mina uses a fake sore-throat syrup and thinks the improvement came from the syrup.', 'Mina prend un faux sirop contre le mal de gorge et pense que l amélioration vient du sirop.'],
  ['Theo taps a "focus ring" and says it helped him finish the report.', 'Théo touche une "bague concentration" et dit que cela l a aidé à terminer le rapport.'],
  ['Juno takes a harmless pill before a workout and believes it gives her more stamina.', 'Juno prend une pilule inoffensive avant une séance et croit qu elle lui donne plus d endurance.'],
  ['Iris uses a placebo spray on her wrist and says the swelling went down because of it.', 'Iris utilise un faux spray sur son poignet et dit que le gonflement a baissé grâce à lui.'],
  ['Cole drinks "muscle water" and credits it when he feels less tired later.', 'Cole boit de "l eau musculaire" et lui attribue le fait qu il se sente moins fatigué ensuite.'],
  ['Riley wears a fake recovery wrap and insists his ankle healed faster because of the wrap.', 'Riley porte une fausse bande de récupération et insiste pour dire que sa cheville a guéri plus vite grâce à elle.'],
  ['Pia takes a dummy allergy drop and says it proves the treatment is effective.', 'Pia prend une goutte placebo pour les allergies et dit que cela prouve que le traitement est efficace.'],
  ['Hugo uses a pretend pain cream and feels relief after resting, so he praises the cream.', 'Hugo utilise une crème antidouleur fictive et ressent un soulagement après s être reposé, alors il encense la crème.'],
  ['Sam gets a fake stomach remedy and says his lunch went down better.', 'Sam prend un faux remède pour l estomac et dit que son déjeuner est mieux passé.'],
  ['Jade takes a harmless tablet before a long drive and believes it keeps her alert.', 'Jade prend un comprimé inoffensif avant un long trajet et croit qu il la garde alerte.'],
  ['Maya wears a placebo wristband to bed and says she slept deeply because of it.', 'Maya porte un bracelet placebo pour dormir et dit qu elle a dormi profondément grâce à lui.'],
  ['Ben tries a fake recovery drink and is convinced it speeds up his afternoon energy.', 'Ben essaye une fausse boisson de récupération et est convaincu qu elle accélère son énergie de l après-midi.'],
];

const OPTIONS_EN = ['Placebo Effect', 'Nocebo Effect', 'Suggestion Bias', 'Confirmation Bias'];
const OPTIONS_FR = ['Effet placebo', 'Effet nocebo', 'Biais de suggestion', 'Biais de confirmation'];

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
    const correctIndex = index % 4;
    const isFrench = language === 'fr';
    return {
      id: 37551 + index,
      level: 5,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? 'Effet placebo' : 'Placebo Effect',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'Un traitement inactif semble fonctionner parce que la personne s attend à un effet.'
        : 'An inactive treatment seems to work because the person expects it to help.',
      detailedExplanationBeginner: isFrench
        ? 'L attente produit l impression de guérison.'
        : 'Expectation creates the feeling of improvement.',
      detailedExplanationIntermediate: isFrench
        ? "L effet placebo apparaît quand une amélioration perçue vient surtout de l attente, du contexte ou du rituel, et non d un ingrédient actif."
        : 'The placebo effect appears when a perceived improvement comes mainly from expectation, context, or ritual rather than an active ingredient.',
      detailedExplanationExpert: isFrench
        ? "L effet placebo montre que le cerveau peut modifier la douleur, l anxiété, la fatigue ou la perception des symptômes quand la personne croit qu un traitement agit. Cela ne veut pas dire que tout est imaginaire; cela veut dire que l attente peut amplifier ou réduire la sensation ressentie, ce qui complique l evaluation d un remede ou d un essai clinique."
        : 'The placebo effect shows that the brain can change pain, anxiety, fatigue, or symptom perception when a person believes a treatment is working. That does not mean the experience is imaginary; it means expectation can amplify or reduce what is felt, which makes treatment evaluation and clinical trials more complicated.',
      questionFormat: 'standard',
    };
  });
}

export const PLACEBO_EFFECT_EXPANSION_EN: Question[] = createQuestions('en');
export const PLACEBO_EFFECT_EXPANSION_FR: Question[] = createQuestions('fr');
