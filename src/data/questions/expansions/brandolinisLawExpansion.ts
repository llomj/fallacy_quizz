import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["It takes Maya ten minutes to make a rumor sound silly, but only ten seconds to repeat it.", "Maya met dix minutes pour rendre une rumeur ridicule, mais seulement dix secondes pour la repeter."],
  ["Jules says arguing with a fake statistic is exhausting because the fake number is easier to invent than to debunk.", "Jules dit qu'argumenter avec une fausse statistique est epuisant parce que le faux chiffre est plus facile a inventer qu'a demontre."],
  ["Rina spends an hour correcting a post that took two seconds to write.", "Rina passe une heure a corriger un message qui a pris deux secondes a ecrire."],
  ["A teacher says one bad meme spreads faster than a whole lesson explaining why it is wrong.", "Un professeur dit qu'un mauvais mème se propage plus vite qu'un cours entier expliquant pourquoi il est faux."],
  ["Theo can debunk a wild claim, but it takes much longer than the person needed to post it.", "Theo peut demystifier une affirmation extravagante, mais cela prend bien plus de temps que pour la publier."],
  ["A neighbor spends all afternoon unpacking a fake health tip that was shared in a blink.", "Un voisin passe tout l'apres-midi a demonter un faux conseil sante qui a ete partage en un clin d'oeil."],
  ["Priya says the correction is always longer than the nonsense it answers.", "Priya dit que la correction est toujours plus longue que le n'importe quoi auquel elle repond."],
  ["Ben notes that one sloppy accusation can take a full morning to untangle.", "Ben remarque qu'une seule accusation brouillonne peut prendre toute une matinee a demeler."],
  ["Mina says a false claim feels cheap because it costs almost nothing to throw out.", "Mina dit qu'une fausse affirmation semble bon marche parce qu'elle coute presque rien a lancer."],
  ["Omar laughs that it is easier to invent a conspiracy than to explain why it fails.", "Omar rit en disant qu'il est plus facile d'inventer un complot que d'expliquer pourquoi il echoue."],
  ["A classmate says one bad answer can eat up twenty minutes of discussion.", "Un camarade dit qu'une seule mauvaise reponse peut avaler vingt minutes de discussion."],
  ["Zoe spends ten times longer answering a post than the poster spent writing it.", "Zoe passe dix fois plus de temps a repondre a un message que l'auteur n'en a passe a l'ecrire."],
  ["Kai says the internet rewards quick nonsense and penalizes careful rebuttals.", "Kai dit qu'Internet recompense les absurdites rapides et penalise les reponses soigneuses."],
  ["A store manager says one false complaint can trigger a long chain of explanation.", "Un gerant de magasin dit qu'une fausse plainte peut declencher une longue chaine d'explications."],
  ["Lina says correcting a myth is harder than repeating the myth in the first place.", "Lina dit que corriger un mythe est plus difficile que de repeter le mythe au depart."],
  ["Eli says one dramatic lie can force half a day of fact-checking.", "Eli dit qu'un seul mensonge spectaculaire peut obliger a une demi-journee de verification."],
  ["A coach says bad advice spreads like confetti, but the cleanup takes much longer.", "Un entraineur dit que les mauvais conseils se repandent comme des confettis, mais que le nettoyage prend bien plus de temps."],
  ["Nina says a lie is cheap to tell and expensive to unwind.", "Nina dit qu'un mensonge est bon marche a raconter et couteux a demeler."],
  ["A council member says one wrong chart can take a whole meeting to correct.", "Un conseiller municipal dit qu'un seul mauvais graphique peut prendre toute une reunion a corriger."],
  ["Milo says a bogus claim can sprint while the truth walks.", "Milo dit qu'une affirmation bidon peut sprinter pendant que la verite marche."],
  ["A friend says refuting nonsense is like carrying water in a leaky bucket.", "Un ami dit que refuter des absurdites, c'est comme transporter de l'eau dans un seau perce."],
  ["Talia says a post filled with errors is fast to make and slow to fix.", "Talia dit qu'un message plein d'erreurs est rapide a produire et lent a corriger."],
  ["Noah says the loudest lie in the room usually costs the least effort.", "Noah dit que le mensonge le plus bruyant dans la salle coute souvent le moins d'effort."],
  ["A librarian says the false claim gets repeated in a sentence, but the correction needs a page.", "Une bibliothecaire dit que la fausse affirmation se repete en une phrase, mais que la correction prend une page."],
  ["Maya says arguments against nonsense need evidence, patience, and time.", "Maya dit que les arguments contre les absurdites demandent des preuves, de la patience et du temps."],
  ["Theo says the rumor is easy to throw into the group chat and hard to pull back out.", "Theo dit que la rumeur est facile a lancer dans le groupe et difficile a en retirer."],
  ["A student says one made-up fact can force a stack of sources onto the desk.", "Un eleve dit qu'un seul faux fait peut obliger a empiler les sources sur le bureau."],
  ["Jade says the false story takes seconds, but the correction takes a lesson.", "Jade dit que la fausse histoire prend quelques secondes, mais que la correction prend une leçon."],
  ["Ben says the more outrageous the claim, the more time it steals from everyone else.", "Ben dit que plus l'affirmation est extravagante, plus elle vole de temps a tout le monde."],
  ["A neighbor says one nonsense claim can cancel a whole evening of plans.", "Un voisin dit qu'une seule affirmation absurde peut annuler toute une soiree de projets."],
  ["Rina says fake outrage is cheap because it does not need to be accurate.", "Rina dit que la fausse indignation est bon marche parce qu'elle n'a pas besoin d'etre exacte."],
  ["Ethan says the correction has to be precise, but the lie gets away with being vague.", "Ethan dit que la correction doit etre precise, alors que le mensonge peut se contenter d'etre vague."],
  ["Priya says it is much easier to sound confident than to prove a point.", "Priya dit qu'il est bien plus facile d'avoir l'air sur de soi que de prouver un point."],
  ["Owen says one false claim can waste the energy of ten careful replies.", "Owen dit qu'une seule fausse affirmation peut gaspiller l'energie de dix reponses soigneuses."],
  ["Mina says the lie is small, but the cleanup is huge.", "Mina dit que le mensonge est petit, mais que le nettoyage est enorme."],
  ["Kai says bad info wins the speed race and loses the truth race.", "Kai dit que la mauvaise information gagne la course de vitesse et perd la course de verite."],
  ["A teacher says correcting a wrong answer can turn into teaching the whole topic again.", "Un professeur dit que corriger une mauvaise reponse peut se transformer en nouvel enseignement de tout le chapitre."],
  ["Zoe says the person making the claim leaves after thirty seconds, but the listeners stay with the mess.", "Zoe dit que la personne qui lance l'affirmation repart apres trente secondes, mais que les auditeurs restent avec le bazar."],
  ["Lina says a nonsense thread can be started at lunch and still be draining after dinner.", "Lina dit qu'un fil de commentaires absurde peut commencer a midi et rester epuisant au diner."],
  ["Eli says the correction has to meet the claim wherever it went, which takes time.", "Eli dit que la correction doit suivre l'affirmation partout ou elle est allee, ce qui prend du temps."],
  ["Milo says the truth often needs context, while the lie only needs a headline.", "Milo dit que la verite a souvent besoin de contexte, alors que le mensonge n'a besoin que d'un titre."],
  ["Nia says the rebuttal is the hard part because the original claim had no homework.", "Nia dit que la refutation est la partie difficile parce que l'affirmation initiale n'avait fait aucun devoir."],
  ["A manager says one sloppy accusation can trigger half a department's worth of work.", "Un manager dit qu'une accusation mal faite peut declencher le travail de toute une demi-equipe."],
  ["Theo says nonsense is like graffiti: quick to make, slow to remove.", "Theo dit que les absurdites ressemblent a des graffitis: rapides a faire, longs a enlever."],
  ["Jade says the correction needs facts, but the claim only needed an attitude.", "Jade dit que la correction a besoin de faits, alors que l'affirmation n'avait besoin que d'une attitude."],
  ["Noah says one fake post can make three experts busy all afternoon.", "Noah dit qu'un seul faux message peut occuper trois experts tout l'apres-midi."],
  ["Priya says explaining why a claim is wrong often takes longer than teaching the real lesson.", "Priya dit qu'expliquer pourquoi une affirmation est fausse prend souvent plus de temps que d'enseigner la vraie lecon."],
  ["Omar says the lie is lightweight, but the repair job is heavy.", "Omar dit que le mensonge est leger, mais que la reparation est lourde."],
  ["Maya says the bad idea can be posted by anyone, but only specialists can undo it well.", "Maya dit que la mauvaise idee peut etre publiee par n'importe qui, mais que seuls des specialistes peuvent bien la demeler."],
  ["Ben says one bad take can multiply meetings.", "Ben dit qu'un seul mauvais avis peut multiplier les reunions."],
  ["Ava says one sloppy rumor can take over the whole group chat by lunch.", "Ava dit qu'une rumeur mal ficelée peut envahir tout le groupe de discussion avant le dejeuner."],
  ["Theo says a single wrong chart can waste an entire afternoon of debate.", "Theo dit qu'un seul graphique faux peut faire perdre toute une apres-midi de debat."],
  ["Nina says correcting one fake tip takes ten real explanations.", "Nina dit que corriger un seul faux conseil demande dix vraies explications."],
  ["Omar says a bad meme spreads in seconds while the correction arrives after dinner.", "Omar dit qu'un mauvais mème se repand en quelques secondes tandis que la correction arrive apres le diner."],
  ["Maya says one misleading headline can hijack the whole office conversation.", "Maya dit qu'un seul titre trompeur peut detourner toute la conversation du bureau."],
  ["Leo says it is easy to post nonsense but hard to untangle it later.", "Leo dit qu'il est facile de publier des absurdites mais difficile de les demeler ensuite."],
  ["Priya says the false claim gets applause, but the fact check has to climb uphill.", "Priya dit que la fausse affirmation obtient des applaudissements, mais que la verification des faits doit gravir la pente."],
  ["Jade says one exaggerated claim can create three meetings, two follow-ups, and a headache.", "Jade dit qu'une seule affirmation exageree peut creer trois reunions, deux relances et un mal de tete."],
  ["Rina says every correction feels like unpacking a suitcase someone else packed badly.", "Rina dit que chaque correction ressemble a vider une valise mal faite par quelqu'un d'autre."],
  ["Ben says a sloppy claim can travel faster than the person who made it can explain it.", "Ben dit qu'une affirmation brouillonne peut voyager plus vite que son auteur ne peut l'expliquer."]
];

