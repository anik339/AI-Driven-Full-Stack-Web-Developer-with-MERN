// LESSON 11: EVENT OBJECT AND event.target

const buttonGroup = document.querySelector("#button-group");
const output = document.querySelector("#event-object-output");

// The browser automatically passes an Event object to this callback.
buttonGroup.addEventListener("click", (event) => {
  // target is the exact element where the event started.
  const clickedElement = event.target;

  // closest() finds the nearest button, even if the button contains nested markup.
  const clickedButton = clickedElement.closest("button");

  // Ignore clicks that did not happen on a button inside this group.
  if (!clickedButton) return;

  const action = clickedButton.dataset.action;

  // currentTarget is the element that owns this event listener (the parent group).
  output.textContent =
    `event.type: ${event.type} | ` +
    `event.target: ${clickedElement.tagName} | ` +
    `event.currentTarget: ${event.currentTarget.id} | ` +
    `data-action: ${action}`;
});
