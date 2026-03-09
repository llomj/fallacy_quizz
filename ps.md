# Logical Fallacies Learn — Problem Solving & Debugging Guide

## CRITICAL: Two remotes — push to the correct one

This repo has two Git remotes. The deployed app at `https://llomj.github.io/fallacy_quizz/` comes **only** from the `fallacy_quizz` repo.

| Remote   | URL                                      | Deploys to                    |
|----------|------------------------------------------|-------------------------------|
| `fallacy`  | https://github.com/llomj/fallacy_quizz   | llomj.github.io/fallacy_quizz |
| `origin` | https://github.com/llomj/CLI_exercises   | Different repo (not this app) |

**Canonical push command (always use this):**
```bash
git push fallacy main
```

**Never** use `git push origin main` — that pushes to CLI_exercises, not fallacy_quizz. The deployed app will not update.

### When "local (Cursor) looks correct but deployed site is different" — DIAGNOSTIC CHECKLIST

**Why there are several deployment runs:**  
- **Deploy to GitHub Pages** (deploy.yml): runs on every push to main; deploys the built `dist/` as an **artifact**. This is what the live site uses **only when** Pages Source = **GitHub Actions**.  
- **Deploy to gh-pages branch** (deploy-branch.yml): runs on every push to main; pushes the built `dist/` into the **gh-pages** branch. The live site uses this **only when** Pages Source = **Deploy from a branch** and Branch = gh-pages.  
- **pages build and deployment**: GitHub’s automatic run when the **gh-pages** branch is updated. It does not deploy the artifact from deploy.yml; it just reflects the branch.  

So the live site content comes from **one** of: (1) the artifact of **Deploy to GitHub Pages**, or (2) the **gh-pages** branch. Pick one in **Settings → Pages → Source** and use the checklist below.

**Agents: Do NOT repeat cache-clearing advice. Follow this checklist in order. Stop when you find the cause.**

| # | Check | Action | Who |
|---|-------|--------|-----|
| 1 | Pages Source | Repo **Settings → Pages → Build and deployment**. Source MUST be **"GitHub Actions"**. If it says "Deploy from a branch", the Actions output is IGNORED and the site shows old branch content. | User |
| 2 | Which branch serves? | If Source = "Deploy from a branch", the built `dist/` must be in that branch. It is NOT in main (.gitignore). Use `deploy-branch.yml` (pushes dist/ to gh-pages). Set branch = gh-pages, folder = / (root). | User |
| 3 | Push to correct remote | Run `git push fallacy main`. Never `git push origin main` — that pushes to CLI_exercises, not fallacy_quizz. | Agent / User |
| 4 | Commit on GitHub | https://github.com/llomj/fallacy_quizz/commits/main — latest commit must match `git log -1 --oneline`. | Agent |
| 5 | Actions green for that commit | https://github.com/llomj/fallacy_quizz/actions — latest "Deploy to GitHub Pages" run must be **green** and for the commit you pushed. | User |
| 6 | Cursor = localhost or deployed? | Cursor preview: `npm run dev` = localhost (dev build). Deployed = prod build at llomj.github.io. They can differ. To match deployed locally: `npm run build && npm run preview` then open the preview URL. | User |
| 7 | PWA cache is separate | On iOS: Add-to-home-screen app has SEPARATE storage from Safari. Opening clear-sw.html in Safari does NOT clear the PWA cache. Fix: Delete the home-screen icon, open https://llomj.github.io/fallacy_quizz/ in Safari, add to home screen again. | User |
| 8 | Alternative deploy: branch | If Actions deploy is misconfigured: add workflow to push `dist/` to `gh-pages` branch, then set Pages Source = "Deploy from branch", branch = gh-pages, path = / (root). See "Branch deploy fallback" below. | Agent |
| 9 | **Which workflow is green?** | There are two workflows: **"Deploy to GitHub Pages"** (deploy.yml) and **"Deploy to gh-pages branch"** (deploy-branch.yml). Only the first deploys when Source = GitHub Actions. If only the second is green, the live site never updated. Fix: get **"Deploy to GitHub Pages"** green (Actions tab → that workflow → fix failing run). | User |
| 10 | **Environment protection** | Repo **Settings → Environments → github-pages**. If "Required reviewers" is set, the deployment waits for approval and the site may stay on an old build. Remove the rule or approve the deployment. | User |
| 11 | **Re-run deployment** | Actions → **"Deploy to GitHub Pages"** → open the latest run → **Re-run all jobs**. Sometimes the deploy step is skipped or fails silently; re-run can fix it. | User |
| 12 | **Use branch deploy instead** | If "Deploy to GitHub Pages" is green but the site still shows old app: switch to branch deploy. **Settings → Pages → Source** = "Deploy from a branch", **Branch** = `gh-pages`, **Folder** = `/ (root)`. Push to fallacy main; `deploy-branch.yml` will push the latest build to gh-pages and the site will serve it. | User |
| 13 | **Confirm which build is running** | Open the app → **Settings** (gear). At the bottom you should see **"Build: YYYY-MM-DD HH:MM:SS"**. That is the build time. If you see "Build: dev" you are on local dev; if you see a recent date/time, you have the latest deploy. If you don’t see it or see an old date, you’re on a cached or wrong deploy. | User |

