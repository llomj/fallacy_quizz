/**
 * Maps question-bank fallacy names to glossary terms for display consistency.
 * Option C: Soft mapping - question bank unchanged; use for glossary lookups and links.
 */
import { GLOSSARY } from './cliGlossary';

const GLOSSARY_TERMS = new Set(GLOSSARY.map((g) => g.term));

/** Maps question-bank fallacy names to canonical glossary terms. Variants/synonyms. */
const FALLACY_MAPPING: Record<string, string> = {
  // Ad hominem variants
  'Ad Hominem Abusive': 'Ad Hominem',
  'Ad Hominem Circumstantial': 'Ad Hominem',
  'Ad Hominem Tu Quoque': 'Ad Hominem',
  'Circumstantial Ad Hominem': 'Ad Hominem',
  'Tu Quoque': 'Ad Hominem',

  // Appeal variants
  'Ad Populum': 'Appeal to Popularity',
  'Argument from Authority': 'Appeal to Authority',
  'Authority Fallacy': 'Appeal to Authority',
  'Appeal to Antiquity': 'Appeal to Tradition',
  'Appeal to Common Practice': 'Appeal to Tradition',
  'Argument from Ignorance': 'Appeal to Ignorance',
  'Argument from Incredulity': 'Appeal to Incredulity',
  'Argument from Personal Incredulity': 'Appeal to Incredulity',

  // Base rate
  'Base Rate Fallacy': 'Base Rate Fallacy',
  'Base Rate Neglect': 'Base Rate Neglect',

  // Correlation / causation
  'Correlation Implies Causation': 'Correlation Equals Causation',
  'Cum Hoc': 'Correlation Equals Causation',
  'Post Hoc': 'Correlation Equals Causation',
  'False Cause': 'Correlation Equals Causation',
  'Questionable Cause': 'Correlation Equals Causation',

  // Dichotomy / dilemma
  'False Dilemma': 'False Dichotomy',
  'Bifurcation': 'False Dichotomy',
  'Black or White Fallacy': 'False Dichotomy',
  'Black and White Thinking': 'False Dichotomy',

  // Formal
  'Affirming the Consequent': 'Undistributed Middle',
  'Denying the Antecedent': 'Undistributed Middle',
  'Four Terms Fallacy': 'Undistributed Middle',
  'Illicit Major': 'Undistributed Middle',
  'Illicit Minor': 'Undistributed Middle',
  'Existential Fallacy': 'Undistributed Middle',

  // Generalization
  'Biased Generalization': 'Faulty Generalization',
  'Overgeneralization': 'Faulty Generalization',
  'Unrepresentative Sample': 'Biased Sample',

  // Gambler
  'Gambler': "Gambler's Fallacy",
  'The Gambler': "Gambler's Fallacy",

  // Other variants
  'Historian': "Historian's Fallacy",
  'Historian\'s Fallacy': "Historian's Fallacy",
  'Hot-Hand Fallacy': 'Hot Hand Fallacy',
  'The Halo Effect': 'Halo Effect',
  'The Placebo Effect': 'False Memories',
  'Placebo Effect': 'False Memories',
  'The Regression Fallacy': 'Regression Fallacy',
  'The Sunk Cost Fallacy': 'Sunk Cost Fallacy',
  'The Fallacy Fallacy': 'Fallacy Fallacy',
  'Survivor Bias': 'Survivorship Bias',
  'Argument to the Stone': 'Begging the Question',
  'Appeal to Moderation': 'Middle Ground Fallacy',
  'Faulty Analogy': 'Weak Analogy',
  'Complex Question': 'Loaded Question',
  'Occam': "Occam's Razor Fallacy",
  "Occam's Razor": "Occam's Razor Fallacy",
  'Sayre': "Sayre's Law",
  'Sturgeon': "Sturgeon's Law",
  'Hanlon': "Hanlon's Razor",
  'Hitchens': "Hitchens's Razor",
  'Brandolini': "Brandolini's Law",
  'Personal Incredulity': 'Appeal to Incredulity',
  'Wrong Direction Causality': 'Wrong Direction',
  'Zero Sum Bias': 'Zero-Risk Bias',
};

/**
 * Returns the glossary term for a question-bank fallacy name, or null if not mappable.
 * Use for "See in glossary" links and display consistency.
 */
export function getGlossaryTermForFallacy(fallacyName: string): string | null {
  const trimmed = fallacyName?.trim();
  if (!trimmed) return null;
  if (GLOSSARY_TERMS.has(trimmed)) return trimmed;
  return FALLACY_MAPPING[trimmed] ?? null;
}

/** Check if a fallacy name has a glossary entry (exact or mapped). */
export function hasGlossaryEntry(fallacyName: string): boolean {
  return getGlossaryTermForFallacy(fallacyName) !== null;
}
