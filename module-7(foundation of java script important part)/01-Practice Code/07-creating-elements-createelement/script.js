// LESSON 07: CREATING ELEMENTS

const input = document.querySelector("#item-input");
const list = document.querySelector("#created-list");
const output = document.querySelector("#create-output");

document.querySelector("#create-item").addEventListener("click", () => {
  const topicName = input.value.trim();

  if (!topicName) {
    output.textContent = "Please type a topic before creating an element.";
    input.focus();
    return;
  }

  // Step 1: Create a new <li> element. It is not visible yet.
  const newItem = document.createElement("li");

  // Step 2: Add safe text content and a CSS class.
  newItem.textContent = topicName;
  newItem.classList.add("created-item");

  // Step 3: Add a data attribute so JavaScript can identify this item later.
  newItem.setAttribute("data-created-by", "javascript");

  // Step 4: The next lesson explains how to append this new element to the page.
  // For now, we append it so you can see the created element.
  list.append(newItem);

  output.textContent = `Created an <li> element with text: "${topicName}".`;
  input.value = "";
  input.focus();
});
