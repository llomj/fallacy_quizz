import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["No one has proven this tea is unsafe, so it must be healthy enough to drink every day before work.", "Personne n'a prouvé que ce thé est dangereux, donc il doit être assez sain pour en boire tous les jours avant le travail."],
  ["We have no evidence that the attic is empty, so a ghost must live there and knock at night during storms.", "Nous n'avons aucune preuve que le grenier est vide, donc un fantôme doit y vivre et frapper la nuit pendant les orages."],
  ["Nobody has disproved the rumor, so it is definitely true.", "Personne n'a réfuté la rumeur, donc elle est forcément vraie."],
  ["I have not seen any report against the app, so it must protect privacy.", "Je n'ai vu aucun rapport contre cette application, donc elle doit protéger la vie privée."],
  ["Since no one can prove the shortcut is bad, our team should use it.", "Puisque personne ne peut prouver que le raccourci est mauvais, notre équipe devrait l'utiliser."],
  ["No expert has proven the painting fake, so it must be an original.", "Aucun expert n'a prouvé que le tableau est faux, donc il doit être authentique."],
  ["There is no proof the bridge is unsafe, so we can ignore the warning signs.", "Il n'y a pas de preuve que le pont est dangereux, donc on peut ignorer les panneaux d'avertissement."],
  ["Nobody can show the rule is unfair, so the rule is fair.", "Personne ne peut montrer que la règle est injuste, donc la règle est juste."],
  ["We do not know that the new neighbor is unfriendly, so he must be nice.", "Nous ne savons pas que le nouveau voisin est désagréable, donc il doit être gentil."],
  ["No one proved the recipe is unhealthy, so it is a great diet food.", "Personne n'a prouvé que la recette est malsaine, donc c'est un excellent aliment de régime."],
  ["The app may have bugs, but unless someone proves it, we should assume it is flawless.", "L'application peut avoir des bugs, mais tant que personne ne le prouve, il faut supposer qu'elle est parfaite."],
  ["I cannot find evidence that the door was unlocked, so the lock must be broken.", "Je ne trouve pas de preuve que la porte était ouverte, donc la serrure doit être cassée."],
  ["No one has shown the class joke was unkind, so it was harmless.", "Personne n'a montré que la blague de la classe était méchante, donc elle était sans conséquence."],
  ["We have not proven the office plant is alive, so it is definitely dead.", "Nous n'avons pas prouvé que la plante du bureau est vivante, donc elle est sûrement morte."],
  ["Nobody disproved the claim that the map is magical, so it must be magical.", "Personne n'a réfuté l'affirmation que la carte est magique, donc elle doit l'être."],
  ["There is no hard evidence against the new schedule, so it is the best schedule.", "Il n'y a pas de preuve solide contre le nouvel horaire, donc c'est le meilleur horaire."],
  ["If nobody can prove the phone caused the noise, then the phone did not cause it.", "Si personne ne peut prouver que le téléphone a causé le bruit, alors il ne l'a pas causé."],
  ["No one can prove the alley is haunted, so it is safe at midnight.", "Personne ne peut prouver que la ruelle est hantée, donc elle est sûre à minuit."],
  ["There is no evidence the soup is spoiled, so the strange smell is fine.", "Il n'y a pas de preuve que la soupe est avariée, donc l'odeur étrange est normale."],
  ["Since nobody proved the claim wrong, we should spend the budget on it.", "Puisque personne n'a prouvé que l'affirmation est fausse, nous devrions y consacrer le budget."],
  ["The camera may be broken, but until someone proves it, the footage must be real.", "La caméra peut être cassée, mais tant que quelqu'un ne le prouve pas, la vidéo doit être réelle."],
  ["No one showed the new gym plan is poor, so it will definitely work.", "Personne n'a montré que le nouveau plan de salle de sport est mauvais, donc il va forcément fonctionner."],
  ["We do not know the dog is sick, so he cannot be sick.", "Nous ne savons pas que le chien est malade, donc il ne peut pas l'être."],
  ["Nobody has disproved the lucky coin story, so the coin is lucky.", "Personne n'a réfuté l'histoire de la pièce porte-bonheur, donc la pièce porte bonheur."],
  ["Because no one has proven the email fake, it must be from the bank.", "Comme personne n'a prouvé que le courriel était faux, il doit venir de la banque."],
  ["I do not see evidence that the shortcut is dangerous, so it is the safest route.", "Je ne vois pas de preuve que le raccourci est dangereux, donc c'est l'itinéraire le plus sûr."],
  ["No one has shown the movie review is biased, so it is objective.", "Personne n'a montré que la critique du film est biaisée, donc elle est objective."],
  ["Since nobody can prove the lamp is faulty, the flicker is harmless.", "Puisque personne ne peut prouver que la lampe est défectueuse, le clignotement est sans danger."],
  ["There is no proof the rumor started in the office, so it came from outside.", "Il n'y a pas de preuve que la rumeur a commencé au bureau, donc elle vient de l'extérieur."],
  ["No evidence says the new policy hurts anyone, so it helps everyone.", "Aucune preuve ne dit que la nouvelle politique nuit à qui que ce soit, donc elle aide tout le monde."],
  ["The fact that nobody has disproved the blog post means it is reliable.", "Le fait que personne n'ait réfuté l'article de blog signifie qu'il est fiable."],
  ["I cannot prove the stranger is harmless, so he must be dangerous.", "Je ne peux pas prouver que l'inconnu est inoffensif, donc il doit être dangereux."],
  ["No one has shown the shortcut causes accidents, so the warning is overblown.", "Personne n'a montré que le raccourci provoque des accidents, donc l'avertissement est exagéré."],
  ["We have not proven the cake is sweet, so it must be bland.", "Nous n'avons pas prouvé que le gâteau est sucré, donc il doit être fade."],
  ["Nobody can say the plan is wrong, so it is automatically right.", "Personne ne peut dire que le plan est faux, donc il est automatiquement juste."],
  ["There is no proof that the speaker lied, so every detail must be accurate.", "Il n'y a pas de preuve que l'orateur a menti, donc chaque détail doit être exact."],
  ["Since no one can prove the poster is misleading, we should trust it.", "Puisque personne ne peut prouver que l'affiche est trompeuse, nous devrions lui faire confiance."],
  ["No expert has proven the shoes are poor quality, so they are great.", "Aucun expert n'a prouvé que les chaussures sont de mauvaise qualité, donc elles sont excellentes."],
  ["We cannot prove the package was delayed, so it arrived on time.", "Nous ne pouvons pas prouver que le colis a été retardé, donc il est arrivé à l'heure."],
  ["No one disproved the claim that the town is cursed, so it must be cursed.", "Personne n'a réfuté l'affirmation que la ville est maudite, donc elle doit l'être."],
  ["I have not seen evidence the tip is risky, so it is safe to use.", "Je n'ai pas vu de preuve que l'astuce est risquée, donc elle est sûre à utiliser."],
  ["Because nobody proved the rumor false, the rumor deserves a vote.", "Parce que personne n'a prouvé que la rumeur était fausse, la rumeur mérite un vote."],
  ["There is no direct proof the new rule is harmful, so it will solve everything.", "Il n'y a pas de preuve directe que la nouvelle règle est nocive, donc elle résoudra tout."],
  ["No one can prove the paint is toxic, so the kids should use it.", "Personne ne peut prouver que la peinture est toxique, donc les enfants devraient l'utiliser."],
  ["The absence of proof against the potion means it is effective.", "L'absence de preuve contre la potion signifie qu'elle est efficace."],
  ["No one has shown the route is unsafe, so the detour is unnecessary.", "Personne n'a montré que la route est dangereuse, donc le détour est inutile."],
  ["We do not know the shortcut is bad, therefore it is a good idea.", "Nous ne savons pas que le raccourci est mauvais, donc c'est une bonne idée."],
  ["Nobody proved the message is a scam, so I should send my details.", "Personne n'a prouvé que le message était une arnaque, donc je devrais envoyer mes coordonnées."],
  ["No evidence says the snack is unhealthy, so it is definitely nutritious.", "Aucune preuve ne dit que la collation est malsaine, donc elle est forcément nutritive."],
  ["Since nobody proved the rumor is false, it is worth repeating.", "Puisque personne n'a prouvé que la rumeur est fausse, elle vaut la peine d'être répétée."],
  ["Nobody has proven the shortcut is dangerous, so Maya says the shortcut is perfect for kids.", "Personne n'a prouvé que le raccourci est dangereux, donc Maya dit qu'il est parfait pour les enfants."],
  ["No one can prove the old house is haunted, so Leo insists ghosts definitely live there.", "Personne ne peut prouver que la vieille maison est hantée, donc Leo insiste pour dire que des fantômes y vivent forcément."],
  ["There is no evidence the app steals data, so Priya says it is completely safe.", "Il n'y a aucune preuve que l'application vole des données, donc Priya dit qu'elle est totalement sûre."],
  ["Nobody has disproved the claim that the soup cures headaches, so Ben adds it to the menu.", "Personne n'a réfuté l'affirmation que la soupe guérit les maux de tête, donc Ben l'ajoute au menu."],
  ["We do not know the bridge is unsafe, so Omar says it must be the best route.", "Nous ne savons pas que le pont est dangereux, donc Omar dit que c'est forcément la meilleure route."],
  ["No expert has shown the lamp is faulty, so Nora buys it without checking.", "Aucun expert n'a montré que la lampe est défectueuse, donc Nora l'achète sans vérifier."],
  ["Because nobody proved the rumor false, Ava repeats it at lunch.", "Parce que personne n'a prouvé que la rumeur était fausse, Ava la répète au déjeuner."],
  ["I cannot prove the neighbor is rude, so Mia says he is definitely friendly.", "Je ne peux pas prouver que le voisin est impoli, donc Mia dit qu'il est forcément gentil."],
  ["There is no proof the policy hurts anyone, so Noah claims it helps everyone.", "Il n'y a pas de preuve que la politique nuit à qui que ce soit, donc Noah affirme qu'elle aide tout le monde."],
  ["Since nobody disproved the lucky coin story, Theo says the coin brings success.", "Puisque personne n'a réfuté l'histoire de la pièce porte-bonheur, Theo dit que la pièce apporte la réussite."],
  ["We do not know the cake is bland, so Rina says it must be delicious.", "Nous ne savons pas que le gâteau est fade, donc Rina dit qu'il doit être délicieux."],
  [`Maya says the new flashlight is safe because nobody has proved otherwise.`, `Maya dit que la nouvelle lampe de poche est sure parce que personne n a prouve le contraire.`],
  [`Leo thinks the soup is poisonous because no one can prove it is not.`, `Leo pense que la soupe est empoisonnee parce que personne ne peut prouver le contraire.`],
  [`Nina believes the app is secure because no hacker has announced a problem.`, `Nina croit que l application est sure parce qu aucun pirate n a annonce de probleme.`],
  [`Owen says the school hallway is haunted because nobody has disproved it.`, `Owen dit que le couloir de l ecole est hante parce que personne ne l a refute.`],
  [`Priya trusts the rumor because no one has shown it false.`, `Priya fait confiance a la rumeur parce que personne n a montre qu elle est fausse.`],
  [`Ben says the shortcut is perfect because no one proved it causes trouble.`, `Ben dit que le raccourci est parfait parce que personne n a prouve qu il cause des problemes.`],
  [`Tara says the old bridge is fine because no report says it is unsafe.`, `Tara dit que l ancien pont va bien parce qu aucun rapport ne dit qu il est dangereux.`],
  [`Kai thinks the dog is healthy because he has not seen proof of illness.`, `Kai pense que le chien est en bonne sante parce qu il n a pas vu de preuve de maladie.`],
  [`Jules says the movie review is accurate because nobody has refuted it.`, `Jules dit que la critique du film est exacte parce que personne ne l a refutee.`],
  [`Ava claims the new rule is fair because no one has challenged it.`, `Ava affirme que la nouvelle regle est juste parce que personne ne l a contestee.`],
  [`Noah says the package arrived on time because nobody proved it was late.`, `Noah dit que le colis est arrive a l heure parce que personne n a prouve qu il etait en retard.`],
  [`Mina thinks the door is unlocked because she cannot prove it was locked.`, `Mina pense que la porte est ouverte parce qu elle ne peut pas prouver qu elle etait fermee a cle.`],
  [`Eli says the town legend is real because nobody has disproved it.`, `Eli dit que la legende de la ville est vraie parce que personne ne l a refutee.`],
  [`Rina thinks the text message is genuine because no one has proven it fake.`, `Rina pense que le message est authentique parce que personne n a prouve qu il est faux.`],
  [`Hugo says the painting is original because no one can prove it is not.`, `Hugo dit que le tableau est original parce que personne ne peut prouver le contraire.`],
  [`Lina believes the syrup cures colds because no expert has said otherwise.`, `Lina croit que le sirop soigne les rhumes parce qu aucun expert n a dit le contraire.`],
  [`Grant says the parking app is safe because no one has exposed a scam.`, `Grant dit que l application de stationnement est sure parce que personne n a demasque une arnaque.`],
  [`Zoe thinks the bridge warning is exaggerated because no one proved danger.`, `Zoe pense que l avertissement sur le pont est exagere parce que personne n a prouve le danger.`],
  [`Milo says the laptop is flawless because no bug report has been filed.`, `Milo dit que l ordinateur portable est parfait parce qu aucun rapport de bug n a ete depose.`],
  [`Theo says the rumor belongs to the office because no outsider has denied it.`, `Theo dit que la rumeur vient du bureau parce qu aucun etranger ne l a niee.`],
  [`Pia claims the snack is healthy because nobody has shown it is unhealthy.`, `Pia affirme que la collation est saine parce que personne n a montre qu elle etait malsaine.`],
  [`Finn says the neighborhood is safe because no crime was proven there.`, `Finn dit que le quartier est sur parce qu aucun crime n y a ete prouve.`],
  [`Maya says the schedule is best because no one can prove another is better.`, `Maya dit que l horaire est le meilleur parce que personne ne peut prouver qu un autre est meilleur.`],
  [`Sam says the app feature works because no one proved it does not.`, `Sam dit que la fonction de l application marche parce que personne n a prouve qu elle ne marche pas.`],
  [`Juno says the old path is fine because nobody has shown it dangerous.`, `Juno dit que l ancien chemin va bien parce que personne ne l a montre dangereux.`],
  [`Iris believes the email is from the bank because no one proved it is a scam.`, `Iris croit que le courriel vient de la banque parce que personne n a prouve que c est une arnaque.`],
  [`Cole says the class joke was harmless because nobody proved it was mean.`, `Cole dit que la blague de classe etait sans consequence parce que personne n a prouve qu elle etait mechante.`],
  [`Nora thinks the candle is real because no one disproved the claim.`, `Nora pense que la bougie est authentique parce que personne n a refute l affirmation.`],
  [`Ari says the policy works because no one has proven it fails.`, `Ari dit que la politique fonctionne parce que personne n a prouve qu elle echoue.`],
  [`Rita says the medicine is useful because nobody has proven it useless.`, `Rita dit que le medicament est utile parce que personne n a prouve qu il est inutile.`],
  [`Tia says the noise came from the phone because nobody proved otherwise.`, `Tia dit que le bruit venait du telephone parce que personne n a prouve le contraire.`],
  [`Oli says the rumor is worth repeating because it has not been disproved.`, `Oli dit que la rumeur vaut la peine d etre repetee parce qu elle n a pas ete refutee.`],
  [`Lara thinks the recipe is safe because no one has produced evidence against it.`, `Lara pense que la recette est sure parce que personne n a apporte de preuve contre elle.`],
  [`Ben says the new lock is broken because he cannot prove it works.`, `Ben dit que la nouvelle serrure est cassee parce qu il ne peut pas prouver qu elle marche.`],
  [`Mina says the photo is honest because nobody proved it was edited.`, `Mina dit que la photo est honnete parce que personne n a prouve qu elle a ete retouchee.`],
  [`Drew says the story must be true because no one has refuted every detail.`, `Drew dit que l histoire doit etre vraie parce que personne n a refute chaque detail.`],
  [`Jade says the shortcut is the best choice because nobody proved it to be bad.`, `Jade dit que le raccourci est le meilleur choix parce que personne n a prouve qu il etait mauvais.`],
  [`Owen says the neighbor is friendly because no one has proven him unfriendly.`, `Owen dit que le voisin est sympathique parce que personne n a prouve qu il est antipathique.`],
  [`Mila says the claim deserves a vote because nobody has proven it false.`, `Mila dit que l affirmation merite un vote parce que personne n a prouve qu elle est fausse.`],
];

