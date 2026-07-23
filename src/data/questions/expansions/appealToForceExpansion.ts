import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["The supervisor says, 'Skip lunch or explain yourself to HR,' so Carla nods even though she is hungry.", "Le superviseur dit : « Saute le déjeuner ou explique-toi aux ressources humaines », alors Carla acquiesce même si elle a faim."],
  ["A coach says, 'If you question my training plan, you are off the team,' so Ben stays quiet.", "Un entraîneur dit : « Si tu remets en question mon plan d'entraînement, tu sors de l'équipe », alors Ben se tait."],
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
