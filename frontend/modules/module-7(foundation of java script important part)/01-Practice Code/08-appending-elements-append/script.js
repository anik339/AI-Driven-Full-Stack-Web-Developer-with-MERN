// LESSON 08: APPENDING WITH append()

const area = document.querySelector("#append-area");
let itemNumber = 0;

document.querySelector("#append-node").addEventListener("click", () => {
  itemNumber += 1;

  // Create a node first.
  const newParagraph = document.createElement("p");
  newParagraph.classList.add("append-item");
  newParagraph.textContent = `Appended DOM element number ${itemNumber}`;

  // append() places the new node at the end of the parent element.
  area.append(newParagraph);

  document.querySelector("#append-output").textContent =
    "One new paragraph element was appended.";
});

document.querySelector("#append-many").addEventListener("click", () => {
  const heading = document.createElement("strong");
  heading.textContent = "New group: ";

  const message = document.createElement("span");
  message.textContent = "append() can insert more than one item at a time.";

  const badge = document.createElement("span");
  badge.className = "append-badge";
  badge.textContent = "Added";

  // append() accepts multiple nodes in a single call.
  area.append(heading, message, badge);

  document.querySelector("#append-output").textContent =
    "Three items were appended in one call.";
});

document.querySelector("#clear-area").addEventListener("click", () => {
  // replaceChildren() removes the current child nodes.
  area.replaceChildren();
  itemNumber = 0;
  document.querySelector("#append-output").textContent = "The output area has been cleared.";
});
