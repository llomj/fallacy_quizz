import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["Maya dismisses the volunteer group because one member also plays loud music at parties on Fridays after work and dances badly.", "Maya rejette le groupe de benevoles parce qu un membre joue aussi de la musique forte aux fetes le vendredi apres le travail et danse mal."],
  ["Ben says the school fundraiser is shady because the organizer once argued with the principal in the hallway before class about lunch tickets.", "Ben dit que la collecte de l ecole est louche parce que l organisateur s est un jour dispute avec le directeur dans le couloir avant les cours au sujet des tickets de cantine."],
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
  ["Maya rejects the neighborhood cleanup because it is organized by people who know a coworker she dislikes.", "Maya rejette le nettoyage du quartier parce qu il est organise par des personnes qui connaissent un collegue qu elle n aime pas."],
  ["Ben says the food drive is suspicious because a volunteer once joked with his rival online.", "Ben dit que la collecte alimentaire est suspecte parce qu un benevole a deja plaisante en ligne avec son rival."],
  ["Priya dismisses the study session because one organizer is friends with a loud neighbor she avoids.", "Priya rejette la session d etude parce qu une organisatrice est amie avec un voisin bruyant qu elle evite."],
  ["Noah thinks the new app is unsafe because someone he distrusts follows the developer.", "Noah pense que la nouvelle application est peu sure parce que quelqu un en qui il n a pas confiance suit le developpeur."],
  ["Lina refuses the team invite because the host once worked at the same shop as her ex.", "Lina refuse l invitation de l equipe parce que l hote a autrefois travaille dans la meme boutique que son ex."],
  ["Theo says the town cleanup is bad because the poster was shared by a person from a clique he hates.", "Theo dit que le nettoyage de la ville est mauvais parce que l affiche a ete partagee par une personne d une clique qu il deteste."],
  ["Ava rejects the club offer because one member also comments on a page she finds annoying.", "Ava rejette l offre du club parce qu un membre commente aussi sur une page qu elle trouve penible."],
  ["Omar believes the workshop is flawed because the organizer knows a teacher he blames for a bad year.", "Omar croit que l atelier est defectueux parce que l organisateur connait un professeur qu il tient pour responsable d une mauvaise annee."],
  ["Rosa dismisses the charity stream because the streamer once followed a family member she argues with.", "Rosa rejette le stream caritatif parce que le streamer a deja suivi un membre de sa famille avec qui elle se dispute."],
  ["Jules says the event is no good because a speaker is linked to a group he stereotypes.", "Jules dit que l evenement n est pas bon parce qu un orateur est lie a un groupe qu il stereotype."],
  ["Mia rejects the volunteer sign-up because one helper is friends with someone from a rival club.", "Mia rejette l inscription des benevoles parce qu un aide est ami avec quelqu un d un club rival."],
  ["Ben says the fundraiser must be shady because the poster was shared by a cousin of someone he dislikes.", "Ben dit que la collecte doit etre louche parce que l affiche a ete partagee par un cousin de quelqu un qu il n aime pas."],
  ["Priya dismisses the advice column because the author once worked with a manager she thinks is dishonest.", "Priya rejette la chronique de conseils parce que l auteur a deja travaille avec un responsable qu elle juge malhonnete."],
  ["Noah thinks the neighborhood app is bad because one user belongs to a group he stereotypes.", "Noah pense que l application de quartier est mauvaise parce qu un utilisateur appartient a un groupe qu il stereotype."],
  ["Lina refuses the dinner invite because the host is connected to a coworker she argues with.", "Lina refuse l invitation au diner parce que l hote est lie a un collegue avec qui elle se dispute."],
  ["Theo says the school club is suspicious because a supporter of it also likes a rival sports team.", "Theo dit que le club scolaire est suspect parce qu un de ses partisans aime aussi une equipe sportive rivale."],
  ["Ava rejects the science fair because one judge is related to a family she looks down on.", "Ava rejette le salon scientifique parce qu un juge est lie a une famille qu elle regarde de haut."],
  ["Omar says the book recommendation is worthless because the reviewer follows a blogger he mocks.", "Omar dit que la recommandation de livre ne vaut rien parce que le critique suit un blogueur qu il se moque."],
  ["Rosa dismisses the safety flyer because the designer is in the same club as her ex-friend.", "Rosa rejette le prospectus de securite parce que le designer est dans le meme club que son ancien ami."],
  ["Jules thinks the town map is flawed because the cartographer knows someone from a group he distrusts.", "Jules pense que la carte de la ville est deficiente parce que le cartographe connait quelqu un d un groupe en qui il n a pas confiance."],
  ["Eli refuses the charity meal because the organizer once collaborated with a creator he finds obnoxious.", "Eli refuse le repas caritatif parce que l organisateur a deja collabore avec un createur qu il trouve penible."],
  ["Mina says the workshop notes are bad because the writer is friends with a person she hates online.", "Mina dit que les notes de l atelier sont mauvaises parce que l auteur est ami avec une personne qu elle deteste en ligne."],
  ["Hugo dismisses the fitness challenge because the coach is connected to a neighborhood he dislikes.", "Hugo rejette le defi fitness parce que l entraineur est lie a un quartier qu il n aime pas."],
  ["Lea says the class project is suspect because one teammate is from a family she stereotypes.", "Lea dit que le projet de classe est suspect parce qu un coequipier vient d une famille qu elle stereotype."],
  ["Max rejects the city survey because the analyst once talked to someone from a group he hates.", "Max rejette le sondage de la ville parce que l analyste a deja parle a quelqu un d un groupe qu il deteste."],
  ["Tia says the concert review is biased because the critic follows a singer she cannot stand.", "Tia dit que la critique du concert est biaisee parce que le critique suit un chanteur qu elle ne supporte pas."],
  ["Paul dismisses the volunteer notice because the coordinator is linked to a podcast he hates.", "Paul rejette l annonce de benevolat parce que le coordinateur est lie a un podcast qu il deteste."],
  ["Yara assumes the campus event is bad because one organizer is friends with a student she dislikes.", "Yara suppose que l evenement du campus est mauvais parce qu un organisateur est ami avec un etudiant qu elle n aime pas."],
  ["Dan says the meal plan is flawed because the chef once worked for a company he distrusts.", "Dan dit que le plan de repas est defeillant parce que le chef a deja travaille pour une entreprise en qui il n a pas confiance."],
  ["Nina refuses the reading circle because a member also belongs to a group she judges harshly.", "Nina refuse le cercle de lecture parce qu un membre appartient aussi a un groupe qu elle juge severement."],
  ["Kim says the office memo is worthless because the writer is connected to a former rival.", "Kim dit que la note de service ne vaut rien parce que l auteur est lie a un ancien rival."],
  ["Salma rejects the school fundraiser because one helper knows someone from a club she mocks.", "Salma rejette la collecte de l ecole parce qu un aide connait quelqu un d un club qu elle se moque."],
  ["Grant says the new rule is bad because a supporter of it is also on a team he envies.", "Grant dit que la nouvelle regle est mauvaise parce qu un de ses partisans fait aussi partie d une equipe qu il envie."],
  ["Mila dismisses the pet adoption event because it was promoted by a blogger she blocked.", "Mila rejette l evenement d adoption d animaux parce qu il a ete promu par un blogueur qu elle a bloque."],
  ["Owen says the history talk is biased because the speaker is connected to a teacher he blames.", "Owen dit que la conference d histoire est biaisee parce que l orateur est lie a un professeur qu il rend responsable."],
  ["Jin rejects the community garden because the volunteer list includes someone from a group he stereotypes.", "Jin rejette le jardin communautaire parce que la liste des benevoles inclut quelqu un d un groupe qu il stereotype."],
  ["Pia says the festival schedule is sketchy because the organizer is friends with a loud online critic.", "Pia dit que le programme du festival est louche parce que l organisateur est ami avec un critique en ligne bruyant."],
  ["Alex rejects the tutoring app because one reviewer also supports a politician he hates.", "Alex rejette l application de tutorat parce qu un critique soutient aussi un politicien qu il deteste."],
  ["Maya says the town hall idea is bad because the presenter once worked with someone she argues with.", "Maya dit que l idee de la reunion publique est mauvaise parce que le presentateur a deja travaille avec quelqu un avec qui elle se dispute."],
  ["Theo dismisses the safety plan because a person tied to it belongs to a group he looks down on.", "Theo rejette le plan de securite parce qu une personne qui y est liee appartient a un groupe qu il meprise."],
  ["Ava says the market stall is shady because the seller is related to someone she distrusts.", "Ava dit que l etal de marche est louche parce que le vendeur est lie a quelqu un en qui elle n a pas confiance."],
  ["Noah rejects the homework help because one contributor follows a creator he thinks is ridiculous.", "Noah rejette l aide aux devoirs parce qu un contributeur suit un createur qu il trouve ridicule."],
  ["Lina says the charity poster is fake because the artist is friends with a rival club member.", "Lina dit que l affiche caritative est fausse parce que l artiste est amie avec un membre d un club rival."],
  ["Ravi dismisses the recipe video because the chef is connected to a page he finds annoying.", "Ravi balaie la video de recette parce que le chef est lie a une page qu il trouve penible."],
  ["Sofia says the workshop is no good because the organizer knows a cousin she does not respect.", "Sofia dit que l atelier ne vaut rien parce que l organisateur connait un cousin qu elle ne respecte pas."],
  ["Maya rejects the tutoring flyer because one tutor is friends with a creator she mocks.", "Maya rejette le prospectus de tutorat parce qu un tuteur est ami avec un createur qu elle se moque."],
  ["Ben says the neighborhood app is shady because a user follows his rival's brother.", "Ben dit que l application de quartier est louche parce qu un utilisateur suit le frere de son rival."],
  ["Priya dismisses the volunteer picnic because the host once collaborated with a blogger she hates.", "Priya rejette le pique-nique de benevoles parce que l hote a deja collabore avec un blogueur qu elle deteste."],
  ["Noah thinks the new club is bad because one supporter also belongs to a group he stereotypes.", "Noah pense que le nouveau club est mauvais parce qu un partisan appartient aussi a un groupe qu il stereotype."],
  ["Lina refuses the charity raffle because the organizer is linked to someone she argues with online.", "Lina refuse la tombola caritative parce que l organisateur est lie a quelqu un avec qui elle se dispute en ligne."],
  ["Theo says the book swap is suspicious because a donor is connected to a teacher he blames.", "Theo dit que l echange de livres est suspect parce qu un donateur est lie a un professeur qu il tient pour responsable."],
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
