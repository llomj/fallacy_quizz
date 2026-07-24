import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["After planning the whole picnic, Zoe assumes everyone will want her exact snack list.", "Après avoir tout planifié pour le pique-nique, Zoe suppose que tout le monde voudra exactement sa liste de collations."],
  ["Ben thinks the group chat is dead because no one replied to his meme.", "Ben pense que le groupe de discussion est mort parce que personne n'a répondu à son mème."],
  ["Maya assumes the meeting was pointless because her idea was not chosen first.", "Maya pense que la réunion était inutile parce que son idée n'a pas été choisie en premier."],
  ["Theo believes the whole office is focused on his haircut because two people glanced at him.", "Theo croit que tout le bureau se concentre sur sa coupe de cheveux parce que deux personnes l'ont regardé."],
  ["Lina thinks the weather app must be broken because it did not match her lunch plans.", "Lina pense que l'application météo doit être cassée parce qu'elle ne correspondait pas à ses plans du déjeuner."],
  ["Omar says the class project is unfair because the topic did not show off his strengths.", "Omar dit que le projet de classe est injuste parce que le sujet ne mettait pas en valeur ses points forts."],
  ["Priya assumes the birthday party failed because she did not get the seat she wanted.", "Priya suppose que l'anniversaire a raté parce qu'elle n'a pas eu la place qu'elle voulait."],
  ["Nina believes the team ignored the important issue because they did not mention her point.", "Nina croit que l'équipe a ignoré le vrai problème parce qu'elle n'a pas mentionné son point de vue."],
  ["Eli says the movie was badly marketed because the trailer did not include his favorite scene.", "Eli dit que le film a été mal promu parce que la bande-annonce ne contenait pas sa scène préférée."],
  ["Rosa thinks the charity event was a flop because nobody asked her to lead it.", "Rosa pense que l'événement caritatif a été un échec parce que personne ne lui a demandé de le diriger."],
  ["Jules assumes the restaurant ignored customer service because the waiter was busy with another table.", "Jules suppose que le restaurant ignorait le service client parce que le serveur était occupé avec une autre table."],
  ["Ava thinks the school announcement was confusing because she already knew the topic well.", "Ava pense que l'annonce de l'école était confuse parce qu'elle connaissait déjà bien le sujet."],
  ["Noah says the project deadline is unreasonable because it conflicts with his own routine.", "Noah dit que la date limite du projet est déraisonnable parce qu'elle entre en conflit avec sa propre routine."],
  ["Kim believes the neighborhood meeting should have centered on her block since she lives there.", "Kim pense que la réunion de quartier aurait dû tourner autour de sa rue puisqu'elle y habite."],
  ["Salma thinks the survey was biased because it did not ask about her exact hobby.", "Salma pense que l'enquête était biaisée parce qu'elle ne posait pas de question sur son loisir précis."],
  ["Hugo says the concert lineup was wrong because the headliner was not his favorite band.", "Hugo dit que la programmation du concert était mauvaise parce que le groupe principal n'était pas son préféré."],
  ["Lea assumes the board did not listen because they moved to the next item after her comment.", "Lea suppose que le conseil n'a pas écouté parce qu'ils sont passés au point suivant après son intervention."],
  ["Max thinks the new policy failed because his department had to adjust first.", "Max pense que la nouvelle politique a échoué parce que son service a dû s'adapter en premier."],
  ["Tia believes the class ignored fairness because the teacher did not repeat her suggestion.", "Tia croit que la classe a ignoré l'équité parce que le professeur n'a pas répété sa proposition."],
  ["Paul says the website redesign is terrible because it does not match his screen setup.", "Paul dit que la refonte du site est horrible parce qu'elle ne correspond pas à sa configuration d'écran."],
  ["Yara thinks the event coordinator was rude because she was not greeted by name.", "Yara pense que le coordinateur de l'événement a été impoli parce qu'elle n'a pas été saluée par son nom."],
  ["Dan assumes the town council forgot the real issue because no one asked him for details.", "Dan suppose que le conseil municipal a oublié le vrai problème parce que personne ne lui a demandé de détails."],
  ["Mina believes the café is unfriendly because the staff did not notice her immediately.", "Mina croit que le café est peu accueillant parce que le personnel ne l'a pas remarquée tout de suite."],
  ["Eric says the workshop was disorganized because it did not follow his preferred order.", "Eric dit que l'atelier était mal organisé parce qu'il ne suivait pas l'ordre qu'il préférait."],
  ["Grace thinks the assignment was too hard because it did not fit her study style.", "Grace pense que le devoir était trop difficile parce qu'il ne convenait pas à sa façon d'étudier."],
  ["Owen assumes the club ignored inclusivity because his favorite example was left out.", "Owen suppose que le club a ignoré l'inclusion parce que son exemple préféré a été laissé de côté."],
  ["Mila says the update was pointless because it changed the buttons she used most.", "Mila dit que la mise à jour était inutile parce qu'elle a changé les boutons qu'elle utilisait le plus."],
  ["Jin believes the charity pitch was incomplete because it did not mention his neighborhood.", "Jin croit que la présentation caritative était incomplète parce qu'elle n'a pas mentionné son quartier."],
  ["Ravi says the training session failed because the instructor did not answer his question first.", "Ravi dit que la session de formation a échoué parce que l'instructeur n'a pas répondu d'abord à sa question."],
  ["Sofia thinks the festival was poorly planned because the schedule did not favor her arrival time.", "Sofia pense que le festival était mal planifié parce que l'horaire ne favorisait pas son heure d'arrivée."],
  ["Ben assumes the entire discussion was about him because his example got challenged.", "Ben suppose que toute la discussion portait sur lui parce que son exemple a été remis en question."],
  ["Nora believes the neighborhood app is flawed because it does not track her exact route.", "Nora croit que l'application de quartier est défectueuse parce qu'elle ne suit pas son trajet exact."],
  ["Alex says the debate was unfair because no one praised his point out loud.", "Alex dit que le débat était injuste parce que personne n'a loué son point de vue à voix haute."],
  ["Maya thinks the class rule is absurd because it limits her favorite seat.", "Maya pense que la règle de la classe est absurde parce qu'elle limite sa place favorite."],
  ["Theo assumes the staff ignored the issue because they did not use his wording.", "Theo suppose que le personnel a ignoré le problème parce qu'il n'a pas utilisé ses mots."],
  ["Lina believes the club meeting was successful only if her idea appeared in the notes.", "Lina croit que la réunion du club n'a été réussie que si son idée figurait dans le compte rendu."],
  ["Omar says the city plan missed the point because it did not center his commute.", "Omar dit que le plan de la ville est passé à côté du sujet parce qu'il ne se concentrait pas sur son trajet."],
  ["Priya thinks the presentation lacked depth because it did not answer her private concern.", "Priya pense que la présentation manquait de profondeur parce qu'elle n'a pas répondu à sa préoccupation personnelle."],
  ["Nina assumes the event was aimed at her because the host looked in her direction once.", "Nina suppose que l'événement lui était destiné parce que l'hôte a regardé dans sa direction une fois."],
  ["Eli says the new rule is bad because it inconveniences him more than others.", "Eli dit que la nouvelle règle est mauvaise parce qu'elle le gêne plus que les autres."],
  ["Rosa believes the team did not value the project because they edited her paragraph.", "Rosa croit que l'équipe n'a pas valorisé le projet parce qu'elle a modifié son paragraphe."],
  ["Jules thinks the office memo was disrespectful because it was not written around his schedule.", "Jules pense que la note de service était irrespectueuse parce qu'elle n'était pas rédigée autour de son horaire."],
  ["Ava assumes the class discussion was narrow because it failed to quote her favorite source.", "Ava suppose que la discussion de classe était étroite parce qu'elle n'a pas cité sa source préférée."],
  ["Noah believes the workshop was mismanaged because the facilitator did not call on him first.", "Noah croit que l'atelier a été mal géré parce que l'animateur ne l'a pas interrogé en premier."],
  ["Kim thinks the campus notice was confusing because it did not address her exact question.", "Kim pense que l'avis du campus était confus parce qu'il ne répondait pas à sa question précise."],
  ["Salma says the club election was unfair because her friends were not all invited.", "Salma dit que l'élection du club était injuste parce que tous ses amis n'étaient pas invités."],
  ["Hugo assumes the conversation was about him because people laughed after he spoke.", "Hugo suppose que la conversation portait sur lui parce que les gens ont ri après qu'il a parlé."],
  ["Lea believes the policy was written badly because it did not mention her use case.", "Lea croit que la politique a été mal rédigée parce qu'elle ne mentionnait pas son cas d'usage."],
  ["Max says the test was unfair because it did not reward his strongest skill.", "Max dit que le test était injuste parce qu'il ne récompensait pas sa compétence la plus forte."],
  ["Tia thinks the meeting ignored the truth because the final slide did not include her note.", "Tia pense que la réunion a ignoré la vérité parce que la diapositive finale n'incluait pas sa note."],
  ["Paul assumes the whole office is frustrated with him because one email felt short.", "Paul suppose que tout le bureau est frustré contre lui parce qu'un courriel lui a paru bref."],
  ["Yara believes the project failed because her suggestion was not highlighted in bold.", "Yara croit que le projet a échoué parce que sa suggestion n'a pas été mise en gras."],
  ["Mia thinks the entire schedule should be built around her lunch break.", "Mia pense que tout l'emploi du temps devrait être construit autour de sa pause déjeuner."],
  ["Ben assumes the office meeting was about him because the topic affected his department.", "Ben suppose que la réunion du bureau parlait de lui parce que le sujet touchait son service."],
  ["Ava believes the team vote was unfair because nobody quoted her exact words.", "Ava croit que le vote de l'équipe était injuste parce que personne n'a cité ses mots exacts."],
  ["Theo thinks the class discussion was narrow because it did not focus on his favorite example.", "Theo pense que la discussion de classe était étroite parce qu'elle ne se concentrait pas sur son exemple préféré."],
  ["Nina assumes the neighborhood app is broken because it does not track her shortcut.", "Nina suppose que l'application de quartier est cassée parce qu'elle ne suit pas son raccourci."],
  ["Omar thinks the event planner was rude because she moved to the next speaker before he finished.", "Omar pense que l'organisatrice de l'événement était impolie parce qu'elle est passée à l'intervenant suivant avant qu'il ne finisse."],
  ["Priya believes the policy was written badly because it does not mention her exact situation.", "Priya croit que la politique a été mal rédigée parce qu'elle ne mentionne pas sa situation exacte."],
  ["Jules thinks the restaurant ignored customer service because the waiter was busy with another table.", "Jules pense que le restaurant a ignoré le service client parce que le serveur était occupé avec une autre table."],
  ["Rosa says the whole conversation was disrespectful because her point was challenged.", "Rosa dit que toute la conversation était irrespectueuse parce que son point a été contesté."],
  ["Eli thinks the office memo was confusing because it was not written around his schedule.", "Eli pense que la note de service était confuse parce qu'elle n'était pas rédigée autour de son horaire."],
  ["Maya thinks the meeting failed because nobody mentioned her idea first.", "Maya pense que la réunion a échoué parce que personne n'a mentionné son idée en premier."],
  ["Theo believes the whole office cared about his haircut because two people glanced at him.", "Theo croit que tout le bureau se souciait de sa coupe de cheveux parce que deux personnes l'ont regardé."],
  ["Nina assumes the event was about her because the host looked her way once.", "Nina suppose que l'événement parlait d'elle parce que l'hôte a regardé dans sa direction une fois."],
  ["Ben says the class discussion was narrow because it did not quote his favorite source.", "Ben dit que la discussion de classe était étroite parce qu'elle n'a pas cité sa source préférée."],
  ["Omar thinks the city plan was bad because it did not focus on his commute.", "Omar pense que le plan de la ville était mauvais parce qu'il ne se concentrait pas sur son trajet."],
  ["Priya believes the project ignored the truth because her paragraph was edited.", "Priya croit que le projet ignorait la vérité parce que son paragraphe a été modifié."],
  ["Leo says the office memo was rude because it was not written around his schedule.", "Leo dit que la note de service était impolie parce qu'elle n'était pas rédigée autour de son horaire."],
  ["Rina thinks the test was unfair because it did not reward her best skill.", "Rina pense que le test était injuste parce qu'il ne récompensait pas sa meilleure compétence."],
  ["Jules assumes the whole conversation was about him because people laughed after he spoke.", "Jules suppose que toute la conversation parlait de lui parce que les gens ont ri après qu'il a parlé."],
  ["Ava believes the policy was written badly because it did not mention her exact situation.", "Ava croit que la politique a été mal rédigée parce qu'elle ne mentionnait pas sa situation exacte."],
  ["Mia thinks the meeting was pointless because her suggestion was not used.", "Mia pense que la reunion etait inutile parce que sa suggestion n a pas ete utilisee."],
  ["Noah assumes the city plan is bad because it does not center his commute.", "Noah suppose que le plan de la ville est mauvais parce qu il ne se concentre pas sur son trajet."],
  ["Priya believes the team ignored fairness because they did not repeat her idea.", "Priya croit que l equipe a ignore l equite parce qu elle n a pas repete son idee."],
  ["Ben says the website is broken because it does not match his screen layout.", "Ben dit que le site est casse parce qu il ne correspond pas a sa disposition d ecran."],
  ["Ava thinks the class rule is absurd because it limits her favorite seat.", "Ava pense que la regle de la classe est absurde parce qu elle limite sa place preferee."],
  ["Theo assumes the discussion was about him because one person glanced at him.", "Theo suppose que la discussion parlait de lui parce qu une personne l a regarde."],
  ["Lina believes the club meeting was successful only if her idea appeared in the notes.", "Lina croit que la reunion du club n etait reussie que si son idee figurait dans les notes."],
  ["Omar says the survey was biased because it did not ask about his exact hobby.", "Omar dit que l enquete etait biaisee parce qu elle ne posait pas de question sur son loisir exact."],
  ["Rina thinks the event coordinator was rude because she was not greeted by name.", "Rina pense que le coordinateur de l evenement a ete impoli parce qu elle n a pas ete saluee par son nom."],
  ["Jules assumes the entire discussion was wrong because his point was challenged.", "Jules suppose que toute la discussion etait fausse parce que son point a ete conteste."],
  ["Mila believes the update was pointless because it changed the buttons she uses most.", "Mila croit que la mise a jour etait inutile parce qu elle a change les boutons qu elle utilise le plus."],
  ["Eli says the workshop was disorganized because it did not follow his preferred order.", "Eli dit que l atelier etait desorganise parce qu il ne suivait pas l ordre qu il prefere."],
  ["Nina thinks the charity pitch was incomplete because it did not mention her neighborhood.", "Nina pense que la presentation caritative etait incomplete parce qu elle n a pas mentionne son quartier."],
  ["Paul says the training failed because the instructor did not answer him first.", "Paul dit que la formation a echoue parce que l instructeur ne lui a pas repondu en premier."],
  ["Tara assumes the festival was unfair because the schedule did not favor her arrival time.", "Tara suppose que le festival etait injuste parce que l horaire ne favorisait pas son heure d arrivee."],
  ["Hugo thinks the office memo was disrespectful because it was not built around his schedule.", "Hugo pense que la note de service etait irrespectueuse parce qu elle n etait pas organisee autour de son horaire."],
  ["Lea believes the new policy is bad because it inconveniences her more than others.", "Lea croit que la nouvelle politique est mauvaise parce qu elle la derange plus que les autres."],
  ["Max says the debate was unfair because nobody quoted his exact words.", "Max dit que le debat etait injuste parce que personne n a cite ses mots exacts."],
  ["Kim thinks the class discussion was narrow because it skipped her favorite example.", "Kim pense que la discussion de classe etait etroite parce qu elle a saute son exemple prefere."],
  ["Grace assumes the team ignored the issue because they moved on after her comment.", "Grace suppose que l equipe a ignore le probleme parce qu elle est passee a autre chose apres son commentaire."],
  ["Yara believes the project failed because her paragraph was edited.", "Yara croit que le projet a echoue parce que son paragraphe a ete modifie."],
  ["Dan says the plan was wrong because it did not focus on his commute.", "Dan dit que le plan etait faux parce qu il ne se concentrait pas sur son trajet."],
  ["Mina thinks the neighborhood app is broken because it does not track her shortcut.", "Mina pense que l application de quartier est cassee parce qu elle ne suit pas son raccourci."],
  ["Sofia assumes the meeting was about her because the host looked her way once.", "Sofia suppose que la reunion parlait d elle parce que l hote a regarde dans sa direction une fois."],
  ["Owen believes the class ignored truth because his note was not highlighted.", "Owen croit que la classe a ignore la verite parce que sa note n a pas ete surlignee."],
  ["Alex says the event was aimed at him because the speaker used his name in an example.", "Alex dit que l evenement etait dirige vers lui parce que l intervenant a utilise son nom dans un exemple."],
  ["Rosa thinks the whole conversation was rude because her idea was challenged.", "Rosa pense que toute la conversation etait impolie parce que son idee a ete contestee."],
  ["Ben assumes the team vote was unfair because his preferred option lost.", "Ben suppose que le vote de l equipe etait injuste parce que son option preferee a perdu."],
];

