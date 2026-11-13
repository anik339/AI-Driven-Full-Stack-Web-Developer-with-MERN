// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const learnerName = "Anik"; // This value should not be reassigned.
  let currentTopic = "Variables"; // This value may change later.
  currentTopic = "Data Types";
  output.textContent = `${learnerName} is studying ${currentTopic}.`;
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
