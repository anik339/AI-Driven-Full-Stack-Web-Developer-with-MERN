// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const originalUser = { name: "Ava", role: "Student", city: "Dhaka" };
  const updatedUser = { ...originalUser, role: "Junior Developer" };
  output.textContent = `Original: ${originalUser.role}\nUpdated: ${updatedUser.role}\nSame object? ${originalUser === updatedUser}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
