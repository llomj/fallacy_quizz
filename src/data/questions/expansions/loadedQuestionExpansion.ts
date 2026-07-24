import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["Mia asks, 'Why did you hide the missing charger under your bed last night after school?' even though Leo only asked where it was.", "Mia demande : « Pourquoi as-tu cache le chargeur manquant sous ton lit hier soir apres l ecole ? » alors que Leo a seulement demande ou il etait."],
  ["A teacher says, 'When did you start cheating on the quiz with your friend yesterday at lunch?' even though nobody accused the student of cheating.", "Un professeur demande : « Quand as-tu commence a tricher au quiz avec ton ami hier au déjeuner ? » alors que personne n'a accuse l eleve de triche."],
  ["Jules asks his brother, 'How long have you been lying about the broken vase?' before checking the shelf.", "Jules demande a son frere : « Depuis combien de temps mens-tu sur le vase casse ? » avant de regarder l'etagere."],
  ["A manager says, 'Why are you still wasting company time on your side project?' when the employee is talking about a hobby at home.", "Une manager dit : « Pourquoi gaspilles-tu encore le temps de l'entreprise avec ton projet perso ? » alors que l'employe parle d'un loisir a la maison."],
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
  ["After the cashier asks about a receipt, Sam says, 'Why are you still hiding the stolen item?' as if theft was already proven.", "Apres que la caissiere a demande un recu, Sam dit : « Pourquoi caches-tu encore l'objet vole ? » comme si le vol etait deja prouve."],
  ["A friend asks where the keys are and gets, 'Why did you take my car without asking?' instead of an answer.", "Un ami demande ou sont les cles et recoit : « Pourquoi as-tu pris ma voiture sans demander ? » au lieu d'une reponse."],
  ["Jade asks, 'How long have you been cheating on the project?' when she only wanted to know who updated the file.", "Jade demande : « Depuis combien de temps triches-tu sur le projet ? » alors qu'elle voulait seulement savoir qui avait mis a jour le fichier."],
  ["Mia asks, 'Why are you lying to the teacher?' because the student asked to borrow a pen.", "Mia demande : « Pourquoi mens-tu au professeur ? » parce que l'eleve a demande un stylo."],
  ["The interviewer says, 'So you admit you were embezzling money?' after the applicant asks about salary.", "L'intervieweur dit : « Tu admets donc avoir detourne de l'argent ? » apres que le candidat a demande le salaire."],
  ["Owen asks, 'When did you start plotting against the team?' while the player is asking about game rules.", "Owen demande : « Quand as-tu commence a comploter contre l'equipe ? » alors que le joueur demande les regles du jeu."],
  ["Priya says, 'What are you hiding from the principal?' when the student is only carrying a folder.", "Priya dit : « Qu'est-ce que tu caches au proviseur ? » alors que l'eleve porte seulement un dossier."],
  ["Ben asks, 'Why did you sabotage the dinner?' because someone forgot to bring dessert.", "Ben demande : « Pourquoi as-tu sabote le dîner ? » parce que quelqu'un a oublie le dessert."],
  ["Tara says, 'How many times have you cheated your way through class?' in the middle of a discussion about homework formats.", "Tara dit : « Combien de fois as-tu triche pour passer en classe ? » au milieu d'une discussion sur les formats de devoirs."],
  ["Kai asks, 'When did you start lying to your customers?' after hearing a store manager mention a delayed shipment.", "Kai demande : « Quand as-tu commence a mentir a tes clients ? » apres avoir entendu un gerant parler d'une livraison en retard."],
  ["Ava says, 'So you finally admit the game was rigged?' when the player only asked if the score was final.", "Ava dit : « Tu admets enfin que le jeu etait truque ? » alors que le joueur demandait seulement si le score etait final."],
  ["Noah asks, 'Why were you stealing office snacks again?' because the drawer was left open.", "Noah demande : « Pourquoi volais-tu encore les collations du bureau ? » parce que le tiroir etait reste ouvert."],
  ["Mina says, 'How long have you been cheating on your partner?' while the person is asking about a movie recommendation.", "Mina dit : « Depuis combien de temps trompes-tu ton/ta partenaire ? » alors que la personne demande un conseil de film."],
  ["Eli asks, 'What did you do to ruin the fundraiser?' after a volunteer asks where the sign-in sheet is.", "Eli demande : « Qu'as-tu fait pour ruiner la collecte ? » apres qu'un benevole a demande ou etait la feuille d'inscription."],
  ["Rina says, 'Why are you hiding the truth from the class?' when the student is just taking notes.", "Rina dit : « Pourquoi caches-tu la verite a la classe ? » alors que l'eleve prend juste des notes."],
  ["Hugo asks, 'When did you decide to betray your friends?' during a chat about weekend plans.", "Hugo demande : « Quand as-tu decide de trahir tes amis ? » pendant une discussion sur les plans du week-end."],
  ["Lina says, 'So you confess the contract was a scam?' after someone asks to read it first.", "Lina dit : « Tu confesses donc que le contrat etait une arnaque ? » apres que quelqu'un a demande a le lire d'abord."],
  ["Grant asks, 'Why are you still lying to your boss?' when the employee is asking for a schedule change.", "Grant demande : « Pourquoi mens-tu encore a ton patron ? » alors que l'employe demande un changement d'horaire."],
  ["Zoe says, 'What made you poison the whole discussion?' after one person says they disagree.", "Zoe dit : « Qu'est-ce qui t'a pousse a empoisonner toute la discussion ? » apres qu'une personne dit seulement qu'elle n'est pas d'accord."],
  ["Milo asks, 'How many lies did you tell about the report?' before anyone has said the report is false.", "Milo demande : « Combien de mensonges as-tu racontes sur le rapport ? » avant que quiconque ait dit que le rapport est faux."],
  ["Theo says, 'Why did you steal the idea from me?' when the coworker is pitching a different idea.", "Theo dit : « Pourquoi as-tu vole mon idee ? » alors que le collegue presente une idee differente."],
  ["Pia asks, 'When did you start tricking the customers?' because the cashier is counting change slowly.", "Pia demande : « Quand as-tu commence a tromper les clients ? » parce que la caissiere compte la monnaie lentement."],
  ["Finn says, 'So you admit you broke the rules?' when the student only asked what the rules were.", "Finn dit : « Tu admets donc avoir casse les regles ? » alors que l'eleve a seulement demande quelles etaient les regles."],
  ["Maya asks, 'Why are you hiding the damage?' while looking at a clean wall.", "Maya demande : « Pourquoi caches-tu les degats ? » en regardant un mur propre."],
  ["Sam says, 'How long have you been lying about the rent?' after the tenant asks for the due date.", "Sam dit : « Depuis combien de temps mens-tu sur le loyer ? » apres que le locataire a demande la date limite."],
  ["Juno asks, 'What did you do to make the team fail?' when the group is still working on the draft.", "Juno demande : « Qu'as-tu fait pour faire echouer l'equipe ? » alors que le groupe travaille encore sur le brouillon."],
  ["Iris says, 'Why are you still cheating your neighbors?' after hearing someone borrow sugar.", "Iris dit : « Pourquoi triches-tu encore avec tes voisins ? » apres avoir entendu quelqu'un emprunter du sucre."],
  ["Cole asks, 'When did you start hiding the truth about the exam?' because a student requested the rubric.", "Cole demande : « Quand as-tu commence a cacher la verite sur l'examen ? » parce qu'un eleve a demande la grille."],
  ["Nora says, 'So you finally admit the refund was fake?' when the customer only asks where the receipt went.", "Nora dit : « Tu admets enfin que le remboursement etait faux ? » alors que le client demande seulement ou est passe le ticket."],
  ["Ari asks, 'Why were you lying to the landlord again?' when the neighbor is discussing mail delivery.", "Ari demande : « Pourquoi mentais-tu encore au proprietaire ? » alors que le voisin parle de la livraison du courrier."],
  ["Rita says, 'What are you hiding from your manager?' because the employee is carrying a notebook.", "Rita dit : « Qu'est-ce que tu caches a ton chef ? » parce que l'employe porte un carnet."],
  ["Tia asks, 'When did you decide to cheat the whole group?' during a chat about lunch orders.", "Tia demande : « Quand as-tu decide de tricher avec tout le groupe ? » pendant une discussion sur les commandes de déjeuner."],
  ["Oli says, 'Why did you lie about the schedule?' when the person only asked for directions.", "Oli dit : « Pourquoi as-tu menti sur l'horaire ? » alors que la personne a seulement demande son chemin."],
  ["Lara asks, 'How many times have you betrayed us?' after one person says they cannot attend.", "Lara demande : « Combien de fois nous as-tu trahis ? » apres qu'une personne dit qu'elle ne peut pas venir."],
  ["Ben says, 'So you admit you were stealing?' when a coworker asks to borrow a stapler.", "Ben dit : « Tu admets donc que tu volais ? » alors qu'un collegue demande d'emprunter une agrafeuse."],
  ["Mina asks, 'Why are you hiding the real story?' when the speaker has only given a short answer.", "Mina demande : « Pourquoi caches-tu la vraie histoire ? » alors que l'orateur a seulement donne une reponse courte."],
  ["Drew says, 'How long have you been cheating the bank?' while the customer is asking about fees.", "Drew dit : « Depuis combien de temps triches-tu avec la banque ? » alors que le client demande des frais."],
  ["Jade asks, 'What did you do to ruin the presentation?' even though the presentation has not happened yet.", "Jade demande : « Qu'as-tu fait pour ruiner la presentation ? » alors que la presentation n'a pas encore eu lieu."],
  ["Owen says, 'Why are you still lying to your friends?' during a conversation about travel plans.", "Owen dit : « Pourquoi mens-tu encore a tes amis ? » pendant une discussion sur les voyages."],
  ["Mila asks, 'When did you start hiding the receipts?' after a clerk mentions a paper jam.", "Mila demande : « Quand as-tu commence a cacher les reçus ? » apres qu'une caissiere ait parle d'un bourrage papier."],
  ["Evan says, 'So you finally confess the shipment was stolen?' when the worker only asks where to place the boxes.", "Evan dit : « Tu confesses enfin que l'envoi a ete vole ? » alors que l'employe demande seulement ou poser les cartons."],
  ["Kira asks, 'Why did you deceive the teacher?' because the student asks for extra paper.", "Kira demande : « Pourquoi as-tu trompe le professeur ? » parce que l'eleve demande du papier en plus."],
  ["Grant says, 'What are you hiding from the committee?' while the speaker is holding an agenda.", "Grant dit : « Qu'est-ce que tu caches au comite ? » alors que l'orateur tient un ordre du jour."],
  ["Zara asks, 'How long have you been cheating your roommate?' during a talk about grocery lists.", "Zara demande : « Depuis combien de temps triches-tu avec ton colocataire ? » pendant une discussion sur les listes de courses."],
  ["Parker says, 'Why are you lying about the parking ticket?' when the driver is just reading the sign.", "Parker dit : « Pourquoi mens-tu sur l'amende de stationnement ? » alors que le conducteur lit juste le panneau."],
  ["Hana asks, 'When did you decide to scam the whole town?' after a shopkeeper lowers a price.", "Hana demande : « Quand as-tu decide d'arnaquer toute la ville ? » apres qu'un commercant a baisse un prix."],
  ["Leo says, 'So you admit you broke into the account?' when someone asks how to reset a password.", "Leo dit : « Tu admets donc avoir pirate le compte ? » alors que quelqu'un demande comment reinitialiser un mot de passe."],
  ["Maya asks, 'Why are you hiding the truth from the customer?' while the clerk is explaining a return policy.", "Maya demande : « Pourquoi caches-tu la verite au client ? » alors que la vendeuse explique la politique de retour."],
  ["Nina says, 'How many lies did you tell your date?' after one person asks which cafe is open.", "Nina dit : « Combien de mensonges as-tu racontes a ton rendez-vous ? » apres qu'une personne demande quel cafe est ouvert."],
  ["Owen asks, 'Why did you betray the company?' when an employee requests a new badge.", "Owen demande : « Pourquoi as-tu trahi l'entreprise ? » quand un employe demande un nouveau badge."],
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
