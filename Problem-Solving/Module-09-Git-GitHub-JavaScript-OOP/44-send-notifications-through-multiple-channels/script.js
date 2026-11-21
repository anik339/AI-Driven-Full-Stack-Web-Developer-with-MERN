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
  class EmailChannel {
    send(message) { return `Email sent: ${message}`; }
  }
  class SMSChannel {
    send(message) { return `SMS sent: ${message}`; }
  }
  class ConsoleChannel {
    send(message) { return `Console notice: ${message}`; }
  }
  class NotificationService {
    constructor(channel) { this.channel = channel; }
    notify(message) {
      // The service relies on the send() contract, not a concrete channel.
      return this.channel.send(message);
    }
  }

  [new EmailChannel(), new SMSChannel(), new ConsoleChannel()].forEach(channel => {
    console.log(new NotificationService(channel).notify("Build completed"));
  });
}
