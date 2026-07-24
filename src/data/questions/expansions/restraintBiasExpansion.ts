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
