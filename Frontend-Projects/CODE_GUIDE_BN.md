# Code Guide — কোন ফাইলে কী আছে

প্রতিটি project একই basic structure অনুসরণ করে:

```text
project-folder/
├── index.html       # Page structure and content
├── README.md        # Features, run steps, limitations
├── css/
│   └── style.css    # Colors, layout, responsive design
├── js/
│   └── app.js       # Interactions and application logic
└── assets/          # Images and other static resources
```

## Project-wise guide

### 01 — Personal Portfolio
- `index.html`: hero, about, skills, projects, learning journey, contact sections।
- `css/style.css`: design tokens, navigation, cards, sections, responsive breakpoints।
- `js/script.js`: mobile navigation, theme switch, active section, contact validation/mailto।
- `assets/images/anik-chandra-dey.jpg`: তোমার দেওয়া profile photo।

### 02 — E-commerce Storefront
- `js/app.js`-এর `products` array-তে demo product add/edit করো।
- Cart/wishlist/theme state `localStorage`-এ save হয়।
- Search, category filter, sort, quick view, cart drawer, quantity এবং demo checkout logic একই JS file-এ আছে।

### 03 — Admin Dashboard
- `js/app.js`-এ sample transactions, customers, products ও chart data আছে।
- Sidebar navigation দিয়ে Overview, Analytics, Transactions, Customers, Products ও Settings দেখা যায়।
- Workspace manager, profile, notification, settings এবং CSV export browser-এর local data ব্যবহার করে।

### 04 — Taskflow Kanban
- `js/app.js`-এ task/project/workspace state, CRUD, drag-and-drop, filters এবং alternate views আছে।
- Workspace/project/task/profile/settings পরিবর্তন এই browser-এর localStorage-এ save হয়।
- Touch device-এ drag-and-drop সীমিত হতে পারে; task edit-এর status dropdown ব্যবহার করা যায়।

### 05 — Job & Internship Portal
- `js/app.js`-এর `seedJobs` array-তে sample listings আছে।
- Search, filter, sort, pagination, save job, job details ও demo application logic আছে।
- Employer workspace থেকে local demo job post করা যায়। Profile/settings/notifications-ও local।

## Comment convention

Code-এ section comments রাখা হয়েছে যাতে data, state, rendering, event handling, settings এবং responsive styling আলাদা করে বোঝা যায়। নতুন feature যোগ করার সময় একই pattern-এ ছোট, নির্দিষ্ট comment দেবে; প্রতিটি obvious line-এ অপ্রয়োজনীয় comment লিখবে না।
