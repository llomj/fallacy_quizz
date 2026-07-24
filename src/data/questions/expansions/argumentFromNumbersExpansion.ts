import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["Twelve coworkers voted for the loud printer, so it must be the best printer in the office by the break room.", "Douze collègues ont voté pour l'imprimante bruyante, donc ce doit être la meilleure imprimante au bureau, près de la salle de pause."],
  ["Mia says the route is correct because three cars took it first this morning on the way to school.", "Mia dit que l'itinéraire est correct parce que trois voitures l'ont pris en premier ce matin en allant a l ecole."],
  ["Theo believes the snack is better because nine classmates chose it.", "Theo croit que l'en-cas est meilleur parce que neuf camarades l'ont choisi."],
  ["The store claims the kettle is superior because 48 people bought it today.", "Le magasin affirme que la bouilloire est supérieure parce que 48 personnes l'ont achetée aujourd'hui."],
  ["Nina trusts the app because the download count is huge.", "Nina fait confiance à l'application parce que le nombre de téléchargements est énorme."],
  ["A student says the answer must be right because most of the row wrote it.", "Un élève dit que la réponse doit être correcte parce que la plupart de la rangée l'ont écrite."],
  ["Ben buys the new jacket because the 'best seller' label shows a large number.", "Ben achète la nouvelle veste parce que l'étiquette « meilleure vente » affiche un grand chiffre."],
  ["Omar thinks the louder meeting plan is better because eight people clapped.", "Omar pense que le plan de réunion le plus bruyant est meilleur parce que huit personnes ont applaudi."],
  ["The poster says the gym is excellent because 1,000 members signed up.", "L'affiche dit que la salle de sport est excellente parce que 1 000 membres se sont inscrits."],
  ["Priya trusts the recipe because it has the most stars and the most reviews.", "Priya fait confiance à la recette parce qu'elle a le plus d'étoiles et le plus d'avis."],
  ["A cousin says the town festival is the best because the crowd was huge.", "Un cousin dit que la fête de ville est la meilleure parce que la foule était immense."],
  ["Maya picks the phone because it has the biggest sales number on the shelf.", "Maya choisit le téléphone parce qu'il a le plus grand chiffre de ventes en rayon."],
  ["The ad says the sunscreen is safest because 'millions can't be wrong'.", "La pub dit que la crème solaire est la plus sûre parce que « des millions ne peuvent pas se tromper »."],
  ["Leo says the most common haircut must be the smartest one.", "Leo dit que la coupe de cheveux la plus courante doit être la plus intelligente."],
  ["A teacher believes the class answer because 20 hands went up at once.", "Un enseignant croit à la réponse parce que 20 mains se sont levées en même temps."],
  ["The app review says the update is perfect because thousands rated it highly.", "L'avis sur l'application dit que la mise à jour est parfaite parce que des milliers de personnes l'ont très bien notée."],
  ["Mina assumes the longest queue proves the café is the best.", "Mina suppose que la plus longue file prouve que le café est le meilleur."],
  ["A manager says the plan is correct because the majority chose option B.", "Un manager dit que le plan est correct parce que la majorité a choisi l'option B."],
  ["Zoe thinks the game is great because the scoreboard shows many players online.", "Zoe pense que le jeu est génial parce que le tableau montre beaucoup de joueurs en ligne."],
  ["The flyer says the diet is the winner because 500 people joined the challenge.", "Le prospectus dit que le régime est gagnant parce que 500 personnes ont rejoint le défi."],
  ["A friend says the route is safe because lots of buses use it every day.", "Un ami dit que la route est sûre parce que beaucoup de bus l'utilisent chaque jour."],
  ["Theo believes the cleaner is strong because 300 customers left positive marks.", "Theo croit que le nettoyant est puissant parce que 300 clients ont laissé des notes positives."],
  ["Nina says the new movie is brilliant because the theater was full.", "Nina dit que le nouveau film est brillant parce que le cinéma était plein."],
  ["Ben trusts the app because it is number one in the rankings.", "Ben fait confiance à l'application parce qu'elle est numéro un dans les classements."],
  ["Omar picks the snack because the package says 'most chosen'.", "Omar choisit l'en-cas parce que l'emballage dit « le plus choisi »."],
  ["Priya says the community garden idea is right because 40 neighbors liked it.", "Priya dit que l'idée du jardin communautaire est juste parce que 40 voisins l'ont aimée."],
  ["A student assumes the test answer is valid because everyone in the back row wrote it.", "Un élève suppose que la réponse de l'examen est valide parce que tout le fond de la classe l'a écrite."],
  ["Maya trusts the new pillow because the ad shows a big number of satisfied sleepers.", "Maya fait confiance au nouveau coussin parce que la pub montre un grand nombre de dormeurs satisfaits."],
  ["The store says the chair is the safest because it sold more than the others.", "Le magasin dit que la chaise est la plus sûre parce qu'elle s'est mieux vendue que les autres."],
  ["A cousin says the soup is best because the family made a large batch.", "Un cousin dit que la soupe est la meilleure parce que la famille en a fait une grande quantité."],
  ["Leo believes the route is efficient because every delivery van took it.", "Leo croit que l'itinéraire est efficace parce que chaque camion de livraison l'a pris."],
  ["A parent says the new movie is appropriate because all the kids in class watched it.", "Un parent dit que le nouveau film est approprié parce que tous les enfants de la classe l'ont regardé."],
  ["The poster says the software is brilliant because the user count keeps rising.", "L'affiche dit que le logiciel est brillant parce que le nombre d'utilisateurs augmente sans cesse."],
  ["Nina thinks the cookbook is trustworthy because it has many purchasers.", "Nina pense que le livre de cuisine est digne de confiance parce qu'il a beaucoup d'acheteurs."],
  ["Omar assumes the louder alarm setting is correct because most people picked it.", "Omar suppose que le réglage d'alarme le plus fort est correct parce que la plupart des gens l'ont choisi."],
  ["A manager says the policy is good because the vote count was high.", "Un manager dit que la politique est bonne parce que le nombre de votes était élevé."],
  ["Mia trusts the old rumor because it spread to 200 chats.", "Mia fait confiance à l'ancienne rumeur parce qu'elle s'est répandue dans 200 discussions."],
  ["Theo says the most watched video must be the most accurate one.", "Theo dit que la vidéo la plus regardée doit être la plus exacte."],
  ["A shopper buys the detergent because more people clicked on it than any other.", "Une cliente achète la lessive parce que plus de gens ont cliqué dessus que sur les autres."],
  ["Ben thinks the school petition is right because 300 names are on it.", "Ben pense que la pétition de l'école est juste parce qu'il y a 300 noms dessus."],
  ["Priya says the most borrowed library book is the best book.", "Priya dit que le livre de bibliothèque le plus emprunté est le meilleur livre."],
  ["A friend believes the ranking because the app has a huge user count.", "Un ami croit au classement parce que l'application a un énorme nombre d'utilisateurs."],
  ["The seller says the gadget is superior because it sold faster than the rest.", "Le vendeur dit que le gadget est supérieur parce qu'il s'est vendu plus vite que les autres."],
  ["Maya assumes the busiest aisle proves the best product is there.", "Maya suppose que l'allée la plus fréquentée prouve que le meilleur produit est là."],
  ["Nina says the festival food is best because the longest line formed there.", "Nina dit que la nourriture du festival est la meilleure parce que la plus longue file s'y est formée."],
  ["The ad says the jacket is unbeatable because 10,000 people tapped like.", "La pub dit que la veste est imbattable parce que 10 000 personnes ont cliqué sur j'aime."],
  ["Omar thinks the policy is wise because the biggest crowd applauded.", "Omar pense que la politique est sage parce que la plus grande foule a applaudi."],
  ["A teacher says the answer is proven because the whole class wrote the same thing.", "Un enseignant dit que la réponse est prouvée parce que toute la classe a écrit la même chose."],
  ["Leo trusts the phone because it has the highest number of preorders.", "Leo fait confiance au téléphone parce qu'il a le plus grand nombre de précommandes."],
  ["The poster says the club is excellent because many students joined.", "L'affiche dit que le club est excellent parce que beaucoup d'élèves l'ont rejoint."],
  ["Mia picks the route because 60 drivers rated it first.", "Mia choisit l'itinéraire parce que 60 conducteurs l'ont classé en premier."],
  ["Ben says the city rule is correct because the vote margin was huge.", "Ben dit que la règle de la ville est correcte parce que l'écart de vote était énorme."],
  ["Theo says the bus route must be the best because 700 riders use it every day.", "Theo dit que la ligne de bus doit être la meilleure parce que 700 passagers l'utilisent chaque jour."],
  ["Nina believes the phone plan is great because it has the largest subscriber count.", "Nina croit que le forfait téléphonique est excellent parce qu'il a le plus grand nombre d'abonnés."],
  ["Ben trusts the cafe because the receipt stack shows it sold the most drinks.", "Ben fait confiance au café parce que la pile de reçus montre qu'il a vendu le plus de boissons."],
  ["Priya says the app is correct because 500 users clicked the same answer.", "Priya dit que l'application est correcte parce que 500 utilisateurs ont cliqué sur la même réponse."],
  ["Omar assumes the route is safest because most drivers take it after work.", "Omar suppose que l'itinéraire est le plus sûr parce que la plupart des conducteurs le prennent après le travail."],
  ["Maya believes the jacket is the right choice because it has the highest likes online.", "Maya croit que la veste est le bon choix parce qu'elle a le plus de j'aime en ligne."],
  ["Leo says the school rule is right because the vote margin was huge.", "Leo dit que la règle de l'école est juste parce que l'écart de vote était énorme."],
  ["Rina trusts the dinner spot because the waitlist is the longest in town.", "Rina fait confiance au restaurant parce que la liste d'attente est la plus longue de la ville."],
  ["Jules thinks the newsletter is true because it reached the most inboxes.", "Jules pense que la lettre d'information est vraie parce qu'elle a atteint le plus grand nombre de boîtes de réception."],
  ["Ava says the gadget is superior because 2,000 people preordered it.", "Ava dit que le gadget est supérieur parce que 2 000 personnes l'ont précommandé."],
];

