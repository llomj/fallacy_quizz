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
  "Amphiboly": {
    desc2: "The trap of bad grammar.",
    mech: "The argument relies on a sentence that can be interpreted in multiple ways due to poor sentence structure.",
    bullets: ["Ambiguity allows the speaker to dodge commitment.", "A missing comma can change the whole meaning.", "It forces the listener to guess the intent."],
    term: "Syntactic Ambiguity",
    termDef: "The presence of two or more possible meanings within a single sentence or sequence of words.",
    implic: "You can be tricked into agreeing to something you didn't understand."
  },
  "Proof by Assertion": {
    desc2: "Saying it over and over doesn't make it true.",
    mech: "The argument tries to win not by offering evidence, but by simply repeating the claim until the opponent gives up.",
    bullets: ["Repetition is a tactic of exhaustion, not logic.", "Familiarity can be mistaken for truth.", "A lie told a thousand times is still a lie."],
    term: "Ad Nauseam",
    termDef: "Repeating an assertion until everyone is sick of hearing it, bypassing the need for proof.",
    implic: "You can brainwash yourself and others just by repeating the same baseless claim."
  },
  "Vacuous Truth": {
    desc2: "Technically true, practically useless.",
    mech: "The argument makes a claim about an empty set or a situation that doesn't exist, which makes the statement logically true but entirely meaningless.",
    bullets: ["A statement about 'all unicorns' is always true because there are no unicorns.", "It creates the illusion of providing information.", "It is a logic trick used to sound correct without taking any real stance."],
    term: "Empty Set",
    termDef: "A category or group that contains no items or members.",
    implic: "You can win an argument by saying something that is logically undeniable but completely irrelevant."
  },
  "Ecological Fallacy": {
    desc2: "Groups aren't individuals.",
    mech: "The argument assumes that an individual has the exact characteristics of the statistical average of the group they belong to.",
    bullets: ["Averages hide individual differences.", "A wealthy country still has poor citizens.", "Applying group statistics to one person is mathematically invalid."],
    term: "Aggregation Bias",
    termDef: "The false assumption that what is true for the whole must be true for all of its parts.",
    implic: "You will misjudge almost everyone if you treat them like the statistical average of their demographic."
  },
  "Choice-Supportive Bias": {
    desc2: "Defending a bad choice just because you made it.",
    mech: "The argument retroactively inflates the positive aspects of a decision and downplays the negatives solely to justify having made the choice.",
    bullets: ["We rewrite history to protect our ego.", "Buyers convince themselves a bad purchase was actually a great deal.", "It prevents us from learning from mistakes."],
    term: "Post-purchase Rationalization",
    termDef: "A cognitive bias whereby someone who has purchased an expensive product overlooks its faults to justify their decision.",
    implic: "You will keep making bad decisions if you spend all your energy pretending they were good ones."
  },
  "Consistency Bias": {
    desc2: "Pretending you always felt this way.",
    mech: "The argument relies on the false belief that one's past attitudes, beliefs, or behaviors were the same as one's current ones.",
    bullets: ["Memory is constantly overwritten by the present.", "People genuinely forget that they used to disagree with themselves.", "It creates an illusion of personal infallibility."],
    term: "Hindsight Memory",
    termDef: "The distortion of memory to make past beliefs match current reality.",
    implic: "You will judge others harshly for changing their minds because you've forgotten that you changed yours."
  },
  "Cryptomnesia": {
    desc2: "Plagiarism by accident.",
    mech: "The argument presents an idea or memory as original, when in reality it is a forgotten memory of someone else's idea.",
    bullets: ["The brain remembers the idea but forgets the source.", "It leads to unintentional plagiarism.", "It feels exactly like a stroke of original genius."],
    term: "Source Amnesia",
    termDef: "The inability to remember where, when, or how previously learned information was acquired.",
    implic: "Your most brilliant, original idea might just be something you read on Twitter three years ago."
  },
  "Egocentric Bias": {
    desc2: "Thinking you are the main character of the universe.",
    mech: "The argument overestimates the degree to which one's own perspective, actions, or feelings are the center of events or noticed by others.",
    bullets: ["Most people are thinking about themselves, not about you.", "We overestimate our contribution to group efforts.", "It makes us think our personal experience is the universal rule."],
    term: "Spotlight Effect",
    termDef: "The phenomenon where people tend to believe they are being noticed more than they really are.",
    implic: "You will suffer immense anxiety worrying about judgments that nobody is actually making."
  },
  "False Consensus Effect": {
    desc2: "Assuming everyone agrees with you.",
    mech: "The argument assumes that one's own opinions, beliefs, and values are normal and shared by the majority of people.",
    bullets: ["We surround ourselves with people who think like us.", "It makes opposing views seem not just wrong, but bizarre or fringe.", "It destroys the ability to understand different perspectives."],
    term: "Echo Chamber",
    termDef: "An environment where a person only encounters information or opinions that reflect and reinforce their own.",
    implic: "You will be constantly shocked by reality because you assume your bubble is the whole world."
  },
  "Focusing Illusion": {
    desc2: "Nothing is as important as what you are thinking about right now.",
    mech: "The argument drastically overestimates the importance of one specific factor while ignoring all other context.",
    bullets: ["If you focus entirely on money, you think money is the only thing that causes happiness.", "It creates tunnel vision in decision making.", "It exaggerates the impact of whatever is currently grabbing your attention."],
    term: "Anchoring",
    termDef: "The human tendency to rely too heavily on the first piece of information offered or focused upon.",
    implic: "You will make terrible life choices if you let one single factor blind you to the big picture."
  },
  "Frequency Illusion": {
    desc2: "Now that you noticed it, it's everywhere.",
    mech: "The argument claims a sudden, massive increase in a phenomenon, when in reality the person has just recently learned to notice it.",
    bullets: ["Also known as the Baader-Meinhof phenomenon.", "Your brain starts filtering *for* it instead of filtering it *out*.", "It feels like a conspiracy or a sudden trend."],
    term: "Selective Attention",
    termDef: "The process of focusing on a particular object in the environment for a certain period of time while ignoring competing stimuli.",
    implic: "You will mistake your own sudden awareness for a sudden change in the world."
  }
};

