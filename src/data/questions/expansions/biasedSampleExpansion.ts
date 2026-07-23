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
