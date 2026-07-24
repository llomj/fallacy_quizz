import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["After talking to three rude drivers at rush hour, Ava says every driver in the city is rude.", "Apres avoir parle a trois conducteurs impolis a l heure de pointe, Ava dit que tous les conducteurs de la ville sont impolis."],
  ["Milo interviews only his two happiest coworkers and concludes the office is perfect for everyone.", "Milo interroge seulement ses deux collegues les plus heureux et conclut que le bureau est parfait pour tout le monde."],
  ["Nora samples one busy subway line and decides public transit is always crowded.", "Nora teste une seule ligne de metro tres chargee et decide que les transports publics sont toujours bondes."],
  ["After one bad hotel stay, Leo says all hotels are dirty.", "Apres un seul mauvais sejour a l'hotel, Leo dit que tous les hotels sont sales."],
  ["Priya asks only her friends who love spicy food and claims everyone likes spicy food.", "Priya ne demande qu'a des amis qui aiment les plats epices et affirme que tout le monde aime les plats epices."],
  ["Ben watches one loud classroom and says every class is chaotic.", "Ben observe une seule classe bruyante et dit que toutes les classes sont chaotiques."],
  ["Zoe surveys only her fan club and says the movie is universally loved.", "Zoe interroge seulement son fan club et dit que le film est universellement aime."],
  ["Omar checks one neighborhood block and decides the whole town has no parking.", "Omar regarde un seul coin du quartier et decide que toute la ville manque de stationnement."],
  ["Maya asks only people who already own the product and says it must be amazing.", "Maya demande seulement a des gens qui possedent deja le produit et dit qu'il doit etre incroyable."],
  ["Eli talks to two students from the advanced class and says school math is easy.", "Eli parle a deux eleves de la classe avancee et dit que les maths a l'ecole sont faciles."],
  ["Tara reads three glowing reviews from friends and says the app is flawless.", "Tara lit trois avis elogieux d'amis et dit que l'application est sans defaut."],
  ["Theo hears complaints from the night shift only and says the whole company is awful.", "Theo entend seulement les plaintes de l'equipe de nuit et dit que toute l'entreprise est horrible."],
  ["Jade counts one successful bake sale and says every fundraiser is a hit.", "Jade compte une seule vente de gateaux reussie et dit que chaque collecte de fonds est un succes."],
  ["Noah interviews only regular gymgoers and says everyone enjoys the gym.", "Noah interroge seulement des habitués de la salle et dit que tout le monde aime la salle."],
  ["Lina asks only people who love quiet music and says the concert crowd must have liked it.", "Lina demande seulement a des personnes qui aiment la musique calme et dit que la foule du concert a forcement aime."],
  ["Kai checks one successful class project and concludes group work always goes well.", "Kai examine un seul projet de groupe reussi et conclut que le travail en equipe se passe toujours bien."],
  ["Rina hears from two friends who loved the vacation spot and says every visitor loves it.", "Rina entend deux amis qui ont adore le lieu de vacances et dit que tous les visiteurs l'adorent."],
  ["Mia only asks the people who stayed until the end and says the lecture was engaging.", "Mia ne demande qu'aux personnes restees jusqu'a la fin et dit que la conference etait captivante."],
  ["Finn sees one packed brunch line and says the cafe is the best in town.", "Finn voit une seule file de brunch tres longue et dit que le cafe est le meilleur de la ville."],
  ["Sera talks to one family that loved the school and says the school is unbeatable.", "Sera parle a une famille qui a adore l'ecole et dit que l'ecole est imbattable."],
  ["Ben asks only the people who finished the game and says the game is easy.", "Ben ne demande qu'aux gens qui ont termine le jeu et dit que le jeu est facile."],
  ["Aria asks shoppers on sale day only and says the store is always crowded.", "Aria demande seulement aux acheteurs du jour des soldes et dit que le magasin est toujours bondé."],
  ["Owen samples only one successful neighborhood and says every block is safe.", "Owen observe seulement un quartier qui reussit et dit que tous les blocs sont surs."],
  ["Nia interviews only the club leaders and says the club is welcoming for everyone.", "Nia interroge seulement les responsables du club et dit que le club est accueillant pour tout le monde."],
  ["Theo watches one viral cooking clip and says every recipe online is simple.", "Theo regarde une seule video de cuisine virale et dit que toutes les recettes en ligne sont simples."],
  ["Mina checks one quiet train ride and says the commute is always peaceful.", "Mina prend un seul trajet en train tranquille et dit que le trajet est toujours paisible."],
  ["Luca asks only satisfied customers and says the store has no problems.", "Luca ne demande qu'a des clients satisfaits et dit que le magasin n'a aucun probleme."],
  ["Priya hears one class praise the teacher and says every student loves the teacher.", "Priya entend une seule classe elogier le professeur et dit que tous les eleves aiment le professeur."],
  ["Ethan looks at one sunny week and says the city never gets bad weather.", "Ethan regarde une seule semaine ensoleillee et dit que la ville n'a jamais de mauvais temps."],
  ["Zoe talks to only the fast runners and says running is easy for everyone.", "Zoe parle seulement aux coureurs rapides et dit que courir est facile pour tout le monde."],
  ["Kai samples one popular smoothie shop on launch day and says all smoothie shops are great.", "Kai teste un seul bar a smoothies populaire le jour du lancement et dit que tous les bars a smoothies sont super."],
  ["Talia asks the top students and says the homework load is light.", "Talia demande aux meilleurs eleves et dit que la charge de devoirs est legere."],
  ["Noah hears one happy customer and says the product has universal approval.", "Noah entend un seul client content et dit que le produit fait l'unanimite."],
  ["Maya looks at one full parking lot and says every store in the area is busy.", "Maya regarde un seul parking plein et dit que tous les magasins du coin sont frequentes."],
  ["Ben asks only the people who agreed with him and says the policy is obviously right.", "Ben ne demande qu'aux personnes d'accord avec lui et dit que la politique est evidemment juste."],
  ["Rina interviews only parents from one grade and says the whole school likes the new rule.", "Rina interroge seulement des parents d'une seule classe et dit que toute l'ecole aime la nouvelle regle."],
  ["Omar checks one successful event and says every event organizer is competent.", "Omar regarde un seul evenement reussi et dit que chaque organisateur d'evenements est competent."],
  ["Lina hears from the people who got refunds and says the service is always bad.", "Lina n'entend que les personnes remboursee et dit que le service est toujours mauvais."],
  ["Eli talks to one group of gamers and says the game has no flaws.", "Eli parle a un groupe de joueurs et dit que le jeu n'a aucun defaut."],
  ["Sera asks only morning commuters and says the bus is never late.", "Sera demande seulement aux navetteurs du matin et dit que le bus n'est jamais en retard."],
  ["Milo samples one bakery line and says every pastry place is worth it.", "Milo observe une seule file de boulangerie et dit que chaque boulangerie vaut le coup."],
  ["Jade asks the people who already like the answer and says the answer is common sense.", "Jade demande aux personnes qui aiment deja la reponse et dit que la reponse est du bon sens."],
  ["Finn listens only to customers who stayed through the demo and says the presentation was perfect.", "Finn ecoute seulement les clients restes jusqu'a la fin de la demo et dit que la presentation etait parfaite."],
  ["Priya asks the people at the front of the queue and says every customer loves the store.", "Priya demande aux personnes en tete de file et dit que tous les clients aiment le magasin."],
  ["Theo checks one neighborhood block party and says the whole city is friendly.", "Theo regarde une seule fete de quartier et dit que toute la ville est sympathique."],
  ["Nia interviews only the volunteers who showed up early and says the project is running flawlessly.", "Nia interroge seulement les benevoles arrives en avance et dit que le projet fonctionne sans faille."],
  ["Owen hears one positive story about remote work and says office work is obsolete.", "Owen entend une seule histoire positive sur le teletravail et dit que le travail au bureau est obsolète."],
  ["Aria asks only the people who passed the test and says the test was fair.", "Aria ne demande qu'aux personnes qui ont reussi le test et dit que le test etait juste."],
  ["Mina checks one happy crowd at a concert and says every concert is amazing.", "Mina regarde une seule foule heureuse a un concert et dit que tous les concerts sont incroyables."],
  ["Leo surveys only his own family and says the new rule is popular.", "Leo interroge seulement sa propre famille et dit que la nouvelle regle est populaire."],
  ["Maya only asks people already inside the bookstore and says everyone in town loves reading.", "Maya ne demande qu'aux personnes deja dans la librairie et dit que tout le monde en ville aime lire."],
  ["After polling only the fans in the front row, Theo says the singer is the nation's favorite.", "Apres avoir interroge seulement les fans au premier rang, Theo dit que la chanteuse est la preferee du pays."],
  ["Nina interviews only people who came to a free sample day and says the product is a huge hit.", "Nina interroge seulement des personnes venues pour une journee d'echantillons gratuits et dit que le produit est un enorme succes."],
  ["Ben asks only the students who passed and concludes the exam was easy for everyone.", "Ben demande seulement aux eleves qui ont reussi et conclut que l'examen etait facile pour tout le monde."],
  ["Omar checks only the busiest hour and says the cafe is packed all day.", "Omar regarde seulement l'heure la plus chargee et dit que le cafe est plein toute la journee."],
  ["Priya surveys only people who already like the policy and says the whole city supports it.", "Priya interroge seulement les personnes qui aiment deja la politique et dit que toute la ville la soutient."],
  ["After asking only the runners who finished, Leo says the marathon was simple.", "Apres avoir demande seulement aux coureurs qui ont termine, Leo dit que le marathon etait simple."],
  ["Rina talks only to customers on opening day and says the new shop is universally loved.", "Rina parle seulement aux clients du jour d'ouverture et dit que la nouvelle boutique est adoree de tous."],
  ["Jules interviews only the people with reserved seats and says the theater is always full.", "Jules interroge seulement les personnes ayant des places reservees et dit que le theatre est toujours plein."],
  ["Ava asks only her friends who like horror movies and says every person enjoys scary films.", "Ava demande seulement a ses amis qui aiment les films d'horreur et dit que tout le monde aime les films effrayants."]
  ,
  ["After asking only shoppers who found a parking spot easily, Mira says the mall is never crowded.", "Apres avoir demande seulement a des clients qui ont trouve une place de parking facilement, Mira dit que le centre commercial n'est jamais bondé."],
  ["Noah interviews only people at the free tasting table and says the restaurant serves the best food in town.", "Noah interroge seulement des personnes a la table de degustation gratuite et dit que le restaurant sert la meilleure nourriture de la ville."],
  ["Priya asks only students who sit in the front row and concludes the lecture is easy for everyone.", "Priya demande seulement a des eleves assis au premier rang et conclut que le cours est facile pour tout le monde."],
  ["Ben checks only the people who already renewed their membership and says the club has no churn problem.", "Ben regarde seulement les personnes qui ont deja renouvele leur abonnement et dit que le club n'a aucun probleme de depart."],
  ["Omar surveys only fans in the team jersey and says the whole city loves the team.", "Omar interroge seulement des fans portant le maillot de l'equipe et dit que toute la ville adore l'equipe."],
  ["Mia asks only her coworkers who took the paid lunch and says the office cafeteria is always great.", "Mia demande seulement a ses collegues qui ont pris le dejeuner payant et dit que la cafeteria du bureau est toujours excellente."],
  ["Theo talks only to runners who finished the race and says the marathon was easy for everyone.", "Theo parle seulement a des coureurs qui ont termine la course et dit que le marathon etait facile pour tout le monde."],
  ["Zoe checks only reviews from people who got a replacement item and says the store has terrible products.", "Zoe consulte seulement les avis de personnes qui ont recu un article de remplacement et dit que le magasin vend des produits terribles."],
  ["Kai asks only commuters on the busiest train and says public transit is packed all day.", "Kai demande seulement a des navetteurs dans le train le plus charge et dit que les transports publics sont bondes toute la journee."],
  ["Rina interviews only members who attend every meeting and says the group has perfect attendance.", "Rina interroge seulement des membres qui assistent a toutes les reunions et dit que le groupe a une presence parfaite."],
  ["Lina asks only friends who already liked the trailer and says the movie will be a hit.", "Lina demande seulement a des amis qui ont deja aime la bande-annonce et dit que le film sera un succes."],
  ["Finn checks only the people who stayed for the final song and says the concert was amazing for everyone.", "Finn consulte seulement les personnes restees jusqu'a la derniere chanson et dit que le concert etait incroyable pour tout le monde."],
  ["Nia surveys only buyers who used a coupon and says the shop always has amazing deals.", "Nia interroge seulement des acheteurs qui ont utilise un coupon et dit que la boutique a toujours des offres incroyables."],
  ["Aria asks only the athletes who won medals and concludes the training program works for everyone.", "Aria demande seulement aux athlètes qui ont gagne des medailles et conclut que le programme d'entrainement fonctionne pour tout le monde."],
  ["Milo talks only to people at the grand opening and says the cafe is beloved everywhere.", "Milo parle seulement a des personnes presentes a l'ouverture et dit que le cafe est adore partout."],
  ["Jade checks only the neighbors who joined the block party and says the whole street is friendly.", "Jade regarde seulement les voisins qui ont participe a la fete de quartier et dit que toute la rue est sympathique."],
  ["Eli asks only employees who got the bonus and says the company treats everyone well.", "Eli demande seulement aux employes qui ont recu une prime et dit que l'entreprise traite bien tout le monde."],
  ["Talia interviews only people who already own the gadget and says it must be the perfect device.", "Talia interroge seulement des personnes qui possedent deja l'appareil et dit que cela doit etre l'appareil parfait."],
  ["Maya asks only the people who got to the front of the line and says the new bakery is always packed.", "Maya demande seulement aux personnes arrivees en tete de file et dit que la nouvelle boulangerie est toujours pleine."],
  ["Owen samples only one good experience at the repair shop and says every repair shop is excellent.", "Owen teste seulement une bonne experience dans un atelier de reparation et dit que chaque atelier de reparation est excellent."],
  ["Priya talks only to the parents who liked the new schedule and says the whole school loves it.", "Priya parle seulement aux parents qui ont aime le nouvel emploi du temps et dit que toute l'ecole l'adore."],
  ["Theo asks only people in the VIP section and says the show is universally loved.", "Theo demande seulement aux personnes de la zone VIP et dit que le spectacle est adore de tous."],
  ["Luca checks only the houses with new paint and says the neighborhood is always well kept.", "Luca regarde seulement les maisons avec une peinture neuve et dit que le quartier est toujours bien entretenu."],
  ["Noah interviews only the students who turned in extra credit and says the class is brilliant.", "Noah interroge seulement les eleves qui ont rendu un travail supplementaire et dit que la classe est brillante."],
  ["Mina talks only to people who visited on opening day and says the museum is a massive success.", "Mina parle seulement a des personnes venues le jour de l'ouverture et dit que le musee est un enorme succes."],
  ["Ben asks only the shoppers who got help right away and says customer service is perfect.", "Ben demande seulement aux acheteurs qui ont obtenu de l'aide tout de suite et dit que le service client est parfait."],
  ["Sera surveys only the students who sat through the whole workshop and says everyone loved it.", "Sera interroge seulement les eleves qui ont suivi tout l'atelier et dit que tout le monde a adore."],
  ["Kai asks only the people who passed the coding challenge and says the challenge was too easy.", "Kai demande seulement aux personnes qui ont reussi le defi de code et dit que le defi etait trop facile."],
  ["Rina talks only to the people who joined the loyalty program and says everyone shops there.", "Rina parle seulement aux personnes inscrites au programme de fidelite et dit que tout le monde fait ses achats la-bas."],
  ["Omar checks only the busiest brunch hour and says the cafe is crowded all day.", "Omar regarde seulement l'heure de brunch la plus chargee et dit que le cafe est bondé toute la journee."],
  ["Lina asks only the parents who volunteered and says the PTA is universally supportive.", "Lina demande seulement aux parents benevoles et dit que l'association de parents soutient tout le monde."],
  ["Eli samples only the crowd at the giveaway table and says the product is a hit everywhere.", "Eli observe seulement la foule a la table de cadeaux et dit que le produit marche partout."],
  ["Maya interviews only the passengers on a delayed bus and says public transit is always late.", "Maya interroge seulement les passagers d'un bus en retard et dit que les transports publics sont toujours en retard."],
  ["Finn asks only the people who got free samples and says the shop never disappoints.", "Finn demande seulement aux personnes qui ont recu des echantillons gratuits et dit que la boutique ne deçoit jamais."],
  ["Aria checks only the group that loved the keynote and says the conference was flawless.", "Aria regarde seulement le groupe qui a adore la conference principale et dit que la conference etait sans faille."],
  ["Milo talks only to the parents who already agreed with him and says the new rule is common sense.", "Milo parle seulement aux parents qui etaient deja d'accord avec lui et dit que la nouvelle regle est du bon sens."],
  ["Priya asks only the people who got seats near the front and says the theater is always full.", "Priya demande seulement aux personnes assises pres de la scene et dit que le theatre est toujours plein."],
  ["Theo surveys only the fans who bought merch and says the singer is the country's favorite.", "Theo interroge seulement les fans qui ont achete du merchandising et dit que la chanteuse est la preferee du pays."],
  ["Jade asks only the students from the honors class and says homework is easy for everyone.", "Jade demande seulement aux eleves de la classe d'honneur et dit que les devoirs sont faciles pour tout le monde."],
  ["Nia talks only to people who finished the demo and says the software is simple and perfect.", "Nia parle seulement a des personnes qui ont termine la demo et dit que le logiciel est simple et parfait."]
];

