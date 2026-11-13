# Prevent Horizontal Overflow

## Task
Find and prevent a child element from making the page wider than the viewport.

## Main concept
min-width: 0, max-width and overflow-wrap

## Expected result
The child stays inside the page without causing horizontal scrolling.

## Explanation
Grid and flex children can have intrinsic minimum sizes. min-width:0 and overflow-wrap can prevent accidental overflow.

## Try it yourself
Inspect the page in DevTools and find any element wider than the viewport.

## How to run
1. Open `index.html` with VS Code Live Server.
2. Resize the browser to mobile, tablet and desktop widths.
3. Read `style.css` from top to bottom.
4. Change one breakpoint or layout rule and test again.
5. Use browser DevTools responsive mode to inspect the layout.
