// Run the reference example only when the learner clicks the button.
function runExample() {
  const output = document.querySelector("#output");
  const lines = [];
  const originalLog = console.log;
  // Capture console output so it is visible on the learning page.
  console.log = (...values) => lines.push(values.map(value => {
    if (typeof value === "string") return value;
    try { return JSON.stringify(value, null, 2); }
    catch { return String(value); }
  }).join(" "));
  try {
    runSolution();
    output.textContent = lines.join("\n") || "Example completed. Inspect the code for details.";
  } catch (error) {
    output.textContent = `${error.name}: ${error.message}`;
  } finally {
    // Restore the original console so the page remains well-behaved.
    console.log = originalLog;
  }
}

function runSolution() {
  class Person {
    constructor(name) {
      this.name = name;
    }

    describe() {
      return `${this.name} is a person.`;
    }
  }

  class Developer extends Person {
    constructor(name, language) {
      // super must run before using `this` in a derived constructor.
      super(name);
      this.language = language;
    }

    describe() {
      return `${this.name} develops with ${this.language}.`;
    }
  }

  const developer = new Developer("Anik", "JavaScript");
  console.log(developer.describe());
  console.log(developer instanceof Person);
}
