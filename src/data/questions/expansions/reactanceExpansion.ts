import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya is told she must use the new app, so she deletes it just to prove she still has a choice.', 'Maya se fait dire qu elle doit utiliser la nouvelle application, alors elle la supprime juste pour prouver qu elle a encore le choix.'],
  ['Leo is asked to wear the event badge at the door, and he refuses because he hates being ordered around.', 'Leo doit porter le badge de l evenement à l entree, et il refuse parce qu il deteste recevoir des ordres.'],
  ['Priya is told not to open the snack cabinet, so she opens it immediately out of spite.', 'Priya se fait dire de ne pas ouvrir le placard à snacks, alors elle l ouvre aussitot par defiance.'],
  ['Omar hears a salesperson say the offer is only for serious people, and he walks away on principle.', 'Omar entend un vendeur dire que l offre est reservee aux personnes serieuses, et il s en va par principe.'],
  ['Rina is told to calm down during an argument, and that makes her even less willing to listen.', 'Rina se fait dire de se calmer pendant une dispute, et cela la rend encore moins prete à ecouter.'],
  ['Ben is told to finish the survey before leaving, so he skips it entirely.', 'Ben doit finir le sondage avant de partir, alors il le saute completement.'],
  ['Zoe is warned that her friend will choose the "wrong" cafe unless Zoe picks for her, so Zoe chooses the opposite place.', 'Zoé est avertie que son amie choisira le "mauvais" cafe à moins que Zoé ne decide pour elle, alors Zoé choisit l endroit inverse.'],
  ['Kai is told that the new rule is non-negotiable, and he becomes less interested in following it.', 'Kai se fait dire que la nouvelle regle n est pas negociable, et il devient moins interesse à la suivre.'],
  ['Nora is pressured to buy the bundle now, so she intentionally waits until later.', 'Nora est poussee à acheter le lot maintenant, alors elle attend exprès.'],
  ['Eli is told he cannot question the speaker, and that is exactly when he starts questioning everything.', 'Eli se fait dire qu il ne peut pas questionner l orateur, et c est exactement là qu il commence à tout questionner.'],
  ['Lina is asked to join the club "or else miss out," so she declines on the spot.', 'Lina est invitee à rejoindre le club "sinon elle ratera tout", alors elle refuse sur-le-champ.'],
  ['Grant is told to stop using his own method, and he keeps it just to show he can.', 'Grant se fait dire d arreter sa propre methode, et il la garde juste pour montrer qu il peut le faire.'],
  ['Tia is told the menu choice is mandatory, so she orders the item she liked least.', 'Tia se fait dire que le choix du menu est obligatoire, alors elle commande l article qu elle aimait le moins.'],
  ['Noah is told that reasonable people would accept the deal immediately, and he delays just to avoid being pushed.', 'Noah se fait dire que les personnes raisonnables accepteraient l offre immediatement, et il attend juste pour eviter d être pousse.'],
  ['Mia is told to sit in a certain seat, and she moves to a different one right away.', 'Mia se fait dire de s asseoir à une certaine place, alors elle va aussitot à une autre.'],
  ['Jules is pressured to post the ad, but the pressure makes him want to do the opposite.', 'Jules est pousse à publier la pub, mais la pression lui donne envie de faire l inverse.'],
  ['Ava is told to download the tracker, and she refuses because she does not like being watched.', 'Ava se fait dire de telecharger le traceur, et elle refuse parce qu elle n aime pas etre surveillee.'],
  ['Finn is warned that "everyone serious" uses the premium feature, so he avoids it out of stubbornness.', 'Finn est prevenu que "tous les gens serieux" utilisent la fonction premium, alors il l evite par entetement.'],
  ['Mina is told to back the team captain, and she supports someone else just to keep her independence.', 'Mina se fait dire de soutenir le capitaine de l equipe, alors elle appuie quelqu un d autre juste pour garder son independance.'],
  ['Theo is told that ignoring the reminder is irresponsible, and he ignores it anyway because the tone feels pushy.', 'Theo se fait dire qu ignorer le rappel est irresponsable, et il l ignore quand meme parce que le ton semble insistant.'],
  ['Juno is asked to sign the petition by someone who is bossy, so she says no even though she agrees with the cause.', 'Juno est invitee à signer la petition par quelqu un de dominateur, alors elle dit non meme si elle est d accord avec la cause.'],
  ['Iris is told that only ignorant people refuse the upgrade, and she decides not to buy it.', 'Iris se fait dire que seuls les ignorants refusent la mise à niveau, et elle decide de ne pas l acheter.'],
  ['Cole is ordered to stop using his old notebook, so he keeps it out of spite.', 'Cole se fait ordonner d arreter d utiliser son ancien carnet, alors il le garde par defiance.'],
  ['Riley is told that good teammates always agree instantly, and he becomes less cooperative.', 'Riley se fait dire que les bons coequipiers sont toujours d accord tout de suite, et il devient moins cooperatif.'],
  ['Pia is pressured to change her hairstyle because it is "in," and she keeps her current style.', 'Pia est poussee à changer de coiffure parce que c est "à la mode", et elle garde son style actuel.'],
  ['Hugo is told not to read the fine print, and that makes him want to read every line.', 'Hugo se fait dire de ne pas lire les petites lignes, et cela lui donne envie de tout lire ligne par ligne.'],
  ['Sam is told to click the link right now or lose the chance, and he closes the message.', 'Sam se fait dire de cliquer sur le lien tout de suite ou de perdre sa chance, et il ferme le message.'],
  ['Jade is told the only smart move is to choose the green package, so she deliberately picks blue.', 'Jade se fait dire que le seul choix intelligent est de prendre le paquet vert, alors elle prend volontairement le bleu.'],
  ['Owen is asked to repeat the slogan, and the forced tone makes him reject the whole campaign.', 'Owen doit repeter le slogan, et le ton force le fait rejeter toute la campagne.'],
  ['Lea is told to stop asking questions in class, so she asks even more questions.', 'Léa se fait dire d arreter de poser des questions en classe, alors elle en pose encore plus.'],
  ['Maya is told the premium plan is "for people who care about quality," and that makes her suspicious.', 'Maya se fait dire que le plan premium est "pour les gens qui se soucient de la qualite", et cela la rend mefiante.'],
  ['Ben is told that everyone else already accepted the rule, so he resists because he feels cornered.', 'Ben se fait dire que tout le monde a deja accepte la regle, alors il resiste parce qu il se sent accule.'],
  ['Ava is told to avoid the park after dark, and she chooses the park in daylight just to avoid sounding controlled.', 'Ava se fait dire d eviter le parc apres la nuit, alors elle choisit le parc en plein jour juste pour eviter de se sentir controlee.'],
  ['Omar is told that honest people never question the boss, and he questions the boss immediately.', 'Omar se fait dire que les gens honnetes ne questionnent jamais le patron, et il questionne le patron aussitot.'],
  ['Nina is told to accept the default setting, so she changes it on purpose.', 'Nina se fait dire d accepter le reglage par defaut, alors elle le change exprès.'],
  ['Eli is told the deadline is final, and he starts pushing back on everything else too.', 'Eli se fait dire que la date limite est definitive, et il commence à s opposer à tout le reste aussi.'],
  ['Lina is told to "just trust us," and that is enough to make her distrust the whole pitch.', 'Lina se fait dire de "juste nous faire confiance", et cela suffit à lui faire douter de toute la proposition.'],
  ['Grant is told the app will make life easier, but the pressure makes him uninstall it.', 'Grant se fait dire que l application rendra la vie plus facile, mais la pression le pousse à la desinstaller.'],
  ['Tia is told to choose quickly, and she chooses slowly on purpose.', 'Tia se fait dire de choisir vite, alors elle choisit lentement exprès.'],
  ['Finn is told he is being difficult for wanting options, and that makes him want even more options.', 'Finn se fait dire qu il est difficile parce qu il veut des options, et cela lui donne envie d en vouloir encore plus.'],
  ['Mina is told to stop "making a fuss" about the sign-up form, so she reads it extra carefully.', 'Mina se fait dire d arreter de "faire toute une histoire" à propos du formulaire d inscription, alors elle le lit avec encore plus d attention.'],
  ['Theo is told the club is only for people who follow instructions, and he decides he would rather not join.', 'Theo se fait dire que le club est reserve aux personnes qui suivent les instructions, et il decide qu il prefere ne pas rejoindre.'],
  ['Juno is told to upgrade her plan before the call ends, and she hangs up instead.', 'Juno se fait dire d ameliorer son forfait avant la fin de l appel, et elle raccroche à la place.'],
  ['Iris is told the policy is the only respectable choice, so she looks for a different option.', 'Iris se fait dire que la politique est le seul choix respectable, alors elle cherche une autre option.'],
  ['Cole is told to stop using cash, and he starts carrying cash more often.', 'Cole se fait dire d arreter d utiliser du liquide, et il commence à en avoir plus souvent sur lui.'],
  ['Riley is told to accept the seat change because it is for his own good, and he refuses the change.', 'Riley se fait dire d accepter le changement de siege parce que c est pour son bien, et il refuse le changement.'],
  ['Pia is told the instruction is simple enough for anyone, so she resists being talked down to.', 'Pia se fait dire que l instruction est assez simple pour n importe qui, alors elle resiste à etre prise de haut.'],
  ['Hugo is told he has no reason to object, and that makes him object more.', 'Hugo se fait dire qu il n a aucune raison d objecter, et cela le pousse à objecter davantage.'],
  ['Sam is told to accept the promo because "smart people do," and he rejects it on principle.', 'Sam se fait dire d accepter la promotion parce que "les gens intelligents le font", et il la rejette par principe.'],
  ['Jade is told not to touch the display, so she touches the display the second nobody is looking.', 'Jade se fait dire de ne pas toucher l exposition, alors elle la touche des qu on ne regarde plus.'],
  ['Maya is told the boss already decided for her, and she pushes back harder than ever.', 'Maya se fait dire que le patron a deja decide pour elle, et elle resiste plus fort que jamais.'],
  ['Leo is told to stop being stubborn, and he becomes even more stubborn.', 'Leo se fait dire d arreter d etre tetu, et il devient encore plus tetu.'],
  ['Nora is told that if she really cared, she would comply, and she refuses because she hates the guilt trip.', 'Nora se fait dire que si elle s en souciait vraiment, elle obeirait, et elle refuse parce qu elle deteste la manipulation par culpabilisation.'],
];

