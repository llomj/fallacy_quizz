import { Question, PersonaStage } from "../types";
import { QUESTIONS_BANK_EN, QUESTIONS_BANK_FR } from "../questionsBank";

export class QuizService {
  /**
   * Fetches a batch of questions from the Logical Fallacies bank.
   * Logic: Filters by level, excludes already completed IDs,
   * and returns a randomized slice.
   */
  async getBatch(
    level: number,
    count: number = 15,
    completedIds: number[] = [],
    randomMode: boolean = false,
    language: string = 'en',
    /** Question IDs no longer eligible after enough correct answers at that question's level. */
    exhaustedIds: number[] = []
  ): Promise<Question[]> {
    const questionBank = language === 'fr' ? QUESTIONS_BANK_FR : QUESTIONS_BANK_EN;

    const exhaustedSet = new Set(exhaustedIds);

    // 1. Filter by requested level OR all levels if random mode; drop questions exhausted by repeat corrects
    const levelQuestions = (randomMode
      ? questionBank // Get questions from all levels in random mode
      : questionBank.filter(q => q.level === level)
    ).filter(q => !exhaustedSet.has(q.id));

    if (levelQuestions.length === 0) {
      return [];
    }

    const shuffleArray = <T>(array: T[]): T[] => {
      const arr = [...array];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    };

    // Exclude already completed questions to prioritize new ones
    const completedIdsSet = new Set(completedIds);
    let available = levelQuestions.filter(q => !completedIdsSet.has(q.id));
    let completed = levelQuestions.filter(q => completedIdsSet.has(q.id));

    available = shuffleArray(available);
    completed = shuffleArray(completed);

    let selected = available.slice(0, count);

    // If we need more to reach 'count', and we have completed questions, use them
    if (selected.length < count && completed.length > 0) {
      const needed = count - selected.length;
      selected = [...selected, ...completed.slice(0, needed)];
    }

    // Finally, shuffle the selected batch so new and review questions are mixed
    return shuffleArray(selected);
  }

}

export const quizService = new QuizService();
