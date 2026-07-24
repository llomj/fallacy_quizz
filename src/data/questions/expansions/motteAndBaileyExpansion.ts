import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Mia says the app is free speech for everyone, but when challenged, she says she only meant people should be allowed to post jokes.', 'Mia dit que l application est une liberte d expression pour tout le monde, mais quand on la contredit, elle dit qu elle voulait seulement dire que les gens devraient pouvoir poster des blagues.'],
  ['Leo claims the new rule lets employees work whenever they want, then retreats to saying it only means a little schedule flexibility.', 'Leo affirme que la nouvelle regle laisse les employes travailler quand ils veulent, puis se replie en disant que cela signifie seulement un peu de flexibilite.'],
  ['Nina says the policy is total equality, but after criticism she says she meant equal opportunity, not equal outcomes.', 'Nina dit que la politique est une egalite totale, mais apres les critiques elle dit qu elle voulait dire egalite des chances, pas des resultats.'],
  ['Owen calls the diet a miracle cure, then later says it only helps some people feel better.', 'Owen appelle le regime un remede miracle, puis plus tard dit qu il aide seulement certaines personnes a se sentir mieux.'],
  ['Priya says the game is for serious competitors only, then backtracks to say it is just for people who try hard.', 'Priya dit que le jeu est reserve aux vrais competitifs, puis se retracte en disant qu il est juste pour les personnes qui font des efforts.'],
  ['Ben says the club is for the best students, then says he only meant students who want to improve.', 'Ben dit que le club est reserve aux meilleurs eleves, puis dit qu il voulait seulement parler des eleves qui veulent progresser.'],
  ['Tara argues the policy will solve all traffic problems, then weakens it to "it might help a bit."', 'Tara soutient que la politique resolvra tous les problemes de circulation, puis la reduit a « elle pourrait aider un peu ».'],
  ['Kai says the product is the only fair choice, then explains he just meant it is one reasonable choice.', 'Kai dit que le produit est le seul choix juste, puis explique qu il voulait juste dire que c est un choix raisonnable.'],
  ['Jules presents the rule as a complete ban, then says he only meant people should be careful.', 'Jules presente la regle comme une interdiction totale, puis dit qu il voulait seulement dire que les gens devraient etre prudents.'],
  ['Ava says the app is open to everyone, then narrows it to anyone who agrees with the mission.', 'Ava dit que l application est ouverte a tout le monde, puis la restreint a toute personne qui est d accord avec la mission.'],
  ['Noah claims the proposal fixes everything, then retreats to saying it fixes one problem.', 'Noah affirme que la proposition resout tout, puis se replie en disant qu elle resout un seul probleme.'],
  ['Mina says the book proves her entire worldview, then backtracks to one small point in it.', 'Mina dit que le livre prouve toute sa vision du monde, puis se replie sur un seul petit point du livre.'],
  ['Eli says the company is honest with no exceptions, then says he only meant the customer service team.', 'Eli dit que l entreprise est honnete sans exception, puis dit qu il voulait seulement parler de l equipe du service client.'],
  ['Rina says the new law is pure freedom, then says it merely allows one narrow exception.', 'Rina dit que la nouvelle loi est une liberte pure, puis dit qu elle autorise seulement une exception etroite.'],
  ['Hugo says the movie is the perfect answer to every complaint, then says he only meant it is less bad than the others.', 'Hugo dit que le film est la reponse parfaite a toutes les critiques, puis dit qu il voulait seulement dire qu il est moins mauvais que les autres.'],
  ['Lina says the cafe serves the best food in town, then says she only meant it has one decent dish.', 'Lina dit que le cafe sert la meilleure nourriture de la ville, puis dit qu elle voulait seulement dire qu il a un plat correct.'],
  ['Grant says the teacher is a genius, then clarifies he only meant the teacher explained one topic well.', 'Grant dit que le professeur est un genie, puis precise qu il voulait seulement dire que le professeur a bien explique un sujet.'],
  ['Zoe says the city plan will make everyone rich, then shrinks it to "it could improve some incomes."', 'Zoe dit que le plan urbain rendra tout le monde riche, puis le reduit a « il pourrait ameliorer certains revenus ».'],
  ['Milo says the gadget is completely safe, then says he only means it is safer than the old one.', 'Milo dit que le gadget est totalement sur, puis dit qu il voulait seulement dire qu il est plus sur que l ancien.'],
  ['Theo says the team is unbeatable, then retreats to saying they are hard to beat at home.', 'Theo dit que l equipe est imbattable, puis se replie en disant qu elle est difficile a battre a domicile.'],
  ['Pia says the rule will change everything, then says it only tweaks one part of the process.', 'Pia dit que la regle changera tout, puis dit qu elle modifie seulement une partie du processus.'],
  ['Finn says the policy is the only ethical option, then admits it is just his preferred option.', 'Finn dit que la politique est la seule option ethique, puis admet que c est juste son option preferee.'],
  ['Maya says the theory explains all behavior, then says it only explains one pattern.', 'Maya dit que la theorie explique tout le comportement, puis dit qu elle explique seulement un motif.'],
  ['Sam says the rule is a total cure, then says it only helps reduce one symptom.', 'Sam dit que la regle est un remede total, puis dit qu elle aide seulement a reduire un symptome.'],
  ['Juno says the platform is for everyone, then says it is for everyone who already agrees.', 'Juno dit que la plateforme est pour tout le monde, puis dit qu elle est pour tous ceux qui sont deja d accord.'],
  ['Iris says the change is revolutionary, then says it only changes the wording.', 'Iris dit que le changement est revolutionnaire, puis dit qu il ne change que la formulation.'],
  ['Cole says the idea is completely fair, then says he only means it feels fair to him.', 'Cole dit que l idee est totalement juste, puis dit qu il voulait seulement dire qu elle lui semble juste.'],
  ['Nora says the policy is the best solution ever, then says it is just better than one bad alternative.', 'Nora dit que la politique est la meilleure solution de tous les temps, puis dit qu elle est juste meilleure qu une mauvaise alternative.'],
  ['Ari says the claim is universal truth, then backs off to "it applies in many cases."', 'Ari dit que l affirmation est une verite universelle, puis se replie sur « elle s applique dans beaucoup de cas ».'],
  ['Rita says the app removes all barriers, then says it only removes one small step.', 'Rita dit que l application supprime toutes les barrières, puis dit qu elle ne supprime qu une petite etape.'],
  ['Tia says the food is morally pure, then says she only meant it is made from plain ingredients.', 'Tia dit que la nourriture est moralement pure, puis dit qu elle voulait seulement dire qu elle est faite d ingredients simples.'],
  ['Oli says the website guarantees freedom, then says it just offers a few extra options.', 'Oli dit que le site garantit la liberte, puis dit qu il offre juste quelques options supplementaires.'],
  ['Lara says the decision is the clearest proof, then says it only supports one part of her argument.', 'Lara dit que la decision est la preuve la plus claire, puis dit qu elle ne soutient qu une partie de son argument.'],
  ['Ben says the neighborhood is completely safe, then says he only meant safer than before.', 'Ben dit que le quartier est totalement sur, puis dit qu il voulait seulement dire plus sur qu avant.'],
  ['Mina says the rule is for everyone equally, then says she only means no one is exempt from one detail.', 'Mina dit que la regle est pour tout le monde egalement, puis dit qu elle veut seulement dire que personne n est exempt d un detail.'],
  ['Drew says the plan solves the crisis, then says it only reduces the pressure a little.', 'Drew dit que le plan resout la crise, puis dit qu il reduit seulement un peu la pression.'],
  ['Jade says the tool is essential for every job, then says it only helps with one step.', 'Jade dit que l outil est essentiel pour tous les travaux, puis dit qu il aide seulement pour une etape.'],
  ['Owen says the idea is the whole answer, then says it is just part of the answer.', 'Owen dit que l idee est la reponse complete, puis dit que c est seulement une partie de la reponse.'],
  ['Mila says the article proves the author is right about everything, then says it only shows the author has one good point.', 'Mila dit que l article prouve que l auteur a raison sur tout, puis dit qu il montre seulement que l auteur a un bon point.'],
  ['Evan says the new rule is total freedom, then says it just removes one restriction.', 'Evan dit que la nouvelle regle est une liberte totale, puis dit qu elle enlève juste une restriction.'],
  ['Kira says the policy is unfair to nobody, then says she only meant nobody was singled out in one section.', 'Kira dit que la politique n est injuste pour personne, puis dit qu elle voulait seulement dire que personne n est vise dans une section.'],
  ['Grant says the company is transparent about everything, then says he only means one report is public.', 'Grant dit que l entreprise est transparente sur tout, puis dit qu il voulait seulement dire qu un rapport est public.'],
  ['Zara says the rule is perfect, then says it is just acceptable for one situation.', 'Zara dit que la regle est parfaite, puis dit qu elle est juste acceptable pour une situation.'],
  ['Parker says the club is the only place for real thinkers, then says he only means it has smart members.', 'Parker dit que le club est le seul endroit pour les vrais penseurs, puis dit qu il voulait seulement dire qu il a des membres intelligents.'],
  ['Hana says the policy will end all complaints, then says it might reduce a few.', 'Hana dit que la politique mettra fin a toutes les plaintes, puis dit qu elle pourrait en reduire quelques-unes.'],
  ['Leo says the new rule makes life totally fair, then says it just makes one step fairer.', 'Leo dit que la nouvelle regle rend la vie totalement juste, puis dit qu elle rend juste une etape un peu plus juste.'],
  ['Maya says the argument is complete freedom, then says it is just one allowed action.', 'Maya dit que l argument est la liberte complete, puis dit que c est juste une action autorisee.'],
  ['Nina says the product is the answer to everything, then says it only helps with one task.', 'Nina dit que le produit est la reponse a tout, puis dit qu il aide seulement pour une tache.'],
  [`Owen says the app is total freedom, then backs off to say it only adds one extra setting.`, `Owen dit que l application est une liberte totale, puis se ravise en disant qu elle ajoute seulement un reglage de plus.`],
  [`Priya says the club is for geniuses, then says she only meant people who like learning.`, `Priya dit que le club est reserve aux genies, puis dit qu elle voulait seulement parler des gens qui aiment apprendre.`],
  [`Ben says the policy solves every problem, then retreats to saying it helps one small issue.`, `Ben dit que la politique resout tous les problemes, puis se replie en disant qu elle aide pour un seul petit souci.`],
  [`Tara says the website is open to everyone, then narrows it to anyone who already agrees.`, `Tara dit que le site est ouvert a tout le monde, puis la restreint a ceux qui sont deja d accord.`],
  [`Kai says the rule is pure equality, then says it only makes one part more fair.`, `Kai dit que la regle est une egalite pure, puis dit qu elle rend seulement une partie plus juste.`],
  [`Jules says the idea is complete freedom, then explains it is just one permitted choice.`, `Jules dit que l idee est une liberte complete, puis explique que c est juste un choix autorise.`],
  [`Ava says the group is for the best thinkers, then says she only meant people with good ideas.`, `Ava dit que le groupe est reserve aux meilleurs penseurs, puis dit qu elle voulait seulement parler des gens qui ont de bonnes idees.`],
  [`Mina says the product is the only fair choice, then backs off to say it is merely a reasonable choice.`, `Mina dit que le produit est le seul choix juste, puis se replie en disant que c est simplement un choix raisonnable.`],
  [`Theo says the policy fixes everything, then weakens it to say it just improves one thing.`, `Theo dit que la politique resout tout, puis l affaiblit en disant qu elle ameliore juste une chose.`],
  [`Nora says the plan is perfect, then says she only meant it is fine for now.`, `Nora dit que le plan est parfait, puis dit qu elle voulait seulement dire qu il est correct pour l instant.`],
  ['Mia says the new app is completely private, then later says she only meant it does not share one piece of data.', 'Mia dit que la nouvelle application est totalement privee, puis dit plus tard qu elle voulait seulement dire qu elle ne partage pas une seule donnee.'],
  ['Leo calls the school lunch the healthiest food possible, then shrugs and says it is just healthier than yesterday.', 'Leo appelle le repas scolaire la nourriture la plus saine possible, puis hausse les epaules et dit qu il est juste plus sain qu hier.'],
  ['Nina says the neighborhood watch makes the area perfectly safe, then retreats to saying it might discourage one problem.', 'Nina dit que le groupe de surveillance rend le quartier parfaitement sur, puis se replie en disant qu il pourrait decourager un seul probleme.'],
  ['Owen says the refund policy is total honesty, then backtracks to say it only explains one fee clearly.', 'Owen dit que la politique de remboursement est une honnetete totale, puis se retracte en disant qu elle explique seulement un frais clairement.'],
  ['Priya says the new schedule gives everyone freedom, then weakens it to mean people can swap one shift.', 'Priya dit que le nouvel horaire donne a tout le monde la liberte, puis l affaiblit pour dire que les gens peuvent echanger un seul quart.'],
  ['Ben says the club is the best place for every student, then says he just meant it is good for students who join.', 'Ben dit que le club est le meilleur endroit pour tous les eleves, puis dit qu il voulait juste dire qu il est bon pour les eleves qui s inscrivent.'],
  ['Tara says the new rule solves all bullying, then says it only helps teachers notice one type of behavior.', 'Tara dit que la nouvelle regle resout tout le harcelement, puis dit qu elle aide seulement les professeurs a remarquer un type de comportement.'],
  ['Kai says the bus pass is complete freedom, then says it just saves money on rides.', 'Kai dit que l abonnement de bus est une liberte totale, puis dit qu il fait juste economiser de l argent sur les trajets.'],
  ['Jules says the chatbot gives the truth with no limits, then says it only gives quick summaries.', 'Jules dit que le chatbot donne la verite sans limite, puis dit qu il donne seulement des resumes rapides.'],
  ['Ava says the new policy is pure fairness, then says it only removes one obvious bias.', 'Ava dit que la nouvelle politique est une justice pure, puis dit qu elle supprime seulement un biais evident.'],
  ['Noah says the museum ticket makes art accessible to everyone, then narrows it to one reduced-price group.', 'Noah dit que le billet du musee rend l art accessible a tout le monde, puis le restreint a un groupe a tarif reduit.'],
  ['Mina says the software is totally secure, then backpedals to say it merely hides one setting from users.', 'Mina dit que le logiciel est totalement securise, puis se ravise en disant qu il cache seulement un parametre aux utilisateurs.'],
  ['Eli says the teacher is the kindest ever, then says he only meant the teacher helped one student.', 'Eli dit que le professeur est le plus gentil de tous, puis dit qu il voulait seulement dire que le professeur a aide un eleve.'],
  ['Rina says the plan is a miracle for every family, then says it only eases one household cost.', 'Rina dit que le plan est un miracle pour chaque famille, puis dit qu il ne reduit qu un seul cout du menage.'],
  ['Hugo says the route is the only logical choice, then says it is just the most convenient choice.', 'Hugo dit que l itineraire est le seul choix logique, puis dit qu il est juste le choix le plus pratique.'],
  ['Lina says the product is safe in every way, then says it only avoids one common defect.', 'Lina dit que le produit est sur a tous egards, puis dit qu il evite seulement un defaut courant.'],
  ['Grant says the event is for everyone, then says he only means anyone who bought a ticket early.', 'Grant dit que l evenement est pour tout le monde, puis dit qu il voulait seulement parler de ceux qui ont achete leur billet tot.'],
  ['Zoe says the law is total freedom, then says it just gives one narrow exception.', 'Zoe dit que la loi est une liberte totale, puis dit qu elle donne juste une exception etroite.'],
  ['Milo says the group is the ultimate solution, then says it just helps in one case.', 'Milo dit que le groupe est la solution ultime, puis dit qu il aide seulement dans un cas.'],
  ['Theo says the article proves the whole system is broken, then says it only highlights one flaw.', 'Theo dit que l article prouve que tout le systeme est casse, puis dit qu il ne met en lumiere qu un seul defaut.'],
  ['Pia says the game is fair for all players, then says it only avoids one unfair advantage.', 'Pia dit que le jeu est equitable pour tous les joueurs, puis dit qu il evite seulement un avantage injuste.'],
  ['Finn says the policy is fully ethical, then says it just reduces harm a little.', 'Finn dit que la politique est entierement ethique, puis dit qu elle reduit juste un peu le mal.'],
  ['Maya says the cafe serves the best coffee in town, then says she only meant it has one good blend.', 'Maya dit que le cafe sert le meilleur cafe de la ville, puis dit qu elle voulait seulement dire qu il a un bon melange.'],
  ['Sam says the refund is complete justice, then says it just corrects one mistake.', 'Sam dit que le remboursement est une justice complete, puis dit qu il corrige juste une erreur.'],
  ['Juno says the housing plan ends the crisis, then says it only helps a few tenants.', 'Juno dit que le plan de logement met fin a la crise, puis dit qu il aide seulement quelques locataires.'],
  ['Iris says the school program is pure equality, then says it just gives one extra chance.', 'Iris dit que le programme scolaire est une egalite pure, puis dit qu il donne juste une chance de plus.'],
  ['Cole says the gym membership is complete freedom, then says it only lets people cancel once a month.', 'Cole dit que l abonnement de gym est une liberte complete, puis dit qu il permet seulement d annuler une fois par mois.'],
  ['Nora says the customer service line is perfect, then says it is just not as bad as the old one.', 'Nora dit que le service client est parfait, puis dit qu il est juste moins mauvais que l ancien.'],
  ['Ari says the policy is the answer to every complaint, then says it only answers one complaint type.', 'Ari dit que la politique est la reponse a toutes les plaintes, puis dit qu elle ne repond qu a un seul type de plainte.'],
  ['Rita says the apartment is ideal for everyone, then says it only suits people who want a short commute.', 'Rita dit que l appartement est ideal pour tout le monde, puis dit qu il convient seulement aux personnes qui veulent un trajet court.'],
  ['Tia says the proposal is the most moral choice, then says it just avoids one bad outcome.', 'Tia dit que la proposition est le choix le plus moral, puis dit qu elle evite seulement un mauvais resultat.'],
  ['Oli says the new phone is totally private, then says it just keeps one app from tracking location.', 'Oli dit que le nouveau telephone est totalement prive, puis dit qu il empeche juste une application de suivre la position.'],
  ['Lara says the neighborhood festival is for everyone, then says she only meant anyone who lives nearby.', 'Lara dit que la fete du quartier est pour tout le monde, puis dit qu elle voulait seulement dire les personnes qui habitent tout pres.'],
  ['Ben says the training is completely fair, then says it simply gives beginners a little help.', 'Ben dit que la formation est totalement equitable, puis dit qu elle donne simplement un peu d aide aux debutants.'],
  ['Mina says the app is the best solution ever, then says it only fixes one annoyance.', 'Mina dit que l application est la meilleure solution de tous les temps, puis dit qu elle corrige seulement une irritation.'],
  ['Drew says the new contract guarantees honesty, then says it just clarifies one clause.', 'Drew dit que le nouveau contrat garantit l honnetete, puis dit qu il clarifie juste une clause.'],
  ['Jade says the policy gives complete control to citizens, then says it only adds one vote.', 'Jade dit que la politique donne un controle total aux citoyens, puis dit qu elle ajoute seulement un vote.'],
  ['Owen says the restaurant is the healthiest choice, then says it just uses less oil.', 'Owen dit que le restaurant est le choix le plus sain, puis dit qu il utilise juste moins d huile.'],
  ['Mila says the new schedule is perfect for everyone, then says it merely avoids one conflict.', 'Mila dit que le nouvel horaire est parfait pour tout le monde, puis dit qu il evite seulement un conflit.'],
  ['Evan says the campaign solves all fairness issues, then says it only improves one hiring step.', 'Evan dit que la campagne regle tous les problemes d equite, puis dit qu elle ameliore seulement une etape d embauche.'],
  ['Kira says the small business loan is a miracle, then says it only covers one month of rent.', 'Kira dit que le pret pour petite entreprise est un miracle, puis dit qu il couvre seulement un mois de loyer.'],
  ['Grant says the rule is complete safety, then says it just adds one warning label.', 'Grant dit que la regle est une securite complete, puis dit qu elle ajoute juste une etiquette d avertissement.'],
];

