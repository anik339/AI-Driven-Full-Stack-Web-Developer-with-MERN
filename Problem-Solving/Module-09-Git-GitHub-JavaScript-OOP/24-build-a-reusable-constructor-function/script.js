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
  // Constructor functions are called with `new` to create instances.
  function Developer(name, role) {
    this.name = name;
    this.role = role;
  }

  // Define the method once on the prototype instead of per instance.
  Developer.prototype.introduce = function () {
    return `${this.name} works as a ${this.role}.`;
  };

  const anik = new Developer("Anik", "Frontend Developer");
  const maya = new Developer("Maya", "Backend Developer");
  console.log(anik.introduce());
  console.log(maya.introduce());
  console.log("Shared method:", anik.introduce === maya.introduce);
}
