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

function getCue(name, locale) {
  const n = name.toLowerCase();
  const en = {
    'ad hominem': 'as if insulting the person could answer the argument',
    'appeal to authority': 'as if a respected person being convinced made the claim true',
    'appeal to popularity': 'as if many people repeating it made it correct',
    'appeal to tradition': 'as if age alone made a habit right',
    'appeal to novelty': 'as if being new made it better',
    'appeal to emotion': 'as if feeling strongly were the same as proving the point',
    'appeal to fear': 'as if a scare story counted as evidence',
    'appeal to ignorance': 'as if lack of disproof counted as proof',
    'appeal to incredulity': 'as if "I cannot imagine it" were a refutation',
    'anecdotal fallacy': 'as if one story could replace the bigger pattern',
    'base rate fallacy': 'as if the base rate did not matter',
    'begging the question': 'as if the conclusion could quietly act as its own support',
    'biased sample': 'as if a narrow sample stood for everyone',
    'causal oversimplification': 'as if one obvious cause explained everything',
    'cherry picking': 'as if only the convenient evidence counted',
    'complex question': 'as if the question already smuggled in a hidden claim',
    'false analogy': 'as if two things being similar in one way made them similar in the needed way',
    'false dilemma': 'as if there were only two choices',
    'genetic fallacy': 'as if the origin of an idea decided whether it was true',
    'guilt by association': 'as if the people nearby proved the claim',
    'halo effect': 'as if one good trait guaranteed all the others',
    'hasty generalization': 'as if one case proved the whole group',
    'irrelevant conclusion': 'as if the conclusion followed even though it did not',
    'missing the point': 'as if answering a nearby question solved the real one',
    'reification': 'as if an abstract idea were a real person or object',
    'red herring': 'as if a side issue could replace the main issue',
    'regression fallacy': 'as if a normal swing were caused by the last thing that happened',
    'slippery slope': 'as if one small step automatically led to the worst outcome',
    'straw man': 'as if a weaker version of the argument were the real one',
    'weak analogy': 'as if a shallow comparison proved the point',
  };
  const fr = {
    'ad hominem': "comme si insulter la personne suffisait à répondre à l'argument",
    'appeal to authority': "comme si le fait qu'une personne respectée y croit rendait la proposition vraie",
    'appeal to popularity': "comme si le fait que beaucoup de gens le répètent le rendait correct",
    'appeal to tradition': "comme si l'ancienneté suffisait à rendre une habitude juste",
    'appeal to novelty': "comme si le fait d'être nouveau le rendait meilleur",
    'appeal to emotion': "comme si une forte émotion remplaçait la preuve",
    'appeal to fear': "comme si un récit alarmiste comptait comme preuve",
    'appeal to ignorance': "comme si l'absence de preuve contraire prouvait la chose",
    'appeal to incredulity': "comme si le fait de ne pas pouvoir l'imaginer suffisait à le réfuter",
    'anecdotal fallacy': "comme si une seule histoire pouvait remplacer l'ensemble",
    'base rate fallacy': "comme si le taux de base n'avait pas d'importance",
    'begging the question': "comme si la conclusion pouvait servir discrètement de preuve",
    'biased sample': "comme si un échantillon étroit représentait tout le monde",
    'causal oversimplification': "comme si une cause évidente expliquait tout",
    'cherry picking': "comme si seules les preuves commodes comptaient",
    'complex question': "comme si la question contenait déjà une affirmation cachée",
    'false analogy': "comme si une ressemblance superficielle suffisait à prouver la ressemblance utile",
    'false dilemma': "comme s'il n'existait que deux choix",
    'genetic fallacy': "comme si l'origine d'une idée décidait si elle est vraie",
    'guilt by association': "comme si les personnes autour prouvaient la proposition",
    'halo effect': "comme si une qualité positive garantissait toutes les autres",
    'hasty generalization': "comme si un seul cas prouvait tout le groupe",
    'irrelevant conclusion': "comme si la conclusion suivait alors qu'elle ne suit pas",
    'missing the point': "comme si répondre à une question voisine réglait la vraie question",
    'reification': "comme si une idée abstraite était une personne ou un objet réel",
    'red herring': "comme si un sujet secondaire pouvait remplacer le sujet principal",
    'regression fallacy': "comme si une variation normale venait forcément du dernier événement",
    'slippery slope': "comme si un petit pas menait automatiquement au pire scénario",
    'straw man': "comme si une version affaiblie de l'argument était la vraie",
    'weak analogy': "comme si une comparaison superficielle prouvait le point",
  };
  const table = locale === 'fr' ? fr : en;
  for (const key of Object.keys(table)) {
    if (n.includes(key)) return table[key];
  }
  return locale === 'fr'
    ? "comme si le raccourci suffisait à prouver la conclusion"
    : 'as if the shortcut alone were enough to prove the conclusion';
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
  const cue = getCue(name, 'en');

  const beginner = `${name} = ${expl}`;

  const detail = `${name}

Description:
In this question, the quoted claim is "${scenario}".
That is ${cue}.

Example (question)
« ${scenario} »

Example (everyday)
In ${everydayTheme}, someone says "${scenario}" ${cue}.

Example (another context)
In ${otherTheme}, the same error shows up when people treat the claim ${cue}.

How it works
The argument uses a shortcut instead of real evidence.
It sounds settled because the speaker is doing that ${cue}.

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
  const cue = getCue(name, 'fr');

  const beginner = `${name} = ${expl}`;

  const detail = `${name}

Description:
Dans cette question, la phrase citée est « ${scenario} ».
C’est ${cue}.

Exemple (question)
« ${scenario} »

Exemple (vie courante)
Dans ${everydayTheme}, quelqu’un dit « ${scenario} » ${cue}.

Exemple (autre contexte)
Dans ${otherTheme}, la même erreur apparaît quand on traite la proposition ${cue}.

Comment ça fonctionne
L’argument utilise un raccourci au lieu d’une vraie preuve.
Il semble réglé parce que l’orateur fait cela ${cue}.

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
