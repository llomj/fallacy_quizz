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
  "Sunk Cost Fallacy": {
    desc2: "Throwing good money after bad.",
    mech: "The argument uses past, unrecoverable investments to justify future, irrational spending.",
    bullets: ["Past costs cannot be recovered.", "Only future costs and benefits should matter.", "Quitting is sometimes the most rational choice."],
    term: "Unrecoverable Cost",
    termDef: "An investment of money, time, or effort that has already been made and cannot be recovered.",
    implic: "You can trap yourself in a mistake just because you spent a long time making it."
  },
  "Gambler's Fallacy": {
    desc2: "The universe doesn't have a memory.",
    mech: "The argument assumes that a streak in a random process changes the odds of the next event.",
    bullets: ["Past random events do not affect future random events.", "The odds reset every time.", "A long streak of bad luck does not mean you are 'due' for a win."],
    term: "Independent Events",
    termDef: "Events where the outcome of one does not affect the outcome of the other.",
    implic: "You can lose all your money waiting for the universe to balance the scales."
  },
  "Base Rate Neglect": {
    desc2: "Ignoring the background reality.",
    mech: "The argument focuses on specific new information and ignores the general statistical probability.",
    bullets: ["Specific details are usually less important than the overall odds.", "Rarity is a better predictor than a match in description.", "We prefer a good story over boring statistics."],
    term: "Base Rate",
    termDef: "The naturally occurring frequency of a phenomenon in a population.",
    implic: "You can be easily fooled by a specific description into ignoring the most likely truth."
  },
  "Clustering Illusion": {
    desc2: "Seeing patterns in the static.",
    mech: "The argument perceives an inevitable cluster in a small random sample as a meaningful pattern.",
    bullets: ["Randomness does not mean evenly spaced.", "Small samples will always have clumps.", "Our brains are desperate for order."],
    term: "Sample Size",
    termDef: "The number of observations in a sample, which must be large enough to show true randomness.",
    implic: "You will find a 'pattern' in absolutely anything if you look at a small enough piece."
  },
  "Hindsight Bias": {
    desc2: "The illusion of knowing it all along.",
    mech: "The argument assumes an outcome was predictable after it has already occurred.",
    bullets: ["The past always looks inevitable in the rearview mirror.", "We rewrite our memory of our own predictions.", "It is easy to explain a surprise after the fact."],
    term: "Determinism",
    termDef: "The philosophical idea that all events, including moral choices, are determined completely by previously existing causes.",
    implic: "You can convince yourself you are a genius forecaster when you actually just have a good memory."
  },
  "Primacy Effect": {
    desc2: "First impressions hold unfair weight.",
    mech: "The argument places excessive importance on the first piece of information received.",
    bullets: ["The first thing we hear sets the anchor.", "Later information is judged against the first.", "We are lazy and stop updating our beliefs."],
    term: "Anchoring",
    termDef: "The common human tendency to rely too heavily on the first piece of information offered.",
    implic: "Whoever speaks first often wins the argument, even if they are wrong."
  },
  "Recency Effect": {
    desc2: "The last thing you heard is the loudest.",
    mech: "The argument places excessive importance on the most recent piece of information received.",
    bullets: ["Recent events are easier to recall.", "We confuse ease of recall with importance.", "Long-term trends are ignored for short-term noise."],
    term: "Availability Heuristic",
    termDef: "A mental shortcut that relies on immediate examples that come to a given person's mind.",
    implic: "You can forget years of history just because of what happened yesterday."
  },
  "Scarcity Effect": {
    desc2: "Valuing things just because they are rare.",
    mech: "The argument assumes something is high quality or necessary simply because it is in short supply.",
    bullets: ["Rarity does not equal quality.", "Fear of missing out drives irrational choices.", "Artificial limits manipulate our desires."],
    term: "Loss Aversion",
    termDef: "The psychological preference for avoiding losses over acquiring equivalent gains.",
    implic: "You can be manipulated into wanting something you don't need just by being told you can't have it."
  },
  "False Memories": {
    desc2: "Your brain is a storyteller, not a video camera.",
    mech: "The argument relies on a recollection that has been altered or entirely fabricated by the mind.",
    bullets: ["Memories are reconstructed every time we recall them.", "Suggestion can plant fake events in our minds.", "Confidence in a memory does not mean it is true."],
    term: "Confabulation",
    termDef: "The unintended false recollection of episodic memories.",
    implic: "You can vividly remember something that never happened."
  },
  "Triviality Effect": {
    desc2: "Bikeshedding the small stuff.",
    mech: "The argument wastes disproportionate time and energy on minor details while ignoring major issues.",
    bullets: ["People focus on what they understand, not what is important.", "Complex problems are avoided because they are hard.", "Minor issues generate the most debate."],
    term: "Parkinson's Law of Triviality",
    termDef: "The tendency of organizations to give disproportionate weight to trivial issues.",
    implic: "You can spend hours arguing over the color of the bike shed while the nuclear reactor melts down."
  },
  "Sayre's Law": {
    desc2: "The smaller the stakes, the fiercer the fight.",
    mech: "The argument generates intense emotional conflict over an issue of minimal practical importance.",
    bullets: ["Intensity of debate is inversely proportional to the actual consequences.", "Ego drives arguments when nothing else is at stake.", "Academic disputes are the bitterest."],
    term: "Zero-sum Game",
    termDef: "A mathematical representation of a situation in which each participant's gain or loss of utility is exactly balanced by the losses or gains of the utility of the other participants.",
    implic: "You will fight the hardest when you have the least to gain."
  }
};

