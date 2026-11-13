// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  function calculateArea(width, height) {
    return width * height;
  }
  const areaValue = calculateArea(8, 5);
  output.textContent = `Area: ${areaValue}`;
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
