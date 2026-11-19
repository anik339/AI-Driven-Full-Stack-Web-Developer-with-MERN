// TOPIC 18: JAVASCRIPT ARRAY

// An array stores an ordered list of values.
const skills = ["HTML", "CSS", "JavaScript", "React"];

// Array indexes start at zero.
console.log("First skill:", skills[0]);
console.log("Second skill:", skills[1]);

// length tells me the number of elements.
console.log("Number of skills:", skills.length);

// I can update an element by its index.
skills[1] = "Tailwind CSS";

// I can add an item at the end.
skills.push("Node.js");

// I can read the last element using length.
console.log("Last skill:", skills[skills.length - 1]);

// Arrays can contain different data types.
const mixedValues = ["Anik", 22, true, null];

// An array can contain another array.
const matrix = [[1, 2], [3, 4]];

showSection("Array practice");
showResult("Updated skills", skills);
showResult("Array length", skills.length);
showResult("Last skill", skills[skills.length - 1]);
showResult("Mixed values", mixedValues);
showResult("Nested array value", matrix[1][0]);
showResult("Is skills an array", Array.isArray(skills));
showNote("Array indexes start at 0. length is the number of elements, not the index of the last element.");
