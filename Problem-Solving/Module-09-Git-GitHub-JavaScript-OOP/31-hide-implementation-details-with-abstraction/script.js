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
  class ReportExporter {
    // Private method keeps the formatting detail out of the public API.
    #formatRows(rows) {
      return rows.map(row => `${row.name},${row.score}`).join("\n");
    }

    export(rows) {
      if (!Array.isArray(rows)) throw new TypeError("Rows must be an array.");
      // Callers only need to know about export(), not each internal step.
      return this.#formatRows(rows);
    }
  }

  const exporter = new ReportExporter();
  console.log(exporter.export([{ name: "Anik", score: 90 }, { name: "Maya", score: 95 }]));
}
