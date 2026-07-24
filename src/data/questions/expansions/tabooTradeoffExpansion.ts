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
