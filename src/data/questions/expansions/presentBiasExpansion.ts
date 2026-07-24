import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["Mia skips packing lunch because buying a sandwich right now feels easier.", "Mia saute la preparation du déjeuner parce qu acheter un sandwich tout de suite lui semble plus simple."],
  ["Leo spends his spare cash on a game skin instead of moving it into savings.", "Leo depense son argent de poche dans une apparence de jeu au lieu de le mettre de côté."],
  ["Priya keeps scrolling instead of starting homework because the homework can wait until later.", "Priya continue de faire défiler son téléphone au lieu de commencer ses devoirs parce que les devoirs peuvent attendre plus tard."],
  ["Omar eats dessert first and says the healthier snack can wait.", "Omar mange le dessert d abord et dit que le goûter plus sain peut attendre."],
  ["Nina leaves the spare battery unplugged because charging it now feels annoying.", "Nina laisse la batterie de rechange débranchée parce que la charger maintenant lui paraît pénible."],
  ["Eli renews a streaming subscription just to watch one episode tonight.", "Eli renouvelle un abonnement de streaming juste pour regarder un épisode ce soir."],
  ["Ava buys the cheap upgrade now and ignores that it will cost more over the year.", "Ava achète la petite amélioration maintenant et ignore que cela coûtera plus cher sur l année."],
  ["Theo delays the dentist booking because today s comfort feels better than future stress.", "Théo repousse le rendez-vous chez le dentiste parce que le confort d aujourd hui lui paraît meilleur que le stress futur."],
  ["Juno watches clips for an hour instead of reviewing notes before the quiz.", "Juno regarde des vidéos pendant une heure au lieu de relire ses notes avant le contrôle."],
  ["Mia leaves the dishes because relaxing now feels more rewarding.", "Mia laisse la vaisselle parce que se détendre maintenant lui paraît plus gratifiant."],
  ["Finn postpones saving for a trip because the coffee today is more tempting.", "Finn remet l épargne pour un voyage parce que le café d aujourd hui est plus tentant."],
  ["Lea keeps buying snacks at checkout instead of bringing food from home.", "Léa continue d acheter des snacks à la caisse au lieu d apporter de la nourriture de la maison."],
  ["Hugo stays on the game one level longer and says he will leave later.", "Hugo reste encore un niveau de plus dans le jeu et dit qu il partira plus tard."],
  ["Riley ignores the gym bag because staying on the couch is easier right now.", "Riley ignore le sac de sport parce que rester sur le canapé est plus facile maintenant."],
  ["Pia says she will cancel a useless membership next week, not today.", "Pia dit qu elle annulera un abonnement inutile la semaine prochaine, pas aujourd hui."],
  ["Ben buys the shiny phone case now even though the bill is due soon.", "Ben achète la coque de téléphone brillante maintenant même si la facture arrive bientôt."],
  ["Nora takes the quick dopamine hit from scrolling and ignores the long report.", "Nora prend la dose rapide de dopamine du défilement et ignore le long rapport."],
  ["Cole skips checking the bus schedule because leaving right now feels simpler.", "Cole évite de vérifier les horaires du bus parce que partir tout de suite lui semble plus simple."],
  ["Jade tells herself tomorrow s version can handle the messy closet.", "Jade se dit que sa version de demain pourra gérer le placard en désordre."],
  ["Omar uses the last of the budget on takeout instead of groceries.", "Omar utilise le reste du budget pour un repas à emporter au lieu des courses."],
  ["Tia keeps delaying the retirement transfer because the payoff feels far away.", "Tia continue de retarder le virement pour la retraite parce que le bénéfice lui paraît trop lointain."],
  ["Grant chooses the immediate snack over the healthier lunch he planned.", "Grant choisit le snack immédiat plutôt que le déjeuner plus sain qu il avait prévu."],
  ["Iris watches one more episode and pushes bedtime again.", "Iris regarde un épisode de plus et repousse encore l heure du coucher."],
  ["Sam says the homework can wait, but the deadline cannot.", "Sam dit que les devoirs peuvent attendre, mais pas la date limite."],
  ["Mina buys the small pleasure now and promises to make up for it later.", "Mina achète le petit plaisir maintenant et promet de compenser plus tard."],
  ["Jules ignores the umbrella because the walk to the store is only five minutes now.", "Jules ignore le parapluie parce que la marche jusqu au magasin ne dure que cinq minutes maintenant."],
  ["Lina does not back up the photos because the phone still works fine today.", "Lina ne sauvegarde pas les photos parce que le téléphone fonctionne encore très bien aujourd hui."],
  ["Zoe buys a cheap shortcut that creates a bigger repair bill later.", "Zoé choisit un raccourci bon marché qui créera une facture de réparation plus grande plus tard."],
  ["Kai spends the spare hour gaming instead of writing the report.", "Kai passe l heure libre à jouer au lieu de rédiger le rapport."],
  ["Maya keeps procrastinating the tax form because it is unpleasant right now.", "Maya continue de procrastiner sur le formulaire fiscal parce que c est désagréable maintenant."],
  ["Owen chooses the sugary drink now and dismisses tomorrow s crash.", "Owen choisit la boisson sucrée maintenant et balaie d un revers la fatigue de demain."],
  ["Ava says future sleep can wait while she keeps chatting late.", "Ava dit que le sommeil futur peut attendre pendant qu elle discute tard."],
  ["Noah spends none of the bonus because the new gadget is right there.", "Noah ne met rien de côté du bonus parce que le nouveau gadget est juste là."],
  ["Rina ignores the bedtime alarm and grabs one more snack.", "Rina ignore l alarme du coucher et prend encore un snack."],
  ["Eli sees the savings goal as too distant and spends on instant convenience.", "Eli trouve l objectif d épargne trop lointain et dépense pour un confort immédiat."],
  ["Priya leaves the exercise clothes in the bag because the sofa feels better today.", "Priya laisse les vêtements de sport dans le sac parce que le canapé lui paraît meilleur aujourd hui."],
  ["Theo says he will sort the receipts later, after the fun part is over.", "Théo dit qu il triera les reçus plus tard, une fois la partie amusante terminée."],
  ["Juno accepts the extra delivery fee for getting the food immediately.", "Juno accepte les frais de livraison supplémentaires pour recevoir la nourriture immédiatement."],
  ["Finn keeps the clutter because cleaning would steal today s free time.", "Finn laisse le désordre en place parce que ranger prendrait son temps libre d aujourd hui."],
  ["Mia delays the project start because the first step feels boring.", "Mia repousse le début du projet parce que la première étape lui semble ennuyeuse."],
  ["Ben spends the bonus on dinner out instead of emergency savings.", "Ben dépense la prime pour dîner dehors au lieu de l épargne d urgence."],
  ["Omar postpones refilling his medication because it interrupts his plans.", "Omar remet à plus tard le renouvellement de son traitement parce que cela dérange ses plans."],
  ["Lea chooses instant checkout convenience over comparing prices.", "Léa choisit la rapidité à la caisse plutôt que de comparer les prix."],
  ["Hugo skips the car wash because it does not matter today.", "Hugo saute le lavage de la voiture parce que cela n a pas d importance aujourd hui."],
  ["Pia puts off studying one chapter because she wants a quick reward first.", "Pia remet l étude d un chapitre parce qu elle veut d abord une récompense rapide."],
  ["Grant clicks skip on the payment reminder because it is annoying right now.", "Grant clique sur ignorer pour le rappel de paiement parce que c est agaçant maintenant."],
  ["Iris eats the cake slice now even though she wanted to leave room for dinner.", "Iris mange la part de gâteau maintenant même si elle voulait garder de la place pour le dîner."],
  ["Cole ignores the long-term phone storage issue and deletes nothing today.", "Cole ignore le problème de stockage du téléphone à long terme et ne supprime rien aujourd hui."],
  ["Sam says future him can handle the consequences, so current him takes the easy choice.", "Sam dit que son lui futur gérera les conséquences, donc son lui actuel choisit l option facile."],
];

