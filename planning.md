# Logical Fallacies Learn — Development Planning & Roadmap

> An iterative planning document for evolving the app. **Platform**: Mobile-first (PWA). Prioritise touch, small screens, on-the-go use. Add ideas, refine them, and track what’s done vs. what’s next.

---

## Logical Fallacies Transformation (Current Focus)

**Goal**: Transform the app into a **Logical Fallacies & Argument Analysis Learning App**. Same layout, evolution system, and bilingual (EN/FR) parity. Replace all Python/CLI content with logical fallacy questions and explanations.

### Topic-to-Level Mapping (Fallacies)

| Level | Persona | Domain | Topics (sample) |
|-------|---------|--------|------------------|
| 0 | Tadpole | Foundations of Arguments | Premises vs conclusions, arguments vs assertions, validity vs soundness (intuitive), fact vs opinion |
| 1 | Plankton | Everyday Fallacies I | Ad hominem, straw man, appeal to authority (misused), appeal to popularity, false dilemma |
| 2 | Shrimp | Everyday Fallacies II | Red herring, slippery slope, hasty generalization, weak analogy, appeal to emotion |
| 3 | Crab | Causal Fallacies | Post hoc, cum hoc, reversed causation, oversimplified cause, neglecting confounders |
| 4 | Small Fish | Ambiguity & Language | Equivocation, amphiboly, loaded questions, vagueness, moving goalposts |
| 5 | Octopus | Formal Fallacies I | Simple invalid syllogisms, affirming the consequent, denying the antecedent, undistributed middle (concrete examples) |
| 6 | Seal | Formal Fallacies II | Abstract syllogisms, quantifier errors, scope fallacies, contrast with valid-but-counterintuitive arguments |
| 7 | Dolphin | Probability & Evidence | Base-rate neglect, gambler’s fallacy, prosecutor’s fallacy, cherry-picking, survivorship bias |
| 8 | Shark | Rhetorical Manipulation | Poisoning the well, innuendo, framing effects, motte-and-bailey |
| 9 | Whale | Mixed & Multi-step Fallacies | Arguments containing multiple fallacies; focus on the dominant fallacy or all-that-apply (if enabled) |
| 10 | God Whale | Meta-Logic & Expert Reasoning | Misuse of fallacy accusations, subtle misapplications of rules, distinguishing fallacious from merely unpopular reasoning |

### Authoring Principles by Sub-level

- **Beginner (per level)**: Very explicit, almost textbook-style scenarios (1–2 sentences). Only one obvious fallacy; distractors are clearly wrong once the target fallacy is known.
- **Intermediate**: More natural language, everyday contexts, fewer explicit cues. Still one main fallacy, but distractors are commonly confused fallacies.
- **Expert**: Subtle misdirection, longer contexts. Multiple fallacies may be present; questions focus on the dominant one or on recognizing when there is *no* fallacy.

### Implementation Phases (Fallacy Genome)

1. **Phase 0**: Update `AGENTS.md`, `ps.md`, and `planning.md` to reference logical fallacies (this document).
2. **Phase 1**: Branding and wording (index.html, manifest, `translations.ts`) updated to “logical fallacies / argument analysis”.
3. **Phase 2**: Replace glossary (`glossary.md`, glossary data/translations) with a Logical Fallacies Glossary (EN/FR).
4. **Phase 3**: Update `LEVELS` in `constants.ts` with fallacy-based descriptions for Level 0–10.
5. **Phase 4**: Create initial fallacy question sets for Level 0–1 (at least 100 Beginner questions each) and wire into `questionsBank.ts`.
6. **Phase 5**: Ensure explanation system (`shortExplanationsTranslations.ts`, `detailedExplanationsTranslations.ts`, `foundationDetailedFormatter.ts`) describes fallacy logic instead of CLI commands.
7. **Phase 6**: Add French translations for all new fallacy content (questions + explanations) in the same batches as English.
8. **Phase 7**: Expand toward full 3000 questions across all levels (300 per level, with Beginner/Intermediate/Expert sub-levels).
9. **Phase 8**: Update validation scripts for fallacy content (uniqueness checks, EN/FR parity), and test PWA on phone.

---

## March 1, 2026 — Stability-First Execution Plan

### 1) iPhone PWA QA pass (manual checklist)

Goal: verify Home Screen behavior without changing layout patterns.

- Device matrix: iPhone with Dynamic Island + iPhone with notch (older model).
- Install flow: open in browser, Add to Home Screen, launch from icon.
- Top safe-area: nav content must be fully below status indicators.
- Bottom safe-area: settings button must stay tap-safe above home indicator.
- Settings UX: button at bottom-right, panel opens near top-right, no clipping.
- Orientation checks: portrait + landscape for nav/settings overlap.
- Recovery path: `clear-sw.html` flow still refreshes stale cached build.
- Language switch: EN/FR toggle works in hub, quiz, glossary, settings.

Exit criteria:
- No blocked taps.
- No overlap with iOS status/home indicators.
- No visual regressions on hub/quiz/settings.

### 2) Performance hardening (no visual changes)

Completed:
- Lazy-loaded heavy views (`QuizView`, `GlossaryView`, `HistoryLog`, `OperationsView`, ID modals, level selector) in `App.tsx`.
- Added chunking strategy in `vite.config.ts` for:
  - `react-vendor`
  - `syntax-highlighter`
  - `questions-data`
  - `short-explanations`
  - `detailed-explanations`

