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
  "Frequency Illusion": {
    desc2: "Now that you noticed it, it's everywhere.",
    mech: "The argument claims a sudden, massive increase in a phenomenon, when in reality the person has just recently learned to notice it.",
    bullets: ["Also known as the Baader-Meinhof phenomenon.", "Your brain starts filtering *for* it instead of filtering it *out*.", "It feels like a conspiracy or a sudden trend."],
    term: "Selective Attention",
    termDef: "The process of focusing on a particular object in the environment for a certain period of time while ignoring competing stimuli.",
    implic: "You will mistake your own sudden awareness for a sudden change in the world."
  },
  "Google Effect": {
    desc2: "Digital amnesia.",
    mech: "The argument relies on or is hindered by the tendency to forget information that can be easily found online.",
    bullets: ["We remember *where* to find it, not *what* it is.", "It offloads our memory to search engines.", "It creates an illusion of personal knowledge."],
    term: "Transactive Memory",
    termDef: "A psychological hypothesis that people in groups collectively store information, now applied to humans and the internet.",
    implic: "You feel like a genius with a smartphone, but might know very little without it."
  },
  "Groupthink": {
    desc2: "Agreeing yourself into a disaster.",
    mech: "The argument prioritizes consensus and harmony over accurate analysis and critical evaluation.",
    bullets: ["Dissent is suppressed to keep the peace.", "The group becomes blind to obvious risks.", "It leads to disastrous, irrational decisions by otherwise smart people."],
    term: "Conformity",
    termDef: "The act of matching attitudes, beliefs, and behaviors to group norms.",
    implic: "A room full of geniuses can collectively make the dumbest possible choice."
  },
  "Hard-Easy Effect": {
    desc2: "Overconfident on hard tasks, underconfident on easy ones.",
    mech: "The argument exhibits a cognitive bias where people overestimate their ability to solve difficult problems and underestimate their ability to solve easy ones.",
    bullets: ["We assume we can beat the odds on impossible tasks.", "We doubt ourselves on tasks everyone else finds simple.", "It skews our perception of risk and reward."],
    term: "Dunning-Kruger Effect (related)",
    termDef: "A cognitive bias where people with limited knowledge or competence greatly overestimate their own knowledge or competence.",
    implic: "You will bet your life savings on a lottery ticket but refuse to fix a leaky faucet."
  },
  "Herd Mentality": {
    desc2: "Following the crowd right off a cliff.",
    mech: "The argument adopts a belief or behavior simply because many other people are doing it.",
    bullets: ["There is safety in numbers, but not necessarily truth.", "It drives financial bubbles and panic buying.", "People stop thinking independently."],
    term: "Bandwagon Effect",
    termDef: "The tendency to do or believe things because many other people do or believe the same.",
    implic: "You will abandon your own common sense if enough people around you act crazy."
  },
  "Hindsight Bias": {
    desc2: "I knew it all along.",
    mech: "The argument falsely claims, after an event has occurred, that the event was predictable or obvious all along.",
    bullets: ["The past always looks inevitable once it has happened.", "It prevents us from learning because we think we didn't make a mistake.", "It makes us judge past decisions unfairly."],
    term: "Creeping Determinism",
    termDef: "The growing sense, as an event unfolds, that it was bound to happen this way.",
    implic: "You will never improve your forecasting if you always pretend you saw the surprise coming."
  },
  "Hot-Hand Fallacy": {
    desc2: "Streaks are just math, not magic.",
    mech: "The argument assumes that a person who has experienced success has a greater chance of further success in additional attempts.",
    bullets: ["Randomness is clumpy.", "A coin flipping heads five times doesn't 'want' to flip heads again.", "It leads to terrible gambling and investment decisions."],
    term: "Clustering Illusion",
    termDef: "The tendency to erroneously consider the inevitable 'streaks' or 'clusters' arising in small samples from random distributions to be non-random.",
    implic: "You will lose your money betting that a lucky streak is a permanent skill."
  },
  "Identifiable Victim Effect": {
    desc2: "One face matters more than a million numbers.",
    mech: "The argument relies on the tendency to offer greater aid or sympathy to a specific, identifiable individual than to a large, vaguely defined group with the same need.",
    bullets: ["Statistics don't make people cry.", "A single story overrides a spreadsheet of data.", "It misallocates resources to high-profile cases over systemic problems."],
    term: "Compassion Fade",
    termDef: "The phenomenon where people's willingness to help decreases as the number of people in need increases.",
    implic: "You will give everything to save one person on TV while ignoring thousands dying quietly off-camera."
  },
  "Illusion of Control": {
    desc2: "Throwing the dice harder won't change the number.",
    mech: "The argument overestimates a person's ability to control or influence outcomes that they demonstrably have no influence over.",
    bullets: ["We wear 'lucky' socks to win sports games.", "It creates a false sense of security.", "It prevents us from preparing for random disasters."],
    term: "Magical Thinking",
    termDef: "The belief that one's ideas, thoughts, actions, or words can influence the course of events in the material world.",
    implic: "You will exhaust yourself trying to steer a car when you are just a passenger."
  },
  "Illusion of Transparency": {
    desc2: "Nobody can read your mind.",
    mech: "The argument overestimates the degree to which one's personal mental state is known by others.",
    bullets: ["You think everyone knows you are lying, but they don't.", "You think your instructions were perfectly clear, but they weren't.", "It causes massive miscommunication."],
    term: "Curse of Knowledge",
    termDef: "A cognitive bias that occurs when an individual, communicating with other individuals, unknowingly assumes that the others have the background to understand.",
    implic: "You will constantly be angry at people for not understanding what you never actually said."
  },
  "Illusion of Validity": {
    desc2: "Confidence is not competence.",
    mech: "The argument overestimates one's ability to accurately interpret and predict outcomes when analyzing a set of data, especially when the data tells a consistent story.",
    bullets: ["A good story makes us overly confident.", "We ignore base rates in favor of a compelling narrative.", "Even experts fall for it when interviewing candidates."],
    term: "Confirmation Bias",
    termDef: "The tendency to search for, interpret, favor, and recall information in a way that confirms one's preexisting beliefs or hypotheses.",
    implic: "You will bet on a bad horse just because you liked the story of how it was trained."
  }
};