### Branch deploy fallback (if Pages Source = "Deploy from a branch")

The repo has `.github/workflows/deploy-branch.yml` — it pushes built `dist/` to the `gh-pages` branch on each push to main.

**If Pages Source is "Deploy from a branch":**
1. Set **Branch** = `gh-pages`, **Folder** = `/ (root)`
2. Push to fallacy: `git push fallacy main`
3. Wait for "Deploy to gh-pages branch" workflow to complete
4. Site will serve from gh-pages branch

**If Pages Source is "GitHub Actions":** The main `deploy.yml` workflow deploys. `deploy-branch.yml` also runs but its gh-pages output is not used — no conflict.

### Deploy attempts that did NOT fix "browser app vs live site" (do not repeat)

- Clearing cache via **clear-sw.html** (tried multiple times).
- Bumping **service worker** version (v14 → v15 → v16).
- Pushing to **fallacy main** and confirming **Deploy to GitHub Pages** and **Deploy to gh-pages branch** are both green.
- Switching **Pages Source** to **"Deploy from a branch"**, branch **gh-pages**, folder **/ (root)**.
- Running **Deploy to gh-pages branch** manually (Run workflow).
- Adding **build timestamp** in Settings to verify which deploy is running.
- Documenting **two remotes** and using **git push fallacy main** only.
- Re-running **Deploy to GitHub Pages** and waiting for green.
- Deleting PWA from home screen and re-adding from Safari.
- Opening the live URL in **incognito/private** window.

All of the above were tried; the user still saw the old or wrong app at https://llomj.github.io/fallacy_quizz/

### More solutions to check (when live site still wrong)

