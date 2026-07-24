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
