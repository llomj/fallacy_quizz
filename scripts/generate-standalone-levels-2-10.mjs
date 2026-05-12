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

const enEverydayThemes = [
  'a work meeting',
  'a classroom discussion',
  'a family conversation',
  'a shopping decision',
  'a local news thread',
  'a sports debate',
  'a planning meeting',
  'a group chat',
];

const enOtherThemes = [
  'an email thread',
  'a comment section',
  'a hiring decision',
  'a policy debate',
  'a team briefing',
  'a neighborhood discussion',
  'a product review',
  'a budget meeting',
];

const frEverydayThemes = [
  'une réunion de travail',
  'une discussion en classe',
  'une conversation familiale',
  'un achat',
  'un fil d’actualité local',
  'un débat sportif',
  'une réunion de planification',
  'une discussion de groupe',
];

const frOtherThemes = [
  'un échange de courriels',
  'une section de commentaires',
  'une décision d’embauche',
  'un débat de politique publique',
  'un briefing d’équipe',
  'une discussion de quartier',
  'un avis de produit',
  'une réunion de budget',
];

function pickTheme(list, id, offset = 0) {
  return list[(id + offset) % list.length];
}

const enSoLines = [
  'The conclusion sounds stronger than the evidence.',
  'The real issue gets replaced by a shortcut.',
  'A quick answer takes the place of careful checking.',
  'The listener is nudged toward agreement before the claim is tested.',
  'The missing step stays hidden.',
  'A weak move can feel persuasive if nobody stops to inspect it.',
];

const enWhyLines = [
  'It can make weak reasoning feel normal.',
  'It can hide the evidence the listener should be looking for.',
  'It can reward confidence, popularity, or emotion instead of proof.',
  'It can turn a useful discussion into a distraction.',
  'It can spread a bad idea simply because the shortcut is easy to repeat.',
  'It can make the real issue harder to see.',
];

const enImplicationLines = [
  'A claim can feel convincing for the wrong reason.',
  'Confidence is not the same thing as support.',
  'A good-sounding shortcut can still leave the argument empty.',
  'If the reasoning is off, the conclusion still needs checking.',
];

const frSoLines = [
  'La conclusion paraît plus solide que la preuve.',
  'Le vrai sujet est remplacé par un raccourci.',
  'Une réponse rapide prend la place d’un vrai contrôle.',
  'L’auditeur est poussé vers l’accord avant que l’argument soit testé.',
  'L’étape manquante reste cachée.',
  'Un mauvais raisonnement peut sembler convaincant si personne ne l’examine.',
];

const frWhyLines = [
  'Cela peut faire passer un raisonnement faible pour normal.',
  'Cela peut cacher la preuve que l’on devrait vraiment chercher.',
  'Cela peut récompenser la confiance, la popularité ou l’émotion au lieu de la preuve.',
  'Cela peut transformer une discussion utile en distraction.',
  'Cela peut propager une mauvaise idée simplement parce que le raccourci est facile à répéter.',
  'Cela peut rendre le vrai sujet plus difficile à voir.',
];

const frImplicationLines = [
  'Une idée peut paraître convaincante pour la mauvaise raison.',
  'La confiance n’est pas la même chose qu’une preuve.',
  'Un raccourci qui sonne bien peut quand même laisser l’argument vide.',
  'Si le raisonnement est faux, la conclusion doit encore être vérifiée.',
];

function pickLines(list, id, count = 3, offset = 0) {
  const out = [];
  for (let i = 0; i < count; i++) {
    out.push(list[(id + offset + i) % list.length]);
  }
  return out;
}

function cleanSentence(s) {
  return String(s).replace(/\s+/g, ' ').trim().replace(/[.]+$/, '');
}

function lowerFirst(s) {
  const text = cleanSentence(s);
  if (!text) return text;
  return text.charAt(0).toLowerCase() + text.slice(1);
}

function buildEn(id, q) {
  const scenario = extractScenario(q.question);
  const name = q.options[q.correct];
  const expl = q.explanation;
  const everydayTheme = pickTheme(enEverydayThemes, id);
  const otherTheme = pickTheme(enOtherThemes, id, 3);
  const soLines = pickLines(enSoLines, id);
  const whyLines = pickLines(enWhyLines, id, 3, 1);
  const implicationLine = pickLines(enImplicationLines, id, 1, 2)[0];
  const explClause = lowerFirst(expl);

  const beginner = `${name} = ${expl}`;

  const detail = `${name}

Description:
In this question, the quoted claim is "${scenario}".
That is ${explClause}.

Example (question)
« ${scenario} »

Example (everyday)
In ${everydayTheme}, someone makes the same mistake by ${explClause}.

Example (another context)
In ${otherTheme}, the same error shows up when a person is ${explClause} instead of checking the claim.

How it works
The argument uses a shortcut instead of real evidence.
It sounds settled because the speaker is ${explClause}.

So:
- ${soLines[0]}
- ${soLines[1]}
- ${soLines[2]}

Key concept inside it
${name}:
${expl}

Why it matters
Explains why:
- ${whyLines[0]}
- ${whyLines[1]}
- ${whyLines[2]}

The uncomfortable implication
${implicationLine}
The argument can still fail even when it feels obvious.

One-line version
${name} = ${expl}`;

  return { beginner, detail };
}

function buildFr(id, q) {
  const scenario = extractScenario(q.question);
  const name = q.options[q.correct];
  const expl = q.explanation;
  const everydayTheme = pickTheme(frEverydayThemes, id);
  const otherTheme = pickTheme(frOtherThemes, id, 3);
  const soLines = pickLines(frSoLines, id);
  const whyLines = pickLines(frWhyLines, id, 3, 1);
  const implicationLine = pickLines(frImplicationLines, id, 1, 2)[0];
  const explClause = lowerFirst(expl);

  const beginner = `${name} = ${expl}`;

  const detail = `${name}

Description:
Dans cette question, la phrase citée est « ${scenario} ».
C’est ${explClause}.

Exemple (question)
« ${scenario} »

Exemple (vie courante)
Dans ${everydayTheme}, quelqu’un commet la même erreur en ${explClause}.

Exemple (autre contexte)
Dans ${otherTheme}, la même erreur apparaît quand une personne est ${explClause} au lieu de vérifier la proposition.

Comment ça fonctionne
L’argument utilise un raccourci au lieu d’une vraie preuve.
Il semble réglé parce que l’orateur ${explClause}.

Donc :
- ${soLines[0]}
- ${soLines[1]}
- ${soLines[2]}

Concept clé
${name} :
${expl}

Pourquoi c'est important
Explique pourquoi :
- ${whyLines[0]}
- ${whyLines[1]}
- ${whyLines[2]}

L'implication inconfortable
${implicationLine}
L’argument peut encore échouer même quand il semble évident.

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
