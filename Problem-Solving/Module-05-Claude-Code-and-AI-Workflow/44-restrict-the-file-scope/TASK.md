# Problem 44: Restrict the File Scope

## Scenario
You want to change one component without touching the rest of the repository.

## Goal
Ask Claude Code to modify only the named component and its directly required stylesheet.

## Expected result
The diff contains only approved files.

## Challenge
Review git status and diff after the change.

## Files
- `sample-project/index.html` — safe sample page.
- `sample-project/style.css` — sample stylesheet.
- `PROMPT.md` — copy-ready Claude Code prompt.
- `ACCEPTANCE_CHECKLIST.md` — checks to perform before accepting changes.