const OPTIONS_EN = ['Motte-and-Bailey', 'Loaded Question', 'Equivocation', 'Appeal to Popularity'];
const OPTIONS_FR = ['Motte castrale', 'Question piège', 'Équivoque', 'Appel à la popularité'];

function rotatedOptions(options: string[], correctIndex: number): string[] {
  const distractors = options.slice(1);
  const result = [...distractors];
  result.splice(correctIndex, 0, options[0]);
  return result;
}

function subLevelFor(index: number): SubLevel {
  if (index < 43) return SubLevel.BEGINNER;
  if (index < 50) return SubLevel.INTERMEDIATE;
  return SubLevel.EXPERT;
}

function createQuestions(language: 'en' | 'fr'): Question[] {
  return SCENARIOS.map(([english, french], index) => {
    const correctIndex = index % 4;
    const isFrench = language === 'fr';
    return {
      id: 39101 + index,
      level: 8,
      persona_stage: PersonaStage.SHARK,
      concept: isFrench ? 'Motte castrale' : 'Motte-and-Bailey',
      difficulty: index < 43 ? 1 : index < 50 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? "La personne defend d abord une version large et impressionnante, puis se replie sur une version plus faible quand elle est contestee."
        : 'The person first defends a broad, impressive claim, then retreats to a weaker one when challenged.',
      detailedExplanationBeginner: isFrench
        ? "La grande revendication devient petite quand on la critique."
        : 'The big claim shrinks when it is challenged.',
      detailedExplanationIntermediate: isFrench
        ? "Le motte-and-bailey alterne entre une position facile a defender et une position plus ambitieuse qu on ne peut pas soutenir de la meme facon."
        : 'Motte-and-bailey switches between an easy-to-defend position and a more ambitious one that cannot be defended the same way.',
      detailedExplanationExpert: isFrench
        ? "Le sophisme repose sur un glissement strategique entre le motte, version faible et securisee, et le bailey, version forte et controversée, afin de conserver l avantage rhetorique sans en payer le prix argumentatif."
        : 'The fallacy depends on a strategic shift between the motte, the weak and defensible version, and the bailey, the strong and controversial version, so the speaker keeps the rhetorical advantage without paying the argumentative cost.',
      questionFormat: 'standard',
    };
  });
}

export const MOTTE_AND_BAILEY_EXPANSION_EN: Question[] = createQuestions('en');
export const MOTTE_AND_BAILEY_EXPANSION_FR: Question[] = createQuestions('fr');
