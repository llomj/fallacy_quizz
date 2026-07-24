import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya buys the ugly mug because the sign says there is only one left.', 'Maya achete la tasse moche parce que le panneau dit qu il n en reste qu une.'],
  ['Leo wants the snack because the label says "limited edition" even though he did not want it before.', 'Leo veut le snack parce que l etiquette dit « edition limitee », meme s il n en voulait pas avant.'],
  ['Priya assumes the concert must be good because the tickets are nearly sold out.', 'Priya suppose que le concert doit etre bon parce que les billets sont presque epuises.'],
  ['Omar decides the hotel room is valuable because there are only two rooms left.', 'Omar decide que la chambre d hotel est precieuse parce qu il ne reste que deux chambres.'],
  ['Rina feels drawn to the lamp because the store says the discount ends tonight.', 'Rina est attiree par la lampe parce que le magasin dit que la reduction finit ce soir.'],
  ['Ben thinks the class is lucky to have the last open seat, so he signs up fast.', 'Ben pense que la classe a de la chance d avoir la derniere place libre, alors il s inscrit vite.'],
  ['Zoe wants the coffee blend because the bag says the harvest was small this year.', 'Zoé veut le melange de cafe parce que le sac dit que la recolte etait petite cette annee.'],
  ['Kai buys the jacket because the shop says the color will not come back.', 'Kai achete la veste parce que la boutique dit que la couleur ne reviendra pas.'],
  ['Nora thinks the old phone is worth more because the seller says it is the last one in stock.', 'Nora pense que l ancien telephone vaut plus parce que le vendeur dit que c est le dernier en stock.'],
  ['Eli is convinced the gym class is special because the free trial has only one spot left.', 'Eli est convaincu que le cours de sport est special parce que l essai gratuit n a plus qu une place.'],
  ['Lina assumes the shoes are better because they are part of a one-day sale.', 'Lina suppose que les chaussures sont meilleures parce qu elles font partie d une vente d un jour.'],
  ['Grant buys extra batteries because the website warns the stock is running out.', 'Grant achete des piles supplementaires parce que le site avertit que le stock s epuise.'],
  ['Tia believes the workshop is more important because the registration closes in two hours.', 'Tia croit que l atelier est plus important parce que l inscription ferme dans deux heures.'],
  ['Noah wants the toy more because the box says "while supplies last".', 'Noah veut davantage le jouet parce que la boite dit « jusqu à epuisement des stocks ».'],
  ['Mia assumes the dessert is amazing because the cafe only baked a few today.', 'Mia suppose que le dessert est incroyable parce que le cafe n en a cuit que quelques-uns aujourd hui.'],
  ['Jules thinks the seat upgrade is worth it because the airline says there are just three left.', 'Jules pense que la mise à niveau du siege vaut le coup parce que la compagnie dit qu il n en reste que trois.'],
  ['Ava feels pressured to buy the planner because the shelf tag says "final chance".', 'Ava se sent poussee à acheter l agenda parce que l etiquette du rayon dit « derniere chance ».'],
  ['Finn believes the perfume must be luxurious because the store keeps it behind glass.', 'Finn croit que le parfum doit etre luxueux parce que le magasin le garde derriere une vitre.'],
  ['Mina thinks the special class is better because it fills up in minutes.', 'Mina pense que le cours special est meilleur parce qu il se remplit en quelques minutes.'],
  ['Theo buys the phone case because the app says the style is almost gone.', 'Theo achete la coque de telephone parce que l application dit que le style est presque epuisé.'],
  ['Juno says the food truck must be excellent because there is always a long line.', 'Juno dit que le food truck doit etre excellent parce qu il y a toujours une longue file.'],
  ['Iris wants the notebook because the store says the print run is tiny.', 'Iris veut le carnet parce que le magasin dit que le tirage est minuscule.'],
  ['Cole thinks the class trip is exciting because the seats are scarce.', 'Cole pense que la sortie scolaire est excitante parce que les places sont rares.'],
  ['Riley buys the water bottle because the website says the design will disappear after midnight.', 'Riley achete la bouteille d eau parce que le site dit que le design disparaîtra apres minuit.'],
  ['Pia believes the restaurant is amazing because it is hard to get a reservation.', 'Pia croit que le restaurant est incroyable parce qu il est difficile d obtenir une reservation.'],
  ['Hugo assumes the old game console is valuable because collectors want the last batch.', 'Hugo suppose que l ancienne console de jeu est precieuse parce que les collectionneurs veulent le dernier lot.'],
  ['Sam wants the jacket more when the clerk says the color is being discontinued.', 'Sam veut davantage la veste quand la vendeuse dit que la couleur est arretee.'],
  ['Jade thinks the art print is great because only ten were made.', 'Jade pense que l impression d art est excellente parce que seulement dix ont ete fabriquees.'],
  ['Owen feels the coffee mug is more meaningful because it is the final one from the shelf.', 'Owen sent que la tasse a cafe est plus significative parce que c est la derniere sur l etagere.'],
  ['Lea decides the class note pack is special because there is a countdown timer.', 'Léa decide que le pack de notes est special parce qu il y a un compte à rebours.'],
  ['Maya buys the sweater because the app shows "3 people viewing this item".', 'Maya achete le pull parce que l application affiche « 3 personnes consultent cet article ».'],
  ['Ben thinks the event must be important because the RSVP list is almost full.', 'Ben pense que l evenement doit etre important parce que la liste de reponse est presque complete.'],
  ['Ava assumes the lip balm is superior because the display is nearly empty.', 'Ava suppose que le baume à levres est superieur parce que le presentoir est presque vide.'],
  ['Omar wants the phone charger because the sale page says the deal is ending soon.', 'Omar veut le chargeur de telephone parce que la page de vente dit que l offre se termine bientot.'],
  ['Nina thinks the theater show is better because there are only front-row seats left.', 'Nina pense que le spectacle de theatre est meilleur parce qu il ne reste que des places au premier rang.'],
  ['Eli buys the candle because the label says the scent is seasonal.', 'Eli achete la bougie parce que l etiquette dit que le parfum est saisonnier.'],
  ['Lina thinks the store is trustworthy because the sample shelf is nearly gone.', 'Lina pense que le magasin est digne de confiance parce que l etagere d echantillons est presque vide.'],
  ['Grant wants the hoodie because the website shows the last medium size.', 'Grant veut le sweat à capuche parce que le site montre la derniere taille M.'],
  ['Tia assumes the game expansion is worth buying because preorders are closing fast.', 'Tia suppose que l extension de jeu vaut la peine d etre achetee parce que les precommandes ferment vite.'],
  ['Finn thinks the bakery special is superior because it sells out every morning.', 'Finn pense que la specialite de la boulangerie est superieure parce qu elle se vend chaque matin.'],
  ['Mina wants the desk lamp because the store says the model is in its final production run.', 'Mina veut la lampe de bureau parce que le magasin dit que le modele est dans sa derniere serie de production.'],
  ['Theo believes the course is excellent because scholarships are limited.', 'Theo croit que le cours est excellent parce que les bourses sont limitees.'],
  ['Juno buys the notebook because the box says it will not be restocked.', 'Juno achete le carnet parce que la boite dit qu il ne sera pas reapprovisionne.'],
  ['Iris thinks the car accessory is high quality because there are only a few left at the booth.', 'Iris pense que l accessoire de voiture est de haute qualite parce qu il n en reste que quelques-uns au stand.'],
  ['Cole feels the museum pass is a must-have because early-bird tickets are almost gone.', 'Cole sent que le pass musee est indispensable parce que les billets « premiere heure » sont presque partis.'],
  ['Riley wants the board game because the store says the family edition is scarce.', 'Riley veut le jeu de societe parce que le magasin dit que l edition famille est rare.'],
  ['Pia thinks the bracelet is special because the artisan made a short run.', 'Pia pense que le bracelet est special parce que l artisan a fait une petite serie.'],
  ['Hugo buys the travel pillow because the offer page says only a few travelers still qualify.', 'Hugo achete l oreiller de voyage parce que la page d offre dit que seuls quelques voyageurs sont encore eligibles.'],
  ['Sam wants the keyboard because the page says the last batch shipped this week.', 'Sam veut le clavier parce que la page dit que le dernier lot a ete expedie cette semaine.'],
  ['Jade thinks the poster is valuable because the shop says it will be removed tonight.', 'Jade pense que l affiche est precieuse parce que la boutique dit qu elle sera retiree ce soir.'],
  ['Maya buys the tea because the seller says the flavor is limited to this season.', 'Maya achete le the parce que le vendeur dit que la saveur est limitee à cette saison.'],
];

