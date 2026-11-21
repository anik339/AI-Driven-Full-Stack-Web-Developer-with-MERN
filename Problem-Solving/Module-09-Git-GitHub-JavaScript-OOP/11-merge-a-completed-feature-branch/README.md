# Task 11 — Merge a Completed Feature Branch

**Track:** Git branching  
**Focus:** git merge · fast-forward · no-ff · branch cleanup

## Problem

After completing a feature branch, switch to main and merge it. Inspect the history and delete the local feature branch only after verifying the merge.

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

The feature changes are present on main and the graph shows the merge relationship.

## Stretch challenge

Compare a fast-forward merge with `--no-ff` and describe when a merge commit helps the team.

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
# Move to the destination branch.
git switch main
# Create an explicit merge commit for a visible feature boundary.
git merge --no-ff feature/profile-card -m "merge: integrate profile card"
# Inspect the branch graph after the merge.
git log --oneline --graph --decorate --all
# Delete the local feature branch only after a successful merge.
git branch -d feature/profile-card
```
