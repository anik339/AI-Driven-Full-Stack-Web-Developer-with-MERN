// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const select = document.createElement("select");
  select.className = "demo-input";
  select.innerHTML = '<option value="">Choose a course</option><option value="html">HTML</option><option value="css">CSS</option><option value="javascript">JavaScript</option>';
  area.replaceChildren(select);
  select.addEventListener("change", () => {
    output.textContent = `Selected course: ${select.value || "Nothing selected"}`;
  });
  output.textContent = "Choose an option from the dropdown.";
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
