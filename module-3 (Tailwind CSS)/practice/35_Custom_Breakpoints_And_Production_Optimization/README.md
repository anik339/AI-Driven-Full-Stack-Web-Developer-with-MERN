# 35. Custom Breakpoints and Production Optimization — Tailwind CSS v4

## Topics
- Theme tokens using `@theme` for colors, fonts and breakpoints.
- A custom `3xl:` breakpoint.
- Custom utilities using `@utility`.
- Reusable component classes using `@layer components` and `@apply`.
- Source scanning, unused utility elimination and minified production output.

## Run
From `module-3 (Tailwind CSS)/practice`, run `npm install` once and `npm run build:all`. Then open this lab's `index.html` with Live Server.

## Production command
`npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --minify`

Tailwind v4 scans source files automatically by default. Your separate `Resources` folder uses Tailwind v3.4.19 and its `content` array in `tailwind.config.js`; do not copy v3 configuration syntax into this v4 lab.
