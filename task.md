# Fallacy Quiz — In-depth explanations (authoring tracker)

**Purpose:** Every question should eventually have **unique** in-depth text for **Beginner**, **Intermediate**, and **Expert**, tightly tied to **that** question’s scenario. **English** and **French** must stay in **structural parity** (same sections, same depth; intermediate and expert should be verbose and step-by-step where useful).

**Coverage status (this tracker):** **Complete** for all IDs in scope — Level **0** (1001–1300), Level **1** (1–90), and Levels **2–10** (91–900). Fallacy IDs **1–900** use the **layperson / fallacy-only** template (see Authoring checklist). Level **0** items teach argument basics (e.g. premise/conclusion) and may still **walk through answer choices** where that is the skill being tested; a future pass could align tone with the fallacy style if desired.

**Technical source of truth (Level 0):** `src/data/inDepth/level0StandaloneInDepth.ts`  
- `LEVEL_0_STANDALONE_EN` / `LEVEL_0_STANDALONE_FR`: `Record<questionId, { beginner, intermediate, expert }>` — **300 / 300** IDs present (see Level 0 progress below).  
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

**Rule:** Mark an ID **done** only when **both** `LEVEL_0_STANDALONE_EN` and `LEVEL_0_STANDALONE_FR` contain `beginner`, `intermediate`, and `expert` for that ID.

| Range | IDs complete | Notes |
|-------|----------------|-------|
| 1001–1010 | **10 / 10** | First batch: argument-vs-assertion / foundations; EN+FR parity |
| 1011–1020 | **10 / 10** | Organic/transport/solar + “Scene:” items; FR bank differs for **1012–1013** (Linguistique / Technologie vs EN public transport / solar)—standalone text follows each bank |
| 1021–1030 | **10 / 10** | Bake-off, sprint, hike, car, plants, library, walking, algebra, tide, planetarium — EN/FR alignés sur cette plage |
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

**Rule:** Mark an ID **done** only when **both** `LEVEL_1_STANDALONE_EN` and `LEVEL_1_STANDALONE_FR` contain `beginner`, `intermediate`, and `expert` for that ID.

**Source of truth:** Questions live in **`fallaciesData.ts`** (`FALLACY_QUESTIONS_EN` / `FALLACY_QUESTIONS_FR`), IDs **1–90**, `level: 1`.

| Range | IDs complete | Notes |
|-------|----------------|-------|
| 1–90 | **90 / 90** | `level1StandaloneInDepth.ts` — EN+FR; regenerate via `scripts/generate-level1-standalone.mjs` if `fallaciesData` changes |

**Completed IDs (Level 1):** **1–90** (**90 / 90**)

---

## Levels 2–10 progress (810 IDs: 91–900)

**Rule:** Same as Level 1 — each ID needs **both** EN and FR standalone maps with all three depths.

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

**Completed IDs (Levels 2–10):** **91–900** (**810 / 810**)

---

## Authoring checklist (each ID)

1. Read the **exact** question and options in `LEVEL_0_GEN_EN` and `LEVEL_0_GEN_FR` (same ID).
2. Write **beginner**: plain language, walk through distractors vs correct option using **this** scenario.
3. Write **intermediate**: longer, step-by-step, explicit mapping (premise/conclusion or problem/fix where relevant).
4. Write **expert**: formal vocabulary, reconstruction, distractor analysis, optional pedagogical caveats.
5. Translate to French with **matching** sections and depth (not a summary).
6. Add entries to both `LEVEL_0_STANDALONE_EN` and `LEVEL_0_STANDALONE_FR` for the same ID.
7. Run `npm run build` before committing.

**Level 1:** Same checklist, but use `LEVEL_1_STANDALONE_EN` / `LEVEL_1_STANDALONE_FR` and IDs **1–90**. Bulk content is generated by `scripts/generate-level1-standalone.mjs`; hand-edit individual IDs if a scenario needs richer pedagogy.

**Levels 2–10:** Same checklist pattern; bulk content is generated by `scripts/generate-standalone-levels-2-10.mjs`; hand-edit individual IDs as needed.

**Fallacy in-depth style (IDs 1–900):** Text should stay **easy to read**, focus on **the named fallacy only** (do not walk through the wrong multiple-choice labels). **Beginner** = definition + this passage; **Intermediate** = same core + **more examples** of that fallacy; **Expert** = more examples + **rules / checks**. Regenerate from the scripts after changing this pattern.

---

## Agents

- **Always read this file** before adding or editing in-depth content.  
- Keep `AGENTS.md` glossary and `glossary.md` consistency for fallacy definitions.  
- After completing a batch, update the **Range** table and **Last updated** below.

**Last updated:** 2026-03-21 (fallacy in-depth template: layperson, fallacy-only, progressive examples)

### Next steps (optional, not blocking)

- **Editorial:** Replace or augment template-heavy entries where pedagogical value would benefit from bespoke copy (same section structure; EN/FR parity).
- **Bank changes:** After edits to `fallaciesData.ts` or Level 0 question banks, rerun the relevant generator (`generate-level1-standalone.mjs`, `generate-standalone-levels-2-10.mjs`, or Level 0 authoring flow) and `npm run build`.
