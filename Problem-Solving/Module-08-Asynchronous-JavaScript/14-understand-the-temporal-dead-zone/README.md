# Problem 14: Understand the Temporal Dead Zone

## Task
Catch the error caused by reading let before initialization.

## Main concept
let, const, Temporal Dead Zone, ReferenceError

## Expected output
A ReferenceError is caught, then the initialized value is displayed.

## Explanation
let and const are hoisted but remain uninitialized in the Temporal Dead Zone until their declaration is evaluated.

## Practice challenge
Explain why reading a const variable before its declaration causes an error.

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


