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
  class EmailNotification {
    constructor(address) { this.address = address; }
    send(message) {
      return `Email to ${this.address}: ${message}`;
    }
  }

  class SMSNotification {
    constructor(phone) { this.phone = phone; }
    send(message) {
      return `SMS to ${this.phone}: ${message}`;
    }
  }

  // The caller depends on the send() contract, not a concrete class.
  function deliver(notification, message) {
    console.log(notification.send(message));
  }

  deliver(new EmailNotification("user@example.com"), "Your order shipped.");
  deliver(new SMSNotification("+8801000000000"), "Your order shipped.");
}
