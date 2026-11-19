// TOPIC 15: FUNCTION PARAMETERS

// Parameters are names in the definition; arguments are passed values.
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Anik"));

// A function can receive multiple parameters.
function addNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
console.log("Addition:", addNumbers(10, 20));

// A default parameter is used when an argument is missing or undefined.
function welcomeUser(name = "Guest") {
    return `Welcome, ${name}.`;
}
console.log(welcomeUser("Anik"));
console.log(welcomeUser());

// I can return an object created from function parameters.
function createProfile(name, age, isStudent) {
    return { name: name, age: age, isStudent: isStudent };
}
const profile = createProfile("Anik", 22, true);

// Rest parameters collect remaining arguments into an array.
function calculateTotal(...prices) {
    return prices.reduce((total, price) => total + price, 0);
}

showSection("Function parameter practice");
showResult("Greeting", greet("Anik"));
showResult("Addition", addNumbers(10, 20));
showResult("Default parameter", welcomeUser());
showResult("Profile", profile);
showResult("Total prices", calculateTotal(100, 200, 300));
showNote("Parameters belong to the function definition. Arguments are the actual values supplied when calling it.");
