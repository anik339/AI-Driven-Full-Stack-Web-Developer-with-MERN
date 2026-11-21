const student = { name: "Anik", course: "JavaScript", hasOwnProperty: "This key shadows the method" };
const prototype = { inheritedRole: "Learner" };
const profile = Object.assign(Object.create(prototype), student);

showSection("Own-property checks");
showResult("Object.keys", Object.keys(profile));
showResult("Object.values", Object.values(profile));
showResult("Object.entries", Object.entries(profile));
showResult("Object.hasOwn name", Object.hasOwn(profile, "name"));
showResult("Object.hasOwn inheritedRole", Object.hasOwn(profile, "inheritedRole"));
// Calling profile.hasOwnProperty("name") would fail here because the object has
// its own property named hasOwnProperty. Use the prototype method safely:
showResult("Safe hasOwnProperty call", Object.prototype.hasOwnProperty.call(profile, "name"));
// Object.hasOwn() is the modern recommended static method.
showNote("Object.hasOwn checks own properties only. Object.prototype.hasOwnProperty.call(...) is a safe compatibility pattern. Do not confuse ownership with inherited properties.");
