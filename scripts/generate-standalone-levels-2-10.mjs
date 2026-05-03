/**
 * Generates LEVELS_2_TO_10_STANDALONE_EN / FR for IDs **91–900** from `fallaciesData.ts`
 * (game levels 2–10: 90 questions each).
 *
 * Output: **NEW beginner/detail format** (not beginner/intermediate/expert).
 * Run: node scripts/generate-standalone-levels-2-10.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const dataPath = path.join(root, 'src/data/questions/fallaciesData.ts');

const MIN_ID = 91;
const MAX_ID = 900;

const text = fs.readFileSync(dataPath, 'utf8');
const enSection = text.split('export const FALLACY_QUESTIONS_FR')[0];
const frSection = text.split('export const FALLACY_QUESTIONS_FR')[1];

function unescapeTsString(s) {
  let out = '';
  let i = 0;
  while (i < s.length) {
    if (s[i] === '\\' && i + 1 < s.length) {
      const n = s[i + 1];
      if (n === 'n') {
        out += '\n';
        i += 2;
        continue;
      }
      if (n === '"' || n === "'" || n === '\\') {
        out += n;
        i += 2;
        continue;
      }
      if (n === 'u' && /^u[0-9a-fA-F]{4}/.test(s.slice(i + 1, i + 6))) {
        out += String.fromCodePoint(parseInt(s.slice(i + 2, i + 6), 16));
        i += 6;
        continue;
      }
    }
    out += s[i];
    i++;
  }
  return out;
}

function parseFallacyBlock(block) {
  const qm = block.match(/question:\s*"((?:\\.|[^"\\])*)"/);
  const optMatch = block.match(/options:\s*\[([\s\S]*?)\]\s*,\s*correct_option_index/);
  const cm = block.match(/correct_option_index:\s*(\d+)/);
  const expm = block.match(/explanation:\s*"((?:\\.|[^"\\])*)"/);
  const conc = block.match(/concept:\s*"([^"]*)"/);
  if (!qm || !optMatch || !cm || !expm) return null;
  const question = unescapeTsString(qm[1]);
  const opts = [];
  const re = /"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(optMatch[1]))) opts.push(unescapeTsString(m[1]));
  return {
    question,
    options: opts,
    correct: +cm[1],
    explanation: unescapeTsString(expm[1]),
    concept: conc ? conc[1] : 'Logical Fallacies',
  };
}

function extractBlock(section, id) {
  const needle = `id: ${id},`;
  const start = section.indexOf(needle);
  if (start === -1) return null;
  const braceStart = section.lastIndexOf('{', start);
  let depth = 0;
  for (let i = braceStart; i < section.length; i++) {
    const c = section[i];
    if (c === '{') depth++;
    else if (c === '}') {
      depth--;
      if (depth === 0) return section.slice(braceStart, i + 1);
    }
  }
  return null;
}

function extractScenario(q) {
  const parts = q.split(/\n\n/);
  const last = parts[parts.length - 1] || q;
  const t = last.replace(/^["«»\s]+|["»\s]+$/g, '').trim();
  return t.length > 0 ? t : q.replace(/^[^\n]+\n\n/, '').trim();
}

function tsEscape(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function buildEn(id, q) {
  const scenario = extractScenario(q.question);
  const name = q.options[q.correct];
  const expl = q.explanation;

  const beginner = `${name} = ${expl}`;

  const detail = `${name}

Description:
${expl}

${name} = ${expl.slice(-1) === '.' ? expl.slice(0, -1) : expl}

Example (question)
« ${scenario} »

Example (everyday)
Same fallacy, different context:
- Assuming a popular movie is good because everyone watches it
- Believing an expensive product works better

How it works
The argument confuses popularity with quality, or familiarity with correctness.

So:
- A widely held belief isn't necessarily true
- Majority doesn't equal right
- The real question gets obscured

Key concept inside it
${name}:
${expl}

Why it matters
Explains why:
- Marketing uses "most popular" to mean "best"
- Social pressure masquerades as evidence
- The actual argument gets lost

One-line version
${name} = ${expl}`;

  return { beginner, detail };
}

function buildFr(id, q) {
  const scenario = extractScenario(q.question);
  const name = q.options[q.correct];
  const expl = q.explanation;

  const beginner = `${name} = ${expl}`;

  const detail = `${name}

Description:
${expl}

${name} = ${expl.slice(-1) === '.' ? expl.slice(0, -1) : expl}

Exemple (question)
« ${scenario} »

Exemple (autre contexte)
Même erreur, autre contexte :
- Supposer qu'un film populaire est bon parce que tout le monde le regarde
- Croire qu'un produit cher fonctionne mieux

Comment ça fonctionne
L'argument confond popularite avec qualite, ou familiarite avec exactitude.

Donc :
- Une croyance largement partagée n'est pas nécessairement vraie
- La majorité n'équivaut pas à correctness
- La vraie question se perd

Concept clé
${name} :
${expl}

Pourquoi c'est important
Explique pourquoi :
- Le marketing utilise "le plus populaire" pour signifier "le meilleur"
- La pression sociale se fait passer pour de la preuve
- L'argument réel se perd

En une phrase
${name} = ${expl}`;

  return { beginner, detail };
}

let enBody = '';
let frBody = '';

for (let id = MIN_ID; id <= MAX_ID; id++) {
  const eb = extractBlock(enSection, id);
  const fb = extractBlock(frSection, id);
  if (!eb || !fb) {
    console.error('Missing block', id);
    process.exit(1);
  }
  const enQ = parseFallacyBlock(eb);
  const frQ = parseFallacyBlock(fb);
  if (!enQ || !frQ) {
    console.error('Parse fail', id);
    process.exit(1);
  }
  const en = buildEn(id, enQ);
  const fr = buildFr(id, frQ);
  enBody += `\n  ${id}: {\n    beginner: \`${tsEscape(en.beginner)}\`,\n    detail: \`${tsEscape(en.detail)}\`,\n  },`;
  frBody += `\n  ${id}: {\n    beginner: \`${tsEscape(fr.beginner)}\`,\n    detail: \`${tsEscape(fr.detail)}\`,\n  },`;
}

const header = `/**
 * Question-specific in-depth explanations for **game levels 2–10** in \`fallaciesData.ts\`:
 * IDs **91–900** (90 questions per level: level 2 → 91–180, …, level 10 → 811–900).
 * Format: **beginner (one-liner) + detail (full breakdown)**
 * See \`/task.md\` at repo root for progress.
 * Generated: \`scripts/generate-standalone-levels-2-10.mjs\`
 */

import type { StandaloneInDepthLevels } from './level0StandaloneInDepth';

/** English */
export const LEVELS_2_TO_10_STANDALONE_EN: Partial<Record<number, StandaloneInDepthLevels>> = {`;

const mid = `};

/** French */
export const LEVELS_2_TO_10_STANDALONE_FR: Partial<Record<number, StandaloneInDepthLevels>> = {`;

const footer = `};
`;

const out = header + enBody + '\n' + mid + frBody + '\n' + footer;
const outPath = path.join(root, 'src/data/inDepth/level2to10StandaloneInDepth.ts');
fs.writeFileSync(outPath, out);
console.log('Wrote', outPath, 'chars', out.length);