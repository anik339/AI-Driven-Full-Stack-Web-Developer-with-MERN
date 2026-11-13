# Problem 48: Understand the Event Loop and Microtasks

## Task
Predict the order of synchronous code, Promise callbacks and timer callbacks.

## Main concept
call stack, event loop, microtask, task queue

## Expected output
Expected order: synchronous start, synchronous end, Promise microtask, queueMicrotask, setTimeout.

## Explanation
Synchronous work runs first, then microtasks, then timer tasks. Browser scheduling includes additional task-source details.

## Practice challenge
Add another Promise.then() and predict where its message appears.

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


