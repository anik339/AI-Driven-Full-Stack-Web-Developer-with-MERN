# Branches and Merging

Use feature branches to isolate work and merge completed changes back into the main branch.

     ## Commands
 ```bash
 git branch
 git switch -c feature/add-about-page
 git status
 git add .
 git commit -m "feat: add about page"
 git switch main
 git merge feature/add-about-page
 git branch -d feature/add-about-page
 ```

 ## Practise
 1. Create a feature branch from `main`.
 2. Make a small change and commit it.
 3. Switch back to `main`.
 4. Merge the feature branch.
 5. Inspect the graph with `git log --oneline --graph --all`.

 ## Challenge
 Create two feature branches with separate changes and merge both into `main`.

 ## Team habit
 Keep `main` stable. Do new work on a short, descriptive branch such as `feature/task-search` or `fix/mobile-navigation`.


## Study method
1. Read the lesson completely.
2. Run each command in a separate disposable practice repository where instructed.
3. Predict the result before pressing Enter.
4. Inspect the result with `git status`, `git log`, or the GitHub interface.
5. Complete the challenge without copying a solution.
