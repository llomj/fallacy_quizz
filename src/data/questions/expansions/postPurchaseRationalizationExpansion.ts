import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya buys an expensive blender and then insists it was the smartest choice she could have made.', 'Maya achète un mixeur coûteux puis insiste pour dire que c était le choix le plus malin possible.'],
  ['Leo gets a pricey jacket and immediately starts praising its "perfect" quality.', 'Leo achète une veste chère et commence aussitôt à vanter sa qualité "parfaite".'],
  ['Priya picks the blue notebook and later says the blue one was clearly better than the others.', 'Priya choisit le carnet bleu et dit plus tard que le bleu était clairement meilleur que les autres.'],
  ['Omar buys a new phone and keeps telling people it is much faster than his old one, even before checking.', 'Omar achète un nouveau téléphone et répète à tout le monde qu il est bien plus rapide que l ancien, avant même de vérifier.'],
  ['Rina gets a trendy lamp and says the room was dull until she bought it.', 'Rina prend une lampe tendance et dit que la pièce était terne jusqu à ce qu elle l achète.'],
  ['Ben buys a gym membership and talks himself into thinking he will use it every week.', 'Ben achète un abonnement à la salle et se convainc qu il l utilisera chaque semaine.'],
  ['Zoe chooses the expensive coffee maker and later says the cheaper ones were obviously worse.', 'Zoé choisit la machine à café chère et dit plus tard que les moins chères étaient évidemment moins bonnes.'],
  ['Kai buys shoes that hurt a little and then says they are breaking in beautifully.', 'Kai achète des chaussures qui font un peu mal et dit ensuite qu elles se font très bien.'],
  ['Nora buys a fancy planner and decides it will fix her whole life.', 'Nora achète un agenda chic et décide qu il va corriger toute sa vie.'],
  ['Eli picks the premium app and keeps telling friends the free version was unusable.', 'Eli choisit l application premium et dit sans cesse à ses amis que la version gratuite était inutilisable.'],
  ['Lina buys a patterned mug and says it makes every morning feel better.', 'Lina achète une tasse à motif et dit qu elle rend chaque matin meilleur.'],
  ['Grant gets a new backpack and starts describing the old one as terrible.', 'Grant prend un nouveau sac à dos et commence à décrire l ancien comme horrible.'],
  ['Tia buys concert tickets and later says the price was worth it for the experience.', 'Tia achète des billets de concert et dit plus tard que le prix valait l expérience.'],
  ['Noah buys a fancy pen and insists his notes look much more professional now.', 'Noah achète un stylo chic et insiste pour dire que ses notes ont l air beaucoup plus professionnelles maintenant.'],
  ['Mia chooses the seat cushion and then says sitting without it would have been a mistake.', 'Mia choisit le coussin de siège et dit ensuite qu elle aurait eu tort de s en passer.'],
  ['Jules gets a smartwatch and quickly explains why it is essential for his routine.', 'Jules achète une montre connectée et explique vite pourquoi elle est indispensable à sa routine.'],
  ['Ava buys a premium water bottle and calls it life-changing after one day.', 'Ava achète une gourde premium et l appelle transformatrice après une seule journée.'],
  ['Finn picks the red mug and later says the red mug is the one with personality.', 'Finn choisit la tasse rouge et dit plus tard que la tasse rouge est celle qui a de la personnalité.'],
  ['Mina buys a concert poster and tells everyone it was the best decoration choice.', 'Mina achète une affiche de concert et dit à tout le monde que c était le meilleur choix de décoration.'],
  ['Theo gets a new keyboard and says typing feels better because he made the upgrade.', 'Théo achète un nouveau clavier et dit que taper est plus agréable parce qu il a fait la mise à niveau.'],
  ['Juno buys a travel pillow and starts saying all flights are easier with it.', 'Juno achète un coussin de voyage et commence à dire que tous les vols sont plus faciles avec lui.'],
  ['Iris buys the darker curtains and then says the room was clearly too bright before.', 'Iris achète des rideaux plus sombres puis dit que la pièce était clairement trop lumineuse avant.'],
  ['Cole chooses a costlier lunch box and says the cheaper ones were flimsy junk.', 'Cole choisit une boîte à lunch plus chère et dit que les moins chères étaient de la camelote fragile.'],
  ['Riley buys a new chair and says his back pain is basically gone because of the upgrade.', 'Riley achète une nouvelle chaise et dit que son mal de dos a presque disparu grâce à la mise à niveau.'],
  ['Pia gets a subscription box and immediately says the monthly surprises are worth it.', 'Pia prend une box par abonnement et dit aussitôt que les surprises mensuelles en valent la peine.'],
  ['Hugo buys a better umbrella and says the old one was never really acceptable.', 'Hugo achète un meilleur parapluie et dit que l ancien n était en réalité jamais acceptable.'],
  ['Sam gets a plant he has to keep alive and calls it the best desk purchase ever.', 'Sam achète une plante qu il doit garder en vie et l appelle le meilleur achat de bureau jamais fait.'],
  ['Jade buys an expensive backpack and says cheaper bags would have fallen apart immediately.', 'Jade achète un sac à dos coûteux et dit que les sacs moins chers se seraient effondrés immédiatement.'],
  ['Owen chooses the upgraded headphones and then claims the old pair had no depth at all.', 'Owen choisit les écouteurs améliorés et affirme ensuite que l ancienne paire n avait aucune profondeur.'],
  ['Lea buys a nicer notebook and says the old one was too basic to be useful.', 'Léa achète un carnet plus joli et dit que l ancien était trop basique pour être utile.'],
  ['Maya gets a new desk lamp and says the room feels smarter now.', 'Maya prend une nouvelle lampe de bureau et dit que la pièce paraît plus intelligente maintenant.'],
  ['Ben buys a charger that was on sale and decides it must be as good as the expensive one.', 'Ben achète un chargeur en promotion et décide qu il doit être aussi bon que le modèle cher.'],
  ['Ava picks the deluxe lunch bag and explains why the cheaper one would have been a regret.', 'Ava choisit le sac repas deluxe et explique pourquoi le modèle moins cher aurait été un regret.'],
  ['Omar buys a ticket to a workshop and later says the workshop must be valuable because he paid for it.', 'Omar achète un billet pour un atelier et dit plus tard que l atelier doit être précieux parce qu il a payé.'],
  ['Nina gets a fancy candle and says it makes the whole apartment feel more intentional.', 'Nina prend une bougie chic et dit qu elle rend tout l appartement plus soigné.'],
  ['Eli chooses the premium notebook and says the cheaper one would have looked childish.', 'Eli choisit le carnet premium et dit que le moins cher aurait eu l air enfantin.'],
  ['Lina buys a nicer lunch container and says the old one was embarrassing.', 'Lina achète un meilleur contenant pour le déjeuner et dit que l ancien était embarrassant.'],
  ['Grant gets an upgrade to his keyboard and insists he types cleaner because of it.', 'Grant améliore son clavier et insiste pour dire qu il tape plus proprement grâce à lui.'],
  ['Tia buys the more expensive soap and later says the bargain soap must be inferior.', 'Tia achète le savon plus cher et dit plus tard que le savon bon marché doit être inférieur.'],
  ['Finn buys a matte phone case and says it was obviously the stylish choice.', 'Finn achète une coque mate et dit que c était évidemment le choix stylé.'],
  ['Mina chooses a higher-priced notebook and starts justifying it as a productivity tool.', 'Mina choisit un carnet plus cher et commence à le justifier comme un outil de productivité.'],
  ['Theo buys a new apron and says cooking now feels more serious.', 'Théo achète un nouvel tablier et dit que cuisiner paraît maintenant plus sérieux.'],
  ['Juno picks the premium seat on the bus app and says the extra cost is a tiny price for comfort.', 'Juno choisit le siège premium sur l appli de bus et dit que le supplément est un petit prix pour le confort.'],
  ['Iris buys a polished notebook and tells herself the project will look better because of it.', 'Iris achète un carnet soigné et se dit que le projet aura meilleure allure grâce à lui.'],
  ['Cole gets the deluxe lunch kit and says it will make his workday more organized.', 'Cole prend le kit déjeuner deluxe et dit qu il rendra sa journée de travail plus organisée.'],
  ['Riley buys an extra fancy pen and says it was worth every cent because it feels premium.', 'Riley achète un stylo très chic et dit qu il valait chaque centime parce qu il est premium.'],
  ['Pia chooses a branded tote and says the no-name bag was never a real option.', 'Pia choisit un tote de marque et dit que le sac sans marque n a jamais été une vraie option.'],
  ['Hugo buys an expensive notebook and calls the purchase a necessary upgrade.', 'Hugo achète un carnet coûteux et appelle cet achat une mise à niveau nécessaire.'],
  ['Sam gets a sleek lunch box and says he would never go back to the old one.', 'Sam achète une boîte à lunch élégante et dit qu il ne reviendrait jamais à l ancienne.'],
  ['Jade buys a nicer mouse pad and says the desk finally feels complete.', 'Jade achète un tapis de souris plus joli et dit que le bureau semble enfin complet.'],
  ['Maya chooses the premium version of a tool and says the free one would have slowed her down.', 'Maya choisit la version premium d un outil et dit que la version gratuite l aurait ralentie.'],
];

