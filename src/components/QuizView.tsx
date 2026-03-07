import React, { useState, useEffect, useRef } from 'react';
import { Question, QuestionAttempt } from '../types';
import { quizService } from '../services/quizService';
import { ProgressBar } from './ProgressBar';
import { LEVELS, getRandomModeScore } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { formatTranslation } from '../translations';
import { getTranslatedDetailedExplanation } from '../data/detailedExplanationsTranslations';
import { translateQuestionText, getQuestionDisplay } from '../utils/translateQuestion';
import { getTranslatedShortExplanation, SHORT_EXPLANATIONS_FR } from '../data/shortExplanationsTranslations';
import { getDetailedExplanationForLevel, type DetailedExplanationLevel } from '../utils/detailedExplanationLevel';
import { balanceDisplayedOptionLengths } from '../utils/optionLengthBalancer';

// Function to format code snippets with proper Python indentation
// Ensures newline after : and 4-space indentation for the next line
const formatCodeSnippet = (text: string): string => {
  if (!text) return '';

  // CRITICAL: For simple single-line expressions (like after "What is?"), don't format
  // Only format if it contains actual multi-line code blocks (def, class, if, for, while, etc.)
  const isSimpleExpression = !text.includes('\n') &&
    !/\b(def|class|if|for|while|with|try|except|finally|else|elif)\b/.test(text);

  if (isSimpleExpression) {
    // Return as-is for simple expressions
    return text;
  }

  // If it already contains newlines, it might be heavily pre-formatted.
  if (text.includes('\n')) {
    // Return as-is, assuming it is already formatted nicely
    return text;
  }

  let inString: string | null = null;
  let bracketDepth = 0;
  let currentLine = '';
  const initialLines: string[] = [];

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    // String handling
    if (!inString && (char === "'" || char === '"')) {
      inString = char;
      currentLine += char;
    } else if (inString === char && text[i - 1] !== '\\') {
      inString = null;
      currentLine += char;
    }
    // Bracket handling
    else if (!inString && (char === '[' || char === '(' || char === '{')) {
      bracketDepth++;
      currentLine += char;
    } else if (!inString && (char === ']' || char === ')' || char === '}')) {
      bracketDepth--;
      currentLine += char;
    }
    // Colon handling
    else if (!inString && bracketDepth === 0 && char === ':') {
      currentLine += char;
      initialLines.push(currentLine.trim());
      currentLine = '';
    }
    // Semicolon handling
    else if (!inString && bracketDepth === 0 && char === ';') {
      if (currentLine.trim()) initialLines.push(currentLine.trim());
      currentLine = '';
    }
    else {
      currentLine += char;
    }
  }

  if (currentLine.trim()) {
    initialLines.push(currentLine.trim());
  }

  let currentIndent = 0;
  const formattedLines: string[] = [];

  for (let i = 0; i < initialLines.length; i++) {
    let line = initialLines[i];

    // dedent before line
    if (/^(else|elif|except|finally)\b/.test(line)) {
      currentIndent = Math.max(0, currentIndent - 1);
    }

    if (currentIndent > 0) {
      if (/^(print|assert|obj\s*=|f\s*=|x\s*=|y\s*=|g\s*=|next\([^)]*\)|[a-z_]\w*\s*=\s*[A-Z])/.test(line) && !line.startsWith('self.')) {
        currentIndent = 0; // heuristic dedent to 0 for general variable assignment/function calls
      }
      if (/^(class|import|from)\b/.test(line)) {
        currentIndent = 0; // new class/module
      }
      if (line.match(/^[a-z_]\w*\(/) && !line.startsWith('self.')) {
        // Function calls often signify end of definition in one-liners
        const funcName = line.split('(')[0];
        if (!initialLines.slice(0, i).some(l => l.includes('def ' + funcName))) {
          currentIndent = 0;
        }
      }
    }

    formattedLines.push(' '.repeat(currentIndent * 4) + line);

    // indent after line
    if (line.endsWith(':')) {
      currentIndent++;
    } else if (/^(return|pass|break|continue)\b/.test(line)) {
      currentIndent = Math.max(0, currentIndent - 1);
    }
  }

  return formattedLines.join('\n');
};

