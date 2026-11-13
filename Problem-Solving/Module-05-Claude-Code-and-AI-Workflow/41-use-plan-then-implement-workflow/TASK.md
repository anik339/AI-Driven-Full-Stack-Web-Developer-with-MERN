# Problem 41: Use Plan-Then-Implement Workflow

## Scenario
You want Claude Code to plan a change before touching the code.

## Goal
Ask Claude Code to inspect relevant files, propose a short plan and wait for approval before editing.

## Expected result
The plan names exact files, risks and tests.

## Challenge
Use the workflow for a small navigation change.

## Files
- `sample-project/index.html` — safe sample page.
- `sample-project/style.css` — sample stylesheet.
- `PROMPT.md` — copy-ready Claude Code prompt.
- `ACCEPTANCE_CHECKLIST.md` — checks to perform before accepting changes.
