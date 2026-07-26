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
  ["Nora wants the headphones because the website says only four pairs are left.", "Nora veut les ecouteurs parce que le site dit qu il ne reste que quatre paires."],
  ["Eli buys the lamp because the store puts a giant red banner on it that says almost gone.", "Eli achete la lampe parce que le magasin y met une grande banderole rouge disant presque epuisé."],
  ["Lina thinks the notebook is special because the last box on the shelf looks empty.", "Lina pense que le carnet est special parce que la derniere boite sur l etagere semble vide."],
  ["Grant wants the jacket because the app says the size will not be restocked.", "Grant veut la veste parce que l application dit que la taille ne sera pas reapprovisionnee."],
  ["Tia feels rushed to buy the seat upgrade because the countdown clock is almost finished.", "Tia se sent poussee a acheter la mise a niveau du siege parce que le compte a rebours est presque termine."],
  ["Noah assumes the snack must be better because the shelf tag says it is the last flavor pack.", "Noah suppose que l en-cas doit etre meilleur parce que l etiquette du rayon dit que c est le dernier paquet de la saveur."],
  ["Mia buys the mug because the shop says the design was only printed once.", "Mia achete la tasse parce que la boutique dit que le motif n a ete imprime qu une seule fois."],
  ["Ava wants the planner because the page says the sale ends in two hours.", "Ava veut l agenda parce que la page dit que la vente se termine dans deux heures."],
  ["Finn decides the class must be good because there are only two spots left.", "Finn decide que le cours doit etre bon parce qu il ne reste que deux places."],
  ["Mina trusts the perfume because the display says it is the final bottle.", "Mina fait confiance au parfum parce que l exposition dit que c est le dernier flacon."],
  ["Theo buys the pen because the checkout screen says the stock is almost gone.", "Theo achete le stylo parce que l ecran de paiement dit que le stock est presque epuisé."],
  ["Juno thinks the game bundle is irresistible because the timer is about to hit zero.", "Juno pense que le lot de jeux est irresistible parce que le minuteur va bientot atteindre zero."],
  ["Iris feels the cookbook is worth it because the page says only a few copies remain.", "Iris sent que le livre de cuisine en vaut la peine parce que la page dit qu il ne reste que quelques exemplaires."],
  ["Cole wants the chair because the store says the sale is ending and the color is rare.", "Cole veut la chaise parce que le magasin dit que la vente se termine et que la couleur est rare."],
  ["Riley buys the water filter because the site says the deal is for today only.", "Riley achete le filtre a eau parce que le site dit que l offre est reservee a aujourd hui."],
  ["Pia thinks the workshop matters more because there is a waiting list.", "Pia pense que l atelier compte davantage parce qu il y a une liste d attente."],
  ["Hugo wants the hoodie because the store says it is the final size medium.", "Hugo veut le sweat parce que la boutique dit que c est la derniere taille M."],
  ["Sam assumes the candle smells better because the label says it is a seasonal batch.", "Sam suppose que la bougie sent meilleur parce que l etiquette dit que c est une serie saisonniere."],
  ["Jade rushes to buy the headphones because three people in the app are viewing them right now.", "Jade se precipite pour acheter les ecouteurs parce que trois personnes dans l application les regardent en ce moment."],
  ["Owen thinks the museum pass is special because early access tickets are almost gone.", "Owen pense que le pass musee est special parce que les billets d acces anticipe sont presque partis."],
  ["Lea buys the art print because the artist says only a tiny run was made.", "Lea achete l impression d art parce que l artiste dit qu une tres petite serie a ete faite."],
  ["Maya wants the phone charger because the promotion says limited time, limited stock.", "Maya veut le chargeur de telephone parce que la promotion dit temps limite, stock limite."],
  ["Ben thinks the bakery cookie box must be amazing because it sells out before noon.", "Ben pense que la boite de biscuits de la boulangerie doit etre incroyable parce qu elle se vend avant midi."],
  ["Ava feels the pen set is a must-have because only a few are left in the drawer.", "Ava sent que le lot de stylos est indispensable parce qu il en reste seulement quelques-uns dans le tiroir."],
  ["Omar wants the travel adapter because the page says the last batch is shipping now.", "Omar veut l adaptateur de voyage parce que la page dit que le dernier lot est expedie maintenant."],
  ["Nina thinks the class trip is exciting because the permission slips are nearly full.", "Nina pense que la sortie scolaire est excitante parce que les autorisations sont presque remplies."],
  ["Eli buys the tea because the tin says the leaves were harvested in a short season.", "Eli achete le the parce que la boite dit que les feuilles ont ete recoltees pendant une courte saison."],
  ["Lina wants the notebook because the store says the notebook line is disappearing tonight.", "Lina veut le carnet parce que le magasin dit que la gamme de carnets disparait ce soir."],
  ["Grant believes the class is good because the registration page says spots are scarce.", "Grant croit que le cours est bon parce que la page d inscription dit que les places sont rares."],
  ["Tia buys the pillow because the hotel shop says there are only a few left from this batch.", "Tia achete l oreiller parce que la boutique de l hotel dit qu il n en reste que quelques-uns de ce lot."],
  ["Noah thinks the limited poster is cooler because the store hangs it behind the counter.", "Noah pense que l affiche en edition limitee est plus cool parce que le magasin la suspend derriere le comptoir."],
  ["Mia feels the mug is rare and therefore nicer because the cashier says it is the last one.", "Mia sent que la tasse est rare et donc plus jolie parce que la caissiere dit que c est la derniere."],
  ["Ava wants the skincare sample because the site says testers are almost exhausted.", "Ava veut l echantillon de soin parce que le site dit que les tests sont presque epuises."],
  ["Finn buys the board game because the store says only a few boxes made it to the shelf.", "Finn achete le jeu de societe parce que le magasin dit que seules quelques boites ont atteint l etagere."],
  ["Mina trusts the scarf because the tag says it is the only one in that color.", "Mina fait confiance a l echarpe parce que l etiquette dit que c est la seule de cette couleur."],
  ["Theo wants the class seat because the sign says the lecture has almost sold out.", "Theo veut la place de cours parce que le panneau dit que la conference est presque complete."],
  ["Juno thinks the fruit box is better because the market says the last crate is on display.", "Juno pense que la boite de fruits est meilleure parce que le marche dit que la derniere caisse est exposee."],
  ["Iris buys the jacket because the app says the sale is ending in minutes.", "Iris achete la veste parce que l application dit que la vente se termine dans quelques minutes."],
  ["Cole wants the notebook because the shelf label says last chance in bold letters.", "Cole veut le carnet parce que l etiquette de l etagere dit derniere chance en grosses lettres."],
  ["Riley thinks the coffee beans are superior because the roaster says the batch is tiny.", "Riley pense que les grains de cafe sont superieurs parce que le torréfacteur dit que le lot est minuscule."],
  ["Pia buys the ticket because the screen warns the price will jump soon.", "Pia achete le billet parce que l ecran avertit que le prix va bientot augmenter."],
  ["Hugo thinks the jacket is more stylish because the shop says the remaining colors are rare.", "Hugo pense que la veste est plus elegante parce que la boutique dit que les couleurs restantes sont rares."],
  ["Sam wants the chocolate because the wrapper says it was made for a short holiday run.", "Sam veut le chocolat parce que l emballage dit qu il a ete fabrique pour une courte periode de vacances."],
  ["Jade buys the lamp because the online store says only a few are left in warehouse.", "Jade achete la lampe parce que la boutique en ligne dit qu il n en reste que quelques-unes en entrepot."],
  ["Owen decides the backpack is better because the student store says the model is almost gone.", "Owen decide que le sac a dos est meilleur parce que la boutique etudiante dit que le modele est presque parti."],
  ["Lea wants the notebook set because the brand says the print run is tiny and exclusive.", "Lea veut le lot de carnets parce que la marque dit que le tirage est minuscule et exclusif."],
  ["Maya buys the tea because the box says once it sells out, it will not return.", "Maya achete le the parce que la boite dit qu une fois vendu, il ne reviendra pas."],
  ["Nora buys the scarf because the last one is hanging by the checkout counter.", "Nora achete l echarpe parce que la derniere est suspendue pres de la caisse."],
  ["Eli wants the game because the page says only a few codes remain for tonight.", "Eli veut le jeu parce que la page dit qu il ne reste que quelques codes pour ce soir."],
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
