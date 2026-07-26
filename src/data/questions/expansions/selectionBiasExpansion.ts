import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya asks only her yoga friends if the new class is good and then says everyone loves it.', 'Maya demande seulement à ses amis du yoga si le nouveau cours est bon puis dit que tout le monde l adore.'],
  ['Leo studies online reviews from people who paid extra for premium delivery and thinks the whole store is excellent.', 'Leo etudie les avis en ligne de personnes qui ont paye plus pour une livraison premium et pense que toute la boutique est excellente.'],
  ['Priya surveys only students who came to extra help sessions and concludes the whole class is confused.', 'Priya interroge seulement les eleves venus aux sessions d aide supplementaires et conclut que toute la classe est perdue.'],
  ['Omar asks only the loudest people in the room how they feel and assumes their opinion is the majority.', 'Omar demande seulement aux personnes les plus bruyantes dans la salle ce qu elles pensent et suppose que leur opinion est majoritaire.'],
  ['Rina compares two workout apps using only users who finished the free trial.', 'Rina compare deux applications de sport en utilisant seulement les utilisateurs qui ont termine l essai gratuit.'],
  ['Ben thinks a restaurant is amazing because he only interviewed customers waiting for dessert.', 'Ben pense qu un restaurant est incroyable parce qu il n a interroge que les clients en attente du dessert.'],
  ['Zoe says the neighborhood is safe because she only talked to people who still live there after dark.', 'Zoé dit que le quartier est sur parce qu elle a seulement parle aux personnes qui y vivent encore apres la nuit.'],
  ['Kai asks only the teachers who like the policy and treats their answers as neutral feedback.', 'Kai demande seulement aux professeurs qui aiment la politique et traite leurs reponses comme un retour neutre.'],
  ['Nora checks only the biggest fans of a band and then says the new album is universally loved.', 'Nora consulte seulement les plus grands fans d un groupe puis dit que le nouvel album est universellement adore.'],
  ['Eli interviews only people who clicked through the ad and concludes the ad is persuasive.', 'Eli interroge seulement les personnes qui ont clique sur la pub et conclut que la pub est persuasive.'],
  ['Lina asks only people who stayed until the end of the lecture whether it was interesting.', 'Lina demande seulement aux personnes restees jusqu a la fin du cours si c etait interessant.'],
  ['Grant samples only customers who returned for a second purchase and says the product must be great.', 'Grant echantillonne seulement les clients revenus pour un deuxieme achat et dit que le produit doit etre excellent.'],
  ['Tia talks to only marathon runners and assumes the city is full of athletes.', 'Tia parle seulement à des coureurs de marathon et suppose que la ville est remplie d athlètes.'],
  ['Noah asks only people who got the app to work on the first try and says the setup is easy.', 'Noah demande seulement aux personnes pour qui l application a marche du premier coup et dit que l installation est facile.'],
  ['Mia looks only at shoppers who found the sale aisle and thinks the store is always well organized.', 'Mia regarde seulement les clients qui ont trouve le rayon des soldes et pense que le magasin est toujours bien organise.'],
  ['Jules checks only people who volunteered twice and says the charity is popular everywhere.', 'Jules verifie seulement les personnes qui se sont portees volontaires deux fois et dit que la charite est populaire partout.'],
  ['Ava asks only parents at the school fundraiser and assumes all parents support the policy.', 'Ava demande seulement aux parents presents à la collecte de fonds de l ecole et suppose que tous les parents soutiennent la politique.'],
  ['Finn surveys only people who replied to the email and says the whole team agrees.', 'Finn interroge seulement les personnes qui ont repondu au courriel et dit que toute l equipe est d accord.'],
  ['Mina looks only at users who left five-star ratings and thinks the app has no problems.', 'Mina regarde seulement les utilisateurs qui ont mis cinq etoiles et pense que l application n a aucun probleme.'],
  ['Theo asks only the neighbors who came to the block party and says the street is lively.', 'Theo demande seulement aux voisins venus à la fete de quartier et dit que la rue est animée.'],
  ['Juno talks only to people who kept the subscription after the free month and says the price is fair.', 'Juno parle seulement aux personnes qui ont garde l abonnement apres le mois gratuit et dit que le prix est juste.'],
  ['Iris interviews only passengers who arrived on time and thinks the train service is perfect.', 'Iris interroge seulement les passagers arrives à l heure et pense que le service de train est parfait.'],
  ['Cole checks only the customers who used the help desk and says the support is quick.', 'Cole regarde seulement les clients qui ont utilise le service d assistance et dit que le support est rapide.'],
  ['Riley asks only people who bought the expensive version and concludes the whole product line is premium.', 'Riley demande seulement aux personnes qui ont achete la version chere et conclut que toute la gamme est premium.'],
  ['Pia samples only players who won their first match and says the game is easy.', 'Pia echantillonne seulement les joueurs qui ont gagne leur premiere partie et dit que le jeu est facile.'],
  ['Hugo surveys only restaurant regulars and says the new menu works for everyone.', 'Hugo interroge seulement les habitués du restaurant et dit que le nouveau menu convient a tout le monde.'],
  ['Sam asks only people who remember the event fondly and treats that as the full picture.', 'Sam demande seulement aux personnes qui se souviennent de l evenement avec emotion et traite cela comme le tableau complet.'],
  ['Jade checks only the riders who made it to the finish line and says the race was safe.', 'Jade verifie seulement les coureurs qui ont franchi la ligne d arrivee et dit que la course etait sure.'],
  ['Owen asks only the customers who stayed in line the longest and concludes the café is worth the wait.', 'Owen demande seulement aux clients qui sont restes le plus longtemps dans la file et conclut que le cafe vaut l attente.'],
  ['Lea speaks only to the students who turned in the assignment early and says the homework was easy.', 'Léa parle seulement aux eleves qui ont rendu le devoir tot et dit que le devoir etait facile.'],
  ['Maya asks only the people who liked the free sample and assumes the whole city will buy it.', 'Maya demande seulement aux personnes qui ont aime l echantillon gratuit et suppose que toute la ville l achetera.'],
  ['Ben surveys only the coworkers who use the new software and says the rollout is a success.', 'Ben interroge seulement les collegues qui utilisent le nouveau logiciel et dit que le deploiement est un succes.'],
  ['Ava checks only the drivers who never got pulled over and says the road law is harmless.', 'Ava regarde seulement les conducteurs qui ne se sont jamais fait arreter et dit que la loi routiere est sans danger.'],
  ['Omar asks only people who enjoyed the first episode and says the whole series is great.', 'Omar demande seulement aux personnes qui ont aime le premier episode et dit que toute la serie est excellente.'],
  ['Nina talks only to the employees who stayed after the meeting and says morale is high.', 'Nina parle seulement aux employes qui sont restes apres la reunion et dit que le moral est eleve.'],
  ['Eli checks only the customers who used the self-checkout without issues and says the system is flawless.', 'Eli regarde seulement les clients qui ont utilise la caisse automatique sans probleme et dit que le systeme est sans faille.'],
  ['Lina asks only people who had a good day at the fair and concludes the fair was a success.', 'Lina demande seulement aux personnes qui ont passe une bonne journee à la foire et conclut que la foire est un succes.'],
  ['Grant looks only at the most active forum users and says the whole community thinks the same way.', 'Grant regarde seulement les utilisateurs les plus actifs du forum et dit que toute la communaute pense pareil.'],
  ['Tia interviews only the fans standing near the stage and says the concert was universally loved.', 'Tia interroge seulement les fans places pres de la scene et dit que le concert etait universellement adore.'],
  ['Finn asks only the people who got the refund quickly and says customer service is excellent.', 'Finn demande seulement aux personnes qui ont recu le remboursement rapidement et dit que le service client est excellent.'],
  ['Mina surveys only the participants who finished the challenge and says the challenge is easy for everyone.', 'Mina interroge seulement les participants qui ont termine le defi et dit que le defi est facile pour tout le monde.'],
  ['Theo talks only to the people who kept using the gym after January and says the membership is a great deal.', 'Theo parle seulement aux personnes qui ont continue à utiliser la salle apres janvier et dit que l abonnement est une bonne affaire.'],
  ['Juno checks only the buyers who posted photos online and says the product makes everyone happy.', 'Juno regarde seulement les acheteurs qui ont publie des photos en ligne et dit que le produit rend tout le monde heureux.'],
  ['Iris asks only the classmates who sit near the front and says the teacher is amazing.', 'Iris demande seulement aux camarades assis au premier rang et dit que le professeur est genial.'],
  ['Cole talks only to the people who stayed for the encore and says the band never disappoints.', 'Cole parle seulement aux personnes restees pour le rappel et dit que le groupe ne decevra jamais.'],
  ['Riley samples only the customers who paid full price and says the store is worth every cent.', 'Riley echantillonne seulement les clients qui ont paye le plein tarif et dit que le magasin vaut chaque centime.'],
  ['Pia asks only the people who completed the tutorial and says the software is beginner-friendly.', 'Pia demande seulement aux personnes qui ont termine le tutoriel et dit que le logiciel est facile pour les debutants.'],
  ['Hugo checks only the commuters who arrived before the rain and says the bus system is reliable.', 'Hugo regarde seulement les navetteurs arrives avant la pluie et dit que le reseau de bus est fiable.'],
  ['Sam surveys only the staff who like the new policy and says the whole office supports it.', 'Sam interroge seulement le personnel qui aime la nouvelle politique et dit que tout le bureau la soutient.'],
  ['Jade asks only the people who got the early access invite and says the app is a hit.', 'Jade demande seulement aux personnes qui ont reçu l invitation d acces anticipé et dit que l application est un succes.'],
  ['Maya asks only the people who found a parking spot on the first try and says the shopping center parking is easy.', 'Maya demande seulement aux personnes qui ont trouve une place de parking du premier coup et dit que le stationnement du centre commercial est facile.'],
  ['Leo checks only the coworkers who use the new calendar app every day and says the rollout was perfect.', 'Leo regarde seulement les collegues qui utilisent la nouvelle application de calendrier tous les jours et dit que le lancement etait parfait.'],
  ['Priya interviews only the guests who arrived early and says the wedding food was amazing for everyone.', 'Priya interroge seulement les invites arrives en avance et dit que la nourriture du mariage etait incroyable pour tout le monde.'],
  ['Omar asks only the people who finished the puzzle and says the game is simple.', 'Omar demande seulement aux personnes qui ont termine le puzzle et dit que le jeu est simple.'],
  ['Rina talks only to customers who were already in a good mood and says the new cafe always lifts spirits.', 'Rina parle seulement aux clients qui etaient deja de bonne humeur et dit que le nouveau cafe remonte toujours le moral.'],
  ['Ben surveys only the hikers who reached the summit and says the trail is easy for beginners.', 'Ben interroge seulement les randonneurs qui ont atteint le sommet et dit que le sentier est facile pour les debutants.'],
  ['Zoe asks only the parents who liked the school play and says every parent loved it.', 'Zoé demande seulement aux parents qui ont aime la piece de l ecole et dit que tous les parents l ont adoree.'],
  ['Kai checks only the users who never had a login problem and says the website is flawless.', 'Kai regarde seulement les utilisateurs qui n ont jamais eu de probleme de connexion et dit que le site est sans faille.'],
  ['Nora speaks only to people who already prefer spicy food and says the new salsa is a universal favorite.', 'Nora parle seulement aux personnes qui aiment deja la nourriture epicee et dit que la nouvelle salsa est un favori universel.'],
  ['Eli asks only the fans who bought merch and says the band is loved by everyone.', 'Eli demande seulement aux fans qui ont achete du merchandising et dit que le groupe est aime de tous.'],
  ['Lina checks only the neighbors who came to the block cleanup and says the whole street cares deeply.', 'Lina regarde seulement les voisins venus au nettoyage du quartier et dit que toute la rue s en soucie beaucoup.'],
  ['Grant samples only the students who chose the optional workshop and says the workshop proves the topic is exciting.', 'Grant echantillonne seulement les eleves qui ont choisi latelier optionnel et dit que latelier prouve que le sujet est passionnant.'],
  ['Tia talks only to people who got the promotion email and says the company is doing great.', 'Tia parle seulement aux personnes qui ont recu le courriel de promotion et dit que l entreprise se porte tres bien.'],
  ['Noah asks only the riders who used the new transit line on a sunny day and says it is always pleasant.', 'Noah demande seulement aux passagers qui ont pris la nouvelle ligne de transport un jour de soleil et dit que c est toujours agreable.'],
  ['Mia surveys only the customers who found the self-checkout helpful and says the whole store is efficient.', 'Mia interroge seulement les clients qui ont trouve la caisse automatique utile et dit que tout le magasin est efficace.'],
  ['Jules asks only the volunteers who had fun at the event and says volunteering is always easy.', 'Jules demande seulement aux benevoles qui se sont bien amusés a l evenement et dit que le benevolat est toujours facile.'],
  ['Ava checks only the people who liked the new office chairs and says nobody has back pain anymore.', 'Ava regarde seulement les personnes qui ont aime les nouvelles chaises de bureau et dit que plus personne n a mal au dos.'],
  ['Finn talks only to the campers who slept well in perfect weather and says the campground is comfortable.', 'Finn parle seulement aux campeurs qui ont bien dormi par temps parfait et dit que le terrain de camping est confortable.'],
  ['Mina asks only the customers who got fast shipping and says the store always delivers quickly.', 'Mina demande seulement aux clients qui ont eu une livraison rapide et dit que le magasin livre toujours vite.'],
  ['Theo surveys only the people who liked the free sample and says the new snack works for everyone.', 'Theo interroge seulement les personnes qui ont aime l echantillon gratuit et dit que le nouveau snack convient a tout le monde.'],
  ['Juno checks only the coworkers who use the standing desks and says the office setup is perfect.', 'Juno regarde seulement les collegues qui utilisent les bureaux debout et dit que l organisation du bureau est parfaite.'],
  ['Iris asks only the gym members who already love exercise and says the class is for all levels.', 'Iris demande seulement aux membres de la salle qui aiment deja le sport et dit que le cours convient a tous les niveaux.'],
  ['Cole talks only to the people who skipped traffic and says the commute is always smooth.', 'Cole parle seulement aux personnes qui ont evite la circulation et dit que le trajet est toujours fluide.'],
  ['Riley surveys only the people who remember the slogan and says the ad reached everyone.', 'Riley interroge seulement les personnes qui se souviennent du slogan et dit que la pub a touche tout le monde.'],
  ['Pia asks only the shoppers who found the sale rack and says the whole clothing store is well organized.', 'Pia demande seulement aux clients qui ont trouve le portoir des soldes et dit que tout le magasin de vetements est bien organise.'],
  ['Hugo checks only the people who stayed calm during the fire drill and says the drill was easy.', 'Hugo regarde seulement les personnes qui sont restees calmes pendant l exercice d evacuation et dit que l exercice etait facile.'],
  ['Sam surveys only the coworkers who enjoy team lunches and says office lunches are universally popular.', 'Sam interroge seulement les collegues qui aiment les dejeuners d equipe et dit que les dejeuners de bureau sont universellement populaires.'],
  ['Jade asks only the customers who got the last item on the shelf and says the store always has enough stock.', 'Jade demande seulement aux clients qui ont obtenu le dernier article sur l etagere et dit que le magasin a toujours assez de stock.'],
  ['Owen talks only to the people who had a good seat at the concert and says the venue is comfortable for everyone.', 'Owen parle seulement aux personnes qui avaient une bonne place au concert et dit que la salle est confortable pour tout le monde.'],
  ['Lea surveys only the people who liked the revised schedule and says the whole team approves it.', 'Léa interroge seulement les personnes qui ont aime le nouvel horaire et dit que toute l equipe l approuve.'],
  ['Maya checks only the customers who found the checkout fast and says the queue system is great.', 'Maya regarde seulement les clients qui ont trouve le passage en caisse rapide et dit que le systeme de file est excellent.'],
  ['Ben asks only the parents who came to the orientation and says every family understands the rules.', 'Ben demande seulement aux parents venus a la reunion d accueil et dit que chaque famille comprend les regles.'],
  ['Ava talks only to the viewers who watched the whole series and says the show keeps everyone hooked.', 'Ava parle seulement aux spectateurs qui ont regarde toute la serie et dit que l emission captive tout le monde.'],
  ['Omar surveys only the people who liked the new route map and says the transit change is easy for all riders.', 'Omar interroge seulement les personnes qui ont aime la nouvelle carte des trajets et dit que le changement de transport est facile pour tous les usagers.'],
  ['Nina asks only the customers who got the correct order and says the diner never makes mistakes.', 'Nina demande seulement aux clients qui ont recu la bonne commande et dit que le diner ne fait jamais d erreurs.'],
  ['Eli checks only the users who already knew the shortcut and says the app is obvious to everyone.', 'Eli regarde seulement les utilisateurs qui connaissaient deja le raccourci et dit que l application est evidente pour tout le monde.'],
  ['Lina talks only to the people who enjoyed the quiet room and says the library atmosphere is perfect.', 'Lina parle seulement aux personnes qui ont aime la salle calme et dit que l ambiance de la bibliotheque est parfaite.'],
  ['Grant asks only the employees who benefited from remote work and says everyone prefers it.', 'Grant demande seulement aux employes qui ont profite du teletravail et dit que tout le monde le prefere.'],
  ['Tia surveys only the people who liked the first chapter and says the book works for every reader.', 'Tia interroge seulement les personnes qui ont aime le premier chapitre et dit que le livre convient a chaque lecteur.'],
  ['Noah checks only the customers who redeemed the coupon and says the promotion reached the whole city.', 'Noah regarde seulement les clients qui ont utilise le coupon et dit que la promotion a atteint toute la ville.'],
  ['Mia asks only the people who stayed after the free concert and says the band is beloved everywhere.', 'Mia demande seulement aux personnes restees apres le concert gratuit et dit que le groupe est adore partout.'],
  ['Jules surveys only the students who liked the review session and says the exam prep is simple for everyone.', 'Jules interroge seulement les eleves qui ont aime la session de revision et dit que la preparation a l examen est simple pour tout le monde.'],
  ['Ari checks only the travelers who had clear weather and says the ferry route is always calm.', 'Ari regarde seulement les voyageurs qui ont eu un temps clair et dit que la ligne de ferry est toujours calme.'],
  ['Pia asks only the customers who found the instructions clear and says the product is easy for beginners.', 'Pia demande seulement aux clients qui ont trouve les instructions claires et dit que le produit est facile pour les debutants.'],
  ['Maya surveys only the people who bought the deluxe version and says the budget version must be bad.', 'Maya interroge seulement les personnes qui ont acheté la version deluxe et dit que la version budget doit etre mauvaise.'],
  ['Leo asks only the people who stayed late at the fair and says the fair is lively every hour.', 'Leo demande seulement aux personnes restees tard a la foire et dit que la foire est animée a chaque heure.'],
  ['Priya checks only the employees who already like spreadsheets and says the new reporting tool is loved by everyone.', 'Priya regarde seulement les employes qui aiment deja les tableurs et dit que le nouvel outil de rapport est adore par tout le monde.'],
  ['Omar talks only to the riders who found an empty seat and says the train is always comfortable.', 'Omar parle seulement aux passagers qui ont trouve une place vide et dit que le train est toujours confortable.'],
  ['Rina asks only the customers who understood the return policy and says the policy is perfectly clear.', 'Rina demande seulement aux clients qui ont compris la politique de retour et dit que la politique est parfaitement claire.'],
  ['Ben checks only the people who already loved the first class and says the whole workshop is perfect.', 'Ben regarde seulement les personnes qui ont deja adore le premier cours et dit que tout latelier est parfait.'],
];

