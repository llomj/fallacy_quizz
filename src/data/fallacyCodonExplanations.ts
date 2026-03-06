/**
 * Fallacy codon explanations: beginner, intermediate, and expert in-depth
 * descriptions for each fallacy. Used when the question's detailed explanation
 * is a generic placeholder. Keys match correct-option strings as they appear
 * in the question bank (e.g. "Ad Hominem", "Appeal to Authority").
 * EN and FR must stay in structural parity (same sections, same depth).
 */

export type FallacyCodonLevel = 'beginner' | 'intermediate' | 'expert';

export interface FallacyCodonEntry {
  beginner: string;
  intermediate: string;
  expert: string;
}

/** Placeholder text that indicates we should use the fallacy lookup instead. */
export const FALLACY_PLACEHOLDER_PATTERNS = [
  'Relevance failure in premise',
  'Informal Logic - Relevance failure',
  'Logical Fallacies - Informal Logic',
  'Social & Institutional Behaviors - Informal Logic',
  'Rhetorical/Discourse Tactics - Informal Logic',
  'Cognitive Biases - Informal Logic',
];

export function isFallacyPlaceholder(text: string | undefined): boolean {
  if (!text || !text.trim()) return false;
  const t = text.trim();
  return FALLACY_PLACEHOLDER_PATTERNS.some((p) => t.includes(p));
}

