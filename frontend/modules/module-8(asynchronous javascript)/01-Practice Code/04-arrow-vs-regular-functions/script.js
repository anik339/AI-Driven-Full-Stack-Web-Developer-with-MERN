const regularAdd = function(a, b) { return a + b; };
const arrowAdd = (a, b) => a + b;

const profile = {
  name: "Riley",
  regularMethod: function() { return this.name; },
  // Arrow functions do not get this from the object that calls them.
  arrowMethod: () => "Arrow functions use lexical this."
};

document.querySelector("#run").addEventListener("click", () => {
  document.querySelector("#out").textContent =
    `Regular: ${regularAdd(4, 6)}. Arrow: ${arrowAdd(4, 6)}. Regular method this.name: ${profile.regularMethod()}. Arrow method: ${profile.arrowMethod()}`;
});

// Arrow functions have no own arguments object and cannot be used with new.
