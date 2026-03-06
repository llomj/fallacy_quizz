#!/usr/bin/env npx tsx
/**
 * Report duplicate question texts in the fallacy question bank.
 * Run: npx tsx scripts/report-duplicate-questions.ts
 *
 * Outputs question IDs that share the same question text for manual rewriting.
 */
import { QUESTIONS_BANK_EN } from '../src/questionsBank';

interface DupeGroup {
  questionText: string;
  ids: number[];
}

const questions = QUESTIONS_BANK_EN;
const textToIds = new Map<string, number[]>();

for (const q of questions) {
  const text = (q.question || '').trim();
  if (!text) continue;
  const ids = textToIds.get(text) ?? [];
  ids.push(q.id);
  textToIds.set(text, ids);
}

const dupeGroups: DupeGroup[] = [];
for (const [text, ids] of textToIds) {
  if (ids.length > 1) {
    dupeGroups.push({ questionText: text.slice(0, 80) + (text.length > 80 ? '...' : ''), ids: ids.sort((a, b) => a - b) });
  }
}

dupeGroups.sort((a, b) => b.ids.length - a.ids.length);

const totalDupes = dupeGroups.reduce((sum, g) => sum + g.ids.length - 1, 0);
const uniqueCount = questions.length - totalDupes;

console.log(`\n=== Logical Fallacies Question Bank — Duplicate Report ===\n`);
console.log(`Total questions: ${questions.length}`);
console.log(`Unique question texts: ${uniqueCount}`);
console.log(`Duplicate question texts: ${dupeGroups.length}`);
console.log(`Questions needing rewrite: ${totalDupes}\n`);

if (dupeGroups.length > 0) {
  console.log(`Duplicate groups (IDs to rewrite):\n`);
  for (let i = 0; i < dupeGroups.length; i++) {
    const g = dupeGroups[i];
    console.log(`[${i + 1}] IDs: ${g.ids.join(', ')}  (keep 1, rewrite ${g.ids.length - 1})`);
    console.log(`    Text: "${g.questionText}"`);
    console.log();
  }
  console.log(`\nRecommendation: For each group, keep the lowest ID; rewrite the question text for the others.\n`);
}
