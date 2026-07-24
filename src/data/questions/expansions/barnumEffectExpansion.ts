import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["Your horoscope says you are friendly but guarded, and Zuri says it describes her perfectly after work at the bookstore.", "Votre horoscope dit que vous etes sympathique mais reserve, et Zuri dit que cela la decrit parfaitement apres le travail a la librairie."],
  ["A personality test says Kai can be sensitive and strong at the same time, which he takes as a deep insight about himself after lunch.", "Un test de personnalite dit que Kai peut etre sensible et fort a la fois, et il prend cela pour une observation profonde sur lui-meme apres le déjeuner."],
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
  ["Maya reads a profile that says she is creative but practical, and she thinks it describes her exactly.", "Maya lit un profil qui dit qu'elle est créative mais pratique, et elle pense qu'il la décrit exactement."],
  ["Theo sees a fortune that says he is strong but secretly sensitive, and he feels understood.", "Theo voit une fortune qui dit qu'il est fort mais secrètement sensible, et il se sent compris."],
  ["Nina gets a quiz result saying she wants connection yet values independence, and she says that is her.", "Nina obtient un résultat disant qu'elle veut du lien mais tient à son indépendance, et elle dit que c'est elle."],
  ["Ben reads a card that says he can seem calm while worrying inside, and he calls it eerily accurate.", "Ben lit une carte qui dit qu'il peut paraître calme tout en s'inquiétant intérieurement, et il la trouve étrangement juste."],
  ["Omar sees a horoscope that says he is loyal, thoughtful, and occasionally stubborn, and he nods.", "Omar voit un horoscope qui dit qu'il est loyal, réfléchi et parfois têtu, et il acquiesce."],
  ["Priya reads a personality blurb saying she likes peace but also excitement, and she takes it personally.", "Priya lit un texte de personnalité disant qu'elle aime le calme mais aussi l'excitation, et elle le prend comme un portrait personnel."],
  ["Leo gets a quiz saying he is a dreamer with a realistic streak, and he thinks it nailed him.", "Leo obtient un quiz disant qu'il est rêveur avec une fibre réaliste, et il pense que cela le décrit parfaitement."],
  ["Rina sees a reading that says she wants honesty but dislikes bluntness, and she feels seen.", "Rina voit une lecture disant qu'elle veut de l'honnêteté mais n'aime pas la brusquerie, et elle se sent comprise."],
  ["Jules reads a result that says he is independent but still appreciates support, and he says that is so true.", "Jules lit un résultat disant qu'il est indépendant mais apprécie quand même le soutien, et il dit que c'est tellement vrai."],
  ["Ava gets a card saying she may appear confident while quietly doubting herself, and she believes it.", "Ava obtient une carte disant qu'elle peut paraître confiante tout en doutant silencieusement d'elle-même, et elle y croit."],
  ["A shopping app says you like a good deal but still want something that feels special, and Lena says that is absolutely her.", "Une application de shopping dit que vous aimez les bonnes affaires mais voulez quand meme quelque chose qui semble special, et Lena dit que c'est tout a fait elle."],
  ["A yoga studio email says you crave calm but also need a challenge now and then, and Marco thinks it reads his mind.", "Un e-mail de studio de yoga dit que vous cherchez le calme mais avez aussi besoin d'un defi de temps en temps, et Marco pense que cela lit dans ses pensees."],
  ["A coworker shares a profile that says you are dependable, private, and secretly funny, and Tessa feels accurately spotted.", "Un collegue partage un profil qui dit que vous etes fiable, reserve et secretement drole, et Tessa se sent parfaitement identifiee."],
  ["A festival wristband quiz says you are easygoing in public but intense about the things you care about, and Jay says that is the whole story.", "Un quiz de bracelet de festival dit que vous etes detendu en public mais intense pour ce qui compte pour vous, et Jay dit que c'est toute son histoire."],
  ["A pet store flyer says you are nurturing but still value your own space, and Priya laughs because that sounds like her with her cat.", "Un prospectus d'animalerie dit que vous etes attentionne mais que vous tenez quand meme a votre espace, et Priya rit car cela lui ressemble avec son chat."],
  ["A streaming app personality card says you enjoy familiar favorites but also like one weird new recommendation, and Omar buys it.", "Une carte de personnalite d'une application de streaming dit que vous aimez les favoris familiers mais aussi une recommandation nouvelle et un peu bizarre, et Omar y croit."],
  ["A coffee shop quiz says you want warmth from people, but not too much pressure, and Elise says that is uncomfortably close.", "Un quiz de cafe dit que vous voulez de la chaleur humaine, mais sans trop de pression, et Elise dit que c'est embarrassamment proche."],
  ["A gym poster says you can look laid-back while quietly chasing big goals, and Devon takes it as proof.", "Une affiche de salle de sport dit que vous pouvez paraitre detendu tout en poursuivant discretement de grands objectifs, et Devon le prend pour une preuve."],
  ["A birthday card reading says you are loyal, thoughtful, and harder on yourself than you should be, and Hana says it is weirdly exact.", "Une lecture de carte d'anniversaire dit que vous etes loyal, attentionne et plus dur avec vous-meme que vous ne devriez l'etre, et Hana dit que c'est etrangement exact."],
  ["A school counselor's quiz says you are the kind of person who helps others before asking for help, and Lucas nods.", "Un quiz de conseiller scolaire dit que vous etes le genre de personne qui aide les autres avant de demander de l'aide, et Lucas acquiesce."],
  ["A phone wallpaper quote says you are stronger than you think but still want reassurance, and Mia says that sums up her week.", "Une citation de fond d'ecran dit que vous etes plus fort que vous ne le pensez mais que vous voulez quand meme etre rassure, et Mia dit que cela resume sa semaine."],
  ["A cooking blog quiz says you are practical with a creative streak and a soft spot for praise, and Ben says that is oddly true.", "Un quiz de blog culinaire dit que vous etes pragmatique avec une fibre creative et un faible pour les compliments, et Ben dit que c'est etonnamment vrai."],
  ["A road-trip planner says you enjoy freedom, but only after checking the map twice, and Zoe feels called out.", "Un planificateur de road trip dit que vous aimez la liberte, mais seulement apres avoir verifie la carte deux fois, et Zoe se sent visee."],
  ["A museum gift-shop quiz says you are curious, reflective, and a little sentimental, and Noah says the quiz has him figured out.", "Un quiz de boutique de musee dit que vous etes curieux, reflechis et un peu sentimental, et Noah dit que le quiz l'a compris."],
  ["A therapist-style card says you may act independent while still wanting someone to notice when you are tired, and Priya believes it.", "Une carte de style therapeutique dit que vous pouvez agir de facon independante tout en voulant que quelqu'un remarque quand vous etes fatigue, et Priya y croit."],
  ["A neighborhood newsletter says you care about fairness, community, and being left alone when you need it, and Eli says that sounds right.", "Une newsletter de quartier dit que vous tenez a l'equite, a la communaute et au fait qu'on vous laisse tranquille quand il le faut, et Eli dit que cela semble juste."],
  ["A concert app says you are adventurous in small doses but like knowing what to expect, and Sam says that is basically him.", "Une application de concert dit que vous etes aventureux par petites doses mais aimez savoir a quoi vous attendre, et Sam dit que c'est pratiquement lui."],
  ["A meditation reminder says you are calm on the outside but your mind runs a mile a minute, and Aria says wow, rude.", "Un rappel de meditation dit que vous etes calme en apparence mais que votre esprit va a cent a l'heure, et Aria dit: wow, direct."],
  ["A shopping receipt survey says you want convenience, quality, and a little treat for putting up with the day, and Theo laughs because that is him.", "Un sondage sur ticket de caisse dit que vous voulez la commodite, la qualite et une petite recompense pour supporter la journee, et Theo rit car c'est lui."],
  ["A ferry ticket quiz says you are patient with other people's problems but impatient with delays, and Nia says it is suspiciously accurate.", "Un quiz de billet de ferry dit que vous etes patient avec les problemes des autres mais impatient face aux retards, et Nia dit que c'est suspectement juste."],
  ["A phone carrier ad says you want reliability without giving up fun, and Cole says that describes every person alive.", "Une pub d'operateur dit que vous voulez de la fiabilite sans renoncer au plaisir, et Cole dit que cela decrit toute personne vivante."],
  ["A charity signup page says you care about helping people but need proof your time matters, and Juno says that hits home.", "Une page d'inscription caritative dit que vous tenez a aider les autres mais avez besoin de preuves que votre temps compte, et Juno dit que cela fait mouche."],
  ["A bookstore bookmark says you are thoughtful, observant, and not as mysterious as you think, and Iris smiles.", "Un marque-page de librairie dit que vous etes reflechis, observateur et pas aussi mysterieux que vous le pensez, et Iris sourit."],
  ["A language app says you like progress you can measure, but you still want the app to cheer for you, and Max says yep.", "Une application de langue dit que vous aimez les progres mesurables, mais que vous voulez quand meme que l'application vous encourage, et Max dit oui."],
  ["A neighborhood bakery survey says you prefer something classic with one small twist, and Noor says that is exactly how she orders.", "Un sondage de boulangerie de quartier dit que vous preferez quelque chose de classique avec une petite touche, et Noor dit que c'est exactement sa commande."],
  ["A photo app filter caption says you are reserved until you feel safe, then unexpectedly expressive, and Liam says that fits.", "Une legende de filtre photo dit que vous etes reserve jusqu'a ce que vous vous sentiez en securite, puis etonnamment expressif, et Liam dit que cela colle."],
  ["A volunteer training quiz says you are reliable, empathetic, and uncomfortable being praised, and Tara says it is too real.", "Un quiz de formation de benevoles dit que vous etes fiable, empathique et mal a l'aise quand on vous complimente, et Tara dit que c'est trop vrai."],
  ["A road sign meme says you are practical, cautious, and secretly hoping for a spontaneous detour, and Finn laughs.", "Un mème de panneau routier dit que vous etes pragmatique, prudent et secretement partant pour un detour spontane, et Finn rit."],
  ["A dinner reservation note says you like plans that feel safe but still a little exciting, and Ava says that is her entire personality.", "Une note de reservation dit que vous aimez les plans qui paraissent surs mais un peu excitants, et Ava dit que c'est toute sa personnalite."],
  ["A courier app survey says you are dependable and like being useful, but you also want your effort noticed, and Rina agrees.", "Un sondage d'application de livraison dit que vous etes fiable et aimez etre utile, mais que vous voulez aussi que vos efforts soient remarques, et Rina est d'accord."],
  ["A gardening podcast says you have a patient side and a stubborn side, and Omar says the host has clearly met him.", "Un podcast de jardinage dit que vous avez un cote patient et un cote tenace, et Omar dit que l'animateur l'a clairement rencontre."],
  ["A charity poster says you want to make a difference, but you do not want drama, and Lila nods.", "Une affiche caritative dit que vous voulez faire une difference, mais sans drame, et Lila acquiesce."],
  ["A finance app says you like feeling prepared, yet you still hope for a lucky break, and Ethan says that is fair.", "Une application de finance dit que vous aimez vous sentir prepare, mais que vous esperez quand meme un coup de chance, et Ethan dit que c'est juste."],
  ["A museum audio guide says you are open-minded but still trust your first impression, and Maya says that sounds right.", "Un audioguide de musee dit que vous etes ouvert d'esprit mais que vous faites quand meme confiance a votre premiere impression, et Maya dit que cela semble juste."],
  ["A language exchange icebreaker says you are polite, curious, and a bit guarded at first, and Jae says it is weirdly spot on.", "Une question brise-glace d'echange linguistique dit que vous etes poli, curieux et un peu reserve au debut, et Jae dit que c'est etrangement juste."],
  ["A city tourism quiz says you like hidden gems but also want the famous landmarks, and Sera says yes, exactly.", "Un quiz de tourisme urbain dit que vous aimez les perles cachees mais voulez aussi voir les monuments connus, et Sera dit oui, exactement."],
  ["A fitness tracker message says you are disciplined, but you also need a little encouragement to stay on track, and Cole laughs.", "Un message de bracelet connecte dit que vous etes discipline, mais que vous avez aussi besoin d'un peu d'encouragement pour rester sur la bonne voie, et Cole rit."],
  ["A desk calendar quote says you are organized in public and anxious in private, and Nina says that is unhelpfully accurate.", "Une citation de calendrier de bureau dit que vous etes organise en public et anxieux en prive, et Nina dit que c'est un peu trop exact."],
  ["A travel insurance blurb says you are careful, realistic, and still hope for a perfect trip, and Luca says that is everyone.", "Un texte d'assurance voyage dit que vous etes prudent, realiste et que vous espererez quand meme un voyage parfait, et Luca dit que c'est tout le monde."],
  ["A music app says you like lyrics that feel personal even when they are broad, and Zara says that explains her playlist.", "Une application de musique dit que vous aimez les paroles qui semblent personnelles meme quand elles restent vagues, et Zara dit que cela explique sa playlist."],
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
