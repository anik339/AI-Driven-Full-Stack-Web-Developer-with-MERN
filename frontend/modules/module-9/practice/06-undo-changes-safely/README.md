# Undo Changes Safely

Choose the correct recovery command for unstaged changes, staged changes, and shared commits.

     ## Commands to understand
 ```bash
 git restore <file>
 git restore --staged <file>
 git revert <commit-hash>
 git commit --amend
 ```

 ## Decision guide
 - `git restore <file>` discards unstaged edits in that file. Use only when you are certain you do not need them.
 - `git restore --staged <file>` unstages a file but keeps its working-tree edits.
 - `git revert <commit>` creates a new commit that reverses an earlier commit. It is generally appropriate for shared history.
 - `git commit --amend` replaces the latest local commit; avoid amending commits already shared with others unless your team explicitly agrees.

 ## Practise
 In your disposable Git lab, create a change, stage it, unstage it, and inspect the status at each step.

 ## Challenge
 For each of these situations, choose a safe command: (1) unstage a file, (2) discard a throwaway local edit, (3) reverse a commit already pushed to GitHub.

 ## Safety
 Do not experiment with `git reset --hard`, force-push, or destructive cleanup commands in your main learning repository. They can permanently remove work or rewrite shared history.


## Study method
1. Read the lesson completely.
2. Run each command in a separate disposable practice repository where instructed.
3. Predict the result before pressing Enter.
4. Inspect the result with `git status`, `git log`, or the GitHub interface.
5. Complete the challenge without copying a solution.
