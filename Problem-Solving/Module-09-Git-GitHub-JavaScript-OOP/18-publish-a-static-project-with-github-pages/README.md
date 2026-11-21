# Task 18 — Publish a Static Project with GitHub Pages

**Track:** GitHub collaboration  
**Focus:** GitHub Pages · deployment source · relative paths

## Problem

Publish a static project and verify that assets and internal links work at the repository’s Pages URL.

## Requirements

1. Read the problem and write down your own plan before opening the solution.
2. Complete the requested behavior and test at least one normal case.
3. Test one edge case or invalid input where relevant.
4. Explain why the solution works in your own words.

## Run and review

- Open `index.html` with VS Code Live Server.
- For this Git task, use the commands below in a disposable Git repository. The webpage only displays a safety checklist; it cannot execute terminal commands.
- Read the comments before copying or adapting the reference solution.

## Reference result

GitHub Pages reports a successful deployment and the public page loads without missing CSS or JavaScript assets.

## Stretch challenge

Test a nested project URL and correct any root-relative asset paths that break under a repository subpath.

## Professional note

Prefer small, readable functions, meaningful names, explicit validation, and behavior that can be tested independently.

## Self-review

- [ ] I attempted the task before reading the reference solution.
- [ ] I can explain the important code lines without reading the comments.
- [ ] I tested a normal case and an edge case.
- [ ] I completed or documented the stretch challenge.

## Command reference

Run these commands only in your separate practice repository. Replace placeholders where noted.

```powershell
# Ensure the static site has an index.html at the chosen publishing root.
# Check that asset paths are relative and do not assume the domain root.
git status --short
# Commit and push the final site changes.
git add index.html styles.css script.js
git commit -m "docs: prepare static site for Pages"
git push origin main
# On GitHub: Settings → Pages → Build and deployment.
# Choose Deploy from a branch, select main, then /(root) or the correct folder.
# Wait for the deployment workflow to finish, then test the published URL.
```
