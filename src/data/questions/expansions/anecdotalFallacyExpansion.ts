import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['My uncle ate fried food every day and lived to ninety, so fried food cannot harm your health.', 'Mon oncle a mangé des aliments frits chaque jour et a vécu jusqu’à quatre-vingt-dix ans, donc la friture ne peut pas nuire à la santé.'],
  ['This phone brand must be unreliable because my cousin bought one that broke.', 'Cette marque de téléphone est forcément peu fiable, car celui de mon cousin est tombé en panne.'],
  ['Online classes never work; I took one course and found it boring.', 'Les cours en ligne ne fonctionnent jamais : j’en ai suivi un et je l’ai trouvé ennuyeux.'],
  ['Seat belts are unnecessary because my neighbor survived a crash without wearing one.', 'Les ceintures de sécurité sont inutiles puisque mon voisin a survécu à un accident sans en porter.'],
  ['That restaurant is always excellent; my dinner there last Tuesday was perfect.', 'Ce restaurant est toujours excellent : mon dîner de mardi dernier était parfait.'],
  ['Studying with music improves everyone’s grades because it helped me pass chemistry.', 'Étudier en musique améliore les notes de tout le monde puisque cela m’a aidé à réussir en chimie.'],
  ['The city buses are never late; mine arrived early this morning.', 'Les bus de la ville ne sont jamais en retard : le mien est arrivé en avance ce matin.'],
  ['Vaccines cause the flu because I felt sick the day after my injection.', 'Les vaccins donnent la grippe parce que je me suis senti malade le lendemain de mon injection.'],
  ['All rescue dogs are calm; the one my sister adopted sleeps all afternoon.', 'Tous les chiens de refuge sont calmes : celui que ma sœur a adopté dort tout l’après-midi.'],
  ['This diet works for everybody because my friend lost five kilos on it.', 'Ce régime fonctionne pour tout le monde puisque mon ami a perdu cinq kilos en le suivant.'],
  ['Nobody needs eight hours of sleep; I feel fine after five hours.', 'Personne n’a besoin de huit heures de sommeil : je me sens bien après cinq heures.'],
  ['Electric cars have no range problem because my coworker drove hers across town easily.', 'Les voitures électriques n’ont aucun problème d’autonomie puisque ma collègue a traversé la ville facilement avec la sienne.'],
  ['The beach is never crowded; when I visited in winter, it was empty.', 'La plage n’est jamais bondée : quand j’y suis allé en hiver, elle était vide.'],
  ['All teenagers love chess because my nephew plays every weekend.', 'Tous les adolescents adorent les échecs puisque mon neveu y joue chaque week-end.'],
  ['The new medication has no side effects; my grandmother takes it and feels great.', 'Le nouveau médicament n’a aucun effet secondaire : ma grand-mère le prend et se sent très bien.'],
  ['Recycling does not matter because I once saw a worker put two bins into the same truck.', 'Le recyclage ne sert à rien, car j’ai vu une fois un employé vider deux poubelles dans le même camion.'],
  ['That airline never loses luggage; my suitcase arrived safely last year.', 'Cette compagnie aérienne ne perd jamais de bagages : ma valise est bien arrivée l’an dernier.'],
  ['Running is bad for your knees because one runner I know needed surgery.', 'Courir abîme les genoux parce qu’un coureur que je connais a dû se faire opérer.'],
  ['Public libraries are obsolete; nobody was inside when I passed one at closing time.', 'Les bibliothèques publiques sont dépassées : il n’y avait personne quand je suis passé à l’heure de fermeture.'],
  ['All video games make people aggressive because my brother shouted after losing one match.', 'Tous les jeux vidéo rendent agressif puisque mon frère a crié après avoir perdu une partie.'],
  ['Organic vegetables taste worse; I once bought an organic tomato that was bland.', 'Les légumes bio ont moins de goût : j’ai acheté une fois une tomate bio fade.'],
  ['The train route is perfectly safe because I have ridden it twice without a problem.', 'Cette ligne de train est parfaitement sûre puisque je l’ai empruntée deux fois sans problème.'],
  ['Small businesses give better service; the owner of my local bakery remembers my name.', 'Les petites entreprises offrent un meilleur service : la propriétaire de ma boulangerie connaît mon prénom.'],
  ['Weather forecasts are useless because the picnic forecast was wrong last Saturday.', 'Les prévisions météo sont inutiles puisque celle de mon pique-nique était fausse samedi dernier.'],
  ['Every cat hates water; my cat ran away when I turned on the bath.', 'Tous les chats détestent l’eau : le mien s’est enfui quand j’ai fait couler le bain.'],
  ['Reading on screens cannot hurt sleep because I use my tablet at night and fall asleep quickly.', 'Lire sur un écran ne peut pas perturber le sommeil puisque j’utilise ma tablette le soir et je m’endors vite.'],
  ['The neighborhood is unsafe because a bicycle was stolen outside my building.', 'Le quartier est dangereux parce qu’un vélo a été volé devant mon immeuble.'],
  ['Homework does not improve learning; one worksheet did not help my daughter understand fractions.', 'Les devoirs n’améliorent pas l’apprentissage : une fiche n’a pas aidé ma fille à comprendre les fractions.'],
  ['All expensive shoes last for years because my favorite pair still looks new.', 'Toutes les chaussures chères durent des années puisque ma paire préférée paraît encore neuve.'],
  ['The flu is always mild; I had it once and recovered in two days.', 'La grippe est toujours bénigne : je l’ai eue une fois et j’ai guéri en deux jours.'],
  ['Remote workers are more productive because I finished a report quickly at home yesterday.', 'Les télétravailleurs sont plus productifs puisque j’ai terminé rapidement un rapport chez moi hier.'],
  ['That hiking trail is easy for anyone; I completed it without stopping.', 'Ce sentier est facile pour tout le monde puisque je l’ai terminé sans m’arrêter.'],
  ['No one reads instruction manuals; I threw mine away without opening it.', 'Personne ne lit les modes d’emploi : j’ai jeté le mien sans l’ouvrir.'],
  ['Solar panels never save money because my friend’s first electricity bill stayed high.', 'Les panneaux solaires ne font jamais économiser d’argent puisque la première facture de mon ami est restée élevée.'],
  ['All landlords are helpful; mine fixed my sink the same afternoon.', 'Tous les propriétaires sont serviables : le mien a réparé mon évier le jour même.'],
  ['The school cafeteria food is terrible because I disliked Monday’s soup.', 'La nourriture de la cantine est mauvaise puisque je n’ai pas aimé la soupe de lundi.'],
  ['Meditation cures anxiety because one person in my yoga class says it cured hers.', 'La méditation guérit l’anxiété puisqu’une personne de mon cours de yoga dit qu’elle l’a guérie.'],
  ['Tourists are always rude; one visitor pushed ahead of me in a queue.', 'Les touristes sont toujours impolis : un visiteur m’a dépassé dans une file.'],
  ['This laptop model is flawless because mine has worked for three years.', 'Ce modèle d’ordinateur est sans défaut puisque le mien fonctionne depuis trois ans.'],
  ['Coffee cannot dehydrate you because I drink four cups and am rarely thirsty.', 'Le café ne peut pas déshydrater puisque j’en bois quatre tasses et j’ai rarement soif.'],
  ['The local market is cheaper than every supermarket; I found cheap strawberries there once.', 'Le marché local est moins cher que tous les supermarchés : j’y ai trouvé des fraises bon marché une fois.'],
  ['Learning a language is easy; I picked up several phrases during one vacation.', 'Apprendre une langue est facile : j’ai retenu plusieurs phrases pendant un seul voyage.'],
  ['All office meetings are pointless because yesterday’s meeting solved nothing.', 'Toutes les réunions de bureau sont inutiles puisque celle d’hier n’a rien résolu.'],
  ['The park does not need more lighting; I walked there once at night and felt safe.', 'Le parc n’a pas besoin de plus d’éclairage : j’y ai marché une fois la nuit et je me suis senti en sécurité.'],
  ['Children do not need sunscreen on cloudy days; mine played outside and did not burn.', 'Les enfants n’ont pas besoin de crème solaire quand le ciel est couvert : les miens ont joué dehors sans attraper de coup de soleil.'],
  ['Secondhand cars are dependable because my old car has never needed a major repair.', 'Les voitures d’occasion sont fiables puisque la mienne n’a jamais nécessité de grosse réparation.'],
  ['The museum is boring for children; my son wanted to leave after ten minutes.', 'Le musée est ennuyeux pour les enfants : mon fils a voulu partir après dix minutes.'],
  ['Everyone should use this budgeting app because it stopped me from overspending last month.', 'Tout le monde devrait utiliser cette application de budget puisqu’elle m’a empêché de trop dépenser le mois dernier.'],
  ['The river water must be clean because I swam in it once and did not get sick.', 'L’eau de la rivière est forcément propre puisque je m’y suis baigné une fois sans tomber malade.'],
  ['Early morning flights are never delayed; my 6 a.m. flight left exactly on time.', 'Les vols tôt le matin ne sont jamais retardés : mon vol de six heures est parti exactement à l’heure.']
];

