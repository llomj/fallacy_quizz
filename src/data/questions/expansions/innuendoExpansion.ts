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
  ['Juno says the plan is "interesting" in a tone that means "this is a bad idea."', "Juno dit que le plan est « interessant » sur un ton qui veut dire « c est une mauvaise idee ».\""],
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
