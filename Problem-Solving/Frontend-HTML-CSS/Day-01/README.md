# Problem Solving - Day 01 (HTML + CSS only)

**Learner:** Anik Chandra Dey | BSc in CSE, AIUB
**Goal:** Practise the frontend topics from Modules 1-5 before starting JavaScript.

## How to use

1. In VS Code, open your cloned repository (the folder that contains `.git`).
2. Open `Problem-Solving/Frontend-HTML-CSS/Day-01/START_HERE.html` with Live Server, or double-click the file.
3. Open each numbered folder and read `index.html`. Every example is complete and requires no JavaScript.
4. Before moving on, perform the **Change yourself** task and check the acceptance criteria.
5. Commit only what you understand and can explain. These worked solutions are learning references.

## Today: 10 tasks

### 01. Semantic Profile Card
- **Problem:** Create a student introduction card using meaningful HTML elements and a real link.
- **What to learn:** header, main, section, article and list clarify the page structure.
- **Change yourself:** Change the goal and add one skill you can explain.
- **File:** `01-semantic-profile/index.html`
- **Check:** A heading and introduction are visible; The GitHub link opens safely; All content is readable on a phone

### 02. Working Section Navigation
- **Problem:** Make navigation links move to the correct parts of a long page without JavaScript.
- **What to learn:** The href value must match the id of the destination section.
- **Change yourself:** Add a fourth section called Resources and link to it from the menu.
- **File:** `02-internal-navigation/index.html`
- **Check:** Each menu link reaches its section; IDs are unique; Keyboard navigation works

### 03. Accessible Student Form
- **Problem:** Create a form that checks empty required fields and invalid emails using built-in HTML validation.
- **What to learn:** Each label uses for=id; required, type and min/max provide browser validation.
- **Change yourself:** Add a required Course select with three options.
- **File:** `03-accessible-form/index.html`
- **Check:** Submitting blank fields shows browser validation; Invalid email is rejected; Every control has a label

### 04. Readable Class Timetable
- **Problem:** Display a weekly class schedule in an accessible table, including on narrow mobile screens.
- **What to learn:** A caption names the table, scope=col identifies headings and overflow-x prevents page overflow.
- **Change yourself:** Add Thursday and one new subject, then resize your browser.
- **File:** `04-class-timetable/index.html`
- **Check:** Table caption is present; All columns remain available on a narrow screen; Days are easy to scan

### 05. Fix a Card Width With Box Model
- **Problem:** Build a card that never overflows a small screen, even when padding and borders are added.
- **What to learn:** box-sizing:border-box and max-width keep the total width predictable.
- **Change yourself:** Increase padding from 24px to 36px; check the card still fits on a phone.
- **File:** `05-box-model/index.html`
- **Check:** No horizontal page scrollbar at 375px; Both cards fit the screen; Padding is visible inside borders

### 06. Responsive Flexbox Toolbar
- **Problem:** Place a site name and three navigation links in a toolbar without overlap on narrow screens.
- **What to learn:** display:flex creates a row, justify-content adds separation and flex-wrap prevents overflow.
- **Change yourself:** Add a fourth menu link and inspect the layout at 360px and 1024px.
- **File:** `06-flexbox-toolbar/index.html`
- **Check:** Desktop menu aligns in one row; Mobile menu wraps instead of clipping; Links remain keyboard accessible

### 07. Automatic CSS Grid Cards
- **Problem:** Show three service cards on wide screens and fewer columns when the screen becomes narrow.
- **What to learn:** Grid auto-fit and minmax select a safe number of columns without hard-coding a column count.
- **Change yourself:** Add a fourth card, then check mobile/tablet/desktop layouts.
- **File:** `07-grid-service-cards/index.html`
- **Check:** Cards never overlap; Cards are equal-width in the same grid row; Mobile uses one column

### 08. Mobile-First Hero Layout
- **Problem:** Make a hero section that stacks on a phone and becomes two columns on desktop without JavaScript.
- **What to learn:** Start with one column; a min-width media query adds a second column on larger screens.
- **Change yourself:** Change the breakpoint from 720px to 800px and compare the result.
- **File:** `08-mobile-first-hero/index.html`
- **Check:** Phone shows text above artwork; Wide screen shows two columns; Artwork scales without clipping

### 09. FAQ Without JavaScript
- **Problem:** Create a question-and-answer area that users can open and close with native HTML.
- **What to learn:** details and summary provide a browser-supported disclosure control.
- **Change yourself:** Add a fourth question explaining the difference between padding and margin.
- **File:** `09-no-js-faq/index.html`
- **Check:** Questions expand with mouse and keyboard; Answers are hidden when closed; No script element is needed

### 10. Mini Responsive Landing Page
- **Problem:** Combine semantic HTML, Flexbox and Grid in a small, realistic one-page project.
- **What to learn:** Header, hero, feature cards and footer form a complete static website.
- **Change yourself:** Change the brand name, edit a feature card and test at 375px and 1024px.
- **File:** `10-mini-landing-page/index.html`
- **Check:** Navigation links scroll to correct sections; Cards are one column on phones; No horizontal overflow appears

## Bangla memory shortcuts (Romanized)

- HTML: Requirement -> semantic tag -> correct label/link -> browser check.
- CSS: Select element -> set spacing/size -> check phone width -> refine.
- Flexbox: One direction -> justify -> align -> wrap.
- Grid: Rows/columns -> gap -> minmax -> responsive test.
- Responsive: Mobile first -> min-width breakpoint -> test three screen sizes.
- Form: label + id -> input type -> required -> validation. No backend is included.

## Suggested self-testing checklist

- [ ] Open all ten pages with no broken local links.
- [ ] Resize to 375px, 768px and 1200px. Look for horizontal overflow.
- [ ] Use Tab and Enter to test links, forms, and FAQ.
- [ ] Make one independent modification in every solution.
- [ ] Write a meaningful commit describing what you actually changed.

## Git: after you have practised

```powershell
cd D:\AI-Driven-MERN-Git
git status
git add -- Problem-Solving/Frontend-HTML-CSS/Day-01
git diff --cached --check
git diff --cached --stat
git commit -m "Practise ten HTML and CSS frontend problems"
git push origin main
```

**Reminder:** This is static frontend practice, not a full-stack application. Do not claim the ten reference solutions were independently developed unless you rebuild and understand them.
