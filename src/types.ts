export enum SubLevel {
  BEGINNER = "Beginner",
  INTERMEDIATE = "Intermediate",
  EXPERT = "Expert"
}

export type QuestionFormat = 'standard' | 'output' | 'bug' | 'blank';

export interface Question {
  id: number;
  level: number;
  persona_stage: string;
  concept: string;
  difficulty: number;
  question: string;
  options: string[];
  correct_option_index: number;
  explanation: string;
  detailedExplanation?: string; // Optional detailed, verbose explanation for learning (fallback for all levels)
  /** Beginner-level explanation (simpler). Falls back to detailedExplanation if absent. */
  detailedExplanationBeginner?: string;
  /** Intermediate-level explanation. Falls back to detailedExplanation if absent. */
  detailedExplanationIntermediate?: string;
  /** Expert-level explanation (very in-depth). Falls back to detailedExplanation if absent. */
  detailedExplanationExpert?: string;
  subLevel?: SubLevel; // Optional for backwards compatibility, required for new questions
  questionFormat?: QuestionFormat; // Optional for new formats
}

export interface QuestionAttempt {
  id: number;
  question: string;
  selectedOption: string;
  correctOption: string;
  isCorrect: boolean;
  explanation: string;
  level: number;
  timestamp: number;
}

export enum PersonaStage {
  TADPOLE = "Tadpole",
  PLANKTON = "Plankton",
  SHRIMP = "Shrimp",
  CRAB = "Crab",
  SMALL_FISH = "Small Fish",
  OCTOPUS = "Octopus",
  SEAL = "Seal",
  DOLPHIN = "Dolphin",
  SHARK = "Shark",
  WHALE = "Whale",
  GOD_WHALE = "God Whale"
}

export interface IdLogEntry {
  id: number;
  question: string;
  correctAnswer: string;
  explanation: string;
  timestamp: number;
}

export interface RandomModeStats {
  totalAnswered: number;
  totalCorrect: number;
  lastSessionScore?: number;
  lastSessionTotal?: number;
  /** Stars 0–5 from last Random session (from % correct). Separate from level stars. */
  lastSessionStars?: number;
}

export interface UserStats {
  currentLevel: number;
  xp: number;
  totalAttempts?: number;
  completedQuestionIds: number[];
  highestUnlockedLevel: number;
  levelProgress: Record<number, number>;
  /** Total correct answers per level (cumulative across all sessions). Used for accuracy-based star rating. */
  correctPerLevel?: Record<number, number>;
  history: QuestionAttempt[];
  idLog: IdLogEntry[];
  lastSessionScore?: number;
  lastSessionTotal?: number;
  acquiredStars?: Record<number, number>; // Maps level ID to stars 0–5 from accuracy (20/40/60/80/95%)
  randomModeStats?: RandomModeStats;
  randomMode?: boolean; // Persisted preference: Level vs Random mode
  stateVersion?: number; // For migrations (e.g. question ID shift when adding Level 0)
}

/** Frequency of fallacies in everyday discourse. Used for level-ordering audit (common → early, rare → late). */
export type FallacyFrequency = 'common' | 'uncommon' | 'rare';

export interface LevelInfo {
  level: number;
  persona: PersonaStage;
  /** Concept labels in English (for EN UI). */
  conceptsEn: string[];
  /** Concept labels in French (for FR UI). */
  conceptsFr: string[];
  /** @deprecated Use conceptsEn/conceptsFr by language. Kept for backward compat; equals conceptsEn. */
  concepts: string[];
  description: string;
  color: string;
  /** Frequency of fallacies at this level (common=1-2, uncommon=3-6, rare=7-10). For audit and level-assignment consistency. */
  fallacyFrequency?: FallacyFrequency;
}
