import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["Mia asks, 'Why did you stop cheating on the quiz?' even though Leo never cheated.", "Mia demande : « Pourquoi as-tu arrete de tricher au quiz ? » alors que Leo n'a jamais triche."],
  ["A teacher says, 'When did you start copying homework from the class chat?' even though no copying was proven.", "Un professeur demande : « Quand as-tu commence a copier les devoirs du groupe ? » alors que rien n'a ete prouve."],
  ["Jules asks his brother, 'How long have you been hiding the broken vase?' before checking whether he touched it.", "Jules demande a son frere : « Depuis combien de temps caches-tu le vase casse ? » avant de verifier s'il l'a touche."],
  ["A manager says, 'Why are you still wasting company time on your side project?' when the employee has never worked on one at work.", "Une manager dit : « Pourquoi gaspilles-tu encore le temps de l'entreprise avec ton projet perso ? » alors que l'employe n'en fait pas au travail."],
  ["Nina asks, 'How often do you lie to your customers?' during a first meeting with a new seller.", "Nina demande : « A quelle frequence mens-tu a tes clients ? » pendant un premier rendez-vous avec un nouveau vendeur."],
  ["Owen asks, 'What made you steal the snack?' before anyone has said it was stolen.", "Owen demande : « Qu'est-ce qui t'a pousse a voler le snack ? » avant que quiconque affirme qu'il a ete vole."],
  ["Priya says, 'So you finally admitted the app is a scam?' when the person only asked for more information.", "Priya dit : « Donc tu admets enfin que l'application est une arnaque ? » alors que la personne a seulement demande plus d'infos."],
  ["Ben asks, 'How long have you been lying to the neighbors?' after hearing a rumor from one person.", "Ben demande : « Depuis combien de temps mens-tu aux voisins ? » apres avoir entendu une rumeur d'une seule personne."],
  ["Tara says, 'Why were you so cruel to the dog?' even though the dog was never mistreated.", "Tara dit : « Pourquoi as-tu ete si cruel avec le chien ? » alors que le chien n'a jamais ete maltraite."],
  ["Kai asks, 'When did you decide to break the rules?' to someone who is just asking for the rules.", "Kai demande : « Quand as-tu decide de enfreindre les regles ? » a quelqu'un qui demande juste les regles."],
  ["Jules asks, 'How many times have you cheated on your partner?' during a harmless conversation about movies.", "Jules demande : « Combien de fois as-tu trompe ton/ta partenaire ? » pendant une conversation banale sur les films."],
  ["Ava says, 'Why are you still stealing office supplies?' when the drawer is simply open.", "Ava dit : « Pourquoi voles-tu encore les fournitures du bureau ? » alors que le tiroir est juste ouvert."],
  ["Noah asks, 'When did you start bribing people?' instead of asking whether any bribe happened at all.", "Noah demande : « Quand as-tu commence a soudoyer des gens ? » au lieu de demander si un pot-de-vin a existe."],
  ["Mina says, 'What did you do to make the trip fail?' even though the trip has not failed.", "Mina dit : « Qu'as-tu fait pour faire echouer le voyage ? » alors que le voyage n'a pas echoue."],
  ["Eli asks, 'Why are you lying about your grades?' when the student is just asking for help.", "Eli demande : « Pourquoi mens-tu sur tes notes ? » alors que l'eleve demande seulement de l'aide."],
  ["Rina says, 'So you admit you were being lazy?' before hearing any explanation.", "Rina dit : « Donc tu admets que tu etais paresseux ? » avant d'entendre une explication."],
  ["Hugo asks, 'How long have you been hiding the damage?' while standing beside an untouched wall.", "Hugo demande : « Depuis combien de temps caches-tu les degats ? » en se tenant devant un mur intact."],
  ["Lina says, 'Why did you trick everyone into voting for that plan?' when the person only shared a link.", "Lina dit : « Pourquoi as-tu trompe tout le monde pour faire voter ce plan ? » alors que la personne a juste partage un lien."],
  ["Grant asks, 'What are you trying to hide from the inspector?' before any inspection starts.", "Grant demande : « Qu'essaies-tu de cacher a l'inspecteur ? » avant meme le debut de l'inspection."],
  ["Zoe asks, 'When did you start lying about the refund?' because the cashier said the receipt was missing.", "Zoe demande : « Quand as-tu commence a mentir sur le remboursement ? » parce que la caissiere a dit que le ticket avait disparu."],
  ["Milo says, 'So you finally confessed to cheating the system?' when the user only requested support.", "Milo dit : « Donc tu as enfin avoue avoir triche avec le systeme ? » alors que l'utilisateur a seulement demande de l'aide."],
  ["Theo asks, 'Why did you ruin the group project?' even though the project is still in progress.", "Theo demande : « Pourquoi as-tu ruine le travail de groupe ? » alors que le projet est toujours en cours."],
  ["Pia asks, 'How long have you been lying to your boss?' during a discussion about weekend plans.", "Pia demande : « Depuis combien de temps mens-tu a ton patron ? » pendant une discussion sur les projets du week-end."],
  ["Finn says, 'What made you poison the meeting?' when the team only disagrees on timing.", "Finn dit : « Qu'est-ce qui t'a pousse a empoisonner la reunion ? » alors que l'equipe n'est pas d'accord sur l'horaire."],
  ["Maya asks, 'Why did you decide to sabotage the launch?' after hearing one complaint.", "Maya demande : « Pourquoi as-tu decide de saboter le lancement ? » apres avoir entendu une seule plainte."],
  ["Sam says, 'So you are admitting you were scamming people?' to someone who just said the offer felt odd.", "Sam dit : « Tu admets donc que tu escroquais des gens ? » a quelqu'un qui a seulement dit que l'offre semblait bizarre."],
  ["Juno asks, 'When did you start hiding the truth from us?' when nobody has accused anyone of lying.", "Juno demande : « Quand as-tu commence a nous cacher la verite ? » alors que personne n'a accuse quiconque de mentir."],
  ["Iris says, 'Why did you break the promise?' while discussing a promise that was never made.", "Iris dit : « Pourquoi as-tu casse la promesse ? » en parlant d'une promesse qui n'a jamais ete faite."],
  ["Cole asks, 'How many times have you stolen my idea?' before the idea has even been shared.", "Cole demande : « Combien de fois as-tu vole mon idee ? » avant meme que l'idee soit partagee."],
  ["Nora says, 'So you admit the report was fake?' when the person only questioned one chart.", "Nora dit : « Tu admets donc que le rapport etait faux ? » alors que la personne a seulement remis un graphique en question."],
  ["Ari asks, 'Why were you gossiping about me again?' even though no gossip has been shown.", "Ari demande : « Pourquoi bavardais-tu encore sur moi ? » alors qu'aucune rumeur n'a ete montre."],
  ["Rita says, 'What are you hiding from the police?' to a cyclist waiting for the light.", "Rita dit : « Qu'est-ce que tu caches a la police ? » a un cycliste qui attend le feu."],
  ["Tia asks, 'When did you stop being honest with customers?' while the customer service log is clean.", "Tia demande : « Quand as-tu cesse d'etre honnete avec les clients ? » alors que le registre du service client est propre."],
  ["Oli says, 'Why did you betray the team?' because the player missed one pass.", "Oli dit : « Pourquoi as-tu trahi l'equipe ? » parce que le joueur a rate une passe."],
  ["Lara asks, 'How long have you been lying about the homework?' before checking whether homework exists.", "Lara demande : « Depuis combien de temps mens-tu sur les devoirs ? » avant de verifier si les devoirs existent."],
  ["Ben says, 'So you are finally admitting you ripped off the customer?' when the person only asked for a receipt.", "Ben dit : « Tu admets enfin avoir arnaque le client ? » alors que la personne a seulement demande un recu."],
  ["Mina asks, 'What did you do to make the store lose money?' because a sale was slow one afternoon.", "Mina demande : « Qu'as-tu fait pour faire perdre de l'argent au magasin ? » parce qu'une vente a ete lente un apres-midi."],
  ["Drew asks, 'Why are you still lying to your parents?' when the topic is a holiday schedule.", "Drew demande : « Pourquoi mens-tu encore a tes parents ? » alors que le sujet est l'horaire des vacances."],
  ["Jade says, 'What are you trying to conceal from the board?' before the board meeting begins.", "Jade dit : « Qu'essaies-tu de cacher au conseil ? » avant meme le debut de la reunion."],
  ["Owen asks, 'When did you start cheating the system?' to someone who just asked for the rules.", "Owen demande : « Quand as-tu commence a tricher avec le systeme ? » a quelqu'un qui demande juste les regles."],
  ["Mila says, 'So you confess the project was a fraud?' after a simple budget question.", "Mila dit : « Tu confesses donc que le projet etait frauduleux ? » apres une simple question sur le budget."],
  ["Evan asks, 'Why did you lie to your friend about the meeting?' when the friend was not mentioned.", "Evan demande : « Pourquoi as-tu menti a ton ami au sujet de la reunion ? » alors que l'ami n'a pas ete mentionne."],
  ["Kira says, 'How long have you been hiding the truth about the bill?' when the bill has not even arrived.", "Kira dit : « Depuis combien de temps caches-tu la verite sur la facture ? » alors que la facture n'est meme pas arrivee."],
  ["Grant asks, 'What are you covering up in that email?' because the email was short.", "Grant demande : « Qu'est-ce que tu caches dans cet e-mail ? » parce que le message etait bref."],
  ["Zara says, 'Why did you deceive the whole class?' after someone asks to borrow a pencil.", "Zara dit : « Pourquoi as-tu trompe toute la classe ? » apres que quelqu'un a demande un crayon."],
  ["Parker asks, 'When did you become dishonest with your landlord?' during a chat about rent dates.", "Parker demande : « Quand es-tu devenu malhonnete avec ton proprietaire ? » pendant une discussion sur les dates de loyer."],
  ["Hana says, 'So you admit you were stealing the files?' when the person only asked where the files were stored.", "Hana dit : « Tu admets donc que tu volais les fichiers ? » alors que la personne a seulement demande ou ils etaient ranges."],
  ["Leo asks, 'Why are you hiding the real reason?' even though no reason has been given yet.", "Leo demande : « Pourquoi caches-tu la vraie raison ? » alors qu'aucune raison n'a encore ete donnee."],
  ["Maya says, 'How many lies did you tell at the party?' before the party even starts.", "Maya demande : « Combien de mensonges as-tu racontes a la fete ? » avant meme que la fete commence."],
  ["Nina asks, 'Why did you break your word again?' to someone who never made a promise.", "Nina demande : « Pourquoi as-tu encore rompu ta parole ? » a quelqu'un qui n'a jamais promis quoi que ce soit."],
];

