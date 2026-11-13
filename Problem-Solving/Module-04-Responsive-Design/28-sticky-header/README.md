# Sticky Header

## Task
Keep a header visible while scrolling without covering content.

## Main concept
position: sticky, top and z-index

## Expected result
The header stays near the top while scrolling.

## Explanation
Sticky positioning requires a scroll context and a top offset. Check parent overflow rules if it does not stick.

## Try it yourself
Add scroll-margin-top to the target sections.

## How to run
1. Open `index.html` with VS Code Live Server.
2. Resize the browser to mobile, tablet and desktop widths.
3. Read `style.css` from top to bottom.
4. Change one breakpoint or layout rule and test again.
5. Use browser DevTools responsive mode to inspect the layout.
