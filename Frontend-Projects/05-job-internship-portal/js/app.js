/*
 * LAUNCHPAD — Job and Internship Portal
 * ------------------------------------------------------------
 * This is a frontend learning project. Listings are sample data;
 * employer posts, saved roles, applications, and preferences are
 * stored in this browser only. No employer or application server
 * receives the information entered here.
 */

// 1. Sample job listings. Add more practice records to this array.
const seedJobs = [
 {id:1,title:"Frontend Developer Intern",company:"PixelCraft Studio",logo:"P",logoBg:"#eeeaff",logoColor:"#7464d7",category:"Technology",type:"Internship",location:"Dhaka",mode:"Hybrid",experience:"Student",salary:"৳8k–12k / month",posted:"2 days ago",featured:true,description:"Work with a small product team to build accessible, responsive interfaces and learn modern frontend development through practical tasks.",skills:["HTML","CSS","JavaScript","React basics"],responsibilities:["Build and improve responsive UI components.","Collaborate with designers and developers.","Test pages across browsers and screen sizes."],requirements:["Comfortable with HTML, CSS and JavaScript fundamentals.","A portfolio or class project is a plus.","Curiosity and willingness to learn."]},
 {id:2,title:"Junior UI/UX Designer",company:"Mosaic Digital",logo:"M",logoBg:"#fff0e4",logoColor:"#c27b43",category:"Design",type:"Full-time",location:"Dhaka",mode:"On-site",experience:"Entry level",salary:"৳25k–35k / month",posted:"1 day ago",featured:true,description:"Help shape simple and thoughtful digital experiences, from early wireframes to polished interface designs.",skills:["Figma","Wireframing","Prototyping","Design systems"],responsibilities:["Create wireframes and interface mockups.","Work with developers to refine handoff details.","Contribute to user-focused design reviews."],requirements:["A design portfolio or academic work.","Basic understanding of usability.","Good communication and attention to detail."]},
 {id:3,title:"Data Analyst Intern",company:"InsightLoop",logo:"I",logoBg:"#e7f3ff",logoColor:"#4f91c9",category:"Data",type:"Internship",location:"Remote",mode:"Remote",experience:"Student",salary:"৳10k–15k / month",posted:"3 days ago",featured:false,description:"Support the analytics team with data cleaning, reporting, and simple visualisations for internal projects.",skills:["Excel","SQL basics","Python basics","Charts"],responsibilities:["Clean and organise small datasets.","Prepare weekly summary reports.","Help maintain simple dashboards."],requirements:["Interest in data analysis.","Basic spreadsheet skills.","Willingness to learn SQL or Python."]},
 {id:4,title:"Digital Marketing Associate",company:"BrightPath",logo:"B",logoBg:"#e9f6ed",logoColor:"#4e9b70",category:"Marketing",type:"Full-time",location:"Chattogram",mode:"Hybrid",experience:"Entry level",salary:"৳22k–30k / month",posted:"4 days ago",featured:false,description:"Assist with campaign planning, content calendars, and performance reporting across digital channels.",skills:["Content","Social media","Analytics","Communication"],responsibilities:["Schedule social content and campaign assets.","Track basic campaign metrics.","Support content and marketing research."],requirements:["Strong writing and communication.","Interest in digital marketing.","Basic familiarity with social platforms."]},
 {id:5,title:"Backend Developer Intern",company:"CodeHarbor",logo:"C",logoBg:"#e9edf9",logoColor:"#5c6eaa",category:"Technology",type:"Internship",location:"Dhaka",mode:"On-site",experience:"Student",salary:"৳10k–14k / month",posted:"5 days ago",featured:false,description:"Learn server-side development by assisting with small features, testing, and documentation under a mentor.",skills:["JavaScript","Node.js basics","Git","Problem solving"],responsibilities:["Assist with small development tasks.","Write clear technical notes.","Test endpoints in a guided learning environment."],requirements:["Programming fundamentals.","Interest in backend engineering.","Basic Git knowledge is helpful."]},
 {id:6,title:"Business Operations Trainee",company:"Nexa Commerce",logo:"N",logoBg:"#fff3df",logoColor:"#ba873d",category:"Business",type:"Full-time",location:"Dhaka",mode:"Hybrid",experience:"Entry level",salary:"৳20k–28k / month",posted:"1 week ago",featured:false,description:"Support day-to-day operations, coordinate information across teams, and help improve internal processes.",skills:["Excel","Organisation","Communication","Reporting"],responsibilities:["Maintain operational trackers.","Coordinate updates between teams.","Prepare routine reports."],requirements:["Good organisation and communication.","Comfortable using spreadsheets.","Fresh graduates are welcome."]},
 {id:7,title:"React Developer — Junior",company:"Orbit Labs",logo:"O",logoBg:"#e6f5f5",logoColor:"#3c9294",category:"Technology",type:"Full-time",location:"Remote",mode:"Remote",experience:"1–2 years",salary:"৳35k–50k / month",posted:"6 days ago",featured:true,description:"Build user-facing web features with a supportive engineering team and contribute to code quality and UI consistency.",skills:["React","JavaScript","CSS","Git"],responsibilities:["Develop reusable React components.","Work with design specifications.","Review and test frontend changes."],requirements:["Hands-on React project experience.","Good JavaScript fundamentals.","Portfolio or GitHub projects preferred."]},
 {id:8,title:"Content Writing Intern",company:"Paperplane Media",logo:"P",logoBg:"#f8eaf0",logoColor:"#b75d83",category:"Marketing",type:"Internship",location:"Remote",mode:"Remote",experience:"Student",salary:"৳6k–9k / month",posted:"1 week ago",featured:false,description:"Research topics and create clear, helpful content for digital audiences with editorial feedback.",skills:["Writing","Research","Editing","SEO basics"],responsibilities:["Draft short articles and social captions.","Research topics and verify information.","Apply editorial feedback."],requirements:["Clear written communication.","A writing sample is helpful.","Interest in digital publishing."]},
 {id:9,title:"QA Tester Intern",company:"QualityNest",logo:"Q",logoBg:"#edf0ff",logoColor:"#6576c8",category:"Technology",type:"Internship",location:"Dhaka",mode:"Hybrid",experience:"Student",salary:"৳8k–11k / month",posted:"8 days ago",featured:false,description:"Learn software testing practices by checking user flows, documenting bugs, and helping the team improve product quality.",skills:["Manual testing","Documentation","Attention to detail","Web basics"],responsibilities:["Test key website user journeys.","Write reproducible bug reports.","Retest fixes and update test notes."],requirements:["Careful and systematic approach.","Basic understanding of websites.","Interest in software quality."]},
 {id:10,title:"Graphic Design Assistant",company:"Form & Function",logo:"F",logoBg:"#f3ecff",logoColor:"#8c67c4",category:"Design",type:"Part-time",location:"Chattogram",mode:"On-site",experience:"Entry level",salary:"৳12k–18k / month",posted:"9 days ago",featured:false,description:"Support the creative team with social media graphics, presentation layouts, and visual asset preparation.",skills:["Illustrator","Photoshop","Canva","Typography"],responsibilities:["Prepare visual assets from briefs.","Organise design files and exports.","Assist with presentation layouts."],requirements:["A small design portfolio.","Basic design software knowledge.","Ability to follow a visual brief."]},
 {id:11,title:"Product Research Assistant",company:"Fieldnote",logo:"F",logoBg:"#e9f5ed",logoColor:"#4c9b70",category:"Business",type:"Contract",location:"Remote",mode:"Remote",experience:"1–2 years",salary:"৳25k–32k / month",posted:"10 days ago",featured:false,description:"Help the product team understand user needs through desk research, competitor reviews, and concise summaries.",skills:["Research","Writing","Spreadsheets","Analysis"],responsibilities:["Gather and organise research findings.","Summarise competitor features.","Prepare concise insight documents."],requirements:["Research or documentation experience.","Strong written communication.","Comfortable working independently."]},
 {id:12,title:"Junior Data Visualisation Associate",company:"MetricMint",logo:"M",logoBg:"#e7f1ff",logoColor:"#5689c4",category:"Data",type:"Full-time",location:"Dhaka",mode:"Hybrid",experience:"Entry level",salary:"৳28k–38k / month",posted:"12 days ago",featured:false,description:"Turn structured information into understandable charts and reports for internal and client-facing teams.",skills:["Excel","Power BI basics","Charts","Data storytelling"],responsibilities:["Prepare charts and simple reports.","Check data labels and consistency.","Support dashboard updates."],requirements:["Interest in data storytelling.","Good spreadsheet skills.","Portfolio or coursework is welcome."]}
];

