/**
 * Answer-in-stem audit for EN questions. Run: npm run audit-answer-leaks
 * See ps.md § "Question stems must not leak the correct answer".
 */
import { QUESTIONS_BANK_EN } from '../src/questionsBank';

const STOP = new Set([
  'fallacy', 'the', 'a', 'an', 'to', 'of', 'and', 'or', 'for', 'in', 'on', 'at',
  'effect', 'bias', 'appeal', 'argument', 'from', 'with', 'by', 'as', 'is', 'are',
  'that', 'this', 'it', 'be', 'not', 'no', 'false', 'true', 'into', 'over', 'out',
  'than', 'then', 'when', 'what', 'your', 'you', 'all', 'any', 'can', 'has', 'how',
]);

function tokens(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 0);
}

function significantWords(option: string): string[] {
  return tokens(option).filter((w) => w.length >= 5 && !STOP.has(w));
}

function bodyAfterPrompt(question: string): string {
  const i = question.indexOf('\n\n');
  return (i >= 0 ? question.slice(i + 2) : question).toLowerCase();
}

const leaks: { id: number; correct: string; hits: string[] }[] = [];
const dupOptionIds: number[] = [];

for (const q of QUESTIONS_BANK_EN) {
  const body = bodyAfterPrompt(q.question);
  const correct = q.options[q.correct_option_index];
  const hits: string[] = [];
  for (const w of significantWords(correct)) {
    if (body.includes(w)) hits.push(w);
  }
  if (/regression/.test(body) && /regression/i.test(correct)) hits.push('regression(phrase)');
  if (hits.length) leaks.push({ id: q.id, correct, hits: [...new Set(hits)] });

  const set = new Set(q.options);
  if (set.size !== q.options.length) dupOptionIds.push(q.id);
}

leaks.sort((a, b) => a.id - b.id);
dupOptionIds.sort((a, b) => a - b);

console.log(`Token overlaps (correct answer vs stem): ${leaks.length}`);
console.log(`Questions with duplicate options: ${dupOptionIds.length}`);
if (dupOptionIds.length) console.log('IDs:', dupOptionIds.join(', '));
console.log('');
for (const L of leaks) {
  console.log(`id ${L.id}: "${L.correct}" << ${L.hits.join(', ')}`);
}
