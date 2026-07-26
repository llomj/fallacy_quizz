import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya gets praise for staying quiet in a meeting, and the team says her silence always proves she is wise.', 'Maya reçoit des compliments pour etre restée silencieuse en réunion, et l equipe dit que son silence prouve toujours qu elle est sage.'],
  ['Leo avoids speaking up at lunch, and his friend calls that "self-control" instead of just being too shy to join in.', 'Leo evite de prendre la parole au déjeuner, et son ami appelle cela de « la maîtrise de soi » au lieu de simplement etre trop timide pour participer.'],
  ['Priya says the best way to win respect is to never ask for help, even when she is overloaded.', 'Priya dit que la meilleure façon de gagner du respect est de ne jamais demander d aide, meme quand elle est débordée.'],
  ['Omar claims holding back every opinion makes him more disciplined, even when the group needs his input.', 'Omar prétend que retenir chaque opinion le rend plus discipliné, meme quand le groupe a besoin de son avis.'],
  ['Rina refuses to celebrate a success because she thinks enjoying it would be "undignified."', 'Rina refuse de feter un succes parce qu elle pense que l apprécier serait « indigne ».'],
  ['Ben never takes a break at work and calls that restraint, not exhaustion.', 'Ben ne prend jamais de pause au travail et appelle cela de la retenue, pas de l épuisement.'],
  ['Zoe thinks never complaining is the same as being mature, even when a problem needs fixing.', 'Zoé pense que ne jamais se plaindre revient à etre mature, meme quand un probleme doit etre resolu.'],
  ['Kai says saying less is always better because it keeps people guessing.', 'Kai dit que parler moins est toujours mieux parce que cela garde les gens dans le doute.'],
  ['Nora avoids buying anything fun for months and calls it discipline rather than fear of spending.', 'Nora évite d acheter quoi que ce soit d amusant pendant des mois et appelle cela de la discipline plutot que la peur de dépenser.'],
  ['Eli says the strongest person in the room is the one who never reacts, even when the room is right.', 'Eli dit que la personne la plus forte dans la piece est celle qui ne réagit jamais, meme quand la salle a raison.'],
  ['Lina never gives compliments and says that makes her more honest, not cold.', 'Lina ne fait jamais de compliments et dit que cela la rend plus honnete, pas froide.'],
  ['Grant says skipping breakfast is a sign of control, not just a busy morning.', 'Grant dit que sauter le petit-déjeuner est un signe de contrôle, pas juste une matinée chargée.'],
  ['Tia says not replying to texts proves she has healthier boundaries.', 'Tia dit que ne pas répondre aux messages prouve qu elle a des limites plus saines.'],
  ['Noah never orders dessert and says that means he is more serious than everyone else.', 'Noah ne commande jamais de dessert et dit que cela signifie qu il est plus sérieux que les autres.'],
  ['Mia says sitting through discomfort without moving is a virtue by itself.', 'Mia dit que supporter l inconfort sans bouger est une vertu en soi.'],
  ['Jules claims that never raising his voice makes his opinion automatically more thoughtful.', 'Jules prétend que ne jamais élever la voix rend automatiquement son opinion plus réfléchie.'],
  ['Ava says ignoring the group chat until midnight is a sign of self-respect.', 'Ava dit qu ignorer le groupe jusqu a minuit est un signe de respect de soi.'],
  ['Finn says the person who refuses every shortcut is always the most principled.', 'Finn dit que la personne qui refuse tout raccourci est toujours la plus principielle.'],
  ['Mina says never asking follow-up questions proves she is calm and above drama.', 'Mina dit que ne jamais poser de questions de suivi prouve qu elle est calme et au-dessus du drame.'],
  ['Theo says the best way to look confident is to never admit uncertainty.', 'Théo dit que la meilleure façon d avoir l air confiant est de ne jamais admettre l incertitude.'],
  ['Juno says the most respectable person at dinner is the one who barely eats.', 'Juno dit que la personne la plus respectable au dîner est celle qui mange à peine.'],
  ['Iris says holding back every emotion is healthier than explaining what bothers you.', 'Iris dit que retenir chaque émotion est plus sain que d expliquer ce qui dérange.'],
  ['Cole says the smartest employee is the one who never asks for clarification.', 'Cole dit que l employé le plus intelligent est celui qui ne demande jamais de précisions.'],
  ['Riley says not defending yourself when accused is the most honorable choice.', 'Riley dit que ne pas se défendre lorsqu on vous accuse est le choix le plus honorable.'],
  ['Pia says never spending on a nicer lunch means she is more disciplined than her coworkers.', 'Pia dit que ne jamais dépenser pour un meilleur déjeuner signifie qu elle est plus disciplinée que ses collègues.'],
  ['Hugo says the best way to be taken seriously is to never laugh in public.', 'Hugo dit que la meilleure façon d etre pris au sérieux est de ne jamais rire en public.'],
  ['Sam says the strongest person is the one who never shows excitement.', 'Sam dit que la personne la plus forte est celle qui ne montre jamais d enthousiasme.'],
  ['Jade says refusing all help is what makes someone independent.', 'Jade dit que refuser toute aide est ce qui rend quelqu un indépendant.'],
  ['Owen says the calmest person is the one who never corrects misinformation.', 'Owen dit que la personne la plus calme est celle qui ne corrige jamais les fausses informations.'],
  ['Lea says not reacting to bad service is proof of superior character.', 'Léa dit que ne pas réagir à un mauvais service est la preuve d un caractère supérieur.'],
  ['Maya says the class clown is less mature because he actually enjoys things.', 'Maya dit que le clown de la classe est moins mature parce qu il prend réellement du plaisir.'],
  ['Ben says never taking the last cookie is a moral achievement.', 'Ben dit que ne jamais prendre le dernier biscuit est un accomplissement moral.'],
  ['Ava says staying late without complaint proves she is built differently.', 'Ava dit que rester tard sans se plaindre prouve qu elle est faite autrement.'],
  ['Omar says the best way to keep status is to never disagree with a superior.', 'Omar dit que la meilleure façon de garder son statut est de ne jamais etre en désaccord avec un supérieur.'],
  ['Nina says refusing to dance shows more self-control than just not liking dancing.', 'Nina dit que refuser de danser montre plus de maîtrise de soi que le simple fait de ne pas aimer danser.'],
  ['Eli says the person who never answers criticism is always the most composed.', 'Eli dit que la personne qui ne répond jamais aux critiques est toujours la plus posée.'],
  ['Lina says the healthiest habit is to bottle everything up and keep smiling.', 'Lina dit que l habitude la plus saine est de tout garder en soi et de continuer a sourire.'],
  ['Grant says turning down all invitations means you are protecting your peace.', 'Grant dit que refuser toutes les invitations signifie que vous protégez votre paix.'],
  ['Tia says a good leader never shows frustration, even when things go wrong.', 'Tia dit qu un bon leader ne montre jamais de frustration, meme quand les choses tournent mal.'],
  ['Finn says never buying anything on impulse makes him morally superior.', 'Finn dit que ne jamais acheter quoi que ce soit sur un coup de tete le rend moralement supérieur.'],
  ['Mina says the person who never asks for directions is the most confident.', 'Mina dit que la personne qui ne demande jamais son chemin est la plus confiante.'],
  ['Theo says not reacting to praise is a stronger sign of self-discipline than just being modest.', 'Théo dit que ne pas réagir aux compliments est un signe de discipline plus fort que la simple modestie.'],
  ['Juno says the safest choice is to never trust anyone with your plans.', 'Juno dit que le choix le plus sûr est de ne jamais confier vos projets à personne.'],
  ['Iris says not speaking when upset is always better than explaining the issue.', 'Iris dit que ne pas parler quand on est contrarié est toujours mieux qu expliquer le problème.'],
  ['Cole says the person who never asks for a second opinion is more decisive.', 'Cole dit que la personne qui ne demande jamais de deuxième avis est plus décidée.'],
  ['Riley says avoiding all jokes in a serious chat proves his maturity.', 'Riley dit qu éviter toutes les blagues dans une discussion sérieuse prouve sa maturité.'],
  ['Pia says the most respectful thing is to never challenge a bad rule.', 'Pia dit que la chose la plus respectueuse est de ne jamais contester une mauvaise règle.'],
  ['Hugo says the person who never needs reassurance must be the most secure.', 'Hugo dit que la personne qui n a jamais besoin d etre rassurée doit etre la plus sûre d elle.'],
  ['Sam says holding everything in is always a stronger choice than speaking honestly.', 'Sam dit que tout garder en soi est toujours un choix plus fort que parler honnêtement.'],
  ['Jade says never asking for a raise is a sign of wisdom, not fear.', 'Jade dit que ne jamais demander d augmentation est un signe de sagesse, pas de peur.'],
  ['Maya says the quietest person in the room is the one everyone should trust most.', 'Maya dit que la personne la plus silencieuse dans la salle est celle en qui tout le monde devrait le plus faire confiance.'],
  ["Ben says refusing dessert at every birthday party proves he has better self-control than everyone else.", "Ben dit que refuser le dessert à chaque anniversaire prouve qu il a une meilleure maîtrise de soi que tout le monde."],
  ["Lina says never speaking during family arguments makes her the most mature person there.", "Lina dit que ne jamais parler pendant les disputes familiales fait d elle la personne la plus mature de la pièce."],
  ["Omar says always holding back tears in public means he is emotionally stronger.", "Omar dit que retenir toujours ses larmes en public signifie qu il est émotionnellement plus fort."],
  ["Tia says she is more disciplined because she never buys snacks at the gas station.", "Tia dit qu elle est plus disciplinée parce qu elle n achete jamais de snacks à la station-service."],
  ["Finn says the person who never laughs at jokes is automatically more serious and reliable.", "Finn dit que la personne qui ne rit jamais aux blagues est automatiquement plus sérieuse et plus fiable."],
  ["Ava says never joining in on office gossip is proof she is wiser than the rest of the team.", "Ava dit que ne jamais participer aux potins de bureau prouve qu elle est plus sage que le reste de l equipe."],
  ["Jules says not replying to texts right away shows excellent self-respect.", "Jules dit que ne pas répondre aux messages tout de suite montre un excellent respect de soi."],
  ["Nora says the best driver is the one who never complains about traffic.", "Nora dit que le meilleur conducteur est celui qui ne se plaint jamais du trafic."],
  ["Mina says skipping lunch every day makes her more committed than her coworkers.", "Mina dit que sauter le déjeuner tous les jours la rend plus engagée que ses collègues."],
  ["Grant says never asking for clarification in class proves he is the most independent student.", "Grant dit que ne jamais demander de précisions en classe prouve qu il est l élève le plus indépendant."],
  ["Rina says the calmest person is the one who never reacts to bad news.", "Rina dit que la personne la plus calme est celle qui ne réagit jamais aux mauvaises nouvelles."],
  ["Eli says holding back every opinion in a meeting is the same as being thoughtful.", "Eli dit que retenir chaque opinion en réunion revient à être réfléchi."],
  ["Pia says refusing all shortcuts makes her more principled than everyone else.", "Pia dit que refuser tous les raccourcis la rend plus principielle que les autres."],
  ["Theo says the best coworker is the one who never complains even when overloaded.", "Théo dit que le meilleur collègue est celui qui ne se plaint jamais même quand il est débordé."],
  ["Maya says not celebrating her own wins keeps her humble in a superior way.", "Maya dit que ne pas célébrer ses propres victoires la garde humble d une manière supérieure."],
  ["Cole says the person who never asks for help at home is the most responsible.", "Cole dit que la personne qui ne demande jamais d aide à la maison est la plus responsable."],
  ["Hugo says staying silent when something is unfair is a sign of discipline.", "Hugo dit que rester silencieux lorsqu une chose est injuste est un signe de discipline."],
  ["Zoe says the person who never relaxes is clearly more serious about life.", "Zoé dit que la personne qui ne se détend jamais est clairement plus sérieuse face à la vie."],
  ["Lara says turning down every invitation makes her more focused than her friends.", "Lara dit que refuser toutes les invitations la rend plus concentrée que ses amis."],
  ["Kai says the most respectable guest is the one who barely eats at the table.", "Kai dit que l invité le plus respectable est celui qui mange à peine à table."],
  ["Juno says never correcting a rude person is a better sign of class than speaking up.", "Juno dit que ne jamais corriger une personne impolie est un meilleur signe de classe que de parler."],
  ["Sam says the person who never spends on comfort is more disciplined than everyone else.", "Sam dit que la personne qui ne dépense jamais pour son confort est plus disciplinée que tout le monde."],
  ["Lea says ignoring all compliments makes her look more confident.", "Lea dit qu ignorer tous les compliments lui donne plus d assurance."],
  ["Owen says never taking a sick day proves he is tougher than the rest of the office.", "Owen dit que ne jamais prendre de jour de maladie prouve qu il est plus dur que le reste du bureau."],
  ["Iris says the most trustworthy person is the one who never shows excitement.", "Iris dit que la personne la plus digne de confiance est celle qui ne montre jamais d excitation."],
  ["Drew says never eating the free cake at work is a mark of strong character.", "Drew dit que ne jamais manger le gâteau gratuit au travail est une marque de fort caractère."],
  ["Milo says the person who never argues online must be the wisest commenter.", "Milo dit que la personne qui ne se dispute jamais en ligne doit être le commentateur le plus sage."],
  ["Ari says staying quiet about a bad schedule is a better sign of maturity than speaking up.", "Ari dit que se taire à propos d un mauvais planning est un meilleur signe de maturité que de parler."],
  ["Riley says never spending money on hobbies is what real self-control looks like.", "Riley dit que ne jamais dépenser d argent pour des loisirs est ce à quoi ressemble la vraie maîtrise de soi."],
  ["Mia says not joining the celebration proves she is above childish fun.", "Mia dit que ne pas participer à la fête prouve qu elle est au-dessus des amusements enfantins."],
  ["Ben says the strongest roommate is the one who never says when a chore bothers them.", "Ben dit que le colocataire le plus fort est celui qui ne dit jamais quand une tâche le gêne."],
  ["Nina says the best student is the one who never questions a bad grade.", "Nina dit que le meilleur élève est celui qui ne remet jamais en question une mauvaise note."],
  ["Grant says refusing every extra dessert order is evidence of elite discipline.", "Grant dit que refuser chaque dessert supplémentaire est une preuve de discipline d élite."],
  ["Tia says the person who never raises a concern at work is automatically the most professional.", "Tia dit que la personne qui ne soulève jamais de problème au travail est automatiquement la plus professionnelle."],
  ["Finn says never showing disappointment is a smarter way to live than expressing it.", "Finn dit que ne jamais montrer de déception est une façon de vivre plus intelligente que de l exprimer."],
  ["Jade says the person who never takes a day off is obviously the most committed.", "Jade dit que la personne qui ne prend jamais de congé est évidemment la plus engagée."],
  ["Lina says keeping every problem to herself makes her a better friend.", "Lina dit que garder chaque problème pour elle fait d elle une meilleure amie."],
  ["Omar says not asking for seconds at dinner is proof of admirable restraint.", "Omar dit que ne pas demander une deuxième portion au dîner est une preuve de retenue admirable."],
  ["Pia says the most respectable parent is the one who never admits feeling tired.", "Pia dit que le parent le plus respectable est celui qui n admet jamais être fatigué."],
  ["Hugo says never reacting to bad customer service is the polite thing to do.", "Hugo dit que ne jamais réagir à un mauvais service client est la chose polie à faire."],
  ["Mina says the person who never buys anything on sale is more decisive.", "Mina dit que la personne qui n achète jamais rien en promotion est plus décidée."],
  ["Theo says never taking credit for your own work keeps you more humble than others.", "Théo dit que ne jamais s attribuer le mérite de son travail vous garde plus humble que les autres."],
  ["Juno says the best friend is the one who never asks for attention.", "Juno dit que le meilleur ami est celui qui ne demande jamais d attention."],
  ["Cole says the person who never mentions being stressed is the most composed.", "Cole dit que la personne qui ne mentionne jamais être stressée est la plus posée."],
  ["Rina says refusing to rest when tired is a better sign of strength.", "Rina dit que refuser de se reposer quand on est fatigué est un meilleur signe de force."],
  ["Ava says never joining silly trends online makes her more mature than her peers.", "Ava dit que ne jamais participer aux tendances ridicules en ligne la rend plus mature que ses pairs."],
  ["Eli says the person who never asks for a break is the toughest person in the room.", "Eli dit que la personne qui ne demande jamais de pause est la plus dure dans la pièce."],
  ["Zoe says staying silent about unfair prices is better than making a scene.", "Zoé dit que rester silencieuse à propos de prix injustes est mieux que de faire une scène."],
  ["Noah says the person who never indulges in comfort food has the strongest will.", "Noah dit que la personne qui ne cède jamais à la nourriture réconfortante a la volonté la plus forte."],
];