// 2. Browser storage and app state.
const $ = (selector) => document.querySelector(selector);
const STORAGE = {
  saved: "launchpad-saved-jobs-v2",
  employerJobs: "launchpad-employer-jobs-v1",
  applications: "launchpad-applications-v1",
  profile: "launchpad-profile-v1",
  settings: "launchpad-settings-v1",
  notifications: "launchpad-notifications-v1",
  theme: "launchpad-theme"
};
function readStorage(key, fallback) {
  try { const value = JSON.parse(localStorage.getItem(key)); return value ?? fallback; }
  catch (error) { console.warn(`Could not read ${key}; using default data.`, error); return fallback; }
}
function writeStorage(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); return true; }
  catch (error) { toast("Browser storage is unavailable; changes may not persist."); console.error(error); return false; }
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}
function toast(message) {
  const element = $("#toast");
  element.textContent = message;
  element.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => element.classList.remove("show"), 2300);
}

let employerJobs = readStorage(STORAGE.employerJobs, []);
let jobs = [...seedJobs, ...employerJobs];
let saved = readStorage(STORAGE.saved, []);
if (!Array.isArray(saved)) saved = [];
let applications = readStorage(STORAGE.applications, []);
if (!Array.isArray(applications)) applications = [];
let profile = readStorage(STORAGE.profile, { name: "Anik Chandra Dey", email: "anik65605@gmail.com" });
let settings = readStorage(STORAGE.settings, { theme: "light", emailNotifications: true, showSalary: true });
let notifications = readStorage(STORAGE.notifications, [
  { id: 1, title: "Welcome to Launchpad", detail: "Explore the sample job and internship listings.", read: false },
  { id: 2, title: "Profile checklist", detail: "Add your details before testing a demo application.", read: false }
]);
let activeJobId = null;
let savedOnly = false;
let page = 1;
const pageSize = 6;

