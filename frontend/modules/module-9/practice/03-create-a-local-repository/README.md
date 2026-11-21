# Create a Local Repository

Create a safe practice repository and understand initialization, status, and the first commit.

     ## Learn
 - Initialize a repository with `git init`.
 - Inspect the repository with `git status`.
 - Understand the `.git` directory and the default branch.

 ## Commands
 ```bash
 mkdir git-practice-lab
 cd git-practice-lab
 git init
 git status
 ```

 Create a file named `README.md`, add a short project description, then run:
 ```bash
 git status
 git add README.md
 git status
 git commit -m "chore: add initial project readme"
 git status
 ```

 ## Practise
 Repeat the exercise in a separate disposable folder. Do not run `git init` inside your existing course repository; it already has its own Git history.

 ## Challenge
 Create a second file and explain why Git reports it as untracked before it is staged.


## Study method
1. Read the lesson completely.
2. Run each command in a separate disposable practice repository where instructed.
3. Predict the result before pressing Enter.
4. Inspect the result with `git status`, `git log`, or the GitHub interface.
5. Complete the challenge without copying a solution.
