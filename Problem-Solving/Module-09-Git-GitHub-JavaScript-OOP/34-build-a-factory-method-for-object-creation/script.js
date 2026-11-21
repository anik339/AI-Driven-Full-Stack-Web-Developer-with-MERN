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
  class User {
    constructor({ id, name, role }) {
      this.id = id;
      this.name = name;
      this.role = role;
    }

    // Factory methods describe intent more clearly than raw constructor calls.
    static createGuest() {
      return new User({ id: null, name: "Guest", role: "visitor" });
    }

    static createRegistered(id, name) {
      if (!name.trim()) throw new Error("A registered user needs a name.");
      return new User({ id, name: name.trim(), role: "member" });
    }
  }

  console.log(User.createGuest());
  console.log(User.createRegistered(7, "Maya"));
}
