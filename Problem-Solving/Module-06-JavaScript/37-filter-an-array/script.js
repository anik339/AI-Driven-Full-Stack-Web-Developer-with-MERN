// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const scores = [35, 72, 48, 90, 55];
  const passed = scores.filter(score => score >= 50);
  output.textContent = `Passed scores: ${passed.join(", ")}`;
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
