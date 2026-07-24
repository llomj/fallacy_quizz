import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Mia assumes everyone wants the same quiet weekend she wants, so she plans for silence even though her friends want to go out.', 'Mia suppose que tout le monde veut le meme week-end calme qu elle, alors elle prévoit du silence meme si ses amis veulent sortir.'],
  ['Leo says his coworkers must prefer cold coffee because he does, and he fills the office fridge with iced drinks.', 'Leo dit que ses collegues doivent preferer le cafe froid parce que lui l aime comme ca, et il remplit le frigo du bureau de boissons glacees.'],
  ['Priya picks a spicy lunch for the group chat meetup because she thinks everyone secretly likes heat the way she does.', 'Priya choisit un déjeuner épicé pour la rencontre du groupe parce qu elle pense que tout le monde aime le piquant comme elle.'],
  ['Omar buys the same phone case for his sister because he assumes she wants the exact color he prefers.', 'Omar achete la meme coque de telephone pour sa soeur parce qu il suppose qu elle veut exactement la couleur qu il prefere.'],
  ['Nina arranges a long family dinner and is surprised when others want a shorter meal.', 'Nina organise un long dîner de famille et est surprise quand les autres veulent un repas plus court.'],
  ['Eli thinks his roommate is fine with loud game nights because he never minds noise himself.', 'Eli pense que son colocataire accepte les soirees jeux bruyantes parce que lui-meme ne craint jamais le bruit.'],
  ['Ava sends a casual text and expects the client to read it as warm and friendly, just like she would.', 'Ava envoie un message décontracté et s attend à ce que le client le lise comme chaleureux et amical, comme elle le ferait.'],
  ['Theo chooses a minimalist birthday cake because he assumes everyone values simplicity more than decoration.', 'Théo choisit un gateau d anniversaire minimaliste parce qu il suppose que tout le monde prefere la simplicite a la décoration.'],
  ['Juno books a very early train and assumes her friend will be happy to wake up that early too.', 'Juno reserve un train tres matinal et suppose que son amie sera heureuse de se lever si tot aussi.'],
  ['Mia says the neighborhood should stay open late because she likes stores that never seem to close.', 'Mia dit que le quartier devrait rester ouvert tard parce qu elle aime les magasins qui ne ferment jamais vraiment.'],
  ['Finn sets the thermostat to cool and acts surprised when his family wants it warmer.', 'Finn regle le thermostat sur frais et s etonne ensuite que sa famille le veuille plus chaud.'],
  ['Lea chooses a long hike because she assumes everyone gets energy from effort the way she does.', 'Léa choisit une longue randonnée parce qu elle suppose que tout le monde trouve de l énergie dans l effort comme elle.'],
  ['Hugo says the app should use dark mode by default because he finds bright screens annoying.', 'Hugo dit que l application devrait utiliser le mode sombre par défaut parce qu il trouve les ecrans clairs agacants.'],
  ['Riley plans a tiny wedding snack table because he thinks most guests care more about conversation than food.', 'Riley prévoit une petite table de snacks pour le mariage parce qu il pense que la plupart des invités se soucient plus de discuter que de manger.'],
  ['Pia says her friend will be fine with last-minute changes because she herself enjoys improvising.', 'Pia dit que son amie sera d accord avec les changements de derniere minute parce qu elle aime elle-meme improviser.'],
  ['Ben assumes the whole team wants more slides in the presentation because he likes detailed decks.', 'Ben suppose que toute l equipe veut plus de diapositives dans la presentation parce qu il aime les dossiers detailles.'],
  ['Nora thinks the houseguest will enjoy the same quiet music she does after dinner.', 'Nora pense que l invite de la maison aimera la meme musique calme qu elle apres le dîner.'],
  ['Cole buys a huge water bottle for everyone and says nobody minds carrying extra weight.', 'Cole achete une enorme bouteille d eau pour tout le monde et dit que personne ne craint de porter du poids en plus.'],
  ['Jade assumes her classmate wants the same surprise party she would want for herself.', 'Jade suppose que sa camarade veut la meme fete surprise qu elle aimerait pour elle-meme.'],
  ['Omar picks a long, technical podcast because he thinks his driver will enjoy the same thing.', 'Omar choisit un podcast long et technique parce qu il pense que son conducteur aimera la meme chose.'],
  ['Tia chooses a plain lunch menu and assumes the whole office wants the same kind of meal.', 'Tia choisit un menu simple pour le déjeuner et suppose que tout le bureau veut le meme type de repas.'],
  ['Grant says the group should save money on decorations because he personally never notices them.', 'Grant dit que le groupe devrait economiser sur les decorations parce qu il ne les remarque personnellement jamais.'],
  ['Iris buys a puzzle game for her cousin and assumes boredom is impossible because she enjoys puzzles.', 'Iris achete un jeu de puzzle pour son cousin et suppose que l ennui est impossible parce qu elle aime les puzzles.'],
  ['Sam expects everyone to be okay with a work message at 9 p.m. because late messages do not bother him.', 'Sam s attend a ce que tout le monde accepte un message de travail a 21 h parce que les messages tardifs ne le derangent pas.'],
  ['Mina thinks her friend will love a quiet museum date because that is her favorite kind of outing.', 'Mina pense que son amie adorera un rendez-vous au musee tranquille parce que c est son type de sortie prefere.'],
  ['Jules orders the same dessert for everyone and says nobody really wants anything different.', 'Jules commande le meme dessert pour tout le monde et dit que personne ne veut vraiment quelque chose de different.'],
  ['Lina expects the whole office to like a standing meeting because she feels more alert while standing.', 'Lina s attend a ce que tout le bureau aime une reunion debout parce qu elle se sent plus alerte en restant debout.'],
  ['Zoe assumes every parent wants the same bedtime schedule she uses at home.', 'Zoé suppose que tous les parents veulent le meme horaire de coucher qu elle utilise a la maison.'],
  ['Kai says the neighborhood should have louder music at the block party because he likes a big crowd vibe.', 'Kai dit que le quartier devrait avoir une musique plus forte a la fete de quartier parce qu il aime l ambiance de grosse foule.'],
  ['Maya thinks her friend will prefer the same expensive olive oil because she notices the difference right away.', 'Maya pense que son amie preferera la meme huile d olive cher parce qu elle remarque la difference tout de suite.'],
  ['Owen says the class should use his preferred note-taking app because he is convinced it is the easiest for everyone.', 'Owen dit que la classe devrait utiliser son application de prise de notes preferee parce qu il est persuade qu elle est la plus simple pour tout le monde.'],
  ['Ava picks the same gift style for every birthday because she assumes everyone likes practical things.', 'Ava choisit le meme style de cadeau pour tous les anniversaires parce qu elle suppose que tout le monde aime les choses pratiques.'],
  ['Noah orders the same level of coffee strength for the group and ignores the people who like it mild.', 'Noah commande le meme niveau de force du cafe pour le groupe et ignore ceux qui l aiment plus doux.'],
  ['Rina expects her teammate to love a strict schedule because she herself feels calmer with one.', 'Rina s attend a ce que son coequipier aime un horaire strict parce qu elle se sent elle-meme plus calme avec un cadre.'],
  ['Eli assumes the whole family wants to skip dessert because he personally is not into sweets.', 'Eli suppose que toute la famille veut sauter le dessert parce que lui n aime pas vraiment les sucreries.'],
  ['Priya says everyone must appreciate a silent car ride because she enjoys quiet trips.', 'Priya dit que tout le monde doit apprécier un trajet silencieux en voiture parce qu elle aime les voyages calmes.'],
  ['Theo plans a giant screen at home and thinks every guest wants movie night the way he does.', 'Théo prévoit un ecran geant a la maison et pense que chaque invite veut une soirée film comme lui.'],
  ['Juno picks a very formal tone in the group message because she prefers serious chats.', 'Juno choisit un ton tres formel dans le message de groupe parce qu elle prefere les discussions serieuses.'],
  ['Mia assumes her friend wants to spend the whole afternoon shopping because she enjoys browsing stores.', 'Mia suppose que son amie veut passer tout l apres-midi a faire les magasins parce qu elle aime flaner.'],
  ['Finn says everyone should want window seats on the bus because he likes looking outside.', 'Finn dit que tout le monde devrait vouloir une place a la fenetre dans le bus parce qu il aime regarder dehors.'],
  ['Lea thinks a big birthday cake is the obvious choice because she always wants leftovers.', 'Léa pense qu un gros gateau d anniversaire est le choix évident parce qu elle veut toujours des restes.'],
  ['Hugo assumes his neighbor will prefer the same fast internet speed he pays extra for.', 'Hugo suppose que son voisin preferera la meme vitesse internet rapide pour laquelle il paie un supplement.'],
  ['Pia says the team should all use her favorite planner because she feels lost without it.', 'Pia dit que l équipe devrait tous utiliser son agenda prefere parce qu elle se sent perdue sans lui.'],
  ['Grant plans a long table quiz and assumes every guest will enjoy competition.', 'Grant prepare un long quiz de table et suppose que chaque invité aimera la competition.'],
  ['Iris thinks the whole friend group wants a quiet cabin weekend because she would love that.', 'Iris pense que tout le groupe d amis veut un week-end tranquille en cabane parce qu elle adorerait ca.'],
  ['Cole says everyone should like the same small local café because it is his favorite place.', 'Cole dit que tout le monde devrait aimer le meme petit cafe local parce que c est son endroit prefere.'],
  ['Sam buys identical notebooks for the office and assumes everybody enjoys plain black covers.', 'Sam achete des carnets identiques pour le bureau et suppose que tout le monde aime les couvertures noires simples.'],
  ['Mina expects the club to prefer her exact board game because she thinks all fun should feel like her idea of fun.', 'Mina s attend a ce que le club prefere son jeu de societe exact parce qu elle pense que tout divertissement devrait ressembler a sa version du fun.'],
  ['Omar says the class should keep the lights dim because bright rooms bother him.', 'Omar dit que la classe devrait garder les lumières tamisées parce que les pieces lumineuses le derangent.'],
  ['Nora plans a slow dinner and assumes everyone values long conversation over quick food.', 'Nora prévoit un dîner lent et suppose que tout le monde valorise la longue conversation plus que le repas rapide.'],
  ['Jade picks the same phone brightness she uses and assumes others want the same glow.', 'Jade choisit la meme luminosité de téléphone qu elle utilise et suppose que les autres veulent la meme clarté.'],
];

