const ENGLISH_TO_FRENCH_REPLACEMENTS: Array<[RegExp, string]> = [
  [/\bKey concepts:\b/g, 'Concepts clés :'],
  [/\bHow it works:\b/g, 'Comment ça fonctionne :'],
  [/\bCommon uses:\b/g, 'Usages courants :'],
  [/\bCommon patterns:\b/g, 'Patterns courants :'],
  [/\bSimple explanation:\b/g, 'Explication simple :'],
  [/\bIntermediate explanation:\b/g, 'Explication intermédiaire :'],
  [/\bIn-depth explanation:\b/g, 'Explication approfondie :'],
  [/\bExample:\b/g, 'Exemple :'],
  [/\bExamples:\b/g, 'Exemples :'],
  [/\bThe\b/g, 'Le'],
  [/\bThis\b/g, 'Ce'],
  [/\bThat\b/g, 'Cela'],
  [/\bWhen\b/g, 'Quand'],
  [/\bIf\b/g, 'Si'],
  [/\bfrom\b/g, 'de'],
  [/\bwith\b/g, 'avec'],
  [/\bwithout\b/g, 'sans'],
  [/\breturns\b/g, 'retourne'],
  [/\breturn\b/g, 'renvoyer'],
  [/\bcalled\b/g, 'appelé'],
  [/\bworks\b/g, 'fonctionne'],
  [/\bcreates\b/g, 'crée'],
  [/\ballows\b/g, 'permet'],
  [/\bcontains\b/g, 'contient'],
  [/\buses\b/g, 'utilise'],
  [/\bvalue\b/g, 'valeur'],
  [/\bvalues\b/g, 'valeurs'],
  [/\bobject\b/g, 'objet'],
  [/\bobjects\b/g, 'objets'],
  [/\bmethod\b/g, 'méthode'],
  [/\bmethods\b/g, 'méthodes'],
  [/\bfunction\b/g, 'fonction'],
  [/\bfunctions\b/g, 'fonctions'],
  [/\bstatement\b/g, 'instruction'],
  [/\bstatements\b/g, 'instructions'],
  [/\bdictionary\b/g, 'dictionnaire'],
  [/\bdictionaries\b/g, 'dictionnaires'],
  [/\blist\b/g, 'liste'],
  [/\blists\b/g, 'listes'],
  [/\bstring\b/g, 'chaîne'],
  [/\bstrings\b/g, 'chaînes'],
  [/\btype\b/g, 'type'],
  [/\bspecial\b/g, 'spécial'],
  [/\bconstant\b/g, 'constante'],
  // Glossary-specific
  [/\bExtracting\b/g, 'Extraction'],
  [/\boperator\b/g, 'opérateur'],
  [/\boperators\b/g, 'opérateurs'],
  [/\boperate\b/g, 'opère'],
  [/\bcombining\b/g, 'combinaison'],
  [/\bconverting\b/g, 'conversion'],
  [/\brepresenting\b/g, 'représentant'],
  [/\bformatted\b/g, 'formaté'],
  [/\bbuilt-in\b/g, 'intégré'],
  [/\bassigns\b/g, 'assigne'],
  [/\bassigning\b/g, 'assignation'],
  [/\baccessing\b/g, 'accès à'],
  [/\baccess\b/g, 'accès'],
  [/\busing\b/g, 'avec'],
  [/\bprovides\b/g, 'fournit'],
  [/\bperforms\b/g, 'effectue'],
  [/\bperforming\b/g, 'effectuant'],
  [/\bcreates\b/g, 'crée'],
  [/\bcreating\b/g, 'création'],
  [/\breturns\b/g, 'retourne'],
  [/\breturning\b/g, 'retournant'],
  [/\bsubtraction\b/g, 'soustraction'],
  [/\bmultiplication\b/g, 'multiplication'],
  [/\bdivision\b/g, 'division'],
  [/\bexponentiation\b/g, 'exponentiation'],
  [/\bmodulo\b/g, 'modulo'],
  [/\bremainder\b/g, 'reste'],
  [/\bSlicing\b/g, 'Le découpage'],
  [/\bsyntax\b/g, 'syntaxe'],
  [/\binclusive\b/g, 'inclus'],
  [/\bexclusive\b/g, 'exclu'],
  [/\bOmitting\b/g, 'Omission de'],
  [/\bdefaults\b/g, 'par défaut'],
  [/\bnever\b/g, 'jamais'],
  [/\braises\b/g, 'lève'],
  [/\bIndexError\b/g, 'IndexError'],
  [/\bKeyError\b/g, 'KeyError'],
  [/\bTypeError\b/g, 'TypeError'],
  [/\bZeroDivisionError\b/g, 'ZeroDivisionError'],
];

const ENGLISH_PROSE_PATTERNS: RegExp[] = [
  /\b(the|this|that|when|if|which|what|how|with|without|from|into|before|after)\b/i,
  /\b(is|are|was|were|has|have|had|can|could|should|would|might|must)\b/i,
  /\b(returns?|creates?|allows?|works?|called|contains?|provides?|requires?|checks?)\b/i,
  /\b(simple explanation|intermediate explanation|in-depth explanation|key concepts|how it works|common uses)\b/i,
];

const CODE_LIKE_LINE = /^\s*(#|def |class |import |from |return\b|if\b|elif\b|else:|for\b|while\b|try:|except\b|with\b|print\(|@|[A-Za-z_][A-Za-z0-9_]*\s*=|[A-Za-z_][A-Za-z0-9_]*\()|\.\.\./;

const isCodeLikeLine = (line: string): boolean => CODE_LIKE_LINE.test(line.trim());

export const normalizeFrenchProse = (text: string): string => {
  const lines = text.split('\n');
  return lines
    .map((line) => {
      if (isCodeLikeLine(line)) return line;
      let out = line;
      for (const [pattern, replacement] of ENGLISH_TO_FRENCH_REPLACEMENTS) {
        out = out.replace(pattern, replacement);
      }
      return out;
    })
    .join('\n');
};

export const containsEnglishProse = (text: string): boolean => {
  const lines = text.split('\n');
  let hits = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || isCodeLikeLine(trimmed)) continue;

    if (ENGLISH_PROSE_PATTERNS.some((pattern) => pattern.test(trimmed))) {
      hits += 1;
      if (hits >= 2) return true;
    }
  }

  return false;
};