const OPTIONS_EN = ['Post-Purchase Rationalization', 'Choice-Supportive Bias', 'Sunk Cost Fallacy', 'Confirmation Bias'];
const OPTIONS_FR = ['Rationalisation après achat', 'Biais de soutien au choix', 'Sophisme des coûts irrécupérables', 'Biais de confirmation'];

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
      id: 37951 + index,
      level: 5,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? 'Rationalisation après achat' : 'Post-Purchase Rationalization',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'Après avoir choisi ou acheté quelque chose, la personne le rend mentalement meilleur pour se sentir plus cohérente.'
        : 'After choosing or buying something, the person mentally upgrades it to feel more consistent with their decision.',
      detailedExplanationBeginner: isFrench
        ? 'Le choix est embelli après coup.'
        : 'The choice is made to look better after the fact.',
      detailedExplanationIntermediate: isFrench
        ? 'La rationalisation après achat apparaît quand on réécrit mentalement la valeur d un achat pour réduire le doute ou le regret.'
        : 'Post-purchase rationalization appears when someone mentally rewrites the value of a purchase to reduce doubt or regret.',
      detailedExplanationExpert: isFrench
        ? "Ce biais protège l ego après une décision coûteuse. Plutôt que de reconnaître un mauvais achat ou une préférence faible, la personne accentue les points positifs, minimise les défauts et invente des raisons supplémentaires pour justifier le choix. Cela peut aider à éviter le regret, mais cela fausse aussi l évaluation réelle des options."
        : 'This bias protects the ego after a costly decision. Instead of admitting a poor purchase or weak preference, the person emphasizes positives, minimizes flaws, and invents extra reasons to justify the choice. It can reduce regret, but it also distorts the real evaluation of options.',
      questionFormat: 'standard',
    };
  });
}

export const POST_PURCHASE_RATIONALIZATION_EXPANSION_EN: Question[] = createQuestions('en');
export const POST_PURCHASE_RATIONALIZATION_EXPANSION_FR: Question[] = createQuestions('fr');
