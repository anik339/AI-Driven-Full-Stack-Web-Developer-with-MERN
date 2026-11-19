// PROJECT 10: JOB APPLICATION TRACKER
// Concepts: CRUD, arrays, search/filter, select events, localStorage, derived statistics.

const STORAGE_KEY = "js-project-10-applications";
let applications = loadApplications();

const form = document.querySelector("#job-form");
const applicationList = document.querySelector("#application-list");
const appliedDate = document.querySelector("#applied-date");

appliedDate.value = new Date().toLocaleDateString("en-CA");

function loadApplications() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveApplications() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const company = document.querySelector("#company").value.trim();
  const role = document.querySelector("#role").value.trim();
  const date = appliedDate.value;
  const status = document.querySelector("#job-status").value;
  const rawLink = document.querySelector("#job-link").value.trim();

  if (!company || !role || !date) return;

  // Only keep normal web URLs. Do not create clickable javascript: or data: links.
  let link = "";
  if (rawLink) {
    try {
      const parsed = new URL(rawLink);
      if (["http:", "https:"].includes(parsed.protocol)) link = parsed.href;
    } catch {
      document.querySelector("#job-link").setCustomValidity("Enter a valid http or https URL.");
      document.querySelector("#job-link").reportValidity();
      return;
    }
  }

  applications.unshift({
    id: crypto.randomUUID(),
    company,
    role,
    date,
    status,
    link
  });

  saveApplications();
  form.reset();
  appliedDate.value = new Date().toLocaleDateString("en-CA");
  document.querySelector("#job-link").setCustomValidity("");
  render();
});

// Update status and delete records using one delegated listener.
applicationList.addEventListener("change", (event) => {
  const select = event.target.closest("[data-status-id]");
  if (!select) return;
  const application = applications.find((item) => item.id === select.dataset.statusId);
  if (!application) return;
  application.status = select.value;
  saveApplications();
  render();
});

applicationList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-delete-id]");
  if (!button) return;
  applications = applications.filter((item) => item.id !== button.dataset.deleteId);
  saveApplications();
  render();
});

document.querySelector("#status-filter").addEventListener("change", render);
document.querySelector("#job-search").addEventListener("input", render);

function renderStats() {
  document.querySelector("#total-stat").textContent = applications.length;
  document.querySelector("#interview-stat").textContent = applications.filter((item) => item.status === "interview").length;
  document.querySelector("#offer-stat").textContent = applications.filter((item) => item.status === "offer").length;
}

function createApplicationCard(item) {
  const card = document.createElement("article");
  card.className = "application-card";

  const info = document.createElement("div");
  const title = document.createElement("h3");
  title.textContent = `${item.role} · ${item.company}`;
  const meta = document.createElement("p");
  meta.textContent = `Applied on ${item.date}`;
  const status = document.createElement("span");
  status.className = `status-pill ${item.status}`;
  status.textContent = item.status;
  info.append(title, meta, status);

  if (item.link) {
    const link = document.createElement("a");
    link.href = item.link;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = "Job posting ↗";
    link.className = "small";
    info.append(document.createElement("br"), link);
  }

  const actions = document.createElement("div");
  actions.className = "application-actions";
  const statusSelect = document.createElement("select");
  statusSelect.dataset.statusId = item.id;
  statusSelect.setAttribute("aria-label", `Change status for ${item.company}`);
  ["applied", "interview", "offer", "rejected"].forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value[0].toUpperCase() + value.slice(1);
    option.selected = value === item.status;
    statusSelect.append(option);
  });

  const remove = document.createElement("button");
  remove.type = "button";
  remove.className = "btn btn-danger";
  remove.textContent = "Delete";
  remove.dataset.deleteId = item.id;

  actions.append(statusSelect, remove);
  card.append(info, actions);
  return card;
}

function render() {
  renderStats();

  const filter = document.querySelector("#status-filter").value;
  const query = document.querySelector("#job-search").value.trim().toLowerCase();

  const visible = applications
    .filter((item) => filter === "all" || item.status === filter)
    .filter((item) => `${item.company} ${item.role}`.toLowerCase().includes(query));

  applicationList.replaceChildren(...visible.map(createApplicationCard));
  document.querySelector("#empty-state").hidden = visible.length > 0;
}

render();
