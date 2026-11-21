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
  // A repository owns data access behavior.
  const userRepository = {
    users: [],
    save(user) { this.users.push(user); return user; }
  };

  // A logger is another small collaborator.
  const logger = {
    info(message) { console.log(`[INFO] ${message}`); }
  };

  // UserService composes both dependencies rather than inheriting from them.
  class UserService {
    constructor(repository, log) {
      this.repository = repository;
      this.log = log;
    }

    register(user) {
      const saved = this.repository.save(user);
      this.log.info(`Registered ${saved.name}`);
      return saved;
    }
  }

  const service = new UserService(userRepository, logger);
  service.register({ id: 1, name: "Anik" });
  console.log("Saved users:", userRepository.users.length);
}