const EN = ['Biased Sample', 'Availability Heuristic', 'Bandwagon', 'False Dilemma'];
const FR = ['Échantillon biaisé', 'Heuristique de disponibilité', 'Effet de mode', 'Fausse dichotomie'];

const rotate = (a: string[], i: number) => {
  const r = a.slice(1);
  r.splice(i, 0, a[0]);
  return r;
};

const sub = (i: number) => (i < 17 ? SubLevel.BEGINNER : i < 34 ? SubLevel.INTERMEDIATE : SubLevel.EXPERT);

function make(fr = false): Question[] {
  return SCENARIOS.map((s, i) => {
    const c = i % 4;
    return {
      id: 32501 + i,
      level: 6,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Échantillon biaisé' : 'Biased Sample',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? FR : EN, c),
      correct_option_index: c,
      explanation: fr
        ? "L'argument repose sur un petit groupe non representatif ou sur un sous-ensemble soigneusement choisi."
        : 'The claim is based on a small, unrepresentative group or a carefully chosen subset.',
      detailedExplanationBeginner: fr
        ? "Un petit echantillon ne represente pas toujours l'ensemble."
        : 'A small sample does not always represent the whole.',
      detailedExplanationIntermediate: fr
        ? "Quand on ne regarde qu'une partie selective des donnees, on tire une conclusion plus large que ce que les preuves justifient."
        : 'When you only look at a selective slice of the data, you draw a broader conclusion than the evidence supports.',
      detailedExplanationExpert: fr
        ? "L'echantillon biaise apparait quand la methode de collecte favorise certains resultats ou certaines personnes, ce qui deforme la probabilite, la frequence et la generalisation."
        : 'A biased sample appears when the collection method favors certain results or people, distorting probability, frequency, and generalization.',
      questionFormat: 'standard',
    };
  });
}

export const BIASED_SAMPLE_EXPANSION_EN: Question[] = make();
export const BIASED_SAMPLE_EXPANSION_FR: Question[] = make(true);
