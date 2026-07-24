import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya orders the same lunch as everyone else because she does not want to stand out.', 'Maya commande le meme dejeuner que tout le monde parce qu elle ne veut pas se faire remarquer.'],
  ['Ben joins the club only after he sees his friends line up for it.', 'Ben rejoint le club seulement apres avoir vu ses amis faire la queue pour y entrer.'],
  ['Rina starts liking the new show because the group chat will not stop talking about it.', 'Rina commence a aimer la nouvelle serie parce que le groupe de discussion n arrete pas d en parler.'],
  ['Theo buys the jacket after noticing the whole hallway is wearing the same one.', 'Theo achete la veste apres avoir remarque que tout le couloir porte la meme.'],
  ['Ava says the cafe must be good because everyone is crowded into it.', 'Ava dit que le cafe doit etre bon parce que tout le monde s y entasse.'],
  ['Leo downloads the app because the basketball team uses it.', 'Leo telecharge l application parce que l equipe de basket l utilise.'],
  ['Nina changes her answer after the loud table all agrees on one option.', 'Nina change sa reponse apres que la table bruyante s est mise d accord sur une seule option.'],
  ['Owen starts copying the class notes because the smartest-looking students all do it.', 'Owen commence a recopier les notes de classe parce que les eleves qui ont l air les plus brillants le font tous.'],
  ['Priya picks the trending drink because every customer in line is holding one.', 'Priya choisit la boisson a la mode parce que chaque client dans la file en tient une.'],
  ['Milo says the movie has to be good because the entire office is buying tickets.', 'Milo dit que le film doit etre bon parce que tout le bureau achète des billets.'],
  ['Lina wears the same sneakers as her friends so nobody asks why she is different.', 'Lina porte les memes baskets que ses amies pour que personne ne demande pourquoi elle est differente.'],
  ['Kai follows the crowd to the busy food truck without checking the menu.', 'Kai suit la foule jusqu au camion de nourriture tres frequent sans verifier le menu.'],
  ['Zoe signs up for the marathon because her neighbors all talk about training.', 'Zoe s inscrit au marathon parce que ses voisins parlent tous d entrainement.'],
  ['Finn starts using the same calendar app because the whole team says it is the normal choice.', 'Finn commence a utiliser la meme application de calendrier parce que toute l equipe dit que c est le choix normal.'],
  ['Mina agrees to the weekend plan just because everyone else seems excited.', 'Mina accepte le plan du week-end juste parce que tout le monde a l air enthousiaste.'],
  ['Eli says the restaurant is worth trying because the crowd outside keeps growing.', 'Eli dit que le restaurant vaut le coup parce que la foule dehors continue de grossir.'],
  ['Tara copies the hairstyle she keeps seeing on her classmates.', 'Tara copie la coiffure qu elle voit partout sur ses camarades de classe.'],
  ['Noah trusts the rumor more after hearing several coworkers repeat it.', 'Noah fait davantage confiance a la rumeur apres avoir entendu plusieurs collegues la repeter.'],
  ['Maya joins the group order even though she was not hungry, just to blend in.', 'Maya participe a la commande de groupe meme si elle n avait pas faim, juste pour se fondre dans le groupe.'],
  ['Jules says the new gadget must be useful because every student in the lab has one.', 'Jules dit que le nouveau gadget doit etre utile parce que chaque etudiant du labo en a un.'],
  ['Ava picks the team jersey after seeing the whole fan section wear it.', 'Ava choisit le maillot de l equipe apres avoir vu toute la tribune de supporters le porter.'],
  ['Ravi stops questioning the plan once the other interns all nod along.', 'Ravi cesse de remettre le plan en question une fois que les autres stagiaires acquiescent tous.'],
  ['Sofia orders the same dessert because the whole table did.', 'Sofia commande le meme dessert parce que toute la table l a fait.'],
  ['Grant assumes the crowded class must be the right one to take.', 'Grant suppose que le cours rempli doit etre le bon a suivre.'],
  ['Lara buys the same water bottle as the popular group so she will not feel left out.', 'Lara achete la meme bouteille d eau que le groupe populaire pour ne pas se sentir mise de cote.'],
  ['Ben follows the crowd into the long line without knowing what it is for.', 'Ben suit la foule dans la longue file sans savoir a quoi elle sert.'],
  ['Nora says the concert is probably great because all her cousins want to go.', 'Nora dit que le concert est probablement genial parce que tous ses cousins veulent y aller.'],
  ['Omar chooses the same study app because the whole class says it is the one to use.', 'Omar choisit la meme appli de revision parce que toute la classe dit que c est celle qu il faut utiliser.'],
  ['Priya starts liking the new band after seeing the room cheer for them.', 'Priya commence a aimer le nouveau groupe apres avoir vu la salle les applaudir.'],
  ['Evan says the snack is definitely good because everyone around him is eating it.', 'Evan dit que le snack est forcement bon parce que tout le monde autour de lui le mange.'],
  ['Mina joins the discussion late because she does not want to be the odd one out.', 'Mina rejoint la discussion tard parce qu elle ne veut pas etre la seule differente.'],
  ['Theo copies the office ritual because he thinks the group probably knows better.', 'Theo copie le rituel du bureau parce qu il pense que le groupe sait probablement mieux que lui.'],
  ['Jade adopts the same planner as her friends after hearing that "everyone" loves it.', 'Jade adopte le meme agenda que ses amies apres avoir entendu que « tout le monde » l adore.'],
  ['Oli says the new cafe must be safe because all the tables are full.', 'Oli dit que le nouveau cafe doit etre sur parce que toutes les tables sont remplies.'],
  ['Milo buys the same game because nobody at school wants to be the only one without it.', 'Milo achete le meme jeu parce que personne a l ecole ne veut etre le seul a ne pas l avoir.'],
  ['Tia agrees with the group opinion just to avoid looking stubborn.', 'Tia est d accord avec l opinion du groupe juste pour eviter de paraitre têtue.'],
  ['Noah starts wearing the trendiest shoes because his class keeps treating them as the default.', 'Noah commence a porter les chaussures les plus tendance parce que sa classe les traite comme le choix par defaut.'],
  ['Rina says the app must be good because every influencer in the feed is using it.', 'Rina dit que l appli doit etre bonne parce que chaque influenceur du fil l utilise.'],
  ['Ari joins the long queue for pastries because it looks like the place to be.', 'Ari rejoint la longue file pour les patisseries parce que cela a l air d etre l endroit ou il faut etre.'],
  ['Lea buys the same notebook as the study group because she wants to match them.', 'Lea achete le meme carnet que le groupe d etude parce qu elle veut leur ressembler.'],
  ['Cole says the new gym must work because the parking lot is packed.', 'Cole dit que la nouvelle salle doit fonctionner parce que le parking est plein.'],
  ['Maya picks the popular class topic because nobody else seems to question it.', 'Maya choisit le sujet de classe populaire parce que personne d autre ne semble le remettre en question.'],
  ['Finn starts repeating the office slogan because all the senior staff say it.', 'Finn commence a repeter le slogan du bureau parce que tout le personnel senior le dit.'],
  ['Zara says the dessert trend is worth it because the whole friend group posted it.', 'Zara dit que la tendance dessert vaut le coup parce que tout le groupe d amis l a poste.'],
  ['Hugo orders the same drink as the table because he thinks that is the safe move.', 'Hugo commande la meme boisson que la table parce qu il pense que c est le choix prudent.'],
  ['Pia takes the same route as the crowd even though she did not check if it is faster.', 'Pia prend le meme itineraire que la foule meme si elle n a pas verifie s il est plus rapide.'],
  ['Grant says the new show must be good because the whole dorm is obsessed with it.', 'Grant dit que la nouvelle serie doit etre bonne parce que tout le dortoir en est obsede.'],
  ['Lina copies the group answer because she thinks matching them will keep things smooth.', 'Lina copie la reponse du groupe parce qu elle pense que se synchroniser avec eux gardera les choses fluides.'],
  ['Kai says the new product must be reliable because everyone in the office is replacing their old one.', 'Kai dit que le nouveau produit doit etre fiable parce que tout le bureau remplace son ancien.'],
  ['Nora follows the crowd to the new bakery because "that is where people are going".', 'Nora suit la foule jusqu a la nouvelle boulangerie parce que « c est la ou les gens vont ».'],
  ['Ben treats the crowd favorite as the correct answer because many people picked it fast.', 'Ben traite la reponse preferee de la foule comme la bonne reponse parce que beaucoup de gens l ont choisie vite.'],
  ['Maya joins the line for the new cafe because she sees everyone else heading there after work.', 'Maya rejoint la file pour le nouveau cafe parce qu elle voit tout le monde y aller apres le travail.'],
  ['Ben buys the same sneakers as the whole class because he does not want to be the only one different.', 'Ben achete les memes baskets que toute la classe parce qu il ne veut pas etre le seul different.'],
  ['Priya downloads the trending app because her friends keep treating it like the obvious choice.', 'Priya telecharge l application a la mode parce que ses amis la traitent sans cesse comme le choix evident.'],
  ['Theo joins the long queue for pastries even though he has no idea what is being sold.', 'Theo rejoint la longue file pour des patisseries meme s il ne sait pas du tout ce qui est vendu.'],
  ['Ava starts repeating the office slogan because everyone around her is saying it.', 'Ava commence a repeter le slogan du bureau parce que tout le monde autour d elle le dit.'],
  ['Omar agrees with the group opinion after noticing nobody wants to look uncertain.', 'Omar est d accord avec l opinion du groupe apres avoir remarque que personne ne veut avoir l air incertain.'],
  ['Lina copies the crowd choice on the lunch spot because she thinks it is safer than standing apart.', 'Lina copie le choix de la foule pour le restaurant parce qu elle pense que c est plus sur que de se demarquer.'],
  ['Nora signs up for the same club as her friends because she assumes the group already knows best.', 'Nora s inscrit au meme club que ses amies parce qu elle suppose que le groupe sait deja mieux.'],
  ['Jules follows the room vote because everybody else seems ready to move on quickly.', 'Jules suit le vote de la salle parce que tout le monde semble pret a passer vite a autre chose.'],
  ['Mina adopts the same planner as her coworkers because she wants to fit in with the team.', 'Mina adopte le meme agenda que ses collegues parce qu elle veut s integrer a l equipe.'],
];

