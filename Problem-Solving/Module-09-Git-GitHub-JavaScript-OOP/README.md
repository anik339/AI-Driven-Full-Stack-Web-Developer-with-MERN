# Module 09 — Git, GitHub, JavaScript & OOP — 50 Problems

[Open the interactive 50-problem dashboard](./index.html) · [Back to all problem-solving modules](../index.html)

This ninth problem set extends the existing Module 09 study plan with 50 practical challenges. It is separate from the 22 guided lessons inside `frontend/modules/module-9/`; it does not replace those lessons or the CodeTrack project.

## Coverage

- **Problems 01–19 — Git & GitHub:** version-control lifecycle, installation, local configuration, repositories, staging, commits, history, `.gitignore`, branches, merging, conflicts, remotes, push/pull/fetch, pull requests, Issues/Projects, releases, Pages, and Actions.
- **Problems 20–50 — JavaScript & OOP:** objects, `this`, prototypes, classes, encapsulation, accessors, inheritance, polymorphism, abstraction, composition, static/factory methods, custom errors, dependency injection, repositories, services, events, immutability, domain models, patterns, testing, refactoring, and a capstone.

## Recommended workflow

1. Open `index.html` and search for a topic.
2. Open each task's `README.md` before viewing its reference solution.
3. Attempt the challenge independently and write down your approach.
4. Open the task's `index.html` with VS Code Live Server.
5. For JavaScript tasks, click **Run example**, inspect the output, then read the commented `script.js`.
6. For Git tasks, run the commands only inside a separate disposable repository such as `git-module9-lab`. The browser cannot execute Git commands.
7. Complete the stretch challenge and commit your work with a meaningful message.

## Important safety rules

- Do not run `git init` inside your main course repository for these exercises; it already has Git history.
- Do not use `git reset --hard`, `git clean -fd`, or force-push as shortcuts while learning.
- Use placeholder credentials in examples. Never commit real `.env` files, passwords, tokens, or private keys.
- GitHub CLI (`gh`) is optional. GitHub website steps are included where appropriate.
- Browser JavaScript examples are reference solutions, not a replacement for independent practice.

## Problem index

