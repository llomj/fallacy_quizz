#!/usr/bin/env python3
"""Splice diversified validity (1201-1250) and soundness (1251-1270, 1274-1300) into level0Data.ts EN + FR."""
from __future__ import annotations

import json
import random
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "src/data/questions/level0Data.ts"

random.seed(42)

CORRECT_VALIDITY = [
    "If every premise were true, the conclusion could not be false.",
    "The inference form is truth-preserving: true premises cannot yield a false conclusion.",
    "The logical structure guarantees the conclusion whenever the premises hold.",
    "Assuming the premises in a model, the conclusion must come out true.",
    "The argument's pattern makes it impossible for all premises to be true while the conclusion is false.",
]
WRONG_SOUND = [
    "Every premise is actually true in the real world.",
    "The premises are widely believed to be true.",
    "Each premise has been empirically verified.",
]
WRONG_RHET = [
    "Most experts find the argument persuasive.",
    "The argument is popular on social media.",
    "The speaker cites many sources.",
]
WRONG_EMOT = [
    "The conclusion feels satisfying to accept.",
    "The reasoning stirs strong emotions.",
    "The speaker cares deeply about the topic.",
]
WRONG_PROB = [
    "The conclusion is probably true anyway.",
    "The conclusion is likely true given background knowledge.",
]

POLISH_EN: dict[int, str] = {
    1201: "In deductive logic, an argument is valid when:",
    1202: "Which option best matches the standard definition of deductive validity?",
    1203: 'Your instructor says: "Treat the premises as true in a thought experiment—the conclusion still cannot be false." That describes:',
    1204: "Validity is a structural property. It means:",
    1205: "Which statement captures what logicians mean by a valid argument?",
    1206: "A valid deductive argument is one in which:",
    1207: "If someone asks only about validity (not soundness), they are asking whether:",
    1208: 'The "validity" of an argument concerns:',
    1209: "Which characterization fits validity (as opposed to soundness)?",
    1210: "In a proof system, a rule preserves truth. Likewise, an argument is valid when:",
    1211: "You cannot have true premises and a false conclusion in a valid argument. Equivalently, validity means:",
    1212: "Which option states the truth-preserving condition for validity?",
    1213: "Validity answers which question?",
    1214: 'A student confuses validity with "having true premises." What is validity actually about?',
    1215: "Pick the option that describes formal validity in deductive logic:",
    1216: "When philosophers say an argument is valid, they mean:",
    1217: "The textbook: the conclusion follows necessarily from the premises. That is equivalent to:",
    1218: "Which option is about logical consequence—not popularity or emotion?",
    1219: "If you know an argument is valid, you know that:",
    1220: "Validity is about the link between premises and conclusion, namely:",
    1221: "Necessarily: if the premises hold, the conclusion holds. That matches:",
    1222: "A counterexample to validity would be all premises true and conclusion false. So validity means:",
    1223: 'Which option correctly contrasts validity with "the premises are true"?',
    1224: "The pattern of the argument works. That means:",
    1225: 'Choose the best paraphrase of: "No interpretation makes all premises true and the conclusion false."',
    1226: "For deductive validity, which condition must hold?",
    1227: "Which statement would a logic exam mark as the definition of validity?",
    1228: "Validity is structural. Which option reflects that?",
    1229: "If the premises were true in some scenario, validity requires that:",
    1230: "You are checking only the inference, not factual accuracy. You are checking:",
    1231: "Which option mistakes a soundness condition for the definition of validity?",
    1232: "The conclusion follows from the premises. In formal logic, that means:",
    1233: "Pick the option that matches: logical consequence from premises to conclusion.",
    1234: "A valid argument can have false premises. Validity still means:",
    1235: "Soundness adds true premises; validity alone means:",
    1236: "Which is the standard textbook gloss for deductive validity?",
    1237: '"If all premises are true, the conclusion must be true" is one phrasing. Another equivalent is:',
    1238: "Necessity of the conclusion given the premises means:",
    1239: "Select the definition of validity without claiming the premises are actually true:",
    1240: "Truth of premises is a separate issue. Validity is the claim that:",
    1241: "In a valid argument, which situation is ruled out?",
    1242: "The form is such that truth flows to the conclusion. That is:",
    1243: "Which option would a TA accept as the definition of validity on a first quiz?",
    1244: "The premises jointly imply the conclusion. So validity means:",
    1245: "If you grant the premises for the sake of argument, validity forces you to grant:",
    1246: "The conclusion is a logical consequence of the premises. So validity means:",
    1247: "Choose the definition that matches the usual turnstile (⊨) in introductory logic:",
    1248: "A valid argument never permits: all premises true and conclusion false. Hence:",
    1249: 'Which option is synonymous with "the conclusion follows necessarily from the premises"?',
    1250: "Which option best states that the argument has no counterexample with true premises and a false conclusion?",
}

