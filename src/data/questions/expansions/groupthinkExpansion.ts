import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['At the committee meeting, everyone nods along because nobody wants to be the first to disagree about the lunch budget and sandwiches.', "Lors de la reunion du comite, tout le monde acquiesce parce que personne ne veut etre le premier a ne pas etre d'accord sur le budget du dejeuner et des sandwichs."],
  ['Maya changes her opinion in the group chat after seeing three friends pile on the same view about the new logo for the club.', "Maya change d'avis dans le chat de groupe apres avoir vu trois amis se rallier a la meme opinion sur le nouveau logo du club."],
  ['The office team approves a bad plan because the loudest voice in the room says it feels safer.', "L equipe du bureau approuve un mauvais plan parce que la voix la plus forte de la salle dit que cela semble plus sur."],
  ['Ben keeps quiet during the school project because he thinks disagreeing would make him the difficult one.', "Ben se tait pendant le projet scolaire parce qu il pense que s opposer ferait de lui la personne difficile."],
  ['At lunch, the friends agree on a boring restaurant just so the conversation stays smooth.', "Au dejeuner, les amis choisissent un restaurant ennuyeux juste pour que la conversation reste fluide."],
  ['Priya hides her real concern because the whole team already sounds excited about the idea.', "Priya cache sa vraie inquietude parce que toute l equipe semble deja enthousiaste pour l idee."],
  ['Noah supports the risky shortcut because everyone else is acting like hesitation would be rude.', "Noah soutient le raccourci risqué parce que tout le monde agit comme si hesiter serait impoli."],
  ['The student council votes yes after sensing that nobody wants to be the lone no vote.', "Le conseil des eleves vote oui apres avoir senti que personne ne veut etre le seul vote non."],
  ['Lina stops asking questions once the room starts laughing at anyone who slows the momentum.', "Lina cesse de poser des questions une fois que la salle commence a se moquer de ceux qui ralentissent le mouvement."],
  ['Omar agrees with the group theory because it is easier than defending a separate view.', "Omar est d'accord avec la theorie du groupe parce que c est plus simple que de defendre un point de vue different."],
  ["The parents' chat reaches a weak conclusion because everyone wants a quick consensus.", "Le groupe de parents aboutit a une conclusion fragile parce que tout le monde veut un consensus rapide."],
  ['Ava says the meeting plan must be right since the whole room seemed relieved when it passed.', "Ava dit que le plan de reunion doit etre bon puisque toute la salle semblait soulagée quand il a ete adopte."],
  ['Theo supports the bad joke because nobody wants to be the buzzkill in front of the crowd.', "Theo soutient la mauvaise blague parce que personne ne veut passer pour le rabat-joie devant la foule."],
  ['Rosa goes along with the crowd opinion even though she noticed the evidence was thin.', "Rosa suit l opinion du groupe meme si elle a remarque que les preuves etaient faibles."],
  ['Jules agrees to the shortcut because the team leader keeps framing doubt as disloyalty.', "Jules accepte le raccourci parce que le chef d equipe presente sans cesse le doute comme une marque de desobeissance."],
  ['The classmates laugh at the cautious answer and the whole row follows their lead.', "Les camarades rient de la reponse prudente et toute la rangée suit leur exemple."],
  ['Eli chooses the popular option because he thinks disagreement would ruin the vibe.', "Eli choisit l option populaire parce qu il pense que le desaccord ruinerait l ambiance."],
  ['Mina backs the proposal after hearing that everyone in the department already agreed.', "Mina soutient la proposition apres avoir entendu que tout le service etait deja d accord."],
  ['Hugo says the plan is safe only because nobody in the room has challenged it yet.', "Hugo dit que le plan est sur seulement parce que personne dans la salle ne l a encore conteste."],
  ['Lea keeps her concern private because she does not want to look like the one slowing the team down.', "Lea garde son inquietude pour elle parce qu elle ne veut pas avoir l air de freiner l equipe."],
  ['Max supports the slogan because the room applauded before anyone could question it.', "Max soutient le slogan parce que la salle a applaudi avant que quelqu un puisse le remettre en question."],
  ['Tia agrees to the plan after hearing the boss say that "real teammates" do not object.', 'Tia accepte le plan apres avoir entendu le patron dire que les "vrais" coequipiers ne s opposent pas.'],
  ['Paul changes his answer when the group leader frowns at the first sign of doubt.', "Paul change de reponse quand le chef de groupe fronce les sourcils au premier signe de doute."],
  ['Yara keeps nodding even though the data looks shaky, because the table is already moving on.', "Yara continue d acquiescer meme si les donnees semblent fragiles, parce que la table passe deja au point suivant."],
  ['Dan joins the consensus because he assumes the others must have checked the details already.', "Dan rejoint le consensus parce qu il suppose que les autres ont deja verifie les details."],
  ['Mina follows the crowd vote because she does not want to be isolated after the meeting.', "Mina suit le vote du groupe parce qu elle ne veut pas etre isolee apres la reunion."],
  ['Eric agrees with the committee because the alternate view never got air time.', "Eric est d accord avec le comite parce que le point de vue alternatif n a jamais eu de temps de parole."],
  ['Grace supports the final slide because everyone around her was nodding too quickly to think.', "Grace soutient la derniere diapositive parce que tout le monde autour d elle acquiescait trop vite pour reflechir."],
  ['Owen says the proposal feels right since no one in the room wants to embarrass the presenter.', "Owen dit que la proposition semble juste puisque personne dans la salle ne veut embarrasser le presentateur."],
  ['Mila goes along with the majority even though the explanation leaves holes unanswered.', "Mila suit la majorite meme si l explication laisse des trous sans reponse."],
  ['Jin supports the trend because the group keeps treating hesitation as a personal flaw.', "Jin soutient la tendance parce que le groupe traite sans cesse l hesitation comme un defaut personnel."],
  ['Ravi accepts the rumor because the entire friend circle is repeating it as if that settles it.', "Ravi accepte la rumeur parce que tout le groupe d amis la repete comme si cela suffisait."],
  ['Sofia stays silent because she does not want to be blamed for slowing the unanimous vote.', "Sofia reste silencieuse parce qu elle ne veut pas etre tenue pour responsable d avoir ralenti le vote unanime."],
  ['Ben decides the plan must be good because the team reacts badly to every small objection.', "Ben decide que le plan doit etre bon parce que l equipe reagit mal a chaque petite objection."],
  ['Nina agrees to the schedule because the whole room is rushing to "close it out".', "Nina accepte le calendrier parce que toute la salle veut « cloturer » la discussion rapidement."],
  ['Alex goes along with the idea after hearing that the group already has a "family" spirit.', "Alex suit l idee apres avoir entendu que le groupe a deja un esprit de « famille »."],
  ['Maya says the decision is fine because everyone else seems relieved that nobody challenged it.', "Maya dit que la decision est correcte parce que tout le monde semble soulagé que personne ne l ait contredite."],
  ['Theo pretends to agree so the discussion does not turn awkward in front of the whole team.', "Theo fait semblant d etre d accord pour que la discussion ne devienne pas genante devant toute l equipe."],
  ['Lina backs the pitch because dissenters are being treated like they are not team players.', "Lina soutient la proposition parce que les dissidents sont traites comme s ils n etaient pas des joueurs d equipe."],
  ['Omar takes the safe route because the group has made "unity" sound more important than accuracy.', "Omar prend la solution prudente parce que le groupe a fait passer « l unite » avant la justesse."],
  ['Priya agrees with the crowd because the first person to object got laughed off the call.', "Priya est d accord avec la foule parce que la premiere personne a objecter a ete moquee pendant l appel."],
  ['Noah supports the launch because the rest of the group keeps saying they all feel great about it.', "Noah soutient le lancement parce que le reste du groupe continue de dire qu ils le sentent tous tres bien."],
  ['Lea drops her reservations when she realizes nobody wants to re-open the topic.', "Lea abandonne ses reserves quand elle realise que personne ne veut rouvrir le sujet."],
  ['Max agrees to the compromise because the group treats consensus like the same thing as truth.', "Max accepte le compromis parce que le groupe traite le consensus comme s il etait la meme chose que la verite."],
  ['Tia says the answer is obvious because the whole table reached it too quickly to question.', "Tia dit que la reponse est evidente parce que toute la table y est arrivee trop vite pour la remettre en question."],
  ['Paul supports the idea because he is tired of being the only one asking for proof.', "Paul soutient l idee parce qu il est fatigue d etre le seul a demander des preuves."],
  ['Yara nods along after the group frames disagreement as negativity.', "Yara acquiesce apres que le groupe a presente le desaccord comme de la negativite."],
  ['Dan accepts the claim because every person in the room says it with the same confidence.', "Dan accepte l affirmation parce que chaque personne dans la salle la dit avec la meme assurance."],
  ['Mina joins the final vote because she does not want to stand out in front of her peers.', "Mina rejoint le vote final parce qu elle ne veut pas se demarquer devant ses pairs."],
  ['After one person raises a concern, the rest of the group jokes it away so nobody has to slow down.', "Apres qu une personne a souleve une inquietude, le reste du groupe la balaie par une blague pour que personne n ait a ralentir."],
  ['The committee approves the plan because everyone assumes someone else already checked the details.', "Le comite approuve le plan parce que tout le monde suppose que quelqu un d autre a deja verifie les details."],
  ['Maya hides her objection once the room starts praising the proposal like it is already settled.', "Maya cache son objection une fois que la salle commence a louer la proposition comme si elle etait deja reglee."],
  ['Ben goes along with the bad deadline because the team is acting like doubts are a personal attack.', "Ben suit le mauvais delai parce que l equipe agit comme si les doutes etaient une attaque personnelle."],
  ['Priya agrees to the menu choice just to keep the lunch chat from turning awkward.', "Priya accepte le choix du menu juste pour que la conversation du dejeuner ne devienne pas genante."],
  ['Noah supports the risky shortcut because the loudest people make caution sound embarrassing.', "Noah soutient le raccourci risque parce que les personnes les plus bruyantes font passer la prudence pour quelque chose de genant."],
  ['Lina stops questioning the plan when she notices everyone is smiling too hard to disagree.', "Lina cesse de questionner le plan quand elle remarque que tout le monde sourit trop pour contredire."],
  ['Theo says yes to the proposal because nobody wants to be the person who "kills the vibe".', "Theo dit oui a la proposition parce que personne ne veut etre la personne qui « casse l ambiance »."],
  ['Ava changes her mind after the group leader calls skepticism a bad attitude.', "Ava change d avis apres que le chef du groupe a qualifie le scepticisme de mauvaise attitude."],
  ['Omar signs off on the decision because the room is acting like speed matters more than accuracy.', "Omar approuve la decision parce que la salle agit comme si la vitesse comptait plus que la precision."],
  ['Mia agrees with the team because everyone keeps saying the same thing in a louder voice.', "Mia est d accord avec l equipe parce que tout le monde repete la meme chose d une voix plus forte."],
  ['Ben stays quiet when the group laughs at the first person to question the plan.', "Ben reste silencieux quand le groupe se moque de la premiere personne qui remet le plan en question."],
  ['Priya nods along because the room treats disagreement like bad manners.', "Priya acquiesce parce que la salle traite le desaccord comme une impolitesse."],
  ['Noah supports the policy because the whole table is rushing to finish before anyone can inspect it.', "Noah soutient la politique parce que toute la table veut finir avant que quelqu un puisse l examiner."],
  ['Lina changes her answer after seeing everyone else choose the same option.', "Lina change sa reponse apres avoir vu tout le monde choisir la meme option."],
  ['Theo agrees with the rumor because nobody in the friend group wants to be the skeptic.', "Theo est d accord avec la rumeur parce que personne dans le groupe d amis ne veut jouer les sceptiques."],
  ['Ava hides her doubt because the presenter keeps saying "we all know this is right".', 'Ava cache son doute parce que le presentateur repete sans cesse que "nous savons tous que c est juste".'],
  ['Omar backs the plan because the whole team sounds relieved to stop discussing it.', "Omar soutient le plan parce que toute l equipe semble soulagée d arreter d en discuter."],
  ['Rosa agrees to the shortcut because the group makes patience sound weak.', "Rosa accepte le raccourci parce que le groupe fait passer la patience pour une faiblesse."],
  ['Jules says yes after the moderator hints that a real team would move on already.', "Jules dit oui apres que le moderateur a laisse entendre qu une vraie equipe serait deja passee a autre chose."],
  ['Eli joins the vote because the other voters are acting like caution is a lack of loyalty.', "Eli rejoint le vote parce que les autres votants agissent comme si la prudence etait un manque de loyauter."],
  ['Mina supports the bad idea because every objection gets met with eye rolls.', "Mina soutient la mauvaise idee parce que chaque objection recoit des yeux au ciel."],
  ['Hugo goes along with the group because the chair keeps praising "alignment" instead of evidence.', "Hugo suit le groupe parce que le president ne cesse de louer « l alignement » au lieu des preuves."],
  ['Lea agrees because the whole table has already moved on and she does not want to reopen it.', "Lea est d accord parce que toute la table est deja passee a autre chose et qu elle ne veut pas rouvrir le sujet."],
  ['Max says the decision feels right because nobody is willing to be the one person saying no.', "Max dit que la decision semble juste parce que personne n est pret a etre l unique personne a dire non."],
  ['Tia accepts the plan after hearing the team describe doubts as overthinking.', "Tia accepte le plan apres avoir entendu l equipe decrire les doutes comme du surreflexion."],
  ['Paul supports the pitch because the room applauds before the details are discussed.', "Paul soutient la proposition parce que la salle applaudit avant meme que les details soient discutes."],
  ['Yara changes her stance because the group keeps repeating that "everyone is on board".', "Yara change de position parce que le groupe repete sans cesse que « tout le monde est partant »."],
  ['Dan stays with the majority because he does not want to be the awkward exception.', "Dan reste avec la majorite parce qu il ne veut pas etre l exception genante."],
  ['Nina agrees after the group leader says that second-guessing is disrespectful.', "Nina est d accord apres que le chef du groupe a dit que remettre en question serait irrespectueux."],
  ['Kim nods because the whole team is acting like the matter has already been decided.', "Kim acquiesce parce que toute l equipe agit comme si l affaire etait deja decidee."],
  ['Salma supports the suggestion because the strongest personality in the room favors it.', "Salma soutient la suggestion parce que la personnalite la plus forte de la salle la favorise."],
  ['Grant says yes to the compromise because nobody else is willing to voice a concern.', "Grant dit oui au compromis parce que personne d autre ne veut exprimer une reserve."],
  ['Mila agrees with the crowd because she thinks being the lone dissenter would make dinner awkward.', "Mila est d accord avec la foule parce qu elle pense qu etre la seule dissidente rendrait le diner genant."],
  ['Owen follows the plan because the group keeps framing disagreement as a team failure.', "Owen suit le plan parce que le groupe presente sans cesse le desaccord comme un echec d equipe."],
  ['Jin accepts the rumor because everyone in the chat is repeating it like a fact.', "Jin accepte la rumeur parce que tout le monde dans le chat la repete comme un fait."],
  ['Pia goes with the group because the room is moving too fast for anyone to pause.', "Pia suit le groupe parce que la salle avance trop vite pour que quelqu un puisse faire une pause."],
  ['Alex agrees because the first person to question the idea got mocked for "not being positive".', "Alex est d accord parce que la premiere personne a questionner l idee a ete moquee pour ne pas etre « positive »."] ,
  ['Maya supports the decision because the group treats speed and sameness as proof of quality.', "Maya soutient la decision parce que le groupe traite la vitesse et l uniformite comme une preuve de qualite."],
  ['Theo says he is fine with it because nobody wants to reopen the debate and look difficult.', "Theo dit que cela lui convient parce que personne ne veut rouvrir le debat et paraitre difficile."],
  ['Ava follows the majority because the meeting has turned into a contest to sound agreeable.', "Ava suit la majorite parce que la reunion est devenue un concours pour paraitre conciliant."],
  ['Noah backs the idea because the whole room seems relieved to stop thinking about it.', "Noah soutient l idee parce que toute la salle semble soulagée de ne plus y penser."],
  ['Lina changes her mind when the group starts calling concern "drama".', "Lina change d avis quand le groupe commence a appeler l inquietude « drame »."] ,
  ['Ravi agrees because the team is acting like doubt is a personal flaw.', "Ravi est d accord parce que l equipe agit comme si le doute etait un defaut personnel."],
  ['Sofia says yes because the group has made consensus feel more important than accuracy.', "Sofia dit oui parce que le groupe a rendu le consensus plus important que la precision."],
  ['Jules joins in because everyone else is already applauding and he does not want to be the odd one out.', "Jules se joint au mouvement parce que tout le monde applaudit deja et qu il ne veut pas etre l etranger."],
  ['Mia agrees with the team because everyone keeps saying the same thing in a louder voice.', "Mia est d accord avec l equipe parce que tout le monde repete la meme chose d une voix plus forte."],
  ['Ben stays quiet when the group laughs at the first person to question the plan.', "Ben reste silencieux quand le groupe se moque de la premiere personne qui remet le plan en question."],
  ['Priya nods along because the room treats disagreement like bad manners.', "Priya acquiesce parce que la salle traite le desaccord comme une impolitesse."],
  ['Noah supports the policy because the whole table is rushing to finish before anyone can inspect it.', "Noah soutient la politique parce que toute la table veut finir avant que quelqu un puisse l examiner."],
  ['Lina changes her answer after seeing everyone else choose the same option.', "Lina change sa reponse apres avoir vu tout le monde choisir la meme option."],
];

