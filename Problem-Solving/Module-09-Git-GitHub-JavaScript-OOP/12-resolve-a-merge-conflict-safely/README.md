# Task 12 — Resolve a Merge Conflict Safely

**Track:** Git branching  
**Focus:** merge conflict · conflict markers · git status

## Problem

Create two branches that edit the same README line. Merge one branch into the other, resolve the conflict manually, and complete the merge.

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

The final README contains intentional text with no conflict markers, and Git reports a clean working tree after the merge.

## Stretch challenge

Practise resolving a conflict in two different files. Explain why blindly choosing “Accept Current” can lose valid work.

## Professional note

Do not use reset --hard or force-push to escape a conflict. Read the conflict and resolve it deliberately.

## Self-review

- [ ] I attempted the task before reading the reference solution.
- [ ] I can explain the important code lines without reading the comments.
- [ ] I tested a normal case and an edge case.
- [ ] I completed or documented the stretch challenge.

## Command reference

Run these commands only in your separate practice repository. Replace placeholders where noted.

```powershell
# Begin from a clean main branch and create a feature branch.
git switch main
git switch -c feature/readme-update
# Edit the same README line on this branch, then commit it.
# Switch to main, edit that exact line differently, and commit there.
# Merge the feature branch; Git will report a conflict.
git switch main
git merge feature/readme-update
# Inspect the conflicted paths and open them in VS Code.
git status
# In the file, choose the intended final text and remove all conflict markers.
# Then stage the resolved file and complete the merge.
git add README.md
git commit -m "merge: resolve README conflict"
```
