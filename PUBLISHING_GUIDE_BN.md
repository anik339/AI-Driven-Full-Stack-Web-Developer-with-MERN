# GitHub Pages Publishing Guide (বাংলা)

এই Repository-র Root Homepage এবং `Frontend-Projects`-এর পাঁচটি project live preview হিসেবে প্রকাশ করতে GitHub Pages চালু করতে হবে।

## 1. GitHub Pages চালু করো

1. GitHub-এ এই repository খোলো: https://github.com/anik339/AI-Driven-Full-Stack-Web-Developer-with-MERN
2. **Settings** ট্যাবে যাও।
3. বাম পাশের **Pages** নির্বাচন করো।
4. **Build and deployment** অংশে:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
5. **Save** চাপো।
6. Actions ট্যাবে গিয়ে Pages deployment workflow সফল হওয়া পর্যন্ত অপেক্ষা করো।

## 2. Root Homepage

Deployment সম্পন্ন হলে Root Homepage:

https://anik339.github.io/AI-Driven-Full-Stack-Web-Developer-with-MERN/

## 3. পাঁচটি Frontend Project-এর Live Demo

- Personal Portfolio: https://anik339.github.io/AI-Driven-Full-Stack-Web-Developer-with-MERN/Frontend-Projects/01-personal-portfolio/
- NOVA E-commerce: https://anik339.github.io/AI-Driven-Full-Stack-Web-Developer-with-MERN/Frontend-Projects/02-ecommerce-storefront/
- Admin Analytics Dashboard: https://anik339.github.io/AI-Driven-Full-Stack-Web-Developer-with-MERN/Frontend-Projects/03-admin-analytics-dashboard/
- Project Management Kanban: https://anik339.github.io/AI-Driven-Full-Stack-Web-Developer-with-MERN/Frontend-Projects/04-project-management-kanban/
- Job & Internship Portal: https://anik339.github.io/AI-Driven-Full-Stack-Web-Developer-with-MERN/Frontend-Projects/05-job-internship-portal/

## 4. যদি 404 দেখায়

- Settings → Pages-এ branch `main` এবং folder `/(root)` আছে কি না দেখো।
- Actions ট্যাবে সর্বশেষ Pages deployment **Success** হয়েছে কি না দেখো।
- Deployment শেষ হওয়ার পর কয়েক মিনিট অপেক্ষা করে Refresh করো।
- প্রতিটি project folder-এ `index.html` আছে; তাই project folder-এর URL-এ trailing slash রাখো।

## 5. গুরুত্বপূর্ণ সীমাবদ্ধতা

- GitHub Pages static hosting; HTML, CSS এবং browser-side JavaScript চলবে।
- Backend, database, authentication server, real checkout বা payment processing এখানে স্বয়ংক্রিয়ভাবে চালু হবে না।
- Project 02-এর checkout এবং Project 05-এর application flow demo-only।
- `javascript-task-manager` আলাদা repository: https://github.com/anik339/javascript-task-manager
