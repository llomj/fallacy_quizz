# Logical Fallacies Learn - AI Agent Operational Rules

## 1. Genome Checkpoint (STRICT STATE)
- **Target**: 900 logical fallacy questions (current question bank).
- **Domain**: 100% logical fallacies and argument analysis (formal, informal, syllogistic, probabilistic, rhetorical, etc.). The previous Python/CLI genome is deprecated and treated as legacy content only.
- **Uniqueness Level**: HIGH VARIANCE MANDATED.
- **Rule**: All 900 questions must be unique. Every question must present a distinct argumentative scenario or reasoning pattern. No duplicated stories with only surface changes. Repetitive patterns are considered a failure of educational integrity.
- **No Placeholder Options**: Multiple-choice options must be meaningful answers to the question. Never use "Option A", "Option B", "Option C", "Option D" or similar placeholders. Each option must be a plausible, content-specific answer (e.g. specific fallacy names, \"no fallacy\", or precise diagnoses). Wrong options should be plausible distractors, not generic labels.

## 2. Consent & Modification Rules
- **Explicit Consent**: No changes shall be made to the source code without explicit user approval.
- **Layout Preservation**: Do not deviate from the existing visual identity.
- **Incremental Updates**: Keep updates as minimal as possible while satisfying requirements.
- **Strict Scope Control**: When the user asks for a specific change, implement only that request. Do not add extra UI elements, display changes, or additional features unless explicitly requested.
- **Agent replies in English**: AI agents working on this project must **reply to the user in English** in chat, summaries, and task wrap-ups, unless the user explicitly asks for another language for that message. (The app itself remains bilingual per §6; French question content and UI strings are unchanged—this rule applies to **agent–user communication** only.)

## 3. Glossary & Educational Integrity
- **Glossary Source of Truth**: The `glossary.md` file is the master reference for all logical fallacy and argumentation definitions.
- **Consistency Rule**: All definitions must be consistent with `glossary.md`.
- **Pre-Change Check**: Agents must always consult `ps.md` and `planning.md` before making changes.
- **In-depth authoring progress**: Agents must always consult **`task.md`** at the repo root for unique per-question in-depth explanations (EN/FR parity, **beginner / detail** two-tier format), which files to edit, and what is already complete. Standalone maps cover Level **0** (IDs 1001–1300), Level **1** (1–90), and Levels **2–10** (91–900); see `task.md` for regeneration scripts when question banks change.
- **Batch memory**: `task.md` is the source of truth for which batch is complete and what comes next. Check it before starting a batch, and update it immediately after finishing one so the next agent can continue without guessing.
- **Debugging Reference**: Agents must always consult `ps.md` for debugging information and urgent issues.

## 4. The 900-Question Genome Goal
- **Current State**: 900 logical fallacy questions. All 900 must be unique with distinct argumentative scenarios.
- **In-depth UI (beginner / detail)**: EN+FR standalone panels for fallacy IDs **1–900** are wired via `level1StandaloneInDepth.ts` and `level2to10StandaloneInDepth.ts`; Level **0** uses `level0StandaloneInDepth.ts` (1001–1300). The new **two-tier format** (beginner = one-liner; detail = full breakdown) replaces the old beginner/intermediate/expert system. **Authoring tracker:** `task.md`.
- **Codon display contract**: when a codon / fallback explanation is shown, `Beginner` means the one-line version only; `Intermediate` means `Description` + `Example` only; `Expert` means the full breakdown, including `How it works`, `So:`, `Key concept inside it`, `Why it matters`, `The uncomfortable implication`, and `One-line version`. English and French must stay structurally identical.
- **Status**: Logical fallacy genome IN PROGRESS. Existing CLI question genome is archived/legacy and must not be used for new gameplay content.
- **Diversity Rule**: Use at least 10 reasoning templates per stage so students encounter varied argument structures and conceptual challenges (e.g. causal, analogical, statistical, rhetorical).

## 5. Testing and Deployment Rules
- **Testing Requirement**: Agents must always run tests before telling the user that the app should deploy successfully.
- **Layout Preservation**: Agents must never change the layout of the app when making changes unless explicitly asked by the user.
- **Debugging Reference**: Agents must always consult ps.md for debugging information.
- **Browser Testing**: Agents must always test the app in the browser first to ensure it works and opens correctly before pushing to Git.
- **User Consent for Commits**: Agents must always ask the user for approval before committing to Git.
- **Deploy mismatch**: When "local (Cursor) looks correct but deployed site is different", follow the **DIAGNOSTIC CHECKLIST** in ps.md. Do NOT repeat cache-clearing advice. Check Pages Source = GitHub Actions first; check two remotes (push to `fallacy`, not `origin`).

### 5.1 GitHub remote and deploy path (CRITICAL — avoid wrong-repo deploy)
This repo has **two Git remotes**. The Fallacy Quiz app deploys **only** from the **fallacy_quizz** repo. Pushing to `origin` updates a **different** repo (CLI_exercises) and **does not** update the live app.

| Remote   | URL | Used for |
|----------|-----|----------|
| **`fallacy`** | https://github.com/llomj/fallacy_quizz | **This app.** Deploy and all pushes must go here. |
| `origin` | https://github.com/llomj/CLI_exercises | Different project. Do **not** push here for this app. |

- **Correct push command (always use):** `git push fallacy main`
- **Wrong (do not use):** `git push origin main` or `git push` if default is origin
- **Live app URL:** https://llomj.github.io/fallacy_quizz/
- **Repo in browser:** https://github.com/llomj/fallacy_quizz

Before any commit that should go live, confirm with `git remote -v` that you will push to `fallacy`. After pushing, the live site updates via GitHub Actions (workflow: Deploy to GitHub Pages or branch gh-pages; see ps.md).

## 6. Internationalization & French Mode
- **Goal**: Transform this app into a fully bilingual experience (English and French). This is critical.
- **Full French Mode**: When the user selects French, **all** visible UI text and explanations must appear in French (navigation, buttons, panels, short explanations, detailed explanations, and advanced panels like Code Versatility).
- **Structural Parity**: French detailed explanations (explication du codon / description approfondie) must be structurally identical to the English versions: same sections (Key concepts, How it works, Examples, Common uses, Edge cases, etc.), same level of detail. Concrete argument texts can be localized, but the logical structure and pedagogical depth must match.
- **Standalone rewrites (EN + FR together):** When reworking Level 0 (or any level) standalone in-depth panels to the new two-tier style in §14, agents must update **both** `LEVEL_0_STANDALONE_EN` **and** `LEVEL_0_STANDALONE_FR` for the **same ID range**—not English-only. French entries use the **same** beginner / detail structure and clarity standard; scenario wording follows the **French** question bank (`LEVEL_0_GEN_FR`, etc.) where EN/FR differ for an ID (see §3 / `task.md`). Do not treat French as an optional follow-up.
- **French must match English presentation (no “markdown drift”):** For each ID, French panels must read with the **same** plain layout as English: same use of numbered steps, blank lines between steps, and comparable density of emphasis—**not** a heavier French style (bold titles on every line, **En résumé :**, **À ne pas confondre :**, stacked labels) while English is already simplified. Learners toggling **French mode** should see the same lesson shape, not a more formatted spec sheet. If English is updated first, **immediately** align French for that ID before moving on.
- **Fallback Rule**: Only fall back to English when a French translation truly does not exist yet; once added, the French version must fully mirror the English content in depth and structure.

## 7. Monetisation Goal
- **Goal**: Monetise this app later (including distribution on **App Store** and **Google Play**). Quality must be top-notch.
- **Store readiness**: For store release, the app must be **easy to understand** for a general audience. This is a **learning and education** product: explanations must be **clear**, human, and trustworthy—not generic or robotic.

## 8. Verify Code Instruction
- When the user types "verify code", the agent's role is to verify and debug any problems, issues, conflicts, or potential bugs in the codebase.

## 9. Scope and Restraint
- **Do not do things the user never asked for.** Implement only what is explicitly requested. Do not add extra features, change unrelated code, or "improve" things without being asked.
- **Visual clarity for highlight panels:** Keep syntax highlighting / emphasis aesthetic and readable. Avoid large blocks in a single highlight color—ensure comments, examples, and explanations remain legible and consistent with the app’s dark theme.

## 10. Logical Fallacy Quiz — Question Text and Wrong-Answer Highlight
- **Question text (logical fallacies):** The question/example text in the quiz card must stay **white** (`text-slate-100`) and **smaller** (`text-base md:text-lg`). Do not change it to yellow or larger; agents must not alter this styling unless the user explicitly asks.
- **Wrong-answer highlight:** When the user selects the wrong answer, only the **option panel** (the clicked wrong-answer button) must light up with **#FF00FF** (border/glow). The main quiz card border must **not** change to FF00FF; only the wrong-answer choice panel should use that color.

## 11. Settings Menu Order (STRICT)
- **Do not change the order of settings menu items** unless the user explicitly asks to do so.
- **Canonical order** (top to bottom): (1) Random mode (switch), (2) Select level, (3) Search by ID, (4) ID Log, (5) Learning log, (6) Logical rules, (7) Glossary, (8) Translation (language toggle), (9) Refresh app, (10) Reset. Items are only shown when their handler is provided; the order of those that appear must follow this list.

## 12. Offline PWA Requirement (CRITICAL)
- **Goal**: The application must run fully offline when opened from the phone's home screen or browser.
- **Rule**: Whenever changes are made to the service worker, caching, or PWA configurations (`vite.config.ts`, `manifest.json`), ensure that the app can function entirely without internet connectivity. `vite-plugin-pwa` is configured to precache all assets, and the manifest should have the correct `start_url` relative to the repository path.
- **GlossaryView must NEVER be lazy-loaded**: `GlossaryView` is imported **eagerly** (static import) in `App.tsx`. Do NOT convert it to a `lazy()` import. Lazy-loaded chunks get new content-hash filenames on every build; the service worker on the user's device will serve the old cached chunk URL which returns 404, causing Glossary to silently fail. The eager import bundles GlossaryView into the main chunk, which is always freshly fetched.
- **SW version string**: The footer in `App.tsx` contains `SW vN`. **Bump N by 1 every time you push a fix** that users need to pick up immediately. This tells the service worker there's a new version and forces a cache refresh on all devices. Keep it in sync with commits.

## 13. Level Mode vs Random Mode — Separate Point Systems & Start Level (CRITICAL)
- **Default mode on app open**: When the user opens the app, the default must be **Level mode**, not Random mode. The Random mode switch must be off by default so that new and returning users start in Level mode unless they explicitly enable Random mode.
- **Separate points**: Level mode and Random mode each have their own point system. Level mode uses `xp`; Random mode uses `randomModeXp`. Points must never be shared or carried over between modes. When the user is in Random mode, the UI (e.g. nav bar bolt/XP) must show only Random-mode points (starting at 0 when they have not yet earned any in Random). When in Level mode, show only Level-mode `xp`.
- **Start level**: When a user starts the game (fresh state), the game starts on **level 0**, not level 1. Initial state must use `currentLevel: 0` and `highestUnlockedLevel: 0`. Do not default new users to level 1.

## 14. Codon / in-depth explanations — NEW FORMAT OVERHAUL (LAST BIG TASK)

> **This is the final major content task for the app. Do not skip it or defer it.**

**Status:** IN PROGRESS — working through all IDs **1–90** (Level 1) first, then **91–900** (Levels 2–10), then **1001–1300** (Level 0), in batches of **20**, English and French in the **same pass**. Track progress in **`task.md`**.

---

### The new two-tier format (replaces beginner / intermediate / expert)

The old three-tier system (beginner / intermediate / expert) is **abolished**. Replace it with:

| Tier | Purpose | Length |
|------|---------|--------|
| **Beginner** | A single plain sentence — the one-line version of the fallacy for this question. | 1 sentence max |
| **Detail** | A full structured breakdown in the Weber-Fechner style below. | ~200–350 words |

There is no "intermediate" or "expert" tab anymore. The UI shows **Beginner** and **Detail** only.

---

### Detail panel format (MANDATORY — follow exactly)

The Detail panel must look like the reference example below. **Section headers must use syntax highlighting** (rendered as highlighted/accented text — `text-yellow-400` family — in the app). Use this structure:

```
[Fallacy Name]

Description:
[One or two sentences — core idea, plain language.]
[Memorable contrast line if helpful.]

Example ([label])
[Concrete bullet-style lines showing the fallacy in action]
[Short punchy conclusion line]

Example ([label])
[A second example in a different context]
[Short punchy conclusion line]

[Section heading — e.g. "How it works" or "Why this is a fallacy"]
[Short plain-language explanation of the mechanism]

So:
[Two or three bullet consequences]

Key concept inside it
[Term]:
[Short definition, 1–2 lines]

Why it matters
Explains why:
[2–4 real-world bullet applications]

The uncomfortable implication
[One or two candid, punchy lines about what this means for reasoning.]

One-line version
[Fallacy Name] = [plain-language definition in one clause].
```

**Reference example (Weber-Fechner Law — use as a style template):**

```
Weber-Fechner Law

Description:
The noticeable change in a stimulus depends on its proportion, not its size.
Same change ≠ same perception.

Example (weight)
Add 1 kg to 2 kg → very noticeable
Add 1 kg to 50 kg → barely noticeable

Same increase. Completely different experience.

Example (money)
Gaining $100 when you have $200 → significant
Gaining $100 when you have $1,000,000 → irrelevant

Your perception scales with context.

The formula (simplified idea)
Perceived intensity grows roughly like a logarithm of actual intensity.

So:
Big increases → feel smaller over time
Small changes → only noticeable when they pass a threshold

Key concept inside it
Just Noticeable Difference (JND):
The smallest change you can detect
It scales proportionally with the original stimulus

Why it matters
Explains why:
Loud music needs bigger increases to feel louder
Price changes affect poor and rich people differently
Marketing plays with "perceived value"

The uncomfortable implication
Your senses don't measure reality.
They measure relative differences.

One-line version
Weber–Fechner Law = you perceive changes proportionally, not absolutely.
```

---

### Rules for writing Detail panels

- **Headers must be syntax-highlighted** in the UI. The following section header lines are rendered in the yellow accent (`text-yellow-300 font-semibold`) by `ExplanationWithStepNumbers.tsx`:
  - `Description:` / `Description :`
  - `Example (…)` / `Exemple (…)`
  - `How it works` / `Comment ça fonctionne`
  - `Why it matters` / `Pourquoi c'est important`
  - `One-line version` / `En une phrase`
  - `The uncomfortable implication` / `L'implication inconfortable`
  - `Key concept inside it` / `Concept clé`
  - `So:` / `Donc :`
  - `Why this is a fallacy` / `Pourquoi c'est une erreur`
  - `The formula` / `La formule`
  - `Explains why:` / `Explique pourquoi :`
  Use these exact strings as your section headers — they are pattern-matched by the renderer. Do not use markdown `##` or `**` for these headers; plain text is correct.
- **Plain language only.** No jargon without a definition. Write for someone with no logic training.
- **No label soup.** Do not stack bold labels on every line. Use headers + plain prose/bullets.
- **Concrete examples.** Every Detail panel needs at least **two examples** in different contexts.
- **One-line version is mandatory.** It must appear at the bottom of every Detail panel AND is the text shown in the **Beginner** tier.
- **EN + FR in the same batch pass.** A batch is incomplete if French is missing. French must follow the same structure and be written in natural French — not a word-for-word translation when the scenario differs for that ID (check `LEVEL_0_GEN_FR` / `FALLACY_QUESTIONS_FR`).
- **20 questions per batch.** Process 20 IDs at a time. Do not jump ahead.
- **Presentation parity (§6):** French must not use more markdown or heavier formatting than English for the same ID.

---

**Agent checklist — each batch of 20:**

1. Read the exact question + answer options for each ID in both EN and FR banks.
2. Write **Beginner** (one-liner) + **Detail** (structured breakdown) for all 20 IDs in English.
3. Write the **French** Beginner + Detail for the same 20 IDs in the same pass.
4. Ensure section headers in the Detail panel are consistently marked for syntax highlighting.
5. Check glossary consistency (§3).
6. Update **`task.md`** progress table after the batch.
7. Run `npm run build` before committing.

**Batch counting:** IDs **1–90** = 5 batches of 20 (Level 1). IDs **91–900** = 41 batches of 20 (Levels 2–10, last batch = 2 IDs). IDs **1001–1300** = 15 batches of 20 (Level 0).
