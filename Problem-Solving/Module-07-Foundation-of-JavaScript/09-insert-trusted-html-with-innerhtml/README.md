# Problem 09: Insert Trusted HTML with innerHTML

## Task
Insert a fixed HTML snippet and inspect the created element.

## Main concept
innerHTML, HTML parsing, XSS safety

## Expected output
A bold Important label and a span appear.

## Explanation
innerHTML parses markup. For ordinary text, use textContent. Untrusted HTML can create cross-site scripting vulnerabilities.

## Practice challenge
Build a small card with a heading and paragraph using fixed HTML.

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


