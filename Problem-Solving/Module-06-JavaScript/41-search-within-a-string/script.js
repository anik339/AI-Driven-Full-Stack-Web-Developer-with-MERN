// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const sentence = "I practise JavaScript every day.";
  output.textContent = `Contains JavaScript: ${sentence.includes("JavaScript")}\nStarts with I: ${sentence.startsWith("I")}\nEnds with day: ${sentence.endsWith("day.")}`;
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