01. [Understand Git and the Version-Control Lifecycle](./01-understand-git-and-the-version-control-lifecycle/README.md) — working tree · staging area · commit · remote
02. [Verify Git Installation and Inspect Configuration](./02-verify-git-installation-and-inspect-configuration/README.md) — git --version · git config · configuration scope
03. [Create a Safe Local Practice Repository](./03-create-a-safe-local-practice-repository/README.md) — git init · working directory · first file
04. [Configure a Repository-Specific Git Identity](./04-configure-a-repository-specific-git-identity/README.md) — git config · local identity · commit metadata
05. [Read Git Status and Follow a File Through Its States](./05-read-git-status-and-follow-a-file-through-its-states/README.md) — git status · git diff · git diff --cached
06. [Stage Only the Files You Intend to Commit](./06-stage-only-the-files-you-intend-to-commit/README.md) — git add · pathspec · staged diff
07. [Write Clear, Professional Commit Messages](./07-write-clear-professional-commit-messages/README.md) — git commit · conventional commit prefixes · atomic changes
08. [Inspect Commit History and Compare Changes](./08-inspect-commit-history-and-compare-changes/README.md) — git log · git show · git diff
09. [Protect Secrets and Generated Files with .gitignore](./09-protect-secrets-and-generated-files-with-gitignore/README.md) — \.gitignore · .env · node_modules · git check-ignore
10. [Create and Switch to a Feature Branch](./10-create-and-switch-to-a-feature-branch/README.md) — git switch · feature branch · branch list
11. [Merge a Completed Feature Branch](./11-merge-a-completed-feature-branch/README.md) — git merge · fast-forward · no-ff · branch cleanup
12. [Resolve a Merge Conflict Safely](./12-resolve-a-merge-conflict-safely/README.md) — merge conflict · conflict markers · git status
13. [Connect a Local Repository to GitHub](./13-connect-a-local-repository-to-github/README.md) — git remote · origin · git clone
14. [Synchronize with Fetch, Pull, and Push](./14-synchronize-with-fetch-pull-and-push/README.md) — git fetch · git pull · git push · upstream
15. [Prepare a Pull Request and Review a Code Diff](./15-prepare-a-pull-request-and-review-a-code-diff/README.md) — pull request · review · diff · branch protection
16. [Organize Work with GitHub Issues and Projects](./16-organize-work-with-github-issues-and-projects/README.md) — issues · labels · milestones · projects
17. [Tag a Release and Write Release Notes](./17-tag-a-release-and-write-release-notes/README.md) — git tag · semantic versioning · GitHub Releases
18. [Publish a Static Project with GitHub Pages](./18-publish-a-static-project-with-github-pages/README.md) — GitHub Pages · deployment source · relative paths
19. [Add a Basic GitHub Actions Quality Check](./19-add-a-basic-github-actions-quality-check/README.md) — GitHub Actions · workflow YAML · CI
20. [Create and Update a JavaScript Object](./20-create-and-update-a-javascript-object/README.md) — object literal · properties · bracket notation
21. [Create Object Methods and Understand `this`](./21-create-object-methods-and-understand-this/README.md) — methods · this · method call
22. [Use call(), apply(), and bind()](./22-use-call-apply-and-bind/README.md) — call · apply · bind · function context
23. [Compare Object References and Copy Objects Safely](./23-compare-object-references-and-copy-objects-safely/README.md) — reference · spread syntax · structuredClone
24. [Build a Reusable Constructor Function](./24-build-a-reusable-constructor-function/README.md) — constructor function · new · prototype
25. [Explore the Prototype Chain](./25-explore-the-prototype-chain/README.md) — Object.create · prototype chain · hasOwn
26. [Create an ES6 Class with a Constructor](./26-create-an-es6-class-with-a-constructor/README.md) — class · constructor · instance methods
27. [Encapsulate Data with Private Class Fields](./27-encapsulate-data-with-private-class-fields/README.md) — private fields · encapsulation · invariants
28. [Validate Data with Getters and Setters](./28-validate-data-with-getters-and-setters/README.md) — get · set · validation · derived values
29. [Extend a Base Class with Inheritance](./29-extend-a-base-class-with-inheritance/README.md) — extends · super · inheritance
30. [Demonstrate Polymorphism with Method Overriding](./30-demonstrate-polymorphism-with-method-overriding/README.md) — polymorphism · overriding · common interface
31. [Hide Implementation Details with Abstraction](./31-hide-implementation-details-with-abstraction/README.md) — abstraction · private methods · public API
32. [Prefer Composition for Reusable Behavior](./32-prefer-composition-for-reusable-behavior/README.md) — composition · dependency collaboration · separation of concerns
33. [Create Static Methods for Class-Level Utilities](./33-create-static-methods-for-class-level-utilities/README.md) — static methods · utility methods · class API
34. [Build a Factory Method for Object Creation](./34-build-a-factory-method-for-object-creation/README.md) — factory method · static factory · named creation
35. [Create and Handle Custom Error Classes](./35-create-and-handle-custom-error-classes/README.md) — extends Error · custom errors · try/catch
36. [Use Dependency Injection to Make a Class Testable](./36-use-dependency-injection-to-make-a-class-testable/README.md) — dependency injection · constructor parameters · test doubles
37. [Implement an In-Memory Repository Pattern](./37-implement-an-in-memory-repository-pattern/README.md) — repository pattern · CRUD · abstraction
38. [Separate Business Logic into a Service Layer](./38-separate-business-logic-into-a-service-layer/README.md) — service layer · single responsibility · validation
39. [Build a Small Event Emitter](./39-build-a-small-event-emitter/README.md) — observer pattern · publish/subscribe · unsubscribe
40. [Model Inventory Items with a Class](./40-model-inventory-items-with-a-class/README.md) — class · encapsulation · validation
41. [Build a Shopping Cart with Product and Cart Classes](./41-build-a-shopping-cart-with-product-and-cart-classes/README.md) — class collaboration · Map · calculated total
42. [Record Bank Transactions with Encapsulation](./42-record-bank-transactions-with-encapsulation/README.md) — private fields · transaction log · defensive copies
43. [Create a Task Board with Focused Classes](./43-create-a-task-board-with-focused-classes/README.md) — domain model · status transitions · single responsibility
44. [Send Notifications Through Multiple Channels](./44-send-notifications-through-multiple-channels/README.md) — polymorphism · interface contract · adapter
45. [Apply the Strategy Pattern to Discounts](./45-apply-the-strategy-pattern-to-discounts/README.md) — strategy pattern · composition · interchangeable behavior
46. [Implement an Observer Pattern for App State](./46-implement-an-observer-pattern-for-app-state/README.md) — observer pattern · subscribe · state updates
47. [Validate Inputs with Defensive Programming](./47-validate-inputs-with-defensive-programming/README.md) — guard clauses · Number.isFinite · validation
48. [Write Small Unit Tests for a Class](./48-write-small-unit-tests-for-a-class/README.md) — unit testing · assertions · arrange act assert
49. [Refactor Procedural Code into Focused Classes](./49-refactor-procedural-code-into-focused-classes/README.md) — refactoring · single responsibility · cohesion
50. [Build a Mini Library Management System](./50-build-a-mini-library-management-system/README.md) — capstone · OOP design · collections · validation

**Total: 50 tasks — 19 Git/GitHub + 31 JavaScript/OOP.**
