import { PersonaStage, LevelInfo, RandomModeStats } from './types';

export const XP_PER_QUESTION = 10;
export const QUESTIONS_PER_LEVEL = 100; // Matches fallaciesData.ts (100 per level × 10 levels)
export const SUBLEVELS_PER_LEVEL = 3;
export const QUESTIONS_PER_SUBLEVEL = Math.floor(QUESTIONS_PER_LEVEL / 3); // ~100/3 for star thresholds
export const TOTAL_QUESTIONS = 900; // 900 (levels 1-9) + 2 (level 0 foundations)

/** Questions needed to complete a level and unlock the next (including Level 0 foundations). */
export const getQuestionsNeededForLevel = (_level: number): number =>
  QUESTIONS_PER_LEVEL;

/** Minimum progress (as fraction of QUESTIONS_PER_LEVEL) before any star is shown. Stars stay blank until ~10–20%. */
export const STAR_PROGRESS_THRESHOLD = Math.ceil(QUESTIONS_PER_LEVEL * 0.10);

/** Derive number of stars (0–5) from accuracy for a level. 20%→1, 40%→2, 60%→3, 80%→4, 95%→5. */
export const getStarsFromAccuracy = (percentCorrect: number): number => {
  if (percentCorrect >= 95) return 5;
  if (percentCorrect >= 80) return 4;
  if (percentCorrect >= 60) return 3;
  if (percentCorrect >= 40) return 2;
  if (percentCorrect >= 20) return 1;
  return 0;
};

/** Random mode: stars from session accuracy (harder scale). 10%→1, 20%→2, 40%→3, 70%→4, 95%→5. */
export const getRandomModeStarsFromAccuracy = (percentCorrect: number): number => {
  if (percentCorrect >= 95) return 5;
  if (percentCorrect >= 70) return 4;
  if (percentCorrect >= 40) return 3;
  if (percentCorrect >= 20) return 2;
  if (percentCorrect >= 10) return 1;
  return 0;
};

/** @deprecated Used only for migration when correctPerLevel is missing. Derives 0–3 stars from progress. */
export const getStarsFromProgress = (progress: number): number => {
  if (progress >= QUESTIONS_PER_SUBLEVEL * 3) return 3;
  if (progress >= QUESTIONS_PER_SUBLEVEL * 2) return 2;
  if (progress >= QUESTIONS_PER_SUBLEVEL) return 1;
  return 0;
};

// Random Mode: score = correct × accuracy (correct/total). Same 10 personas, point-based progression.
export const RANDOM_MODE_THRESHOLDS: { minScore: number; persona: PersonaStage }[] = [
  { minScore: 0, persona: PersonaStage.TADPOLE },
  { minScore: 5, persona: PersonaStage.PLANKTON },
  { minScore: 15, persona: PersonaStage.SHRIMP },
  { minScore: 40, persona: PersonaStage.CRAB },
  { minScore: 80, persona: PersonaStage.SMALL_FISH },
  { minScore: 150, persona: PersonaStage.OCTOPUS },
  { minScore: 250, persona: PersonaStage.SEAL },
  { minScore: 400, persona: PersonaStage.DOLPHIN },
  { minScore: 600, persona: PersonaStage.SHARK },
  { minScore: 900, persona: PersonaStage.WHALE },
  { minScore: 1300, persona: PersonaStage.GOD_WHALE },
];

/** Evolution score: correct × (correct / total). Rewards both volume and accuracy. */
export const getRandomModeScore = (stats: RandomModeStats): number => {
  if (stats.totalAnswered === 0) return 0;
  const accuracy = stats.totalCorrect / stats.totalAnswered;
  return Math.floor(stats.totalCorrect * accuracy);
};

/** Map cumulative Random-mode score to persona. Same 11 personas as Level mode (0–10). */
export const getPersonaFromRandomScore = (score: number): PersonaStage => {
  let result = PersonaStage.TADPOLE;
  for (const { minScore, persona } of RANDOM_MODE_THRESHOLDS) {
    if (score >= minScore) result = persona;
  }
  return result;
};

/** Get next persona threshold for progress display. Returns null if at max (God Whale). */
export const getNextRandomModeThreshold = (score: number): { minScore: number; persona: PersonaStage } | null => {
  for (const t of RANDOM_MODE_THRESHOLDS) {
    if (score < t.minScore) return t;
  }
  return null;
};

