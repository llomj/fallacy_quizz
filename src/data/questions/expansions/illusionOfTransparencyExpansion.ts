import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya assumes everyone can tell she is nervous just because she is quiet.', "Maya suppose que tout le monde voit qu elle est nerveuse juste parce qu elle est silencieuse."],
  ['Leo thinks his red face gives away his whole opinion about the meeting.', "Leo pense que son visage rouge revele toute son opinion sur la reunion."],
  ['Nina believes the room can read her mood the moment she sighs.', "Nina croit que la piece peut lire son humeur des qu elle soupire."],
  ['Owen whispers one sentence and assumes everyone notices he is hiding a secret.', "Owen murmure une phrase et suppose que tout le monde remarque qu il cache un secret."],
  ['Priya thinks her awkward smile makes her thoughts obvious to the whole class.', "Priya pense que son sourire gene rend ses pensees evidentes pour toute la classe."],
  ['Ben assumes his bad handwriting shows exactly how stressed he feels.', "Ben suppose que sa mauvaise ecriture montre exactement a quel point il est stresse."],
  ['Tara believes the whole office can tell she dislikes the new policy from one eye roll.', "Tara croit que tout le bureau peut deviner qu elle deteste la nouvelle regle grace a un seul roulement d yeux."],
  ['Kai thinks a shaky voice makes his fear impossible to hide.', "Kai pense qu une voix tremblante rend sa peur impossible a cacher."],
  ['Jules assumes his silence at dinner loudly announces that he is annoyed.', "Jules suppose que son silence au diner annonce clairement qu il est agace."],
  ['Ava thinks everyone knows she forgot the report because she avoided eye contact.', "Ava pense que tout le monde sait qu elle a oublie le rapport parce qu elle a evite le regard."],
  ['Noah believes his short text message reveals his whole attitude.', "Noah croit que son message court revele toute son attitude."],
  ['Mina assumes the cashier can tell she is embarrassed by the way she holds her card.', "Mina suppose que la caissiere peut voir qu elle est genee a la facon dont elle tient sa carte."],
  ['Eli thinks his frown makes his disagreement completely obvious.', "Eli pense que son froncement de sourcils rend son desaccord totalement evident."],
  ['Rina believes her friends can read her disappointment from one pause in the conversation.', "Rina croit que ses amis peuvent lire sa deception dans une seule pause de la conversation."],
  ['Hugo thinks the teacher can tell he did not study because he answered too quickly.', "Hugo pense que le professeur peut deviner qu il n a pas etudie parce qu il a repondu trop vite."],
  ['Lina assumes everyone notices that she is offended when she gets quiet.', "Lina suppose que tout le monde remarque qu elle est offensee quand elle se tait."],
  ['Grant believes his coworkers can tell he is confused just because he asked one question.', "Grant croit que ses collegues peuvent voir qu il est perdu juste parce qu il a pose une question."],
  ['Zoe thinks her nervous laugh broadcasts exactly what she is worried about.', "Zoe pense que son rire nerveux diffuse exactement ce qui l inquiete."],
  ['Milo assumes his messy desk tells the entire story of his week.', "Milo suppose que son bureau en desordre raconte toute son histoire de la semaine."],
  ['Theo believes the group chat can sense he is jealous from a single emoji.', "Theo croit que le groupe de discussion sent qu il est jaloux a partir d un seul emoji."],
  ['Pia thinks her sudden pause in class exposes her lack of confidence to everyone.', "Pia pense que sa pause soudaine en classe expose son manque de confiance a tout le monde."],
  ['Finn assumes the interviewer can tell he is flustered because he cleared his throat.', "Finn suppose que l interviewer voit qu il est trouble parce qu il s est racle la gorge."],
  ['Maya thinks her friend can read her disappointment from a long exhale.', "Maya pense que son amie peut lire sa deception dans un long souffle."],
  ['Sam believes the whole family knows he is upset since he answered with "fine."', "Sam croit que toute la famille sait qu il est enerve puisqu il a repondu « ca va »."],
  ['Juno assumes people can tell she is hiding excitement because she is trying to stay calm.', "Juno suppose que les gens voient qu elle cache son excitation parce qu elle essaie de rester calme."],
  ['Iris thinks a polite nod reveals she is secretly unconvinced.', "Iris pense qu un hochement poli revele qu elle n est pas convaincue au fond."],
  ['Cole believes his classmates can tell he is insecure from the way he fixes his sleeve.', "Cole croit que ses camarades peuvent deviner qu il manque d assurance a la facon dont il remet sa manche en place."],
  ['Nora assumes her one-word reply makes her annoyance obvious to the team.', "Nora suppose que sa reponse en un mot rend son agacement evident pour l equipe."],
  ['Ari thinks his flushed cheeks announce exactly how awkward the date feels.', "Ari pense que ses joues rouges annoncent exactement a quel point le rendez-vous est genant."],
  ['Rita believes the whole table can tell she is anxious because she keeps checking her phone.', "Rita croit que toute la table sait qu elle est anxieuse parce qu elle verifie son telephone sans cesse."],
  ['Tia assumes her cousin can read her frustration from one sharp sigh.', "Tia suppose que son cousin peut lire sa frustration dans un seul soupir sec."],
  ['Oli thinks the room knows he is bored because he stopped smiling.', "Oli pense que la salle sait qu il s ennuie parce qu il a cesse de sourire."],
  ['Lara believes her partner can tell she is hurt by the way she answers in short sentences.', "Lara croit que son partenaire voit qu elle est blessee a la facon dont elle repond par de courtes phrases."],
  ['Ben assumes the group sees his guilt the moment he avoids speaking up.', "Ben suppose que le groupe voit sa culpabilite des qu il evite de prendre la parole."],
  ['Mina thinks one awkward glance tells the whole office she disagrees.', "Mina pense qu un regard gene suffit a dire a tout le bureau qu elle n est pas d accord."],
  ['Drew believes his parents can tell he is hiding bad news because he is too cheerful.', "Drew croit que ses parents voient qu il cache une mauvaise nouvelle parce qu il est trop joyeux."],
  ['Jade assumes her class can read her impatience from the way she taps her pen.', "Jade suppose que sa classe peut lire son impatience a la facon dont elle tapote son stylo."],
  ['Owen thinks a single shrug makes his disbelief obvious to the whole group.', "Owen pense qu un seul haussement d epaules rend son incredulite evidente pour tout le groupe."],
  ['Mila believes everyone can tell she is embarrassed because she changed the subject.', "Mila croit que tout le monde peut deviner qu elle est genee parce qu elle a change de sujet."],
  ['Evan assumes his neighbor knows he is annoyed from the tone of one sentence.', "Evan suppose que son voisin sait qu il est agace grace au ton d une seule phrase."],
  ['Kira thinks the audience can tell she is not prepared just because she checks her notes.', "Kira pense que le public peut voir qu elle n est pas preparee simplement parce qu elle consulte ses notes."],
  ['Grant believes one nervous joke reveals he is trying to hide his stress.', "Grant croit qu une seule blague nerveuse revele qu il essaie de cacher son stress."],
  ['Zara assumes her roommate can read her concern from the way she closes the door softly.', "Zara suppose que sa colocataire lit son inquietude a la facon dont elle ferme la porte doucement."],
  ['Parker thinks the team knows he is disappointed because he did not add a comment.', "Parker pense que l equipe sait qu il est decu parce qu il n a rien ajoute."],
  ['Hana believes her teacher can tell she is offended by the neatness of her silence.', "Hana croit que son professeur voit qu elle est offensee a la nettete de son silence."],
  ['Leo assumes his family can tell he is jealous from one overly casual compliment.', "Leo suppose que sa famille devine qu il est jaloux a partir d un compliment un peu trop detendu."],
  ['Maya thinks the group can read her relief when she finally stops fidgeting.', "Maya pense que le groupe peut lire son soulagement quand elle cesse enfin de gigoter."],
  ['Nina believes her manager can tell she is worried because she asks to clarify one detail.', "Nina croit que sa responsable voit qu elle est preoccupee parce qu elle demande un seul detail."],
  [`After one quiet meeting, Ravi assumes everyone could tell he was angry from the way he folded his arms.`, `Apres une reunion calme, Ravi suppose que tout le monde pouvait voir qu il etait en colere a la facon dont il a croise les bras.`],
  [`Tara thinks her awkward laugh gave away exactly how embarrassed she felt at the lunch table.`, `Tara pense que son rire genant a revele exactement a quel point elle etait genee a la table du dejeuner.`],
  [`Milo believes the room can read his disappointment because he looked at the floor for a second.`, `Milo croit que la salle peut lire sa deception parce qu il a regarde le sol pendant une seconde.`],
  [`Nora assumes her quiet "okay" makes her frustration obvious to everyone in the group chat.`, `Nora suppose que son « d accord » silencieux rend sa frustration evidente pour tout le monde dans le groupe.`],
  [`Jules thinks his red ears announce his panic to every person in the elevator.`, `Jules pense que ses oreilles rouges annoncent sa panique a chaque personne dans l ascenseur.`],
  [`Ava believes her careful smile makes it impossible to hide that she is annoyed.`, `Ava croit que son sourire prudent rend impossible de cacher qu elle est agacee.`],
  [`Ben assumes the whole office can tell he is tired because he leaned on the copier for a moment.`, `Ben suppose que tout le bureau sait qu il est fatigue parce qu il s est appuye un instant sur la photocopieuse.`],
  [`Lina thinks one deep breath makes her nervousness obvious to the audience.`, `Lina pense qu une seule grande inspiration rend son nervosisme evident pour le public.`],
  [`Theo believes his short reply shows the teacher that he is offended.`, `Theo croit que sa reponse courte montre au professeur qu il est offense.`],
  [`Iris assumes her pause before answering was loud enough to reveal her doubt.`, `Iris suppose que sa pause avant de repondre etait assez parlante pour reveler son doute.`],
];

