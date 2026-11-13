# Responsive Sidebar

## Task
Move a sidebar below the main content on mobile.

## Main concept
responsive content/sidebar layout

## Expected result
The sidebar moves beneath the article on mobile and beside it on desktop.

## Explanation
Use minmax(0, 1fr) to allow the main grid column to shrink without overflowing.

## Try it yourself
Put the sidebar first in the HTML and use CSS grid areas to control visual order.

## How to run
1. Open `index.html` with VS Code Live Server.
2. Resize the browser to mobile, tablet and desktop widths.
3. Read `style.css` from top to bottom.
4. Change one breakpoint or layout rule and test again.
5. Use browser DevTools responsive mode to inspect the layout.
