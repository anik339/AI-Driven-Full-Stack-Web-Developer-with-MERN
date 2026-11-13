// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  area.innerHTML = '<h3 id="welcome-title">Old heading</h3>';
  const heading = document.getElementById("welcome-title");
  heading.textContent = "Welcome to JavaScript DOM!";
  output.textContent = `Selected: ${heading.tagName}\nText: ${heading.textContent}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
