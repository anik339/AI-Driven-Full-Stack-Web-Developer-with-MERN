// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const frontend = ["HTML", "CSS"];
  const backend = ["Node.js", "MongoDB"];
  const allSkills = [...frontend, ...backend];
  const copiedSkills = [...allSkills, "React"];
  output.textContent = `Merged: ${allSkills.join(", ")}\nCopy: ${copiedSkills.join(", ")}\nOriginal length: ${allSkills.length}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