// Function to enhance vague method calls with example strings
// DISABLED: Questions are now used exactly as they appear in the source
// This prevents bugs and ensures questions match questions_solution.md exactly
const enhanceVagueMethodCalls = (text: string): string => {
  // Return text unchanged - use questions exactly as they are in questionsBank.ts
  // This ensures questions match questions_solution.md exactly and prevents all enhancement bugs
  return text;

  /* DISABLED - Original enhancement logic commented out
   * Questions are now used exactly as they appear in the source to prevent bugs
   * and ensure consistency with questions_solution.md
   *
  let result = text;
  
  // First, handle "What is?" with nothing or vague content after it
  // Pattern: "What is?" followed by optional whitespace and possibly a trailing ?
  const vagueWhatIsPattern = /What is\?\s*(?:$|\?)/gi;
  const vagueWhatIsMatches = [...result.matchAll(vagueWhatIsPattern)];
  
  // Process matches in reverse order to maintain indices
  for (let i = vagueWhatIsMatches.length - 1; i >= 0; i--) {
    const match = vagueWhatIsMatches[i];
    const matchStart = match.index!;
    const matchEnd = match.index! + match[0].length;
    
    // Check what comes after "What is?" - if it's empty or just whitespace/question mark, add example
    const afterMatch = result.substring(matchEnd).trim();
    
    // If there's nothing meaningful after "What is?", add a default example
    if (!afterMatch || afterMatch === '?' || !/[a-zA-Z0-9_()[\]{}]/.test(afterMatch)) {
      // Find the end of "What is?" (including any trailing ?)
      const endPos = matchEnd;
      // Insert example after "What is?"
      result = result.substring(0, endPos) + ' ("HELLO")' + result.substring(endPos);
    }
  }
  
  // COMPREHENSIVE list of ALL Python string methods that should have examples
  // This must include EVERY string method to avoid missing any
  const stringMethods = new Set([
    // Case methods
    'title', 'upper', 'lower', 'capitalize', 'swapcase', 'casefold',
    // Search methods
    'find', 'rfind', 'index', 'rindex', 'count', 'startswith', 'endswith',
    // Split/join methods
    'split', 'rsplit', 'splitlines', 'partition', 'rpartition', 'join',
    // Strip methods
    'strip', 'lstrip', 'rstrip',
    // Replace/format methods
    'replace', 'format', 'format_map',
    // Encoding methods
    'encode', 'decode',
    // Padding/alignment methods
    'center', 'ljust', 'rjust', 'zfill',
    // Validation methods
    'islower', 'isupper', 'isdigit', 'isalpha', 'isalnum', 'isspace', 'isascii',
    'isdecimal', 'isidentifier', 'isnumeric', 'isprintable', 'istitle',
    // Translation methods
    'maketrans', 'translate',
    // Other methods
    'expandtabs', 'removeprefix', 'removesuffix'
  ]);
  
  // Pattern to match vague indexing/slicing: [0], [-1], [0:3], etc. without preceding object
  // Match patterns like: "What is? [0]" or "What is?\n[0]"
  const vagueIndexPattern = /([?\s\n])\[(-?\d*:?-?\d*:?-?\d*)\]/gi;
  let processedResult = result;
  let lastIndexPos = 0;
  let indexResult = '';
  let indexMatch;
  
  vagueIndexPattern.lastIndex = 0;
  while ((indexMatch = vagueIndexPattern.exec(result)) !== null) {
    const matchStart = indexMatch.index;
    const matchEnd = indexMatch.index! + indexMatch[0].length;
    const prefix = indexMatch[1];
    const indexContent = indexMatch[2];
    
    // Get text before the match to check if there's already a string/list
    const beforeMatch = result.substring(Math.max(0, matchStart - 50), matchStart);
    const hasObjectBefore = /(["'`][^"'`]*["'`]|[\w\)\]\}])\s*$/.test(beforeMatch.trim());
    
    // Add text before this match
    indexResult += result.substring(lastIndexPos, matchStart);
    
    if (!hasObjectBefore) {
      // Add example string before index
      indexResult += `${prefix}"Python"[${indexContent}]`;
    } else {
      // Return unchanged
      indexResult += indexMatch[0];
    }
    
    lastIndexPos = matchEnd;
  }
  
  // Add remaining text
  indexResult += result.substring(lastIndexPos);
  result = indexResult;
  
  // Pattern to match vague method calls (method() without a string/object before it)
  // Match patterns like: "What is? partition()" or "Result of upper()?" or "What is?\nfind("l")"
  // This pattern matches: space/question mark/newline, method name, optional whitespace, opening paren
  // CRITICAL: Exclude "is" when it's part of "What is" or "Result is" - these are question words, not methods
  // IMPORTANT: Exclude single-letter method names like "is" to avoid matching question words
  // The pattern requires method name to be at least 2 characters OR be a known string method
  const vagueMethodPattern = /([?\s\n])([a-z_][a-z0-9_]+)\s*\(/gi;
  
  let lastIndex = 0;
  let enhancedResult = '';
  let match;
  
  // Reset regex lastIndex
  vagueMethodPattern.lastIndex = 0;
  
  while ((match = vagueMethodPattern.exec(result)) !== null) {
    const matchStart = match.index;
    const matchEnd = match.index! + match[0].length;
    const prefix = match[1];
    const methodName = match[2];
    
    // Get text before the match to check if there's already a string/variable
    const beforeMatch = result.substring(Math.max(0, matchStart - 50), matchStart);
    const beforeMatchTrimmed = beforeMatch.trim();
    
    // CRITICAL: Exclude "is" when it's part of question phrases like "What is", "Result is", etc.
    // These are question words, not method calls
    // Also exclude single-letter method names that are likely question words
    const lowerMethodName = methodName.toLowerCase();
    const isQuestionWord = (lowerMethodName === 'is' || lowerMethodName.length <= 2) && 
                           (beforeMatchTrimmed.endsWith('What') || 
                            beforeMatchTrimmed.endsWith('what') ||
                            beforeMatchTrimmed.endsWith('Result') ||
                            beforeMatchTrimmed.endsWith('result') ||
                            beforeMatchTrimmed.endsWith('Output') ||
                            beforeMatchTrimmed.endsWith('output') ||
                            beforeMatchTrimmed.endsWith('Value') ||
                            beforeMatchTrimmed.endsWith('value') ||
                            beforeMatchTrimmed.endsWith('Which') ||
                            beforeMatchTrimmed.endsWith('which'));
    
    // Also check if the method name is NOT a known string method and is very short - likely a false match
    const isLikelyFalseMatch = !stringMethods.has(lowerMethodName) && 
                               lowerMethodName.length <= 2 && 
                               !['id', 'in', 'if', 'or', 'and', 'is', 'as'].includes(lowerMethodName);
    
    // CRITICAL: Check if "..." is present - it's intentionally generic and should NEVER be replaced
    // This must be checked BEFORE the regex check to prevent any replacement
    const hasEllipsis = beforeMatchTrimmed.includes('"..."') || 
                        beforeMatchTrimmed.includes("'...'") || 
                        beforeMatchTrimmed.includes('`...`') ||
                        result.substring(Math.max(0, matchStart - 10), matchStart + 10).includes('"..."') ||
                        result.substring(Math.max(0, matchStart - 10), matchStart + 10).includes("'...'");
    
    // Check if there's already a string literal, variable, or dot before this method
    // This prevents matching "hello".title() or x.title() or obj.method()
    const hasStringBefore = /(["'`][^"'`]*["'`]|[\w\)\]\}])\s*\.\s*$/.test(beforeMatchTrimmed);
    
    // Add text before this match
    enhancedResult += result.substring(lastIndex, matchStart);
    
    // Check if this is a string method that might need an example (or any method if it looks vague)
    const lowerMethod = methodName.toLowerCase();
    
    // NEVER replace if "..." is present - it's intentionally generic
    // NEVER replace "is" when it's part of question phrases
    // NEVER replace very short method names that are likely false matches
    if (hasEllipsis || isQuestionWord || isLikelyFalseMatch) {
      // Return unchanged - "..." should never be replaced, and question words should not be treated as methods
      enhancedResult += match[0];
    } else if (!hasStringBefore) {
      // Add an example string before the method call
      const examples: Record<string, string> = {
        // Case methods
        'title': '"HELLO"', 'upper': '"hello"', 'lower': '"HELLO"', 'capitalize': '"hello"',
        'swapcase': '"Hello"', 'casefold': '"HELLO"',
        // Search methods
        'find': '"hello"', 'rfind': '"hello"', 'index': '"hello"', 'rindex': '"hello"',
        'count': '"hello"', 'startswith': '"hello"', 'endswith': '"hello"',
        // Split/join methods
        'split': '"hello world"', 'rsplit': '"hello world"', 'splitlines': '"hello\nworld"',
        'partition': '"hello"', 'rpartition': '"hello"', 'join': '["a", "b"]',
        // Strip methods
        'strip': '"  hello  "', 'lstrip': '"  hello"', 'rstrip': '"hello  "',
        // Replace/format methods
        'replace': '"hello"', 'format': '"hello"', 'format_map': '"hello"',
        // Encoding methods
        'encode': '"hello"', 'decode': 'b"hello"',
        // Padding/alignment methods
        'center': '"hello"', 'ljust': '"hello"', 'rjust': '"hello"', 'zfill': '"42"',
        // Validation methods
        'islower': '"hello"', 'isupper': '"HELLO"', 'isdigit': '"123"', 'isalpha': '"abc"',
        'isalnum': '"abc123"', 'isspace': '"   "', 'isascii': '"hello"',
        'isdecimal': '"123"', 'isidentifier': '"hello"', 'isnumeric': '"123"',
        'isprintable': '"hello"', 'istitle': '"Hello World"',
        // Translation methods
        'maketrans': '"hello"', 'translate': '"hello"',
        // Other methods
        'expandtabs': '"hello\tworld"', 'removeprefix': '"hello"', 'removesuffix': '"hello"'
      };
      
      // If it's a known string method, use specific example, otherwise default to "hello"
      // BUT: If it looks like a string method (common patterns), enhance it anyway
      const isLikelyStringMethod = stringMethods.has(lowerMethod) || 
                                   lowerMethod.includes('find') || 
                                   lowerMethod.includes('index') ||
                                   lowerMethod.includes('split') ||
                                   lowerMethod.includes('strip') ||
                                   lowerMethod.includes('replace') ||
                                   lowerMethod.includes('case') ||
                                   lowerMethod.startsWith('is');
      
      if (isLikelyStringMethod || stringMethods.has(lowerMethod)) {
        const example = examples[lowerMethod] || '"hello"'; // Default to "hello" for unknown string methods
        // Reconstruct the method call with the example - include the opening paren
        enhancedResult += `${prefix}${example}.${methodName}(`;
      } else {
        // Even if not a string method, if it's bare, we should enhance it (might be list method, etc.)
        // Default to "hello" for string-like operations
        enhancedResult += `${prefix}"hello".${methodName}(`;
      }
    } else {
      // Return unchanged
      enhancedResult += match[0];
    }
    
    lastIndex = matchEnd;
  }
  
  // Add remaining text (this includes any method arguments and closing parens)
  enhancedResult += result.substring(lastIndex);
  
  // CRITICAL FIX: Also check for indexing and method calls at the START of lines (after newlines)
  // This handles cases where "What is?" is on one line and "[0]" or "find("l")" is on the next
  
  // First handle bare indexing/slicing at line start: [0], [-1], [0:3], [:3], etc.
  const lineStartIndexPattern = /^\[(-?\d*:?-?\d*:?-?\d*)\]/gm;
  enhancedResult = enhancedResult.replace(lineStartIndexPattern, (match, indexContent) => {
    return `"Python"[${indexContent}]`;
  });
  
  // Then handle method calls at line start - ENHANCE ALL OF THEM, not just known ones
  const lineStartMethodPattern = /^([a-z_][a-z0-9_]*)\s*\(/gm;
  enhancedResult = enhancedResult.replace(lineStartMethodPattern, (match, methodName) => {
    // Enhance ALL bare method calls at line start - better to enhance than miss one
    const lowerMethod = methodName.toLowerCase();
    const examples: Record<string, string> = {
      'title': '"HELLO"', 'upper': '"hello"', 'lower': '"HELLO"', 'capitalize': '"hello"',
      'swapcase': '"Hello"', 'casefold': '"HELLO"',
      'find': '"hello"', 'rfind': '"hello"', 'index': '"hello"', 'rindex': '"hello"',
      'count': '"hello"', 'startswith': '"hello"', 'endswith': '"hello"',
      'split': '"hello world"', 'rsplit': '"hello world"', 'splitlines': '"hello\nworld"',
      'partition': '"hello"', 'rpartition': '"hello"', 'join': '["a", "b"]',
      'strip': '"  hello  "', 'lstrip': '"  hello"', 'rstrip': '"hello  "',
      'replace': '"hello"', 'format': '"hello"', 'format_map': '"hello"',
      'encode': '"hello"', 'decode': 'b"hello"',
      'center': '"hello"', 'ljust': '"hello"', 'rjust': '"hello"', 'zfill': '"42"',
      'islower': '"hello"', 'isupper': '"HELLO"', 'isdigit': '"123"', 'isalpha': '"abc"',
      'isalnum': '"abc123"', 'isspace': '"   "', 'isascii': '"hello"',
      'isdecimal': '"123"', 'isidentifier': '"hello"', 'isnumeric': '"123"',
      'isprintable': '"hello"', 'istitle': '"Hello World"',
      'maketrans': '"hello"', 'translate': '"hello"',
      'expandtabs': '"hello\tworld"', 'removeprefix': '"hello"', 'removesuffix': '"hello"'
    };
    const example = examples[lowerMethod] || '"hello"'; // Default to "hello" for any unknown method
    return `${example}.${match}`;
  });
  
  return enhancedResult;
  */
};