POLISH_FR: dict[int, str] = {
    1201: "En logique déductive, un argument est valide lorsque :",
    1202: "Quelle option correspond le mieux à la définition standard de la validité déductive ?",
    1203: 'Votre professeur dit : « Supposez les prémisses vraies dans une expérience de pensée — la conclusion ne peut pas rester fausse. » Cela décrit :',
    1204: "La validité est une propriété structurelle. Elle signifie :",
    1205: "Quelle formulation capture ce que les logiciens entendent par argument valide ?",
    1206: "Un argument déductif valide est un argument dans lequel :",
    1207: "Si l'on ne demande que la validité (pas la correction), on demande si :",
    1208: 'La « validité » d\'un argument concerne :',
    1209: "Quelle caractérisation correspond à la validité (par opposition à la correction) ?",
    1210: "Dans un système de preuve, une règle préserve la vérité. De même, un argument est valide lorsque :",
    1211: "On ne peut pas avoir des prémisses vraies et une conclusion fausse dans un argument valide. Équivalemment, la validité signifie :",
    1212: "Quelle option exprime la condition de préservation de la vérité pour la validité ?",
    1213: "La validité répond à quelle question ?",
    1214: 'Un étudiant confond validité et « prémisses vraies ». De quoi parle donc la validité ?',
    1215: "Choisissez l'option qui décrit la validité formelle en logique déductive :",
    1216: "Lorsque les philosophes disent qu'un argument est valide, ils veulent dire :",
    1217: "Le manuel : la conclusion découle nécessairement des prémisses. Cela équivaut à :",
    1218: "Quelle option parle de conséquence logique — pas de popularité ni d'émotion ?",
    1219: "Si vous savez qu'un argument est valide, vous savez que :",
    1220: "La validité porte sur le lien entre prémisses et conclusion, à savoir :",
    1221: "Nécessairement : si les prémisses tiennent, la conclusion tient. Cela correspond à :",
    1222: "Un contre-exemple à la validité serait : prémisses toutes vraies, conclusion fausse. Donc la validité signifie :",
    1223: 'Quelle option distingue correctement la validité de « les prémisses sont vraies » ?',
    1224: "Le schéma de l'argument fonctionne. Cela signifie :",
    1225: 'Choisissez la meilleure paraphrase de : « Aucune interprétation ne rend toutes les prémisses vraies et la conclusion fausse. »',
    1226: "Pour la validité déductive, quelle condition doit être satisfaite ?",
    1227: "Quelle phrase un examen de logique accepterait-il comme définition de la validité ?",
    1228: "La validité est structurelle. Quelle option le reflète ?",
    1229: "Si les prémisses étaient vraies dans un scénario, la validité exige que :",
    1230: "Vous vérifiez seulement l'inférence, pas le fait empirique. Vous vérifiez :",
    1231: "Quelle option confond une condition de correction avec la définition de la validité ?",
    1232: "La conclusion découle des prémisses. En logique formelle, cela signifie :",
    1233: "Choisissez l'option qui correspond à la conséquence logique des prémisses à la conclusion.",
    1234: "Un argument valide peut avoir des prémisses fausses. La validité signifie malgré tout :",
    1235: "La correction ajoute des prémisses vraies ; la seule validité signifie :",
    1236: "Quelle est la formulation type des manuels pour la validité déductive ?",
    1237: '« Si toutes les prémisses sont vraies, la conclusion doit être vraie » est une formulation. Une autre équivalente est :',
    1238: "La nécessité de la conclusion étant données les prémisses signifie :",
    1239: "Choisissez la définition de la validité sans affirmer que les prémisses sont vraies dans le monde réel :",
    1240: "La vérité des prémisses est une autre question. La validité affirme que :",
    1241: "Dans un argument valide, quelle situation est exclue ?",
    1242: "La forme est telle que la vérité se transmet jusqu'à la conclusion. C'est :",
    1243: "Quelle option un assistant accepterait-il comme définition de la validité au premier quiz ?",
    1244: "Les prémisses impliquent ensemble la conclusion. Donc la validité signifie :",
    1245: "Si vous accordez les prémisses pour la discussion, la validité vous oblige à accorder :",
    1246: "La conclusion est une conséquence logique des prémisses. Donc la validité signifie :",
    1247: "Choisissez la définition qui correspond au symbole (⊨) des cours introductifs :",
    1248: "Un argument valide n'autorise jamais : prémisses toutes vraies et conclusion fausse. Donc :",
    1249: 'Quelle option est synonyme de « la conclusion découle nécessairement des prémisses » ?',
    1250: "Quelle option exprime le mieux l'absence de contre-exemple à prémisses vraies et conclusion fausse ?",
}

CORRECT_FR = [
    "Si toutes les prémisses étaient vraies, la conclusion ne pourrait pas être fausse.",
    "La forme d'inférence préserve la vérité : des prémisses vraies ne peuvent pas donner une conclusion fausse.",
    "La structure logique garantit la conclusion dès que les prémisses tiennent.",
    "En supposant les prémisses dans un modèle, la conclusion doit ressortir vraie.",
    "Le schéma de l'argument rend impossible des prémisses toutes vraies avec une conclusion fausse.",
]
WRONG_SOUND_FR = [
    "Chaque prémisse est vraie dans le monde réel.",
    "Les prémisses sont largement crues vraies.",
    "Chaque prémisse a été vérifiée empiriquement.",
]
WRONG_RHET_FR = [
    "La plupart des experts trouvent l'argument convaincant.",
    "L'argument est populaire sur les réseaux sociaux.",
    "L'orateur cite de nombreuses sources.",
]
WRONG_EMOT_FR = [
    "La conclusion est agréable à accepter.",
    "Le raisonnement suscite de fortes émotions.",
    "L'orateur tient profondément au sujet.",
]
WRONG_PROB_FR = [
    "La conclusion est probablement vraie quand même.",
    "La conclusion est vraisemblablement vraie au vu du contexte.",
]


