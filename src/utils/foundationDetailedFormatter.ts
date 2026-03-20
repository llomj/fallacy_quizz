export type ExplanationDepth = 'beginner' | 'intermediate' | 'expert';

const KNOWN_COMMANDS = new Set([
  'ls',
  'cd',
  'pwd',
  'mkdir',
  'rmdir',
  'rm',
  'cp',
  'mv',
  'cat',
  'grep',
  'find',
  'chmod',
  'chown',
  'ps',
  'top',
  'kill',
  'killall',
  'pkill',
  'crontab',
  'cron',
  'systemctl',
  'service',
  'journalctl',
  'awk',
  'sed',
  'xargs',
  'echo',
  'export',
  'alias',
  'type',
  'which',
  'whereis',
  'man',
  'head',
  'tail',
  'wc',
  'sort',
  'uniq',
  'du',
  'df',
  'ln',
  'stat',
  'mount',
  'umount',
  'tar',
  'ssh',
  'scp',
  'rsync',
  'curl',
  'wget',
  'touch',
  'less',
  'more',
  'tee',
]);

const DISALLOWED_ARGUMENT_WORDS = new Set([
  'and',
  'or',
  'to',
  'of',
  'for',
  'with',
  'without',
  'instead',
  'where',
  'when',
  'then',
  'you',
  'your',
  'the',
  'a',
  'an',
  'this',
  'that',
  'these',
  'those',
  'what',
  'why',
  'how',
  'is',
  'are',
]);

const COMMAND_REGEX =
  /\b(?:sudo\s+)?(?:ls|cd|pwd|mkdir|rmdir|rm|cp|mv|cat|grep|find|chmod|chown|ps|top|kill|killall|pkill|crontab|cron|systemctl|service|journalctl|awk|sed|xargs|echo|export|alias|type|which|whereis|man|head|tail|wc|sort|uniq|du|df|ln|stat|mount|umount|tar|ssh|scp|rsync|curl|wget|touch|less|more|tee)(?:\s+[^\n;,]+)?/i;

const cleanupCommand = (value: string): string => {
  return value
    .trim()
    .replace(/[.;,:!?]+$/g, '')
    .replace(/\s+/g, ' ');
};

const isLikelyCommandExample = (candidate: string): boolean => {
  const cleaned = cleanupCommand(candidate);
  if (!cleaned) return false;

  const tokens = cleaned.split(/\s+/).filter(Boolean);
  if (!tokens.length || tokens.length > 8) return false;

  const maybeCommand = tokens[0] === 'sudo' ? tokens[1] : tokens[0];
  if (!maybeCommand || !KNOWN_COMMANDS.has(maybeCommand.toLowerCase())) {
    return false;
  }

  for (const token of tokens.slice(tokens[0] === 'sudo' ? 2 : 1)) {
    const lower = token.toLowerCase();
    if (DISALLOWED_ARGUMENT_WORDS.has(lower)) return false;
    const commandLike = /^-{1,2}[a-z0-9][\w-]*$/i.test(token) || /^[~./:@%+\w=-]+$/i.test(token);
    if (!commandLike) return false;
  }

  return true;
};

export const extractCommandExample = (...texts: Array<string | undefined>): string | undefined => {
  for (const text of texts) {
    if (!text) continue;

    const backticks = text.match(/`([^`]+)`/g) ?? [];
    for (const token of backticks) {
      const cleaned = cleanupCommand(token.replace(/`/g, ''));
      if (isLikelyCommandExample(cleaned)) {
        return cleaned;
      }
    }

    const direct = text.match(COMMAND_REGEX)?.[0];
    if (direct && isLikelyCommandExample(direct)) {
      return cleanupCommand(direct);
    }
  }

  return undefined;
};

const compact = (value: string | undefined): string => (value ?? '').trim();

const shouldAppendShort = (baseText: string, shortText: string): boolean => {
  if (!shortText) return false;
  const base = baseText.toLowerCase();
  return !base.includes(shortText.toLowerCase());
};