| # | What to try | Details |
|---|--------------|--------|
| 14 | **What does Build: show?** | Open https://llomj.github.io/fallacy_quizz/ in a **new private/incognito** window → open **Settings** (gear). At the bottom, note **"Build: …"**. If it shows a **recent date/time** (e.g. today), the server is serving the new build and the issue is device-specific cache. If it shows **"Build: dev"** or an old date or nothing, the server is still serving an old build or the wrong deploy. |
| 15 | **Only one deploy path** | Avoid confusion: choose **one** source. **(A)** **Settings → Pages → Source** = **GitHub Actions** only. Then only **"Deploy to GitHub Pages"** (deploy.yml) updates the site; ignore "Deploy to gh-pages branch" and "pages build and deployment". **(B)** Or **Source** = **Deploy from a branch**, **Branch** = gh-pages. Then only **"Deploy to gh-pages branch"** updates the site; "Deploy to GitHub Pages" artifact is not used. Stick to one and re-run that workflow, wait 5–10 min, then try the URL in incognito. |
| 16 | **Unregister service worker for a test** | On desktop: open the live URL → **F12** (DevTools) → **Application** (or **Storage**) → **Service Workers** → **Unregister**. Reload. Do you see the new app? If yes, the SW was serving old cache; consider bumping SW version again or changing SW scope. |
| 17 | **Different network / device** | Try https://llomj.github.io/fallacy_quizz/ on **another device** or **mobile data** (not Wi‑Fi) in a **private** tab. If it’s correct there, the issue is local cache or network cache. |
| 18 | **Wait for CDN** | GitHub Pages may cache at the edge. After a green **Deploy to GitHub Pages** or after **Deploy to gh-pages branch** completes, wait **10–30 minutes**, then open the URL in a **new incognito** window. |
| 19 | **Disable Pages and re-enable** | **Settings → Pages**. If there is an option to **remove** or **disable** the site, do it. Save. Then set **Source** again (GitHub Actions **or** Deploy from branch, gh-pages) and **Save**. Push a small commit and run the chosen workflow. This can force a clean deployment. |
| 20 | **Extensions and other apps** | Try the URL in a browser with **all extensions disabled** or in a **different browser** you rarely use. Rule out ad-blockers or scripts that alter or cache the page. |
| 21 | **Confirm exact URL** | You must open **exactly** `https://llomj.github.io/fallacy_quizz/` (trailing slash is fine). Not a different repo path, not a bookmark that points elsewhere. |
| 22 | **Compare with Cursor** | In Cursor, run **`npm run build && npm run preview`** and open the URL it prints (e.g. http://localhost:4173/...). That is the **production build** from your current code. Compare with the live site. If preview looks like Cursor dev but live does not, the live site is still an old deploy or cache. |

---

## Level vs Random mode — separate points and stars (do not repeat)

**Problem**: User has e.g. 130 points in Level mode; when they switch to Random mode they still see 130. Level points must not carry over to Random.

**Rule**: Level and Random are **separate systems**. Random has its own points (`randomModeXp`) and star system. When the user chooses Random mode, Random points and stars must show **0** until they earn them in Random. Never display level `xp` (or level stars) when in Random mode.

**Fix (already applied; do not revert or repeat):**
1. **Nav bar**: The only number shown for "points" (bolt) must be `displayXp`, where `displayXp = randomMode ? Number(stats.randomModeXp ?? 0) : stats.xp`. Never use `stats.xp` when `randomMode` is true.
2. **Quiz complete**: In Random mode, update only `randomModeXp` and `randomModeStats`; do **not** update `xp`, `levelProgress`, or `acquiredStars`.
3. **Migration**: On load, if `stateVersion < 4`, set `randomModeXp = 0` and `stateVersion = 4` so existing saves cannot show level points in Random. Ensure `randomModeXp === undefined` → treat as 0.
4. **INITIAL_STATS**: `randomModeXp: 0` always. New users start with 0 Random points.

If the user reports "level points still show in random mode" again: (1) Confirm nav uses `displayXp` only; (2) Confirm migration stateVersion 4 runs and sets `randomModeXp = 0`; (3) Confirm no other UI displays `stats.xp` when in Random; (4) Do not repeat cache/deploy advice—see deploy checklist above for deploy issues.

---

## CRITICAL RULE: Bilingual Parity (EN/FR)

**ABSOLUTE REQUIREMENT**: Whatever exists in English MUST have a French equivalent.

- All UI strings: EN + FR
- All short explanations (e field): EN + FR
- All detailed explanations (de field): EN + FR
- Glossary: EN + FR
- Example arguments: Core argumentative structures stay the same across languages; only wording and cultural context should be locally adapted.

When adding new content, add both languages in the same commit. Never ship English-only content. This applies to all logical fallacy questions, short explanations, detailed explanations, and glossary entries.

---

## Highlighted Panels & Syntax (readability)

**Requirement**: Any highlighted panels (code-like blocks, example arguments, reference views) must **not** be rendered as a single flat color. Use clear syntax highlighting or emphasis (e.g. comments grey, key terms amber, base text slate/grey) so content is readable and matches AGENTS.md.

**If you see changes locally but not on your phone**: The app on your phone loads the **deployed** version (e.g. from GitHub Pages). Local changes are only on your machine until you **push to GitHub** and the site **re-deploys**. To fix "still all green on phone": (1) Commit the FlagsView changes, (2) Push to GitHub (`git push`), (3) Wait for the deployment (e.g. GitHub Actions or Pages rebuild). Then hard-refresh or re-open the app on your phone so it loads the new bundle.

---

## GitHub Pages deploy (Actions source)

**Keep Source = GitHub Actions:** Repo **Settings → Pages → Build and deployment → Source** = **"GitHub Actions"**.

The workflow (`.github/workflows/deploy.yml`) must match the **last successful run (Run 3, commit 3e32dcd)**: single job, **configure-pages@v4**, **upload-pages-artifact@v3**, **deploy-pages@v4**, path `dist`, `cancel-in-progress: true`. In this repo, v5+v4 failed; only v4+v3 has been observed to pass.

**If the workflow is red:**  
- Confirm Source is "GitHub Actions" (not "Deploy from a branch").  
- Revert the workflow to the exact Run 3 version: `configure-pages@v4`, `upload-pages-artifact@v3`, `deploy-pages@v4` in one job.  
- Do not split into two jobs; do not upgrade to v5/v4 without testing.

### What we tried and failed (do not repeat)

- **Split jobs (build + deploy with `needs: build`):** Deploy job failed with "No artifacts named 'github-pages' were found" or exit code 1; artifact from build job not visible to deploy job in this repo.
- **Single job with `configure-pages@v5` + `upload-pages-artifact@v4`:** Failed (run 8). Do not use v5+v4 in this repo.
- **Single job with `upload-pages-artifact@v3`** (after other changes): Failed when combined with v5; see below for working combo.
- **`peaceiris/actions-gh-pages` (deploy from branch):** User wants to keep Source = GitHub Actions, not "Deploy from a branch", so reverted.
- **`cancel-in-progress: false`:** Tried to reduce flakiness; last successful run (3) had `cancel-in-progress: true`.

**What actually worked (run 2 and 3 green):** Single job with `configure-pages@v4`, `upload-pages-artifact@v3`, `deploy-pages@v4`, `cancel-in-progress: true`. If deploy breaks again, revert workflow to match commit 3e32dcd (Run 3).

---

## French in browser vs app / PWA cache

**Symptom:** French works in desktop browser but not in "GitHub app" or mobile app (PWA).

**Likely cause:** The app (or PWA/add-to-home) is serving a **cached** bundle (old JS/assets) or the service worker is caching the previous deployment. The browser gets the latest deployment; the app may be using an older cached version without the French translation code.

**What to try (user):**

1. **Hard refresh / clear cache in the app:** Force-reload or clear site data for the app/PWA (e.g. in browser app: clear site data for the Pages URL, or uninstall PWA and re-add).
2. **Service worker:** If the site uses a service worker, it may cache aggressively. After a new deploy, the SW might still serve old assets until it updates (e.g. close all tabs of the site, reopen, or trigger an update).
3. **Confirm deployment:** In GitHub repo → Actions, confirm the latest "Deploy to GitHub Pages" run is green and that the commit with French changes is the one that was deployed. Then open the **exact** Pages URL in the app (e.g. `https://llomj.github.io/fallacy_quizz/`) and force-refresh.

**For agents:** Do not assume "French not in app" means code is wrong; check cache/deploy first. Document in ps.md if we add cache-busting or SW versioning later.

**Checking GitHub in Cursor:** Open the repo in Cursor’s browser (e.g. Simple Browser or browser panel) at `https://github.com/llomj/fallacy_quizz`. Sign in to GitHub there to access **Settings → Pages** (Source = GitHub Actions) and **Settings → Actions → General** (workflow permissions). Agents cannot sign in; the user must do this. The app URL is `https://llomj.github.io/fallacy_quizz/`.

### March 2026 — Desktop browser shows changes, phone app does not

**Pattern:** You see new features/content (e.g. CLI Operations & Math) in the desktop browser, but the GitHub mobile app / PWA still shows the **old Python layout**.

**Root cause:**  
- Desktop browser is often running a **local dev build** or the latest deployed Pages build.  
- The phone app is a **cached PWA from GitHub Pages** and only updates when: (1) a new commit is **pushed** to `fallacy/main`, (2) the **Pages deploy** run is green, and (3) the PWA cache/service worker is refreshed.

**Mandatory checklist before debugging code again:**

1. **Confirm commit is pushed to fallacy_quizz**  
   - `git status` must NOT say “ahead of 'fallacy/main'”.  
   - If ahead: run `git push fallacy main` first.
2. **Confirm GitHub Pages deploy is green**  
   - GitHub → `Actions` → latest Pages workflow must show **conclusion = success** for the commit with your change.
3. **Reset the PWA cache on the phone ONCE per deploy**  
   - Open: `https://llomj.github.io/fallacy_quizz/clear-sw.html` in the same browser/app the icon uses.  
   - Fully close the app/tab, then reopen `https://llomj.github.io/fallacy_quizz/` from the icon or browser.

**Rule:** If desktop shows the change and code looks correct, assume **deploy/cache** is the problem first, **not** the feature implementation. Do not re‑implement the same feature just because the phone app still serves an old bundle.

---

## March 4, 2026 — French options incident (browser OK, phone app stale)

### Confirmed findings

1. Local fix commit existed but was initially not on `fallacy/main` (local `main` was ahead by 1 commit).
2. After push, GitHub Actions run **#10** (`head_sha` `9be7752`) still failed in **Build** step, so Pages was not updated.
3. Root build blocker: `src/components/QuizView.tsx` imports `../utils/detailedExplanationLevel`, but `src/utils/detailedExplanationLevel.ts` was missing from tracked files on `main`.
4. Result: desktop browser may show local/latest build, while phone app (GitHub/PWA) keeps old deployed bundle with English A/B/C/D options.

### Fix procedure (must follow in order)

1. Ensure `src/utils/detailedExplanationLevel.ts` is committed to `main`.
2. Push to fallacy_quizz: `git push fallacy main`. Confirm Actions run is green for that exact commit.
3. Open deployed URL exactly: `https://llomj.github.io/fallacy_quizz/`.
4. On phone app, run cache reset URL once: `https://llomj.github.io/fallacy_quizz/clear-sw.html`.
5. Reopen app from Home Screen/GitHub app and switch language to French.

### Validation checklist

- GitHub Actions latest run: `conclusion = success`.
- Pages deploy points to the commit containing French option fix + missing util file.
- In quiz view with French selected, A/B/C/D option text appears in French.

---

## March 4, 2026 — Level 0-4 in-depth explanation overhaul (batch tracker)

### Batch completed (this update)

1. Added a foundation explanation formatter for **Level 0 through Level 4** with enforced depth modes:
   - Beginner explanation
   - Intermediate explanation
   - Expert explanation
2. Added structured verbose output for these levels with:
   - clear heading by depth
   - step-by-step command example flow
   - retention/checklist blocks for learning
3. Applied the same rule to **French mode** so depth selection is respected (not a single static detailed block).
4. Wired the new behavior in all explanation surfaces:
   - Quiz view
   - ID search modal
   - ID log view
5. Kept layout unchanged; only explanation content pipeline changed.

### What still needs to be done (next batches)

1. Batch QA pass on live content for IDs **1-1500**:
   - verify command example extraction quality
   - verify no awkward phrasing for conceptual (non-command) questions
2. French quality pass:
   - tune vocabulary for beginner friendliness
   - reduce any machine-like phrasing in generated expert blocks
3. Optional content hardening:
   - add per-topic custom step templates (navigation/files/processes/text tools) for even more precise examples in Level 0-4.

---

## March 4, 2026 — Full 3000+ in-depth verbosity rollout (EN + FR)

### Completed now

1. Extended the verbosity formatter from Level 0-4 to **all levels (0-10)**.
2. Detailed explanation depth selector now yields structured verbose output for:
   - Beginner
   - Intermediate
   - Expert
   across the full question bank.
3. French detailed explanation flow now follows the same depth behavior for all IDs, with fallback normalization still respected.
4. No layout changes were made; this is a content-pipeline upgrade only.

### Remaining QA

1. Spot-check random IDs across Levels 5-10 in EN + FR for:
   - natural phrasing
   - command example relevance
   - consistency between Beginner/Intermediate/Expert depth.
2. Tune per-topic templates if needed (networking/security/containers levels) to reduce generic examples.
