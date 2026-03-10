import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import { getQuestionBank, MAX_QUESTION_ID } from '../questionsBank';
import { useLanguage } from '../contexts/LanguageContext';
import { formatTranslation } from '../translations';
import { getTranslatedDetailedExplanation } from '../data/detailedExplanationsTranslations';
import { translateQuestionText, getQuestionDisplay } from '../utils/translateQuestion';
import { getTranslatedShortExplanation } from '../data/shortExplanationsTranslations';
import { getDetailedExplanationForLevel, type DetailedExplanationLevel } from '../utils/detailedExplanationLevel';
import { splitQuestion, hasCodeLikeContent } from '../utils/splitQuestion';

const formatCodeSnippet = (text: string): string => {
  if (!text) return '';

  const isSimpleExpression = !text.includes('\n') &&
    !/\b(def|class|if|for|while|with|try|except|finally|else|elif)\b/.test(text);

  if (isSimpleExpression) return text;
  if (text.includes('\n')) return text;

  let inString: string | null = null;
  let bracketDepth = 0;
  let currentLine = '';
  const initialLines: string[] = [];

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (!inString && (char === "'" || char === '"')) {
      inString = char;
      currentLine += char;
    } else if (inString === char && text[i - 1] !== '\\') {
      inString = null;
      currentLine += char;
    } else if (!inString && (char === '[' || char === '(' || char === '{')) {
      bracketDepth++;
      currentLine += char;
    } else if (!inString && (char === ']' || char === ')' || char === '}')) {
      bracketDepth--;
      currentLine += char;
    } else if (!inString && bracketDepth === 0 && char === ':') {
      currentLine += char;
      initialLines.push(currentLine.trim());
      currentLine = '';
    } else if (!inString && bracketDepth === 0 && char === ';') {
      if (currentLine.trim()) initialLines.push(currentLine.trim());
      currentLine = '';
    } else {
      currentLine += char;
    }
  }
  if (currentLine.trim()) initialLines.push(currentLine.trim());

  let currentIndent = 0;
  const formattedLines: string[] = [];

  for (let i = 0; i < initialLines.length; i++) {
    let line = initialLines[i];
    if (/^(else|elif|except|finally)\b/.test(line)) {
      currentIndent = Math.max(0, currentIndent - 1);
    }
    if (currentIndent > 0) {
      if (/^(print|assert|obj\s*=|f\s*=|x\s*=|y\s*=|g\s*=|next\([^)]*\)|[a-z_]\w*\s*=\s*[A-Z])/.test(line) && !line.startsWith('self.')) {
        currentIndent = 0;
      }
      if (/^(class|import|from)\b/.test(line)) currentIndent = 0;
      if (line.match(/^[a-z_]\w*\(/) && !line.startsWith('self.')) {
        const funcName = line.split('(')[0];
        if (!initialLines.slice(0, i).some(l => l.includes('def ' + funcName))) {
          currentIndent = 0;
        }
      }
    }
    formattedLines.push(' '.repeat(currentIndent * 4) + line);
    if (line.endsWith(':')) {
      currentIndent++;
    } else if (/^(return|pass|break|continue)\b/.test(line)) {
      currentIndent = Math.max(0, currentIndent - 1);
    }
  }
  return formattedLines.join('\n');
};

const splitQuestionForDisplay = (text: string, lang: string) =>
  splitQuestion(text, lang, translateQuestionText);

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

interface IdSearchModalProps {
  onClose: () => void;
  onSaveToLog: (entry: { id: number; question: string; correctAnswer: string; explanation: string }) => void;
  initialId?: number;
}

