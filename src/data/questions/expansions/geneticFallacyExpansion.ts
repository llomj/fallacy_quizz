import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["The mayor's recycling proposal is dismissed because she used to work in marketing at a billboard company near downtown, so people assume she is just selling slogans.", "La proposition de recyclage de la maire est rejetée parce qu'elle a travaillé dans le marketing dans une entreprise de panneaux publicitaires pres du centre-ville, alors les gens supposent qu'elle vend juste des slogans."],
  ["Ben says the charity report is useless because the accountant once worked for a big bank downtown and wore suits on Fridays.", "Ben dit que le rapport de l'association ne vaut rien parce que le comptable a autrefois travaillé pour une grande banque du centre-ville et portait des costumes le vendredi."],
  ["Maya rejects the science article because the author studied at a community college.", "Maya rejette l'article scientifique parce que l'auteur a étudié dans un collège communautaire."],
  ["Theo insists the opinion about food trucks is wrong because the speaker grew up in a wealthy suburb.", "Theo insiste pour dire que l'avis sur les food trucks est faux parce que l'orateur a grandi dans une banlieue aisée."],
  ["Lina thinks the budget idea is bad because it came from a startup founder.", "Lina pense que l'idée budgétaire est mauvaise parce qu'elle vient d'un fondateur de start-up."],
  ["Omar dismisses the museum plan because the designer also makes comic books.", "Omar rejette le plan du musée parce que le concepteur fait aussi des bandes dessinées."],
  ["Priya says the safety advice is worthless because the speaker used to be a gamer.", "Priya dit que le conseil de sécurité ne vaut rien parce que l'orateur était autrefois joueur."],
  ["Nora rejects the school schedule because the teacher once worked in retail.", "Nora rejette l'emploi du temps scolaire parce que le professeur a déjà travaillé dans le commerce de détail."],
  ["Eli believes the app review is false because the reviewer studied philosophy, not computer science.", "Eli croit que l'avis sur l'application est faux parce que le critique a étudié la philosophie et non l'informatique."],
  ["Rosa thinks the travel guide is bad because the author grew up on a farm.", "Rosa pense que le guide de voyage est mauvais parce que l'auteur a grandi dans une ferme."],
  ["Jules says the policy proposal is unreliable because the speaker used to be a comedian.", "Jules dit que la proposition de politique n'est pas fiable parce que l'orateur était autrefois humoriste."],
  ["Ava dismisses the health blog because the writer once sold shoes.", "Ava rejette le blog santé parce que l'auteur a vendu des chaussures autrefois."],
  ["Noah believes the city report is wrong because the researcher attended a technical school.", "Noah croit que le rapport de la ville est faux parce que le chercheur a fréquenté une école technique."],
  ["Kim says the restaurant review is invalid because the reviewer used to be a musician.", "Kim dit que la critique du restaurant n'est pas valable parce que le critique était autrefois musicien."],
  ["Salma rejects the classroom tip because the speaker came from a different country.", "Salma rejette le conseil de classe parce que l'orateur venait d'un autre pays."],
  ["Hugo says the gardening advice is bad because the speaker is a former accountant.", "Hugo dit que le conseil de jardinage est mauvais parce que l'orateur est un ancien comptable."],
  ["Lea dismisses the new safety rule because it was written by a student intern.", "Lea rejette la nouvelle règle de sécurité parce qu'elle a été rédigée par un stagiaire."],
  ["Max thinks the art critique is false because the critic used to run a café.", "Max pense que la critique d'art est fausse parce que le critique tenait autrefois un café."],
  ["Tia says the traffic suggestion is wrong because the speaker plays piano.", "Tia dit que la suggestion sur le trafic est fausse parce que l'orateur joue du piano."],
  ["Paul believes the climate fact sheet is untrustworthy because the writer once lived in the countryside.", "Paul croit que la fiche climatique n'est pas digne de confiance parce que l'auteur a vécu à la campagne."],
  ["Yara says the movie review is bad because the reviewer studied design instead of film.", "Yara dit que la critique du film est mauvaise parce que le critique a étudié le design plutôt que le cinéma."],
  ["Dan rejects the fundraiser because the organizer came from a famous family.", "Dan rejette la collecte parce que l'organisateur vient d'une famille célèbre."],
  ["Mina says the cooking tip is useless because the chef used to work in a fast-food place.", "Mina dit que le conseil de cuisine est inutile parce que le chef travaillait autrefois dans un fast-food."],
  ["Eric dismisses the school policy because the principal once worked at a bookstore.", "Eric rejette la politique scolaire parce que le directeur a autrefois travaillé dans une librairie."],
  ["Grace believes the housing proposal is weak because the speaker is a social media creator.", "Grace pense que la proposition de logement est faible parce que l'orateur est créateur de contenu."],
  ["Owen thinks the medical blog is wrong because the author used to be a taxi driver.", "Owen pense que le blog médical est faux parce que l'auteur était autrefois chauffeur de taxi."],
  ["Mila says the event flyer is misleading because the designer studied theater.", "Mila dit que le prospectus de l'événement est trompeur parce que le designer a étudié le théâtre."],
  ["Jin rejects the proposal because the expert came from a small town.", "Jin rejette la proposition parce que l'expert vient d'une petite ville."],
  ["Ravi dismisses the science demo because the presenter used to fix phones.", "Ravi balaie la démonstration scientifique parce que le présentateur réparait des téléphones autrefois."],
  ["Sofia says the volunteer schedule is bad because the coordinator worked in hospitality.", "Sofia dit que le planning des bénévoles est mauvais parce que le coordinateur a travaillé dans l'hôtellerie."],
  ["Ben believes the tax advice is wrong because the speaker grew up abroad.", "Ben pense que le conseil fiscal est faux parce que l'orateur a grandi à l'étranger."],
  ["Nora says the recycling chart is false because the analyst once wrote ads.", "Nora dit que le graphique sur le recyclage est faux parce que l'analyste a autrefois rédigé des pubs."],
  ["Alex dismisses the school fundraiser because the organizer has tattoos.", "Alex rejette la collecte de l'école parce que l'organisateur a des tatouages."],
  ["Maya thinks the transit memo is useless because the author used to be a cook.", "Maya pense que la note sur les transports est inutile parce que l'auteur était autrefois cuisinier."],
  ["Theo rejects the safety training because the presenter studied art.", "Theo rejette la formation sécurité parce que la personne qui l'animait a étudié l'art."],
  ["Lina says the neighborhood alert is wrong because the author came from a working-class background.", "Lina dit que l'alerte du quartier est fausse parce que l'auteur vient d'un milieu ouvrier."],
  ["Omar dismisses the app feature because the engineer was previously a student journalist.", "Omar rejette la fonctionnalité de l'application parce que l'ingénieur était auparavant journaliste étudiant."],
  ["Priya believes the class guide is bad because the writer used to be a waiter.", "Priya pense que le guide de classe est mauvais parce que l'auteur était autrefois serveur."],
  ["Nina says the town survey is wrong because the researcher came from a different religion.", "Nina dit que le sondage municipal est faux parce que le chercheur vient d'une autre religion."],
  ["Eli rejects the sports tip because the coach once worked in retail.", "Eli rejette le conseil sportif parce que l'entraîneur a travaillé dans le commerce de détail."],
  ["Rosa thinks the charity infographic is unreliable because the designer is self-taught.", "Rosa pense que l'infographie caritative n'est pas fiable parce que le designer est autodidacte."],
  ["Jules says the meal plan is false because the speaker used to repair bikes.", "Jules dit que le plan de repas est faux parce que l'orateur réparait des vélos autrefois."],
  ["Ava dismisses the library policy because the author was raised in a rural area.", "Ava rejette la politique de bibliothèque parce que l'auteur a été élevé en zone rurale."],
  ["Noah thinks the climate proposal is bad because the speaker used to deliver newspapers.", "Noah pense que la proposition climatique est mauvaise parce que l'orateur distribuait des journaux."],
  ["Kim says the event schedule is wrong because the planner studied sociology.", "Kim dit que l'horaire de l'événement est faux parce que le planificateur a étudié la sociologie."],
  ["Salma rejects the road safety ad because the writer comes from a wealthy school.", "Salma rejette l'annonce de sécurité routière parce que l'auteur vient d'une école privée."],
  ["Hugo says the donation pitch is bad because the speaker once sold used cars.", "Hugo dit que la proposition de don est mauvaise parce que l'orateur vendait des voitures d'occasion."],
  ["Lea thinks the workshop plan is wrong because the facilitator worked in customer support.", "Lea pense que le plan de l'atelier est faux parce que l'animateur a travaillé au support client."],
  ["Max dismisses the team memo because the writer is an immigrant.", "Max balaie la note d'équipe parce que l'auteur est immigrant."],
  ["Mia rejects the neighborhood cleanup idea because the organizer once worked at a theme park.", "Mia rejette l'idee de nettoyage du quartier parce que l'organisateur a autrefois travaille dans un parc a theme."],
  ["Noah says the book recommendation is useless because the reviewer used to be a taxi driver.", "Noah dit que la recommandation de livre ne vaut rien parce que le critique etait autrefois chauffeur de taxi."],
  ["Ava dismisses the cooking tip because the chef learned in a small village kitchen.", "Ava rejette le conseil de cuisine parce que le chef a appris dans une petite cuisine de village."],
  ["Eli thinks the budget plan is bad because the speaker once ran a flower shop.", "Eli pense que le plan budgetaire est mauvais parce que l'orateur tenait autrefois une boutique de fleurs."],
  ["Zoe rejects the school survey because the student who wrote it is homeschooled.", "Zoe rejette le sondage de l'ecole parce que l'eleve qui l'a ecrit fait l'ecole a la maison."],
  ["Jules says the health warning is false because the author used to sell bicycles.", "Jules dit que l'avertissement sante est faux parce que l'auteur vendait des velos autrefois."],
  ["Priya dismisses the concert review because the critic studied painting instead of music.", "Priya rejette la critique du concert parce que le critique a etudie la peinture au lieu de la musique."],
  ["Ben believes the city plan is wrong because the architect grew up in a farming town.", "Ben croit que le plan de la ville est faux parce que l'architecte a grandi dans une ville agricole."],
  ["Lina rejects the safety checklist because the writer used to work on boats.", "Lina rejette la liste de securite parce que l'auteur travaillait autrefois sur des bateaux."],
  ["Omar says the volunteer idea is bad because it came from a student who wears hand-me-down clothes.", "Omar dit que l'idee de benevolat est mauvaise parce qu'elle vient d'un eleve qui porte des vetements d'occasion."],
  ["Maya rejects the repair advice because the person who gave it learned the job from a relative.", "Maya rejette le conseil de réparation parce que la personne qui l'a donné a appris le métier d'un proche."],
  ["Theo says the reading list is bad because it was put together by a first-year intern.", "Theo dit que la liste de lecture est mauvaise parce qu'elle a été préparée par un stagiaire de première année."],
  ["Lina dismisses the travel tip because the writer grew up near the airport.", "Lina rejette le conseil de voyage parce que l'auteur a grandi près de l'aéroport."],
  ["Omar thinks the math note is wrong because the student who wrote it was homeschooled.", "Omar pense que la note de maths est fausse parce que l'élève qui l'a écrite faisait l'école à la maison."],
  ["Priya rejects the budget idea because it came from someone who used to work in a bakery.", "Priya rejette l'idée de budget parce qu'elle vient de quelqu'un qui travaillait autrefois dans une boulangerie."],
  ["Nora says the safety poster is useless because the designer studied dance.", "Nora dit que l'affiche de sécurité ne vaut rien parce que le designer a étudié la danse."],
  ["Eli dismisses the science club because the leader is a former mechanic.", "Eli rejette le club de sciences parce que le responsable est un ancien mécanicien."],
  ["Rosa thinks the dinner invitation is suspicious because the host came from a wealthy family.", "Rosa pense que l'invitation au dîner est suspecte parce que l'hôte vient d'une famille riche."],
  ["Jules says the newspaper column is false because the columnist used to work in radio.", "Jules dit que la chronique du journal est fausse parce que le chroniqueur travaillait autrefois à la radio."],
  ["Ava rejects the recycling reminder because the volunteer is a college dropout.", "Ava rejette le rappel sur le recyclage parce que le bénévole a quitté l'université."],
  ["Noah says the homework tip is bad because the writer once drove delivery trucks.", "Noah dit que le conseil de devoirs est mauvais parce que l'auteur conduisait autrefois des camions de livraison."],
  ["Kim dismisses the fitness plan because the trainer also paints landscapes.", "Kim balaie le programme de remise en forme parce que l'entraîneur peint aussi des paysages."],
  ["Salma says the civic proposal is weak because the speaker studied literature.", "Salma dit que la proposition civique est faible parce que l'orateur a étudié la littérature."],
  ["Grant rejects the parking idea because the organizer is friends with people from a rival school.", "Grant rejette l'idée de stationnement parce que l'organisateur est ami avec des personnes d'une école rivale."],
  ["Mila thinks the recipe note is false because the chef learned from a street vendor.", "Mila pense que la note de recette est fausse parce que le chef a appris d'un vendeur de rue."],
  ["Owen dismisses the language app because the developer grew up speaking three languages at home.", "Owen rejette l'application de langues parce que le développeur a grandi en parlant trois langues à la maison."],
  ["Jin says the tutoring flyer is bad because the tutor used to work at a cinema.", "Jin dit que le prospectus de tutorat est mauvais parce que le tuteur travaillait autrefois dans un cinéma."],
  ["Pia rejects the school trip because the guide came from another part of the country.", "Pia rejette la sortie scolaire parce que le guide vient d'une autre région du pays."],
  ["Dan thinks the garden plan is wrong because the writer came from a city apartment.", "Dan pense que le plan du jardin est faux parce que l'auteur vient d'un appartement en ville."],
  ["Ravi dismisses the money-saving tip because the author once sold handmade soaps.", "Ravi balaie le conseil d'économie parce que l'auteur vendait autrefois des savons artisanaux."],
  ["Sofia says the library event is unreliable because the organizer is a freshman.", "Sofia dit que l'événement de la bibliothèque n'est pas fiable parce que l'organisateur est en première année."],
  ["Ben rejects the work schedule because it was designed by someone who changed careers.", "Ben rejette l'horaire de travail parce qu'il a été conçu par quelqu'un qui a changé de carrière."],
  ["Nina believes the sports article is false because the writer grew up in a small coastal town.", "Nina croit que l'article sportif est faux parce que l'auteur a grandi dans une petite ville côtière."],
  ["Alex dismisses the school survey because the student who wrote it is younger than the others.", "Alex rejette le sondage scolaire parce que l'élève qui l'a écrit est plus jeune que les autres."],
  ["Maya says the travel insurance is bad because the agent used to work at a bookstore.", "Maya dit que l'assurance voyage est mauvaise parce que l'agent travaillait autrefois dans une librairie."],
  ["Theo thinks the volunteer poster is wrong because the designer has no college degree.", "Theo pense que l'affiche de bénévolat est fausse parce que le designer n'a pas de diplôme universitaire."],
  ["Lina rejects the health newsletter because the author is from a different generation.", "Lina rejette la lettre d'information santé parce que l'auteur vient d'une autre génération."],
  ["Omar dismisses the homework shortcut because it came from a parent who works nights.", "Omar rejette le raccourci pour les devoirs parce qu'il vient d'un parent qui travaille de nuit."],
  ["Priya says the meeting note is bad because the author once ran a small cafe.", "Priya dit que la note de réunion est mauvaise parce que l'auteur tenait autrefois un petit café."],
  ["Eli rejects the art class because the teacher is self-employed.", "Eli rejette le cours d'art parce que le professeur travaille à son compte."],
  ["Rosa says the school calendar is false because the planner used to be a student athlete.", "Rosa dit que le calendrier scolaire est faux parce que le planificateur était autrefois sportif étudiant."],
  ["Jules thinks the discount flyer is useless because the author came from a military family.", "Jules pense que le prospectus de réduction ne vaut rien parce que l'auteur vient d'une famille militaire."],
  ["Ava dismisses the city map because the cartographer is a beginner.", "Ava rejette la carte de la ville parce que le cartographe est débutant."],
  ["Noah says the community plan is bad because the writer worked in a garage.", "Noah dit que le plan communautaire est mauvais parce que l'auteur travaillait dans un garage."],
  ["Kim rejects the grammar tip because it was shared by someone who posts memes.", "Kim rejette le conseil de grammaire parce qu'il a été partagé par quelqu'un qui publie des mèmes."],
  ["Salma says the charity idea is wrong because it came from a teacher who loves gardening.", "Salma dit que l'idée caritative est fausse parce qu'elle vient d'un professeur qui aime le jardinage."],
  ["Grant dismisses the event schedule because the organizer once worked in a gas station.", "Grant rejette le programme de l'événement parce que l'organisateur a autrefois travaillé dans une station-service."],
  ["Mila says the homework app is bad because the developer came from a family of farmers.", "Mila dit que l'application de devoirs est mauvaise parce que le développeur vient d'une famille d'agriculteurs."],
  ["Owen thinks the city memo is false because the author studied film production.", "Owen pense que la note municipale est fausse parce que l'auteur a étudié la production cinématographique."],
  ["Jin rejects the science fair poster because the student grew up in a neighborhood he looks down on.", "Jin rejette l'affiche du salon scientifique parce que l'élève a grandi dans un quartier qu'il méprise."],
  ["Pia says the volunteer handbook is useless because the writer used to work as a cashier.", "Pia dit que le manuel des bénévoles ne vaut rien parce que l'auteur travaillait autrefois comme caissier."],
];

