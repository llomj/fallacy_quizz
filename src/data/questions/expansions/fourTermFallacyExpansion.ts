import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['The speaker says "bank" means river bank in one sentence and money bank in the next, so the argument shifts.', "L'orateur dit que « banque » signifie rivage dans une phrase et banque d'argent dans la suivante, donc l'argument change."],
  ['Mia uses "light" to mean not heavy, then to mean not dark, and treats both meanings as the same.', "Mia utilise « léger » pour dire pas lourd, puis pas sombre, et traite les deux sens comme identiques."],
  ['Theo argues that "club" is a stick, then calls the club a group of people without noticing the switch.', "Theo soutient que « club » est un baton, puis appelle le club un groupe de personnes sans remarquer le changement."],
  ['Ava says a "cold" person and a cold drink prove the same point, even though the word changes meaning.', "Ava dit qu'une personne froide et une boisson froide prouvent la meme chose, meme si le mot change de sens."],
  ['Ben uses "right" as morally right and then as direction-right in the same conclusion.', "Ben utilise « droit » au sens moral, puis au sens de direction, dans la meme conclusion."],
  ['Rina claims a "seal" on a letter and a sea seal are the same evidence, mixing the meanings.', "Rina affirme qu'un « sceau » sur une lettre et un phoque marin sont la meme preuve, en melangeant les sens."],
  ['Owen starts with "fair" meaning just, then ends with fair meaning light-colored.', "Owen commence avec « juste » au sens d'equitable, puis termine avec juste au sens de couleur claire."],
  ['Priya says the "draft" of a proposal and a draft of wind prove the same idea.', "Priya dit que le « brouillon » d'une proposition et un courant d'air prouvent la meme idee."],
  ['Leo uses "bat" as the animal, then as the sports tool, in one chain of reasoning.', "Leo utilise « chauve-souris » comme animal, puis comme outil de sport, dans une seule chaine de raisonnement."],
  ['Nina says a "kind" gesture and a kind person are interchangeable, so the claim slides around.', "Nina dit qu'un geste « gentil » et une personne gentille sont interchangeables, donc l'affirmation glisse."],
  ['Milo argues that "left" means departed and also left side, so the term keeps changing.', "Milo soutient que « gauche » signifie parti et aussi cote gauche, donc le terme continue de changer."],
  ['Lina says a "ring" on a finger and a ring of people must be the same kind of object.', "Lina dit qu'une « bague » au doigt et un cercle de personnes doivent etre le meme type d'objet."],
  ['Kai starts with "sound" as noise and ends with sound as healthy.', "Kai commence avec « son » comme bruit et termine avec sain."],
  ['Zoe uses "fair" to mean pale skin first and then fair treatment later.', "Zoe utilise « clair » pour dire peau pale d'abord puis traitement equitable ensuite."],
  ['Finn says a "match" for a fire and a match in a game are the same thing.', "Finn dit qu'une « allumette » pour un feu et un match de jeu sont la meme chose."],
  ['Mina says "seal" as close tightly and seal as an animal are interchangeable, so the argument shifts meanings.', "Mina dit que « sceller » et phoque sont interchangeables, donc l'argument change de sens."],
  ['Eli talks about "mean" average and "mean" unkind as if they prove one conclusion.', "Eli parle de « moyen » et de « mechant » comme s'ils prouvaient la meme conclusion."],
  ['Tara says a "tie" in clothing and a tie in a game are the same proof of being connected.', "Tara dit qu'une « cravate » et une egalite dans un jeu sont la meme preuve d'etre lies."],
  ['Noah says a "charge" on a bill and a charge in a battery are the same problem.', "Noah dit qu'une « charge » sur une facture et une charge dans une batterie sont le meme probleme."],
  ['Jasper says "patient" as a noun and patient as calm are the same description of a clinic visit.', "Jasper dit que « patient » comme nom et patient comme calme sont la meme description d'une visite en clinique."],
  ['Maya says a "crane" bird and a crane machine must support the same claim.', "Maya dit qu'une grue oiseau et une grue machine doivent soutenir la meme affirmation."],
  ['Hugo says "current" as present time and current as electricity are the same evidence.', "Hugo dit que « courant » au sens du temps present et courant au sens d'electricite sont la meme preuve."],
  ['Layla says a "stamp" on mail and a stamp of approval are one and the same.', "Layla dit qu'un « timbre » sur le courrier et un tampon d'approbation sont une seule et meme chose."],
  ['Clara says a "wave" at a friend and a wave in the ocean are the same kind of motion.', "Clara dit qu'un « signe de la main » a un ami et une vague dans l'océan sont le meme type de mouvement."],
  ['Dylan says "hard" as firm and hard as difficult, so the word slides mid-argument.', "Dylan dit que « dur » au sens ferme et dur au sens difficile glisse au milieu de l'argument."],
  ['Sofia says a "case" in court and a case on a phone are identical examples.', "Sofia dit qu'une « affaire » au tribunal et une coque de telephone sont des exemples identiques."],
  ['Reed says "plain" as obvious and plain as unpatterned are the same property.', "Reed dit que « clair » au sens evident et clair au sens sans motif sont la meme propriete."],
  ['Emma says "arm" as limb and arm as to equip are the same step in the reasoning.', "Emma dit que « bras » comme membre et armer sont la meme etape du raisonnement."],
  ['Ari says a "figure" in math and a figure in gossip are the same fact.', "Ari dit qu'une « figure » en maths et une figure dans une rumeur sont le meme fait."],
  ['Mina says "spring" the season and spring the coil prove the same point.', "Mina dit que le « printemps » et le ressort prouvent le meme point."],
  ['Cole says "fan" as a supporter and fan as a machine are the same person.', "Cole dit qu'un « fan » et un ventilateur sont la meme personne."],
  ['Tessa says "duck" the verb and duck the bird are the same evidence of avoiding something.', "Tessa dit que « esquiver » et canard sont la meme preuve d'evitement."],
  ['Jonah says a "light" meal and a light bulb are both examples of brightness.', "Jonah dit qu'un repas « leger » et une ampoule sont tous deux des exemples de luminosite."],
  ['Kira says "present" as a gift and present as current are the same time marker.', "Kira dit que « present » comme cadeau et present comme actuel sont le meme marqueur temporel."],
  ['Parker says a "mole" in the garden and a mole in biology are the same creature.', "Parker dit qu'une « taupe » dans le jardin et une mole en biologie sont la meme creature."],
  ['Nora says a "note" in music and a note on the fridge are the same message.', "Nora dit qu'une « note » en musique et un mot sur le frigo sont le meme message."],
  ['Evan says "rock" music and a rock in a driveway are the same support for the idea.', "Evan dit que la musique rock et une pierre dans une allée sont le meme soutien pour l'idee."],
  ['Stella says "seal" as a signature and seal as an animal are both proof of authenticity.', "Stella dit que « sceau » comme signature et phoque sont tous deux une preuve d'authenticite."],
  ['Ray says "bark" the tree covering and bark a dog are the same warning.', "Ray dit que l'ecorce et l'aboiement d'un chien sont le meme avertissement."],
  ['Jade says a "pen" to write and a pen for animals are the same enclosure.', "Jade dit qu'un « stylo » pour ecrire et un enclos pour animaux sont le meme enclos."],
  ['Drew says "digest" as a summary and digest as a body process are interchangeable conclusions.', "Drew dit que « resumer » et digerer sont des conclusions interchangeables."],
  ['Lara says a "well" of water and well as in okay are the same source of support.', "Lara dit qu'un « puits » d'eau et bien au sens de okay sont la meme source de soutien."],
  ['Oli says "order" as a command and order as tidiness prove the same case.', "Oli dit que l'« ordre » comme commande et l'ordre comme rangement prouvent le meme cas."],
  ['Mia says "club" as a group and club as a tool are identical because the word repeats.', "Mia dit que le « club » comme groupe et comme outil sont identiques parce que le mot se repete."],
  ['Felix says "mean" as a value and mean as rude are the same metric.', "Felix dit que « moyenne » et mechant sont la meme mesure."],
  ['Iris says "object" as a thing and object as to protest are the same premise.', "Iris dit que « objet » comme chose et objecter sont la meme premise."],
  ['Grant says "light" as not heavy and light as illumination are the same proof.', "Grant dit que « leger » et la lumiere sont la meme preuve."],
  ['Juno says "sheet" as paper and sheet as a bed cover are the same material.', "Juno dit qu'une « feuille » de papier et un drap sont le meme materiau."],
  ['Pia says "watch" the verb and watch the noun are the same instruction.', "Pia dit que « regarder » et montre sont la meme instruction."],
  ['Jade says a "crane" bird and a crane machine must support the same claim.', "Jade dit qu'une grue oiseau et une grue machine doivent soutenir la meme affirmation."],
  ['Drew says "digest" as a summary and digest as a body process are interchangeable conclusions.', "Drew dit que « resumer » et digerer sont des conclusions interchangeables."],
  ['Lara says a "well" of water and well as in okay are the same source of support.', "Lara dit qu'un « puits » d'eau et bien au sens de okay sont la meme source de soutien."],
  ['Oli says "order" as a command and order as tidiness prove the same case.', "Oli dit que l'« ordre » comme commande et l'ordre comme rangement prouvent le meme cas."],
  ['Mia says "club" as a group and club as a tool are identical because the word repeats.', "Mia dit que le « club » comme groupe et comme outil sont identiques parce que le mot se repete."],
  ['Felix says "mean" as a value and mean as rude are the same metric.', "Felix dit que « moyenne » et mechant sont la meme mesure."],
  ['Iris says "object" as a thing and object as to protest are the same premise.', "Iris dit que « objet » comme chose et objecter sont la meme premise."],
  ['Grant says "light" as not heavy and light as illumination are the same proof.', "Grant dit que « leger » et la lumiere sont la meme preuve."],
  ['Juno says "sheet" as paper and sheet as a bed cover are the same material.', "Juno dit qu'une « feuille » de papier et un drap sont le meme materiau."],
  ['Pia says "watch" the verb and watch the noun are the same instruction.', "Pia dit que « regarder » et montre sont la meme instruction."]
];