const templatesFR = {
  "Sunk Cost Fallacy": {
    desc2: "Jeter de l'argent par les fenêtres.",
    mech: "L'argument utilise des investissements passés irrécupérables pour justifier des dépenses futures irrationnelles.",
    bullets: ["Les coûts passés ne peuvent pas être récupérés.", "Seuls les coûts et avantages futurs devraient compter.", "Abandonner est parfois le choix le plus rationnel."],
    term: "Coût irrécupérable",
    termDef: "Un investissement en argent, en temps ou en efforts qui a déjà été fait et ne peut pas être récupéré.",
    implic: "Vous pouvez vous enfermer dans une erreur simplement parce que vous avez mis longtemps à la faire."
  },
  "Gambler's Fallacy": {
    desc2: "L'univers n'a pas de mémoire.",
    mech: "L'argument suppose qu'une série dans un processus aléatoire modifie les probabilités de l'événement suivant.",
    bullets: ["Les événements aléatoires passés n'affectent pas les événements aléatoires futurs.", "Les probabilités se réinitialisent à chaque fois.", "Une longue série de malchance ne signifie pas que vous êtes 'dû' pour une victoire."],
    term: "Événements indépendants",
    termDef: "Des événements où le résultat de l'un n'affecte pas le résultat de l'autre.",
    implic: "Vous pouvez perdre tout votre argent en attendant que l'univers équilibre la balance."
  },
  "Base Rate Neglect": {
    desc2: "Ignorer la réalité de base.",
    mech: "L'argument se concentre sur de nouvelles informations spécifiques et ignore la probabilité statistique générale.",
    bullets: ["Les détails spécifiques sont généralement moins importants que les probabilités globales.", "La rareté est un meilleur prédicteur qu'une correspondance de description.", "Nous préférons une bonne histoire aux statistiques ennuyeuses."],
    term: "Taux de base",
    termDef: "La fréquence naturelle d'un phénomène dans une population.",
    implic: "Vous pouvez être facilement trompé par une description spécifique et ignorer la vérité la plus probable."
  },
  "Clustering Illusion": {
    desc2: "Voir des motifs dans le bruit de fond.",
    mech: "L'argument perçoit une grappe inévitable dans un petit échantillon aléatoire comme un motif significatif.",
    bullets: ["Aléatoire ne veut pas dire espacé uniformément.", "Les petits échantillons auront toujours des amas.", "Notre cerveau a désespérément besoin d'ordre."],
    term: "Taille de l'échantillon",
    termDef: "Le nombre d'observations dans un échantillon, qui doit être assez grand pour montrer le véritable hasard.",
    implic: "Vous trouverez un 'motif' dans absolument n'importe quoi si vous regardez un morceau assez petit."
  },
  "Hindsight Bias": {
    desc2: "L'illusion de l'avoir toujours su.",
    mech: "L'argument suppose qu'un résultat était prévisible après qu'il se soit déjà produit.",
    bullets: ["Le passé semble toujours inévitable dans le rétroviseur.", "Nous réécrivons notre mémoire de nos propres prédictions.", "Il est facile d'expliquer une surprise après coup."],
    term: "Déterminisme",
    termDef: "L'idée philosophique selon laquelle tous les événements sont entièrement déterminés par des causes antérieures.",
    implic: "Vous pouvez vous convaincre d'être un génie de la prévision alors que vous avez juste une bonne mémoire."
  },
  "Primacy Effect": {
    desc2: "Les premières impressions ont un poids injuste.",
    mech: "L'argument accorde une importance excessive à la première information reçue.",
    bullets: ["La première chose que nous entendons sert d'ancrage.", "Les informations ultérieures sont jugées par rapport à la première.", "Nous sommes paresseux et arrêtons de mettre à jour nos croyances."],
    term: "Ancrage",
    termDef: "La tendance humaine à s'appuyer trop lourdement sur la première information offerte.",
    implic: "Celui qui parle en premier gagne souvent la dispute, même s'il a tort."
  },
  "Recency Effect": {
    desc2: "La dernière chose que vous avez entendue est la plus forte.",
    mech: "L'argument accorde une importance excessive à l'information reçue le plus récemment.",
    bullets: ["Les événements récents sont plus faciles à retenir.", "Nous confondons la facilité de rappel avec l'importance.", "Les tendances à long terme sont ignorées au profit du bruit à court terme."],
    term: "Heuristique de disponibilité",
    termDef: "Un raccourci mental qui s'appuie sur les exemples immédiats qui viennent à l'esprit d'une personne.",
    implic: "Vous pouvez oublier des années d'histoire juste à cause de ce qui s'est passé hier."
  },
  "Scarcity Effect": {
    desc2: "Valoriser les choses juste parce qu'elles sont rares.",
    mech: "L'argument suppose que quelque chose est de haute qualité ou nécessaire simplement parce qu'il est en pénurie.",
    bullets: ["La rareté n'égale pas la qualité.", "La peur de rater quelque chose pousse à des choix irrationnels.", "Les limites artificielles manipulent nos désirs."],
    term: "Aversion à la perte",
    termDef: "La préférence psychologique pour éviter les pertes plutôt que d'acquérir des gains équivalents.",
    implic: "On peut vous manipuler pour vouloir quelque chose dont vous n'avez pas besoin juste en vous disant que vous ne pouvez pas l'avoir."
  },
  "False Memories": {
    desc2: "Votre cerveau est un conteur, pas une caméra vidéo.",
    mech: "L'argument repose sur un souvenir qui a été altéré ou entièrement fabriqué par l'esprit.",
    bullets: ["Les souvenirs sont reconstruits à chaque fois que nous les rappelons.", "La suggestion peut planter de faux événements dans nos esprits.", "La certitude d'un souvenir ne signifie pas qu'il est vrai."],
    term: "Confabulation",
    termDef: "Le faux souvenir involontaire d'événements épisodiques.",
    implic: "Vous pouvez vous souvenir de façon très claire de quelque chose qui n'est jamais arrivé."
  },
  "Triviality Effect": {
    desc2: "Se perdre dans les détails insignifiants.",
    mech: "L'argument gaspille un temps et une énergie disproportionnés sur des détails mineurs tout en ignorant les problèmes majeurs.",
    bullets: ["Les gens se concentrent sur ce qu'ils comprennent, pas sur ce qui est important.", "Les problèmes complexes sont évités parce qu'ils sont difficiles.", "Les problèmes mineurs génèrent le plus de débats."],
    term: "Loi de futilité de Parkinson",
    termDef: "La tendance des organisations à accorder un poids disproportionné à des questions futiles.",
    implic: "Vous pouvez passer des heures à débattre de la couleur du garage à vélos pendant que le réacteur nucléaire fond."
  },
  "Sayre's Law": {
    desc2: "Plus l'enjeu est petit, plus le combat est féroce.",
    mech: "L'argument génère un conflit émotionnel intense sur une question d'importance pratique minimale.",
    bullets: ["L'intensité du débat est inversement proportionnelle aux conséquences réelles.", "L'ego alimente les disputes quand il n'y a rien d'autre en jeu.", "Les querelles académiques sont les plus amères."],
    term: "Jeu à somme nulle",
    termDef: "Une situation où le gain ou la perte de chaque participant est exactement équilibré par les pertes ou les gains des autres.",
    implic: "Vous vous battrez le plus fort quand vous avez le moins à y gagner."
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

for (let id = 231; id <= 260; id++) {
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
console.log('Updated 231-260 in level2to10StandaloneInDepth.ts');
