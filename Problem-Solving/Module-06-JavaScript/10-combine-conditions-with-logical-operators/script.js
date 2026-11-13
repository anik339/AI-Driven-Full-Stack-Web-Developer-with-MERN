// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const attendance = 90;
  const examScore = 78;
  const qualifies = attendance >= 80 && examScore >= 70;
  const needsReview = attendance < 80 || examScore < 70;
  output.textContent = `Qualifies: ${qualifies}\nNeeds review: ${needsReview}`;
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
