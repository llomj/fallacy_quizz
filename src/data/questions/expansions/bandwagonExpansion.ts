import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["Everyone in the office starts buying the same lunch, so Mina assumes it must be the best lunch.", "Tout le bureau commence a acheter le meme dejeuner, alors Mina suppose que c'est forcement le meilleur."],
  ["Jay joins the club only because all his friends joined it.", "Jay rejoint le club uniquement parce que tous ses amis l'ont rejoint."],
  ["Ava says the new cafe is great because the line is longer there than anywhere else.", "Ava dit que le nouveau cafe est genial parce que la file y est plus longue qu'ailleurs."],
  ["Noah buys the sneakers after seeing half his class wear them.", "Noah achete les baskets apres avoir vu la moitie de sa classe les porter."],
  ["Leah wants the streaming service just because everyone at school is talking about it.", "Leah veut l'abonnement de streaming juste parce que tout le monde a l'ecole en parle."],
  ["The neighbor starts planting lavender because the whole street suddenly did.", "Le voisin se met a planter de la lavande parce que toute la rue l'a soudain fait."],
  ["Priya believes the new restaurant is a must-try because the parking lot is packed.", "Priya pense que le nouveau restaurant est incontournable parce que le parking est plein."],
  ["Eli upgrades his phone because the team chat says the model is 'the one to get'.", "Eli change de telephone parce que le groupe dit que ce modele est 'celui qu'il faut prendre'."],
  ["The class picks the same study app because the most popular kids use it.", "La classe choisit la meme application de revision parce que les eleves les plus populaires l'utilisent."],
  ["Sara trusts the rumor because it has been repeated in every group chat.", "Sara fait confiance a la rumeur parce qu'elle a ete repetee dans tous les groupes de discussion."],
  ["Ben orders the trendy drink because the whole table ordered it.", "Ben commande la boisson a la mode parce que toute la table l'a commandee."],
  ["Talia says the new hairstyle must suit her because her coworkers all copied it.", "Talia dit que la nouvelle coiffure doit lui aller parce que tous ses collegues l'ont copiee."],
  ["Owen signs up for the gym because his friends will tease him if he doesn't.", "Owen s'inscrit a la salle parce que ses amis se moqueront de lui s'il ne le fait pas."],
  ["Maya assumes the concert is amazing because every seat in the venue is sold out.", "Maya suppose que le concert est incroyable parce que toutes les places sont vendues."],
  ["The cashier says the gadget is worth it because everyone in the store is carrying one.", "La caissiere dit que le gadget en vaut la peine parce que tout le monde dans le magasin en porte un."],
  ["Luca tries the app because the leaderboard makes it look like the only serious choice.", "Luca essaie l'application parce que le classement la fait passer pour le seul choix serieux."],
  ["The parent buys the new backpack because the school pickup line is full of them.", "Le parent achete le nouveau sac a dos parce que la file de sortie de l'ecole en est pleine."],
  ["Iris agrees with the plan after hearing the whole group cheer for it.", "Iris accepte le plan apres avoir entendu tout le groupe l'applaudir."],
  ["Theo thinks the snack is better because the entire friend group posted it online.", "Theo pense que l'en-cas est meilleur parce que tout le groupe d'amis l'a poste en ligne."],
  ["Zoe says the class trip should be to the same place as last year because that's what everyone expects.", "Zoe dit que la sortie de classe devrait aller au meme endroit que l'annee derniere parce que c'est ce que tout le monde attend."],
  ["The student copies the jacket style because the basketball team wears it.", "L'eleve copie le style de veste parce que l'equipe de basket le porte."],
  ["Rory trusts the app review because it has far more likes than the others.", "Rory fait confiance a l'avis sur l'application parce qu'il a bien plus de likes que les autres."],
  ["Nina wants the same trainer as her friends because she doesn't want to look left out.", "Nina veut le meme coach que ses amis parce qu'elle ne veut pas se sentir exclue."],
  ["Aiden calls the new board game a hit because the whole family picked it first.", "Aiden dit que le nouveau jeu de societe est un succes parce que toute la famille l'a choisi en premier."],
  ["The shop owner puts the bestseller on display because 'people must know something we don't'.", "Le proprietaire du magasin met la meilleure vente en vitrine parce que 'les gens doivent savoir quelque chose que nous ne savons pas'."],
  ["Camila says the new podcast is important because all the influencers mention it.", "Camila dit que le nouveau podcast est important parce que tous les influenceurs en parlent."],
  ["Ben follows the crowd to the long queue without checking what it is for.", "Ben suit la foule vers la longue file sans verifier a quoi elle correspond."],
  ["Harper chooses the same vacation spot as the office because she thinks popular means right.", "Harper choisit la meme destination de vacances que le bureau parce qu'elle pense que populaire veut dire juste."],
  ["The teen buys the water bottle because every student in the hall has one.", "L'adolescent achete la gourde parce que chaque eleve du couloir en a une."],
  ["Jade believes the restaurant must be safe because it is the busiest one in town.", "Jade croit que le restaurant doit etre sur parce que c'est le plus frequente de la ville."],
  ["Omar signs up for the dance class because the group chat says 'everyone's doing it'.", "Omar s'inscrit au cours de danse parce que le groupe dit que 'tout le monde le fait'."],
  ["The commuter switches routes after hearing coworkers say the new route is the norm.", "Le navetteur change d'itineraire apres avoir entendu ses collegues dire que le nouvel itineraire est la norme."],
  ["Ava thinks the movie must be worth watching because all her cousins already saw it.", "Ava pense que le film doit valoir le coup parce que tous ses cousins l'ont deja vu."],
  ["The school club adopts the same logo as the famous club because it looks more legit.", "Le club scolaire adopte le meme logo que le club celebre parce que cela parait plus legitime."],
  ["Milo believes the headphones are better because the whole gaming squad uses them.", "Milo croit que les ecouteurs sont meilleurs parce que toute l'equipe de jeu les utilise."],
  ["The café starts selling a new pastry after customers ask for 'the one everyone gets'.", "Le café commence a vendre une nouvelle patisserie apres que les clients ont demande 'celle que tout le monde prend'."],
  ["Lena says the expensive jacket is a smart buy because the popular kids all bought it.", "Lena dit que la veste chere est un bon achat parce que les eleves populaires l'ont tous achetee."],
  ["The team switches to a new planner because the busiest manager recommended it.", "L'equipe passe a un nouveau planning parce que le manager le plus occupe l'a recommande."],
  ["Evan trusts the course because all the comments sound the same.", "Evan fait confiance au cours parce que tous les commentaires se ressemblent."],
  ["Mia assumes the festival food is safe because the whole crowd is eating it.", "Mia suppose que la nourriture du festival est sure parce que toute la foule en mange."],
  ["The student picks the same elective as the cool group to avoid standing out.", "L'eleve choisit la meme option que le groupe populaire pour eviter de se faire remarquer."],
  ["The family books the crowded campground because 'everyone goes there'.", "La famille reserve le camping bondé parce que 'tout le monde y va'."],
  ["Noah says the new headphones are the best because they are the ones every streamer shows.", "Noah dit que les nouveaux ecouteurs sont les meilleurs parce que ce sont ceux que tous les streamers montrent."],
  ["Tia joins the expensive dinner just because she doesn't want to be the only one skipping it.", "Tia participe au diner cher juste parce qu'elle ne veut pas etre la seule a le manquer."],
  ["The office starts using the same chat emoji because one manager used it first and everyone copied.", "Le bureau commence a utiliser le meme emoji de chat parce qu'un manager l'a utilise en premier et que tout le monde l'a copie."],
  ["Riley believes the diet works because all the neighbors are talking about it.", "Riley croit que le regime fonctionne parce que tous les voisins en parlent."],
  ["The student chooses the same elective because the class group says it is the safe option.", "L'eleve choisit la meme option parce que le groupe de classe dit que c'est le choix sur."],
  ["A shop assistant pushes the sold-out item because 'people line up for it for a reason'.", "Un vendeur pousse l'article en rupture parce que 'les gens font la queue pour une raison'."],
  ["Kai joins the trendy running club because the town seems obsessed with it.", "Kai rejoint le club de course a la mode parce que la ville semble obsedee par lui."],
  ["The teacher says the answer must be right because the loudest students all agree.", "L'enseignant dit que la reponse doit etre juste parce que les eleves les plus bruyants sont tous d'accord."],
];

