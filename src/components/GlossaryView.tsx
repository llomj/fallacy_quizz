import React, { useState, useEffect } from 'react';
import { GlossaryItem } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { formatTranslation } from '../translations';
import { useTranslatedGlossary } from '../hooks/useTranslatedData';

interface GlossaryViewProps {
  onBack: () => void;
}

export const GlossaryView: React.FC<GlossaryViewProps> = ({ onBack }) => {
  const { t } = useLanguage();
  const GLOSSARY = useTranslatedGlossary();
  const [search, setSearch] = useState('');
  const [selectedTerm, setSelectedTerm] = useState<GlossaryItem | null>(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedTerm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedTerm]);

  const filteredGlossary = GLOSSARY.filter(item => 
    item.term.toLowerCase().includes(search.toLowerCase()) ||
    item.definition.toLowerCase().includes(search.toLowerCase())
  );

  const levels = Array.from({ length: 10 }, (_, index) => index + 1);

  const getLevelsFromRange = (range: string): number[] => {
    const parts = range.split('-').map((part) => Number(part.trim()));
    if (parts.length === 1 && !Number.isNaN(parts[0])) return [parts[0]];
    if (parts.length !== 2 || Number.isNaN(parts[0]) || Number.isNaN(parts[1])) return [];
    const [start, end] = parts[0] <= parts[1] ? parts : [parts[1], parts[0]];
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  return (
    <div className="relative min-h-[600px] animate-in slide-in-from-left duration-500 pb-12">
      {/* Detail Overlay - Improved Scrolling Architecture for Mobile */}
      {selectedTerm && (
        <div className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain flex justify-center items-start sm:items-center p-4">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity" 
            onClick={() => setSelectedTerm(null)}
          ></div>
          
          {/* Content Box */}
          <div className="glass w-full max-w-2xl my-4 sm:my-8 rounded-3xl p-6 sm:p-10 shadow-2xl relative z-10 border-indigo-500/30 animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedTerm(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors border border-white/10"
            >
              <i className="fas fa-times"></i>
            </button>

            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-3 pt-2">
                <span className="inline-block text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] px-3 py-1 bg-indigo-500/10 rounded-full border border-indigo-500/20">
                  {formatTranslation(t('glossary.levelConcept'), { range: selectedTerm.levelRange })}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">{selectedTerm.term}</h3>
              </div>

              <div className="space-y-4">
                <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <i className="fas fa-book-open text-indigo-400"></i> {t('glossary.inDepthDescription')}
                </h4>
                <div className="text-slate-300 leading-relaxed font-medium text-sm sm:text-base whitespace-pre-wrap">
                  {selectedTerm.detailedDescription}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <i className="fas fa-code text-indigo-400"></i> {t('glossary.implementationExample')}
                </h4>
                <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 border border-white/5 shadow-inner overflow-hidden">
                  <pre className="code-font text-xs sm:text-sm text-indigo-300 leading-relaxed overflow-x-auto p-1">
                    <code>{selectedTerm.example}</code>
                  </pre>
                </div>
              </div>

              {/* Added more bottom padding/margin to ensure scroll clearance */}
              <div className="pt-4 pb-2">
                <button 
                  onClick={() => setSelectedTerm(null)}
                  className="w-full py-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-2xl font-black transition-all shadow-xl shadow-indigo-500/20 active:scale-95"
                >
                  {t('operations.gotIt')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black text-white flex items-center gap-3">
          <i className="fas fa-circle-info text-indigo-400"></i> {t('glossary.title')}
        </h2>
        <button 
          onClick={onBack}
          className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-bold transition-colors"
        >
          {t('history.backToHub')}
        </button>
      </div>

      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
          <i className="fas fa-search"></i>
        </div>
        <input 
          type="text"
          placeholder={t('glossary.searchPlaceholder')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-4 bg-slate-900 border border-white/5 rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
        />
      </div>

      {search === '' ? (
        <div className="space-y-12">
          {levels.map(level => {
            const items = GLOSSARY.filter((item) => getLevelsFromRange(item.levelRange).includes(level));
            if (items.length === 0) return null;
            return (
              <div key={level} className="space-y-4">
                <div className="flex items-center gap-4">
                  <h3 className="text-xs font-black text-indigo-400 uppercase tracking-[0.2em]">
                    {formatTranslation(t('glossary.levelSection'), { level })}
                  </h3>
                  <div className="h-[1px] flex-1 bg-white/5"></div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map(item => (
                    <div 
                      key={item.term} 
                      onClick={() => setSelectedTerm(item)}
                      className="glass p-5 rounded-2xl space-y-2 hover:border-indigo-500/40 hover:bg-slate-800/80 transition-all cursor-pointer group active:scale-[0.98]"
                    >
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-slate-100 group-hover:text-white transition-colors">{item.term}</h4>
                        <i className="fas fa-chevron-right text-[10px] text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all"></i>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2">{item.definition}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredGlossary.map(item => (
            <div 
              key={item.term} 
              onClick={() => setSelectedTerm(item)}
              className="glass p-5 rounded-2xl space-y-2 animate-in fade-in duration-300 hover:border-indigo-500/40 cursor-pointer group active:scale-[0.98]"
            >
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-slate-100 group-hover:text-white">{item.term}</h4>
                <span className="text-[8px] font-black text-slate-500 uppercase px-2 py-0.5 bg-white/5 rounded">
                  {formatTranslation(t('glossary.levelBadge'), { range: item.levelRange })}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2">{item.definition}</p>
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
