import React from 'react';
import { LEVELS, PERSONA_EMOJI, STAR_PROGRESS_THRESHOLD, getStarsFromAccuracy } from '../constants';
import { PersonaStage } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { formatTranslation } from '../translations';

interface LevelSelectorModalProps {
  currentLevel: number;
  highestUnlockedLevel: number;
  onSelectLevel: (level: number) => void;
  onClose: () => void;
  levelProgress?: Record<number, number>;
  correctPerLevel?: Record<number, number>;
  randomMode?: boolean;
}

export const LevelSelectorModal: React.FC<LevelSelectorModalProps> = ({
  currentLevel,
  highestUnlockedLevel,
  onSelectLevel,
  onClose,
  levelProgress = {},
  correctPerLevel = {},
  randomMode = false
}) => {
  const { t } = useLanguage();

  const getStarsForLevel = (level: number) => {
    const progress = levelProgress[level] || 0;
    const correct = correctPerLevel[level] ?? 0;
    if (progress < STAR_PROGRESS_THRESHOLD) return 0;
    return getStarsFromAccuracy(progress > 0 ? (100 * correct) / progress : 0);
  };

  const handleLevelSelect = (level: number) => {
    if (level <= highestUnlockedLevel) {
      onSelectLevel(level);
      onClose();
    }
  };

  const getPersonaTranslationKey = (persona: PersonaStage): string => {
    switch (persona) {
      case PersonaStage.TADPOLE: return 'tadpole';
      case PersonaStage.PLANKTON: return 'plankton';
      case PersonaStage.SHRIMP: return 'shrimp';
      case PersonaStage.CRAB: return 'crab';
      case PersonaStage.SMALL_FISH: return 'smallFish';
      case PersonaStage.OCTOPUS: return 'octopus';
      case PersonaStage.SEAL: return 'seal';
      case PersonaStage.DOLPHIN: return 'dolphin';
      case PersonaStage.SHARK: return 'shark';
      case PersonaStage.WHALE: return 'whale';
      case PersonaStage.GOD_WHALE: return 'godWhale';
      default: return 'tadpole';
    }
  };

  const getPersonaEmoji = (persona: PersonaStage): string =>
    PERSONA_EMOJI[persona] ?? '🐟';

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass rounded-3xl p-8 max-w-[480px] w-full max-h-[90vh] overflow-y-auto space-y-6 animate-in zoom-in duration-300 shadow-2xl border border-white/10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black text-white flex items-center gap-3">
            <i className="fas fa-layer-group text-yellow-300"></i> {t('levelSelector.selectLevel')}
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {LEVELS.map((levelInfo) => {
            const isLocked = levelInfo.level > highestUnlockedLevel;
            const isCurrent = levelInfo.level === currentLevel;
            const isUnlocked = levelInfo.level <= highestUnlockedLevel;
            const stars = getStarsForLevel(levelInfo.level);

            return (
              <button
                key={levelInfo.level}
                onClick={() => handleLevelSelect(levelInfo.level)}
                disabled={isLocked}
                className={`
                  relative p-4 rounded-2xl border-2 transition-all
                  ${isCurrent
                    ? 'bg-yellow-400/15 border-yellow-400 shadow-lg shadow-yellow-400/30'
                    : isUnlocked
                      ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 cursor-pointer'
                      : 'bg-slate-800/50 border-slate-700/50 opacity-50 cursor-not-allowed'
                  }
                `}
              >
                {isLocked && (
                  <div className="absolute top-2 right-2 flex gap-1">
                    <i className="fas fa-lock text-slate-500 text-xs"></i>
                  </div>
                )}
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${isCurrent
                      ? 'bg-yellow-400'
                      : isUnlocked
                        ? 'bg-slate-700'
                        : 'bg-slate-800'
                    }`}>
                    <span className={isCurrent ? 'text-white' : isUnlocked ? 'text-slate-400' : 'text-slate-600'}>
                      {getPersonaEmoji(levelInfo.persona)}
                    </span>
                  </div>
                  <div className="flex gap-0.5 justify-center">
                    {[1, 2, 3, 4, 5].map(starNum => (
                      <i
                        key={starNum}
                        className={`fas fa-star text-[10px] ${starNum <= stars ? 'text-amber-400' : 'text-slate-700/50'
                          }`}
                      ></i>
                    ))}
                  </div>
                  <div className="text-center">
                    <div className={`text-sm font-black ${isCurrent ? 'text-yellow-300' : isUnlocked ? 'text-white' : 'text-slate-500'
                      }`}>
                      {formatTranslation(t('levelSelector.level'), { level: levelInfo.level })}
                    </div>
                    <div className={`text-[10px] font-bold uppercase tracking-wider mt-1 ${isCurrent ? 'text-yellow-200' : isUnlocked ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                      {t(`personas.${getPersonaTranslationKey(levelInfo.persona)}` as any)}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="pt-4 border-t border-white/10 space-y-2">
          {randomMode && (
            <p className="text-xs text-yellow-300 text-center font-medium">
              {t('levelSelector.randomModeNote')}
            </p>
          )}
          <p className="text-xs text-slate-400 text-center">
            {currentLevel === highestUnlockedLevel
              ? formatTranslation(t('levelSelector.youAreOnLevel'), { level: currentLevel })
              : formatTranslation(t('levelSelector.currentLevelInfo'), { current: currentLevel, highest: highestUnlockedLevel })
            }
          </p>
        </div>
      </div>
    </div>
  );
};
