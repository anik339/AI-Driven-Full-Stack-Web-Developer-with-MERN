# Frontend Problem Solving - Day 02 (Problems 11-20)

**Learner:** Anik Chandra Dey | BSc in CSE, AIUB
**Scope:** Modules 1-5. This Day 02 pack uses **HTML + CSS only**, without JavaScript, React, Node, or a runtime CDN.

## How to use

1. Open your cloned Git repository in VS Code (`D:\AI-Driven-MERN-Git`).
2. Open `Problem-Solving/Frontend-HTML-CSS/Day-02/START_HERE.html` with Live Server, or open it in Chrome.
3. Open one numbered `index.html` in VS Code and read the short **English WHY comments** beside the key lines.
4. Complete the **Change yourself** task in that page, then test on phone size (375px) and desktop size (1280px).
5. Do not commit an unchanged example just to build a green activity graph. Save changes you understood and tested.

**Bangla shortcut:** Problem poro → Code bujho → Nijer moto change koro → Browser-e check koro → Github-e push koro.

## Day 02 problems

### 11. Responsive Image Gallery
- **Problem:** image sizing and CSS Grid.
- **File:** `11-responsive-image-gallery/index.html`
- **Change yourself:** Add a fifth image, then change aspect-ratio to 1 / 1.
- **Check:** All images stay proportional; layout wraps without clipping; meaningful alt on every img.

### 12. Position a Badge
- **Problem:** relative and absolute positioning.
- **File:** `12-position-and-badge/index.html`
- **Change yourself:** Put the badge at top-left, and add a third card.
- **Check:** Badge stays inside each card; no overlap with important text.

### 13. Sticky Reading Sidebar
- **Problem:** sticky positioning and anchors.
- **File:** `13-sticky-reading-sidebar/index.html`
- **Change yourself:** Add a Deployment section and matching sidebar link.
- **Check:** All links scroll to matching IDs; menu becomes sticky at 760px and wider.

### 14. Learning Timeline
- **Problem:** pseudo-elements and lists.
- **File:** `14-css-learning-timeline/index.html`
- **Change yourself:** Add a Git/GitHub learning milestone.
- **Check:** Visual marker appears and chronological order stays meaningful.

### 15. Focus and Validation States
- **Problem:** CSS states and HTML validation.
- **File:** `15-form-focus-states/index.html`
- **Change yourself:** Add a required message textarea; adjust border radius.
- **Check:** Labels and IDs match; blank required fields are blocked; Tab focus is visible.

### 16. Responsive Article Layout
- **Problem:** CSS Grid and semantic article/aside.
- **File:** `16-two-column-blog/index.html`
- **Change yourself:** Change the desktop column ratio; add a resource.
- **Check:** No horizontal overflow; sidebar stays beside article on wide screens and below on small.

### 17. Print-Friendly Invoice
- **Problem:** HTML tables and print CSS.
- **File:** `17-print-friendly-invoice/index.html`
- **Change yourself:** Change quantity 2 → 3 in the second line item, recalculate total.
- **Check:** Table amounts and total agree; print preview hides unrelated UI.

### 18. Reusable Theme Tokens
- **Problem:** CSS custom properties.
- **File:** `18-css-theme-tokens/index.html`
- **Change yourself:** Add a green custom-properties theme card.
- **Check:** Third card matches component spacing but uses its own colours.

### 19. Accessible Hover Motion
- **Problem:** transitions and reduced motion.
- **File:** `19-accessible-hover-motion/index.html`
- **Change yourself:** Reduce animation distance; confirm keyboard and reduced-motion behaviour.
- **Check:** Tab has visible outline and movement stops when reduced motion is requested.

### 20. Multi-Page Portfolio
- **Problem:** relative links and shared stylesheet.
- **File:** `20-multi-page-portfolio/index.html`
- **Change yourself:** Add a new skills section on Home and link to it from Projects.
- **Check:** All three page links work; stylesheet loads on all pages; no dead link.

## Quick rules

- The examples are **worked references**, not proof that the work was written independently. Review, modify, and test them before claiming them as your own solutions.
- Do not use JavaScript in this stage. Browser-native form validation and `<details>` work without custom scripts.
- Keep comments short and in English. Comments are for explaining why a rule is used, not for repeating obvious syntax.
- For form example 15: it does not send data to a database. This is intentional.
- For invoice example 17: values are static; recalculate the total manually.
- Problem 20 has three pages and one shared `style.css`. Start at its `index.html`.

## Git commands (PowerShell, from repo root)

```powershell
cd D:\AI-Driven-MERN-Git
git status
git add -- Problem-Solving/Frontend-HTML-CSS/Day-02
git diff --cached --check
git commit -m "Practise ten more frontend HTML CSS problems"
git push origin main
```

If a push is rejected, do not force push. Review `git status` and fetch/pull safely first.
