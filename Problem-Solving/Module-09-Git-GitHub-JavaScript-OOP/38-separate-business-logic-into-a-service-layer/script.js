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
  const repository = {
    users: [],
    save(user) { this.users.push(user); return user; }
  };

  class RegistrationService {
    constructor(userRepository) { this.repository = userRepository; }

    register(input) {
      // Business rules belong in the service, not in the storage adapter.
      const name = String(input.name ?? "").trim();
      const email = String(input.email ?? "").trim().toLowerCase();
      if (name.length < 2) throw new Error("Name must contain at least 2 characters.");
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) throw new Error("Enter a valid email.");
      return this.repository.save({ id: this.repository.users.length + 1, name, email });
    }
  }

  const service = new RegistrationService(repository);
  console.log(service.register({ name: "Anik", email: "ANIK@example.com" }));
}
