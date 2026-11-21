# Task 08 — Inspect Commit History and Compare Changes

**Track:** Git fundamentals  
**Focus:** git log · git show · git diff

## Problem

Inspect the latest commits, view one commit in detail, and compare the latest two commits.

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

You can identify commit hashes, authors, messages, changed files, and line-level differences.

## Stretch challenge

Use `git log -- README.md` to inspect only the history that touched one file.

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
# Compact history with branch decorations.
git log --oneline --graph --decorate -10
# Show the latest commit and its changed files.
git show --stat HEAD
# Show the complete latest commit patch.
git show HEAD
# Compare the latest commit with its parent (requires at least two commits).
git diff HEAD~1 HEAD
```
