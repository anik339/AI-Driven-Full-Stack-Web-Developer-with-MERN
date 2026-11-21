// TOPIC 02: document.write() AND console.log()

// console.log() prints a message in the browser Console.
console.log("Hello World!");

// I am storing information about my learning.
const myName = "Anik Dey";
const myRole = "Junior Web Developer";
const myCourse = "Full Stack Web Development with MERN";

// I am printing values in the Console.
console.log("My name is " + myName + ".");
console.log("I am a " + myRole + ".");
console.info("Course: " + myCourse);
console.warn("This is an example warning.");
console.error("This is an example error message.");

// console.table() displays object properties in a table.
const student = { name: myName, role: myRole, course: myCourse };
console.table(student);

// document.write() can write HTML while the page is loading.
// Avoid using it in normal projects; after page load it can replace the page.
// Example only: document.write("<p>Hello from document.write()</p>");

// For normal webpages, I select an element and update its text.
const message = document.getElementById("output-message");
message.textContent = "I displayed this message using textContent.";

showSection("Output methods");
showResult("Name", myName);
showResult("Role", myRole);
showResult("Course", myCourse);
showResult("HTML element text", message.textContent);
showNote("Open Console to see log, info, warning, error, and table examples. Prefer textContent or DOM methods in real projects.");
