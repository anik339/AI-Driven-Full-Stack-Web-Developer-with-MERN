# Task 04 — Configure a Repository-Specific Git Identity

**Track:** Git fundamentals  
**Focus:** git config · local identity · commit metadata

## Problem

Inside a disposable repository, configure a local name and placeholder email. Verify that the values are stored in the repository config, not your global config.

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

The name and placeholder email are shown with local configuration scope. Replace the placeholders with your preferred commit identity when practising.

## Stretch challenge

Compare `git config --local --list` with `git config --global --list` and explain the scope difference.

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
# First move into your disposable practice repository.
# These values apply only to this repository.
git config user.name "Your Name"
git config user.email "you@example.com"
# Verify the local values.
git config --local --get user.name
git config --local --get user.email
# Show the file that stores local repository configuration.
git config --local --list --show-origin
```