const OPTIONS_EN = ['Illusion of Transparency', 'Illusion of Control', 'False Consensus Effect', 'Mind Reading'];
const OPTIONS_FR = ['Illusion de transparence', 'Illusion de contrôle', 'Effet de faux consensus', 'Lecture de pensée'];

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
      id: 35701 + i,
      level: 4,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Illusion de transparence' : 'Illusion of Transparency',
      difficulty: i < 43 ? 1 : i < 50 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? "La personne croit que ses signes emotifs sont beaucoup plus visibles qu ils ne le sont vraiment."
        : 'The person thinks their emotional signs are far more visible than they really are.',
      detailedExplanationBeginner: fr
        ? "On surestime souvent a quel point les autres lisent nos emotions."
        : 'We often overestimate how much other people can read our emotions.',
      detailedExplanationIntermediate: fr
        ? "L illusion de transparence fait croire que le stress, la gene ou la colere se voient presque automatiquement, alors que les autres remarquent souvent beaucoup moins que ce qu on imagine."
        : 'The illusion of transparency makes stress, embarrassment, or anger seem almost automatically visible, even though other people usually notice far less than we imagine.',
      detailedExplanationExpert: fr
        ? "Ce biais apparait quand on confond sa propre intensite interne avec une lisibilite externe, et qu on suppose a tort que des indices discrets donnent aux autres un acces direct a nos etats mentaux."
        : 'This bias appears when we confuse our internal intensity with external readability and wrongly assume that subtle cues give other people direct access to our mental state.',
      questionFormat: 'standard',
    };
  });
}

export const ILLUSION_OF_TRANSPARENCY_EXPANSION_EN: Question[] = make();
export const ILLUSION_OF_TRANSPARENCY_EXPANSION_FR: Question[] = make(true);
