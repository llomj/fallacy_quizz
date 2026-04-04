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
- **In-depth authoring progress**: Agents must always consult **`task.md`** at the repo root for unique per-question in-depth explanations (EN/FR parity, beginner/intermediate/expert), which files to edit, and what is already complete. Standalone maps cover Level **0** (IDs 1001–1300), Level **1** (1–90), and Levels **2–10** (91–900); see `task.md` for regeneration scripts when question banks change.
- **Debugging Reference**: Agents must always consult `ps.md` for debugging information and urgent issues.

## 4. The 900-Question Genome Goal
- **Current State**: 900 logical fallacy questions. All 900 must be unique with distinct argumentative scenarios.
- **In-depth UI (beginner / intermediate / expert)**: EN+FR standalone panels for fallacy IDs **1–900** are wired via `level1StandaloneInDepth.ts` and `level2to10StandaloneInDepth.ts`; Level **0** uses `level0StandaloneInDepth.ts` (1001–1300). **Authoring tracker:** `task.md`.
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
- **Standalone rewrites (EN + FR together):** When reworking Level 0 (or any level) standalone in-depth panels to the plain, step-by-step style in §14, agents must update **both** `LEVEL_0_STANDALONE_EN` **and** `LEVEL_0_STANDALONE_FR` for the **same ID range**—not English-only. French entries use the **same** beginner / intermediate / expert structure and clarity standard; scenario wording follows the **French** question bank (`LEVEL_0_GEN_FR`, etc.) where EN/FR differ for an ID (see §3 / `task.md`). Do not treat French as an optional follow-up.
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

## 14. Codon / in-depth explanations — quality overhaul (TRACKED TASK)

**Status:** In progress. **Work order:** Start at **Level 0** (question IDs **1001–1300**, `level0StandaloneInDepth.ts`), then Level **1** (1–90), then Levels **2–10** (91–900). Do not skip ahead; advance only when the current band meets the quality bar below. Detailed authoring progress and file references: **`task.md`** (EN/FR parity required per §6).

**Problem to fix:** Codon explanations (beginner / intermediate / expert panels) must not read as **generic, robotic, or lifeless**. They must help users **detect logical fallacies in real arguments**—this is core pedagogy for a learning tool.

**Per-question specificity:** Each explanation should **tie to the actual question/scenario** where it adds value—especially at **beginner** level—so the learner sees *why* this stem illustrates the fallacy, not a boilerplate definition dump.

**By depth (English + French, structurally aligned per §6):**

| Depth | Purpose |
|-------|---------|
| **Beginner** | Short, plain-language explanation **grounded in the question**—simple and specific enough that a new learner connects stem → fallacy. |
| **Intermediate** | Somewhat more verbose; use **additional examples** (they may differ from the question) that **clearly illustrate** the same fallacy pattern in varied contexts. |
| **Expert** | Deeper analysis: nuance, edge cases, and **distinct expert content**—**do not repeat** the same illustrative examples used at intermediate (or duplicate the stem). Add **distinctions** where useful: e.g. “not to be confused with…”, “similar to… but differs because…”, related fallacies. |

**Commercial / education alignment:** Store-bound apps (§7) compete on clarity and trust. Explanations are a primary product surface: they must read as **human, precise, and educational**, suitable for users who may have no prior logic training.

**Plain, step-by-step presentation (mandatory):** In-depth text must be **easy to read and follow**—like a short lesson plan, not a wall of formatting or jargon.

- **Step by step:** Where the logic is not obvious, use **numbered steps** (1, 2, 3…) so the learner can follow the reasoning in order. Prefer **one clear path** over dense prose.
- **Number formatting (readability):** Always put **one space after the period** in each list marker before the text: write `1. ` `2. ` `3. ` (digit, period, space, then content)—not `1.Text` jammed together. **Between steps,** insert a **blank line** (double newline in the string) so each numbered item is visually separated in the panel and easier to scan. Apply the same rule to **English and French** in-depth strings.
- **Step numbers in the UI:** In the app, **only** the step marker at the **start of a line** matching that pattern (`N. `) is rendered in the **yellow accent** used for in-depth controls—the same family as **“Show detailed explanation”** / in-depth section headings (`text-yellow-400` on the main quiz card; `text-yellow-300` in ID log, learning log, and search-by-ID panels). The rest of each line keeps the normal body color so lists scan clearly. Implementation: **`ExplanationWithStepNumbers`** (`src/components/ExplanationWithStepNumbers.tsx`). If panel typography changes, keep step styling consistent with those controls.
- **Plain language:** Short sentences. Explain **what to do** on the question (e.g. “First find the premise…”) before naming technical labels.
- **Avoid markdown-heavy “label soup”:** Do **not** pack panels with excessive bold, repeated headers (**Takeaway:**, **Not to be confused with:**, **Different example:**) on every line, or stacks of inline emphasis that look like a spec sheet. Light emphasis is fine when it helps; **readability and teaching** come first.
- **Structure over decoration:** A clear **plan** (steps + short wrap-up) beats stylistic flourishes. Intermediate may still use **one** extra example when it teaches; expert may still give distinctions—without turning every paragraph into a formatted checklist.

**English and French in the same pass (mandatory):** A content pass is **incomplete** if only one language is updated. For Level 0 standalone maps in `level0StandaloneInDepth.ts`, every ID band you rewrite in **English** must have the matching **French** entries rewritten to the same standard: plain language, numbered steps where helpful, no label soup, same three tiers. French must align with **`LEVEL_0_GEN_FR`** (and French bank rules) for each ID—some IDs differ from English; French text is **not** a blind translation when the scenario differs. **Presentation parity:** French must not use more markdown or labeling than English for the same ID (§6 “markdown drift”). Higher levels: apply the same rule to `level1StandaloneInDepth.ts` / `level2to10StandaloneInDepth.ts` (EN + FR maps) when those bands are in scope.

**Agent checklist when authoring or reviewing in-depth content:** glossary-consistent (§3); no placeholder tone; beginner tied to the question; **plain + step-by-step** presentation per bullets above; **EN + FR for the same IDs** (§6 standalone bullet); intermediate adds varied examples where they teach (not for decoration); expert adds depth without recycling examples; Level 0 → Level 1 → higher levels in order; update **`task.md`** as sections complete.

**Batch counting (Level 0):** IDs **1001–1300** = **300** questions = **30** batches if each batch is **10** consecutive IDs. There are **not** 100 Level 0 batches—continue batch numbering across levels if you need a long-running count (e.g. Level 1 batches after Level 0’s 30).
