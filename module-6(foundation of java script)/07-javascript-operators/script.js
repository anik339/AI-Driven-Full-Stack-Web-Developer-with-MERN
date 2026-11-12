// TOPIC 07: JAVASCRIPT OPERATORS

// Arithmetic operators perform calculations.
const a = 20, b = 6;
showResult("Addition", a + b);
showResult("Subtraction", a - b);
showResult("Multiplication", a * b);
showResult("Division", a / b);
showResult("Remainder", a % b);
showResult("Power", 2 ** 3);

// Assignment operators update a variable.
let score = 10;
score += 5;
score *= 2;
showResult("Score after += 5 and *= 2", score);

// Comparison operators return true or false.
showResult("10 == '10'", 10 == "10");
showResult("10 === '10'", 10 === "10");
showResult("10 > 5", 10 > 5);

// Logical operators combine conditions.
const isLoggedIn = true, isAdmin = false;
showResult("Logged in AND admin", isLoggedIn && isAdmin);
showResult("Logged in OR admin", isLoggedIn || isAdmin);
showResult("NOT logged in", !isLoggedIn);

// Increment and decrement change a number by one.
let counter = 5;
showResult("Post-increment returns old value", counter++);
showResult("Counter after increment", counter);
showResult("Pre-decrement returns new value", --counter);

// Ternary is a short form of a simple if...else.
const marks = 75;
showResult("Exam result", marks >= 40 ? "Passed" : "Failed");
showResult("typeof marks", typeof marks);

// Nullish coalescing uses a fallback only for null or undefined.
const stock = 0;
showResult("Stock with ??", stock ?? 10);
showResult("Stock with ||", stock || 10);

// Optional chaining safely accesses a possibly missing property.
const user = { profile: { city: "Chattogram" } };
showResult("User city", user.profile?.city);
showResult("Missing phone", user.profile?.phone);

// Spread expands values; rest collects arguments into an array.
const skills = ["HTML", "CSS", "JavaScript"];
const moreSkills = [...skills, "React"];
function addAll(...numbers) { return numbers.reduce((sum, number) => sum + number, 0); }
showResult("Skills with spread", moreSkills);
showResult("Sum with rest", addAll(10, 20, 30));

// Bitwise operators work with binary representations.
showResult("5 & 1", 5 & 1);
showResult("5 | 1", 5 | 1);
showResult("10 + 5 * 2", 10 + 5 * 2);
showResult("(10 + 5) * 2", (10 + 5) * 2);
showNote("Prefer === over == in most application code. Use parentheses when an expression is difficult to read.");
