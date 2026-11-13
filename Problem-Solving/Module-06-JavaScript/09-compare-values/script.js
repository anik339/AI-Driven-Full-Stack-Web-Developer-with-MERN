// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const scoreA = 85;
  const scoreB = 72;
  output.textContent = `A > B: ${scoreA > scoreB}\nA === B: ${scoreA === scoreB}\nA !== B: ${scoreA !== scoreB}`;
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