// 3. Search, filter, sort, and saved-only logic.
function selectedValues(name) {
  return [...document.querySelectorAll(`input[name="${name}"]:checked`)].map((input) => input.value);
}
function isSaved(id) {
  // Dataset values arrive as strings, while seed IDs are numbers; compare safely.
  return saved.some((savedId) => String(savedId) === String(id));
}
function saveSaved() {
  writeStorage(STORAGE.saved, saved);
  $("#saved-count").textContent = saved.length;
}
function getFilteredJobs() {
  const query = $("#keyword-search").value.trim().toLowerCase();
  const location = $("#location-filter").value;
  const type = $("#type-filter").value;
  const category = $("#category-filter").value;
  const modes = selectedValues("workmode");
  const experiences = selectedValues("experience");
  const types = selectedValues("typecheck");

  const filtered = jobs.filter((job) => {
    const searchable = `${job.title} ${job.company} ${job.category} ${job.skills.join(" ")}`.toLowerCase();
    return (!savedOnly || isSaved(job.id)) &&
      (!query || searchable.includes(query)) &&
      (location === "all" || job.location === location || job.mode === location) &&
      (type === "all" || job.type === type) &&
      (category === "all" || job.category === category) &&
      (!modes.length || modes.includes(job.mode)) &&
      (!experiences.length || experiences.includes(job.experience)) &&
      (!types.length || types.includes(job.type));
  });

  const sort = $("#sort-filter").value;
  if (sort === "company") filtered.sort((a, b) => a.company.localeCompare(b.company));
  else if (sort === "title") filtered.sort((a, b) => a.title.localeCompare(b.title));
  else filtered.sort((a, b) => Number(b.featured) - Number(a.featured) || String(a.id).localeCompare(String(b.id)));
  return filtered;
}