const OPTIONS_EN = ['Present Bias', 'Planning Fallacy', 'Optimism Bias', 'Pessimism Bias'];
const OPTIONS_FR = ['Biais du présent', 'Erreur de planification', "Biais d'optimisme", 'Biais de pessimisme'];

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
      id: 44201 + index,
      level: 5,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? 'Biais du présent' : 'Present Bias',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? "La personne favorise le confort immédiat au lieu du bénéfice futur."
        : 'The person favors immediate comfort over a future benefit.',
      detailedExplanationBeginner: isFrench
        ? "Le choix du moment présent l emporte sur l intérêt à long terme."
        : 'The present moment wins over the long-term interest.',
      detailedExplanationIntermediate: isFrench
        ? "Le biais du présent pousse à surestimer ce qui est agréable maintenant et à sous-estimer les gains futurs, même quand attendre, économiser ou se préparer serait plus utile."
        : 'Present bias pushes someone to overvalue what feels good now and undervalue future gains, even when waiting, saving, or preparing would be more useful.',
      detailedExplanationExpert: isFrench
        ? "Ce biais apparaît quand une action immédiate offre une petite récompense émotionnelle, pratique ou sensorielle, tandis que la conséquence utile arrive plus tard. Il aide parfois à agir vite, mais il devient un problème quand il remplace la planification, la discipline et les décisions cohérentes avec les objectifs de long terme."
        : 'This bias appears when an immediate action offers a small emotional, practical, or sensory reward, while the useful consequence arrives later. It can sometimes help people act quickly, but it becomes a problem when it replaces planning, discipline, and decisions aligned with long-term goals.',
      questionFormat: 'standard',
    };
  });
}

export const PRESENT_BIAS_EXPANSION_EN: Question[] = createQuestions('en');
export const PRESENT_BIAS_EXPANSION_FR: Question[] = createQuestions('fr');
