// A generator function uses function* and can pause at each yield.
function* createTicketNumbers(start) {
  let current = start;
  while (current <= start + 2) {
    yield `T-${current}`;
    current += 1;
  }
}

const tickets = createTicketNumbers(101);
showSection("Generator function");
showResult("First next()", tickets.next());
showResult("Second next()", tickets.next());
showResult("Third next()", tickets.next());
showResult("After the final yield", tickets.next());

// A generator is iterable, so for...of can consume its yielded values.
function* skillNames() {
  yield "HTML";
  yield "CSS";
  yield "JavaScript";
}
const skills = [...skillNames()];
showResult("Collected skills", skills);
showNote("yield pauses the generator. Calling next() resumes it. A completed generator stays completed.");
