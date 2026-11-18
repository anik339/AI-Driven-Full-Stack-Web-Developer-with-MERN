/*
 * NORTHSTAR ADMIN DASHBOARD — learning edition
 * ------------------------------------------------------------
 * This is a frontend-only project. Sample records live in arrays
 * and user changes are saved to this browser with localStorage.
 * There is no API, authentication server, or real store data.
 */

// 1. Sample data used to populate the dashboard and its management pages.
const transactions = [
  { id: "#NS-1048", name: "Maya Rahman", initials: "MR", date: "18 Nov 2026", amount: 4250, status: "Paid" },
  { id: "#NS-1047", name: "Arif Hossain", initials: "AH", date: "18 Nov 2026", amount: 2890, status: "Pending" },
  { id: "#NS-1046", name: "Nadia Islam", initials: "NI", date: "17 Nov 2026", amount: 1750, status: "Paid" },
  { id: "#NS-1045", name: "Rafi Ahmed", initials: "RA", date: "17 Nov 2026", amount: 3490, status: "Refunded" },
  { id: "#NS-1044", name: "Tania Sultana", initials: "TS", date: "16 Nov 2026", amount: 1950, status: "Paid" },
  { id: "#NS-1043", name: "Samiul Karim", initials: "SK", date: "15 Nov 2026", amount: 1250, status: "Paid" },
  { id: "#NS-1042", name: "Farah Noor", initials: "FN", date: "14 Nov 2026", amount: 980, status: "Pending" },
  { id: "#NS-1041", name: "Imran Kabir", initials: "IK", date: "13 Nov 2026", amount: 850, status: "Paid" }
];

const seedCustomers = [
  { id: 1, name: "Maya Rahman", email: "maya@example.com", location: "Dhaka", orders: 12, spent: 18450 },
  { id: 2, name: "Arif Hossain", email: "arif@example.com", location: "Chattogram", orders: 7, spent: 12600 },
  { id: 3, name: "Nadia Islam", email: "nadia@example.com", location: "Dhaka", orders: 9, spent: 15320 },
  { id: 4, name: "Rafi Ahmed", email: "rafi@example.com", location: "Sylhet", orders: 4, spent: 7420 }
];

const seedProducts = [
  { id: 1, name: "Everyday Sneakers", category: "Fashion", price: 2890, stock: 42, sold: 248 },
  { id: 2, name: "Studio Headphones", category: "Tech", price: 3490, stock: 18, sold: 186 },
  { id: 3, name: "Daily Carry Backpack", category: "Accessories", price: 1950, stock: 31, sold: 154 },
  { id: 4, name: "Classic Minimal Watch", category: "Accessories", price: 4250, stock: 12, sold: 98 }
];

const periodData = {
  7: { revenue: "৳62,140", orders: "352", customers: "168", conversion: "3.42%", labels: ["12 Nov", "13 Nov", "14 Nov", "15 Nov", "16 Nov", "17 Nov", "18 Nov"], current: [8, 11, 9, 15, 13, 19, 22], previous: [6, 8, 10, 9, 12, 13, 15] },
  30: { revenue: "৳248,560", orders: "1,429", customers: "684", conversion: "3.68%", labels: ["20 Oct", "25 Oct", "30 Oct", "04 Nov", "09 Nov", "14 Nov", "18 Nov"], current: [8, 12, 10, 17, 14, 21, 26], previous: [6, 9, 8, 12, 11, 15, 17] },
  90: { revenue: "৳724,890", orders: "4,186", customers: "1,972", conversion: "3.81%", labels: ["21 Aug", "05 Sep", "20 Sep", "05 Oct", "20 Oct", "04 Nov", "18 Nov"], current: [7, 10, 14, 12, 18, 22, 28], previous: [5, 8, 10, 11, 13, 16, 19] }
};

// 2. Small helpers keep DOM, storage, and formatting code consistent.
const $ = (selector) => document.querySelector(selector);
const STORAGE = {
  customers: "northstar-customers-v2",
  products: "northstar-products-v2",
  workspaces: "northstar-workspaces-v2",
  activeWorkspace: "northstar-active-workspace-v2",
  settings: "northstar-settings-v2",
  notifications: "northstar-notifications-v2",
  theme: "northstar-dashboard-theme"
};

