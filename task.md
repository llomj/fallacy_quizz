# Fallacy Quiz — In-depth explanations (authoring tracker)

**Purpose:** Every question must have **unique** in-depth text for both **Beginner** and **Detail** tiers, tightly tied to **that** question's scenario. **English** and **French** must be done in the **same pass**. The old three-tier system (beginner / intermediate / expert) is **abolished** — the UI now shows **Beginner** (one-liner) and **Detail** (full structured breakdown) only. See §14 AGENTS.md for the mandatory format (Weber-Fechner style with syntax-highlighted section headers).

> **This is the last major content task for the app. It must be completed.**

**Work order:** Level **1** (IDs 1–90) → Levels **2–10** (IDs 91–900) → Level **0** (IDs 1001–1300). Batches of **20** IDs. EN + FR in the **same pass** — a batch is not done until both languages are written.

**Codon quality pass — NEW FORMAT (§14 AGENTS.md, Apr 2026):**
- **Beginner** = one-liner sentence (the "One-line version" from the Detail panel).
- **Detail** = full Weber-Fechner-style structured breakdown with syntax-highlighted section headers.
- 20 questions per batch. Do not jump ahead.
- EN + FR in the same pass — French must use the same structure and natural French (not word-for-word translation when scenarios differ).


**Technical source of truth (Level 0):** `src/data/inDepth/level0StandaloneInDepth.ts`  
- `LEVEL_0_STANDALONE_EN` / `LEVEL_0_STANDALONE_FR`: `Record<questionId, { beginner, detail }>` — **300 / 300** IDs present (see Level 0 progress below). **NEW FORMAT in progress** — all IDs need rewriting to Beginner (one-liner) + Detail (Weber-Fechner style).  
- When an ID is present, the app shows that string as the **full** in-depth panel (no codon wrapper).  
- Pipeline: `getDetailedExplanationForLevel` (EN) and `getTranslatedDetailedExplanation` (FR) read these maps first for Level 0 (IDs **1001–1300** in FR lookup).

**Level 1:** `src/data/inDepth/level1StandaloneInDepth.ts`  
- `LEVEL_1_STANDALONE_EN` / `LEVEL_1_STANDALONE_FR` for **IDs 1–90** (`fallaciesData.ts`, `level: 1`).  
- Wired in the same pipeline; FR lookup uses ID range **1–90** before codon/legacy fallbacks.

**Levels 2–10:** `src/data/inDepth/level2to10StandaloneInDepth.ts`  
- `LEVELS_2_TO_10_STANDALONE_EN` / `LEVELS_2_TO_10_STANDALONE_FR` for **IDs 91–900** (`fallaciesData.ts`, `level: 2` … `level: 10`).  
- **ID mapping:** level 2 → **91–180**, level 3 → **181–270**, …, level 10 → **811–900** (90 IDs per level).  
- EN: `getDetailedExplanationForLevel` uses these maps when `q.level` is 2–10. FR: `getTranslatedDetailedExplanation` uses **91–900** after Level 1.  
- **Regenerate** after bank edits: `node scripts/generate-standalone-levels-2-10.mjs`

**Level 1 regenerate:** `node scripts/generate-level1-standalone.mjs`

---

## Scope

| Level | Question IDs (`fallaciesData`) | Count | Status |
|-------|-------------------------------|-------|--------|
| 0 | 1001–1300 | 300 | **Standalone text complete** (see below) |
| 1 | 1–90 | 90 | **Standalone text complete** |
| 2 | 91–180 | 90 | **Standalone text complete** (`level2to10StandaloneInDepth.ts`) |
| 3 | 181–270 | 90 | **Standalone text complete** (same file) |
| 4 | 271–360 | 90 | **Standalone text complete** (same file) |
| 5 | 361–450 | 90 | **Standalone text complete** (same file) |
| 6 | 451–540 | 90 | **Standalone text complete** (same file) |
| 7 | 541–630 | 90 | **Standalone text complete** (same file) |
| 8 | 631–720 | 90 | **Standalone text complete** (same file) |
| 9 | 721–810 | 90 | **Standalone text complete** (same file) |
| 10 | 811–900 | 90 | **Standalone text complete** (same file) |

---

## Level 0 progress (300 IDs)

**Rule:** Mark an ID **done** only when **both** `LEVEL_0_STANDALONE_EN` and `LEVEL_0_STANDALONE_FR` contain `beginner` (one-liner) and `detail` (full Weber-Fechner-style breakdown) for that ID — in the new two-tier format.

