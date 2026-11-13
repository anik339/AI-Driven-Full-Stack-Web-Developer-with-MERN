// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  area.innerHTML = "<p>First</p><h3>Heading</h3><p>Second</p>";
  const paragraphs = area.getElementsByTagName("p");
  output.textContent = `Paragraph count: ${paragraphs.length}\n${Array.from(paragraphs, p => p.textContent).join("\n")}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
