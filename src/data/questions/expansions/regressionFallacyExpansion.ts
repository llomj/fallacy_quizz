import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya gets two huge wins at work and then assumes the next week must be a total disaster.', 'Maya enchaine deux grandes victoires au travail puis suppose que la semaine suivante doit forcement etre un desastre total.'],
  ['Leo has one awful day after a streak of good ones and says the bad luck must be caused by something he did.', 'Leo passe une seule mauvaise journee apres une serie de bons jours et dit que la malchance doit etre causee par quelque chose qu il a fait.'],
  ['Priya scores unusually high on one quiz, then a lower score, and her friend says the teacher must have punished her for doing well.', 'Priya obtient un score inhabituellement eleve a un controle, puis un score plus bas, et son amie dit que le professeur a du la punir pour avoir reussi.'],
  ['Omar feels less anxious after a very stressful week, and his cousin says the new tea fixed everything.', 'Omar se sent moins anxieux apres une semaine tres stressante, et son cousin dit que le nouveau the a tout regle.'],
  ['Rina has a terrible first day at the gym and decides the gym always makes people feel worse before any routine settles in.', 'Rina passe une premiere journee terrible a la salle et decide que la salle rend toujours les gens moins bien avant que toute routine se stabilise.'],
  ['Ben gets a lucky soccer game with three goals, then a normal game, and the coach says he must have lost focus because success cannot last.', 'Ben fait un match de foot chanceux avec trois buts, puis un match normal, et l entraineur dit qu il a du perdre sa concentration parce que le succes ne dure jamais.'],
  ['Zoe has one amazing week on her diet, then a rough one, and her sister says the diet itself must be failing.', 'Zoé a une semaine incroyable sur son regime, puis une semaine difficile, et sa soeur dit que le regime lui-meme doit echouer.'],
  ['Kai has a rough presentation after a brilliant one, and the group says the second talk proves he is becoming worse at speaking.', 'Kai fait une presentation difficile apres une brillante, et le groupe dit que la deuxieme intervention prouve qu il devient moins bon a l oral.'],
  ['Nora sees her garden bloom early, then slow down, and she assumes the fertilizer caused both the spike and the dip.', 'Nora voit son jardin fleurir tot puis ralentir, et elle suppose que l engrais a cause a la fois le pic et la baisse.'],
  ['Eli gets a huge sale after a bad month and concludes the ad campaign fixed the whole business.', 'Eli obtient une grosse vente apres un mauvais mois et conclut que la campagne pub a sauve toute l entreprise.'],
  ['Lina has one super productive cleaning day and then a normal one, so she thinks the method stopped working.', 'Lina a une journee de menage tres productive puis une journee normale, alors elle pense que la methode a cesse de marcher.'],
  ['Grant hears that his friend recovered after a rough stretch and says the recovery plan must be magical.', 'Grant entend que son ami s est retabli apres une periode difficile et dit que le plan de guerison doit etre magique.'],
  ['Tia gets one low grade after a string of high ones and assumes the teacher is suddenly biased against her.', 'Tia obtient une mauvaise note apres une serie de bonnes notes et suppose que le professeur est soudainement biaise contre elle.'],
  ['Noah notices his mood is calmer after a stressful weekend and says the new playlist cured him.', 'Noah remarque que son humeur est plus calme apres un week-end stressant et dit que la nouvelle playlist l a gueri.'],
  ['Mia has one rough sleep night after many good nights and believes the mattress must have gone bad.', 'Mia passe une mauvaise nuit de sommeil apres de nombreuses bonnes nuits et croit que le matelas doit s etre deteriore.'],
  ['Jules gets an unusually easy exam and then a harder one, and says the subject became much more difficult overnight.', 'Jules a un examen inhabituellement facile puis un autre plus difficile, et dit que la matiere est devenue beaucoup plus dure du jour au lendemain.'],
  ['Ava has a burst of motivation, then a quieter week, and her roommate says she obviously cannot stick with anything.', 'Ava a un regain de motivation puis une semaine plus calme, et sa coloc dit qu elle ne peut evidemment rien maintenir.'],
  ['Finn gets a very lucky first day selling cookies, then a normal second day, and his cousin says the recipe is clearly the secret.', 'Finn fait une premiere journee de vente de biscuits tres chanceuse puis une deuxieme journee normale, et son cousin dit que la recette est clairement le secret.'],
  ['Mina has one miserable commute and her brother says the city traffic is always getting worse for her.', 'Mina a un trajet tres penible et son frere dit que la circulation en ville empire toujours pour elle.'],
  ['Theo has a great workout after being ill, then a modest one, and the gym buddy says the supplements made him superhuman.', 'Theo fait un excellent entrainement apres avoir ete malade puis un entrainement modeste, et son partenaire de salle dit que les complements l ont rendu surhumain.'],
  ['Juno gets better sleep after changing schedules, then a normal night, and her friend says the schedule change fixed insomnia forever.', 'Juno dort mieux apres avoir change d horaires puis passe une nuit normale, et son amie dit que le changement d horaires a gueri l insomnie pour toujours.'],
  ['Iris has one unusually sunny sales day and a slower day after, and the team says the weather app is broken.', 'Iris a une journee de ventes inhabituellement ensoleillee puis une journee plus lente, et l equipe dit que l application meteo est cassee.'],
  ['Cole gets a streak of bad test runs, then a regular one, and the manager says the product is doomed.', 'Cole enchaine des tests rates puis un test normal, et le manager dit que le produit est condamne.'],
  ['Riley feels less pain after a very bad flare-up, and the nurse says the cream finally cured everything.', 'Riley ressent moins de douleur apres une tres mauvaise crise, et l infirmiere dit que la creme a enfin tout soigne.'],
  ['Pia has a string of lucky parking spots and then one day has to walk farther, so she thinks the universe is balancing things out.', 'Pia enchaine des places de parking chanceuses puis un jour doit marcher plus loin, alors elle pense que l univers remet les choses en equilibre.'],
  ['Hugo gets one amazing day after several mediocre ones, and his aunt says the lucky charm must have kicked in.', 'Hugo a une journee incroyable apres plusieurs journees moyennes, et sa tante dit que le porte-bonheur a du agir.'],
  ['Sam has one bad week after being praised all month and thinks praise always leads to a crash.', 'Sam passe une mauvaise semaine apres avoir ete felicite tout le mois et pense que les compliments entrainent toujours une chute.'],
  ['Jade has a sharp improvement after a hard reset on her phone, then a small dip, and says the reset caused everything.', 'Jade voit une nette amelioration apres une remise a zero de son telephone, puis une petite baisse, et dit que la remise a zero a tout cause.'],
  ['Owen gets a strong first half in basketball and a quieter second half, and his friend says he must have run out of talent.', 'Owen fait une premiere mi-temps forte au basket puis une deuxieme plus calme, et son ami dit qu il a du manquer de talent.'],
  ['Lea feels much better after a cold passes, and her coworker says the tea she drank must be a miracle cure.', 'Léa se sent beaucoup mieux apres la fin d un rhume, et sa collegue dit que le the qu elle a bu doit etre un remede miracle.'],
  ['Maya has a great week after a terrible one, and her dad says the bad week somehow caused the good one.', 'Maya passe une excellente semaine apres une semaine terrible, et son pere dit que la mauvaise semaine a en quelque sorte provoque la bonne.'],
  ['Ben does unusually well on one easy driving route, then average on the next, and thinks the route made him a better driver.', 'Ben reussit inhabituellement bien sur un trajet facile puis de facon moyenne sur le suivant, et pense que le trajet l a rendu meilleur conducteur.'],
  ['Ava loses a game after winning several, and her friend says winning probably made her overconfident.', 'Ava perd une partie apres en avoir gagne plusieurs, et son amie dit que gagner l a probablement rendue trop sure d elle.'],
  ['Omar has one excellent review after months of mixed ones, and the boss says the review system finally works.', 'Omar obtient une excellente evaluation apres des mois mitigés, et le patron dit que le systeme d evaluation marche enfin.'],
  ['Nina gets less angry after a stressful call, and her sibling says the apology from earlier must have done it.', 'Nina se sent moins en colere apres un appel stressant, et son frere ou sa soeur dit que les excuses d avant ont du faire effet.'],
  ['Eli sees a bad sales slump after a giant promo week and says the promo hurt the store.', 'Eli voit une forte baisse des ventes apres une semaine de promotion geante et dit que la promo a nuit au magasin.'],
  ['Lina has an unusually bad first attempt at baking, then a decent second one, and her friend says she is not naturally good at it.', 'Lina rate son premier essai de patisserie de facon inhabituelle puis reussit correctement le deuxieme, et son amie dit qu elle n est pas naturellement douee.'],
  ['Grant gets a big reward after a difficult month and assumes the hard month caused the reward.', 'Grant recoit une grosse recompense apres un mois difficile et suppose que le mois difficile a cause la recompense.'],
  ['Tia has one low practice score after many highs, and the team says the drills stopped helping.', 'Tia obtient un faible score d entrainement apres de nombreux scores hauts, et l equipe dit que les exercices ont cesse d aider.'],
  ['Finn feels calmer after a stressful deadline passes, and his uncle says the deadline itself must have fixed the anxiety.', 'Finn se sent plus calme apres la fin d une deadline stressante, et son oncle dit que la deadline elle-meme a du regler l anxiete.'],
  ['Mina gets a burst of good luck after a rough patch, and her cousin says the rough patch must have built character.', 'Mina a un coup de chance apres une mauvaise periode, et sa cousine dit que la mauvaise periode a du forger son caractere.'],
  ['Theo has a poor game after a hot streak, and the crowd says the streak clearly made him careless.', 'Theo fait un mauvais match apres une serie incroyable, et le public dit que la serie l a clairement rendu negligent.'],
  ['Juno sees an improvement in her skin after changing cleansers, then a slight flare-up, and concludes the cleanser is the cause of every change.', 'Juno voit une amelioration de sa peau apres avoir change de nettoyant, puis une legere poussée, et conclut que le nettoyant est la cause de chaque changement.'],
  ['Iris gets a great first day at the new job and then an ordinary one, so she thinks the job is getting worse fast.', 'Iris passe une excellente premiere journee au nouveau travail puis une journee ordinaire, alors elle pense que le poste se degrade vite.'],
  ['Cole has one surprise good score after months of stress and says the study app is obviously the reason.', 'Cole obtient un score surprise eleve apres des mois de stress et dit que l application d etude en est evidemment la raison.'],
  ['Riley feels less tired after a bad sleep streak ends, and his mom says the old tiredness was caused by the streak itself.', 'Riley se sent moins fatigue apres la fin d une mauvaise serie de nuits, et sa mere dit que l ancienne fatigue etait causee par la serie elle-meme.'],
  ['Pia gets a rough patch of traffic followed by a smooth ride, and she assumes the universe was correcting her.', 'Pia traverse une mauvaise periode de circulation suivie d un trajet fluide, et elle suppose que l univers se corrigeait.'],
  ['Hugo has one standout sale after several slow days, and the salesperson says the slow days were just prelude to success.', 'Hugo fait une vente remarquable apres plusieurs jours lents, et le vendeur dit que les jours lents n etaient qu un prelude au succes.'],
  ['Sam feels better after resting through a cold snap, and his friend says the cold snap must have forced recovery.', 'Sam se sent mieux apres s etre repose pendant un coup de froid, et son ami dit que le coup de froid a du forcer la guerison.'],
  ['Ava sees a dip after a perfect month and says perfection always leads to a drop.', 'Ava voit une baisse apres un mois parfait et dit que la perfection mene toujours à une chute.'],
];

