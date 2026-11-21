const output = document.querySelector("#output");
    const lines = [];
    const show = (label, value) => lines.push(`${label}: ${value}`);

    class LearningWallet {
  #points = 0;

  addPoints(amount) {
    if (!Number.isInteger(amount) || amount <= 0) {
      throw new TypeError("Points must be a positive integer.");
    }
    this.#points += amount;
  }

  get points() {
    return this.#points;
  }
}

const wallet = new LearningWallet();
wallet.addPoints(25);

    show("Wallet points", wallet.points);
output.textContent = lines.join("\n");
console.log(lines.join("\n"));
