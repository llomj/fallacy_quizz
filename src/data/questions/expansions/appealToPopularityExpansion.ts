import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["The office buys a neon desk lamp because it was the most photographed item at the trade show, not because anyone checked if it works after dark in the office.", "Le bureau achète une lampe de bureau néon parce que c'était l'objet le plus photographié au salon, pas parce que quelqu'un a vérifié si elle marche dans le noir au bureau."],
  ["Maya says the new café must be great because there is always a line outside for iced lattes before work on Mondays and Fridays.", "Maya dit que le nouveau café doit être excellent parce qu'il y a toujours une file dehors pour les lattes glacés avant le travail le lundi et le vendredi."],
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
  ["Maya trusts the new coffee blend because everyone in her feed ordered it.", "Maya fait confiance au nouveau mélange de café parce que tout son fil l'a commandé."],
  ["Leo buys the jacket because the launch crowd clapped when it appeared.", "Leo achète la veste parce que la foule du lancement a applaudi quand elle est apparue."],
  ["Priya says the fitness plan must work because all her friends are talking about it.", "Priya dit que le programme sportif doit marcher parce que tous ses amis en parlent."],
  ["Ben believes the new burger is the best because the whole group photo was eating it.", "Ben croit que le nouveau burger est le meilleur parce que toute la photo de groupe en mangeait."],
  ["Nina assumes the app is trustworthy because the comments are packed with praise.", "Nina suppose que l'application est fiable parce que les commentaires sont remplis d'éloges."],
  ["Omar says the team strategy is correct because the crowd at the game shouted for it.", "Omar dit que la stratégie d'équipe est correcte parce que la foule du match l'a réclamée."],
  ["Rina trusts the podcast because everyone at lunch said it was brilliant.", "Rina fait confiance au podcast parce que tout le monde au déjeuner a dit qu'il était génial."],
  ["Jules thinks the new school rule is right because the student council approved it.", "Jules pense que la nouvelle règle scolaire est juste parce que le conseil des élèves l'a approuvée."],
  ["Ava buys the lamp because it is the top-rated choice in the office chat.", "Ava achète la lampe parce que c'est le choix le mieux noté dans le chat du bureau."],
  ["Theo trusts the snack because the release video got a standing ovation from the crowd.", "Theo fait confiance à l'en-cas parce que la vidéo de lancement a reçu une ovation de la foule."],
  [`Maya buys the water bottle because everyone in her group chat already has one.`, `Maya achète la bouteille d eau parce que tout le monde dans son groupe de discussion en a déjà une.`],
  [`Leo says the new show must be good because every friend at lunch mentioned it.`, `Leo dit que la nouvelle série doit être bonne parce que chaque ami au déjeuner en a parlé.`],
  [`Nina joins the club because the hallway buzz makes it sound like the only option.`, `Nina rejoint le club parce que l agitation du couloir lui donne l impression que c est la seule option.`],
  [`Owen trusts the snack because the whole class posted it on social media.`, `Owen fait confiance à la collation parce que toute la classe l a publiée sur les reseaux sociaux.`],
  [`Priya buys the shoes because the launch crowd cheered when they appeared.`, `Priya achète les chaussures parce que la foule du lancement a applaudi quand elles sont apparues.`],
  [`Ben thinks the app is safe because thousands of strangers praised it online.`, `Ben pense que l application est sûre parce que des milliers d inconnus l ont louée en ligne.`],
  [`Tara says the team strategy must be right because the whole section was chanting for it.`, `Tara dit que la stratégie de l équipe doit être juste parce que toute la tribune la scandait.`],
  [`Kai trusts the new coffee because everyone in the office keeps posting it.`, `Kai fait confiance au nouveau café parce que tout le bureau n arrête pas de le publier.`],
  [`Jules buys the jacket because the crowd at the reveal applauded loudly.`, `Jules achète la veste parce que la foule de la présentation a applaudi très fort.`],
  [`Ava says the school rule is smart because the student council approved it.`, `Ava dit que la règle scolaire est intelligente parce que le conseil des élèves l a approuvée.`],
  [`Noah chooses the burger because it is the top seller on the menu board.`, `Noah choisit le burger parce que c est le meilleur vendeur sur le tableau du menu.`],
  [`Mina assumes the podcast is brilliant because everyone at lunch keeps quoting it.`, `Mina suppose que le podcast est génial parce que tout le monde au déjeuner n arrête pas de le citer.`],
  [`Eli trusts the travel tip because a crowd followed it in the video.`, `Eli fait confiance au conseil de voyage parce qu une foule l a suivi dans la vidéo.`],
  [`Rina buys the lotion because her feed is full of people using it.`, `Rina achète la lotion parce que son fil est rempli de gens qui l utilisent.`],
  [`Hugo says the movie is a classic because his whole chat group loved it.`, `Hugo dit que le film est un classique parce que tout son groupe de discussion l a adoré.`],
  [`Lina joins the trend because not joining would feel embarrassing.`, `Lina rejoint la tendance parce que ne pas le faire semblerait gênant.`],
  [`Grant trusts the headphones because every influencer he follows has them.`, `Grant fait confiance aux écouteurs parce que tous les influenceurs qu il suit les ont.`],
  [`Zoe says the recipe must be great because it got the most likes on the page.`, `Zoe dit que la recette doit être excellente parce qu elle a eu le plus de likes sur la page.`],
  [`Milo thinks the phone is the best because the comments are packed with praise.`, `Milo pense que le téléphone est le meilleur parce que les commentaires sont remplis d éloges.`],
  [`Theo buys the toy because every kid in the release video wanted it.`, `Theo achète le jouet parce que tous les enfants de la vidéo de lancement le voulaient.`],
  [`Pia says the restaurant is the right choice because it is packed on Friday night.`, `Pia dit que le restaurant est le bon choix parce qu il est plein le vendredi soir.`],
  [`Finn trusts the new class because the whole row said it was cool.`, `Finn fait confiance à la nouvelle classe parce que toute la rangée a dit que c était cool.`],
  [`Maya buys the candle because the office chat said it was the nicest one.`, `Maya achète la bougie parce que le chat du bureau a dit que c était la plus jolie.`],
  [`Sam believes the app is useful because the entire feed is praising it.`, `Sam croit que l application est utile parce que tout son fil la loue.`],
  [`Juno says the plan is right because the crowd at the meeting cheered.`, `Juno dit que le plan est juste parce que la foule de la réunion a applaudi.`],
  [`Iris supports the change because no one in the group complained loudly.`, `Iris soutient le changement parce que personne dans le groupe ne s est plaint bruyamment.`],
  [`Cole thinks the schedule is perfect because it got the most votes.`, `Cole pense que l horaire est parfait parce qu il a reçu le plus de votes.`],
  [`Nora buys the expensive backpack because all her neighbors have one.`, `Nora achète le sac à dos cher parce que tous ses voisins en ont un.`],
  [`Ari trusts the new game because every streamer is playing it.`, `Ari fait confiance au nouveau jeu parce que tous les streamers y jouent.`],
  [`Rita says the policy is good because the student council approved it.`, `Rita dit que la politique est bonne parce que le conseil des élèves l a approuvée.`],
  [`Tia joins the club because everyone in class joined yesterday.`, `Tia rejoint le club parce que tout le monde en classe l a rejoint hier.`],
  [`Oli chooses the snack because it is the most repeated recommendation online.`, `Oli choisit la collation parce que c est la recommandation la plus répétée en ligne.`],
  [`Lara trusts the watch because so many people posted it on launch day.`, `Lara fait confiance à la montre parce que tant de gens l ont publiée le jour du lancement.`],
  [`Ben buys the paint because the hardware store crowd recommended it.`, `Ben achète la peinture parce que la foule du magasin de bricolage la recommandait.`],
  [`Mina says the hotel is great because the line outside is long.`, `Mina dit que l hôtel est génial parce que la file dehors est longue.`],
  [`Drew believes the new mug is the best because everyone in the office is using it.`, `Drew croit que la nouvelle tasse est la meilleure parce que tout le bureau l utilise.`],
  [`Jade trusts the fitness plan because all her friends downloaded it.`, `Jade fait confiance au programme de fitness parce que tous ses amis l ont téléchargé.`],
  [`Owen says the brand must be trustworthy because it is the top seller.`, `Owen dit que la marque doit être digne de confiance parce qu elle est la meilleure vendeuse.`],
  [`Mila buys the desk lamp because the launch crowd clapped when it appeared.`, `Mila achète la lampe de bureau parce que la foule du lancement a applaudi quand elle est apparue.`],
  [`Evan believes the school trip is safe because everyone signed the form.`, `Evan croit que la sortie scolaire est sûre parce que tout le monde a signé le formulaire.`],
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
