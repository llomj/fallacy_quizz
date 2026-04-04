import React, { useState, useEffect } from 'react';
import { GlossaryItem } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { formatTranslation } from '../translations';
import { useTranslatedGlossary } from '../hooks/useTranslatedData';

interface GlossaryViewProps {
  onBack: () => void;
  onPlayClickSound?: () => void;
}

export const GlossaryView: React.FC<GlossaryViewProps> = ({ onBack, onPlayClickSound }) => {
  const { t } = useLanguage();
  const GLOSSARY = useTranslatedGlossary();
  const [search, setSearch] = useState('');
  const [selectedTerm, setSelectedTerm] = useState<GlossaryItem | null>(null);
  const [exampleTier, setExampleTier] = useState<'beginner' | 'intermediate' | 'expert'>('intermediate');

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedTerm) {
      document.body.style.overflow = 'hidden';
      setExampleTier('intermediate');
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedTerm]);


  const getExampleForTier = (item: GlossaryItem): string => {
    switch (exampleTier) {
      case 'beginner':
        return item.exampleBeginner ?? item.example;
      case 'intermediate':
        return item.exampleIntermediate ?? item.example;
      case 'expert':
        return item.exampleExpert ?? item.example;
      default:
        return item.example;
    }
  };

  const filteredGlossary = React.useMemo(() => {
    return GLOSSARY
      .filter(item => 
        item.term.toLowerCase().includes(search.toLowerCase()) ||
        item.definition.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [GLOSSARY, search]);

  // Memoize levels to prevent breaking useMemo dependencies
  const levels = React.useMemo(() => Array.from({ length: 11 }, (_, i) => i), []);

  const getLevelsFromRange = (range: string): number[] => {
    const parts = range.split('-').map((part) => Number(part.trim()));
    if (parts.length === 1 && !Number.isNaN(parts[0])) return [parts[0]];
    if (parts.length !== 2 || Number.isNaN(parts[0]) || Number.isNaN(parts[1])) return [];
    const [start, end] = parts[0] <= parts[1] ? parts : [parts[1], parts[0]];
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  const itemsByLevel = React.useMemo(() => {
    const map: Record<number, GlossaryItem[]> = {};
    for (const level of levels) {
      map[level] = GLOSSARY
        .filter((item) => getLevelsFromRange(item.levelRange).includes(level))
        .sort((a, b) => a.term.localeCompare(b.term));
    }
    return map;
  }, [GLOSSARY, levels]);

  /** Split text by newline or literal \n (from data) and render as paragraphs. */
  const renderAsParagraphs = (text: string, className: string) => {
    const paragraphs = text.split(/\n|\\n/).map((s) => s.trim()).filter(Boolean);
    return (
      <div className={className}>
        {paragraphs.map((para, i) => (
          <p key={i} className={i > 0 ? 'mt-3' : ''}>
            {para}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div className="relative min-h-[600px] animate-in slide-in-from-left duration-500 pb-12">
      {/* Detail Overlay - Improved Scrolling Architecture for Mobile */}
      {selectedTerm && (
        <div className="fixed inset-0 z-[100] overflow-y-auto overflow-x-hidden overscroll-contain flex justify-center items-start sm:items-center p-4">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity" 
            onClick={() => setSelectedTerm(null)}
          ></div>
          
          {/* Content Box */}
          <div className="glass w-full max-w-2xl my-4 sm:my-8 rounded-3xl p-6 sm:p-10 shadow-2xl relative z-10 border-yellow-400/40 animate-in fade-in zoom-in duration-300 overflow-x-hidden min-h-0">
            <button 
              onClick={() => { onPlayClickSound?.(); setSelectedTerm(null); }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors border border-white/10"
            >
              <i className="fas fa-times"></i>
            </button>

            <div className="space-y-5 sm:space-y-6">
              <div className="space-y-2 pt-2">
                <span className="inline-block text-[10px] font-black text-yellow-300 uppercase tracking-[0.2em] px-2.5 py-0.5 bg-yellow-400/10 rounded-full border border-yellow-400/40">
                  {formatTranslation(t('glossary.levelConcept'), { range: selectedTerm.levelRange })}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white">{selectedTerm.term}</h3>
              </div>

              <div className="space-y-2">
                <h4 className="text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <i className="fas fa-book-open text-yellow-300"></i> {t('glossary.inDepthDescription')}
                </h4>
                <div className="text-slate-300 leading-relaxed font-medium text-xs sm:text-sm">
                  {renderAsParagraphs(selectedTerm.detailedDescription, '')}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <i className="fas fa-code text-yellow-300"></i> {t('glossary.implementationExample')}
                </h4>
                <div className="flex gap-2 flex-wrap">
                  {(['beginner', 'intermediate', 'expert'] as const).map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => { onPlayClickSound?.(); setExampleTier(tier); }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                        exampleTier === tier
                          ? 'bg-yellow-400 text-slate-900 border-yellow-400'
                          : 'bg-slate-800/80 text-slate-400 border-white/10 hover:border-yellow-400/40 hover:text-slate-200'
                      }`}
                    >
                      {tier === 'beginner' && t('glossary.exampleLevelBeginner')}
                      {tier === 'intermediate' && t('glossary.exampleLevelIntermediate')}
                      {tier === 'expert' && t('glossary.exampleLevelExpert')}
                    </button>
                  ))}
                </div>
                <div className="bg-slate-900 rounded-2xl p-3 sm:p-4 border border-white/5 shadow-inner overflow-hidden">
                  <div className="text-xs sm:text-sm text-white leading-relaxed">
                    {renderAsParagraphs(getExampleForTier(selectedTerm), '')}
                  </div>
                </div>
              </div>

              {/* Added more bottom padding/margin to ensure scroll clearance */}
              <div className="pt-4 pb-2">
                <button 
                  onClick={() => { onPlayClickSound?.(); setSelectedTerm(null); }}
                  className="w-full py-4 bg-yellow-400 hover:bg-yellow-500 text-slate-900 rounded-2xl font-black transition-all shadow-xl shadow-yellow-400/30 active:scale-95"
                >
                  {t('operations.gotIt')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
          <i className="fas fa-circle-info text-yellow-300"></i> {t('glossary.title')}
        </h2>
        <button 
          onClick={() => { onPlayClickSound?.(); onBack(); }}
          className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-bold transition-colors"
        >
          {t('history.backToHub')}
        </button>
      </div>

      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 text-sm">
          <i className="fas fa-search"></i>
        </div>
        <input 
          type="text"
          placeholder={formatTranslation(t('glossary.searchPlaceholder'), { count: GLOSSARY.length })}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-3 py-3 text-sm bg-slate-900 border border-white/5 rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:border-yellow-400/60 transition-colors"
        />
        {search !== '' && (
          <p className="mt-2 text-xs text-slate-500">
            {formatTranslation(t('glossary.showingCount'), { count: filteredGlossary.length, total: GLOSSARY.length })}
          </p>
        )}
      </div>

      {search === '' ? (
        <div className="space-y-12">
          {levels.map(level => {
            const items = itemsByLevel[level] || [];
            if (items.length === 0) return null;
            return (
              <div key={level} className="space-y-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-[10px] font-black text-yellow-300 uppercase tracking-[0.2em]">
                    {formatTranslation(t('glossary.levelSection'), { level })}
                  </h3>
                  <div className="h-[1px] flex-1 bg-white/5"></div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map(item => (
                    <div 
                      key={item.term} 
                      onClick={() => setSelectedTerm(item)}
                      className="glass p-4 rounded-xl space-y-1.5 hover:border-yellow-400/60 hover:bg-slate-800/80 transition-all cursor-pointer group active:scale-[0.98]"
                    >
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-bold text-yellow-300 group-hover:text-yellow-200 transition-colors">
                          {item.term}
                        </h4>
                        <i className="fas fa-chevron-right text-[9px] text-slate-600 group-hover:text-yellow-300 group-hover:translate-x-1 transition-all"></i>
                      </div>
                      <p
                        className="text-[10px] leading-relaxed line-clamp-2"
                        style={{ color: '#FF00FF' }}
                      >
                        {item.definition}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filteredGlossary.map(item => (
            <div 
              key={item.term} 
              onClick={() => { onPlayClickSound?.(); setSelectedTerm(item); }}
              className="glass p-4 rounded-xl space-y-1.5 animate-in fade-in duration-300 hover:border-yellow-400/60 cursor-pointer group active:scale-[0.98]"
            >
              <div className="flex justify-between items-start">
                <h4 className="text-sm font-bold text-yellow-300 group-hover:text-yellow-200">
                  {item.term}
                </h4>
                <span className="text-[8px] font-black text-slate-500 uppercase px-1.5 py-0.5 bg-white/5 rounded">
                  {formatTranslation(t('glossary.levelBadge'), { range: item.levelRange })}
                </span>
              </div>
              <p
                className="text-[10px] leading-relaxed line-clamp-2"
                style={{ color: '#FF00FF' }}
              >
                {item.definition}
              </p>
            </div>
          ))}
          {filteredGlossary.length === 0 && (
            <div className="col-span-full py-12 text-center text-slate-500">
              <i className="fas fa-search-minus text-4xl mb-4 block opacity-20"></i>
              {formatTranslation(t('glossary.noResults'), { search })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