export const IdSearchModal: React.FC<IdSearchModalProps> = ({ onClose, onSaveToLog, initialId }) => {
  const { t, language } = useLanguage();
  const [idInput, setIdInput] = useState(initialId ? String(initialId) : '');
  const [question, setQuestion] = useState<Question | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [detailedExplanationLevel, setDetailedExplanationLevel] = useState<DetailedExplanationLevel>('intermediate');
  const displayContent = question ? getQuestionDisplay(language, question.question, question.options) : null;
  const showWhitespaceHints = question ? shouldVisualizeOptionWhitespace(displayContent!.options) : false;

  const handleSearch = (overrideId?: number) => {
    const raw = overrideId != null ? String(overrideId) : String(idInput || '').trim().replace(/\D/g, '');
    const id = raw ? parseInt(raw, 10) : NaN;
    if (isNaN(id) || id < 1 || id > MAX_QUESTION_ID) {
      setError(formatTranslation(t('idSearch.invalidId'), { max: MAX_QUESTION_ID }));
      setQuestion(null);
      return;
    }

    let bank = getQuestionBank(language);
    let found = bank.find(q => q.id === id);
    if (!found) {
      bank = getQuestionBank(language === 'fr' ? 'en' : 'fr');
      found = bank.find(q => q.id === id);
    }
    if (!found) {
      setError(formatTranslation(t('idSearch.questionNotFound'), { id }));
      setQuestion(null);
      return;
    }

    setError(null);
    setQuestion(found);
  };

  const handleIdInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '');
    setIdInput(val);
  };

  const handleSave = () => {
    if (!question) return;

    onSaveToLog({
      id: question.id,
      question: question.question,
      correctAnswer: question.options[question.correct_option_index],
      explanation: question.explanation
    });

    // Show confirmation
    const confirmBtn = document.getElementById('save-confirm');
    if (confirmBtn) {
      confirmBtn.textContent = t('idSearch.saved');
      setTimeout(() => {
        if (confirmBtn) confirmBtn.textContent = t('idSearch.saveToLog');
      }, 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    if (initialId != null && initialId >= 1 && initialId <= MAX_QUESTION_ID) {
      setIdInput(String(initialId));
      handleSearch(initialId);
    }
  }, [initialId]);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass rounded-3xl p-8 w-[calc(100vw-2rem)] max-w-4xl max-h-[90vh] overflow-y-auto space-y-6 animate-in zoom-in duration-300 shadow-2xl border border-white/10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black text-white flex items-center gap-3">
            <i className="fas fa-hashtag text-yellow-300"></i> {t('idSearch.searchById')}
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex gap-2">
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={idInput}
              onChange={handleIdInputChange}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder={formatTranslation(t('idSearch.enterId'), { max: MAX_QUESTION_ID })}
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30"
              minLength={1}
              maxLength={String(MAX_QUESTION_ID).length}
              aria-label={t('idSearch.enterId')}
            />
            <button
              type="button"
              onClick={() => handleSearch()}
              className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-slate-900 rounded-xl font-bold transition-all touch-manipulation"
            >
              <i className="fas fa-search mr-2"></i>{t('idSearch.search')}
            </button>
          </div>

          {error && (
            <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 text-sm">
              <i className="fas fa-exclamation-circle mr-2"></i>{error}
            </div>
          )}

          {question && (
            <div className="space-y-4 p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-yellow-500/10 text-yellow-300 rounded-lg text-xs font-bold min-w-[4.25rem]">
                    ID: <span className="font-mono tabular-nums">{question.id}</span>
                  </span>
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-lg text-xs font-bold">
                    {formatTranslation(t('levelSelector.level'), { level: question.level })}
                  </span>
                </div>
                <button
                  id="save-confirm"
                  onClick={handleSave}
                  className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 rounded-xl text-sm font-bold transition-all flex items-center gap-2"
                >
                  <i className="fas fa-bookmark"></i> {t('idSearch.saveToLog')}
                </button>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="mb-4">
                  <div className="max-h-[70vh] overflow-y-auto overflow-x-hidden bg-slate-800 rounded-lg">
                    {(() => {
                      const { prefix, code } = splitQuestionForDisplay(displayContent!.question, language);
                      const displayText = displayContent!.question;
                      if (code) {
                        return (
                          <div className="flex flex-col">
                            {prefix && (
                              <div className="px-4 pt-4 pb-2 border-b border-slate-700/50">
                                <p className="text-slate-100 text-base md:text-lg font-medium leading-relaxed">{prefix}</p>
                              </div>
                            )}
                            <div className="p-4 overflow-x-hidden flex-1">
                              <pre className="text-slate-100 text-base md:text-lg font-['Fira_Code',_monospace] whitespace-pre-wrap leading-relaxed">
                                {formatCodeSnippet(code)}
                              </pre>
                            </div>
                          </div>
                        );
                      }
                      if (hasCodeLikeContent(displayText)) {
                        return (
                          <div className="p-4 overflow-x-hidden flex-1">
                            <pre className="text-slate-100 text-base md:text-lg font-['Fira_Code',_monospace] whitespace-pre-wrap leading-relaxed">
                              {formatCodeSnippet(displayText)}
                            </pre>
                          </div>
                        );
                      }
                      return (
                        <h2 className="text-base md:text-lg font-semibold leading-relaxed text-slate-100 px-4 pt-4">
                          {displayText}
                        </h2>
                      );
                    })()}
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <p className="text-sm font-bold text-slate-400 mb-2">{t('idSearch.options')}:</p>
                  {showWhitespaceHints && (
                    <p className="text-[10px] text-slate-400 font-mono mb-2">{t('quiz.whitespaceHint')}</p>
                  )}
                  {displayContent!.options.map((option, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-lg ${idx === question.correct_option_index
                          ? 'bg-yellow-500/10 border border-yellow-400/30 text-yellow-300'
                          : 'bg-slate-800/50 border border-white/5 text-slate-300'
                        }`}
                    >
                      <div className="flex items-center gap-2">
                        {idx === question.correct_option_index && (
                          <i className="fas fa-check-circle text-yellow-300"></i>
                        )}
                        <span className="font-mono text-xs mr-2">{String.fromCharCode(65 + idx)}.</span>
                        <span className={`whitespace-pre-wrap break-words ${showWhitespaceHints ? 'font-mono' : ''}`}>
                          {showWhitespaceHints ? visualizeWhitespace(option) : option}
                        </span>
                        {idx === question.correct_option_index && (
                          <span className="ml-auto text-xs font-bold">{t('quiz.correct')}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm font-bold text-slate-400 mb-2">{t('idSearch.explanation')}:</p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {getTranslatedShortExplanation(question.id, question.explanation, language)}
                  </p>
                  {(question.detailedExplanation ||
                    question.detailedExplanationBeginner ||
                    question.detailedExplanationIntermediate ||
                    question.detailedExplanationExpert) && (
                      <details className="mt-3">
                        <summary className="cursor-pointer text-sm text-yellow-300 hover:text-yellow-200 font-bold">
                          {t('idSearch.showDetailedExplanation')}
                        </summary>
                        <div className="mt-2 space-y-2 rounded-xl bg-slate-900/90 border border-slate-700/50 p-4">
                          <label className="flex items-center gap-2 text-xs text-slate-400">
                            <span>{t('idSearch.explanationLevel')}:</span>
                            <select
                              value={detailedExplanationLevel}
                              onChange={(e) => setDetailedExplanationLevel(e.target.value as DetailedExplanationLevel)}
                              className="bg-slate-800 border border-slate-600 rounded px-2 py-1 text-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-yellow-400 appearance-none cursor-pointer [color-scheme:dark]"
                            >
                              <option value="beginner">{t('subLevels.beginner')}</option>
                              <option value="intermediate">{t('subLevels.intermediate')}</option>
                              <option value="expert">{t('subLevels.expert')}</option>
                            </select>
                          </label>
                          <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line bg-transparent">
                            {getTranslatedDetailedExplanation(
                              question.id,
                              getDetailedExplanationForLevel(question, detailedExplanationLevel) ?? '',
                              language,
                              detailedExplanationLevel,
                              question.question,
                              question.options[question.correct_option_index]
                            )}
                          </p>
                        </div>
                      </details>
                    )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