const EN = ['Argument from Numbers', 'Appeal to Popularity', 'Appeal to Authority', 'False Dilemma'];
const FR = ["Appel au nombre", 'Appel à la popularité', "Appel à l'autorité", 'Fausse dichotomie'];

const rotate = (a: string[], i: number) => {
  const r = a.slice(1);
  r.splice(i, 0, a[0]);
  return r;
};

const sub = (i: number) => (i < 17 ? SubLevel.BEGINNER : i < 34 ? SubLevel.INTERMEDIATE : SubLevel.EXPERT);

function make(fr = false): Question[] {
  return SCENARIOS.map((s, i) => {
    const c = i % 4;
    return {
      id: 30901 + i,
      level: 10,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? "Appel au nombre" : 'Argument from Numbers',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? FR : EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Un grand nombre de personnes, d'achats ou de votes est traité comme une preuve suffisante de vérité ou de qualité."
        : 'A large number of people, purchases, or votes is treated as enough proof of truth or quality.',
      detailedExplanationBeginner: fr
        ? "Le nombre seul ne prouve rien."
        : 'A count alone proves nothing.',
      detailedExplanationIntermediate: fr
        ? "Les chiffres peuvent signaler une tendance, mais ils ne montrent pas à eux seuls si une affirmation est vraie ou meilleure."
        : 'Numbers can show a trend, but they do not by themselves show that a claim is true or better.',
      detailedExplanationExpert: fr
        ? "L'argument du nombre transforme un indicateur statistique ou social en preuve décisive, sans examiner la qualité des raisons derrière les chiffres."
        : 'Argument from numbers turns a statistical or social indicator into decisive proof without examining the quality of the reasons behind the counts.',
      questionFormat: 'standard',
    };
  });
}

export const ARGUMENT_FROM_NUMBERS_EXPANSION_EN: Question[] = make();
export const ARGUMENT_FROM_NUMBERS_EXPANSION_FR: Question[] = make(true);
