/**
 * Flags EN questions where the quoted scenario may leak the correct fallacy name
 * (significant words from the correct option appear in the question body).
 */
import { FALLACY_QUESTIONS_EN } from '../src/data/questions/fallaciesData';

const STOP = new Set([
  'fallacy', 'the', 'a', 'an', 'to', 'of', 'and', 'or', 'for', 'in', 'on', 'at',
  'effect', 'bias', 'appeal', 'argument', 'from', 'with', 'by', 'as', 'is', 'are',
  'that', 'this', 'it', 'be', 'not', 'no', 'false', 'true', 'into', 'over', 'out',
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

const leaks: { id: number; correct: string; hits: string[] }[] = [];

for (const q of FALLACY_QUESTIONS_EN) {
  const body = q.question.replace(/^[\s\S]*?\n\n/, '').toLowerCase();
  const correct = q.options[q.correct_option_index];
  const hits: string[] = [];
  for (const w of significantWords(correct)) {
    if (body.includes(w)) hits.push(w);
  }
  // Extra: "regression" when phrase "regression to the mean" teaches the concept
  if (/regression/.test(body) && /regression/i.test(correct)) hits.push('regression(phrase)');
  if (hits.length) leaks.push({ id: q.id, correct, hits: [...new Set(hits)] });
}

leaks.sort((a, b) => a.id - b.id);
console.log(`Found ${leaks.length} potential leaks:\n`);
for (const L of leaks) {
  console.log(`id ${L.id}: "${L.correct}" << ${L.hits.join(', ')}`);
}
