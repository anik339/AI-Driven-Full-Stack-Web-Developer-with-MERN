// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const image = document.createElement("img");
  image.setAttribute("alt", "A sample landscape image");
  image.setAttribute("src", "https://placehold.co/240x100?text=Sample");
  area.replaceChildren(image);
  output.textContent = `Alt attribute: ${image.getAttribute("alt")}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
