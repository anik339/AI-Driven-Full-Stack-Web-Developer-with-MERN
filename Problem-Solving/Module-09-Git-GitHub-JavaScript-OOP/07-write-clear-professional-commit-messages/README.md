# Task 07 — Write Clear, Professional Commit Messages

**Track:** Git fundamentals  
**Focus:** git commit · conventional commit prefixes · atomic changes

## Problem

Stage one documentation change and one source-code change separately. Commit each with a concise message describing the change.

## Requirements

1. Read the problem and write down your own plan before opening the solution.
2. Complete the requested behavior and test at least one normal case.
3. Test one edge case or invalid input where relevant.
4. Explain why the solution works in your own words.

## Run and review

- Open `index.html` with VS Code Live Server.
- For this Git task, use the commands below in a disposable Git repository. The webpage only displays a safety checklist; it cannot execute terminal commands.
- Read the comments before copying or adapting the reference solution.

## Reference result

Two separate commits appear in history. Each commit describes one logical change.

## Stretch challenge

Write a `fix:` commit for a bug and a `refactor:` commit for an internal cleanup. Explain the difference.

## Professional note

Prefer small, readable functions, meaningful names, explicit validation, and behavior that can be tested independently.

## Self-review

- [ ] I attempted the task before reading the reference solution.
- [ ] I can explain the important code lines without reading the comments.
- [ ] I tested a normal case and an edge case.
- [ ] I completed or documented the stretch challenge.

## Command reference

Run these commands only in your separate practice repository. Replace placeholders where noted.

```powershell
# Stage and commit one focused documentation change.
git add README.md
git commit -m "docs: describe local setup"
# Stage and commit one focused code change.
git add src/app.js
git commit -m "feat: add application entry point"
# Review the resulting commit sequence.
git log --oneline -5
```