def build_validity_options(i: int) -> tuple[list[str], int]:
    c = CORRECT_VALIDITY[i % len(CORRECT_VALIDITY)]
    w1 = WRONG_SOUND[i % len(WRONG_SOUND)]
    w2 = WRONG_RHET[i % len(WRONG_RHET)]
    w3 = WRONG_EMOT[i % len(WRONG_EMOT)]
    if i % 7 == 0:
        w3 = WRONG_PROB[i % len(WRONG_PROB)]
    correct_index = i % 4
    rest = [w1, w2, w3]
    random.shuffle(rest)
    opts: list[str | None] = [None, None, None, None]
    opts[correct_index] = c
    slots = [j for j in range(4) if j != correct_index]
    for j, slot in enumerate(slots):
        opts[slot] = rest[j]
    assert all(isinstance(x, str) for x in opts)
    if 1201 + i == 1231:
        opts = [
            CORRECT_VALIDITY[0],
            WRONG_SOUND[0],
            WRONG_RHET[0],
            WRONG_EMOT[0],
        ]
        correct_index = 1
    return opts, correct_index  # type: ignore[return-value]


def build_validity_options_fr(i: int) -> tuple[list[str], int]:
    c = CORRECT_FR[i % len(CORRECT_FR)]
    w1 = WRONG_SOUND_FR[i % len(WRONG_SOUND_FR)]
    w2 = WRONG_RHET_FR[i % len(WRONG_RHET_FR)]
    w3 = WRONG_EMOT_FR[i % len(WRONG_EMOT_FR)]
    if i % 7 == 0:
        w3 = WRONG_PROB_FR[i % len(WRONG_PROB_FR)]
    correct_index = i % 4
    rest = [w1, w2, w3]
    random.shuffle(rest)
    opts: list[str | None] = [None, None, None, None]
    opts[correct_index] = c
    slots = [j for j in range(4) if j != correct_index]
    for j, slot in enumerate(slots):
        opts[slot] = rest[j]
    if 1201 + i == 1231:
        opts = [
            CORRECT_FR[0],
            WRONG_SOUND_FR[0],
            WRONG_RHET_FR[0],
            WRONG_EMOT_FR[0],
        ]
        correct_index = 1
    return opts, correct_index  # type: ignore[return-value]


def validity_block(qid: int, i: int, lang: str) -> str:
    if lang == "en":
        opts, ci = build_validity_options(i)
        q = POLISH_EN[qid]
        exp = "Validity = structural integrity."
        beg = "Structure works."
        inter = "Impossible to have T premises and F conclusion."
        expert = "Formal deductive property."
    else:
        opts, ci = build_validity_options_fr(i)
        q = POLISH_FR[qid]
        exp = "Validité = intégrité structurelle."
        beg = "La structure fonctionne."
        inter = "Impossible d'avoir des prémisses V et une conclusion F."
        expert = "Propriété déductive formelle."
    opt_lines = ",\n      ".join(json.dumps(s) for s in opts)
    return f"""  {{
    "id": {qid},
    "level": 0,
    "persona_stage": PersonaStage.TADPOLE,
    "concept": "validity-definition",
    "difficulty": 1,
    "subLevel": SubLevel.EXPERT,
    "question": {json.dumps(q)},
    "options": [
      {opt_lines}
    ],
    "correct_option_index": {ci},
    "explanation": {json.dumps(exp)},
    "detailedExplanationBeginner": {json.dumps(beg)},
    "detailedExplanationIntermediate": {json.dumps(inter)},
    "detailedExplanationExpert": {json.dumps(expert)},
    "questionFormat": "standard"
  }}"""


