# Task 14 — Synchronize with Fetch, Pull, and Push

**Track:** GitHub collaboration  
**Focus:** git fetch · git pull · git push · upstream

## Problem

Fetch remote updates, inspect the branch state, pull with fast-forward-only behavior, and push your own branch with upstream tracking.

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

Fetch updates remote-tracking references; pull integrates remote commits; push publishes local commits.

## Stretch challenge

Use `git log --oneline --left-right HEAD...origin/main` to inspect commits on each side before integrating.

## Professional note

If histories diverge, stop and inspect the graph. Do not force-push to a shared branch.

## Self-review

- [ ] I attempted the task before reading the reference solution.
- [ ] I can explain the important code lines without reading the comments.
- [ ] I tested a normal case and an edge case.
- [ ] I completed or documented the stretch challenge.

## Command reference

Run these commands only in your separate practice repository. Replace placeholders where noted.

```powershell
# Download remote references without merging them into your branch.
git fetch origin
# Compare your local branch with its upstream.
git status -sb
# Integrate remote changes only when a fast-forward is possible.
git pull --ff-only
# Publish your current branch and set its upstream on first push.
git push -u origin main
# On later pushes, the upstream can be used automatically.
git push
```
