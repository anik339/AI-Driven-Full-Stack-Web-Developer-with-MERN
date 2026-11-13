// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  // document is the entry point to the current web page.
  const pageTitle = document.title;
  const rootTag = document.documentElement.tagName;
  const bodyTag = document.body.tagName;
  output.textContent = `Title: ${pageTitle}\nRoot: ${rootTag}\nBody: ${bodyTag}`;
  area.textContent = "HTML is represented in the browser as a DOM tree.";
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
