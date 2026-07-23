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
