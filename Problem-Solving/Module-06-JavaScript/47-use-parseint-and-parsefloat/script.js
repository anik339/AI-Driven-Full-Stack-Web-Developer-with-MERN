// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const whole = parseInt("42px", 10);
  const decimal = parseFloat("19.95 USD");
  output.textContent = `Integer: ${whole}\nDecimal: ${decimal}`;
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
