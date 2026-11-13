// LESSON 03: textContent AND innerText

const heading = document.querySelector("#sample-heading");
const output = document.querySelector("#text-output");

document.querySelector("#use-text-content").addEventListener("click", () => {
  // textContent reads or replaces all text inside the selected element.
  heading.textContent = "Updated using textContent";
  output.textContent = "The heading was updated with textContent.";
});

document.querySelector("#use-inner-text").addEventListener("click", () => {
  // innerText reads or replaces the rendered (visible) text of an element.
  heading.innerText = "Updated using innerText";
  output.innerText = "The heading was updated with innerText.";
});

document.querySelector("#compare").addEventListener("click", () => {
  const visible = document.querySelector("#visible-copy");
  const hidden = document.querySelector("#hidden-copy");

  // textContent includes hidden text because it reads the DOM text.
  const textContentValue = hidden.textContent;

  // innerText usually returns an empty string for an element hidden with `hidden`.
  const innerTextValue = hidden.innerText;

  output.textContent =
    `Visible paragraph: "${visible.innerText}" | ` +
    `Hidden textContent: "${textContentValue}" | ` +
    `Hidden innerText: "${innerTextValue}"`;
});
