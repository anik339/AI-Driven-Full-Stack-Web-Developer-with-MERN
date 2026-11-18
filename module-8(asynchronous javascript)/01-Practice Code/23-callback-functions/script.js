function greetUser(name, callback) {
  const message = `Hello, ${name}!`;
  callback(message);
}
function showGreeting(message) {
  showResult("Callback received", message);
}

showSection("Synchronous callback");
greetUser("Anik", showGreeting);

showSection("Asynchronous callback");
function loadDemoData(callback) {
  setTimeout(() => {
    callback(null, { course: "Frontend", status: "ready" });
  }, 400);
}
loadDemoData((error, data) => {
  if (error) {
    showResult("Callback error", error.message);
    return;
  }
  showResult("Callback data", data);
});
showNote("A callback is a function passed into another function. Nested callbacks can become hard to read; Promises and async/await often make asynchronous flows easier to manage.");