| Range | IDs complete | Notes |
|-------|----------------|-------|
| 1001–1010 | **10 / 10** | First batch: argument-vs-assertion / foundations; EN+FR parity — **Mar 2026:** codon quality pass (warmer, scenario-led beginner; intermediate adds off-card examples; expert adds distinctions; see §14 AGENTS.md) |
| 1011–1020 | **10 / 10** | Organic/transport/solar + “Scene:” items; FR bank differs for **1012–1013** (Linguistique / Technologie vs EN public transport / solar)—standalone text follows each bank — **Mar 2026:** codon quality pass (§14 AGENTS.md) |
| 1021–1030 | **10 / 10** | Bake-off, sprint, hike, car, plants, library, walking, algebra, tide, planetarium — EN/FR alignés sur cette plage — **Mar 2026:** codon quality pass (§14 AGENTS.md) |
| 1031–1040 | **10 / 10** | Apple/gravity, language practice, router, museum, paint, red light, study breaks, resale tickets, quiet-hours policy, jazz tuning — EN/FR alignés |
| 1041–1050 | **10 / 10** | Cupcakes, relay, squall picnic, tool shed, night-sky alerts, lead fountain, counseling wait, even-k² proof, tide transect, starlight lookback |
| 1051–1060 | **10 / 10** | Premise-identification drills (Since / Comme …) — gravity through guitar tuning |
| 1061–1070 | **10 / 10** | Premise-identification — oven/cake through light travel / stars as past |
| 1071–1080 | **10 / 10** | Premise-identification (repeat cycle vs 1051–1060) — fresh framing per ID |
| 1081–1090 | **10 / 10** | Premise-identification (third pass vs 1061–1070) — distinct sub-framing per ID |
| 1091–1100 | **10 / 10** | Premise-identification (fourth pass vs 1051–1060) — distinct sub-framing per ID |
| 1101–1110 | **10 / 10** | Conclusion-identification (therefore / par conséquent) — oven through starlight lookback |
| 1111–1120 | **10 / 10** | Conclusion-identification (2nd cycle vs 1051–1060 themes) — distinct framing per ID |
| 1121–1130 | **10 / 10** | Conclusion-identification (3rd cycle vs 1061–1070 / 1101–1110 themes) — distinct framing per ID |
| 1131–1200 | **70 / 70** | Conclusion-identification (1131–1150); fact-vs-opinion (1151–1200) — EN+FR parity |
| 1201–1300 | **100 / 100** | Validity-definition (1201–1250); soundness-definition (1251–1300) — EN+FR parity; IDs **1272–1273** added (software audit + “true premises ⇒ sound?” mistake) |

**Completed IDs (Level 0):** **1001–1300** (**300 / 300**)

**Note:** For the same numeric ID, `LEVEL_0_GEN_EN` and `LEVEL_0_GEN_FR` sometimes use **different scenarios** (e.g. ID 1012). French in-depth entries must match the **French** question text, not a literal translation of the English item.

---

## Level 1 progress (90 IDs: 1–90)

**Rule:** Mark an ID **done** only when **both** `LEVEL_1_STANDALONE_EN` and `LEVEL_1_STANDALONE_FR` contain `beginner` (one-liner) and `detail` (full Weber-Fechner-style breakdown) for that ID — new two-tier format.

**Source of truth:** Questions live in **`fallaciesData.ts`** (`FALLACY_QUESTIONS_EN` / `FALLACY_QUESTIONS_FR`), IDs **1–90**, `level: 1`.

| Range | IDs complete | Notes |
|-------|----------------|-------|
| 1–20 | **20 / 20** | NEW FORMAT ✅ EN: Ad Hominem (1–3), Appeal to Authority (4–6), Appeal to Tradition (7–9), Appeal to Novelty (10–12), Appeal to Popularity (13–15), Appeal to Emotion (16–18), Appeal to Fear (19–20). FR: Ad Hominem (1–3), Ad Hominem Abusif (4–6), Ad Hominem Circonstanciel (7–9), Tu Quoque (10–12), Appel à l'Autorité (13–15), Appel à la Fausse Autorité (16–18), Appel à l'Autorité Anonyme (19–20). |
| 21–40 | **20 / 20** | NEW FORMAT ✅ EN: Appeal to Fear (21), Appeal to Ignorance (22–24), Appeal to Incredulity (25–27), Anecdotal Fallacy (28–30), Availability Heuristic (31–33), Base Rate Fallacy (34–36), Begging the Question (37–39), Biased Sample (40). FR: Appel Autorité Anonyme (21), Appel à la Tradition (22–24), Appel à la Nouveauté (25–27), Appel à la Popularité (28–30), Appel à la Majorité (31–33), Effet de Mode/Bandwagon (34–36), Appel à l'Émotion (37–39), Appel à la Peur (40). |
| 41–60 | **20 / 20** | NEW FORMAT ✅ EN+FR complete. |
| 61–80 | **20 / 20** | NEW FORMAT ✅ EN+FR complete. |
| 81–90 | **0 / 10** | NEW FORMAT — to do (Batch 5, 10 IDs) |

