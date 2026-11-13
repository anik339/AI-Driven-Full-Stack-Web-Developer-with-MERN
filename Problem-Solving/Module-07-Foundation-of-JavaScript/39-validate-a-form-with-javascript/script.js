// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const form = document.createElement("form");
  const name = document.createElement("input");
  name.className = "demo-input"; name.placeholder = "Name"; name.required = true;
  const email = document.createElement("input");
  email.className = "demo-input"; email.placeholder = "Email"; email.type = "email"; email.required = true;
  const button = document.createElement("button");
  button.className = "demo-button"; button.textContent = "Validate";
  form.append(name, email, button); area.replaceChildren(form);
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!name.value.trim()) { output.textContent = "Please enter your name."; name.focus(); return; }
    if (!email.checkValidity()) { output.textContent = "Please enter a valid email."; email.focus(); return; }
    output.textContent = `Valid form. Welcome ${name.value.trim()}!`;
  });
  output.textContent = "Complete both fields and submit.";
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