function readStorage(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch (error) {
    console.warn(`Could not read ${key} from localStorage. Using sample data.`, error);
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    toast("Browser storage is unavailable. Changes may not persist after refresh.");
    console.error(`Could not save ${key}.`, error);
    return false;
  }
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function formatMoney(value) {
  // This setting changes number grouping only; it does not convert currencies.
  const locale = settings.numberLocale || "en-BD";
  return `৳${Number(value).toLocaleString(locale)}`;
}

function toast(message) {
  const node = $("#toast");
  node.textContent = message;
  node.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => node.classList.remove("show"), 2400);
}

// 3. Editable demo state. Each list is persisted independently.
let customers = readStorage(STORAGE.customers, seedCustomers);
let products = readStorage(STORAGE.products, seedProducts);
let workspaces = readStorage(STORAGE.workspaces, ["Northstar Studio"]);
let activeWorkspace = readStorage(STORAGE.activeWorkspace, "Northstar Studio");
let settings = readStorage(STORAGE.settings, {
  name: "Anik Chandra Dey", email: "anik65605@gmail.com", numberLocale: "en-BD",
  notifications: true, weeklySummary: false, compactMode: false
});
let notifications = readStorage(STORAGE.notifications, [
  { id: 1, title: "Welcome to Northstar", detail: "Your sample workspace is ready to explore.", read: false },
  { id: 2, title: "Report available", detail: "A sample analytics report is ready for export.", read: false },
  { id: 3, title: "New customer added", detail: "Maya Rahman joined the sample customer list.", read: true }
]);
let state = { page: "Overview", pageNumber: 1, search: "", status: "all" };

// 4. Chart drawing helpers. SVG keeps the chart dependency-free.
function chartPoints(values) {
  const width = 700;
  const height = 220;
  const max = 32;
  return values.map((value, index) => ({
    x: (index / (values.length - 1)) * width,
    y: height - (value / max) * (height - 12) - 6
  }));
}

function pathFromPoints(points) {
  return points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(" ");
}

function drawChart(chartSelector, labelsSelector, data) {
  const chart = $(chartSelector);
  const labels = $(labelsSelector);
  if (!chart || !labels) return;
  const current = chartPoints(data.current);
  const previous = chartPoints(data.previous);
  const currentPath = pathFromPoints(current);
  const previousPath = pathFromPoints(previous);
  const areaPath = `${currentPath} L 700 220 L 0 220 Z`;
  const last = current[current.length - 1];
  chart.innerHTML = `
    <defs><linearGradient id="${chart.id}-gradient" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#7565e8" stop-opacity=".22"></stop>
      <stop offset="100%" stop-color="#7565e8" stop-opacity="0"></stop>
    </linearGradient></defs>
    <path class="chart-area" style="fill:url(#${chart.id}-gradient)" d="${areaPath}"></path>
    <path class="chart-line-previous" d="${previousPath}"></path>
    <path class="chart-line" d="${currentPath}"></path>
    <circle class="chart-point" cx="${last.x}" cy="${last.y}" r="5"></circle>`;
  labels.innerHTML = data.labels.map((label) => `<span>${escapeHTML(label)}</span>`).join("");
}

function renderOverviewChart(data) {
  drawChart("#revenue-chart", "#chart-labels", data);
  $("#revenue-value").textContent = data.revenue;
  $("#orders-value").textContent = data.orders;
  $("#customers-value").textContent = data.customers;
  $("#conversion-value").textContent = data.conversion;
  $("#chart-total").textContent = data.revenue;
}

// 5. Transaction table used by the Overview page.
function getFilteredTransactions(query = state.search, status = state.status) {
  return transactions.filter((item) => {
    const matchesSearch = `${item.id} ${item.name}`.toLowerCase().includes(query.toLowerCase());
    return matchesSearch && (status === "all" || item.status === status);
  });
}

function transactionRows(items) {
  return items.map((item) => `
    <tr><td>${escapeHTML(item.id)}</td>
      <td><div class="customer-cell"><span class="customer-avatar">${escapeHTML(item.initials)}</span><span class="customer-name">${escapeHTML(item.name)}</span></div></td>
      <td>${escapeHTML(item.date)}</td><td><strong>${formatMoney(item.amount)}</strong></td>
      <td><span class="status-pill status-${item.status.toLowerCase()}">${escapeHTML(item.status)}</span></td></tr>`).join("");
}

