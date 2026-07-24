import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says "some people" in the office are clearly lazy, while staring at one coworker.', "Maya dit que « certaines personnes » au bureau sont clairement paresseuses, tout en fixant un collegue."],
  ['Leo hints that someone "forgot the rules" and everyone knows he means the new student.', "Leo laisse entendre que quelqu un a « oublie les regles » et tout le monde comprend qu il parle du nouvel eleve."],
  ['Nina says the manager "has opinions" about the report, making it sound like a secret insult.', "Nina dit que la responsable « a des opinions » sur le rapport, ce qui sonne comme une insulte cachee."],
  ['Owen says the neighbor is "very friendly" in a tone that clearly means the opposite.', "Owen dit que le voisin est « tres sympathique » sur un ton qui veut clairement dire l inverse."],
  ['Priya remarks that a certain person "always shows up" whenever trouble starts, pointing the blame without saying it outright.', "Priya remarque qu une certaine personne « est toujours la » quand les problemes commencent, en rejetant la faute sans le dire directement."],
  ['Ben says the team member is "great at details" after a messy mistake, clearly implying criticism.', "Ben dit que le membre de l equipe est « tres doue pour les details » apres une erreur en brouillon, ce qui implique clairement une critique."],
  ['Tara says the chef is "brave with flavors" after tasting an awful soup.', "Tara dit que le chef est « courageux avec les saveurs » apres avoir goute une soupe affreuse."],
  ['Kai says a classmate is "special" because he keeps interrupting, which everyone hears as sarcasm.', "Kai dit qu un camarade est « special » parce qu il coupe sans cesse la parole, ce que tout le monde entend comme du sarcasme."],
  ['Jules says the app is "interesting" after it crashes three times, hinting that it is bad.', "Jules dit que l application est « interessante » apres trois plantages, ce qui laisse entendre qu elle est mauvaise."],
  ['Ava says the new policy is "creative" in a way that obviously means it is messy and confusing.', "Ava dit que la nouvelle regle est « creative » d une maniere qui veut clairement dire qu elle est brouillonne et confuse."],
  ['Noah says the driver is "confident" after nearly missing the exit, which sounds like criticism.', "Noah dit que le conducteur est « confiant » apres avoir failli rater la sortie, ce qui sonne comme une critique."],
  ['Mina says the project is "certainly unique" after seeing how badly it was organized.', "Mina dit que le projet est « certainement unique » apres avoir vu a quel point il etait mal organise."],
  ['Eli says the speech was "short and sweet" when he really means it was too short and shallow.', "Eli dit que le discours etait « court et sympa » alors qu il veut dire qu il etait trop court et creux."],
  ['Rina says the classmate is "brave" for turning in work that was obviously incomplete.', "Rina dit que la camarade est « courageuse » pour avoir rendu un travail evidemment incomplet."],
  ['Hugo says the budget plan is "bold" after it ignores basic math.', "Hugo dit que le plan budgetaire est « audacieux » apres avoir ignore les calculs de base."],
  ['Lina says the waiter is "efficient" after rushing the table and forgetting half the order.', "Lina dit que le serveur est « efficace » apres avoir bouscule la table et oublie la moitie de la commande."],
  ['Grant says the explanation is "simple" while clearly implying it is oversimplified.', "Grant dit que l explication est « simple » tout en laissant entendre qu elle est trop simpliste."],
  ['Zoe says the teacher is "very direct" after receiving a rude remark.', "Zoe dit que le professeur est « tres direct » apres avoir recu une remarque grossiere."],
  ['Milo says the report is "refreshingly concise" after it leaves out key facts.', "Milo dit que le rapport est « agreablement concis » alors qu il omet des faits essentiels."],
  ['Theo says the contractor is "adventurous" after the job was done badly.', "Theo dit que le entrepreneur est « aventureux » apres que le travail a ete mal fait."],
  ['Pia says the meeting was "memorable" because it was painfully awkward.', "Pia dit que la reunion etait « memorable » parce qu elle etait douloureusement genante."],
  ['Finn says the presentation had "personality" when it was really unprofessional.', "Finn dit que la presentation avait de la « personnalite » alors qu elle etait juste non professionnelle."],
  ['Maya says the babysitter is "fun" because she let the kids stay up too late.', "Maya dit que la baby-sitter est « amusante » parce qu elle a laisse les enfants se coucher trop tard."],
  ['Sam says the salesperson is "persistent" after being pushy at the door.', "Sam dit que le vendeur est « persistant » apres avoir ete insistant a la porte."],
  ['Juno says the plan is "interesting" in a tone that means "this is a bad idea."', "Juno dit que le plan est « interessant » sur un ton qui veut dire « c est une mauvaise idee »."] ,
  ['Iris says the speaker is "honest" after he dodged the question.', "Iris dit que l orateur est « honnete » apres avoir esquive la question."],
  ['Cole says the candidate is "unforgettable" after a disastrous interview.', "Cole dit que le candidat est « inoubliable » apres un entretien desastreux."],
  ['Nora says the dessert is "different" after tasting something clearly off.', "Nora dit que le dessert est « different » apres avoir goute quelque chose de manifestement louche."],
  ['Ari says the neighbor is "well informed" because he repeats rumors.', "Ari dit que le voisin est « bien informe » parce qu il repete des rumeurs."],
  ['Rita says the design is "bold" after it is obviously too cluttered.', "Rita dit que le design est « audacieux » alors qu il est clairement trop charge."],
  ['Tia says the class is "quiet" after it is awkwardly silent.', "Tia dit que la classe est « calme » alors qu elle est silencieuse de facon genante."],
  ['Oli says the driver is "careful" after he drove far too slowly.', "Oli dit que le conducteur est « prudent » apres avoir roule beaucoup trop lentement."],
  ['Lara says the essay is "full of surprises" after it wandered off topic.', "Lara dit que la dissertation est « pleine de surprises » apres avoir deraille hors sujet."],
  ['Ben says the update is "efficient" when it actually breaks three things.', "Ben dit que la mise a jour est « efficace » alors qu elle casse trois choses."],
  ['Mina says the coach is "supportive" after the coach made a cutting comment.', "Mina dit que l entraineur est « soutenant » apres une remarque blessante."],
  ['Drew says the new policy is "not boring" after everyone clearly hated it.', "Drew dit que la nouvelle regle est « pas ennuyeuse » alors que tout le monde l a clairement detestee."],
  ['Jade says the speech was "unexpected" after the audience saw the point coming a mile away.', "Jade dit que le discours etait « inattendu » alors que le public avait vu venir l idee de tres loin."],
  ['Owen says the neighbor is "peaceful" after a loud argument through the wall.', "Owen dit que le voisin est « paisible » apres une dispute bruyante a travers le mur."],
  ['Mila says the assistant is "helpful" after getting the answer wrong on purpose.', "Mila dit que l assistant est « utile » apres avoir donne la mauvaise reponse exprès."],
  ['Evan says the policy is "flexible" after it changes without warning.', "Evan dit que la regle est « flexible » alors qu elle change sans prevenir."],
  ['Kira says the speaker is "dramatic" after one mild complaint.', "Kira dit que l orateur est « dramatique » apres une seule plainte legere."],
  ['Grant says the job is "challenging" after it was plainly understaffed.', "Grant dit que le travail est « stimulant » alors qu il manquait clairement de personnel."],
  ['Zara says the story is "colorful" after it seems unreliable.', "Zara dit que l histoire est « coloree » alors qu elle parait peu fiable."],
  ['Parker says the manager is "brave" for making a reckless decision.', "Parker dit que le responsable est « courageux » pour avoir pris une decision temeraire."],
  ['Hana says the trip was "eventful" after it went badly from start to finish.', "Hana dit que le voyage etait « mouvemente » alors qu il s est mal passe du debut a la fin."],
  ['Leo says the explanation is "novel" after it is obviously nonsense.', "Leo dit que l explication est « novatrice » alors qu elle est manifestement absurde."],
  ['Maya says the conversation was "lively" after it was mostly people talking over each other.', "Maya dit que la conversation etait « animee » alors qu il s agissait surtout de gens qui se coupaient la parole."],
  ['Nina says the service is "personalized" after it was just inconsistent.', "Nina dit que le service est « personnalise » alors qu il etait juste incoherent."],
  [`Sam says the manager is "very hands-on" after the manager kept interrupting everyone.`, `Sam dit que la responsable est « tres proche du terrain » alors qu elle interrompait tout le monde.`],
  [`Tia says the new policy is "interesting" while clearly meaning it is a mess.`, `Tia dit que la nouvelle regle est « interessante » alors qu elle veut clairement dire que c est un bazar.`],
  [`Milo calls the report "creative" after it leaves out the main facts.`, `Milo appelle le rapport « creatif » apres qu il a laisse de cote les faits principaux.`],
  [`Ava says the speaker is "confident" after he ignored the question entirely.`, `Ava dit que l orateur est « confiant » apres avoir ignore totalement la question.`],
  [`Nora describes the deadline as "generous" after it is obviously too tight.`, `Nora decrit le delai comme « genereux » alors qu il est clairement trop serre.`],
  [`Jules says the explanation is "unique" because nobody can follow it.`, `Jules dit que l explication est « unique » parce que personne ne peut la suivre.`],
  [`Ben says the meeting was "efficient" after it ended with no decisions at all.`, `Ben dit que la reunion etait « efficace » apres qu elle s est terminee sans aucune decision.`],
  [`Lina says the design is "bold" after it is so cluttered that it hurts to look at.`, `Lina dit que le design est « audacieux » alors qu il est tellement charge que c est penible a regarder.`],
  [`Grant says the team was "adventurous" after it ignored all the basic rules.`, `Grant dit que l equipe etait « aventureuse » apres avoir ignore toutes les regles de base.`],
  [`Parker says the email is "friendly" after it clearly sounds like a warning.`, `Parker dit que le courriel est « amical » alors qu il sonne clairement comme un avertissement.`],
  [`Ava calls the new intern "brave" after he ignored the instructions and broke the printer.`, `Ava dit que le nouveau stagiaire est « courageux » apres avoir ignore les consignes et casse l imprimante.`],
  [`Ben says the driver is "careful" after he nearly hit the curb.`, `Ben dit que le conducteur est « prudent » apres avoir failli monter sur le trottoir.`],
  [`Cleo says the party was "quiet" after nobody wanted to stay.`, `Cleo dit que la fete etait « calme » apres que personne n a voulu rester.`],
  [`Drew calls the meeting "efficient" after no decision was made.`, `Drew appelle la reunion « efficace » alors qu aucune decision n a ete prise.`],
  [`Eli says the manager is "very relaxed" after the deadline slipped again.`, `Eli dit que la responsable est « tres detendue » apres un nouveau retard de delai.`],
  [`Faye says the soup is "interesting" after tasting something clearly awful.`, `Faye dit que la soupe est « interessante » apres avoir goute quelque chose de manifestement affreux.`],
  [`Gabe says the teacher is "creative" after the homework directions changed for the third time.`, `Gabe dit que le professeur est « creatif » apres le troisieme changement des consignes de devoirs.`],
  [`Hana calls the roommate "helpful" after the dishes were left in the sink.`, `Hana appelle la colocataire « serviable » apres avoir laisse la vaisselle dans l evier.`],
  [`Iris says the design is "bold" after it looks chaotic.`, `Iris dit que le design est « audacieux » alors qu il parait chaotique.`],
  [`Jules says the customer service was "friendly" after they never answered.`, `Jules dit que le service client etait « aimable » alors qu ils n ont jamais repondu.`],
  [`Kai says the neighbor is "organized" after the trash bags stayed outside overnight.`, `Kai dit que le voisin est « organise » apres que les sacs poubelle sont restes dehors toute la nuit.`],
  [`Lina says the report is "thorough" after it omits the biggest problem.`, `Lina dit que le rapport est « complet » alors qu il omet le plus gros probleme.`],
  [`Milo says the cousin is "a real chef" after burning frozen pizza.`, `Milo dit que le cousin est « un vrai chef » apres avoir brule une pizza surgelees.`],
  [`Nora says the coach is "supportive" after the comment clearly stung.`, `Nora dit que l entraineur est « soutenant » apres une remarque qui a clairement fait mal.`],
  [`Omar says the new policy is "simple" after everyone had to guess.`, `Omar dit que la nouvelle regle est « simple » alors que tout le monde a du deviner.`],
  [`Pia says the website is "fast" after it took forever to load.`, `Pia dit que le site est « rapide » apres avoir mis une eternite a charger.`],
  [`Quinn says the friend is "punctual" after arriving an hour late.`, `Quinn dit que l ami est « ponctuel » apres etre arrive avec une heure de retard.`],
  [`Rina says the apartment is "cozy" after calling it tiny.`, `Rina dit que l appartement est « cosy » apres l avoir qualifie de minuscule.`],
  [`Sam says the presentation was "memorable" after it was awkward and unhelpful.`, `Sam dit que la presentation etait « memorable » alors qu elle etait genante et peu utile.`],
  [`Tia says the boss is "direct" after the remark sounded rude.`, `Tia dit que le patron est « direct » apres une remarque qui sonnait grossiere.`],
  [`Uma says the game was "exciting" after it was mostly confusion.`, `Uma dit que le jeu etait « excitant » alors qu il s agissait surtout de confusion.`],
  [`Vik says the plan is "adventurous" after it ignores basic logic.`, `Vik dit que le plan est « aventureux » alors qu il ignore la logique de base.`],
  [`Wren says the holiday was "eventful" after everything went wrong.`, `Wren dit que les vacances etaient « mouvementees » alors que tout a mal tourne.`],
  [`Xavier says the new policy is "innovative" after it is just messy.`, `Xavier dit que la nouvelle regle est « innovante » alors qu elle est juste brouillonne.`],
  [`Yara says the help desk is "responsive" after waiting all day.`, `Yara dit que le support est « reactif » apres avoir attendu toute la journee.`],
  [`Zane says the essay is "unique" after it makes no sense.`, `Zane dit que la dissertation est « unique » alors qu elle n a aucun sens.`],
  [`Maya says the co-worker is "confident" after avoiding the question.`, `Maya dit que le collegue est « confiant » apres avoir evite la question.`],
  [`Leo says the sandwich was "different" after it tasted spoiled.`, `Leo dit que le sandwich etait « different » apres un gout de gate.`],
  [`Priya says the neighbor is "very social" after playing loud music at midnight.`, `Priya dit que le voisin est « tres sociable » apres avoir mis de la musique forte a minuit.`],
  [`Theo says the class clown is "brilliant" after derailing the lesson.`, `Theo dit que le clown de la classe est « brillant » apres avoir fait deriver le cours.`],
  [`Ava says the new haircut is "interesting" after it looks disastrous.`, `Ava dit que la nouvelle coupe est « interessante » alors qu elle a l air desastreuse.`],
  [`Ben says the landlord is "generous" after raising the rent again.`, `Ben dit que le proprietaire est « genereux » apres avoir encore augmente le loyer.`],
  [`Cora says the software update was "smooth" after it broke three features.`, `Cora dit que la mise a jour logicielle etait « fluide » apres avoir casse trois fonctions.`],
  [`Dylan says the handshake was "warm" after it felt icy.`, `Dylan dit que la poignée de main etait « chaleureuse » alors qu elle etait glaciale.`],
  [`Emma says the promotion was "fair" after someone else got it by favoritism.`, `Emma dit que la promotion etait « juste » alors que quelqu un d autre l a obtenue par favoritisme.`],
  [`Finn says the referee was "consistent" after every call went against his team.`, `Finn dit que l arbitre etait « coherent » apres que chaque decision a ete contre son equipe.`],
  [`Gia says the project lead is "open minded" after never listening.`, `Gia dit que le chef de projet est « ouvert d esprit » alors qu il n ecoute jamais.`],
  [`Hugo says the meal was "light" after there was barely any food.`, `Hugo dit que le repas etait « leger » alors qu il y avait a peine assez a manger.`],
  [`Ivy says the new policy is "clear" after nobody understood it.`, `Ivy dit que la nouvelle regle est « claire » alors que personne ne l a comprise.`],
  [`Jade says the party host is "a natural" after forgetting everyone's name.`, `Jade dit que l hote de la fete est « ne pour ca » apres avoir oublie le nom de tout le monde.`],
  [`Kian says the speaker is "thorough" after repeating the same point all night.`, `Kian dit que l orateur est « complet » apres avoir repete la meme idee toute la soiree.`],
  [`Lara says the movie was "deep" after it was mostly confusing.`, `Lara dit que le film etait « profond » alors qu il etait surtout confus.`],
];

