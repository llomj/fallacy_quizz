import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['The city reports higher average income in one district, so Maya assumes every resident there is wealthy.', 'La ville annonce un revenu moyen plus élevé dans un quartier, alors Maya suppose que chaque habitant y est riche.'],
  ['A school has strong math scores overall, so Leo assumes every student in the school is good at math.', 'Une école a de bons résultats moyens en maths, alors Leo suppose que chaque élève de cette école est bon en maths.'],
  ['A neighborhood has a low crime rate, so Priya thinks the family moving there must feel completely safe.', 'Un quartier a un faible taux de criminalité, alors Priya pense que la famille qui y emménage doit s y sentir totalement en sécurité.'],
  ['A company says its office is highly productive, so Omar assumes every employee there works at top speed all day.', 'Une entreprise dit que son bureau est très productif, alors Omar suppose que chaque employé y travaille à toute vitesse toute la journée.'],
  ['A country has a high life expectancy, so Rina assumes every person in that country lives a very long life.', 'Un pays a une forte espérance de vie, alors Rina suppose que chaque personne dans ce pays vit très longtemps.'],
  ['A sports team has a winning season, so Ben assumes every player is an above-average athlete.', 'Une équipe sportive fait une grande saison, alors Ben suppose que chaque joueur est un athlète au-dessus de la moyenne.'],
  ['A town has many university graduates, so Zoe thinks any teenager there must already be college-ready.', 'Une ville compte beaucoup de diplômés de l université, alors Zoe pense que n importe quel ado de là-bas est déjà prêt pour les études supérieures.'],
  ['A clinic says its patients have good cholesterol on average, so Kai assumes each patient has healthy numbers.', 'Une clinique dit que ses patients ont en moyenne un bon cholestérol, alors Kai suppose que chaque patient a des chiffres sains.'],
  ['A district has strong reading scores, so Nora assumes every child in the district reads above grade level.', 'Un district a de bons scores en lecture, alors Nora suppose que chaque enfant du district lit au-dessus du niveau attendu.'],
  ['A neighborhood is known for eco-friendly habits, so Eli assumes every household there recycles perfectly.', 'Un quartier est connu pour ses habitudes écologiques, alors Eli suppose que chaque foyer y recycle parfaitement.'],
  ['A region has high voter turnout, so Lina assumes every resident is equally engaged in politics.', 'Une région a une forte participation électorale, alors Lina suppose que chaque habitant y est aussi engagé politiquement.'],
  ['A city reports low average stress, so Grant assumes every commuter there feels relaxed.', 'Une ville annonce un faible stress moyen, alors Grant suppose que chaque navetteur y est détendu.'],
  ['A workplace says its staff are satisfied overall, so Tia assumes every worker loves the job.', 'Un lieu de travail dit que le personnel est globalement satisfait, alors Tia suppose que chaque employé adore son travail.'],
  ['A county has a high graduation rate, so Noah assumes every family there has a straight-A student.', 'Un comté a un fort taux de diplomation, alors Noah suppose que chaque famille y a un élève avec de très bonnes notes.'],
  ['A market town has many healthy shoppers, so Mia assumes every shopper there eats well.', 'Une ville de marché compte beaucoup de clients en bonne santé, alors Mia suppose que chaque client y mange bien.'],
  ['A school district has lots of sports trophies, so Jules assumes every student is athletic.', 'Un district scolaire a beaucoup de trophées sportifs, alors Jules suppose que chaque élève y est sportif.'],
  ['A city has excellent public transit use, so Ava assumes every resident owns no car.', 'Une ville utilise très bien les transports publics, alors Ava suppose que chaque habitant n a pas de voiture.'],
  ['A hospital reports fewer readmissions overall, so Finn assumes every patient is recovering smoothly.', 'Un hôpital signale moins de réadmissions au total, alors Finn suppose que chaque patient se rétablit sans problème.'],
  ['A county has high broadband access, so Pia assumes every home has fast internet.', 'Un comté a un bon accès au haut débit, alors Pia suppose que chaque foyer a un internet rapide.'],
  ['A city boasts a high average score on a well-being survey, so Hugo assumes every resident feels happy.', 'Une ville affiche une forte moyenne de bien-être sur une enquête, alors Hugo suppose que chaque habitant se sent heureux.'],
  ['A university has a strong reputation, so Sam assumes every professor there is brilliant.', 'Une université a une bonne réputation, alors Sam suppose que chaque professeur y est brillant.'],
  ['A suburb has a lot of book lovers, so Juno assumes every neighbor reads nightly.', 'Une banlieue compte beaucoup de lecteurs, alors Juno suppose que chaque voisin y lit tous les soirs.'],
  ['A city has a high average commute time, so Iris assumes every worker spends hours in traffic.', 'Une ville a un temps de trajet moyen élevé, alors Iris suppose que chaque salarié passe des heures dans les embouteillages.'],
  ['A village is famous for home gardens, so Cole assumes every yard there is full of vegetables.', 'Un village est connu pour ses potagers, alors Cole suppose que chaque jardin y est rempli de légumes.'],
  ['A district has high test scores, so Nora assumes every classroom is full of top students.', 'Un district a de bonnes notes aux tests, alors Nora suppose que chaque classe y est remplie d élèves excellents.'],
  ['A city has many coffee shops, so Ari assumes every resident drinks coffee every day.', 'Une ville compte beaucoup de cafés, alors Ari suppose que chaque habitant boit du café tous les jours.'],
  ['A region has lower debt on average, so Rita assumes every household there is financially secure.', 'Une région a une dette moyenne plus faible, alors Rita suppose que chaque foyer y est financièrement à l abri.'],
  ['A sports club has a great team record, so Theo assumes every member is a star player.', 'Un club sportif a un excellent palmarès, alors Theo suppose que chaque membre y est une star du jeu.'],
  ['A city has strong arts funding, so Hana assumes every resident goes to museums weekly.', 'Une ville finance beaucoup les arts, alors Hana suppose que chaque habitant va au musée chaque semaine.'],
  ['A county has healthy average blood pressure numbers, so Max assumes every adult there is healthy.', 'Un comté affiche de bonnes moyennes de tension artérielle, alors Max suppose que chaque adulte y est en bonne santé.'],
  ['A neighborhood has many electric cars, so Zoe assumes every driver there is environmentally minded.', 'Un quartier compte beaucoup de voitures électriques, alors Zoé suppose que chaque conducteur y est soucieux de l environnement.'],
  ['A school has a low dropout rate, so Liam assumes every student feels supported.', 'Une école a un faible taux de décrochage, alors Liam suppose que chaque élève s y sent soutenu.'],
  ['A city has a high average score on a happiness app, so Maya assumes every person there feels upbeat.', 'Une ville a une forte moyenne sur une appli de bonheur, alors Maya suppose que chaque personne y se sent joyeuse.'],
  ['A coastal town gets many tourist reviews, so Ben assumes every local makes money from tourism.', 'Une ville côtière reçoit beaucoup d avis touristiques, alors Ben suppose que chaque habitant y gagne de l argent grâce au tourisme.'],
  ['A workplace has a low turnover rate, so Lina assumes every employee wants to stay forever.', 'Un lieu de travail a un faible taux de départ, alors Lina suppose que chaque employé veut y rester pour toujours.'],
  ['A city has many cyclists, so Owen assumes every resident prefers bikes to cars.', 'Une ville compte beaucoup de cyclistes, alors Owen suppose que chaque habitant préfère le vélo à la voiture.'],
  ['A district has high science scores, so Priya assumes every child there loves science.', 'Un district a de bons scores en sciences, alors Priya suppose que chaque enfant y aime les sciences.'],
  ['A town has low air pollution, so Eli assumes every home has perfect indoor air.', 'Une ville a peu de pollution de l air, alors Eli suppose que chaque maison y a un air intérieur parfait.'],
  ['A city has many vegan restaurants, so Nora assumes every resident is vegan.', 'Une ville compte beaucoup de restaurants végétaliens, alors Nora suppose que chaque habitant y est végétalien.'],
  ['A suburb has strong home values, so Grant assumes every homeowner is comfortable paying the mortgage.', 'Une banlieue a des valeurs immobilières élevées, alors Grant suppose que chaque propriétaire y paie son prêt sans difficulté.'],
  ['A region has lots of young professionals, so Tia assumes every street is full of startups.', 'Une région compte beaucoup de jeunes actifs, alors Tia suppose que chaque rue y regorge de start-up.'],
  ['A school has a good attendance average, so Finn assumes every class is well-behaved.', 'Une école a une bonne moyenne de présence, alors Finn suppose que chaque classe y est sage.'],
  ['A town has many tech workers, so Mia assumes every household owns the latest gadgets.', 'Une ville compte beaucoup de travailleurs de la tech, alors Mia suppose que chaque foyer y possède les derniers gadgets.'],
  ['A neighborhood has many dog owners, so Jules assumes every yard there has a pet running around.', 'Un quartier compte beaucoup de propriétaires de chiens, alors Jules suppose que chaque jardin y a un animal qui court partout.'],
  ['A country reports high volunteer rates, so Ava assumes every citizen gives time to charity.', 'Un pays annonce un fort taux de bénévolat, alors Ava suppose que chaque citoyen y donne du temps à des œuvres caritatives.'],
  ['A city has a strong average on a safety survey, so Hugo assumes every woman walking alone feels safe at night.', 'Une ville obtient une bonne moyenne sur un sondage de sécurité, alors Hugo suppose que chaque femme qui marche seule y se sent en sécurité la nuit.'],
  ['A district has excellent school lunches overall, so Sam assumes every child likes the food.', 'Un district a de très bons repas scolaires au total, alors Sam suppose que chaque enfant aime la nourriture.'],
  ['A neighborhood has many renovated houses, so Juno assumes every owner there is rich.', 'Un quartier compte beaucoup de maisons rénovées, alors Juno suppose que chaque propriétaire y est riche.'],
  ['A city has a strong average score for public parks, so Iris assumes every resident uses them often.', 'Une ville a une bonne moyenne pour ses parcs publics, alors Iris suppose que chaque habitant les utilise souvent.'],
  ['A workplace has high average customer ratings, so Cole assumes every employee gets praised.', 'Un lieu de travail a de bonnes notes clients en moyenne, alors Cole suppose que chaque employé y reçoit des compliments.'],
  ['A town has many art students, so Riley assumes every teenager there is creative.', 'Une ville compte beaucoup d étudiants en arts, alors Riley suppose que chaque ado y est créatif.'],
  ['A city has a low average mortgage rate, so Pia assumes every first-time buyer got an easy loan.', 'Une ville a un taux de prêt immobilier moyen bas, alors Pia suppose que chaque premier acheteur a obtenu un prêt facile.'],
];

