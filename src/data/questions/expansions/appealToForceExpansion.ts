import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["The supervisor says, 'Skip lunch or explain yourself to HR,' so Carla nods even though she is hungry and confused about the rule.", "Le superviseur dit : « Saute le déjeuner ou explique-toi aux ressources humaines », alors Carla acquiesce même si elle a faim et qu'elle ne comprend pas la règle."],
  ["A coach says, 'If you question my training plan, you are off the team,' so Ben stays quiet instead of asking for a reason on the field.", "Un entraîneur dit : « Si tu remets en question mon plan d'entraînement, tu sors de l'équipe », alors Ben se tait au lieu de demander pourquoi sur le terrain."],
  ["The landlord says the rent increase is final and anyone who complains can move out tomorrow, so Maya gives up.", "Le propriétaire dit que l'augmentation du loyer est définitive et que ceux qui se plaignent peuvent partir demain, alors Maya abandonne."],
  ["A parent says, 'Eat your vegetables or you will be grounded,' instead of explaining why the food matters.", "Un parent dit : « Mange tes légumes ou tu seras puni », au lieu d'expliquer pourquoi cet aliment est important."],
  ["The supervisor says, 'Vote for my idea or your vacation request disappears,' so Omar changes his vote.", "Le superviseur dit : « Vote pour mon idée ou ta demande de congés disparaît », alors Omar change son vote."],
  ["A teacher says anyone who disagrees with the grading rule will fail the class, so Priya keeps her hand down.", "Un professeur dit que toute personne qui n'est pas d'accord avec la règle de notation échouera au cours, alors Priya garde la main baissée."],
  ["The union rep says, 'Sign this petition now or do not expect future shifts,' so Noah signs without reading it.", "Le représentant syndical dit : « Signe cette pétition maintenant ou n'attends pas de prochains quarts », alors Noah signe sans la lire."],
  ["A landlord's text says the pet policy is nonnegotiable and complaints will cost the tenant the lease, so Lina agrees.", "Le message du propriétaire dit que la règle sur les animaux n'est pas négociable et que toute plainte fera perdre le bail au locataire, alors Lina accepte."],
  ["The club president says anyone who votes against the new fee will be banned from events, so Theo supports it.", "Le président du club dit que toute personne votant contre la nouvelle cotisation sera interdite d'événements, alors Theo l'approuve."],
  ["A customer service agent says, 'Stop asking for a refund or I will close the case right now,' so Eva stops asking.", "Un agent du service client dit : « Arrête de demander un remboursement ou je ferme le dossier tout de suite », alors Eva arrête de demander."],
  ["The older cousin says, 'Apologize to me or I will tell everyone your secret,' so Malik apologizes.", "Le cousin aîné dit : « Présente-moi tes excuses ou je dirai ton secret à tout le monde », alors Malik s'excuse."],
  ["A store clerk says, 'Take the warranty or leave without the product,' making the choice sound like a threat.", "Le vendeur dit : « Prends la garantie ou repars sans le produit », ce qui transforme le choix en menace."],
  ["The mayor says, 'Support this project or the council will make your neighborhood last on every list,' so residents go along.", "Le maire dit : « Soutenez ce projet ou le conseil mettra votre quartier en dernier sur toutes les listes », alors les habitants suivent."],
  ["A dorm advisor says, 'Keep the noise down or I will report you to housing,' so the room goes silent.", "Un conseiller de résidence dit : « Baissez le bruit ou je vous dénonce au service du logement », alors la chambre se tait."],
  ["The team captain says, 'Back my plan or you can find another ride home,' so Jules agrees.", "Le capitaine de l'équipe dit : « Soutiens mon plan ou trouve un autre moyen de rentrer », alors Jules accepte."],
  ["A family member says, 'Come to the dinner or you are out of the will,' so Rosa gives in.", "Un membre de la famille dit : « Viens au dîner ou tu seras déshérité », alors Rosa cède."],
  ["The manager says, 'Use my report format or I will mark you as difficult,' so Leo switches formats.", "Le directeur dit : « Utilise mon format de rapport ou je te signalerai comme difficile », alors Leo change de format."],
  ["A neighbor says, 'Lower your music or I will call the cops every night,' so Ana turns it off.", "Un voisin dit : « Baisse la musique ou j'appellerai la police tous les soirs », alors Ana éteint la musique."],
  ["The professor says, 'Accept my conclusion or you will not pass this seminar,' so Grace nods.", "Le professeur dit : « Accepte ma conclusion ou tu ne valideras pas ce séminaire », alors Grace acquiesce."],
  ["A boss says, 'Wear the logo shirt or I will cut your hours,' so Ken buys the shirt.", "Un patron dit : « Porte la chemise avec le logo ou je réduirai tes heures », alors Ken achète la chemise."],
  ["The organizer says, 'Follow my rule exactly or you are not welcome,' so the volunteers comply.", "L'organisateur dit : « Suivez ma règle exactement ou vous n'êtes pas les bienvenus », alors les bénévoles obéissent."],
  ["A principal says, 'Keep your complaint private or you will be removed from the committee,' so Mia stays silent.", "Un directeur dit : « Garde ta plainte privée ou tu seras retirée du comité », alors Mia se tait."],
  ["The tenant leader says, 'Vote my way or I will make sure you never get help again,' so Omar votes yes.", "Le responsable des locataires dit : « Vote comme moi ou je ferai en sorte que tu n'aies plus jamais d'aide », alors Omar vote oui."],
  ["A gym trainer says, 'Finish the expensive package or you can leave,' so Ben signs the contract.", "Un coach de salle dit : « Termine le forfait coûteux ou tu peux partir », alors Ben signe le contrat."],
  ["The aunt says, 'Agree that I am right or I will tell the whole family you were rude,' so Sofia backs down.", "La tante dit : « Dis que j'ai raison ou je dirai à toute la famille que tu as été impoli », alors Sofia recule."],
  ["A landlord says, 'Sign the extra fee or expect an eviction notice,' so Ravi pays it.", "Un propriétaire dit : « Signe les frais supplémentaires ou attends-toi à un avis d'expulsion », alors Ravi les paie."],
  ["The manager says, 'Approve the overtime plan or do not expect a promotion,' so Nora approves it.", "Le manager dit : « Approuve le plan d'heures supplémentaires ou n'attends pas de promotion », alors Nora l'approuve."],
  ["A class president says, 'Vote for the fundraiser or I will make sure your name is left off the list,' so Kim agrees.", "Le président de classe dit : « Vote pour la collecte de fonds ou je ferai en sorte que ton nom soit retiré de la liste », alors Kim accepte."],
  ["The mechanic says, 'Use my shop or I will not release your keys,' so Max stays trapped there.", "Le mécanicien dit : « Utilise mon atelier ou je ne te rendrai pas tes clés », alors Max reste coincé là."],
  ["A sibling says, 'Lend me the game or I will break your headphones,' so Tia gives it up.", "Un frère dit : « Prête-moi le jeu ou je casserai tes écouteurs », alors Tia cède."],
  ["The office lead says, 'Support this policy or I will exclude you from the meeting notes,' so Paul nods.", "Le chef de bureau dit : « Soutiens cette politique ou je t'exclurai des notes de réunion », alors Paul acquiesce."],
  ["A store manager says, 'Buy the membership or I will not honor this coupon,' so Grace pays.", "Un responsable de magasin dit : « Achète l'abonnement ou je n'accepterai pas ce coupon », alors Grace paie."],
  ["The coach says, 'Keep criticizing me and I will bench you all season,' so the player stops.", "L'entraîneur dit : « Continue à me critiquer et je te mettrai sur le banc toute la saison », alors le joueur s'arrête."],
  ["A roommate says, 'Agree to my chore chart or I will lock the kitchen cabinet,' so Eli agrees.", "Un colocataire dit : « Accepte mon planning des tâches ou je verrouillerai le placard de la cuisine », alors Eli accepte."],
  ["The committee chair says, 'Back my proposal or you will not be invited to the retreat,' so Leila goes along.", "Le président du comité dit : « Soutiens ma proposition ou tu ne seras pas invité au séminaire », alors Leila suit."],
  ["A school monitor says, 'Stop questioning the rule or I will write you up,' so Dan stops asking.", "Un surveillant dit : « Arrête de questionner la règle ou je te ferai un rapport », alors Dan cesse de demander."],
  ["The family elder says, 'Attend the ceremony or I will make sure you are blamed for disrespect,' so Nora attends.", "L'aîné de la famille dit : « Assiste à la cérémonie ou je ferai en sorte que tu sois accusé d'irrespect », alors Nora y assiste."],
  ["A barista says, 'Order the drink my way or I will not serve you next time,' so Hugo gives in.", "Le barista dit : « Commande la boisson à ma façon ou je ne te servirai pas la prochaine fois », alors Hugo cède."],
  ["The project lead says, 'Change your review or I will remove your access,' so Yara rewrites it.", "Le chef de projet dit : « Modifie ton compte rendu ou je retirerai ton accès », alors Yara le réécrit."],
  ["A coach says, 'Wear these shoes or you are out of the program,' so Alex buys them.", "Un coach dit : « Porte ces chaussures ou tu sors du programme », alors Alex les achète."],
  ["The landlord says, 'Stop reporting the broken heater or I will raise the rent again,' so Kim backs off.", "Le propriétaire dit : « Arrête de signaler le chauffage cassé ou j'augmenterai encore le loyer », alors Kim se retire."],
  ["A manager says, 'Accept the unpaid overtime or your schedule will disappear,' so Salma says yes.", "Un manager dit : « Accepte les heures supplémentaires non payées ou ton planning disparaîtra », alors Salma dit oui."],
  ["The club organizer says, 'Use our banner design or your booth gets shut down,' so Tom complies.", "L'organisateur du club dit : « Utilisez notre design de bannière ou votre stand sera fermé », alors Tom obéit."],
  ["A parent says, 'Follow my career choice or I will stop helping with tuition,' so Nina obeys.", "Un parent dit : « Suis mon choix de carrière ou j'arrêterai d'aider pour les études », alors Nina obéit."],
  ["The coach says, 'If you disagree in public, you will sit out the tournament,' so Omar stays quiet.", "L'entraîneur dit : « Si tu n'es pas d'accord en public, tu resteras sur la touche pendant le tournoi », alors Omar se tait."],
  ["A supervisor says, 'Approve the unsafe deadline or I will make sure your review suffers,' so Mia approves it.", "Un superviseur dit : « Approuve ce délai dangereux ou je ferai en sorte que ton évaluation en pâtisse », alors Mia l'approuve."],
  ["The usher says, 'Move where I tell you or I will have you removed,' so Ben moves.", "L'agent d'accueil dit : « Va où je te dis ou je te ferai expulser », alors Ben bouge."],
  ["A landlord says, 'Sign the inspection waiver or I will not fix anything in this apartment,' so Lea signs.", "Le propriétaire dit : « Signe la renonciation à l'inspection ou je ne réparerai rien dans cet appartement », alors Lea signe."],
  ["The manager says, 'Accept the redesign or I will cancel your contract,' so Ravi accepts.", "Le manager dit : « Accepte la refonte ou j'annulerai ton contrat », alors Ravi accepte."],
  ["A coach says, 'Stop asking for safer gear or you are benched,' so Iris stops asking.", "Un coach dit : « Arrête de demander du matériel plus sûr ou tu seras mis sur le banc », alors Iris arrête de demander."],
  ["The parent says, 'Finish the event my way or you do not get the car keys,' so Theo complies.", "Le parent dit : « Termine l'événement à ma façon ou tu n'auras pas les clés de la voiture », alors Theo obéit."],
  ["A boss says, 'Take the blame or I will fire the whole shift,' so Grace takes the blame.", "Un patron dit : « Prends la faute ou je licencierai tout le service », alors Grace prend la faute."],
  ["The neighbor says, 'Support my fence plan or I will complain about every sound you make,' so Noah agrees.", "Le voisin dit : « Soutiens mon projet de clôture ou je me plaindrai du moindre bruit que tu fais », alors Noah accepte."],
  ["A club leader says, 'Donate to my fundraiser or you will not be part of the group photo,' so Ava donates.", "Un chef de club dit : « Fais un don à ma collecte ou tu ne feras pas partie de la photo de groupe », alors Ava donne."],
  ["The manager says, 'Do not challenge me or I will assign you the worst shift next week,' so Leo backs down.", "Le manager dit : « Ne me contredis pas ou je t'assignerai le pire service la semaine prochaine », alors Leo recule."],
  ["A teacher says, 'Agree with the answer I gave or you can retake the class,' so Priya accepts it.", "Un professeur dit : « Accepte la réponse que j'ai donnée ou tu devras recommencer le cours », alors Priya l'accepte."],
  ["The manager says, 'Approve the plan or I will cut your weekend shift,' so Zoe approves it.", "Le manager dit : « Approuve le plan ou je couperai ton service du week-end », alors Zoe l'approuve."],
  ["A neighbor says, 'Support my fence idea or I will file complaints every day,' so Omar goes along.", "Le voisin dit : « Soutiens mon idée de clôture ou je déposerai des plaintes chaque jour », alors Omar suit."],
  ["The coach says, 'Wear my training shoes or leave the team,' so Mia buys them.", "L'entraîneur dit : « Porte mes chaussures d'entraînement ou quitte l'équipe », alors Mia les achète."],
  ["A supervisor says, 'Sign the overtime sheet or your request gets buried,' so Ben signs.", "Un superviseur dit : « Signe la feuille d'heures sup ou ta demande sera enterrée », alors Ben signe."],
  ["A parent says, 'Agree with my choice or you lose dinner tonight,' so Lina nods.", "Un parent dit : « Sois d'accord avec mon choix ou tu perdras le dîner ce soir », alors Lina acquiesce."],
  ["A club leader says, 'Vote for my rule or I will remove your badge,' so Theo votes yes.", "Un chef de club dit : « Vote ma règle ou je retirerai ton badge », alors Theo vote oui."],
  ["The landlord says, 'Accept the fee or your keys stay with me,' so Ava pays it.", "Le propriétaire dit : « Accepte les frais ou tes clés restent chez moi », alors Ava les paie."],
  ["A coach says, 'Follow my play or you sit the rest of the game,' so Noah follows it.", "Un coach dit : « Suis ma stratégie ou tu restes sur le banc le reste du match », alors Noah la suit."],
  ["A manager says, 'Use my report format or I will blacklist you for future projects,' so Rina changes it.", "Un manager dit : « Utilise mon format de rapport ou je te bloquerai pour les futurs projets », alors Rina le change."],
  ["A boss says, 'Agree now or I will slash your hours next month,' so Jules agrees.", "Un patron dit : « Sois d'accord maintenant ou je réduirai tes heures le mois prochain », alors Jules accepte."],
  ["A school monitor says, 'Stop asking questions or you will be sent out,' so Priya stops.", "Un surveillant dit : « Arrête de poser des questions ou tu seras sortie », alors Priya s'arrête."],
  ["A teammate says, 'Back my plan or I will make sure you never start again,' so Leo backs it.", "Un coéquipier dit : « Soutiens mon plan ou je ferai en sorte que tu ne démarres plus jamais », alors Leo le soutient."],
  ["A family elder says, 'Come to the dinner or I will tell everyone you are selfish,' so Maya comes.", "Un aîné dit : « Viens au dîner ou je dirai à tout le monde que tu es égoïste », alors Maya vient."],
  ["The organizer says, 'Use my logo or your booth gets shut down,' so Omar complies.", "L'organisateur dit : « Utilise mon logo ou ton stand sera fermé », alors Omar obéit."],
  ["A roommate says, 'Clean the kitchen my way or I will hide your game controller,' so Ben cleans it.", "Un colocataire dit : « Nettoie la cuisine à ma façon ou je cacherai ta manette », alors Ben nettoie."],
  ["The principal says, 'Approve my event or I will mark your file,' so Nina approves it.", "Le directeur dit : « Approuve mon événement ou je noterai cela dans ton dossier », alors Nina l'approuve."],
  ["A landlord says, 'Take the longer lease or I will not fix the heater,' so Tia takes it.", "Le propriétaire dit : « Prends le bail plus long ou je ne réparerai pas le chauffage », alors Tia le prend."],
  ["A supervisor says, 'Keep quiet or I will move you to the worst desk,' so Eva keeps quiet.", "Un superviseur dit : « Reste silencieux ou je te mettrai au pire bureau », alors Eva se tait."],
  ["A coach says, 'Wear this jersey or you are out,' so Sam wears it.", "Un coach dit : « Porte ce maillot ou tu sors », alors Sam le porte."],
  ["A boss says, 'Agree with the new shift or I will cut your weekend hours,' so Mia agrees.", "Un patron dit : « Sois d'accord avec le nouveau planning ou je réduirai tes heures de week-end », alors Mia accepte."],
  ["A landlord says, 'Sign this waiver or I will not repair your heater,' so Leo signs.", "Un propriétaire dit : « Signe cette décharge ou je ne réparerai pas ton chauffage », alors Leo signe."],
  ["A team lead says, 'Use my slide deck or I will remove you from the presentation,' so Priya switches decks.", "Un chef d'équipe dit : « Utilise mon diaporama ou je te retirerai de la présentation », alors Priya change de support."],
  ["A teacher says, 'Accept my answer or stay after class every day this week,' so Ben accepts it.", "Un professeur dit : « Accepte ma réponse ou reste après le cours chaque jour cette semaine », alors Ben l'accepte."],
  ["A neighbor says, 'Lower your music or I will complain to the landlord tonight,' so Nora turns it down.", "Un voisin dit : « Baisse la musique ou je me plaindrai au propriétaire ce soir », alors Nora baisse le volume."],
  ["A manager says, 'Approve the unpaid overtime or your schedule disappears,' so Omar approves it.", "Un manager dit : « Approuve les heures sup non payées ou ton planning disparaît », alors Omar approuve."],
  ["A parent says, 'Follow my plan or you lose your phone for a month,' so Ava follows it.", "Un parent dit : « Suis mon plan ou tu perds ton téléphone pendant un mois », alors Ava le suit."],
  ["A club president says, 'Vote yes or you will not be invited to anything,' so Theo votes yes.", "Un président de club dit : « Vote oui ou tu ne seras invité à rien », alors Theo vote oui."],
  ["A sibling says, 'Hand over the console or I will tell on you,' so Mia hands it over.", "Un frère dit : « Donne-moi la console ou je te dénoncerai », alors Mia la donne."],
  ["A coach says, 'Wear the expensive shoes or you are off the roster,' so Jules buys them.", "Un coach dit : « Porte les chaussures chères ou tu sors de la liste », alors Jules les achète."],
  ["A landlord says, 'Stop asking about the leak or I will renew someone else's lease first,' so Rina stops asking.", "Un propriétaire dit : « Arrête de poser des questions sur la fuite ou je renouvellerai d'abord le bail de quelqu'un d'autre », alors Rina arrête de demander."],
  ["A supervisor says, 'Edit the report my way or I will mark you unreliable,' so Ben edits it.", "Un superviseur dit : « Modifie le rapport à ma façon ou je te signalerai comme peu fiable », alors Ben le modifie."],
  ["A school monitor says, 'Stop protesting the rule or I will send you to the office,' so Tia stops.", "Un surveillant dit : « Arrête de protester contre la règle ou je t'enverrai au bureau », alors Tia s'arrête."],
  ["A manager says, 'Take the extra shift or I will remember your attitude,' so Noah takes it.", "Un manager dit : « Prends le service supplémentaire ou je me souviendrai de ton attitude », alors Noah le prend."],
  ["A coach says, 'Back my playbook or you do not start next game,' so Lina backs it.", "Un coach dit : « Soutiens mon manuel de jeu ou tu ne commenceras pas le prochain match », alors Lina le soutient."],
  ["A family elder says, 'Come to the dinner or I will tell everyone you are disrespectful,' so Grace comes.", "Un aîné de la famille dit : « Viens au dîner ou je dirai à tout le monde que tu es irrespectueux », alors Grace vient."],
  ["A boss says, 'Use my template or I will block your raise,' so Omar uses it.", "Un patron dit : « Utilise mon modèle ou je bloquerai ta hausse », alors Omar l'utilise."],
  ["A tenant leader says, 'Support my petition or I will make sure nobody helps you later,' so Priya supports it.", "Un responsable de locataires dit : « Soutiens ma pétition ou je ferai en sorte que personne ne t'aide plus tard », alors Priya la soutient."],
  ["A teacher says, 'Agree with the class rule or I will fail your participation grade,' so Sam agrees.", "Un professeur dit : « Sois d'accord avec la règle de classe ou je te mettrai une mauvaise note de participation », alors Sam est d'accord."],
  ["A boss says, 'Wear the company badge or I will cancel your review,' so Eva wears it.", "Un patron dit : « Porte le badge de l'entreprise ou j'annulerai ton évaluation », alors Eva le porte."],
  ["A coach says, 'Stop questioning my drills or I will bench you for the season,' so Leo stops.", "Un coach dit : « Arrête de remettre en question mes exercices ou je te mettrai sur le banc pour la saison », alors Leo s'arrête."],
  ["A manager says, 'Sign the form today or I will give your project to someone else,' so Maya signs.", "Un manager dit : « Signe le formulaire aujourd'hui ou je donnerai ton projet à quelqu'un d'autre », alors Maya signe."],
  ["A neighbor says, 'Support my fence plan or I will complain about every noise you make,' so Theo supports it.", "Un voisin dit : « Soutiens mon projet de clôture ou je me plaindrai du moindre bruit que tu fais », alors Theo le soutient."],
  ["A parent says, 'Come to church or I will take away your car keys,' so Mia comes.", "Un parent dit : « Viens à l'église ou je te retirerai les clés de la voiture », alors Mia vient."],
  ["A supervisor says, 'Approve the deadline or I will note you as difficult,' so Ben approves it.", "Un superviseur dit : « Approuve l'échéance ou je te noterai comme difficile », alors Ben l'approuve."],
];

