const message = document.querySelector("#message");
const topics = document.querySelectorAll("#topics li");
const status = document.querySelector("#status");

document.querySelector("#update").addEventListener("click", () => {
  message.textContent = "The DOM was updated successfully.";
  topics.forEach((topic) => topic.classList.add("complete"));
  status.textContent = `${topics.length} topics marked complete.`;
});