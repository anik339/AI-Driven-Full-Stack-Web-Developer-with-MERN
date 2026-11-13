// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
  const input = document.createElement("input"); input.className = "demo-input"; input.placeholder = "Search skills";
  const list = document.createElement("ul"); list.className = "demo-list";
  function render() {
    const query = input.value.trim().toLowerCase();
    const matches = skills.filter(skill => skill.toLowerCase().includes(query));
    list.replaceChildren(...matches.map(skill => {
      const item = document.createElement("li"); item.textContent = skill; return item;
    }));
    output.textContent = `${matches.length} result(s)`;
  }
  input.addEventListener("input", render); area.replaceChildren(input, list); render();
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
