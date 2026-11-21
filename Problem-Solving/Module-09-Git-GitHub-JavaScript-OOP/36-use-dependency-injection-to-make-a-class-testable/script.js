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
  // The service knows the repository contract, not how data is stored.
  class GreetingService {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }

    greetUser(id) {
      const user = this.userRepository.findById(id);
      if (!user) return "User not found";
      return `Welcome back, ${user.name}!`;
    }
  }

  // This in-memory fake is a test double for a future database repository.
  const fakeRepository = {
    findById(id) {
      return id === 1 ? { id: 1, name: "Anik" } : null;
    }
  };

  const service = new GreetingService(fakeRepository);
  console.log(service.greetUser(1));
  console.log(service.greetUser(99));
}
