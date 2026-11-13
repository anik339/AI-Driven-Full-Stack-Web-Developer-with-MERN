// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  let attempt = 1;
  const attempts = [];
  do {
    attempts.push(`Attempt ${attempt}`);
    attempt++;
  } while (attempt <= 3);
  output.textContent = attempts.join("\n");
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
