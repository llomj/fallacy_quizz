import React, { useMemo, useState } from 'react';
import { FallacyLogEntry } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { formatTranslation } from '../translations';

const GLOSSARY_TERMS_EN: Array<{term: string; definition: string; levelRange: string}> = [
  { term: 'Ad Hominem', definition: 'Attacking the person making the argument rather than addressing the argument itself.', levelRange: '1-10' },
  { term: 'Appeal to Authority', definition: 'Using an authority figure\'s opinion as evidence when they are not an expert on the topic.', levelRange: '1-10' },
  { term: 'Appeal to Tradition', definition: 'Arguing that something is better or correct simply because it is older or traditional.', levelRange: '1-10' },
  { term: 'Appeal to Novelty', definition: 'Claiming that something is superior or true simply because it is new or modern.', levelRange: '1-10' },
  { term: 'Appeal to Popularity', definition: 'Arguing that a proposition is true because many or most people believe it.', levelRange: '1-10' },
  { term: 'Appeal to Emotion', definition: 'Manipulating an emotional response in place of a valid or compelling argument.', levelRange: '1-10' },
  { term: 'Appeal to Fear', definition: 'Using scare tactics to influence the audience\'s decision-making.', levelRange: '1-10' },
  { term: 'Appeal to Ignorance', definition: 'Arguing that a claim is true simply because it has not been proven false.', levelRange: '1-10' },
  { term: 'Appeal to Incredulity', definition: 'Asserting that a proposition must be false because it contradicts one\'s personal expectations or is difficult to imagine.', levelRange: '1-10' },
  { term: 'Anecdotal Fallacy', definition: 'Using a personal experience or an isolated example instead of effective evidence.', levelRange: '1-10' },
  { term: 'Begging the Question', definition: 'Using a conclusion as a premise of the same argument.', levelRange: '1-10' },
  { term: 'False Dilemma', definition: 'Presenting only two options when more exist.', levelRange: '1-10' },
  { term: 'Straw Man', definition: 'Misrepresenting someone\'s argument to make it easier to attack.', levelRange: '1-10' },
  { term: 'Slippery Slope', definition: 'Claiming that one event will lead to extreme consequences without evidence.', levelRange: '1-10' },
  { term: 'Circular Reasoning', definition: 'Using a conclusion as a premise of the same argument.', levelRange: '3-10' },
  { term: 'Post Hoc', definition: 'Assuming that because one event followed another, the first caused the second.', levelRange: '1-10' },
  { term: 'Confirmation Bias', definition: 'Seeking information that confirms existing beliefs.', levelRange: '2-10' },
  { term: 'Bandwagon Fallacy', definition: 'Assuming something is true because many people believe it.', levelRange: '2-10' },
  { term: 'Sunk Cost Fallacy', definition: 'Continuing an action because of previously invested resources.', levelRange: '1-10' },
  { term: 'False Cause', definition: 'Presuming that a real or perceived relationship between things means one is the cause of the other.', levelRange: '1-10' },
];

