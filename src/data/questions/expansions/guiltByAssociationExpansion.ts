import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["Maya dismisses the volunteer group because one member also plays loud music at parties.", "Maya rejette le groupe de benevoles parce qu un membre joue aussi de la musique forte aux fetes."],
  ["Ben says the school fundraiser is shady because the organizer once argued with the principal.", "Ben dit que la collecte de l ecole est louche parce que l organisateur s est un jour dispute avec le directeur."],
  ["Priya refuses to join the club because it shares a room with a group she does not like.", "Priya refuse de rejoindre le club parce qu il partage une salle avec un groupe qu elle n aime pas."],
  ["Noah claims the app must be bad because a rude influencer recommended it.", "Noah affirme que l application doit etre mauvaise parce qu un influenceur impoli l a recommandee."],
  ["Lina says the neighborhood petition is wrong because one signer is known for gossip.", "Lina dit que la petition du quartier est fausse parce qu une personne qui l a signee est connue pour les commérages."],
  ["Theo rejects the book club because one member also supports a messy sports team.", "Theo rejette le club de lecture parce qu un membre soutient aussi une equipe sportive desordonnee."],
  ["Ava thinks the cooking class is unsafe because the teacher once worked with a celebrity she dislikes.", "Ava pense que le cours de cuisine est dangereux parce que le professeur a deja travaille avec une celebrité qu elle n aime pas."],
  ["Omar says the charity report is untrustworthy because a donor was rude in a different meeting.", "Omar dit que le rapport caritatif n est pas fiable parce qu un donateur a ete impoli dans une autre reunion."],
  ["Rosa assumes the movie review is bad because the reviewer follows the wrong fan page.", "Rosa suppose que la critique du film est mauvaise parce que le critique suit la mauvaise page de fans."],
  ["Jules rejects the festival schedule because one performer is friends with someone he distrusts.", "Jules rejette le programme du festival parce qu un artiste est ami avec quelqu un en qui il n a pas confiance."],
  ["Eli says the school trip is a bad idea because the parent organizer is related to a strict teacher.", "Eli dit que la sortie scolaire est une mauvaise idee parce que le parent organisateur est lie a un professeur strict."],
  ["Mina refuses the team lunch because a coworker from another project is also invited.", "Mina refuse le repas d equipe parce qu un collegue d un autre projet est aussi invite."],
  ["Hugo thinks the neighborhood cleanup is suspicious because the leader once dated someone he dislikes.", "Hugo pense que le nettoyage du quartier est suspect parce que le responsable est deja sorti avec quelqu un qu il n aime pas."],
  ["Lea says the tutoring program is useless because it is associated with a rival school club.", "Lea dit que le programme de tutorat est inutile parce qu il est associe a un club d ecole rival."],
  ["Max dismisses the city plan because a person who supports it is also in a loud online debate group.", "Max rejette le plan de ville parce qu une personne qui le soutient fait aussi partie d un groupe de debat en ligne bruyant."],
  ["Tia refuses to hear the proposal because one supporter once made a bad joke at lunch.", "Tia refuse d entendre la proposition parce qu un partisan a deja fait une mauvaise blague au dejeuner."],
  ["Paul says the museum event is sketchy because it was promoted by someone he blocked online.", "Paul dit que l evenement du musee est louche parce qu il a ete promu par quelqu un qu il a bloque en ligne."],
  ["Yara thinks the safety tip is false because a person she distrusts repeated it.", "Yara pense que le conseil de securite est faux parce qu une personne en qui elle n a pas confiance l a repete."],
  ["Dan dismisses the workshop because the host is friends with a manager he blames for a past problem.", "Dan balaie l atelier parce que l animateur est ami avec un responsable qu il tient pour coupable d un ancien probleme."],
  ["Nina says the school policy is bad because one supporter also likes a controversial singer.", "Nina dit que la politique scolaire est mauvaise parce qu un partisan aime aussi un chanteur controversé."],
  ["Kim rejects the neighborhood app because one of its users belongs to a group she stereotypes.", "Kim rejette l application du quartier parce qu un de ses utilisateurs appartient a un groupe qu elle stereotype."],
  ["Salma refuses the charity dinner because it is linked to a club she thinks is snobby.", "Salma refuse le diner caritatif parce qu il est lie a un club qu elle trouve pretentieux."],
  ["Grant says the volunteer drive is flawed because the poster was shared by a former rival.", "Grant dit que la collecte de benevoles est defectueuse parce que l affiche a ete partagee par un ancien rival."],
  ["Mila avoids the study group because one participant is also in a clique she dislikes.", "Mila evite le groupe d etude parce qu un participant fait aussi partie d une clique qu elle deteste."],
  ["Owen claims the recipe is bad because the chef is associated with a chain he finds cheap.", "Owen affirme que la recette est mauvaise parce que le chef est associe a une chaine qu il trouve bon marche."],
  ["Jin refuses the carpool because the driver once argued online with his cousin.", "Jin refuse le covoiturage parce que le conducteur s est un jour dispute en ligne avec son cousin."],
  ["Pia thinks the class presentation is wrong because a friend of the presenter made a rude comment.", "Pia pense que la presentation de classe est fausse parce qu un ami du presentateur a fait un commentaire grossier."],
  ["Ben says the town survey is biased because someone from a disliked party helped distribute it.", "Ben dit que le sondage municipal est biaise parce que quelqu un d un parti deteste a aide a le distribuer."],
  ["Zoe dismisses the health talk because the speaker once worked at a company she distrusts.", "Zoe rejette la conference sante parce que l orateur a deja travaille pour une entreprise en qui elle n a pas confiance."],
  ["Ravi says the lunch menu is poor because the chef is connected to a celebrity gossip account.", "Ravi dit que le menu du dejeuner est mauvais parce que le chef est lie a un compte de potins de celebrites."],
  ["Sofia refuses the volunteer shift because a friend of the coordinator annoyed her last year.", "Sofia refuse le service de benevolat parce qu un ami du coordinateur l a agacee l annee derniere."],
  ["Lara thinks the science fair is a joke because one judge belongs to a club she mocks.", "Lara pense que la foire scientifique est une blague parce qu un juge appartient a un club qu elle se moque."],
  ["Cole says the new rule is unacceptable because a supporter of it is also on a team he envies.", "Cole dit que la nouvelle regle est inacceptable parce qu un de ses partisans fait aussi partie d une equipe qu il envie."],
  ["Maya rejects the repair estimate because the technician knows someone from a neighborhood she dislikes.", "Maya rejette le devis de reparation parce que le technicien connait quelqu un d un quartier qu elle n aime pas."],
  ["Ezra says the campus flyer is misleading because the designer is connected to a student group he distrusts.", "Ezra dit que le tract du campus est trompeur parce que le designer est lie a un groupe d etudiants en qui il n a pas confiance."],
  ["Nora assumes the travel tip is false because it came from someone tied to a friend she argues with.", "Nora suppose que le conseil de voyage est faux parce qu il vient de quelqu un lie a une amie avec qui elle se dispute."],
  ["Ari says the team vote is tainted because one member also supports a band he hates.", "Ari dit que le vote de l equipe est entache parce qu un membre soutient aussi un groupe de musique qu il deteste."],
  ["Mina refuses the parenting advice because the author is connected to a forum she finds obnoxious.", "Mina refuse le conseil parental parce que l auteur est lie a un forum qu elle trouve penible."],
  ["Leo thinks the gardening guide is useless because one contributor is friends with a blogger he mistrusts.", "Leo pense que le guide de jardinage est inutile parce qu un contributeur est ami avec un blogueur en qui il n a pas confiance."],
  ["Tara rejects the meeting minutes because the secretary and a disliked coworker both laughed together.", "Tara rejette le compte rendu de reunion parce que la secretaire et un collegue deteste ont ri ensemble."],
  ["Hana says the charity raffle is suspicious because the organizer is part of a family she judges harshly.", "Hana dit que la tombola caritative est suspecte parce que l organisateur fait partie d une famille qu elle juge severement."],
  ["Dylan avoids the reading circle because one member is also in a political group he dislikes.", "Dylan evite le cercle de lecture parce qu un membre fait aussi partie d un groupe politique qu il n aime pas."],
  ["Penny says the city workshop is a bad sign because the host once collaborated with a person she mocks.", "Penny dit que l atelier municipal est un mauvais signe parce que l animateur a deja collabore avec une personne qu elle se moque."],
  ["Grant refuses the idea because a supporter of it is also related to his ex-boss.", "Grant refuse l idee parce qu un partisan est aussi lie a son ancien patron."],
  ["Bea thinks the scholarship is suspicious because the sponsor is connected to a club she thinks is fake.", "Bea pense que la bourse est suspecte parce que le sponsor est lie a un club qu elle trouve faux."],
  ["Kira dismisses the school announcement because it was shared by someone from a group chat she left angrily.", "Kira rejette l annonce de l ecole parce qu elle a ete partagee par quelqu un d un groupe de discussion qu elle a quitte avec fureur."],
  ["Finn says the market survey is wrong because one analyst also belongs to a team he considers arrogant.", "Finn dit que l etude de marche est fausse parce qu un analyste fait aussi partie d une equipe qu il juge arrogante."],
  ["Juno rejects the city event because a neighbor she does not like volunteered there.", "Juno rejette l evenement municipal parce qu un voisin qu elle n aime pas y a fait du benevolat."],
  ["Olivia assumes the podcast advice is bad because the host follows a creator she thinks is ridiculous.", "Olivia suppose que le conseil du podcast est mauvais parce que l animateur suit un createur qu elle trouve ridicule."],
];

