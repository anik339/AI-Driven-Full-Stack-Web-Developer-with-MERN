// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const values = ["hello", 42, true, undefined, { id: 1 }, [1, 2], () => "hi"];
  output.textContent = values.map(value => `${String(value)}: ${typeof value}`).join("\n");
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