const EN = ['Appeal to Ignorance', 'Appeal to Authority', 'Hasty Generalization', 'False Dilemma'];
const FR = ["Appel à l'ignorance", "Appel à l'autorité", 'Généralisation hâtive', 'Fausse dichotomie'];

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
      id: 30501 + i,
      level: 1,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? "Appel à l'ignorance" : 'Appeal to Ignorance',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? FR : EN, c),
      correct_option_index: c,
      explanation: fr
        ? "On traite une affirmation comme vraie ou fausse uniquement parce qu'elle n'a pas encore été prouvée autrement."
        : 'A claim is treated as true or false only because it has not yet been proven otherwise.',
      detailedExplanationBeginner: fr
        ? "L'absence de preuve est prise pour une preuve."
        : 'A lack of proof is being treated as proof.',
      detailedExplanationIntermediate: fr
        ? "Le fait de ne pas savoir n'autorise pas à conclure que quelque chose est vrai, faux, sûr ou dangereux."
        : 'Not knowing does not justify concluding that something is true, false, safe, or dangerous.',
      detailedExplanationExpert: fr
        ? "L'appel à l'ignorance confond une absence de preuve avec une preuve d'absence, ou inversement, et ignore qu'une conclusion solide demande des données positives."
        : 'Appeal to ignorance confuses absence of evidence with evidence of absence, or the reverse, and ignores that a strong conclusion needs positive evidence.',
      questionFormat: 'standard',
    };
  });
}

export const APPEAL_TO_IGNORANCE_EXPANSION_EN: Question[] = make();
export const APPEAL_TO_IGNORANCE_EXPANSION_FR: Question[] = make(true);
