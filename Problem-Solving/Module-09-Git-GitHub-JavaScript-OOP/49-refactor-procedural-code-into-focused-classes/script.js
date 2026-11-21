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
  class UserValidator {
    validate(input) {
      const name = String(input.name ?? "").trim();
      if (name.length < 2) throw new Error("Name is required");
      return { ...input, name };
    }
  }
  class UserRepository {
    users = [];
    save(user) { this.users.push(user); return user; }
  }
  class UserService {
    constructor(validator, repository) {
      this.validator = validator;
      this.repository = repository;
    }
    register(input) {
      const validUser = this.validator.validate(input);
      return this.repository.save(validUser);
    }
  }

  const repository = new UserRepository();
  const service = new UserService(new UserValidator(), repository);
  const user = service.register({ id: 1, name: "  Anik  " });
  console.log(`Registered ${user.name}; total users: ${repository.users.length}`);
}
