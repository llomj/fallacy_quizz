import type { Question } from '../types';

const ACTIVE_QUIZ_SESSION_KEY = 'logical_fallacies_active_quiz_v1';

export type StoredQuizSession = {
  version: 1;
  level: number;
  randomMode: boolean;
  questions: Question[];
  currentIndex: number;
  selectedOption: number | null;
  isAnswered: boolean;
  score: number;
  sessionCorrect: number;
  showDetailedExplanation: boolean;
  detailedExplanationLevel: 'beginner' | 'intermediate' | 'expert' | 'detail';
  savedAt: number;
};

const isStoredQuestion = (value: unknown): value is Question => {
  if (!value || typeof value !== 'object') return false;
  const question = value as Partial<Question>;
  return (
    typeof question.id === 'number' &&
    typeof question.level === 'number' &&
    typeof question.question === 'string' &&
    Array.isArray(question.options) &&
    question.options.length > 0 &&
    question.options.every((option) => typeof option === 'string') &&
    Number.isInteger(question.correct_option_index) &&
    Number(question.correct_option_index) >= 0 &&
    Number(question.correct_option_index) < question.options.length
  );
};

export const readActiveQuizSession = (): StoredQuizSession | null => {
  if (typeof window === 'undefined') return null;

  try {
    const raw = localStorage.getItem(ACTIVE_QUIZ_SESSION_KEY);
    if (!raw) return null;
    const session = JSON.parse(raw) as Partial<StoredQuizSession>;
    const depths = new Set(['beginner', 'intermediate', 'expert', 'detail']);
    if (
      session.version !== 1 ||
      typeof session.level !== 'number' ||
      typeof session.randomMode !== 'boolean' ||
      !Array.isArray(session.questions) ||
      session.questions.length === 0 ||
      !session.questions.every(isStoredQuestion) ||
      !Number.isInteger(session.currentIndex) ||
      Number(session.currentIndex) < 0 ||
      Number(session.currentIndex) >= session.questions.length ||
      !(session.selectedOption === null || Number.isInteger(session.selectedOption)) ||
      typeof session.isAnswered !== 'boolean' ||
      typeof session.score !== 'number' ||
      typeof session.sessionCorrect !== 'number' ||
      typeof session.showDetailedExplanation !== 'boolean' ||
      !depths.has(String(session.detailedExplanationLevel))
    ) {
      return null;
    }
    return session as StoredQuizSession;
  } catch {
    return null;
  }
};

export const isQuizSessionCompatible = (
  session: StoredQuizSession | null,
  level: number,
  randomMode: boolean
): session is StoredQuizSession =>
  !!session && session.level === level && session.randomMode === randomMode;

export const writeActiveQuizSession = (session: StoredQuizSession): void => {
  localStorage.setItem(ACTIVE_QUIZ_SESSION_KEY, JSON.stringify(session));
};

export const clearActiveQuizSession = (): void => {
  localStorage.removeItem(ACTIVE_QUIZ_SESSION_KEY);
};
