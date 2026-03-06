#!/usr/bin/env tsx
/**
 * Applies difficulty ramp to fallaciesData.ts:
 * - IDs 1-33 per level: Beginner, difficulty 1
 * - IDs 34-66 per level: Intermediate, difficulty 2
 * - IDs 67-100 per level: Expert, difficulty 3
 */
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(
  __dirname,
  '..',
  'src',
  'data',
  'questions',
  'fallaciesData.ts'
);

let content = fs.readFileSync(filePath, 'utf-8');

// Replace each question's difficulty and subLevel based on id
content = content.replace(
  /id: (\d+),[\s\S]*?difficulty: (\d+),[\s\S]*?subLevel: SubLevel\.(BEGINNER|INTERMEDIATE|EXPERT),/g,
  (match) => {
    const idMatch = match.match(/id: (\d+)/);
    if (!idMatch) return match;
    const id = parseInt(idMatch[1], 10);
    const posInLevel = ((id - 1) % 100) + 1; // 1-100 within level
    let sub: 'BEGINNER' | 'INTERMEDIATE' | 'EXPERT';
    let diff: number;
    if (posInLevel <= 33) {
      sub = 'BEGINNER';
      diff = 1;
    } else if (posInLevel <= 66) {
      sub = 'INTERMEDIATE';
      diff = 2;
    } else {
      sub = 'EXPERT';
      diff = 3;
    }
    return match
      .replace(/difficulty: \d+/, `difficulty: ${diff}`)
      .replace(/subLevel: SubLevel\.(?:BEGINNER|INTERMEDIATE|EXPERT)/, `subLevel: SubLevel.${sub}`);
  }
);

fs.writeFileSync(filePath, content);
console.log('Applied difficulty ramp to fallaciesData.ts');
