# Problem 13: Repair a Broken Relative Path

## Scenario
An image or stylesheet does not load after a file was moved into a subfolder.

## Goal
Ask Claude Code to check the file tree and correct the relative path from the page that references it.

## Expected result
The referenced file loads and no unrelated links are changed.

## Challenge
Move a page one folder deeper and update its paths.

## Files
- `sample-project/index.html` — safe sample page.
- `sample-project/style.css` — sample stylesheet.
- `PROMPT.md` — copy-ready Claude Code prompt.
- `ACCEPTANCE_CHECKLIST.md` — checks to perform before accepting changes.
