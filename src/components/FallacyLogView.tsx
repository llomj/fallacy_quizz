import React, { useMemo, useState } from 'react';
import { FallacyLogEntry } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { formatTranslation } from '../translations';
import { GLOSSARY_TERMS_EN, GLOSSARY_TERMS_FR } from './GlossaryView';

const EN_TO_FR_MAP: Record<string, string> = {
  'Ad Hominem': 'Attaque personnelle',
  'Appeal to Authority': 'Appel à l\'autorité',
  'Appeal to Tradition': 'Appel à la tradition',
  'Appeal to Novelty': 'Appel à la nouveauté',
  'Appeal to Popularity': 'Appel à la popularité',
  'Appeal to Emotion': 'Appel à l\'émotion',
  'Appeal to Fear': 'Appel à la peur',
  'Appeal to Ignorance': 'Appel à l\'ignorance',
  'Appeal to Incredulity': 'Appel à l\'incrédulité',
  'Anecdotal Fallacy': 'Sophisme anecdotique',
  'Begging the Question': 'Pétition de principe',
  'False Dilemma': 'Dilemme trompeur',
  'Straw Man': 'Homme de paille',
  'Slippery Slope': 'Pente glissante',
  'Circular Reasoning': 'Raisonnement circulaire',
  'Post Hoc': 'Post Hoc',
  'Confirmation Bias': 'Biais de confirmation',
  'Bandwagon Fallacy': 'Appel à la foule',
  'Sunk Cost Fallacy': 'Sophisme des coûts irrécupérables',
  'False Cause': 'Fausse cause',
};

const FR_TO_EN_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(EN_TO_FR_MAP).map(([en, fr]) => [fr, en])
);

interface FallacyLogViewProps {
  entries: FallacyLogEntry[];
  onClose: () => void;
  onPlayClickSound?: () => void;
  onRemoveEntry?: (term: string) => void;
}

export const FallacyLogView: React.FC<FallacyLogViewProps> = ({ 
  entries, 
  onClose, 
  onPlayClickSound,
  onRemoveEntry 
}) => {
  const { t, language } = useLanguage();
  const [search, setSearch] = useState('');

  const glossaryMap = useMemo(() => {
    const target = language === 'fr' ? GLOSSARY_TERMS_FR : GLOSSARY_TERMS_EN;
    const map = new Map<string, typeof target[0]>();
    for (const item of target) {
      map.set(item.term.toLowerCase().trim(), item);
    }
    return map;
  }, [language]);

  const getDisplayEntry = (entry: FallacyLogEntry): FallacyLogEntry & { displayTerm: string } => {
    if (language === 'fr') {
      const frenchTerm = EN_TO_FR_MAP[entry.term] || entry.term;
      return {
        term: entry.term,
        definition: entry.definition,
        levelRange: entry.levelRange,
        timestamp: entry.timestamp,
        displayTerm: frenchTerm
      };
    }
    return { ...entry, displayTerm: entry.term };
  };

  const displayEntries = useMemo(() => {
    return entries
      .map(getDisplayEntry)
      .filter(entry => 
        (entry.displayTerm || entry.term).toLowerCase().includes(search.toLowerCase()) ||
        entry.definition.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => b.timestamp - a.timestamp);
  }, [entries, search, glossaryMap, language]);

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString();
  };

  return (
    <div className="min-h-[calc(100dvh-64px)] animate-in slide-in-from-right duration-300">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
          <i className="fas fa-bookmark text-yellow-300"></i> {t('app.fallacyLog') || 'Fallacy Log'}
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
            className="w-full pl-10 pr-3 py-3 text-sm bg-slate-900 border border-white/5 rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:border-yellow-400/60 transition-colors"
          />
        </div>
      )}

      {displayEntries.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {displayEntries.map((entry, idx) => (
            <div 
              key={`${entry.term}-${idx}`}
              className="glass p-4 rounded-xl space-y-2 hover:border-yellow-400/60 transition-all group"
            >
              <div className="flex justify-between items-start">
                <h4 className="text-sm font-bold text-yellow-300">
                  {entry.displayTerm || entry.term}
                </h4>
                {onRemoveEntry && (
                  <button
                    onClick={() => onRemoveEntry(entry.term)}
                    className="w-6 h-6 rounded-full flex items-center justify-center bg-slate-800 text-slate-500 hover:text-red-400 transition-colors"
                  >
                    <i className="fas fa-times text-[10px]"></i>
                  </button>
                )}
              </div>
              <p className="text-[10px] leading-relaxed text-slate-400">
                {entry.definition}
              </p>
              <div className="flex items-center gap-2 text-[8px] text-slate-600">
                <span className="bg-yellow-400/10 text-yellow-400 px-1.5 py-0.5 rounded">
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
