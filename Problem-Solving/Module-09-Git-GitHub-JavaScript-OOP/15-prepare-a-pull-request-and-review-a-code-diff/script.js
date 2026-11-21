// This is a browser-side checklist, not a Git command executor.
// Copy the commands from the task guide and run them in your disposable lab.
document.addEventListener("DOMContentLoaded", () => {
  const output = document.querySelector("#output");
  document.querySelector("#run-example").addEventListener("click", () => {
    output.textContent = "Git commands cannot run inside a browser page.\n\n1. Open PowerShell in your separate git-module9-lab repository.\n2. Read the command comments before running each command.\n3. Inspect the result with git status and git log.\n4. Never use the main course repository as a destructive practice sandbox.";
  });
});
