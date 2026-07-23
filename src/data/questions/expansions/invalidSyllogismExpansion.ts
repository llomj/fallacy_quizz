import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says, "If it rains, the game is canceled. The game was canceled, so it must have rained."', "Maya dit : « S il pleut, le match est annule. Le match a ete annule, donc il a forcement plu. »"],
  ['Leo says, "If the light is red, stop. The light is green, so stop."', "Leo dit : « Si la lumiere est rouge, arrêtez. La lumiere est verte, donc arretez. »"],
  ['Nina says, "All cats are animals. All dogs are animals. So cats are dogs."', "Nina dit : « Tous les chats sont des animaux. Tous les chiens sont des animaux. Donc les chats sont des chiens. »"],
  ['Owen says, "If the app crashes, restart it. It did not crash, so it is fixed forever."', "Owen dit : « Si l application plante, redemarrez-la. Elle n a pas plante, donc elle est reglee pour toujours. »"],
  ['Priya says, "Either the train is late or I am early. I am early, so the train must be late."', "Priya dit : « Soit le train est en retard soit je suis en avance. Je suis en avance, donc le train est forcement en retard. »"],
  ['Ben says, "If I study, I pass. I passed, so I must have studied enough to know everything."', "Ben dit : « Si j etudie, je reussis. J ai reussi, donc j ai forcement assez etudie pour tout savoir. »"],
  ['Tara says, "Some smart people wear glasses. I wear glasses, so I am smart."', "Tara dit : « Certaines personnes intelligentes portent des lunettes. Je porte des lunettes, donc je suis intelligente. »"],
  ['Kai says, "If the cake is sweet, it is dessert. This is dessert, so it must be cake."', "Kai dit : « Si le gateau est sucré, c est un dessert. C est un dessert, donc c est forcement un gateau. »"],
  ['Jules says, "If the room is noisy, the meeting is bad. The meeting is bad, so the room was noisy."', "Jules dit : « Si la salle est bruyante, la reunion est mauvaise. La reunion est mauvaise, donc la salle etait bruyante. »"],
  ['Ava says, "All stars are bright. This thing is bright, so it is a star."', "Ava dit : « Toutes les etoiles brillent. Cette chose brille, donc c est une etoile. »"],
  ['Noah says, "If I bring an umbrella, it will rain. I brought an umbrella, so it rained."', "Noah dit : « Si j apporte un parapluie, il pleuvra. J ai apporte un parapluie, donc il a plu. »"],
  ['Mina says, "If the page is blank, reload it. The page is not blank, so the reload worked."', "Mina dit : « Si la page est vide, rechargez-la. La page n est pas vide, donc le rechargement a marche. »"],
  ['Eli says, "All good musicians like rhythm. She likes rhythm, so she is a good musician."', "Eli dit : « Tous les bons musiciens aiment le rythme. Elle aime le rythme, donc c est une bonne musicienne. »"],
  ['Rina says, "If the lamp is on, the room is bright. The room is bright, so the lamp is on."', "Rina dit : « Si la lampe est allumee, la piece est lumineuse. La piece est lumineuse, donc la lampe est allumee. »"],
  ['Hugo says, "If I lock the door, we are safe. We are safe, so I must have locked the door."', "Hugo dit : « Si je ferme la porte a cle, nous sommes en securite. Nous sommes en securite, donc j ai forcement ferme la porte a cle. »"],
  ['Lina says, "Some runners are fast. I am fast, so I must be a runner."', "Lina dit : « Certains coureurs sont rapides. Je suis rapide, donc je dois etre coureuse. »"],
  ['Grant says, "If the printer works, the report is ready. The report is ready, so the printer works."', "Grant dit : « Si l imprimante fonctionne, le rapport est pret. Le rapport est pret, donc l imprimante fonctionne. »"],
  ['Zoe says, "Either we order pizza or cook. We cooked, so we must have ordered pizza too."', "Zoe dit : « Soit on commande une pizza soit on cuisine. Nous avons cuisine, donc nous avons aussi commande une pizza. »"],
  ['Milo says, "If the ticket is valid, entry is allowed. Entry is allowed, so the ticket must be valid."', "Milo dit : « Si le billet est valide, l entree est autorisee. L entree est autorisee, donc le billet doit etre valide. »"],
  ['Theo says, "All members have badges. She has a badge, so she is a member."', "Theo dit : « Tous les membres ont un badge. Elle a un badge, donc elle est membre. »"],
  ['Pia says, "If the soup is hot, it is safe to eat. It is safe to eat, so the soup is hot."', "Pia dit : « Si la soupe est chaude, elle est sans danger. Elle est sans danger, donc la soupe est chaude. »"],
  ['Finn says, "If the sky is dark, night is coming. Night is coming, so the sky is dark."', "Finn dit : « Si le ciel est sombre, la nuit arrive. La nuit arrive, donc le ciel est sombre. »"],
  ['Maya says, "All apples are fruit. This fruit is an apple."', "Maya dit : « Toutes les pommes sont des fruits. Ce fruit est une pomme. »"],
  ['Sam says, "If the battery is dead, the phone will not charge. The phone will not charge, so the battery is dead."', "Sam dit : « Si la batterie est vide, le telephone ne se charge pas. Le telephone ne se charge pas, donc la batterie est vide. »"],
  ['Juno says, "If the shoes are wet, it is raining. It is raining, so the shoes are wet."', "Juno dit : « Si les chaussures sont mouillees, il pleut. Il pleut, donc les chaussures sont mouillees. »"],
  ['Iris says, "Some teachers are funny. He is funny, so he is a teacher."', "Iris dit : « Certains professeurs sont drôles. Il est drôle, donc c est un professeur. »"],
  ['Cole says, "If the package arrived, the tracker updated. The tracker updated, so the package arrived."', "Cole dit : « Si le colis est arrive, le suivi s actualise. Le suivi s est actualise, donc le colis est arrive. »"],
  ['Nora says, "All tulips are flowers. This flower is a tulip."', "Nora dit : « Toutes les tulipes sont des fleurs. Cette fleur est une tulipe. »"],
  ['Ari says, "If the music is loud, people dance. People danced, so the music was loud."', "Ari dit : « Si la musique est forte, les gens dansent. Les gens ont danse, donc la musique etait forte. »"],
  ['Rita says, "If the soup is spicy, it needs water. It needs water, so it is spicy."', "Rita dit : « Si la soupe est epicee, elle a besoin d eau. Elle a besoin d eau, donc elle est epicee. »"],
  ['Tia says, "All poets write words. She writes words, so she is a poet."', "Tia dit : « Tous les poetes ecrivent des mots. Elle ecrit des mots, donc c est une poete. »"],
  ['Oli says, "If the class is over, everyone leaves. Everyone left, so the class is over."', "Oli dit : « Si le cours est fini, tout le monde part. Tout le monde est parti, donc le cours est fini. »"],
  ['Lara says, "If the lock is broken, the door opens easily. The door opens easily, so the lock is broken."', "Lara dit : « Si la serrure est cassee, la porte s ouvre facilement. La porte s ouvre facilement, donc la serrure est cassee. »"],
  ['Ben says, "Some runners are tall. She is tall, so she is a runner."', "Ben dit : « Certains coureurs sont grands. Elle est grande, donc c est une coureuse. »"],
  ['Mina says, "If the mail is delivered, the box is full. The box is full, so the mail is delivered."', "Mina dit : « Si le courrier est distribue, la boite est pleine. La boite est pleine, donc le courrier est distribue. »"],
  ['Drew says, "All cups are containers. This container is a cup."', "Drew dit : « Toutes les tasses sont des recipients. Ce recipient est une tasse. »"],
  ['Jade says, "If the meeting starts, the lights are on. The lights are on, so the meeting started."', "Jade dit : « Si la reunion commence, les lumieres sont allumees. Les lumieres sont allumees, donc la reunion a commence. »"],
  ['Owen says, "If the bread is warm, it just came out of the oven. It just came out of the oven, so the bread is warm."', "Owen dit : « Si le pain est chaud, il sort du four. Il sort du four, donc le pain est chaud. »"],
  ['Mila says, "All singers use voices. She uses a voice, so she is a singer."', "Mila dit : « Tous les chanteurs utilisent leur voix. Elle utilise une voix, donc c est une chanteuse. »"],
  ['Evan says, "If the road is icy, drive slowly. I drove slowly, so the road was icy."', "Evan dit : « Si la route est glacee, conduisez lentement. J ai conduit lentement, donc la route etait glacee. »"],
  ['Kira says, "Some bakers are early risers. He is an early riser, so he is a baker."', "Kira dit : « Certains boulangers se levent tot. Il se leve tot, donc c est un boulanger. »"],
  ['Grant says, "If the clock is broken, time looks wrong. Time looks wrong, so the clock is broken."', "Grant dit : « Si l horloge est cassee, l heure parait fausse. L heure parait fausse, donc l horloge est cassee. »"],
  ['Zara says, "All tickets are papers. This paper is a ticket."', "Zara dit : « Tous les billets sont des papiers. Ce papier est un billet. »"],
  ['Parker says, "If the speaker is sincere, they sound calm. They sound calm, so they are sincere."', "Parker dit : « Si l orateur est sincere, il a l air calme. Il a l air calme, donc il est sincere. »"],
  ['Hana says, "If the bag is heavy, it is full. It is full, so it is heavy."', "Hana dit : « Si le sac est lourd, il est plein. Il est plein, donc il est lourd. »"],
  ['Leo says, "All dogs are animals. This animal is a dog."', "Leo dit : « Tous les chiens sont des animaux. Cet animal est un chien. »"],
  ['Maya says, "If the lights flicker, the storm is near. The storm is near, so the lights flicker."', "Maya dit : « Si les lumieres clignotent, l orage est proche. L orage est proche, donc les lumieres clignotent. »"],
  ['Nina says, "Some artists are quiet. She is quiet, so she is an artist."', "Nina dit : « Certains artistes sont calmes. Elle est calme, donc c est une artiste. »"],
  ['Owen says, "If the cafe is busy, the line is long. The line is long, so the cafe must be busy."', "Owen dit : « Si le cafe est rempli, la file est longue. La file est longue, donc le cafe doit etre rempli. »"],
  ['Priya says, "All pens are tools. This tool is a pen."', "Priya dit : « Tous les stylos sont des outils. Cet outil est un stylo. »"],
  ['Ben says, "If the app is updated, it works well. It works well, so it must be updated."', "Ben dit : « Si l application est mise a jour, elle marche bien. Elle marche bien, donc elle doit etre mise a jour. »"],
  ['Tara says, "Some singers are loud. He is loud, so he is a singer."', "Tara dit : « Certains chanteurs sont bruyants. Il est bruyant, donc c est un chanteur. »"],
  ['Kai says, "If the light is on, the room is occupied. The room is occupied, so the light is on."', "Kai dit : « Si la lumiere est allumee, la piece est occupee. La piece est occupee, donc la lumiere est allumee. »"],
  ['Jules says, "All buses are vehicles. This vehicle is a bus."', "Jules dit : « Tous les bus sont des vehicules. Ce vehicule est un bus. »"],
  ['Ava says, "If the soup is salty, it needs water. It needs water, so it is salty."', "Ava dit : « Si la soupe est salee, elle a besoin d eau. Elle a besoin d eau, donc elle est salee. »"],
  ['Mina says, "Some teachers are funny. She is funny, so she is a teacher."', "Mina dit : « Certains professeurs sont drôles. Elle est drôle, donc c est une professeure. »"],
  ['Theo says, "If the alarm rings, it is morning. It is morning, so the alarm rings."', "Theo dit : « Si le reveil sonne, c est le matin. C est le matin, donc le reveil sonne. »"],
  ['Rina says, "If the jar is open, the lid is off. The lid is off, so the jar is open."', "Rina dit : « Si le bocal est ouvert, le couvercle est enleve. Le couvercle est enleve, donc le bocal est ouvert. »"],
];

