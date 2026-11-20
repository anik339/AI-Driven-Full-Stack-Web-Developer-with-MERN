const list = document.querySelector("#items");
let count = 1;

// One listener handles both existing and future remove buttons.
list.addEventListener("click", (event) => {
  const button = event.target.closest('[data-action="remove"]');
  if (!button || !list.contains(button)) return;

  button.closest("li").remove();
  document.querySelector("#status").textContent = "Item removed.";
});

document.querySelector("#add").addEventListener("click", () => {
  count += 1;
  const row = document.createElement("li");
  const label = document.createElement("span");
  const button = document.createElement("button");

  label.textContent = `Item ${count}`;
  button.type = "button";
  button.dataset.action = "remove";
  button.textContent = "Remove";
  row.append(label, " ", button);
  list.append(row);
});