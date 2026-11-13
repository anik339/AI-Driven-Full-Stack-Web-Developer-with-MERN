// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const skills = ["HTML", "CSS", "JavaScript", "React"];
  const list = document.createElement("ul");
  skills.forEach(skill => {
    const item = document.createElement("li");
    item.textContent = skill;
    list.append(item);
  });
  area.replaceChildren(list);
  output.textContent = `Rendered ${list.children.length} skills.`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