const OPTIONS_EN = ['Scarcity Effect', 'Reactance', 'Bandwagon', 'Sunk Cost Fallacy'];
const OPTIONS_FR = ['Effet de rareté', 'Réactance', 'Effet de mode', 'Sophisme du coût irrécupérable'];

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
      id: 40501 + index,
      level: 3,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Effet de rareté' : 'Scarcity Effect',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'Quelque chose parait plus desirable simplement parce qu il est rare ou semble sur le point de manquer.'
        : 'Something seems more desirable simply because it is rare or about to run out.',
      detailedExplanationBeginner: isFrench
        ? 'Rare ne veut pas dire meilleur.'
        : 'Rare does not automatically mean better.',
      detailedExplanationIntermediate: isFrench
        ? "L effet de rarete pousse à accorder plus de valeur à un objet, une place ou une offre quand sa disponibilite baisse, meme si sa qualite ne change pas."
        : 'The scarcity effect makes people assign more value to an item, seat, or offer when availability drops, even if the quality stays the same.',
      detailedExplanationExpert: isFrench
        ? "Ce biais utilise l urgence perçue comme raccourci mental: si quelque chose semble difficile a obtenir, on suppose plus facilement qu il est plus utile, plus beau ou plus important. Pour le corriger, il faut separer la valeur reelle de la pression temporelle ou de la rarete artificielle."
        : 'This bias uses perceived urgency as a mental shortcut: if something seems hard to get, we more easily assume it is more useful, better, or more important. To correct it, separate real value from time pressure or artificial scarcity.',
      questionFormat: 'standard',
    };
  });
}

export const SCARCITY_EFFECT_EXPANSION_EN: Question[] = createQuestions('en');
export const SCARCITY_EFFECT_EXPANSION_FR: Question[] = createQuestions('fr');