const OPTIONS_EN = ['Groupthink', 'Bandwagon', 'False Consensus Effect', 'Appeal to Popularity'];
const OPTIONS_FR = ['Pensée de groupe', 'Effet de mode', 'Effet de faux consensus', 'Appel à la popularité'];

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

export const GROUPTHINK_EXPANSION_EN: Question[] = SCENARIOS.map(([english], index) => {
  const correctIndex = index % 4;
  return {
    id: 37501 + index,
    level: 4,
    persona_stage: PersonaStage.CRAB,
    concept: 'Groupthink',
    difficulty: index < 43 ? 1 : index < 50 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Which bias or fallacy is shown here?\n\n"${english}"`,
    options: rotatedOptions(OPTIONS_EN, correctIndex),
    correct_option_index: correctIndex,
    explanation: 'The group values harmony and unanimity so much that members stop challenging a weak idea.',
    detailedExplanationBeginner: 'Harmony becomes more important than checking whether the idea is actually good.',
    detailedExplanationIntermediate: 'Group pressure makes people mute doubts, so the team reaches agreement without properly testing the decision.',
    detailedExplanationExpert: 'This is groupthink: cohesion, conformity pressure, and fear of dissent push a group toward premature consensus and poor judgment.',
    questionFormat: 'standard',
  };
});

export const GROUPTHINK_EXPANSION_FR: Question[] = SCENARIOS.map(([, french], index) => {
  const correctIndex = index % 4;
  return {
    id: 37501 + index,
    level: 4,
    persona_stage: PersonaStage.CRAB,
    concept: 'Pensée de groupe',
    difficulty: index < 43 ? 1 : index < 50 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Quel biais ou sophisme est montré ici ?\n\n"${french}"`,
    options: rotatedOptions(OPTIONS_FR, correctIndex),
    correct_option_index: correctIndex,
    explanation: 'Le groupe valorise tellement l harmonie et l unanimite que ses membres cessent de contester une idee faible.',
    detailedExplanationBeginner: "L harmonie devient plus importante que la verification de la qualite de l idee.",
    detailedExplanationIntermediate: "La pression du groupe fait taire les doutes, donc l equipe parvient a un accord sans vraiment tester la decision.",
    detailedExplanationExpert: "C est la pensée de groupe : la cohesion, la pression a la conformite et la peur de la dissidence poussent un groupe vers un consensus premature et un mauvais jugement.",
    questionFormat: 'standard',
  };
});
