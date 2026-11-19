const skills = new Set(["HTML", "CSS", "JavaScript", "CSS"]);
skills.add("React");
skills.delete("HTML");
showSection("Set methods");
showResult("Unique skills", [...skills]);
showResult("Has JavaScript", skills.has("JavaScript"));
showResult("Set size", skills.size);
showResult("Set keys", [...skills.keys()]);
showResult("Set entries", [...skills.entries()]);

const left = new Set([1, 2, 3]);
const right = new Set([3, 4, 5]);
// Portable implementations work even where newer Set methods are unavailable.
const union = new Set([...left, ...right]);
const intersection = new Set([...left].filter(value => right.has(value)));
const difference = new Set([...left].filter(value => !right.has(value)));
showResult("Union", [...union]);
showResult("Intersection", [...intersection]);
showResult("Difference (left - right)", [...difference]);

const userRoles = new Map();
userRoles.set("anik", "student");
userRoles.set("mentor", "teacher");
showSection("Map methods");
showResult("Get anik", userRoles.get("anik"));
showResult("Has mentor", userRoles.has("mentor"));
showResult("Map keys", [...userRoles.keys()]);
showResult("Map values", [...userRoles.values()]);
showResult("Map entries", [...userRoles.entries()]);
showResult("Map size", userRoles.size);
userRoles.delete("mentor");
showResult("After delete", [...userRoles]);
showNote("Set stores unique values. Map stores key-value pairs and allows keys of any type. Native Set union/intersection/difference methods are newer; the examples above use portable implementations.");
