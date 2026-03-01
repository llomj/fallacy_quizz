# iPhone PWA QA Checklist

Date: 2026-03-01
Scope: Settings placement, safe-area behavior, and install/update flow.

## Static checks completed

- Bottom settings button is fixed right with safe-area bottom padding in `src/App.tsx`.
- Top settings button is hidden on mobile (`hidden sm:flex`) and available on desktop.
- Settings panel opens near top-right with safe-area top offset in `src/components/SettingsMenu.tsx`.
- Standalone display-mode safe-area top padding exists in `index.html`.
- SW update path and cache refresh route still present (`public/sw.js`, `clear-sw.html`).

## Device checks required (manual on iPhone)

- Add to Home Screen and launch from icon.
- Confirm no overlap with iOS status bar in portrait.
- Confirm settings tap target is clear above home indicator.
- Confirm settings panel appears near top-right, not bottom.
- Confirm behavior remains correct after orientation change.
- Confirm EN/FR toggle still updates visible UI text.

## Current status

- Static code checks: PASS
- Device QA: PENDING (requires physical iPhone run)