const FALLACY_CODON_EN: Record<string, FallacyCodonEntry> = {
  'Ad Hominem': {
    beginner:
      'Ad hominem means "against the person." The speaker attacks the person making the argument (their character, job, past, or habits) instead of replying to the argument itself. The argument might be good or bad regardless of who said it.',
    intermediate:
      'Ad hominem is an informal fallacy of relevance: the premise (something about the person) does not support the conclusion (that their claim is false). Criticizing someone\'s character, credentials, or behavior does not logically show that their reasoning is wrong. To evaluate an argument, you must look at the reasons and evidence offered, not at who is speaking.',
    expert:
      'Ad hominem (argumentum ad hominem) is a relevance fallacy. The argument has the form: "Person P has trait T; therefore P\'s claim C is false." The premise is irrelevant to the truth of C—character and circumstances do not entail the falsity of a proposition. Variants include abusive (direct insult), circumstantial (motive/interest), and tu quoque (you too). Proper critique requires engaging with the argument\'s structure and evidence. Distinguish from legitimate appeals to expertise when the person\'s credibility is genuinely relevant (e.g., testimony).',
  },
  'Appeal to Authority': {
    beginner:
      'The speaker uses someone famous or in charge as proof that a claim is true. But being famous or having a title does not make them an expert on that topic. We need real evidence, not just a name.',
    intermediate:
      'Appeal to authority becomes fallacious when the authority is not a relevant expert on the subject, or when we treat their opinion as if it were proof. A psychologist is not an authority on hot tubs; a religious leader is not an authority on physics. Even real experts can be wrong, so authority supports a claim only when the domain and the evidence are appropriate.',
    expert:
      'Argumentum ad verecundiam: using an authority\'s say-so as evidence for a claim. Fallacious when (1) the authority is not an expert in the relevant domain, (2) the claim is outside their expertise, (3) experts in the field disagree and the appeal ignores that, or (4) the authority is treated as infallible. Legitimate use of authority requires relevance of domain, consensus or cited evidence, and absence of conflict of interest. Distinguish from appropriate deference to expertise in testimony and peer-reviewed research.',
  },
  'Appeal to Popularity': {
    beginner:
      'The speaker says something must be true or good because many people believe it or do it. But lots of people can be wrong. Popularity is not the same as evidence.',
    intermediate:
      'Appeal to popularity (ad populum) treats the fact that many people believe or do X as evidence that X is true or right. Beliefs and behavior can be widespread and still false or harmful. To support a claim, we need reasons and evidence, not head counts. This fallacy is common in advertising and social pressure.',
    expert:
      'Argumentum ad populum: inferring the truth or acceptability of a claim from its widespread acceptance. The premise "many people believe P" does not entail P; consensus can be mistaken (e.g., historical false beliefs). Variants include bandwagon (everyone does it), snob appeal (elite do it), and appeal to tradition (we\'ve always done it). Epistemic justification requires evidence and reasoning, not mere social proof. Distinguish from legitimate uses of consensus in practical coordination or when consensus reflects aggregated expertise.',
  },
  'Appeal to Tradition': {
    beginner:
      'The speaker says we should keep doing something because we have always done it that way. But being old or traditional does not make something right or best. We need reasons, not just habit.',
    intermediate:
      'Appeal to tradition treats the age or longevity of a practice as a reason to keep it. Tradition can carry wisdom, but it does not by itself justify a practice; we need to look at the evidence and consequences. Societies have traditionally held many beliefs we now reject. Progress often requires questioning tradition.',
    expert:
      'Argumentum ad antiquitatem: justifying a practice or belief by its historical continuity. The premise "we have always done P" does not entail "P is correct or optimal." Tradition may encode useful norms but can also preserve error, injustice, or inefficiency. Critical evaluation requires assessing the practice on its merits. Distinguish from legitimate appeals to precedent in law or to accumulated practical knowledge when accompanied by reasons.',
  },
  'Appeal to Novelty': {
    beginner:
      'The speaker says something must be better or true just because it is new or modern. New is not always better. We need to look at what actually works, not just what is latest.',
    intermediate:
      'Appeal to novelty (antiquity\'s mirror) treats newness as a reason to prefer a product, idea, or practice. Innovation can be valuable, but novelty alone does not establish superiority. Many new things fail; many old things remain sound. Evaluate claims and options on their merits, not on when they appeared.',
    expert:
      'Argumentum ad novitatem: inferring that something is better or true because it is recent or novel. The premise "X is new" does not entail "X is superior or correct." Chronology is irrelevant to truth or value without further argument. Common in marketing and tech culture. Distinguish from legitimate preference for newer evidence or updated methods when supported by comparative reasoning.',
  },
  'Straw Man': {
    beginner:
      'The speaker changes or exaggerates the other person\'s view to make it easier to attack. They knock down a fake, weaker version instead of the real argument.',
    intermediate:
      'Straw man is a misrepresentation fallacy: you replace the opponent\'s actual position with a distorted, weaker, or extreme version, then refute that. The real argument is left untouched. Good criticism requires engaging with the strongest version of the other view (principle of charity).',
    expert:
      'Straw man: refuting a distorted or exaggerated version of an opponent\'s position instead of their actual claim. Violates the principle of charity (interpret others\' arguments in their strongest form). The refutation is irrelevant to the original argument. Variants include hollow man (inventing a view no one holds), steelman (opposite—strengthening the view). Essential in dialectic: attack the actual premises and structure, not a caricature.',
  },
  'False Dilemma': {
    beginner:
      'The speaker says there are only two choices (e.g. "either X or Y") when there are actually more options. Often one option is made to look bad so you feel forced to pick the other.',
    intermediate:
      'False dilemma (false dichotomy, either-or fallacy) presents a limited set of options as if they were exhaustive. In reality, there may be middle grounds, alternatives, or combined options. The arguer often makes one option unattractive to push you toward the other. Look for excluded middle or hidden alternatives.',
    expert:
      'False dilemma / false dichotomy: restricting the set of options to two (or few) when more exist. Form: "Either A or B; not A; therefore B." Fallacious when A and B are not exhaustive (there are C, D, ...). Related: the perfectionist fallacy (reject X because X is not perfect). Distinguish from genuine dichotomies (e.g., true/false when the law of excluded middle applies). Critical response: identify the missing options or the continuum between the presented poles.',
  },
  'Red Herring': {
    beginner:
      'The speaker brings up a different, often emotional or distracting topic instead of answering the original point. The real issue gets lost.',
    intermediate:
      'Red herring is a relevance fallacy: introducing a side issue that diverts attention from the original claim or argument. The new topic may be interesting or emotionally charged but does not address the question. To stay on track, keep the original issue in focus and ask how the reply supports or refutes it.',
    expert:
      'Red herring: introducing an irrelevant topic that diverts the discussion from the original issue. The premise may be true but is not relevant to the conclusion. Distinct from ignoratio elenchi (missing the point) in that the diversion is deliberate or negligent. Dialectical failure: the burden of proof or the thesis is shifted. Analyze by restating the original claim and checking whether the response bears on it.',
  },
  'Slippery Slope': {
    beginner:
      'The speaker says one small step will lead to a chain of bad results, without showing why each step must happen. They jump from "we do A" to "then disaster" without proof.',
    intermediate:
      'Slippery slope argues that a first step will inevitably lead to extreme consequences. The fallacy is that the links in the chain are not justified: each step needs a reason. Sometimes slopes are real (precedent, norms); often they are speculative. Ask for the mechanism that makes each step necessary.',
    expert:
      'Slippery slope: claiming that allowing A will necessarily lead to B, then C, then unacceptable Z, without adequate justification for the causal or normative links. The argument often relies on vague fear rather than showing that each transition is likely or inevitable. Distinguish from valid sorites-style reasoning when stepwise conditionals are established. Critical response: demand evidence for each link and consider whether the slope is empirical or conceptual.',
  },
  'Hasty Generalization': {
    beginner:
      'The speaker draws a big conclusion from too few examples or from examples that are not typical. One or a few cases do not prove a rule for everyone or everything.',
    intermediate:
      'Hasty generalization (converse accident) infers a general claim from insufficient or unrepresentative samples. The sample may be too small, biased, or not diverse enough. Statistical and scientific reasoning require appropriate sample size and representativeness. Be wary of "I know someone who..." or "this one case shows..." as proof of a general claim.',
    expert:
      'Hasty generalization: inferring a general proposition from a sample that is too small, unrepresentative, or biased. Violates principles of inductive reasoning: sample size, randomness, and diversity matter. Related: selection bias, anecdotal evidence, and the exception that proves the rule (misused). Distinguish from legitimate generalization when the sample is adequate and the inference is appropriately qualified.',
  },
  'Post hoc (after this, therefore because of this)': {
    beginner:
      'The speaker thinks that because one thing happened after another, the first must have caused the second. But order in time does not prove cause. Other factors might be responsible.',
    intermediate:
      'Post hoc ergo propter hoc: inferring that A caused B merely because A preceded B. Temporal sequence is necessary for causation but not sufficient. Confounding variables, coincidence, and reverse causation can explain the correlation. Causal claims require controlled evidence or well-supported causal mechanisms.',
    expert:
      'Post hoc ergo propter hoc: inferring causation from temporal succession alone. The premise "A occurred before B" does not entail "A caused B." Causal reasoning requires controlling for confounds, considering alternative explanations, and (ideally) mechanisms or experiments. Related: cum hoc (correlation conflated with causation), regression fallacy. Distinguish from legitimate causal inference when supported by evidence beyond sequence.',
  },
  'Equivocation': {
    beginner:
      'The speaker uses the same word in two different meanings in one argument. The word sounds like one idea but secretly switches to another, so the argument seems to work when it does not.',
    intermediate:
      'Equivocation occurs when a key term is used in two different senses in the same argument, so that the conclusion appears to follow but the shift in meaning does the work. Clear reasoning requires that terms keep a single, consistent meaning throughout. Identify the ambiguous word and clarify which sense is used in each premise.',
    expert:
      'Equivocation: using a term in two or more senses in an argument while treating it as univocal. Form: "A is F (sense 1). F things are G (sense 2). Therefore A is G." The syllogism is invalid because the middle term is not used in the same sense. Fallacy of ambiguity. Resolution: disambiguate and restate; the argument will either become invalid or require a premise that is false or unjustified.',
  },
  'Cum hoc': {
    beginner:
      'The speaker treats two things that happen together as if one must cause the other. But just because two things go together does not mean one causes the other; there might be a common cause, or it might be coincidence.',
    intermediate:
      'Cum hoc (with this, therefore because of this) confuses correlation with causation. Two events or traits may be associated without one causing the other: third factors, reverse causation, or chance can explain the link. Causal claims need more than co-occurrence—they need a mechanism or controlled evidence.',
    expert:
      'Cum hoc ergo propter hoc: inferring causation from correlation alone. The premise "A and B occur together" does not entail "A causes B" or "B causes A." Confounds (common cause, selection bias), reverse causation, and coincidence can produce spurious correlation. Controlled studies, temporal order, and mechanistic reasoning are needed for causal inference. Related: post hoc (temporal order mistaken for cause), Simpson\'s paradox.',
  },
  'No fallacy': {
    beginner:
      'Sometimes an argument is logically okay even if we disagree with the conclusion. The speaker gave reasons that support their claim. "No fallacy" means the reasoning is acceptable, not that the conclusion is true.',
    intermediate:
      '"No fallacy" indicates that the argument does not commit a clear logical error: the premises are relevant, the structure is valid or inductively reasonable, and there is no obvious rhetorical trick. The conclusion may still be false if the premises are false or the inference is weak. Distinguish "bad argument" from "fallacious argument."',
    expert:
      '"No fallacy" (or "no relevant fallacy") means the argument does not exhibit a recognized fallacy type. The reasoning may be valid (deductive) or cogent (inductive), and premises may be relevant. The conclusion can still be false—soundness and truth require true premises. In multiple-fallacy contexts, "no fallacy" may mean no single dominant fallacy, or that the argument is acceptable. Avoid the fallacy fallacy: rejecting a conclusion solely because the argument is bad.',
  },
};

