# Problem 19: Run Asynchronous Tasks Sequentially

## Task
Run two delayed tasks one after another and measure the total time.

## Main concept
await, sequential execution

## Expected output
Task A completes before Task B; total time is about 0.7 seconds.

## Explanation
Each await waits for one task before starting the next. Use this when the second task depends on the first.

## Practice challenge
Run three tasks sequentially and compare total duration.

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


