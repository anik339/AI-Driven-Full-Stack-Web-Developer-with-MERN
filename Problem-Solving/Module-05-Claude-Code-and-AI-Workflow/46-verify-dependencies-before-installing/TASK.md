# Problem 46: Verify Dependencies Before Installing

## Scenario
A tutorial suggests installing a package, but the project may already have it.

## Goal
Ask Claude Code to inspect package.json and the lockfile before recommending any installation.

## Expected result
The recommendation is based on the existing dependency list.

## Challenge
Check whether a native browser API can solve the task without a package.

## Files
- `sample-project/index.html` — safe sample page.
- `sample-project/style.css` — sample stylesheet.
- `PROMPT.md` — copy-ready Claude Code prompt.
- `ACCEPTANCE_CHECKLIST.md` — checks to perform before accepting changes.
