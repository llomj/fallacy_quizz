import React, { useState } from 'react';
import { QuestionAttempt } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { formatTranslation } from '../translations';
import { translateQuestionText, translateOptionText, getQuestionDisplay } from '../utils/translateQuestion';
import { displayStoredQuizOptionLabel } from '../utils/quizStoredOptionDisplay';
import { getTranslatedShortExplanation, isLogicalFallaciesAppQuestionId } from '../data/shortExplanationsTranslations';
import { normalizeExplanationWhitespace } from '../utils/explanationWhitespace';
import { ExplanationWithStepNumbers } from './ExplanationWithStepNumbers';
import { getQuestionBank } from '../questionsBank';
import { getTranslatedDetailedExplanation } from '../data/detailedExplanationsTranslations';
import { getDetailedExplanationForLevel, type DetailedExplanationLevel } from '../utils/detailedExplanationLevel';

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

interface HistoryLogProps {
  history: QuestionAttempt[];
  onBack: () => void;
  onSaveToIdLog?: (entry: { id: number; question: string; correctAnswer: string; explanation: string }) => void;
  savedIdLogIds?: number[];
  onPlayClickSound?: () => void;
}

export const HistoryLog: React.FC<HistoryLogProps> = ({ history, onBack, onSaveToIdLog, savedIdLogIds = [], onPlayClickSound }) => {
  const { t, language } = useLanguage();
  const [expandedEntries, setExpandedEntries] = useState<Set<string>>(new Set());
  const [detailedExplanationLevel, setDetailedExplanationLevel] = useState<DetailedExplanationLevel>('intermediate');
  const sortedHistory = [...history].sort((a, b) => b.timestamp - a.timestamp);

  const questionBank = getQuestionBank(language);

  const toggleCodonExplanation = (entryKey: string) => {
    onPlayClickSound?.();
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
    <div className="space-y-6 animate-in slide-in-from-right duration-500">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black text-white flex items-center gap-3">
          <i className="fas fa-book-open text-yellow-300"></i> {t('history.learningLog')}
        </h2>
        <button
          onClick={() => { onPlayClickSound?.(); onBack(); }}
          className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-bold transition-colors"
        >
          {t('history.backToHub')}
        </button>
      </div>

      {sortedHistory.length === 0 ? (
        <div className="glass rounded-3xl p-12 text-center space-y-4">
          <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto text-slate-500 text-2xl">
            <i className="fas fa-ghost"></i>
          </div>
          <p className="text-slate-500 font-medium">{t('history.emptyLog')}</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {sortedHistory.map((attempt) => {
            const entryKey = `${attempt.id}-${attempt.timestamp}`;
            const isExpanded = expandedEntries.has(entryKey);
            const bankQuestion = questionBank.find((q) => q.id === attempt.id);
            const translated = bankQuestion
              ? getQuestionDisplay(language, attempt.question, bankQuestion.options)
              : null;
            const displayQuestionText =
              translated?.question ?? translateQuestionText(attempt.question, language);
            const displayCorrectAnswer =
              bankQuestion && translated?.options.length
                ? displayStoredQuizOptionLabel(
                    language,
                    attempt.id,
                    attempt.correctOption,
                    translated.options,
                    bankQuestion
                  )
                : language === 'fr'
                  ? translateOptionText(attempt.correctOption, 'fr')
                  : attempt.correctOption;
            const displaySelectedOption =
              bankQuestion && translated?.options.length
                ? displayStoredQuizOptionLabel(
                    language,
                    attempt.id,
                    attempt.selectedOption,
                    translated.options,
                    bankQuestion
                  )
                : language === 'fr'
                  ? translateOptionText(attempt.selectedOption, 'fr')
                  : attempt.selectedOption;
            const shortExplanation = getTranslatedShortExplanation(attempt.id, attempt.explanation, language);
            const detailedExplanation = getQuestionDetailedExplanation(attempt.id);
            const shortExplanationLooksLikeCode =
              !isLogicalFallaciesAppQuestionId(attempt.id) &&
              /\b(def|print|for|if|while|class|import|from)\b/.test(shortExplanation);

            return (
              <div
                key={entryKey}
                className={`glass rounded-2xl p-5 border-l-4 transition-all hover:translate-x-1 cursor-pointer ${attempt.isCorrect ? 'border-l-yellow-400' : 'border-l-rose-500'
                  }`}
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
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest ${attempt.isCorrect ? 'bg-yellow-400/10 text-yellow-300' : 'bg-rose-500/10 text-rose-500'
                      }`}>
                      {t('history.level')} {attempt.level} • {attempt.isCorrect ? t('history.correct') : t('history.incorrect')}
                    </span>
                    <span className="px-3 py-1 bg-yellow-400/10 text-yellow-300 rounded-lg text-xs font-bold flex items-center gap-2 group min-w-[4.25rem]">
                      ID: <span className="font-mono tabular-nums">{attempt.id}</span>
                      <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'} text-[8px] transition-transform group-hover:scale-110`}></i>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-500 font-mono">
                      {new Date(attempt.timestamp).toLocaleDateString()}
                    </span>
                    {onSaveToIdLog && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onPlayClickSound?.();
                          onSaveToIdLog({
                            id: attempt.id,
                            question: attempt.question,
                            correctAnswer: attempt.correctOption,
                            explanation: attempt.explanation
                          });
                        }}
                        className={`p-1.5 rounded-lg transition-colors ${savedIdLogIds.includes(attempt.id)
                          ? 'bg-[#FF00FF]/20 text-[#FF00FF]'
                          : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-yellow-300'
                          }`}
                        title={savedIdLogIds.includes(attempt.id) ? t('idSearch.saved') : t('idSearch.saveToLog')}
                        aria-label={savedIdLogIds.includes(attempt.id) ? t('idSearch.saved') : t('idSearch.saveToLog')}
                      >
                        <i className={`fas ${savedIdLogIds.includes(attempt.id) ? 'fa-check' : 'fa-bookmark'} text-xs`}></i>
                      </button>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <div className="max-h-[45vh] overflow-y-auto overflow-x-hidden bg-slate-800 rounded-lg">
                    <div className="px-6 py-5">
                      <h3 className="text-base md:text-lg font-semibold leading-relaxed text-yellow-400 whitespace-pre-wrap break-words">
                        {displayQuestionText}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className={`text-xs p-2 rounded-lg flex items-center gap-2 ${attempt.isCorrect ? 'bg-yellow-400/10 text-yellow-300' : 'bg-rose-500/10 text-rose-400'
                    }`}>
                    <i className={`fas ${attempt.isCorrect ? 'fa-check' : 'fa-times'}`}></i>
                    <span>{t('quiz.yourAnswer')}: {displaySelectedOption}</span>
                  </div>
                  {!attempt.isCorrect && (
                    <div className="text-xs p-2 rounded-lg bg-yellow-400/10 text-yellow-300 flex items-center gap-2">
                      <i className="fas fa-check"></i>
                      <span>{t('quiz.correctAnswer')}: {displayCorrectAnswer}</span>
                    </div>
                  )}
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
                            {formatCodeSnippet(normalizeExplanationWhitespace(shortExplanation))}
                          </pre>
                        </div>
                      ) : (
                        <p className="text-[11px] text-slate-300 leading-relaxed italic whitespace-pre-wrap">
                          {normalizeExplanationWhitespace(shortExplanation)}
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
                                onChange={(e) => {
                                  e.stopPropagation();
                                  setDetailedExplanationLevel(e.target.value as DetailedExplanationLevel);
                                }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-slate-800 border border-slate-600 rounded px-2 py-0.5 text-slate-200 text-[10px] focus:outline-none focus:ring-1 focus:ring-yellow-400 appearance-none cursor-pointer [color-scheme:dark]"
                                style={{ minHeight: '1.5rem' }}
                              >
                                <option value="beginner">{t('subLevels.beginner')}</option>
                                <option value="intermediate">{t('subLevels.intermediate')}</option>
                                <option value="expert">{t('subLevels.expert')}</option>
                              </select>
                            </label>
                          </div>
                          <ExplanationWithStepNumbers
                            className="text-sm bg-transparent"
                            bodyClassName="text-slate-200"
                            stepClassName="text-yellow-300 font-semibold"
                            text={normalizeExplanationWhitespace(
                              getTranslatedDetailedExplanation(
                                attempt.id,
                                detailedExplanation,
                                language,
                                detailedExplanationLevel,
                                bankQuestion?.question ?? attempt.question,
                                bankQuestion ? bankQuestion.options[bankQuestion.correct_option_index] : attempt.correctOption,
                                bankQuestion?.explanation
                              )
                            )}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
