# `.gitignore` and Repository Hygiene

Keep generated files, dependencies, local configuration, and secrets out of Git history.

     ## Example `.gitignore`
 ```gitignore
 node_modules/
 .env
 .env.*
 !.env.example
 dist/
 build/
 coverage/
 .DS_Store
 Thumbs.db
 *.log
 ```

 ## Practise
 1. Add a `.gitignore` to the disposable practice repository.
 2. Create a temporary file named `.env` and verify it is ignored with `git status`.
 3. Run `git check-ignore -v .env` to see which rule matched.
 4. Inspect `git status --ignored`.

 ## Important
 `.gitignore` does not automatically untrack a file that was already committed. If a harmless generated file was tracked by mistake, `git rm --cached <path>` removes it from the index while keeping the local file. If a secret was committed, rotate/revoke it immediately; deleting the file in a later commit does not erase it from history.

 ## Challenge
 Create a `.gitignore` suitable for a Node.js project and explain why `.env.example` can be committed while `.env` should remain local.


## Study method
1. Read the lesson completely.
2. Run each command in a separate disposable practice repository where instructed.
3. Predict the result before pressing Enter.
4. Inspect the result with `git status`, `git log`, or the GitHub interface.
5. Complete the challenge without copying a solution.
