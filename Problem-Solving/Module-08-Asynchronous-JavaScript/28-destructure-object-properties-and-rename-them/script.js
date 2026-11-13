// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const person = { name: "Maya", role: "Frontend Developer", city: "Dhaka" };
  const { name, role: jobTitle, city } = person;
  output.textContent = `Name: ${name}\nJob title: ${jobTitle}\nCity: ${city}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
