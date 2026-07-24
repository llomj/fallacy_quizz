import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya skips checking the weather because she is sure the picnic will stay sunny all afternoon.', 'Maya ne verifie pas la météo parce qu elle est sure que le pique-nique restera ensoleillé toute l après-midi.'],
  ['Leo leaves for the airport late, convinced the traffic will magically be lighter than usual.', 'Leo part tard pour l aéroport, convaincu que la circulation sera miraculeusement plus légère que d habitude.'],
  ['Priya has one week to study but keeps saying the exam will feel easy on the day of the test.', 'Priya a une semaine pour réviser mais répète que l examen lui semblera facile le jour J.'],
  ['Omar ignores the warning about a slow app launch because he assumes his own phone will be fine.', 'Omar ignore l avertissement sur un démarrage lent de l application parce qu il suppose que son propre téléphone ira très bien.'],
  ['Rina books a short layover and says missing the connection is basically impossible.', 'Rina réserve une correspondance très courte et dit que rater le vol suivant est pratiquement impossible.'],
  ['Ben promises to clean his room after dinner, certain he will still feel energetic at 10 p.m.', 'Ben promet de ranger sa chambre après le dîner, certain qu il aura encore de l énergie à 22 h.'],
  ['Zoe expects her group project partner to do the hard part because "it usually works out somehow."', 'Zoé s attend à ce que son coéquipier fasse la partie difficile parce que "ça finit toujours par s arranger d une façon ou d une autre".'],
  ['Kai buys a cheap bike and assumes it will never need repairs because he is "pretty lucky with purchases."', 'Kai achète un vélo bon marché et suppose qu il n aura jamais besoin de réparations parce qu il est "plutôt chanceux avec ses achats".'],
  ['Nora puts off saving for rent and says next month will be easier.', 'Nora remet l épargne pour le loyer et dit que le mois prochain sera plus facile.'],
  ['Eli decides not to bring an umbrella because the rain forecast "always misses him."', 'Eli décide de ne pas prendre de parapluie parce que la pluie annoncée "le rate toujours".'],
  ['Lina signs up for three clubs and says the schedule will definitely not feel too full.', 'Lina s inscrit à trois clubs et dit que son emploi du temps ne sera certainement pas trop chargé.'],
  ['Grant assumes the moving boxes will pack themselves quickly, so he leaves everything for the night before.', 'Grant suppose que les cartons de déménagement se feront vite tout seuls, alors il laisse tout pour la veille.'],
  ['Tia tells herself the train will arrive on time even though it is late every morning this week.', 'Tia se dit que le train arrivera à l heure même s il a été en retard chaque matin cette semaine.'],
  ['Noah expects the pizza order to be perfect because "delivery usually goes fine for us."', 'Noah s attend à ce que la commande de pizza soit parfaite parce que "la livraison se passe généralement bien pour nous".'],
  ['Mia assumes the new job will feel easy after the first day and ignores the onboarding notes.', 'Mia suppose que le nouveau travail sera facile après le premier jour et ignore les notes d intégration.'],
  ['Jules says the marathon will be no problem because he has been walking more lately.', 'Jules dit que le marathon ne posera aucun problème parce qu il marche plus souvent ces derniers temps.'],
  ['Ava trusts that she will finish the essay in one sitting because she "works well under pressure."', 'Ava fait confiance au fait qu elle terminera la dissertation d une traite parce qu elle "travaille bien sous pression".'],
  ['Finn does not back up his laptop files because he thinks nothing bad will happen before tomorrow.', 'Finn ne sauvegarde pas ses fichiers d ordinateur parce qu il pense que rien de grave ne se produira avant demain.'],
  ['Mina assumes the new recipe will turn out fine without a practice run.', 'Mina suppose que la nouvelle recette réussira très bien sans essai préalable.'],
  ['Theo books a very tight dinner reservation after a meeting and says he will definitely get there in time.', 'Théo réserve un dîner très serré après une réunion et dit qu il arrivera forcément à l heure.'],
  ['Juno buys only one present and expects a last-minute idea for the second gift to appear.', 'Juno n achète qu un seul cadeau et s attend à ce qu une idée de dernière minute pour le second lui vienne.'],
  ['Iris assumes the loud neighborhood party will end before it gets annoying.', 'Iris suppose que la fête bruyante du quartier s arrêtera avant de devenir agaçante.'],
  ['Cole tells himself the interview will go smoothly because he has "a good feeling about it."', 'Cole se dit que l entretien se passera bien parce qu il a "un bon pressentiment".'],
  ['Riley thinks the group assignment will be easy because nobody has complained yet.', 'Riley pense que le travail de groupe sera facile parce que personne ne s est encore plaint.'],
  ['Pia spends her whole paycheck and assumes the next one will cover the overspending.', 'Pia dépense tout son salaire et suppose que le prochain couvrira les excès.'],
  ['Hugo leaves the cake unfrosted until the morning of the party, sure the decoration will not take long.', 'Hugo laisse le gâteau sans glaçage jusqu au matin de la fête, sûr que la décoration ne prendra pas longtemps.'],
  ['Sam does not read the directions for the new grill because he believes the first attempt will be enough.', 'Sam ne lit pas le mode d emploi du nouveau barbecue parce qu il croit que le premier essai suffira.'],
  ['Jade agrees to lead the game night and expects everyone else to solve the rules as they go.', 'Jade accepte d animer la soirée jeu et s attend à ce que les autres comprennent les règles au fur et à mesure.'],
  ['Owen skips the backup plan for the road trip because he is convinced the car will behave.', 'Owen saute le plan de secours pour le voyage parce qu il est convaincu que la voiture se comportera bien.'],
  ['Lea thinks she can finish shopping after work, even though the store closes early on Fridays.', 'Léa pense pouvoir faire les courses après le travail, même si le magasin ferme tôt le vendredi.'],
  ['Maya is sure the dentist visit will be quick because previous visits were not too bad.', 'Maya est sure que la visite chez le dentiste sera rapide parce que les visites précédentes n étaient pas si mauvaises.'],
  ['Ben assumes the homework will be short because the teacher said it "should not be too hard."', 'Ben suppose que les devoirs seront courts parce que le professeur a dit que "ça ne devrait pas être trop difficile".'],
  ['Ava believes the concert will still feel magical even if she arrives after the opening act.', 'Ava croit que le concert restera magique même si elle arrive après la première partie.'],
  ['Omar tells himself the online sale will still have his size when he checks later.', 'Omar se dit que la vente en ligne aura encore sa taille quand il regardera plus tard.'],
  ['Nina assumes the app update will not create any problems because "updates usually improve things."', 'Nina suppose que la mise à jour de l application ne créera aucun problème parce que "les mises à jour améliorent généralement les choses".'],
  ['Eli believes the budget will balance itself after a few small cuts.', 'Eli croit que le budget s équilibrera de lui-même après quelques petites coupes.'],
  ['Lina expects the weather to hold long enough for an outdoor birthday photo shoot.', 'Lina s attend à ce que le temps tienne assez longtemps pour une séance photo d anniversaire en plein air.'],
  ['Grant trusts that the landlord will answer his message before the deadline even though the office is usually slow.', 'Grant fait confiance au fait que le propriétaire répondra à son message avant la date limite même si le bureau est habituellement lent.'],
  ['Tia assumes the presentation will stay within time because she "usually talks fast when needed."', 'Tia suppose que sa présentation restera dans le temps imparti parce qu elle "parle généralement vite quand il faut".'],
  ['Finn expects the bike lane to stay empty and easy even during rush hour.', 'Finn s attend à ce que la piste cyclable reste vide et facile même aux heures de pointe.'],
  ['Mina assumes the group chat reminder will be enough to get everyone to bring snacks.', 'Mina suppose qu un rappel dans le groupe suffira pour que tout le monde apporte des snacks.'],
  ['Theo thinks the repair will only cost a little because the broken part looks small.', 'Théo pense que la réparation coûtera peu parce que la pièce cassée semble petite.'],
  ['Juno delays practicing the speech and says she will "just wing it" successfully.', 'Juno remet la préparation du discours à plus tard et dit qu elle réussira "en improvisant".'],
  ['Iris assumes the picnic blanket will not get dirty because the grass looks dry.', 'Iris suppose que la couverture de pique-nique ne se salira pas parce que l herbe a l air sèche.'],
  ['Cole ignores the warning about parking because he believes a spot will open right in front of the store.', 'Cole ignore l avertissement sur le stationnement parce qu il croit qu une place va s ouvrir juste devant le magasin.'],
  ['Riley tells his teammates the final quiz will be simple because "the teacher wants us to pass."', 'Riley dit à ses coéquipiers que le test final sera simple parce que "le professeur veut qu on réussisse".'],
  ['Pia thinks she can write the whole paper after dinner and still get to bed early.', 'Pia pense pouvoir rédiger tout le devoir après le dîner et quand même se coucher tôt.'],
  ['Hugo expects the crowded store to clear out the moment he arrives.', 'Hugo s attend à ce que le magasin bondé se vide au moment où il arrive.'],
  ['Sam assumes the camping trip will be comfortable because "weather reports can be dramatic."', 'Sam suppose que le camping sera confortable parce que "les bulletins météo dramatisent souvent".'],
  ['Jade believes the houseplant will survive her vacation without any watering help.', 'Jade croit que la plante d intérieur survivra à ses vacances sans aide pour l arroser.'],
  ['Maya thinks the neighborhood cleanup will finish early because everyone seems motivated now.', 'Maya pense que le nettoyage du quartier se terminera tôt parce que tout le monde semble motivé pour le moment.'],
  ['Ben assumes the customer service chat will resolve his issue on the first try.', 'Ben suppose que le chat du service client réglera son problème du premier coup.'],
];

