/**
 * Shared logic for splitting questions into prefix + code for syntax highlighting.
 * Used by QuizView, IdSearchModal, IdLogView.
 */

export const hasCodeLikeContent = (text: string): boolean => {
  if (!text || text.length < 2) return false;
  return (
    /f["']/.test(text) ||                    // f-strings f"..." f'...'
    /["'][^"']*["']/.test(text) ||           // String literals
    /[a-zA-Z_]\w*\s*\(/.test(text) ||         // Function/method calls
    /[\[\(\{]/.test(text) ||                  // Brackets
    /\.[a-zA-Z_]\w*\s*\(/.test(text) ||       // Method calls .name(
    /\b(def|class|for|while|if|with|import|from|print)\s+/.test(text) ||  // Keywords
    /\[\d*:?-?\d*:?-?\d*\]/.test(text) ||     // Indexing/slicing [0], [0:3]
    /[\+\-\*\/\%]/.test(text) ||             // Arithmetic operators
    /\*\*/.test(text) ||                      // Power operator
    /\b(True|False|None)\b/.test(text)        // Python literals
  );
};

export type SplitQuestionResult = { prefix: string; code: string };

/**
 * Split question text into prefix (question words) and code (for syntax highlighting).
 * Handles "What does X return?" by extracting X as code.
 */
export const splitQuestion = (
  text: string,
  language: string,
  translateFn: (t: string, lang: string) => string
): SplitQuestionResult => {
  try {
    const enhancedText = translateFn(text, language);

    // Multi-line: find first code-like line
    if (enhancedText.includes('\n')) {
      const lines = enhancedText.split('\n');
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (/^\s{2,}/.test(line) || /^\s*(def|class|for|while|if|with|import|from)\s+/.test(line)) {
          return {
            prefix: lines.slice(0, i).join('\n').trim(),
            code: lines.slice(i).join('\n')
          };
        }
      }
    }

    // "What does X return?" / "Qu'est-ce que X renvoie ?" — extract X as code
    const returnSuffixEn = enhancedText.match(/\s+return\s*\?\s*$/i);
    const returnSuffixFr = enhancedText.match(/\s+renvoie\s*\?\s*$/i);
    const returnSuffix = returnSuffixEn || returnSuffixFr;
    if (returnSuffix) {
      const beforeReturn = enhancedText.substring(0, enhancedText.length - returnSuffix[0].length).trim();
      const doesMatch = beforeReturn.match(/^What does\s+(.+)$/i);
      const queMatch = beforeReturn.match(/^Qu'est-ce que\s+(.+)$/i);
      const extracted = doesMatch?.[1] || queMatch?.[1];
      if (extracted && hasCodeLikeContent(extracted)) {
        const prefix = returnSuffixEn ? 'What does … return?' : "Qu'est-ce que … renvoie ?";
        return { prefix, code: extracted };
      }
    }

    // Single-line: find question word and remaining code
    const questionWords = [
      'What is', "Qu'est-ce que c'est", "Qu'est-ce que",
      'Result', 'Résultat', 'Output', 'Sortie', 'Value', 'Valeur',
      'What', 'Which', 'Lequel', 'How', 'Comment', 'When', 'Quand', 'Where', 'Où', 'Why', 'Pourquoi',
      'Can', 'Peut', 'Does', 'Est-ce que', 'Is', 'Est', 'Are', 'Sont', 'Will', 'Va', 'Would', 'Serait', 'Should', 'Devrait'
    ];

    for (const word of questionWords) {
      const pattern = new RegExp(`^${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s+`, 'i');
      const match = enhancedText.match(pattern);
      if (match && match[0]) {
        const questionEnd = match[0].length;
        let remainingText = enhancedText.substring(questionEnd).trim();
        remainingText = remainingText.replace(/^(of|de|is)\s+/i, '');
        const hasQuestionMark = remainingText.endsWith('?');
        if (hasQuestionMark) remainingText = remainingText.slice(0, -1).trim();

        const functionCallPattern = /[a-zA-Z_]\w*\s*\(/;
        const codeKeywordPattern = /\b(def|class|for|while|if|with|import|from|print)\s+/;
        const bracketPattern = /[\[\(\{]/;

        if (functionCallPattern.test(remainingText) ||
          bracketPattern.test(remainingText) ||
          codeKeywordPattern.test(remainingText)) {
          return {
            prefix: enhancedText.substring(0, questionEnd).trim() + (hasQuestionMark ? '?' : ''),
            code: remainingText
          };
        }
      }
    }

    // Fallback: look for code patterns anywhere
    const codePatterns = [
      /\b(def|class|for|while|if|with|import|from)\s+/,
      /print\s*\(/,
      /[a-zA-Z_]\w*\s*\(/,
    ];
    for (const pattern of codePatterns) {
      const match = enhancedText.match(pattern);
      if (match && match.index !== undefined) {
        const beforeCode = enhancedText.substring(0, match.index).trim();
        if (/^(What|Result|Output|Value|Which|How|When|Where|Why|Can|Does|Is|Are|Will|Would|Should)/i.test(beforeCode)) {
          return {
            prefix: beforeCode,
            code: enhancedText.substring(match.index).trim()
          };
        }
      }
    }

    return { prefix: enhancedText, code: '' };
  } catch {
    return { prefix: text, code: '' };
  }
};
