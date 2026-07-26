import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says the city should not cut the park to build a clinic because some things should not be priced like land.', 'Maya dit que la ville ne devrait pas reduire le parc pour construire une clinique parce que certaines choses ne devraient pas etre evaluees comme un terrain.'],
  ['Leo argues that selling the family heirloom to pay a bill feels wrong even if it would help financially.', 'Leo soutient que vendre l objet de famille pour payer une facture semble mal meme si cela aiderait financierement.'],
  ['Priya says the company should not fire the old librarian to save money because loyalty cannot be bought.', 'Priya dit que l entreprise ne devrait pas licencier la vieille bibliothecaire pour economiser de l argent parce que la fidelite ne s achete pas.'],
  ['Omar says the museum should not auction off its rare painting just to fund repairs.', 'Omar dit que le musee ne devrait pas mettre aux encheres son tableau rare juste pour financer les reparations.'],
  ['Rina claims the school should keep the free lunch program even if a sponsor offers cash to replace it.', 'Rina affirme que l ecole devrait garder le programme de repas gratuits meme si un sponsor propose de l argent pour le remplacer.'],
  ['Ben says the team should not trade their long-time captain for a better salary cap situation.', 'Ben dit que l equipe ne devrait pas echanger son capitaine de longue date pour un meilleur plafond salarial.'],
  ['Zoe argues the family should not sell the backyard tree to the developer, even for a huge payout.', 'Zoé soutient que la famille ne devrait pas vendre l arbre du jardin au promoteur, meme pour un gros paiement.'],
  ['Kai says the city should not replace the old bookstore with a more profitable coffee chain.', 'Kai dit que la ville ne devrait pas remplacer l ancienne librairie par une chaine de cafes plus rentable.'],
  ['Nora says the worker should not skip her childs recital for a bonus shift that pays more.', 'Nora dit que la travailleuse ne devrait pas rater le recital de son enfant pour un service supplementaire mieux paye.'],
  ['Eli says the restaurant should not raise prices by charging a fee for the free community meal night.', 'Eli dit que le restaurant ne devrait pas augmenter les prix en facturant une participation pour la soiree de repas communautaire gratuits.'],
  ['Lina says the town should not turn the old playground into parking spaces just because drivers would pay for them.', 'Lina dit que la ville ne devrait pas transformer l ancien terrain de jeu en places de parking simplement parce que les conducteurs paieraient pour.'],
  ['Grant says the hospital should not sell the quiet garden to open a premium lounge.', 'Grant dit que l hopital ne devrait pas vendre le jardin tranquille pour ouvrir un salon premium.'],
  ['Tia says the concert should keep the local charity booth instead of swapping it for one more merch table.', 'Tia dit que le concert devrait garder le stand caritatif local au lieu de le remplacer par une table de produits dérives supplementaire.'],
  ['Noah says the school should not auction the old chess set to buy better decorations.', 'Noah dit que l ecole ne devrait pas vendre aux enchers le vieux jeu d echecs pour acheter de meilleures decorations.'],
  ['Mia says the neighborhood should protect the community garden instead of leasing it to a fast-food chain.', 'Mia dit que le quartier devrait proteger le jardin communautaire au lieu de le louer a une chaine de restauration rapide.'],
  ['Jules says the family should not sell Grandma house just to cover a vacation upgrade.', 'Jules dit que la famille ne devrait pas vendre la maison de Grand-mere juste pour financer une meilleure vacation.'],
  ['Ava says the office should not replace the free water station with a vending machine that makes money.', 'Ava dit que le bureau ne devrait pas remplacer la fontaine d eau gratuite par un distributeur automatique rentable.'],
  ['Finn says the town should not close the public pool just to make room for luxury apartments.', 'Finn dit que la ville ne devrait pas fermer la piscine publique juste pour faire place a des appartements de luxe.'],
  ['Mina says the school should not sell the art room to fund a louder gym expansion.', 'Mina dit que l ecole ne devrait pas vendre la salle d art pour financer une extension plus bruyante du gymnase.'],
  ['Theo says the city should keep the bus lane even if a paid parking lot would earn more.', 'Theo dit que la ville devrait garder la voie de bus meme si un parking payant rapporterait davantage.'],
  ['Juno says the family should not monetize their weekend together just because babysitting would cost money.', 'Juno dit que la famille ne devrait pas monétiser son week-end ensemble simplement parce que la garde des enfants couterait de l argent.'],
  ['Iris says the school should not auction naming rights for the old library.', 'Iris dit que l ecole ne devrait pas vendre les droits de nom de l ancienne bibliotheque aux encheres.'],
  ['Cole says the company should not replace the free counseling line with a paid premium hotline.', 'Cole dit que l entreprise ne devrait pas remplacer la ligne gratuite de conseil par une hotline premium payante.'],
  ['Riley says the museum should keep the quiet reading room instead of turning it into a rentable event space.', 'Riley dit que le musee devrait garder la salle de lecture tranquille au lieu de la transformer en espace d evenement rentable.'],
  ['Pia says the student should not skip the free tutoring session for a paid side job.', 'Pia dit que l eleve ne devrait pas manquer la seance de tutorat gratuite pour un petit boulot paye.'],
  ['Hugo says the town should not charge admission for the river path just because tourists would pay.', 'Hugo dit que la ville ne devrait pas faire payer l acces au sentier de la riviere simplement parce que les touristes paieraient.'],
  ['Sam says the bakery should keep giving away the leftover bread rather than sell every loaf at closing time.', 'Sam dit que la boulangerie devrait continuer a donner le pain restant plutot que de vendre chaque pain a la fermeture.'],
  ['Jade says the school should not swap the music room for a data lab just because the lab attracts grants.', 'Jade dit que l ecole ne devrait pas echanger la salle de musique contre un labo de donnees simplement parce que le labo attire des subventions.'],
  ['Owen says the city should protect the old theater even if a mall would bring more tax revenue.', 'Owen dit que la ville devrait proteger l ancien theatre meme si un centre commercial apporterait plus de recettes fiscales.'],
  ['Lea says the worker should not sell her day off to cover another shift, even for extra cash.', 'Lea dit que la travailleuse ne devrait pas vendre son jour de repos pour couvrir un autre service, meme pour un supplement d argent.'],
  ['Maya says the company should keep the volunteer day instead of converting it into billable work hours.', 'Maya dit que l entreprise devrait garder la journee de benevolat au lieu de la convertir en heures facturables.'],
  ['Ben says the family should not rent out the backyard memorial corner for party money.', 'Ben dit que la famille ne devrait pas louer le coin memorial du jardin pour de l argent de fete.'],
  ['Ava says the city should not replace the free bench area with paid advertising screens.', 'Ava dit que la ville ne devrait pas remplacer la zone de bancs gratuits par des ecrans publicitaires payants.'],
  ['Omar says the school should not sell weekend access to the playground to private groups.', 'Omar dit que l ecole ne devrait pas vendre l acces du week-end au terrain de jeu a des groupes prives.'],
  ['Nina says the team should not fire the coach just to hire one with a bigger sponsorship package.', 'Nina dit que l equipe ne devrait pas licencier l entraineur juste pour en engager un avec un plus gros contrat de sponsoring.'],
  ['Eli says the neighborhood should not pave over the little orchard for paid storage units.', 'Eli dit que le quartier ne devrait pas asphalter le petit verger pour construire des box de stockage payants.'],
  ['Lina says the church should not rent the quiet hall for a noisy commercial expo.', 'Lina dit que l eglise ne devrait pas louer la salle tranquille pour une exposition commerciale bruyante.'],
  ['Grant says the hospital should keep the free shuttle even if a paid parking shuttle would make more money.', 'Grant dit que l hopital devrait garder la navette gratuite meme si une navette de parking payante rapporterait plus.'],
  ['Tia says the school should not sell the student lounge to a private tutor chain.', 'Tia dit que l ecole ne devrait pas vendre le salon des eleves a une chaine de tutorat privee.'],
  ['Noah says the city should preserve the public reading nook instead of leasing it as ad space.', 'Noah dit que la ville devrait preserver le coin lecture public au lieu de le louer comme espace publicitaire.'],
  ['Mia says the family should not trade their yearly reunion for a paid luxury trip.', 'Mia dit que la famille ne devrait pas echanger sa reunion annuelle contre un voyage de luxe paye.'],
  ['Jules says the company should not remove the free lunch line just because a premium café could charge more.', 'Jules dit que l entreprise ne devrait pas supprimer la file de repas gratuits simplement parce qu un café premium pourrait facturer plus.'],
  ['Ava says the city should not sell the public garden so a developer can build expensive condos.', 'Ava dit que la ville ne devrait pas vendre le jardin public pour qu un promoteur construise des condos chers.'],
  ['Finn says the school should not replace the free after-school club with a paid enrichment package.', 'Finn dit que l ecole ne devrait pas remplacer le club gratuit apres les cours par un forfait payant d enrichissement.'],
  ['Mina says the restaurant should not turn the community table into a reserved VIP area.', 'Mina dit que le restaurant ne devrait pas transformer la table communautaire en espace VIP reserve.'],
  ['Theo says the town should not auction the historic clock tower for a quick budget fix.', 'Theo dit que la ville ne devrait pas vendre la tour horloge historique aux encheres pour regler rapidement le budget.'],
  ['Juno says the office should not charge employees to keep the quiet room.', 'Juno dit que le bureau ne devrait pas faire payer les employes pour garder la salle calme.'],
  ['Iris says the school should not sell the science fair budget to fund a flashy parade.', 'Iris dit que l ecole ne devrait pas vendre le budget de la foire scientifique pour financer un defile tape-a-l oeil.'],
  ['Cole says the family should not give up the old oak tree just because lumber buyers would pay well.', 'Cole dit que la famille ne devrait pas abandonner le vieux chene simplement parce que les acheteurs de bois paieraient bien.'],
  ['Riley says the city should not convert the public rooftop into a paid lounge.', 'Riley dit que la ville ne devrait pas transformer le toit public en salon payant.'],
  ['Pia says the school should not replace the free reading hour with a sponsored ad block.', 'Pia dit que l ecole ne devrait pas remplacer l heure de lecture gratuite par un bloc de pub sponsorise.'],
  ['Hugo says the community should not sell the old murals to advertisers, even for a huge check.', 'Hugo dit que la communaute ne devrait pas vendre les vieux muraux aux annonceurs, meme pour un gros cheque.'],
  ['Sophie says the daycare should not turn nap time into a paid premium service.', 'Sophie dit que la garderie ne devrait pas transformer la sieste en service premium payant.'],
  ['Liam says the city should not sell the public fountain just because bottled-water ads would pay well.', 'Liam dit que la ville ne devrait pas vendre la fontaine publique simplement parce que des pubs pour l eau en bouteille paieraient bien.'],
  ['Emma says the school should not replace the art club with a sponsor banner wall.', 'Emma dit que l ecole ne devrait pas remplacer le club d art par un mur de bannières de sponsor.'],
  ['Diego says the family should not rent out the memorial bench for a weekend market stall.', 'Diego dit que la famille ne devrait pas louer le banc memorial pour un stand de marche le week-end.'],
  ['Lily says the hospital should keep the free waiting-room books instead of selling shelf space to ads.', 'Lily dit que l hopital devrait garder les livres gratuits de la salle d attente au lieu de vendre les etageres aux pubs.'],
  ['Hassan says the school should not charge students to use the quiet room.', 'Hassan dit que l ecole ne devrait pas faire payer les eleves pour utiliser la salle calme.'],
  ['Ruby says the city should not auction the playground shade to the highest bidder.', 'Ruby dit que la ville ne devrait pas mettre l ombre du terrain de jeu aux encheres au plus offrant.'],
  ['Noah says the bakery should not stop donating leftover bread just to increase profit.', 'Noah dit que la boulangerie ne devrait pas arreter de donner le pain restant juste pour augmenter le profit.'],
  ['Chloe says the office should not sell the window seats as premium upgrades.', 'Chloe dit que le bureau ne devrait pas vendre les places pres des fenetres comme des options premium.'],
  ['Yusuf says the museum should not trade the quiet gallery for a flashy private event space.', 'Yusuf dit que le musee ne devrait pas echanger la galerie tranquille contre un espace prive tape-a-l oeil.'],
  ['Maya says the school should not replace the free club snack table with a paid vending machine.', 'Maya dit que l ecole ne devrait pas remplacer la table de collation gratuite par un distributeur payant.'],
  ['Lucas says the neighborhood should not sell the public garden for luxury parking spots.', 'Lucas dit que le quartier ne devrait pas vendre le jardin public pour des places de parking de luxe.'],
  ['Ari says the family should not monetize the holiday dinner by charging tickets to relatives.', 'Ari dit que la famille ne devrait pas monétiser le dîner de fete en faisant payer les invites.'],
  ['Mina says the school should not turn the free tutoring hour into a paid add-on.', 'Mina dit que l ecole ne devrait pas transformer l heure de tutorat gratuite en option payante.'],
  ['Owen says the city should not remove the bench so a billboards company can lease the spot.', 'Owen dit que la ville ne devrait pas enlever le banc pour qu une société de panneaux pub loue l endroit.'],
  ['Zara says the concert should not replace the charity booth with another merchandise stand.', 'Zara dit que le concert ne devrait pas remplacer le stand caritatif par un autre stand de produits derives.'],
  ['Ben says the community center should not sell the free meeting room to a paid coworking chain.', 'Ben dit que le centre communautaire ne devrait pas vendre la salle de reunion gratuite a une chaine de coworking payante.'],
  ['Nora says the school should keep the low-cost lunch program instead of swapping it for a cashless premium kiosk.', 'Nora dit que l ecole devrait garder le programme de dejeuner a petit prix au lieu de le remplacer par un kiosque premium sans argent liquide.'],
  ['Eli says the city should not pave over the public orchard for a paid storage lot.', 'Eli dit que la ville ne devrait pas recouvrir le verger public pour faire un parking de stockage payant.'],
  ['Pia says the office should not sell the quiet room as private consulting space.', 'Pia dit que le bureau ne devrait pas vendre la salle calme comme espace de conseil prive.'],
  ['Theo says the school should not replace the free library hour with a sponsor slideshow.', 'Theo dit que l ecole ne devrait pas remplacer l heure de bibliotheque gratuite par un diaporama de sponsor.'],
  ['Sara says the family should not trade the yearly picnic for a luxury dinner package.', 'Sara dit que la famille ne devrait pas echanger le pique-nique annuel contre un forfait de diner de luxe.'],
  ['Milo says the hospital should not turn the volunteer garden into a paid rooftop lounge.', 'Milo dit que l hopital ne devrait pas transformer le jardin des benevoles en salon payant sur le toit.'],
  ['Iris says the town should not sell the river path for a gated resort entrance.', 'Iris dit que la ville ne devrait pas vendre le sentier de la riviere pour une entree de resort fermee.'],
  ['Jude says the school should not charge a fee for the free breakfast table.', 'Jude dit que l ecole ne devrait pas faire payer de frais pour la table de petit dejeuner gratuite.'],
  ['Layla says the museum should not auction the community mural for sponsor money.', 'Layla dit que le musee ne devrait pas vendre la fresque communautaire aux encheres pour de l argent de sponsor.'],
  ['Finn says the city should not replace the public bench row with paid ad pods.', 'Finn dit que la ville ne devrait pas remplacer la rangée de bancs publics par des cabines pub payantes.'],
  ['Hana says the school should not sell the music practice room to a test-prep company.', 'Hana dit que l ecole ne devrait pas vendre la salle de repetition musicale a une entreprise de preparation aux examens.'],
  ['Ravi says the church should not rent the quiet hall to a loud commercial expo.', 'Ravi dit que l eglise ne devrait pas louer la salle calme a une expo commerciale bruyante.'],
  ['Lena says the family should not sacrifice the weekend board game night for paid overtime.', 'Lena dit que la famille ne devrait pas sacrifier la soiree de jeux de societe du week-end pour des heures supplementaires payees.'],
  ['Jon says the school should not replace the free art supplies with a branded kit.', 'Jon dit que l ecole ne devrait pas remplacer les fournitures d art gratuites par un kit de marque.'],
  ['Mara says the city should not sell the old theater to a luxury gym chain.', 'Mara dit que la ville ne devrait pas vendre l ancien theatre a une chaine de salles de sport de luxe.'],
  ['Omar says the library should keep the free reading corner instead of leasing it for paid ads.', 'Omar dit que la bibliotheque devrait garder le coin lecture gratuit au lieu de le louer pour des pubs payantes.'],
  ['Clara says the neighborhood should not trade the shared garden for a row of storage units.', 'Clara dit que le quartier ne devrait pas echanger le jardin partagé contre une rangée de box de stockage.'],
  ['Ezra says the office should not charge people to keep the peace-and-quiet room.', 'Ezra dit que le bureau ne devrait pas faire payer les gens pour garder la salle calme.'],
  ['Fiona says the school should not swap the free club period for a corporate sponsor workshop.', 'Fiona dit que l ecole ne devrait pas remplacer la periode de club gratuite par un atelier sponsorise par une entreprise.'],
  ['Gabe says the community should not sell the memorial plaque wall for extra event income.', 'Gabe dit que la communauté ne devrait pas vendre le mur de plaques commemoratives pour des revenus supplementaires d evenement.'],
  ['Helena says the clinic should not turn the waiting-room toy shelf into a paid vending display.', 'Helena dit que la clinique ne devrait pas transformer l etagere de jouets de la salle d attente en presentoir payant.'],
  ['Ivo says the school should not replace the free field trip with an upgraded paid trip.', 'Ivo dit que l ecole ne devrait pas remplacer la sortie gratuite par une sortie payante améliorée.'],
  ['Jenna says the town should not lease the public square to a luxury market.', 'Jenna dit que la ville ne devrait pas louer la place publique a un marché de luxe.'],
  ['Khalil says the family should not sell the old photo wall to a condo developer.', 'Khalil dit que la famille ne devrait pas vendre le mur de photos ancien a un promoteur de condos.'],
  ['Luna says the school should not charge for the free study hall.', 'Luna dit que l ecole ne devrait pas faire payer la salle d etude gratuite.'],
  ['Mason says the company should not replace the volunteer day with billable hours.', 'Mason dit que l entreprise ne devrait pas remplacer la journee de benevolat par des heures facturables.'],
  ['Nadia says the city should not sell the public bench circle for sponsored seating.', 'Nadia dit que la ville ne devrait pas vendre le cercle de bancs publics pour des sièges sponsorises.'],
  ['Oli says the museum should not rent the quiet sculpture room to a loud product launch.', 'Oli dit que le musee ne devrait pas louer la salle tranquille des sculptures a un lancement de produit bruyant.'],
  ['Parker says the school should not turn the free homework help into a paid VIP help desk.', 'Parker dit que l ecole ne devrait pas transformer l aide gratuite aux devoirs en guichet VIP payant.'],
  ['Quinn says the neighborhood should not build a fee-only parking deck over the public court.', 'Quinn dit que le quartier ne devrait pas construire un parking payant au-dessus du terrain public.'],
  ['Rosa says the office should not sell the quiet break room for extra conference space.', 'Rosa dit que le bureau ne devrait pas vendre la salle de pause calme pour gagner un espace de conference supplementaire.'],
];

