const status = document.querySelector("#status");
const buttons = document.querySelectorAll("button");

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

async function run(shouldFail) {
  buttons.forEach((button) => { button.disabled = true; });
  status.textContent = "Working…";

  try {
    await wait(700);
    if (shouldFail) throw new Error("The simulated operation failed.");
    status.textContent = "Success: operation completed.";
  } catch (error) {
    status.textContent = `Handled error: ${error.message}`;
    console.error(error);
  } finally {
    buttons.forEach((button) => { button.disabled = false; });
  }
}

document.querySelector("#success").addEventListener("click", () => run(false));
document.querySelector("#failure").addEventListener("click", () => run(true));