const templatesFR = {
  "Amphiboly": {
    desc2: "Le piège de la mauvaise grammaire.",
    mech: "L'argument repose sur une phrase qui peut être interprétée de plusieurs façons en raison d'une mauvaise structure grammaticale.",
    bullets: ["L'ambiguïté permet à l'orateur d'esquiver tout engagement.", "Une virgule manquante peut changer tout le sens.", "Cela force l'auditeur à deviner l'intention."],
    term: "Ambiguïté syntaxique",
    termDef: "La présence de deux sens possibles ou plus dans une seule phrase ou séquence de mots.",
    implic: "Vous pouvez être amené à accepter quelque chose que vous n'aviez pas compris."
  },
  "Proof by Assertion": {
    desc2: "Le répéter ne le rend pas vrai.",
    mech: "L'argument tente de gagner non pas en offrant des preuves, mais en répétant simplement l'affirmation jusqu'à ce que l'adversaire abandonne.",
    bullets: ["La répétition est une tactique d'épuisement, pas de logique.", "La familiarité peut être confondue avec la vérité.", "Un mensonge répété mille fois reste un mensonge."],
    term: "Ad Nauseam",
    termDef: "Répéter une affirmation jusqu'à ce que tout le monde soit malade de l'entendre, contournant le besoin de preuve.",
    implic: "Vous pouvez vous laver le cerveau, ainsi qu'à d'autres, simplement en répétant la même affirmation sans fondement."
  },
  "Vacuous Truth": {
    desc2: "Techniquement vrai, mais sans aucune utilité pratique.",
    mech: "L'argument fait une affirmation sur un ensemble vide ou une situation qui n'existe pas, ce qui rend la déclaration logiquement vraie mais totalement vide de sens.",
    bullets: ["Une déclaration sur 'toutes les licornes' est toujours vraie car il n'y a pas de licornes.", "Cela crée l'illusion de fournir des informations.", "C'est une astuce logique utilisée pour avoir l'air correct sans prendre de réelle position."],
    term: "Ensemble vide",
    termDef: "Une catégorie ou un groupe qui ne contient aucun élément ou membre.",
    implic: "Vous pouvez gagner une dispute en disant quelque chose de logiquement indéniable mais de complètement hors sujet."
  },
  "Ecological Fallacy": {
    desc2: "Les groupes ne sont pas des individus.",
    mech: "L'argument suppose qu'un individu possède les caractéristiques exactes de la moyenne statistique du groupe auquel il appartient.",
    bullets: ["Les moyennes cachent les différences individuelles.", "Un pays riche a quand même des citoyens pauvres.", "Appliquer des statistiques de groupe à une personne est mathématiquement invalide."],
    term: "Biais d'agrégation",
    termDef: "La fausse supposition que ce qui est vrai pour le tout doit l'être pour toutes ses parties.",
    implic: "Vous jugerez mal presque tout le monde si vous les traitez comme la moyenne statistique de leur démographie."
  },
  "Choice-Supportive Bias": {
    desc2: "Défendre un mauvais choix juste parce qu'on l'a fait.",
    mech: "L'argument gonfle rétroactivement les aspects positifs d'une décision et en minimise les négatifs uniquement pour justifier ce choix.",
    bullets: ["Nous réécrivons l'histoire pour protéger notre ego.", "Les acheteurs se convainquent qu'un mauvais achat était en fait une excellente affaire.", "Cela nous empêche d'apprendre de nos erreurs."],
    term: "Rationalisation post-achat",
    termDef: "Un biais cognitif par lequel quelqu'un qui a acheté un produit cher en ignore les défauts pour justifier sa décision.",
    implic: "Vous continuerez à prendre de mauvaises décisions si vous dépensez toute votre énergie à prétendre qu'elles étaient bonnes."
  },
  "Consistency Bias": {
    desc2: "Faire semblant d'avoir toujours pensé ça.",
    mech: "L'argument repose sur la fausse croyance que nos attitudes, croyances ou comportements passés étaient les mêmes que ceux d'aujourd'hui.",
    bullets: ["La mémoire est constamment écrasée par le présent.", "Les gens oublient sincèrement qu'ils n'étaient pas d'accord avec eux-mêmes avant.", "Cela crée une illusion d'infaillibilité personnelle."],
    term: "Mémoire rétrospective",
    termDef: "La distorsion de la mémoire pour faire correspondre les croyances passées à la réalité actuelle.",
    implic: "Vous jugerez sévèrement les autres pour avoir changé d'avis parce que vous avez oublié que vous aviez changé le vôtre."
  },
  "Cryptomnesia": {
    desc2: "Le plagiat par accident.",
    mech: "L'argument présente une idée ou un souvenir comme original, alors qu'en réalité c'est un souvenir oublié de l'idée de quelqu'un d'autre.",
    bullets: ["Le cerveau se souvient de l'idée mais oublie la source.", "Cela conduit à un plagiat involontaire.", "Cela donne exactement l'impression d'être un trait de génie original."],
    term: "Amnésie de la source",
    termDef: "L'incapacité de se souvenir d'où, de quand ou de comment une information apprise précédemment a été acquise.",
    implic: "Votre idée la plus brillante et originale n'est peut-être qu'une chose que vous avez lue sur Twitter il y a trois ans."
  },
  "Egocentric Bias": {
    desc2: "Penser être le personnage principal de l'univers.",
    mech: "L'argument surestime le degré auquel sa propre perspective, ses actions ou ses sentiments sont au centre des événements ou remarqués par les autres.",
    bullets: ["La plupart des gens pensent à eux-mêmes, pas à vous.", "Nous surestimons notre contribution aux efforts de groupe.", "Cela nous fait penser que notre expérience personnelle est la règle universelle."],
    term: "Effet de projecteur",
    termDef: "Le phénomène où les gens ont tendance à croire qu'ils sont davantage remarqués qu'ils ne le sont réellement.",
    implic: "Vous souffrirez d'une anxiété immense en vous inquiétant de jugements que personne ne porte en réalité."
  },
  "False Consensus Effect": {
    desc2: "Supposer que tout le monde est d'accord avec soi.",
    mech: "L'argument suppose que ses propres opinions, croyances et valeurs sont normales et partagées par la majorité des gens.",
    bullets: ["Nous nous entourons de gens qui pensent comme nous.", "Cela fait paraître les opinions opposées non seulement fausses, mais bizarres ou marginales.", "Cela détruit la capacité de comprendre différentes perspectives."],
    term: "Chambre d'écho",
    termDef: "Un environnement où une personne ne rencontre que des informations ou opinions qui reflètent et renforcent les siennes.",
    implic: "Vous serez constamment choqué par la réalité car vous supposez que votre bulle est le monde entier."
  },
  "Focusing Illusion": {
    desc2: "Rien n'est aussi important que ce à quoi vous pensez en ce moment.",
    mech: "L'argument surestime drastiquement l'importance d'un facteur spécifique tout en ignorant tout autre contexte.",
    bullets: ["Si vous vous concentrez entièrement sur l'argent, vous pensez que c'est la seule chose qui cause le bonheur.", "Cela crée une vision en tunnel dans la prise de décision.", "Cela exagère l'impact de ce qui retient actuellement votre attention."],
    term: "Ancrage",
    termDef: "La tendance humaine à trop s'appuyer sur la première information offerte ou sur laquelle on se concentre.",
    implic: "Vous ferez de terribles choix de vie si vous laissez un seul facteur vous aveugler face à la vue d'ensemble."
  },
  "Frequency Illusion": {
    desc2: "Maintenant que vous l'avez remarqué, c'est partout.",
    mech: "L'argument affirme une augmentation soudaine et massive d'un phénomène, alors qu'en réalité la personne a juste récemment appris à le remarquer.",
    bullets: ["Aussi connu sous le nom de phénomène Baader-Meinhof.", "Votre cerveau commence à le filtrer *pour* le voir au lieu de le filtrer *pour l'ignorer*.", "Cela donne l'impression d'un complot ou d'une tendance soudaine."],
    term: "Attention sélective",
    termDef: "Le processus consistant à se concentrer sur un objet particulier dans l'environnement pendant un certain temps tout en ignorant les stimuli concurrents.",
    implic: "Vous confondrez votre propre prise de conscience soudaine avec un changement soudain dans le monde."
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

for (let id = 291; id <= 320; id++) {
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

fs.writeFileSync(outPath, code);
console.log('Updated 291-320 in level2to10StandaloneInDepth.ts');
