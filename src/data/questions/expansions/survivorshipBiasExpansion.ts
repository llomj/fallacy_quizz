import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya only asks stores that survived the first year and says starting a shop is easy.', 'Maya demande seulement aux boutiques qui ont survécu a la premiere annee et dit qu ouvrir un magasin est facile.'],
  ['Leo studies only the startups that became famous and decides every startup is basically a sure thing.', 'Leo etudie seulement les startups devenues celebres et decide que toute startup est presque une valeur sure.'],
  ['Priya listens only to people who finished the free course and says the course must be simple.', 'Priya ecoute seulement les personnes qui ont termine le cours gratuit et dit que le cours doit etre simple.'],
  ['Omar reads only the reviews from customers who kept the subscription and thinks the app is perfect.', 'Omar lit seulement les avis des clients qui ont garde l abonnement et pense que l application est parfaite.'],
  ['Rina asks only the runners who crossed the finish line and says the race was no big deal.', 'Rina demande seulement aux coureurs qui ont franchi la ligne d arrivee et dit que la course n etait pas grand chose.'],
  ['Ben only looks at the bands that got signed and assumes every garage band is one good gig away from fame.', 'Ben ne regarde que les groupes qui ont ete signes et suppose que chaque groupe de garage est a un concert de la gloire.'],
  ['Zoe hears only from investors who made money and thinks the stock market is easy.', 'Zoé n entend parler que des investisseurs qui ont gagne de l argent et pense que la bourse est facile.'],
  ['Kai checks only the restaurants still open after a year and says the city has amazing food everywhere.', 'Kai verifie seulement les restaurants encore ouverts apres un an et dit que la ville a une nourriture incroyable partout.'],
  ['Nora asks only the students who passed the test and concludes the class was too easy.', 'Nora demande seulement aux eleves qui ont reussi le test et conclut que le cours etait trop facile.'],
  ['Eli looks only at people who kept their gym membership and says the gym plan must be worth it.', 'Eli regarde seulement les personnes qui ont garde leur abonnement a la salle et dit que le forfait doit valoir le coup.'],
  ['Lina interviews only the couples still together and says dating is simple.', 'Lina interroge seulement les couples encore ensemble et dit que sortir ensemble est simple.'],
  ['Grant only talks to the commuters whose trains were on time and says the rail system is flawless.', 'Grant ne parle qu aux navetteurs dont les trains etaient a l heure et dit que le reseau ferroviaire est parfait.'],
  ['Tia only asks the people who got promoted and assumes the office policy works for everyone.', 'Tia demande seulement aux personnes promues et suppose que la politique du bureau fonctionne pour tout le monde.'],
  ['Noah only checks the sellers still active after six months and says online selling is effortless.', 'Noah ne verifie que les vendeurs encore actifs apres six mois et dit que vendre en ligne est sans effort.'],
  ['Mia only hears from the students who finished the coding bootcamp and says coding is quick to learn.', 'Mia n entend que les eleves qui ont termine le bootcamp de code et dit que coder s apprend vite.'],
  ['Jules only asks the people who kept using the budget app and thinks budgeting always works.', 'Jules demande seulement aux personnes qui ont continue a utiliser l application de budget et pense que gerer son budget marche toujours.'],
  ['Ava only looks at the hikers who reached the summit and says the trail was easy.', 'Ava ne regarde que les randonneurs qui ont atteint le sommet et dit que le sentier etait facile.'],
  ['Finn only listens to customers who got refunds quickly and says support is always great.', 'Finn ecoute seulement les clients qui ont obtenu un remboursement rapidement et dit que le support est toujours genial.'],
  ['Mina only compares the side hustles that made it and says anyone can make passive income.', 'Mina compare seulement les petits boulots qui ont reussi et dit que tout le monde peut gagner un revenu passif.'],
  ['Theo only surveys the students who liked the new textbook and concludes the whole class loved it.', 'Theo interroge seulement les eleves qui ont aime le nouveau manuel et conclut que toute la classe l a adore.'],
  ['Juno only asks the people who used the meal plan until the end and says meal prep is a miracle.', 'Juno demande seulement aux personnes qui ont utilise le plan de repas jusqu au bout et dit que la preparation des repas est miraculeuse.'],
  ['Iris only interviews the drivers who never got a ticket and says the city driving rules are harmless.', 'Iris interroge seulement les conducteurs qui n ont jamais eu d amende et dit que les regles de conduite en ville sont sans danger.'],
  ['Cole only studies the books that became bestsellers and says writing a novel is easy.', 'Cole etudie seulement les livres devenus best-sellers et dit qu ecrire un roman est facile.'],
  ['Riley only asks the gamers who reached the final boss and says the game is balanced.', 'Riley demande seulement aux joueurs qui ont atteint le boss final et dit que le jeu est equilibre.'],
  ['Pia only talks to the coworkers who stayed after the company rebrand and says the rebrand was perfect.', 'Pia parle seulement aux collegues qui sont restes apres le changement de marque et dit que le rebranding etait parfait.'],
  ['Hugo only counts the people who still use the language app after three months and says the app is amazing.', 'Hugo compte seulement les personnes qui utilisent encore l application de langue apres trois mois et dit que l application est incroyable.'],
  ['Sam only asks the people who made it through the interview round and thinks the hiring process is fair for everyone.', 'Sam demande seulement aux personnes qui ont passe l entretien et pense que le processus de recrutement est juste pour tout le monde.'],
  ['Jade only hears from the campers whose tents stayed dry and says camping in the rain is no problem.', 'Jade entend seulement les campeurs dont la tente est restee seche et dit que camper sous la pluie n est pas un probleme.'],
  ['Owen only watches the food trucks that survived winter and says running a food truck is low stress.', 'Owen ne regarde que les food trucks qui ont survécu a l hiver et dit qu avoir un food truck est peu stressant.'],
  ['Lea only talks to the language learners who kept practicing every day and says fluency happens fast.', 'Lea ne parle qu aux apprenants en langues qui ont continue a pratiquer chaque jour et dit que la fluidite arrive vite.'],
  ['Maya only looks at the apps that became viral and says every app idea is a winner.', 'Maya ne regarde que les applications devenues virales et dit que chaque idee d application est gagnante.'],
  ['Ben only asks the tenants who renewed their lease and says the building is perfect.', 'Ben demande seulement aux locataires qui ont renouvelle leur bail et dit que l immeuble est parfait.'],
  ['Ava only checks the families who stayed on the school lunch plan and says the lunches must be great.', 'Ava verifie seulement les familles qui sont restees au programme de repas scolaires et dit que les repas doivent etre excellents.'],
  ['Omar only interviews the musicians who kept posting covers online and says the platform launches careers.', 'Omar interroge seulement les musiciens qui ont continue a publier des reprises en ligne et dit que la plateforme lance des carrieres.'],
  ['Nina only looks at the people who finished the marathon training plan and says the plan is beginner friendly.', 'Nina regarde seulement les personnes qui ont termine le plan d entrainement du marathon et dit que le plan est adapte aux debutants.'],
  ['Eli only asks the homeowners who kept their solar panels and says solar is always a good buy.', 'Eli demande seulement aux proprietaires qui ont garde leurs panneaux solaires et dit que le solaire est toujours un bon achat.'],
  ['Lina only listens to the students who stayed awake in the late lecture and says the lecture was engaging.', 'Lina ecoute seulement les eleves qui sont restes eveilles pendant le cours tardif et dit que le cours etait captivant.'],
  ['Grant only checks the products still on the shelf after clearance and says they must be great.', 'Grant ne verifie que les produits encore en rayon apres les soldes et dit qu ils doivent etre excellents.'],
  ['Tia only asks the employees who survived the downsizing and says the company culture is healthy.', 'Tia demande seulement aux employes qui ont survécu aux suppressions de postes et dit que la culture d entreprise est saine.'],
  ['Finn only reads the success stories from the scholarship winners and says getting a scholarship is straightforward.', 'Finn lit seulement les histoires a succes des boursiers et dit qu obtenir une bourse est simple.'],
  ['Mina only looks at the meal kits that customers reordered and says every recipe must be delicious.', 'Mina ne regarde que les kits repas que les clients ont recommandes et dit que chaque recette doit etre delicieuse.'],
  ['Theo only asks the people who kept using the meditation app and says meditation fixes stress fast.', 'Theo demande seulement aux personnes qui ont continue a utiliser l application de meditation et dit que la meditation calme le stress rapidement.'],
  ['Juno only checks the neighborhoods that got more popular after renovation and says every renovation pays off.', 'Juno ne verifie que les quartiers devenus plus populaires apres renovation et dit que chaque renovation rapporte.'],
  ['Iris only studies the shops that survived the holiday rush and says retail is easy if you try.', 'Iris etudie seulement les magasins qui ont survécu a la periode des fetes et dit que le commerce de detail est facile si on s y met.'],
  ['Cole only talks to the volunteers who stayed for the whole event and says volunteering is always fun.', 'Cole parle seulement aux benevoles restes pendant tout l evenement et dit que le benevolat est toujours amusant.'],
  ['Riley only hears from the artists who sold paintings online and says selling art is easy.', 'Riley entend seulement les artistes qui ont vendu des tableaux en ligne et dit que vendre de l art est facile.'],
  ['Pia only looks at the friendships that survived college and says making friends is effortless.', 'Pia ne regarde que les amities qui ont survécu aux etudes et dit que se faire des amis est sans effort.'],
  ['Hugo only asks the people who kept the home workout habit and says exercise at home is foolproof.', 'Hugo demande seulement aux personnes qui ont garde l habitude de s entrainer a la maison et dit que faire du sport chez soi ne peut pas echouer.'],
  ['Sam only checks the school projects that won prizes and says the assignment was easy.', 'Sam ne verifie que les projets scolaires qui ont gagne des prix et dit que le devoir etait facile.'],
  ['Jade only hears from the tenants whose buildings stayed standing after the storm and says the area is storm proof.', 'Jade entend seulement les locataires dont les immeubles sont restes debout apres la tempete et dit que le quartier est a l epreuve des tempetes.'],
  ['Owen only asks the people who kept the language challenge streak and says the challenge is simple for everyone.', 'Owen demande seulement aux personnes qui ont garde leur serie dans le defi linguistique et dit que le defi est simple pour tout le monde.'],
  ['Lea only interviews the freelancers who found repeat clients and says freelancing is secure.', 'Lea interroge seulement les freelances qui ont trouve des clients recurrents et dit que le freelancing est sur.'],
  ['Maya only reads the posts from the creators whose videos took off and says making content is easy money.', 'Maya lit seulement les publications des createurs dont les videos ont decolle et dit que creer du contenu est de l argent facile.'],
  ['Ben only asks the home cooks whose recipes worked and says cooking at home is foolproof.', 'Ben demande seulement aux cuisiniers a domicile dont les recettes ont marche et dit que cuisiner a la maison ne peut pas echouer.'],
  ['Ava only checks the people who kept the language app after the free trial and says the app is amazing for everyone.', 'Ava verifie seulement les personnes qui ont garde l application de langue apres l essai gratuit et dit que l application est incroyable pour tout le monde.'],
  ['Omar only studies the gyms that survived the first year and says opening a gym is a guaranteed win.', 'Omar etudie seulement les salles de sport qui ont survécu a la premiere annee et dit qu ouvrir une salle de sport est une victoire garantie.'],
  ['Nina only talks to the drivers whose electric cars still work well and says EV ownership is always painless.', 'Nina ne parle qu aux conducteurs dont les voitures electriques fonctionnent encore bien et dit que posseder une voiture electrique est toujours sans souci.'],
  ['Eli only hears from the people who finished the half-marathon training and says every training plan works perfectly.', 'Eli n entend que les personnes qui ont termine l entrainement du semi-marathon et dit que chaque plan d entrainement marche parfaitement.'],
  ['Lina only asks the students who stayed motivated in the online class and says online school is better for everyone.', 'Lina demande seulement aux eleves restes motives dans le cours en ligne et dit que l ecole en ligne est meilleure pour tout le monde.'],
  ['Grant only looks at the podcasts that grew an audience and says starting a podcast is simple.', 'Grant ne regarde que les podcasts qui ont trouve un public et dit que lancer un podcast est simple.'],
  ['Tia only surveys the people who kept their new habit for a month and says habits are easy to build.', 'Tia interroge seulement les personnes qui ont garde leur nouvelle habitude pendant un mois et dit que les habitudes sont faciles a construire.'],
  ['Noah only checks the businesses that survived the summer slump and says retail is stable.', 'Noah ne verifie que les entreprises qui ont survécu a la baisse de l ete et dit que le commerce de detail est stable.'],
  ['Mia only asks the students who got into college and says the application process is not stressful.', 'Mia demande seulement aux eleves qui ont ete admis a l universite et dit que la procedure de candidature n est pas stressante.'],
  ['Jules only listens to the investors who picked winners and says investing is basically easy.', 'Jules ecoute seulement les investisseurs qui ont choisi des gagnants et dit qu investir est en gros facile.'],
  ['Ava only looks at the book clubs that stayed active and says organizing a club is no trouble.', 'Ava ne regarde que les clubs de lecture qui sont restes actifs et dit qu organiser un club n est pas un probleme.'],
  ['Finn only studies the cafes that survived the opening year and says cafe ownership is simple.', 'Finn etudie seulement les cafes qui ont survécu a la premiere annee et dit que posseder un cafe est simple.'],
  ['Mina only asks the neighbors who liked the new park and says the renovation pleased everyone.', 'Mina demande seulement aux voisins qui ont aime le nouveau parc et dit que la renovation a plu a tout le monde.'],
  ['Theo only talks to the people who finished the mountain hike and says the hike was beginner level.', 'Theo parle seulement aux personnes qui ont termine la randonnee en montagne et dit que la randonnee etait niveau debutant.'],
  ['Juno only checks the students who passed after tutoring and says tutoring guarantees success.', 'Juno ne verifie que les eleves qui ont reussi apres le tutorat et dit que le tutorat garantit la reussite.'],
  ['Iris only hears from the startup founders who got funded and says fundraising is easy.', 'Iris entend seulement les fondateurs de startups qui ont ete finances et dit que lever des fonds est facile.'],
  ['Cole only asks the people who kept journaling and says journaling fixes everything.', 'Cole demande seulement aux personnes qui ont continue a tenir un journal et dit que tenir un journal resout tout.'],
  ['Riley only looks at the repairs that lasted and says every repair method is great.', 'Riley ne regarde que les reparations qui ont dure et dit que chaque methode de reparation est excellente.'],
  ['Pia only talks to the parents whose kids loved the summer camp and says every camp is perfect.', 'Pia parle seulement aux parents dont les enfants ont adore le camp d ete et dit que chaque camp est parfait.'],
  ['Hugo only checks the side projects that made money and says side projects are an easy income stream.', 'Hugo ne verifie que les projets secondaires qui ont rapporte de l argent et dit que les projets secondaires sont une source de revenus facile.'],
  ['Sam only interviews the people who kept their New Year resolution and says resolutions work.', 'Sam interroge seulement les personnes qui ont tenu leur resolution du Nouvel An et dit que les resolutions marchent.'],
  ['Jade only studies the flights that arrived on time and says flying is always reliable.', 'Jade etudie seulement les vols arrivés a l heure et dit que prendre l avion est toujours fiable.'],
  ['Owen only asks the students who liked the group project and says group work is better.', 'Owen demande seulement aux eleves qui ont aime le projet de groupe et dit que le travail de groupe est meilleur.'],
  ['Lea only looks at the businesses that survived the first recession and says recessions are manageable.', 'Lea ne regarde que les entreprises qui ont survécu a la premiere recession et dit que les recessions sont gerables.'],
  ['Maya only reads the success stories from people who moved to a new city and says moving is always a fresh start.', 'Maya lit seulement les temoignages de reussite des personnes qui ont demenage dans une nouvelle ville et dit que demenager est toujours un nouveau depart.'],
  ['Ben only surveys the homeowners who liked their renovation and says renovation is always worth it.', 'Ben interroge seulement les proprietaires qui ont aime leur renovation et dit que la renovation en vaut toujours la peine.'],
  ['Ava only asks the cooks whose sourdough turned out well and says sourdough is easy.', 'Ava demande seulement aux cuisiniers dont le levain a bien reussi et dit que le levain est facile.'],
  ['Omar only checks the students who studied abroad and says studying abroad is straightforward.', 'Omar ne verifie que les eleves qui ont etudie a l etranger et dit que etudier a l etranger est simple.'],
  ['Nina only talks to the sellers whose online shop still exists and says ecommerce is low risk.', 'Nina ne parle qu aux vendeurs dont la boutique en ligne existe encore et dit que le commerce en ligne est peu risqué.'],
  ['Eli only reads the testimonials from people who enjoyed therapy and says therapy always feels good.', 'Eli lit seulement les temoignages des personnes qui ont aime la therapie et dit que la therapie fait toujours du bien.'],
  ['Lina only asks the runners who improved and says every training plan works.', 'Lina demande seulement aux coureurs qui se sont ameliores et dit que chaque plan d entrainement fonctionne.'],
  ['Grant only checks the cafes that survived the winter and says cafe owners have it easy.', 'Grant ne verifie que les cafes qui ont survécu a l hiver et dit que les proprietaires de cafe ont la vie facile.'],
  ['Tia only talks to the members who kept their gym routine and says fitness routines are simple.', 'Tia parle seulement aux membres qui ont garde leur routine de gym et dit que les routines sportives sont simples.'],
  ['Noah only hears from the students who liked the fast-track class and says accelerated learning is always best.', 'Noah n entend que les eleves qui ont aime la classe acceleree et dit que l apprentissage accelere est toujours le meilleur.'],
  ['Mia only asks the volunteers who stayed to the end and says volunteer events are always fun.', 'Mia demande seulement aux benevoles restes jusqu a la fin et dit que les evenements de benevolat sont toujours amusants.'],
  ['Jules only studies the families who kept using the meal service and says meal delivery is foolproof.', 'Jules etudie seulement les familles qui ont continue a utiliser le service de repas et dit que la livraison de repas est infaillible.'],
  ['Ava only looks at the students who liked the teacher and says the class was easy for everyone.', 'Ava ne regarde que les eleves qui ont aime le professeur et dit que le cours etait facile pour tout le monde.'],
  ['Finn only asks the people who kept their subscription and says the product must be great.', 'Finn demande seulement aux personnes qui ont garde leur abonnement et dit que le produit doit etre excellent.'],
  ['Mina only hears from the winners and says the competition was fair and simple.', 'Mina n entend que les gagnants et dit que la competition etait juste et simple.'],
  ['Theo only studies the people who kept the habit and says habit change is easy for everyone.', 'Theo etudie seulement les personnes qui ont garde l habitude et dit que changer d habitude est facile pour tout le monde.'],
  ['Juno only talks to the students who passed after extra help and says extra help guarantees passing.', 'Juno parle seulement aux eleves qui ont reussi apres un soutien supplementaire et dit que le soutien supplementaire garantit la reussite.'],
  ['Iris only checks the users who stayed subscribed after the trial and says the service is perfect.', 'Iris ne verifie que les utilisateurs restes abonnes apres l essai et dit que le service est parfait.'],
  ['Cole only asks the people who finished the project and says the deadline was reasonable.', 'Cole demande seulement aux personnes qui ont termine le projet et dit que la date limite etait raisonnable.'],
  ['Riley only hears from the sellers who kept going and says online storefronts are easy.', 'Riley n entend que les vendeurs qui ont continué et dit que les boutiques en ligne sont faciles.'],
  ['Pia only looks at the relationships that survived the hard season and says relationships are simple.', 'Pia ne regarde que les relations qui ont survécu a la periode difficile et dit que les relations sont simples.'],
  ['Hugo only asks the students who got the scholarship and says the application process is no big deal.', 'Hugo demande seulement aux eleves qui ont obtenu la bourse et dit que la procedure de candidature n est pas un gros souci.'],
];

