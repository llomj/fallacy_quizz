#!/usr/bin/env python3
"""Replace placeholder Scene (n) argument-vs-assertion items 1021-1050 EN+FR."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "src/data/questions/level0Data.ts"

# (id, en_q, en_opts, en_correct, en_beginner)
EN = [
    (1021, "At a community bake-off, which statement is an argument (a claim backed by a reason)?", [
        "Cupcakes are trendy this year.",
        "The oven is too hot, so the sponge will dry out.",
        "This kitchen smells like vanilla.",
        "Butter is on sale at the store.",
    ], 1, "Uses 'The oven is too hot' to support 'the sponge will dry out'."),
    (1022, "Before a sprint heat, which line is an argument—not merely a preference?", [
        "You trained all month, so you should beat your previous heat time.",
        "I love the sound of the starting gun.",
        "Tracks are usually oval.",
        "Spikes come in many colors.",
    ], 0, "Uses training effort as a reason to expect a faster finish."),
    (1023, "Forecasting a hike, which statement is an argument?", [
        "The barometer is falling fast, so expect rain before noon.",
        "I enjoy cloudy skies.",
        "Forecasts exist on apps.",
        "Rain is wet.",
    ], 0, "Uses a dropping barometer as a reason to expect rain."),
    (1024, "Roadside with a car that will not crank, which line is an argument?", [
        "Jump starters are heavy.",
        "The battery reads zero volts, so the starter motor will not turn.",
        "Cars have four wheels.",
        "I dislike waiting for a tow.",
    ], 1, "Uses a dead battery as a reason the car will not start."),
    (1025, "On a dim office desk, which statement is an argument about the plants?", [
        "Succulents never need water.",
        "These leaves are etiolated, so move the pot closer to the window.",
        "Soil is brown.",
        "Windows are made of glass.",
    ], 1, "Uses pale stretched growth as a reason to move the plant toward light."),
    (1026, "In a reading room with a strict noise policy, which line is an argument?", [
        "Whispering is fashionable.",
        "Quiet is required for concentration, so speak softly at the tables.",
        "Libraries have shelves.",
        "Books have spines.",
    ], 1, "Uses the need for concentration as a reason to speak softly."),
    (1027, "When a friend skips walks for weeks, which line is an argument for daily walking?", [
        "Walking is boring.",
        "Regular movement supports cardiovascular health, so schedule a daily walk.",
        "Sneakers exist.",
        "Sidewalks are concrete.",
    ], 1, "Uses health benefit as a reason to schedule daily walks."),
    (1028, "On an algebra quiz, which line is an argument (not just a calculation claim)?", [
        "Let x be a number.",
        "If x equals 5, then x plus 2 must equal 7.",
        "Seven is a prime number.",
        "Equations use letters.",
    ], 1, "Uses x = 5 as a reason that x + 2 equals 7."),
    (1029, "Lifeguards flag a rising tide at the public beach. Which line is an argument?", [
        "Sand is fun to dig.",
        "Water is advancing up the beach, so the dry area will shrink.",
        "Seagulls are loud.",
        "The ocean is salty.",
    ], 1, "Uses advancing water as a reason the dry sand shrinks."),
    (1030, "At a planetarium talk, which line is an argument?", [
        "Stars are pretty dots.",
        "Light travels at finite speed, so we observe distant stars as they were long ago.",
        "Telescopes use mirrors.",
        "Night happens after day.",
    ], 1, "Uses finite light speed as a reason we see the past state of stars."),
    (1031, "Dropping an apple from a balcony for a demo, which line is an argument?", [
        "Apples can be red or green.",
        "Earth pulls masses toward its center, so the apple accelerates downward.",
        "Balconies have railings.",
        "Gravity was named by Newton.",
    ], 1, "Uses gravitational pull as a reason the apple falls."),
    (1032, "Choosing a language-practice plan, which line is an argument?", [
        "Accents are interesting.",
        "Fluency tracks with deliberate practice, so brief daily speaking beats monthly cramming.",
        "Dictionaries are thick.",
        "Languages have grammar.",
    ], 1, "Uses the link between practice and fluency to recommend daily speaking."),
    (1033, "Home office Wi-Fi fails during a video call. Which line is an argument?", [
        "Calls should always use video.",
        "The router shows offline, so this machine will not reach the internet.",
        "Ethernet cables are blue sometimes.",
        "Modems have lights.",
    ], 1, "Uses the router being offline as a reason there is no internet access."),
    (1034, "Handling fragile museum pieces, which line is an argument?", [
        "Artifacts are old.",
        "These materials crack under sudden force, so support them from below when moving.",
        "Museums charge admission.",
        "Display cases are glass.",
    ], 1, "Uses fragility under force as a reason to support objects from below."),
    (1035, "Mixing paint for a mural, which line is an argument?", [
        "Purple is trendy this season.",
        "Red pigment plus blue pigment yields purple here, so those two tubes will produce that swatch.",
        "Brushes wear out.",
        "Canvas has texture.",
    ], 1, "Uses color-mixing fact as a reason those two tubes produce the swatch."),
    (1036, "Approaching a red traffic light as a new driver, which line is an argument?", [
        "Red lights are bright.",
        "This signal is red, so traffic facing it must stop before the limit line.",
        "Intersections have corners.",
        "Cars have brakes.",
    ], 1, "Uses the red signal as a reason vehicles must stop."),
    (1037, "Explaining why a study group takes breaks, which line is an argument?", [
        "Sleep debt impairs attention, so short rests will help the session stay sharp.",
        "Libraries have chairs.",
        "Coffee smells strong.",
        "Exams happen in spring.",
    ], 0, "Uses sleep's effect on attention as a reason to take breaks."),
    (1038, "Discussing a sold-out concert, which line is an argument about ticket prices?", [
        "Merch tables sell T-shirts.",
        "Few seats remain, so resale listings will ask more than face value.",
        "Concerts use speakers.",
        "Fans like music.",
    ], 1, "Uses scarcity as a reason resale prices rise."),
    (1040, "Tuning a school jazz band before rehearsal, which line is an argument?", [
        "Jazz began in the United States.",
        "The lead guitar is a quarter-step flat, so that chord will sound sour until it is fixed.",
        "Music uses notes.",
        "Rehearsal rooms have chairs.",
    ], 1, "Uses an out-of-tune string as a reason the chord will sound wrong."),
    (1041, "Re-checking cupcakes pulled early from the oven, which line is an argument?", [
        "The crumb still looks wet, so give them five more minutes or they will collapse.",
        "Frosting is sweet.",
        "Cupcake papers are pleated.",
        "Bakeries open early.",
    ], 0, "Uses a wet crumb as a reason to bake longer."),
    (1042, "Comparing two relay teams' training logs, which line is an argument?", [
        "Their split times improved all spring, so they are likely to beat last year's record.",
        "Relays use batons.",
        "Tracks have lanes.",
        "Running is aerobic.",
    ], 0, "Uses improved splits as a reason to expect a record."),
    (1043, "Planning a picnic from a morning forecast, which line is an argument?", [
        "Picnic baskets are wicker.",
        "Radar shows a squall line approaching, so pack the rain fly for the pavilion.",
        "Grass is green.",
        "Ants live outdoors.",
    ], 1, "Uses an approaching storm line as a reason to pack shelter."),
    (1048, "Peer-reviewing a friend's homework proof, which line is an argument?", [
        "Proofs use logic.",
        "If k is even, then k squared is even—because k equals 2m for some integer m.",
        "Even numbers are integers.",
        "Homework is printed.",
    ], 1, "Uses k = 2m as a reason k squared is even when k is even."),
    (1049, "Reading a tide table before a shoreline survey, which line is an argument?", [
        "Low tide exposes more tide pools, so schedule the transect for that window.",
        "Tide books are printed.",
        "Sand is granular.",
        "Waves make noise.",
    ], 0, "Uses low tide exposing pools as a reason to schedule then."),
    (1050, "Explaining starlight to a tour group, which line is an argument?", [
        "Telescopes are expensive.",
        "Starlight began its journey years ago, so we see the star as it was in the past.",
        "Constellations have names.",
        "Night skies can be cloudy.",
    ], 1, "Uses travel time of light as a reason we see the star's past state."),
]

FR = [
    (1021, "Lors d'un concours de p\u00e2tisserie communautaire, quelle phrase est un argument (une affirmation appuy\u00e9e sur une raison) ?", [
        "Les cupcakes sont \u00e0 la mode cette ann\u00e9e.",
        "Le four est trop chaud, donc le g\u00e9noise va s'ass\u00e9cher.",
        "Cette cuisine sent la vanille.",
        "Le beurre est en promotion au magasin.",
    ], 1, "Utilise \u00ab Le four est trop chaud \u00bb pour soutenir \u00ab le g\u00e9noise va s'ass\u00e9cher \u00bb."),
    (1022, "Avant une manche de sprint, quelle phrase est un argument \u2014 pas seulement une pr\u00e9f\u00e9rence ?", [
        "Tu t'es entra\u00een\u00e9 tout le mois, donc tu devrais battre ton temps de la manche pr\u00e9c\u00e9dente.",
        "J'adore le bruit du pistolet de d\u00e9part.",
        "Les pistes sont en g\u00e9n\u00e9ral ovales.",
        "Les pointes existent en plusieurs couleurs.",
    ], 0, "Utilise l'entra\u00eenement comme raison d'attendre un meilleur temps."),
    (1023, "Pour pr\u00e9voir une randonn\u00e9e, quelle phrase est un argument ?", [
        "Le barom\u00e8tre chute vite, donc attendez-vous \u00e0 de la pluie avant midi.",
        "J'aime le ciel nuageux.",
        "Les pr\u00e9visions existent sur les applis.",
        "La pluie est mouill\u00e9e.",
    ], 0, "Utilise la chute du barom\u00e8tre comme raison d'attendre de la pluie."),
    (1024, "Au bord d'une voiture qui ne d\u00e9marre pas, quelle phrase est un argument ?", [
        "Les boosters sont lourds.",
        "La batterie affiche z\u00e9ro volt, donc le d\u00e9marreur ne tournera pas.",
        "Les voitures ont quatre roues.",
        "Je n'aime pas attendre la d\u00e9panneuse.",
    ], 1, "Utilise une batterie morte comme raison pour laquelle la voiture ne d\u00e9marre pas."),
    (1025, "Sur un bureau peu lumineux, quelle phrase est un argument sur les plantes ?", [
        "Les succulentes n'ont jamais besoin d'eau.",
        "Ces feuilles sont \u00e9tiol\u00e9es, donc rapprochez le pot de la fen\u00eatre.",
        "La terre est brune.",
        "Les fen\u00eatres sont en verre.",
    ], 1, "Utilise une croissance p\u00e2le \u00e9tir\u00e9e comme raison de rapprocher la plante de la lumi\u00e8re."),
    (1026, "Dans une salle de lecture au r\u00e8glement strict, quelle phrase est un argument ?", [
        "Chuchoter est \u00e0 la mode.",
        "Le silence est n\u00e9cessaire pour se concentrer, donc parlez bas aux tables.",
        "Les biblioth\u00e8ques ont des rayonnages.",
        "Les livres ont des tranches.",
    ], 1, "Utilise le besoin de concentration comme raison de parler bas."),
    (1027, "Quand un ami n'a pas march\u00e9 depuis des semaines, quelle phrase plaide pour une marche quotidienne ?", [
        "La marche est ennuyeuse.",
        "Un mouvement r\u00e9gulier soutient la sant\u00e9 cardiovasculaire, donc planifiez une marche quotidienne.",
        "Les baskets existent.",
        "Les trottoirs sont en b\u00e9ton.",
    ], 1, "Utilise le b\u00e9n\u00e9fice pour la sant\u00e9 comme raison de marcher chaque jour."),
    (1028, "Sur une interrogation d'alg\u00e8bre, quelle phrase est un argument ?", [
        "Soit x un nombre.",
        "Si x vaut 5, alors x plus 2 doit valoir 7.",
        "Sept est un nombre premier.",
        "Les \u00e9quations utilisent des lettres.",
    ], 1, "Utilise x = 5 comme raison pour laquelle x + 2 vaut 7."),
    (1029, "Les ma\u00eetres-nageurs signalent une mar\u00e9e montante. Quelle phrase est un argument ?", [
        "Le sable est amusant \u00e0 creuser.",
        "L'eau monte sur la plage, donc la zone s\u00e8che va r\u00e9tr\u00e9cir.",
        "Les go\u00e9lands sont bruyants.",
        "L'oc\u00e9an est sal\u00e9.",
    ], 1, "Utilise l'eau qui avance comme raison pour laquelle le sable sec diminue."),
    (1030, "Au plan\u00e9tarium, quelle phrase est un argument ?", [
        "Les \u00e9toiles sont de jolis points.",
        "La lumi\u00e8re a une vitesse finie, donc nous voyons les \u00e9toiles lointaines telles qu'elles \u00e9taient autrefois.",
        "Les t\u00e9lescopes utilisent des miroirs.",
        "La nuit suit le jour.",
    ], 1, "Utilise la vitesse finie de la lumi\u00e8re comme raison pour laquelle nous voyons le pass\u00e9."),
    (1031, "En faisant tomber une pomme pour une d\u00e9mo, quelle phrase est un argument ?", [
        "Les pommes peuvent \u00eatre rouges ou vertes.",
        "La Terre attire les masses vers son centre, donc la pomme acc\u00e9l\u00e8re vers le bas.",
        "Les balcons ont des garde-corps.",
        "La gravit\u00e9 porte le nom de Newton.",
    ], 1, "Utilise l'attraction gravitationnelle comme raison pour laquelle la pomme tombe."),
    (1032, "Pour un plan de pratique linguistique, quelle phrase est un argument ?", [
        "Les accents sont int\u00e9ressants.",
        "L'aisance suit une pratique r\u00e9fl\u00e9chie, donc parler un peu chaque jour vaut mieux qu'un bachotage mensuel.",
        "Les dictionnaires sont \u00e9pais.",
        "Les langues ont une grammaire.",
    ], 1, "Utilise le lien pratique/aisance pour recommander de parler chaque jour."),
    (1033, "Le Wi-Fi du bureau coupe pendant un appel vid\u00e9o. Quelle phrase est un argument ?", [
        "Les appels devraient toujours \u00eatre en vid\u00e9o.",
        "Le routeur est hors ligne, donc cet ordinateur n'atteindra pas Internet.",
        "Les c\u00e2bles Ethernet sont parfois bleus.",
        "Les modems ont des voyants.",
    ], 1, "Utilise le routeur hors ligne comme raison de l'absence d'Internet."),
    (1034, "Pour manipuler des pi\u00e8ces fragiles de mus\u00e9e, quelle phrase est un argument ?", [
        "Les art\u00e9facts sont vieux.",
        "Ces mat\u00e9riaux se fissurent sous un choc brutal, donc soutenez-les par le dessous en les d\u00e9pla\u00e7ant.",
        "Les mus\u00e9es sont payants.",
        "Les vitrines sont en verre.",
    ], 1, "Utilise la fragilit\u00e9 au choc comme raison de soulever par le dessous."),
    (1035, "En m\u00e9langeant de la peinture pour une fresque, quelle phrase est un argument ?", [
        "Le violet est \u00e0 la mode cette saison.",
        "Le pigment rouge plus le pigment bleu donne ce violet-l\u00e0, donc ces deux tubes produiront cette nuance.",
        "Les pinceaux s'usent.",
        "La toile a du grain.",
    ], 1, "Utilise le fait du m\u00e9lange des couleurs comme raison pour laquelle ces deux tubes donnent la nuance."),
    (1036, "Face \u00e0 un feu rouge en tant que jeune conducteur, quelle phrase est un argument ?", [
        "Les feux rouges sont brillants.",
        "Ce feu est rouge, donc la file qui le regarde doit s'arr\u00eater avant la ligne d'arr\u00eat.",
        "Les carrefours ont des coins.",
        "Les voitures ont des freins.",
    ], 1, "Utilise le feu rouge comme raison de s'arr\u00eater."),
    (1037, "Pour expliquer les pauses d'un groupe d'\u00e9tude, quelle phrase est un argument ?", [
        "La dette de sommeil nuit \u00e0 l'attention, donc de courtes pauses aideront \u00e0 rester concentr\u00e9.",
        "Les biblioth\u00e8ques ont des chaises.",
        "Le caf\u00e9 sent fort.",
        "Les examens ont lieu au printemps.",
    ], 0, "Utilise l'effet du sommeil sur l'attention comme raison de faire des pauses."),
    (1038, "Pour un concert complet, quelle phrase est un argument sur le prix des billets ?", [
        "Les stands vendent des T-shirts.",
        "Il reste peu de places, donc la revente demandera plus que le prix d'origine.",
        "Les concerts utilisent des enceintes.",
        "Les fans aiment la musique.",
    ], 1, "Utilise la raret\u00e9 comme raison d'une hausse des prix."),
    (1040, "Avant r\u00e9p\u00e9tition avec un big band scolaire, quelle phrase est un argument ?", [
        "Le jazz est n\u00e9 aux \u00c9tats-Unis.",
        "La guitare solo est un quart de ton bas, donc l'accord sonnera faux tant qu'on ne l'accorde pas.",
        "La musique utilise des notes.",
        "Les salles de r\u00e9p\u00e9tition ont des chaises.",
    ], 1, "Utilise une corde d\u00e9saccord\u00e9e comme raison pour laquelle l'accord sonne faux."),
    (1041, "En retirant des cupcakes du four trop t\u00f4t, quelle phrase est un argument ?", [
        "La mie para\u00eet encore humide, donc donnez cinq minutes de plus sinon ils vont s'affaisser.",
        "Le gla\u00e7age est sucr\u00e9.",
        "Les caissettes sont pliss\u00e9es.",
        "Les boulangeries ouvrent t\u00f4t.",
    ], 0, "Utilise une mie humide comme raison de prolonger la cuisson."),
    (1042, "En comparant deux relais \u00e0 l'entra\u00eenement, quelle phrase est un argument ?", [
        "Leurs chronos se sont am\u00e9lior\u00e9s tout le printemps, donc ils devraient battre le record de l'an dernier.",
        "Les relais utilisent des t\u00e9moins.",
        "Les pistes ont des couloirs.",
        "La course est a\u00e9robie.",
    ], 0, "Utilise des chronos en hausse comme raison d'attendre un record."),
    (1043, "Pour un pique-nique selon la m\u00e9t\u00e9o du matin, quelle phrase est un argument ?", [
        "Les paniers sont en osier.",
        "Le radar montre une ligne d'orages qui approche, donc emportez le b\u00e2che pour le kiosque.",
        "L'herbe est verte.",
        "Les fourmis vivent dehors.",
    ], 1, "Utilise une ligne d'orages comme raison d'emporter un abri."),
    (1048, "En relisant le devoir d'un camarade, quelle phrase est un argument ?", [
        "Les preuves utilisent la logique.",
        "Si k est pair, alors k au carr\u00e9 est pair \u2014 car k \u00e9gale 2m pour un entier m.",
        "Les nombres pairs sont entiers.",
        "Les devoirs sont imprim\u00e9s.",
    ], 1, "Utilise k = 2m comme raison pour laquelle k au carr\u00e9 est pair."),
    (1049, "Avec un calendrier des mar\u00e9es avant un relev\u00e9 du littoral, quelle phrase est un argument ?", [
        "La basse mer d\u00e9couvre plus de flaques, donc planifiez le transect sur ce cr\u00e9neau.",
        "Les livres de mar\u00e9es sont imprim\u00e9s.",
        "Le sable est granuleux.",
        "Les vagues font du bruit.",
    ], 0, "Utilise la basse mer comme raison de planifier le relev\u00e9 alors."),
    (1050, "Pour expliquer la lumi\u00e8re des \u00e9toiles \u00e0 un groupe, quelle phrase est un argument ?", [
        "Les t\u00e9lescopes sont chers.",
        "La lumi\u00e8re \u00e9toil\u00e9e a voyag\u00e9 des ann\u00e9es, donc nous voyons l'\u00e9toile telle qu'elle \u00e9tait dans le pass\u00e9.",
        "Les constellations ont des noms.",
        "Le ciel nocturne peut \u00eatre nuageux.",
    ], 1, "Utilise le temps de trajet de la lumi\u00e8re comme raison pour laquelle nous voyons le pass\u00e9."),
]


def emit_block(
    qid: int,
    question: str,
    options: list[str],
    correct: int,
    beginner: str,
    lang: str,
) -> str:
    if lang == "en":
        expl = "An argument offers a premise to support a conclusion."
        inter = "Argumentation = claim + evidence."
        expert = "P \u2192 Q structure."
    else:
        expl = "Un argument offre une pr\u00e9misse pour soutenir une conclusion."
        inter = "Argumentation = affirmation + preuve."
        expert = "Structure P \u2192 Q."
    opt_lines = ",\n      ".join(json.dumps(s) for s in options)
    return f"""  {{
    "id": {qid},
    "level": 0,
    "persona_stage": PersonaStage.TADPOLE,
    "concept": "argument-vs-assertion",
    "difficulty": 1,
    "subLevel": SubLevel.BEGINNER,
    "question": {json.dumps(question)},
    "options": [
      {opt_lines}
    ],
    "correct_option_index": {correct},
    "explanation": {json.dumps(expl)},
    "detailedExplanationBeginner": {json.dumps(beginner)},
    "detailedExplanationIntermediate": {json.dumps(inter)},
    "detailedExplanationExpert": {json.dumps(expert)},
    "questionFormat": "standard"
  }}"""


def main() -> None:
    raw = DATA.read_text(encoding="utf-8")
    fr_split = "export const LEVEL_0_GEN_FR"
    head, tail = raw.split(fr_split, 1)
    en_lines = head.splitlines(keepends=True)
    fr_lines = (fr_split + tail).splitlines(keepends=True)

    def find_id(lines: list[str], qid: int) -> int:
        for i, l in enumerate(lines):
            if f'"id": {qid},' in l:
                return i
        raise ValueError(qid)

    def block_end(lines: list[str], start: int) -> int:
        k = start
        while k < len(lines):
            if k > start and '"questionFormat"' in lines[k - 1]:
                if lines[k].strip() in ("},", "}"):
                    return k + 1
            k += 1
        raise RuntimeError("end")

    # Replace from low id upward so line indices stay valid
    out_en = en_lines
    for row in EN:
        qid = row[0]
        i = find_id(out_en, qid)
        start = i - 1 if i > 0 and out_en[i - 1].strip() == "{" else i
        j = block_end(out_en, i)
        block = emit_block(qid, row[1], row[2], row[3], row[4], "en")
        out_en = out_en[:start] + [block + ",\n"] + out_en[j:]

    out_fr = fr_lines
    for row in FR:
        qid = row[0]
        i = find_id(out_fr, qid)
        start = i - 1 if i > 0 and out_fr[i - 1].strip() == "{" else i
        j = block_end(out_fr, i)
        block = emit_block(qid, row[1], row[2], row[3], row[4], "fr")
        out_fr = out_fr[:start] + [block + ",\n"] + out_fr[j:]

    DATA.write_text("".join(out_en) + "".join(out_fr), encoding="utf-8")
    print("patched scene arguments", DATA)


if __name__ == "__main__":
    main()
