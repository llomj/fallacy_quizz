import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Before Maya can explain her budget idea, Leo says she always makes messy plans, so nobody should trust what comes next.', 'Avant que Maya puisse expliquer son idée de budget, Leo dit qu elle fait toujours des plans brouillons, donc personne ne devrait faire confiance à ce qui va suivre.'],
  ['Nora starts to speak in a meeting, but Omar tells everyone she is impossible to work with, so her suggestion gets ignored.', 'Nora commence à parler en réunion, mais Omar dit à tout le monde qu elle est impossible à côtoyer, alors sa suggestion est ignorée.'],
  ['Priya wants to recommend a café, yet Ben says she has terrible taste, so the café must be bad too.', 'Priya veut recommander un café, mais Ben dit qu elle a un goût affreux, donc le café doit être mauvais aussi.'],
  ['Before the debate begins, Tia is called clueless, so people stop listening to her argument.', 'Avant même que le débat ne commence, Tia est traitée d ignorante, alors les gens cessent d écouter son argument.'],
  ['Kai says the park cleanup will be easy, but someone adds that he is always lazy, so his point is dismissed.', 'Kai dit que le nettoyage du parc sera facile, mais quelqu un ajoute qu il est toujours paresseux, alors son avis est écarté.'],
  ['Rina suggests a simple app fix, and before she finishes, another student says she is just trying to look smart.', 'Rina propose une correction simple pour l application, et avant même qu elle termine, un autre élève dit qu elle essaie juste de faire la maligne.'],
  ['Mia wants to explain why the bus was late, but the driver calls her dramatic, so nobody hears the explanation.', 'Mia veut expliquer pourquoi le bus était en retard, mais le chauffeur la traite de dramatique, alors personne n entend l explication.'],
  ['Eli brings up a safety concern, and the group says he always complains, so they move on.', 'Eli mentionne un souci de sécurité, et le groupe dit qu il se plaint toujours, alors ils passent à autre chose.'],
  ['Zoe proposes a better route for the road trip, but her brother says she is hopeless with directions, so the idea dies there.', 'Zoé propose un meilleur itinéraire pour le voyage, mais son frère dit qu elle est nulle en orientation, alors l idée s arrête là.'],
  ['Theo wants to talk about the homework rules, yet the teacher says he is just making excuses, so the question is skipped.', 'Théo veut parler des règles du devoir, mais le professeur dit qu il cherche juste des excuses, alors la question est évitée.'],
  ['Lina starts to defend her recipe, and before she can finish, someone says she ruins every dish anyway.', 'Lina commence à défendre sa recette, et avant qu elle finisse, quelqu un dit qu elle rate de toute façon tous les plats.'],
  ['Grant suggests a cheaper phone plan, but the room hears only that he is cheap and stops there.', 'Grant propose un forfait téléphonique moins cher, mais la salle retient seulement qu il est radin et s arrête là.'],
  ['Ava explains why the quiz answer was right, and a classmate says she never knows what she is talking about.', 'Ava explique pourquoi la réponse au quiz était juste, et une camarade dit qu elle ne sait jamais de quoi elle parle.'],
  ['Noah wants to join the volunteer trip, but someone says he ruins every group activity, so the invitation is dropped.', 'Noah veut participer au voyage bénévole, mais quelqu un dit qu il gâche toutes les activités de groupe, alors l invitation est abandonnée.'],
  ['Jules tries to defend the library plan, and a neighbor says he is the type to make things worse.', 'Jules essaie de défendre le projet de bibliothèque, et un voisin dit que c est le genre de personne qui empire tout.'],
  ['Hugo suggests a different meeting time, but the manager says he is always difficult, so nobody considers it.', 'Hugo suggère une autre heure de réunion, mais la responsable dit qu il est toujours difficile, alors personne n y pense.'],
  ['Pia asks for a quiet work space, and before anyone replies, they say she is too sensitive to judge anything.', 'Pia demande un espace de travail calme, et avant qu on réponde, on dit qu elle est trop sensible pour juger quoi que ce soit.'],
  ['Finn gives a careful warning about the stairs, but the host says he overreacts, so the warning is brushed aside.', 'Finn donne un avertissement prudent sur les escaliers, mais l hôte dit qu il exagère, alors l avertissement est balayé.'],
  ['Juno begins describing a problem at the store, and the clerk says she is always looking for trouble.', 'Juno commence à décrire un problème au magasin, et le vendeur dit qu elle cherche toujours des problèmes.'],
  ['Iris wants to explain why she left early, but her coworker says she is unreliable, so nobody asks more.', 'Iris veut expliquer pourquoi elle est partie tôt, mais sa collègue dit qu elle n est pas fiable, alors personne ne demande plus.'],
  ['Cole offers a useful shortcut, and his cousin says he is only suggesting it because he is too lazy to help.', 'Cole propose un raccourci utile, et son cousin dit qu il le suggère juste parce qu il est trop paresseux pour aider.'],
  ['Lea recommends a different movie, and a friend says she has terrible opinions, so the recommendation is ignored.', 'Léa recommande un autre film, et une amie dit qu elle a de très mauvais avis, alors la recommandation est ignorée.'],
  ['Sam asks for a fair hearing, but the first comment says he always causes drama.', 'Sam demande une écoute équitable, mais le premier commentaire dit qu il provoque toujours des drames.'],
  ['Maya explains her side of the story, and someone interrupts to say she is impossible to trust.', 'Maya explique sa version de l histoire, et quelqu un l interrompt pour dire qu on ne peut pas lui faire confiance.'],
  ['Ben starts to defend the class schedule, but the group labels him a complainer before he can finish.', 'Ben commence à défendre l emploi du temps de la classe, mais le groupe le traite de râleur avant qu il ne termine.'],
  ['Nina wants to discuss the team budget, and a coworker says she is only trying to stir up conflict.', 'Nina veut parler du budget de l équipe, et un collègue dit qu elle cherche seulement à créer des conflits.'],
  ['Omar brings up a broken streetlight, but the mayor is called paranoid, so the concern disappears.', 'Omar parle d un lampadaire cassé, mais on traite le maire de paranoïaque, alors le souci disparaît.'],
  ['Tia suggests more time for the project, and her friend says she is always making things harder than they need to be.', 'Tia suggère plus de temps pour le projet, et son amie dit qu elle complique toujours tout inutilement.'],
  ['Riley asks for clearer instructions, but someone says he is too needy to listen to.', 'Riley demande des consignes plus claires, mais quelqu un dit qu il est trop demandeur pour être écouté.'],
  ['Ava wants to explain a low grade, and the teacher says she has a habit of blaming everyone else.', 'Ava veut expliquer une mauvaise note, et le professeur dit qu elle a l habitude de rejeter la faute sur les autres.'],
  ['Mina pitches a new snack idea, but her brother says she is bad at everything creative.', 'Mina propose une nouvelle idée de goûter, mais son frère dit qu elle est mauvaise dans tout ce qui est créatif.'],
  ['Grant asks for help fixing the printer, and his boss says he always makes small problems bigger.', 'Grant demande de l aide pour réparer l imprimante, et son chef dit qu il aggrave toujours les petits problèmes.'],
  ['Lina tries to explain the late train, but the crowd hears only that she is making excuses again.', 'Lina essaie d expliquer le train en retard, mais la foule n entend que le fait qu elle invente encore des excuses.'],
  ['Theo suggests a safer shortcut home, and someone says he is just scared of everything.', 'Théo propose un raccourci plus sûr pour rentrer, et quelqu un dit qu il a peur de tout.'],
  ['Jade wants to clarify the cost of the event, but people say she is only being difficult.', 'Jade veut clarifier le coût de l événement, mais les gens disent qu elle est juste pénible.'],
  ['Owen starts to defend his design, and a teammate says he always thinks he is right.', 'Owen commence à défendre son dessin, et un coéquipier dit qu il pense toujours avoir raison.'],
  ['Mia explains the homework delay, but her classmate says she is unreliable, so the reason is ignored.', 'Mia explique le retard du devoir, mais sa camarade dit qu elle est peu fiable, alors la raison est ignorée.'],
  ['Finn warns that the road is icy, and the response is that he is a worrywart.', 'Finn avertit que la route est verglacée, et on lui répond qu il est trop anxieux.'],
  ['Zoe wants to ask for a reschedule, but a coworker says she is always trying to get out of work.', 'Zoé veut demander un report, mais un collègue dit qu elle essaie toujours d éviter le travail.'],
  ['Kai proposes a simpler way to study, and the group says he never takes anything seriously.', 'Kai propose une méthode plus simple pour réviser, et le groupe dit qu il ne prend jamais rien au sérieux.'],
  ['Priya begins to defend her note, but someone says she is just defensive when corrected.', 'Priya commence à défendre sa note, mais quelqu un dit qu elle se met toujours sur la défensive quand on la corrige.'],
  ['Hugo asks for one more day, and the reply is that he is lazy and trying to stall.', 'Hugo demande un jour de plus, et la réponse est qu il est paresseux et qu il cherche à gagner du temps.'],
  ['Eli explains why the refund is wrong, and the clerk says he is always trying to get something for free.', 'Eli explique pourquoi le remboursement est erroné, et le vendeur dit qu il essaie toujours d obtenir quelque chose gratuitement.'],
  ['Nora begins to describe the issue, and the manager says she is impossible to satisfy.', 'Nora commence à décrire le problème, et la responsable dit qu il est impossible de la satisfaire.'],
  ['Pia says the room was noisy, but the host says she is oversensitive, so the complaint is dropped.', 'Pia dit que la pièce était bruyante, mais l hôte dit qu elle est trop sensible, alors la plainte est abandonnée.'],
  ['Grant wants to explain the missing tools, and the supervisor says he is careless by nature.', 'Grant veut expliquer les outils manquants, et le superviseur dit qu il est négligent par nature.'],
  ['Rina starts to talk about the late delivery, but someone says she never gives anyone the benefit of the doubt.', 'Rina commence à parler de la livraison en retard, mais quelqu un dit qu elle ne donne jamais le bénéfice du doute à personne.'],
  ['Juno wants a simpler schedule, and the reply is that she complains about everything.', 'Juno veut un emploi du temps plus simple, et la réponse est qu elle se plaint de tout.'],
  ['Noah asks to review the evidence, but the first person says he is only there to argue.', 'Noah demande à revoir les preuves, mais la première personne dit qu il est seulement là pour contester.'],
  ['Tia offers a calm explanation, and the room says she always overthinks things.', 'Tia donne une explication calme, et la salle dit qu elle réfléchit toujours trop.'],
  ['Sam tries to explain the missed call, but people say he is the kind of person who causes confusion.', 'Sam essaie d expliquer l appel manqué, mais les gens disent que c est le genre de personne qui crée de la confusion.'],
  ['Ava suggests a fairer rotation, and someone says she is only trying to look good.', 'Ava suggère une rotation plus équitable, et quelqu un dit qu elle essaie seulement de paraître bien.'],
  ['Zoe starts to explain her side, but Leo says she is always wrong, so no one listens.', 'Zoé commence à expliquer sa version, mais Leo dit qu elle a toujours tort, alors personne n écoute.'],
  ['Kai asks for a chance to speak, and a teammate says he only makes problems worse.', 'Kai demande la parole, et un coéquipier dit qu il aggrave seulement les problèmes.'],
  ['Nora wants to defend her suggestion, but someone says she is impossible to trust before she finishes.', 'Nora veut défendre sa suggestion, mais quelqu un dit qu on ne peut pas lui faire confiance avant qu elle termine.'],
  ['Eli begins to explain the delay, and the room is told he always has excuses ready.', 'Éli commence à expliquer le retard, et on dit à la salle qu il a toujours des excuses prêtes.'],
  ['Lina raises a concern, but the host says she complains about everything, so the concern is ignored.', 'Lina soulève une inquiétude, mais l hôte dit qu elle se plaint de tout, alors l inquiétude est ignorée.'],
  ['Grant starts talking about the budget, and the group hears he is too negative to be helpful.', 'Grant commence à parler du budget, et le groupe entend qu il est trop négatif pour être utile.'],
  ['Tia asks for a clearer plan, but the manager says she is just trying to cause trouble.', 'Tia demande un plan plus clair, mais la responsable dit qu elle cherche seulement à créer des problèmes.'],
  ['Noah tries to explain the late shipment, and the clerk says he always blames other people.', 'Noah essaie d expliquer l expédition en retard, et la vendeuse dit qu il rejette toujours la faute sur les autres.'],
  ['Mia suggests a different schedule, but the teacher says she never accepts what is decided.', 'Mia suggère un emploi du temps différent, mais le professeur dit qu elle n accepte jamais les décisions.'],
  ['Jules begins to defend the app idea, and someone says he is only trying to sound smart.', 'Jules commence à défendre l idée d application, et quelqu un dit qu il essaie seulement d avoir l air intelligent.'],
  ['Ava wants to explain the mistake, but the group says she is always making things complicated.', 'Ava veut expliquer l erreur, mais le groupe dit qu elle complique toujours tout.'],
  ['Finn brings up a safety issue, and the reply is that he panics about everything.', 'Finn soulève un problème de sécurité, et la réponse est qu il panique pour tout.'],
  ['Mina asks for a pause, but a classmate says she is just being difficult again.', 'Mina demande une pause, mais une camarade dit qu elle est juste pénible encore une fois.'],
  ['Theo starts to explain the route, and the driver says he is hopeless with directions.', 'Théo commence à expliquer l itinéraire, et le conducteur dit qu il est nul en orientation.'],
  ['Juno wants to clarify the costs, but the office says she always stirs up drama.', 'Juno veut clarifier les coûts, mais le bureau dit qu elle crée toujours des drames.'],
  ['Iris raises a question, and the moderator says she is only there to argue.', 'Iris pose une question, et la modératrice dit qu elle est seulement là pour contester.'],
  ['Cole explains the missing item, but someone says he is careless by nature.', 'Cole explique l objet manquant, mais quelqu un dit qu il est négligent de nature.'],
  ['Riley asks to be heard, and the first response is that he is always complaining.', 'Riley demande à être entendu, et la première réponse est qu il se plaint toujours.'],
  ['Pia begins to defend the report, but the room hears she is overreacting before she can finish.', 'Pia commence à défendre le rapport, mais la salle entend qu elle exagère avant qu elle ne finisse.'],
  ['Hugo says the route is dangerous, and someone says he is scared of everything.', 'Hugo dit que la route est dangereuse, et quelqu un dit qu il a peur de tout.'],
  ['Sam explains the missing book, but the librarian says he always makes excuses.', 'Sam explique le livre manquant, mais la bibliothécaire dit qu il trouve toujours des excuses.'],
  ['Maya tries to present a new idea, and a coworker says she is impossible to work with.', 'Maya essaie de présenter une nouvelle idée, et un collègue dit qu elle est impossible à côtoyer.'],
  ['Ben wants a fair hearing, but the audience is told he never has anything useful to say.', 'Ben veut une écoute équitable, mais on dit au public qu il n a jamais rien d utile à dire.'],
  ['Omar starts describing the delay, and the manager says he is just making the problem bigger.', 'Omar commence à décrire le retard, et la responsable dit qu il ne fait qu agrandir le problème.'],
  ['Nina suggests a fix, but her brother says she always makes simple things messy.', 'Nina suggère une solution, mais son frère dit qu elle rend toujours les choses simples compliquées.'],
  ['Eli wants to explain the broken chair, and the host says he is too dramatic to trust.', 'Éli veut expliquer la chaise cassée, et l hôte dit qu il est trop dramatique pour être cru.'],
  ['Lina asks for time to speak, but the group says she just likes to hear herself talk.', 'Lina demande le temps de parler, mais le groupe dit qu elle aime seulement s écouter parler.'],
  ['Grant starts a calm explanation, and someone says he is always trying to shift blame.', 'Grant commence une explication calme, et quelqu un dit qu il essaie toujours de rejeter la faute.'],
  ['Tia brings up the missing receipt, but the cashier says she is never satisfied.', 'Tia évoque le reçu manquant, mais la caissière dit qu elle n est jamais satisfaite.'],
  ['Noah wants to defend the meeting time, and a teammate says he is just being difficult.', 'Noah veut défendre l heure de la réunion, et un coéquipier dit qu il est juste pénible.'],
  ['Mia explains the warning sign, but the host says she sees problems everywhere.', 'Mia explique le panneau d avertissement, mais l hôte dit qu elle voit des problèmes partout.'],
  ['Jules asks why the plan changed, and the reply is that he always has an attitude.', 'Jules demande pourquoi le plan a changé, et la réponse est qu il a toujours une attitude.'],
  ['Ava wants to clarify the cost, but the group is told she only wants attention.', 'Ava veut clarifier le coût, mais on dit au groupe qu elle veut seulement attirer l attention.'],
  ['Finn begins to explain the outage, and someone says he exaggerates everything.', 'Finn commence à expliquer la panne, et quelqu un dit qu il exagère tout.'],
  ['Mina asks for a fair chance, but her classmate says she cannot be pleased.', 'Mina demande une chance équitable, mais sa camarade dit qu on ne peut pas la satisfaire.'],
  ['Theo starts to explain the slow service, and the manager says he is always causing trouble.', 'Théo commence à expliquer le service lent, et la responsable dit qu il crée toujours des problèmes.'],
  ['Juno brings up the missing file, but the office says she is impossible to work with.', 'Juno mentionne le fichier manquant, mais le bureau dit qu elle est impossible à côtoyer.'],
  ['Iris asks for a chance to explain, and the first comment says she is only making excuses.', 'Iris demande une chance d expliquer, et le premier commentaire dit qu elle cherche seulement des excuses.'],
  ['Cole starts defending the design, but a teammate says he is hopeless at teamwork.', 'Cole commence à défendre le design, mais un coéquipier dit qu il est nul en travail d équipe.'],
  ['Riley wants to talk about the schedule, and the room says he is just stirring things up.', 'Riley veut parler de l emploi du temps, et la salle dit qu il ne fait que semer le trouble.'],
  ['Pia explains the late reply, but her friend says she is always unreliable.', 'Pia explique la réponse tardive, mais son amie dit qu elle est toujours peu fiable.'],
  ['Hugo starts to defend the repair bill, and someone says he is only trying to get out of responsibility.', 'Hugo commence à défendre la facture de réparation, et quelqu un dit qu il essaie seulement de fuir ses responsabilités.'],
  ['Sam asks to be heard about the fee, but the response is that he always whines.', 'Sam demande à être entendu au sujet des frais, mais la réponse est qu il se plaint toujours.'],
  ['Maya begins to explain the calendar change, and the group hears she is impossible to satisfy.', 'Maya commence à expliquer le changement de calendrier, et le groupe entend qu il est impossible de la satisfaire.'],
  ['Ben wants to clarify the mistake, but his cousin says he is always looking for a fight.', 'Ben veut clarifier l erreur, mais son cousin dit qu il cherche toujours la bagarre.'],
  ['Omar starts to defend his idea, and the audience says he is just being defensive.', 'Omar commence à défendre son idée, et le public dit qu il est seulement sur la défensive.'],
  ['Lea wants to explain the budget change, but people say she is always making things worse.', 'Léa veut expliquer le changement de budget, mais les gens disent qu elle empire toujours les choses.'],
  ['Nora starts to give her side of the story, and someone says she is just causing drama again.', 'Nora commence à donner sa version de l histoire, et quelqu un dit qu elle crée encore des drames.'],
];

