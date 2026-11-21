# Task 09 — Protect Secrets and Generated Files with .gitignore

**Track:** Git fundamentals  
**Focus:** \.gitignore · .env · node_modules · git check-ignore

## Problem

Create a .gitignore for a JavaScript project. Add a safe .env.example file and verify that .env is ignored.

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

git check-ignore identifies the .env rule. .env.example is visible to Git; .env is ignored.

## Stretch challenge

Add a rule for editor swap files and explain why .env.example should contain placeholders only.

## Professional note

Never paste a real API key, password, access token, or private key into a practice repository.

## Self-review

- [ ] I attempted the task before reading the reference solution.
- [ ] I can explain the important code lines without reading the comments.
- [ ] I tested a normal case and an edge case.
- [ ] I completed or documented the stretch challenge.

## Command reference

Run these commands only in your separate practice repository. Replace placeholders where noted.

```powershell
# Create a project .gitignore. Keep real secrets out of Git.
@'
node_modules/
dist/
coverage/
.env
.env.*
!.env.example
*.log
.DS_Store
'@ | Set-Content .gitignore
# Commit a template containing placeholder values only.
"API_BASE_URL=https://example.invalid" | Set-Content .env.example
# Create a local-only file to verify the ignore rule.
"SECRET=do-not-commit" | Set-Content .env
# Explain which rule ignores the local secret file.
git check-ignore -v .env
# Confirm .env is not listed as an untracked file.
git status --short
```
