# Task 01 — Understand Git and the Version-Control Lifecycle

**Track:** Git fundamentals  
**Focus:** working tree · staging area · commit · remote

## Problem

A teammate edits README.md, stages it, commits it, and pushes it. Identify where the change exists after each action and explain Git versus GitHub.

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

You can describe the four areas and distinguish Git (tool) from GitHub (hosting/collaboration).

## Stretch challenge

Draw the lifecycle and explain why a commit can exist locally before it appears on GitHub.

## Professional note

Run inspection commands inside a repository you own. Do not run git init inside your existing course repository for this exercise.

## Self-review

- [ ] I attempted the task before reading the reference solution.
- [ ] I can explain the important code lines without reading the comments.
- [ ] I tested a normal case and an edge case.
- [ ] I completed or documented the stretch challenge.

## Command reference

Run these commands only in your separate practice repository. Replace placeholders where noted.

```powershell
# Git is the version-control program running on your computer.
# GitHub hosts remote Git repositories and adds collaboration tools.
# 1) Edit a file: the working tree becomes modified.
# 2) Stage selected changes: Git records the next commit candidate.
# 3) Commit: Git stores a local snapshot in repository history.
# 4) Push: Git transfers local commits to the configured remote.
# Inspect the current state without changing anything:
git status --short
# Inspect recent local snapshots:
git log --oneline -5
# Inspect unstaged changes:
git diff
```
