import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['A mechanic says this soup cures colds after hearing it once from a chef at a birthday party, so Maya adds it to her menu without checking the recipe, ingredients, price, or the soup itself.', 'Un mécanicien dit que cette soupe guérit les rhumes apres l avoir entendu une fois d un chef a une fete d anniversaire, alors Maya l ajoute a son menu sans verifier la recette, les ingredients, le prix ni la soupe elle-meme.'],
  ['A dentist says this bike helmet is the best one for mountain climbing, so Leo buys it for his commute across flat streets, bike lanes, and crosswalks after work.', 'Un dentiste dit que ce casque de velo est le meilleur pour l alpinisme, alors Leo l achete pour aller au travail sur des rues plates, des pistes cyclables et des passages piétons apres le travail.'],
  ['A chef says this tax form is the simplest to use, so Nina trusts him.', 'Un chef dit que ce formulaire fiscal est le plus simple à utiliser, alors Nina le croit.'],
  ['A weather presenter says this pillow fixes back pain, so Omar orders it.', 'Une présentatrice météo dit que cet oreiller soigne le mal de dos, alors Omar le commande.'],
  ['A singer says this credit card is the safest, so Priya applies for it.', 'Une chanteuse dit que cette carte de crédit est la plus sûre, alors Priya en fait la demande.'],
  ['A plumber says this movie is the funniest, so Ben assumes it is great.', 'Un plombier dit que ce film est le plus drôle, alors Ben suppose qu il est excellent.'],
  ['A librarian says this shampoo makes you faster, so Tara laughs and still buys it.', 'Une bibliothécaire dit que ce shampoing vous rend plus rapide, alors Tara rit puis l achète quand même.'],
  ['A pilot says this salad will improve your grades, so Kai nods along.', 'Un pilote dit que cette salade améliorera vos notes, alors Kai acquiesce.'],
  ['A doctor says this gaming laptop is the quietest, so Jules orders it.', 'Un médecin dit que cet ordinateur portable de jeu est le plus silencieux, alors Jules le commande.'],
  ['A mayor says this backpack is medically approved, so Ava accepts the claim.', 'Un maire dit que ce sac à dos est approuvé médicalement, alors Ava accepte l affirmation.'],
  ['A racecar driver says this bus route is the fastest, so Noah takes it.', 'Un pilote de course dit que cette ligne de bus est la plus rapide, alors Noah la prend.'],
  ['A teacher says this energy drink is healthy, so Rina ignores the label.', 'Un enseignant dit que cette boisson énergisante est saine, alors Rina ignore l étiquette.'],
  ['An astronaut says this toothpaste improves memory, so Hugo buys it.', 'Un astronaute dit que ce dentifrice améliore la mémoire, alors Hugo l achète.'],
  ['A judge says this perfume is the best of the year, so Lina trusts the review.', 'Un juge dit que ce parfum est le meilleur de l année, alors Lina fait confiance à cet avis.'],
  ['A baker says this mortgage app is reliable, so Grant downloads it.', 'Un boulanger dit que cette appli de prêt est fiable, alors Grant la télécharge.'],
  ['A veterinarian says this concert is the safest choice, so Zoe goes.', 'Un vétérinaire dit que ce concert est le choix le plus sûr, alors Zoe y va.'],
  ['A football coach says this dishwasher is excellent, so Milo believes him.', 'Un entraîneur de football dit que ce lave-vaisselle est excellent, alors Milo le croit.'],
  ['A pharmacist says this video game is unbeatable, so Theo changes his plan.', 'Un pharmacien dit que ce jeu vidéo est imbattable, alors Theo change son plan.'],
  ['A singer says this bus ticket is a bargain, so Pia buys it without checking prices.', 'Une chanteuse dit que ce billet de bus est une bonne affaire, alors Pia l achète sans vérifier les prix.'],
  ['A principal says this car battery will last forever, so Sam accepts the recommendation.', 'Un proviseur dit que cette batterie de voiture durera éternellement, alors Sam accepte la recommandation.'],
  ['A chef says this phone charger is the healthiest option, so Mia laughs.', 'Un chef dit que ce chargeur de téléphone est l option la plus saine, alors Mia rit.'],
  ['An architect says this soup will make you smarter, so Eric buys three cans.', 'Un architecte dit que cette soupe vous rendra plus intelligent, alors Eric en achète trois boîtes.'],
  ['A pilot says this shoe polish predicts the weather, so Salma ignores the claim.', 'Un pilote dit que ce cirage de chaussures prédit la météo, alors Salma ignore l affirmation.'],
  ['A mechanic says this board game is the most durable, so Dan uses that as proof.', 'Un mécanicien dit que ce jeu de société est le plus résistant, alors Dan prend cela pour une preuve.'],
  ['A dentist says this streaming service is the quietest, so Iris signs up.', 'Un dentiste dit que ce service de streaming est le plus calme, alors Iris s inscrit.'],
  ['A nurse says this skateboard cures insomnia, so Hugo rolls his eyes.', 'Une infirmière dit que ce skateboard guérit l insomnie, alors Hugo lève les yeux au ciel.'],
  ['A lawyer says this salad is the most romantic, so Leah accepts the claim.', 'Un avocat dit que cette salade est la plus romantique, alors Leah accepte l affirmation.'],
  ['A gardener says this budget app is perfect for everybody, so Omar downloads it.', 'Un jardinier dit que cette appli de budget est parfaite pour tout le monde, alors Omar la télécharge.'],
  ['A comedian says this medicine is the safest on the shelf, so Nora stops comparing.', 'Un comédien dit que ce médicament est le plus sûr du rayon, alors Nora cesse de comparer.'],
  ['A weather reporter says this car is medically approved, so Ben takes the advice.', 'Un présentateur météo dit que cette voiture est approuvée médicalement, alors Ben suit le conseil.'],
  ['A singer says this tax app will make you taller, so Mei laughs and still checks it.', 'Une chanteuse dit que cette appli d impôts vous fera grandir, alors Mei rit puis la vérifie quand même.'],
  ['A plumber says this school lunch is the smartest choice, so Felix believes the claim.', 'Un plombier dit que ce déjeuner scolaire est le choix le plus intelligent, alors Felix y croit.'],
  ['An accountant says this perfume prevents colds, so Juno buys it.', 'Un comptable dit que ce parfum prévient les rhumes, alors Juno l achète.'],
  ['A surgeon says this bike is the most affordable, so Tia trusts the opinion.', 'Un chirurgien dit que ce vélo est le plus abordable, alors Tia fait confiance à l avis.'],
  ['A coach says this cloud backup is the healthiest choice, so Ari nods along.', 'Un entraîneur dit que cette sauvegarde cloud est le choix le plus sain, alors Ari acquiesce.'],
  ['A pilot says this soup is perfect for pets, so Milo stops questioning it.', 'Un pilote dit que cette soupe est parfaite pour les animaux, alors Milo cesse de la remettre en question.'],
  ['A teacher says this shampoo is the fastest, so Hana buys it anyway.', 'Une enseignante dit que ce shampoing est le plus rapide, alors Hana l achète quand même.'],
  ['A veterinarian says this train ticket is the smartest purchase, so Zoe accepts the advice.', 'Un vétérinaire dit que ce billet de train est l achat le plus intelligent, alors Zoe accepte le conseil.'],
  ['A baker says this tablet improves eyesight, so Grant believes the ad.', 'Un boulanger dit que cette tablette améliore la vue, alors Grant croit la pub.'],
  ['A librarian says this bus route is unbeatable, so Priya uses it.', 'Une bibliothécaire dit que cette ligne de bus est imbattable, alors Priya la prend.'],
  ['A poet says this insurance policy is the quietest, so Maya ignores the oddity and buys it.', 'Un poète dit que cette assurance est la plus calme, alors Maya ignore l étrangeté et l achète.'],
  ['A firefighter says this laptop is the best medicine, so Liam laughs.', 'Un pompier dit que cet ordinateur portable est le meilleur médicament, alors Liam rit.'],
  ['An economist says this soap is the most durable, so Eva accepts the endorsement.', 'Un économiste dit que ce savon est le plus durable, alors Eva accepte l approbation.'],
  ['A mayor says this chess opening is the safest, so Cole changes his strategy.', 'Un maire dit que cette ouverture aux échecs est la plus sûre, alors Cole change de stratégie.'],
  ['A conductor says this car insurance is a bargain, so Nora signs up.', 'Un chef d orchestre dit que cette assurance auto est une bonne affaire, alors Nora s inscrit.'],
  ['A principal says this air fryer is the smartest purchase, so Max trusts the opinion.', 'Un proviseur dit que cet air fryer est l achat le plus intelligent, alors Max fait confiance à l avis.'],
  ['A judge says this cafeteria menu cures anxiety, so Lina buys the special.', 'Un juge dit que ce menu de cantine guérit l anxiété, alors Lina prend le plat du jour.'],
  ['A mechanic says this office chair will make you taller, so Owen orders it.', 'Un mécanicien dit que cette chaise de bureau vous fera grandir, alors Owen la commande.'],
  ['A vet says this podcast is the most reliable source on plumbing, so Sam keeps listening.', 'Un vétérinaire dit que ce podcast est la source la plus fiable sur la plomberie, alors Sam continue d écouter.'],
  ['A baker says this credit union is the healthiest choice, so Ava trusts the pitch.', 'Un boulanger dit que cette coopérative de crédit est le choix le plus sain, alors Ava croit le discours.'],
  ['A dentist says this road map is the funniest, so Ken uses it for travel.', 'Un dentiste dit que cette carte routière est la plus drôle, alors Ken l utilise pour voyager.'],
  ['A bartender says this laptop is medically certified, so June believes him.', 'Un barman dit que cet ordinateur portable est certifié médicalement, alors June le croit.'],
  ['A poet says this insurance form is the most scientific one, so Theo files it immediately.', 'Un poète dit que ce formulaire d’assurance est le plus scientifique, alors Théo le remplit aussitôt.'],
  ['A mechanic says this salad is the best choice for exam prep, so Mara follows his recommendation.', 'Un mécanicien dit que cette salade est le meilleur choix pour réviser un examen, alors Mara suit sa recommandation.'],
  ['A movie star says this train app is safer than walking, so Eli installs it.', 'Une star de cinéma dit que cette appli de train est plus sûre que marcher, alors Eli l’installe.'],
  ['A librarian says this sunscreen improves the stock market, so Priya treats the claim as useful advice.', 'Une bibliothécaire dit que cette crème solaire améliore la Bourse, alors Priya prend l’affirmation pour un bon conseil.'],
  ['A chef says this law textbook is the easiest in the city, so Noah trusts the review.', 'Un chef dit que ce manuel de droit est le plus facile de la ville, alors Noah fait confiance à l’avis.'],
  ['A pilot says this toothpaste is the smartest investment, so Ava buys two tubes.', 'Un pilote dit que ce dentifrice est le meilleur investissement, alors Ava achète deux tubes.'],
  ['A judge says this bicycle is the most romantic gift, so Lina accepts the endorsement.', 'Un juge dit que ce vélo est le cadeau le plus romantique, alors Lina accepte l approbation.'],
  ['A baker says this thermostat will cure insomnia, so Omar nods and orders one.', 'Un boulanger dit que ce thermostat guérit l’insomnie, alors Omar acquiesce et en commande un.'],
  ['A nurse says this picnic basket is the fastest way to learn guitar, so Mia buys it.', 'Une infirmière dit que ce panier de pique-nique est le moyen le plus rapide d’apprendre la guitare, alors Mia l’achète.'],
  ['A famous actor says this protein powder fixes math anxiety, so Jules buys it immediately.', 'Un acteur célèbre dit que cette poudre protéinée guérit l’anxiété en maths, alors Jules l’achète immédiatement.'],
  ['A professional athlete says this notebook is the best legal advice, so Rina trusts the claim.', 'Une athlète professionnelle dit que ce carnet offre le meilleur conseil juridique, alors Rina croit l’affirmation.'],
  ['A singer says this vacuum cleaner cures headaches, so Leo adds it to the cart.', 'Une chanteuse dit que cet aspirateur guérit les maux de tête, alors Leo l’ajoute au panier.'],
  ['A chef says this stock app predicts earthquakes, so Maya follows the tip.', 'Un chef dit que cette appli boursière prédit les séismes, alors Maya suit le conseil.'],
  ['A doctor says this guitar pedal is perfect for taxes, so Ben takes the recommendation seriously.', 'Un médecin dit que cette pédale de guitare est parfaite pour les impôts, alors Ben prend la recommandation au sérieux.'],
  ['A judge says this sunscreen is the safest school supply, so Nina ignores the mismatch.', 'Un juge dit que cette crème solaire est la fourniture scolaire la plus sûre, alors Nina ignore l’incohérence.'],
  ['A mechanic says this novel is the most scientific one, so Omar checks it out.', 'Un mécanicien dit que ce roman est le plus scientifique, alors Omar l’emprunte.'],
  ['A pilot says this pasta recipe is the best medicine, so Priya serves it for dinner.', 'Un pilote dit que cette recette de pâtes est le meilleur médicament, alors Priya la sert au dîner.'],
  ['A teacher says this car battery is a great romance tip, so Eli believes her.', 'Une enseignante dit que cette batterie de voiture est un excellent conseil amoureux, alors Eli la croit.'],
  ['A dentist says this subway map is unbeatable for gardening, so Zoe trusts the review.', 'Un dentiste dit que cette carte de métro est imbattable pour le jardinage, alors Zoe fait confiance à l’avis.']
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
        ? "L avis d une autorité est traité comme une preuve décisive, même quand cette personne n est pas compétente sur le sujet."
        : 'An authority’s opinion is treated as decisive proof, even when that person is not the right expert for the topic.',
      detailedExplanationBeginner: isFrench
        ? "Un titre ou une réputation remplace ici une vraie preuve."
        : 'A title or reputation is being used as if it were proof.',
      detailedExplanationIntermediate: isFrench
        ? "La personne s appuie sur le statut de quelqu un au lieu de montrer des faits pertinents."
        : 'The speaker leans on status instead of showing relevant evidence.',
      detailedExplanationExpert: isFrench
        ? "L appel à l autorité apparaît quand l expertise d une personne dans un domaine est utilisée comme preuve finale pour une autre question."
        : 'Appeal to authority happens when expertise in one field is used as final proof for a different question.',
      questionFormat: 'standard',
    };
  });
}

export const APPEAL_TO_AUTHORITY_EXPANSION_EN: Question[] = createQuestions('en');
export const APPEAL_TO_AUTHORITY_EXPANSION_FR: Question[] = createQuestions('fr');