const EN = ["Brandolini's Law", 'Appeal to Authority', 'Red Herring', 'False Dilemma'];
const FR = ['Loi de Brandolini', "Appel à l'autorité", 'Fausse piste', 'Fausse dichotomie'];

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
      id: 32551 + i,
      level: 4,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Loi de Brandolini' : "Brandolini's Law",
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel principe est illustre ici ?' : 'Which principle is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? FR : EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Une affirmation erronée demande souvent bien plus d'efforts a corriger qu'il n'en faut pour la produire."
        : 'A false claim usually takes much more effort to correct than to create.',
      detailedExplanationBeginner: fr
        ? "Les mensonges sont rapides, la correction est lente."
        : 'False claims are quick; corrections are slow.',
      detailedExplanationIntermediate: fr
        ? "Quand une erreur circule vite, les preuves et les explications necessaires pour la demontre prennent davantage de temps."
        : 'When an error spreads quickly, the evidence and explanation needed to knock it down take much longer.',
      detailedExplanationExpert: fr
        ? "La loi de Brandolini met en avant une asymetrie cognitive et rhetorique: produire du faux est peu couteux, mais le retablir exige contexte, preuves, precision et parfois repetition."
        : 'Brandolini’s Law highlights a cognitive and rhetorical asymmetry: producing falsehood is cheap, but restoring the truth requires context, evidence, precision, and often repetition.',
      questionFormat: 'standard',
    };
  });
}

export const BRANDOLINIS_LAW_EXPANSION_EN: Question[] = make();
export const BRANDOLINIS_LAW_EXPANSION_FR: Question[] = make(true);
