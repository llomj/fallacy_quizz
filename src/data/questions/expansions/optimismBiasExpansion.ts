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
  ['Zoe assumes the laundromat will be empty when she arrives because it usually works out that way for her.', 'Zoé suppose que la laverie sera vide quand elle arrivera parce que cela se passe généralement comme ça pour elle.'],
  ['Kai believes the road closure will not affect him because he "always finds a way through."', 'Kai croit que la fermeture de route ne le touchera pas parce qu il "trouve toujours un passage".'],
  ['Nora expects the cake to bake perfectly on the first try because she has a good feeling about it.', 'Nora s attend à ce que le gâteau soit parfait du premier coup parce qu elle a un bon pressentiment.'],
  ['Eli thinks the package will arrive early because shipping has been decent lately.', 'Eli pense que le colis arrivera en avance parce que l expédition a été correcte ces derniers temps.'],
  ['Lina assumes the group presentation will be painless because everybody seemed calm during the planning meeting.', 'Lina suppose que la présentation de groupe sera sans douleur parce que tout le monde semblait calme pendant la réunion de préparation.'],
  ['Grant expects the train delay to disappear by the time he gets to the station.', 'Grant s attend à ce que le retard du train disparaisse d ici son arrivée à la gare.'],
  ['Tia tells herself the dentist will barely find anything because her teeth looked fine last time.', 'Tia se dit que le dentiste ne trouvera presque rien parce que ses dents semblaient très bien la dernière fois.'],
  ['Noah assumes the repair bill will be small because the noise only started yesterday.', 'Noah suppose que la facture de réparation sera petite parce que le bruit n a commencé qu hier.'],
  ['Mia believes the apartment search will be quick because "something good always turns up."', 'Mia croit que la recherche d appartement sera rapide parce que "quelque chose de bien finit toujours par apparaître".'],
  ['Jules expects the online form to work on the first try because the site looked modern.', 'Jules s attend à ce que le formulaire en ligne fonctionne du premier coup parce que le site avait l air moderne.'],
  ['Ava thinks the rain will stop right before the outdoor game starts.', 'Ava pense que la pluie s arrêtera juste avant le début du match en plein air.'],
  ['Finn assumes the family road trip will be easy because the first hour felt smooth.', 'Finn suppose que le voyage en voiture en famille sera facile parce que la première heure s est bien passée.'],
  ['Mina expects the printer to cooperate because it worked once this morning.', 'Mina s attend à ce que l imprimante coopère parce qu elle a fonctionné une fois ce matin.'],
  ['Theo believes the big homework packet will not take long because the instructions look simple.', 'Théo croit que le gros dossier de devoirs ne prendra pas longtemps parce que les consignes semblent simples.'],
  ['Juno assumes the picnic will stay pleasant because the sky is still clear right now.', 'Juno suppose que le pique-nique restera agréable parce que le ciel est encore dégagé pour le moment.'],
  ['Iris thinks the parent-teacher meeting will be short because nobody seems upset today.', 'Iris pense que la rencontre parents-professeurs sera courte parce que personne ne semble contrarié aujourd hui.'],
  ['Cole believes the store will restock his size before he checks again.', 'Cole croit que le magasin réapprovisionnera sa taille avant qu il ne revienne vérifier.'],
  ['Riley expects the broken app feature to fix itself after a restart.', 'Riley s attend à ce que la fonction cassée de l application se répare d elle-même après un redémarrage.'],
  ['Pia assumes the group chat argument will settle down without anyone stepping in.', 'Pia suppose que la dispute du groupe se calmera sans que personne n intervienne.'],
  ['Hugo thinks the weekend project will only take an hour because it looks small from far away.', 'Hugo pense que le projet du week-end ne prendra qu une heure parce qu il paraît petit de loin.'],
  ['Sam believes the road trip snack budget will be enough because they are "not that hungry usually."', 'Sam croit que le budget snacks du trajet suffira parce qu ils "n ont pas si faim d habitude".'],
  ['Jade expects the camping tent to set up quickly because the package was light.', 'Jade s attend à ce que la tente de camping se monte vite parce que le colis était léger.'],
  ['Owen assumes the homework will be easy because the teacher said it would be "manageable."', 'Owen suppose que les devoirs seront faciles parce que le professeur a dit qu ils seraient "gérables".'],
  ['Lea thinks the phone battery will last all day because it was at 80 percent an hour ago.', 'Léa pense que la batterie du téléphone tiendra toute la journée parce qu elle était à 80 pour cent il y a une heure.'],
  ['Maya expects the grocery run to be quick because she knows the aisles well.', 'Maya s attend à ce que les courses soient rapides parce qu elle connaît bien les allées.'],
  ['Ben assumes the new hobby will become effortless after one good session.', 'Ben suppose que le nouveau loisir deviendra sans effort après une seule bonne séance.'],
  ['Ava believes the group chat reminder will get everyone there on time.', 'Ava croit qu un rappel dans le groupe amènera tout le monde à l heure.'],
  ['Omar thinks the laptop update will not cause trouble because the popup said it was recommended.', 'Omar pense que la mise à jour de l ordinateur ne causera pas de problème parce que la fenêtre pop-up disait qu elle était recommandée.'],
  ['Nina assumes the parking spot will appear right at the front if she circles once more.', 'Nina suppose qu une place de parking apparaîtra juste devant si elle fait encore un tour.'],
  ['Eli believes the job interview will go well because he answered one practice question nicely.', 'Eli croit que l entretien d embauche se passera bien parce qu il a bien répondu à une question d entraînement.'],
  ['Lina thinks the family dinner will stay calm because it started calmly.', 'Lina pense que le dîner de famille restera calme parce qu il a commencé calmement.'],
  ['Grant assumes the bills will somehow balance out after a few weeks of being careful.', 'Grant suppose que les factures finiront par s équilibrer après quelques semaines de prudence.'],
  ['Tia expects the presentation clicker to work because it worked in a different room earlier.', 'Tia s attend à ce que la télécommande de présentation marche parce qu elle marchait dans une autre salle plus tôt.'],
  ['Finn believes the beach day will be perfect because the first forecast looked great.', 'Finn croit que la journée à la plage sera parfaite parce que la première météo avait l air excellente.'],
  ['Mina assumes the car will not need gas yet because the last trip was short.', 'Mina suppose que la voiture n aura pas encore besoin d essence parce que le dernier trajet était court.'],
  ['Theo thinks the dishes will wash themselves later if he leaves them long enough.', 'Théo pense que la vaisselle se lavera d elle-même plus tard s il la laisse assez longtemps.'],
  ['Juno expects the houseguest to arrive exactly when she finishes cleaning.', 'Juno s attend à ce que l invité arrive exactement au moment où elle finit de nettoyer.'],
  ['Iris assumes the school supplies will last because she bought extra pencils.', 'Iris suppose que les fournitures scolaires dureront parce qu elle a acheté des crayons en plus.'],
  ['Cole believes the neighborhood event will end on schedule because the first speaker was on time.', 'Cole croit que l événement du quartier se terminera à l heure parce que le premier intervenant était à l heure.'],
  ['Riley thinks the software bug is minor because the screen only froze once.', 'Riley pense que le bug du logiciel est mineur parce que l écran n a gelé qu une fois.'],
  ['Pia assumes the coffee shop line will shrink the moment she joins it.', 'Pia suppose que la file du café rétrécira au moment où elle la rejoindra.'],
  ['Hugo believes the babysitter will handle bedtime perfectly because she seemed confident.', 'Hugo croit que la baby-sitter gèrera parfaitement le coucher parce qu elle avait l air confiante.'],
  ['Sam expects the neighborhood meeting to end early because people are "usually efficient."', 'Sam s attend à ce que la réunion du quartier se termine tôt parce que les gens sont "généralement efficaces".'],
  ['Jade thinks the museum visit will be quick because the building looks small from outside.', 'Jade pense que la visite du musée sera rapide parce que le bâtiment paraît petit de l extérieur.'],
  ['Owen assumes the phone call will answer itself by the time he is free.', 'Owen suppose que l appel se résoudra tout seul d ici qu il soit libre.'],
  ['Lea believes the family chore list will disappear after one productive morning.', 'Léa croit que la liste des corvées de famille disparaîtra après une matinée productive.'],
  ['Maya expects the road to clear because traffic often looks better right after a light change.', 'Maya s attend à ce que la route se dégage parce que la circulation a souvent meilleure allure juste après un changement de feu.'],
  ['Ben assumes the cake cooling on the counter will be ready to frost almost immediately.', 'Ben suppose que le gâteau qui refroidit sur le comptoir sera prêt à glacer presque immédiatement.'],
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
