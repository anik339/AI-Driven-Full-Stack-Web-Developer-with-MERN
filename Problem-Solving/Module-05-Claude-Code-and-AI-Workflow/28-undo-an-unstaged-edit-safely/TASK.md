# Problem 28: Undo an Unstaged Edit Safely

## Scenario
You accidentally changed one line in a practice file and want to understand safe recovery.

## Goal
Ask Claude Code to explain safe options for discarding a single unstaged file change.

## Expected result
The explanation distinguishes restore, checkout and reset and warns about data loss.

## Challenge
Practise only on a disposable copy of a file.

## Files
- `sample-project/index.html` — safe sample page.
- `sample-project/style.css` — sample stylesheet.
- `PROMPT.md` — copy-ready Claude Code prompt.
- `ACCEPTANCE_CHECKLIST.md` — checks to perform before accepting changes.
