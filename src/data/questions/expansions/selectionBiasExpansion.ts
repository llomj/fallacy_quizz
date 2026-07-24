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
