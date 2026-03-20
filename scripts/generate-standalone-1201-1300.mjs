/**
 * One-off generator: Level 0 standalone in-depth for IDs 1201–1300 (EN + FR).
 * Reads question data from level0Data.ts (IDs 1201–1300 inclusive).
 * Run: node scripts/generate-standalone-1201-1300.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const dataPath = path.join(root, 'src/data/questions/level0Data.ts');

const text = fs.readFileSync(dataPath, 'utf8');
const enSection = text.split('export const LEVEL_0_GEN_FR')[0];
const frSection = text.split('export const LEVEL_0_GEN_FR')[1];

function unescapeJsonString(s) {
  return s
    .replace(/\\n/g, '\n')
    .replace(/\\"/g, '"')
    .replace(/\\u2014/g, '—')
    .replace(/\\u2019/g, "'")
    .replace(/\\u00ab/g, '«')
    .replace(/\\u00bb/g, '»')
    .replace(/\\u00c7/g, 'Ç')
    .replace(/\\u00e9/g, 'é')
    .replace(/\\u00e8/g, 'è')
    .replace(/\\u00ea/g, 'ê')
    .replace(/\\u00e0/g, 'à')
    .replace(/\\u00f9/g, 'ù')
    .replace(/\\u00e7/g, 'ç')
    .replace(/\\u2227/g, '∧')
    .replace(/\\u2261/g, '≡')
    .replace(/\\u2260/g, '≠')
    .replace(/\\u21d2/g, '⇒')
    .replace(/\\u22a8/g, '⊨');
}

function parseQuestion(block) {
  const qm = block.match(/"question":\s*"((?:\\.|[^"\\])*)"/);
  const optMatch = block.match(/"options":\s*\[([\s\S]*?)\]\s*,\s*"correct_option_index"/);
  const cm = block.match(/"correct_option_index":\s*(\d+)/);
  const conceptm = block.match(/"concept":\s*"([^"]+)"/);
  if (!qm || !optMatch || !cm) return null;
  const question = unescapeJsonString(qm[1]);
  const opts = [];
  const raw = optMatch[1];
  const re = /"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(raw))) opts.push(unescapeJsonString(m[1]));
  return {
    question,
    options: opts,
    correct: +cm[1],
    concept: conceptm ? conceptm[1] : '',
  };
}

function extractBlock(section, id) {
  const needle = `"id": ${id},`;
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

const LETTERS = ['A', 'B', 'C', 'D'];

function tsEscape(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function validityDistractorNote(lang, opt, idx, correct) {
  const t = opt.toLowerCase();
  if (idx === correct) return null;
  const en = () => {
    if (
      /real world|actually true|empirically|verified|premise.*true|true.*premise|every premise is true|all premises true|true inputs|factual/.test(
        t,
      ) && !/cannot.*false|truth-preserving|guarantee|must come out|impossible.*premises.*true.*conclusion.*false/.test(t)
    ) {
      return 'This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).';
    }
    if (/expert|persuasive|popular|emotion|social media|cares deeply|cites many|sources|audience|viral|debate|moved|jury|vibe|applause|marketing|luck|taste|font|loud|new|short|boring|technical|word count/.test(t)) {
      return 'This is **rhetorical** or **psychological**, not the formal definition of deductive validity.';
    }
    if (/probabl|likely|feel satisfying|background knowledge|agree|controversial|popular conclusion/.test(t)) {
      return 'This is closer to **inductive strength** or **acceptance**, not **deductive validity**.';
    }
    if (/invalid|fallacious|fallacy|pure opinion|emotion only|rhetorical trick|neither valid/.test(t)) {
      return 'This mis-describes the standard; it does not state the **truth-preserving** link between premises and conclusion.';
    }
    if (/sound\b|soundness/.test(t)) {
      return '**Soundness** adds true premises; the question asks for **validity** (structural consequence).';
    }
    return 'This does not match the textbook definition: **no situation where all premises are true and the conclusion is false**.';
  };
  const fr = () => {
    if (
      /real world|actually true|empirically|verified|premise.*true|true.*premise|every premise is true|all premises true|true inputs|factual|vrai dans le monde|vérifiée|vraies dans le monde|réel/.test(
        t,
      ) && !/ne peut pas|fausse|préserv|impossible|garantit|ressortir/.test(t)
    ) {
      return 'Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).';
    }
    if (/expert|persuasive|popular|emotion|réseaux|profond|sources|audience|viral|débat|jury|applaud|marketing|chance|goût|font|court|long|ennuyeux|technique|mot|populaire|convaincant/.test(t)) {
      return 'Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.';
    }
    if (/probabl|likely|feel satisfying|background knowledge|agree|controversial|popular conclusion|agréable|probable|arrière-plan/.test(t)) {
      return 'Cela se rapproche de la **force inductive** ou de l’**acceptation**, pas de la **validité déductive**.';
    }
    if (/invalid|fallacious|fallacy|pure opinion|emotion only|rhetorical trick|neither valid|ni valide/.test(t)) {
      return 'Cela ne donne pas la définition standard : **lien préservant la vérité** entre prémisses et conclusion.';
    }
    if (/sound\b|soundness|solidité/.test(t)) {
      return 'La **solidité** ajoute des prémisses vraies ; la question porte sur la **validité** (conséquence structurelle).';
    }
    return 'Cela ne correspond pas à la définition : **aucune situation** où prémisses toutes vraies et conclusion fausse.';
  };
  return lang === 'fr' ? fr() : en();
}

function soundnessDistractorNote(lang, opt, idx, correct) {
  const t = opt.toLowerCase();
  if (idx === correct) return null;
  const en = () => {
    if (/valid only|validity is enough|validity alone|valid.*therefore.*sound|form still|does not matter|still valid|invalid automatically|purely emotion|purely rhetorical|neither valid/.test(t)) {
      return 'This confuses **validity** with **soundness**; soundness needs **true premises** too.';
    }
    if (/true premises only|true.*invalid|fallacious pattern|without valid|emotion \+ statistics/.test(t)) {
      return '**True premises** without a **valid** pattern are not enough for soundness.';
    }
    if (/probabl|likely|statistical|inductive|luck|charisma|length|footnote|fast|restaurant|shiny|brand|mood|tone|font|boring|word count|feel|intuition|audience|vibes|applause|style|debate|moved|jury|viral|fame|mood of the room|marketing|luck|taste|good luck|good marketing/.test(t)) {
      return 'This is **not** part of the logical definition of **soundness** (valid form + true premises).';
    }
    if (/false conclusion|conclusion is false|at random|typo|no premises|no conclusion/.test(t)) {
      return 'This mis-states what soundness requires or what a valid argument can look like.';
    }
    if (/persuasive|widely believed|believed/.test(t) && !/true premises.*valid/.test(t)) {
      return '**Persuasion** or **belief** is not the definition of soundness.';
    }
    return 'This does not match **soundness** = **deductive validity** + **actually true premises**.';
  };
  const fr = () => {
    if (/valid only|validity is enough|validity alone|valid.*therefore.*sound|form still|does not matter|still valid|invalid automatically|purely emotion|purely rhetorical|neither valid|donc.*solide|suffit|valide seule/.test(t)) {
      return 'On confond **validité** et **solidité** ; la solidité exige aussi des **prémisses vraies**.';
    }
    if (/true premises only|true.*invalid|fallacious pattern|without valid|emotion \+ statistics|prémisses vraies seule|sans.*valide/.test(t)) {
      return 'Des **prémisses vraies** sans **forme valide** ne suffisent pas à la solidité.';
    }
    if (/probabl|likely|statistical|inductive|luck|charisma|length|footnote|fast|restaurant|shiny|brand|mood|tone|font|boring|word count|feel|intuition|audience|vibes|applause|style|debate|moved|jury|viral|fame|marketing|goût|chance|populaire/.test(t)) {
      return 'Ce n’est **pas** dans la définition logique de **solidité** (forme valide + prémisses vraies).';
    }
    if (/false conclusion|conclusion is false|at random|typo|no premises|no conclusion|fausse|au hasard/.test(t)) {
      return 'Cela décrit mal ce que la solidité exige ou ce qu’un argument valide peut être.';
    }
    if (/persuasive|widely believed|believed|convaincante/.test(t) && !/prémisses vraies.*valid/.test(t)) {
      return 'La **persuasion** ou la **croyance** n’est pas la définition de la solidité.';
    }
    return 'Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.';
  };
  return lang === 'fr' ? fr() : en();
}

function buildValidityEn(id, q, opts, correct) {
  const correctText = opts[correct];
  const stemHint = q.replace(/\s+/g, ' ').slice(0, 120);
  const lines = opts.map((o, i) => {
    const letter = LETTERS[i];
    const note = validityDistractorNote('en', o, i, correct);
    if (note) return `• (${letter}) ${o} — ${note}`;
    return `• (${letter}) ${o} — **Correct:** states the **truth-preserving** link (standard validity).`;
  });

  return {
    beginner: `In-depth (Beginner) — deductive validity (ID ${id})

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** ${stemHint}${q.length > 120 ? '…' : ''}

Correct option (index **${correct}**)
**"${correctText}"**

Why the other options fail
${lines.join('\n')}`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
${q}

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: ${stemHint}${q.length > 120 ? '…' : ''}
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  };
}

function buildValidityFr(id, q, opts, correct) {
  const correctText = opts[correct];
  const stemHint = q.replace(/\s+/g, ' ').slice(0, 120);
  const lines = opts.map((o, i) => {
    const letter = LETTERS[i];
    const note = validityDistractorNote('fr', o, i, correct);
    if (note) return `• (${letter}) ${o} — ${note}`;
    return `• (${letter}) ${o} — **Correct :** formule le lien **préservant la vérité** (validité standard).`;
  });

  return {
    beginner: `Approfondi (Débutant) — validité déductive (ID ${id})

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** ${stemHint}${q.length > 120 ? '…' : ''}

Bonne réponse (index **${correct}**)
**« ${correctText} »**

Pourquoi les autres options échouent
${lines.join('\n')}`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
${q}

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : ${stemHint}${q.length > 120 ? '…' : ''}
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  };
}

function buildSoundnessEn(id, q, opts, correct) {
  const correctText = opts[correct];
  const lines = opts.map((o, i) => {
    const letter = LETTERS[i];
    const note = soundnessDistractorNote('en', o, i, correct);
    if (note) return `• (${letter}) ${o} — ${note}`;
    return `• (${letter}) ${o} — **Correct:** matches **validity + true premises** (soundness).`;
  });

  return {
    beginner: `In-depth (Beginner) — soundness (ID ${id})

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
${q}

Correct option (index **${correct}**)
**"${correctText}"**

Why the other options fail
${lines.join('\n')}`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
${q}

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises \(P_1..P_n\) and conclusion \(C\). It is **sound** iff it is **deductively valid** and each \(P_i\) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
${q}

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  };
}

function buildSoundnessFr(id, q, opts, correct) {
  const correctText = opts[correct];
  const lines = opts.map((o, i) => {
    const letter = LETTERS[i];
    const note = soundnessDistractorNote('fr', o, i, correct);
    if (note) return `• (${letter}) ${o} — ${note}`;
    return `• (${letter}) ${o} — **Correct :** correspond à **validité + prémisses vraies** (solidité).`;
  });

  return {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID ${id})

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
${q}

Bonne réponse (index **${correct}**)
**« ${correctText} »**

Pourquoi les autres options échouent
${lines.join('\n')}`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
${q}

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses \(P_1..P_n\) et conclusion \(C\) est **solide** ssi il est **déductivement valide** et chaque \(P_i\) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
${q}

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  };
}

const ids = [];
for (let id = 1201; id <= 1300; id++) {
  ids.push(id);
}

let enOut = '';
let frOut = '';

for (const id of ids) {
  const eb = extractBlock(enSection, id);
  const fb = extractBlock(frSection, id);
  console.log('ID', id, 'EN', eb ? 'ok' : 'MISS', 'FR', fb ? 'ok' : 'MISS');
  if (!eb || !fb) process.exit(1);
  const enQ = parseQuestion(eb);
  const frQ = parseQuestion(fb);
  if (!enQ || !frQ) {
    console.error('parse fail', id);
    process.exit(1);
  }
  if (enQ.concept === 'validity-definition') {
    const en = buildValidityEn(id, enQ.question, enQ.options, enQ.correct);
    const fr = buildValidityFr(id, frQ.question, frQ.options, frQ.correct);
    enOut += `\n  ${id}: {\n    beginner: \`${tsEscape(en.beginner)}\`,\n    intermediate: \`${tsEscape(en.intermediate)}\`,\n    expert: \`${tsEscape(en.expert)}\`,\n  },`;
    frOut += `\n  ${id}: {\n    beginner: \`${tsEscape(fr.beginner)}\`,\n    intermediate: \`${tsEscape(fr.intermediate)}\`,\n    expert: \`${tsEscape(fr.expert)}\`,\n  },`;
  } else if (enQ.concept === 'soundness-definition') {
    const en = buildSoundnessEn(id, enQ.question, enQ.options, enQ.correct);
    const fr = buildSoundnessFr(id, frQ.question, frQ.options, frQ.correct);
    enOut += `\n  ${id}: {\n    beginner: \`${tsEscape(en.beginner)}\`,\n    intermediate: \`${tsEscape(en.intermediate)}\`,\n    expert: \`${tsEscape(en.expert)}\`,\n  },`;
    frOut += `\n  ${id}: {\n    beginner: \`${tsEscape(fr.beginner)}\`,\n    intermediate: \`${tsEscape(fr.intermediate)}\`,\n    expert: \`${tsEscape(fr.expert)}\`,\n  },`;
  } else {
    console.error('unknown concept', id, enQ.concept);
    process.exit(1);
  }
}

fs.writeFileSync(path.join(root, '_gen_en_1201_1300.txt'), enOut);
fs.writeFileSync(path.join(root, '_gen_fr_1201_1300.txt'), frOut);
console.log('Wrote fragments, chars EN', enOut.length, 'FR', frOut.length);