# Soundness tuples: (id, question_en, options_en, correct_idx) — French added parallel
SOUND_DATA: list[tuple[int, str, str, list[str], list[str], int]] = [
    (1251, "A climate memo says the inference is airtight and every factual claim checks out. In logic, that describes:", "Une note climatique dit que l'inférence est irréprochable et que chaque fait est vérifié. En logique, cela décrit :", [
        "A sound argument (valid reasoning with true premises).",
        "A valid argument whose premises might still be false.",
        "A persuasive speech that moved the audience.",
        "An argument with true premises but invalid form.",
    ], [
        "Un argument sain (raisonnement valide avec prémisses vraies).",
        "Un argument valide dont les prémisses peuvent être fausses.",
        "Un discours persuasif qui a ému l'auditoire.",
        "Un argument à prémisses vraies mais à forme invalide.",
    ], 0),
    (1252, "You are grading: the form is valid, but one premise is false. The argument is:", "Vous corrigez : la forme est valide, mais une prémisse est fausse. L'argument est :", [
        "Not sound (soundness needs validity plus true premises).",
        "Sound, because validity is enough.",
        "Sound, because one false premise does not matter.",
        "Sound if the conclusion is true.",
    ], [
        "Non sain (la correction exige validité et prémisses vraies).",
        "Sain, car la validité suffit.",
        "Sain, car une prémisse fausse n'a pas d'importance.",
        "Sain si la conclusion est vraie.",
    ], 0),
    (1253, "Which package matches what logicians call a sound argument?", "Quel ensemble correspond à ce que les logiciens appellent un argument sain ?", [
        "Deductive validity plus all premises actually true.",
        "Validity alone, even with false premises.",
        "True premises alone, even if the pattern is invalid.",
        "Whatever wins a debate round.",
    ], [
        "Validité déductive plus prémisses toutes vraies dans le monde réel.",
        "Validité seule, même avec des prémisses fausses.",
        "Prémisses vraies seules, même si le schéma est invalide.",
        "Ce qui gagne un débat.",
    ], 0),
    (1254, "Soundness is the combination of:", "La correction (soundness) combine :", [
        "Valid structure and true premises.",
        "True premises only.",
        "Valid structure only.",
        "Emotional resonance and rhetorical skill.",
    ], [
        "Une forme valide et des prémisses vraies.",
        "Des prémisses vraies seulement.",
        "Une forme valide seulement.",
        "Une résonance émotionnelle et de la rhétorique.",
    ], 0),
    (1255, "If an argument is sound, what follows about its conclusion?", "Si un argument est sain, qu'en est-il de la conclusion ?", [
        "The conclusion must be true (given soundness implies valid inference from true premises).",
        "The conclusion is probably true.",
        "The conclusion is false.",
        "Nothing—the conclusion is irrelevant.",
    ], [
        "La conclusion doit être vraie (un argument sain infère valablement depuis des prémisses vraies).",
        "La conclusion est probablement vraie.",
        "La conclusion est fausse.",
        "Rien — la conclusion est sans importance.",
    ], 0),
    (1256, "Pick the best gloss: soundness =", "Choisissez la meilleure équivalence : correction =", [
        "Truth-preserving form plus true inputs.",
        "Truth-preserving form only.",
        "True inputs only.",
        "Audience approval.",
    ], [
        "Forme préservant la vérité plus entrées vraies.",
        "Forme préservant la vérité seulement.",
        "Entrées vraies seulement.",
        "L'approbation du public.",
    ], 0),
    (1257, "A proof is valid, but a premise cites a retracted study. Then the argument is:", "Une preuve est valide, mais une prémisse cite une étude rétractée. Alors l'argument est :", [
        "Not sound, because a premise is not actually true.",
        "Sound, because the form still works.",
        "Sound, because studies change all the time.",
        "Sound if people still believe the premise.",
    ], [
        "Non sain, car une prémisse n'est pas vraie en fait.",
        "Sain, car la forme fonctionne encore.",
        "Sain, car les études changent souvent.",
        "Sain si les gens croient encore la prémisse.",
    ], 0),
    (1258, "Which statement is NOT enough for soundness?", "Quelle affirmation ne suffit pas pour la correction ?", [
        "The argument is rhetorically powerful.",
        "The argument is valid and every premise is true.",
        "The premises are true and the form is valid.",
        "It is deductively valid with no false premises.",
    ], [
        "L'argument est puissant sur le plan rhétorique.",
        "L'argument est valide et chaque prémisse est vraie.",
        "Les prémisses sont vraies et la forme est valide.",
        "Il est déductivement valide sans prémisse fausse.",
    ], 0),
    (1259, "In a courtroom analogy: the legal rule is applied correctly, and every entered fact is verified. Logically, that mirrors:", "Au tribunal : la règle est appliquée correctement et chaque fait est vérifié. Cela illustre :", [
        "Soundness (correct rule plus true factual premises).",
        "Validity only.",
        "A strong vibe from the jury.",
        "True premises with a fallacious rule.",
    ], [
        "La correction (règle correcte plus faits vrais).",
        "La validité seulement.",
        "Une forte impression du jury.",
        "Des prémisses vraies avec une règle fallacieuse.",
    ], 0),
    (1260, "Sound arguments guarantee their conclusions because:", "Les arguments sains garantissent leur conclusion parce que :", [
        "Validity transmits truth from true premises, and soundness supplies true premises.",
        "They are usually short.",
        "They use big words.",
        "They avoid emotions.",
    ], [
        "La validité transmet la vérité depuis des prémisses vraies, et la correction fournit des prémisses vraies.",
        "Ils sont en général courts.",
        "Ils utilisent des mots compliqués.",
        "Ils évitent les émotions.",
    ], 0),
    (1261, "Which option confuses validity with soundness?", "Quelle option confond validité et correction ?", [
        'Calling an argument "sound" just because it is valid.',
        "Saying soundness needs both validity and true premises.",
        "Checking whether the premises are actually true.",
        "Checking whether the conclusion follows necessarily.",
    ], [
        'Dire qu\'un argument est « sain » seulement parce qu\'il est valide.',
        "Dire que la correction exige validité et prémisses vraies.",
        "Vérifier si les prémisses sont vraies dans le monde réel.",
        "Vérifier si la conclusion découle nécessairement.",
    ], 0),
    (1262, 'A researcher says: "Our model is sound." In logic class, the charitable reading is:', 'Un chercheur dit : « Notre modèle est sain. » En cours de logique, la lecture la plus charitable est :', [
        "The reasoning pattern is valid and the assumptions are true.",
        "The model is long.",
        "The model is popular.",
        "The model is valid but uses false assumptions.",
    ], [
        "Le schéma de raisonnement est valide et les hypothèses sont vraies.",
        "Le modèle est long.",
        "Le modèle est populaire.",
        "Le modèle est valide mais utilise des hypothèses fausses.",
    ], 0),
    (1263, "To show an argument is NOT sound, you can:", "Pour montrer qu'un argument n'est PAS sain, vous pouvez :", [
        "Show a false premise or show invalid reasoning.",
        "Show the conclusion is surprising.",
        "Show people dislike the conclusion.",
        "Show the argument is valid.",
    ], [
        "Montrer une prémisse fausse ou un raisonnement invalide.",
        "Montrer que la conclusion surprend.",
        "Montrer que les gens n'aiment pas la conclusion.",
        "Montrer que l'argument est valide.",
    ], 0),
    (1264, "Soundness is a stricter standard than validity because it also demands:", "La correction est plus exigeante que la validité car elle exige aussi :", [
        "That the premises are actually true.",
        "That the conclusion be surprising.",
        "That the argument be short.",
        "That everyone agrees.",
    ], [
        "Que les prémisses soient vraies dans le monde réel.",
        "Que la conclusion surprenne.",
        "Que l'argument soit court.",
        "Que tout le monde soit d'accord.",
    ], 0),
    (1265, "Which scenario describes a valid but unsound argument?", "Quel cas décrit un argument valide mais non sain ?", [
        "Modus ponens form, but a premise about the crime is false.",
        "Modus ponens with true premises.",
        "A true conclusion drawn at random.",
        "A false conclusion from a typo.",
    ], [
        "Un modus ponens, mais une prémisse sur le crime est fausse.",
        "Un modus ponens avec prémisses vraies.",
        "Une conclusion vraie tirée au hasard.",
        "Une conclusion fausse à cause d'une faute de frappe.",
    ], 0),
    (1266, "If you have established soundness, you have established:", "Si vous avez établi la correction, vous avez établi :", [
        "Both validity and truth of premises.",
        "Validity only.",
        "Truth of premises only.",
        "Statistical significance.",
    ], [
        "À la fois la validité et la vérité des prémisses.",
        "La validité seulement.",
        "La vérité des prémisses seulement.",
        "Une signification statistique.",
    ], 0),
    (1267, "A sound argument cannot have:", "Un argument sain ne peut pas avoir :", [
        "A false premise (by definition of soundness).",
        "A valid form.",
        "A true conclusion.",
        "Multiple premises.",
    ], [
        "Une prémisse fausse (par définition de la correction).",
        "Une forme valide.",
        "Une conclusion vraie.",
        "Plusieurs prémisses.",
    ], 0),
    (1268, 'Philosophy quiz: "Sound" arguments are the gold standard because they combine:', 'Quiz de philo : les arguments « sains » sont l\'étalon car ils combinent :', [
        "Good structure with factual accuracy of premises.",
        "Rhetoric with charisma.",
        "Length with footnotes.",
        "Probability with luck.",
    ], [
        "Une bonne structure avec l'exactitude factuelle des prémisses.",
        "La rhétorique et le charisme.",
        "La longueur et les notes de bas de page.",
        "La probabilité et la chance.",
    ], 0),
    (1269, "Choose the option that completes: Sound = valid + ___", "Complétez : Sain = valide + ___", [
        "True premises.",
        "Popular premises.",
        "Emotional premises.",
        "Long premises.",
    ], [
        "Prémisses vraies.",
        "Prémisses populaires.",
        "Prémisses émotionnelles.",
        "Prémisses longues.",
    ], 0),
    (1270, "Which is the odd one out for soundness?", "Laquelle est l'intruse pour la notion de correction ?", [
        "The argument went viral online.",
        "Every premise is true.",
        "The argument is deductively valid.",
        "The premises jointly entail the conclusion.",
    ], [
        "L'argument a fait le buzz en ligne.",
        "Chaque prémisse est vraie.",
        "L'argument est déductivement valide.",
        "Les prémisses impliquent ensemble la conclusion.",
    ], 0),
]