const OPTIONS_EN = ['Taboo Tradeoff', 'Is-Ought Fallacy', 'Appeal to Consequences', 'Wishful Thinking'];
const OPTIONS_FR = ['Échange tabou', 'Sophisme est-devoir', 'Appel aux conséquences', 'Pensée magique'];

function rotate(options: string[], correctIndex: number): string[] {
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
      id: 42301 + index,
      level: 5,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Échange tabou' : 'Taboo Tradeoff',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotate(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'On traite une valeur morale, culturelle ou humaine comme si elle pouvait simplement etre echangee contre de l argent ou du rendement.'
        : 'A moral, cultural, or human value is treated as if it could simply be traded for money or efficiency.',
      detailedExplanationBeginner: isFrench
        ? 'Certaines choses ne se reduisent pas a un prix.'
        : 'Some things do not reduce cleanly to a price tag.',
      detailedExplanationIntermediate: isFrench
        ? "L echange tabou apparait quand on compare une valeur qui semble sacrée ou non marchande a un avantage pratique et qu on pretend que le calcul suffit. Le probleme, c est que tout n est pas commensurable."
        : 'Taboo tradeoff appears when a value that feels sacred or non-market is compared with a practical gain and treated as if calculation alone settles it. The problem is that not everything is commensurable.',
      detailedExplanationExpert: isFrench
        ? "Cette erreur devient convaincante parce qu elle masque le conflit entre des registres differents: relationnel, symbolique, et economique. Elle remplace une deliberation morale par une logique de rendement, comme si le fait de gagner plus suffisait a justifier la perte d un bien social, affectif ou civique."
        : 'The error feels convincing because it hides a clash between different registers: relational, symbolic, and economic. It replaces moral deliberation with a return-on-investment frame, as if earning more automatically justified losing a social, emotional, or civic good.',
      questionFormat: 'standard',
    };
  });
}

export const TABOO_TRADEOFF_EXPANSION_EN: Question[] = createQuestions('en');
export const TABOO_TRADEOFF_EXPANSION_FR: Question[] = createQuestions('fr');