// Function to enhance code section that starts with bare method calls or indexing
// DISABLED: Questions are now used exactly as they appear in the source
// This prevents bugs and ensures questions match questions_solution.md exactly
const enhanceBareMethodCall = (code: string): string => {
  // Return code unchanged - use questions exactly as they are in questionsBank.ts
  return code;

  /* DISABLED - Original enhancement logic commented out
  let enhancedCode = code;
  
  // First, check if code starts with bare indexing/slicing: [0], [-1], [0:3], [:3], etc.
  const bareIndexPattern = /^\[(-?\d*:?-?\d*:?-?\d*)\]/;
  const indexMatch = enhancedCode.match(bareIndexPattern);
  
  if (indexMatch) {
    // It's indexing/slicing - add example string before it
    // For simple index like [0], use "Python" for string context
    // For slicing, also use string
    enhancedCode = enhancedCode.replace(bareIndexPattern, '"Python"[$1]');
  }
  
  // Check if code starts with a bare method call (no string/object before it)
  const bareMethodStartPattern = /^([a-z_][a-z0-9_]*)\s*\(/i;
  const match = enhancedCode.match(bareMethodStartPattern);
  
  if (match) {
    const methodName = match[1];
    const stringMethods = ['title', 'upper', 'lower', 'capitalize', 'strip', 'replace', 'split',
      'join', 'find', 'index', 'count', 'startswith', 'endswith', 'islower',
      'isupper', 'isdigit', 'isalpha', 'isspace', 'format', 'encode', 'decode',
      'partition', 'rpartition', 'rsplit', 'lstrip', 'rstrip', 'zfill', 'center',
      'ljust', 'rjust', 'swapcase', 'casefold', 'expandtabs', 'maketrans', 'translate'];
    
    // ENHANCE ALL bare method calls - don't check if in list, just enhance all
    // This catches rfind, rindex, and any other methods we might have missed
    const lowerMethod = methodName.toLowerCase();
    const examples: Record<string, string> = {
      'title': '"HELLO"', 'upper': '"hello"', 'lower': '"HELLO"', 'capitalize': '"hello"',
      'swapcase': '"Hello"', 'casefold': '"HELLO"',
      'find': '"hello"', 'rfind': '"hello"', 'index': '"hello"', 'rindex': '"hello"',
      'count': '"hello"', 'startswith': '"hello"', 'endswith': '"hello"',
      'split': '"hello world"', 'rsplit': '"hello world"', 'splitlines': '"hello\nworld"',
      'partition': '"hello"', 'rpartition': '"hello"', 'join': '["a", "b"]',
      'strip': '"  hello  "', 'lstrip': '"  hello"', 'rstrip': '"hello  "',
      'replace': '"hello"', 'format': '"hello"', 'format_map': '"hello"',
      'encode': '"hello"', 'decode': 'b"hello"',
      'center': '"hello"', 'ljust': '"hello"', 'rjust': '"hello"', 'zfill': '"42"',
      'islower': '"hello"', 'isupper': '"HELLO"', 'isdigit': '"123"', 'isalpha': '"abc"',
      'isalnum': '"abc123"', 'isspace': '"   "', 'isascii': '"hello"',
      'isdecimal': '"123"', 'isidentifier': '"hello"', 'isnumeric': '"123"',
      'isprintable': '"hello"', 'istitle': '"Hello World"',
      'maketrans': '"hello"', 'translate': '"hello"',
      'expandtabs': '"hello\tworld"', 'removeprefix': '"hello"', 'removesuffix': '"hello"'
    };
    // Use specific example if available, otherwise default to "hello" - ENHANCE ALL METHODS
    const example = examples[lowerMethod] || '"hello"';
    enhancedCode = enhancedCode.replace(bareMethodStartPattern, `${example}.${methodName}(`);
  }
  
  return enhancedCode;
  */
};

