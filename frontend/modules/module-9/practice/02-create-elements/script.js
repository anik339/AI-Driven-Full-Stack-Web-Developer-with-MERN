const books = document.querySelector("#books");
const samples = [
  { title: "Eloquent JavaScript", author: "Marijn Haverbeke" },
  { title: "You Don't Know JS Yet", author: "Kyle Simpson" }
];
let index = 0;

document.querySelector("#add").addEventListener("click", () => {
  const book = samples[index % samples.length];
  index += 1;

  const card = document.createElement("article");
  const title = document.createElement("h2");
  const author = document.createElement("p");
  const remove = document.createElement("button");

  title.textContent = book.title;
  author.textContent = `By ${book.author}`;
  remove.type = "button";
  remove.textContent = "Remove";
  remove.addEventListener("click", () => card.remove());

  card.className = "card";
  card.append(title, author, remove);
  books.append(card);
});