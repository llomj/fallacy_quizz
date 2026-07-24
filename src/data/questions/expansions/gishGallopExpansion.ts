import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['At the town hall, one speaker rattles off fifteen complaints in two minutes so nobody can answer any single one.', "A la reunion municipale, un orateur debite quinze reproches en deux minutes pour que personne ne puisse repondre a un seul."],
  ['During the debate, she fires ten tiny accusations in a row and then says the silence means she won.', "Pendant le debat, elle lance dix petites accusations d affilee puis dit que le silence prouve qu elle a gagne."],
  ['In the group chat, Mark dumps a wall of links and half-finished points before anyone can push back.', "Dans le chat de groupe, Mark balance un mur de liens et de points a moitie termines avant que quelqu un puisse reagir."],
  ['At dinner, Ben stacks so many examples against the new rule that the table gives up on replying.', "Au diner, Ben empile tellement d exemples contre la nouvelle regle que tout le monde abandonne l idee de repondre."],
  ['The podcast guest races through a dozen claims so fast that the host cannot check any of them live.', "L invite du podcast enchaine une douzaine d affirmations si vite que l animateur ne peut en verifier aucune en direct."],
  ['In class, the student tosses out a rapid list of objections and calls the lesson wrong because no one keeps up.', "En classe, l eleve lance une liste rapide d objections et declare le cours faux parce que personne ne suit le rythme."],
  ['The coworker fires off five budgets, three charts, and two rumors before anyone can ask for evidence.', "Le collegue enchaine cinq budgets, trois graphiques et deux rumeurs avant que quelqu un puisse demander des preuves."],
  ['At the gaming forum, one poster floods the thread with twenty claims so the moderators cannot answer all at once.', "Sur le forum de jeux, un utilisateur noie le fil sous vingt affirmations pour que les moderateurs ne puissent pas tout traiter d un coup."],
  ['The campaign video races from one accusation to the next, making the audience forget the first point before the second ends.', "La video de campagne passe d une accusation a l autre si vite que le public oublie le premier point avant la fin du second."],
  ['In a family argument, she throws out so many half-checked facts that everyone stops sorting truth from noise.', "Dans une dispute familiale, elle balance tellement de faits a moitie verifies que tout le monde cesse de distinguer le vrai du bruit."],
  ['At the club meeting, he unloads a pile of grievances and declares the project dead because nobody can answer each one.', "Lors de la reunion du club, il deverse une pile de griefs et declare le projet mort parce que personne ne peut repondre a chacun."],
  ['The influencer posts one claim after another so quickly that the comment section cannot challenge the first by the time the next appears.', "L influenceuse publie une affirmation apres l autre si vite que la section commentaires ne peut pas contester la premiere avant l arrivee de la suivante."],
  ['In the job interview, the candidate dodges one question by launching into eight unrelated complaints about the industry.', "Pendant l entretien, la candidate evade une question en se lancant dans huit plaintes sans rapport sur le secteur."],
  ['The school board speaker keeps adding new objections until the room is too tired to separate them.', "L orateur du conseil scolaire ajoute sans cesse de nouvelles objections jusqu a ce que la salle soit trop fatiguee pour les distinguer."],
  ['On the livestream, the host machine-guns claims about the food, prices, staff, and parking so fast that none get checked.', "Pendant le direct, l animateur mitraille d affirmations sur la nourriture, les prix, le personnel et le parking si vite qu aucune n est verifiee."],
  ['At the neighborhood meeting, one person presents a dozen mini-arguments in a row and then says the case is obvious.', "A la reunion de quartier, une personne presente une douzaine de mini-arguments a la suite puis dit que le dossier est evident."],
  ['The customer review bundles every complaint together so the shop owner cannot answer them one by one.', "L avis client regroupe toutes les plaintes pour que le proprietaire ne puisse pas y repondre une par une."],
  ['During the science fair, a parent blurts out every worry at once and leaves before the student can respond.', "Pendant la foire scientifique, un parent debite toutes ses inquietudes d un coup puis part avant que l eleve puisse repondre."],
  ['The speaker on stage keeps switching topics so quickly that it feels like one huge pile of accusations.', "L orateur sur scene change de sujet si vite qu on a l impression d une seule enorme pile d accusations."],
  ['In the office memo, the manager lists ten problems in one breath and treats the flood of text as proof.', "Dans la note de service, le responsable liste dix problemes d une seule traite et traite ce flot de texte comme une preuve."],
  ['The late-night caller keeps piling on story after story until the listener stops asking for sources.', "L appelant tardif empile histoire apres histoire jusqu a ce que l interlocuteur arrete de demander des sources."],
  ['At the PTA meeting, the parent rattles off every possible danger so fast that nobody can fact-check in real time.', "Lors de la reunion des parents, le parent aligne tous les dangers possibles si vite que personne ne peut verifier en temps reel."],
  ['The political ad strings together a dozen scary claims and never stays on one long enough to test it.', "La pub politique enchaine une douzaine d affirmations alarmantes et ne reste jamais assez longtemps sur l une pour la tester."],
  ['In the classroom debate, one student buries the room under a flood of examples and then acts like the point is settled.', "Dans le debat en classe, un eleve ensevelit la salle sous un flot d exemples puis agit comme si la question etait reglee."],
  ['The restaurant manager answers a complaint by listing every improvement made since 2019, not the problem at hand.', "Le gerant du restaurant repond a une plainte en listant toutes les ameliorations depuis 2019, pas le probleme en question."],
  ['The podcast host keeps jumping to a new gripe before the guest can finish answering the last one.', "L animateur du podcast saute sans cesse a un nouveau reproche avant que l invite n ait fini de repondre au precedent."],
  ['At the tech meetup, she throws out so many product flaws that the audience cannot tell which ones are real.', "Au meetup tech, elle balance tellement de defauts produits que le public ne sait plus lesquels sont reels."],
  ['The debate coach teaches a student to overwhelm the other side with a long list instead of one strong point.', "L entraineur de debat apprend a l eleve a submerger l autre camp avec une longue liste plutot qu avec un seul bon point."],
  ['In the town newsletter, the columnist adds unrelated worries until the article feels like a blizzard of accusations.', "Dans le bulletin municipal, le chroniqueur ajoute des inquietudes sans rapport jusqu a ce que l article ressemble a une tempete d accusations."],
  ['The customer keeps interrupting with new complaints so the support agent never reaches a resolution.', "Le client coupe sans cesse la parole avec de nouvelles plaintes pour que l agent d assistance n atteigne jamais une solution."],
  ['At the talent show, the heckler blurts out criticism after criticism and then claims the performer has been discredited.', "Au spectacle de talents, le rabat-joie lance critique apres critique puis pretend que la prestation est discriditee."],
  ['The editor rejects the article after flooding the author with ten tiny objections instead of one serious objection.', "Le redacteur rejette l article apres avoir submerge l auteur de dix petites objections plutot que d une seule objection serieuse."],
  ['The family group text turns into a dump of screenshots, links, and claims so nobody can keep up.', "Le groupe familial devient un depot de captures, de liens et d affirmations si dense que personne ne suit."],
  ['In the city council hearing, the speaker delivers a rapid-fire list of complaints about roads, taxes, schools, and dogs.', "Lors de l audience du conseil municipal, l orateur debite une liste rapide de plaintes sur les routes, les impots, les ecoles et les chiens."],
  ['The tutor keeps adding fresh worries every time the student answers one, making the discussion endless.', "Le tuteur ajoute sans arret de nouvelles inquietudes chaque fois que l eleve en traite une, rendant la discussion interminable."],
  ['At the union meeting, one worker unloads every grievance at once so no single issue gets a fair reply.', "A la reunion syndicale, un ouvrier deverse tous ses griefs d un coup afin qu aucun probleme n obtienne de reponse equilibree."],
  ['The streamer rattles through rumor, insult, and speculation until chat cannot separate them from evidence.', "Le streamer enchaine rumeur, insulte et speculation jusqu a ce que le chat ne puisse plus les separer des preuves."],
  ['The neighbor wins the argument by tossing out so many quick claims that the other person gets lost.', "Le voisin gagne l argument en lancant tellement de revendications rapides que l autre personne se perd."],
  ['At the gallery talk, the critic throws out so many objections that the artist never gets to answer the first one.', "Lors de la visite commentee de la galerie, le critique lance tellement d objections que l artiste ne repond jamais a la premiere."],
  ['The chef at the demo keeps giving ten reasons the recipe is bad without pausing for a single question.', "Le chef de la demonstration donne dix raisons pour lesquelles la recette est mauvaise sans laisser place a une seule question."],
  ['The comment thread becomes a barrage of micro-arguments, each too small to answer before the next one appears.', "Le fil de commentaires devient un barrage de micro-arguments, chacun trop petit pour etre traite avant l arrivee du suivant."],
  ['At the school assembly, the student council speaker piles on complaints until the crowd forgets the original topic.', "A l assemblee scolaire, l orateur du conseil des eleves empile les plaintes jusqu a ce que la foule oublie le sujet initial."],
  ['The travel blogger lists every possible downside of the trip in one breath and calls it a conclusion.', "La blogueuse voyage enumere tous les inconvients possibles du voyage d une traite et appelle cela une conclusion."],
  ['The manager keeps piling on fast objections in the meeting so the proposal never gets a calm review.', "Le responsable empile les objections rapides pendant la reunion pour que la proposition ne recoive jamais un examen calme."],
  ['The caller to the radio show jumps from one accusation to the next so the host cannot verify anything.', "L appelant de l emission radio passe d une accusation a l autre pour que l animateur ne puisse verifier aucune chose."],
  ['At the book club, one member throws out a stack of criticisms and treats the volume of them as decisive.', "Au club de lecture, un membre lance une pile de critiques et traite leur nombre comme decifisif."],
  ['The customer support chat gets buried under a stream of unrelated complaints, each one barely finished.', "Le chat du support client est enseveli sous un flot de plaintes sans rapport, chacune a peine terminee."],
  ['The activist speech keeps moving so fast that one weak claim hides the next weak claim.', "Le discours militant avance si vite qu une affirmation faible en cache une autre."],
  ['The assistant coach overwhelms the room with a dozen mini-points and then says the case is obvious.', "L adjoint de l entraineur submerge la salle avec une douzaine de mini-points puis dit que le dossier est evident."],
  ['At the town debate, one speaker keeps adding fresh accusations faster than anyone can write them down.', "Lors du debat municipal, un orateur ajoute sans arret de nouvelles accusations plus vite que quiconque ne peut les noter."],
  ['The panelist fires off seven unrelated complaints and then asks why the crowd is not convinced.', "La paneliste lance sept plaintes sans rapport puis demande pourquoi la foule n est pas convaincue."],
  ['In the livestream comments, the host rattles through a pile of claims so fast that each one blurs into the next.', "Dans les commentaires du direct, l animateur enchaine une pile d affirmations si vite que chacune se fond dans la suivante."],
  ['At the school meeting, the parent keeps stacking tiny objections until the principal cannot answer any one of them.', "A la reunion de l ecole, le parent empile de petites objections jusqu a ce que le directeur ne puisse en repondre a aucune."],
  ['The podcast guest dumps a dozen talking points and treats the flood itself as proof.', "L invite du podcast deverse une douzaine de points de discussion et traite le flot lui-meme comme une preuve."],
  ['During the family argument, one cousin keeps switching to a new accusation before the old one is checked.', "Pendant la dispute familiale, un cousin passe sans cesse a une nouvelle accusation avant que l ancienne soit verifiee."],
  ['The customer service rant is so packed with complaints that no one can separate facts from noise.', "La plainte au service client est si remplie de reproches que personne ne peut separer les faits du bruit."],
  ['At the city forum, the speaker lists every worry imaginable and calls the pile a conclusion.', "Au forum de la ville, l orateur liste toutes les inquietudes imaginables et appelle cette pile une conclusion."],
  ['The streamer throws out rumor after rumor until the chat gives up on checking sources.', "Le streamer lance rumeur apres rumeur jusqu a ce que le chat abandonne l idee de verifier les sources."],
  ['In the job interview, the candidate answers one question with nine new complaints about everything else.', "Pendant l entretien, la candidate repond a une question avec neuf nouveaux reproches sur tout le reste."],
];

