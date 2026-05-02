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
  "Sayre's Law": {
    desc2: "The smaller the stakes, the fiercer the fight.",
    mech: "The argument generates intense emotional conflict over an issue of minimal practical importance.",
    bullets: ["Intensity of debate is inversely proportional to the actual consequences.", "Ego drives arguments when nothing else is at stake.", "Academic disputes are the bitterest."],
    term: "Zero-sum Game",
    termDef: "A mathematical representation of a situation in which each participant's gain or loss of utility is exactly balanced by the losses or gains of the utility of the other participants.",
    implic: "You will fight the hardest when you have the least to gain."
  },
  "Sturgeon's Law": {
    desc2: "Ninety percent of everything is crap.",
    mech: "The argument dismisses an entire field or medium because the majority of it is low quality.",
    bullets: ["Most things in any category are not good.", "The existence of bad examples does not disprove the good ones.", "Judging a whole group by its average misses the peak."],
    term: "Hasty Generalization",
    termDef: "Drawing a broad conclusion from a small or unrepresentative sample.",
    implic: "You will miss out on the best of everything if you only look at the average."
  },
  "Hanlon's Razor": {
    desc2: "Never attribute to malice what is adequately explained by stupidity.",
    mech: "The argument assumes an intentional conspiracy when incompetence or accident is the more likely cause.",
    bullets: ["People are more often clumsy than evil.", "Complex conspiracies are hard to pull off.", "Mistakes are a universal human constant."],
    term: "Paranoia",
    termDef: "The unjustified suspicion that others are acting with malicious intent.",
    implic: "You will see enemies everywhere if you forget how often people just mess up."
  },
  "Occam's Razor Fallacy": {
    desc2: "Simplest isn't always truest.",
    mech: "The argument demands the simplest explanation be accepted, even when the evidence points to a more complex reality.",
    bullets: ["Occam's Razor is a rule of thumb, not a law of physics.", "Complex systems often have complex causes.", "Ignoring evidence just to keep things simple is intellectually lazy."],
    term: "Oversimplification",
    termDef: "Treating a complex issue as if it were much simpler than it is.",
    implic: "You can be completely wrong just by trying to be too neat and tidy."
  },
  "Hitchens's Razor": {
    desc2: "What can be asserted without evidence can be dismissed without evidence.",
    mech: "The argument demands you disprove a wild claim that was never supported by proof in the first place.",
    bullets: ["The burden of proof is on the person making the claim.", "You do not have to waste time debunking baseless assertions.", "A claim with no backing has no weight."],
    term: "Burden of Proof",
    termDef: "The obligation to provide evidence to support one's claim.",
    implic: "You will waste your life fighting ghosts if you try to disprove every baseless rumor."
  },
  "Gish Gallop": {
    desc2: "Drowning the opponent in garbage.",
    mech: "The argument overwhelms the opponent with a rapid series of weak or false claims, making it impossible to refute them all.",
    bullets: ["It takes ten times longer to debunk a lie than to tell it.", "Quantity of arguments does not equal quality.", "The goal is exhaustion, not truth."],
    term: "Firehose of Falsehood",
    termDef: "A propaganda technique that relies on broadcasting a massive volume of lies rapidly and continuously.",
    implic: "A liar can always invent falsehoods faster than you can check the facts."
  },
  "Brandolini's Law": {
    desc2: "The bullshit asymmetry principle.",
    mech: "The argument exploits the fact that it takes vastly more energy to refute nonsense than to produce it.",
    bullets: ["Creating garbage is cheap; cleaning it up is expensive.", "A quick lie requires a long, boring correction.", "The person making the mess has the advantage."],
    term: "Asymmetry",
    termDef: "A lack of equivalence or symmetry between two sides of a situation.",
    implic: "You are at an inherent disadvantage when arguing with someone who doesn't care about the truth."
  },
  "Kettle Logic": {
    desc2: "Throwing every excuse at the wall.",
    mech: "The argument uses multiple, mutually inconsistent arguments to defend a single point.",
    bullets: ["If you have one good excuse, you don't need five bad ones.", "Contradictory defenses prove you are just making things up.", "A scattershot defense is a sign of guilt."],
    term: "Inconsistency",
    termDef: "The state of containing contradictory elements or lacking logical coherence.",
    implic: "You look more guilty the more different excuses you give."
  },
  "Moving the Goalposts": {
    desc2: "Changing the rules when you're losing.",
    mech: "The argument arbitrarily changes the criteria for proof or success once the original criteria have been met.",
    bullets: ["You can never win if the finish line keeps moving.", "It is a desperate tactic to avoid admitting defeat.", "The arguer never actually cared about the original evidence."],
    term: "Special Pleading",
    termDef: "Introducing new, unstated criteria or exceptions to save a claim that has been falsified.",
    implic: "You can waste your whole life trying to satisfy someone who has no intention of ever agreeing with you."
  },
  "Etymological Fallacy": {
    desc2: "Words are not their history.",
    mech: "The argument assumes that the original or historical meaning of a word is its true or correct meaning today.",
    bullets: ["Language evolves over time.", "Current usage determines meaning, not ancient roots.", "A word's history is interesting, but not an argument."],
    term: "Semantic Drift",
    termDef: "The gradual evolution of word meanings over time.",
    implic: "You can completely misunderstand someone by obsessing over a dictionary from three centuries ago."
  },
  "Amphiboly": {
    desc2: "The trap of bad grammar.",
    mech: "The argument relies on a sentence that can be interpreted in multiple ways due to poor sentence structure.",
    bullets: ["Ambiguity allows the speaker to dodge commitment.", "A missing comma can change the whole meaning.", "It forces the listener to guess the intent."],
    term: "Syntactic Ambiguity",
    termDef: "The presence of two or more possible meanings within a single sentence or sequence of words.",
    implic: "You can be tricked into agreeing to something you didn't understand."
  }
};

