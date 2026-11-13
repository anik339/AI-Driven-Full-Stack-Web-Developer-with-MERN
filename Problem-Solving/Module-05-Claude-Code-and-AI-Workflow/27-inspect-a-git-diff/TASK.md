# Problem 27: Inspect a Git Diff

## Scenario
You want to verify what changed before committing.

## Goal
Ask Claude Code to explain the diff and point out unrelated formatting or accidental edits.

## Expected result
The review accurately describes additions, deletions and modifications.

## Challenge
Use git diff --check to find whitespace problems.

## Files
- `sample-project/index.html` — safe sample page.
- `sample-project/style.css` — sample stylesheet.
- `PROMPT.md` — copy-ready Claude Code prompt.
- `ACCEPTANCE_CHECKLIST.md` — checks to perform before accepting changes.
