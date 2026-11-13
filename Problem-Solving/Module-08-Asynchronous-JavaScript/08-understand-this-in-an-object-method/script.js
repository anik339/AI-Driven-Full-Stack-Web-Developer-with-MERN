// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const user = {
    name: "Jordan",
    role: "Developer",
    introduce() {
      // When called as user.introduce(), this refers to user.
      return `I am ${this.name}, a ${this.role}.`;
    }
  };
  output.textContent = user.introduce();
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
