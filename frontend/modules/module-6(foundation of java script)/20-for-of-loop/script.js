// TOPIC 20: FOR OF LOOP

// for...of reads values from an iterable.
const skills = ["HTML", "CSS", "JavaScript", "React"];
for (const skill of skills) {
    console.log("Skill:", skill);
}

// Strings are iterable character by character.
const myName = "Anik";
for (const letter of myName) {
    console.log("Letter:", letter);
}

// Set values can be read with for...of.
const uniqueNumbers = new Set([10, 20, 20, 30]);
for (const number of uniqueNumbers) {
    console.log("Unique number:", number);
}

// Map gives key-value pairs when iterated.
const userRoles = new Map([["Anik", "Developer"], ["Rahim", "Designer"]]);
for (const [name, role] of userRoles) {
    console.log(`${name}: ${role}`);
}

// A plain object is not iterable by default; use Object.entries().
const user = { name: "Anik", age: 22 };
for (const [key, value] of Object.entries(user)) {
    console.log(key, value);
}

showSection("For...of practice");
showResult("Skills", skills);
showResult("Unique numbers", [...uniqueNumbers]);
showResult("User roles", [...userRoles]);
showResult("Object entries", Object.entries(user));
showNote("for...of gives values. A plain object cannot be used directly with for...of; use Object.entries() or Object.values().");