const OPTIONS_EN = ['Ecological Fallacy', 'Hasty Generalization', 'Correlation Implies Causation', 'Selection Bias'];
const OPTIONS_FR = ['Sophisme écologique', 'Généralisation hâtive', 'Corrélation prise pour causalité', 'Biais de sélection'];

function rotate(options: string[], correctIndex: number): string[] {
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

function makeQuestions(language: 'en' | 'fr'): Question[] {
  return SCENARIOS.map(([english, french], index) => {
    const correctIndex = index % 4;
    const isFrench = language === 'fr';
    return {
      id: 37051 + index,
      level: 3,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Sophisme écologique' : 'Ecological Fallacy',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotate(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? "On attribue à une personne ou à un foyer ce qui n est vrai qu en moyenne pour un groupe entier."
        : 'A group-level pattern is being treated as if it must be true for one individual member.',
      detailedExplanationBeginner: isFrench
        ? 'Une moyenne de groupe ne dit pas automatiquement ce qu une personne précise vit ou fait.'
        : 'A group average does not automatically tell you what one specific person does or experiences.',
      detailedExplanationIntermediate: isFrench
        ? "Le raisonnement saute du niveau collectif au niveau individuel sans preuve supplémentaire. Ce passage est souvent trompeur parce qu une moyenne peut cacher de très grandes différences entre les personnes."
        : 'The reasoning jumps from the collective level to the individual level without extra evidence. That leap is misleading because an average can hide big differences between people.',
      detailedExplanationExpert: isFrench
        ? "Le sophisme écologique consiste à inférer une propriété individuelle à partir d une statistique agrégée. Pour passer du groupe à l individu, il faut des données individuelles ou un modèle qui relie clairement les deux niveaux; sinon, la conclusion peut être fausse même si la moyenne du groupe est correcte."
        : 'The ecological fallacy infers an individual property from an aggregate statistic. Moving from group data to an individual claim requires individual-level evidence or a model that clearly links the two levels; otherwise the conclusion can be wrong even when the group average is accurate.',
      questionFormat: 'standard',
    };
  });
}

export const ECOLOGICAL_FALLACY_EXPANSION_EN: Question[] = makeQuestions('en');
export const ECOLOGICAL_FALLACY_EXPANSION_FR: Question[] = makeQuestions('fr');
