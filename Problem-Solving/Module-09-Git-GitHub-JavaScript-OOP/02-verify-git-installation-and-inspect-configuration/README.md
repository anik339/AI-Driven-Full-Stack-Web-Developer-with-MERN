# Task 02 — Verify Git Installation and Inspect Configuration

**Track:** Git fundamentals  
**Focus:** git --version · git config · configuration scope

## Problem

Verify Git is available in PowerShell. Inspect configured identity and explain the difference between system, global, and local configuration.

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

PowerShell prints a Git version and the active configuration values. Missing identity values can be configured locally in a practice repository.

## Stretch challenge

Find which config file supplies user.name and explain why local config overrides global config.

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
# Confirm that the Git executable is available.
git --version
# Show configuration values and where each value came from.
git config --list --show-origin
# Read the configured author name and email (if present).
git config user.name
git config user.email
# PowerShell alternative for locating the executable.
Get-Command git
```