// 4. Job card rendering. Click handlers are delegated from the list container.
function renderJobs() {
  const filtered = getFilteredJobs();
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  page = Math.min(page, pageCount);
  const start = (page - 1) * pageSize;
  const visible = filtered.slice(start, start + pageSize);

  $("#job-list").innerHTML = visible.map((job) => `
    <article class="job-card">
      <div class="company-logo" style="--logo-bg:${escapeHTML(job.logoBg)};--logo-color:${escapeHTML(job.logoColor)}">${escapeHTML(job.logo)}</div>
      <div class="job-main"><p class="job-company">${escapeHTML(job.company)} <span class="verified" title="Sample listing">✓</span></p>
        <h3 class="job-title">${escapeHTML(job.title)}</h3>
        <div class="job-tags"><span class="job-tag type">${escapeHTML(job.type)}</span><span class="job-tag">${escapeHTML(job.category)}</span><span class="job-tag">${escapeHTML(job.mode)}</span></div>
        <div class="job-bottom"><span>⌖ ${escapeHTML(job.location)}</span><span>◷ ${escapeHTML(job.experience)}</span><span>◌ ${escapeHTML(job.posted)}</span></div></div>
      <div class="job-side"><button class="save-job ${isSaved(job.id) ? "saved" : ""}" type="button" data-save="${escapeHTML(job.id)}" aria-label="${isSaved(job.id) ? "Unsave" : "Save"} ${escapeHTML(job.title)}" aria-pressed="${isSaved(job.id)}">${isSaved(job.id) ? "♥" : "♡"}</button>
        <span class="job-salary">${settings.showSalary ? escapeHTML(job.salary) : "Salary hidden"}</span><button class="view-job" type="button" data-view="${escapeHTML(job.id)}">View details ↗</button></div>
    </article>`).join("");

  $("#no-results").hidden = filtered.length > 0;
  $("#job-list").hidden = filtered.length === 0;
  $("#result-count").textContent = `${filtered.length} opportunities found`;
  $("#pagination-label").textContent = filtered.length ? `Showing ${start + 1}–${Math.min(start + pageSize, filtered.length)} of ${filtered.length}` : "No results to show";
  $("#page-indicator").textContent = `${page} / ${pageCount}`;
  $("#previous-page").disabled = page <= 1;
  $("#next-page").disabled = page >= pageCount;
  $("#saved-shortcut").classList.toggle("active", savedOnly);
  $("#saved-shortcut").setAttribute("aria-pressed", String(savedOnly));
}

function toggleSave(id) {
  const job = jobs.find((item) => String(item.id) === String(id));
  const canonicalId = job ? job.id : id;
  const alreadySaved = isSaved(canonicalId);
  saved = alreadySaved
    ? saved.filter((item) => String(item) !== String(canonicalId))
    : [...saved, canonicalId];
  saveSaved();
  renderJobs();
  toast(alreadySaved ? "Removed from saved opportunities." : "Opportunity saved.");
}

