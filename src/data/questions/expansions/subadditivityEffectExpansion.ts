import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Mia says the picnic will be fine because the chance of rain, wind, and a late delivery all seem tiny on their own.', 'Mia dit que le pique-nique ira bien parce que la pluie, le vent et une livraison en retard semblent chacun tres peu probables.'],
  ['Ben assumes the road trip will stay on schedule because each possible delay by itself looks small.', 'Ben suppose que le road trip restera a l heure parce que chaque retard possible pris seul semble faible.'],
  ['Priya thinks the family dinner will go smoothly because the missing ingredient, the traffic, and the oven problem are all unlikely separately.', 'Priya pense que le diner de famille se passera bien parce que l ingredient manquant, la circulation et le probleme de four sont chacun peu probables pris separement.'],
  ['Noah says the package should arrive today because the truck delay, the wrong address, and the sorting mistake each sound minor.', 'Noah dit que le colis devrait arriver aujourd hui parce que le retard du camion, la mauvaise adresse et l erreur de tri semblent chacun mineurs.'],
  ['Lina believes the concert will start on time because the sound issue, the late singer, and the broken cable are each just one small risk.', 'Lina croit que le concert commencera a l heure parce que le probleme de son, le chanteur en retard et le cable casse sont chacun de petits risques.'],
  ['Theo claims the presentation will be safe because the laptop glitch, the projector issue, and the lost notes are all low chances.', 'Theo affirme que la presentation ira bien parce que le bug de l ordinateur, le probleme de projecteur et les notes perdues sont tous peu probables.'],
  ['Ava says the interview will be easy because forgetting one answer, tripping once, or mishearing one question all feel unlikely.', 'Ava dit que lentretien sera facile parce qu oublier une reponse, trébucher une fois ou mal entendre une question semblent tous peu probables.'],
  ['Omar thinks the camping weekend will be calm because each possible annoyance, from bugs to bad weather to a dead flashlight, seems small alone.', 'Omar pense que le week-end de camping sera tranquille parce que chaque ennui possible, des insectes au mauvais temps en passant par une lampe morte, semble petit pris seul.'],
  ['Rina says the app update should go fine because a crash, a login bug, and a battery drain are each only a slim chance.', 'Rina dit que la mise a jour de l application devrait bien se passer parce qu un plantage, un bug de connexion et une batterie qui se vide sont chacun une faible chance.'],
  ['Jules believes the school trip will be safe because the seat mix-up, the rain, and the lost permission slip are each minor possibilities.', 'Jules pense que la sortie scolaire sera sure parce que le probleme de place, la pluie et le papier d autorisation perdu sont chacun de petites possibilites.'],
  ['Mina says the online order is unlikely to fail because the payment hiccup, the warehouse mistake, and the delivery delay are all small risks.', 'Mina dit que la commande en ligne a peu de chances d echouer parce que le souci de paiement, l erreur d entrepot et le retard de livraison sont tous de petits risques.'],
  ['Eli assumes the board game night will be smooth because one rule dispute, one missing piece, or one late player are each not a big deal.', 'Eli suppose que la soiree jeux de societe se passera bien parce qu une dispute sur une regle, une piece manquante ou un joueur en retard ne sont chacun pas grand-chose.'],
  ['Hugo says the flight should be okay because the luggage delay, the gate change, and the seat mix-up are each just small odds.', 'Hugo dit que le vol devrait aller parce que le retard des bagages, le changement de porte et l erreur de siege sont chacun de petits risques.'],
  ['Lea thinks the neighborhood barbecue will work out because the grill problem, the sauce spill, and the rain shower all look unlikely alone.', 'Lea pense que le barbecue du quartier marchera parce que le probleme de grill, la sauce renversee et l averse semblent tous peu probables pris seuls.'],
  ['Grant believes the big exam will be fine because the blank page, the surprise question, and the calculator failure are each unlikely.', 'Grant croit que le gros examen ira bien parce que la page blanche, la question surprise et la panne de calculatrice sont chacun peu probables.'],
  ['Tia says the baby shower will stay cheerful because the gift mix-up, the cake mistake, and the parking issue are each tiny chances.', 'Tia dit que la fete de naissance restera joyeuse parce que le melange de cadeaux, l erreur de gateau et le probleme de stationnement sont chacun de toutes petites chances.'],
  ['Nora assumes the weekend workshop will go smoothly because the marker running out, the microphone cutting out, and the slides freezing are all small risks.', 'Nora suppose que latelier du week-end se passera bien parce que le feutre qui se vide, le micro qui coupe et les diapositives qui bloquent sont tous de petits risques.'],
  ['Sam thinks the road race will be fine because a flat tire, a missed turn, and a stomach ache each seem too unlikely to worry about.', 'Sam pense que la course sur route ira bien parce qu une crevaison, un mauvais tournant et un mal de ventre semblent chacun trop peu probables pour inquieter.'],
  ['Jade says the dinner reservation is safe because the table mix-up, the slow kitchen, and the missing waiter are each low probability events.', 'Jade dit que la reservation du dîner est sure parce que le probleme de table, la cuisine lente et le serveur manquant sont chacun des evenements de faible probabilite.'],
  ['Owen believes the charity raffle will be easy because the ticket printer, the ballot box, and the volunteer no-show are each separate little chances.', 'Owen croit que la tombola caritative se passera facilement parce que l imprimante de billets, l urne et l absence d un benevole sont chacune de petites chances separees.'],
  ['Ari says the morning commute will be okay because the bus delay, the subway delay, and the elevator delay all look minor by themselves.', 'Ari dit que le trajet du matin ira bien parce que le retard de bus, le retard de metro et le retard de l ascenseur semblent minces chacun pris seul.'],
  ['Pia thinks the wedding setup will be safe because the flowers, the sound system, and the seating plan each have only a small chance of trouble.', 'Pia pense que la preparation du mariage sera sure parce que les fleurs, le systeme de son et le plan de table ont chacun seulement une petite chance de probleme.'],
  ['Ben says the museum visit should be easy because the ticket line, the crowded room, and the audio guide issue are each just one small risk.', 'Ben dit que la visite du musee devrait etre facile parce que la file de billets, la salle bondée et le probleme de guide audio sont chacun un petit risque.'],
  ['Zoe believes the cooking class will go fine because burning one dish, missing one utensil, or spilling once all seem unlikely.', 'Zoe croit que le cours de cuisine ira bien parce que bruler un plat, manquer un ustensile ou renverser une fois semblent tous peu probables.'],
  ['Ravi thinks the work deadline is safe because the file corruption, the email failure, and the server outage are each only a small chance.', 'Ravi pense que la date limite de travail est a l abri parce que la corruption du fichier, l echec du courriel et la panne du serveur sont chacun une petite chance.'],
  ['Sofia says the power tools project will be okay because the cord issue, the broken bit, and the battery failure are all low odds separately.', 'Sofia dit que le projet avec outils electriques ira bien parce que le probleme de cable, la meche cassee et la batterie vide sont tous de faibles risques separes.'],
  ['Lara assumes the group hike will go smoothly because the trail closure, the sprained ankle, and the wrong turn each feel rare on their own.', 'Lara suppose que la randonnee de groupe se passera bien parce que la fermeture du sentier, la cheville foule et la mauvaise direction semblent chacun rares pris seuls.'],
  ['Cole says the birthday party should be easy because the cake falling, the candles not lighting, and the guest list mistake are each tiny chances.', 'Cole dit que la fete d anniversaire devrait etre facile parce que le gateau qui tombe, les bougies qui ne s allument pas et l erreur de liste d invites sont chacun de toutes petites chances.'],
  ['Maya thinks the team offsite is safe because the van problem, the room booking mistake, and the Wi-Fi failure are all low probability by themselves.', 'Maya pense que le sejour de l equipe est sure parce que le probleme de van, l erreur de reservation de salle et la panne de Wi-Fi sont tous de faible probabilite pris seuls.'],
  ['Ezra says the new phone setup will be fine because forgetting the password, breaking the transfer, and losing a photo all look like separate tiny odds.', 'Ezra dit que la configuration du nouveau telephone ira bien parce qu oublier le mot de passe, casser le transfert et perdre une photo semblent chacun des chances minuscules.'],
  ['Nina believes the bake sale will be okay because the oven issue, the icing spill, and the price tag mistake each seem minor.', 'Nina croit que la vente de gateaux ira bien parce que le probleme de four, le glaçage renverse et l erreur de prix semblent chacun mineurs.'],
  ['Hana assumes the science fair will work out because the model breaking, the sign falling, and the judge being late are all separate small risks.', 'Hana suppose que la foire scientifique se passera bien parce que le modele casse, l affiche qui tombe et le juge en retard sont tous des risques separes et petits.'],
  ['Dylan says the video call will be okay because the camera freeze, the mute button error, and the bad connection each sound unlikely.', 'Dylan dit que l appel video ira bien parce que le blocage de la camera, l erreur sur le bouton muet et la mauvaise connexion semblent chacun peu probables.'],
  ['Penny thinks the bookstore event will be easy because the crowding, the mic issue, and the cashier slowdown are each only one small problem.', 'Penny pense que l evenement de la librairie sera facile parce que la foule, le probleme de micro et le ralentissement a la caisse sont chacun un seul petit probleme.'],
  ['Kira says the family road breakfast will go fine because the spilled coffee, the missed exit, and the forgotten napkins are each just a little chance.', 'Kira dit que le petit-dejeuner familial sur la route ira bien parce que le cafe renverse, la sortie ratee et les serviettes oubliees sont chacun une petite chance.'],
  ['Finn believes the festival day is safe because the ticket scanner, the food stall, and the rain cloud are each separate low odds.', 'Finn croit que la journee du festival est sure parce que le lecteur de billets, l etal de nourriture et le nuage de pluie sont chacun des risques faibles separes.'],
  ['Juno says the tutoring session will be fine because the marker running dry, the student being late, and the laptop battery dying are all small chances.', 'Juno dit que la session de tutorat ira bien parce que le feutre qui se vide, l eleve en retard et la batterie de l ordinateur qui meurt sont tous de petites chances.'],
  ['Olivia assumes the restaurant review night will go smoothly because the booking error, the wrong dish, and the noisy table are each minor risks.', 'Olivia suppose que la soiree de critique du restaurant se passera bien parce que l erreur de reservation, le mauvais plat et la table bruyante sont chacun des risques mineurs.'],
  ['Mila thinks the DIY shelf project is safe because the screw strip, the crooked board, and the missing tool all seem like tiny odds.', 'Mila pense que le projet d etagere bricolage est sure parce que la vis foiree, la planche de travers et l outil manquant semblent tous de petites chances.'],
  ['Leo says the sports day will be fine because the whistle problem, the shoe lace, and the water break all look harmless on their own.', 'Leo dit que la journee sportive ira bien parce que le probleme de sifflet, le lacet et la pause eau semblent inoffensifs pris seuls.'],
  ['Tara thinks the travel day will stay on track because the taxi delay, the bag inspection, and the check-in issue each look small.', 'Tara pense que la journee de voyage restera sur les rails parce que le retard de taxi, la fouille du sac et le probleme d enregistrement semblent chacun petits.'],
  ['Hugo believes the group photo will be easy because someone blinking, someone turning away, and the timer mistake are each low chances.', 'Hugo croit que la photo de groupe sera facile parce que quelqu un qui cligne des yeux, quelqu un qui se tourne et l erreur de minuterie sont chacun de faibles chances.'],
  ['Lea says the library workshop is fine because the projector, the chair squeak, and the sign-up confusion are each little risks.', 'Lea dit que l atelier a la bibliotheque ira bien parce que le projecteur, la chaise qui grince et la confusion sur les inscriptions sont chacun de petits risques.'],
  ['Max thinks the moving day will be okay because the missing tape, the broken box, and the rain all seem like small separate odds.', 'Max pense que le jour du demenagement ira bien parce que le ruban manquant, la boite cassee et la pluie semblent tous de petites chances separees.'],
  ['Yara says the town fair should be easy because the ride delay, the ticket printer, and the cash shortage are each just a little chance.', 'Yara dit que la fete de la ville devrait etre facile parce que le retard de l attraction, l imprimante de billets et le manque de monnaie sont chacun une petite chance.'],
  ['Dan believes the office demo will be safe because the laptop error, the wifi drop, and the speaker issue are each small on their own.', 'Dan croit que la demo au bureau sera sure parce que l erreur d ordinateur, la coupure de wifi et le probleme de haut-parleur sont chacun petits pris seuls.'],
  ['Rosa assumes the dessert night will go fine because the oven timer, the frosting spill, and the missing spoon are each low probability events.', 'Rosa suppose que la soiree dessert se passera bien parce que la minuterie du four, le glaçage renverse et la cuillere manquante sont chacun des evenements de faible probabilite.'],
  ['Alicia thinks the group road game will be okay because the map error, the detour, and the gas stop are each only a small risk.', 'Alicia pense que le jeu de route du groupe ira bien parce que l erreur de carte, le detour et l arret essence sont chacun un petit risque.'],
  ['Owen says the garden party is safe because the wind, the broken chair, and the muddy shoes all feel like tiny chances.', 'Owen dit que la fete de jardin est sure parce que le vent, la chaise cassee et les chaussures boueuses semblent tous de toutes petites chances.'],
  ['Maya believes the remote class will be smooth because the audio echo, the frozen slide, and the late joiner are each separate small odds.', 'Maya croit que le cours a distance sera fluide parce que l echo du son, la diapositive bloquee et la personne en retard sont chacun de petits risques separes.'],
];