const OPTIONS_EN = ['Optimism Bias', 'Pessimism Bias', 'Wishful Thinking', 'Planning Fallacy'];
const OPTIONS_FR = ["Biais d'optimisme", 'Biais de négativité', 'Pensée magique', 'Erreur de planification'];

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
      id: 37351 + index,
      level: 5,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? "Biais d'optimisme" : 'Optimism Bias',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La personne s attend trop à un résultat favorable et sous-estime les problèmes possibles.'
        : 'The person expects a favorable outcome too easily and underestimates possible problems.',
      detailedExplanationBeginner: isFrench
        ? 'L espoir remplace ici une estimation réaliste.'
        : 'Hope is replacing a realistic estimate here.',
      detailedExplanationIntermediate: isFrench
        ? "Le biais d'optimisme pousse à croire que les choses iront mieux que prévu, même quand les indices suggèrent qu il faudrait préparer un plan plus prudent."
        : 'Optimism bias pushes someone to believe things will go better than expected, even when the signs suggest a more cautious plan is needed.',
      detailedExplanationExpert: isFrench
        ? "Ce biais survient quand une personne surestime la probabilité de résultats favorables pour elle-meme et sous-estime les retards, les couts, les risques ou la fatigue. Il est utile pour garder l'élan, mais il devient un problème quand il remplace la préparation, la vérification et le plan de secours."
        : 'This bias happens when a person overestimates the chance of favorable outcomes for themselves and underestimates delays, costs, risks, or fatigue. It can help maintain momentum, but it becomes a problem when it replaces preparation, checking, and backup planning.',
      questionFormat: 'standard',
    };
  });
}

export const OPTIMISM_BIAS_EXPANSION_EN: Question[] = createQuestions('en');
export const OPTIMISM_BIAS_EXPANSION_FR: Question[] = createQuestions('fr');
