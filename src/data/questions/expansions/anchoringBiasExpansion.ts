import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['A jacket first marked $300 feels cheap to Mia at $120, although similar jackets normally cost $80.', 'Une veste d’abord affichée à 300 € paraît bon marché à Mia à 120 €, alors que les modèles comparables coûtent 80 €.'],
  ['The seller mentions $9,000 before negotiations, so Leo treats $7,500 as a bargain for a car worth about $6,000.', 'Le vendeur annonce 9 000 € avant de négocier ; Leo trouve donc 7 500 € avantageux pour une voiture qui vaut environ 6 000 €.'],
  ['After seeing a 90-minute estimate, Ana calls a 60-minute wait fast, even though the service usually takes 30 minutes.', 'Après avoir vu une estimation de 90 minutes, Ana trouve une attente de 60 minutes rapide, alors que le service prend normalement 30 minutes.'],
  ['A menu lists a $100 seafood tower first, making the $42 pasta seem reasonably priced.', 'Un menu présente d’abord un plateau de fruits de mer à 100 €, ce qui fait paraître raisonnables les pâtes à 42 €.'],
  ['The first apartment Omar sees costs $2,500, so the next one at $2,100 feels affordable despite his $1,600 budget.', 'Le premier appartement visité par Omar coûte 2 500 € ; le suivant à 2 100 € lui paraît abordable malgré son budget de 1 600 €.'],
  ['A quiz host asks whether a whale weighs more than 100 tons before requesting an estimate; Priya guesses close to 100.', 'Un animateur demande d’abord si une baleine pèse plus de 100 tonnes ; Priya donne ensuite une estimation proche de 100.'],
  ['The phone was advertised at $1,400 last month, so Ben thinks $1,050 is a steal without comparing other phones.', 'Le téléphone était affiché à 1 400 € le mois dernier ; Ben pense donc que 1 050 € est une affaire sans comparer les autres modèles.'],
  ['A recruiter mentions a $95,000 salary range first, and Nina bases her request on it rather than the role’s market rate.', 'Une recruteuse mentionne d’abord 95 000 € ; Nina fonde sa demande sur ce chiffre plutôt que sur le salaire du marché.'],
  ['Sam reads one prediction of 30 goals and later judges a 22-goal season disappointing, though 18 is typical.', 'Sam lit une prédiction de 30 buts puis juge une saison à 22 buts décevante, alors que la moyenne est de 18.'],
  ['A charity form starts with a $500 donation button, making $100 feel small to Clara.', 'Un formulaire de don commence par un bouton à 500 €, ce qui fait paraître 100 € faible à Clara.'],
  ['The mechanic first warns of a $4,000 repair, so Jules quickly accepts a $2,200 quote without checking it.', 'Le garagiste évoque d’abord une réparation à 4 000 € ; Jules accepte vite un devis à 2 200 € sans le vérifier.'],
  ['After hearing that a project might take twelve months, Mei calls eight months excellent despite the original four-month plan.', 'Après avoir entendu que le projet pourrait durer douze mois, Mei trouve huit mois excellent malgré le plan initial de quatre mois.'],
  ['A game displays a 10,000-coin bundle before the 2,000-coin bundle, making the second purchase seem modest.', 'Un jeu affiche un lot de 10 000 pièces avant celui de 2 000, ce qui fait paraître le second achat modeste.'],
  ['The first review gives a film two stars, and Theo cannot shake that low impression even after several detailed positive reviews.', 'La première critique donne deux étoiles au film, et Theo conserve cette impression négative malgré plusieurs avis positifs détaillés.'],
  ['A real-estate agent says the house once listed for $800,000, so Fatima focuses on that figure instead of current sales nearby.', 'L’agent immobilier dit que la maison était autrefois affichée à 800 000 € ; Fatima se concentre sur ce chiffre plutôt que sur les ventes récentes du quartier.'],
  ['The teacher’s example answer is 75, and most students’ later estimates cluster near 75.', 'L’exemple donné par la professeure vaut 75, et les estimations suivantes des élèves se regroupent autour de 75.'],
  ['A café labels one coffee “regular $12, today $7,” so Eric ignores that nearby cafés charge $5.', 'Un café affiche « prix normal 12 €, aujourd’hui 7 € » ; Eric oublie que les cafés voisins demandent 5 €.'],
  ['A fitness app suggests 15,000 steps on setup, making Lina feel that her healthy 9,000-step day was a failure.', 'Une application propose 15 000 pas au démarrage ; Lina considère donc sa journée saine à 9 000 pas comme un échec.'],
  ['The first wedding venue costs $20,000, so a $14,000 venue seems cheap to Zoe even though the couple planned $8,000.', 'Le premier lieu de mariage coûte 20 000 € ; celui à 14 000 € paraît bon marché à Zoe malgré un budget prévu de 8 000 €.'],
  ['A headline predicts a 20% price rise, and Malik later calls a 12% rise mild rather than historically large.', 'Un titre prédit une hausse de 20 % ; Malik qualifie ensuite 12 % de faible alors que cette hausse reste historiquement élevée.'],
  ['The flea-market seller says a lamp is worth $200; Ravi’s counteroffer stays near that number despite visible damage.', 'Le vendeur du marché affirme que la lampe vaut 200 € ; la contre-offre de Ravi reste proche de ce chiffre malgré les dégâts visibles.'],
  ['A recipe says “serves twelve,” so Grace prepares nearly twelve portions even after learning only six guests are coming.', 'Une recette indique « pour douze personnes » ; Grace prépare presque douze portions même après avoir appris que six invités viendront.'],
  ['The first taxi app shows $70, making a later $50 ride feel cheap, though public transport costs $4.', 'La première application de taxi affiche 70 € ; une course à 50 € paraît ensuite bon marché, alors que les transports coûtent 4 €.'],
  ['A shop places a $2,000 television beside a $1,200 model so the second one feels sensible to Paul.', 'Un magasin place un téléviseur à 2 000 € près d’un modèle à 1 200 €, qui paraît alors raisonnable à Paul.'],
  ['After a friend guesses 200 jellybeans, Yara’s independent-looking guess is 190.', 'Après qu’un ami a proposé 200 bonbons, l’estimation prétendument indépendante de Yara est 190.'],
  ['The boss says the task should take ten hours; Kai keeps budgeting near ten even after a test shows it takes three.', 'Le patron dit que la tâche devrait prendre dix heures ; Kai continue de prévoir environ dix heures même après un test de trois heures.'],
  ['A used bike carries a crossed-out $900 tag, so Emma celebrates paying $600 without noticing new ones cost $550.', 'Un vélo d’occasion porte une étiquette de 900 € barrée ; Emma se réjouit de payer 600 € sans voir que le modèle neuf coûte 550 €.'],
  ['The first doctor says recovery takes six weeks, and Luis dismisses a specialist’s evidence-based three-week estimate.', 'Le premier médecin annonce six semaines de récupération ; Luis rejette ensuite l’estimation documentée de trois semaines du spécialiste.'],
  ['An online poll begins by mentioning 80% support, and Nora’s own estimate lands close to 80% before she sees the data.', 'Un sondage mentionne d’abord 80 % de soutien ; l’estimation personnelle de Nora se rapproche ensuite de 80 % avant même les données.'],
  ['A restaurant calls its giant pizza “$60 value,” making the $35 sale price persuasive to Adam despite not wanting that much food.', 'Un restaurant présente sa pizza géante comme une « valeur de 60 € » ; le prix de 35 € convainc Adam même s’il ne veut pas autant manger.'],
  ['The first contractor quotes $30,000, so Kim accepts $24,000 quickly instead of comparing the actual work required.', 'Le premier entrepreneur annonce 30 000 € ; Kim accepte rapidement 24 000 € sans comparer le travail réellement nécessaire.'],
  ['After hearing a rumor of 1,000 attendees, Hugo calls a crowd of 700 small, although the hall expected 300.', 'Après une rumeur de 1 000 participants, Hugo trouve une foule de 700 personnes petite, alors que la salle en attendait 300.'],
  ['A streaming service shows its premium $40 plan first, making the $25 plan appear basic and inexpensive.', 'Un service de streaming affiche d’abord son offre premium à 40 €, ce qui fait paraître l’offre à 25 € simple et peu chère.'],
  ['The auctioneer opens at $5,000, and Salma evaluates every later bid relative to that opening rather than the object’s quality.', 'Le commissaire-priseur commence à 5 000 € ; Salma évalue ensuite chaque offre par rapport à ce départ plutôt qu’à la qualité de l’objet.'],
  ['A weather app initially predicts 40°C, so 34°C feels cool to Tom even though it is still very hot.', 'Une application prévoit d’abord 40 °C ; 34 °C paraît donc frais à Tom alors que la température reste très élevée.'],
  ['The coach predicts a five-minute kilometer, causing Ava to see six minutes as slow despite her previous seven-minute best.', 'L’entraîneur prévoit un kilomètre en cinq minutes ; Ava trouve donc six minutes lentes malgré son ancien record de sept minutes.'],
  ['A furniture store advertises a sofa as reduced from $6,000 to $3,000, and Jon treats the invented original price as proof of value.', 'Un magasin annonce un canapé réduit de 6 000 € à 3 000 € ; Jon traite le prix initial inventé comme une preuve de valeur.'],
  ['The first estimate says the jar holds 500 marbles, and the group’s guesses remain high after seeing that it is only half full.', 'La première estimation annonce 500 billes ; les réponses du groupe restent élevées même après avoir vu que le bocal n’est qu’à moitié plein.'],
  ['A travel site shows a $900 hotel before a $450 one, making the second option feel economical for a weekend.', 'Un site de voyage affiche un hôtel à 900 € avant un autre à 450 €, ce qui rend le second économique en apparence pour un week-end.'],
  ['The interviewer mentions that top candidates have ten years’ experience, so Mila undervalues a strong candidate with six.', 'Le recruteur indique que les meilleurs candidats ont dix ans d’expérience ; Mila sous-estime donc un excellent profil qui en a six.'],
  ['A parent first suggests a midnight curfew, making the teenager’s 11 p.m. proposal sound moderate instead of late.', 'Un parent propose d’abord minuit comme couvre-feu ; la proposition de 23 heures paraît donc modérée plutôt que tardive.'],
  ['The electronics shop lists a charger at $100 then discounts it to $55, and Dan forgets that ordinary chargers cost $30.', 'Le magasin affiche un chargeur à 100 € puis le réduit à 55 € ; Dan oublie que les chargeurs ordinaires coûtent 30 €.'],
  ['A podcast claims a book takes fifty hours to read, so Iris is impressed when she finishes in thirty, though most readers need twenty.', 'Un podcast affirme qu’un livre demande cinquante heures ; Iris est impressionnée de finir en trente, alors que la plupart des lecteurs en prennent vingt.'],
  ['The first bakery quotes $400 for a cake, making a $300 quote seem fair despite the requested cake normally costing $180.', 'La première boulangerie demande 400 € pour un gâteau ; un devis à 300 € paraît donc correct malgré un prix habituel de 180 €.'],
  ['A sign says “limit five per customer,” prompting Max to buy four jars when he originally needed only one.', 'Une affiche dit « maximum cinq par client » ; Max achète quatre bocaux alors qu’il n’en voulait qu’un.'],
  ['A museum suggests a $30 donation at the entrance, and visitors give amounts clustered around $30.', 'Un musée suggère un don de 30 € à l’entrée ; les sommes données par les visiteurs se regroupent autour de 30 €.'],
  ['The first game score displayed is 900, so Lucie calls her later score of 700 terrible without knowing beginners average 400.', 'Le premier score affiché est 900 ; Lucie juge ensuite son score de 700 mauvais sans savoir que les débutants obtiennent 400 en moyenne.'],
  ['A salon advertises a “usual” $250 haircut reduced to $120, and Theo focuses on the reduction instead of the service itself.', 'Un salon annonce une coupe « normalement à 250 € » réduite à 120 € ; Theo se concentre sur la réduction plutôt que sur le service.'],
  ['After the host suggests the mountain is 4,000 meters high, Sofia’s guess stays near 4,000 despite clues that it is a small hill.', 'Après que l’animateur suggère 4 000 mètres, l’estimation de Sofia reste proche de ce chiffre malgré les indices montrant une petite colline.'],
  ['The first delivery estimate is three weeks, so a two-week delay feels acceptable to Ben even though local delivery normally takes two days.', 'La première estimation de livraison est de trois semaines ; un délai de deux semaines paraît acceptable à Ben alors qu’une livraison locale prend normalement deux jours.']
];

