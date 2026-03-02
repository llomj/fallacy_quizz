import { useLanguage } from '../contexts/LanguageContext';
import { GLOSSARY, GlossaryItem } from '../constants';
import { GLOSSARY_FR } from '../data/glossaryTranslations';
import { OPERATIONS_DATA_FR, MATH_CONCEPTS_DATA_FR, OperationItem } from '../data/operationsTranslations';
import { containsEnglishProse, normalizeFrenchProse } from '../utils/frenchText';

export type { OperationItem };

const ENGLISH_GLOSSARY_PATTERN = /\b(a|an|the|is|are|was|were|with|from|into|for|to|of|representing|combining|converting|operators?|clause|formatted|statement|function|built-in|operate)\b/i;
const hasEnglishGlossaryText = (text: string): boolean => ENGLISH_GLOSSARY_PATTERN.test(text);

const toFrenchGlossaryFallback = (item: GlossaryItem, normalizedDefinition: string): string =>
  `1. Explication simple : ${normalizedDefinition}\n2. Explication intermédiaire : ${normalizedDefinition}\n3. Explication approfondie : Concept du niveau ${item.levelRange}, version française renforcée pour une lecture claire.`;

const normalizeFrenchGlossaryItem = (item: GlossaryItem): GlossaryItem => {
  const normalizedDefinition = normalizeFrenchProse(item.definition);
  const definition = containsEnglishProse(normalizedDefinition) || hasEnglishGlossaryText(normalizedDefinition)
    ? `Concept Python du niveau ${item.levelRange}.`
    : normalizedDefinition;
  const detailedDescription = normalizeFrenchProse(item.detailedDescription);

  return {
    ...item,
    definition,
    detailedDescription: containsEnglishProse(detailedDescription) || hasEnglishGlossaryText(detailedDescription)
      ? toFrenchGlossaryFallback(item, definition)
      : detailedDescription,
  };
};

export const useTranslatedGlossary = (): GlossaryItem[] => {
  const { language } = useLanguage();
  return language === 'fr' ? GLOSSARY_FR.map(normalizeFrenchGlossaryItem) : GLOSSARY;
};

// Helper to get translated operations data
export const useTranslatedOperations = (operationsData: OperationItem[], mathData: OperationItem[]) => {
  const { language } = useLanguage();
  if (language === 'fr') {
    return {
      operations: OPERATIONS_DATA_FR,
      math: MATH_CONCEPTS_DATA_FR
    };
  }
  return {
    operations: operationsData,
    math: mathData
  };
};
