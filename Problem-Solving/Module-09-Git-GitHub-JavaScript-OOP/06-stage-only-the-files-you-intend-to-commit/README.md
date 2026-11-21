# Task 06 — Stage Only the Files You Intend to Commit

**Track:** Git fundamentals  
**Focus:** git add · pathspec · staged diff

## Problem

Create README.md and app.js. Stage only README.md, verify app.js remains untracked, then stage app.js separately.

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

The first staged-file list contains only README.md. After the second git add, both files appear.

## Stretch challenge

Practise staging a single hunk with `git add -p` in Git Bash or a compatible terminal.

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
# Create two files for the exercise.
"Project setup notes" | Set-Content README.md
New-Item -ItemType Directory -Force src | Out-Null
"console.log('Hello');" | Set-Content src/app.js
# Stage only the documentation file.
git add README.md
# Review exactly what is staged.
git status --short
git diff --cached --name-only
# Stage the source file after reviewing it.
git add src/app.js
git diff --cached --name-only
```
