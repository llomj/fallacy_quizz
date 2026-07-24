import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya likes quiet cafes and assumes everyone at work does too, even the loud coworkers after lunch in the break room.', "Maya aime les cafes calmes et suppose que tout le monde au travail aime aussi ca, meme les collegues bruyants apres le déjeuner dans la salle de pause."],
  ['Theo thinks showing up early is normal, so he believes the whole school prefers early arrivals to the first bell on exam days and field trips.', "Theo pense qu'arriver tot est normal, alors il croit que toute l'ecole prefere arriver avant la premiere sonnerie les jours d examen et de sortie scolaire."],
  ['Rina hates spicy food and says most people find pepper annoying.', "Rina deteste la nourriture epicee et dit que la plupart des gens trouvent le poivre derangeant."],
  ['Ben prefers text messages and assumes his friends all do as well.', "Ben prefere les messages texte et suppose que ses amis font tous pareil."],
  ['Ava loves rainy weekends and assumes the neighborhood is cheering for storms.', "Ava adore les week-ends pluvieux et suppose que le quartier applaudit les tempetes."],
  ['Leo thinks board games are the default fun activity, so he says everyone must think that.', "Leo pense que les jeux de societe sont l'activite amusante par defaut, alors il dit que tout le monde doit penser ca."],
  ['Nina is strict about being on time and assumes coworkers judge lateness the same way.', "Nina est stricte sur la ponctualite et suppose que ses collegues jugent le retard de la meme facon."],
  ['Omar likes silent lunches and concludes the whole office wants the same.', "Omar aime les dejeuners silencieux et conclut que tout le bureau veut la meme chose."],
  ['Priya enjoys minimalist design and assumes her customers all want bare walls.', "Priya aime le design minimaliste et suppose que ses clients veulent tous des murs nus."],
  ['Milo skips dessert and assumes friends secretly feel relieved when dessert is missing.', "Milo saute le dessert et suppose que ses amis sont en secret soulagés quand il n'y en a pas."],
  ['Lina prefers handwritten notes and thinks everyone finds typing less personal.', "Lina prefere les notes manuscrites et pense que tout le monde trouve la saisie au clavier moins personnelle."],
  ['Kai likes early meetings and assumes others are thankful for the same schedule.', "Kai aime les reunions matinales et suppose que les autres sont reconnaissants d'avoir le meme horaire."],
  ['Zoe believes everyone notices small grammar mistakes because she always does.', "Zoe croit que tout le monde remarque les petites fautes de grammaire parce qu'elle le fait toujours."],
  ['Finn enjoys cold pizza and assumes it is the universal lunch upgrade.', "Finn aime la pizza froide et suppose que c'est l'amelioration dejeuner universelle."],
  ['Mina likes budget travel and thinks most people would also pick the cheapest option.', "Mina aime voyager petit budget et pense que la plupart des gens choisiraient aussi l'option la moins chere."],
  ['Eli prefers early grocery trips and says everyone hates crowded aisles.', "Eli prefere faire les courses tot et dit que tout le monde deteste les allées bondées."],
  ['Tara assumes her friends all care about the same podcasts she does.', "Tara suppose que ses amis se soucient tous des memes podcasts qu'elle."],
  ['Noah loves calendar reminders and says everyone would be lost without them.', "Noah adore les rappels de calendrier et dit que tout le monde serait perdu sans eux."],
  ['Rina assumes her team enjoys feedback in the exact blunt style she likes.', "Rina suppose que son equipe aime les retours dans le meme style direct qu'elle apprecie."],
  ['Jasper likes quiet libraries and says most people must feel calmer there too.', "Jasper aime les bibliotheques silencieuses et dit que la plupart des gens doivent aussi s'y sentir plus calmes."],
  ['Maya thinks because she never drinks soda, other adults must be avoiding it too.', "Maya pense que parce qu'elle ne boit jamais de soda, les autres adultes doivent aussi l'eviter."],
  ['Hugo believes everyone secretly wants a rainy day off because he does.', "Hugo croit que tout le monde veut secretement un jour de pluie libre parce que lui le veut."],
  ['Layla assumes all students prefer group projects because her friends say so.', "Layla suppose que tous les etudiants preferent les projets de groupe parce que ses amis le disent."],
  ['Clara thinks people who enjoy spreadsheets are the majority, just like in her office.', "Clara pense que les gens qui aiment les feuilles de calcul sont la majorite, comme dans son bureau."],
  ['Dylan says most drivers must enjoy singing at red lights because he does.', "Dylan dit que la plupart des conducteurs doivent aimer chanter aux feux rouges parce que lui le fait."],
  ['Sofia assumes everyone wants the same phone settings she uses.', "Sofia suppose que tout le monde veut les memes reglages de telephone qu'elle."],
  ['Reed believes a whole city must love the same sandwich shop because his circle does.', "Reed croit qu'une ville entiere doit adorer le meme restaurant de sandwichs parce que son entourage l'adore."],
  ['Emma thinks everyone finds grocery lists satisfying because she enjoys crossing items off.', "Emma pense que tout le monde trouve les listes de courses satisfaisantes parce qu'elle aime barrer les articles."],
  ['Ari assumes coworkers are all as bothered by loud keyboards as he is.', "Ari suppose que ses collegues sont tous aussi deranges par les claviers bruyants que lui."],
  ['Mina believes the whole class wants the same snack break she wants.', "Mina croit que toute la classe veut la meme pause snack qu'elle."],
  ['Cole thinks everyone likes leaving meetings early because he always does.', "Cole pense que tout le monde aime quitter les reunions tot parce qu'il le fait toujours."],
  ['Tessa says if she remembers a joke, everyone else must have heard it too.', "Tessa dit que si elle se souvient d'une blague, tout le monde l'a forcement entendue aussi."],
  ['Jonah assumes people at the gym all judge beginners the way he judges them.', "Jonah suppose que les gens a la salle de sport jugent tous les debutants comme lui."],
  ['Kira thinks the whole family loves spicy takeout because she keeps ordering it.', "Kira pense que toute la famille adore les plats a emporter epices parce qu'elle en commande souvent."],
  ['Parker says everyone must want a window seat because he always does.', "Parker dit que tout le monde doit vouloir une place pres de la fenetre parce que lui le veut toujours."],
  ['Nora assumes all parents prefer silent restaurants because that is her preference.', "Nora suppose que tous les parents preferent les restaurants calmes parce que c'est sa preference."],
  ['Evan thinks the entire neighborhood is obsessed with lawn care because his block is.', "Evan pense que tout le quartier est obsede par l'entretien du gazon parce que son coin l'est."],
  ['Stella assumes her class is unusual for liking pop quizzes because she does not.', "Stella suppose que sa classe est particuliere parce qu'elle n'aime pas les quiz surprises."],
  ['Ray says most people must enjoy talking about weather apps because he does.', "Ray dit que la plupart des gens doivent aimer parler des applications meteo parce que lui oui."],
  ['Jade believes everyone values detailed receipts because she always checks them.', "Jade croit que tout le monde valorise les reçus détaillés parce qu'elle les verifie toujours."],
  ['Drew assumes all roommates care about the same noise level he does.', "Drew suppose que tous les colocataires se soucient du meme niveau de bruit que lui."],
  ['Lara thinks if she likes biking to work, most colleagues must like it too.', "Lara pense que si elle aime aller au travail a velo, la plupart de ses collegues doivent aimer aussi."],
  ['Oli assumes the whole group wants the same charity picked because he does.', "Oli suppose que tout le groupe veut choisir la meme association caritative que lui."],
  ['Mia says her friends must all prefer early dinner because her family does.', "Mia dit que ses amis doivent tous preferer un diner tot parce que sa famille le fait."],
  ['Felix believes everyone is relieved when plans get canceled because he often is.', "Felix croit que tout le monde est soulage quand les plans sont annules parce qu'il l'est souvent."],
  ['Iris thinks all teachers enjoy neatly labeled folders because she does.', "Iris pense que tous les enseignants aiment les dossiers bien etiquettes parce qu'elle le fait."],
  ['Grant assumes everyone finds the same commute music motivating.', "Grant suppose que tout le monde trouve la meme musique de trajet motivante."],
  ['Juno says the whole team must enjoy long email threads because he keeps replying.', "Juno dit que toute l'equipe doit aimer les longs fils d'e-mails parce qu'il repond toujours."],
  ['Pia assumes everyone prefers the same parking spot she picks.', "Pia suppose que tout le monde prefere la meme place de parking qu'elle choisit."],
  ['Maya thinks everybody loves quiet cafes because she does.', "Maya pense que tout le monde adore les cafes calmes parce qu'elle les aime."],
  ['Theo assumes the office prefers early meetings since he does.', "Theo suppose que le bureau prefere les reunions matinales puisqu'il les aime."],
  ['Rina says most people enjoy cold pizza because she does.', "Rina dit que la plupart des gens aiment la pizza froide parce qu'elle, oui."],
  ['Ben thinks everyone wants the same phone wallpaper he uses.', "Ben pense que tout le monde veut le meme fond d'ecran de telephone que lui."],
  ['Ava assumes the town agrees with her about rainy weekends being relaxing.', "Ava suppose que la ville est d'accord avec elle pour dire que les week-ends pluvieux sont reposants."],
  ['Nina believes her coworkers all hate loud music because she does.', "Nina croit que ses collegues detestent tous la musique forte parce qu'elle la deteste."],
  ['Omar says everyone must like silent lunches because he enjoys them.', "Omar dit que tout le monde doit aimer les dejeuners silencieux parce qu'il les aime."],
  ['Priya assumes students all want the same snack break schedule she prefers.', "Priya suppose que les etudiants veulent tous le meme horaire de pause snack qu'elle prefere."],
  ['Leo thinks the neighborhood loves board games because his friends do.', "Leo pense que le quartier adore les jeux de societe parce que ses amis les aiment."],
  ['Jade believes most parents want the same strict bedtime she uses.', "Jade croit que la plupart des parents veulent le meme coucher strict qu'elle impose."],
  ['Maya says everybody must love quiet cafes because she does.', "Maya dit que tout le monde doit aimer les cafes calmes parce qu'elle les aime."],
  ['Theo assumes the office prefers early meetings since he does.', "Theo suppose que le bureau prefere les reunions matinales puisqu'il les aime."],
  ['Rina says most people enjoy cold pizza because she does.', "Rina dit que la plupart des gens aiment la pizza froide parce qu'elle, oui."],
  ['Ben thinks everyone wants the same phone wallpaper he uses.', "Ben pense que tout le monde veut le meme fond d'ecran de telephone que lui."],
  ['Ava assumes the town agrees with her that rainy weekends are relaxing.', "Ava suppose que la ville est d'accord avec elle pour dire que les week-ends pluvieux sont reposants."],
  ['Nina believes her coworkers all hate loud music because she does.', "Nina croit que ses collegues detestent tous la musique forte parce qu'elle la deteste."],
  ['Omar says everyone must like silent lunches because he enjoys them.', "Omar dit que tout le monde doit aimer les dejeuners silencieux parce qu'il les aime."],
  ['Priya assumes students all want the same snack break schedule she prefers.', "Priya suppose que les etudiants veulent tous le meme horaire de pause snack qu'elle prefere."],
  ['Leo thinks the neighborhood loves board games because his friends do.', "Leo pense que le quartier adore les jeux de societe parce que ses amis les aiment."],
  ['Jade believes most parents want the same strict bedtime she uses.', "Jade croit que la plupart des parents veulent le meme coucher strict qu'elle impose."],
  ['Mina assumes the whole office prefers her favorite lunch spot.', "Mina suppose que tout le bureau prefere son restaurant du dejeuner favori."],
  ['Eli thinks everyone wants early grocery runs because he does.', "Eli pense que tout le monde veut faire les courses tot parce que lui le fait."],
  ['Tara believes the class likes group chats because she does.', "Tara croit que la classe aime les groupes de discussion parce qu'elle, oui."],
  ['Kai assumes all drivers enjoy the same podcast he likes.', "Kai suppose que tous les conducteurs aiment le meme podcast que lui."],
  ['Zoe thinks her friends must love rainy walks because she does.', "Zoe pense que ses amis doivent aimer les promenades sous la pluie parce qu'elle les aime."],
  ['Finn assumes everyone wants the same seat at the cafe.', "Finn suppose que tout le monde veut la meme place au cafe."],
  ['Nora believes coworkers all prefer the same chat app she uses.', "Nora croit que ses collegues preferent tous la meme application de discussion qu'elle utilise."],
  ['Grant thinks the whole family likes silent car rides because he does.', "Grant pense que toute la famille aime les trajets en voiture silencieux parce que lui oui."],
  ['Lina assumes students all care about the same deadline as she does.', "Lina suppose que les etudiants se soucient tous de la meme date limite qu'elle."],
  ['Pia thinks everyone values handwritten reminders because she does.', "Pia pense que tout le monde valorise les rappels manuscrits parce qu'elle le fait."],
  ['Owen assumes the team likes long lunches because he does.', "Owen suppose que l equipe aime les longs dejeuners parce que lui oui."],
  ['Rita thinks everyone wants the same weekend routine she prefers.', "Rita pense que tout le monde veut la meme routine de week-end qu'elle prefere."],
  ['Ari believes the office is united in loving early emails.', "Ari croit que le bureau est uni pour aimer les courriels matinaux."],
  ['Milo assumes everyone enjoys the same music in the gym.', "Milo suppose que tout le monde aime la meme musique a la salle de sport."],
  ['Juno thinks the whole group prefers the same dessert she picks.', "Juno pense que tout le groupe prefere le meme dessert qu'elle choisit."],
  ['Iris assumes everyone finds her favorite route to school best.', "Iris suppose que tout le monde trouve son trajet prefere vers l ecole le meilleur."],
  ['Cole believes all neighbors like the same lawn schedule he keeps.', "Cole croit que tous les voisins aiment le meme planning pour la pelouse qu'il suit."],
  ['Hana thinks her class shares her love of pop quizzes.', "Hana pense que sa classe partage son amour des quiz surprises."],
  ['Drew assumes all roommates prefer the same thermostat setting he likes.', "Drew suppose que tous les colocataires preferent le meme reglage de thermostat que lui."],
  ['Lara thinks the town agrees that quiet libraries are the best hangout.', "Lara pense que la ville est d accord pour dire que les bibliotheques calmes sont le meilleur endroit."],
  ['Maya assumes everyone wants the same holiday itinerary she planned.', "Maya suppose que tout le monde veut le meme itineraire de vacances qu'elle a prepare."],
  ['Theo thinks the whole team likes the same snack bar at breaks.', "Theo pense que toute l equipe aime la meme barre snack pendant les pauses."],
  ['Ben assumes everyone in his class prefers the same note-taking app.', "Ben suppose que tout le monde dans sa classe prefere la meme application de prise de notes."],
  ['Ava thinks everyone enjoys the same coffee strength she does.', "Ava pense que tout le monde aime la meme intensite de cafe qu'elle."],
  ['Nina believes the city shares her love of quiet Sunday mornings.', "Nina croit que la ville partage son amour des matins tranquilles du dimanche."],
  ['Omar assumes all coworkers want the same standing desk height he uses.', "Omar suppose que tous les collegues veulent la meme hauteur de bureau assis-debout que lui."],
  ['Priya thinks everyone in the building prefers the same elevator music.', "Priya pense que tout le monde dans l immeuble prefere la meme musique d ascenseur."],
  ['Leo assumes the whole family likes the same game night he plans.', "Leo suppose que toute la famille aime la meme soiree jeux qu'il organise."],
  ['Jade thinks the neighborhood is on her side about quiet dogs.', "Jade pense que le quartier est de son cote pour les chiens calmes."],
  ['Mina assumes everyone at the party wants the same music volume she does.', "Mina suppose que tout le monde a la fete veut le meme volume de musique qu'elle."],
  ['Evan thinks all students would rather have the same lunch menu he prefers.', "Evan pense que tous les etudiants prefereraient le meme menu de dejeuner que lui."]
];

