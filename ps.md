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

## GitHub Pages deploy (Actions red / failed)

**This project uses `peaceiris/actions-gh-pages`** (not the official `deploy-pages`/`upload-pages-artifact` flow). The official flow often fails with "No artifacts named 'github-pages' were found" or exit code 1 even with a single job and correct permissions.

**Required repo setting:**  
Repo **Settings → Pages → Build and deployment → Source** must be **"Deploy from a branch"**.  
Set **Branch** to **gh-pages** and **Folder** to **/ (root)**. Save.

The workflow (`.github/workflows/deploy.yml`) builds the app, then pushes the `dist/` output to the `gh-pages` branch. GitHub Pages serves that branch. No "GitHub Actions" source or `configure-pages`/`deploy-pages` is used.

**If the workflow is still red:**  
- Ensure **Actions** has **Read and write** permissions: Settings → Actions → General → Workflow permissions → "Read and write permissions".  
- Re-run the workflow from the Actions tab after changing settings.
