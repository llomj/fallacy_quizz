# CLI Exercises Learn — Problem Solving & Debugging Guide

## CRITICAL RULE: Bilingual Parity (EN/FR)

**ABSOLUTE REQUIREMENT**: Whatever exists in English MUST have a French equivalent.

- All UI strings: EN + FR
- All short explanations (e field): EN + FR
- All detailed explanations (de field): EN + FR
- Glossary: EN + FR
- Code snippets: Shell/CLI commands stay the same (universal)

When adding new content, add both languages in the same commit. Never ship English-only content.

---

## Flags Reference (syntax highlighting)

**Requirement**: The Flags/Commands reference view must **not** be all green. It must use clear syntax highlighting (e.g. comments grey, flags/options blue, descriptions amber, base text slate/grey) so it is readable and matches AGENTS.md.

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
3. **Confirm deployment:** In GitHub repo → Actions, confirm the latest "Deploy to GitHub Pages" run is green and that the commit with French changes is the one that was deployed. Then open the **exact** Pages URL in the app (e.g. `https://llomj.github.io/CLI_exercises/`) and force-refresh.

**For agents:** Do not assume "French not in app" means code is wrong; check cache/deploy first. Document in ps.md if we add cache-busting or SW versioning later.

**Checking GitHub in Cursor:** Open the repo in Cursor’s browser (e.g. Simple Browser or browser panel) at `https://github.com/llomj/CLI_exercises`. Sign in to GitHub there to access **Settings → Pages** (Source = GitHub Actions) and **Settings → Actions → General** (workflow permissions). Agents cannot sign in; the user must do this. The README currently links to `python-exercises-learn`; the CLI app URL is `https://llomj.github.io/CLI_exercises/`.
