/**
 * Generates LEVEL_1_STANDALONE_EN / FR content for IDs 1–90 from fallaciesData.ts.
 * Run: node scripts/generate-level1-standalone.mjs
 * Then paste output into src/data/inDepth/level1StandaloneInDepth.ts (or use stdout redirect).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const dataPath = path.join(root, 'src/data/questions/fallaciesData.ts');

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
  const raw = optMatch[1];
  const re = /"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(raw))) opts.push(unescapeTsString(m[1]));
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

const LETTERS = ['A', 'B', 'C', 'D'];

function tsEscape(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

const wrongIntroEn = [
  (w, c) =>
    `**${w}** — a different error family than what this passage foregrounds; the bank’s gloss for **${c}** is the better match.`,
  (w, c) =>
    `**${w}** — tempting if you focus on tone, but the **dominant** flaw here tracks **${c}** instead.`,
  (w, c) =>
    `**${w}** — does not capture the main argumentative move the question targets (choose **${c}**).`,
];

const wrongIntroFr = [
  (w, c) =>
    `**${w}** — autre famille d’erreurs que le geste mis en avant ici ; la banque pointe plutôt **${c}**.`,
  (w, c) =>
    `**${w}** — peut séduire si on regarde le ton, mais le défaut **central** suit plutôt **${c}**.`,
  (w, c) =>
    `**${w}** — ne capte pas le geste argumentatif principal visé par l’énoncé (**${c}**).`,
];

function buildEn(id, q, lang) {
  const scenario = extractScenario(q.question);
  const correctOpt = q.options[q.correct];
  const expl = q.explanation;
  const lines = q.options.map((opt, i) => {
    const L = LETTERS[i];
    if (i === q.correct) {
      return `• (${L}) **${opt}** — **Correct:** matches the bank’s short diagnosis: ${expl}`;
    }
    const fn = wrongIntroEn[(id + i) % wrongIntroEn.length];
    return `• (${L}) ${fn(opt, correctOpt)}`;
  });

  const beginner = `In-depth (Beginner) — identify the fallacy (ID ${id})

What this question asks
Pick the **fallacy label** that best matches the **dominant flawed pattern** in the passage.

Passage (this card)
« ${scenario} »

Correct answer (index **${q.correct}**)
**"${correctOpt}"**

Bank short explanation
${expl}

Walk the options
${lines.join('\n')}`;

  const intermediate = `In-depth (Intermediate) — identify the fallacy

Goal
Map the excerpt to **one** named pattern—the one the question writers treat as **primary**.

Steps
1. **Strip** setup (“Identify…”) and read the quoted scenario as an argument move.
2. Ask what is being used as a **reason** (or dodge): character attack, tradition, popularity, authority, presupposition in a question, etc.
3. Match that move to **${correctOpt}** using the bank gloss: ${expl}
4. Treat other labels as **near misses** unless the text clearly instantiates them.

This excerpt
« ${scenario.slice(0, 600)}${scenario.length > 600 ? '…' : ''} »

Takeaway
On this card, **${correctOpt}** is the tightest label among the four.`;

  const expert = `In-depth (Expert) — identify the fallacy

Logical target
**${correctOpt}** — ${expl}

Passage focus
« ${scenario.slice(0, 500)}${scenario.length > 500 ? '…' : ''} »

Distractor logic
Wrong answers name **adjacent** fallacies or cognitive shortcuts; the exam asks which label **best** describes the mechanism on display, not every possible weakness in the text.

Concept tag (bank)
${q.concept}

Pedagogical note
When multiple flaws could be narrated, choose the option that matches the **bank explanation** and the **center of gravity** of the passage. ID ${id} — variance seed ${id % 7}.`;

  return { beginner, intermediate, expert };
}

function buildFr(id, q) {
  const scenario = extractScenario(q.question);
  const correctOpt = q.options[q.correct];
  const expl = q.explanation;
  const lines = q.options.map((opt, i) => {
    const L = LETTERS[i];
    if (i === q.correct) {
      return `• (${L}) **${opt}** — **Correct :** correspond à la formulation courte de la banque : ${expl}`;
    }
    const fn = wrongIntroFr[(id + i) % wrongIntroFr.length];
    return `• (${L}) ${fn(opt, correctOpt)}`;
  });

  const beginner = `Approfondi (Débutant) — repérer la fallacie (ID ${id})

Ce que demande la question
Choisir **l’étiquette** qui correspond le mieux au **geste argumentatif principal** dans le passage.

Passage (cette carte)
« ${scenario} »

Bonne réponse (index **${q.correct}**)
**« ${correctOpt} »**

Formulation courte (banque)
${expl}

Options
${lines.join('\n')}`;

  const intermediate = `Approfondi (Intermédiaire) — repérer la fallacie

Objectif
Relier l’extrait à **un** schéma nommé — celui que les auteurs traitent comme **dominant**.

Étapes
1. Lire le scénario cité comme un **mouvement** argumentatif.
2. Demander ce qui sert de **raison** (ou d’esquive) : personne, tradition, majorité, autorité, présupposé dans une question, etc.
3. Rapprocher ce geste de **${correctOpt}** avec la glose banque : ${expl}
4. Traiter les autres étiquettes comme **proches** seulement si le texte les instancie clairement.

Extrait
« ${scenario.slice(0, 600)}${scenario.length > 600 ? '…' : ''} »

Synthèse
Ici, **${correctOpt}** est l’étiquette la plus serrée parmi les quatre.`;

  const expert = `Approfondi (Expert) — repérer la fallacie

Cible logique
**${correctOpt}** — ${expl}

Focus du passage
« ${scenario.slice(0, 500)}${scenario.length > 500 ? '…' : ''} »

Logique des distracteurs
Les mauvaises réponses nomment des **voisins** (biais, autres sophismes) ; la question demande le libellé qui décrit le **mécanisme** mis en avant, pas toute faiblesse imaginable.

Étiquette concept (banque)
${q.concept}

Note pédagogique
Si plusieurs analyses sont possibles, retenez celle qui **maximise** l’alignement avec la **formulation courte** de la banque et le **centre de gravité** du texte. ID ${id}.`;

  return { beginner, intermediate, expert };
}

let enBody = '';
let frBody = '';

for (let id = 1; id <= 90; id++) {
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
  enBody += `\n  ${id}: {\n    beginner: \`${tsEscape(en.beginner)}\`,\n    intermediate: \`${tsEscape(en.intermediate)}\`,\n    expert: \`${tsEscape(en.expert)}\`,\n  },`;
  frBody += `\n  ${id}: {\n    beginner: \`${tsEscape(fr.beginner)}\`,\n    intermediate: \`${tsEscape(fr.intermediate)}\`,\n    expert: \`${tsEscape(fr.expert)}\`,\n  },`;
}

const header = `/**
 * Question-specific in-depth explanations for **Level 1** (Plankton): IDs **1–90** in \`fallaciesData.ts\`.
 * Same contract as Level 0 (\`level0StandaloneInDepth.ts\`): when an ID is present, the app shows that
 * string as the **full** in-depth panel (no codon wrapper). English and French must stay in structural parity.
 *
 * Progress: see \`/task.md\` at repo root.
 * Generated by scripts/generate-level1-standalone.mjs — regenerate if bank text changes.
 */

import type { StandaloneInDepthLevels } from './level0StandaloneInDepth';

/** English */
export const LEVEL_1_STANDALONE_EN: Partial<Record<number, StandaloneInDepthLevels>> = {`;

const mid = `};

/** French — même contrat (parité structurale avec l’anglais) */
export const LEVEL_1_STANDALONE_FR: Partial<Record<number, StandaloneInDepthLevels>> = {`;

const footer = `};
`;

const out = header + enBody + '\n' + mid + frBody + '\n' + footer;
const outPath = path.join(root, 'src/data/inDepth/level1StandaloneInDepth.ts');
fs.writeFileSync(outPath, out);
console.log('Wrote', outPath, 'bytes', out.length);
