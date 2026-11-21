# GitHub Repositories, Clone and Remotes

Create or inspect a GitHub repository and connect a local copy to its remote origin.

     ## Learn
 - A GitHub repository hosts Git history and collaboration tools.
 - `origin` is a conventional name for the main remote.
 - Cloning downloads the repository and configures its remote.

 ## Commands
 ```bash
 git clone https://github.com/OWNER/REPOSITORY.git
 cd REPOSITORY
 git remote -v
 git branch -a
 ```

 ## Practise
 1. Create a new empty practice repository on GitHub (do not create a second remote for your main course repository).
 2. Clone it into a separate folder.
 3. Inspect `git remote -v`.
 4. Open the repository page and identify Code, Issues, Pull requests, Actions, and Settings.

 ## Challenge
 Explain the difference between cloning a repository and downloading its ZIP.

 ## Security
 Authenticate using Git Credential Manager or an approved SSH key. Never paste a token into a README, source file, screenshot, or chat.


## Study method
1. Read the lesson completely.
2. Run each command in a separate disposable practice repository where instructed.
3. Predict the result before pressing Enter.
4. Inspect the result with `git status`, `git log`, or the GitHub interface.
5. Complete the challenge without copying a solution.
