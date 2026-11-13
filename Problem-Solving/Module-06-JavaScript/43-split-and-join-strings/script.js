// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const csv = "HTML,CSS,JavaScript,React";
  const topics = csv.split(",");
  const formatted = topics.join(" | ");
  output.textContent = `Items: ${topics.length}\n${formatted}`;
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
