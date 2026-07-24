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
  ['The mayor keeps naming road, rent, school, and parking issues so quickly that nobody can reply to the first one.', "Le maire cite les problemes de routes, de loyer, d ecole et de stationnement si vite que personne ne peut repondre au premier."],
  ['At the birthday dinner, one cousin fires off a dozen accusations about the family business before anyone can check one of them.', "Au diner d anniversaire, un cousin lance une douzaine d accusations sur l entreprise familiale avant que personne ne puisse en verifier une seule."],
  ['The sales rep rattles through discounts, warranties, and bonuses so fast that the buyer cannot ask for proof.', "Le commercial enchaine reductions, garanties et bonus si vite que l acheteur ne peut pas demander de preuve."],
  ['In the forum post, the writer stacks rumor after rumor until the readers stop distinguishing evidence from noise.', "Dans le message du forum, l auteur empile rumeur apres rumeur jusqu a ce que les lecteurs ne distinguent plus les preuves du bruit."],
  ['The coach gives ten reasons the referee is unfair and then acts like the match was already explained.', "L entraineur donne dix raisons pour lesquelles l arbitre est injuste puis agit comme si le match avait deja ete explique."],
  ['At the train station, the angry traveler lists every delay from the whole year so nobody can answer the current problem.', "A la gare, le voyageur en colere liste tous les retards de l annee pour que personne ne puisse repondre au probleme actuel."],
  ['The TV guest blurts out one statistic after another and never pauses long enough for the host to fact-check.', "L invite de la television debite une statistique apres l autre et ne marque jamais de pause assez longue pour que l animateur verifie."],
  ['In the school debate, a student drops so many mini-arguments that the teacher cannot tell which one is supposed to matter.', "Dans le debat scolaire, un eleve lache tellement de mini-arguments que le professeur ne sait plus lequel est cense compter."],
  ['The angry customer starts with one complaint and then keeps adding extras until the refund question is lost.', "Le client en colere commence par une plainte puis ajoute sans cesse d autres points jusqu a ce que la question du remboursement se perde."],
  ['The group text fills with screenshots, clips, and half facts so fast that nobody can answer the first accusation.', "Le groupe se remplit de captures, de clips et de demi-faits si vite que personne ne peut repondre a la premiere accusation."],
  ['At the parent meeting, someone throws out ten worries in a row and calls the pile a strong case.', "A la reunion des parents, quelqu un lance dix inquietudes d affilee et appelle cette pile un argument solide."],
  ['The podcast host keeps switching to a fresh complaint before the guest finishes the previous answer.', "L animateur du podcast passe sans cesse a une nouvelle plainte avant que l invite termine la reponse precedente."],
  ['During the office review, the employee overwhelms everyone with charts, anecdotes, and side issues instead of one clear point.', "Pendant l evaluation au bureau, l employe submerge tout le monde avec des graphiques, des anecdotes et des sujets secondaires au lieu d un point clair."],
  ['The town activist speaks so fast that each new claim buries the last one under more claims.', "L activiste du quartier parle si vite que chaque nouvelle affirmation enterre la precedente sous d autres affirmations."],
  ['At the dinner table, one uncle throws in politics, taxes, weather, and a rumor before anyone can respond.', "A table, un oncle melange politique, impots, meteo et rumeur avant que quelqu un puisse reagir."],
  ['The livestream rant jumps from one grievance to another until the audience gives up on checking sources.', "Le coup de gueule en direct saute d un grief a l autre jusqu a ce que le public abandonne la verification des sources."],
  ['The editor is hit with a flood of tiny objections and is never given the chance to answer one of them properly.', "Le redacteur est frappe par un flot de petites objections et n obtient jamais l occasion d en traiter une correctement."],
  ['The student council speaker keeps stacking fresh claims about the uniform policy until the room stops tracking them.', "L orateur du conseil des eleves empile sans cesse de nouvelles affirmations sur l uniforme jusqu a ce que la salle cesse de les suivre."],
  ['The neighbor starts with one complaint about the fence and then adds three unrelated stories to confuse the issue.', "Le voisin commence par une plainte sur la clôture puis ajoute trois histoires sans rapport pour brouiller la question."],
  ['The caller to the radio show keeps adding one accusation after another so the host cannot settle the first one.', "L appelant de l emission radio ajoute accusation apres accusation pour que l animateur ne puisse jamais regler la premiere."],
  ['In the classroom, the student answers a simple question with a long blast of unrelated examples.', "En classe, l eleve repond a une question simple par une longue rafale d exemples sans rapport."],
  ['The fundraiser organizer lists every possible benefit and every tiny complaint so no one can weigh the main point.', "L organisateur de la collecte liste tous les benefices possibles et toutes les petites plaintes pour que personne ne pese le point principal."],
  ['The shopping blog throws in reviews, rumors, and side comments until the actual product question disappears.', "Le blog de shopping ajoute critiques, rumeurs et remarques laterales jusqu a ce que la vraie question sur le produit disparaisse."],
  ['The manager answers a schedule concern by rattling off every project in the building.', "Le responsable repond a une question d horaire en debitant tous les projets du batiment."],
  ['At the club meeting, one speaker makes ten quick claims about the budget and then sits down before replies begin.', "A la reunion du club, un orateur fait dix affirmations rapides sur le budget puis s assoit avant le debut des reponses."],
  ['The opponent keeps launching new objections so the original claim is never tested on its own.', "L adversaire lance sans cesse de nouvelles objections pour que l affirmation originale ne soit jamais testee seule."],
  ['The social media thread turns into a pileup of claims, replies, and side stories so nothing stays on track.', "Le fil sur les reseaux devient un tas d affirmations, de reponses et d histoires secondaires, donc rien ne reste sur les rails."],
  ['At the school assembly, the speaker keeps piling on examples until the audience forgets which one started the argument.', "A l assemblee scolaire, l orateur empile des exemples jusqu a ce que le public oublie lequel a lance le debat."],
  ['The customer support manager is bombarded with so many quick complaints that the original ticket vanishes.', "Le responsable du support client est bombarde de tellement de plaintes rapides que le ticket d origine disparait."],
  ['The debate contestant fills every pause with another claim so the judge cannot probe any one claim deeply.', "Le candidat au debat remplit chaque pause avec une nouvelle affirmation pour que le juge ne puisse approfondir aucune d entre elles."],
  ['The town newsletter columns one concern after another so the readers get the impression of a massive case.', "La colonne du bulletin municipal aligne une inquietude apres l autre, donnant aux lecteurs l impression d un dossier massif."],
  ['The coach keeps asking new questions faster than the athlete can answer the last one.', "L entraineur pose de nouvelles questions plus vite que l athlete ne peut repondre a la precedente."],
  ['The reviewer dumps a pile of complaints and then declares the movie a disaster without sorting them.', "Le critique deverse une pile de plaintes puis declare le film catastrophique sans les trier."],
  ['At the debate club, the student attacks with a barrage of weak points instead of one solid argument.', "Au club de debat, l eleve attaque avec un barrage de points faibles au lieu d un seul argument solide."],
  ['The family argument is flooded with stories about cousins, neighbors, and old jobs so the real issue is lost.', "La dispute familiale est inondee d histoires sur les cousins, les voisins et les anciens emplois, donc le vrai probleme se perd."],
  ['The office presenter lists too many small complaints to let anyone inspect the main complaint.', "Le presentateur du bureau enumere trop de petites plaintes pour laisser qui que ce soit examiner la plainte principale."],
  ['The angry driver keeps adding new examples of bad parking until the conversation becomes unmanageable.', "Le conducteur en colere ajoute sans cesse de nouveaux exemples de mauvais stationnement jusqu a rendre la conversation ingérable."],
  ['The late-night caller changes topic three times in one breath, leaving the host with no single point to answer.', "L appelant tardif change de sujet trois fois d une seule traite, laissant l animateur sans point unique a traiter."],
  ['The presentation ends with a mountain of claims, but not one has been pinned down long enough to judge it.', "La presentation se termine avec une montagne d affirmations, mais aucune n a ete maintenue assez longtemps pour etre jugee."],
  ['The chat message is a wall of accusations, links, and new side questions that the recipient cannot untangle.', "Le message de discussion est un mur d accusations, de liens et de nouvelles questions secondaires que le destinataire ne peut pas demeler."],
  ['The speaker at the community hall keeps adding new worries whenever someone starts to answer an old one.', "L orateur de la salle communautaire ajoute de nouvelles inquietudes chaque fois que quelqu un commence a repondre a une ancienne."],
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
