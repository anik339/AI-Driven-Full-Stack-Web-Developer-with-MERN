// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  // This is a fixed, trusted string. Never insert untrusted user input this way.
  area.innerHTML = "<strong>Important:</strong> <span>HTML was created.</span>";
  const strong = area.querySelector("strong");
  output.textContent = `Created tag: ${strong.tagName}\nText: ${area.textContent}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