const OPTIONS_EN = ['Four-Term Fallacy', 'Equivocation', 'False Dilemma', 'False Equivalence'];
const OPTIONS_FR = ['Sophisme des quatre termes', 'Équivoque', 'Fausse dichotomie', 'Fausse équivalence'];

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
      id: 34701 + i,
      level: 6,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Sophisme des quatre termes' : 'Four-Term Fallacy',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Le raisonnement change de sens au milieu de l'argument, ce qui donne l'impression d'une seule idée alors qu'il y en a plusieurs."
        : 'The reasoning shifts meaning partway through, creating the illusion of one idea when there are actually several.',
      detailedExplanationBeginner: fr
        ? "Un mot change de sens sans qu'on le remarque."
        : 'A word changes meaning without being noticed.',
      detailedExplanationIntermediate: fr
        ? "Le sophisme des quatre termes arrive quand un terme central n'a plus le même sens au fil de l'argument."
        : 'The four-term fallacy happens when a key term does not keep the same meaning through the argument.',
      detailedExplanationExpert: fr
        ? "Ce sophisme rompt l'identité sémantique d'un terme pivot; la conclusion semble suivre alors que la chaîne argumentative repose sur une ambiguïté non signalée."
        : 'This fallacy breaks the semantic identity of a pivot term; the conclusion appears to follow even though the chain depends on an unannounced ambiguity.',
      questionFormat: 'standard',
    };
  });
}

export const FOUR_TERM_FALLACY_EXPANSION_EN: Question[] = make();
export const FOUR_TERM_FALLACY_EXPANSION_FR: Question[] = make(true);
