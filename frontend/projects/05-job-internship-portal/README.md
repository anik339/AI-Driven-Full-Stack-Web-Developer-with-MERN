# Project 05 — Launchpad Job & Internship Portal

A responsive frontend-only job and internship discovery portal built with HTML5, CSS3, and vanilla JavaScript.

## Working features
- Search by job title, company, category, and skills
- Filter by location, job type, category, work arrangement, and experience
- Sort listings and paginate results
- Open job details and save/unsave opportunities
- Saved jobs persist in localStorage
- Demo application form validates details and saves a local application history entry
- Employer workspace can create and delete demo job listings; new listings appear in the job board
- Profile editor and settings for theme, salary visibility, and notification preference
- Notifications can be marked read or all read
- Responsive mobile navigation and dark/light theme

## Folder structure
```text
05-job-internship-portal/
├── index.html
├── README.md
├── css/style.css
├── js/app.js
└── assets/
```

## Run
Open `index.html` with VS Code Live Server. No npm install, API, backend, or database is required.

## Important limitations
- All job listings are sample content. Employer-created listings are stored only in the current browser.
- Applications are stored locally as demo history; they are not sent to employers.
- The resume file picker only reads the file name for the demo history. The file is not uploaded.
- This project does not provide real employer accounts, authentication, or cross-device sync.
