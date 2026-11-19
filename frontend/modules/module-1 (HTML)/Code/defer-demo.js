// A deferred external script runs after the HTML has been parsed.
const deferMessage = document.querySelector("#defer-output");
if (deferMessage) {
  deferMessage.textContent = "defer-demo.js ran after the HTML was parsed.";
}
console.log("Deferred script executed.");
