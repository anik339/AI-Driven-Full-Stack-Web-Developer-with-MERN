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
  const VALID_STATUSES = new Set(["todo", "doing", "done"]);
  class Task {
    constructor(id, title) {
      this.id = id;
      this.title = title.trim();
      this.status = "todo";
    }
    moveTo(status) {
      if (!VALID_STATUSES.has(status)) throw new Error(`Unknown status: ${status}`);
      this.status = status;
    }
  }
  class TaskBoard {
    #tasks = new Map();
    add(task) {
      if (this.#tasks.has(task.id)) throw new Error("Duplicate task ID");
      this.#tasks.set(task.id, task);
    }
    moveTask(id, status) {
      const task = this.#tasks.get(id);
      if (!task) throw new Error("Task not found");
      task.moveTo(status);
    }
    countByStatus(status) {
      return [...this.#tasks.values()].filter(task => task.status === status).length;
    }
  }
  const board = new TaskBoard();
  board.add(new Task(1, "Learn OOP"));
  board.moveTask(1, "doing");
  console.log("Doing:", board.countByStatus("doing"));
}
