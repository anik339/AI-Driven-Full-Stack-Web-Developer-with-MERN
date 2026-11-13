# Problem 23: Create a Useful .gitignore

## Scenario
The repository should not track dependencies, secrets or generated files.

## Goal
Ask Claude Code to inspect the project stack and propose a suitable .gitignore.

## Expected result
The ignore file matches actual project tools and preserves required source files.

## Challenge
Run git status and confirm node_modules and .env are not staged.

## Files
- `sample-project/index.html` — safe sample page.
- `sample-project/style.css` — sample stylesheet.
- `PROMPT.md` — copy-ready Claude Code prompt.
- `ACCEPTANCE_CHECKLIST.md` — checks to perform before accepting changes.