Expected impact:
- Smaller initial app payload for hub-first load.
- Better cache reuse for stable vendor chunks.
- Heavy quiz/translation data loaded when needed.

### 3) Monetization foundation (roadmap)

Phase A — Instrumentation (first):
- Add analytics events: session start, quiz start/finish, retention (D1/D7), language toggle, random-mode usage.
- Define funnel: install → first quiz → 3 sessions → 50 questions answered.

Phase B — Packaging:
- Free tier: core quiz + limited helper tools.
- Premium tier: advanced review packs, curated weak-spot drills, streak boosts, exports/progress insights.

Phase C — Payments:
- Web: Stripe Checkout + customer portal.
- Mobile/PWA note: if wrapped later for App Store, use in-app purchases per platform rules.

Phase D — Pricing tests:
- A/B monthly vs yearly.
- Time-limited intro offer for first-week users.

Phase E — Trust/ops:
- Privacy policy, terms, support email, restore purchases flow.
- Error monitoring + lightweight abuse controls.

---

## Random Mode — Point-Based Evolution

**Status**: ✅ Implemented.

**Goal**: Give users two distinct gameplay paths that persist independently. When the user selects Random mode, evolution is driven by a point system (correct × accuracy), not by level progression. Both systems save to `localStorage` so users can alternate between Level mode and Random mode without losing progress in either.

---

### Design Overview

| Aspect | Level Mode | Random Mode |
|--------|------------|-------------|
| **Progression** | Complete 300 questions per level → unlock next | Earn points → evolve through same 10 personas |
| **Questions** | From current level only | From all levels (random) |
| **Where to choose** | Default; Level Selector for replay | Settings (hub + quiz); optional "Start Random" on hub |
| **Persistence** | `levelProgress`, `acquiredStars`, `currentLevel` | `randomModeStats` (new) — separate, always saved |
| **Evolution tiers** | Level 1–10 → Persona | Point score → Persona (same 10 personas) |

---

### Evolution Formula (Recommended)

**Formula**: `score = correct × (correct / total)` → i.e. **correct × accuracy**

- Rewards both volume (more `correct`) and skill (higher `accuracy`).
- Low accuracy with many questions gives low score (e.g. 20 correct out of 100 = 4).
- High accuracy with few questions gives moderate score (e.g. 14 correct out of 15 ≈ 13).
- High accuracy with many questions gives high score (e.g. 200 correct out of 250 = 160).

**Alternative (if formula feels too slow)**: `score = correct × (0.5 + 0.5 × (correct / total))` — floor of 50% accuracy contribution so volume always helps.

---

### Persona Score Thresholds (Tunable)

Map cumulative Random-mode score to the same 10 personas:

| Persona | Min Score | Notes |
|---------|-----------|-------|
| Plankton | 0 | Starting |
| Shrimp | 15 | ~15 perfect or 30 at 50% |
| Crab | 40 | |
| Small Fish | 80 | |
| Octopus | 150 | |
| Seal | 250 | |
| Dolphin | 400 | |
| Shark | 600 | |
| Whale | 900 | |
| God Whale | 1300 | |

Thresholds can be adjusted after playtesting. Aim for ~50–100 Random questions at 70%+ accuracy to reach mid-tier personas.

---

### Data Model

Extend `UserStats` (or add a parallel structure) with **Random-mode stats**:

```ts
// In types.ts
interface RandomModeStats {
  totalAnswered: number;      // Total questions answered in Random mode
  totalCorrect: number;       // Correct answers in Random mode
  lastSessionScore?: number;
  lastSessionTotal?: number;
}
```

- **Storage**: Persist with `UserStats` in same `localStorage` key. Add migration for existing users (default `totalAnswered: 0`, `totalCorrect: 0`).
- **Isolation**: Level-mode stats (`levelProgress`, `acquiredStars`, etc.) are never modified when in Random mode. Random-mode stats are never modified when in Level mode.
- **Shared**: `history`, `completedQuestionIds`, `idLog` can stay shared (both modes use the same question bank and learning log).

---

### UI Changes

1. **Random option in hub Settings**
   - Add "Random Mode" / "Level Mode" toggle to SettingsMenu when `view === 'hub'` (same as quiz).
   - When Random is selected on hub, "Continue Mutation" → start quiz in Random mode directly.

2. **Hub when in Random mode**
   - EvolutionHub shows Random-mode persona (from score) and Random stats panel:
     - Total answered
     - Correct
     - Accuracy %
     - Current evolution score
     - Progress bar to next persona
   - "Continue Mutation" starts Random quiz (questions from all levels).

3. **Hub when in Level mode**
   - Unchanged: current level, level progress, stars, etc.

4. **Quiz completion in Random mode**
   - Update `randomModeStats` (totalAnswered += 15, totalCorrect += sessionCorrect).
   - Compute new score and persona.
   - Show result modal with Random-mode context (e.g. "Evolution score: 45 → 58").

5. **Persistence of `randomMode` preference**
   - Optionally persist `randomMode: boolean` in stats so user returns to the mode they left (or default to Level).

---

### Implementation Steps (Phased)

#### Phase 1 — Data & Persistence