EXTRA_SOUND = [
    (1274, "Medical triage note: the treatment rule is applied correctly and the patient facts are accurate. That mirrors:", "Note de tri : la règle thérapeutique est appliquée correctement et les faits sont exacts. Cela illustre :", ["Sound reasoning.", "Validity without truth.", "Purely emotional appeal.", "Invalid pattern with true facts."], ["Un raisonnement sain.", "La validité sans vérité.", "Un pur appel émotionnel.", "Un schéma invalide avec des faits vrais."], 0),
    (1275, "Soundness excludes which possibility?", "La correction exclut quelle possibilité ?", ["Valid reasoning from false premises treated as if they settle the case.", "Valid reasoning from true premises.", "True premises with valid form.", "A true conclusion following validly."], ["Un raisonnement valide à partir de fausses prémisses présenté comme décisif.", "Un raisonnement valide à partir de prémisses vraies.", "Des prémisses vraies avec une forme valide.", "Une conclusion vraie par inférence valide."], 0),
    (1276, "An argument can be valid yet unsound. The extra ingredient soundness adds is:", "Un argument peut être valide mais non sain. Ce que la correction ajoute :", ["Actual truth of the premises.", "A louder voice.", "More examples.", "A clever title."], ["La vérité réelle des prémisses.", "Une voix plus forte.", "Plus d'exemples.", "Un titre astucieux."], 0),
    (1277, "In one line: soundness means you have the right form and:", "En une ligne : la correction exige la bonne forme et :", ["The right facts in the premises.", "The right audience.", "The right font.", "The right intuition."], ["Les bons faits dans les prémisses.", "Le bon public.", "La bonne police de caractères.", "La bonne intuition."], 0),
    (1278, "Why care about soundness, not just validity?", "Pourquoi se soucier de la correction, pas seulement de la validité ?", ["Validity alone can still rely on false premises.", "Soundness ignores truth.", "Validity is easier, so it is enough.", "Soundness is only about style."], ["La validité seule peut reposer sur de fausses prémisses.", "La correction ignore la vérité.", "La validité est plus facile, donc elle suffit.", "La correction n'est qu'une question de style."], 0),
    (1279, 'A podcast says an argument is "sound." Careful listeners should hear:', "Un podcast dit qu'un argument est « sain ». Les auditeurs attentifs entendent :", ["Valid structure with true premises.", "Just confidence.", "Just emotion.", "Just popularity."], ["Une structure valide avec des prémisses vraies.", "Seulement de l'assurance.", "Seulement de l'émotion.", "Seulement de la popularité."], 0),
    (1280, 'Match concepts: "All premises true" + "valid form" =', 'Associez : « toutes les prémisses vraies » + « forme valide » =', ["Sound argument.", "Invalid argument.", "Inductive strength only.", "Opinion."], ["Argument sain.", "Argument invalide.", "Seulement la force inductive.", "Une opinion."], 0),
    (1281, "Which undermines soundness instantly?", "Qu'est-ce qui ruine la correction immédiatement ?", ["Any false premise in the support set.", "A long conclusion.", "A boring tone.", "A technical vocabulary."], ["Toute prémisse fausse dans l'ensemble de soutien.", "Une conclusion longue.", "Un ton ennuyeux.", "Un vocabulaire technique."], 0),
    (1282, "Soundness is about:", "La correction concerne :", ["Getting both the logic and the facts right.", "Getting the vibe right.", "Getting applause.", "Getting a short word count."], ["La justesse de la logique et des faits.", "La bonne ambiance.", "Les applaudissements.", "Un texte court."], 0),
    (1283, 'A student says: "It is valid, therefore it is sound." The mistake is:', "Un étudiant dit : « C'est valide, donc c'est sain. » L'erreur :", ["Validity does not guarantee true premises.", "Validity is impossible.", "Soundness ignores premises.", "Truth does not matter."], ["La validité ne garantit pas des prémisses vraies.", "La validité est impossible.", "La correction ignore les prémisses.", "La vérité n'a pas d'importance."], 0),
    (1284, "Complete the slogan: No false premises + valid pattern ⇒", "Complétez : pas de prémisse fausse + schéma valide ⇒", ["Sound argument (and a true conclusion, given validity).", "Invalid argument.", "Pure opinion.", "Rhetorical trick."], ["Argument sain (et conclusion vraie, la validité donnée).", "Argument invalide.", "Une opinion pure.", "Un tour rhétorique."], 0),
    (1285, "Engineering report: calculations follow the right theorem, but a measured value was mistyped. The proof is:", "Rapport d'ingénierie : les calculs suivent le bon théorème, mais une valeur mesurée est mal saisie. La preuve est :", ["Valid but not sound.", "Sound.", "Neither valid nor sound.", "Sound if the typo is small."], ["Valide mais non saine.", "Saine.", "Ni valide ni saine.", "Saine si la faute est petite."], 0),
    (1286, "Soundness is stricter than validity the same way a healthy meal is stricter than:", "La correction est plus stricte que la validité comme un repas sain est plus strict qu'", ["A recipe that looks good on paper but uses spoiled ingredients.", "A recipe with fresh ingredients only.", "A popular restaurant.", "A fast restaurant."], ["Une recette jolie sur le papier mais avec des ingrédients avariés.", "Une recette avec seulement des ingrédients frais.", "Un restaurant populaire.", "Un restaurant rapide."], 0),
    (1287, "Pick the best description of an unsound yet valid argument:", "Le meilleur portrait d'un argument valide mais non sain :", ["True logical form with at least one false premise.", "False conclusion necessarily.", "No premises.", "No conclusion."], ["Une forme logique correcte avec au moins une prémisse fausse.", "Une conclusion nécessairement fausse.", "Pas de prémisses.", "Pas de conclusion."], 0),
    (1288, "When philosophers praise an argument as sound, they are not merely saying:", "Quand les philosophes disent qu'un argument est sain, ils ne veulent pas dire seulement :", ["It is persuasive or widely believed.", "It has true premises and valid form.", "It is deductively valid.", "It leads to a true conclusion."], ["Qu'il est persuasif ou largement cru.", "Qu'il a des prémisses vraies et une forme valide.", "Qu'il est déductivement valide.", "Qu'il mène à une conclusion vraie."], 0),
    (1289, "A sound argument's premises are:", "Les prémisses d'un argument sain sont :", ["Actually true, not just assumed for an exercise.", "Assumed true for contradiction.", "False but plausible.", "True in fiction only."], ["Vraies dans le monde réel, pas seulement supposées pour un exercice.", "Supposées vraies pour une contradiction.", "Fausses mais plausibles.", "Vraies seulement dans la fiction."], 0),
    (1290, "Validity is the lock; soundness also checks:", "La validité est la serrure ; la correction vérifie aussi :", ["Whether the keys (premises) are real.", "Whether the lock is shiny.", "Whether people like the lock.", "Whether the lock has a brand name."], ["Si les clés (prémisses) sont réelles.", "Si la serrure brille.", "Si les gens aiment la serrure.", "Si la serrure a une marque."], 0),
    (1291, "If you refute a premise, you show the argument is:", "Si vous réfutez une prémisse, vous montrez que l'argument est :", ["Not sound (and maybe still valid).", "Sound.", "Invalid automatically.", "Emotionally empty."], ["Non sain (peut-être encore valide).", "Sain.", "Invalide automatiquement.", "Vide sur le plan émotionnel."], 0),
    (1292, "Soundness ≡", "Correction ≡", ["Valid ∧ true premises.", "Valid only.", "True premises only.", "Convincing only."], ["Valide ∧ prémisses vraies.", "Valide seulement.", "Prémisses vraies seulement.", "Convaincant seulement."], 0),
    (1293, "A deductively sound argument with a controversial conclusion still requires:", "Un argument sain à conclusion controversée exige encore :", ["That the premises be true and the form valid—controversy alone is not enough.", "That everyone agree.", "That no one ask questions.", "That the conclusion be popular."], ["Des prémisses vraies et une forme valide — la controverse ne suffit pas.", "Que tout le monde soit d'accord.", "Que personne ne pose de questions.", "Que la conclusion soit populaire."], 0),
    (1294, "Which pair is sufficient for soundness?", "Quel couple suffit pour la correction ?", ["Valid argument + all premises true.", "Valid argument + popular premises.", "True premises + fallacious pattern.", "Emotion + statistics."], ["Argument valide + toutes les prémisses vraies.", "Argument valide + prémisses populaires.", "Prémisses vraies + schéma fallacieux.", "Émotion + statistiques."], 0),
    (1295, "Unlike mere validity, soundness anchors the argument in:", "Contrairement à la seule validité, la correction ancre l'argument dans :", ["The real truth of its premises.", "The real length of its premises.", "The real fame of its author.", "The real mood of the room."], ["La vérité réelle de ses prémisses.", "La longueur réelle de ses prémisses.", "La célébrité réelle de son auteur.", "L'humeur réelle de la salle."], 0),
    (1296, 'A critic says: "Your logic is fine; your facts are not." They attack:', "Un critique dit : « Votre logique est bonne ; vos faits ne le sont pas. » Il attaque :", ["Soundness (truth of premises), while granting validity.", "Validity only.", "The font choice.", "The conclusion tone."], ["La correction (vérité des prémisses), tout en accordant la validité.", "La validité seulement.", "Le choix de police.", "Le ton de la conclusion."], 0),
    (1297, 'In short: soundness asks both "Does it follow?" and:', "En bref : la correction demande « est-ce que ça suit ? » et :", ['"Are the starting claims actually true?"', '"Is it short?"', '"Is it loud?"', '"Is it new?"'], ['« Les points de départ sont-ils vrais ? »', "« Est-ce court ? »", "« Est-ce fort ? »", "« Est-ce nouveau ? »"], 0),
    (1298, "Which is a recipe for soundness?", "Quelle recette mène à la correction ?", ["Check validity first, then verify each premise in the world.", "Check vibes first.", "Check popularity first.", "Check length first."], ["Vérifier d'abord la validité, puis chaque prémisse dans le monde.", "D'abord l'ambiance.", "D'abord la popularité.", "D'abord la longueur."], 0),
    (1299, "If premises are true and the argument is valid, the argument is:", "Si les prémisses sont vraies et l'argument valide, l'argument est :", ["Sound.", "Invalid.", "Purely emotional.", "Purely rhetorical."], ["Sain.", "Invalide.", "Purement émotionnel.", "Purement rhétorique."], 0),
    (1300, 'Soundness closes the gap between "good form" and:', "La correction comble l'écart entre « bonne forme » et :", ['"True content" in the premises.', '"Good marketing".', '"Good luck".', '"Good taste".'], ['« contenu vrai » dans les prémisses.', "« bon marketing ».", "« bonne chance ».", "« bon goût »."], 0),
]

