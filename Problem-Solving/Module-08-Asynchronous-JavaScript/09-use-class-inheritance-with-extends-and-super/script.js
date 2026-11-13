// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  class Employee {
    constructor(name) { this.name = name; }
    work() { return `${this.name} is working.`; }
  }
  class Developer extends Employee {
    constructor(name, language) {
      super(name); // Run the parent constructor before using this.
      this.language = language;
    }
    code() { return `${this.name} writes ${this.language}.`; }
  }
  const dev = new Developer("Mia", "JavaScript");
  output.textContent = `${dev.work()}\n${dev.code()}\nIs Employee: ${dev instanceof Employee}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
