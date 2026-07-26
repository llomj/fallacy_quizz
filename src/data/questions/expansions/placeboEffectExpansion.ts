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
  ['Zoe feels less pain after a sugar pill and credits the pill instead of her expectations.', 'Zoé ressent moins de douleur après une pilule de sucre et attribue cela à la pilule au lieu de ses attentes.'],
  ['Kai says a dummy wellness patch helped because he noticed the pain after putting it on.', 'Kai dit qu un faux patch bien-être a aidé parce qu il a remarqué moins de douleur après l avoir mis.'],
  ['Nora swears her fake allergy drops work because her sneezing eased by lunch.', 'Nora jure que ses fausses gouttes contre les allergies marchent parce que ses éternuements se sont calmés avant le déjeuner.'],
  ['Eli thinks the "healing" bracelet is powerful because his headache faded while he relaxed.', 'Eli pense que le bracelet "guérison" est puissant parce que son mal de tête a disparu pendant qu il se reposait.'],
  ['Lina says a placebo spray improved her back because the soreness changed after she used it.', 'Lina dit qu un faux spray a amélioré son dos parce que la douleur a changé après utilisation.'],
  ['Grant believes the fake energy tablet worked because he felt more awake in the afternoon.', 'Grant croit que la fausse tablette d énergie a marché parce qu il se sentait plus réveillé dans l après-midi.'],
  ['Tia says the dummy sleep aid fixed her insomnia because she dozed off sooner.', 'Tia dit que le faux somnifère a réglé son insomnie parce qu elle s est endormie plus vite.'],
  ['Noah says the inactive pill cured his stomach because the cramps eased after dinner.', 'Noah dit que la pilule inactive a guéri son estomac parce que les crampes se sont calmées après le dîner.'],
  ['Mia credits a fake pain cream for helping her wrist because the ache dropped after she rubbed it on.', 'Mia attribue à une fausse crème antidouleur l amélioration de son poignet parce que la douleur a baissé après l avoir appliquée.'],
  ['Jules thinks a placebo lozenge improved his throat because talking felt easier later.', 'Jules pense qu un faux bonbon a amélioré sa gorge parce que parler semblait plus facile ensuite.'],
  ['Ava says a dummy recovery patch worked because her leg felt lighter after she rested.', 'Ava dit qu un faux patch de récupération a marché parce que sa jambe semblait plus légère après le repos.'],
  ['Finn believes the fake focus gummy helped because he finished his reading session.', 'Finn croit que le faux bonbon de concentration a aidé parce qu il a terminé sa séance de lecture.'],
  ['Mina says the harmless tonic lowered her stress because she was calmer by the end of the day.', 'Mina dit que le tonique inoffensif a réduit son stress parce qu elle était plus calme à la fin de la journée.'],
  ['Theo thinks the pretend migraine roller works because the pain changed after he used it.', 'Théo pense que le faux rouleau contre la migraine marche parce que la douleur a changé après utilisation.'],
  ['Juno says the placebo gum helped her focus because she got through her homework.', 'Juno dit que le chewing-gum placebo l a aidée à se concentrer parce qu elle a fini ses devoirs.'],
  ['Iris believes the fake joint support band helped because her knee bothered her less that evening.', 'Iris croit que le faux bracelet de soutien articulaire a aidé parce que son genou la gênait moins ce soir-là.'],
  ['Cole says the sugar pill improved his energy because the afternoon slump felt smaller.', 'Cole dit que la pilule de sucre a amélioré son énergie parce que la baisse de l après-midi semblait moins forte.'],
  ['Riley credits a dummy sore-throat syrup for his recovery because he felt better after resting.', 'Riley attribue à un faux sirop contre le mal de gorge son rétablissement parce qu il se sentait mieux après s être reposé.'],
  ['Pia says the placebo patch eased her back because the pain was gone by bedtime.', 'Pia dit que le faux patch a soulagé son dos parce que la douleur avait disparu au coucher.'],
  ['Hugo thinks the fake stomach remedy worked because his lunch settled after a while.', 'Hugo pense que le faux remède pour l estomac a marché parce que son déjeuner s est calmé au bout d un moment.'],
  ['Sam says the inactive treatment must be effective because he slept through the night.', 'Sam dit que le traitement inactif doit être efficace parce qu il a dormi toute la nuit.'],
  ['Jade believes the fake recovery wrap helped because her ankle felt better after a walk.', 'Jade croit que la fausse bande de récupération a aidé parce que sa cheville allait mieux après une marche.'],
  ['Owen says the harmless tablet kept him alert because he made it through the meeting.', 'Owen dit que le comprimé inoffensif l a gardé alerte parce qu il a tenu pendant la réunion.'],
  ['Lea says the placebo drink improved her mood because she laughed more later.', 'Léa dit que la boisson placebo a amélioré son humeur parce qu elle a davantage ri ensuite.'],
  ['Maya credits the fake relief stone for her calm because the test ended without panic.', 'Maya attribue au faux caillou de soulagement son calme parce que l examen s est terminé sans panique.'],
  ['Ben says the no-ingredient spray worked because his confidence went up.', 'Ben dit que le spray sans ingrédient a marché parce que sa confiance a augmenté.'],
  ['Ava says the placebo wristband helped her because she finished the workout.', 'Ava dit que le bracelet placebo l a aidée parce qu elle a terminé l entraînement.'],
  ['Omar thinks the fake health pill worked because he felt normal after dinner.', 'Omar pense que la fausse pilule santé a marché parce qu il se sentait normal après le dîner.'],
  ['Nina believes the dummy pill reduced her nausea because the queasiness passed by lunchtime.', 'Nina croit que la pilule factice a réduit ses nausées parce que le malaise est passé avant midi.'],
  ['Eli says a fake energy shot helped because he cleaned the kitchen afterward.', 'Eli dit qu un faux shot d énergie a aidé parce qu il a nettoyé la cuisine ensuite.'],
  ['Lina credits a placebo gel for her wrist because she could type more comfortably later.', 'Lina attribue à un faux gel le confort de son poignet parce qu elle pouvait taper plus confortablement plus tard.'],
  ['Grant says the inactive lozenge worked because his voice sounded clearer after a break.', 'Grant dit que le bonbon inactif a marché parce que sa voix semblait plus claire après une pause.'],
  ['Tia says the fake stress patch helped because her shoulders relaxed by the afternoon.', 'Tia dit que le faux patch anti-stress a aidé parce que ses épaules se sont détendues dans l après-midi.'],
  ['Finn thinks the placebo tonic improved his mood because the workday felt easier.', 'Finn pense que le tonique placebo a amélioré son humeur parce que la journée de travail semblait plus facile.'],
  ['Mina says the dummy sleep spray worked because she stayed asleep longer.', 'Mina dit que le faux spray de sommeil a marché parce qu elle est restée endormie plus longtemps.'],
  ['Theo says the fake anti-pain cream is effective because he felt looser after using it.', 'Théo dit que la fausse crème antidouleur est efficace parce qu il se sentait plus souple après l avoir utilisée.'],
  ['Juno says the placebo gum fixed her focus because the report got finished.', 'Juno dit que le chewing-gum placebo a corrigé sa concentration parce que le rapport a été terminé.'],
  ['Iris says the harmless tablet helped her because the headache faded after a nap.', 'Iris dit que le comprimé inoffensif l a aidée parce que le mal de tête a disparu après une sieste.'],
  ['Cole says the fake recovery wrap must work because the ankle improved by evening.', 'Cole dit que la fausse bande de récupération doit marcher parce que la cheville allait mieux le soir.'],
  ['Riley says the placebo syrup helped his stomach because the discomfort eased later.', 'Riley dit que le faux sirop a aidé son estomac parce que l inconfort s est calmé plus tard.'],
  ['Pia says the inactive pill reduced her tension because she felt more relaxed after class.', 'Pia dit que la pilule inactive a réduit sa tension parce qu elle se sentait plus détendue après le cours.'],
  ['Hugo says the dummy supplement helped because the training felt smoother after it.', 'Hugo dit que le faux complément a aidé parce que l entraînement semblait plus fluide après.'],
  ['Zoe says the sugar pill helped her because her stomach settled after she sat quietly.', 'Zoé dit que la pilule de sucre l a aidée parce que son estomac s est calmé après qu elle se soit assise tranquillement.'],
  ['Kai says the fake cooling gel worked because his knee felt better after resting.', 'Kai dit que le faux gel rafraîchissant a marché parce que son genou allait mieux après le repos.'],
  ['Nora says the dummy allergy pill helped because her sneezing eased by lunch.', 'Nora dit que la fausse pilule contre les allergies l a aidée parce que ses éternuements se sont calmés avant le déjeuner.'],
  ['Eli says the placebo patch fixed his shoulder because the ache dropped after dinner.', 'Eli dit que le faux patch a réglé son épaule parce que la douleur a baissé après le dîner.'],
  ['Lina says the harmless tonic improved her energy because she felt less tired later.', 'Lina dit que le tonique inoffensif a amélioré son énergie parce qu elle se sentait moins fatiguée ensuite.'],
  ['Grant says the pretend calming tea worked because his nerves settled after the meeting.', 'Grant dit que le faux thé calmant a marché parce que ses nerfs se sont apaisés après la réunion.'],
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
