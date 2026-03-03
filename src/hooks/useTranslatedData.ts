import { useLanguage } from '../contexts/LanguageContext';
import { GLOSSARY, type GlossaryItem } from '../constants';
import { GLOSSARY_FR } from '../data/glossaryTranslations';
import { OPERATIONS_DATA_FR, MATH_CONCEPTS_DATA_FR, OperationItem } from '../data/operationsTranslations';
import { normalizeFrenchProse } from '../utils/frenchText';

export type { OperationItem };

export const useTranslatedGlossary = (): GlossaryItem[] => {
  const { language } = useLanguage();
  // When French: use GLOSSARY_FR with light normalization (fix remaining English words)
  if (language === 'fr') {
    return GLOSSARY_FR.map((item) => ({
      ...item,
      definition: normalizeFrenchProse(item.definition),
      detailedDescription: normalizeFrenchProse(item.detailedDescription),
    }));
  }
  return GLOSSARY;
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