const OPTIONS_EN = ['Subadditivity Effect', 'Planning Fallacy', 'Base Rate Neglect', 'Optimism Bias'];
const OPTIONS_FR = ['Effet de sous-additivité', 'Sophisme de planification', 'Négligence du taux de base', "Biais d'optimisme"];

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
      id: 41801 + index,
      level: 5,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Effet de sous-additivité' : 'Subadditivity Effect',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustre ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La personne sous-estime la chance qu une collection de petits risques se produise au total.'
        : 'The person underestimates the chance that a collection of small risks will happen in total.',
      detailedExplanationBeginner: isFrench
        ? 'Plusieurs petits risques peuvent compter ensemble.'
        : 'Several small risks can add up together.',
      detailedExplanationIntermediate: isFrench
        ? 'L effet de sous-additivite fait paraitre moins probable un grand ensemble de possibilites que la somme de ses parties.'
        : 'The subadditivity effect makes a large set of possibilities seem less likely than the sum of its parts.',
      detailedExplanationExpert: isFrench
        ? "Ce biais apparait quand on evalue des evenements proches d une maniere qui minimise leur probabilité totale. Chaque risque pris isolément semble banal, mais la combinaison des risques ou des issues possibles peut etre beaucoup plus importante que l intuition ne le suggere."
        : 'This bias appears when we evaluate related events in a way that minimizes their total probability. Each risk looks trivial on its own, but the combination of risks or possible outcomes can be much larger than intuition suggests.',
      questionFormat: 'standard',
    };
  });
}

export const SUBADDITIVITY_EFFECT_EXPANSION_EN: Question[] = createQuestions('en');
export const SUBADDITIVITY_EFFECT_EXPANSION_FR: Question[] = createQuestions('fr');
