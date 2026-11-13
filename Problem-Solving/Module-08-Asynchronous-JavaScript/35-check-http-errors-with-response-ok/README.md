# Problem 35: Check HTTP Errors with response.ok

## Task
Request an unknown demo resource and inspect the HTTP response.

## Main concept
response.ok, response.status, error handling

## Expected output
The response may be HTTP 200 with an empty object for this demo API ID; otherwise a handled error is displayed.

## Explanation
fetch does not reject automatically for HTTP 404 or 500. Always check response.ok before trusting the body.

## Practice challenge
Request an invalid endpoint and show a custom not-found message.

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


