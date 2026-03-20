/**
 * Generates LEVELS_2_TO_10_STANDALONE_EN / FR for IDs **91–900** from `fallaciesData.ts`
 * (game levels 2–10: 90 questions each).
 *
 * Run: node scripts/generate-standalone-levels-2-10.mjs
 * Output: src/data/inDepth/level2to10StandaloneInDepth.ts
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

function tsEscape(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

/** Layperson in-depth: only the named fallacy—no multiple-choice comparison. */
function mechClause(expl) {
  const t = expl.trim();
  if (!t) return 'the reasoning slips in the way described above';
  const lower = t.charAt(0).toLowerCase() + t.slice(1);
  return lower.endsWith('.') ? lower.slice(0, -1) : lower;
}

function examplesEn(id, name, expl) {
  const m = mechClause(expl);
  const cap = m.charAt(0).toUpperCase() + m.slice(1);
  const settings = [
    'a policy or workplace discussion',
    'a health or habits story',
    'sports or business results',
    'school grades or test scores',
    'a family argument',
    'a news headline or social post',
  ];
  const openers = [
    (s) => `**Setting:** ${s}. **What goes wrong:** ${cap}.`,
    (s) => `Imagine ${s}. The slip is the same: ${m}.`,
    (s) => `Picture ${s}. People often reason as if ${m}.`,
    (s) => `In ${s}, watch for this pattern: ${cap}.`,
    (s) => `Another everyday spot: ${s}. ${cap}.`,
  ];
  const lines = [];
  for (let k = 0; k < 5; k++) {
    const s = settings[(id + k * 2) % settings.length];
    const fn = openers[(id + k) % openers.length];
    lines.push(`- **Example ${k + 1}:** ${fn(s)}`);
  }
  return lines;
}

function examplesFr(id, name, expl) {
  const m = mechClause(expl);
  const cap = m.charAt(0).toUpperCase() + m.slice(1);
  const settings = [
    'un débat sur une politique ou au travail',
    'un récit sur la santé ou les habitudes',
    'des résultats sportifs ou d’entreprise',
    'des notes ou examens',
    'une discussion en famille',
    'un titre de presse ou un fil sur les réseaux',
  ];
  const openers = [
    (s) => `**Contexte :** ${s}. **Ce qui cloche :** ${cap}.`,
    (s) => `Imaginez ${s}. C’est la même erreur : ${m}.`,
    (s) => `Pensez à ${s}. Souvent, on raisonne comme si ${m}.`,
    (s) => `Dans ${s}, repérez ce schéma : ${cap}.`,
    (s) => `Autre situation courante : ${s}. ${cap}.`,
  ];
  const lines = [];
  for (let k = 0; k < 5; k++) {
    const s = settings[(id + k * 2) % settings.length];
    const fn = openers[(id + k) % openers.length];
    lines.push(`- **Exemple ${k + 1} :** ${fn(s)}`);
  }
  return lines;
}

function buildEn(id, q) {
  const scenario = extractScenario(q.question);
  const name = q.options[q.correct];
  const expl = q.explanation;
  const ex = examplesEn(id, name, expl);

  const capExplain = expl.trim().endsWith('.') ? expl.trim() : `${expl.trim()}.`;

  const beginner = `## ${name} — in-depth (Beginner)

**What this is, in plain English**  
${expl}

**The example you’re looking at**  
« ${scenario} »  

**Why this is ${name}**  
${capExplain} That is what this label is pointing to in the passage above.

**Takeaway**  
${expl}`;

  const intermediate = `## ${name} — in-depth (Intermediate)

**What this is, in plain English**  
${expl}

**This example**  
« ${scenario} »  

The passage shows **${name}** in action: ${mechClause(expl)}.

**More examples (same fallacy only)**  
${ex.slice(0, 3).join('\n')}

**In one sentence**  
${name} is the label for reasoning that fits: ${expl}`;

  const expert = `## ${name} — in-depth (Expert)

**Definition**  
${expl}

**Applied to this passage**  
« ${scenario.slice(0, 700)}${scenario.length > 700 ? '…' : ''} »  

Here, **${name}** is the right name because ${mechClause(expl)}.

**More examples (same fallacy only)**  
${ex.join('\n')}

**Rules and checks (useful habits)**  
- **Anchor:** Start from the bank definition—**${name}** means ${expl}
- **Slow down:** Separate what happened from what someone *claims* caused it; coincidence is not proof.
- **Ask:** What else could explain the same outcome, even if it is less exciting than the story being told?
- **Stay focused:** Does this passage mainly illustrate the pattern in the definition above?

**Topic (bank)**  
${q.concept}`;

  return { beginner, intermediate, expert };
}