function renderTransactions() {
  const filtered = getFilteredTransactions();
  const pageSize = 5;
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  state.pageNumber = Math.min(state.pageNumber, pageCount);
  const start = (state.pageNumber - 1) * pageSize;
  const pageItems = filtered.slice(start, start + pageSize);
  $("#transaction-body").innerHTML = pageItems.length ? transactionRows(pageItems) :
    `<tr><td colspan="5" class="empty-cell">No matching transactions found.</td></tr>`;
  $("#transaction-count").textContent = filtered.length
    ? `Showing ${start + 1}–${Math.min(start + pageSize, filtered.length)} of ${filtered.length} transactions`
    : "Showing 0 transactions";
  $("#page-number").textContent = `${state.pageNumber} / ${pageCount}`;
  $("#prev-page").disabled = state.pageNumber <= 1;
  $("#next-page").disabled = state.pageNumber >= pageCount;
}

function exportCSV(items, filename = "northstar-demo-report.csv") {
  const rows = [["Order ID", "Customer", "Date", "Amount (BDT)", "Status"],
    ...items.map((item) => [item.id, item.name, item.date, item.amount, item.status])];
  const csv = rows.map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(",")).join("\n");
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  toast("Demo CSV file exported.");
}

// 6. Small reusable modal for workspace, help, profile, and notifications.
function openUtilityModal(title, content) {
  $("#utility-title").textContent = title;
  $("#utility-content").innerHTML = content;
  $("#utility-backdrop").hidden = false;
  $("#utility-close").focus();
}

function closeUtilityModal() {
  $("#utility-backdrop").hidden = true;
}

function renderWorkspaceModal() {
  openUtilityModal("Manage workspaces", `
    <p class="page-description">Create, rename, or switch between local demo workspaces. Each workspace is a saved label for this browser-only practice project.</p>
    <div class="workspace-list">${workspaces.map((name) => `
      <div class="workspace-row"><span class="workspace-row-icon">${escapeHTML(name.charAt(0).toUpperCase())}</span>
        <strong>${escapeHTML(name)}</strong><span class="workspace-current">${name === activeWorkspace ? "Current" : ""}</span>
        <button type="button" class="small-action" data-workspace-switch="${escapeHTML(name)}">Switch</button></div>`).join("")}</div>
    <form id="workspace-create-form" class="inline-form"><label for="new-workspace-name">New workspace name</label><div><input id="new-workspace-name" maxlength="35" required placeholder="e.g. Learning Studio"><button class="page-button" type="submit">Create</button></div></form>
    <form id="workspace-rename-form" class="inline-form"><label for="rename-workspace-name">Rename current workspace</label><div><input id="rename-workspace-name" maxlength="35" required value="${escapeHTML(activeWorkspace)}"><button class="page-button secondary" type="submit">Rename</button></div></form>
    <button class="text-danger" id="delete-workspace" type="button" ${workspaces.length <= 1 ? "disabled" : ""}>Delete current workspace</button>`);
}

function renderNotificationsModal() {
  const unread = notifications.filter((item) => !item.read).length;
  openUtilityModal("Notifications", `
    <div class="modal-toolbar"><p class="page-description">${unread ? `${unread} unread notification(s)` : "You are all caught up."}</p><button class="small-action" id="mark-all-read" type="button">Mark all as read</button></div>
    <div class="notification-list">${notifications.map((item) => `
      <article class="notification-row ${item.read ? "is-read" : ""}"><span class="notification-dot"></span><div><strong>${escapeHTML(item.title)}</strong><p>${escapeHTML(item.detail)}</p></div><button type="button" class="small-action" data-notification-read="${item.id}">${item.read ? "Read" : "Mark read"}</button></article>`).join("")}</div>`);
}

function renderProfileModal() {
  openUtilityModal("Profile", `
    <form id="profile-form" class="settings-form">
      <label>Full name<input name="name" value="${escapeHTML(settings.name)}" minlength="2" required></label>
      <label>Email address<input name="email" type="email" value="${escapeHTML(settings.email)}" required></label>
      <p class="page-description">This is a local demo profile. It does not create an account or authenticate with a server.</p>
      <button class="page-button" type="submit">Save profile</button>
    </form>`);
}