const GLOSSARY_TERMS_FR: Array<{term: string; definition: string; levelRange: string}> = [
  { term: 'Ad Hominem', definition: 'Attaquer la personne qui présente l\'argument plutôt que de répondre à l\'argument lui-même.', levelRange: '1-10' },
  { term: 'Appel à l\'autorité', definition: 'Utiliser l\'opinion d\'une autorité comme preuve sans justification appropriée.', levelRange: '1-10' },
  { term: 'Appel à la tradition', definition: 'Affirmer que quelque chose est meilleur ou correct simplement parce qu\'il est plus ancien ou traditionnel.', levelRange: '1-10' },
  { term: 'Appel à la nouveauté', definition: 'Affirmer que quelque chose est supérieur ou vrai simplement parce qu\'il est nouveau ou moderne.', levelRange: '1-10' },
  { term: 'Appel à la popularité', definition: 'Affirmer qu\'une proposition est vraie parce que beaucoup de gens y croient.', levelRange: '1-10' },
  { term: 'Appel à l\'émotion', definition: 'Manipuler une réponse émotionnelle au lieu d\'un argument valide.', levelRange: '1-10' },
  { term: 'Appel à la peur', definition: 'Utiliser des tactiques de peur pour influencer la prise de décision.', levelRange: '1-10' },
  { term: 'Appel à l\'ignorance', definition: 'Affirmer qu\'une réclamation est vraie simplement parce qu\'elle n\'a pas été prouvée fausse.', levelRange: '1-10' },
  { term: 'Appel à l\'incrédulité', definition: 'Affirmer qu\'une proposition doit être fausse parce qu\'elle contredit les attentes personnelles.', levelRange: '1-10' },
  { term: 'Sophisme anecdotique', definition: 'Utiliser une expérience personnelle au lieu de preuves efficaces.', levelRange: '1-10' },
  { term: 'Pétition de principe', definition: 'Utiliser une conclusion comme prémisse du même argument.', levelRange: '1-10' },
  { term: 'Faux dilemme', definition: 'Présenter seulement deux options quand il en existe davantage.', levelRange: '1-10' },
  { term: 'Homme de paille', definition: 'Déformer l\'argument de quelqu\'un pour le rendre plus facile à attaquer.', levelRange: '1-10' },
  { term: 'Pente glissante', definition: 'Affirmer qu\'un événement mènera à des conséquences extrêmes sans preuve.', levelRange: '1-10' },
  { term: 'Raisonnement circulaire', definition: 'Utiliser une conclusion comme prémisse du même argument.', levelRange: '3-10' },
  { term: 'Post Hoc', definition: 'Supposer que parce qu\'un événement en a suivi un autre, le premier a causé le second.', levelRange: '1-10' },
  { term: 'Biais de confirmation', definition: 'Rechercher des informations qui confirment les croyances existantes.', levelRange: '2-10' },
  { term: 'Appel à la foule', definition: 'Supposer qu\'une chose est vraie parce que beaucoup de gens le croient.', levelRange: '2-10' },
  { term: 'Sophisme des coûts irrécupérables', definition: 'Continuer une action en raison des ressources déjà investies.', levelRange: '1-10' },
  { term: 'Fausse cause', definition: 'Présumer qu\'une relation réelle ou perçue entre les choses signifie que l\'une est la cause de l\'autre.', levelRange: '1-10' },
];

const getFallbackTranslation = (term: string, targetLang: 'en' | 'fr'): { term: string; definition: string; levelRange: string } | undefined => {
  const targetGlossary = targetLang === 'fr' ? GLOSSARY_TERMS_FR : GLOSSARY_TERMS_EN;
  return targetGlossary.find(t => t.term.toLowerCase() === term.toLowerCase());
};

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

  const targetLang = language === 'fr' ? 'fr' : 'en';
  const targetGlossary = targetLang === 'fr' ? GLOSSARY_TERMS_FR : GLOSSARY_TERMS_EN;
  const glossaryMap = useMemo(() => {
    const map = new Map<string, typeof targetGlossary[0]>();
    for (const item of targetGlossary) {
      map.set(item.term.toLowerCase(), item);
    }
    return map;
  }, [targetGlossary]);

  const getDisplayEntry = (entry: FallacyLogEntry) => {
    const translated = glossaryMap.get(entry.term.toLowerCase());
    if (translated) {
      return {
        term: translated.term,
        definition: translated.definition,
        levelRange: translated.levelRange,
        timestamp: entry.timestamp
      };
    }
    return entry;
  };

  const displayEntries = useMemo(() => {
    return entries
      .map(getDisplayEntry)
      .filter(entry => 
        entry.term.toLowerCase().includes(search.toLowerCase()) ||
        entry.definition.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => b.timestamp - a.timestamp);
  }, [entries, search, glossaryMap]);

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
                  {entry.term}
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
