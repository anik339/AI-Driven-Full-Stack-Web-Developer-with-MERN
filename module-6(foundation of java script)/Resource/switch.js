/*
1. take input as grade letter
2. check which grade letter is given
3. print the range of marks for that grade letter
*/

let grade = "g";

switch (grade) { 
	case "A":
		console.log("Your marks are between 90-100");
		break;
	case "B":
		console.log("Your marks are between 80-89");
		break;
	case "C":
		console.log("Your marks are between 70-79");
		break;
	case "D":
		console.log("Your marks are between 60-69");
		break;
	case "E":
		console.log("Your marks are between 50-59");
		break;
	case "F":
		console.log("Your marks are below 50");
		break;
	default:
		console.log("Invalid grade letter");
}


