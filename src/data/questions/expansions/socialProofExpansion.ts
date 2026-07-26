import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya sees a packed cafe and assumes the coffee must be good, even though she has never tried it.', 'Maya voit un cafe bondé et suppose que le cafe doit etre bon, meme si elle ne l a jamais essaye.'],
  ['Ben books the restaurant with the long line because the wait makes it seem trustworthy.', 'Ben reserve le restaurant avec la longue file parce que l attente le fait paraitre fiable.'],
  ['Priya buys the water bottle because everyone in her office is carrying the same one.', 'Priya achete la bouteille d eau parce que tout le monde au bureau porte la meme.'],
  ['Noah trusts the new podcast because his whole friend group is suddenly talking about it.', 'Noah fait confiance au nouveau podcast parce que tout son groupe d amis en parle soudain.'],
  ['Lina thinks the app is worth trying because all the comments are full of people saying they love it.', 'Lina pense que l application vaut la peine d etre essayee parce que tous les commentaires sont pleins de gens qui disent l adorer.'],
  ['Theo joins the study group because the smartest students all picked it first.', 'Theo rejoint le groupe d etude parce que les eleves les plus forts l ont tous choisi en premier.'],
  ['Ava believes the museum exhibit must be excellent because the opening night was packed.', 'Ava croit que l exposition du musee doit etre excellente parce que la soiree d ouverture etait bondée.'],
  ['Omar trusts the new snack because every kid in the video was asking for it.', 'Omar fait confiance au nouvel en-cas parce que tous les enfants de la video le demandaient.'],
  ['Rina starts using the same planner as her coworkers because it looks like the office standard.', 'Rina commence à utiliser le meme agenda que ses collegues parce qu il ressemble au standard du bureau.'],
  ['Jules thinks the phone case is good because he saw it on three different desks at school.', 'Jules pense que la coque de telephone est bonne parce qu il l a vue sur trois bureaux differents à l ecole.'],
  ['Mina buys the candle because the launch crowd applauded when it appeared.', 'Mina achete la bougie parce que la foule du lancement a applaudi quand elle est apparue.'],
  ['Eli assumes the new lunch spot is safe because the line outside keeps getting longer.', 'Eli suppose que le nouveau lieu de dejeuner est sur parce que la file dehors ne cesse de s allonger.'],
  ['Hugo believes the streaming show is a hit because everyone in his group chat watched it.', 'Hugo croit que la serie en streaming est un succes parce que tout son groupe de discussion l a regardee.'],
  ['Lea chooses the same jacket as the popular kids because it feels like the right crowd decision.', 'Lea choisit la meme veste que les eleves populaires parce que cela ressemble au bon choix du groupe.'],
  ['Grant says the new game must be fun because all his cousins were excited about it.', 'Grant dit que le nouveau jeu doit etre amusant parce que tous ses cousins etaient enthousiastes à son sujet.'],
  ['Tia trusts the food truck because the crowd at the park keeps returning to it.', 'Tia fait confiance au camion de nourriture parce que la foule du parc y revient sans cesse.'],
  ['Nora joins the dance class after seeing every friend in her feed post the same move.', 'Nora rejoint le cours de danse apres avoir vu tous ses amis sur son fil publier le meme mouvement.'],
  ['Sam thinks the laptop is the best option because the whole office switched to it.', 'Sam pense que l ordinateur portable est la meilleure option parce que tout le bureau y est passe.'],
  ['Jade assumes the school event is important because the student council and the loudest students all showed up.', 'Jade suppose que l evenement scolaire est important parce que le conseil des eleves et les eleves les plus bruyants y sont tous alles.'],
  ['Owen buys the same running shoes as the gym group because they look like the accepted choice.', 'Owen achete les memes chaussures de course que le groupe de la salle de sport parce qu elles ressemblent au choix admis.'],
  ['Ari trusts the online recipe because the page is covered with praise and reposts.', 'Ari fait confiance à la recette en ligne parce que la page est couverte d eloges et de partages.'],
  ['Pia orders the dessert because every table around her seems to have one.', 'Pia commande le dessert parce que chaque table autour d elle semble en avoir un.'],
  ['Ben says the new brand is probably good because the package looks popular in every store aisle.', 'Ben dit que la nouvelle marque est probablement bonne parce que l emballage a l air populaire dans chaque rayon.'],
  ['Zoe starts reading the book because her whole class keeps saying it is the one to read.', 'Zoe commence à lire le livre parce que toute sa classe n arrete pas de dire que c est celui qu il faut lire.'],
  ['Ravi tries the app because the screenshots show a long list of happy users.', 'Ravi essaie l application parce que les captures d ecran montrent une longue liste d utilisateurs contents.'],
  ['Sofia believes the new gym is worth it because all the neighbors are signing up together.', 'Sofia croit que la nouvelle salle de sport en vaut la peine parce que tous les voisins s inscrivent ensemble.'],
  ['Lara trusts the restaurant because the busiest tables keep getting refilled.', 'Lara fait confiance au restaurant parce que les tables les plus occupees se remplissent sans cesse.'],
  ['Cole chooses the same backpack as the kids in the front row because it looks approved by the group.', 'Cole choisit le meme sac a dos que les enfants du premier rang parce qu il a l air approuve par le groupe.'],
  ['Maya buys the new headphones because the launch video is full of people cheering for them.', 'Maya achete les nouveaux ecouteurs parce que la video de lancement est pleine de gens qui les applaudissent.'],
  ['Ezra trusts the speaker because the room filled with nods when the speaker finished.', 'Ezra fait confiance à l orateur parce que la salle s est remplie de hochements de tete quand l orateur a termine.'],
  ['Nina believes the app is reliable because everyone at lunch recommended it in the same breath.', 'Nina croit que l application est fiable parce que tout le monde au dejeuner l a recommandee dans la meme conversation.'],
  ['Hana joins the club because the most admired students are already in it.', 'Hana rejoint le club parce que les eleves les plus admires y sont deja.'],
  ['Dylan says the bakery must be good because the line goes past the corner every morning.', 'Dylan dit que la boulangerie doit etre bonne parce que la file depasse le coin chaque matin.'],
  ['Penny trusts the new fitness plan because her coworkers keep posting their progress with it.', 'Penny fait confiance au nouveau programme de fitness parce que ses collegues publient sans cesse leurs progres avec.'],
  ['Kira assumes the festival is amazing because the crowd on social media looks thrilled.', 'Kira suppose que le festival est incroyable parce que la foule sur les reseaux sociaux a l air ravie.'],
  ['Finn buys the same coffee blend as his whole team because nobody wants to be the odd one out.', 'Finn achete le meme melange de cafe que toute son equipe parce que personne ne veut etre l element bizarre.'],
  ['Juno thinks the neighborhood market is best because the parking lot fills up every evening.', 'Juno pense que le marche du quartier est le meilleur parce que le parking se remplit chaque soir.'],
  ['Olivia tries the trending lotion because every beauty video says people love it.', 'Olivia essaie la lotion tendance parce que chaque video beaute dit que les gens l adorent.'],
  ['Mila says the new planner is smart because it is the one all the office assistants picked.', 'Mila dit que le nouvel agenda est intelligent parce que c est celui que toutes les assistantes du bureau ont choisi.'],
  ['Leo trusts the movie recommendation because the whole bus was talking about the same scene.', 'Leo fait confiance à la recommandation du film parce que tout le bus parlait de la meme scene.'],
  ['Tara joins the yoga class because the waiting list makes it feel legit.', 'Tara rejoint le cours de yoga parce que la liste d attente lui donne l air legitime.'],
  ['Hugo says the snack is good because every kid at the party grabbed one.', 'Hugo dit que l en-cas est bon parce que chaque enfant de la fete en a pris un.'],
  ['Lea starts using the same note app as her friends because it seems like the safe choice.', 'Lea commence à utiliser la meme application de notes que ses amis parce qu elle semble etre le choix sur.'],
  ['Max trusts the course because the testimonials sound like a crowd of happy students.', 'Max fait confiance au cours parce que les temoignages ressemblent a une foule d etudiants contents.'],
  ['Yara chooses the restaurant because the table next to her keeps telling each other how great it is.', 'Yara choisit le restaurant parce que la table à cote d elle se dit sans cesse qu il est genial.'],
  ['Dan believes the gym class is useful because the room was full before it started.', 'Dan croit que le cours de sport est utile parce que la salle etait pleine avant le debut.'],
  ['Rosa says the new backpack is the right pick because everyone on her commute has one.', 'Rosa dit que le nouveau sac a dos est le bon choix parce que tout le monde sur son trajet en a un.'],
  ['Alicia trusts the charity because the launch event had a long line of volunteers.', 'Alicia fait confiance à la charite parce que l evenement de lancement avait une longue file de benevoles.'],
  ['Owen buys the new pen because the office tray keeps emptying out as people take one.', 'Owen achete le nouveau stylo parce que le plateau du bureau se vide sans cesse à mesure que les gens en prennent un.'],
  ['Maya says the recipe must be good because every neighbor in the chat says they made it.', 'Maya dit que la recette doit etre bonne parce que chaque voisin du chat dit l avoir preparee.'],
  ['Ben trusts the app because the user count is huge and everyone in his circle recommends it.', 'Ben fait confiance à l application parce que le nombre d utilisateurs est enorme et que tout son entourage la recommande.'],
  ["Nora orders the same sandwich as the crowd because everyone in line looks happy with it.", "Nora commande le meme sandwich que la foule parce que tout le monde dans la file a l air content."],
  ["Eli assumes the new skincare product works because all the review videos show people using it.", "Eli suppose que le nouveau soin fonctionne parce que toutes les videos d avis montrent des gens qui l utilisent."],
  ["Lina buys the candle because three friends posted the same one on the same day.", "Lina achete la bougie parce que trois amies ont publie la meme le meme jour."],
  ["Grant thinks the restaurant is safe because the patio is packed with families.", "Grant pense que le restaurant est sur parce que la terrasse est pleine de familles."],
  ["Tia joins the club because the most visible kids at school all signed up.", "Tia rejoint le club parce que les eleves les plus visibles a l ecole se sont tous inscrits."],
  ["Noah trusts the new phone case because everyone in the office has it on their desk.", "Noah fait confiance à la nouvelle coque de telephone parce que tout le bureau l a sur son bureau."],
  ["Mia says the new gym must be worth it because the parking lot is always full after work.", "Mia dit que la nouvelle salle de sport doit valoir le coup parce que le parking est toujours plein apres le travail."],
  ["Ava picks the trending backpack because the kids at the front of the bus all have one.", "Ava choisit le sac a dos tendance parce que les enfants au debut du bus en ont tous un."],
  ["Finn believes the podcast is good because his whole group chat keeps sharing clips from it.", "Finn croit que le podcast est bon parce que tout son groupe de discussion partage sans cesse des extraits."],
  ["Mina tries the same water bottle because her coworkers keep saying it is the office favorite.", "Mina essaie la meme bouteille d eau parce que ses collegues disent sans cesse que c est la favorite du bureau."],
  ["Theo assumes the movie is excellent because every friend he asked had already seen it.", "Theo suppose que le film est excellent parce que chaque ami qu il a demande l avait deja vu."],
  ["Juno buys the cereal because the box is always gone first at family breakfasts.", "Juno achete les cereales parce que la boite disparaît toujours en premier aux petits dejeuners de famille."],
  ["Iris says the new notebook is better because everyone in her class is taking notes in it.", "Iris dit que le nouveau carnet est meilleur parce que tout le monde dans sa classe prend ses notes dedans."],
  ["Cole joins the walking group because the neighborhood chat keeps praising it.", "Cole rejoint le groupe de marche parce que le chat du quartier le complimente sans cesse."],
  ["Riley trusts the restaurant because the table next to him keeps ordering more food.", "Riley fait confiance au restaurant parce que la table a cote de lui commande sans cesse plus de nourriture."],
  ["Pia thinks the class is worth taking because the waiting list filled up fast.", "Pia pense que le cours vaut la peine parce que la liste d attente s est remplie rapidement."],
  ["Hugo chooses the same shoes as the gym regulars because they all seem to approve of them.", "Hugo choisit les memes chaussures que les habitués de la salle parce qu ils semblent tous les approuver."],
  ["Sam assumes the app is useful because every coworker in the room says they use it daily.", "Sam suppose que l application est utile parce que chaque collegue dans la piece dit l utiliser tous les jours."],
  ["Jade buys the same pen as the office assistants because the supply tray keeps emptying.", "Jade achete le meme stylo que les assistantes du bureau parce que le plateau de fournitures se vide sans cesse."],
  ["Owen says the bakery must be great because the line keeps wrapping around the corner.", "Owen dit que la boulangerie doit etre excellente parce que la file tourne sans cesse autour du coin."],
  ["Lea trusts the new lotion because everyone at the salon is talking about it.", "Lea fait confiance à la nouvelle lotion parce que tout le monde au salon en parle."],
  ["Max buys the same desk lamp because his friends keep saying it is the smart pick.", "Max achete la meme lampe de bureau parce que ses amis disent sans cesse que c est le choix intelligent."],
  ["Yara thinks the event is important because the loudest students all showed up.", "Yara pense que l evenement est important parce que les eleves les plus bruyants sont tous venus."],
  ["Dan tries the new drink because the people on the patio keep asking for refills.", "Dan essaie la nouvelle boisson parce que les gens sur la terrasse demandent sans cesse des recharges."],
  ["Rosa assumes the course is good because everyone in her feed is posting certificates from it.", "Rosa suppose que le cours est bon parce que tout le monde dans son fil publie des certificats obtenus grâce à lui."],
  ["Alicia trusts the charity because the launch event was full of cheering volunteers.", "Alicia fait confiance à la charité parce que l evenement de lancement etait plein de benevoles enthousiastes."],
  ["Owen picks the same keyboard as the whole design team because it looks like the official choice.", "Owen choisit le meme clavier que toute l equipe de design parce qu il a l air d etre le choix officiel."],
  ["Maya says the new planner is great because every assistant in the office uses it.", "Maya dit que le nouvel agenda est genial parce que chaque assistante du bureau l utilise."],
  ["Ben trusts the movie review because his entire bus seat row was talking about it.", "Ben fait confiance à la critique du film parce que toute la rangée du bus en parlait."],
  ["Zoe buys the same hoodie as the popular group because it feels approved before she even tries it.", "Zoé achete le meme sweat que le groupe populaire parce qu il semble approuve avant meme qu elle l essaye."],
  ["Ravi joins the yoga studio because the class photos look crowded and happy.", "Ravi rejoint le studio de yoga parce que les photos de classe ont l air bondées et heureuses."],
  ["Sofia picks the gym because the neighbors keep saying they love the trainers.", "Sofia choisit la salle de sport parce que les voisins disent sans cesse qu ils aiment les coachs."],
  ["Lara trusts the restaurant because all the birthday tables around her are singing about it.", "Lara fait confiance au restaurant parce que toutes les tables d anniversaire autour d elle en chantent les eloges."],
  ["Cole says the backpack must be reliable because every kid in the hallway has one.", "Cole dit que le sac a dos doit etre fiable parce que chaque enfant du couloir en a un."],
  ["Maya tries the headphones because the launch crowd kept nodding when they were demoed.", "Maya essaie les ecouteurs parce que la foule du lancement hochait sans cesse la tete pendant la demo."],
  ["Ezra believes the speaker because the whole room nodded at the same time.", "Ezra croit à l orateur parce que toute la salle a hoché la tete en meme temps."],
  ["Nina says the app is reliable because everyone at lunch recommended it without hesitation.", "Nina dit que l application est fiable parce que tout le monde au dejeuner la recommandait sans hesitation."],
  ["Hana joins the club because the admired students all seem to be members.", "Hana rejoint le club parce que les eleves admires semblent tous en faire partie."],
  ["Dylan says the bakery must be good because the line is still there after opening hour.", "Dylan dit que la boulangerie doit etre bonne parce que la file est toujours la apres l heure d ouverture."],
  ["Penny trusts the fitness plan because her coworkers keep posting results from it.", "Penny fait confiance au programme de fitness parce que ses collegues publient sans cesse les resultats obtenus."],
  ["Kira assumes the festival is amazing because the social feed is full of smiling photos.", "Kira suppose que le festival est incroyable parce que le fil social est plein de photos souriantes."],
  ["Finn buys the same coffee blend as his team because no one wants to be the odd one out.", "Finn achete le meme melange de cafe que son equipe parce que personne ne veut etre le mouton noir."],
  ["Juno thinks the market is best because the parking lot is full every evening.", "Juno pense que le marche est le meilleur parce que le parking est plein chaque soir."],
  ["Olivia tries the trending lotion because every beauty clip says people love it.", "Olivia essaie la lotion tendance parce que chaque video de beaute dit que les gens l adorent."],
  ["Mila says the planner is smart because all the office assistants chose it first.", "Mila dit que l agenda est intelligent parce que toutes les assistantes du bureau l ont choisi en premier."],
  ["Leo trusts the movie tip because the whole bus kept discussing the same scene.", "Leo fait confiance au conseil de film parce que tout le bus parlait sans cesse de la meme scene."],
  ["Tara joins yoga because the waiting list makes it feel like the real deal.", "Tara rejoint le yoga parce que la liste d attente lui donne l impression que c est vraiment legitime."],
  ["Hugo says the snack is good because every kid at the party grabbed one.", "Hugo dit que le snack est bon parce que chaque enfant de la fete en a pris un."],
  ["Maya trusts the local barber because every person in her building seems to go there.", "Maya fait confiance au coiffeur du quartier parce que chaque personne de son immeuble semble y aller."],
];

