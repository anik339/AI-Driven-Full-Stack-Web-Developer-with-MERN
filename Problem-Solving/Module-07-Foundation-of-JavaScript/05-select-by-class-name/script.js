// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  area.innerHTML = '<p class="fruit">Apple</p><p class="fruit">Mango</p><p>Carrot</p><p class="fruit">Banana</p>';
  const fruits = area.getElementsByClassName("fruit");
  const names = Array.from(fruits, item => item.textContent);
  output.textContent = `Found ${fruits.length}: ${names.join(", ")}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