const OPTIONS_EN = ['Loaded Question', 'Straw Man', 'Begging the Question', 'False Dilemma'];
const OPTIONS_FR = ['Question piège', 'Homme de paille', 'Pétition de principe', 'Fausse dichotomie'];

function rotatedOptions(options: string[], correctIndex: number): string[] {
  const distractors = options.slice(1);
  const result = [...distractors];
  result.splice(correctIndex, 0, options[0]);
  return result;
}

function subLevelFor(index: number): SubLevel {
  if (index < 43) return SubLevel.BEGINNER;
  if (index < 50) return SubLevel.INTERMEDIATE;
  return SubLevel.EXPERT;
}

function createQuestions(language: 'en' | 'fr'): Question[] {
  return SCENARIOS.map(([english, french], index) => {
    const correctIndex = index % 4;
    const isFrench = language === 'fr';
    return {
      id: 38601 + index,
      level: 4,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Question piège' : 'Loaded Question',
      difficulty: index < 43 ? 1 : index < 50 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? "La question suppose deja une accusation ou une culpabilité qui n'a pas été prouvée."
        : 'The question already assumes an accusation or guilt that has not been proven.',
      detailedExplanationBeginner: isFrench
        ? "La question contient une accusation cachée."
        : 'The question hides an accusation inside it.',
      detailedExplanationIntermediate: isFrench
        ? "Une question piège force une réponse à accepter une prémisse contestable comme si elle était déjà vraie."
        : 'A loaded question forces the reply to accept a disputed premise as if it were already true.',
      detailedExplanationExpert: isFrench
        ? "Le sophisme fonctionne en enfermant la personne interrogée dans une présupposition: répondre oui ou non revient déjà à valider une thèse non démontrée."
        : 'The fallacy works by trapping the speaker in a presupposition: answering yes or no already seems to validate an unproven claim.',
      questionFormat: 'standard',
    };
  });
}

export const LOADED_QUESTION_EXPANSION_EN: Question[] = createQuestions('en');
export const LOADED_QUESTION_EXPANSION_FR: Question[] = createQuestions('fr');