const OPTIONS_EN = ['Appeal to Force', 'Appeal to Fear', 'Appeal to Authority', 'False Dilemma'];
const OPTIONS_FR = ["Appel à la force", "Appel à la peur", "Appel à l'autorité", 'Fausse dichotomie'];

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

export const APPEAL_TO_FORCE_EXPANSION_EN: Question[] = SCENARIOS.map(([english], index) => {
  const correctIndex = index % 4;
  return {
    id: 36601 + index,
    level: 6,
    persona_stage: PersonaStage.CRAB,
    concept: 'Appeal to Force',
    difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Which fallacy is used here?\n\n"${english}"`,
    options: rotatedOptions(OPTIONS_EN, correctIndex),
    correct_option_index: correctIndex,
    explanation: 'The speaker uses a threat or coercive pressure instead of giving a real reason.',
    detailedExplanationBeginner: 'A threat replaces the argument.',
    detailedExplanationIntermediate: 'Agreement is demanded through punishment, loss, or intimidation rather than evidence.',
    detailedExplanationExpert: 'This is appeal to force, or argumentum ad baculum. The conclusion is pushed by coercion, not justified by premises. Even if the threat is real, it does not logically support the claim.',
    questionFormat: 'standard'
  };
});

export const APPEAL_TO_FORCE_EXPANSION_FR: Question[] = SCENARIOS.map(([, french], index) => {
  const correctIndex = index % 4;
  return {
    id: 36601 + index,
    level: 6,
    persona_stage: PersonaStage.CRAB,
    concept: 'Appel à la force',
    difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Quel sophisme est utilisé ici ?\n\n"${french}"`,
    options: rotatedOptions(OPTIONS_FR, correctIndex),
    correct_option_index: correctIndex,
      explanation: "L'orateur utilise une menace ou une pression coercitive au lieu de donner une vraie raison.",
      detailedExplanationBeginner: "Une menace remplace l'argument.",
      detailedExplanationIntermediate: "On exige l'accord par la punition, la perte ou l'intimidation plutôt que par des preuves.",
    detailedExplanationExpert: "C'est un appel à la force, ou argumentum ad baculum. La conclusion est imposée par la coercition, pas justifiée par des prémisses. Même si la menace est réelle, elle ne soutient pas logiquement l'affirmation.",
    questionFormat: 'standard'
  };
});
