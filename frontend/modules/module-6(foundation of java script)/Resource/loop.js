console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);


console.log("this is a loop");
for (let i = 1; i <= 7; i++) { 
	console.log(i);
}


function add(x, a) {
  return x + a;
}                          // declaration — no semicolon

const add2 = function (x, a) {
  return x + a;
}

// assignment statement — semicolon

const add3 = (x, a) => {
	y = x + a;
	return y;
};                         // same, arrow function

console.log(add3(5, 10));
/*
1. for -> for loop
2. let i = 1 -> this is a variable declaration
3. i <= 7 -> is the value of i less than or equal to 7?
4. if the condition is true then execute the code inside the { }
5. when the code is executed then go to for statement: 3
6. i++ -> increment the value of i by 1, which is equal to i = i + 1
7. set this new value of i in statement 1, and check the condition again, if true then execute the code inside the { } and repeat the process until the condition is false 
*/