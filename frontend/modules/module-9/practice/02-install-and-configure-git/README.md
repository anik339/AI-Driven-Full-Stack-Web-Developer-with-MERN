# Install and Configure Git

Check Git installation and configure the author identity used in commit metadata.

     ## Learn
 - Verify the installation and inspect the Git version.
 - Configure a name and email for commit authorship.
 - Understand global configuration versus repository-local configuration.

 ## Commands
 ```bash
 git --version
 git config --global user.name "Your Name"
 git config --global user.email "you@example.com"
 git config --global --list
 ```

 Replace the example name and email with the identity you want recorded in commits. These values are not your GitHub password.

 ## Practise
 1. Run `git --version`.
 2. Set your author name and email.
 3. Run `git config --global --list` and verify the values.
 4. Open a repository and run `git config --list --show-origin` to see where settings come from.

 ## Challenge
 Set a repository-specific name for a disposable practice repository and explain which configuration takes precedence.

 ## Safety
 Never place passwords, personal access tokens, or private SSH keys in Git configuration files that you plan to commit.


## Study method
1. Read the lesson completely.
2. Run each command in a separate disposable practice repository where instructed.
3. Predict the result before pressing Enter.
4. Inspect the result with `git status`, `git log`, or the GitHub interface.
5. Complete the challenge without copying a solution.
