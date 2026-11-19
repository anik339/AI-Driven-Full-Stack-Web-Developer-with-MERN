# Project 03 — Northstar Admin Analytics Dashboard

A responsive **frontend-only** analytics dashboard made with HTML5, CSS3, and vanilla JavaScript.

## Important: No backend is used

This project does **not** use Node.js, Express, MongoDB, MySQL, PHP, APIs, or any server. All dashboard records and chart values are sample data stored in `js/app.js`.

## Features

- Responsive admin dashboard layout
- Working sidebar navigation for Overview, Analytics, Transactions, Customers, Products, and Settings
- Workspace switcher with create, rename, switch, and delete actions
- Profile editor, notifications panel, and help center modal
- Add/search/remove customers and add/search/edit/delete products
- Settings for profile, currency display preference, theme, notifications, and compact spacing
- Sidebar navigation and mobile navigation
- KPI cards: revenue, orders, customers, conversion rate
- Revenue line chart drawn with SVG and JavaScript
- Sales channel donut chart with CSS
- Period selector: last 7, 30, and 90 days
- Recent transactions table
- Search transactions by order ID or customer
- Filter transactions by payment status
- Table pagination
- Export visible filtered transactions to CSV
- Dark / light mode saved in localStorage
- Notification read/unread actions, help articles, and editable profile

## Folder structure

```text
03-admin-analytics-dashboard/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── app.js
└── assets/
    └── README.txt
```

## Run in VS Code

1. Extract the ZIP file.
2. Open the `03-admin-analytics-dashboard` folder in VS Code.
3. Open `index.html`.
4. Right-click and select **Open with Live Server**.
5. The dashboard opens in your browser.

No npm install, build command, or server setup is required. You can also open `index.html` directly in a browser.

## Where to edit the sample data

- KPI and chart values: `periodData` object in `js/app.js`
- Transaction rows: `transactions` array in `js/app.js`
- Layout and colors: `css/style.css`
- Page structure and labels: `index.html`

## Practice checklist

- [ ] Change the KPI values and confirm the cards update.
- [ ] Change the chart data for each period.
- [ ] Add a new transaction to the `transactions` array.
- [ ] Search for a customer name.
- [ ] Filter transactions by Paid, Pending, and Refunded.
- [ ] Test Previous / Next pagination.
- [ ] Export the filtered rows to CSV.
- [ ] Switch between light and dark mode.
- [ ] Test the mobile sidebar and responsive layout.
- [ ] Check the browser console for errors.

## Project limitations

- All information is fictional demo data.
- CSV export downloads data from the local JavaScript array only.
- The dashboard does not connect to a real store, payment service, or customer database.
- All page navigation and workspace controls run locally in the browser. The data is fictional and is not connected to a real store.
