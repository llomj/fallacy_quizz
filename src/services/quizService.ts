import { Question, PersonaStage } from "../types";
import { getQuestionBank } from "../questionsBank";

export class QuizService {
  async getBatch(
    level: number,
    count: number = 15,
    completedIds: number[] = [],
    randomMode: boolean = false,
    language: string = 'en',
    exhaustedIds: number[] = []
  ): Promise<Question[]> {
    const questionBank = getQuestionBank(language);

    const exhaustedSet = new Set(exhaustedIds);

    const levelQuestions = (randomMode
      ? questionBank
      : questionBank.filter(q => q.level === level)
    ).filter(q => !exhaustedSet.has(q.id));

    const allEligibleQuestions = randomMode
      ? questionBank
      : questionBank.filter(q => q.level === level);

    if (allEligibleQuestions.length === 0) {
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

    const completedIdsSet = new Set(completedIds);
    let available = levelQuestions.filter(q => !completedIdsSet.has(q.id));
    let completed = levelQuestions.filter(q => completedIdsSet.has(q.id));
    const exhaustedFallback = allEligibleQuestions.filter(q => exhaustedSet.has(q.id));

    available = shuffleArray(available);
    completed = shuffleArray(completed);
    const fallback = shuffleArray(exhaustedFallback);

    let selected = available.slice(0, count);

    if (selected.length < count && completed.length > 0) {
      const needed = count - selected.length;
      selected = [...selected, ...completed.slice(0, needed)];
    }

    if (selected.length < count && fallback.length > 0) {
      const needed = count - selected.length;
      const selectedIds = new Set(selected.map(q => q.id));
      selected = [
        ...selected,
        ...fallback.filter(q => !selectedIds.has(q.id)).slice(0, needed)
      ];
    }

    return shuffleArray(selected);
  }
}

export const quizService = new QuizService();
