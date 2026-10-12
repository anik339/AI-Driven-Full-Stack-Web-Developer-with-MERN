# Module 4: Responsive Agency Landing Page ✅

**Class:** Convert Figma Layer to Tailwind CSS with Responsive Design  
**Folder:** `module-4-responsive-agency-landing-page`  
**Project:** Dream Agency (Figma-inspired front-end landing page)  
**Tools:** HTML5, Tailwind CSS v3, vanilla JavaScript, VS Code + Live Server  
**Status:** Front-end implementation complete; contact form is intentionally a demo.

> **Design note:** The uploaded `Agency Landing Page Ostad.fig` includes multiple desktop artboards. This project recreates the **Dream Agency** artboard as a responsive educational implementation. It is not an automatic, pixel-perfect export of every Figma screen. The images used here come from the provided Figma file.

## 🚀 How to run with VS Code Live Server (NO TERMINAL REQUIRED)

1. Download and **extract the ZIP folder**; don't open `index.html` while it is still inside the ZIP.
2. Open VS Code, choose **File → Open Folder**, and select `module-4-responsive-agency-landing-page`.
3. If needed, install the **Live Server** extension by Ritwick Dey.
4. Open **`index.html` in the project ROOT** (not the file in `src`, since there is none).
5. Right-click `index.html` and select **Open with Live Server**, or select **Go Live** in the lower-right corner.
6. The browser should open at an address like `http://127.0.0.1:5500/index.html`.

**Important:** `dist/output.css` is already built and included in the ZIP. The page will have its Tailwind styling even if you have not used a terminal.

### If the browser shows an unstyled page

- Check that the ZIP was **extracted** and that `dist/output.css` exists.
- Confirm `index.html` contains `<link rel="stylesheet" href="./dist/output.css">`.
- Start Live Server from the **project root**, not from a single downloaded file.
- Refresh using `Ctrl + Shift + R` to clear cached styling.

## 🖥️ How to edit Tailwind CSS (TERMINAL NEEDED FOR REBUILDING)

In VS Code: **Terminal → New Terminal**, while the terminal is in this folder:

```bash
npm install
npm run dev
```

Keep the watch terminal open while editing `index.html` or `src/input.css`. Tailwind v3 scans `index.html` and `src/*.js` for class names and automatically rebuilds `dist/output.css`.

For a final/minified CSS build:

```bash
npm run build
```

If `npm` is not recognized, install Node.js LTS first. The uploaded files specify Tailwind CSS `^3.4.19`; this project keeps that dependency.

## 📁 File structure

```text
module-4-responsive-agency-landing-page/
├── index.html                  # Start here with Live Server (contains section comments)
├── src/
│   ├── input.css               # Tailwind directives + reusable components
│   └── main.js                 # Mobile menu, portfolio dialog, form validation
├── dist/
│   └── output.css              # PREBUILT: preview works without npm
├── assets/
│   └── images/                 # 6 optimized photos/screenshots from the .fig file
├── design/
│   ├── figma-artboards-preview.png
│   └── README.md               # Explanation of original Figma file
├── package.json                # npm run dev / npm run build
├── package-lock.json
├── tailwind.config.js          # Tailwind v3 config, scans root index.html
├── .gitignore                  # excludes node_modules and secrets
└── README.md
```

## ✅ Features implemented

- Responsive desktop/tablet/mobile layouts with Tailwind breakpoints
- Hero, Services, About, Recent Work, Testimonials, Contact and Footer
- Responsive navigation toggle with Escape handling and accessible ARIA labels
- Three working portfolio preview buttons (native `<dialog>`)
- Client-side contact email validation **without fake email submission**
- Smooth in-page navigation and dynamic copyright year
- Figma-supplied images, optimized for loading
- Section-by-section explanatory comments inside HTML, CSS and JavaScript
- Keyboard focus styles and reduced-motion support

## ⚠️ Educational limitations

- The contact form is a **demo**, no email is sent. Add your own backend or form provider when building a real product.
- Portfolio previews are from the original Figma design and are not claims that you built those three external projects.
- Testimonials are explicitly labeled samples rather than real endorsements.
- Google Fonts are optional: system fonts are used if there is no internet.
- The original 50 MB `.fig` file is NOT duplicated inside the ZIP; add your own copy under `design/` if needed.

## ✅ GitHub completion note

Use this in the repository's root README after you have tried Live Server:

```md
### Module 4: Figma to Responsive Tailwind CSS Landing Page ✅
- **Project:** Dream Agency Landing Page
- **Skills:** HTML5, Tailwind CSS v3, Responsive Design, Basic JavaScript
- **Sections:** Hero, Services, About, Recent Work, Testimonials, Contact
- **Preview:** Open `index.html` with VS Code Live Server
- **Status:** Front-end Completed
```

Suggested Git commit command, from the repository root:

```bash
git add .
git commit -m "Complete Module 4: Figma to responsive Tailwind CSS agency landing page"
git push
```

---

Built as an educational conversion of the uploaded Figma artboard. Keep practicing responsive layouts, Git commits, clean code and accessibility!
