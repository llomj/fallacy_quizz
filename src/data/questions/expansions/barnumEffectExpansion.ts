import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["Your horoscope says you are friendly but guarded, and Zuri says it describes her perfectly.", "Votre horoscope dit que vous etes sympathique mais reserve, et Zuri dit que cela la decrit parfaitement."],
  ["A personality test says Kai can be sensitive and strong at the same time, which he takes as a deep insight.", "Un test de personnalite dit que Kai peut etre sensible et fort a la fois, et il prend cela pour une observation profonde."],
  ["The fortune cookie claims you dislike being rushed, and Mira says that is totally true.", "Le biscuit fortune dit que vous n'aimez pas etre presse, et Mira dit que c'est totalement vrai."],
  ["A class quiz says you value loyalty, but also need space, and Leo feels uniquely seen.", "Un quiz de classe dit que vous accordez de la valeur a la fidelite, mais que vous avez aussi besoin d'espace, et Leo se sent vraiment compris."],
  ["A friend reads a tarot card message about hidden talent and says it fits almost anyone.", "Une amie lit un message de tarot sur un talent cache et dit que cela convient a presque tout le monde."],
  ["The online profile says you are practical but imaginative, and Noor thinks it nailed her.", "Le profil en ligne dit que vous etes pragmatique mais imaginatif, et Noor pense que cela la decrit parfaitement."],
  ["The coach says you can be shy in crowds but bold with close friends, and Ava is convinced.", "L'entraineur dit que vous pouvez etre timide en groupe mais audacieux avec vos proches, et Ava est convaincue."],
  ["A magazine quiz says you dislike unfairness and appreciate honesty, and Ben calls it eerily accurate.", "Un quiz de magazine dit que vous detestez l'injustice et appreciez l'honnetete, et Ben le trouve etrange­ment exact."],
  ["The psychic says you sometimes doubt yourself but still care about others, and Talia is impressed.", "La voyante dit que vous doutez parfois de vous-meme mais que vous vous souciez quand meme des autres, et Talia est impressionnee."],
  ["A social-media filter caption says you are quiet until you trust people, and Owen says it describes him.", "Une legende de filtre sur les reseaux dit que vous etes silencieux jusqu'a ce que vous fassiez confiance aux gens, et Owen dit que cela le decrit."],
  ["The email quiz says you want success but fear wasting time, and Priya says that is exactly right.", "Le quiz par e-mail dit que vous voulez reussir mais craignez de perdre du temps, et Priya dit que c'est exactement ca."],
  ["A bookstore quiz says you are thoughtful, loyal, and a little private, and Mina feels seen.", "Un quiz de librairie dit que vous etes reflechie, loyale et un peu reservee, et Mina se sent comprise."],
  ["The app predicts you like comfort but still enjoy surprises, and Eli thinks that is spot on.", "L'application predit que vous aimez le confort mais appreciez quand meme les surprises, et Eli pense que c'est exact."],
  ["A menu quiz says you prefer simple choices unless a special occasion appears, and Jade smiles at the description.", "Un quiz de menu dit que vous preferez les choix simples sauf s'il y a une occasion speciale, et Jade sourit en lisant la description."],
  ["The mystery box note says you care about kindness and recognition, and Noah feels recognized.", "La note de la boite mystere dit que vous accordez de l'importance a la gentillesse et a la reconnaissance, et Noah se sent reconnu."],
  ["A workshop handout says you are patient with others but impatient with yourself, and Lily says that is true.", "Un document d'atelier dit que vous etes patient avec les autres mais impatient avec vous-meme, et Lily dit que c'est vrai."],
  ["The quiz result says you like routine but still want freedom, and Theo nods along.", "Le resultat du quiz dit que vous aimez la routine mais que vous voulez quand meme de la liberte, et Theo acquiesce."],
  ["A pet adoption flyer says you are caring, responsible, and occasionally indecisive, and Zara says that sounds like her.", "Un prospectus d'adoption dit que vous etes attentionne, responsable et parfois indecisif, et Zara dit que cela lui ressemble."],
  ["The lifestyle app says you need both peace and excitement to feel balanced, and Ben feels understood.", "L'application de style de vie dit que vous avez besoin de calme et d'enthousiasme pour vous sentir equilibre, et Ben se sent compris."],
  ["A radio host says you may seem calm but have a strong inner drive, and Iris accepts it as insight.", "Une animatrice radio dit que vous pouvez sembler calme mais avoir une forte motivation interieure, et Iris le prend pour un vrai constat."],
  ["A dating profile says you are warm, selective, and loyal once committed, and Luca says that is him.", "Un profil de rencontre dit que vous etes chaleureux, selectif et loyal une fois engage, et Luca dit que c'est lui."],
  ["The quiz states that you care what people think but still want to be yourself, and Maya believes it.", "Le quiz dit que vous vous souciez de l'avis des autres mais voulez quand meme rester vous-meme, et Maya y croit."],
  ["A weather app personality card says you are steady in crises but nervous before them, and Omar laughs because it fits.", "Une carte de personnalite d'une appli meteo dit que vous restez stable en crise mais nerveux avant, et Omar rit car cela lui ressemble."],
  ["The stagecoach reading says you are more intuitive than you admit, and Sera is convinced.", "La lecture de la diligence dit que vous etes plus intuitif que vous ne l'admettez, et Sera est convaincue."],
  ["A school survey says you care about fairness and dislike being ignored, and Quinn says that is obvious.", "Un sondage scolaire dit que vous accordez de l'importance a l'equite et detestez etre ignore, et Quinn dit que c'est evident."],
  ["The quiz result says you can be independent yet still want reassurance, and Nia calls it accurate.", "Le resultat du quiz dit que vous pouvez etre independant tout en voulant etre rassure, et Nia le trouve exact."],
  ["A magazine article says you like helping others but hate being taken for granted, and Cole says it nails him.", "Un article de magazine dit que vous aimez aider les autres mais detestez qu'on prenne cela pour acquis, et Cole dit que cela le decrit parfaitement."],
  ["The fortune app says you may second-guess yourself even when you are capable, and Hana sees herself in it.", "L'application de fortune dit que vous pouvez douter de vous-meme meme quand vous etes competent, et Hana s'y reconnait."],
  ["A travel quiz says you are adventurous but still like a plan, and Finn feels the answer was made for him.", "Un quiz de voyage dit que vous etes aventureux mais que vous aimez quand meme un plan, et Finn a l'impression que la reponse a ete faite pour lui."],
  ["The personality card says you have a soft side that not everyone sees, and Rina thinks it sounds profound.", "La carte de personnalite dit que vous avez un cote doux que tout le monde ne voit pas, et Rina trouve cela profond."],
  ["A podcast host says you are probably good at listening and giving advice, and Ethan says yes, exactly.", "Un animateur de podcast dit que vous etes probablement bon pour ecouter et donner des conseils, et Ethan dit oui, exactement."],
  ["A fitness quiz says you need encouragement to start but can be relentless once you begin, and Nora agrees.", "Un quiz sportif dit que vous avez besoin d'encouragement pour commencer mais que vous pouvez etre tenace une fois lance, et Nora est d'accord."],
  ["The feedback card says you may be harder on yourself than other people are, and Jay says it is painfully true.", "La fiche de retour dit que vous etes peut-etre plus dur avec vous-meme que les autres ne le sont, et Jay dit que c'est douloureusement vrai."],
  ["A relationship quiz says you want closeness, but not too much, and Liv takes that as a real profile read.", "Un quiz relationnel dit que vous voulez de la proximite, mais pas trop, et Liv y voit une vraie lecture de sa personne."],
  ["The teacher's note says you are creative when given room, and Felix says it captures him.", "La note du professeur dit que vous etes creatif quand on vous laisse de l'espace, et Felix dit que cela le capture bien."],
  ["A game pop-up says you are competitive but dislike unfair rules, and Aria thinks the game knows her.", "Une fenetre du jeu dit que vous etes competitive mais n'aimez pas les regles injustes, et Aria pense que le jeu la connait."],
  ["The poster says you may appear confident while quietly worrying inside, and Ben says that's uncanny.", "L'affiche dit que vous pouvez paraitre confiant tout en vous inquietant en silence, et Ben dit que c'est etrange."],
  ["A survey result says you enjoy independence but still value advice, and Mina says it fits exactly.", "Un resultat d'enquete dit que vous aimez l'independance mais accordez quand meme de la valeur aux conseils, et Mina dit que cela colle parfaitement."],
  ["The small-town fair booth says you are practical with a hidden romantic streak, and Omar thinks that is amusingly exact.", "Le stand de la fete locale dit que vous etes pragmatique avec une fibre romantique cachee, et Omar trouve cela etonnamment exact."],
  ["A call-center script says you are polite even when annoyed, and Zoe feels personally called out.", "Un script de centre d'appel dit que vous restez poli meme quand vous etes agace, et Zoe se sent visee."],
  ["The self-help card says you want control, but also need kindness from others, and Sam nods.", "La carte de developpement personnel dit que vous voulez garder le controle, mais que vous avez aussi besoin de gentillesse des autres, et Sam acquiesce."],
  ["A quiz says you are the kind of person who remembers details and remembers feelings, and Tara says that is me.", "Un quiz dit que vous etes le genre de personne qui retient les details et les emotions, et Tara dit que c'est elle."],
  ["The fortune teller says you are a mix of strength and doubt, and Liam decides it is profound.", "Le voyant dit que vous etes un melange de force et de doute, et Liam decide que c'est profond."],
  ["A relationship guide says you want honesty but dislike bluntness, and Nia says that is oddly precise.", "Un guide relationnel dit que vous voulez de l'honnetete mais n'aimez pas la brutalite, et Nia dit que c'est etonnamment precis."],
  ["The quiz card says you may seem reserved until someone earns your trust, and Cole says that is exactly his story.", "La carte du quiz dit que vous pouvez sembler reserve jusqu'a ce que quelqu'un gagne votre confiance, et Cole dit que c'est exactement son histoire."],
  ["A customer survey says you value quality but still compare prices, and Juno thinks it describes every adult.", "Un sondage client dit que vous accordez de la valeur a la qualite mais comparez quand meme les prix, et Juno pense que cela decrit tous les adultes."],
  ["The app says you are a dreamer with a realistic streak, and Leo says that must be true.", "L'application dit que vous etes un reveur avec une fibre realiste, et Leo dit que cela doit etre vrai."],
  ["The horoscope says you are independent but still appreciate support, and Priya feels fully understood.", "L'horoscope dit que vous etes independant mais appreciez quand meme le soutien, et Priya se sent parfaitement comprise."],
  ["The reader's note says you have likely been through something hard and learned from it, and Ava says it fits.", "La note du lecteur dit que vous avez probablement traverse quelque chose de difficile et en avez tire des lecons, et Ava dit que cela colle."],
  ["A magazine quiz says you sometimes overthink but care deeply, and Noah says it is spooky how true it is.", "Un quiz de magazine dit que vous reflechissez parfois trop mais que vous vous souciez profondement, et Noah dit que c'est troublant de justesse."],
];

