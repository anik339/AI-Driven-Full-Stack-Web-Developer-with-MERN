// VERSION A: intentionally simple first attempt.
// It works, but state changes, DOM creation and listener setup are mixed together.
const badForm = document.querySelector("#bad-form");
const badInput = document.querySelector("#bad-input");
const badList = document.querySelector("#bad-list");
const badEmpty = document.querySelector("#bad-empty");
let badTasks = [];

function showBadTasks() {
  badList.replaceChildren();
  badTasks.forEach((task, index) => {
    const item = document.createElement("li");
    const text = document.createElement("span");
    text.textContent = task.title;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "Delete";
    // A new listener is attached to every button after every render.
    remove.addEventListener("click", () => {
      badTasks.splice(index, 1);
      showBadTasks();
    });
    item.append(text, remove);
    badList.append(item);
  });
  badEmpty.hidden = badTasks.length > 0;
}

badForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = badInput.value.trim();
  if (!title) return;
  badTasks.push({ title });
  showBadTasks();
  badInput.value = "";
});
