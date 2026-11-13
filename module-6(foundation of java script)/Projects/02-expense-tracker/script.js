// PROJECT 02: EXPENSE TRACKER
// Concepts: form validation, numbers, dates, arrays, reduce(), localStorage.

const STORAGE_KEY = "js-project-02-transactions";
const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

let transactions = readTransactions();
const form = document.querySelector("#transaction-form");
const dateInput = document.querySelector("#date");
const list = document.querySelector("#transaction-list");
const emptyState = document.querySelector("#empty-state");
const typeFilter = document.querySelector("#type-filter");

// Use today's local date as the default form value.
dateInput.value = new Date().toLocaleDateString("en-CA");

function readTransactions() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function saveTransactions() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const description = document.querySelector("#description").value.trim();
  const amount = Number(document.querySelector("#amount").value);
  const type = document.querySelector("#type").value;
  const category = document.querySelector("#category").value;
  const date = dateInput.value;

  // Never accept empty descriptions, invalid dates, zero, or negative amounts.
  if (!description || !date || !Number.isFinite(amount) || amount <= 0) {
    document.querySelector("#form-message").textContent = "Enter a description, valid date, and amount above zero.";
    return;
  }

  transactions.unshift({ id: crypto.randomUUID(), description, amount, type, category, date });
  saveTransactions();
  form.reset();
  dateInput.value = new Date().toLocaleDateString("en-CA");
  document.querySelector("#form-message").textContent = "Transaction saved.";
  render();
});

typeFilter.addEventListener("change", render);

list.addEventListener("click", (event) => {
  const button = event.target.closest("[data-delete-id]");
  if (!button) return;
  transactions = transactions.filter((item) => item.id !== button.dataset.deleteId);
  saveTransactions();
  render();
});

function renderSummary() {
  const income = transactions
    .filter((item) => item.type === "income")
    .reduce((total, item) => total + item.amount, 0);
  const expenses = transactions
    .filter((item) => item.type === "expense")
    .reduce((total, item) => total + item.amount, 0);

  document.querySelector("#income").textContent = money.format(income);
  document.querySelector("#expenses").textContent = money.format(expenses);
  document.querySelector("#balance").textContent = money.format(income - expenses);
}

function createTransactionRow(item) {
  const row = document.createElement("li");
  row.className = "transaction";

  const info = document.createElement("div");
  info.className = "transaction-info";
  const title = document.createElement("strong");
  title.textContent = item.description;
  const meta = document.createElement("span");
  meta.textContent = `${item.category} · ${item.date}`;
  info.append(title, meta);

  const amount = document.createElement("span");
  amount.className = `amount ${item.type}`;
  amount.textContent = `${item.type === "income" ? "+" : "−"}${money.format(item.amount)}`;

  const remove = document.createElement("button");
  remove.className = "delete";
  remove.type = "button";
  remove.textContent = "×";
  remove.dataset.deleteId = item.id;
  remove.setAttribute("aria-label", `Delete ${item.description}`);

  row.append(info, amount, remove);
  return row;
}

function render() {
  renderSummary();
  const selectedType = typeFilter.value;
  const visible = transactions.filter((item) => selectedType === "all" || item.type === selectedType);
  list.replaceChildren(...visible.map(createTransactionRow));
  emptyState.hidden = visible.length > 0;
}

render();
