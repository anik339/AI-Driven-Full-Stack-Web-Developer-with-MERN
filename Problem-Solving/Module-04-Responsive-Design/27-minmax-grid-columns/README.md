# Minmax Grid Columns

## Task
Prevent a grid column from becoming too narrow.

## Main concept
minmax() and min-content overflow

## Expected result
The filter sidebar gets a controlled width while results use the remaining space.

## Explanation
minmax(0, 1fr) lets the content column shrink below its intrinsic minimum when necessary.

## Try it yourself
Add a third summary column on wide screens.

## How to run
1. Open `index.html` with VS Code Live Server.
2. Resize the browser to mobile, tablet and desktop widths.
3. Read `style.css` from top to bottom.
4. Change one breakpoint or layout rule and test again.
5. Use browser DevTools responsive mode to inspect the layout.
