# Problem 18: Review Changes Before Commit

## Scenario
You have modified several files and want to understand the impact.

## Goal
Ask Claude Code to review the Git diff and summarize changed behaviour, risks and missing tests.

## Expected result
The review references actual changed files and lines and identifies untested behaviour.

## Challenge
Ask it to classify findings by severity.

## Files
- `sample-project/index.html` — safe sample page.
- `sample-project/style.css` — sample stylesheet.
- `PROMPT.md` — copy-ready Claude Code prompt.
- `ACCEPTANCE_CHECKLIST.md` — checks to perform before accepting changes.