// 5. Job detail and application dialogs.
function openJob(id) {
  const job = jobs.find((item) => String(item.id) === String(id));
  if (!job) return;
  activeJobId = job.id;
  $("#job-detail-content").innerHTML = `
    <p class="eyebrow">OPPORTUNITY DETAILS</p>
    <div class="detail-company"><span class="company-logo" style="--logo-bg:${escapeHTML(job.logoBg)};--logo-color:${escapeHTML(job.logoColor)}">${escapeHTML(job.logo)}</span><div><p>${escapeHTML(job.company)} · <span class="verified">✓ Sample listing</span></p><h2 id="job-modal-title">${escapeHTML(job.title)}</h2></div></div>
    <div class="detail-meta"><span>${escapeHTML(job.type)}</span><span>${escapeHTML(job.location)}</span><span>${escapeHTML(job.mode)}</span><span>${escapeHTML(job.experience)}</span><span>${escapeHTML(job.salary)}</span></div>
    <section class="detail-section"><h3>About the opportunity</h3><p>${escapeHTML(job.description)}</p></section>
    <section class="detail-section"><h3>What you may work on</h3><ul>${job.responsibilities.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul></section>
    <section class="detail-section"><h3>What we're looking for</h3><ul>${job.requirements.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul></section>
    <section class="detail-section"><h3>Relevant skills</h3><p>${job.skills.map(escapeHTML).join(" · ")}</p></section>
    <div class="detail-actions"><button class="view-job" id="detail-save" type="button">${isSaved(job.id) ? "♥ Saved" : "♡ Save opportunity"}</button><button class="apply-submit" id="detail-apply" type="button">Apply in demo <span>↗</span></button></div>`;
  $("#job-modal").hidden = false;
  $("#detail-save").addEventListener("click", () => { toggleSave(job.id); $("#detail-save").textContent = isSaved(job.id) ? "♥ Saved" : "♡ Save opportunity"; });
  $("#detail-apply").addEventListener("click", () => openApply(job.id));
}
function closeJob() { $("#job-modal").hidden = true; }
function openApply(id) {
  const job = jobs.find((item) => String(item.id) === String(id));
  if (!job) return;
  activeJobId = job.id;
  closeJob();
  $("#apply-job-name").textContent = `Applying for: ${job.title} at ${job.company}`;
  $("#apply-form").reset();
  $("#apply-error").textContent = "";
  document.querySelectorAll(".field-error").forEach((field) => { field.textContent = ""; });
  document.querySelectorAll("#apply-form input").forEach((input) => input.removeAttribute("aria-invalid"));
  $("#job-modal").hidden = true;
  $("#apply-modal").hidden = false;
  $("#applicant-name").value = profile.name;
  $("#applicant-email").value = profile.email;
  $("#applicant-name").focus();
}
function closeApply() { $("#apply-modal").hidden = true; }
function validate(input, errorSelector, message, validator) {
  const valid = validator(input.value.trim());
  input.setAttribute("aria-invalid", String(!valid));
  $(errorSelector).textContent = valid ? "" : message;
  return valid;
}