| Step | Task | File(s) |
|------|------|---------|
| 1.1 | Add `RandomModeStats` interface to `types.ts` | `src/types.ts` |
| 1.2 | Add `randomModeStats?: RandomModeStats` to `UserStats` | `src/types.ts` |
| 1.3 | Add migration in App load: if `randomModeStats` missing, set `{ totalAnswered: 0, totalCorrect: 0 }` | `src/App.tsx` |
| 1.4 | Add helper `getRandomModeScore(stats: RandomModeStats): number` (formula: correct × accuracy) | `src/constants.ts` or `src/utils/randomModeScore.ts` |
| 1.5 | Add helper `getPersonaFromRandomScore(score: number): PersonaStage` using threshold table | Same file |
| 1.6 | Add constants for score thresholds | `src/constants.ts` |

#### Phase 2 — Random in Hub Settings

| Step | Task | File(s) |
|------|------|---------|
| 2.1 | Pass `onToggleRandomMode` to SettingsMenu when `view === 'hub'` (not only quiz) | `src/App.tsx` |
| 2.2 | Allow starting in Random mode: add `onStartQuizRandom?: () => void` or pass `startInRandomMode` to `handleStartEvolution` | `src/App.tsx` |
| 2.3 | When Random is selected on hub, `handleStartEvolution` sets `randomMode = true` | `src/App.tsx` |
| 2.4 | Add "Start Random" secondary button on hub (optional) — or rely on Settings toggle + "Continue Mutation" | `src/components/EvolutionHub.tsx` |

#### Phase 3 — Random Mode Quiz Completion

| Step | Task | File(s) |
|------|------|---------|
| 3.1 | In `handleQuizComplete`: if `randomMode`, update `randomModeStats` instead of `levelProgress` | `src/App.tsx` |
| 3.2 | Do not advance `currentLevel` or `levelProgress` when in Random mode | `src/App.tsx` |
| 3.3 | Result modal: when Random, show score delta and new persona (from Random score) | `src/App.tsx` or result component |
| 3.4 | Do not reset `randomMode` to false on quiz complete — keep user in Random if they chose it | `src/App.tsx` |
| 3.5 | Persist `randomMode` in stats (optional) for session continuity | `src/App.tsx` |

#### Phase 4 — Hub Display for Random Mode

| Step | Task | File(s) |
|------|------|---------|
| 4.1 | EvolutionHub: accept `randomMode: boolean` and `randomModeStats?: RandomModeStats` | `src/components/EvolutionHub.tsx` |
| 4.2 | When `randomMode`: show persona from `getPersonaFromRandomScore(...)` | `EvolutionHub.tsx` |
| 4.3 | Add Random stats panel: total answered, correct, accuracy %, evolution score | `EvolutionHub.tsx` |
| 4.4 | Progress bar: "X points to [next persona]" (optional) | `EvolutionHub.tsx` |
| 4.5 | Translations: new strings for Random stats (EN + FR) | `src/translations.ts` |

#### Phase 5 — Polish & Testing

| Step | Task | File(s) |
|------|------|---------|
| 5.1 | Level Selector: when in Random mode, clarify that it doesn't affect Random (or hide/disable) | `src/components/LevelSelectorModal.tsx` |
| 5.2 | Nav bar: when Random, show Random-mode persona (from score) instead of level persona | `src/App.tsx` |
| 5.3 | Ensure switching Level ↔ Random preserves both progress; test localStorage round-trip | Manual / E2E |
| 5.4 | Update `totalPossible` in hub for global % if using shared completed count (3000 total) | `EvolutionHub.tsx` |

---

### Summary: What Stays Saved

| Data | Level Mode | Random Mode |
|------|------------|-------------|
| `levelProgress` | Updated | Untouched |
| `acquiredStars` | Updated | Untouched |
| `currentLevel` | Updated | Untouched |
| `randomModeStats` | Untouched | Updated |
| `randomMode` (preference) | Can switch to false | Can switch to true |
| `history`, `completedQuestionIds`, `idLog` | Shared | Shared |
| `xp` | Updated (both?) | TBD: could add Random XP or keep shared |

**Recommendation**: Keep `xp` shared (both modes add to same XP pool) — simpler and rewards overall engagement. Evolution/persona display differs by mode; XP can stay a global "total effort" metric.

---

### Changelog

| Date | Change |
|------|--------|
| 2025-02-28 | Added Random Mode implementation plan: point-based evolution, dual persistence, hub Settings integration, phased implementation steps. |
| 2025-02-27 | Random Mode implemented: `randomModeStats`, `getRandomModeScore`, hub Settings toggle (hub + quiz), QuizView/quizService support, EvolutionHub display, EN+FR translations. |

---

## Goal: Bilingual (English & French)

**Objective**: Full French translation for all 3000 codon explanations (short explanations + detailed in-depth descriptions). This is a large task — track progress in the checklist below.

---

## French Translation Checklist

| Component | Target | Current | Status |
|-----------|--------|---------|--------|
| **Short explanations** (e field) | 3000 | 3000 | Done |
| **Detailed explanations** (explication du codon) | 3000 | 3000 | Done |
| **UI strings** | All | All | Done | `translations.ts` |

Update this table as translations progress. Add in batches of 50.

---

## Level 0 (Foundations) and Expansion to 3,000

**Level 0** (March 2026): Added foundations level with Tadpole persona. Topics: argument vs assertion, premises vs conclusions, validity vs soundness, fallacy definition. Initial set: 2 questions (IDs 1001-1002). Target: 100–300 questions for full foundations coverage. Level 0 appears in level selector; users can start with foundations before Level 1.