function renderHelpModal() {
  openUtilityModal("Help center", `
    <div class="help-articles">
      <article><strong>How do I change workspace?</strong><p>Open the workspace selector in the sidebar, then choose an existing workspace or create a new one.</p></article>
      <article><strong>Where are settings saved?</strong><p>Settings, customers, products, and workspace labels are stored in this browser using localStorage.</p></article>
      <article><strong>Is this connected to a real store?</strong><p>No. This is a frontend learning project with fictional sample data. No real payments or customer records are processed.</p></article>
      <article><strong>How do I export data?</strong><p>Open Transactions and choose Export CSV to download the current sample transaction list.</p></article>
    </div>`);
}

// 7. Page templates. The route is client-side; no page reload is needed.
function pageHeader(title, description, action = "") {
  return `<div class="management-heading"><div><p class="muted-overline">NORTHSTAR WORKSPACE</p><h2>${title}</h2><p class="page-description">${description}</p></div>${action}</div>`;
}

function renderAnalyticsPage() {
  $("#page-view").innerHTML = `${pageHeader("Analytics", "Explore sample revenue, orders, customers, and conversion trends.", `<label class="page-select-label">Period <select id="analytics-period"><option value="7">Last 7 days</option><option value="30" selected>Last 30 days</option><option value="90">Last 90 days</option></select></label>`)}
    <div class="page-stats-grid"><article class="page-card"><span>Revenue</span><strong id="analytics-revenue">৳248,560</strong><small>Sample revenue</small></article><article class="page-card"><span>Orders</span><strong id="analytics-orders">1,429</strong><small>Sample orders</small></article><article class="page-card"><span>Customers</span><strong id="analytics-customers">684</strong><small>Sample customers</small></article><article class="page-card"><span>Conversion</span><strong id="analytics-conversion">3.68%</strong><small>Sample conversion rate</small></article></div>
    <article class="panel analytics-page-panel"><div class="panel-heading"><div><h3>Revenue performance</h3><p>Current period compared with the previous period</p></div><button class="small-action" id="analytics-export" type="button">Export transactions</button></div><div class="chart-legend"><span><i class="legend-dot legend-primary"></i>Revenue</span><span><i class="legend-dot legend-secondary"></i>Previous period</span></div><div class="chart-wrap"><div class="y-axis"><span>৳30k</span><span>৳20k</span><span>৳10k</span><span>৳0</span></div><div class="chart-main"><div class="chart-grid-lines"><i></i><i></i><i></i><i></i></div><svg id="analytics-chart" viewBox="0 0 700 220" preserveAspectRatio="none" role="img" aria-label="Revenue chart"></svg><div class="x-axis" id="analytics-labels"></div></div></div></article>`;
  const data = periodData[30];
  drawChart("#analytics-chart", "#analytics-labels", data);
  updateAnalyticsStats(data);
}

function updateAnalyticsStats(data) {
  $("#analytics-revenue").textContent = data.revenue;
  $("#analytics-orders").textContent = data.orders;
  $("#analytics-customers").textContent = data.customers;
  $("#analytics-conversion").textContent = data.conversion;
}

function renderTransactionsPage() {
  const query = $("#transactions-page-search")?.value.trim().toLowerCase() || "";
  const status = $("#transactions-page-status")?.value || "all";
  const rows = transactions.filter((item) => `${item.id} ${item.name}`.toLowerCase().includes(query) && (status === "all" || item.status === status));
  const container = $("#transactions-page-table");
  if (container) container.innerHTML = rows.length ? transactionRows(rows) : `<tr><td colspan="5" class="empty-cell">No matching transactions found.</td></tr>`;
  const count = $("#transactions-page-count");
  if (count) count.textContent = `${rows.length} transaction(s) shown`;
}

function renderCustomersPage() {
  const query = $("#customer-search")?.value.trim().toLowerCase() || "";
  const rows = customers.filter((item) => `${item.name} ${item.email} ${item.location}`.toLowerCase().includes(query));
  $("#customer-table").innerHTML = rows.map((item) => `
    <tr><td><strong>${escapeHTML(item.name)}</strong><small class="table-subline">${escapeHTML(item.email)}</small></td><td>${escapeHTML(item.location)}</td><td>${item.orders}</td><td>${formatMoney(item.spent)}</td><td><button class="small-action danger-action" data-customer-delete="${item.id}" type="button">Remove</button></td></tr>`).join("") || `<tr><td colspan="5" class="empty-cell">No customers match your search.</td></tr>`;
  $("#customer-count").textContent = `${rows.length} customer(s)`;
}

