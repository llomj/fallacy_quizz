import React, { useState, useEffect, useRef } from 'react';

declare const __BUILD_TIME__: string | undefined;
declare const __APP_VERSION__: string | undefined;
import { useLanguage } from '../contexts/LanguageContext';
import { formatTranslation } from '../translations';
import { MAX_QUESTION_ID } from '../questionsBank';
import {
  MUTATION_GRADIENTS,
  QUIZ_ACCENTS,
  MutationGradientId,
  QuizAccentId,
} from '../utils/colorThemes';

/** Swipe-style toggle: green when on, gray when off. */
const ToggleSwitch: React.FC<{
  checked: boolean;
  onChange: () => void;
  label: string;
  icon: string;
  order?: number;
}> = ({ checked, onChange, label, icon, order }) => (
  <button
    type="button"
    onClick={onChange}
    style={{ order }}
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
  onShowUserGlossary?: () => void;
  onShowLevelSelector?: () => void;
  onToggleLanguage?: () => void;
  onResetApp?: () => void;
  panelOpacity?: number;
  onSetPanelOpacity?: (opacity: number) => void;
  mutationGradient?: MutationGradientId;
  onSetMutationGradient?: (gradient: MutationGradientId) => void;
  customMutationFrom?: string;
  customMutationTo?: string;
  onSetCustomMutationFrom?: (color: string) => void;
  onSetCustomMutationTo?: (color: string) => void;
  quizAccent?: QuizAccentId;
  onSetQuizAccent?: (accent: QuizAccentId) => void;
  customQuizAccent?: string;
  onSetCustomQuizAccent?: (color: string) => void;
  statsEnabled?: boolean;
  onToggleStats?: () => void;
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
  onShowUserGlossary,
  onShowLevelSelector,
  onToggleLanguage,
  onResetApp,
  panelOpacity = 100,
  onSetPanelOpacity,
  mutationGradient = 'sunset',
  onSetMutationGradient,
  customMutationFrom = '#fde047',
  customMutationTo = '#ff00ff',
  onSetCustomMutationFrom,
  onSetCustomMutationTo,
  quizAccent = 'yellow',
  onSetQuizAccent,
  customQuizAccent = '#4ade80',
  onSetCustomQuizAccent,
  statsEnabled = true,
  onToggleStats,
}) => {
  const { t, language } = useLanguage();
  const [rulesSubmenuOpen, setRulesSubmenuOpen] = useState(false);
  const [logSubmenuOpen, setLogSubmenuOpen] = useState(false);
  const [customiseSubmenuOpen, setCustomiseSubmenuOpen] = useState(false);
  const [soundsSubmenuOpen, setSoundsSubmenuOpen] = useState(false);
  const [panelSubmenuOpen, setPanelSubmenuOpen] = useState(false);
  const [mutationColorsSubmenuOpen, setMutationColorsSubmenuOpen] = useState(false);
  const [quizAccentSubmenuOpen, setQuizAccentSubmenuOpen] = useState(false);
  const [rulesSearchId, setRulesSearchId] = useState('');
  const [logSearchId, setLogSearchId] = useState('');
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      setRulesSubmenuOpen(false);
      setLogSubmenuOpen(false);
      setCustomiseSubmenuOpen(false);
      setSoundsSubmenuOpen(false);
      setPanelSubmenuOpen(false);
      setMutationColorsSubmenuOpen(false);
      setQuizAccentSubmenuOpen(false);
      setRulesSearchId('');
      setLogSearchId('');
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const closeWhenOutside = (event: MouseEvent) => {
      const target = event.target;
      if (target instanceof Node && !panelRef.current?.contains(target)) {
        event.preventDefault();
        event.stopPropagation();
        onClose();
      }
    };

    document.addEventListener('click', closeWhenOutside, true);
    return () => document.removeEventListener('click', closeWhenOutside, true);
  }, [isOpen, onClose]);

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

  const hasRulesContent = Boolean(onShowGameRules || onShowArgumentation);
  const withClickSound = (fn: () => void) => () => { onPlayClickSound?.(); fn(); };

  const collator = new Intl.Collator(language, { sensitivity: 'base' });
  const orderFor = (labels: string[]) =>
    new Map([...labels].sort((a, b) => collator.compare(a, b)).map((label, index) => [label, index]));
  const menuItems: {
    icon: string;
    label: string;
    onClick: () => void;
    active?: boolean;
    destructive?: boolean;
    hasSubmenu?: boolean;
  }[] = [];

  menuItems.push({
    icon: 'fa-palette',
    label: t('settings.customise'),
    onClick: withClickSound(() => setCustomiseSubmenuOpen(prev => !prev)),
    hasSubmenu: true,
  });

  if (onToggleLanguage) {
    menuItems.push({
      icon: 'fa-language',
      label: language === 'en' ? 'Français' : 'English',
      onClick: withClickSound(() => { onToggleLanguage(); onClose(); })
    });
  }

  const hasLogContent = Boolean(onShowGlossary || onShowIdSearch || onShowIdLog || onShowLearningLog || onShowUserGlossary);
  if (hasLogContent) {
    menuItems.push({
      icon: 'fa-clipboard-list',
      label: t('settings.log'),
      onClick: withClickSound(() => setLogSubmenuOpen(prev => !prev)),
      hasSubmenu: true,
    });
  }

  if (onResetApp) {
    menuItems.push({
      icon: 'fa-arrows-rotate',
      label: t('settings.refreshApp'),
      onClick: withClickSound(() => {
        localStorage.setItem('needsRefresh', 'true');
        window.location.reload();
      })
    });
  }

  if (hasRulesContent) {
    menuItems.push({
      icon: 'fa-gavel',
      label: t('settings.rules'),
      onClick: withClickSound(() => setRulesSubmenuOpen(prev => !prev)),
      hasSubmenu: true,
    });
  }

  if (onShowLevelSelector) {
    menuItems.push({
      icon: 'fa-layer-group',
      label: t('settings.selectLevel'),
      onClick: withClickSound(() => { onShowLevelSelector(); onClose(); })
    });
  }

  if (onToggleRandomMode) {
    menuItems.push({
      icon: 'fa-shuffle',
      label: randomMode ? t('settings.switchToLevelMode') : t('settings.switchToRandomMode'),
      onClick: withClickSound(() => {
        onClose();
        window.requestAnimationFrame(() => onToggleRandomMode());
      })
    });
  }

  if (onResetApp) {
    menuItems.push({
      icon: 'fa-rotate-left',
      label: t('settings.resetApp'),
      destructive: true,
      onClick: withClickSound(() => {
        onResetApp();
        onClose();
      }),
    });
  }

  menuItems.sort((a, b) => collator.compare(a.label, b.label));

  const customiseOrder = orderFor([
    t('settings.customiseSettingsPanel'),
    t('settings.sounds'),
    t('settings.stats'),
  ]);
  const soundsOrder = orderFor([
    t('settings.haptic'),
    t('settings.lightMode'),
    t('settings.sound'),
  ]);
  const panelOrder = orderFor([
    t('settings.mutationButtonColors'),
    t('settings.panelTransparency'),
    t('settings.quizAccentColor'),
  ]);
  const logOrder = orderFor([
    t('app.fallacyLog') || 'Fallacy Log',
    t('app.glossary'),
    t('settings.idLog'),
    t('app.learningLog'),
    t('settings.searchById'),
    t('settings.userGlossary'),
  ]);
  const rulesOrder = orderFor([
    t('gameRules.title'),
    t('settings.logicalRules'),
    t('settings.searchById'),
  ]);
  const sortedMutationGradients = [...MUTATION_GRADIENTS].sort((a, b) =>
    collator.compare(language === 'fr' ? a.labelFr : a.labelEn, language === 'fr' ? b.labelFr : b.labelEn)
  );
  const mutationGradientOrder = orderFor([
    ...MUTATION_GRADIENTS.map((gradient) => language === 'fr' ? gradient.labelFr : gradient.labelEn),
    t('settings.customGradient'),
  ]);
  const sortedQuizAccents = [...QUIZ_ACCENTS].sort((a, b) =>
    collator.compare(language === 'fr' ? a.labelFr : a.labelEn, language === 'fr' ? b.labelFr : b.labelEn)
  );
  const quizAccentOrder = orderFor([
    ...QUIZ_ACCENTS.map((accent) => language === 'fr' ? accent.labelFr : accent.labelEn),
    t('settings.customColor'),
  ]);

  const basePath = typeof window !== 'undefined' ? (import.meta.env.BASE_URL || '/') : '/';

  const colorPickerShell = (children: React.ReactNode) => (
    <>
      <div className="fixed inset-0 z-[60] bg-black/60" onClick={onClose} />
      <div ref={panelRef} className={`z-[70] min-w-[200px] w-[300px] max-w-[calc(100vw-2rem)] ${anchorBottom ? 'fixed top-[max(4rem,env(safe-area-inset-top))] right-4' : 'absolute top-full right-0 mt-2'}`}>
        <div
          className="rounded-2xl p-2 shadow-lg border border-white/10 animate-in slide-in-from-top-2 duration-200 backdrop-blur-xl"
          style={{ backgroundColor: `rgba(15,23,42,${panelOpacity / 100})` }}
        >
          {children}
        </div>
      </div>
    </>
  );

  if (mutationColorsSubmenuOpen) {
    return colorPickerShell(
      <>
        <button
          onClick={withClickSound(() => { setMutationColorsSubmenuOpen(false); setPanelSubmenuOpen(true); })}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left text-slate-300 hover:bg-white/10 hover:text-white"
        >
          <i className="fas fa-arrow-left text-sm w-5 flex-shrink-0"></i>
          <span className="text-sm font-medium">{t('settings.back')}</span>
        </button>
        <div className="px-4 pb-4">
          <div className="flex items-center gap-3 py-2">
            <i className="fas fa-wand-magic-sparkles text-sm w-5 text-slate-400"></i>
            <span className="text-sm font-semibold text-slate-200">{t('settings.mutationButtonColors')}</span>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {sortedMutationGradients.map((gradient) => (
              <button
                key={gradient.id}
                type="button"
                aria-pressed={mutationGradient === gradient.id}
                onClick={withClickSound(() => onSetMutationGradient?.(gradient.id))}
                style={{ order: mutationGradientOrder.get(language === 'fr' ? gradient.labelFr : gradient.labelEn) }}
                className={`rounded-xl border p-2 text-left transition-all ${
                  mutationGradient === gradient.id
                    ? 'border-white/80 bg-white/10'
                    : 'border-white/10 hover:border-white/30 hover:bg-white/5'
                }`}
              >
                <span
                  className="block h-7 rounded-lg mb-1.5"
                  style={{ backgroundImage: `linear-gradient(90deg, ${gradient.from}, ${gradient.to})` }}
                />
                <span className="text-[11px] font-medium text-slate-300">
                  {language === 'fr' ? gradient.labelFr : gradient.labelEn}
                </span>
              </button>
            ))}
            <div
              style={{ order: mutationGradientOrder.get(t('settings.customGradient')) }}
              className={`col-span-2 rounded-xl border p-2.5 transition-all ${
                mutationGradient === 'custom'
                  ? 'border-white/80 bg-white/10'
                  : 'border-white/10 hover:border-white/30 hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className="h-9 flex-1 rounded-lg border border-white/20"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${customMutationFrom}, ${customMutationTo})`,
                  }}
                />
                <span className="text-[11px] font-medium text-slate-200">{t('settings.customGradient')}</span>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <label className="text-[10px] text-slate-400">
                  {t('settings.gradientStart')}
                  <input
                    type="color"
                    aria-label={t('settings.gradientStart')}
                    value={customMutationFrom}
                    onChange={(event) => onSetCustomMutationFrom?.(event.target.value)}
                    className="mt-1 h-8 w-full cursor-pointer rounded-lg border border-white/10 bg-transparent"
                  />
                </label>
                <label className="text-[10px] text-slate-400">
                  {t('settings.gradientEnd')}
                  <input
                    type="color"
                    aria-label={t('settings.gradientEnd')}
                    value={customMutationTo}
                    onChange={(event) => onSetCustomMutationTo?.(event.target.value)}
                    className="mt-1 h-8 w-full cursor-pointer rounded-lg border border-white/10 bg-transparent"
                  />
                </label>
              </div>
              <div
                className="mt-2 h-3 rounded-full"
                style={{
                  background:
                    'linear-gradient(90deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)',
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </>
    );
  }

  if (quizAccentSubmenuOpen) {
    return colorPickerShell(
      <>
        <button
          onClick={withClickSound(() => { setQuizAccentSubmenuOpen(false); setPanelSubmenuOpen(true); })}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left text-slate-300 hover:bg-white/10 hover:text-white"
        >
          <i className="fas fa-arrow-left text-sm w-5 flex-shrink-0"></i>
          <span className="text-sm font-medium">{t('settings.back')}</span>
        </button>
        <div className="px-4 pb-4">
          <div className="flex items-center gap-3 py-2">
            <i className="fas fa-highlighter text-sm w-5 text-slate-400"></i>
            <span className="text-sm font-semibold text-slate-200">{t('settings.quizAccentColor')}</span>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {sortedQuizAccents.map((accent) => (
              <button
                key={accent.id}
                type="button"
                aria-pressed={quizAccent === accent.id}
                onClick={withClickSound(() => onSetQuizAccent?.(accent.id))}
                style={{ order: quizAccentOrder.get(language === 'fr' ? accent.labelFr : accent.labelEn) }}
                className={`rounded-xl border p-2 text-center transition-all ${
                  quizAccent === accent.id
                    ? 'border-white/80 bg-white/10'
                    : 'border-white/10 hover:border-white/30 hover:bg-white/5'
                }`}
              >
                <span
                  className="block h-8 w-8 rounded-full mx-auto mb-1.5 border border-white/20"
                  style={{ backgroundColor: accent.hex, boxShadow: `0 0 12px rgb(${accent.rgb} / 0.35)` }}
                />
                <span className="text-[10px] font-medium text-slate-300">
                  {language === 'fr' ? accent.labelFr : accent.labelEn}
                </span>
              </button>
            ))}
            <label
              style={{ order: quizAccentOrder.get(t('settings.customColor')) }}
              className={`col-span-3 rounded-xl border p-2.5 cursor-pointer transition-all ${
                quizAccent === 'custom'
                  ? 'border-white/80 bg-white/10'
                  : 'border-white/10 hover:border-white/30 hover:bg-white/5'
              }`}
            >
              <span className="flex items-center gap-3">
                <span
                  className="h-9 flex-1 rounded-lg border border-white/20"
                  style={{
                    background:
                      'linear-gradient(90deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)',
                  }}
                />
                <span
                  className="h-9 w-9 rounded-full border-2 border-white/70 shrink-0"
                  style={{ backgroundColor: customQuizAccent }}
                />
                <span className="text-[11px] font-medium text-slate-200">{t('settings.customColor')}</span>
              </span>
              <input
                type="color"
                aria-label={t('settings.customColor')}
                value={customQuizAccent}
                onChange={(event) => onSetCustomQuizAccent?.(event.target.value)}
                className="mt-2 h-8 w-full cursor-pointer rounded-lg border border-white/10 bg-transparent"
              />
            </label>
          </div>
        </div>
      </>
    );
  }

  // ── Panel Opacity submenu ──
  if (panelSubmenuOpen) {
    return (
      <>
        <div className="fixed inset-0 z-[60] bg-black/60" onClick={onClose} />
        <div ref={panelRef} className={`z-[70] min-w-[200px] w-[280px] max-w-[calc(100vw-2rem)] ${anchorBottom ? 'fixed top-[max(4rem,env(safe-area-inset-top))] right-4' : 'absolute top-full right-0 mt-2'}`}>
          <div
            className="flex flex-col rounded-2xl p-2 shadow-lg border border-white/10 animate-in slide-in-from-top-2 duration-200 backdrop-blur-xl"
            style={{ backgroundColor: `rgba(15,23,42,${panelOpacity / 100})` }}
          >
            <button
              onClick={withClickSound(() => { setPanelSubmenuOpen(false); setCustomiseSubmenuOpen(true); })}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left text-slate-300 hover:bg-white/10 hover:text-white"
            >
              <i className="fas fa-arrow-left text-sm w-5 flex-shrink-0"></i>
              <span className="text-sm font-medium">{t('settings.back')}</span>
            </button>
            <button
              onClick={withClickSound(() => { setPanelSubmenuOpen(false); setMutationColorsSubmenuOpen(true); })}
              style={{ order: panelOrder.get(t('settings.mutationButtonColors')) }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left text-slate-300 hover:bg-white/10 hover:text-white"
            >
              <i className="fas fa-wand-magic-sparkles text-sm w-5 flex-shrink-0"></i>
              <span className="text-sm font-medium">{t('settings.mutationButtonColors')}</span>
              <i className="fas fa-chevron-right text-xs ml-auto"></i>
            </button>
            <button
              onClick={withClickSound(() => { setPanelSubmenuOpen(false); setQuizAccentSubmenuOpen(true); })}
              style={{ order: panelOrder.get(t('settings.quizAccentColor')) }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left text-slate-300 hover:bg-white/10 hover:text-white"
            >
              <i className="fas fa-highlighter text-sm w-5 flex-shrink-0"></i>
              <span className="text-sm font-medium">{t('settings.quizAccentColor')}</span>
              <i className="fas fa-chevron-right text-xs ml-auto"></i>
            </button>
            <div
              className="px-4 py-3"
              style={{ order: panelOrder.get(t('settings.panelTransparency')) }}
            >
              <div className="flex items-center gap-3 mb-3">
                <i className="fas fa-sliders text-sm w-5 flex-shrink-0 text-slate-400"></i>
                <span className="text-sm font-medium text-slate-300">{t('settings.panelTransparency')}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-slate-500 w-8 text-right">{panelOpacity}%</span>
                <input
                  type="range"
                  min={10}
                  max={100}
                  step={1}
                  value={panelOpacity}
                  onChange={(e) => onSetPanelOpacity?.(Number(e.target.value))}
                  className="flex-1 h-1.5 bg-slate-700 rounded-full appearance-none cursor-pointer accent-yellow-400 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-yellow-400 [&::-webkit-slider-thumb]:shadow-md"
                />
              </div>
              <p className="text-[10px] text-slate-500 mt-2 text-center">
                {t('settings.panelOpacityHint')}
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
        <div className="fixed inset-0 z-[60] bg-black/60" onClick={onClose} />
        <div ref={panelRef} className={`z-[70] min-w-[200px] w-[280px] max-w-[calc(100vw-2rem)] ${anchorBottom ? 'fixed top-[max(4rem,env(safe-area-inset-top))] right-4' : 'absolute top-full right-0 mt-2'}`}>
          <div
            className="flex flex-col rounded-2xl p-2 shadow-lg border border-white/10 animate-in slide-in-from-top-2 duration-200 backdrop-blur-xl"
            style={{ backgroundColor: `rgba(15,23,42,${panelOpacity / 100})` }}
          >
            <button
              onClick={withClickSound(() => { setSoundsSubmenuOpen(false); setCustomiseSubmenuOpen(true); })}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left text-slate-300 hover:bg-white/10 hover:text-white"
            >
              <i className="fas fa-arrow-left text-sm w-5 flex-shrink-0"></i>
              <span className="text-sm font-medium">{t('settings.back')}</span>
            </button>
            {onToggleHaptic !== undefined && (
              <ToggleSwitch
                checked={hapticEnabled}
                onChange={withClickSound(onToggleHaptic)}
                label={t('settings.haptic')}
                icon="fa-hand"
                order={soundsOrder.get(t('settings.haptic'))}
              />
            )}
            {onToggleLightMode !== undefined && (
              <ToggleSwitch
                checked={lightMode}
                onChange={withClickSound(onToggleLightMode)}
                label={t('settings.lightMode')}
                icon={lightMode ? 'fa-sun' : 'fa-moon'}
                order={soundsOrder.get(t('settings.lightMode'))}
              />
            )}
            {onToggleSound !== undefined && (
              <ToggleSwitch
                checked={soundEnabled}
                onChange={withClickSound(onToggleSound)}
                label={t('settings.sound')}
                icon={soundEnabled ? 'fa-volume-high' : 'fa-volume-xmark'}
                order={soundsOrder.get(t('settings.sound'))}
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
        <div className="fixed inset-0 z-[60] bg-black/60" onClick={onClose} />
        <div ref={panelRef} className={`z-[70] min-w-[200px] w-[280px] max-w-[calc(100vw-2rem)] ${anchorBottom ? 'fixed top-[max(4rem,env(safe-area-inset-top))] right-4' : 'absolute top-full right-0 mt-2'}`}>
          <div
            className="flex flex-col rounded-2xl p-2 shadow-lg border border-white/10 animate-in slide-in-from-top-2 duration-200 backdrop-blur-xl"
            style={{ backgroundColor: `rgba(15,23,42,${panelOpacity / 100})` }}
          >
            <button
              onClick={withClickSound(() => setCustomiseSubmenuOpen(false))}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left text-slate-300 hover:bg-white/10 hover:text-white"
            >
              <i className="fas fa-arrow-left text-sm w-5 flex-shrink-0"></i>
              <span className="text-sm font-medium">{t('settings.back')}</span>
            </button>
            <button
              onClick={withClickSound(() => { setCustomiseSubmenuOpen(false); setPanelSubmenuOpen(true); })}
              style={{ order: customiseOrder.get(t('settings.customiseSettingsPanel')) }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left text-slate-300 hover:bg-white/10 hover:text-white"
            >
              <i className="fas fa-sliders text-sm w-5 flex-shrink-0"></i>
              <span className="text-sm font-medium">{t('settings.customiseSettingsPanel')}</span>
              <i className="fas fa-chevron-right text-xs ml-auto"></i>
            </button>
            <button
              onClick={withClickSound(() => { setCustomiseSubmenuOpen(false); setSoundsSubmenuOpen(true); })}
              style={{ order: customiseOrder.get(t('settings.sounds')) }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left text-slate-300 hover:bg-white/10 hover:text-white"
            >
              <i className="fas fa-volume-high text-sm w-5 flex-shrink-0"></i>
              <span className="text-sm font-medium">{t('settings.sounds')}</span>
              <i className="fas fa-chevron-right text-xs ml-auto"></i>
            </button>
            {onToggleStats !== undefined && (
              <ToggleSwitch
                checked={statsEnabled}
                onChange={withClickSound(onToggleStats)}
                label={t('settings.stats')}
                icon={statsEnabled ? 'fa-chart-simple' : 'fa-eye-slash'}
                order={customiseOrder.get(t('settings.stats'))}
              />
            )}
          </div>
        </div>
      </>
    );
  }

  // ── Log submenu ──
  if (logSubmenuOpen && hasLogContent) {
    return (
      <>
        <div className="fixed inset-0 z-[60] bg-black/60" onClick={onClose} />
        <div ref={panelRef} className={`z-[70] min-w-[200px] w-[280px] max-w-[calc(100vw-2rem)] ${anchorBottom ? 'fixed top-[max(4rem,env(safe-area-inset-top))] right-4' : 'absolute top-full right-0 mt-2'}`}>
          <div
            className="flex flex-col rounded-2xl p-2 shadow-lg border border-white/10 animate-in slide-in-from-top-2 duration-200 backdrop-blur-xl"
            style={{ backgroundColor: `rgba(15,23,42,${panelOpacity / 100})` }}
          >
            <button
              onClick={withClickSound(() => setLogSubmenuOpen(false))}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left text-slate-300 hover:bg-white/10 hover:text-white"
            >
              <i className="fas fa-arrow-left text-sm w-5 flex-shrink-0"></i>
              <span className="text-sm font-medium">{t('settings.back')}</span>
            </button>
            {onShowFallacyLog && (
              <button
                onClick={withClickSound(() => { onShowFallacyLog(); onClose(); })}
                style={{ order: logOrder.get(t('app.fallacyLog') || 'Fallacy Log') }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left text-slate-300 hover:bg-white/10 hover:text-white"
              >
                <i className="fas fa-bookmark text-sm w-5 flex-shrink-0"></i>
                <span className="text-sm font-medium">{t('app.fallacyLog') || 'Fallacy Log'}</span>
              </button>
            )}
            {onShowIdLog && (
              <button
                onClick={withClickSound(() => { onShowIdLog(); onClose(); })}
                style={{ order: logOrder.get(t('settings.idLog')) }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left text-slate-300 hover:bg-white/10 hover:text-white"
              >
                <i className="fas fa-list text-sm w-5 flex-shrink-0"></i>
                <span className="text-sm font-medium">{t('settings.idLog')}</span>
              </button>
            )}
            {onShowGlossary && (
              <button
                onClick={withClickSound(() => { onShowGlossary(); onClose(); })}
                style={{ order: logOrder.get(t('app.glossary')) }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left ${view === 'glossary' ? 'bg-yellow-400/15 text-yellow-300' : 'text-slate-300 hover:bg-white/10 hover:text-white'}`}
              >
                <i className="fas fa-circle-info text-sm w-5 flex-shrink-0"></i>
                <span className="text-sm font-medium">{t('app.glossary')}</span>
              </button>
            )}
            {onShowLearningLog && (
              <button
                onClick={withClickSound(() => { onShowLearningLog(); onClose(); })}
                style={{ order: logOrder.get(t('app.learningLog')) }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left ${view === 'log' ? 'bg-yellow-400/15 text-yellow-300' : 'text-slate-300 hover:bg-white/10 hover:text-white'}`}
              >
                <i className="fas fa-book-open text-sm w-5 flex-shrink-0"></i>
                <span className="text-sm font-medium">{t('app.learningLog')}</span>
              </button>
            )}
            {onShowUserGlossary && (
              <button
                onClick={withClickSound(() => { onShowUserGlossary(); onClose(); })}
                style={{ order: logOrder.get(t('settings.userGlossary')) }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left text-slate-300 hover:bg-white/10 hover:text-white"
              >
                <i className="fas fa-book-atlas text-sm w-5 flex-shrink-0"></i>
                <span className="text-sm font-medium">{t('settings.userGlossary')}</span>
              </button>
            )}
            {onShowIdSearch && (
              <div
                className="w-full px-4 py-3"
                style={{ order: logOrder.get(t('settings.searchById')) }}
                onClick={(e) => e.stopPropagation()}
              >
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
          </div>
        </div>
      </>
    );
  }

  // ── Rules submenu ──
  if (rulesSubmenuOpen && hasRulesContent) {
    return (
      <>
        <div className="fixed inset-0 z-[60] bg-black/60" onClick={onClose} />
        <div ref={panelRef} className={`z-[70] min-w-[200px] w-[280px] max-w-[calc(100vw-2rem)] ${anchorBottom ? 'fixed top-[max(4rem,env(safe-area-inset-top))] right-4' : 'absolute top-full right-0 mt-2'}`}>
          <div
            className="flex flex-col rounded-2xl p-2 shadow-lg border border-white/10 animate-in slide-in-from-top-2 duration-200 backdrop-blur-xl"
            style={{ backgroundColor: `rgba(15,23,42,${panelOpacity / 100})` }}
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
                style={{ order: rulesOrder.get(t('gameRules.title')) }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left text-slate-300 hover:bg-white/10 hover:text-white"
              >
                <i className="fas fa-circle-info text-sm w-5 flex-shrink-0"></i>
                <span className="text-sm font-medium">{t('gameRules.title')}</span>
              </button>
            )}
            {onShowArgumentation && (
              <button
                onClick={withClickSound(() => { onShowArgumentation(); onClose(); })}
                style={{ order: rulesOrder.get(t('settings.logicalRules')) }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left text-slate-300 hover:bg-white/10 hover:text-white"
              >
                <i className="fas fa-scale-balanced text-sm w-5 flex-shrink-0"></i>
                <span className="text-sm font-medium">{t('settings.logicalRules')}</span>
              </button>
            )}
            {onShowIdSearch && (
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ order: rulesOrder.get(t('settings.searchById')) }}
                onClick={(e) => e.stopPropagation()}
              >
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
    <div className="fixed inset-0 z-[60]">
      <div
        className="absolute inset-0 bg-black/60 cursor-pointer"
        onClick={onClose}
      />
      <div ref={panelRef} className="fixed top-[max(4rem,env(safe-area-inset-top))] right-4 z-[70] min-w-[200px] w-[280px] max-w-[calc(100vw-2rem)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="rounded-2xl p-2 shadow-lg border border-white/10 animate-in slide-in-from-top-2 duration-200 backdrop-blur-xl"
          style={{ backgroundColor: `rgba(15,23,42,${panelOpacity / 100})` }}
        >
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <button
                onClick={item.onClick}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left
                  ${item.destructive
                    ? 'text-amber-400 hover:bg-amber-500/10 hover:text-amber-300'
                    : item.active
                    ? 'bg-yellow-400/15 text-yellow-300'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }
                `}
              >
                <i className={`fas ${item.icon} text-sm w-5 flex-shrink-0`}></i>
                <span className="text-sm font-medium">{item.label}</span>
                {item.hasSubmenu && (
                  <i className="fas fa-chevron-right text-xs ml-auto"></i>
                )}
              </button>
            </React.Fragment>
          ))}

          <div className="px-4 py-2 text-[10px] text-slate-500 text-center border-t border-white/5">
            v{typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : 'dev'} • Build: {typeof __BUILD_TIME__ !== 'undefined' ? __BUILD_TIME__ : 'dev'}
          </div>
        </div>
      </div>
    </div>
  );
};