const EN = ['Bandwagon', 'Appeal to Popularity', 'Appeal to Authority', 'False Dilemma'];
const FR = ['Effet de mode', 'Appel à la popularité', "Appel à l'autorité", 'Fausse dichotomie'];

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
      id: 32101 + i,
      level: 9,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Effet de mode' : 'Bandwagon',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? FR : EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Quelque chose semble vrai ou bon simplement parce que beaucoup de gens l'acceptent, le suivent ou le copient."
        : 'Something seems true or good simply because many people accept, follow, or copy it.',
      detailedExplanationBeginner: fr
        ? "La popularite ne remplace pas une bonne raison."
        : 'Popularity is not a substitute for a good reason.',
      detailedExplanationIntermediate: fr
        ? "Quand on confond adhesion sociale et preuve, on traite le nombre d'adeptes comme un argument."
        : 'When social approval is treated as proof, the number of followers gets mistaken for an argument.',
      detailedExplanationExpert: fr
        ? "L'effet de mode exploite la pression sociale: plus une chose semble commune ou approuvee, plus elle parait legitime, meme sans evaluation independante."
        : 'The bandwagon effect exploits social pressure: the more common or approved something seems, the more legitimate it feels, even without independent evaluation.',
      questionFormat: 'standard',
    };
  });
}

export const BANDWAGON_EXPANSION_EN: Question[] = make();
export const BANDWAGON_EXPANSION_FR: Question[] = make(true);