/** Emoji icons for each persona (level selection, badges). */
export const PERSONA_EMOJI: Record<PersonaStage, string> = {
  [PersonaStage.TADPOLE]: "💧",
  [PersonaStage.PLANKTON]: "🦠",
  [PersonaStage.SHRIMP]: "🦐",
  [PersonaStage.CRAB]: "🦀",
  [PersonaStage.SMALL_FISH]: "🐟",
  [PersonaStage.OCTOPUS]: "🐙",
  [PersonaStage.SEAL]: "🦭",
  [PersonaStage.DOLPHIN]: "🐬",
  [PersonaStage.SHARK]: "🦈",
  [PersonaStage.WHALE]: "🐋",
  [PersonaStage.GOD_WHALE]: "🐳",
};

// Level configurations with personas and concepts (Logical fallacies focus). Level 0 = absolute beginner.
export const LEVELS: LevelInfo[] = [
  {
    level: 0,
    persona: PersonaStage.TADPOLE,
    conceptsEn: ["Argument", "Premise", "Conclusion", "Valid", "Sound", "Fallacy"],
    conceptsFr: ["Argument", "Prémisse", "Conclusion", "Valide", "Solide", "Sophisme"],
    concepts: ["Argument", "Premise", "Conclusion", "Valid", "Sound", "Fallacy"],
    description: "Foundations of arguments. Learn premises vs conclusions, arguments vs assertions, validity vs soundness, and what a fallacy is.",
    color: "#94a3b8",
    fallacyFrequency: "common"
  },
  {
    level: 1,
    persona: PersonaStage.PLANKTON,
    conceptsEn: ["Ad Hominem", "Straw Man", "Appeal to Popularity", "Appeal to Authority", "False Dilemma"],
    conceptsFr: ["Ad Hominem", "Homme de paille", "Appel à la popularité", "Appel à l'autorité", "Fausse dichotomie"],
    concepts: ["Ad Hominem", "Straw Man", "Appeal to Popularity", "Appeal to Authority", "False Dilemma"],
    description: "Common everyday fallacies I. Spot very obvious personal attacks, straw men, bad appeals to popularity or authority, and false dilemmas.",
    color: "#10b981",
    fallacyFrequency: "common"
  },

  {
    level: 2,
    persona: PersonaStage.SHRIMP,
    conceptsEn: ["Red Herring", "Slippery Slope", "Hasty Generalization", "Weak Analogy", "Appeal to Emotion"],
    conceptsFr: ["Fausse piste", "Pente glissante", "Généralisation hâtive", "Analogie faible", "Appel à l'émotion"],
    concepts: ["Red Herring", "Slippery Slope", "Hasty Generalization", "Weak Analogy", "Appeal to Emotion"],
    description: "Common everyday fallacies II. Learn to recognize diversions, slippery slopes, hasty generalizations, weak analogies, and emotional manipulation.",
    color: "#059669",
    fallacyFrequency: "common"
  },
  {
    level: 3,
    persona: PersonaStage.CRAB,
    conceptsEn: ["Post Hoc", "Cum Hoc", "Reversed Causality", "Oversimplified Cause", "Confounding Factors"],
    conceptsFr: ["Post hoc", "Cum hoc", "Cause inversée", "Cause simplifiée", "Facteurs confondants"],
    concepts: ["Post Hoc", "Cum Hoc", "Reversed Causality", "Oversimplified Cause", "Confounding Factors"],
    description: "Causal fallacies. Distinguish correlation from causation, reversed causality, oversimplified causes, and ignored confounders.",
    color: "#ec4899",
    fallacyFrequency: "uncommon"
  },
  {
    level: 4,
    persona: PersonaStage.SMALL_FISH,
    conceptsEn: ["Equivocation", "Amphiboly", "Loaded Question", "Vagueness", "Moving the Goalposts"],
    conceptsFr: ["Équivoque", "Amphibologie", "Question piège", "Vagueness", "Déplacer les poteaux"],
    concepts: ["Equivocation", "Amphiboly", "Loaded Question", "Vagueness", "Moving the Goalposts"],
    description: "Ambiguity and language. Spot wordplay, grammatical ambiguity, loaded questions, vagueness, and shifting standards.",
    color: "#06b6d4",
    fallacyFrequency: "uncommon"
  },
  {
    level: 5,
    persona: PersonaStage.OCTOPUS,
    conceptsEn: ["Affirming the Consequent", "Denying the Antecedent", "Undistributed Middle"],
    conceptsFr: ["Affirmation du conséquent", "Négation de l'antécédent", "Terme moyen non distribué"],
    concepts: ["Affirming the Consequent", "Denying the Antecedent", "Undistributed Middle"],
    description: "Formal fallacies I. Learn classic invalid argument forms such as affirming the consequent, denying the antecedent, and undistributed middle.",
    color: "#10b981",
    fallacyFrequency: "uncommon"
  },
  {
    level: 6,
    persona: PersonaStage.SEAL,
    conceptsEn: ["Quantifiers", "Logical Scope", "Valid vs Invalid Schemas"],
    conceptsFr: ["Quantificateurs", "Portée logique", "Schémas valides vs invalides"],
    concepts: ["Quantifiers", "Logical Scope", "Valid vs Invalid Schemas"],
    description: "Formal fallacies II. Work with quantifiers, scope errors, and contrast invalid patterns with strange but valid arguments.",
    color: "#f59e0b",
    fallacyFrequency: "uncommon"
  },
  {
    level: 7,
    persona: PersonaStage.DOLPHIN,
    conceptsEn: ["Base Rate", "Gambler's Fallacy", "Prosecutor's Fallacy", "Survivorship Bias"],
    conceptsFr: ["Fréquence de base", "Sophisme du joueur", "Sophisme du procureur", "Biais de survivance"],
    concepts: ["Base Rate", "Gambler's Fallacy", "Prosecutor's Fallacy", "Survivorship Bias"],
    description: "Probability and evidence. Understand base-rate neglect, gambler’s fallacy, prosecutor’s fallacy, cherry-picking, and survivorship bias.",
    color: "#3b82f6",
    fallacyFrequency: "rare"
  },
  {
    level: 8,
    persona: PersonaStage.SHARK,
    conceptsEn: ["Poisoning the Well", "Framing Effect", "Motte-and-Bailey", "Insinuation"],
    conceptsFr: ["Empoisonnement du puits", "Effet de cadrage", "Motte-et-bailey", "Insinuation"],
    concepts: ["Poisoning the Well", "Framing Effect", "Motte-and-Bailey", "Insinuation"],
    description: "Rhetorical manipulation and framing. Detect framing tricks, poisoning the well, and strategic retreat (motte‑et‑bailey).",
    color: "#ef4444",
    fallacyFrequency: "rare"
  },
  {
    level: 9,
    persona: PersonaStage.WHALE,
    conceptsEn: ["Mixed Arguments", "Multi-Fallacy", "Primary vs Secondary"],
    conceptsFr: ["Arguments mixtes", "Multi-sophismes", "Dominant vs secondaire"],
    concepts: ["Mixed Arguments", "Multi-Fallacy", "Primary vs Secondary"],
    description: "Mixed and multi-step fallacies. Analyze complex, real-world arguments that combine several fallacies at once.",
    color: "#059669",
    fallacyFrequency: "rare"
  },
  {
    level: 10,
    persona: PersonaStage.GOD_WHALE,
    conceptsEn: ["Misuse of Fallacy Labels", "Fallacy Fallacy", "Sound but Unpopular Reasoning"],
    conceptsFr: ["Mauvais usage des étiquettes de sophisme", "Fallacy fallacy", "Raisonnements solides mais impopulaires"],
    concepts: ["Misuse of Fallacy Labels", "Fallacy Fallacy", "Sound but Unpopular Reasoning"],
    description: "Meta-logic and expert reasoning. Learn to spot misuse of fallacy labels, avoid the fallacy fallacy, and distinguish bad reasoning from mere disagreement.",
    color: "#1f2937",
    fallacyFrequency: "rare"
  }
];

// Glossary item type for app use
export interface GlossaryItem {
  term: string;
  definition: string;
  levelRange: string;
  detailedDescription: string;
  example: string;
  /** Short, simple implementation example (beginner). */
  exampleBeginner?: string;
  /** Medium-detail implementation example (intermediate). */
  exampleIntermediate?: string;
  /** Verbose, detailed implementation example (expert). */
  exampleExpert?: string;
}

// Glossary data for the app (Logical fallacies terms)
import { GLOSSARY as CLI_GLOSSARY } from './data/cliGlossary';
export const GLOSSARY: GlossaryItem[] = CLI_GLOSSARY;