export const buildFoundationEnglishDetailed = ({
  depth,
  baseText,
  shortText,
  commandExample,
  questionText,
  correctOption,
}: {
  depth: ExplanationDepth;
  baseText: string;
  shortText?: string;
  commandExample?: string;
  questionText?: string;
  correctOption?: string;
}): string => {
  const base = compact(baseText);
  const short = compact(shortText);
  const question = compact(questionText).replace(/\s+/g, ' ');
  const answer = compact(correctOption);
  const command = compact(commandExample) || 'pwd';
  const shortBlock = shouldAppendShort(base, short) ? `\nQuick recap: ${short}` : '';
  const answerHint = answer ? `Expected answer focus: ${answer}.` : 'Expected answer focus: identify the command behavior correctly.';
  const contextLine = question ? `Question context: ${question}` : 'Question context: CLI fundamentals in this level.';

  if (depth === 'beginner') {
    return [
      'Beginner explanation:',
      base,
      shortBlock,
      '',
      'Step-by-step example:',
      `1. Open a terminal window and read the prompt carefully.`,
      `2. Run: ${command}`,
      '3. Observe what changes (output, location, process state, or file listing).',
      '4. Repeat the command once to confirm the behavior is predictable.',
      '',
      'What to remember:',
      `- ${answerHint}`,
      `- ${contextLine}`,
      '- If output is unclear, run the command again with `--help` or read its man page.',
    ]
      .filter(Boolean)
      .join('\n');
  }

  if (depth === 'intermediate') {
    return [
      'Intermediate explanation:',
      base,
      shortBlock,
      '',
      'How it works:',
      '1. The shell parses your command and options.',
      '2. The command executes against the current environment (directory, files, or processes).',
      '3. Exit status and output confirm whether the operation succeeded.',
      '',
      'Step-by-step example:',
      `1. Validate context first with \`pwd\` or \`ls\`.`,
      `2. Execute the target command: ${command}`,
      '3. Verify results with a second command (`ls`, `ps`, `cat`, or similar).',
      '4. If needed, rerun with safer flags before applying destructive actions.',
      '',
      'Practice checklist:',
      `- ${answerHint}`,
      `- ${contextLine}`,
      '- Distinguish stdout vs stderr and check the exit code with `echo $?`.',
    ]
      .filter(Boolean)
      .join('\n');
  }

  return [
    'Expert explanation:',
    base,
    shortBlock,
    '',
    'Under the hood:',
    '- Command behavior depends on shell parsing, permissions, and current process/file state.',
    '- Repeatable CLI workflows always validate context before and after execution.',
    '- Robust usage pairs the main command with verification and error-handling commands.',
    '',
    'Step-by-step operational flow:',
    '1. Inspect environment and prerequisites (path, permissions, process state).',
    `2. Execute the command with explicit intent: ${command}`,
    '3. Validate side effects (output, filesystem delta, or process delta).',
    '4. Record or script the final sequence for repeatability.',
    '',
    'Expert checks:',
    `- ${answerHint}`,
    `- ${contextLine}`,
    '- Review edge cases: empty input, missing files, permission failures, and wrong working directory.',
  ]
    .filter(Boolean)
    .join('\n');
};

export const buildFoundationFrenchDetailed = ({
  depth,
  baseText,
  shortText,
  commandExample,
  questionText,
  correctOption,
}: {
  depth: ExplanationDepth;
  baseText: string;
  shortText?: string;
  commandExample?: string;
  questionText?: string;
  correctOption?: string;
}): string => {
  const base = compact(baseText);
  const short = compact(shortText);
  const question = compact(questionText).replace(/\s+/g, ' ');
  const answer = compact(correctOption);
  const command = compact(commandExample) || 'pwd';
  const shortBlock = shouldAppendShort(base, short) ? `\nRappel rapide : ${short}` : '';
  const answerHint = answer
    ? `Point cle de la bonne reponse : ${answer}.`
    : "Point cle de la bonne reponse : identifier correctement le comportement de la commande.";
  const contextLine = question
    ? `Contexte de la question : ${question}`
    : 'Contexte de la question : fondamentaux CLI de ce niveau.';

  if (depth === 'beginner') {
    return [
      'Explication debutant :',
      base,
      shortBlock,
      '',
      'Exemple pas a pas :',
      '1. Ouvre un terminal et lis bien le prompt.',
      `2. Execute : ${command}`,
      "3. Observe ce qui change (sortie, emplacement, processus ou liste de fichiers).",
      '4. Relance la commande une fois pour confirmer le resultat.',
      '',
      'A retenir :',
      `- ${answerHint}`,
      `- ${contextLine}`,
      "- En cas de doute, utilise `--help` ou la page `man` de la commande.",
    ]
      .filter(Boolean)
      .join('\n');
  }

  if (depth === 'intermediate') {
    return [
      'Explication intermediaire :',
      base,
      shortBlock,
      '',
      'Comment ca fonctionne :',
      '1. Le shell lit la commande et ses options.',
      '2. La commande agit selon le contexte courant (dossier, fichiers, processus).',
      "3. Le code de sortie et le texte affiche indiquent si l'action a reussi.",
      '',
      'Exemple pas a pas :',
      '1. Verifie le contexte avec `pwd` ou `ls`.',
      `2. Lance la commande cible : ${command}`,
      '3. Controle le resultat avec une commande de verification (`ls`, `ps`, `cat`, etc.).',
      "4. Si necessaire, relance avec des options plus sures avant une action sensible.",
      '',
      'Checklist de pratique :',
      `- ${answerHint}`,
      `- ${contextLine}`,
      '- Distingue stdout et stderr, puis controle `echo $?`.',
    ]
      .filter(Boolean)
      .join('\n');
  }

  return [
    'Explication expert :',
    base,
    shortBlock,
    '',
    'Vue technique :',
    "- Le comportement depend du parsing du shell, des permissions et de l'etat du systeme.",
    '- Une methode fiable valide toujours le contexte avant et apres execution.',
    "- Une pratique robuste combine commande principale, verification et gestion d'erreurs.",
    '',
    'Flux operationnel pas a pas :',
    '1. Controle les prerequis (chemin, droits, etat des processus/fichiers).',
    `2. Execute la commande avec une intention explicite : ${command}`,
    "3. Verifie les effets (sortie, modification de fichiers, evolution des processus).",
    '4. Documente ou script le flux final pour le rendre repetable.',
    '',
    'Controles expert :',
    `- ${answerHint}`,
    `- ${contextLine}`,
    '- Pense aux cas limites : entree vide, fichier absent, droits insuffisants, mauvais repertoire.',
  ]
    .filter(Boolean)
    .join('\n');
};