const OPTIONS_EN = ['Anchoring Bias', 'Confirmation Bias', 'Sunk Cost Fallacy', 'Availability Heuristic'];
const OPTIONS_FR = ['Biais d’ancrage', 'Biais de confirmation', 'Sophisme des coûts irrécupérables', 'Heuristique de disponibilité'];

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
      id: 30201 + index,
      level: 2,
      persona_stage: PersonaStage.SHRIMP,
      concept: isFrench ? 'Biais d’ancrage' : 'Anchoring Bias',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La première valeur rencontrée sert de point de référence et influence excessivement le jugement suivant.'
        : 'The first value encountered becomes a reference point and exerts too much influence on the later judgment.',
      detailedExplanationBeginner: isFrench
        ? 'Le premier nombre reste dans l’esprit et tire l’estimation vers lui.'
        : 'The first number sticks in the mind and pulls the estimate toward it.',
      detailedExplanationIntermediate: isFrench
        ? 'Même lorsque l’ancre est arbitraire ou trompeuse, les ajustements qui suivent sont souvent insuffisants.'
        : 'Even when the anchor is arbitrary or misleading, later adjustments away from it are often too small.',
      detailedExplanationExpert: isFrench
        ? 'Le biais d’ancrage décrit l’assimilation disproportionnée d’une valeur initiale dans une estimation ou une décision, malgré des informations plus pertinentes.'
        : 'Anchoring bias is the disproportionate assimilation of an initial value into an estimate or decision despite more relevant evidence.',
      questionFormat: 'standard'
    };
  });
}

export const ANCHORING_BIAS_EXPANSION_EN = createQuestions('en');
export const ANCHORING_BIAS_EXPANSION_FR = createQuestions('fr');
