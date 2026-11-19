// TOPIC 10: BASIC FOR LOOP

// A for loop has initialization, condition, and update.
for (let i = 1; i <= 5; i++) {
    console.log("Counting:", i);
}

// I am adding numbers from 1 to 5.
let total = 0;
for (let number = 1; number <= 5; number++) {
    total += number;
}
console.log("Sum from 1 to 5:", total);

// I am printing the multiplication table of 5.
const tableNumber = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}

// A nested loop is a loop inside another loop.
for (let row = 1; row <= 3; row++) {
    let rowText = "";
    for (let column = 1; column <= 3; column++) {
        rowText += "* ";
    }
    console.log(rowText);
}

// I am using a for loop to read array values by index.
const skills = ["HTML", "CSS", "JavaScript", "React"];
for (let index = 0; index < skills.length; index++) {
    console.log(`Skill ${index + 1}: ${skills[index]}`);
}

showSection("For loop practice");
showResult("Sum from 1 to 5", total);
showResult("Multiplication table number", tableNumber);
showResult("Skills", skills);
showNote("The condition is checked before each repetition. Make sure the update moves the loop toward its stopping condition.");
