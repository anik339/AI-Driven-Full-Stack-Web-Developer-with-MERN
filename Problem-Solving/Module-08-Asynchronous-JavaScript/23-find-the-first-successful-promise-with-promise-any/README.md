# Problem 23: Find the First Successful Promise with Promise.any()

## Task
Return the first fulfilled Promise even if another rejects first.

## Main concept
Promise.any(), AggregateError

## Expected output
Server B succeeded.

## Explanation
Promise.any() ignores rejections until a Promise fulfils. If all reject, it throws an AggregateError.

## Practice challenge
Make every task fail and handle the AggregateError.

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


