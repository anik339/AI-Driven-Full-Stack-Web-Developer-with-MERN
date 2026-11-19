// Older constructor function pattern: called with new, this receives the new object.
function CourseUser(name) {
  this.name = name;
}
const constructorUser = new CourseUser("Rafi");

// Encapsulation: private fields protect internal state.
class BankAccount {
  #balance;
  constructor(owner, openingBalance = 0) {
    this.owner = owner;
    this.#balance = openingBalance;
  }
  deposit(amount) {
    if (!Number.isFinite(amount) || amount <= 0) return false;
    this.#balance += amount;
    return true;
  }
  getBalance() { return this.#balance; }
  static createDefault(owner) { return new BankAccount(owner, 0); }
  // Abstraction: callers use deposit/getBalance without managing internal validation.
  describe() { return `${this.owner}: account ready`; }
}

// Inheritance: SavingsAccount reuses BankAccount behaviour.
class SavingsAccount extends BankAccount {
  constructor(owner, openingBalance, interestRate) {
    super(owner, openingBalance);
    this.interestRate = interestRate;
  }
  // Polymorphism: this method overrides the parent method.
  describe() { return `${this.owner}: savings account at ${this.interestRate}%`; }
}

const accounts = [new BankAccount("Ava", 100), new SavingsAccount("Noah", 200, 4)];
accounts[0].deposit(50);
showSection("Constructors and four pillars");
showResult("Function constructor", constructorUser);
showResult("Static factory method", BankAccount.createDefault("Mira").describe());
showResult("Encapsulation balance", accounts[0].getBalance());
showResult("Abstraction", accounts[0].describe());
showResult("Inheritance", accounts[1] instanceof BankAccount);
showResult("Polymorphism", accounts.map(account => account.describe()));

// JavaScript does not support Java/C++-style method overloading by signature.
// Optional and rest parameters can simulate different call shapes.
function formatValue(value, ...extras) {
  return [value, ...extras].join(" | ");
}
showResult("Overloading-like behaviour", formatValue("Order", 101, "paid"));

// Declaring the same class name twice in one scope causes SyntaxError.
// class Duplicate {} class Duplicate {} // Do not uncomment: duplicate declaration.
showNote("Four pillars: encapsulation, abstraction, inheritance and polymorphism. Method overriding is one way to demonstrate polymorphism. JavaScript does not have native signature-based method overloading; use optional/rest parameters or explicit branching. A class binding cannot be redeclared in the same scope.");