// Function to translate common question patterns and explanations
const translateText = (text: string, language: string): string => {
  if (language !== 'fr') return text;

  // Question prefix translation (shared with IdSearchModal, IdLogView)
  let translated = translateQuestionText(text, language);

  // Common explanation pattern translations
  const explanationTranslations: Record<string, string> = {
    'returns': 'retourne',
    'Returns': 'Retourne',
    'converts': 'convertit',
    'Converts': 'Convertit',
    'creates': 'crée',
    'Creates': 'Crée',
    'checks': 'vérifie',
    'Checks': 'Vérifie',
    'finds': 'trouve',
    'Finds': 'Trouve',
    'removes': 'supprime',
    'Removes': 'Supprime',
    'adds': 'ajoute',
    'Adds': 'Ajoute',
    'The': 'Le',
    'the': 'le',
    'This': 'Ceci',
    'this': 'ceci',
    'method': 'méthode',
    'Method': 'Méthode',
    'function': 'fonction',
    'Function': 'Fonction',
    'returns a': 'retourne un',
    'Returns a': 'Retourne un',
  };

  // Apply explanation translations (throughout text, but be careful with code)
  // Only translate if it's clearly an explanation (not code)
  if (!text.match(/^[a-zA-Z_][a-zA-Z0-9_]*\s*\(/) && !text.includes('def ') && !text.includes('class ')) {
    for (const [en, fr] of Object.entries(explanationTranslations)) {
      // Use word boundaries to avoid partial matches
      const pattern = new RegExp(`\\b${en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
      translated = translated.replace(pattern, (match) => {
        // Preserve case
        if (match[0] === match[0].toUpperCase()) {
          return fr.charAt(0).toUpperCase() + fr.slice(1);
        }
        return fr.toLowerCase();
      });
    }
  }

  return translated;
};

// Check if text contains any code-like content (for syntax highlighting)
const hasCodeLikeContent = (text: string): boolean => {
  if (!text || text.length < 2) return false;
  return (
    /f["']/.test(text) ||                    // f-strings f"..." f'...'
    /["'][^"']*["']/.test(text) ||           // String literals
    /[a-zA-Z_]\w*\s*\(/.test(text) ||         // Function/method calls
    /[\[\(\{]/.test(text) ||                  // Brackets
    /\.[a-zA-Z_]\w*\s*\(/.test(text) ||       // Method calls .name(
    /\b(def|class|for|while|if|with|import|from|print)\s+/.test(text) ||  // Keywords
    /\b(and|or|not)\b/.test(text) ||          // Boolean operators
    /[=!<>]=|[<>]/.test(text) ||             // Comparison operators ==, !=, <=, >=, <, >
    /\[\d*:?-?\d*:?-?\d*\]/.test(text) ||     // Indexing/slicing [0], [0:3]
    /[\+\-\*\/\%]/.test(text) ||             // Arithmetic operators
    /\*\*/.test(text) ||                      // Power operator
    /\b(True|False|None)\b/.test(text)        // Python literals
  );
};

// Function to split question into prefix and code
// Keeps all question text (like "What is", "Result of", "Value of", etc.) together at the top
const splitQuestion = (text: string, language: string = 'en') => {
  try {
    // First translate if needed
    const translatedText = translateText(text, language);
    // Then enhance vague method calls
    const enhancedText = enhanceVagueMethodCalls(translatedText);
    // Check for multi-line code blocks (has newlines and indentation)
    if (enhancedText.includes('\n')) {
      const lines = enhancedText.split('\n');
      // Find first line that looks like code (has indentation or code keywords)
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        // If line has indentation or starts with code keywords, split here
        if (/^\s{2,}/.test(line) || /^\s*(def|class|for|while|if|with|import|from)\s+/.test(line)) {
          const code = lines.slice(i).join('\n');
          return {
            prefix: lines.slice(0, i).join('\n').trim(),
            code: enhanceBareMethodCall(code) // Enhance code section for bare method calls
          };
        }
      }
    }

    // For "What does X return?" / "Qu'est-ce que X renvoie ?" — extract X as code for syntax highlighting
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

    // For single-line questions, find where code starts
    // First, check if there's a question word pattern (English or French)
    // Use simpler pattern matching to avoid regex issues with special characters
    const questionWords = [
      'What is', "Qu'est-ce que c'est", "Qu'est-ce que",
      'Result', 'Résultat',
      'Output', 'Sortie',
      'Value', 'Valeur',
      'What', 'Which', 'Lequel', 'How', 'Comment', 'When', 'Quand', 'Where', 'Où', 'Why', 'Pourquoi',
      'Can', 'Peut', 'Does', 'Est-ce que', 'Is', 'Est', 'Are', 'Sont', 'Will', 'Va', 'Would', 'Serait', 'Should', 'Devrait'
    ];

    let questionWordMatch = null;
    for (const word of questionWords) {
      const pattern = new RegExp(`^${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s+`, 'i');
      const match = enhancedText.match(pattern);
      if (match) {
        questionWordMatch = match;
        break;
      }
    }

    if (questionWordMatch && questionWordMatch[0]) {
      const questionEnd = questionWordMatch[0].length;
      let remainingText = enhancedText.substring(questionEnd).trim();

      // Remove "of", "de", "is", etc. from start of remaining text fully
      remainingText = remainingText.replace(/^(of|de|is)\s+/i, '');

      // Remove trailing question mark if present (it's part of the question, not code)
      const hasQuestionMark = remainingText.endsWith('?');
      if (hasQuestionMark) {
        remainingText = remainingText.slice(0, -1).trim();
      }

      // If remaining text has function calls, brackets, or other code patterns, treat as code
      // This catches cases like "type(None)", "print('hello')", "[1, 2, 3]", "Python"[0], "5 == 5 and 5 > 10", etc.
      // IMPORTANT: Use ALL remaining text as code to avoid dropping parts (like "Python" in "Python"[0])
      const functionCallPattern = /[a-zA-Z_]\w*\s*\(/;
      const codeKeywordPattern = /\b(def|class|for|while|if|with|import|from|print)\s+/;
      const bracketPattern = /[\[\(\{]/;
      const comparisonPattern = /[=!<>]=|[<>]/;  // ==, !=, <=, >=, <, >
      const booleanKeywordPattern = /\b(and|or|not)\b/;

      if (functionCallPattern.test(remainingText) ||
        bracketPattern.test(remainingText) ||
        codeKeywordPattern.test(remainingText) ||
        comparisonPattern.test(remainingText) ||
        booleanKeywordPattern.test(remainingText)) {
        // Use ALL remaining text as code - don't try to find "where code starts"
        // This ensures we never drop parts like "Python" in "Python"[0]
        return {
          prefix: enhancedText.substring(0, questionEnd).trim() + (hasQuestionMark ? '?' : ''),
          code: enhanceBareMethodCall(remainingText) // Enhance code section for bare method calls
        };
      }
    }

    // Fallback: look for common code patterns anywhere in the text
    const codePatterns = [
      /\b(def|class|for|while|if|with|import|from)\s+/,  // Code keywords
      /print\s*\(/,                                      // Print statements
      /[a-zA-Z_]\w*\s*\(/,                               // Function calls (more lenient)
    ];

    for (const pattern of codePatterns) {
      const match = enhancedText.match(pattern);
      if (match && match.index !== undefined) {
        const beforeCode = enhancedText.substring(0, match.index).trim();
        // Check if there's a question word before
        if (/^(What|Result|Output|Value|Which|How|When|Where|Why|Can|Does|Is|Are|Will|Would|Should)/i.test(beforeCode)) {
          const code = enhancedText.substring(match.index).trim();
          return {
            prefix: beforeCode,
            code: enhanceBareMethodCall(code) // Enhance code section for bare method calls
          };
        }
      }
    }

    // Fallback: if no clear code pattern, return as prefix
    return { prefix: enhancedText, code: '' };
  } catch (error) {
    // If anything goes wrong, just return the original text as prefix
    console.error('Error in splitQuestion:', error);
    return { prefix: text, code: '' };
  }
};

const shouldVisualizeOptionWhitespace = (options: string[]): boolean => {
  const normalized = new Map<string, Set<string>>();
  const noInvisible = new Map<string, Set<string>>();
  const invisibleFormatCharRegex = /\p{Cf}/u;

  for (const option of options) {
    const collapsedKey = option.replace(/\s+/g, ' ').trim();
    if (!normalized.has(collapsedKey)) normalized.set(collapsedKey, new Set<string>());
    normalized.get(collapsedKey)!.add(option);

    let stripped = '';
    for (const char of option) {
      if (/\s/u.test(char) || invisibleFormatCharRegex.test(char)) continue;
      stripped += char;
    }
    if (!noInvisible.has(stripped)) noInvisible.set(stripped, new Set<string>());
    noInvisible.get(stripped)!.add(option);
  }

  const hasWhitespaceSensitiveVariants = Array.from(normalized.values()).some(variants => variants.size > 1);
  const hasInvisibleOnlyDifferences = Array.from(noInvisible.values()).some(variants => variants.size > 1);
  const hasSignificantWhitespace = options.some(option => /^\s|\s$| {2,}|\t|\n/.test(option));

  return hasWhitespaceSensitiveVariants || hasInvisibleOnlyDifferences || hasSignificantWhitespace;
};

const visualizeWhitespace = (text: string): string => {
  const invisibleFormatCharRegex = /\p{Cf}/u;
  let result = '';

  for (const char of text) {
    if (char === ' ') {
      result += '·';
    } else if (char === '\t') {
      result += '⇥';
    } else if (char === '\n') {
      result += '↵\n';
    } else if (char === '\r') {
      result += '↵';
    } else if (char === '\u00A0') {
      result += '⍽';
    } else if (invisibleFormatCharRegex.test(char)) {
      result += '◌';
    } else if (/\s/u.test(char)) {
      result += '·';
    } else {
      result += char;
    }
  }

  return result;
};

interface QuizViewProps {
  level: number;
  currentProgress: number;
  completedIds: number[];
  /** Earned stars for current level (0 until ~10% progress); used for star display in level mode. */
  earnedStarsForLevel?: number;
  onAttempt: (attempt: QuestionAttempt) => void;
  onComplete: (score: number) => void;
  onExit: () => void;
  onSaveToIdLog?: (entry: { id: number; question: string; correctAnswer: string; explanation: string }) => void;
  savedIdLogIds?: number[];
  randomizeTrigger?: number; // Add trigger to force re-randomization
  randomMode?: boolean; // Random mode: questions from all levels
  randomModeStats?: { totalAnswered: number; totalCorrect: number }; // Base stats for live score display
  soundEnabled?: boolean;
  hapticEnabled?: boolean;
  onPlayCorrectSound?: () => void;
  onPlayWrongSound?: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  level,
  currentProgress,
  completedIds,
  earnedStarsForLevel = 0,
  onAttempt,
  onComplete,
  onExit,
  onSaveToIdLog,
  savedIdLogIds = [],
  randomizeTrigger,
  randomMode = false,
  randomModeStats,
  soundEnabled = true,
  hapticEnabled = true,
  onPlayCorrectSound,
  onPlayWrongSound
}) => {
  const { t, tRaw, language } = useLanguage();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [showDetailedExplanation, setShowDetailedExplanation] = useState(false);
  const [detailedExplanationLevel, setDetailedExplanationLevel] = useState<DetailedExplanationLevel>('intermediate');
  const [justSavedId, setJustSavedId] = useState<number | null>(null);

  // We use a ref to capture completedIds at the START of the quiz session.
  // This prevents the quiz from re-fetching if completedIds updates mid-quiz.
  const initialCompletedIds = useRef(completedIds);
  // Ref for session correct count - updated synchronously so live score displays immediately
  const sessionCorrectRef = useRef(0);

  // Helper function to shuffle array and track original index of correct answer
  const shuffleOptions = (question: Question): Question => {
    const options = [...question.options];
    const correctValue = options[question.correct_option_index];

    // Fisher-Yates shuffle
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }

    // Find new position of correct answer
    const newCorrectIndex = options.findIndex(opt => opt === correctValue);

    return {
      ...question,
      options,
      correct_option_index: newCorrectIndex
    };
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        // Fetch questions based on mode: level-specific or random from all levels
        const data = await quizService.getBatch(level, 15, initialCompletedIds.current, randomMode, language);
        // Shuffle options for each question so correct answer isn't always first
        const shuffledQuestions = data.map(shuffleOptions);
        setQuestions(shuffledQuestions);
        // Reset quiz state when questions are re-randomized
        setCurrentIndex(0);
        setSelectedOption(null);
        setIsAnswered(false);
        setScore(0);
        setShowDetailedExplanation(false);
        sessionCorrectRef.current = 0;
      } catch (err) {
        console.error("Failed to load genome batch:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
    // Dependency on 'level', 'randomizeTrigger', 'randomMode', and 'language'. If any changes, we reset.
    // If completedIds (passed from props) changes, we do NOT re-run this.
  }, [level, randomizeTrigger, randomMode, language]);

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;

    const currentQuestion = questions[currentIndex];
    const isCorrect = index === currentQuestion.correct_option_index;

    if (soundEnabled) {
      if (isCorrect) onPlayCorrectSound?.();
      else onPlayWrongSound?.();
    }

    setSelectedOption(index);
    setIsAnswered(true);

    if (isCorrect) {
      sessionCorrectRef.current += 1;
      setScore(s => s + 1);
    }

    onAttempt({
      id: currentQuestion.id,
      question: currentQuestion.question,
      selectedOption: currentQuestion.options[index],
      correctOption: currentQuestion.options[currentQuestion.correct_option_index],
      isCorrect,
      explanation: currentQuestion.explanation,
      level: level,
      timestamp: Date.now()
    });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setShowDetailedExplanation(false);
    } else {
      onComplete(score);
    }
  };

  const handleSaveCurrentId = () => {
    if (!onSaveToIdLog) return;
    onSaveToIdLog({
      id: currentQuestion.id,
      question: currentQuestion.question,
      correctAnswer: currentQuestion.options[currentQuestion.correct_option_index],
      explanation: currentQuestion.explanation
    });
    setJustSavedId(currentQuestion.id);
    setTimeout(() => setJustSavedId(null), 1200);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-6 text-center">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-300"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <i className="fas fa-dna text-yellow-300 animate-pulse"></i>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-slate-200 font-bold text-lg">{t('quiz.stabilizingGenome')}</p>
          <p className="text-slate-500 text-xs max-w-xs mx-auto">
            {formatTranslation(t('quiz.sequencingPatterns'), { level })}
          </p>
        </div>
      </div>
    );
  }

  if (questions.length === 0) return (
    <div className="text-center p-12 glass rounded-3xl">
      <p className="text-rose-400 font-bold mb-4">{t('quiz.sequenceError')}</p>
      <p className="text-slate-400 text-sm mb-6">{t('quiz.couldNotRetrieve')}</p>
      <button onClick={onExit} className="px-6 py-2 bg-yellow-400 text-slate-900 rounded-xl font-bold">{t('quiz.returnToHub')}</button>
    </div>
  );

  const currentQuestion = questions[currentIndex];
  const { question: displayQuestion, options: translatedOptions } = getQuestionDisplay(
    language,
    currentQuestion.question,
    currentQuestion.options
  );
  const displayOptions = balanceDisplayedOptionLengths(
    translatedOptions,
    currentQuestion.correct_option_index,
    currentQuestion.id,
    language,
    currentQuestion.questionFormat
  );
  const isIdSaved = savedIdLogIds.includes(currentQuestion.id) || justSavedId === currentQuestion.id;
  const showWhitespaceHints = shouldVisualizeOptionWhitespace(displayOptions);
  const hasDetailedExplanation =
    !!(
      currentQuestion.detailedExplanation ||
      currentQuestion.detailedExplanationBeginner ||
      currentQuestion.detailedExplanationIntermediate ||
      currentQuestion.detailedExplanationExpert
    );

  // Live evolution score for Random mode: base stats + session progress
  // Use sessionCorrectRef so it updates immediately (score state may lag)
  const sessionAnswered = isAnswered ? currentIndex + 1 : currentIndex;
  const sessionCorrect = sessionCorrectRef.current;
  const base = randomModeStats ?? { totalAnswered: 0, totalCorrect: 0 };
  const liveRandomStats = randomMode
    ? {
      totalAnswered: base.totalAnswered + sessionAnswered,
      totalCorrect: base.totalCorrect + sessionCorrect
    }
    : null;
  const liveEvolutionScore = liveRandomStats ? getRandomModeScore(liveRandomStats) : null;

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center bg-slate-900/40 backdrop-blur-xl p-4 rounded-2xl border border-white/10">
        <button onClick={onExit} className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors border border-white/5">
          <i className="fas fa-times"></i>
        </button>
        <div className="flex-1 min-w-0 px-6 overflow-x-auto overflow-y-hidden">
          <div className="flex justify-between items-center gap-6 text-[10px] font-black tracking-[0.2em] mb-1.5 min-w-max">
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-yellow-300">
                {currentQuestion.subLevel === 'Beginner' && t('subLevels.beginnerCaps')}
                {currentQuestion.subLevel === 'Intermediate' && t('subLevels.intermediateCaps')}
                {currentQuestion.subLevel === 'Expert' && t('subLevels.expertCaps')}
              </span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map(starNum => {
                  const isEarned = !randomMode && starNum <= earnedStarsForLevel;
                  return (
                    <i
                      key={starNum}
                      className={`fas fa-star text-[8px] ${isEarned ? 'text-amber-400' : 'text-slate-700'
                        }`}
                    ></i>
                  );
                })}
              </div>
            </div>
            <div className="flex gap-4 items-center shrink-0">
              {liveEvolutionScore !== null && (
                <span className="text-yellow-300">
                  {t('quiz.evolutionPoints')}: {liveEvolutionScore}
                </span>
              )}
              <span className="text-yellow-300">
                {formatTranslation(t('quiz.mutationOf'), { current: currentIndex + 1, total: questions.length })}
              </span>
              <span className="text-slate-400">{Math.round(((currentIndex + 1) / questions.length) * 100)}%</span>
            </div>
          </div>
          <ProgressBar current={currentIndex + 1} total={questions.length} colorClass="bg-yellow-400" />
        </div>
      </div>

      <div className="rounded-3xl p-6 md:p-10 space-y-8 shadow-2xl relative overflow-hidden bg-slate-950/40 backdrop-blur-2xl border border-white/10">
        <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-300 text-[10px] font-black uppercase tracking-[0.2em] border border-yellow-400/40">
            {currentQuestion.concept}
          </div>
          <button
            onClick={handleSaveCurrentId}
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border transition-colors ${isIdSaved
              ? 'bg-[#FF00FF]/20 text-[#FF00FF] border-[#FF00FF]/40'
              : 'bg-slate-700/50 text-slate-300 border-slate-600/50 hover:bg-slate-700/70'
              }`}
            title={isIdSaved ? t('idSearch.saved') : t('idSearch.saveToLog')}
            type="button"
          >
            ID: {currentQuestion.id}
            <i className={`fas ${isIdSaved ? 'fa-check' : 'fa-bookmark'} text-[9px]`}></i>
          </button>
        </div>

        <div className="space-y-4 pt-8">
          <div className="max-h-[70vh] overflow-y-auto overflow-x-hidden bg-slate-900/60 rounded-lg border border-white/5">
            {(() => {
              const { prefix, code } = splitQuestion(displayQuestion, language);
              const displayText = displayQuestion;
              // If we detected code, show prefix at top and code below with syntax highlighting
              if (code) {
                return (
                  <div className="flex flex-col">
                    {/* Question text always grouped at the top */}
                    {prefix && (
                      <div className="px-4 pt-4 pb-2 border-b border-slate-700/50">
                        <p className="text-yellow-300 text-lg font-medium leading-relaxed">{prefix}</p>
                      </div>
                    )}
                    {/* Code snippet below with proper monochromatic yellow color */}
                    <div className="p-4 overflow-x-hidden flex-1">
                      <pre className="text-yellow-300 text-sm leading-7 font-['Fira_Code',_monospace] whitespace-pre-wrap">
                        {formatCodeSnippet(code)}
                      </pre>
                    </div>
                  </div>
                );
              }
              // No code block: always white for logical fallacies and other prose (AGENTS.md §10).
              return (
                <h2 className="text-base md:text-lg font-semibold leading-relaxed text-white px-6 py-5">
                  {displayText}
                </h2>
              );
            })()}
          </div>
        </div>

        <div className="grid gap-3">
          {showWhitespaceHints && (
            <div className="text-[10px] text-slate-400 font-mono px-1">
              {t('quiz.whitespaceHint')}
            </div>
          )}
          {displayOptions.map((option, idx) => {
            // Base yellow-themed styling for all options
            let colorClass = "bg-slate-900/35 border-yellow-500/30 text-slate-100 hover:bg-yellow-500/10 hover:border-yellow-400/60";

            if (isAnswered) {
              if (idx === currentQuestion.correct_option_index) {
                // Correct answer: brightest yellow emphasis
                colorClass = "bg-yellow-400/18 border-yellow-300/90 text-yellow-50 shadow-lg shadow-yellow-400/25";
              } else if (idx === selectedOption) {
                // Selected but incorrect: wrong-answer panel lights up with #FF00FF
                colorClass = "bg-[#FF00FF]/10 border-2 border-[#FF00FF] text-slate-100 shadow-[0_0_16px_rgba(255,0,255,0.3)]";
              } else {
                // Non-selected options: neutral dark panel
                colorClass = "bg-slate-950/55 border-slate-800/80 text-slate-400";
              }
            }

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleOptionClick(idx)}
                onPointerDown={() => {
                  if (hapticEnabled && !isAnswered && typeof navigator !== 'undefined' && navigator.vibrate) {
                    navigator.vibrate([80, 40, 80]);
                  }
                }}
                className={`group w-full p-4 md:p-5 rounded-2xl border-2 text-left transition-all duration-300 flex items-center justify-between ${colorClass} ${!isAnswered && 'active:scale-[0.98]'}`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${isAnswered && idx === currentQuestion.correct_option_index
                      ? 'bg-yellow-400 text-slate-900'
                      : 'bg-slate-800 text-slate-200 group-hover:bg-yellow-400 group-hover:text-slate-900'
                      }`}
                  >
                    {String.fromCharCode(65 + idx)}
                  </div>
                  <span className={`font-semibold text-sm md:text-base whitespace-pre-wrap break-words ${showWhitespaceHints ? 'font-mono' : ''}`}>
                    {showWhitespaceHints ? visualizeWhitespace(option) : option}
                  </span>
                </div>
                {isAnswered && idx === currentQuestion.correct_option_index && (
                  <i className="fas fa-check-circle text-yellow-300 animate-in zoom-in duration-300"></i>
                )}
                {isAnswered && idx === selectedOption && idx !== currentQuestion.correct_option_index && (
                  <i className="fas fa-times-circle text-yellow-500 animate-in zoom-in duration-300"></i>
                )}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="animate-in slide-in-from-bottom-4 duration-500 space-y-6 pt-4">
            <div className="p-6 rounded-2xl bg-yellow-400/10 border border-yellow-400/40">
              {hasDetailedExplanation ? (
                <button
                  onClick={() => setShowDetailedExplanation(!showDetailedExplanation)}
                  className="w-full flex items-center justify-between gap-2 mb-3 text-yellow-300 hover:text-yellow-200 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <i className="fas fa-lightbulb text-sm"></i>
                    <h4 className="font-black text-[10px] uppercase tracking-[0.2em]">{t('idLog.codonExplanation')}</h4>
                    <span className="text-[9px] text-yellow-300/80 font-normal normal-case">
                      {showDetailedExplanation ? `(${t('quiz.hideExplanation')})` : `(${t('quiz.showExplanation')})`}
                    </span>
                  </div>
                  <i className={`fas fa-chevron-${showDetailedExplanation ? 'up' : 'down'} text-xs transition-transform group-hover:scale-110`}></i>
                </button>
              ) : (
                <div className="flex items-center gap-2 mb-3 text-yellow-300">
                  <i className="fas fa-lightbulb text-sm"></i>
                  <h4 className="font-black text-[10px] uppercase tracking-[0.2em]">{t('idLog.codonExplanation')}</h4>
                </div>
              )}
              <div className="space-y-4">
                {(() => {
                  const shortExp = getTranslatedShortExplanation(currentQuestion.id, currentQuestion.explanation, language);
                  const displayShortExp = (language === 'fr' && !SHORT_EXPLANATIONS_FR[currentQuestion.id])
                    ? translateText(shortExp, language)
                    : shortExp;
                  return currentQuestion.explanation.match(/\b(def|print|for|if|while|class|import)\b/) ? (
                    <div className="p-4 overflow-x-hidden bg-slate-900 rounded-lg">
                      <pre className="text-yellow-300 text-sm leading-6 font-['Fira_Code',_monospace] whitespace-pre-wrap">
                        {formatCodeSnippet(displayShortExp)}
                      </pre>
                    </div>
                  ) : (
                    <p className="text-yellow-300 leading-relaxed text-sm font-medium whitespace-pre-wrap">
                      {displayShortExp}
                    </p>
                  );
                })()}
                {showDetailedExplanation && hasDetailedExplanation && (
                  <div className="animate-in slide-in-from-top-4 duration-300 pt-4 border-t border-yellow-400/40 space-y-6">
                    <div className="space-y-3 rounded-xl bg-slate-900/90 border border-slate-700/50 p-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <h5 className="text-[10px] font-black text-yellow-300 uppercase tracking-[0.2em] flex items-center gap-2">
                          <i className="fas fa-graduation-cap text-xs"></i>
                          {t('glossary.inDepthDescription')}
                        </h5>
                        <label className="flex items-center gap-1.5 text-[10px] text-slate-400 ml-auto">
                          <span>{t('idSearch.explanationLevel')}:</span>
                          <select
                            value={detailedExplanationLevel}
                            onChange={(e) => setDetailedExplanationLevel(e.target.value as DetailedExplanationLevel)}
                            className="bg-slate-800 border border-slate-600 rounded px-2 py-0.5 text-slate-200 text-[10px] focus:outline-none focus:ring-1 focus:ring-yellow-400 appearance-none cursor-pointer [color-scheme:dark]"
                            style={{ minHeight: '1.5rem' }}
                          >
                            <option value="beginner">{t('subLevels.beginner')}</option>
                            <option value="intermediate">{t('subLevels.intermediate')}</option>
                            <option value="expert">{t('subLevels.expert')}</option>
                          </select>
                        </label>
                      </div>
                      <div className="text-white leading-relaxed text-sm whitespace-pre-wrap bg-transparent">
                        {getTranslatedDetailedExplanation(
                          currentQuestion.id,
                          getDetailedExplanationForLevel(currentQuestion, detailedExplanationLevel) ?? '',
                          language,
                          detailedExplanationLevel,
                          currentQuestion.question,
                          currentQuestion.options[currentQuestion.correct_option_index]
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full py-5 bg-yellow-400 hover:bg-yellow-500 rounded-2xl font-black text-lg text-slate-900 transition-all transform active:scale-95 shadow-2xl shadow-yellow-400/30 flex items-center justify-center gap-3"
            >
              {currentIndex === questions.length - 1 ? t('quiz.finishEvolution') : t('hub.continueMutation')}
              <i className="fas fa-arrow-right text-sm"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