const FALLACY_CODON_FR: Record<string, FallacyCodonEntry> = {
  'Ad Hominem': {
    beginner:
      "L'ad hominem signifie « contre la personne ». L'orateur attaque la personne qui avance l'argument (son caractère, son emploi, son passé ou ses habitudes) au lieu de répondre à l'argument lui-même. L'argument peut être bon ou mauvais indépendamment de qui le dit.",
    intermediate:
      "L'ad hominem est un sophisme informel de pertinence : la prémisse (quelque chose sur la personne) ne soutient pas la conclusion (que son affirmation est fausse). Critiquer le caractère, les diplômes ou le comportement de quelqu'un ne montre pas logiquement que son raisonnement est faux. Pour évaluer un argument, il faut examiner les raisons et les preuves avancées, pas qui parle.",
    expert:
      "L'argumentum ad hominem est un sophisme de pertinence. La forme est : « La personne P a le trait T ; donc la thèse C de P est fausse. » La prémisse est non pertinente pour la vérité de C — le caractère et les circonstances n'impliquent pas la fausseté d'une proposition. Variantes : abusif (insulte directe), circonstanciel (mobile/intérêt), tu quoque (toi aussi). Une critique correcte exige d'engager la structure et les preuves de l'argument. Distinguer des appels légitimes à l'expertise quand la crédibilité est pertinente (témoignage).",
  },
  'Appeal to Authority': {
    beginner:
      "L'orateur invoque une personne célèbre ou en position d'autorité comme preuve qu'une affirmation est vraie. Mais être célèbre ou avoir un titre ne fait pas d'eux un expert sur ce sujet. Il faut des preuves réelles, pas seulement un nom.",
    intermediate:
      "L'appel à l'autorité devient fallacieux quand l'autorité n'est pas une experte pertinente sur le sujet, ou quand on traite son avis comme une preuve. Un psychologue n'est pas une autorité sur les spas ; un leader religieux n'est pas une autorité en physique. Même les vrais experts peuvent se tromper ; l'autorité ne soutient une thèse que lorsque le domaine et les preuves sont appropriés.",
    expert:
      "Argumentum ad verecundiam : utiliser le dire d'une autorité comme preuve d'une affirmation. Fallacieux quand (1) l'autorité n'est pas experte dans le domaine pertinent, (2) l'affirmation sort de son expertise, (3) les experts du domaine divergent et l'appel l'ignore, ou (4) l'autorité est traitée comme infaillible. Un usage légitime de l'autorité exige la pertinence du domaine, le consensus ou des preuves citées, et l'absence de conflit d'intérêt. Distinguer du recours approprié à l'expertise dans le témoignage et la recherche.",
  },
  'Appeal to Popularity': {
    beginner:
      "L'orateur dit qu'une chose doit être vraie ou bonne parce que beaucoup de gens y croient ou la font. Mais beaucoup de gens peuvent se tromper. La popularité n'est pas une preuve.",
    intermediate:
      "L'appel à la popularité (ad populum) traite le fait que beaucoup de gens croient ou font X comme preuve que X est vrai ou juste. Les croyances et les comportements peuvent être répandus et pourtant faux ou nuisibles. Pour soutenir une affirmation, il faut des raisons et des preuves, pas des comptages. Ce sophisme est courant en publicité et dans la pression sociale.",
    expert:
      "Argumentum ad populum : inférer la vérité ou l'acceptabilité d'une affirmation à partir de son acceptation généralisée. La prémisse « beaucoup de gens croient P » n'implique pas P ; le consensus peut être erroné. Variantes : effet de mode, snob, appel à la tradition. La justification épistémique exige des preuves et un raisonnement, pas seulement une preuve sociale. Distinguer des usages légitimes du consensus dans la coordination pratique ou quand le consensus reflète une expertise agrégée.",
  },
  'Appeal to Tradition': {
    beginner:
      "L'orateur dit qu'il faut continuer à faire quelque chose parce qu'on l'a toujours fait ainsi. Mais être ancien ou traditionnel ne rend pas une chose juste ou meilleure. Il faut des raisons, pas seulement l'habitude.",
    intermediate:
      "L'appel à la tradition traite l'ancienneté d'une pratique comme une raison de la conserver. La tradition peut porter une sagesse, mais elle ne justifie pas à elle seule une pratique ; il faut examiner les preuves et les conséquences. Les sociétés ont traditionnellement tenu des croyances que nous rejetons aujourd'hui. Le progrès exige souvent de questionner la tradition.",
    expert:
      "Argumentum ad antiquitatem : justifier une pratique ou une croyance par sa continuité historique. La prémisse « nous avons toujours fait P » n'implique pas « P est correct ou optimal ». La tradition peut encoder des normes utiles mais aussi préserver l'erreur, l'injustice ou l'inefficacité. L'évaluation critique exige d'apprécier la pratique sur ses mérites. Distinguer des appels légitimes au précédent en droit ou au savoir pratique accumulé quand des raisons sont données.",
  },
  'Appeal to Novelty': {
    beginner:
      "L'orateur dit qu'une chose doit être meilleure ou vraie simplement parce qu'elle est nouvelle ou moderne. Nouveau n'est pas toujours mieux. Il faut regarder ce qui fonctionne vraiment, pas seulement ce qui est le plus récent.",
    intermediate:
      "L'appel à la nouveauté (miroir de l'antiquité) traite la nouveauté comme une raison de préférer un produit, une idée ou une pratique. L'innovation peut être précieuse, mais la nouveauté seule n'établit pas la supériorité. Beaucoup de choses nouvelles échouent ; beaucoup d'anciennes restent valables. Évaluez les affirmations et les options sur leurs mérites, pas sur leur date d'apparition.",
    expert:
      "Argumentum ad novitatem : inférer qu'une chose est meilleure ou vraie parce qu'elle est récente ou nouvelle. La prémisse « X est nouveau » n'implique pas « X est supérieur ou correct ». La chronologie est non pertinente pour la vérité ou la valeur sans argument supplémentaire. Courant en marketing et dans la culture tech. Distinguer de la préférence légitime pour des preuves plus récentes ou des méthodes mises à jour quand un raisonnement comparatif les soutient.",
  },
  'Straw Man': {
    beginner:
      "L'orateur modifie ou exagère la position de l'autre pour la rendre plus facile à attaquer. Il renverse une version fausse et affaiblie au lieu du vrai argument.",
    intermediate:
      "L'homme de paille est un sophisme de déformation : on remplace la position réelle de l'adversaire par une version déformée, plus faible ou extrême, puis on réfute celle-ci. L'argument réel reste intact. Une bonne critique exige d'engager la version la plus forte de l'autre position (principe de charité).",
    expert:
      "Homme de paille : réfuter une version déformée ou exagérée de la position de l'adversaire au lieu de sa thèse réelle. Viole le principe de charité (interpréter les arguments d'autrui dans leur forme la plus forte). La réfutation est non pertinente pour l'argument original. Variantes : homme creux (inventer une position que personne ne tient), steelman (renforcer la position). Essentiel en dialectique : attaquer les prémisses et la structure réelles, pas une caricature.",
  },
  'False Dilemma': {
    beginner:
      "L'orateur prétend qu'il n'y a que deux choix (par ex. « soit X soit Y ») alors qu'il en existe d'autres. Souvent une option est présentée comme mauvaise pour forcer le choix de l'autre.",
    intermediate:
      "La fausse dichotomie (dilemme fallacieux) présente un ensemble limité d'options comme si elles étaient exhaustives. En réalité, il peut y avoir des positions intermédiaires, des alternatives ou des combinaisons. L'orateur rend souvent une option peu attrayante pour pousser vers l'autre. Cherchez le tiers exclu ou les alternatives cachées.",
    expert:
      "Fausse dichotomie : restreindre les options à deux (ou peu) alors qu'il en existe davantage. Forme : « Soit A soit B ; pas A ; donc B. » Fallacieux quand A et B ne sont pas exhaustifs (il existe C, D, ...). Lié : le sophisme du perfectionniste (rejeter X parce que X n'est pas parfait). Distinguer des vraies dichotomies (vrai/faux quand le tiers exclu s'applique). Réponse critique : identifier les options manquantes ou le continuum entre les pôles présentés.",
  },
  'Red Herring': {
    beginner:
      "L'orateur introduit un autre sujet, souvent émotionnel ou distracteur, au lieu de répondre au point initial. La vraie question est perdue de vue.",
    intermediate:
      "Le contre-feu (red herring) est un sophisme de pertinence : introduire une question secondaire qui détourne l'attention de la thèse ou de l'argument d'origine. Le nouveau sujet peut être intéressant ou chargé émotionnellement mais ne traite pas la question. Pour rester sur le sujet, gardez la question initiale en tête et demandez comment la réponse la soutient ou la réfute.",
    expert:
      "Red herring : introduire un sujet non pertinent qui détourne la discussion de la question d'origine. La prémisse peut être vraie mais n'est pas pertinente pour la conclusion. Distinct de l'ignoratio elenchi en ce que la diversion est délibérée ou négligente. Échec dialectique : la charge de la preuve ou la thèse est déplacée. Analyser en reformulant la thèse initiale et en vérifiant si la réponse y répond.",
  },
  'Slippery Slope': {
    beginner:
      "L'orateur affirme qu'un petit pas mènera à une chaîne de résultats négatifs, sans montrer pourquoi chaque pas doit arriver. Il saute de « on fait A » à « puis catastrophe » sans preuve.",
    intermediate:
      "La pente glissante soutient qu'une première étape mènera inévitablement à des conséquences extrêmes. Le sophisme est que les maillons de la chaîne ne sont pas justifiés : chaque pas exige une raison. Parfois la pente est réelle (précédent, normes) ; souvent elle est spéculative. Demandez le mécanisme qui rend chaque pas nécessaire.",
    expert:
      "Pente glissante : prétendre qu'autoriser A mènera nécessairement à B, puis C, puis à un Z inacceptable, sans justification adéquate des liens causaux ou normatifs. L'argument s'appuie souvent sur une crainte vague plutôt que sur la démonstration que chaque transition est probable ou inévitable. Distinguer d'un raisonnement sorites valide quand les conditionnels par étapes sont établis. Réponse critique : exiger des preuves pour chaque maillon et considérer si la pente est empirique ou conceptuelle.",
  },
  'Hasty Generalization': {
    beginner:
      "L'orateur tire une conclusion générale à partir de trop peu d'exemples ou d'exemples qui ne sont pas typiques. Un ou quelques cas ne prouvent pas une règle pour tout le monde ou tout.",
    intermediate:
      "La généralisation hâtive (accident inverse) infère une affirmation générale à partir d'un échantillon insuffisant ou non représentatif. L'échantillon peut être trop petit, biaisé ou pas assez divers. Le raisonnement statistique et scientifique exige une taille et une représentativité appropriées. Méfiez-vous du « je connais quelqu'un qui... » ou « ce cas montre... » comme preuve d'une affirmation générale.",
    expert:
      "Généralisation hâtive : inférer une proposition générale à partir d'un échantillon trop petit, non représentatif ou biaisé. Viole les principes du raisonnement inductif : la taille, le hasard et la diversité de l'échantillon comptent. Lié : biais de sélection, preuve anecdotique. Distinguer de la généralisation légitime quand l'échantillon est adéquat et l'inférence correctement qualifiée.",
  },
  'Post hoc (after this, therefore because of this)': {
    beginner:
      "L'orateur pense que parce qu'une chose s'est produite après une autre, la première a dû causer la seconde. Mais l'ordre dans le temps ne prouve pas la cause. D'autres facteurs peuvent être en jeu.",
    intermediate:
      "Post hoc ergo propter hoc : inférer que A a causé B simplement parce que A a précédé B. La succession temporelle est nécessaire pour la causalité mais pas suffisante. Les variables confondantes, la coïncidence et la causalité inversée peuvent expliquer la corrélation. Les affirmations causales exigent des preuves contrôlées ou des mécanismes bien étayés.",
    expert:
      "Post hoc ergo propter hoc : inférer la causalité à partir de la seule succession temporelle. La prémisse « A s'est produit avant B » n'implique pas « A a causé B ». Le raisonnement causal exige de contrôler les facteurs confondants, d'envisager des explications alternatives et (idéalement) des mécanismes ou expériences. Lié : cum hoc, sophisme de régression. Distinguer de l'inférence causale légitime quand elle est soutenue par des preuves au-delà de la séquence.",
  },
  'Equivocation': {
    beginner:
      "L'orateur utilise le même mot dans deux sens différents dans un même argument. Le mot donne l'impression d'une seule idée mais change secrètement de sens, donc l'argument semble tenir alors qu'il ne tient pas.",
    intermediate:
      "L'équivoque survient quand un terme clé est utilisé dans deux sens différents dans le même argument, de sorte que la conclusion semble suivre alors que le glissement de sens fait le travail. Un raisonnement clair exige que les termes gardent un sens unique et cohérent. Identifiez le mot ambigu et précisez quel sens est utilisé dans chaque prémisse.",
    expert:
      "Équivoque : utiliser un terme dans deux sens ou plus dans un argument tout en le traitant comme univoque. Forme : « A est F (sens 1). Les F sont G (sens 2). Donc A est G. » Le syllogisme est invalide car le terme moyen n'est pas utilisé dans le même sens. Sophisme d'ambiguïté. Résolution : désambiguïser et reformuler ; l'argument deviendra invalide ou exigera une prémisse fausse ou non justifiée.",
  },
  'Cum hoc': {
    beginner:
      "L'orateur traite deux choses qui se produisent ensemble comme si l'une devait causer l'autre. Mais le simple fait que deux choses aillent ensemble ne signifie pas que l'une cause l'autre ; il peut y avoir une cause commune, ou une coïncidence.",
    intermediate:
      "Cum hoc (avec ceci, donc à cause de ceci) confond corrélation et causalité. Deux événements ou traits peuvent être associés sans que l'un cause l'autre : des facteurs tiers, une causalité inversée ou le hasard peuvent expliquer le lien. Les affirmations causales exigent plus qu'une co-occurrence — un mécanisme ou des preuves contrôlées.",
    expert:
      "Cum hoc ergo propter hoc : inférer la causalité à partir de la seule corrélation. La prémisse « A et B se produisent ensemble » n'implique pas « A cause B » ou « B cause A ». Les facteurs confondants (cause commune, biais de sélection), la causalité inversée et la coïncidence peuvent produire une corrélation fallacieuse. Les études contrôlées, l'ordre temporel et le raisonnement mécanistique sont nécessaires pour l'inférence causale. Lié : post hoc, paradoxe de Simpson.",
  },
  'No fallacy': {
    beginner:
      "Parfois un argument est logiquement acceptable même si on n'est pas d'accord avec la conclusion. L'orateur a donné des raisons qui soutiennent sa thèse. « Aucun sophisme » signifie que le raisonnement est acceptable, pas que la conclusion est vraie.",
    intermediate:
      "« Aucun sophisme » indique que l'argument ne commet pas d'erreur logique claire : les prémisses sont pertinentes, la structure est valide ou inductivement raisonnable, et il n'y a pas de procédé rhétorique évident. La conclusion peut encore être fausse si les prémisses sont fausses ou l'inférence faible. Distinguer « mauvais argument » et « argument fallacieux ».",
    expert:
      "« Aucun sophisme » (ou « pas de sophisme pertinent ») signifie que l'argument ne présente pas de type de sophisme reconnu. Le raisonnement peut être valide (déductif) ou cogent (inductif), et les prémisses peuvent être pertinentes. La conclusion peut encore être fausse — la solidité et la vérité exigent des prémisses vraies. Dans des contextes multi-sophismes, « aucun sophisme » peut signifier qu'il n'y a pas de sophisme dominant unique, ou que l'argument est acceptable. Éviter le sophisme du sophisme : rejeter une conclusion uniquement parce que l'argument est mauvais.",
  },
};

