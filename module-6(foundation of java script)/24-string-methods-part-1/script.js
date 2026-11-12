// TOPIC 24: STRING METHODS - PART 1

const message = "JavaScript is fun to learn";

// length returns the number of UTF-16 code units.
console.log("Length:", message.length);

// at() reads a character and supports negative indexes.
console.log("First character:", message.at(0));
console.log("Last character:", message.at(-1));

// charAt() reads a character by a non-negative index.
console.log("Character at 4:", message.charAt(4));

// includes(), startsWith(), and endsWith() check text.
console.log("Includes JavaScript:", message.includes("JavaScript"));
console.log("Starts with Java:", message.startsWith("Java"));
console.log("Ends with learn:", message.endsWith("learn"));

// indexOf() finds the first position of matching text.
console.log("Index of fun:", message.indexOf("fun"));

// slice() extracts part of a string and supports negative indexes.
console.log("Slice:", message.slice(0, 10));
console.log("Last word:", message.slice(-5));

// substring() extracts text; negative values are treated as zero.
console.log("Substring:", message.substring(0, 10));

showSection("String methods part 1");
showResult("Length", message.length);
showResult("First character", message.at(0));
showResult("Last character", message.at(-1));
showResult("Includes JavaScript", message.includes("JavaScript"));
showResult("Starts with Java", message.startsWith("Java"));
showResult("Ends with learn", message.endsWith("learn"));
showResult("Slice", message.slice(0, 10));
showResult("Substring", message.substring(0, 10));
showNote("String methods return new strings; they do not change the original string. String indexes start at zero.");
