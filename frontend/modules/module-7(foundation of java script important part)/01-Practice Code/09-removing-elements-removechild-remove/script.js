// LESSON 09: REMOVING DOM ELEMENTS

const list = document.querySelector("#remove-list");
const output = document.querySelector("#remove-output");

document.querySelector("#remove-child-button").addEventListener("click", () => {
  const firstItem = document.querySelector("#first-item");

  if (firstItem && list.contains(firstItem)) {
    // removeChild() must be called on the parent that contains the child.
    list.removeChild(firstItem);
    output.textContent = "The first item was removed using parent.removeChild(child).";
  } else {
    output.textContent = "The first item has already been removed.";
  }
});

document.querySelector("#remove-button").addEventListener("click", () => {
  const secondItem = document.querySelector("#second-item");

  if (secondItem) {
    // remove() is called directly on the element we want to delete.
    secondItem.remove();
    output.textContent = "The second item was removed using element.remove().";
  } else {
    output.textContent = "The second item has already been removed.";
  }
});

document.querySelector("#reset-list").addEventListener("click", () => {
  // Rebuild the original list so you can test both methods again.
  list.innerHTML = `
    <li id="first-item">First item <span class="muted small">(removeChild example)</span></li>
    <li id="second-item">Second item <span class="muted small">(remove example)</span></li>
    <li id="third-item">Third item (keep this one)</li>
  `;
  output.textContent = "The original list has been restored.";
});
