# Problem 26: Stage Only Intended Files

## Scenario
You changed source code and generated output, but only source files should be committed.

## Goal
Ask Claude Code to inspect git status and recommend exact files to stage.

## Expected result
Only the intended source files are staged.

## Challenge
Run git diff --cached to inspect what will be committed.

## Files
- `sample-project/index.html` — safe sample page.
- `sample-project/style.css` — sample stylesheet.
- `PROMPT.md` — copy-ready Claude Code prompt.
- `ACCEPTANCE_CHECKLIST.md` — checks to perform before accepting changes.
