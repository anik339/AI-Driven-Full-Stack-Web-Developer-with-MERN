"use strict";

function strictFunction() {
  // In strict mode, this is undefined when the function is called plainly.
  return this;
}

showSection("Strict mode");
showResult("Plain function this", strictFunction());
showResult("Strict mode active", (function () { return this === undefined; })());

// This would throw ReferenceError in strict mode because the variable was not declared:
// accidentalGlobal = "not allowed";

// Class bodies are strict automatically, and ES modules are strict automatically.
class StrictExample {
  describe() { return "Class methods execute in strict mode."; }
}
showResult("Class method", new StrictExample().describe());
showNote("Place \"use strict\" at the start of a script or function body. ES modules and class bodies are strict by default.");
