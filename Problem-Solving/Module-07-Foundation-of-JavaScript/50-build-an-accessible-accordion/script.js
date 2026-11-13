// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const button = document.createElement("button");
  button.className = "demo-button"; button.textContent = "What is JavaScript?";
  button.setAttribute("aria-expanded", "false");
  const panel = document.createElement("div"); panel.className = "demo-card";
  panel.textContent = "JavaScript is a programming language used to make web pages interactive.";
  panel.hidden = true;
  button.addEventListener("click", () => {
    const willOpen = panel.hidden;
    panel.hidden = !willOpen;
    button.setAttribute("aria-expanded", String(willOpen));
    output.textContent = willOpen ? "Accordion opened." : "Accordion closed.";
  });
  area.replaceChildren(button, panel);
  output.textContent = "Click the question to open or close the answer.";
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