SOUND_DATA += EXTRA_SOUND  # type: ignore[assignment]


def sound_block(qid: int, qen: str, qfr: str, oen: list[str], ofr: list[str], ci: int, lang: str) -> str:
    if lang == "en":
        q, opts = qen, oen
        exp = "Soundness = Validity + Truth."
        beg = "Logic + Truth."
        inter = "Two criteria: validity and material truth."
        expert = "Valid ∧ Truth(P)."
    else:
        q, opts = qfr, ofr
        exp = "Santé = Validité + Vérité."
        beg = "Logique + Vérité."
        inter = "Deux critères : validité et vérité matérielle."
        expert = "Valide ∧ Vérité(P)."
    opt_lines = ",\n      ".join(json.dumps(s) for s in opts)
    return f"""  {{
    "id": {qid},
    "level": 0,
    "persona_stage": PersonaStage.TADPOLE,
    "concept": "soundness-definition",
    "difficulty": 1,
    "subLevel": SubLevel.EXPERT,
    "question": {json.dumps(q)},
    "options": [
      {opt_lines}
    ],
    "correct_option_index": {ci},
    "explanation": {json.dumps(exp)},
    "detailedExplanationBeginner": {json.dumps(beg)},
    "detailedExplanationIntermediate": {json.dumps(inter)},
    "detailedExplanationExpert": {json.dumps(expert)},
    "questionFormat": "standard"
  }}"""


