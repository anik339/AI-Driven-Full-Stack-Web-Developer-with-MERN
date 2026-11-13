// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const rawName = "   anik rahman   ";
  const cleanName = rawName.trim();
  const label = cleanName.replace("anik", "Anik");
  output.textContent = `Clean: ${cleanName}\nLabel: ${label}\nFirst four: ${label.slice(0, 4)}`;
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
