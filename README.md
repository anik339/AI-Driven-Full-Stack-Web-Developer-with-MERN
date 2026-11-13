# AI-Driven Full-Stack Web Developer with MERN

**Owner:** Anik Chandra Dey  
**Learning target:** Junior Full-Stack Web Developer (MERN)  
**Repository stage:** HTML, CSS, Tailwind CSS, responsive design, Git/GitHub workflow, AI-assisted development and JavaScript foundations.

This repository is a structured learning record. It brings together the eight available learning modules, commented lesson examples, assignments, project work, a learning tracker and 400 topic-wise practice problems. A file being present means it is available to study; it does not automatically mean the work has been completed or mastered.

## Start here

1. Open [`index.html`](./index.html) in VS Code with Live Server for the repository home page.
2. Open the [Ostad Learning Tracker](./Ostad_Learning_Tracker/index.html) to review the module map and mark your own study progress.
3. Open the [Problem-Solving Hub](./Problem-Solving/index.html) for 400 topic-wise exercises.
4. Browse the [Assignments](./Assignment/index.html) and each module's project hub.

## Learning modules

| Module | Focus | Included material |
|---|---|---|
| 01 | [HTML5 Fundamentals](./module-1%20%28HTML%29/index.html) | Semantic HTML, forms, tables, images, media and accessibility practice |
| 02 | [CSS3 Fundamentals](./module-2%20%28CSS%29/index.html) | Selectors, cascade, box model, typography, Flexbox, Grid and responsive CSS |
| 03 | [Tailwind CSS](./module-3%20%28Tailwind%20CSS%29/index.html) | Utility-first styling, responsive variants, components, labs and projects |
| 04 | [Responsive Design, AI Tools and GitHub](./module-4%20%28Responsive%20Web%20Design,%20AI%20Tools%20and%20GitHub%20Collaboration%29/index.html) | Mobile-first design, accessibility, responsive QA, Git workflow and collaboration |
| 05 | [Claude Code Setup and AI Workflow](./module-5%20%28Claude%20Code%20Setup%29/index.html) | Setup, permissions, project instructions, prompting and code review |
| 06 | [JavaScript Fundamentals](./module-6%28foundation%20of%20java%20script%29/index.html) | 28 lesson topics and 10 runnable browser projects |
| 07 | [JavaScript DOM and Events](./module-7%28foundation%20of%20java%20script%20important%20part%29/index.html) | 11 lesson topics and 5 DOM/event projects |
| 08 | [Advanced and Asynchronous JavaScript](./module-8%28asynchronous%20javascript%29/index.html) | 19 lesson topics and 5 projects covering scope, closures, Promises, Fetch and the event loop |

**JavaScript practice across Modules 06–08:** 58 lesson topics and 20 project examples. API-based projects need an internet connection; the ES modules lesson must run through Live Server.

## Topic-wise problem solving

[`Problem-Solving/`](./Problem-Solving/index.html) contains **400 exercises**, with exactly 50 problem folders in each module set.

| Problem set | Topic | Problems |
|---|---|---:|
| Module 01 | HTML | 50 |
| Module 02 | CSS | 50 |
| Module 03 | Tailwind CSS | 50 |
| Module 04 | Responsive design and GitHub workflow | 50 |
| Module 05 | Claude Code and AI workflow | 50 |
| Module 06 | JavaScript fundamentals | 50 |
| Module 07 | DOM and browser events | 50 |
| Module 08 | Advanced and asynchronous JavaScript | 50 |
| **Total** | | **400** |

Each problem folder includes a `README.md`. Modules 01–04 and 06–08 mainly use runnable examples; Module 05 uses guided workflow tasks, prompts, checklists and sample project files where provided. Read the instructions first, inspect or run the example, modify the code where applicable and explain the result in your own words.

## JavaScript project hubs

- [Module 06 — 10 JavaScript fundamentals projects](./module-6%28foundation%20of%20java%20script%29/Projects/index.html)
- [Module 07 — 5 DOM and Events projects](./module-7%28foundation%20of%20java%20script%20important%20part%29/02-Projects/index.html)
- [Module 08 — 5 Advanced and Async JavaScript projects](./module-8%28asynchronous%20javascript%29/02-Projects/index.html)

Projects are learning examples. Test their behavior, understand the code and customize them before presenting them as portfolio work. Public API demos can be affected by network availability and service rate limits.

## Run the repository in VS Code

### Static HTML, CSS and JavaScript

1. Extract the repository ZIP.
2. Open the `AI-Driven-Full-Stack-Web-Developer-with-MERN` folder in VS Code.
3. Install the **Live Server** extension if needed.
4. Open the required module, project or problem folder and right-click its `index.html`.
5. Select **Open with Live Server**.
6. Open browser DevTools → Console to inspect logs and errors.

### JavaScript ES modules and Fetch examples

Use Live Server rather than opening the file through `file://`. Fetch/API examples require an internet connection. Public demo APIs may be temporarily unavailable; check the browser Console and Network tabs.

### Tailwind build projects

Some Tailwind projects include a local build workflow. Open the relevant project folder and follow its `README.md` or `package.json` scripts. For example:

```powershell
cd "module-3 (Tailwind CSS)\practice"
npm install
npm run build:all
```

Use the project-specific instructions before running commands; not every lesson requires npm.

## Learning Tracker

The [Ostad Learning Tracker](./Ostad_Learning_Tracker/index.html) includes the eight-module map, practice links, skills and assignment references. Its study checkboxes save to the current browser's `localStorage`; they do not sync to GitHub or another device. Mark a module as studied only after you have worked through it.

## Code quality and learning approach

The examples are organised to support beginner-friendly reading:

- Clear folder and file names.
- Small lessons that focus on one concept at a time.
- Comments explaining important lines and decisions.
- Separate HTML, CSS and JavaScript files where useful.
- Semantic markup, responsive layouts and accessible form labels.
- JavaScript examples using readable names, functions, arrays, objects and event handlers.
- Basic validation, error handling and browser debugging.

Use the comments as a guide, not as a substitute for understanding. Change the examples and explain what each important line does.

## What is not covered yet

These eight modules build frontend and JavaScript foundations. They do **not** mean that the complete MERN stack has been completed. The next learning stages are:

1. **React:** components, props, state, hooks, routing, forms and API integration.
2. **Node.js:** runtime, modules, npm, environment variables and asynchronous code.
3. **Express.js:** REST APIs, middleware, validation and error handling.
4. **MongoDB:** documents, collections, CRUD, indexes and data modelling.
5. **Authentication and security:** password hashing, sessions/JWT, authorization, CORS and input validation.
6. **Testing and deployment:** unit/integration tests, environment configuration and deployment.
7. **Portfolio capstones:** build and deploy full-stack applications with frontend, backend, database and documented setup.

## GitHub workflow

Follow [`GITHUB_PUSH_GUIDE_BN.md`](./GITHUB_PUSH_GUIDE_BN.md) for the Bengali push checklist. Keep your existing `.git` folder when replacing files in an already connected local repository.

```powershell
git status
git diff --check
git add .
git diff --cached --check
git commit -m "Complete eight learning modules and add 400 practice problems"
git push origin main
```

If your active branch is `master`, push to `master` instead. Check `git branch --show-current` before pushing.

---

**Learning workflow:** Understand → Practise → Build → Test → Review → Commit → Improve.
