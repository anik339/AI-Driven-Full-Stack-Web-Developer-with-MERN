# Task 15 — Prepare a Pull Request and Review a Code Diff

**Track:** GitHub collaboration  
**Focus:** pull request · review · diff · branch protection

## Problem

Create a feature branch, push it, open a pull request on GitHub, and review the changed files before requesting a merge.

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

The pull request compares the feature branch with main and clearly explains the change, test evidence, and any related issue.

## Stretch challenge

Write a reviewer comment that identifies one concrete risk and suggests a test instead of saying only “looks good”.

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
# Create a focused branch and commit your change.
git switch -c feature/contact-form
# Edit files, then stage and commit only the intended work.
git add src/contact-form.js
git commit -m "feat: add contact form validation"
# Publish the branch to GitHub.
git push -u origin feature/contact-form
# Review the branch diff locally before opening the PR.
git diff origin/main...HEAD
# Inspect commits included in the proposed pull request.
git log --oneline origin/main..HEAD
# Then open GitHub → Pull requests → New pull request.
# Add context, testing notes, screenshots when useful, and link the related issue.
```