const OPTIONS_EN = ['Herd Mentality', 'Bandwagon', 'Groupthink', 'Appeal to Popularity'];
const OPTIONS_FR = ['Mentalite de troupeau', 'Effet de mode', 'Pensée de groupe', 'Appel a la popularite'];

function rotatedOptions(options: string[], correctIndex: number): string[] {
  const distractors = options.slice(1);
  const result = [...distractors];
  result.splice(correctIndex, 0, options[0]);
  return result;
}

function subLevelFor(index: number): SubLevel {
  if (index < 43) return SubLevel.BEGINNER;
  if (index < 50) return SubLevel.INTERMEDIATE;
  return SubLevel.EXPERT;
}

function createQuestions(language: 'en' | 'fr'): Question[] {
  return SCENARIOS.map(([english, french], index) => {
    const correctIndex = index % 4;
    const isFrench = language === 'fr';
    return {
      id: 38101 + index,
      level: 4,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Mentalite de troupeau' : 'Herd Mentality',
      difficulty: index < 43 ? 1 : index < 50 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais ou sophisme est illustre ici ?' : 'Which bias or fallacy is shown here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'Quelqu un suit le groupe surtout pour ne pas se distinguer, pas parce que les preuves sont bonnes.'
        : 'Someone follows the group mainly to avoid standing out, not because the evidence is good.',
      detailedExplanationBeginner: isFrench
        ? "Le groupe attire les gens, meme quand ils n ont pas vraiment verifie."
        : 'The group pulls people in even when they have not really checked.',
      detailedExplanationIntermediate: isFrench
        ? "La mentalite de troupeau pousse a copier ce que fait la majorite pour se sentir en securite ou accepte."
        : 'Herd mentality pushes people to copy what the majority is doing in order to feel safe or accepted.',
      detailedExplanationExpert: isFrench
        ? "Ce biais social remplace le jugement independant par la conformite: on se range du cote du troupeau parce que cela minimise le risque d exclusion ou de ridicule."
        : 'This social bias replaces independent judgment with conformity: people side with the herd because it reduces the risk of exclusion or ridicule.',
      questionFormat: 'standard',
    };
  });
}

export const HERD_MENTALITY_EXPANSION_EN: Question[] = createQuestions('en');
export const HERD_MENTALITY_EXPANSION_FR: Question[] = createQuestions('fr');
