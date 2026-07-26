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
  ['Maya has one great sales day after a streak of average days, and her boss says the new bonus caused the jump.', 'Maya a une excellente journee de ventes apres une serie de jours moyens, et son patron dit que la nouvelle prime a cause la hausse.'],
  ['Leo has a rough quiz after several easy ones, and his friend says the easy quizzes must have spoiled him.', 'Leo rate un controle apres plusieurs faciles, et son ami dit que les controles faciles l ont surement ramolli.'],
  ['Priya feels less stressed after a deadline passes, and her cousin says the deadline itself cured her stress.', 'Priya se sent moins stressee apres le passage d une deadline, et sa cousine dit que la deadline elle-meme a guerit son stress.'],
  ['Omar gets one terrible commute after a smooth week and says the city traffic suddenly changed forever.', 'Omar subit un trajet terrible apres une semaine fluide et dit que la circulation de la ville a soudainement change pour toujours.'],
  ['Rina has one excellent workout after being sick and thinks the supplements made her instantly stronger.', 'Rina fait un excellent entrainement apres avoir ete malade et pense que les complements l ont rendue instantanement plus forte.'],
  ['Ben wins a few games in a row and then loses once, so his brother says winning always leads to a crash.', 'Ben gagne quelques parties d affilee puis perd une fois, alors son frere dit que gagner mene toujours a une chute.'],
  ['Zoe has a bad day after a streak of praise and assumes praise always causes people to fail next.', 'Zoé passe une mauvaise journee apres une serie de compliments et suppose que les compliments font toujours echouer les gens ensuite.'],
  ['Kai gets a high score after extra study and then a normal score, and his classmate says studying too much backfires.', 'Kai obtient un score eleve apres avoir beaucoup etudie puis un score normal, et son camarade dit que trop etudier se retourne contre lui.'],
  ['Nora feels calmer after a stressful call ends, and her friend says the phone call must have fixed her mood.', 'Nora se sent plus calme apres la fin d un appel stressant, et son amie dit que l appel telephonique a du regler son humeur.'],
  ['Eli sees a big improvement after a new running plan and then a smaller one, and his coach says the plan stopped working.', 'Eli voit une grande amelioration apres un nouveau plan de course puis une plus petite, et son coach dit que le plan a cesse de marcher.'],
  ['Lina has one unusually good exam after several poor ones, and her parents say the lucky pen was the reason.', 'Lina obtient un examen inhabituellement bon apres plusieurs mauvais, et ses parents disent que le stylo porte-bonheur en est la raison.'],
  ['Grant gets better sleep after moving rooms, then a normal night, and his roommate says the room move cured insomnia.', 'Grant dort mieux apres avoir change de chambre, puis passe une nuit normale, et son coloc dit que le changement de chambre a guerit l insomnie.'],
  ['Tia has one huge fundraising day after a weak month, and the volunteer team says the poster design caused everything.', 'Tia fait une enorme journee de collecte apres un mois faible, et l equipe benevole dit que le design de l affiche a tout cause.'],
  ['Noah has a bad mood after several good weeks, and his sister says the good weeks made him careless.', 'Noah a une mauvaise humeur apres plusieurs bonnes semaines, et sa soeur dit que les bonnes semaines l ont rendu negligent.'],
  ['Mia gets one great review after a string of average ones, and the manager says the review system is finally perfect.', 'Mia obtient un excellent avis apres une serie de resultats moyens, et le gerant dit que le systeme d evaluation est enfin parfait.'],
  ['Jules has a weak performance after a strong streak and says the streak must have drained his talent.', 'Jules fait une faible performance apres une forte serie et dit que la serie a du epuiser son talent.'],
  ['Ava feels less anxious after a tough week, and her aunt says the tough week must have burned off the anxiety.', 'Ava se sent moins anxieuse apres une semaine difficile, et sa tante dit que la semaine difficile a du bruler l anxiete.'],
  ['Finn has an excellent first day at the new job and then an ordinary second day, and his friend says the job is already disappointing.', 'Finn passe une excellente premiere journee au nouveau travail puis une deuxieme ordinaire, et son ami dit que le poste est deja decevant.'],
  ['Mina gets a burst of good luck after several bad weeks, and her dad says the bad weeks were building momentum for luck.', 'Mina a un coup de chance apres plusieurs mauvaises semaines, et son pere dit que les mauvaises semaines construisaient l elan de la chance.'],
  ['Theo has one terrible presentation after a series of good ones, and the audience says he has clearly forgotten how to speak.', 'Theo fait une terrible presentation apres une serie de bonnes, et le public dit qu il a clairement oublie comment parler.'],
  ['Juno sees her plants perk up after a cold snap ends, then settle, and she says the weather change was a miracle cure.', 'Juno voit ses plantes reprendre apres la fin d un coup de froid puis se calmer, et elle dit que le changement de meteo a ete un remede miracle.'],
  ['Iris gets one unusually fast sale after a slow month, and the sales team says the email campaign solved everything.', 'Iris fait une vente inhabituellement rapide apres un mois lent, et l equipe commerciale dit que la campagne email a tout resolu.'],
  ['Cole has a bad practice round after many strong ones, and the coach says the good rounds made him overconfident.', 'Cole fait une mauvaise partie d entrainement apres de nombreuses bonnes, et l entraineur dit que les bonnes parties l ont rendu trop confiant.'],
  ['Riley feels better after a painful flare-up ends, and the neighbor says the cream worked like magic.', 'Riley se sent mieux apres la fin d une crise douloureuse, et le voisin dit que la creme a marche comme par magie.'],
  ['Pia gets a perfect test after weeks of stress and then a normal one, and her cousin says the stress must have sharpened her.', 'Pia obtient un test parfait apres des semaines de stress puis un test normal, et sa cousine dit que le stress a du la rendre plus affutee.'],
  ['Hugo has one great day after being sick and decides he is fully cured forever.', 'Hugo passe une grande journee apres avoir ete malade et decide qu il est guerie pour toujours.'],
  ['Sam loses a game after a winning streak and says winning must always be followed by a loss.', 'Sam perd une partie apres une serie de victoires et dit que gagner doit toujours etre suivi d une defaite.'],
  ['Jade has an average day after a perfect one and her friend says perfection always predicts a drop.', 'Jade a une journee moyenne apres une journee parfaite et son amie dit que la perfection predit toujours une baisse.'],
  ['Owen gets a better mood after a storm passes, and his brother says the storm caused the mood swing.', 'Owen est de meilleure humeur apres le passage d une tempete, et son frere dit que la tempete a cause le changement d humeur.'],
  ['Lea gets a much better grade after a tutor session, then a normal one, and says the tutor only helped the first time.', 'Léa obtient une bien meilleure note apres une seance de tutorat, puis une note normale, et dit que le tuteur n a aide que la premiere fois.'],
  ['Maya sees her car run smoothly after a repair and then normal again, and says the repair fixed every future problem.', 'Maya voit sa voiture rouler sans probleme apres une reparation puis revenir a la normale, et dit que la reparation a resolu tous les futurs problemes.'],
  ['Ben has one outstanding interview after weeks of practice and concludes the practice caused perfection.', 'Ben passe un entretien exceptionnel apres des semaines de pratique et conclut que la pratique a cause la perfection.'],
  ['Nora has a rough evening after a calm week and assumes the calm week had been a sign of bad things to come.', 'Nora passe une soiree difficile apres une semaine calme et suppose que la semaine calme annonçait des problemes.'],
  ['Eli gets better focus after a walk, then a normal work block, and says the walk fixed his attention forever.', 'Eli a une meilleure concentration apres une promenade, puis un bloc de travail normal, et dit que la promenade a fixe son attention pour toujours.'],
  ['Lina wins one trivia night after many losses and says she finally cracked the code.', 'Lina gagne une soiree quiz apres de nombreuses defaites et dit qu elle a enfin trouve la cle.'],
  ['Grant gets a huge tip after a mediocre shift and says the shift quality caused the tip.', 'Grant recoit un gros pourboire apres un service moyen et dit que la qualite du service a cause le pourboire.'],
  ['Tia feels less tired after a stressful project ends, and her friend says the project somehow gave her energy back.', 'Tia se sent moins fatiguee apres la fin d un projet stressant, et son amie dit que le projet lui a somehow rendu de l energie.'],
  ['Finn gets a lucky break after a hard month and says the hard month was the reason the break came.', 'Finn a un coup de chance apres un mois difficile et dit que le mois difficile etait la raison du coup de chance.'],
  ['Mina has one bad class after several excellent ones, and the teacher says she was spoiled by success.', 'Mina a un mauvais cours apres plusieurs excellents, et le professeur dit qu elle a ete gatee par le succes.'],
  ['Theo gets an amazing first try after a reset, then a normal one, and says the reset caused greatness.', 'Theo reussit un premier essai incroyable apres une remise a zero, puis un essai normal, et dit que la remise a zero a cause la grandeur.'],
  ['Juno gets calmer after her deadline ends, and her colleague says deadlines are actually stress medicine.', 'Juno se calme apres la fin de sa deadline, et sa collegue dit que les deadlines sont en fait un medicament contre le stress.'],
  ['Iris has one poor day after a strong streak and says the streak proved she was due for failure.', 'Iris a une mauvaise journee apres une forte serie et dit que la serie prouvait qu elle etait due a l echec.'],
  ['Cole has a great morning after a bad night and thinks the bad night somehow fueled the morning.', 'Cole a une bonne matinee apres une mauvaise nuit et pense que la mauvaise nuit a somehow alimente la matinee.'],
  ['Riley gets a better mood after taking a break, then a normal afternoon, and says the break fixed his mood disorder.', 'Riley a une meilleure humeur apres une pause, puis un apres-midi normal, et dit que la pause a gueri son trouble de l humeur.'],
  ['Pia has one awful game after several ordinary ones and says the ordinary games were misleading.', 'Pia a une partie terrible apres plusieurs parties ordinaires et dit que les parties ordinaires etaient trompeuses.'],
  ['Hugo gets one excellent month after months of average performance and says average work was clearly the cause.', 'Hugo a un excellent mois apres des mois de performance moyenne et dit que le travail moyen en etait clairement la cause.'],
  ['Sam feels less sore after a workout streak ends, and his friend says the workouts must have created the soreness.', 'Sam se sent moins courbature apres la fin d une serie d entrainements, et son ami dit que les entrainements ont du creer les courbatures.'],
  ['Ava has a dip after a perfect project and says perfect projects always collapse afterward.', 'Ava a une baisse apres un projet parfait et dit que les projets parfaits s effondrent toujours ensuite.'],
  ['Omar has one great day after a stressful week and says the stress week caused the great day.', 'Omar passe une excellente journee apres une semaine stressante et dit que la semaine stressante a cause la bonne journee.'],
  ['Nina gets a normal score after a high one and says the high score must have worn her out.', 'Nina obtient un score normal apres un score eleve et dit que le score eleve a du l epuiser.'],
  ['Eli feels relieved after a bad stretch ends and says the bad stretch was what fixed him.', 'Eli se sent soulagé apres la fin d une mauvaise periode et dit que la mauvaise periode a ete ce qui l a reparé.'],
  ['Lina gets one lucky week after several unlucky ones and says the unlucky streak turned into success.', 'Lina a une semaine chanceuse apres plusieurs semaines malchanceuses et dit que la serie malchanceuse s est transformee en succes.'],
  ['Grant has one ordinary day after a heroic week and says the heroic week was the real problem.', 'Grant a une journee ordinaire apres une semaine heroique et dit que la semaine heroique etait le vrai probleme.'],
  ['Tia sees a rebound after a hard reset and assumes the reset fixed everything permanently.', 'Tia voit un rebond apres une remise a zero difficile et suppose que la remise a zero a tout fixe pour toujours.'],
  ['Finn gets a strong comeback after a slump and says the slump built the comeback on purpose.', 'Finn fait un fort retour apres une baisse et dit que la baisse a construit le retour intentionnellement.'],
  ['Mina feels better after time passes, and her cousin says time itself was the treatment.', 'Mina se sent mieux avec le temps, et sa cousine dit que le temps lui-meme etait le traitement.'],
  ['Theo has one mediocre run after a long streak and says the long streak was clearly a warning sign.', 'Theo a une course mediocre apres une longue serie et dit que la longue serie etait clairement un signe avant-coureur.'],
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
