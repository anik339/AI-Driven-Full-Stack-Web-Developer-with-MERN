// TOPIC 25: STRING METHODS - PART 2

// I am creating a string with extra spaces.
const rawName = "   anik dey   ";

// Convert text to upper or lower case.
console.log("Uppercase:", rawName.toUpperCase());
console.log("Lowercase:", rawName.toLowerCase());

// trim() removes spaces from both ends.
const cleanName = rawName.trim();
console.log("Trimmed name:", cleanName);
console.log("Trim start:", rawName.trimStart());
console.log("Trim end:", rawName.trimEnd());

// replace() replaces the first match; replaceAll() replaces every match.
const sentence = "I like HTML. HTML is useful.";
console.log("Replace first:", sentence.replace("HTML", "JavaScript"));
console.log("Replace all:", sentence.replaceAll("HTML", "JavaScript"));

// split() turns a string into an array.
const skillsText = "HTML,CSS,JavaScript,React";
const skills = skillsText.split(",");

// concat(), padStart(), padEnd(), and repeat() create new strings.
const fullName = "Anik".concat(" ", "Dey");
const invoiceNumber = "42";
const paddedInvoice = invoiceNumber.padStart(5, "0");
const repeatedText = "Hi! ".repeat(3);

// match() finds matches using a regular expression.
const text = "Order 123 and order 456";
const foundNumbers = text.match(/\d+/g);

showSection("String methods part 2");
showResult("Clean name", cleanName);
showResult("Uppercase", cleanName.toUpperCase());
showResult("Replace all", sentence.replaceAll("HTML", "JavaScript"));
showResult("Skills array", skills);
showResult("Full name", fullName);
showResult("Padded invoice", paddedInvoice);
showResult("Repeated text", repeatedText);
showResult("Numbers found", foundNumbers);
showNote("Strings are immutable. Methods such as trim(), replace(), and toUpperCase() return a new string.");
