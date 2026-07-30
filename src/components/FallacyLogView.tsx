import React, { useMemo, useState } from 'react';
import { FallacyLogEntry } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { GLOSSARY_TERMS_EN, GLOSSARY_TERMS_FR } from './GlossaryView';

interface FallacyLogViewProps {
  entries: FallacyLogEntry[];
  onClose: () => void;
  onPlayClickSound?: () => void;
  onRemoveEntry?: (term: string) => void;
  title?: string;
}

export const FallacyLogView: React.FC<FallacyLogViewProps> = ({ 
  entries, 
  onClose, 
  onPlayClickSound,
  onRemoveEntry,
  title,
}) => {
  const { t, language } = useLanguage();
  const [search, setSearch] = useState('');
  
  const getDisplayEntry = (entry: FallacyLogEntry): FallacyLogEntry & { displayTerm: string } => {
    const englishIndex = GLOSSARY_TERMS_EN.findIndex((item) => item.term === entry.term);
    const frenchIndex = GLOSSARY_TERMS_FR.findIndex((item) => item.term === entry.term);
    const index = englishIndex >= 0 ? englishIndex : frenchIndex;
    const localized = index >= 0
      ? (language === 'fr' ? GLOSSARY_TERMS_FR[index] : GLOSSARY_TERMS_EN[index])
      : undefined;
    return {
      ...entry,
      definition: localized?.definition ?? entry.definition,
      displayTerm: localized?.term ?? entry.term,
    };
  };

  const displayEntries = useMemo(() => {
    return entries
      .map(getDisplayEntry)
      .filter(entry => 
        (entry.displayTerm || entry.term).toLowerCase().includes(search.toLowerCase()) ||
        entry.definition.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => b.timestamp - a.timestamp);
  }, [entries, search, language]);

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString();
  };

  return (
    <div className="min-h-[calc(100dvh-64px)] animate-in slide-in-from-right duration-300 pt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
          <i className="fas fa-bookmark quiz-accent-text"></i> {title || t('app.fallacyLog') || 'Fallacy Log'}
        </h2>
        <button 
          onClick={() => { onPlayClickSound?.(); onClose(); }}
          className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-bold transition-colors"
        >
          {t('history.backToHub')}
        </button>
      </div>

      {entries.length > 0 && (
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 text-sm">
            <i className="fas fa-search"></i>
          </div>
          <input 
            type="text"
            placeholder={t('glossary.searchPlaceholder')?.replace('{count}', String(entries.length)) || 'Search...'}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="quiz-accent-focus w-full pl-10 pr-3 py-3 text-sm bg-slate-900 border border-white/5 rounded-2xl text-white placeholder:text-slate-600 focus:outline-none transition-colors"
          />
        </div>
      )}

      {displayEntries.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {displayEntries.map((entry, idx) => (
            <div 
              key={`${entry.term}-${idx}`}
              className="glass quiz-accent-border p-4 rounded-xl space-y-2 transition-all group"
            >
              <div className="flex justify-between items-start">
                <h4 className="quiz-accent-text text-sm font-bold">
                  {entry.displayTerm || entry.term}
                </h4>
                {onRemoveEntry && (
                  <button
                    onClick={() => onRemoveEntry(entry.term)}
                    className="w-6 h-6 rounded-full flex items-center justify-center bg-slate-800 text-slate-500 hover:text-red-400 transition-colors"
                    aria-label={`${t('glossary.removeFromSavedGlossary')}: ${entry.displayTerm || entry.term}`}
                    title={`${t('glossary.removeFromSavedGlossary')}: ${entry.displayTerm || entry.term}`}
                  >
                    <i className="fas fa-times text-[10px]"></i>
                  </button>
                )}
              </div>
              <p className="text-[10px] leading-relaxed text-slate-400">
                {entry.definition}
              </p>
              <div className="flex items-center gap-2 text-[8px] text-slate-600">
                <span className="quiz-accent-surface px-1.5 py-0.5 rounded">
                  Level {entry.levelRange}
                </span>
                <span>{formatDate(entry.timestamp)}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-slate-500">
          <i className="fas fa-bookmark text-4xl mb-4 block opacity-20"></i>
          <p>{t('glossary.noResults')?.replace('{search}', search) || 'No saved fallacies yet.'}</p>
          <p className="text-xs mt-2">Go to Glossary and tap the bookmark icon to save fallacies.</p>
        </div>
      )}
    </div>
  );
};
