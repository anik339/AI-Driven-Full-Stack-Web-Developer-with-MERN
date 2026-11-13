# Module 3 Tailwind Practice Labs

There are 33 separate practice folders. Each folder contains an HTML page, a Tailwind input CSS file, and a prebuilt output CSS file.

## Preview without a terminal
1. Open the repository in VS Code.
2. Open `index.html` in this folder.
3. Choose a practice topic and open its page with Live Server.

The compiled output CSS is included, so the page can be previewed without installing packages.

## Rebuild all practice CSS
This folder uses Tailwind CSS v4 and the official CLI package.

```powershell
npm install
npm run build:all
```

The build script finds each practice folder's source CSS and rebuilds the matching output CSS file.

## Important
- Do not edit the generated `*-output.css` or `output.css` files directly.
- Edit the source CSS file in the same folder, then rebuild.
- Tailwind CDN examples in `Problem-Solving/Module-03-Tailwind-CSS/` are for learning only. Use a local build for production work.
