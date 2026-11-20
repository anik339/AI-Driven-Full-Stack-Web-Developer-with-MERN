# Project — TaskFlow Dashboard

A responsive task management dashboard built with semantic HTML, modern CSS, and modular vanilla JavaScript.

## Features
- Create, edit, complete, and delete tasks.
- Search title, description, and category.
- Filter all, active, and completed tasks.
- Sort by due date, newest, or priority.
- Set priority, category, description, and due date.
- Summary cards for total, active, completed, and overdue tasks.
- Persistent tasks and theme preference using localStorage.
- Export task data as a JSON backup.
- Responsive desktop, tablet, and mobile layout.
- Accessible labels, keyboard-friendly controls, focus styles, and live status feedback.
- Safe rendering of user-provided content using `textContent`.

## Run locally
1. Open the `module-9` folder in VS Code.
2. Right-click `project/index.html`.
3. Select **Open with Live Server**.
4. Use the app in your browser.

No npm packages, build tools, API keys, or database setup are required.

## Architecture
- `js/app.js` — app entry point and event wiring.
- `js/dom.js` — DOM references and rendering.
- `js/task-service.js` — task operations, filtering, and sorting.
- `js/storage.js` — guarded local-storage access.
- `js/validation.js` — input validation.
- `js/dates.js` — date formatting and overdue calculations.
- `js/constants.js` — shared values.
- `js/ids.js` — task ID generation.

## Scope
This is a frontend portfolio project. Data stays in the current browser and is not synced to a server. A production multi-user service would need backend persistence, authentication, authorization, automated tests, monitoring, and a security review. Do not store sensitive information in localStorage.
