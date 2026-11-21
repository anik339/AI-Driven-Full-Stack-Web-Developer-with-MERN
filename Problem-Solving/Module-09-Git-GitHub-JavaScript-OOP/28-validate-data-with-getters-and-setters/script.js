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
  class UserProfile {
    #age = 0;

    constructor(name, age) {
      this.name = name;
      // Reuse the setter so constructor input follows the same rules.
      this.age = age;
    }

    get age() {
      return this.#age;
    }

    set age(value) {
      if (!Number.isInteger(value) || value < 0) {
        throw new TypeError("Age must be a non-negative integer.");
      }
      this.#age = value;
    }

    get label() {
      return `${this.name} (${this.#age})`;
    }
  }

  const user = new UserProfile("Anik", 22);
  user.age = 23;
  console.log(user.label);
}
