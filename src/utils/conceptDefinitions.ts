/**
 * Definitions for level concepts shown in the hub (e.g. Argument, Premise, Conclusion).
 * Level 0 foundation terms are defined here (not in cliGlossary); other levels use glossary lookup.
 * Definitions aligned with glossary.md.
 */

import type { GlossaryItem } from '../constants';

/** Level 0 foundation concepts: EN and FR definitions from glossary.md */
export const FOUNDATION_CONCEPT_DEFINITIONS: Record<string, { en: string; fr: string }> = {
  Argument: {
    en: 'A set of statements where some (premises) are offered as reasons to accept another (the conclusion).',
    fr: "Un ensemble d'énoncés où certains (les prémisses) sont présentés comme des raisons d'accepter un autre (la conclusion).",
  },
  Premise: {
    en: 'A statement that provides support for a conclusion in an argument.',
    fr: "Un énoncé qui apporte un soutien à la conclusion dans un argument.",
  },
  Conclusion: {
    en: 'The statement that the argument is trying to show or justify, based on the premises.',
    fr: "L'énoncé que l'argument cherche à établir ou à justifier à partir des prémisses.",
  },
  Valid: {
    en: 'An argument where, if the premises were true, the conclusion must be true; there is no way for the premises to be true and the conclusion false.',
    fr: "Un argument où, si les prémisses étaient vraies, la conclusion doit être vraie; il n'existe aucun cas où les prémisses sont vraies et la conclusion fausse.",
  },
  Sound: {
    en: 'A valid argument with all premises actually true.',
    fr: "Un argument valide dont toutes les prémisses sont effectivement vraies.",
  },
  Fallacy: {
    en: 'A pattern of reasoning that looks persuasive but is logically defective.',
    fr: "Un schéma de raisonnement qui paraît convaincant mais est logiquement défectueux.",
  },
};

/** Map display concept label to glossary term when they differ (e.g. level label vs glossary entry). */
const CONCEPT_TO_GLOSSARY_TERM: Record<string, string> = {
  // English aliases
  'False Dilemma': 'False Dichotomy',
  'Hasty Generalization': 'Faulty Generalization',
  'Reversed Causality': 'Correlation Equals Causation',
  'Base Rate': 'Base Rate Fallacy',
  'Oversimplified Cause': 'Causal Oversimplification',
  
  // French to English mappings (Level 1)
  'Appel à l\'autorité': 'Appeal to Authority',
  'Appel à la tradition': 'Appeal to Tradition',
  'Appel à la popularité': 'Appeal to Popularity',
  'Faux dilemme': 'False Dichotomy',
  
  // Level 2
  'Fausse piste': 'Red Herring',
  'Pente glissante': 'Slippery Slope',
  'Généralisation hâtive': 'Faulty Generalization',
  'Analogie faible': 'Weak Analogy',
  'Appel à l\'émotion': 'Appeal to Emotion',
  
  // Level 3
  'Cause inversée': 'Correlation Equals Causation',
  'Cause simplifiée': 'Causal Oversimplification',
  'Facteurs confondants': 'Confounding Factors',
  
  // Level 4
  'Équivoque': 'Equivocation',
  'Amphibologie': 'Amphiboly',
  'Question piège': 'Loaded Question',
  'Vaguité': 'Vagueness',
  'Déplacer les poteaux': 'Moving the Goalposts',
  
  // Level 5
  'Affirmation du conséquent': 'Affirming the Consequent',
  'Négation de l\'antécédent': 'Denying the Antecedent',
  'Terme moyen non distribué': 'Undistributed Middle',
  
  // Level 6
  'Quantificateurs': 'Quantifiers',
  'Portée logique': 'Logical Scope',
  'Schémas valides vs invalides': 'Valid vs Invalid Schemas',
  
  // Level 7
  'Fréquence de base': 'Base Rate Fallacy',
  'Sophisme du joueur': 'Gambler\'s Fallacy',
  'Sophisme du procureur': 'Prosecutor\'s Fallacy',
  'Biais de survivance': 'Survivorship Bias',
  
  // Level 8
  'Empoisonnement du puits': 'Poisoning the Well',
  'Effet de cadrage': 'Framing Effect',
  'Motte-et-bailey': 'Motte-and-Bailey',
  
  // Level 9
  'Arguments mixtes': 'Mixed Arguments',
  'Multi-sophismes': 'Multi-Fallacy',
  'Dominant vs secondaire': 'Primary vs Secondary',
  
  // Level 10
  'Mauvais usage des étiquettes de sophisme': 'Misuse of Fallacy Labels',
  'Raisonnements solides mais impopulaires': 'Sound but Unpopular Reasoning',
};

/** French concept labels (from LEVELS conceptsFr) mapped to same foundation key for definition lookup. */
const FR_LABEL_TO_FOUNDATION_KEY: Record<string, string> = {
  Prémisse: 'Premise',
  Valide: 'Valid',
  Solide: 'Sound',
  Sophisme: 'Fallacy',
};

/**
 * Returns the short definition for a concept label (e.g. "Argument", "Premise", "Ad Hominem").
 * Uses foundation definitions for Level 0 terms; otherwise looks up in the provided glossary.
 * @param conceptLabel - The label as shown in the UI (from LEVELS conceptsEn/conceptsFr).
 * @param language - 'en' or 'fr'.
 * @param glossary - Translated glossary (from useTranslatedGlossary()).
 */
export function getConceptDefinition(
  conceptLabel: string,
  language: 'en' | 'fr',
  glossary: GlossaryItem[]
): string | null {
  const key = conceptLabel.trim();
  const foundationKey = FR_LABEL_TO_FOUNDATION_KEY[key] ?? key;
  const foundation = FOUNDATION_CONCEPT_DEFINITIONS[foundationKey];
  if (foundation) {
    return language === 'fr' ? foundation.fr : foundation.en;
  }
  const glossaryTerm = CONCEPT_TO_GLOSSARY_TERM[key] ?? key;
  const item = glossary.find(
    (g) => g.term.toLowerCase() === glossaryTerm.toLowerCase()
  );
  return item?.definition ?? null;
}
