# Project 09 — Recipe Finder

## What you will build
Search for meals through TheMealDB API and inspect ingredients and cooking instructions.

## Features
- Search meals by name
- Render recipe cards from API data
- Open a native dialog with ingredients and instructions
- Handle empty search results and API errors

## JavaScript concepts practiced
fetch(), async/await, encodeURIComponent(), array mapping, for loops, template property access, HTML dialog element, DOM updates.

## Run in VS Code
1. Open this project folder in VS Code.
2. Install the **Live Server** extension if you do not already have it.
3. Right-click `index.html` and choose **Open with Live Server**.
4. Keep `index.html`, `styles.css`, and `script.js` in the same folder.

**Internet connection required.** Uses TheMealDB's public test endpoint (`https://www.themealdb.com/api/json/v1/1/`). The API is external and may change its availability or response.

## Important files
- `index.html` — page structure and accessible controls.
- `styles.css` — responsive layout and visual design.
- `script.js` — application logic. Read the comments from top to bottom.

## Practice after it works
1. Add a filter for cuisine area.
1. Add a random recipe button.
1. Add a favourites list using localStorage.

## Learning note
First run the project, then read one function at a time. Change a small part, refresh the browser, and observe the result. Do not only copy the code.
