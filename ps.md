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

The workflow (`.github/workflows/deploy.yml`) uses the official flow in a **single job**: checkout → build → **configure-pages@v5** → **upload-pages-artifact@v4** (path: `dist`) → **deploy-pages@v4**. All in one job so the artifact is visible to deploy-pages. Use `cancel-in-progress: false` to avoid cancelling in-progress runs.

**If the workflow is red:**  
- Confirm Source is "GitHub Actions" (not "Deploy from a branch").  
- Ensure the workflow uses `actions/configure-pages@v5`, `actions/upload-pages-artifact@v4`, and `actions/deploy-pages@v4` in that order in the same job.  
- Do not split into two jobs (build + deploy); that often causes "No artifacts named 'github-pages' were found".
