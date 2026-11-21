# Task 10 — Create and Switch to a Feature Branch

**Track:** Git branching  
**Focus:** git switch · feature branch · branch list

## Problem

Create a feature branch, add a small file, commit it, and verify that main has not received the change yet.

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

The current branch is feature/profile-card. The feature commit belongs to that branch until merged.

## Stretch challenge

Create a second branch named fix/mobile-navigation and explain why each branch should have a focused purpose.

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
# Start from the main branch and create a named feature branch.
git switch main
git switch -c feature/profile-card
# Add and commit a feature-specific file.
New-Item -ItemType Directory -Force src | Out-Null
"export const profileTitle = 'Developer Profile';" | Set-Content src/profile.js
git add src/profile.js
git commit -m "feat: add profile card data"
# Confirm the active branch and available branches.
git branch --show-current
git branch --list
```
