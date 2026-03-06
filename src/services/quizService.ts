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
    language: string = 'en'
  ): Promise<Question[]> {
    const questionBank = language === 'fr' ? QUESTIONS_BANK_FR : QUESTIONS_BANK_EN;

    // 1. Filter by requested level OR all levels if random mode
    const levelQuestions = randomMode
      ? questionBank // Get questions from all levels in random mode
      : questionBank.filter(q => q.level === level);

    if (levelQuestions.length === 0) {
      return [];
    }

    // 2. Normal path: we have at least `count` questions for this mode/level
    if (levelQuestions.length >= count) {
      // Exclude already completed questions to prevent repeats across sessions
      const completedIdsSet = new Set(completedIds);
      const available = levelQuestions.filter(q => !completedIdsSet.has(q.id));

      let source = [...available];

      // If we don't have enough uncompleted questions to fill the count, supplemental with already completed ones
      if (source.length < count) {
        const alreadyCompleted = levelQuestions.filter(q => completedIdsSet.has(q.id));
        // Shuffle the completed ones and add them to the end of the available ones
        const shuffledCompleted = [...alreadyCompleted].sort(() => Math.random() - 0.5);
        source = [...source, ...shuffledCompleted];
      }

      // Robust shuffle (Fisher-Yates style for better randomness)
      // We shuffle the whole pool so that alreadyCompleted questions are mixed in
      for (let i = source.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [source[i], source[j]] = [source[j], source[i]];
      }

      // Ensure no duplicate IDs within the batch
      const selected: Question[] = [];
      const seenIds = new Set<number>();

      for (const question of source) {
        if (selected.length >= count) break;
        if (!seenIds.has(question.id)) {
          selected.push(question);
          seenIds.add(question.id);
        }
      }

      return selected;
    }

    // 3. Small-bank path: fewer than `count` questions exist for this level/mode in total.
    // In this case we *always* return exactly `count` questions, allowing repeats within the batch.
    const pool = [...levelQuestions];
    const result: Question[] = [];

    while (result.length < count && pool.length > 0) {
      const q = pool[Math.floor(Math.random() * pool.length)];
      result.push(q);
    }

    return result;
  }

}

export const quizService = new QuizService();