import { containsEnglishProse } from '../src/utils/frenchText';
import {
  getQuestionBank,
  getQuestionById,
  isBilingualQuizQuestion,
} from '../src/questionsBank';

const englishQuestions = getQuestionBank('en').filter(isBilingualQuizQuestion);
const errors: string[] = [];

for (const englishQuestion of englishQuestions) {
  const frenchQuestion = getQuestionById(englishQuestion.id, 'fr');

  if (!frenchQuestion) {
    errors.push(`Missing French question for ID ${englishQuestion.id}`);
    continue;
  }

  if (frenchQuestion.level !== englishQuestion.level) {
    errors.push(`Level mismatch for ID ${englishQuestion.id}`);
  }

  if (frenchQuestion.options.length !== englishQuestion.options.length) {
    errors.push(`Option-count mismatch for ID ${englishQuestion.id}`);
  }

  if (frenchQuestion.correct_option_index !== englishQuestion.correct_option_index) {
    errors.push(`Correct-answer position mismatch for ID ${englishQuestion.id}`);
  }

  if (containsEnglishProse(frenchQuestion.question)) {
    errors.push(`English prose in French question ID ${englishQuestion.id}`);
  }

  if (containsEnglishProse(frenchQuestion.explanation)) {
    errors.push(`English prose in French explanation ID ${englishQuestion.id}`);
  }

  if (frenchQuestion.options.some(containsEnglishProse)) {
    errors.push(`English prose in French options for ID ${englishQuestion.id}`);
  }
}

for (let level = 0; level <= 10; level++) {
  const levelCount = englishQuestions.filter((question) => question.level === level).length;
  if (levelCount < 100) {
    errors.push(`Level ${level} has only ${levelCount} bilingual quiz questions`);
  }
}

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Bilingual quiz audit passed for ${englishQuestions.length} questions.`);
