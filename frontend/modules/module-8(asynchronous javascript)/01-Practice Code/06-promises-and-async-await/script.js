// A Promise represents a result that may arrive in the future.
const wait = (label, ms, fail = false) =>
  new Promise((resolve, reject) => setTimeout(() =>
    fail ? reject(new Error(label + " failed")) : resolve(label + " completed"), ms));

const out = document.querySelector("#out");
document.querySelector("#run").addEventListener("click", () => {
  out.textContent = "Promise pending…";
  wait("Promise task", 600)
    .then(message => { out.textContent = message; })
    .catch(error => { out.textContent = error.message; })
    .finally(() => console.log("Promise chain finished."));
});

document.querySelector("#async").addEventListener("click", async () => {
  out.textContent = "Awaiting…";
  try {
    const message = await wait("Async task", 600);
    out.textContent = message;
  } catch (error) {
    out.textContent = error.message;
  } finally {
    console.log("Async function finished.");
  }
});

document.querySelector("#all").addEventListener("click", async () => {
  out.textContent = "Running tasks concurrently…";
  try {
    const results = await Promise.all([
      wait("A", 400), wait("B", 700), wait("C", 500)
    ]);
    out.textContent = results.join(" | ");
  } catch (error) { out.textContent = error.message; }
});

// all() rejects on a rejection; allSettled() waits for every result.
// race() returns the first settled result; any() returns the first fulfilled result.
