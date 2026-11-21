# Resolve Merge Conflicts

Recognize conflict markers, choose the intended final content, and complete a merge safely.

     ## How a conflict happens
 Two branches change overlapping lines in the same file. Git cannot choose the correct result automatically.

 ## Conflict markers
 ```text
 <<<<<<< HEAD
 content from the current branch
 =======
 content from the branch being merged
 >>>>>>> feature/example
 ```

 ## Practise
 1. Create a branch and edit one line in `README.md`.
 2. Switch to `main` and change the same line differently.
 3. Merge the feature branch into `main`.
 4. Open the conflicted file and decide what the final content should be.
 5. Remove all conflict markers, save the file, run `git status`, stage the resolved file, and complete the merge commit if Git requires it.

 ## Challenge
 Resolve a conflict while preserving both useful changes, then inspect the final diff.

 ## Review
 Never leave `<<<<<<<`, `=======`, or `>>>>>>>` markers in committed files.


## Study method
1. Read the lesson completely.
2. Run each command in a separate disposable practice repository where instructed.
3. Predict the result before pressing Enter.
4. Inspect the result with `git status`, `git log`, or the GitHub interface.
5. Complete the challenge without copying a solution.
