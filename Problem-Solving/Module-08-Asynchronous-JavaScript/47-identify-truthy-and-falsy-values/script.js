// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const values = [
    ["false", false], ["zero", 0], ["empty string", ""],
    ["null", null], ["undefined", undefined], ["NaN", NaN],
    ["empty array", []], ["empty object", {}], ["text", "hello"]
  ];
  output.textContent = values.map(([label, value]) =>
    `${label}: ${Boolean(value) ? "TRUTHY" : "FALSY"}`
  ).join("\n");
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
