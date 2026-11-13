// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const priceText = "149.50";
  const invalidText = "one hundred";
  const price = Number(priceText);
  const invalid = Number(invalidText);
  output.textContent = `Price: ${price}\nInvalid result: ${invalid}\nIs invalid NaN: ${Number.isNaN(invalid)}`;
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
