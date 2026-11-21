# Task 19 — Add a Basic GitHub Actions Quality Check

**Track:** GitHub collaboration  
**Focus:** GitHub Actions · workflow YAML · CI

## Problem

Create a workflow that checks JavaScript syntax on every push and pull request. Keep the workflow small and explain each step.

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

The workflow starts on push and pull_request events. The syntax step fails if a checked JavaScript file has a parse error.

## Stretch challenge

Add a second job that runs unit tests only after a package.json test script exists.

## Professional note

This is a syntax check, not a complete test suite. Do not store secrets in workflow YAML.

## Self-review

- [ ] I attempted the task before reading the reference solution.
- [ ] I can explain the important code lines without reading the comments.
- [ ] I tested a normal case and an edge case.
- [ ] I completed or documented the stretch challenge.

## Command reference

Run these commands only in your separate practice repository. Replace placeholders where noted.

```powershell
# Create this file: .github/workflows/javascript-check.yml
# GitHub Actions runs this workflow for pushes and pull requests.
name: JavaScript syntax check
on: [push, pull_request]
jobs:
  syntax:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository
        uses: actions/checkout@v4
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Check JavaScript files
        run: |
          find frontend -name '*.js' -not -path '*/node_modules/*' -print0 | while IFS= read -r -d '' file; do
            node --check "$file"
          done
# Commit the workflow and inspect the Actions tab after pushing.
```
