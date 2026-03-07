import React from 'react';
import { QuestionAttempt } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { formatTranslation } from '../translations';
import { splitQuestion, hasCodeLikeContent } from '../utils/splitQuestion';
import { translateQuestionText } from '../utils/translateQuestion';

const splitQuestionForDisplay = (text: string, lang: string) =>
  splitQuestion(text, lang, translateQuestionText);

interface HistoryLogProps {
  history: QuestionAttempt[];
  onBack: () => void;
  onSaveToIdLog?: (entry: { id: number; question: string; correctAnswer: string; explanation: string }) => void;
  savedIdLogIds?: number[];
}

export const HistoryLog: React.FC<HistoryLogProps> = ({ history, onBack, onSaveToIdLog, savedIdLogIds = [] }) => {
  const { t, language } = useLanguage();
  const sortedHistory = [...history].sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div className="space-y-6 animate-in slide-in-from-right duration-500">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black text-white flex items-center gap-3">
          <i className="fas fa-book-open text-yellow-300"></i> {t('history.learningLog')}
        </h2>
        <button
          onClick={onBack}
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
          {sortedHistory.map((attempt) => (
            <div
              key={`${attempt.id}-${attempt.timestamp}`}
              className={`glass rounded-2xl p-5 border-l-4 transition-all hover:translate-x-1 ${attempt.isCorrect ? 'border-l-yellow-400' : 'border-l-rose-500'
                }`}
            >
              <div className="flex justify-between items-start mb-3">
                <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest ${attempt.isCorrect ? 'bg-yellow-400/10 text-yellow-300' : 'bg-rose-500/10 text-rose-500'
                  }`}>
                  {t('history.level')} {attempt.level} • {attempt.isCorrect ? t('history.correct') : t('history.incorrect')}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-500 font-mono">
                    {new Date(attempt.timestamp).toLocaleDateString()}
                  </span>
                  {onSaveToIdLog && (
                    <button
                      type="button"
                      onClick={() => onSaveToIdLog({
                        id: attempt.id,
                        question: attempt.question,
                        correctAnswer: attempt.correctOption,
                        explanation: attempt.explanation
                      })}
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
                {(() => {
                  const { prefix, code } = splitQuestionForDisplay(attempt.question, language);
                  const displayText = translateQuestionText(attempt.question, language);
                  if (code) {
                    return (
                      <div className="rounded-lg bg-slate-800/50 overflow-hidden">
                        {prefix && (
                          <p className="text-yellow-300 font-bold px-3 pt-3 pb-1 leading-tight">{prefix}</p>
                        )}
                        <div className="p-4 overflow-x-hidden flex-1">
                          <pre className="text-yellow-300 text-[0.8rem] leading-6 font-['Fira_Code',_monospace] whitespace-pre-wrap">
                            {code}
                          </pre>
                        </div>
                      </div>
                    );
                  }
                  if (hasCodeLikeContent(displayText)) {
                    return (
                      <div className="rounded-lg bg-slate-800/50 overflow-hidden">
                        <div className="p-4 overflow-x-hidden flex-1">
                          <pre className="text-yellow-300 text-[0.8rem] leading-6 font-['Fira_Code',_monospace] whitespace-pre-wrap">
                            {displayText}
                          </pre>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <p className="text-yellow-300 font-bold leading-tight">
                      {displayText}
                    </p>
                  );
                })()}
              </div>

              <div className="space-y-2 mb-4">
                <div className={`text-xs p-2 rounded-lg flex items-center gap-2 ${attempt.isCorrect ? 'bg-yellow-400/10 text-yellow-300' : 'bg-rose-500/10 text-rose-400'
                  }`}>
                  <i className={`fas ${attempt.isCorrect ? 'fa-check' : 'fa-times'}`}></i>
                  <span>{t('quiz.yourAnswer')}: {attempt.selectedOption}</span>
                </div>
                {!attempt.isCorrect && (
                  <div className="text-xs p-2 rounded-lg bg-yellow-400/10 text-yellow-300 flex items-center gap-2">
                    <i className="fas fa-check"></i>
                    <span>{t('quiz.correctAnswer')}: {attempt.correctOption}</span>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-white/5">
                <p className="text-[11px] text-slate-400 leading-relaxed italic">
                  {attempt.explanation}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};