# Task 13 — Connect a Local Repository to GitHub

**Track:** GitHub collaboration  
**Focus:** git remote · origin · git clone

## Problem

Create an empty GitHub repository, connect your local practice repository, and inspect the remote URL. Also practise cloning into a separate folder.

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

The remote named origin points to the GitHub URL. A clone contains the project files and Git history.

## Stretch challenge

Explain why `git clone` is different from downloading a ZIP file from GitHub.

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
# Replace USERNAME and REPOSITORY with your own GitHub details.
# Add the remote to an existing local repository.
git remote add origin https://github.com/USERNAME/REPOSITORY.git
# Verify the remote name and URL.
git remote -v
# Alternative: clone a remote repository into a new folder.
Set-Location ..
git clone https://github.com/USERNAME/REPOSITORY.git repository-copy
# Enter the cloned repository and inspect its branches.
Set-Location repository-copy
git branch -a
```