const OPTIONS_EN = ['Survivorship Bias', 'Selection Bias', 'Cherry Picking', 'Base-rate Neglect'];
const OPTIONS_FR = ['Biais de survivance', 'Biais de sélection', 'Cerises (sélection biaisée)', 'Négligence du taux de base'];

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

function createQuestions(language: 'en' | 'fr'): Question[] {
  return SCENARIOS.map(([english, french], index) => {
    const isFrench = language === 'fr';
    const correctIndex = index % 4;
    return {
      id: 42101 + index,
      level: 4,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Biais de survivance' : 'Survivorship Bias',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotate(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? "On ne voit que les exemples qui ont reussi, puis on en tire une conclusion trop large."
        : 'Only the survivors or successes are visible, and a broad conclusion is drawn from them.',
      detailedExplanationBeginner: isFrench
        ? "On oublie les echecs cachés."
        : 'The hidden failures are left out.',
      detailedExplanationIntermediate: isFrench
        ? "Le biais de survivance apparait quand on ne regarde que les cas restés visibles: les gagnants, les produits encore en rayon, les entreprises encore debout. Les echecs ont disparu du tableau, donc la conclusion parait meilleure qu elle ne l est."
        : 'Survivorship bias appears when we only look at the cases that remain visible: the winners, the products still on shelves, the companies still standing. The failures have vanished from the picture, so the conclusion looks better than it is.',
      detailedExplanationExpert: isFrench
        ? "Le probleme n est pas seulement l oubli des perdants; c est la structure meme de l echantillon. Si l on observe uniquement ceux qui ont franchi un filtre de selection, on confond reussite et representativite. La correction consiste a reintroduire les echecs, les abandons et la population initiale, puis a comparer ce qui a disparu avec ce qui a survécu."
        : 'The issue is not just forgetting the losers; it is the structure of the sample itself. If you only observe the cases that made it through a selection filter, you confuse success with representativeness. The fix is to put the failures, dropouts, and original population back into view, then compare what disappeared with what survived.',
      questionFormat: 'standard',
    };
  });
}

export const SURVIVORSHIP_BIAS_EXPANSION_EN: Question[] = createQuestions('en');
export const SURVIVORSHIP_BIAS_EXPANSION_FR: Question[] = createQuestions('fr');
