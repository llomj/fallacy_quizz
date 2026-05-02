import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const dataPath = path.join(root, 'src/data/questions/fallaciesData.ts');
const outPath = path.join(root, 'src/data/inDepth/level2to10StandaloneInDepth.ts');

const text = fs.readFileSync(dataPath, 'utf8');
const enSection = text.split('export const FALLACY_QUESTIONS_FR')[0];
const frSection = text.split('export const FALLACY_QUESTIONS_FR')[1];

function unescapeTsString(s) {
  let out = '';
  let i = 0;
  while (i < s.length) {
    if (s[i] === '\\' && i + 1 < s.length) {
      const n = s[i + 1];
      if (n === 'n') { out += '\n'; i += 2; continue; }
      if (n === '"' || n === "'" || n === '\\') { out += n; i += 2; continue; }
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

const templatesEN = {
  "IKEA Effect": {
    desc2: "Effort makes us blind to objective quality.",
    mech: "The argument links the effort spent to the actual worth of the outcome.",
    bullets: ["Effort and value are not the same thing.", "Building it yourself makes you biased.", "Hard work does not guarantee a better result."],
    term: "Effort Justification",
    termDef: "Placing a higher value on an outcome because you worked hard for it.",
    implic: "You can overvalue something simply because you sweated over it."
  },
  "Ben Franklin Effect": {
    desc2: "We justify our actions by changing our feelings.",
    mech: "The argument assumes that asking for a favor will create resentment, when it actually builds affinity.",
    bullets: ["Doing a favor creates cognitive dissonance.", "We like people we help, to justify why we helped them.", "Actions can change our feelings."],
    term: "Cognitive Dissonance",
    termDef: "Mental discomfort when actions and beliefs don't match, causing beliefs to shift.",
    implic: "We can convince ourselves we like someone just because we did them a favor."
  },
  "Mere Exposure Effect": {
    desc2: "Familiarity is easily mistaken for preference.",
    mech: "The argument treats something as better just because it has been seen more often.",
    bullets: ["Familiarity breeds comfort, not necessarily quality.", "Repeating a bad idea does not make it good.", "We prefer what is easy to process."],
    term: "Processing Fluency",
    termDef: "The ease with which information is processed, often mistaken for truth or preference.",
    implic: "You might only like it because you are used to it."
  },
  "Spotlight Effect": {
    desc2: "Everyone else is too busy worrying about themselves.",
    mech: "The argument exaggerates how much attention others are paying to a minor detail.",
    bullets: ["People are mostly focused on themselves.", "Your mistakes are invisible to most people.", "We project our own self-consciousness onto others."],
    term: "Egocentrism",
    termDef: "The inability to accurately understand how others perceive a situation.",
    implic: "Nobody is watching you as closely as you think."
  },
  "Barnum Effect": {
    desc2: "Vague statements feel specific if you want them to be.",
    mech: "The argument treats a generic description as if it were uniquely tailored.",
    bullets: ["Generic statements apply to almost anyone.", "People fill in the blanks with their own details.", "Personal validation makes us gullible."],
    term: "Subjective Validation",
    termDef: "Perceiving two unrelated events as related because a personal belief demands it.",
    implic: "You can see yourself perfectly in a mirror made for everyone."
  },
  "Pareidolia": {
    desc2: "Our brains are hardwired to see faces everywhere.",
    mech: "The argument takes a random visual pattern and insists it has intentional meaning.",
    bullets: ["Randomness often creates familiar shapes.", "Seeing a face does not mean someone put it there.", "Our brains hate meaninglessness."],
    term: "Pattern Recognition",
    termDef: "The cognitive process of matching information from a stimulus with information retrieved from memory.",
    implic: "You can find a message even when no one is speaking."
  },
  "Apophenia": {
    desc2: "Connecting the dots when there are no dots to connect.",
    mech: "The argument finds a meaningful pattern in completely random data.",
    bullets: ["Coincidences happen all the time.", "Finding a pattern does not prove a conspiracy.", "Random data will always have some clusters."],
    term: "Clustering Illusion",
    termDef: "The tendency to erroneously consider the inevitable streaks in small samples of random data to be meaningful.",
    implic: "Your brain will invent a story if you stare at static long enough."
  },
  "Selection Bias": {
    desc2: "The people you don't hear from change the whole story.",
    mech: "The argument draws a conclusion from a sample that doesn't represent the whole group.",
    bullets: ["Missing data is just as important as visible data.", "A flawed sample guarantees a flawed result.", "You cannot generalize if the group was hand-picked."],
    term: "Representative Sample",
    termDef: "A subset of a population that accurately reflects the members of the entire population.",
    implic: "You only see the winners, so you think winning is easy."
  },
  "Data Dredging": {
    desc2: "If you torture the data long enough, it will confess.",
    mech: "The argument tests many hypotheses and only reports the one that looks successful by chance.",
    bullets: ["Looking hard enough guarantees finding a coincidence.", "The hypothesis must be chosen before the test.", "P-hacking creates false scientific breakthroughs."],
    term: "P-hacking",
    termDef: "The misuse of data analysis to find patterns in data that can be presented as statistically significant.",
    implic: "You can prove anything if you hide all the failed experiments."
  },
  "Wrong Direction": {
    desc2: "Confusing the illness with the cure.",
    mech: "The argument sees a correlation and flips the cause and the effect.",
    bullets: ["Two things happening together doesn't mean A causes B; B might cause A.", "The direction of time and cause must be proven.", "Reversing the arrow leads to disastrous solutions."],
    term: "Reverse Causality",
    termDef: "A situation where the effect is mistakenly identified as the cause.",
    implic: "You might end up taking away the umbrellas to stop the rain."
  },
  "Sunk Cost Fallacy": {
    desc2: "Throwing good money after bad.",
    mech: "The argument uses past, unrecoverable investments to justify future, irrational spending.",
    bullets: ["Past costs cannot be recovered.", "Only future costs and benefits should matter.", "Quitting is sometimes the most rational choice."],
    term: "Unrecoverable Cost",
    termDef: "An investment of money, time, or effort that has already been made and cannot be recovered.",
    implic: "You can trap yourself in a mistake just because you spent a long time making it."
  }
};

const templatesFR = {
  "IKEA Effect": {
    desc2: "L'effort nous rend aveugles à la qualité objective.",
    mech: "L'argument lie l'effort fourni à la valeur réelle du résultat.",
    bullets: ["L'effort et la valeur ne sont pas la même chose.", "Le construire soi-même crée un biais.", "Le travail acharné ne garantit pas un meilleur résultat."],
    term: "Justification de l'effort",
    termDef: "Accorder une valeur plus élevée à un résultat parce que vous y avez travaillé dur.",
    implic: "Vous pouvez surévaluer quelque chose simplement parce que vous en avez bavé."
  },
  "Ben Franklin Effect": {
    desc2: "Nous justifions nos actions en modifiant nos sentiments.",
    mech: "L'argument suppose que demander un service crée du ressentiment, alors que cela crée de l'affinité.",
    bullets: ["Rendre un service crée une dissonance cognitive.", "Nous aimons les gens que nous aidons, pour justifier de les avoir aidés.", "Les actions peuvent changer nos sentiments."],
    term: "Dissonance cognitive",
    termDef: "Inconfort mental lorsque les actions et les croyances ne correspondent pas, forçant les croyances à changer.",
    implic: "On peut se convaincre d'aimer quelqu'un juste parce qu'on lui a rendu service."
  },
  "Mere Exposure Effect": {
    desc2: "La familiarité est facilement confondue avec la préférence.",
    mech: "L'argument traite quelque chose de meilleur juste parce qu'il a été vu plus souvent.",
    bullets: ["La familiarité engendre le confort, pas la qualité.", "Répéter une mauvaise idée n'en fait pas une bonne.", "Nous préférons ce qui est facile à traiter."],
    term: "Fluidité de traitement",
    termDef: "La facilité avec laquelle l'information est traitée, souvent confondue avec la vérité.",
    implic: "Vous pourriez l'aimer uniquement parce que vous y êtes habitué."
  },
  "Spotlight Effect": {
    desc2: "Tout le monde est trop occupé à s'inquiéter pour soi-même.",
    mech: "L'argument exagère l'attention que les autres portent à un détail mineur.",
    bullets: ["Les gens sont surtout concentrés sur eux-mêmes.", "Vos erreurs sont invisibles pour la plupart des gens.", "Nous projetons notre propre gêne sur les autres."],
    term: "Égocentrisme",
    termDef: "L'incapacité de comprendre précisément comment les autres perçoivent une situation.",
    implic: "Personne ne vous observe d'aussi près que vous le pensez."
  },
  "Barnum Effect": {
    desc2: "Les déclarations vagues semblent spécifiques si vous le voulez bien.",
    mech: "L'argument traite une description générique comme si elle était faite sur mesure.",
    bullets: ["Les phrases génériques s'appliquent à presque tout le monde.", "Les gens bouchent les trous avec leurs propres détails.", "La validation personnelle nous rend crédules."],
    term: "Validation subjective",
    termDef: "Percevoir deux événements sans lien comme liés parce qu'une croyance personnelle l'exige.",
    implic: "Vous pouvez vous voir parfaitement dans un miroir fait pour tout le monde."
  },
  "Pareidolia": {
    desc2: "Notre cerveau est programmé pour voir des visages partout.",
    mech: "L'argument prend un motif visuel aléatoire et insiste sur le fait qu'il a une signification.",
    bullets: ["Le hasard crée souvent des formes familières.", "Voir un visage ne signifie pas que quelqu'un l'a mis là.", "Notre cerveau déteste l'absence de sens."],
    term: "Reconnaissance de formes",
    termDef: "Le processus cognitif qui associe l'information d'un stimulus à l'information en mémoire.",
    implic: "Vous pouvez trouver un message même quand personne ne parle."
  },
  "Apophenia": {
    desc2: "Relier les points quand il n'y a pas de points à relier.",
    mech: "L'argument trouve un modèle significatif dans des données complètement aléatoires.",
    bullets: ["Les coïncidences arrivent tout le temps.", "Trouver un modèle ne prouve pas un complot.", "Les données aléatoires auront toujours des grappes."],
    term: "Illusion des séries",
    termDef: "La tendance à considérer à tort les séries inévitables dans de petits échantillons comme significatives.",
    implic: "Votre cerveau inventera une histoire si vous fixez le hasard assez longtemps."
  },
  "Selection Bias": {
    desc2: "Ceux qu'on n'entend pas changent toute l'histoire.",
    mech: "L'argument tire une conclusion d'un échantillon qui ne représente pas le groupe entier.",
    bullets: ["Les données manquantes sont aussi importantes que les données visibles.", "Un échantillon biaisé garantit un résultat biaisé.", "Vous ne pouvez pas généraliser si le groupe a été trié sur le volet."],
    term: "Échantillon représentatif",
    termDef: "Un sous-ensemble d'une population qui reflète fidèlement les membres de la population entière.",
    implic: "Vous ne voyez que les gagnants, alors vous pensez qu'il est facile de gagner."
  },
  "Data Dredging": {
    desc2: "Si vous torturez les données assez longtemps, elles avoueront.",
    mech: "L'argument teste de nombreuses hypothèses et ne rapporte que celle qui semble fonctionner par hasard.",
    bullets: ["Chercher assez fort garantit de trouver une coïncidence.", "L'hypothèse doit être choisie avant le test.", "Le dragage de données crée de fausses avancées scientifiques."],
    term: "P-hacking",
    termDef: "L'utilisation abusive de l'analyse de données pour trouver des modèles présentables comme statistiquement significatifs.",
    implic: "Vous pouvez prouver n'importe quoi si vous cachez toutes les expériences ratées."
  },
  "Wrong Direction": {
    desc2: "Confondre la maladie avec le remède.",
    mech: "L'argument voit une corrélation et inverse la cause et l'effet.",
    bullets: ["Deux choses qui arrivent ensemble ne signifient pas que A cause B ; B pourrait causer A.", "La direction du temps et de la cause doit être prouvée.", "Inverser la flèche mène à des solutions désastreuses."],
    term: "Causalité inverse",
    termDef: "Une situation où l'effet est identifié à tort comme la cause.",
    implic: "Vous pourriez finir par interdire les parapluies pour arrêter la pluie."
  },
  "Sunk Cost Fallacy": {
    desc2: "Jeter de l'argent par les fenêtres.",
    mech: "L'argument utilise des investissements passés irrécupérables pour justifier des dépenses futures irrationnelles.",
    bullets: ["Les coûts passés ne peuvent pas être récupérés.", "Seuls les coûts et avantages futurs devraient compter.", "Abandonner est parfois le choix le plus rationnel."],
    term: "Coût irrécupérable",
    termDef: "Un investissement en argent, en temps ou en efforts qui a déjà été fait et ne peut pas être récupéré.",
    implic: "Vous pouvez vous enfermer dans une erreur simplement parce que vous avez mis longtemps à la faire."
  }
};

function buildEn(q) {
  const name = q.options[q.correct];
  const t = templatesEN[name] || {
    desc2: "A run of success does not change random odds by itself.",
    mech: "The argument uses the surface clue as if it were enough to settle the claim.",
    bullets: ["It is easy to mistake this surface trait.", "A few instances do not guarantee the rule.", "People notice runs and forget the baseline odds."],
    term: "Concept",
    termDef: "A general pattern that may still be random.",
    implic: "You can confuse appearance with reality."
  };
  const exQ = extractScenario(q.question);
  
  const detail = `${name}

Description:
${q.explanation}
${t.desc2}

Example (question)
« ${exQ} »
This is the exact kind of move the question is testing.

Example (everyday)
${t.mech}
The same logic shows up even when the surface story changes.

How it works
The argument uses the surface clue as if it were enough to settle the claim.

So:
- ${t.bullets[0]}
- ${t.bullets[1]}
- ${t.bullets[2]}

Key concept inside it
${t.term}:
${t.termDef}

Why it matters
Explains why:
- ${t.bullets[0]}
- ${t.bullets[1]}
- ${t.bullets[2]}

The uncomfortable implication
${t.implic}

One-line version
${name} = ${q.explanation}`;

  const beginner = `${name} = ${q.explanation}`;
  
  return { beginner, detail };
}

function buildFr(q) {
  const name = q.options[q.correct];
  const t = templatesFR[name] || {
    desc2: "Une série de succès ne change pas les probabilités aléatoires en soi.",
    mech: "L'argument utilise l'indice de surface comme s'il suffisait à régler la question.",
    bullets: ["Il est facile de se méprendre sur ce trait de surface.", "Quelques instances ne garantissent pas la règle.", "Les gens remarquent les séries et oublient les probabilités de base."],
    term: "Concept",
    termDef: "Un modèle général qui peut encore être aléatoire.",
    implic: "Vous pouvez confondre l'apparence avec la réalité."
  };
  const exQ = extractScenario(q.question);
  
  const detail = `${name}

Description :
${q.explanation}
${t.desc2}

Exemple (question)
« ${exQ} »
C'est exactement le genre de mécanisme que la question teste.

Exemple (quotidien)
${t.mech}
La même logique apparaît même lorsque l'histoire change.

Comment ça fonctionne
L'argument utilise l'indice de surface comme s'il suffisait à régler la question.

Donc :
- ${t.bullets[0]}
- ${t.bullets[1]}
- ${t.bullets[2]}

Concept clé
${t.term} :
${t.termDef}

Pourquoi c'est important
Explique pourquoi :
- ${t.bullets[0]}
- ${t.bullets[1]}
- ${t.bullets[2]}

L'implication inconfortable
${t.implic}

En une phrase
${name} = ${q.explanation}`;

  const beginner = `${name} = ${q.explanation}`;
  
  return { beginner, detail };
}

let code = fs.readFileSync(outPath, 'utf8');

for (let id = 201; id <= 230; id++) {
  const eb = extractBlock(enSection, id);
  const fb = extractBlock(frSection, id);
  if (!eb || !fb) continue;
  
  const enQ = parseFallacyBlock(eb);
  const frQ = parseFallacyBlock(fb);
  
  const en = buildEn(enQ);
  const fr = buildFr(frQ);
  
  const regex = new RegExp(`  ${id}: \\{\\s*beginner: \`[\\s\\S]*?\\n    expert: \`[\\s\\S]*?\\n  \\},`, 'g');
  let matchCount = 0;
  code = code.replace(regex, (match) => {
    matchCount++;
    if (matchCount === 1) {
      return `  ${id}: {\n    beginner: \`${tsEscape(en.beginner)}\`,\n    detail: \`${tsEscape(en.detail)}\`,\n  },`;
    } else if (matchCount === 2) {
      return `  ${id}: {\n    beginner: \`${tsEscape(fr.beginner)}\`,\n    detail: \`${tsEscape(fr.detail)}\`,\n  },`;
    }
    return match;
  });
}

// Write the modified code
fs.writeFileSync(outPath, code);
console.log('Updated 201-230 in level2to10StandaloneInDepth.ts');
