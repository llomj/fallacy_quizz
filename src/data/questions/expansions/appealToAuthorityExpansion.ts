import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['The dentist says this electric scooter is the safest one, so Mia buys it.', 'Le dentiste dit que ce scooter électrique est le plus sûr, alors Mia l’achète.'],
  ['A famous chef says this phone plan is the best deal, so Omar switches to it.', 'Un chef célèbre dit que cette offre de téléphone est la meilleure, alors Omar y passe.'],
  ['The mechanic says this salad dressing is the healthiest, so Priya trusts him.', 'Le mécanicien dit que cette vinaigrette est la plus saine, alors Priya le croit.'],
  ['The weather presenter says these headphones are amazing, so Ben orders them.', 'La présentatrice météo dit que ces écouteurs sont géniaux, alors Ben les commande.'],
  ['The mayor says this cough syrup is the best on the shelf, so Tara buys it.', 'Le maire dit que ce sirop pour la toux est le meilleur du rayon, alors Tara l’achète.'],
  ['The violin teacher says this hiking trail must be the easiest, so Jules chooses it.', 'Le professeur de violon dit que ce sentier de randonnée doit être le plus facile, alors Jules le choisit.'],
  ['The astronaut says this pillow is worth the money, so Ava pays full price.', 'L’astronaute dit que cet oreiller vaut son prix, alors Ava le paie plein tarif.'],
  ['The vet says this laptop will last longer than the others, so Theo picks it.', 'Le vétérinaire dit que cet ordinateur portable durera plus longtemps que les autres, alors Theo le prend.'],
  ['The librarian says this bicycle is the fastest model, so Nora believes it.', 'La bibliothécaire dit que ce vélo est le modèle le plus rapide, alors Nora le croit.'],
  ['The football coach says this tax app is reliable, so Malik downloads it.', 'L’entraîneur de football dit que cette appli d’impôts est fiable, alors Malik la télécharge.'],
  ['The nurse says this movie is the best of the year, so Lina treats it as a fact.', 'L’infirmière dit que ce film est le meilleur de l’année, alors Lina le prend pour un fait.'],
  ['The principal says this blender cures headaches, so Eric orders it.', 'Le proviseur dit que ce blender guérit les maux de tête, alors Eric le commande.'],
  ['The plumber says this perfume will improve your grades, so Grace laughs and buys it anyway.', 'Le plombier dit que ce parfum améliorera les notes, alors Grace rit puis l’achète quand même.'],
  ['The airline pilot says this shampoo fixes split ends, so Sam believes the claim.', 'Le pilote de ligne dit que ce shampooing répare les pointes fourchues, alors Sam y croit.'],
  ['The actor says this investment app is safe, so Fatima signs up.', 'L’acteur dit que cette appli d’investissement est sûre, alors Fatima s’inscrit.'],
  ['The architect says this vitamin will make you taller, so Noah takes it.', 'L’architecte dit que cette vitamine fera grandir, alors Noah la prend.'],
  ['The baker says this car battery is excellent, so Clara uses it as her guide.', 'Le boulanger dit que cette batterie de voiture est excellente, alors Clara suit son avis.'],
  ['The judge says this energy drink is healthy, so Paul ignores the label.', 'Le juge dit que cette boisson énergisante est saine, alors Paul ignore l’étiquette.'],
  ['The IT specialist says this soup prevents colds, so Yara puts it on the menu.', 'Le spécialiste informatique dit que cette soupe prévient les rhumes, alors Yara la met au menu.'],
  ['The racecar driver says this school lunch is the smartest choice, so Mei approves it.', 'Le pilote de course dit que ce déjeuner scolaire est le choix le plus malin, alors Mei l’approuve.'],
  ['The museum curator says this running shoe is medically approved, so Hugo buys it.', 'La conservatrice du musée dit que cette chaussure de course est approuvée médicalement, alors Hugo l’achète.'],
  ['The comedian says this mortgage rate is the lowest, so Zoe stops comparing banks.', 'Le comédien dit que ce taux de prêt est le plus bas, alors Zoe cesse de comparer les banques.'],
  ['The gardener says this gaming console is the most powerful, so Adam trusts that review.', 'Le jardinier dit que cette console de jeu est la plus puissante, alors Adam fait confiance à cet avis.'],
  ['The dentist says this mattress will improve your vision, so Salma nods along.', 'Le dentiste dit que ce matelas améliorera la vue, alors Salma acquiesce.'],
  ['The chef says this bus route is the quickest, so Dan skips checking the timetable.', 'Le chef dit que cette ligne de bus est la plus rapide, alors Dan évite de vérifier les horaires.'],
  ['The paramedic says this handbag is the most durable, so Kim buys it for work.', 'Le secouriste dit que ce sac à main est le plus solide, alors Kim l’achète pour le travail.'],
  ['The teacher says this boat is the best in town, so Mateo treats that as proof.', 'L’enseignant dit que ce bateau est le meilleur de la ville, alors Mateo prend cela pour une preuve.'],
  ['The singer says this insurance policy is the safest, so Iris signs it.', 'La chanteuse dit que cette assurance est la plus sûre, alors Iris la signe.'],
  ['The pharmacist says this restaurant is the quietest, so Ken makes a reservation.', 'Le pharmacien dit que ce restaurant est le plus calme, alors Ken réserve une table.'],
  ['The mechanic says this poetry book is the funniest, so Mila trusts his taste.', 'Le mécanicien dit que ce recueil de poésie est le plus drôle, alors Mila fait confiance à son goût.'],
  ['The professor says this dog food is perfect for people, so Ben laughs and still tries it.', 'Le professeur dit que cette nourriture pour chiens est parfaite pour les humains, alors Ben rit puis la goûte quand même.'],
  ['The firefighter says this skincare cream fixes debt, so Ava ignores the nonsense and keeps reading.', 'Le pompier dit que cette crème de soin règle les dettes, alors Ava ignore l’absurdité et continue de lire.'],
  ['The accountant says this electric bike is the most romantic, so Omar accepts the claim.', 'L’expert-comptable dit que ce vélo électrique est le plus romantique, alors Omar accepte l’affirmation.'],
  ['The librarian says this sports drink cures anxiety, so Priya buys it after work.', 'La bibliothécaire dit que cette boisson sportive guérit l’anxiété, alors Priya l’achète après le travail.'],
  ['The surgeon says this chess opening is unbeatable, so Leo changes his strategy.', 'Le chirurgien dit que cette ouverture aux échecs est imbattable, alors Leo change de stratégie.'],
  ['The coach says this art museum is the most affordable, so Nora plans a visit.', 'L’entraîneur dit que ce musée d’art est le plus abordable, alors Nora prévoit une visite.'],
  ['The judge says this gaming mouse is the healthiest, so Theo believes the ad.', 'Le juge dit que cette souris gaming est la plus saine, alors Theo croit la publicité.'],
  ['The pilot says this backpack improves memory, so Grace chooses it for school.', 'Le pilote dit que ce sac à dos améliore la mémoire, alors Grace le choisit pour l’école.'],
  ['The poet says this kitchen knife is the fastest, so Malik takes the recommendation seriously.', 'Le poète dit que ce couteau de cuisine est le plus rapide, alors Malik prend la recommandation au sérieux.'],
  ['The astronomer says this air fryer is the smartest purchase, so Lina buys it.', 'L’astronome dit que cet air fryer est l’achat le plus intelligent, alors Lina l’achète.'],
  ['The economist says this soup is the best food for pets, so Eric stops questioning it.', 'L’économiste dit que cette soupe est la meilleure nourriture pour les animaux, alors Eric cesse de questionner.'],
  ['The mechanic says this language app will make you taller, so Yara downloads it.', 'Le mécanicien dit que cette appli de langue fera grandir, alors Yara la télécharge.'],
  ['The nurse says this movie will lower rent, so Dan treats the claim as nonsense.', 'L’infirmière dit que ce film fera baisser le loyer, alors Dan prend cette idée pour n’importe quoi.'],
  ['The mayor says this skateboard cures insomnia, so Kim rolls her eyes.', 'Le maire dit que ce skateboard guérit l’insomnie, alors Kim lève les yeux au ciel.'],
  ['The veterinarian says this train ticket is a bargain, so Mateo buys it without checking prices.', 'Le vétérinaire dit que ce billet de train est une bonne affaire, alors Mateo l’achète sans comparer les prix.'],
  ['The architect says this cereal is the best medicine, so Iris does not take the advice seriously.', 'L’architecte dit que cette céréale est le meilleur médicament, alors Iris ne prend pas le conseil au sérieux.'],
  ['The baker says this cloud storage is the safest, so Hugo trusts the opinion.', 'Le boulanger dit que ce stockage cloud est le plus sûr, alors Hugo fait confiance à cet avis.'],
  ['The gardener says this podcast is a reliable source on plumbing, so Paul is skeptical.', 'Le jardinier dit que ce podcast est une source fiable sur la plomberie, alors Paul reste sceptique.'],
  ['The conductor says this shoe polish predicts the weather, so Salma laughs at the claim.', 'Le chef d’orchestre dit que ce cirage de chaussures prédit la météo, alors Salma se moque de l’affirmation.'],
  ['The teacher says this car insurance is the best because she taught for 20 years, so Ben accepts her authority.', 'L’enseignante dit que cette assurance auto est la meilleure parce qu’elle a enseigné pendant vingt ans, alors Ben accepte son autorité.']
];