// --- Fallacy codon formatters (in-depth description tied to the fallacy, no CLI) ---
// Structure: scenario first, then concept, then level-specific ties to this question.

const ARGUMENT_PREVIEW_MAX = 520;

const previewArgument = (text: string): string => {
  const t = text.replace(/\s+/g, ' ').trim();
  if (!t) return '';
  if (t.length <= ARGUMENT_PREVIEW_MAX) return t;
  return `${t.slice(0, ARGUMENT_PREVIEW_MAX - 1)}…`;
};

const buildScenarioBlockEN = (question: string): string => {
  const prev = previewArgument(question);
  if (!prev) return '';
  return `This question’s scenario:\n"${prev}"`;
};

const buildBreakdownForDepthEN = (
  depth: ExplanationDepth,
  question: string,
  short: string,
  answer: string
): string => {
  const prev = previewArgument(question);
  const a = answer || 'the correct option';
  if (depth === 'beginner') {
    return [
      'Step-by-step for this scenario:',
      prev ? `1. Read the passage above: "${prev}"` : '1. Read the full question text carefully.',
      short
        ? `2. Use the short explanation as your guide: ${short}`
        : '2. Ask what reasons are given and whether they really support the conclusion.',
      `3. Match that to the label ${a}—you are judging this passage, not memorizing a definition in the abstract.`,
    ].join('\n');
  }
  if (depth === 'intermediate') {
    return [
      'How this maps onto this question:',
      prev ? `• Scenario: "${prev}"` : '• Scenario: use the full wording of the question.',
      short ? `• What stands out in the reasoning: ${short}` : '• Trace premises, assumptions, and conclusion.',
      `• Why ${a}: the label fits the main argumentative move in this text.`,
    ].join('\n');
  }
  return [
    'Expert structural read (this question):',
    prev ? `• Argument text (excerpt): "${prev}"` : '• Anchor everything in the exact wording of the question.',
    short
      ? `• Reasoning diagnosis from the short explanation: ${short}`
      : '• Separate explicit premises, hidden assumptions, and the stated conclusion.',
    `• Verdict ${a}: use it when the failure mode described in the general account is the one actually performed here.`,
  ].join('\n');
};

