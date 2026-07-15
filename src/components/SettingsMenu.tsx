import React, { useState, useEffect } from 'react';

declare const __BUILD_TIME__: string | undefined;
declare const __APP_VERSION__: string | undefined;
import { useLanguage } from '../contexts/LanguageContext';
import { formatTranslation } from '../translations';
import { MAX_QUESTION_ID } from '../questionsBank';

/** Swipe-style toggle: green when on, gray when off. */
const ToggleSwitch: React.FC<{
  checked: boolean;
  onChange: () => void;
  label: string;
  icon: string;
}> = ({ checked, onChange, label, icon }) => (
  <button
    type="button"
    onClick={onChange}
    className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl transition-all text-left text-slate-300 hover:bg-white/10 hover:text-white"
  >
    <div className="flex items-center gap-3">
      <i className={`fas ${icon} text-sm w-5 flex-shrink-0`}></i>
      <span className="text-sm font-medium">{label}</span>
    </div>
    <div
      role="switch"
      aria-checked={checked}
      className={`relative w-12 h-6 rounded-full shrink-0 transition-colors duration-200 ${
        checked ? 'bg-green-500' : 'bg-slate-600'
      }`}
      onClick={(e) => {
        e.stopPropagation();
        onChange();
      }}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-200 ${
          checked ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
    </div>
  </button>
);

interface SettingsMenuProps {
  isOpen: boolean;
  onClose: () => void;
  view: 'hub' | 'quiz' | 'log' | 'glossary';
  randomMode?: boolean;
  anchorBottom?: boolean;
  onToggleRandomMode?: () => void;
  onPlayClickSound?: () => void;
  soundEnabled?: boolean;
  onToggleSound?: () => void;
  hapticEnabled?: boolean;
  onToggleHaptic?: () => void;
  lightMode?: boolean;
  onToggleLightMode?: () => void;
  onShowGlossary?: () => void;
  onShowGameRules?: () => void;
  onShowArgumentation?: () => void;
  onShowIdSearch?: (initialId?: number) => void;
  onShowIdLog?: () => void;
  onShowLearningLog?: () => void;
  onShowFallacyLog?: () => void;
  onShowLevelSelector?: () => void;
  onToggleLanguage?: () => void;
  onResetApp?: () => void;
  panelOpacity?: number;
  onSetPanelOpacity?: (opacity: number) => void;
}

export const SettingsMenu: React.FC<SettingsMenuProps> = ({
  isOpen,
  onClose,
  view,
  randomMode = false,
  anchorBottom = false,
  onToggleRandomMode,
  onPlayClickSound,
  soundEnabled = true,
  onToggleSound,
  hapticEnabled = true,
  onToggleHaptic,
  lightMode = false,
  onToggleLightMode,
  onShowGlossary,
  onShowGameRules,
  onShowArgumentation,
  onShowIdSearch,
  onShowIdLog,
  onShowLearningLog,
  onShowFallacyLog,
  onShowLevelSelector,
  onToggleLanguage,
  onResetApp,
  panelOpacity = 20,
  onSetPanelOpacity
}) => {
  const { t, language } = useLanguage();
  const [rulesSubmenuOpen, setRulesSubmenuOpen] = useState(false);
  const [logSubmenuOpen, setLogSubmenuOpen] = useState(false);
  const [customiseSubmenuOpen, setCustomiseSubmenuOpen] = useState(false);
  const [soundsSubmenuOpen, setSoundsSubmenuOpen] = useState(false);
  const [panelSubmenuOpen, setPanelSubmenuOpen] = useState(false);
  const [rulesSearchId, setRulesSearchId] = useState('');
  const [logSearchId, setLogSearchId] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setRulesSubmenuOpen(false);
      setLogSubmenuOpen(false);
      setCustomiseSubmenuOpen(false);
      setSoundsSubmenuOpen(false);
      setPanelSubmenuOpen(false);
      setRulesSearchId('');
      setLogSearchId('');
    }
  }, [isOpen]);

  const handleRulesSearchById = () => {
    const id = parseInt(rulesSearchId.trim(), 10);
    if (!isNaN(id) && id >= 1 && id <= MAX_QUESTION_ID) {
      onShowIdSearch?.(id);
      onClose();
    } else {
      onShowIdSearch?.();
      onClose();
    }
  };

  const handleLogSearchById = () => {
    const id = parseInt(logSearchId.trim(), 10);
    if (!isNaN(id) && id >= 1 && id <= MAX_QUESTION_ID) {
      onShowIdSearch?.(id);
      onClose();
    } else {
      onShowIdSearch?.();
      onClose();
    }
  };

  if (!isOpen) return null;

  const hasRulesContent = Boolean(onShowGameRules || onShowArgumentation || onShowGlossary);
  const withClickSound = (fn: () => void) => () => { onPlayClickSound?.(); fn(); };

  const menuItems: { icon: string; label: string; onClick: () => void; active?: boolean }[] = [];

  if (onToggleRandomMode) {
    menuItems.push({
      icon: 'fa-shuffle',
      label: randomMode ? t('settings.switchToLevelMode') : t('settings.switchToRandomMode'),
      onClick: withClickSound(() => { onToggleRandomMode(); onClose(); })
    });
  }
  if (onShowLevelSelector) {
    menuItems.push({
      icon: 'fa-layer-group',
      label: t('settings.selectLevel'),
      onClick: withClickSound(() => { onShowLevelSelector(); onClose(); })
    });
  }
  if (hasRulesContent) {
    menuItems.push({
      icon: 'fa-gavel',
      label: t('settings.rules'),
      onClick: withClickSound(() => setRulesSubmenuOpen(prev => !prev))
    });
  }
  const hasLogContent = Boolean(onShowIdSearch || onShowIdLog || onShowLearningLog);
  if (hasLogContent) {
    menuItems.push({
      icon: 'fa-clipboard-list',
      label: t('settings.log'),
      onClick: withClickSound(() => setLogSubmenuOpen(prev => !prev))
    });
  }
  if (onToggleLanguage) {
    menuItems.push({
      icon: 'fa-language',
      label: language === 'en' ? 'Français' : 'English',
      onClick: withClickSound(() => { onToggleLanguage(); onClose(); })
    });
  }
  menuItems.push({
    icon: 'fa-palette',
    label: 'Customise',
    onClick: withClickSound(() => setCustomiseSubmenuOpen(prev => !prev))
  });

  const basePath = typeof window !== 'undefined' ? (import.meta.env.BASE_URL || '/') : '/';

  // ── Panel Opacity submenu ──
  if (panelSubmenuOpen) {
    return (
      <>
        <div className="fixed inset-0 z-40" onClick={onClose} />
        <div className={`z-50 min-w-[200px] w-[280px] max-w-[calc(100vw-2rem)] ${anchorBottom ? 'fixed top-[max(4rem,env(safe-area-inset-top))] right-4' : 'absolute top-full right-0 mt-2'}`}>
          <div
            className="rounded-2xl p-2 shadow-lg border border-white/10 animate-in slide-in-from-top-2 duration-200"
            style={{ backgroundColor: `rgba(255,255,255,${panelOpacity / 100})`, backdropFilter: 'blur(12px)' }}
          >
            <button
              onClick={withClickSound(() => { setPanelSubmenuOpen(false); setCustomiseSubmenuOpen(true); })}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left text-slate-300 hover:bg-white/10 hover:text-white"
            >
              <i className="fas fa-arrow-left text-sm w-5 flex-shrink-0"></i>
              <span className="text-sm font-medium">{t('settings.back')}</span>
            </button>
            <div className="px-4 py-3">
              <div className="flex items-center gap-3 mb-3">
                <i className="fas fa-sliders text-sm w-5 flex-shrink-0 text-slate-400"></i>
                <span className="text-sm font-medium text-slate-300">Panel Opacity</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-slate-500 w-6 text-right">{panelOpacity}%</span>
                <input
                  type="range"
                  min={5}
                  max={80}
                  step={1}
                  value={panelOpacity}
                  onChange={(e) => onSetPanelOpacity?.(Number(e.target.value))}
                  className="flex-1 h-1.5 bg-slate-700 rounded-full appearance-none cursor-pointer accent-yellow-400 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-yellow-400 [&::-webkit-slider-thumb]:shadow-md"
                />
              </div>
              <p className="text-[10px] text-slate-500 mt-2 text-center">
                Adjust how transparent the settings panel appears
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  // ── Sounds submenu ──
  if (soundsSubmenuOpen) {
    return (
      <>
        <div className="fixed inset-0 z-40" onClick={onClose} />
        <div className={`z-50 min-w-[200px] w-[280px] max-w-[calc(100vw-2rem)] ${anchorBottom ? 'fixed top-[max(4rem,env(safe-area-inset-top))] right-4' : 'absolute top-full right-0 mt-2'}`}>
          <div
            className="rounded-2xl p-2 shadow-lg border border-white/10 animate-in slide-in-from-top-2 duration-200"
            style={{ backgroundColor: `rgba(255,255,255,${panelOpacity / 100})`, backdropFilter: 'blur(12px)' }}
          >
            <button
              onClick={withClickSound(() => { setSoundsSubmenuOpen(false); setCustomiseSubmenuOpen(true); })}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left text-slate-300 hover:bg-white/10 hover:text-white"
            >
              <i className="fas fa-arrow-left text-sm w-5 flex-shrink-0"></i>
              <span className="text-sm font-medium">{t('settings.back')}</span>
            </button>
            {onToggleSound !== undefined && (
              <ToggleSwitch
                checked={soundEnabled}
                onChange={withClickSound(onToggleSound)}
                label={t('settings.sound')}
                icon={soundEnabled ? 'fa-volume-high' : 'fa-volume-xmark'}
              />
            )}
            {onToggleHaptic !== undefined && (
              <ToggleSwitch
                checked={hapticEnabled}
                onChange={withClickSound(onToggleHaptic)}
                label={t('settings.haptic')}
                icon="fa-hand"
              />
            )}
            {onToggleLightMode !== undefined && (
              <ToggleSwitch
                checked={lightMode}
                onChange={withClickSound(onToggleLightMode)}
                label={t('settings.lightMode')}
                icon={lightMode ? 'fa-sun' : 'fa-moon'}
              />
            )}
          </div>
        </div>
      </>
    );
  }

  // ── Customise submenu ──
  if (customiseSubmenuOpen) {
    return (
      <>
        <div className="fixed inset-0 z-40" onClick={onClose} />
        <div className={`z-50 min-w-[200px] w-[280px] max-w-[calc(100vw-2rem)] ${anchorBottom ? 'fixed top-[max(4rem,env(safe-area-inset-top))] right-4' : 'absolute top-full right-0 mt-2'}`}>
          <div
            className="rounded-2xl p-2 shadow-lg border border-white/10 animate-in slide-in-from-top-2 duration-200"
            style={{ backgroundColor: `rgba(255,255,255,${panelOpacity / 100})`, backdropFilter: 'blur(12px)' }}
          >
            <button
              onClick={withClickSound(() => setCustomiseSubmenuOpen(false))}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left text-slate-300 hover:bg-white/10 hover:text-white"
            >
              <i className="fas fa-arrow-left text-sm w-5 flex-shrink-0"></i>
              <span className="text-sm font-medium">{t('settings.back')}</span>
            </button>
            <button
              onClick={withClickSound(() => { setCustomiseSubmenuOpen(false); setSoundsSubmenuOpen(true); })}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left text-slate-300 hover:bg-white/10 hover:text-white"
            >
              <i className="fas fa-volume-high text-sm w-5 flex-shrink-0"></i>
              <span className="text-sm font-medium">Sounds</span>
              <i className="fas fa-chevron-right text-xs ml-auto"></i>
            </button>
            <button
              onClick={withClickSound(() => { setCustomiseSubmenuOpen(false); setPanelSubmenuOpen(true); })}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left text-slate-300 hover:bg-white/10 hover:text-white"
            >
              <i className="fas fa-sliders text-sm w-5 flex-shrink-0"></i>
              <span className="text-sm font-medium">Customise Settings Panel</span>
              <i className="fas fa-chevron-right text-xs ml-auto"></i>
            </button>
          </div>
        </div>
      </>
    );
  }

  // ── Log submenu ──
  if (logSubmenuOpen && hasLogContent) {
    return (
      <>
        <div className="fixed inset-0 z-40" onClick={onClose} />
        <div className={`z-50 min-w-[200px] w-[280px] max-w-[calc(100vw-2rem)] ${anchorBottom ? 'fixed top-[max(4rem,env(safe-area-inset-top))] right-4' : 'absolute top-full right-0 mt-2'}`}>
          <div
            className="rounded-2xl p-2 shadow-lg border border-white/10 animate-in slide-in-from-top-2 duration-200"
            style={{ backgroundColor: `rgba(255,255,255,${panelOpacity / 100})`, backdropFilter: 'blur(12px)' }}
          >
            <button
              onClick={withClickSound(() => setLogSubmenuOpen(false))}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left text-slate-300 hover:bg-white/10 hover:text-white"
            >
              <i className="fas fa-arrow-left text-sm w-5 flex-shrink-0"></i>
              <span className="text-sm font-medium">{t('settings.back')}</span>
            </button>
            {onShowIdSearch && (
              <div className="w-full px-4 py-3" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center gap-2">
                  <i className="fas fa-hashtag text-sm w-5 flex-shrink-0 text-slate-400"></i>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={logSearchId}
                    onChange={(e) => setLogSearchId(e.target.value.replace(/\D/g, ''))}
                    onKeyDown={(e) => e.key === 'Enter' && handleLogSearchById()}
                    placeholder={formatTranslation(t('idSearch.enterId'), { max: MAX_QUESTION_ID })}
                    min={1}
                    max={MAX_QUESTION_ID}
                    className="w-full px-3 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-yellow-400"
                  />
                  <button
                    type="button"
                    onClick={withClickSound(handleLogSearchById)}
                    className="p-2 rounded-lg bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-300 transition-all shrink-0"
                    title={t('idSearch.search')}
                  >
                    <i className="fas fa-search text-xs"></i>
                  </button>
                </div>
              </div>
            )}
            {onShowIdLog && (
              <button
                onClick={withClickSound(() => { onShowIdLog(); onClose(); })}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left text-slate-300 hover:bg-white/10 hover:text-white"
              >
                <i className="fas fa-list text-sm w-5 flex-shrink-0"></i>
                <span className="text-sm font-medium">{t('settings.idLog')}</span>
              </button>
            )}
            {onShowLearningLog && (
              <button
                onClick={withClickSound(() => { onShowLearningLog(); onClose(); })}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left ${view === 'log' ? 'bg-yellow-400/15 text-yellow-300' : 'text-slate-300 hover:bg-white/10 hover:text-white'}`}
              >
                <i className="fas fa-book-open text-sm w-5 flex-shrink-0"></i>
                <span className="text-sm font-medium">{t('app.learningLog')}</span>
              </button>
            )}
            {onShowFallacyLog && (
              <button
                onClick={withClickSound(() => { onShowFallacyLog(); onClose(); })}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left text-slate-300 hover:bg-white/10 hover:text-white"
              >
                <i className="fas fa-bookmark text-sm w-5 flex-shrink-0"></i>
                <span className="text-sm font-medium">{t('app.fallacyLog') || 'Fallacy Log'}</span>
              </button>
            )}
          </div>
        </div>
      </>
    );
  }

  // ── Rules submenu ──
  if (rulesSubmenuOpen && hasRulesContent) {
    return (
      <>
        <div className="fixed inset-0 z-40" onClick={onClose} />
        <div className={`z-50 min-w-[200px] w-[280px] max-w-[calc(100vw-2rem)] ${anchorBottom ? 'fixed top-[max(4rem,env(safe-area-inset-top))] right-4' : 'absolute top-full right-0 mt-2'}`}>
          <div
            className="rounded-2xl p-2 shadow-lg border border-white/10 animate-in slide-in-from-top-2 duration-200"
            style={{ backgroundColor: `rgba(255,255,255,${panelOpacity / 100})`, backdropFilter: 'blur(12px)' }}
          >
            <button
              onClick={withClickSound(() => setRulesSubmenuOpen(false))}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left text-slate-300 hover:bg-white/10 hover:text-white"
            >
              <i className="fas fa-arrow-left text-sm w-5 flex-shrink-0"></i>
              <span className="text-sm font-medium">{t('settings.back')}</span>
            </button>
            {onShowGameRules && (
              <button
                onClick={withClickSound(() => { onShowGameRules(); onClose(); })}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left text-slate-300 hover:bg-white/10 hover:text-white"
              >
                <i className="fas fa-circle-info text-sm w-5 flex-shrink-0"></i>
                <span className="text-sm font-medium">{t('gameRules.title')}</span>
              </button>
            )}
            {onShowArgumentation && (
              <button
                onClick={withClickSound(() => { onShowArgumentation(); onClose(); })}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left text-slate-300 hover:bg-white/10 hover:text-white"
              >
                <i className="fas fa-scale-balanced text-sm w-5 flex-shrink-0"></i>
                <span className="text-sm font-medium">{t('settings.logicalRules')}</span>
              </button>
            )}
            {onShowGlossary && (
              <button
                onClick={withClickSound(() => { onShowGlossary(); onClose(); })}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left ${view === 'glossary' ? 'bg-yellow-400/15 text-yellow-300' : 'text-slate-300 hover:bg-white/10 hover:text-white'}`}
              >
                <i className="fas fa-circle-info text-sm w-5 flex-shrink-0"></i>
                <span className="text-sm font-medium">{t('app.glossary')}</span>
              </button>
            )}
            {onShowIdSearch && (
              <div className="flex items-center gap-2 px-4 py-3" onClick={(e) => e.stopPropagation()}>
                <i className="fas fa-magnifying-glass text-sm w-5 flex-shrink-0 text-slate-400"></i>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={rulesSearchId}
                  onChange={(e) => setRulesSearchId(e.target.value.replace(/\D/g, ''))}
                  onKeyDown={(e) => e.key === 'Enter' && handleRulesSearchById()}
                  placeholder={formatTranslation(t('idSearch.enterId'), { max: MAX_QUESTION_ID })}
                  className="flex-1 px-3 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-yellow-400"
                />
                <button
                  type="button"
                  onClick={withClickSound(handleRulesSearchById)}
                  className="p-2 rounded-lg bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-300 transition-all"
                  title={t('idSearch.search')}
                >
                  <i className="fas fa-search text-xs"></i>
                </button>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }

  // ── Main menu ──
  return (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />
      <div className={`z-50 min-w-[200px] w-[280px] max-w-[calc(100vw-2rem)] ${anchorBottom ? 'fixed top-[max(4rem,env(safe-area-inset-top))] right-4' : 'absolute top-full right-0 mt-2'}`}>
        <div
          className="rounded-2xl p-2 shadow-lg border border-white/10 animate-in slide-in-from-top-2 duration-200"
          style={{ backgroundColor: `rgba(255,255,255,${panelOpacity / 100})`, backdropFilter: 'blur(12px)' }}
        >
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <button
                onClick={item.onClick}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left
                  ${item.active
                    ? 'bg-yellow-400/15 text-yellow-300'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }
                `}
              >
                <i className={`fas ${item.icon} text-sm w-5 flex-shrink-0`}></i>
                <span className="text-sm font-medium">{item.label}</span>
                {(item.label === t('settings.rules') || item.label === 'Customise' || item.label === t('settings.log')) && (
                  <i className="fas fa-chevron-right text-xs ml-auto"></i>
                )}
              </button>
            </React.Fragment>
          ))}

          <div className="px-4 py-2 text-[10px] text-slate-500 text-center border-t border-white/5">
            v{typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : 'dev'} • Build: {typeof __BUILD_TIME__ !== 'undefined' ? __BUILD_TIME__ : 'dev'}
          </div>
          {onResetApp && (
            <>
              <div className="my-2 border-t border-white/10" />
              <button
                onClick={withClickSound(() => {
                  onResetApp();
                  onClose();
                })}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left text-amber-400 hover:bg-amber-500/10 hover:text-amber-300"
              >
                <i className="fas fa-rotate-left text-sm w-5 flex-shrink-0"></i>
                <span className="text-sm font-medium">{t('settings.resetApp')}</span>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
