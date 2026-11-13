// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const skills = ["HTML", "CSS", "JavaScript"];
  const lines = [];
  for (const skill of skills) {
    lines.push(`I am learning ${skill}.`);
  }
  output.textContent = lines.join("\n");
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
