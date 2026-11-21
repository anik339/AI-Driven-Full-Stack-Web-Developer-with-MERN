# Issues, Projects, Releases and GitHub Pages

Use GitHub's project-management and publishing features to organize and present work.

     ## Practise
 - Create an Issue with a clear title, reproduction steps, expected result, and actual result.
 - Add labels such as `bug`, `documentation`, or `enhancement`.
 - Use GitHub Projects to track Todo → In Progress → Review → Done.
 - Create a version tag after a stable milestone.
 - Publish a static site with GitHub Pages when the repository is suitable.

 ## Version tags
 ```bash
 git tag -a v1.0.0 -m "First stable learning release"
 git push origin v1.0.0
 git tag
 ```

 ## GitHub Pages checklist
 1. Confirm the site has a valid `index.html`.
 2. Open repository Settings → Pages.
 3. Select the correct branch and folder.
 4. Save and wait for deployment.
 5. Open the published URL and test every relative link.

 ## Challenge
 Create one Issue, move it through a Project board, then close it with a commit or pull request reference.

 ## Note
 GitHub Pages publishes static files; it does not host a Node.js server or database.


## Study method
1. Read the lesson completely.
2. Run each command in a separate disposable practice repository where instructed.
3. Predict the result before pressing Enter.
4. Inspect the result with `git status`, `git log`, or the GitHub interface.
5. Complete the challenge without copying a solution.