const buildDepthSpecificTailEN = (
  depth: ExplanationDepth,
  question: string,
  short: string,
  answer: string
): string => {
  const prev = previewArgument(question);
  const a = answer || 'the correct option';
  if (depth === 'intermediate') {
    if (short && prev) {
      return [
        'Intermediate focus (this prompt):',
        `The short explanation points to what matters here: ${short}. In "${prev.slice(0, 200)}${prev.length > 200 ? '…' : ''}", that is the pressure point for choosing ${a}.`,
      ].join('\n');
    }
    if (short) {
      return [
        'Intermediate focus (this prompt):',
        `The short explanation isolates the issue: ${short}. That is why ${a} is the best match for this question—not a generic checklist item.`,
      ].join('\n');
    }
    return [
      'Intermediate focus (this prompt):',
      `Judge the actual lines of reasoning in the question. ${a} wins when that label best captures the dominant flaw or the absence of a flaw in this passage.`,
    ].join('\n');
  }
  if (depth === 'expert') {
    if (short && prev) {
      return [
        'Expert synthesis (this question):',
        `In this passage, the argumentative work is localized: "${prev.slice(0, 240)}${prev.length > 240 ? '…' : ''}". The diagnosis "${short}" ties the formal pattern to these moves. ${a} is appropriate when that mechanism—not a nearby rhetorical blemish—is what undermines the argument.`,
      ].join('\n');
    }
    if (short) {
      return [
        'Expert synthesis (this question):',
        `${short} Connect that diagnosis to the options: ${a} is justified when this mechanism is the central logical liability (or when no fallacy applies, if that is the option).`,
      ].join('\n');
    }
    return [
      'Expert synthesis (this question):',
      `Evaluate logical form, relevance, and sufficiency in the actual text. ${a} reflects the structure of this argument, not a textbook caricature.`,
    ].join('\n');
  }
  return '';
};

export const buildFallacyEnglishDetailed = ({
  depth,
  baseText,
  shortText,
  questionText,
  correctOption,
}: {
  depth: ExplanationDepth;
  baseText: string;
  shortText?: string;
  questionText?: string;
  correctOption?: string;
}): string => {
  const base = compact(baseText);
  const short = compact(shortText);
  const question = compact(questionText).replace(/\s+/g, ' ');
  const answer = compact(correctOption);
  const shortBlock = shouldAppendShort(base, short) ? `\nQuick recap: ${short}` : '';
  const answerHint = answer
    ? `Correct answer: ${answer}.`
    : 'Focus on identifying the dominant fallacy or the absence of one.';

  const whyLabel = answer ? `Why the answer is ${answer}:` : 'Why this answer:';

  const scenarioBlock = buildScenarioBlockEN(question);
  const breakdownSection = buildBreakdownForDepthEN(depth, question, short, answer);
  const depthTail = depth !== 'beginner' ? buildDepthSpecificTailEN(depth, question, short, answer) : '';

  if (depth === 'beginner') {
    return [
      'Beginner explanation:',
      '',
      scenarioBlock,
      '',
      whyLabel,
      base,
      shortBlock,
      '',
      breakdownSection,
      '',
      answerHint,
    ]
      .filter(Boolean)
      .join('\n');
  }

  if (depth === 'intermediate') {
    return [
      'Intermediate explanation:',
      '',
      scenarioBlock,
      '',
      whyLabel,
      base,
      shortBlock,
      '',
      breakdownSection,
      '',
      depthTail,
      '',
      answerHint,
    ]
      .filter(Boolean)
      .join('\n');
  }

  return [
    'Expert explanation:',
    '',
    scenarioBlock,
    '',
    whyLabel,
    base,
    shortBlock,
    '',
    breakdownSection,
    '',
    depthTail,
    '',
    answerHint,
  ]
    .filter(Boolean)
    .join('\n');
};

const buildScenarioBlockFR = (question: string): string => {
  const prev = previewArgument(question);
  if (!prev) return '';
  return `Scénario de cette question :\n« ${prev} »`;
};

const buildBreakdownForDepthFR = (
  depth: ExplanationDepth,
  question: string,
  short: string,
  answer: string
): string => {
  const prev = previewArgument(question);
  const a = answer || 'la bonne option';
  if (depth === 'beginner') {
    return [
      'Étapes pour ce scénario précis :',
      prev ? `1. Lisez le passage : « ${prev} »` : '1. Lisez attentivement l’énoncé complet.',
      short
        ? `2. Servez-vous de l’explication courte comme fil : ${short}`
        : '2. Demandez quelles raisons sont données et si elles soutiennent vraiment la conclusion.',
      `3. Reliez cela au libellé ${a} : vous jugez ce texte, pas une définition abstraite.`,
    ].join('\n');
  }
  if (depth === 'intermediate') {
    return [
      'Lien avec cette question :',
      prev ? `• Scénario : « ${prev} »` : '• Scénario : reprenez la formulation exacte de la question.',
      short ? `• Ce qui saute aux yeux dans le raisonnement : ${short}` : '• Suivez prémisses, hypothèses et conclusion.',
      `• Pourquoi ${a} : le libellé correspond au geste argumentatif principal dans ce texte.`,
    ].join('\n');
  }
  return [
    'Lecture experte (cette question) :',
    prev ? `• Texte (extrait) : « ${prev} »` : '• Ancrez-vous dans le libellé exact de la question.',
    short
      ? `• Diagnostic issu de l’explication courte : ${short}`
      : '• Séparez prémisses explicites, présupposés et conclusion affichée.',
    `• Verdict ${a} : retenez-le lorsque le mode d’échec décrit dans l’exposé général est bien celui qui se produit ici.`,
  ].join('\n');
};

