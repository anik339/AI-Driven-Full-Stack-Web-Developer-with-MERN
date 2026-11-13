// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const dayNumber = 3;
  let dayName;
  switch (dayNumber) {
    case 1: dayName = "Monday"; break;
    case 2: dayName = "Tuesday"; break;
    case 3: dayName = "Wednesday"; break;
    case 4: dayName = "Thursday"; break;
    case 5: dayName = "Friday"; break;
    default: dayName = "Weekend or invalid day";
  }
  output.textContent = dayName;
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