/** Map alternative option strings to canonical fallacy key for codon lookup. */
const FALLACY_CODON_ALIASES: Record<string, string> = {
  'Bandwagon Fallacy': 'Appeal to Popularity',
  'Appeal to Antiquity': 'Appeal to Tradition',
  'Black or White Fallacy': 'False Dilemma',
  'Correlation Equals Causation': 'Cum hoc',
  'Biased Sample': 'Hasty Generalization',
  'Faulty Generalization': 'Hasty Generalization',
  'Biased Generalization': 'Hasty Generalization',
};

function getCanonicalFallacyKey(name: string): string {
  return FALLACY_CODON_ALIASES[name] ?? name;
}

/**
 * Returns the fallacy codon explanation for the given fallacy name and level (EN).
 * Used when the question's detailed explanation is a generic placeholder.
 */
export function getFallacyCodonExplanationEN(
  fallacyName: string,
  level: FallacyCodonLevel
): string | undefined {
  const key = getCanonicalFallacyKey(fallacyName);
  const entry = FALLACY_CODON_EN[key];
  if (!entry) return undefined;
  switch (level) {
    case 'beginner':
      return entry.beginner;
    case 'intermediate':
      return entry.intermediate;
    case 'expert':
      return entry.expert;
    default:
      return entry.intermediate;
  }
}

/**
 * Returns the fallacy codon explanation for the given fallacy name and level (FR).
 */
export function getFallacyCodonExplanationFR(
  fallacyName: string,
  level: FallacyCodonLevel
): string | undefined {
  const key = getCanonicalFallacyKey(fallacyName);
  const entry = FALLACY_CODON_FR[key];
  if (!entry) return undefined;
  switch (level) {
    case 'beginner':
      return entry.beginner;
    case 'intermediate':
      return entry.intermediate;
    case 'expert':
      return entry.expert;
    default:
      return entry.intermediate;
  }
}

/**
 * List of fallacy names that have codon explanations (for batch expansion).
 * Add new keys to FALLACY_CODON_EN and FALLACY_CODON_FR in sync.
 */
export const FALLACY_CODON_KEYS_EN = Object.keys(FALLACY_CODON_EN);
export const FALLACY_CODON_KEYS_FR = Object.keys(FALLACY_CODON_FR);
