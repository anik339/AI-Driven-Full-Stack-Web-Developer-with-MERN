# Project 07 — GitHub Profile Finder

## What you will build
Search public GitHub profiles and show basic profile details plus recently updated repositories.

## Features
- Search by GitHub username
- Show avatar, bio, location, followers, and public repository count
- Show up to five recently updated public repositories
- Handle missing users, network errors, and API rate limits

## JavaScript concepts practiced
fetch(), async/await, Promise.all(), encodeURIComponent(), HTTP status handling, DOM creation, error handling.

## Run in VS Code
1. Open this project folder in VS Code.
2. Install the **Live Server** extension if you do not already have it.
3. Right-click `index.html` and choose **Open with Live Server**.
4. Keep `index.html`, `styles.css`, and `script.js` in the same folder.

**Internet connection required.** Uses the public GitHub API without an API key. GitHub applies unauthenticated rate limits, so wait before retrying if the limit is reached.

## Important files
- `index.html` — page structure and accessible controls.
- `styles.css` — responsive layout and visual design.
- `script.js` — application logic. Read the comments from top to bottom.

## Practice after it works
1. Add a repository search box.
1. Show repository topics and last updated date.
1. Add pagination for repositories.

## Learning note
First run the project, then read one function at a time. Change a small part, refresh the browser, and observe the result. Do not only copy the code.