function buildFr(id, q) {
  const scenario = extractScenario(q.question);
  const name = q.options[q.correct];
  const expl = q.explanation;
  const ex = examplesFr(id, name, expl);

  const capExplainFr = expl.trim().endsWith('.') ? expl.trim() : `${expl.trim()}.`;

  const beginner = `## ${name} — approfondi (Débutant)

**En termes simples**  
${expl}

**L’exemple affiché**  
« ${scenario} »  

**Pourquoi c’est bien ${name}**  
${capExplainFr} C’est ce que ce libellé vise dans le passage ci-dessus.

**À retenir**  
${expl}`;

  const intermediate = `## ${name} — approfondi (Intermédiaire)

**En termes simples**  
${expl}

**Cet exemple**  
« ${scenario} »  

Le passage montre **${name}** : ${mechClause(expl)}.

**Autres exemples (même erreur seulement)**  
${ex.slice(0, 3).join('\n')}

**En une phrase**  
**${name}**, c’est quand le raisonnement correspond à : ${expl}`;

  const expert = `## ${name} — approfondi (Expert)

**Définition**  
${expl}

**Appliqué à ce passage**  
« ${scenario.slice(0, 700)}${scenario.length > 700 ? '…' : ''} »  

Ici, **${name}** convient parce que ${mechClause(expl)}.

**Autres exemples (même erreur seulement)**  
${ex.join('\n')}

**Règles et repères**  
- **Ancrage :** repartir de la définition—**${name}**, c’est ${expl}
- **Ralentir :** distinguer ce qui s’est passé de ce qu’on *dit* qui l’a causé ; la coïncidence ne prouve pas.
- **Question :** qu’est-ce qui pourrait expliquer le même résultat autrement, même si c’est moins spectaculaire ?
- **Cible :** le passage illustre-t-il surtout le schéma décrit dans la définition ci-dessus ?

**Thème (banque)**  
${q.concept}`;

  return { beginner, intermediate, expert };
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
  enBody += `\n  ${id}: {\n    beginner: \`${tsEscape(en.beginner)}\`,\n    intermediate: \`${tsEscape(en.intermediate)}\`,\n    expert: \`${tsEscape(en.expert)}\`,\n  },`;
  frBody += `\n  ${id}: {\n    beginner: \`${tsEscape(fr.beginner)}\`,\n    intermediate: \`${tsEscape(fr.intermediate)}\`,\n    expert: \`${tsEscape(fr.expert)}\`,\n  },`;
}

const header = `/**
 * Question-specific in-depth explanations for **game levels 2–10** in \`fallaciesData.ts\`:
 * IDs **91–900** (90 questions per level: level 2 → 91–180, …, level 10 → 811–900).
 * Same contract as Level 0 / Level 1: when an ID is present, the app shows that string as the
 * **full** in-depth panel (no codon wrapper). English and French must stay in structural parity.
 *
 * Progress: see \`/task.md\` at repo root.
 * Generated by scripts/generate-standalone-levels-2-10.mjs — regenerate if bank text changes.
 * Pedagogy: layperson text focused on the named fallacy only (no walkthrough of wrong answer choices);
 * Intermediate/Expert add more examples of the same fallacy plus rules at Expert.
 */

import type { StandaloneInDepthLevels } from './level0StandaloneInDepth';

/** English */
export const LEVELS_2_TO_10_STANDALONE_EN: Partial<Record<number, StandaloneInDepthLevels>> = {`;

const mid = `};

/** French — même contrat (parité structurale avec l’anglais) */
export const LEVELS_2_TO_10_STANDALONE_FR: Partial<Record<number, StandaloneInDepthLevels>> = {`;

const footer = `};
`;

const out = header + enBody + '\n' + mid + frBody + '\n' + footer;
const outPath = path.join(root, 'src/data/inDepth/level2to10StandaloneInDepth.ts');
fs.writeFileSync(outPath, out);
console.log('Wrote', outPath, 'chars', out.length);