const OPTIONS_EN = ['Genetic Fallacy', 'Appeal to Authority', 'Ad Hominem', 'False Dichotomy'];
const OPTIONS_FR = ['Sophisme génétique', "Appel à l'autorité", 'Attaque ad hominem', 'Faux dilemme'];

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

export const GENETIC_FALLACY_EXPANSION_EN: Question[] = SCENARIOS.map(([english], index) => {
  const correctIndex = index % 4;
  return {
    id: 37201 + index,
    level: 1,
    persona_stage: PersonaStage.PLANKTON,
    concept: 'Genetic Fallacy',
    difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Which fallacy is used here?\n\n"${english}"`,
    options: rotatedOptions(OPTIONS_EN, correctIndex),
    correct_option_index: correctIndex,
    explanation: 'The claim is judged by where it came from, who said it, or the speaker’s background instead of the actual content.',
    detailedExplanationBeginner: 'Origin is used as a shortcut to judge the claim.',
    detailedExplanationIntermediate: 'The response treats the source, background, or origin of an idea as if that alone settled whether the idea is true or useful.',
    detailedExplanationExpert: 'This is the genetic fallacy. A claim should be assessed on evidence and reasoning, not dismissed or accepted merely because of its origin, social source, or the identity of the person presenting it.',
    questionFormat: 'standard'
  };
});

export const GENETIC_FALLACY_EXPANSION_FR: Question[] = SCENARIOS.map(([, french], index) => {
  const correctIndex = index % 4;
  return {
    id: 37201 + index,
    level: 1,
    persona_stage: PersonaStage.PLANKTON,
    concept: 'Sophisme génétique',
    difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Quel sophisme est utilisé ici ?\n\n"${french}"`,
    options: rotatedOptions(OPTIONS_FR, correctIndex),
    correct_option_index: correctIndex,
    explanation: "L'affirmation est jugée selon son origine, la personne qui la dit ou le parcours de l'orateur, au lieu de son contenu réel.",
    detailedExplanationBeginner: "L'origine sert de raccourci pour juger l'affirmation.",
    detailedExplanationIntermediate: "La réponse traite la source, le contexte ou l'origine d'une idée comme si cela suffisait à décider si l'idée est vraie ou utile.",
    detailedExplanationExpert: "C'est le sophisme génétique. Une affirmation doit être évaluée selon les preuves et le raisonnement, et non rejetée ou acceptée simplement à cause de son origine, de sa source sociale ou de l'identité de la personne qui la présente.",
    questionFormat: 'standard'
  };
});