const EN = ['Barnum Effect', 'Confirmation Bias', 'Halo Effect', 'False Dilemma'];
const FR = ['Effet Barnum', 'Biais de confirmation', 'Effet de halo', 'Fausse dichotomie'];

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
      id: 32151 + i,
      level: 3,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Effet Barnum' : 'Barnum Effect',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? FR : EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Une description vague ou flatteuse semble precise parce qu'elle pourrait s'appliquer a beaucoup de gens."
        : 'A vague, flattering description feels precise because it could apply to many people.',
      detailedExplanationBeginner: fr
        ? "Une phrase generale peut sembler tres personnelle."
        : 'A general statement can feel very personal.',
      detailedExplanationIntermediate: fr
        ? "Quand un message reste assez large pour convenir a presque tout le monde, il donne l'impression d'etre profondement exact."
        : 'When a message stays broad enough to fit almost anyone, it can feel deeply accurate.',
      detailedExplanationExpert: fr
        ? "L'effet Barnum exploite la tendance a lire une signification speciale dans des affirmations froides, larges et valorisantes, surtout si elles arrivent dans un contexte d'autorite ou de mystere."
        : 'The Barnum effect exploits the tendency to read special meaning into broad, flattering statements, especially when they arrive in an authoritative or mysterious context.',
      questionFormat: 'standard',
    };
  });
}

export const BARNUM_EFFECT_EXPANSION_EN: Question[] = make();
export const BARNUM_EFFECT_EXPANSION_FR: Question[] = make(true);
