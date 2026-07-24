import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['A jacket first marked $300 feels cheap to Mia at $120, although similar jackets normally cost $80 and are on sale downtown.', 'Une veste d’abord affichée à 300 € paraît bon marché à Mia à 120 €, alors que des modèles comparables coûtent 80 € et sont en promotion en ville.'],
  ['The seller mentions $9,000 before negotiations, so Leo treats $7,500 as a bargain for a car worth about $6,000 in the local market.', 'Le vendeur annonce 9 000 € avant de négocier ; Leo trouve donc 7 500 € avantageux pour une voiture qui vaut environ 6 000 € sur le marché local.'],
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
  ['The first delivery estimate is three weeks, so a two-week delay feels acceptable to Ben even though local delivery normally takes two days.', 'La première estimation de livraison est de trois semaines ; un délai de deux semaines paraît acceptable à Ben alors qu’une livraison locale prend normalement deux jours.'],
  ['A cafe menu lists a $24 brunch first, making the $15 sandwich feel reasonable even though lunch across the street costs $10.', 'Un menu de café affiche d’abord un brunch à 24 €, ce qui fait paraître raisonnable le sandwich à 15 €, alors que le déjeuner d’en face coûte 10 €.'],
  ['The first repair quote is $1,800, so Dana treats a $1,200 quote as cheap even though the part usually costs $700.', 'Le premier devis de réparation est de 1 800 € ; Dana considère donc un devis à 1 200 € comme bon marché, alors que la pièce coûte d’habitude 700 €.'],
  ['A grocery sign says strawberries are $9 a box, and Eli decides the $6 box is a deal without checking the actual weight.', 'Une affiche dit que les fraises coûtent 9 € la barquette ; Eli pense donc que la barquette à 6 € est une bonne affaire sans vérifier le poids réel.'],
  ['After hearing a $250 estimate for concert tickets, Mina feels lucky to find seats for $180 and stops comparing.', 'Après avoir entendu un prix de 250 € pour les billets de concert, Mina se croit chanceuse de trouver des places à 180 € et arrête de comparer.'],
  ['A contractor mentions that a kitchen remodel could reach $40,000, so Leo accepts the $28,000 quote immediately.', 'Un entrepreneur mentionne qu’une rénovation de cuisine pourrait atteindre 40 000 € ; Leo accepte donc immédiatement le devis à 28 000 €.'],
  ['The first winter coat seen in the shop is $220, and Sara’s later choice at $160 feels like a bargain.', 'Le premier manteau d’hiver vu en magasin coûte 220 € ; le choix de Sara à 160 € lui paraît ensuite être une affaire.'],
  ['A travel blog starts with a luxury resort at $600 a night, making the nearby $320 hotel seem modest.', 'Un blog de voyage commence par un complexe de luxe à 600 € la nuit, ce qui fait paraître l’hôtel voisin à 320 € modeste.'],
  ['The teacher’s opening example gives a ratio of 12 to 1, so classmates keep answering near 12 to 1.', 'L’exemple d’ouverture de la professeure donne un ratio de 12 pour 1 ; les camarades répondent ensuite encore autour de 12 pour 1.'],
  ['A furniture ad compares a $5,000 dining set with a $3,800 one, and Nate ignores cheaper sets that are closer to $2,500.', 'Une pub de meubles compare un ensemble de salle à manger à 5 000 € avec un autre à 3 800 € ; Nate ignore les ensembles moins chers autour de 2 500 €.'],
  ['The first estimate for a school fundraiser is $1,000, so Priya’s later estimate of $850 stays close to it.', 'La première estimation pour une collecte scolaire est de 1 000 € ; l’estimation de Priya à 850 € reste donc proche de ce chiffre.'],
  ['A real-estate sign says “was $900,000,” and Omar mentally anchors on that before seeing the market value of $650,000.', 'Une pancarte immobilière dit « était à 900 000 € » ; Omar s’y accroche mentalement avant de voir la valeur du marché à 650 000 €.'],
  ['A used bike tag starts at $1,200, so Rina thinks $800 is cheap even though similar bikes sell for $500.', 'Une étiquette d’un vélo d’occasion commence à 1 200 € ; Rina pense donc que 800 € est bon marché, alors que des vélos comparables se vendent à 500 €.'],
  ['The first cleaning quote says $300, so Leo accepts $220 without checking that the real price is usually $140.', 'Le premier devis de nettoyage annonce 300 € ; Leo accepte donc 220 € sans vérifier que le vrai prix est d’habitude de 140 €.'],
  ['A store shows a $90 jacket first, making the $55 jacket seem small even though the budget was $35.', 'Un magasin montre d’abord une veste à 90 €, ce qui fait paraître la veste à 55 € petite, alors que le budget était de 35 €.'],
  ['After hearing a 24-month mortgage estimate, Nora treats 18 months as quick, despite the normal target being 12.', 'Après avoir entendu une estimation de 24 mois pour le prêt, Nora trouve 18 mois rapide, alors que l’objectif normal est de 12.'],
  ['The first phone plan shown is $110, and Adam considers the $75 plan reasonable without comparing competitors at $40.', 'Le premier forfait présenté coûte 110 € ; Adam considère donc le forfait à 75 € comme raisonnable sans comparer les concurrents à 40 €.'],
  ['A bakery says the cake once sold for $200, so Zoe feels fine paying $150 for a cake that usually costs $90.', 'La boulangerie dit qu’un gâteau se vendait autrefois à 200 € ; Zoe accepte alors de payer 150 € pour un gâteau qui coûte d’habitude 90 €.'],
  ['The first estimate for new tires is $900, so Milo thinks $700 is a solid deal even though the shop next door charges $520.', 'La première estimation pour des pneus neufs est de 900 € ; Milo pense donc que 700 € est une bonne affaire alors que le magasin voisin demande 520 €.'],
  ['A travel site displays a $450 room first, and June calls the later $310 room a bargain without checking weekday rates.', 'Un site de voyage affiche d’abord une chambre à 450 € ; June appelle ensuite la chambre à 310 € une bonne affaire sans vérifier les tarifs en semaine.'],
  ['The coach’s first speed target is six minutes per kilometer, so Kai treats six-thirty as poor even though the previous best was eight.', 'La première cible de l’entraîneur est de six minutes au kilomètre ; Kai trouve donc six minutes trente médiocre alors que son meilleur temps était de huit.'],
  ['The shop first labels a lamp at $180, so Maya judges the $130 lamp by that number instead of the $70 market price.', 'Le magasin étiquette d’abord une lampe à 180 € ; Maya juge donc la lampe à 130 € selon ce chiffre plutôt que selon le prix du marché à 70 €.'],
  ['A gym shows a $200 yearly membership first, making the $120 plan feel cheap even though the neighborhood gym charges $75.', 'Une salle de sport affiche d’abord un abonnement annuel à 200 € ; le forfait à 120 € paraît donc bon marché alors que la salle du quartier demande 75 €.'],
  ['The first bid at the auction is $5,000, so Eric treats the next $3,700 bid as conservative.', 'La première enchère à la vente est de 5 000 € ; Eric considère donc l’offre suivante à 3 700 € comme prudente.'],
  ['A store says a stroller used to cost $800, and Nia quickly accepts $560 without comparing similar models.', 'Un magasin dit qu’une poussette coûtait autrefois 800 € ; Nia accepte vite 560 € sans comparer des modèles similaires.'],
  ['After a realtor mentions $1,200,000 for a house, Omar thinks $980,000 is a reasonable offer despite nearby sales near $700,000.', 'Après qu’un agent mentionne 1 200 000 € pour une maison, Omar trouve 980 000 € raisonnables malgré des ventes voisines autour de 700 000 €.'],
  ['A coffee subscription first shows a $30 plan, so Leila sees the $18 plan as inexpensive.', 'Un abonnement café affiche d’abord une offre à 30 € ; Leila trouve donc l’offre à 18 € peu chère.'],
  ['The teacher starts with a ratio of 100 to 1, and students keep guessing close to 100 instead of recalculating.', 'La professeure commence avec un ratio de 100 pour 1 ; les élèves continuent donc à répondre près de 100 au lieu de recalculer.'],
  ['A menu lists a $60 steak before a $28 pasta, so the pasta seems like a deal to Ben.', 'Un menu affiche un steak à 60 € avant des pâtes à 28 € ; les pâtes paraissent alors être une affaire pour Ben.'],
  ['The first app plan is $50, making the $35 plan feel tiny even though the service should cost $20.', 'Le premier forfait de l’application coûte 50 € ; le forfait à 35 € paraît minuscule alors que le service devrait coûter 20 €.'],
  ['A toy store puts a $90 robot beside a $55 robot, and Ava picks the second without noticing the $30 version.', 'Un magasin de jouets place un robot à 90 € à côté d’un robot à 55 € ; Ava choisit le second sans remarquer le modèle à 30 €.'],
  ['The first hotel quote is $400, so Tia feels fine with $280 even though other hotels quote $150.', 'Le premier devis d’hôtel est de 400 € ; Tia se sent donc bien avec 280 € alors que d’autres hôtels proposent 150 €.'],
  ['A florist says a bouquet was once $120, and Theo buys it for $85 as if that were a bargain.', 'Un fleuriste dit qu’un bouquet coûtait autrefois 120 € ; Theo l’achète à 85 € comme si c’était une bonne affaire.'],
  ['The first gym class estimate is 90 minutes, so Maya sees a 60-minute class as short.', 'La première estimation de cours de sport est de 90 minutes ; Maya trouve donc qu’un cours de 60 minutes est court.'],
  ['A contractor opens with $2,000 for shelves, and Ben accepts $1,500 without checking the actual work involved.', 'Un artisan annonce d’abord 2 000 € pour des étagères ; Ben accepte 1 500 € sans vérifier le travail réel.'],
  ['A bookstore displays a special edition at $75 first, making the standard $48 copy seem cheap.', 'Une librairie affiche d’abord une édition spéciale à 75 € ; la version standard à 48 € paraît alors bon marché.'],
  ['The first estimate for a haircut package is $150, so Zoe settles for $95 even though nearby salons charge $60.', 'La première estimation pour un forfait coiffure est de 150 € ; Zoe se contente donc de 95 € alors que les salons voisins facturent 60 €.'],
  ['A phone store starts at $1,300, and Noah calls the $950 phone affordable without checking refurbished prices.', 'Un magasin de téléphones commence à 1 300 € ; Noah trouve donc le téléphone à 950 € abordable sans regarder les reconditionnés.'],
  ['A chef says a sauce requires $25 truffle oil, so Kara buys the $15 bottle without comparing normal cooking oil prices.', 'Un chef dit qu’une sauce demande une huile de truffe à 25 € ; Kara achète donc la bouteille à 15 € sans comparer avec une huile normale.'],
  ['The first estimate for a car repair is $1,500, and Liam accepts $1,100 before asking another mechanic.', 'La première estimation pour réparer la voiture est de 1 500 € ; Liam accepte 1 100 € avant de demander un autre mécanicien.'],
  ['A ticket site shows a VIP seat at $300 first, so the $170 seat seems modest to Emma.', 'Un site de billetterie affiche d’abord un siège VIP à 300 € ; le siège à 170 € paraît donc modeste à Emma.'],
  ['The first estimate for a laptop repair is $600, making the $420 quote seem fair even though a shop downtown charges $220.', 'La première estimation pour réparer un ordinateur portable est de 600 € ; le devis à 420 € semble donc correct alors qu’un atelier du centre demande 220 €.'],
  ['A bakery lists a wedding cake at $1,000 before a $650 cake, so the second option feels manageable to Priya.', 'Une boulangerie affiche un gâteau de mariage à 1 000 € avant un gâteau à 650 € ; la deuxième option paraît alors gérable pour Priya.'],
  ['The coach says elite runners train at 5:00 per kilometer, so Ana feels okay about her 5:45 pace.', 'L’entraîneur dit que les coureurs élites s’entraînent à 5:00 au kilomètre ; Ana se sent donc correcte avec son allure de 5:45.'],
  ['A furniture site shows a $900 desk first, and Jonah judges the $640 desk by that anchor rather than the $300 local sale.', 'Un site de meubles affiche d’abord un bureau à 900 € ; Jonah juge donc le bureau à 640 € selon cette ancre plutôt que selon la vente locale à 300 €.'],
  ['A repair shop says the tablet was once $700, so the $510 quote sounds fair to Nina.', 'Un atelier dit que la tablette valait autrefois 700 € ; le devis à 510 € semble donc correct à Nina.'],
  ['The first estimate for a fence is $4,000, and Owen keeps his later estimate near that number even after measuring the yard.', 'La première estimation pour une clôture est de 4 000 € ; Owen garde donc une estimation proche même après avoir mesuré le terrain.'],
  ['A tour guide starts with a $100 souvenir, making the $45 version seem budget-friendly.', 'Un guide touristique commence avec un souvenir à 100 € ; la version à 45 € paraît alors économique.'],
  ['The first estimate for a babysitter is $20 an hour, so Jules thinks $16 is a very good deal.', 'La première estimation pour une baby-sitter est de 20 € de l’heure ; Jules pense donc que 16 € est une très bonne affaire.'],
  ['A music store lists headphones at $250 before showing a $140 pair, and Maya chooses the second pair without comparing to the $70 shelf.', 'Un magasin de musique affiche des écouteurs à 250 € avant une paire à 140 € ; Maya choisit la deuxième sans comparer avec l’étagère à 70 €.'],
  ['The first estimate for landscaping is $3,000, so Kai treats $2,200 as reasonable despite cheaper quotes across town.', 'La première estimation pour l’aménagement paysager est de 3 000 € ; Kai trouve donc 2 200 € raisonnables malgré des devis moins chers ailleurs.']
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
