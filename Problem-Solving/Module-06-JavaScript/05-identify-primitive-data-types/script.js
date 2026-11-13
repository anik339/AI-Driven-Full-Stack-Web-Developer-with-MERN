// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const userName = "Mina";
  const age = 24;
  const isLearning = true;
  let futureGoal;
  const emptyValue = null;
  const largeNumber = 9007199254740993n;
  output.textContent = [userName, age, isLearning, futureGoal, emptyValue, largeNumber].map(value => `${String(value)} → ${typeof value}`).join("\n");
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