const OPTIONS_EN = ['Innuendo', 'Ad Hominem', 'Ambiguity', 'Loaded Question'];
const OPTIONS_FR = ['Innuendo', 'Ad Hominem', 'Ambiguïté', 'Question orientée'];

function rotate(a: string[], i: number) {
  const r = a.slice(1);
  r.splice(i, 0, a[0]);
  return r;
}

function sub(i: number) {
  return i < 43 ? SubLevel.BEGINNER : i < 50 ? SubLevel.INTERMEDIATE : SubLevel.EXPERT;
}

function make(fr = false): Question[] {
  return SCENARIOS.map((s, i) => {
    const c = i % 4;
    return {
      id: 36301 + i,
      level: 4,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Innuendo' : 'Innuendo',
      difficulty: i < 43 ? 1 : i < 50 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Une remarque insinue quelque chose de negatif sans l affirmer directement."
        : 'A remark implies something negative without saying it directly.',
      detailedExplanationBeginner: fr
        ? "L insinuation attaque ou sous-entend sans le dire franchement."
        : 'Innuendo hints at a criticism without stating it plainly.',
      detailedExplanationIntermediate: fr
        ? "L innuendo utilise un ton, un sous-entendu ou une formulation vague pour pousser l audience a conclure sans preuve explicite."
        : 'Innuendo uses tone, implication, or vague wording to push the audience toward a conclusion without explicit evidence.',
      detailedExplanationExpert: fr
        ? "Cette tactique rhetorique laisse l accusation a l interpretation de l auditoire, ce qui permet de nuire a quelqu un tout en gardant une apparence de deni plausible."
        : 'This rhetorical tactic leaves the accusation to the audience’s interpretation, allowing harm to be done while preserving plausible deniability.',
      questionFormat: 'standard',
    };
  });
}

export const INNUENDO_EXPANSION_EN: Question[] = make();
export const INNUENDO_EXPANSION_FR: Question[] = make(true);