const OPTIONS_EN = ['False Consensus Effect', 'Bandwagon', 'Projection Bias', 'Hasty Generalization'];
const OPTIONS_FR = ['Effet de faux consensus', 'Effet de groupe', 'Biais de projection', 'Généralisation hâtive'];

function rotate(a: string[], i: number) {
  const r = a.slice(1);
  r.splice(i, 0, a[0]);
  return r;
}

function sub(i: number) {
  return i < 17 ? SubLevel.BEGINNER : i < 34 ? SubLevel.INTERMEDIATE : SubLevel.EXPERT;
}

function make(fr = false): Question[] {
  return SCENARIOS.map((s, i) => {
    const c = i % 4;
    return {
      id: 34101 + i,
      level: 6,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Effet de faux consensus' : 'False Consensus Effect',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? "La personne suppose à tort que ses propres goûts, habitudes ou croyances sont largement partagés par les autres."
        : 'The person wrongly assumes their own tastes, habits, or beliefs are widely shared by others.',
      detailedExplanationBeginner: fr
        ? "On prend son opinion personnelle pour la norme."
        : 'A personal preference is treated like the norm.',
      detailedExplanationIntermediate: fr
        ? "Cette erreur apparaît quand quelqu'un extrapole à partir de son entourage ou de sa propre routine."
        : 'This error appears when someone extrapolates from their own circle or routine.',
      detailedExplanationExpert: fr
        ? "L'effet de faux consensus projette l'échantillon subjectif du locuteur sur la population générale, en confondant familiarité personnelle et représentativité."
        : 'False consensus projects the speaker’s subjective sample onto the general population, confusing personal familiarity with representativeness.',
      questionFormat: 'standard',
    };
  });
}

export const FALSE_CONSENSUS_EFFECT_EXPANSION_EN: Question[] = make();
export const FALSE_CONSENSUS_EFFECT_EXPANSION_FR: Question[] = make(true);
