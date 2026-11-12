// TOPIC 16: FUNCTION RETURN

// return sends a value back to the place where the function was called.
function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
const sum = add(10, 20);

// A function can return a string.
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

// A function without return gives undefined.
function showMessage() {
    console.log("This function only prints a message.");
}
const messageResult = showMessage();

// Early return stops a function when a condition is met.
function checkAge(age) {
    if (age < 0) return "Age cannot be negative.";
    if (age < 18) return "Not eligible.";
    return "Eligible.";
}

// A function can return an object.
function createUser(name, role) {
    return { name: name, role: role, isActive: true };
}
const user = createUser("Anik", "Junior Developer");

showSection("Function return practice");
showResult("Addition result", sum);
showResult("Full name", getFullName("Anik", "Dey"));
showResult("Missing return result", messageResult);
showResult("Age check", checkAge(22));
showResult("Created user", user);
showNote("return ends the current function. Code after return will not run in that execution path.");