const OPTIONS_EN = ['Restraint Bias', 'Status Quo Bias', 'Self-Control Bias', 'Social Desirability Bias'];
const OPTIONS_FR = ['Biais de retenue', 'Biais du statu quo', 'Biais de maîtrise de soi', 'Biais de désirabilité sociale'];

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

function createQuestions(language: 'en' | 'fr'): Question[] {
  return SCENARIOS.map(([english, french], index) => {
    const correctIndex = index % 4;
    const isFrench = language === 'fr';
    return {
      id: 39801 + index,
      level: 5,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? 'Biais de retenue' : 'Restraint Bias',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'On confond le fait de se retenir avec une supériorité morale ou une preuve de sagesse.'
        : 'Holding back is mistaken for moral superiority or proof of wisdom.',
      detailedExplanationBeginner: isFrench
        ? "Se retenir n'est pas toujours une vertu."
        : 'Holding back is not always a virtue.',
      detailedExplanationIntermediate: isFrench
        ? 'Le biais de retenue apparaît quand on surévalue systématiquement le fait de se contenir, de ne pas montrer d émotion ou de ne pas demander quelque chose, comme si cela garantissait de meilleures décisions.'
        : 'Restraint bias appears when we systematically overvalue self-restraint, emotional suppression, or not asking for something, as if those choices guaranteed better judgment.',
      detailedExplanationExpert: isFrench
        ? "Ce biais glisse d une qualité contextuelle vers une règle générale. Se retenir peut être utile dans certains contextes, mais il devient trompeur lorsqu on le traite comme une preuve automatique de maturité, de respectabilité ou de vérité, sans regarder le coût réel, la situation, ni les besoins ignorés."
        : 'This bias turns a context-dependent quality into a general rule. Restraint can be useful in some situations, but it becomes misleading when treated as automatic proof of maturity, respectability, or truth without looking at real costs, the situation, or ignored needs.',
      questionFormat: 'standard',
    };
  });
}

export const RESTRAINT_BIAS_EXPANSION_EN: Question[] = createQuestions('en');
export const RESTRAINT_BIAS_EXPANSION_FR: Question[] = createQuestions('fr');