const OPTIONS_EN = ['Gish Gallop', 'Red Herring', 'Appeal to Authority', 'Straw Man'];
const OPTIONS_FR = ['Deluge argumentatif', 'Fausse piste', "Appel a l autorite", 'Homme de paille'];

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

export const GISH_GALLOP_EXPANSION_EN: Question[] = SCENARIOS.map(([english], index) => {
  const correctIndex = index % 4;
  return {
    id: 37301 + index,
    level: 4,
    persona_stage: PersonaStage.CRAB,
    concept: 'Gish Gallop',
    difficulty: index < 43 ? 1 : index < 50 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Which fallacy is illustrated here?\n\n"${english}"`,
    options: rotatedOptions(OPTIONS_EN, correctIndex),
    correct_option_index: correctIndex,
    explanation: 'The speaker overwhelms the listener with a rapid flood of claims, making it hard to answer any one claim properly.',
    detailedExplanationBeginner: 'A flood of quick claims hides the weak spots.',
    detailedExplanationIntermediate: 'The argument uses speed and volume instead of clarity, so the audience cannot check each point before the next one appears.',
    detailedExplanationExpert: 'This is the gish gallop: a debater piles up many loosely supported claims faster than an opponent can respond, creating the impression of strength without real evidence.',
    questionFormat: 'standard',
  };
});

export const GISH_GALLOP_EXPANSION_FR: Question[] = SCENARIOS.map(([, french], index) => {
  const correctIndex = index % 4;
  return {
    id: 37301 + index,
    level: 4,
    persona_stage: PersonaStage.CRAB,
    concept: 'Deluge argumentatif',
    difficulty: index < 43 ? 1 : index < 50 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Quel sophisme est illustre ici ?\n\n"${french}"`,
    options: rotatedOptions(OPTIONS_FR, correctIndex),
    correct_option_index: correctIndex,
    explanation: "L orateur submerge l interlocuteur avec un flot rapide d affirmations, ce qui rend chaque reponse difficile.",
    detailedExplanationBeginner: "Un flot de revendications rapides cache les points faibles.",
    detailedExplanationIntermediate: "L argument mise sur la vitesse et le volume plutot que sur la clarte, donc le public ne peut pas verifier chaque point avant que le suivant arrive.",
    detailedExplanationExpert: "C est le deluge argumentatif : le debatteur empile de nombreuses affirmations mal soutenues plus vite que l adversaire ne peut repondre, ce qui donne une impression de force sans vraies preuves.",
    questionFormat: 'standard',
  };
});
