// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  class Student {
    constructor(name, course) {
      this.name = name; this.course = course;
    }
    introduce() { return `${this.name} is studying ${this.course}.`; }
  }
  const one = new Student("Ava", "JavaScript");
  const two = new Student("Noah", "React");
  output.textContent = `${one.introduce()}\n${two.introduce()}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