def find_id_line(lines: list[str], qid: int) -> int:
    for i, l in enumerate(lines):
        if f'"id": {qid},' in l:
            return i
    raise ValueError(f"missing id {qid}")


def main() -> None:
    raw = DATA.read_text(encoding="utf-8")
    fr_split = "export const LEVEL_0_GEN_FR"
    if raw.count(fr_split) != 1:
        raise RuntimeError("unexpected file layout")
    head, tail = raw.split(fr_split, 1)
    en_lines = head.splitlines(keepends=True)
    fr_lines = (fr_split + tail).splitlines(keepends=True)

    i1201 = find_id_line(en_lines, 1201)
    i1251 = find_id_line(en_lines, 1251)
    i1271 = find_id_line(en_lines, 1271)
    i1274 = find_id_line(en_lines, 1274)
    i1300 = find_id_line(en_lines, 1300)

    def block_end(start: int) -> int:
        k = start
        while k < len(en_lines):
            if k > start and '"questionFormat"' in en_lines[k - 1]:
                if en_lines[k].strip() in ("},", "}"):
                    return k + 1
            k += 1
        raise RuntimeError("block end")

    end1273 = block_end(i1271)
    end1300 = block_end(i1300)

    new_validity = ",\n".join(validity_block(1201 + i, i, "en") for i in range(50)) + ",\n"
    new_sound_a = ",\n".join(
        sound_block(d[0], d[1], d[2], d[3], d[4], d[5], "en") for d in SOUND_DATA if d[0] < 1271
    )
    new_sound_b = ",\n".join(
        sound_block(d[0], d[1], d[2], d[3], d[4], d[5], "en") for d in SOUND_DATA if d[0] >= 1274
    )

    kept = "".join(en_lines[i1271:end1273])

    # Drop the lone `  {` line before `"id": 1201` so we do not duplicate the opening brace.
    start1201 = i1201 - 1 if i1201 > 0 and en_lines[i1201 - 1].strip() == "{" else i1201

    new_en = (
        "".join(en_lines[:start1201])
        + new_validity
        + new_sound_a
        + ",\n"
        + kept
        + ",\n"
        + new_sound_b
        + ",\n"
        + "".join(en_lines[end1300:])
    )

    # French section
    fi1201 = find_id_line(fr_lines, 1201)
    fi1251 = find_id_line(fr_lines, 1251)
    fi1271 = find_id_line(fr_lines, 1271)
    fi1274 = find_id_line(fr_lines, 1274)
    fi1300 = find_id_line(fr_lines, 1300)

    def block_end_fr(start: int) -> int:
        k = start
        while k < len(fr_lines):
            if k > start and '"questionFormat"' in fr_lines[k - 1]:
                if fr_lines[k].strip() in ("},", "}"):
                    return k + 1
            k += 1
        raise RuntimeError("block end fr")

    fend1273 = block_end_fr(fi1271)
    fend1300 = block_end_fr(fi1300)

    new_validity_fr = ",\n".join(validity_block(1201 + i, i, "fr") for i in range(50)) + ",\n"
    new_sound_a_fr = ",\n".join(
        sound_block(d[0], d[1], d[2], d[3], d[4], d[5], "fr") for d in SOUND_DATA if d[0] < 1271
    )
    new_sound_b_fr = ",\n".join(
        sound_block(d[0], d[1], d[2], d[3], d[4], d[5], "fr") for d in SOUND_DATA if d[0] >= 1274
    )
    kept_fr = "".join(fr_lines[fi1271:fend1273])

    fstart1201 = fi1201 - 1 if fi1201 > 0 and fr_lines[fi1201 - 1].strip() == "{" else fi1201

    new_fr = (
        "".join(fr_lines[:fstart1201])
        + new_validity_fr
        + new_sound_a_fr
        + ",\n"
        + kept_fr
        + ",\n"
        + new_sound_b_fr
        + ",\n"
        + "".join(fr_lines[fend1300:])
    )

    DATA.write_text(new_en + new_fr, encoding="utf-8")
    print("patched", DATA)


if __name__ == "__main__":
    main()
