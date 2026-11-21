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
  // A class describes the data and behavior shared by its instances.
  class Course {
    constructor(title, durationWeeks) {
      this.title = title;
      this.durationWeeks = durationWeeks;
    }

    // Instance methods are shared through Course.prototype.
    getSummary() {
      return `${this.title} — ${this.durationWeeks} weeks`;
    }
  }

  const javascript = new Course("JavaScript and OOP", 4);
  const git = new Course("Git and GitHub", 2);
  console.log(javascript.getSummary());
  console.log(git.getSummary());
  console.log(javascript instanceof Course);
}
