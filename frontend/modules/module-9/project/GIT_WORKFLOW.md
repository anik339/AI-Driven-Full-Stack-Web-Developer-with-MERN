# Git & GitHub Workflow for CodeTrack

The main course repository already has Git history. Use this workflow from the repository root; do not run `git init` again.

## 1. Start from an updated main branch
```bash
git switch main
git pull --ff-only
git status
```

## 2. Create a feature branch
```bash
git switch -c feature/module-9-codetrack
```

## 3. Commit in small, meaningful steps
```bash
git add frontend/modules/module-9
git commit -m "feat: add module 9 git github and oop practice"
```

For later improvements, use focused commits:
- `feat: add project board filtering`
- `fix: validate imported backup data`
- `docs: add module 9 study plan`
- `refactor: separate task persistence from UI`

## 4. Push and open a Pull Request
```bash
git push -u origin feature/module-9-codetrack
```
Open GitHub → Pull requests → New pull request. Compare the feature branch with `main`, explain the change, list the tests performed, and inspect the Files changed tab.

## 5. Review before merge
- [ ] Module 1–8 files are unchanged.
- [ ] Module 9 dashboard links open.
- [ ] CodeTrack passes `TESTING_CHECKLIST.md`.
- [ ] No secrets, tokens, or local environment files are included.
- [ ] README and study plan describe the actual contents.

After review, merge the PR using the repository's agreed strategy, then delete the feature branch.

## Commit message pattern
`type: short action`

Common types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`.

## Safety
Never commit GitHub tokens, passwords, private keys, or real `.env` files. Never force-push to a shared branch unless the team explicitly approves it.