function renderProductsPage() {
  const query = $("#product-search")?.value.trim().toLowerCase() || "";
  const rows = products.filter((item) => `${item.name} ${item.category}`.toLowerCase().includes(query));
  $("#product-table").innerHTML = rows.map((item) => `
    <tr><td><strong>${escapeHTML(item.name)}</strong><small class="table-subline">${escapeHTML(item.category)}</small></td><td>${formatMoney(item.price)}</td><td>${item.stock}</td><td>${item.sold}</td><td><button class="small-action" data-product-edit="${item.id}" type="button">Edit</button><button class="small-action danger-action" data-product-delete="${item.id}" type="button">Delete</button></td></tr>`).join("") || `<tr><td colspan="5" class="empty-cell">No products match your search.</td></tr>`;
  $("#product-count").textContent = `${rows.length} product(s)`;
}

function renderSettingsPage() {
  $("#page-view").innerHTML = `${pageHeader("Settings", "Manage your local profile, workspace preferences, and dashboard appearance.")}
    <form id="settings-form" class="settings-layout">
      <section class="page-card settings-card"><h3>Profile information</h3><p>These details personalise the demo dashboard.</p><label>Full name<input name="name" value="${escapeHTML(settings.name)}" required minlength="2"></label><label>Email address<input name="email" type="email" value="${escapeHTML(settings.email)}" required></label></section>
      <section class="page-card settings-card"><h3>Workspace preferences</h3><p>Choose how this dashboard should behave in this browser.</p><label>Number formatting<select name="numberLocale"><option value="en-BD" ${settings.numberLocale === "en-BD" ? "selected" : ""}>Bangladesh grouping</option><option value="en-US" ${settings.numberLocale === "en-US" ? "selected" : ""}>International grouping</option></select></label><label>Appearance<select name="theme"><option value="light" ${document.body.classList.contains("dark-theme") ? "" : "selected"}>Light</option><option value="dark" ${document.body.classList.contains("dark-theme") ? "selected" : ""}>Dark</option></select></label><label class="check-setting"><input name="notifications" type="checkbox" ${settings.notifications ? "checked" : ""}> Enable dashboard notifications</label><label class="check-setting"><input name="weeklySummary" type="checkbox" ${settings.weeklySummary ? "checked" : ""}> Weekly summary reminder</label><label class="check-setting"><input name="compactMode" type="checkbox" ${settings.compactMode ? "checked" : ""}> Compact dashboard spacing</label></section>
      <div class="settings-actions"><button class="primary-button" type="submit">Save settings</button><button class="small-action" id="reset-settings" type="button">Restore defaults</button></div>
    </form>`;
}

