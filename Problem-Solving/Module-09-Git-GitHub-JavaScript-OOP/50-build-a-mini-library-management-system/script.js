// Run the reference example only when the learner clicks the button.
function runExample() {
  const output = document.querySelector("#output");
  const lines = [];
  const originalLog = console.log;
  // Capture console output so it is visible on the learning page.
  console.log = (...values) => lines.push(values.map(value => {
    if (typeof value === "string") return value;
    try { return JSON.stringify(value, null, 2); }
    catch { return String(value); }
  }).join(" "));
  try {
    runSolution();
    output.textContent = lines.join("\n") || "Example completed. Inspect the code for details.";
  } catch (error) {
    output.textContent = `${error.name}: ${error.message}`;
  } finally {
    // Restore the original console so the page remains well-behaved.
    console.log = originalLog;
  }
}

function runSolution() {
  class Book {
    constructor(id, title) { this.id = id; this.title = title; this.isBorrowed = false; }
  }
  class LibraryMember {
    constructor(id, name) { this.id = id; this.name = name; this.borrowedBookIds = new Set(); }
  }
  class Library {
    #books = new Map();
    #members = new Map();
    addBook(book) { this.#books.set(book.id, book); }
    register(member) { this.#members.set(member.id, member); }
    borrow(bookId, memberId) {
      const book = this.#books.get(bookId);
      const member = this.#members.get(memberId);
      if (!book || !member) throw new Error("Book or member not found");
      if (book.isBorrowed) throw new Error("Book is already borrowed");
      book.isBorrowed = true;
      member.borrowedBookIds.add(bookId);
      return `${member.name} borrowed ${book.title}`;
    }
    returnBook(bookId, memberId) {
      const book = this.#books.get(bookId);
      const member = this.#members.get(memberId);
      if (!book || !member || !member.borrowedBookIds.has(bookId)) throw new Error("Invalid return");
      book.isBorrowed = false;
      member.borrowedBookIds.delete(bookId);
      return `${member.name} returned ${book.title}`;
    }
  }

  const library = new Library();
  library.addBook(new Book(1, "Clean Code"));
  library.register(new LibraryMember(7, "Anik"));
  console.log(library.borrow(1, 7));
  console.log(library.returnBook(1, 7));
}
