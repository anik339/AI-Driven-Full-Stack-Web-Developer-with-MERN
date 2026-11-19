# Repository Link & Frontend Demo QA Report

## Completed in this update

- Added a dedicated `index.html` landing page for each of the eight Problem-Solving modules.
- Each module landing page lists all 50 tasks, includes a task search field, and links to the exercise/sample and task guide.
- Updated `Problem-Solving/index.html` so all eight module cards open the correct module landing page.
- Removed the redundant Module 07 and Module 08 cards that previously pointed to missing module index pages.
- Added a return link from the Problem-Solving hub and module pages to the main repository homepage.
- Added five frontend project cards to the main homepage with Live Demo and Source Code links.
- Added the separate JavaScript Task Manager repository link to the homepage.
- Added a Bengali GitHub Pages setup guide.
- Restored the missing shared `lesson-styles.css` and `lesson-helpers.js` assets referenced by five Module 08 supplementary lessons.

## Checks performed

| Check | Result |
|---|---|
| Problem-Solving HTML files checked | 413 |
| Broken local links in Problem-Solving | 0 |
| Main homepage broken local links | 0 |
| Local links/assets in five frontend projects | 0 broken |
| Problem-Solving module landing pages | 8 created |
| Tasks listed per module | 50 each |
| Total practice tasks listed | 400 |

## Important deployment note

The five Live Demo links use this repository's GitHub Pages address. Their actual public availability has not been confirmed from this ZIP review. Enable GitHub Pages using **Settings → Pages → Deploy from a branch → `main` → `/(root)`**, then wait for the Pages deployment to succeed. See `PUBLISHING_GUIDE_BN.md`.

## Remaining unrelated asset references found outside the requested areas

A whole-repository HTML scan still finds two missing generated CSS files referenced by these Module 03 supplementary pages:

- `module-3 (Tailwind CSS)/practice/34_Advanced_Utility_Values_And_States/src/output.css`
- `module-3 (Tailwind CSS)/practice/35_Custom_Breakpoints_And_Production_Optimization/src/output.css`

These are Tailwind build outputs, not Problem-Solving navigation links. They were not replaced with guessed CSS. Generate them using the Tailwind build workflow documented in the Module 03 materials before relying on those two supplementary pages.

## Scope and limitations

This update does not change course lesson content or claim that the frontend demos use a backend. The five frontend projects remain browser-side demonstrations. The JavaScript Task Manager remains a separate GitHub repository.
