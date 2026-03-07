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

## 3. Glossary & Educational Integrity
- **Glossary Source of Truth**: The `glossary.md` file is the master reference for all logical fallacy and argumentation definitions.
- **Consistency Rule**: All definitions must be consistent with `glossary.md`.
- **Pre-Change Check**: Agents must always consult `ps.md` and `planning.md` before making changes.
- **Debugging Reference**: Agents must always consult `ps.md` for debugging information and urgent issues.

## 4. The 900-Question Genome Goal
- **Current State**: 900 logical fallacy questions. All 900 must be unique with distinct argumentative scenarios.
- **Status**: Logical fallacy genome IN PROGRESS. Existing CLI question genome is archived/legacy and must not be used for new gameplay content.
- **Diversity Rule**: Use at least 10 reasoning templates per stage so students encounter varied argument structures and conceptual challenges (e.g. causal, analogical, statistical, rhetorical).

## 5. Testing and Deployment Rules
- **Testing Requirement**: Agents must always run tests before telling the user that the app should deploy successfully.
- **Layout Preservation**: Agents must never change the layout of the app when making changes unless explicitly asked by the user.
- **Debugging Reference**: Agents must always consult ps.md for debugging information.
- **Browser Testing**: Agents must always test the app in the browser first to ensure it works and opens correctly before pushing to Git.
- **User Consent for Commits**: Agents must always ask the user for approval before committing to Git.
- **Deploy mismatch**: When "local (Cursor) looks correct but deployed site is different", follow the **DIAGNOSTIC CHECKLIST** in ps.md. Do NOT repeat cache-clearing advice. Check Pages Source = GitHub Actions first; check two remotes (push to `fallacy`, not `origin`).

## 6. Internationalization & French Mode
- **Goal**: Transform this app into a fully bilingual experience (English and French). This is critical.
- **Full French Mode**: When the user selects French, **all** visible UI text and explanations must appear in French (navigation, buttons, panels, short explanations, detailed explanations, and advanced panels like Code Versatility).
- **Structural Parity**: French detailed explanations (explication du codon / description approfondie) must be structurally identical to the English versions: same sections (Key concepts, How it works, Examples, Common uses, Edge cases, etc.), same level of detail. Concrete argument texts can be localized, but the logical structure and pedagogical depth must match.
- **Fallback Rule**: Only fall back to English when a French translation truly does not exist yet; once added, the French version must fully mirror the English content in depth and structure.

## 7. Monetisation Goal
- **Goal**: Monetise this app later. Quality must be top-notch.

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
