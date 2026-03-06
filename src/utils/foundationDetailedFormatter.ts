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
  const answerHint = answer ? `Correct answer: ${answer}.` : 'Focus on identifying the dominant fallacy or the absence of one.';
  const contextLine = question ? `In this argument: ${question.slice(0, 200)}${question.length > 200 ? '…' : ''}` : '';

  if (depth === 'beginner') {
    return [
      'Beginner explanation:',
      '',
      'Key idea:',
      base,
      shortBlock,
      '',
      'Why this answer:',
      `- ${answerHint}`,
      contextLine ? `- ${contextLine}` : '',
      '',
      'What to remember:',
      '- A fallacy is a flaw in how the argument supports its conclusion.',
      '- The correct answer names the main flaw (or "No fallacy" if the reasoning is acceptable).',
    ]
      .filter(Boolean)
      .join('\n');
  }

  if (depth === 'intermediate') {
    return [
      'Intermediate explanation:',
      '',
      'Key concept:',
      base,
      shortBlock,
      '',
      'How this fallacy works:',
      '- The premise(s) are used in a way that does not properly support the conclusion.',
      '- Recognizing the pattern helps you avoid being persuaded by flawed reasoning.',
      contextLine ? ['', 'In this argument:', contextLine].join('\n') : '',
      '',
      'What to remember:',
      `- ${answerHint}`,
      '- Apply the principle of charity: interpret the argument in its strongest form before judging.',
    ]
      .filter(Boolean)
      .join('\n');
  }

  return [
    'Expert explanation:',
    '',
    'Concept and structure:',
    base,
    shortBlock,
    '',
    'Why it is fallacious:',
    '- The argument violates a norm of good reasoning (relevance, sufficiency, clarity, or structure).',
    '- Identifying the fallacy type allows precise criticism and better dialectic.',
    '- In formal fallacies the logical form is invalid; in informal fallacies the content or use of premises is defective.',
    contextLine ? ['', 'In this argument:', contextLine].join('\n') : '',
    '',
    'Related distinctions:',
    '- Do not confuse "bad argument" with "fallacious argument"—some weak arguments are not fallacies.',
    '- The fallacy fallacy: a conclusion is not necessarily false just because the argument for it is fallacious.',
    '- Edge cases: multiple fallacies may be present; focus on the dominant one or the one the question targets.',
    '',
    'What to remember:',
    `- ${answerHint}`,
    '- Use the glossary and level material to keep definitions consistent (e.g. with glossary.md).',
  ]
    .filter(Boolean)
    .join('\n');
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
  const answerHint = answer ? `Bonne réponse : ${answer}.` : 'Concentrez-vous sur le sophisme dominant ou l\'absence de sophisme.';
  const contextLine = question ? `Dans cet argument : ${question.slice(0, 200)}${question.length > 200 ? '…' : ''}` : '';

  if (depth === 'beginner') {
    return [
      'Explication débutant :',
      '',
      'Idée clé :',
      base,
      shortBlock,
      '',
      'Pourquoi cette réponse :',
      `- ${answerHint}`,
      contextLine ? `- ${contextLine}` : '',
      '',
      'À retenir :',
      '- Un sophisme est un défaut dans la façon dont l\'argument soutient sa conclusion.',
      '- La bonne réponse nomme le défaut principal (ou « Aucun sophisme » si le raisonnement est acceptable).',
    ]
      .filter(Boolean)
      .join('\n');
  }

  if (depth === 'intermediate') {
    return [
      'Explication intermédiaire :',
      '',
      'Concept clé :',
      base,
      shortBlock,
      '',
      'Comment fonctionne ce sophisme :',
      '- Les prémisses sont utilisées d\'une manière qui ne soutient pas correctement la conclusion.',
      '- Reconnaître le schéma aide à ne pas se laisser convaincre par un raisonnement défectueux.',
      contextLine ? ['', 'Dans cet argument :', contextLine].join('\n') : '',
      '',
      'À retenir :',
      `- ${answerHint}`,
      '- Appliquez le principe de charité : interprétez l\'argument dans sa forme la plus forte avant de juger.',
    ]
      .filter(Boolean)
      .join('\n');
  }

  return [
    'Explication expert :',
    '',
    'Concept et structure :',
    base,
    shortBlock,
    '',
    'Pourquoi c\'est fallacieux :',
    '- L\'argument viole une norme du bon raisonnement (pertinence, suffisance, clarté ou structure).',
    '- Identifier le type de sophisme permet une critique précise et une meilleure dialectique.',
    '- Dans les sophismes formels la forme logique est invalide ; dans les informels le contenu ou l\'usage des prémisses est défectueux.',
    contextLine ? ['', 'Dans cet argument :', contextLine].join('\n') : '',
    '',
    'Distinctions connexes :',
    '- Ne pas confondre « mauvais argument » et « argument fallacieux » — certains arguments faibles ne sont pas des sophismes.',
    '- Le sophisme du sophisme : une conclusion n\'est pas nécessairement fausse parce que l\'argument qui la soutient est fallacieux.',
    '- Cas limites : plusieurs sophismes peuvent être présents ; concentrez-vous sur le dominant ou celui visé par la question.',
    '',
    'À retenir :',
    `- ${answerHint}`,
    '- Utilisez le glossaire et le contenu du niveau pour garder les définitions cohérentes (ex. glossary.md).',
  ]
    .filter(Boolean)
    .join('\n');
};
