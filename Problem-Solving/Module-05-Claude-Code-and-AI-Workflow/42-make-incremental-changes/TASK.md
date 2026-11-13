# Problem 42: Make Incremental Changes

## Scenario
A request includes five UI changes and may be difficult to review as one patch.

## Goal
Ask Claude Code to implement only the first small change, verify it, then stop for review.

## Expected result
Each patch is small and independently testable.

## Challenge
Apply the remaining changes one at a time.

## Files
- `sample-project/index.html` — safe sample page.
- `sample-project/style.css` — sample stylesheet.
- `PROMPT.md` — copy-ready Claude Code prompt.
- `ACCEPTANCE_CHECKLIST.md` — checks to perform before accepting changes.
