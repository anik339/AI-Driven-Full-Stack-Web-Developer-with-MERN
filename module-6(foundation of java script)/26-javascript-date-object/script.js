// TOPIC 26: JAVASCRIPT DATE OBJECT

// new Date() creates a date for the current moment.
const now = new Date();
console.log("Current date:", now);

// Numeric month indexes start at zero: January is 0, December is 11.
const birthday = new Date(2004, 0, 15);
console.log("Birthday:", birthday);

// Read date parts.
console.log("Year:", now.getFullYear());
console.log("Month number:", now.getMonth() + 1);
console.log("Day of month:", now.getDate());
console.log("Day of week (0 = Sunday):", now.getDay());

// Read time parts.
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());

// getTime() returns milliseconds since 1 January 1970 UTC.
const timestamp = now.getTime();
console.log("Timestamp:", timestamp);
console.log("Current timestamp:", Date.now());

// I can update a date object.
const eventDate = new Date(2026, 10, 12);
eventDate.setDate(eventDate.getDate() + 7);

// Intl.DateTimeFormat formats dates for a locale.
const formattedDate = new Intl.DateTimeFormat("en-BD", { dateStyle: "full" }).format(now);

showSection("Date object practice");
showResult("Current date", now.toString());
showResult("Birthday", birthday.toDateString());
showResult("Year", now.getFullYear());
showResult("Month", now.getMonth() + 1);
showResult("Timestamp", timestamp);
showResult("Event date after seven days", eventDate.toDateString());
showResult("Formatted date", formattedDate);
showNote("Numeric Date months are zero-based. Date and time values can depend on the user's local timezone.");
