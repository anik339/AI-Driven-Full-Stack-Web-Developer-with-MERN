// TOPIC 05: PRIMITIVE DATA TYPES

// JavaScript has seven primitive data types.
const studentName = "Anik Dey"; // String
const age = 22; // Number
const average = 85.5; // Number can also store decimals.
const isLearning = true; // Boolean
let futureJob; // Undefined: declared but not assigned.
const selectedCourse = null; // Null: intentionally empty.
const largeNumber = 12345678901234567890n; // BigInt
const userId = Symbol("userId"); // Symbol: unique value.
const anotherUserId = Symbol("userId");

console.log(typeof studentName, typeof age, typeof isLearning);
console.log(typeof futureJob, typeof selectedCourse, typeof largeNumber, typeof userId);
console.log("Are symbols equal?", userId === anotherUserId);

// typeof null returns "object" because of a historical JavaScript quirk.
futureJob = "Junior MERN Developer";
console.log("Future job:", futureJob);

showSection("Primitive data types");
showResult("String", studentName);
showResult("Number", age);
showResult("Boolean", isLearning);
showResult("Undefined before assignment", undefined);
showResult("Null value", selectedCourse);
showResult("BigInt", largeNumber.toString());
showResult("Symbol type", typeof userId);
showResult("Two Symbols are equal", userId === anotherUserId);
showNote("typeof null returns 'object' because of an old JavaScript behaviour. Null is still a primitive value.");