const OPTIONS_EN = ['Invalid Syllogism', 'Affirming the Consequent', 'Denying the Antecedent', 'False Dilemma'];
const OPTIONS_FR = ['Syllogisme invalide', 'Affirmation du conséquent', 'Négation de l antécédent', 'Faux dilemme'];

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
      id: 36401 + i,
      level: 5,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Syllogisme invalide' : 'Invalid Syllogism',
      difficulty: i < 43 ? 1 : i < 50 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? 'La conclusion ne suit pas logiquement des premisses.'
        : 'The conclusion does not logically follow from the premises.',
      detailedExplanationBeginner: fr
        ? "Si la conclusion ne suit pas, le raisonnement est invalide."
        : 'If the conclusion does not follow, the reasoning is invalid.',
      detailedExplanationIntermediate: fr
        ? "Un syllogisme invalide ressemble a une deduction mais manque le lien logique necessaire entre les premisses et la conclusion."
        : 'An invalid syllogism looks like a deduction but lacks the necessary logical link between premises and conclusion.',
      detailedExplanationExpert: fr
        ? "Le probleme n est pas seulement une mauvaise conclusion, mais une forme inferentielle qui autorise la conclusion sans garantie deductive."
        : 'The problem is not just a bad conclusion, but an inferential form that permits the conclusion without deductive guarantee.',
      questionFormat: 'standard',
    };
  });
}

export const INVALID_SYLLOGISM_EXPANSION_EN: Question[] = make();
export const INVALID_SYLLOGISM_EXPANSION_FR: Question[] = make(true);
