// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const user = { name: "Anik", skill: "JavaScript", level: "Beginner" };
  localStorage.setItem("practice-user", JSON.stringify(user));
  const savedText = localStorage.getItem("practice-user");
  const restoredUser = JSON.parse(savedText);
  output.textContent = `Name: ${restoredUser.name}\nSkill: ${restoredUser.skill}\nLevel: ${restoredUser.level}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