const OPTIONS_EN = ['Poisoning the Well', 'Ad Hominem', 'Appeal to Authority', 'Genetic Fallacy'];
const OPTIONS_FR = ['Empoisonnement du puits', 'Attaque ad hominem', "Appel à l'autorité", 'Sophisme génétique'];

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
      id: 37751 + index,
      level: 5,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? 'Empoisonnement du puits' : 'Poisoning the Well',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'On discrédite la personne avant qu elle ne parle pour contaminer tout ce qu elle dira ensuite.'
        : 'The speaker is discredited before they speak so everything they say afterward is poisoned in advance.',
      detailedExplanationBeginner: isFrench
        ? 'L attaque vient avant l argument.'
        : 'The attack comes before the argument.',
      detailedExplanationIntermediate: isFrench
        ? "L empoisonnement du puits consiste à préparer le public contre quelqu un avant même qu il présente son idée, afin que le message paraisse suspect d avance."
        : 'Poisoning the well means priming the audience against someone before they present their idea, so the message seems suspicious in advance.',
      detailedExplanationExpert: isFrench
        ? "Ce sophisme agit comme une mise en garde toxique : il remplace l évaluation du contenu par une histoire préalable sur la personne. Il peut prendre la forme d une remarque moqueuse, d une rumeur ou d une étiquette dévalorisante placée juste avant l intervention. Le résultat est le même: le jugement est faussé avant même que les raisons soient entendues."
        : 'This fallacy works like a toxic warning label: it replaces evaluation of the content with a prior story about the person. It can show up as a sneer, a rumor, or a belittling label placed right before the person speaks. The result is the same: judgment is distorted before the reasons are even heard.',
      questionFormat: 'standard',
    };
  });
}

export const POISONING_THE_WELL_EXPANSION_EN: Question[] = createQuestions('en');
export const POISONING_THE_WELL_EXPANSION_FR: Question[] = createQuestions('fr');
