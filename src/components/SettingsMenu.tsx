import React from 'react';
import { PersonaStage } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface SettingsMenuProps {
  isOpen: boolean;
  onClose: () => void;
  view: 'hub' | 'quiz' | 'log' | 'glossary';
  randomMode?: boolean;
  anchorBottom?: boolean; // When true, menu opens near top-right (mobile-friendly placement)
  onToggleRandomMode?: () => void;
  onShowGlossary?: () => void;
  onShowIdSearch?: () => void;
  onShowIdLog?: () => void;
  onShowLearningLog?: () => void;
  onShowOperations?: () => void;
  onShowLevelSelector?: () => void;
  onToggleLanguage?: () => void;
  onResetApp?: () => void;
}

export const SettingsMenu: React.FC<SettingsMenuProps> = ({
  isOpen,
  onClose,
  view,
  randomMode = false,
  anchorBottom = false,
  onToggleRandomMode,
  onShowGlossary,
  onShowIdSearch,
  onShowIdLog,
  onShowLearningLog,
  onShowOperations,
  onShowLevelSelector,
  onToggleLanguage,
  onResetApp
}) => {
  const { t, language } = useLanguage();

  if (!isOpen) return null;

  const menuItems = [];

  // Hub view items
  if (view === 'hub') {
    if (onShowGlossary) {
      menuItems.push({
        icon: 'fa-circle-info',
        label: t('app.glossary'),
        onClick: () => {
          onShowGlossary();
          onClose();
        },
        active: view === 'glossary'
      });
    }
    if (onShowIdSearch) {
      menuItems.push({
        icon: 'fa-hashtag',
        label: t('settings.searchById'),
        onClick: () => {
          onShowIdSearch();
          onClose();
        }
      });
    }
    if (onShowIdLog) {
      menuItems.push({
        icon: 'fa-list',
        label: t('settings.idLog'),
        onClick: () => {
          onShowIdLog();
          onClose();
        }
      });
    }
    if (onShowLearningLog) {
      menuItems.push({
        icon: 'fa-book-open',
        label: t('app.learningLog'),
        onClick: () => {
          onShowLearningLog();
          onClose();
        },
        active: view === 'log'
      });
    }
    if (onToggleRandomMode) {
      menuItems.push({
        icon: 'fa-shuffle',
        label: randomMode ? t('settings.switchToLevelMode') : t('settings.switchToRandomMode'),
        onClick: () => {
          onToggleRandomMode();
          onClose();
        }
      });
    }
  }

  // Quiz view items
  if (view === 'quiz') {
    if (onShowOperations) {
      menuItems.push({
        icon: 'fa-calculator',
        label: t('app.operations'),
        onClick: () => {
          onShowOperations();
          onClose();
        }
      });
    }
    if (onToggleRandomMode) {
      menuItems.push({
        icon: 'fa-shuffle',
        label: randomMode ? t('settings.switchToLevelMode') : t('settings.switchToRandomMode'),
        onClick: () => {
          onToggleRandomMode();
          onClose();
        }
      });
    }
  }

  // Common items
  if (onShowLevelSelector) {
    menuItems.push({
      icon: 'fa-layer-group',
      label: t('settings.selectLevel'),
      onClick: () => {
        onShowLevelSelector();
        onClose();
      }
    });
  }

  if (onToggleLanguage) {
    menuItems.push({
      icon: 'fa-language',
      label: language === 'en' ? 'Français' : 'English',
      onClick: () => {
        onToggleLanguage();
        onClose();
      }
    });
  }

  // Refresh app: clears SW cache and loads latest (for PWA users seeing stale content)
  const basePath = typeof window !== 'undefined' ? (import.meta.env.BASE_URL || '/') : '/';
  menuItems.push({
    icon: 'fa-arrows-rotate',
    label: t('settings.refreshApp'),
    onClick: () => {
      onClose();
      window.location.href = `${basePath}clear-sw.html`;
    }
  });

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40"
        onClick={onClose}
      />
      
      {/* Menu - near top-right on mobile, below trigger on desktop */}
      <div className={`z-50 min-w-[200px] ${anchorBottom ? 'fixed top-[max(4rem,env(safe-area-inset-top))] right-4' : 'absolute top-full right-0 mt-2'}`}>
        <div className="glass rounded-2xl p-2 shadow-2xl border border-white/10 animate-in slide-in-from-top-2 duration-200">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left
                ${item.active 
                  ? 'bg-indigo-500/20 text-indigo-400' 
                  : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }
              `}
            >
              <i className={`fas ${item.icon} text-sm w-5 flex-shrink-0`}></i>
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
          
          {/* Reset App button - at bottom with warning styling */}
          {onResetApp && (
            <>
              <div className="my-2 border-t border-white/10" />
              <button
                onClick={() => {
                  onResetApp();
                  onClose();
                }}
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
