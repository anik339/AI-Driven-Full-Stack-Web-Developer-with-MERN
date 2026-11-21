# Inspect History with Status, Log and Diff

Read repository history and compare working-tree, staged, and committed changes.

     ## Commands
 ```bash
 git status
 git log --oneline
 git log --oneline --graph --decorate --all
 git show HEAD
 git diff
 git diff --cached
 git diff HEAD~1 HEAD
 ```

 ## Understand
 - `git status` explains the current state.
 - `git log` lists commits.
 - `git show` inspects one commit.
 - `git diff` shows unstaged changes.
 - `git diff --cached` shows staged changes.

 ## Practise
 Make one edit, inspect the unstaged diff, stage it, inspect the staged diff, commit it, and inspect the new commit with `git show`.

 ## Challenge
 Find the commit that introduced a chosen line and explain how the diff helps you understand what changed.


## Study method
1. Read the lesson completely.
2. Run each command in a separate disposable practice repository where instructed.
3. Predict the result before pressing Enter.
4. Inspect the result with `git status`, `git log`, or the GitHub interface.
5. Complete the challenge without copying a solution.