const templatesFR = {
  "Sayre's Law": {
    desc2: "Plus l'enjeu est petit, plus le combat est féroce.",
    mech: "L'argument génère un conflit émotionnel intense sur une question d'importance pratique minimale.",
    bullets: ["L'intensité du débat est inversement proportionnelle aux conséquences réelles.", "L'ego alimente les disputes quand il n'y a rien d'autre en jeu.", "Les querelles académiques sont les plus amères."],
    term: "Jeu à somme nulle",
    termDef: "Une situation où le gain ou la perte de chaque participant est exactement équilibré par les pertes ou les gains des autres.",
    implic: "Vous vous battrez le plus fort quand vous avez le moins à y gagner."
  },
  "Sturgeon's Law": {
    desc2: "Quatre-vingt-dix pour cent de tout est nul.",
    mech: "L'argument rejette un domaine entier ou un média parce que la majorité de celui-ci est de mauvaise qualité.",
    bullets: ["La plupart des choses dans n'importe quelle catégorie ne sont pas bonnes.", "L'existence de mauvais exemples ne réfute pas les bons.", "Juger un groupe entier par sa moyenne fait rater le sommet."],
    term: "Généralisation hâtive",
    termDef: "Tirer une conclusion large à partir d'un échantillon petit ou non représentatif.",
    implic: "Vous raterez le meilleur de tout si vous ne regardez que la moyenne."
  },
  "Hanlon's Razor": {
    desc2: "Ne jamais attribuer à la malveillance ce qui s'explique adéquatement par la bêtise.",
    mech: "L'argument suppose un complot intentionnel quand l'incompétence ou l'accident est la cause la plus probable.",
    bullets: ["Les gens sont plus souvent maladroits que méchants.", "Les complots complexes sont difficiles à réaliser.", "Les erreurs sont une constante humaine universelle."],
    term: "Paranoïa",
    termDef: "Le soupçon injustifié que les autres agissent avec des intentions malveillantes.",
    implic: "Vous verrez des ennemis partout si vous oubliez à quelle fréquence les gens font simplement des erreurs."
  },
  "Occam's Razor Fallacy": {
    desc2: "Le plus simple n'est pas toujours le plus vrai.",
    mech: "L'argument exige que l'explication la plus simple soit acceptée, même lorsque les preuves pointent vers une réalité plus complexe.",
    bullets: ["Le rasoir d'Ockham est une règle empirique, pas une loi de la physique.", "Les systèmes complexes ont souvent des causes complexes.", "Ignorer les preuves juste pour garder les choses simples est de la paresse intellectuelle."],
    term: "Sur-simplification",
    termDef: "Traiter un problème complexe comme s'il était beaucoup plus simple qu'il ne l'est.",
    implic: "Vous pouvez avoir complètement tort juste en essayant d'être trop ordonné."
  },
  "Hitchens's Razor": {
    desc2: "Ce qui peut être affirmé sans preuve peut être rejeté sans preuve.",
    mech: "L'argument exige que vous réfutiez une affirmation folle qui n'a jamais été étayée par des preuves en premier lieu.",
    bullets: ["La charge de la preuve incombe à la personne qui fait l'affirmation.", "Vous n'avez pas à perdre de temps à démystifier des affirmations sans fondement.", "Une affirmation sans fondement n'a aucun poids."],
    term: "Charge de la preuve",
    termDef: "L'obligation de fournir des preuves pour étayer son affirmation.",
    implic: "Vous perdrez votre vie à combattre des fantômes si vous essayez de réfuter chaque rumeur infondée."
  },
  "Gish Gallop": {
    desc2: "Noyer l'adversaire sous les déchets.",
    mech: "L'argument submerge l'adversaire d'une série rapide d'affirmations faibles ou fausses, rendant impossible de toutes les réfuter.",
    bullets: ["Il faut dix fois plus de temps pour démystifier un mensonge que pour le dire.", "La quantité d'arguments n'égale pas la qualité.", "Le but est l'épuisement, pas la vérité."],
    term: "Lance à incendie de faussetés",
    termDef: "Une technique de propagande qui repose sur la diffusion rapide et continue d'un volume massif de mensonges.",
    implic: "Un menteur peut toujours inventer des faussetés plus vite que vous ne pouvez vérifier les faits."
  },
  "Brandolini's Law": {
    desc2: "Le principe d'asymétrie des conneries.",
    mech: "L'argument exploite le fait qu'il faut beaucoup plus d'énergie pour réfuter des absurdités que pour les produire.",
    bullets: ["Créer des déchets est bon marché ; les nettoyer coûte cher.", "Un mensonge rapide nécessite une correction longue et ennuyeuse.", "Celui qui fait le désordre a l'avantage."],
    term: "Asymétrie",
    termDef: "Une absence d'équivalence ou de symétrie entre deux côtés d'une situation.",
    implic: "Vous êtes intrinsèquement désavantagé lorsque vous discutez avec quelqu'un qui se fiche de la vérité."
  },
  "Kettle Logic": {
    desc2: "Jeter toutes les excuses contre le mur.",
    mech: "L'argument utilise de multiples arguments mutuellement incompatibles pour défendre un seul point.",
    bullets: ["Si vous avez une bonne excuse, vous n'en avez pas besoin de cinq mauvaises.", "Des défenses contradictoires prouvent que vous inventez des choses.", "Une défense dispersée est un signe de culpabilité."],
    term: "Incohérence",
    termDef: "L'état de contenir des éléments contradictoires ou de manquer de cohérence logique.",
    implic: "Vous paraissez d'autant plus coupable que vous donnez d'excuses différentes."
  },
  "Moving the Goalposts": {
    desc2: "Changer les règles quand on perd.",
    mech: "L'argument modifie arbitrairement les critères de preuve ou de succès une fois que les critères originaux ont été satisfaits.",
    bullets: ["Vous ne pouvez jamais gagner si la ligne d'arrivée n'arrête pas de bouger.", "C'est une tactique désespérée pour éviter d'admettre la défaite.", "L'argumentateur ne s'est jamais vraiment soucié des preuves originales."],
    term: "Plaidoyer spécial",
    termDef: "Introduire de nouveaux critères ou exceptions non formulés pour sauver une affirmation qui a été falsifiée.",
    implic: "Vous pouvez perdre toute votre vie à essayer de satisfaire quelqu'un qui n'a aucune intention d'être jamais d'accord avec vous."
  },
  "Etymological Fallacy": {
    desc2: "Les mots ne sont pas leur histoire.",
    mech: "L'argument suppose que la signification originale ou historique d'un mot est sa signification vraie ou correcte aujourd'hui.",
    bullets: ["Le langage évolue avec le temps.", "C'est l'usage actuel qui détermine le sens, pas les racines anciennes.", "L'histoire d'un mot est intéressante, mais ce n'est pas un argument."],
    term: "Glissement sémantique",
    termDef: "L'évolution progressive de la signification des mots au fil du temps.",
    implic: "Vous pouvez complètement mal comprendre quelqu'un en faisant une obsession sur un dictionnaire vieux de trois siècles."
  },
  "Amphiboly": {
    desc2: "Le piège de la mauvaise grammaire.",
    mech: "L'argument repose sur une phrase qui peut être interprétée de plusieurs façons en raison d'une mauvaise structure grammaticale.",
    bullets: ["L'ambiguïté permet à l'orateur d'esquiver tout engagement.", "Une virgule manquante peut changer tout le sens.", "Cela force l'auditeur à deviner l'intention."],
    term: "Ambiguïté syntaxique",
    termDef: "La présence de deux sens possibles ou plus dans une seule phrase ou séquence de mots.",
    implic: "Vous pouvez être amené à accepter quelque chose que vous n'aviez pas compris."
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

for (let id = 261; id <= 290; id++) {
  const eb = extractBlock(enSection, id);
  const fb = extractBlock(frSection, id);
  if (!eb || !fb) continue;
  
  const enQ = parseFallacyBlock(eb);
  const frQ = parseFallacyBlock(fb);
  
  const en = buildEn(enQ);
  const fr = buildFr(frQ);
  
  // Notice we now match `expert:` because these haven't been replaced yet
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

fs.writeFileSync(outPath, code);
console.log('Updated 261-290 in level2to10StandaloneInDepth.ts');