const templatesFR = {
  "Frequency Illusion": {
    desc2: "Maintenant que vous l'avez remarqué, c'est partout.",
    mech: "L'argument affirme une augmentation soudaine et massive d'un phénomène, alors qu'en réalité la personne a juste récemment appris à le remarquer.",
    bullets: ["Aussi connu sous le nom de phénomène Baader-Meinhof.", "Votre cerveau commence à le filtrer *pour* le voir au lieu de le filtrer *pour l'ignorer*.", "Cela donne l'impression d'un complot ou d'une tendance soudaine."],
    term: "Attention sélective",
    termDef: "Le processus consistant à se concentrer sur un objet particulier dans l'environnement pendant un certain temps tout en ignorant les stimuli concurrents.",
    implic: "Vous confondrez votre propre prise de conscience soudaine avec un changement soudain dans le monde."
  },
  "Google Effect": {
    desc2: "L'amnésie numérique.",
    mech: "L'argument repose sur ou est entravé par la tendance à oublier les informations qui peuvent être facilement trouvées en ligne.",
    bullets: ["Nous nous souvenons *d'où* le trouver, pas de *ce* que c'est.", "Cela décharge notre mémoire sur les moteurs de recherche.", "Cela crée une illusion de connaissances personnelles."],
    term: "Mémoire transactive",
    termDef: "Une hypothèse psychologique selon laquelle les gens en groupe stockent collectivement des informations, appliquée aujourd'hui aux humains et à Internet.",
    implic: "Vous vous sentez comme un génie avec un smartphone, mais vous pourriez ne rien savoir sans lui."
  },
  "Groupthink": {
    desc2: "Se mettre d'accord pour aller au désastre.",
    mech: "L'argument donne la priorité au consensus et à l'harmonie plutôt qu'à une analyse précise et une évaluation critique.",
    bullets: ["La dissidence est réprimée pour maintenir la paix.", "Le groupe devient aveugle aux risques évidents.", "Cela conduit à des décisions désastreuses et irrationnelles par des gens par ailleurs intelligents."],
    term: "Conformisme",
    termDef: "L'action de faire correspondre ses attitudes, croyances et comportements aux normes du groupe.",
    implic: "Une pièce pleine de génies peut collectivement faire le choix le plus stupide possible."
  },
  "Hard-Easy Effect": {
    desc2: "Trop confiant sur les tâches difficiles, pas assez sur les faciles.",
    mech: "L'argument présente un biais cognitif où les gens surestiment leur capacité à résoudre des problèmes difficiles et sous-estiment leur capacité à résoudre des problèmes faciles.",
    bullets: ["Nous supposons pouvoir déjouer les pronostics sur des tâches impossibles.", "Nous doutons de nous-mêmes sur des tâches que tout le monde trouve simples.", "Cela fausse notre perception du risque et de la récompense."],
    term: "Effet Dunning-Kruger (lié)",
    termDef: "Un biais cognitif où les personnes ayant des connaissances ou des compétences limitées surestiment grandement leurs propres capacités.",
    implic: "Vous parierez les économies de toute une vie sur un ticket de loterie, mais refuserez de réparer un robinet qui fuit."
  },
  "Herd Mentality": {
    desc2: "Suivre la foule tout droit dans le ravin.",
    mech: "L'argument adopte une croyance ou un comportement simplement parce que beaucoup d'autres personnes le font.",
    bullets: ["Il y a de la sécurité dans le nombre, mais pas nécessairement la vérité.", "Cela alimente les bulles financières et les achats paniques.", "Les gens arrêtent de penser de manière indépendante."],
    term: "Effet de mode (Bandwagon)",
    termDef: "La tendance à faire ou à croire des choses parce que beaucoup d'autres personnes font ou croient la même chose.",
    implic: "Vous abandonnerez votre propre bon sens si suffisamment de gens autour de vous agissent follement."
  },
  "Hindsight Bias": {
    desc2: "Je le savais depuis le début.",
    mech: "L'argument prétend faussement, après qu'un événement s'est produit, que l'événement était prévisible ou évident depuis le début.",
    bullets: ["Le passé semble toujours inévitable une fois qu'il s'est produit.", "Cela nous empêche d'apprendre car nous pensons ne pas avoir fait d'erreur.", "Cela nous fait juger injustement les décisions passées."],
    term: "Déterminisme rampant",
    termDef: "Le sentiment croissant, à mesure qu'un événement se déroule, qu'il devait forcément se passer de cette façon.",
    implic: "Vous n'améliorerez jamais vos prévisions si vous prétendez toujours avoir vu venir la surprise."
  },
  "Hot-Hand Fallacy": {
    desc2: "Les séries sont juste des maths, pas de la magie.",
    mech: "L'argument suppose qu'une personne qui a connu le succès a de plus grandes chances de succès supplémentaire lors de tentatives ultérieures.",
    bullets: ["L'aléatoire est grumeleux.", "Une pièce qui tombe sur pile cinq fois n'a pas 'envie' de tomber sur pile à nouveau.", "Cela conduit à de terribles décisions de jeu et d'investissement."],
    term: "Illusion des séries",
    termDef: "La tendance à considérer à tort les 'séries' ou 'groupes' inévitables apparaissant dans de petits échantillons de distributions aléatoires comme étant non aléatoires.",
    implic: "Vous perdrez votre argent en pariant qu'une série de chance est une compétence permanente."
  },
  "Identifiable Victim Effect": {
    desc2: "Un visage compte plus qu'un million de chiffres.",
    mech: "L'argument repose sur la tendance à offrir plus d'aide ou de sympathie à un individu spécifique et identifiable qu'à un grand groupe vaguement défini ayant le même besoin.",
    bullets: ["Les statistiques ne font pleurer personne.", "Une seule histoire l'emporte sur un tableur de données.", "Cela alloue mal les ressources vers des cas médiatisés au détriment de problèmes systémiques."],
    term: "Évanouissement de la compassion",
    termDef: "Le phénomène où la volonté des gens d'aider diminue à mesure que le nombre de personnes dans le besoin augmente.",
    implic: "Vous donnerez tout pour sauver une personne à la télévision tout en ignorant des milliers de morts discrètes hors caméra."
  },
  "Illusion of Control": {
    desc2: "Lancer les dés plus fort ne changera pas le chiffre.",
    mech: "L'argument surestime la capacité d'une personne à contrôler ou influencer des résultats sur lesquels elle n'a manifestement aucune influence.",
    bullets: ["Nous portons des chaussettes 'porte-bonheur' pour gagner des matchs.", "Cela crée un faux sentiment de sécurité.", "Cela nous empêche de nous préparer à des désastres aléatoires."],
    term: "Pensée magique",
    termDef: "La croyance que ses propres idées, pensées, actions ou mots peuvent influencer le cours des événements dans le monde matériel.",
    implic: "Vous vous épuiserez à essayer de conduire une voiture alors que vous n'êtes qu'un passager."
  },
  "Illusion of Transparency": {
    desc2: "Personne ne peut lire dans vos pensées.",
    mech: "L'argument surestime le degré auquel notre état mental personnel est connu des autres.",
    bullets: ["Vous pensez que tout le monde sait que vous mentez, mais non.", "Vous pensiez que vos instructions étaient parfaitement claires, elles ne l'étaient pas.", "Cela cause d'énormes problèmes de communication."],
    term: "Malédiction du savoir",
    termDef: "Un biais cognitif qui se produit lorsqu'un individu, communiquant avec d'autres, suppose inconsciemment que les autres ont le bagage nécessaire pour comprendre.",
    implic: "Vous serez constamment en colère contre les gens parce qu'ils ne comprennent pas ce que vous n'avez jamais réellement dit."
  },
  "Illusion of Validity": {
    desc2: "La confiance n'est pas la compétence.",
    mech: "L'argument surestime la capacité d'une personne à interpréter et prédire avec précision des résultats lors de l'analyse de données, en particulier lorsque ces données racontent une histoire cohérente.",
    bullets: ["Une bonne histoire nous rend trop confiants.", "Nous ignorons les probabilités de base au profit d'une narration convaincante.", "Même les experts s'y laissent prendre lors d'entretiens d'embauche."],
    term: "Biais de confirmation",
    termDef: "La tendance à rechercher, interpréter, favoriser et se rappeler des informations d'une manière qui confirme ses propres croyances ou hypothèses préexistantes.",
    implic: "Vous parierez sur un mauvais cheval juste parce que vous avez aimé l'histoire de la façon dont il a été entraîné."
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

for (let id = 321; id <= 350; id++) {
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
console.log('Updated 321-350 in level2to10StandaloneInDepth.ts');