const OPTIONS_EN = ['Selection Bias', 'Sampling Bias', 'Confirmation Bias', 'Availability Heuristic'];
const OPTIONS_FR = ['Biais de sélection', 'Biais d échantillonnage', 'Biais de confirmation', 'Heuristique de disponibilité'];

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
      id: 40601 + index,
      level: 3,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Biais de sélection' : 'Selection Bias',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'On tire une conclusion a partir d un groupe deja filtre ou non representatif.'
        : 'A conclusion is drawn from a pre-filtered or non-representative group.',
      detailedExplanationBeginner: isFrench
        ? 'Le groupe choisi ne represente pas tout le monde.'
        : 'The chosen group does not represent everyone.',
      detailedExplanationIntermediate: isFrench
        ? 'Le biais de selection apparait quand l echantillon observe est faussement restreint, ce qui gonfle ou deforme la conclusion.'
        : 'Selection bias appears when the observed sample is unfairly restricted, which inflates or distorts the conclusion.',
      detailedExplanationExpert: isFrench
        ? "Le probleme est le mecanisme de filtrage: qui entre dans l echantillon, qui se retire, et qui reste invisible. Si l on interroge seulement les personnes deja convaincues, les plus motivées, les survivants, les volontaires ou les cas visibles, l observation cesse d etre generalisable. La correction passe par un recrutement aleatoire ou au moins par la comparaison avec la population totale."
        : 'The problem is the filtering mechanism: who enters the sample, who drops out, and who stays invisible. If you only ask the already convinced, the most motivated, the survivors, the volunteers, or the visible cases, the observation stops being generalizable. The fix is random recruitment or at least comparison with the full population.',
      questionFormat: 'standard',
    };
  });
}

export const SELECTION_BIAS_EXPANSION_EN: Question[] = createQuestions('en');
export const SELECTION_BIAS_EXPANSION_FR: Question[] = createQuestions('fr');