**Constants** (March 2026): Aligned with live bank — QUESTIONS_PER_LEVEL = 100, TOTAL_QUESTIONS = 1002 (1000 levels 1–10 + 2 level 0). Difficulty ramp: per-level sub-levels (IDs 1–33 Beginner, 34–66 Intermediate, 67–100 Expert). Fallacy frequency tagging: LevelInfo.fallacyFrequency (common/uncommon/rare) for audit.

---

## Question Expansion Strategy (1000 → 3000)

**Phase 1 (Current)**: 100 questions per level (levels 1–10), with difficulty ramp (Beginner/Intermediate/Expert by position). Level 0 has 2 questions; expand to 100+ for full foundations.

**Phase 2**: Add 200 unique questions per level (levels 0–10), to reach 300 per level × 11 levels = 3,300 (or 300 × 10 = 3,000 if Level 0 stays optional). Questions within each level follow Beginner < Intermediate < Expert progression.

**Recommended approach — Two possible starting points**:

1. **Level 1 (Plankton)** — General expansion: IDs 301–400 Intermediate, 401–500 Expert (harder variables/strings/types).
2. **Level 4 (Small Fish)** — Loops mastery: 100 for-loop questions (Intermediate), 100 while-loop questions (Expert). Critical for Python fluency.

For Level 4 loops: create `level4ForLoopPatterns` (100 q) and `level4WhileLoopPatterns` (100 q), then concatenate with existing `level4Patterns` in `questionsBank.ts`. Update ID ranges: Level 4 currently uses 901–1000; new questions will be 1001–1200 for Level 4's 300 total.

**Order of operations**:
- Add questions in batches (e.g. 20–50 at a time)
- Follow ps.md uniqueness rules — no repetitive patterns
- Sub-level assignment: Q1–100 = Beginner, Q101–200 = Intermediate, Q201–300 = Expert

---

## Concept Gap Analysis: What's Missing from 1000 Questions

### Current Coverage (from ps.md)

