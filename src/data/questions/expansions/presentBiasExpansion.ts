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
  ["Maya skips the discount grocery run because the extra ten minutes today feel too inconvenient.", "Maya saute les courses au supermarché discount parce que les dix minutes de plus aujourd hui lui paraissent trop pénibles."],
  ["Leo chooses a faster but pricier train ticket and ignores the money he could save next week.", "Leo choisit un billet de train plus rapide mais plus cher et ignore l argent qu il pourrait économiser la semaine prochaine."],
  ["Nina buys a snack at the airport because waiting feels worse than paying more.", "Nina achète un snack à l aéroport parce qu attendre lui semble pire que payer plus."],
  ["Omar keeps the noisy old headphones because replacing them today would take effort.", "Omar garde les vieux écouteurs bruyants parce qu il faudrait faire un effort pour les remplacer aujourd hui."],
  ["Ava spends the spare cash on a shirt now and says saving can start after payday.", "Ava dépense l argent de côté pour une chemise maintenant et dit que l épargne peut commencer après la paie."],
  ["Theo watches a short video instead of filling out the insurance form because the form is boring right now.", "Théo regarde une courte vidéo au lieu de remplir le formulaire d assurance parce que le formulaire est ennuyeux sur le moment."],
  ["Juno orders delivery again because cooking would cut into her evening plans.", "Juno commande encore à domicile parce que cuisiner empiéterait sur ses projets du soir."],
  ["Finn ignores the water bottle and buys another soda because the soda is in his hand already.", "Finn ignore la bouteille d eau et achète un autre soda parce que le soda est déjà dans sa main."],
  ["Lea leaves the bill unopened because paying it today feels irritating.", "Léa laisse la facture fermée parce que la payer aujourd hui lui semble agaçant."],
  ["Hugo stays up gaming and says tomorrow s sleep debt is tomorrow s problem.", "Hugo reste à jouer tard et dit que la dette de sommeil de demain est un problème de demain."],
  ["Riley buys the express checkout item rather than waiting for the cheaper option to restock.", "Riley achète l article en caisse rapide plutôt que d attendre le réassort moins cher."],
  ["Pia keeps the app subscription because canceling would take a few annoying clicks.", "Pia garde l abonnement de l appli parce qu annuler demanderait quelques clics agaçants."],
  ["Ben eats out again because planning groceries now feels like work.", "Ben ressort manger encore parce que planifier les courses lui paraît être du travail."],
  ["Nora skips the sunscreen because putting it on before the walk feels like a hassle.", "Nora saute la crème solaire parce que l appliquer avant la promenade lui semble contraignant."],
  ["Eli leaves his savings untouched and uses the cash for a new game release.", "Eli laisse son épargne intacte et utilise l argent pour une nouvelle sortie de jeu."],
  ["Jade postpones the tax upload because clicking through the form is unpleasant.", "Jade remet l envoi des impôts à plus tard parce que cliquer à travers le formulaire est désagréable."],
  ["Omar chooses the closer gym with weaker equipment because driving farther is annoying now.", "Omar choisit la salle plus proche avec du matériel moins bon parce que conduire plus loin l embête maintenant."],
  ["Tia skips the cheap flight with a long layover and pays more for the direct one.", "Tia saute le vol bon marché avec une longue escale et paie plus pour le vol direct."],
  ["Grant spends the extra money on same-day shipping rather than waiting three days.", "Grant dépense plus pour une livraison le jour même plutôt que d attendre trois jours."],
  ["Iris eats the instant noodles and ignores the healthy meal she planned for later.", "Iris mange les nouilles instantanées et ignore le repas sain qu elle avait prévu pour plus tard."],
  ["Sam delays booking the exam prep class because the sign-up process feels annoying now.", "Sam retarde l inscription au cours de préparation parce que la démarche lui paraît agaçante maintenant."],
  ["Mina chooses the tiny upgrade today and ignores the higher yearly cost.", "Mina choisit la petite amélioration d aujourd hui et ignore le coût annuel plus élevé."],
  ["Jules buys the cheap gadget now and says future repairs can wait.", "Jules achète le gadget bon marché maintenant et dit que les réparations futures peuvent attendre."],
  ["Lina spends the weekend money on decor instead of setting aside rent cushion.", "Lina dépense l argent du week-end pour de la décoration au lieu de mettre de côté une réserve pour le loyer."],
  ["Zoe avoids the dentist reminder because the call would be awkward right now.", "Zoé évite le rappel du dentiste parce que l appel serait gênant sur le moment."],
  ["Kai eats the free cookie now even though he wanted to save room for dinner.", "Kai mange le biscuit gratuit maintenant même s il voulait garder de la place pour le dîner."],
  ["Maya chooses the shorter, expensive parking spot so she can get inside right away.", "Maya choisit la place de parking plus courte mais plus chère pour pouvoir entrer tout de suite."],
  ["Owen keeps buying takeout because the mental load of cooking feels heavier today.", "Owen continue d acheter à emporter parce que la charge mentale de cuisiner lui paraît plus lourde aujourd hui."],
  ["Ava ignores the phone reminder to back up files because the backup can happen later.", "Ava ignore le rappel du téléphone pour sauvegarder les fichiers parce que la sauvegarde peut se faire plus tard."],
  ["Noah pays the rush fee for concert tickets because waiting for the general sale feels risky.", "Noah paie les frais express pour les billets de concert parce qu attendre la vente générale lui semble risqué."],
  ["Rina keeps the old laptop because setting up a new one would take time tonight.", "Rina garde l ancien ordinateur parce que configurer un nouveau prendrait du temps ce soir."],
  ["Eli chooses the sugar-heavy drink because the energy boost is immediate.", "Eli choisit la boisson très sucrée parce que le coup d énergie est immédiat."],
  ["Priya cancels the study break only after one more scroll through her phone.", "Priya annule la pause d étude seulement après encore un défilement sur son téléphone."],
  ["Theo delays the budget review because the numbers will still be there tomorrow.", "Théo repousse l examen du budget parce que les chiffres seront encore là demain."],
  ["Juno buys the one-click upgrade because reading the fine print would slow her down.", "Juno achète la mise à niveau en un clic parce que lire les petites lignes la ralentirait."],
  ["Finn tells himself the fun purchase is worth it even if the credit card bill hurts later.", "Finn se dit que l achat plaisir en vaut la peine même si la facture de carte de crédit fera mal plus tard."],
  ["Lea chooses the immediate reward points instead of waiting for the better monthly deal.", "Léa choisit les points de récompense immédiats au lieu d attendre la meilleure offre mensuelle."],
  ["Hugo keeps the broken chair because fixing it would interrupt his evening.", "Hugo garde la chaise cassée parce que la réparer interromprait sa soirée."],
  ["Pia skips the cheaper class that starts early because sleeping in feels nicer now.", "Pia saute le cours moins cher qui commence tôt parce que dormir plus longtemps est plus agréable maintenant."],
  ["Ben uses the last of the gift card on dessert instead of part of his lunch budget.", "Ben utilise le dernier de sa carte cadeau pour un dessert au lieu d une partie de son budget déjeuner."],
  ["Nora pays extra for bottled water because she is thirsty right now.", "Nora paie plus pour de l eau en bouteille parce qu elle a soif maintenant."],
  ["Eli keeps ignoring the savings app because the payoff is too far away to feel real.", "Eli continue d ignorer l application d épargne parce que le bénéfice paraît trop lointain pour être réel."],
  ["Jade chooses the movie rental today instead of the cheaper monthly library wait.", "Jade choisit la location du film aujourd hui plutôt que d attendre le prêt gratuit de la bibliothèque."],
  ["Omar leaves the receipt refund unopened because dealing with it would take energy now.", "Omar laisse le remboursement du ticket fermé parce que s en occuper demanderait de l énergie maintenant."],
  ["Tia says she will meal prep tomorrow, then buys lunch now because she is already hungry.", "Tia dit qu elle préparera ses repas demain, puis achète le déjeuner maintenant parce qu elle a déjà faim."],
  ["Grant chooses the hotel breakfast add-on because deciding later would mean extra thinking.", "Grant choisit le supplément petit-déjeuner de l hôtel parce que décider plus tard demanderait encore de réfléchir."],
  ["Iris buys the fancy notebook now and says organization can wait until the new term.", "Iris achète le carnet chic maintenant et dit que l organisation peut attendre la nouvelle session."],
  ["Sam keeps the streaming plan because canceling it would feel like losing a treat.", "Sam garde l abonnement de streaming parce que l annuler lui donnerait l impression de perdre un plaisir."],
  ["Mina takes the immediate cash refund instead of the bigger store credit later.", "Mina prend le remboursement immédiat en argent au lieu du crédit magasin plus important plus tard."],
  ["Jules chooses the vending machine snack rather than the cheaper snack waiting at home.", "Jules choisit le snack du distributeur plutôt que le snack moins cher qui l attend à la maison."],
  ["Lina spends the reward on coffee now and ignores the goal of keeping it for her trip.", "Lina dépense la récompense en café maintenant et ignore l objectif de la garder pour son voyage."],
  ["Zoe delays washing the dishes because having a clean sink later does not feel urgent.", "Zoé repousse la vaisselle parce qu avoir un évier propre plus tard ne lui semble pas urgent."],
  ["Kai chooses the impulse buy because the notification made it feel special right away.", "Kai choisit l achat impulsif parce que la notification lui a donné une impression de privilège immédiat."],
  ["Maya skips comparing utility plans because the current phone bill is tolerable today.", "Maya évite de comparer les forfaits parce que la facture actuelle du téléphone est supportable aujourd hui."],
  ["Owen accepts the quick profit from selling now rather than waiting for a better market price.", "Owen accepte le profit rapide en vendant maintenant plutôt que d attendre un meilleur prix du marché."],
  ["Ava orders the dessert add-on because the extra calories are future Ava s issue.", "Ava commande le supplément dessert parce que les calories en plus relèvent de l Ava future."],
  ["Noah keeps the subscription because the cancellation page is too annoying to finish right now.", "Noah garde l abonnement parce que la page d annulation est trop agaçante à terminer maintenant."],
  ["Rina picks the instant prize over the bigger reward that needs a month of waiting.", "Rina choisit le prix immédiat plutôt que la récompense plus grande qui demande un mois d attente."],
  ["Eli uses the gift money on a game today instead of putting it toward the car repair fund.", "Eli utilise l argent cadeau pour un jeu aujourd hui au lieu de l ajouter au fonds de réparation de la voiture."],
  ["Priya chooses the easy shortcut now, even though it will mean extra cleanup later.", "Priya choisit le raccourci facile maintenant, même si cela signifiera plus de nettoyage plus tard."],
  ["Theo buys the cheap snack now and ignores the expensive dentist visit it will not prevent.", "Théo achète le snack bon marché maintenant et ignore la visite coûteuse chez le dentiste qu il ne préviendra pas."],
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