const OPTIONS_EN = ['Reactance', 'Status Quo Bias', 'Authority Bias', 'Appeal to Fear'];
const OPTIONS_FR = ['Réactance', 'Biais du statu quo', "Biais d'autorité", 'Appel à la peur'];

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
      id: 39201 + index,
      level: 5,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? 'Réactance' : 'Reactance',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La personne résiste surtout parce qu elle se sent contrôlée ou forcée.'
        : 'The person resists mainly because they feel controlled or forced.',
      detailedExplanationBeginner: isFrench
        ? 'La pression donne envie de faire l inverse.'
        : 'Pressure makes someone want to do the opposite.',
      detailedExplanationIntermediate: isFrench
        ? 'La réactance apparaît quand une demande ou une règle semble menacer la liberté de choisir, ce qui déclenche une opposition émotionnelle.'
        : 'Reactance appears when a request or rule feels like it threatens freedom of choice, which triggers an emotional pushback.',
      detailedExplanationExpert: isFrench
        ? "La réactance psychologique est une réponse motivationnelle à une liberté perçue comme menacée. Plus la consigne paraît autoritaire, restrictive ou manipulatrice, plus la personne peut restaurer son autonomie en refusant, en retardant ou en choisissant l option opposée, même si l option initiale restait raisonnable."
        : 'Psychological reactance is a motivational response to a freedom that feels threatened. The more a request seems authoritarian, restrictive, or manipulative, the more a person may restore autonomy by refusing, delaying, or choosing the opposite option, even when the original choice was sensible.',
      questionFormat: 'standard',
    };
  });
}

export const REACTANCE_EXPANSION_EN: Question[] = createQuestions('en');
export const REACTANCE_EXPANSION_FR: Question[] = createQuestions('fr');
