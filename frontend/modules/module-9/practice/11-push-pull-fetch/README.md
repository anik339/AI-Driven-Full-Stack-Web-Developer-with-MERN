# Push, Pull and Fetch

Synchronize local and remote branches while avoiding accidental overwrites.

     ## Commands
 ```bash
 git remote -v
 git fetch origin
 git status -sb
 git pull --ff-only
 git push -u origin feature/your-branch
 git push
 ```

 ## Understand
 - `fetch` downloads remote objects and updates remote-tracking references without merging into your current branch.
 - `pull` fetches and then integrates remote changes.
 - `push` sends your local commits to the remote.
 - `-u` sets the upstream branch for convenient future push/pull commands.

 ## Practise
 1. Push a feature branch to your practice GitHub repository.
 2. Edit the README through GitHub's web interface.
 3. Fetch and inspect the remote update.
 4. Pull the change into your local branch.
 5. Make another local commit and push it.

 ## Challenge
 Explain why you should inspect `git status` and fetch remote updates before starting collaborative work.


## Study method
1. Read the lesson completely.
2. Run each command in a separate disposable practice repository where instructed.
3. Predict the result before pressing Enter.
4. Inspect the result with `git status`, `git log`, or the GitHub interface.
5. Complete the challenge without copying a solution.