function renderPage(page) {
  const overviewSections = [".welcome-row", ".stats-grid", ".middle-grid", ".bottom-grid", "#overview-footer"];
  overviewSections.forEach((selector) => { const node = $(selector); if (node) node.hidden = page !== "Overview"; });
  const pageView = $("#page-view");
  pageView.hidden = page === "Overview";
  if (page === "Overview") return;
  if (page === "Analytics") renderAnalyticsPage();
  if (page === "Transactions") {
    pageView.innerHTML = `${pageHeader("Transactions", "Search and filter all sample order records.", `<button class="primary-button" id="transactions-export" type="button">↓ Export CSV</button>`)}
      <section class="page-card"><div class="page-toolbar"><input id="transactions-page-search" type="search" placeholder="Search order or customer"><select id="transactions-page-status"><option value="all">All statuses</option><option>Paid</option><option>Pending</option><option>Refunded</option></select><span id="transactions-page-count"></span></div><div class="table-scroll"><table class="management-table"><thead><tr><th>ORDER ID</th><th>CUSTOMER</th><th>DATE</th><th>AMOUNT</th><th>STATUS</th></tr></thead><tbody id="transactions-page-table"></tbody></table></div></section>`;
    renderTransactionsPage();
  }
  if (page === "Customers") {
    pageView.innerHTML = `${pageHeader("Customers", "Manage a local sample customer list. Changes are saved in this browser.", `<span class="small-count" id="customer-count"></span>`)}
      <section class="page-card"><form id="customer-form" class="management-form"><label>Name<input name="name" required minlength="2" placeholder="Customer name"></label><label>Email<input name="email" type="email" required placeholder="customer@example.com"></label><label>Location<input name="location" required placeholder="City"></label><button class="primary-button" type="submit">+ Add customer</button></form><div class="page-toolbar"><input id="customer-search" type="search" placeholder="Search customers"></div><div class="table-scroll"><table class="management-table"><thead><tr><th>CUSTOMER</th><th>LOCATION</th><th>ORDERS</th><th>TOTAL SPENT</th><th>ACTION</th></tr></thead><tbody id="customer-table"></tbody></table></div></section>`;
    renderCustomersPage();
  }
  if (page === "Products") {
    pageView.innerHTML = `${pageHeader("Products", "Add, edit, search, and remove sample catalogue items.", `<span class="small-count" id="product-count"></span>`)}
      <section class="page-card"><form id="product-form" class="management-form"><label>Product name<input name="name" required minlength="2" placeholder="Product name"></label><label>Category<select name="category"><option>Fashion</option><option>Tech</option><option>Home</option><option>Accessories</option></select></label><label>Price (BDT)<input name="price" type="number" min="1" required placeholder="1200"></label><label>Stock<input name="stock" type="number" min="0" required placeholder="20"></label><button class="primary-button" type="submit">+ Add product</button></form><div class="page-toolbar"><input id="product-search" type="search" placeholder="Search products"></div><div class="table-scroll"><table class="management-table"><thead><tr><th>PRODUCT</th><th>PRICE</th><th>STOCK</th><th>SOLD</th><th>ACTION</th></tr></thead><tbody id="product-table"></tbody></table></div></section>`;
    renderProductsPage();
  }
  if (page === "Settings") renderSettingsPage();
  pageView.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setPage(page) {
  state.page = page;
  $("#page-title").textContent = page;
  $("#breadcrumb-current").textContent = page;
  document.querySelectorAll("[data-page]").forEach((link) => link.classList.toggle("active", link.dataset.page === page));
  renderPage(page);
  closeMobileNav();
}

// 8. Workspace, navigation, and page-level events.
function openMobileNav() { $("#sidebar").classList.add("mobile-open"); $("#mobile-backdrop").hidden = false; }
function closeMobileNav() { $("#sidebar").classList.remove("mobile-open"); $("#mobile-backdrop").hidden = true; }
function updateWorkspaceLabel() {
  $("#workspace-name").textContent = activeWorkspace;
  $("#workspace-icon").textContent = activeWorkspace.charAt(0).toUpperCase();
}

// Sidebar links and the dashboard shortcuts all use the same route handler.
document.querySelectorAll("[data-page]").forEach((link) => link.addEventListener("click", (event) => {
  event.preventDefault();
  setPage(link.dataset.page);
}));

$("#workspace-switcher").addEventListener("click", renderWorkspaceModal);
$("#profile-button").addEventListener("click", renderProfileModal);
$("#notification-button").addEventListener("click", renderNotificationsModal);
$("#help-button").addEventListener("click", renderHelpModal);
$("#utility-close").addEventListener("click", closeUtilityModal);
$("#utility-backdrop").addEventListener("click", (event) => { if (event.target.id === "utility-backdrop") closeUtilityModal(); });

// Shared modal actions are delegated because the modal body changes by task.
$("#utility-content").addEventListener("click", (event) => {
  const switchButton = event.target.closest("[data-workspace-switch]");
  const readButton = event.target.closest("[data-notification-read]");
  if (switchButton) {
    activeWorkspace = switchButton.dataset.workspaceSwitch;
    writeStorage(STORAGE.activeWorkspace, activeWorkspace);
    updateWorkspaceLabel();
    closeUtilityModal();
    toast(`Switched to ${activeWorkspace}.`);
  }
  if (readButton) {
    const id = Number(readButton.dataset.notificationRead);
    notifications = notifications.map((item) => item.id === id ? { ...item, read: true } : item);
    writeStorage(STORAGE.notifications, notifications);
    renderNotificationsModal();
  }
  if (event.target.id === "mark-all-read") {
    notifications = notifications.map((item) => ({ ...item, read: true }));
    writeStorage(STORAGE.notifications, notifications);
    renderNotificationsModal();
    toast("All notifications marked as read.");
  }
  if (event.target.id === "delete-workspace") {
    if (workspaces.length <= 1) return;
    if (confirm(`Delete the workspace label “${activeWorkspace}”?`)) {
      workspaces = workspaces.filter((name) => name !== activeWorkspace);
      activeWorkspace = workspaces[0];
      writeStorage(STORAGE.workspaces, workspaces);
      writeStorage(STORAGE.activeWorkspace, activeWorkspace);
      updateWorkspaceLabel();
      renderWorkspaceModal();
      toast("Workspace removed.");
    }
  }
});

$("#utility-content").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  if (form.id === "workspace-create-form") {
    const name = form.elements["new-workspace-name"].value.trim();
    if (name.length < 2 || workspaces.some((item) => item.toLowerCase() === name.toLowerCase())) { toast("Enter a unique workspace name."); return; }
    workspaces.push(name);
    activeWorkspace = name;
    writeStorage(STORAGE.workspaces, workspaces);
    writeStorage(STORAGE.activeWorkspace, activeWorkspace);
    updateWorkspaceLabel();
    renderWorkspaceModal();
    toast("Workspace created.");
  }
  if (form.id === "workspace-rename-form") {
    const name = form.elements["rename-workspace-name"].value.trim();
    if (name.length < 2) { toast("Workspace name must contain at least 2 characters."); return; }
    if (workspaces.some((item) => item !== activeWorkspace && item.toLowerCase() === name.toLowerCase())) { toast("A workspace with that name already exists."); return; }
    workspaces = workspaces.map((item) => item === activeWorkspace ? name : item);
    activeWorkspace = name;
    writeStorage(STORAGE.workspaces, workspaces);
    writeStorage(STORAGE.activeWorkspace, activeWorkspace);
    updateWorkspaceLabel();
    renderWorkspaceModal();
    toast("Workspace renamed.");
  }
  if (form.id === "profile-form") {
    settings.name = form.elements.name.value.trim();
    settings.email = form.elements.email.value.trim();
    writeStorage(STORAGE.settings, settings);
    $("#sidebar-profile-name").textContent = settings.name;
    closeUtilityModal();
    toast("Profile updated.");
  }
});

