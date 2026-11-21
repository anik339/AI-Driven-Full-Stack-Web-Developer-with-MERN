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
  class Store {
    #state;
    #listeners = new Set();
    constructor(initialState) { this.#state = initialState; }
    getState() { return { ...this.#state }; }
    subscribe(listener) {
      this.#listeners.add(listener);
      return () => this.#listeners.delete(listener);
    }
    setState(patch) {
      // Replace state instead of mutating the existing object.
      this.#state = { ...this.#state, ...patch };
      this.#listeners.forEach(listener => listener(this.getState()));
    }
  }

  const store = new Store({ theme: "light", count: 0 });
  const unsubscribe = store.subscribe(state => console.log("State changed:", state));
  store.setState({ count: 1 });
  unsubscribe();
  store.setState({ theme: "dark" });
}
