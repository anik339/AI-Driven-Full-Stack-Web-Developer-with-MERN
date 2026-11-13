// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const name = "Rafi";
  const course = "JavaScript";
  const lessonNumber = 6;
  output.textContent = `${name} is learning ${course} in lesson ${lessonNumber}.`;
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
