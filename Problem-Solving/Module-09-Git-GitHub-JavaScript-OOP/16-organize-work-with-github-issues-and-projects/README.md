# Task 16 — Organize Work with GitHub Issues and Projects

**Track:** GitHub collaboration  
**Focus:** issues · labels · milestones · projects

## Problem

Create a GitHub Issue with a clear title, problem statement, acceptance criteria, and a task checklist. Add it to a Project board and link the pull request.

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

The issue describes a user problem and testable acceptance criteria. The Project board makes its status visible.

## Stretch challenge

Create labels for bug, enhancement, and documentation. Decide which work belongs in a milestone.

## Professional note

GitHub CLI is optional. The same exercise can be completed in the GitHub website.

## Self-review

- [ ] I attempted the task before reading the reference solution.
- [ ] I can explain the important code lines without reading the comments.
- [ ] I tested a normal case and an edge case.
- [ ] I completed or documented the stretch challenge.

## Command reference

Run these commands only in your separate practice repository. Replace placeholders where noted.

```powershell
# Optional GitHub CLI commands (install and authenticate gh first).
# Create an issue with a clear title and useful body.
gh issue create --title "Add accessible contact form" --body "## Goal`nBuild a keyboard-accessible contact form.`n`n## Acceptance criteria`n- [ ] Labels are associated with inputs`n- [ ] Errors are announced accessibly`n- [ ] Form works by keyboard"
# List open issues to review the backlog.
gh issue list --state open
# View one issue by its number.
gh issue view 1
# If GitHub CLI is unavailable, complete these steps in the GitHub web interface.
```