const OPTIONS_EN = ['Appeal to Authority', 'Straw Man', 'Appeal to Popularity', 'False Dilemma'];
const OPTIONS_FR = ["Appel à l'autorité", 'Homme de paille', 'Appel à la popularité', 'Fausse dichotomie'];

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
      id: 30351 + index,
      level: 1,
      persona_stage: PersonaStage.PLANKTON,
      concept: isFrench ? "Appel à l'autorité" : 'Appeal to Authority',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? "On traite l'avis d'une autorité comme une preuve décisive, même quand cette personne n'est pas experte sur ce sujet."
        : 'An authority’s opinion is treated as decisive proof, even when that person is not the right expert for the topic.',
      detailedExplanationBeginner: isFrench
        ? "Un titre ou une réputation remplace ici une vraie preuve."
        : 'A title or reputation is being used as if it were proof.',
      detailedExplanationIntermediate: isFrench
        ? "La personne s'appuie sur le statut de quelqu'un au lieu de montrer des faits pertinents."
        : 'The speaker leans on status instead of showing relevant evidence.',
      detailedExplanationExpert: isFrench
        ? "L'appel à l'autorité apparaît quand l'expertise d'une personne dans un domaine est utilisée comme preuve finale pour une autre question."
        : 'Appeal to authority happens when expertise in one field is used as final proof for a different question.',
      questionFormat: 'standard'
    };
  });
}

export const APPEAL_TO_AUTHORITY_EXPANSION_EN: Question[] = createQuestions('en');
export const APPEAL_TO_AUTHORITY_EXPANSION_FR: Question[] = createQuestions('fr');