$("#job-list").addEventListener("click", (event) => {
  const saveButton = event.target.closest("[data-save]");
  const viewButton = event.target.closest("[data-view]");
  if (saveButton) toggleSave(saveButton.dataset.save);
  if (viewButton) openJob(viewButton.dataset.view);
});
$("#close-job-modal").addEventListener("click", closeJob);
$("#job-modal").addEventListener("click", (event) => { if (event.target.id === "job-modal") closeJob(); });
$("#close-apply-modal").addEventListener("click", closeApply);
$("#apply-modal").addEventListener("click", (event) => { if (event.target.id === "apply-modal") closeApply(); });
$("#apply-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = $("#applicant-name");
  const email = $("#applicant-email");
  const link = $("#applicant-link");
  const validName = validate(name, "#name-error", "Please enter at least 2 characters.", (value) => value.length >= 2);
  const validEmail = validate(email, "#email-error", "Enter a valid email address.", (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  const validLink = validate(link, "#link-error", "Enter a valid URL or leave this field blank.", (value) => !value || /^https?:\/\/.+\..+/.test(value));
  if (!validName || !validEmail || !validLink) { $("#apply-error").textContent = "Please correct the highlighted fields."; return; }

  const job = jobs.find((item) => String(item.id) === String(activeJobId));
  if (!job) return;
  applications.unshift({ id: Date.now(), jobId: job.id, title: job.title, company: job.company, name: name.value.trim(), email: email.value.trim(), portfolio: link.value.trim(), resumeName: $("#resume-file").files[0]?.name || "Not attached", submittedAt: new Date().toLocaleString() });
  writeStorage(STORAGE.applications, applications);
  notifications.unshift({ id: Date.now() + 1, title: "Demo application saved", detail: `Your local application for ${job.title} is in your profile history.`, read: false });
  writeStorage(STORAGE.notifications, notifications);
  closeApply();
  toast("Demo application saved locally. Nothing was sent to an employer.");
});

// 6. Search and filter controls update the visible list immediately.
function clearFilters() {
  $("#search-form").reset();
  $("#category-filter").value = "all";
  $("#sort-filter").value = "latest";
  document.querySelectorAll(".filter-group input").forEach((input) => { input.checked = false; });
  savedOnly = false;
  page = 1;
  renderJobs();
}
$("#search-form").addEventListener("submit", (event) => { event.preventDefault(); page = 1; renderJobs(); $("#jobs").scrollIntoView({ behavior: "smooth" }); });
["keyword-search", "location-filter", "type-filter", "category-filter", "sort-filter"].forEach((id) => {
  $("#" + id).addEventListener(id === "keyword-search" ? "input" : "change", () => { page = 1; renderJobs(); });
});
document.querySelectorAll(".filter-group input").forEach((input) => input.addEventListener("change", () => { page = 1; renderJobs(); }));
$("#reset-filters").addEventListener("click", clearFilters);
$("#clear-all").addEventListener("click", clearFilters);
$("#empty-reset").addEventListener("click", clearFilters);
$("#previous-page").addEventListener("click", () => { if (page > 1) { page -= 1; renderJobs(); } });
$("#next-page").addEventListener("click", () => { if (page < Math.ceil(getFilteredJobs().length / pageSize)) { page += 1; renderJobs(); } });
$("#saved-shortcut").addEventListener("click", () => {
  savedOnly = !savedOnly;
  page = 1;
  if (savedOnly) {
    $("#keyword-search").value = ""; $("#location-filter").value = "all"; $("#type-filter").value = "all"; $("#category-filter").value = "all";
    document.querySelectorAll(".filter-group input").forEach((input) => { input.checked = false; });
    toast(saved.length ? `Showing ${saved.length} saved opportunities.` : "Your saved list is empty. Save a job with the heart button.");
  } else toast("Showing all opportunities.");
  renderJobs();
  $("#jobs").scrollIntoView({ behavior: "smooth" });
});

// 7. Employer workspace: create and remove locally stored job postings.
function openPortalModal(title, html) {
  $("#portal-modal-title").textContent = title;
  $("#portal-modal-content").innerHTML = html;
  $("#portal-modal-backdrop").hidden = false;
}
function closePortalModal() { $("#portal-modal-backdrop").hidden = true; }
function renderEmployerWorkspace() {
  openPortalModal("Employer workspace", `<p class="portal-note">Create and manage sample job posts. These listings are visible in the public job list in this browser only.</p>
    <form id="employer-job-form" class="portal-form">
      <label>Job title<input name="title" required minlength="3" placeholder="Frontend Developer Intern"></label>
      <label>Company name<input name="company" required minlength="2" placeholder="Your company"></label>
      <div class="portal-form-grid"><label>Category<select name="category"><option>Technology</option><option>Design</option><option>Marketing</option><option>Business</option><option>Data</option></select></label><label>Job type<select name="type"><option>Internship</option><option>Full-time</option><option>Part-time</option><option>Contract</option></select></label><label>Location<input name="location" required placeholder="Dhaka or Remote"></label><label>Work mode<select name="mode"><option>On-site</option><option>Hybrid</option><option>Remote</option></select></label><label>Experience<select name="experience"><option>Student</option><option>Entry level</option><option>1–2 years</option></select></label><label>Salary range<input name="salary" required placeholder="৳10k–15k / month"></label></div>
      <label>Description<textarea name="description" rows="3" required minlength="20" placeholder="Describe the opportunity and what the person will learn or do."></textarea></label>
      <button class="apply-submit" type="submit">Publish demo listing</button>
    </form>
    <h3 class="portal-subheading">Your local job posts (${employerJobs.length})</h3>
    <div class="employer-post-list">${employerJobs.map((job) => `<article><div><strong>${escapeHTML(job.title)}</strong><p>${escapeHTML(job.company)} · ${escapeHTML(job.location)}</p></div><button class="small-action danger-action" data-employer-delete="${escapeHTML(job.id)}" type="button">Delete</button></article>`).join("") || `<p class="portal-note">You have not created a demo listing yet.</p>`}</div>`);
}
$("#employer-link").addEventListener("click", renderEmployerWorkspace);
$("#portal-modal-content").addEventListener("submit", (event) => {
  if (event.target.id !== "employer-job-form") return;
  event.preventDefault();
  const form = event.target;
  const title = form.elements.title.value.trim();
  const company = form.elements.company.value.trim();
  const category = form.elements.category.value;
  const job = {
    id: `employer-${Date.now()}`, title, company, logo: company.charAt(0).toUpperCase(), logoBg: "#eeeaff", logoColor: "#7464d7",
    category, type: form.elements.type.value, location: form.elements.location.value.trim(), mode: form.elements.mode.value,
    experience: form.elements.experience.value, salary: form.elements.salary.value.trim(), posted: "Just posted", featured: true,
    description: form.elements.description.value.trim(), skills: [category, "Communication", "Problem solving"],
    responsibilities: ["Work with the team on the responsibilities described in this listing.", "Share progress and ask questions when needed."],
    requirements: ["Interest in the role and willingness to learn.", "Clear communication and reliable follow-through."], employerPosted: true
  };
  employerJobs.unshift(job);
  jobs = [...seedJobs, ...employerJobs];
  writeStorage(STORAGE.employerJobs, employerJobs);
  notifications.unshift({ id: Date.now() + 2, title: "Job post published", detail: `${title} at ${company} is now visible in your local demo portal.`, read: false });
  writeStorage(STORAGE.notifications, notifications);
  renderJobs();
  renderEmployerWorkspace();
  toast("Demo job post published locally.");
});
$("#portal-modal-content").addEventListener("click", (event) => {
  const remove = event.target.closest("[data-employer-delete]");
  if (!remove) return;
  const id = remove.dataset.employerDelete;
  employerJobs = employerJobs.filter((job) => String(job.id) !== String(id));
  jobs = [...seedJobs, ...employerJobs];
  writeStorage(STORAGE.employerJobs, employerJobs);
  renderJobs();
  renderEmployerWorkspace();
  toast("Demo job post removed.");
});

// 8. Profile and settings modal includes local application history.
function renderProfile() {
  openPortalModal("Profile & settings", `<form id="profile-form" class="portal-form">
      <label>Full name<input name="name" required minlength="2" value="${escapeHTML(profile.name)}"></label>
      <label>Email address<input name="email" type="email" required value="${escapeHTML(profile.email)}"></label>
      <label>Appearance<select name="theme"><option value="light" ${settings.theme === "light" ? "selected" : ""}>Light</option><option value="dark" ${settings.theme === "dark" ? "selected" : ""}>Dark</option></select></label>
      <label class="portal-check"><input name="emailNotifications" type="checkbox" ${settings.emailNotifications ? "checked" : ""}> Enable demo notification preferences</label>
      <label class="portal-check"><input name="showSalary" type="checkbox" ${settings.showSalary ? "checked" : ""}> Show salary ranges on job cards</label>
      <button class="apply-submit" type="submit">Save profile & settings</button>
    </form>
    <h3 class="portal-subheading">My demo applications (${applications.length})</h3>
    <div class="application-history">${applications.map((application) => `<article><strong>${escapeHTML(application.title)}</strong><p>${escapeHTML(application.company)} · ${escapeHTML(application.submittedAt)}</p><small>Applicant: ${escapeHTML(application.name)} · Resume: ${escapeHTML(application.resumeName)}</small></article>`).join("") || `<p class="portal-note">No demo applications have been submitted yet.</p>`}</div>
    <p class="portal-note">Profile details and application history are stored in this browser only. No account is created.</p>`);
}
function renderNotifications() {
  const unread = notifications.filter((item) => !item.read).length;
  $("#notification-count").textContent = unread;
  $("#notification-count").hidden = unread === 0;
  openPortalModal("Notifications", `<div class="notification-toolbar"><p>${unread} unread notification(s)</p><button class="small-action" id="mark-all-read" type="button">Mark all read</button></div>
    <div class="portal-notifications">${notifications.map((item) => `<article class="${item.read ? "read" : "unread"}"><div><strong>${escapeHTML(item.title)}</strong><p>${escapeHTML(item.detail)}</p></div><button class="small-action" data-read-notification="${item.id}" type="button">${item.read ? "Read" : "Mark read"}</button></article>`).join("")}</div>`);
}
$("#profile-shortcut").addEventListener("click", renderProfile);
$("#notification-button").addEventListener("click", renderNotifications);
$("#portal-modal-close").addEventListener("click", closePortalModal);
$("#portal-modal-backdrop").addEventListener("click", (event) => { if (event.target.id === "portal-modal-backdrop") closePortalModal(); });
$("#portal-modal-content").addEventListener("click", (event) => {
  const readButton = event.target.closest("[data-read-notification]");
  if (readButton) { const id = Number(readButton.dataset.readNotification); notifications = notifications.map((item) => item.id === id ? { ...item, read: true } : item); writeStorage(STORAGE.notifications, notifications); renderNotifications(); }
  if (event.target.id === "mark-all-read") { notifications = notifications.map((item) => ({ ...item, read: true })); writeStorage(STORAGE.notifications, notifications); renderNotifications(); toast("Notifications marked as read."); }
});
$("#portal-modal-content").addEventListener("submit", (event) => {
  if (event.target.id !== "profile-form") return;
  event.preventDefault();
  const form = event.target;
  profile = { name: form.elements.name.value.trim(), email: form.elements.email.value.trim() };
  settings = { theme: form.elements.theme.value, emailNotifications: form.elements.emailNotifications.checked, showSalary: form.elements.showSalary.checked };
  writeStorage(STORAGE.profile, profile);
  writeStorage(STORAGE.settings, settings);
  document.body.classList.toggle("dark", settings.theme === "dark");
  $("#profile-shortcut").textContent = profile.name.split(/\s+/).map((part) => part[0]).slice(0, 2).join("").toUpperCase();
  writeStorage(STORAGE.theme, settings.theme);
  closePortalModal();
  renderJobs();
  toast("Profile and settings saved locally.");
});

// 9. Theme, mobile navigation, and initial render.
$("#theme-toggle").addEventListener("click", () => {
  const dark = document.body.classList.toggle("dark");
  settings.theme = dark ? "dark" : "light";
  writeStorage(STORAGE.theme, settings.theme);
  writeStorage(STORAGE.settings, settings);
});
$("#mobile-menu").addEventListener("click", () => {
  const open = $("#main-nav").classList.toggle("mobile-open");
  $("#mobile-menu").setAttribute("aria-expanded", String(open));
});
document.querySelectorAll("#main-nav a").forEach((link) => link.addEventListener("click", () => {
  $("#main-nav").classList.remove("mobile-open");
  $("#mobile-menu").setAttribute("aria-expanded", "false");
}));
document.addEventListener("keydown", (event) => { if (event.key === "Escape") { closeJob(); closeApply(); closePortalModal(); $("#main-nav").classList.remove("mobile-open"); } });
$("#year").textContent = new Date().getFullYear();
if (settings.theme === "dark" || readStorage(STORAGE.theme, "light") === "dark") document.body.classList.add("dark");
saveSaved();
renderJobs();
renderNotificationsCount();

function renderNotificationsCount() {
  const unread = notifications.filter((item) => !item.read).length;
  $("#notification-count").textContent = unread;
  $("#notification-count").hidden = unread === 0;
}
