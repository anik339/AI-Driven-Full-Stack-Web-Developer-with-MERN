# Task 05 — Read Git Status and Follow a File Through Its States

**Track:** Git fundamentals  
**Focus:** git status · git diff · git diff --cached

## Problem

Create notes.txt, inspect it, stage it, modify it again, and compare the staged and unstaged differences.

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

The staged snapshot contains Version 1 while the working tree contains Version 2. Git status shows both staged and unstaged changes.

## Stretch challenge

Stage the second version and compare `git diff --cached` before committing.

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
# Create a file and inspect its untracked state.
"Version 1" | Set-Content notes.txt
git status --short
# Stage the first version.
git add notes.txt
# Inspect what is staged for the next commit.
git diff --cached
# Modify the file after staging.
"Version 2" | Set-Content notes.txt
# This shows unstaged changes; the staged snapshot remains separate.
git diff
# Inspect both states together.
git status
```
