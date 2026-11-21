# Task 17 — Tag a Release and Write Release Notes

**Track:** GitHub collaboration  
**Focus:** git tag · semantic versioning · GitHub Releases

## Problem

Create an annotated v1.0.0 tag for a stable practice project, push the tag, and prepare release notes for GitHub.

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

The annotated tag points to the intended commit and appears on GitHub after it is pushed.

## Stretch challenge

Explain when a change should increment MAJOR, MINOR, or PATCH in semantic versioning.

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
# Confirm the working tree is clean before tagging.
git status --short
# Create an annotated release tag with a useful message.
git tag -a v1.0.0 -m "Release 1.0.0: first stable learning project"
# Inspect the tag and the commit it references.
git show v1.0.0
# Publish the tag to the remote repository.
git push origin v1.0.0
# On GitHub, open Releases → Draft a new release and select v1.0.0.
# Summarize added features, fixes, known limitations, and upgrade notes.
```
