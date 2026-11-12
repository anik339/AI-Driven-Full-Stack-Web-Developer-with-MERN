let score = 75;

// && -> and
// || -> or

/*
this is a ostad class
here we are learning about logical operators in javascript
*/

if (score > 100 || score < 0) {
	console.log("Invalid score");
} else {
	if (score >= 90) {
		console.log("Your grade is:A");
	} else if (score >= 80) {
		console.log("Your grade is:B");
	} else if (score >= 70) {
		console.log("Your grade is:C");
	} else if (score >= 60) {
		console.log("Your grade is:D");
	} else if (score >= 50) {
		console.log("Your grade is:E");
	} else {
		console.log("Your grade is:F");
	}
}
