# Staging Area and Meaningful Commits

Stage specific changes, inspect what is staged, and write clear commit messages.

     ## Learn
 - `git add` moves selected changes into the staging area.
 - A commit records the staged snapshot.
 - Small commits make code review and debugging easier.

 ## Commands
 ```bash
 git add README.md
 git add src/
 git add -A
 git diff --cached
 git commit -m "feat: add project navigation"
 ```

 ## Practise
 1. Change two different files.
 2. Stage only one file and inspect `git status`.
 3. Run `git diff --cached` before committing.
 4. Commit the first file, then stage and commit the second file separately.

 ## Commit message examples
 - `feat: add task filtering`
 - `fix: handle empty search input`
 - `docs: explain local setup`
 - `refactor: extract task validation`

 ## Challenge
 Write three commits that each represent one understandable change. Avoid vague messages such as `update`, `final`, or `changes`.


## Study method
1. Read the lesson completely.
2. Run each command in a separate disposable practice repository where instructed.
3. Predict the result before pressing Enter.
4. Inspect the result with `git status`, `git log`, or the GitHub interface.
5. Complete the challenge without copying a solution.