const OPTIONS_EN = ['Egocentric Bias', 'Spotlight Fallacy', 'Self-Serving Bias', 'False Consensus Effect'];
const OPTIONS_FR = ['Biais égocentrique', 'Sophisme du projecteur', 'Biais auto-complaisant', 'Effet de faux consensus'];

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

export const EGOCENTRIC_BIAS_EXPANSION_EN: Question[] = SCENARIOS.map(([english], index) => {
  const correctIndex = index % 4;
  return {
    id: 36901 + index,
    level: 4,
    persona_stage: PersonaStage.PLANKTON,
    concept: 'Egocentric Bias',
    difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Which fallacy or bias is shown here?\n\n"${english}"`,
    options: rotatedOptions(OPTIONS_EN, correctIndex),
    correct_option_index: correctIndex,
    explanation: 'The person assumes their own perspective, preferences, or experience should dominate how the situation is judged.',
    detailedExplanationBeginner: 'Personal perspective is treated as if it were the whole story.',
    detailedExplanationIntermediate: 'The speaker centers their own needs or feelings and assumes they should set the standard for everyone else.',
    detailedExplanationExpert: 'This is egocentric bias: a person overweights their own viewpoint and treats it as more relevant or universal than it really is. The error is perspective-centered, not evidence-centered.',
    questionFormat: 'standard'
  };
});

export const EGOCENTRIC_BIAS_EXPANSION_FR: Question[] = SCENARIOS.map(([, french], index) => {
  const correctIndex = index % 4;
  return {
    id: 36901 + index,
    level: 4,
    persona_stage: PersonaStage.PLANKTON,
    concept: 'Biais égocentrique',
    difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Quel sophisme ou biais est montré ici ?\n\n"${french}"`,
    options: rotatedOptions(OPTIONS_FR, correctIndex),
    correct_option_index: correctIndex,
    explanation: 'La personne suppose que son propre point de vue, ses préférences ou son vécu doivent dominer l évaluation de la situation.',
    detailedExplanationBeginner: "Le point de vue personnel est traité comme s'il résumait toute la réalité.",
    detailedExplanationIntermediate: "L'orateur centre ses propres besoins ou sentiments et suppose qu'ils devraient servir de norme pour tout le monde.",
    detailedExplanationExpert: "C'est un biais égocentrique : la personne accorde trop d'importance à son propre point de vue et le traite comme plus pertinent ou plus universel qu'il ne l'est vraiment. L'erreur est centrée sur la perspective, pas sur les preuves.",
    questionFormat: 'standard'
  };
});