const OPTIONS_EN = ['Guilt by Association', 'Ad Hominem', 'False Equivalence', 'Bandwagon'];
const OPTIONS_FR = ['Culpabilité par association', 'Attaque ad hominem', 'Fausse équivalence', 'Effet de mode'];

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

export const GUILT_BY_ASSOCIATION_EXPANSION_EN: Question[] = SCENARIOS.map(([english], index) => {
  const correctIndex = index % 4;
  return {
    id: 37601 + index,
    level: 4,
    persona_stage: PersonaStage.CRAB,
    concept: 'Guilt by Association',
    difficulty: index < 43 ? 1 : index < 50 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Which fallacy is shown here?\n\n"${english}"`,
    options: rotatedOptions(OPTIONS_EN, correctIndex),
    correct_option_index: correctIndex,
    explanation: 'The claim is judged by who is connected to it instead of by the claim itself.',
    detailedExplanationBeginner: 'A person or group is blamed because of association, not evidence.',
    detailedExplanationIntermediate: 'The reasoning treats a connection to a disliked person, group, or thing as if that connection settled the issue.',
    detailedExplanationExpert: 'This is guilt by association: the argument smuggles in irrelevant social ties and uses them to condemn a claim, action, or person without examining the actual evidence.',
    questionFormat: 'standard',
  };
});

export const GUILT_BY_ASSOCIATION_EXPANSION_FR: Question[] = SCENARIOS.map(([, french], index) => {
  const correctIndex = index % 4;
  return {
    id: 37601 + index,
    level: 4,
    persona_stage: PersonaStage.CRAB,
    concept: 'Culpabilité par association',
    difficulty: index < 43 ? 1 : index < 50 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Quel sophisme est montré ici ?\n\n"${french}"`,
    options: rotatedOptions(OPTIONS_FR, correctIndex),
    correct_option_index: correctIndex,
    explanation: "L'affirmation est jugée selon ses liens avec une personne ou un groupe, et non selon son contenu.",
    detailedExplanationBeginner: "Une personne ou un groupe est condamné à cause d une association, pas à cause des preuves.",
    detailedExplanationIntermediate: "Le raisonnement traite un lien avec une personne, un groupe ou une chose détesté comme si ce lien réglait la question.",
    detailedExplanationExpert: "C est la culpabilité par association : l argument importe des liens sociaux sans rapport et les utilise pour condamner une affirmation, une action ou une personne sans examiner les preuves réelles.",
    questionFormat: 'standard',
  };
});
