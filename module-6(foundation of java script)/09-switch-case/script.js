// TOPIC 09: SWITCH CASE

// switch is useful when one value has several exact possible matches.
const dayNumber = 3;
let dayName;
switch (dayNumber) {
    case 1: dayName = "Monday"; break;
    case 2: dayName = "Tuesday"; break;
    case 3: dayName = "Wednesday"; break;
    case 4: dayName = "Thursday"; break;
    case 5: dayName = "Friday"; break;
    case 6: dayName = "Saturday"; break;
    case 7: dayName = "Sunday"; break;
    default: dayName = "Invalid day number";
}
console.log("Day:", dayName);

// Grouped cases can share the same result.
const day = "Saturday";
let dayType;
switch (day) {
    case "Saturday":
    case "Sunday":
        dayType = "Weekend";
        break;
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        dayType = "Working day";
        break;
    default:
        dayType = "Unknown day";
}

// switch uses strict matching, so a number and string are different.
const selectedOption = "2";
let optionMessage;
switch (selectedOption) {
    case 1: optionMessage = "Number one selected"; break;
    case "2": optionMessage = "String two selected"; break;
    default: optionMessage = "No matching option";
}

// Practical example: a simple menu.
const menuChoice = "profile";
let menuMessage;
switch (menuChoice) {
    case "home": menuMessage = "Opening home page."; break;
    case "profile": menuMessage = "Opening user profile."; break;
    case "settings": menuMessage = "Opening settings."; break;
    default: menuMessage = "Page not found.";
}

showSection("Switch case practice");
showResult("Day name", dayName);
showResult("Day type", dayType);
showResult("Selected option", optionMessage);
showResult("Menu action", menuMessage);
showNote("break stops fall-through. Use switch for exact choices and if...else for ranges or complex conditions.");