const OPTIONS_EN = ['Social Proof', 'Bandwagon', 'Appeal to Popularity', 'False Dilemma'];
const OPTIONS_FR = ['Preuve sociale', 'Effet de mode', 'Appel à la popularité', 'Fausse dichotomie'];

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
      id: 41001 + index,
      level: 5,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? 'Preuve sociale' : 'Social Proof',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? "La personne suppose que quelque chose est bon, sur ou utile simplement parce qu elle voit d autres personnes le faire ou l approuver."
        : 'The person assumes something is good, safe, or useful simply because other people are doing it or approving of it.',
      detailedExplanationBeginner: isFrench
        ? "Beaucoup de gens ne veulent pas dire que c est vrai."
        : 'Many people doing it does not mean it is true.',
      detailedExplanationIntermediate: isFrench
        ? "La preuve sociale remplace l evaluation autonome par l idée que l approbation visible suffit a valider le choix."
        : 'Social proof replaces independent evaluation with the idea that visible approval is enough to validate the choice.',
      detailedExplanationExpert: isFrench
        ? "Ce biais s appuie sur l heuristique de consensus: quand un choix semble largement adopté, il parait plus sûr ou plus correct qu il ne l est forcément. Le probleme survient si l on confond imitation, visibilité ou pression de groupe avec une verification réelle de qualité."
        : 'This bias leans on a consensus heuristic: when a choice looks widely adopted, it seems safer or more correct than it necessarily is. The problem appears when imitation, visibility, or group pressure is mistaken for actual quality checking.',
      questionFormat: 'standard',
    };
  });
}

export const SOCIAL_PROOF_EXPANSION_EN: Question[] = createQuestions('en');
export const SOCIAL_PROOF_EXPANSION_FR: Question[] = createQuestions('fr');
