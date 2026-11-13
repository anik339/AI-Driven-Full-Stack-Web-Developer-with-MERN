// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const link = document.createElement("a");
  link.textContent = "Open example website";
  link.setAttribute("href", "https://example.com");
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
  area.replaceChildren(link);
  output.textContent = `href: ${link.getAttribute("href")}\ntarget: ${link.getAttribute("target")}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
