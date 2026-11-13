// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const userOne = { name: "Maya", address: { city: "Dhaka" } };
  const userTwo = { name: "Rafi" };
  const cityOne = userOne.address?.city ?? "City not available";
  const cityTwo = userTwo.address?.city ?? "City not available";
  output.textContent = `${userOne.name}: ${cityOne}\n${userTwo.name}: ${cityTwo}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