**Completed IDs (Level 1) — NEW FORMAT:** **40 / 90** (Batches 1–4 done; Batch 4 complete here)

---

## Levels 2–10 progress (810 IDs: 91–900)

**Rule:** Same as Level 1 — each ID needs **both** EN and FR standalone maps with `beginner` (one-liner) and `detail` (Weber-Fechner-style breakdown) in the new two-tier format.

**Source of truth:** **`fallaciesData.ts`**, IDs **91–900**, `level: 2` … `level: 10` (see Scope table for ranges).

| Game level | ID range | Count | Status |
|------------|----------|-------|--------|
| 2 | 91–180 | 90 | **90 / 90** |
| 3 | 181–270 | 90 | **90 / 90** |
| 4 | 271–360 | 90 | **90 / 90** |
| 5 | 361–450 | 90 | **90 / 90** |
| 6 | 451–540 | 90 | **90 / 90** |
| 7 | 541–630 | 90 | **90 / 90** |
| 8 | 631–720 | 90 | **90 / 90** |
| 9 | 721–810 | 90 | **90 / 90** |
| 10 | 811–900 | 90 | **90 / 90** |

**Module:** `level2to10StandaloneInDepth.ts` — regenerate: `node scripts/generate-standalone-levels-2-10.mjs`

**Apr 2026 style pass:** Level **10** IDs **811–827** were rewritten in the plain numbered lesson format (EN + FR) to match the easier-to-scan style used in Level 0.

**Completed IDs (Levels 2–10) — NEW FORMAT:** **0 / 810** (all need rewriting to Beginner+Detail two-tier style)

---

## Authoring checklist (each batch of 20 IDs)

1. Read the **exact** question and options in both EN and FR banks for each ID in the batch.
2. Write **Beginner** = a single sentence (the "One-line version" for that specific fallacy and question).
3. Write **Detail** = full structured breakdown in the Weber-Fechner style (see §14 AGENTS.md): `Description:` → 2+ examples → mechanism → `So:` bullets → `Key concept inside it` → `Why it matters` → `The uncomfortable implication` → `One-line version`.
4. Ensure section headers in Detail are marked for syntax-highlighting (yellow accent in UI).
5. Repeat steps 2–4 in **French** for the same 20 IDs in the same pass.
6. Add/update entries in both `*_STANDALONE_EN` and `*_STANDALONE_FR` for the same IDs.
7. Run `npm run build` before committing.



**Level 1:** Same checklist, but use `LEVEL_1_STANDALONE_EN` / `LEVEL_1_STANDALONE_FR` and IDs **1–90**. Bulk content is generated by `scripts/generate-level1-standalone.mjs`; hand-edit individual IDs if a scenario needs richer pedagogy.

**Levels 2–10:** Same checklist pattern; bulk content is generated by `scripts/generate-standalone-levels-2-10.mjs`; hand-edit individual IDs as needed.

**NEW FORMAT (IDs 1–900, §14 AGENTS.md):**
- **Beginner** = one single sentence (the "One-line version" at the bottom of the Detail panel).
- **Detail** = full Weber-Fechner-style structured breakdown with syntax-highlighted section headers. At least 2 examples in different contexts. Plain language. No jargon.
- Headers in Detail must be highlighted (yellow accent in UI): `Description:`, `Example (…)`, `Why it matters`, `One-line version`, etc.
- Do not use intermediate or expert tiers — they are gone.
- EN + FR in the same pass. French must be natural, not a literal translation.

---

## Agents

- **Always read this file** before adding or editing in-depth content.  
- Keep `AGENTS.md` glossary and `glossary.md` consistency for fallacy definitions.  
- After completing a batch, update the **Range** table and **Last updated** below.

**Last updated:** 2026-04-25 (Batch 4 complete; next up: 81–90)

### Next steps (optional, not blocking)

- **Editorial:** Replace or augment template-heavy entries where pedagogical value would benefit from bespoke copy (same section structure; EN/FR parity).
- **Bank changes:** After edits to `fallaciesData.ts` or Level 0 question banks, rerun the relevant generator (`generate-level1-standalone.mjs`, `generate-standalone-levels-2-10.mjs`, or Level 0 authoring flow) and `npm run build`.