| Level | Topics (100 q each) |
|-------|---------------------|
| 1 | types, variables, strings, comments, conversions, arithmetic, string methods |
| 2 | arithmetic, order of ops, comparisons, logical/membership operators, type conversions |
| 3 | booleans, conditionals, truthiness, ternary, short-circuit |
| 4 | range, break/continue/pass, for, while, enumerate, zip, comprehensions, map/filter/iter |
| 5 | lists: indexing, methods, copying, unpacking, sorting |
| 6 | dicts: get, keys/values/items, comprehensions, merging |
| 7 | functions: params, *args/**kwargs, lambda, recursion, scope |
| 8 | classes: __init__, methods, attributes, property, __dict__, MRO |
| 9 | inheritance, super(), polymorphism, encapsulation, ABCs |
| 10 | exceptions, context managers, generators, decorators, modules, design patterns |

### Gaps & Underrepresented Concepts

**Critical for mastery (user-requested + high impact):**

| Concept | Current Est. | Target | Gap | Notes |
|---------|--------------|--------|-----|-------|
| **For loops** | ~15–20 | 100 | ~80 | User request. Deep-dive: nested loops, else clause, loop vars, iterables |
| **While loops** | ~15–20 | 100 | ~80 | User request. Deep-dive: termination, sentinels, infinite-loop gotchas |
| **Strings** | ~25 | 80 | ~55 | 50+ string methods; format(), f-strings, encoding, slicing edge cases |
| **Lists** | ~30 | 80 | ~50 | Comprehensions, sorting keys, copy vs reference, in-place vs return |
| **Dictionaries** | ~25 | 80 | ~55 | setdefault, defaultdict, merging, key constraints, iteration patterns |
| **Functions** | ~25 | 80 | ~55 | Closures, mutable defaults, decorator basics, first-class functions |
| **Exceptions** | ~10 | 50 | ~40 | try/except/else/finally, exception hierarchy, custom exceptions, re-raise |
| **OOP** | ~40 | 100 | ~60 | MRO, super(), descriptors, __slots__, property vs attribute |

**Missing or thin:**

| Concept | Current | Suggested | Notes |
|---------|---------|-----------|-------|
| **File I/O** | 0 | 30 | open(), read/write, with, paths |
| **Regular expressions (re)** | 0 | 40 | match, search, findall, groups, patterns |
| **datetime** | 0 | 25 | date, time, datetime, timedelta, strftime |
| **collections** | ~5 | 40 | Counter, defaultdict, deque, namedtuple |
| **itertools** | ~5 | 30 | combinations, permutations, chain, cycle, islice |
| **functools** | ~2 | 20 | reduce, partial, lru_cache |
| **Unpacking** | ~5 | 25 | * and ** in assignments, function calls |
| **Match/case** | 0 | 20 | Python 3.10+ structural pattern matching |
| **Walrus :=** | 0 | 15 | Assignment in expressions |
| **Type hints** | ~2 | 20 | Annotations, Optional, Union, generics basics |
| **Sets** | ~8 | 30 | Unique, operations, frozenset, when to use |
| **Tuples** | ~10 | 25 | Unpacking, namedtuple, immutability |
| **Closures & scope** | ~5 | 25 | LEGB, nonlocal, closure gotchas |
| **Context managers** | ~5 | 25 | with, __enter__/__exit__, contextlib |
| **Generators** | ~8 | 35 | yield, next(), send(), generator expressions |

### Proposed Allocation for 2000 New Questions

**Option A — Level-balanced (200 per level)**

Each level gets 200 new questions. For Level 4 (Small Fish), allocate:

- **Intermediate (101–200)**: 100 for-loop questions
- **Expert (201–300)**: 100 while-loop questions

Other levels: spread new questions across their domain (e.g. Level 1: more string methods, f-strings; Level 10: re, datetime, file I/O, etc.).

**Option B — Concept-weighted**

Reserve blocks for high-impact concepts:

| Block | Questions | Level(s) | Concept focus |
|-------|-----------|----------|---------------|
| Level 4 Intermed. | 100 | 4 | For loops mastery |
| Level 4 Expert | 100 | 4 | While loops mastery |
| Level 1 expansion | 150 | 1 | Strings, f-strings, formatting |
| Level 5 expansion | 100 | 5 | List comprehensions, sorting, copying |
| Level 6 expansion | 100 | 6 | Dict patterns, Counter, defaultdict |
| Level 7 expansion | 100 | 7 | Closures, decorators, mutable defaults |
| Level 10 expansion | 200 | 10 | re, datetime, file I/O, collections, itertools |
| Remaining | 1150 | 2,3,8,9 | Spread across conditionals, OOP, etc. |

**Recommendation**: Start with **Option A** for Level 4: add 100 for-loop + 100 while-loop questions to Level 4’s Intermediate and Expert sub-levels. Then apply concept-weighted thinking to other levels as you expand.

---

## Level-by-Level Expansion Plan

**Integration principles**: Beginner = existing 100 questions. Intermediate = first extension of the level theme. Expert = mastery and advanced patterns. New concepts fit the level theme; cross-cutting concepts (e.g. unpacking) appear in the level where they are first needed.

### Level 1 - Plankton (variables, types, strings, comments)

| Sub-level | Q range | New concepts | Count | Integration notes |
|-----------|---------|---------------|-------|-------------------|
| Beginner | 1-100 | (existing) | 100 | types, variables, basic strings, comments |
| Intermediate | 101-200 | string methods (deep), f-strings, format(), repr vs str | 100 | Expand beyond basic methods; all 50+ string methods; f"{x}" expressions; .format() positional/keyword |
| Expert | 201-300 | bytes/bytearray, ord/chr, encoding basics, None deep-dive | 100 | Unicode, ASCII, encode/decode; None as sentinel; id() and object identity |

**New concepts introduced**: f-strings, bytes, ord/chr, repr vs str, encoding basics.

### Level 2 - Shrimp (math, expressions, order of ops)

| Sub-level | Q range | New concepts | Count | Integration notes |
|-----------|---------|---------------|-------|-------------------|
| Beginner | 1-100 | (existing) | 100 | arithmetic, order of ops, comparisons |
| Intermediate | 101-200 | math module, divmod, pow, round, operator module | 100 | math.sqrt, floor, ceil, round() modes; divmod; operator.add, etc. |
| Expert | 201-300 | Decimal, fractions, complex, bitwise, int/float conversion edge cases | 100 | Financial precision; fractions.Fraction; complex numbers; &, \|, ^, <<, >>; float() gotchas |

**New concepts introduced**: math module, Decimal, fractions, bitwise ops, complex.

### Level 3 - Crab (conditionals, booleans, logic)

| Sub-level | Q range | New concepts | Count | Integration notes |
|-----------|---------|---------------|-------|-------------------|
| Beginner | 1-100 | (existing) | 100 | if/elif/else, truthiness, short-circuit |
| Intermediate | 101-200 | any(), all(), chained comparisons, nested conditionals, guard clauses | 100 | any(all(...)); a < b < c; early returns; nested if/else |
| Expert | 201-300 | match/case (3.10+), walrus :=, truthiness edge cases | 100 | match/case literals, patterns; := in conditionals; empty vs None |

**New concepts introduced**: match/case, walrus operator, any/all deep-dive.

### Level 4 - Small Fish (loops, iteration, ranges)

| Sub-level | Q range | New concepts | Count | Integration notes |
|-----------|---------|---------------|-------|-------------------|
| Beginner | 1-100 | (existing) | 100 | range, break/continue, for, while, enumerate, zip, comprehensions |
| Intermediate | 101-200 | For loops mastery | 100 | User-requested. Nested loops, for-else, loop variables, iterables |
| Expert | 201-300 | While loops mastery | 100 | User-requested. Termination, sentinels, infinite-loop gotchas, state |

**New concepts introduced**: Deep for/while mastery (no new concepts, just depth).

### Level 5 - Octopus (lists, arrays, indexing)

| Sub-level | Q range | New concepts | Count | Integration notes |
|-----------|---------|---------------|-------|-------------------|
| Beginner | 1-100 | (existing) | 100 | list basics, indexing, methods |
| Intermediate | 101-200 | list comprehensions (deep), sorting with key, tuple basics, unpacking | 100 | Nested comps; sorted(lst, key=...); tuple unpacking; * unpacking |
| Expert | 201-300 | copy vs deepcopy, list as stack/queue, slicing idioms | 100 | shallow/deep; append/pop vs insert(0); [::-1], [::2] |

**New concepts introduced**: tuple focus, copy module, unpacking in loops.

### Level 6 - Seal (dictionaries, key-value, hashing)

| Sub-level | Q range | New concepts | Count | Integration notes |
|-----------|---------|---------------|-------|-------------------|
| Beginner | 1-100 | (existing) | 100 | dict basics, get, keys/values/items |
| Intermediate | 101-200 | setdefault, merging (\|, \|=), dict comprehensions, views | 100 | setdefault patterns; d1 \| d2; dict comp with if |
| Expert | 201-300 | sets, frozenset, Counter, defaultdict, hashability | 100 | collections.Counter; defaultdict(factory); set ops; hash() |

**New concepts introduced**: sets, Counter, defaultdict, hashability.

### Level 7 - Dolphin (functions, parameters, return)

| Sub-level | Q range | New concepts | Count | Integration notes |
|-----------|---------|---------------|-------|-------------------|
| Beginner | 1-100 | (existing) | 100 | params, *args/**kwargs, lambda, recursion |
| Intermediate | 101-200 | closures, nonlocal, mutable default gotcha, first-class functions | 100 | Closure capture; nonlocal; def f(lst=[]); funcs as args |
| Expert | 201-300 | decorators, functools (reduce, partial, lru_cache) | 100 | @decorator; functools.reduce; partial(); @lru_cache |

**New concepts introduced**: closures, decorators, functools.

### Level 8 - Shark (classes, objects, methods)

| Sub-level | Q range | New concepts | Count | Integration notes |
|-----------|---------|---------------|-------|-------------------|
| Beginner | 1-100 | (existing) | 100 | __init__, methods, attributes, property |
| Intermediate | 101-200 | __repr__, __str__, magic methods, __dict__, __slots__ | 100 | Rich representation; __eq__, __lt__; slots for memory |
| Expert | 201-300 | descriptors, dataclasses, type hints on classes | 100 | @dataclass; descriptor protocol; Optional, Union in __init__ |

**New concepts introduced**: dataclasses, descriptors, type hints.

### Level 9 - Whale (inheritance, polymorphism, encapsulation)

| Sub-level | Q range | New concepts | Count | Integration notes |
|-----------|---------|---------------|-------|-------------------|
| Beginner | 1-100 | (existing) | 100 | inheritance, super(), polymorphism |
| Intermediate | 101-200 | MRO, multiple inheritance, mixins, composition vs inheritance | 100 | __mro__; super() in multi-inheritance; when to favor composition |
| Expert | 201-300 | ABCs, abstractmethod, Protocol, isinstance/issubclass | 100 | abc.ABC; @abstractmethod; typing.Protocol |

**New concepts introduced**: ABCs, Protocol, mixins.

### Level 10 - God Whale (design patterns, architecture, best practices)

| Sub-level | Q range | New concepts | Count | Integration notes |
|-----------|---------|---------------|-------|-------------------|
| Beginner | 1-100 | (existing) | 100 | exceptions, context managers, generators, decorators |
| Intermediate | 101-200 | file I/O, datetime, re module, itertools, json | 100 | open(), with; datetime, timedelta; re.match, re.search; itertools.chain |
| Expert | 201-300 | collections (deque, namedtuple), logging, unittest basics, PEP 8 | 100 | collections.deque; logging.debug; assert, unittest; style rules |

**New concepts introduced**: file I/O, datetime, re, itertools, json, logging, unittest.

### Concept-to-Level Mapping (Summary)

| Concept | Primary level | Notes |
|---------|---------------|-------|
| f-strings, bytes, encoding | 1 | Strings and types |
| math, Decimal, fractions, bitwise | 2 | Numbers and expressions |
| match/case, walrus, any/all | 3 | Control flow |
| for/while mastery | 4 | Loops (user-requested) |
| comprehensions, tuple, copy | 5 | Sequences |
| sets, Counter, defaultdict | 6 | Collections |
| closures, decorators, functools | 7 | Functions |
| dataclasses, descriptors | 8 | Classes |
| ABCs, Protocol, mixins | 9 | OOP |
| file I/O, datetime, re, itertools | 10 | Standard library and tools |

---

## Sub-Levels Feature (Current State)

### What’s Implemented

| Area | Status | Notes |
|------|--------|-------|
| **Constants** | ✅ | `QUESTIONS_PER_SUBLEVEL = 100`, 3 sub-levels per level (Beginner → Intermediate → Expert) |
| **Types** | ✅ | `SubLevel` enum, `acquiredStars?: Record<number, number>` in `UserStats` |
| **QuizView** | ✅ | Sub-level label (BEGINNER/INTERMEDIATE/EXPERT) + star badges in header |
| **App.tsx** | ✅ | `handleQuizComplete` updates `acquiredStars` when progress crosses sub-level thresholds |
| **Result Screen** | ✅ | Star celebration (“SUB-LEVEL COMPLETE!”) when a new star is earned |
| **EvolutionHub** | ✅ | Stars display and labels (BEGINNER PROGRESS → MASTERY ACHIEVED) |
| **LevelSelectorModal** | ✅ | Stars per level for each unlocked level |

### What Was Fixed (From Recent Work)

1. **QuizView layout** — Sub-level string and star display at top of quiz header.
2. **UserStats tracking** — `acquiredStars` updated when completing sub-levels (100, 200, 300 questions).
3. **Celebration visuals** — Amber star animation and “SUB-LEVEL COMPLETE!” messaging.
4. **Translation file** — `detailedExplanationsTranslations.ts` syntax errors resolved (malformed exports, extra `};`).

---

## Improvement Ideas

### 1. Sub-Level UX & Polish

| Idea | Priority | Notes |
|------|----------|-------|
| **Mid-quiz star unlock** | Medium | Right now, stars are awarded only at quiz completion. Consider a small toast/overlay when the user crosses a sub-level *during* a quiz (e.g. reaches 100 correct in that level). |
| **Progress within sub-level** | Low | Show “45/100 to Intermediate” for users in the first sub-level. |
| **French i18n for sub-levels** | High | All sub-level UI text (Beginner, Intermediate, Expert, SUB-LEVEL COMPLETE!, etc.) should go through `translations.ts`; currently some may be hardcoded in English. |
| **Star animation on EvolutionHub** | Low | Light “pulse” or glow when a new star is earned on return from quiz. |

### 2. Quiz Flow & Question Logic

| Idea | Priority | Notes |
|------|----------|-------|
| **Sub-level-aware question selection** | Medium | `quizService.getBatch()` could favor questions from the user’s *current* sub-level (Beginner 1–100, Intermediate 101–200, Expert 201–300) for better progression feel. |
| **Explicit sub-level in Question type** | Low | `subLevel` is optional; consider requiring it for new questions to enforce consistency. |
| **Batch size per sub-level** | Low | Smaller batch (e.g. 5–10) for Expert sub-level as a “challenge mode.” |

### 3. Result Screen & Celebration

| Idea | Priority | Notes |
|------|----------|-------|
| **Sound / haptic** | Low | Optional confetti sound or device vibration on star unlock. |
| **Confetti / particle effect** | Low | Light confetti burst when star is earned. |
| **Shareable achievement** | Low | “Share my Level 3 Expert badge” (link/image). |

### 4. Technical & Maintainability

| Idea | Priority | Notes |
|------|----------|-------|
| **Centralize sub-level constants** | Medium | Sub-level thresholds (100, 200, 300) are duplicated in `App.tsx`; move to `constants.ts` or a `getStarsFromProgress(progress)` helper. |
| **Migration for older `UserStats`** | High | Ensure `acquiredStars` is backfilled for users who have progress but no `acquiredStars` (e.g. derive from `levelProgress` on load). |
| **Translation validation** | Medium | Script or CI check that `detailedExplanationsTranslations.ts` and `shortExplanationsTranslations.ts` are syntactically valid before build. |

### 5. Future Features

| Idea | Priority | Notes |
|------|----------|-------|
| **Streak system** | Low | Consecutive correct answers or days. |
| **Daily challenge** | Low | Fixed question set for the day. |
| **Sub-level “challenge” mode** | Low | Expert-only quiz with no wrong-answer penalty. |
| **Badges / achievements** | Low | “Completed all 10 levels”, “100% accuracy on Level 5”, etc. |

---

## Recommendations

### Short Term (Next Sprints)

1. **i18n for sub-level text** — Move “Beginner”, “Intermediate”, “Expert”, “SUB-LEVEL COMPLETE!”, etc. into `translations.ts` so French mode is fully consistent (AGENTS.md rule 6).
2. **`acquiredStars` migration** — On load, if `acquiredStars` is missing or partial, derive it from `levelProgress` so existing users get correct stars.
3. **Helper for star logic** — Add something like `getStarsFromProgress(progress: number): number` in constants/utils to avoid duplication and drift.

### Medium Term

4. **Sub-level-aware batches** — Adjust `getBatch()` to optionally focus on the user’s current sub-level.
5. **Build-time translation check** — Add a simple script that parses `detailedExplanationsTranslations.ts` before `vite build` to catch syntax errors early.

### Lower Priority

6. Mid-quiz star notifications, progress-within-sub-level UI, confetti/sound, badges.

---

## How Level Progression Works (Current Behaviour)

**Unlocking the next level**: Complete **300 questions** in your current level. Each quiz delivers 15 questions, so ~20 quizzes per level to advance.

**Flow**:
1. User is on Level 1 (Plankton). `levelProgress[1]` counts completed questions (0 → 15 → 30 → … → 300).
2. When `levelProgress[currentLevel] >= 300`, the user advances: `currentLevel` becomes 2, `highestUnlockedLevel` is updated.
3. User can replay any unlocked level via Settings → Level Selector.

**Stars**: Earn 1 star at 100, 2 at 200, 3 at 300 questions completed for that level. Stars are visual milestones; level unlock requires the full 300.

---

## Level Selector Enhancements (Select Level Modal)

**Goal**: Give users clear feedback on performance per level and encourage replay to improve ratings.

### Success rate per level

- For each **unlocked** level, show the **success rating** (correct / total × 100%) for that level.
- Example: Level 1 card shows "87%" — user knows their performance for Plankton.
- Users can **revisit any unlocked level** to improve that rating; the percentage updates as they answer more questions.
- Implement by passing `successRateByLevel: Record<number, number>` (or deriving from `correctPerLevel` / `levelProgress`) to LevelSelectorModal.

### Stars display

- Stars (1–3) **already show** in Level Selector (top-right of each level card) for unlocked levels.
- Ensure stars remain visible and reflect current `acquiredStars`.
- When stars are earned via 80% success rate (planned), they will indicate mastery per sub-level (Beginner / Intermediate / Expert).

### Layout suggestion

Each level card could display:

- Persona icon + level number + persona name (existing)
- Stars (1–3) top-right (existing)
- **Success rate** — e.g. below persona name: "87%" or "Success: 87%"
- For locked levels: no success rate (or "—" until unlocked)

### Why this matters

- Clear **per-level performance** — users see which levels they struggle with.
- **Replay motivation** — "I'm at 65% on Level 3, I'll revisit to improve."
- **Mastery signal** — stars + percentage together show progress and quality.

---

## Quality & UX Enhancement (Monetisation-Ready)

*Mobile-first app. Priorities 1–5 are critical for a professional, paid product. Additional items improve retention without breaking function or design.*

### Priority 1 — Critical (fix first)

| Item | What to do | Why |
|------|------------|-----|
| **acquiredStars migration** | On app load, derive `acquiredStars` from `levelProgress` when missing. | Existing users see correct stars; avoids confusion. |
| **Question–solution coherence** | Validate all 1000 questions: code → eval() → correct option. Fix mismatches (IDs 72, 77, etc.). | Wrong answers break trust; essential for paid product. |
| **Sub-level UI i18n** | Move "Beginner", "Intermediate", "Expert", "SUB-LEVEL COMPLETE!", "MASTERY ACHIEVED" into `translations.ts`. | French mode must feel complete. |

### Priority 2 — High (trust & polish)

| Item | What to do | Why |
|------|------------|-----|
| **Question validation pipeline** | Script/CI that checks new questions: extract code, eval(), compare to correct option. Run before merge. | Prevents coherence bugs as you add 2000 questions. |
| **Code panel UX** | Fix per ps.md: proper indentation, larger panel, vertical scroll, dark theme match. | Code is core content; poor display looks unprofessional. |
| **Vague-question audit** | Ensure no bare method calls or indexing without context. Fix or remove. | Users must understand what is being asked. |

### Priority 3 — Medium (retention & clarity)

| Item | What to do | Why |
|------|------------|-----|
| **Sub-level-aware batches** | `getBatch()` favours questions from user's current sub-level. | Progression feels intentional. |
| **Centralise star logic** | Add `getStarsFromProgress(progress)` in constants; remove duplication in App.tsx. | Fewer bugs. |
| **Translation validation** | Pre-build script to parse translation files for syntax errors. | Avoids build failures. |

### Priority 4 — Mobile polish (touch, feedback)

| Item | What to do | Why |
|------|------------|-----|
| **Touch targets** | Buttons and options ≥ 44×44px; adequate spacing. | Mobile usability standard. |
| **Progress-within-sub-level** | Show e.g. "67/100 to Intermediate" on EvolutionHub/QuizView. | Clear progress nudges completion. |
| **Error states** | Graceful handling for empty batches, corrupted localStorage. | App should never look broken. |

### Priority 5 — Monetisation prep

| Item | What to do | Why |
|------|------------|-----|
| **Report issue** | "Something wrong?" link per question. | Surfaces bugs; builds trust. |
| **Offline / PWA** | Improve service worker; cache questions and UI for offline use. | Usable on commute; better retention. |
| **Accessibility** | Screen reader labels, focus management, font-size option. | Broader reach, better reviews. |

### Additional enhancements (no breaking changes)

| Item | What to do | Why |
|------|------------|-----|
| **Review weak concepts** | Mode that resurfaces questions the user got wrong. | Improves retention. |
| **Certificate / export** | "Certificate of Python Mastery" or progress export at completion. | Shareable proof; premium feature. |
| **Difficulty rubric** | Document Beginner/Intermediate/Expert criteria in planning.md for authors. | Consistent difficulty. |
| **Haptic feedback (optional)** | Light vibration on star unlock; user-toggle. | Adds delight on mobile. |

### Implementation order

1. Priorities 1–2 before major question expansion.
2. Priority 3 during expansion.
3. Priorities 4–5 and extras as capacity allows.

---

## Open Questions

- Should stars be gated by correctness? (e.g. only count correct answers toward 100/200/300)
- Should Random Mode contribute to sub-level progress, or only level-specific quizzes?
- Should sub-level labels appear in the History Log / ID Log?

---

## Changelog

| Date | Change |
|------|--------|
| 2025-02-27 | Initial planning.md created. Documented sub-level feature state, improvement ideas, and recommendations. |
| 2025-02-27 | Added bilingual goal, French translation checklist, and question expansion strategy (1000 → 3000). |
| 2025-02-27 | Added Concept Gap Analysis: current coverage, missing concepts, proposed allocation. Included 100 for-loop + 100 while-loop allocation for Level 4. |
| 2025-02-27 | Added Level-by-Level Expansion Plan: per-level concept integration (Intermediate/Expert), concept-to-level mapping, integration principles for all 10 levels. |
| 2025-02-27 | Added "How Level Progression Works" (300 q per level to advance). Added Quality & UX Enhancement section (Priorities 1–5, mobile-first, monetisation-ready). |
| 2025-02-27 | Added Level Selector Enhancements: success rate per level, stars display, replay-to-improve UX. |
| 2025-02-28 | Added Random Mode — Point-Based Evolution (NEXT TASK): design, formula, data model, UI changes, phased implementation steps. Dual persistence so Level and Random stats are saved independently; users can alternate between modes. |
