import React, { useState } from 'react';
import { IdLogEntry } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslatedShortExplanation } from '../data/shortExplanationsTranslations';
import { getQuestionBank, MAX_QUESTION_ID } from '../questionsBank';
import { formatTranslation } from '../translations';
import { translateQuestionText, getQuestionDisplay } from '../utils/translateQuestion';
import { getTranslatedDetailedExplanation } from '../data/detailedExplanationsTranslations';
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

interface IdLogViewProps {
  entries: IdLogEntry[];
  onClose: () => void;
}

export const IdLogView: React.FC<IdLogViewProps> = ({ entries, onClose }) => {
  const { t, language } = useLanguage();
  const [expandedEntries, setExpandedEntries] = useState<Set<string>>(new Set());
  const [idFilter, setIdFilter] = useState('');
  const sortedEntries = [...entries].sort((a, b) => b.timestamp - a.timestamp);
  const filteredEntries = (() => {
    const trimmed = idFilter.trim();
    if (!trimmed) return sortedEntries;
    const id = parseInt(trimmed, 10);
    if (isNaN(id)) return sortedEntries;
    return sortedEntries.filter((entry) => entry.id === id);
  })();

  const toggleCodonExplanation = (entryKey: string) => {
    setExpandedEntries(prev => {
      const newSet = new Set(prev);
      if (newSet.has(entryKey)) {
        newSet.delete(entryKey);
      } else {
        newSet.add(entryKey);
      }
      return newSet;
    });
  };

  const [detailedExplanationLevel, setDetailedExplanationLevel] = useState<DetailedExplanationLevel>('intermediate');

  const questionBank = getQuestionBank(language);
  const getQuestionDetailedExplanation = (id: number): string | null => {
    const question = questionBank.find(q => q.id === id);
    if (
      !question ||
      !(
        question.detailedExplanation ||
        question.detailedExplanationBeginner ||
        question.detailedExplanationIntermediate ||
        question.detailedExplanationExpert
      )
    ) {
      return null;
    }
    return getDetailedExplanationForLevel(question, detailedExplanationLevel) ?? null;
  };

  return (
    <div className="relative min-h-[600px] animate-in slide-in-from-left duration-500 pb-12 space-y-6">
      <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black text-white flex items-center gap-3">
            <i className="fas fa-list text-yellow-300"></i> {t('idSearch.idLog')}
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="mt-4 mb-2">
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={idFilter}
            onChange={(e) => setIdFilter(e.target.value.replace(/\D/g, ''))}
            placeholder={formatTranslation(t('idSearch.enterId'), { max: MAX_QUESTION_ID })}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 text-sm"
            min={1}
            max={MAX_QUESTION_ID}
          />
        </div>

        {filteredEntries.length === 0 ? (
          <div className="glass rounded-2xl p-12 text-center space-y-4">
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto text-slate-500 text-2xl">
              <i className="fas fa-bookmark"></i>
            </div>
            <p className="text-slate-500 font-medium">{t('idSearch.noSavedQuestions')}</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {filteredEntries.map((entry) => {
              const entryKey = `${entry.id}-${entry.timestamp}`;
              const isExpanded = expandedEntries.has(entryKey);
              const bankQuestion = questionBank.find((q) => q.id === entry.id);
              const translated = bankQuestion
                ? getQuestionDisplay(language, entry.question, bankQuestion.options)
                : { question: translateQuestionText(entry.question, language), options: [] as string[] };
              const displayQuestion = translated.question;
              const displayCorrectAnswer =
                bankQuestion && translated.options.length
                  ? translated.options[bankQuestion.options.indexOf(entry.correctAnswer)] ?? entry.correctAnswer
                  : entry.correctAnswer;
              const shortExplanation = getTranslatedShortExplanation(entry.id, entry.explanation, language);
              const detailedExplanation = getQuestionDetailedExplanation(entry.id);
              const shortExplanationLooksLikeCode = /\b(def|print|for|if|while|class|import|from)\b/.test(shortExplanation);
              return (
                <div
                  key={entryKey}
                  className="glass rounded-2xl p-5 border-l-4 border-l-yellow-400 transition-all hover:translate-x-1 cursor-pointer"
                  onClick={() => toggleCodonExplanation(entryKey)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleCodonExplanation(entryKey);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  title={t('idLog.clickToViewCodon')}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-yellow-400/10 text-yellow-300 rounded-lg text-xs font-bold flex items-center gap-2 group min-w-[4.25rem]">
                        ID: <span className="font-mono tabular-nums">{entry.id}</span>
                        <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'} text-[8px] transition-transform group-hover:scale-110`}></i>
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {new Date(entry.timestamp).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="max-h-[45vh] overflow-y-auto overflow-x-hidden bg-slate-800 rounded-lg">
                      {(() => {
                        const { prefix, code } = splitQuestionForDisplay(displayQuestion, language);
                        const displayText = displayQuestion;
                        if (code) {
                          return (
                            <div className="flex flex-col">
                              {prefix && (
                                <div className="px-4 pt-4 pb-2 border-b border-slate-700/50">
                                  <p className="text-yellow-300 text-lg font-medium leading-relaxed">{prefix}</p>
                                </div>
                              )}
                              <div className="p-4 overflow-x-hidden flex-1">
                                <pre className="text-yellow-300 text-sm leading-7 font-['Fira_Code',_monospace] whitespace-pre-wrap">
                                  {formatCodeSnippet(code)}
                                </pre>
                              </div>
                            </div>
                          );
                        }
                        if (hasCodeLikeContent(displayText)) {
                          return (
                            <div className="p-4 overflow-x-hidden flex-1">
                              <pre className="text-yellow-300 text-sm leading-7 font-['Fira_Code',_monospace] whitespace-pre-wrap">
                                {formatCodeSnippet(displayText)}
                              </pre>
                            </div>
                          );
                        }
                        return (
                          <h3 className="text-xl font-bold leading-tight text-yellow-300 px-4 pt-4 pb-4">
                            {displayText}
                          </h3>
                        );
                      })()}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-xs p-2 rounded-lg bg-yellow-400/10 text-yellow-300 flex items-center gap-2">
                      <i className="fas fa-check-circle"></i>
                      <span>{t('quiz.correctAnswer')}: {displayCorrectAnswer}</span>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="pt-3 border-t border-white/5 space-y-4 animate-in slide-in-from-top duration-200">
                      <div className="p-6 bg-yellow-400/10 rounded-xl border border-yellow-400/40">
                        <div className="flex items-center gap-2 mb-3">
                          <i className="fas fa-lightbulb text-yellow-300 text-sm"></i>
                          <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-yellow-300">{t('idLog.codonExplanation')}</h4>
                        </div>
                        {shortExplanationLooksLikeCode ? (
                          <div className="p-4 overflow-x-hidden bg-slate-900 rounded-lg">
                            <pre className="text-yellow-300 text-sm leading-6 font-['Fira_Code',_monospace] whitespace-pre-wrap">
                              {formatCodeSnippet(shortExplanation)}
                            </pre>
                          </div>
                        ) : (
                          <p className="text-[11px] text-slate-300 leading-relaxed italic whitespace-pre-wrap">
                            {shortExplanation}
                          </p>
                        )}
                      </div>

                      {detailedExplanation && (
                        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700/50">
                          <div className="space-y-2">
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
                            <div className="text-slate-200 leading-relaxed text-sm whitespace-pre-wrap bg-transparent">
                              {getTranslatedDetailedExplanation(
                                entry.id,
                                detailedExplanation,
                                language,
                                detailedExplanationLevel,
                                bankQuestion?.question ?? entry.question,
                                bankQuestion ? bankQuestion.options[bankQuestion.correct_option_index] : entry.correctAnswer
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
    </div>
  );
};