const buildDepthSpecificTailFR = (
  depth: ExplanationDepth,
  question: string,
  short: string,
  answer: string
): string => {
  const prev = previewArgument(question);
  const a = answer || 'la bonne option';
  if (depth === 'intermediate') {
    if (short && prev) {
      return [
        'Focus intermédiaire (cet énoncé) :',
        `L’explication courte indique l’essentiel : ${short}. Dans « ${prev.slice(0, 200)}${prev.length > 200 ? '…' : ''} », c’est le point sensible pour choisir ${a}.`,
      ].join('\n');
    }
    if (short) {
      return [
        'Focus intermédiaire (cet énoncé) :',
        `L’explication courte isole le problème : ${short}. Voilà pourquoi ${a} est le meilleur choix pour cette question, pas une case à cocher générique.`,
      ].join('\n');
    }
    return [
      'Focus intermédiaire (cet énoncé) :',
      `Jugez les raisons telles qu’elles figurent dans la question. ${a} l’emporte lorsque ce libellé décrit le défaut dominant (ou l’absence de sophisme) dans ce passage.`,
    ].join('\n');
  }
  if (depth === 'expert') {
    if (short && prev) {
      return [
        'Synthèse experte (cette question) :',
        `Ici, l’argumentation se joue dans ce passage : « ${prev.slice(0, 240)}${prev.length > 240 ? '…' : ''} ». Le diagnostic « ${short} » rattache le schéma formel à ces gestes. ${a} convient lorsque ce mécanisme — pas un simple défaut de style — fragilise l’argument.`,
      ].join('\n');
    }
    if (short) {
      return [
        'Synthèse experte (cette question) :',
        `${short} Reliez ce diagnostic aux options : ${a} se justifie lorsque ce mécanisme est la faiblesse logique centrale (ou lorsqu’aucun sophisme ne s’applique, si c’est l’option).`,
      ].join('\n');
    }
    return [
      'Synthèse experte (cette question) :',
      `Évaluez la forme logique, la pertinence et la suffisance dans le texte réel. ${a} reflète la structure de cet argument, pas une caricature de manuel.`,
    ].join('\n');
  }
  return '';
};

export const buildFallacyFrenchDetailed = ({
  depth,
  baseText,
  shortText,
  questionText,
  correctOption,
}: {
  depth: ExplanationDepth;
  baseText: string;
  shortText?: string;
  questionText?: string;
  correctOption?: string;
}): string => {
  const base = compact(baseText);
  const short = compact(shortText);
  const question = compact(questionText).replace(/\s+/g, ' ');
  const answer = compact(correctOption);
  const shortBlock = shouldAppendShort(base, short) ? `\nRappel rapide : ${short}` : '';
  const answerHint = answer
    ? `Bonne réponse : ${answer}.`
    : "Concentrez-vous sur le sophisme dominant ou l'absence de sophisme.";

  const whyLabel = answer
    ? `Pourquoi la réponse est ${answer} :`
    : 'Pourquoi cette réponse :';

  const scenarioBlock = buildScenarioBlockFR(question);
  const breakdownSection = buildBreakdownForDepthFR(depth, question, short, answer);
  const depthTail = depth !== 'beginner' ? buildDepthSpecificTailFR(depth, question, short, answer) : '';

  if (depth === 'beginner') {
    return [
      'Explication débutant :',
      '',
      scenarioBlock,
      '',
      whyLabel,
      base,
      shortBlock,
      '',
      breakdownSection,
      '',
      answerHint,
    ]
      .filter(Boolean)
      .join('\n');
  }

  if (depth === 'intermediate') {
    return [
      'Explication intermédiaire :',
      '',
      scenarioBlock,
      '',
      whyLabel,
      base,
      shortBlock,
      '',
      breakdownSection,
      '',
      depthTail,
      '',
      answerHint,
    ]
      .filter(Boolean)
      .join('\n');
  }

  return [
    'Explication expert :',
    '',
    scenarioBlock,
    '',
    whyLabel,
    base,
    shortBlock,
    '',
    breakdownSection,
    '',
    depthTail,
    '',
    answerHint,
  ]
    .filter(Boolean)
    .join('\n');
};

