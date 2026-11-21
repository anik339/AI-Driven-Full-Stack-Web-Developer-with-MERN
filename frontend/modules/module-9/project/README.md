# Project — CodeTrack Developer Project Board

CodeTrack is a responsive project and task manager built to practise JavaScript object-oriented programming and a professional Git/GitHub workflow.

## Features
- Create multiple project boards.
- Add, edit, delete, and advance task status.
- Search task titles and descriptions.
- Filter by status and priority.
- Sort by newest, due date, priority, or title.
- Summary counts for total, To do, In progress, and Completed.
- Overdue task indicators.
- Persistent browser storage with a guarded fallback.
- JSON backup export and validated import.
- Light/dark theme preference.
- Responsive layout, semantic labels, keyboard focus styles, and live status feedback.
- Safe rendering of user-provided text with `textContent`.

## Run locally
1. Open the repository in VS Code.
2. Open `frontend/modules/module-9/project/index.html` with Live Server.
3. Create a project and add a few tasks.
4. Test editing, status changes, search, filters, sorting, theme, export, and import.

The project uses native JavaScript ES modules. Run it through Live Server or another local HTTP server; do not open it directly with a `file://` URL.

## OOP architecture
- `js/models/task.js` — `Task` class with private fields, validation, getters/setters, and serialization.
- `js/models/project.js` — `Project` class that owns tasks and calculates project summaries.
- `js/services/storage-repository.js` — persistence boundary for browser storage.
- `js/services/project-service.js` — application rules and project/task operations.
- `js/app.js` — `AppController`, DOM rendering, event handling, and browser interactions.
- `js/constants.js` and `js/ids.js` — shared values and ID generation.

## OOP concepts demonstrated
Encapsulation, classes, constructors, composition, single-responsibility separation, object collaboration, validation, and controlled state changes.

## Data and privacy
This is a local learning project. Data stays in the current browser and is not synchronized to a server. It does not provide accounts, authentication, authorization, cloud backup, or multi-user collaboration. Do not store passwords, payment information, or confidential data.

## Testing
- Use `TESTING_CHECKLIST.md` to verify the browser interface.
- If Node.js is installed, run `npm test` from this project folder for the built-in model/service tests.
- Run `npm run check` to syntax-check the application entry point.
- No third-party npm dependencies are required.
