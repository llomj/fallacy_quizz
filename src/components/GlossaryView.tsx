import React, { useState, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { formatTranslation } from '../translations';

interface GlossaryTerm {
  term: string;
  definition: string;
  levelRange: string;
}

const GLOSSARY_TERMS_EN: GlossaryTerm[] = [
  { term: 'Ad Hominem', definition: 'Attacking the person making the argument rather than addressing the argument itself.', levelRange: '1' },
  { term: 'Straw Man', definition: 'Misrepresenting someone\'s argument to make it easier to attack.', levelRange: '1' },
  { term: 'Appeal to Authority', definition: 'Using an authority figure\'s opinion as evidence without proper justification.', levelRange: '1' },
  { term: 'False Dilemma', definition: 'Presenting only two options when more exist.', levelRange: '1' },
  { term: 'Post Hoc', definition: 'Assuming that because one event followed another, the first caused the second.', levelRange: '2' },
  { term: 'Confirmation Bias', definition: 'Seeking information that confirms existing beliefs.', levelRange: '3' },
  { term: 'Sunk Cost Fallacy', definition: 'Continuing an action because of previously invested resources.', levelRange: '4' },
  { term: 'Bandwagon Fallacy', definition: 'Assuming something is true because many people believe it.', levelRange: '1' },
  { term: 'Circular Reasoning', definition: 'Using a conclusion as a premise of the same argument.', levelRange: '5' },
  { term: 'Slippery Slope', definition: 'Claiming one event will lead to extreme consequences without evidence.', levelRange: '2' },
];

const GLOSSARY_TERMS_FR: GlossaryTerm[] = [
  { term: 'Ad Hominem', definition: 'Attaquer la personne qui présente l\'argument plutôt que de répondre à l\'argument lui-même.', levelRange: '1' },
  { term: 'Homme de paille', definition: 'Déformer l\'argument de quelqu\'un pour le rendre plus facile à attaquer.', levelRange: '1' },
  { term: 'Appel à l\'autorité', definition: 'Utiliser l\'opinion d\'une autorité comme preuve sans justification appropriée.', levelRange: '1' },
  { term: 'Fausse dichotomie', definition: 'Présenter seulement deux options alors qu\'il en existe davantage.', levelRange: '1' },
  { term: 'Post Hoc', definition: 'Supposer que parce qu\'un événement en a suivi un autre, le premier a causé le second.', levelRange: '2' },
  { term: 'Biais de confirmation', definition: 'Rechercher des informations qui confirment les croyances existantes.', levelRange: '3' },
  { term: 'Sophisme des coûts irrécupérables', definition: 'Continuer une action en raison des ressources déjà investies.', levelRange: '4' },
  { term: 'Appel à la foule', definition: 'Supposer qu\'une chose est vraie parce que beaucoup de gens le croient.', levelRange: '1' },
  { term: 'Raisonnement circulaire', definition: 'Utiliser une conclusion comme prémisse du même argument.', levelRange: '5' },
  { term: 'Pente glissante', definition: 'Affirmer qu\'un événement mènera à des conséquences extrêmes sans preuve.', levelRange: '2' },
];

interface GlossaryViewProps {
  onBack: () => void;
  onPlayClickSound?: () => void;
}

export const GlossaryView: React.FC<GlossaryViewProps> = ({ onBack, onPlayClickSound }) => {
  const { t, language } = useLanguage();
  const [search, setSearch] = useState('');
  const [selectedTerm, setSelectedTerm] = useState<GlossaryTerm | null>(null);
  
  const glossary = language === 'fr' ? GLOSSARY_TERMS_FR : GLOSSARY_TERMS_EN;
  
  const filteredGlossary = useMemo(() => {
    return glossary
      .filter(item => 
        item.term.toLowerCase().includes(search.toLowerCase()) ||
        item.definition.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [glossary, search]);

  const levels = useMemo(() => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], []);

  const getLevelsFromRange = (range: string): number[] => {
    const parts = range.split('-').map((part) => Number(part.trim()));
    if (parts.length === 1 && !Number.isNaN(parts[0])) return [parts[0]];
    if (parts.length !== 2 || Number.isNaN(parts[0]) || Number.isNaN(parts[1])) return [];
    const [start, end] = parts[0] <= parts[1] ? parts : [parts[1], parts[0]];
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  const itemsByLevel = useMemo(() => {
    const map: Record<number, GlossaryTerm[]> = {};
    for (const level of levels) {
      map[level] = glossary
        .filter((item) => getLevelsFromRange(item.levelRange).includes(level))
        .sort((a, b) => a.term.localeCompare(b.term));
    }
    return map;
  }, [glossary, levels]);

  return (
    <div className="relative min-h-[600px] animate-in slide-in-from-left duration-500 pb-12">
      {selectedTerm && (
        <div className="fixed inset-0 z-[100] overflow-y-auto overflow-x-hidden overscroll-contain flex justify-center items-start sm:items-center p-4">
          <div 
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity" 
            onClick={() => setSelectedTerm(null)}
          ></div>
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
                  Level {selectedTerm.levelRange}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white">{selectedTerm.term}</h3>
              </div>
              <div className="space-y-2">
                <h4 className="text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <i className="fas fa-book-open text-yellow-300"></i> {t('glossary.inDepthDescription')}
                </h4>
                <div className="text-slate-300 leading-relaxed font-medium text-xs sm:text-sm">
                  {selectedTerm.definition}
                </div>
              </div>
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
          placeholder={formatTranslation(t('glossary.searchPlaceholder'), { count: glossary.length })}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-3 py-3 text-sm bg-slate-900 border border-white/5 rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:border-yellow-400/60 transition-colors"
        />
      </div>

      <div className="space-y-8">
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
                    onClick={() => { onPlayClickSound?.(); setSelectedTerm(item); }}
                    className="glass p-4 rounded-xl space-y-1.5 hover:border-yellow-400/60 hover:bg-slate-800/80 transition-all cursor-pointer group active:scale-[0.98]"
                  >
                    <h4 className="text-sm font-bold text-yellow-300 group-hover:text-yellow-200 transition-colors">
                      {item.term}
                    </h4>
                    <p className="text-[10px] leading-relaxed line-clamp-2" style={{ color: '#FF00FF' }}>
                      {item.definition}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
