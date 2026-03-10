import React from 'react';

interface ConceptTooltipModalProps {
  conceptLabel: string;
  definition: string | null;
  onClose: () => void;
}

/**
 * Modal that shows a concept label and its definition when the user taps a concept pill in the hub.
 */
export const ConceptTooltipModal: React.FC<ConceptTooltipModalProps> = ({
  conceptLabel,
  definition,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div
        className="glass rounded-2xl p-6 max-w-[320px] w-full border border-yellow-400/30 shadow-2xl animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-labelledby="concept-modal-title"
        aria-modal="true"
      >
        <div className="flex items-center justify-between gap-2 mb-3">
          <h3
            id="concept-modal-title"
            className="text-sm font-black uppercase tracking-wider text-yellow-300"
          >
            {conceptLabel}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <i className="fas fa-times text-sm"></i>
          </button>
        </div>
        {definition ? (
          <p className="text-slate-200 text-sm leading-relaxed">{definition}</p>
        ) : (
          <p className="text-slate-500 text-sm italic">No definition available for this concept.</p>
        )}
      </div>
    </div>
  );
};
