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
  ['Mina says "pitch" as throw and pitch as music are the same clue.', 'Mina dit que « lancer » et la hauteur musicale sont le meme indice.'],
  ['Eli says "duck" the bird and duck the action prove the same point.', 'Eli dit que le canard et le fait d esquiver prouvent le meme point.'],
  ['Tara says "park" the place and park the car are identical evidence.', 'Tara dit que le parc et le fait de garer une voiture sont la meme preuve.'],
  ['Noah says "file" on a computer and file for paperwork are the same tool.', 'Noah dit qu un fichier sur un ordinateur et un dossier de papiers sont le meme outil.'],
  ['Jasper says "date" on a calendar and date the fruit are the same kind of thing.', 'Jasper dit qu une date sur un calendrier et une datte sont le meme type de chose.'],
  ['Maya says "crack" in a wall and crack a joke are the same damage.', 'Maya dit qu une fissure dans un mur et faire une blague sont le meme degat.'],
  ['Hugo says "club" as a group and club as a weapon prove the same membership.', 'Hugo dit que le club comme groupe et le club comme arme prouvent la meme appartenance.'],
  ['Layla says "ring" a bell and ring on a finger are the same signal.', 'Layla dit qu une sonnerie de cloche et une bague au doigt sont le meme signal.'],
  ['Clara says "spring" forward on a clock and spring in a mattress are the same movement.', 'Clara dit que passer a l heure d ete et un ressort de matelas sont le meme mouvement.'],
  ['Dylan says "match" the game and match the fire starter are the same competition.', 'Dylan dit qu un match de sport et une allumette sont la meme competition.'],
  ['Sofia says "well" as healthy and well as a water source are the same benefit.', 'Sofia dit que bien au sens de bonne sante et un puits sont le meme avantage.'],
  ['Reed says "wave" goodbye and wave in the sea are the same hand signal.', 'Reed dit qu une vague d adieu et une vague dans la mer sont le meme geste.'],
  ['Emma says "bank" of a river and bank for money are the same building.', 'Emma dit que la rive d une riviere et une banque d argent sont le meme batiment.'],
  ['Ari says "note" as a musical note and note as a reminder are the same message.', 'Ari dit qu une note de musique et un mot de rappel sont le meme message.'],
  ['Mina says "seal" to close a package and seal the animal are the same thing.', 'Mina dit que sceller un colis et un phoque sont la meme chose.'],
  ['Cole says "present" as a gift and present as now are the same timing.', 'Cole dit que present comme cadeau et present comme maintenant sont le meme temps.'],
  ['Tessa says "right" as correct and right as direction are one and the same.', 'Tessa dit que droit au sens correct et droit au sens de direction sont une seule et meme chose.'],
  ['Jonah says "light" as not heavy and light as brightness are the same measurement.', 'Jonah dit que leger et la lumiere sont la meme mesure.'],
  ['Kira says "board" as a piece of wood and board as a committee are the same seat.', 'Kira dit qu une planche de bois et un conseil sont le meme siege.'],
  ['Parker says "fair" meaning just and fair meaning blond are the same judgment.', 'Parker dit que juste au sens equitable et clair au sens blond sont le meme jugement.'],
  ['Nora says "bear" the animal and bear as tolerate are the same creature.', 'Nora dit que l ours et supporter sont la meme creature.'],
  ['Evan says "kind" as type and kind as nice are the same attitude.', 'Evan dit que genre et gentil sont la meme attitude.'],
  ['Stella says "charge" a fee and charge a battery are the same price.', 'Stella dit que facturer et charger une batterie sont le meme prix.'],
  ['Ray says "left" as departed and left as a direction are the same location.', 'Ray dit que parti et gauche sont le meme endroit.'],
  ['Jade says "plain" as simple and plain as flat land are the same design.', 'Jade dit que simple et plaine sont le meme design.'],
  ['Drew says "rock" music and a rock in the yard are the same support.', 'Drew dit que le rock et une pierre dans le jardin sont le meme soutien.'],
  ['Lara says "watch" as look and watch as a device are the same alarm.', 'Lara dit que regarder et une montre sont la meme alarme.'],
  ['Oli says "seal" on an envelope and seal in the ocean are the same proof.', 'Oli dit qu un sceau sur une enveloppe et un phoque dans l ocean sont la meme preuve.'],
  ['Mia says "spring" as season and spring as bounce are the same time of year.', 'Mia dit que printemps et rebond sont la meme saison.'],
  ['Felix says "mean" as average and mean as nasty are the same score.', 'Felix dit que moyenne et mechant sont la meme note.'],
  ['Iris says "case" as situation and case as a box are the same container.', 'Iris dit que cas et boite sont le meme conteneur.'],
  ['Grant says "file" as an edge tool and file as a document are the same paper.', 'Grant dit qu une lime et un fichier sont le meme papier.'],
  ['Juno says "order" as sequence and order as a request are the same instruction.', 'Juno dit que ordre comme sequence et ordre comme commande sont la meme instruction.'],
  ['Pia says "right" as moral right and right as the opposite of left are the same truth.', 'Pia dit que juste au sens moral et droite sont la meme verite.'],
  ['Mila says "sound" as noise and sound as healthy are the same volume.', 'Mila dit que son et sain sont le meme volume.'],
  ['Eli says "arm" as a limb and arm as to equip are the same weapon.', 'Eli dit que bras et armer sont la meme arme.'],
  ['Tara says "fan" as a supporter and fan as a machine are the same person.', 'Tara dit qu un fan et un ventilateur sont la meme personne.'],
  ['Noah says "ring" as jewelry and ring as to call are the same circle.', 'Noah dit qu une bague et appeler sont le meme cercle.'],
  ['Jasper says "duck" as a bird and duck as a verb are the same avoidance.', 'Jasper dit que le canard et esquiver sont le meme evitement.'],
  ['Mina says "plain" as obvious and plain as level ground are the same landscape.', 'Mina dit que simple au sens evident et plaine sont le meme paysage.'],
  ['Grant says "spring" as a season and spring as a jump are the same schedule.', 'Grant dit que printemps et saut sont le meme horaire.'],
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
