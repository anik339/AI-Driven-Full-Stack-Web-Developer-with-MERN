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
  class EventEmitter {
    #listeners = new Map();

    on(eventName, callback) {
      // Each event stores a set so the same callback is not registered twice.
      if (!this.#listeners.has(eventName)) this.#listeners.set(eventName, new Set());
      this.#listeners.get(eventName).add(callback);
      return () => this.off(eventName, callback); // Return an unsubscribe function.
    }

    emit(eventName, payload) {
      this.#listeners.get(eventName)?.forEach(callback => callback(payload));
    }

    off(eventName, callback) {
      this.#listeners.get(eventName)?.delete(callback);
    }
  }

  const bus = new EventEmitter();
  const logOrder = order => console.log(`Order received: ${order.id}`);
  const showToast = order => console.log(`Toast: ${order.status}`);
  const unsubscribe = bus.on("order:created", logOrder);
  bus.on("order:created", showToast);
  bus.emit("order:created", { id: 101, status: "created" });
  unsubscribe();
  bus.emit("order:created", { id: 102, status: "created" });
}
