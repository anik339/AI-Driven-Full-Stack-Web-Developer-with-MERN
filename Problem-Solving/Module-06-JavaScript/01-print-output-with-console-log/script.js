// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const message = "Hello, JavaScript!";
  console.log(message); // The same value appears in DevTools Console.
  output.textContent = message;
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