// 9. Event handlers for the Overview page.
$("#period-select").addEventListener("change", (event) => {
  renderOverviewChart(periodData[event.target.value]);
  toast(`Showing the last ${event.target.value} days.`);
});
$("#transaction-search").addEventListener("input", (event) => { state.search = event.target.value.trim(); state.pageNumber = 1; renderTransactions(); });
$("#status-filter").addEventListener("change", (event) => { state.status = event.target.value; state.pageNumber = 1; renderTransactions(); });
$("#prev-page").addEventListener("click", () => { if (state.pageNumber > 1) { state.pageNumber -= 1; renderTransactions(); } });
$("#next-page").addEventListener("click", () => { const pages = Math.max(1, Math.ceil(getFilteredTransactions().length / 5)); if (state.pageNumber < pages) { state.pageNumber += 1; renderTransactions(); } });
$("#report-button").addEventListener("click", () => exportCSV(getFilteredTransactions(), "northstar-overview-transactions.csv"));
$("#view-all").addEventListener("click", (event) => { event.preventDefault(); setPage("Transactions"); });

// 10. Dynamic-page events are delegated from the page container.
$("#page-view").addEventListener("input", (event) => {
  if (event.target.id === "customer-search") renderCustomersPage();
  if (event.target.id === "product-search") renderProductsPage();
  if (event.target.id === "transactions-page-search" || event.target.id === "transactions-page-status") renderTransactionsPage();
});
$("#page-view").addEventListener("change", (event) => {
  if (event.target.id === "analytics-period") {
    const data = periodData[event.target.value];
    drawChart("#analytics-chart", "#analytics-labels", data);
    updateAnalyticsStats(data);
  }
  if (event.target.id === "transactions-page-status") renderTransactionsPage();
});
$("#page-view").addEventListener("click", (event) => {
  if (event.target.id === "transactions-export" || event.target.id === "analytics-export") exportCSV(transactions);
  if (event.target.id === "reset-settings") {
    settings = { name: "Anik Chandra Dey", email: "anik65605@gmail.com", numberLocale: "en-BD", notifications: true, weeklySummary: false, compactMode: false };
    writeStorage(STORAGE.settings, settings);
    document.body.classList.remove("dark-theme", "compact-dashboard");
    writeStorage(STORAGE.theme, "light");
    $("#sidebar-profile-name").textContent = settings.name;
    renderSettingsPage();
    toast("Default settings restored.");
  }
  const deleteCustomer = event.target.closest("[data-customer-delete]");
  if (deleteCustomer && confirm("Remove this sample customer?")) {
    customers = customers.filter((item) => item.id !== Number(deleteCustomer.dataset.customerDelete));
    writeStorage(STORAGE.customers, customers); renderCustomersPage(); toast("Customer removed.");
  }
  const deleteProduct = event.target.closest("[data-product-delete]");
  if (deleteProduct && confirm("Delete this sample product?")) {
    products = products.filter((item) => item.id !== Number(deleteProduct.dataset.productDelete));
    writeStorage(STORAGE.products, products); renderProductsPage(); toast("Product deleted.");
  }
  const editProduct = event.target.closest("[data-product-edit]");
  if (editProduct) {
    const product = products.find((item) => item.id === Number(editProduct.dataset.productEdit));
    if (!product) return;
    const name = prompt("Edit product name:", product.name);
    if (name === null) return;
    const price = Number(prompt("Edit price in BDT:", product.price));
    if (!name.trim() || !Number.isFinite(price) || price <= 0) { toast("Enter a valid product name and price."); return; }
    product.name = name.trim(); product.price = price;
    writeStorage(STORAGE.products, products); renderProductsPage(); toast("Product updated.");
  }
});
$("#page-view").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  if (form.id === "customer-form") {
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const location = form.elements.location.value.trim();
    customers.unshift({ id: Date.now(), name, email, location, orders: 0, spent: 0 });
    writeStorage(STORAGE.customers, customers); form.reset(); renderCustomersPage(); toast("Customer added to local demo data.");
  }
  if (form.id === "product-form") {
    const name = form.elements.name.value.trim();
    const category = form.elements.category.value;
    const price = Number(form.elements.price.value);
    const stock = Number(form.elements.stock.value);
    products.unshift({ id: Date.now(), name, category, price, stock, sold: 0 });
    writeStorage(STORAGE.products, products); form.reset(); renderProductsPage(); toast("Product added to local demo catalogue.");
  }
  if (form.id === "settings-form") {
    settings = {
      ...settings,
      name: form.elements.name.value.trim(),
      email: form.elements.email.value.trim(),
      numberLocale: form.elements.numberLocale.value,
      notifications: form.elements.notifications.checked,
      weeklySummary: form.elements.weeklySummary.checked,
      compactMode: form.elements.compactMode.checked
    };
    writeStorage(STORAGE.settings, settings);
    const theme = form.elements.theme.value;
    document.body.classList.toggle("dark-theme", theme === "dark");
    document.body.classList.toggle("compact-dashboard", settings.compactMode);
    writeStorage(STORAGE.theme, theme);
    $("#sidebar-profile-name").textContent = settings.name;
    toast("Settings saved in this browser.");
  }
});

// 11. Theme and mobile navigation controls.
$("#theme-toggle").addEventListener("click", () => {
  const dark = document.body.classList.toggle("dark-theme");
  writeStorage(STORAGE.theme, dark ? "dark" : "light");
  if (state.page === "Settings") renderSettingsPage();
});
$("#mobile-menu").addEventListener("click", openMobileNav);
$("#mobile-backdrop").addEventListener("click", closeMobileNav);
$("#utility-backdrop").addEventListener("click", (event) => { if (event.target.id === "utility-backdrop") closeUtilityModal(); });
document.addEventListener("keydown", (event) => { if (event.key === "Escape") { closeMobileNav(); closeUtilityModal(); } });

// 12. Initial page setup: restore saved preferences and paint the overview.
if (readStorage(STORAGE.theme, "light") === "dark") document.body.classList.add("dark-theme");
if (settings.compactMode) document.body.classList.add("compact-dashboard");
$("#sidebar-profile-name").textContent = settings.name;
const now = new Date();
$("#today-date").textContent = now.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
$("#current-year").textContent = now.getFullYear();
updateWorkspaceLabel();
renderOverviewChart(periodData[30]);
renderTransactions();
