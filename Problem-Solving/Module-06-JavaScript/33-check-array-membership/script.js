// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const tools = ["VS Code", "Chrome", "Git"];
  output.textContent = `Has Git: ${tools.includes("Git")}\nChrome index: ${tools.indexOf("Chrome")}\nFirefox index: ${tools.indexOf("Firefox")}`;
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
