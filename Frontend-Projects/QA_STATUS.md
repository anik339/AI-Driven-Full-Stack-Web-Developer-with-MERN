# QA Status — Static Checks

## Completed in this build

- Five project folders and their expected HTML/CSS/JS files are present.
- All five JavaScript files pass `node --check` syntax validation.
- Every local CSS and JavaScript reference found in the five HTML files resolves to an existing file.
- Project 01 profile image exists at `01-personal-portfolio/assets/images/anik-chandra-dey.jpg`.
- A root launch page links to all five project entry pages.
- Project and root README files describe frontend-only behavior and demo limitations.

## Not claimed as completed

A full interactive browser QA session was not completed in this build environment. Therefore this report does not claim that every button, modal, form, filter, or responsive breakpoint has been manually clicked and verified in a real browser. Please follow each project's README checklist and inspect DevTools Console before publishing.

## Known learning-project limitations

- No backend, authentication, remote database, API, or cross-device synchronization.
- E-commerce checkout is simulated; no payment is processed.
- Job applications remain local demo records; they are not submitted to employers.
- Workspace and settings data are stored in browser localStorage.
- Some product images are remote Unsplash resources and need an internet connection.
