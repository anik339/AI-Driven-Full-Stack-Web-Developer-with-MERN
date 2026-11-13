// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  // This is a single-line comment.
  /* This is a multi-line comment.
     It can explain a group of related lines. */
  const topic = "Comments";
  output.textContent = `Topic: ${topic}\nComments are not executed.`;
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
