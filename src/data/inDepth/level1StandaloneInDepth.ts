/**
 * Question-specific in-depth explanations for **Level 1** (Plankton): IDs **1–90** in `fallaciesData.ts`.
 * Same contract as Level 0 (`level0StandaloneInDepth.ts`): when an ID is present, the app shows that
 * string as the **full** in-depth panel (no codon wrapper). English and French must stay in structural parity.
 *
 * Progress: see `/task.md` at repo root.
 */

import type { StandaloneInDepthLevels } from './level0StandaloneInDepth';

/** English — fill over time; tracked in task.md */
export const LEVEL_1_STANDALONE_EN: Partial<Record<number, StandaloneInDepthLevels>> = {};

/** French — même contrat que l’anglais (parité structurale) */
export const LEVEL_1_STANDALONE_FR: Partial<Record<number, StandaloneInDepthLevels>> = {};
