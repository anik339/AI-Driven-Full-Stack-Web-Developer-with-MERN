// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const expenses = [120, 80, 50, 150];
  const total = expenses.reduce((sum, amount) => sum + amount, 0);
  output.textContent = `Total expenses: ${total}`;
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