const OPTIONS_EN = ['Projection Bias', 'False Consensus Effect', 'Egocentric Bias', 'Present Bias'];
const OPTIONS_FR = ['Biais de projection', 'Effet de faux consensus', 'Biais égocentrique', 'Biais du présent'];

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
    const isFrench = language === 'fr';
    const correctIndex = index % 4;
    return {
      id: 44301 + index,
      level: 5,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? 'Biais de projection' : 'Projection Bias',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? "La personne suppose que les autres pensent ou veulent la meme chose qu elle."
        : 'The person assumes other people think or want the same thing they do.',
      detailedExplanationBeginner: isFrench
        ? "On projette ses propres préférences sur les autres."
        : 'You project your own preferences onto other people.',
      detailedExplanationIntermediate: isFrench
        ? "Le biais de projection fait croire que ses goûts, ses peurs ou ses habitudes sont plus partagés qu ils ne le sont vraiment."
        : 'Projection bias makes someone think their tastes, fears, or habits are more widely shared than they really are.',
      detailedExplanationExpert: isFrench
        ? "Ce biais apparaît quand on prend ses propres états internes comme référence par défaut pour juger les autres. Il peut aider à anticiper des besoins proches des siens, mais il devient une erreur quand il efface les differences de temperament, de budget, de confort ou de contexte."
        : 'This bias appears when a person uses their own internal state as the default reference for judging others. It can help anticipate needs similar to one’s own, but it becomes an error when it erases differences in temperament, budget, comfort, or context.',
      questionFormat: 'standard',
    };
  });
}

export const PROJECTION_BIAS_EXPANSION_EN: Question[] = createQuestions('en');
export const PROJECTION_BIAS_EXPANSION_FR: Question[] = createQuestions('fr');
