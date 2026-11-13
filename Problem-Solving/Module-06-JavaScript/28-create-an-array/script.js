// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const skills = ["HTML", "CSS", "JavaScript", "React"];
  output.textContent = `Skills: ${skills.join(", ")}\nCount: ${skills.length}`;
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
