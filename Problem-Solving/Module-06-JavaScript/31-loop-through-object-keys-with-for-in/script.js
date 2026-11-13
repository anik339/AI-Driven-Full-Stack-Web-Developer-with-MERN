// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const profile = { name: "Ava", role: "Developer", city: "Dhaka" };
  const lines = [];
  for (const key in profile) {
    lines.push(`${key}: ${profile[key]}`);
  }
  output.textContent = lines.join("\n");
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