const OPTIONS_EN = ['Regression Fallacy', 'Regression to the Mean', 'Post Hoc', 'Base Rate Neglect'];
const OPTIONS_FR = ['Sophisme de régression', 'Régression vers la moyenne', 'Post hoc', 'Négligence du taux de base'];

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
      id: 39501 + index,
      level: 2,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? 'Sophisme de régression' : 'Regression Fallacy',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'On attribue un retour vers la moyenne à une cause imaginaire ou trop simple.'
        : 'A natural return toward the average is mistaken for a real cause or a simple hidden trigger.',
      detailedExplanationBeginner: isFrench
        ? "Le retour à la moyenne n'est pas forcément une cause."
        : 'A return toward the average is not automatically a cause.',
      detailedExplanationIntermediate: isFrench
        ? 'Le sophisme de régression apparaît quand on prend un pic ou une chute extrême puis qu on invente une explication causale pour le retour suivant vers une valeur plus normale.'
        : 'Regression fallacy appears when someone sees an extreme high or low and invents a causal story for the next move back toward a more normal value.',
      detailedExplanationExpert: isFrench
        ? "Quand une mesure est extrême, une partie de son écart peut simplement venir du hasard, de la variance ou d une combinaison temporaire de facteurs. Si on oublie cette régression naturelle vers la moyenne, on surestime l effet d une action, d une personne ou d un traitement et on confond coïncidence statistique et cause réelle."
        : 'When a measurement is extreme, part of its deviation may simply come from chance, variance, or a temporary mix of factors. If we forget this natural regression toward the mean, we overestimate the effect of an action, a person, or a treatment and confuse statistical coincidence with a real cause.',
      questionFormat: 'standard',
    };
  });
}

export const REGRESSION_FALLACY_EXPANSION_EN: Question[] = createQuestions('en');
export const REGRESSION_FALLACY_EXPANSION_FR: Question[] = createQuestions('fr');