const OPTIONS_EN = ['Anecdotal Fallacy', 'Hasty Generalization', 'Confirmation Bias', 'Appeal to Popularity'];
const OPTIONS_FR = ['Sophisme anecdotique', 'Généralisation hâtive', 'Biais de confirmation', 'Appel à la popularité'];

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
    const isFrench = language === 'fr';
    const correctIndex = index % 4;
    return {
      id: 30251 + index,
      level: 1,
      persona_stage: PersonaStage.PLANKTON,
      concept: isFrench ? 'Sophisme anecdotique' : 'Anecdotal Fallacy',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'Une expérience personnelle isolée remplace des données plus larges et plus représentatives.'
        : 'One isolated personal experience is used in place of broader, more representative evidence.',
      detailedExplanationBeginner: isFrench
        ? 'Un seul exemple ne suffit pas à prouver une règle générale.'
        : 'One example is not enough to prove a general rule.',
      detailedExplanationIntermediate: isFrench
        ? 'L’anecdote peut être vraie, mais elle ne montre ni la fréquence du phénomène ni ce qui arrive dans la majorité des cas.'
        : 'The story may be true, but it does not show how frequent the outcome is or what happens in most cases.',
      detailedExplanationExpert: isFrench
        ? 'Le sophisme anecdotique donne un poids excessif à un cas vivant mais non représentatif, tout en ignorant les échantillons, les taux de base et les données systématiques.'
        : 'The anecdotal fallacy gives disproportionate weight to a vivid but unrepresentative case while ignoring samples, base rates, and systematic evidence.',
      questionFormat: 'standard'
    };
  });
}

export const ANECDOTAL_FALLACY_EXPANSION_EN = createQuestions('en');
export const ANECDOTAL_FALLACY_EXPANSION_FR = createQuestions('fr');
