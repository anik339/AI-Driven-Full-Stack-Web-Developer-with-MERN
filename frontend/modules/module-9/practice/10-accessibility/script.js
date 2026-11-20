let count = 0;
const output = document.querySelector("#count");

function render() {
  output.textContent = String(count);
}

document.querySelector("#minus").addEventListener("click", () => {
  count -= 1;
  render();
});

document.querySelector("#plus").addEventListener("click", () => {
  count += 1;
  render();
});