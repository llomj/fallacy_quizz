import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["The office buys a neon desk lamp because it was the most photographed item at the trade show, not because anyone checked if it works.", "Le bureau achète une lampe de bureau néon parce que c'était l'objet le plus photographié au salon, pas parce que quelqu'un a vérifié si elle marche."],
  ["Maya says the new café must be great because there is always a line outside for iced lattes.", "Maya dit que le nouveau café doit être excellent parce qu'il y a toujours une file dehors pour les lattes glacés."],
  ["Theo trusts the shampoo because all his friends say they use it.", "Theo fait confiance au shampoing parce que tous ses amis disent l'utiliser."],
  ["The ad says millions love the sneakers, so they must be the right choice.", "La pub dit que des millions de personnes adorent les baskets, donc elles doivent être le bon choix."],
  ["Nina buys the same mug as the influencer because it is trending.", "Nina achète la même tasse que l'influenceuse parce qu'elle est à la mode."],
  ["Ben joins the new club only because everyone in class joined yesterday.", "Ben rejoint le nouveau club seulement parce que tout le monde en classe l'a rejoint hier."],
  ["A student says the answer is correct because half the room raised their hand.", "Un élève dit que la réponse est correcte parce que la moitié de la classe a levé la main."],
  ["Omar thinks the app is safe because it has thousands of five-star reviews.", "Omar pense que l'application est sûre parce qu'elle a des milliers d'avis cinq étoiles."],
  ["The poster says the fastest way to be cool is to buy what everyone else is buying.", "L'affiche dit que le moyen le plus rapide d'être cool est d'acheter ce que tout le monde achète."],
  ["Priya trusts the gossip because the whole chat group repeats it.", "Priya fait confiance à la rumeur parce que tout le groupe de discussion la répète."],
  ["A cousin buys the new game because all the streamers are playing it.", "Un cousin achète le nouveau jeu parce que tous les streamers y jouent."],
  ["Mia says the party is worth attending because everyone in town is going.", "Mia dit que la fête vaut le coup parce que tout le monde en ville y va."],
  ["The bakery claims the cookie is amazing because it sold out in an hour.", "La boulangerie affirme que le biscuit est incroyable parce qu'il s'est vendu en une heure."],
  ["Leo assumes the phone is the best because his entire feed is praising it.", "Leo suppose que le téléphone est le meilleur parce que tout son fil en parle en bien."],
  ["A friend trusts the school rumor because 'everyone knows it'.", "Un ami fait confiance à la rumeur de l'école parce que « tout le monde le sait »."],
  ["The ad says the water bottle is superior because all the athletes in the video use it.", "La pub dit que la gourde est supérieure parce que tous les athlètes de la vidéo l'utilisent."],
  ["Maya buys the expensive lamp because all her neighbors have one.", "Maya achète la lampe chère parce que tous ses voisins en ont une."],
  ["A manager says the plan must be good because the whole department nodded.", "Un manager dit que le plan doit être bon parce que tout le service a hoché la tête."],
  ["Zoe picks the restaurant because it is packed on Friday night.", "Zoe choisit le restaurant parce qu'il est plein un vendredi soir."],
  ["The flyer says the diet works because everybody online is talking about it.", "Le prospectus dit que le régime fonctionne parce que tout le monde en ligne en parle."],
  ["Theo believes the new chair is best because every review says so.", "Theo croit que la nouvelle chaise est la meilleure parce que tous les avis le disent."],
  ["A parent says the game is appropriate because the other parents allow it.", "Un parent dit que le jeu est approprié parce que les autres parents l'autorisent."],
  ["Ben assumes the latest playlist is perfect because everyone shared it.", "Ben suppose que la dernière playlist est parfaite parce que tout le monde l'a partagée."],
  ["The store says the jacket must be stylish because it is the most liked item online.", "Le magasin dit que la veste doit être stylée parce que c'est l'article le plus aimé en ligne."],
  ["Nina trusts the travel tip because a crowd followed it in the video.", "Nina fait confiance au conseil de voyage parce qu'une foule l'a suivi dans la vidéo."],
  ["A friend says the movie is a classic because everybody in her group chat loved it.", "Un ami dit que le film est un classique parce que tout son groupe de discussion l'a adoré."],
  ["Omar buys the new gadget because the launch crowd cheered.", "Omar achète le nouveau gadget parce que la foule du lancement a applaudi."],
  ["The school says the policy is smart because the student council approved it.", "L'école dit que la politique est intelligente parce que le conseil des élèves l'a approuvée."],
  ["Priya believes the shortcut is best because a dozen people said it first.", "Priya croit que le raccourci est le meilleur parce qu'une douzaine de personnes l'ont dit en premier."],
  ["A cousin says the snack is healthy because it is popular in every lunchroom.", "Un cousin dit que l'en-cas est sain parce qu'il est populaire dans toutes les cantines."],
  ["The review says the service is great because nobody is complaining loudly.", "La critique dit que le service est excellent parce que personne ne se plaint bruyamment."],
  ["Mia trusts the latest podcast because the comments are full of praise.", "Mia fait confiance au dernier podcast parce que les commentaires sont remplis d'éloges."],
  ["A neighbor buys the paint because everyone at the hardware store recommends it.", "Un voisin achète la peinture parce que tout le monde au magasin de bricolage la recommande."],
  ["The coach says the warmup is effective because the whole team does it.", "L'entraîneur dit que l'échauffement est efficace parce que toute l'équipe le fait."],
  ["Leo assumes the new schedule is right because it got the most votes.", "Leo suppose que le nouvel horaire est correct parce qu'il a reçu le plus de votes."],
  ["A student says the answer must be right because the whole row answered it.", "Un élève dit que la réponse doit être correcte parce que toute la rangée l'a donnée."],
  ["The ad says the detergent is best because the launch crowd clapped.", "La pub dit que la lessive est la meilleure parce que la foule du lancement a applaudi."],
  ["Maya believes the diet app is effective because all her friends downloaded it.", "Maya croit que l'application de régime est efficace parce que tous ses amis l'ont téléchargée."],
  ["The seller says the watch is premium because so many people posted it.", "Le vendeur dit que la montre est haut de gamme parce que tant de gens l'ont publiée."],
  ["A friend trusts the rumor because it is the most repeated thing in the office.", "Un ami fait confiance à la rumeur parce que c'est la chose la plus répétée au bureau."],
  ["Ben says the brand must be trustworthy because it is the top seller.", "Ben dit que la marque doit être digne de confiance parce que c'est la meilleure vendeuse."],
  ["The poster says the app is worth it because everybody in the ad says it is.", "L'affiche dit que l'application vaut le coup parce que tout le monde dans la pub le dit."],
  ["Nina buys the new mug because it is the one all the staff used in the video.", "Nina achète la nouvelle tasse parce que c'est celle que tout le personnel utilise dans la vidéo."],
  ["Omar trusts the recipe because it got the most likes on the page.", "Omar fait confiance à la recette parce qu'elle a eu le plus de likes sur la page."],
  ["A parent assumes the school trip is safe because everyone signed the form.", "Un parent suppose que la sortie scolaire est sûre parce que tout le monde a signé le formulaire."],
  ["The flyer says the shoes are comfortable because the crowd at the reveal loved them.", "Le prospectus dit que les chaussures sont confortables parce que la foule de la présentation les a adorées."],
  ["Priya thinks the new lotion works because her feed is full of people using it.", "Priya pense que la nouvelle lotion fonctionne parce que son fil est rempli de gens qui l'utilisent."],
  ["A customer says the toy is the best because every kid in the video wanted it.", "Une cliente dit que le jouet est le meilleur parce que tous les enfants de la vidéo le voulaient."],
  ["Theo believes the plan is smart because the audience cheered at the end.", "Theo croit que le plan est intelligent parce que le public a applaudi à la fin."],
  ["Mia says the brand-new desk is the right choice because it is the one everyone seems to share.", "Mia dit que le bureau tout neuf est le bon choix parce que c'est celui que tout le monde semble partager."],
];

