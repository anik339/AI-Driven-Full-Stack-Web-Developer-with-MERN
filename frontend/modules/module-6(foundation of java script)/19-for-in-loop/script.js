// TOPIC 19: FOR IN LOOP

// for...in loops through enumerable property keys.
const student = { name: "Anik", age: 22, course: "JavaScript" };
for (const key in student) {
    console.log(key, ":", student[key]);
}

// Object.hasOwn() checks that a property belongs directly to the object.
for (const key in student) {
    if (Object.hasOwn(student, key)) {
        console.log("Own property:", key);
    }
}

// for...in can read array indexes, but for...of is usually better for values.
const skills = ["HTML", "CSS", "JavaScript"];
for (const index in skills) {
    console.log("Index:", index, "Value:", skills[index]);
}

// Practical example: calculate the total of numeric object values.
const expenses = { food: 500, transport: 200, internet: 800 };
let totalExpense = 0;
for (const category in expenses) {
    totalExpense += expenses[category];
}

showSection("For...in practice");
showResult("Student object", student);
showResult("Skills", skills);
showResult("Total expenses", totalExpense);
showNote("for...in gives property keys. For array values in order, use for...of or array methods.");
