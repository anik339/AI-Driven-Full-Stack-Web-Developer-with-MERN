// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const car = {
    brand: "Toyota",
    model: "Corolla",
    describe() {
      return `${this.brand} ${this.model}`;
    }
  };
  output.textContent = car.describe();
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