const EN = ['Appeal to Popularity', 'Appeal to Authority', 'False Dilemma', 'Bandwagon'];
const FR = ["Appel à la popularité", "Appel à l'autorité", 'Fausse dichotomie', 'Effet de mode'];

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
      id: 30701 + i,
      level: 1,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Appel à la popularité' : 'Appeal to Popularity',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? FR : EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Une idée est prise pour vraie ou bonne seulement parce qu'elle est populaire ou adoptée par beaucoup de gens."
        : 'An idea is treated as true or good only because it is popular or adopted by many people.',
      detailedExplanationBeginner: fr
        ? "Très populaire ne veut pas dire correct."
        : 'Very popular does not mean correct.',
      detailedExplanationIntermediate: fr
        ? "Le nombre de personnes qui croient quelque chose n'est pas une preuve suffisante de sa vérité."
        : 'The number of people who believe something is not enough to prove it true.',
      detailedExplanationExpert: fr
        ? "L'appel à la popularité transforme l'adhésion sociale en argument, alors que le consensus peut venir de modes, de pression de groupe ou d'effets de contagion sociale."
        : 'Appeal to popularity turns social approval into an argument, even though consensus can come from trends, peer pressure, or social contagion.',
      questionFormat: 'standard',
    };
  });
}

export const APPEAL_TO_POPULARITY_EXPANSION_EN: Question[] = make();
export const APPEAL_TO_POPULARITY_EXPANSION_FR: Question[] = make(true);
