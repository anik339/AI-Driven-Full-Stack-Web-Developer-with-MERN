# Task 03 — Create a Safe Local Practice Repository

**Track:** Git fundamentals  
**Focus:** git init · working directory · first file

## Problem

Create a new folder named git-module9-lab, initialize Git there, add a README.md, and inspect the repository status.

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

Git reports a newly initialized repository and README.md as an untracked file.

## Stretch challenge

Add a src folder with app.js and explain why Git tracks files rather than empty folders.

## Professional note

Never initialize a nested repository inside your existing MERN course repository.

## Self-review

- [ ] I attempted the task before reading the reference solution.
- [ ] I can explain the important code lines without reading the comments.
- [ ] I tested a normal case and an edge case.
- [ ] I completed or documented the stretch challenge.

## Command reference

Run these commands only in your separate practice repository. Replace placeholders where noted.

```powershell
# Create a separate sandbox folder in your current directory.
New-Item -ItemType Directory -Force git-module9-lab | Out-Null
Set-Location git-module9-lab
# Initialize Git only inside this disposable folder.
git init -b main
# Create a starter file.
"# Git Module 09 Practice Lab" | Set-Content README.md
# Check the new repository and untracked file.
git status --short
# Optional: confirm the repository root.
git rev-parse --show-toplevel
```
