# Problem 20: Run Tasks Together with Promise.all()

## Task
Start independent Promises together and wait for every result.

## Main concept
Promise.all(), concurrency

## Expected output
All three results appear in about 0.6 seconds, not 1.4 seconds.

## Explanation
Promise.all() waits for all fulfilled results. If one rejects, the combined Promise rejects.

## Practice challenge
Use Promise.all() to load a profile and posts together.

## How to run
1. Open this problem folder in VS Code.
2. Start `index.html` with the **Live Server** extension.
3. Click **Run Solution** in the browser.
4. Open `script.js` in VS Code and read the comments.
5. Try the challenge without copying the solution.

## Files
- `index.html` — lesson, output and code viewer.
- `styles.css` — page styling.
- `script.js` — complete JavaScript solution with comments.
- Supporting files: None


