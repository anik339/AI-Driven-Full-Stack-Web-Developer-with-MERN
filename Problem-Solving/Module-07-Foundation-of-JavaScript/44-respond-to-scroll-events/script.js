// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const box = document.createElement("div");
  box.style.height = "120px"; box.style.overflowY = "auto";
  box.style.border = "1px solid #aab8ce"; box.style.padding = "10px";
  const content = document.createElement("div");
  content.style.height = "400px"; content.textContent = "Scroll inside this tall area to see the scroll position.";
  box.append(content); area.replaceChildren(box);
  box.addEventListener("scroll", () => output.textContent = `Scroll position: ${Math.round(box.scrollTop)}px`);
  output.textContent = "Scroll inside the box.";
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
