const button = document.querySelector("#load");
const status = document.querySelector("#status");
const list = document.querySelector("#users");

button.addEventListener("click", async () => {
  button.disabled = true;
  status.textContent = "Loading…";
  list.replaceChildren();

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const users = await response.json();
    if (!Array.isArray(users) || users.length === 0) {
      status.textContent = "No users were returned.";
      return;
    }

    users.slice(0, 5).forEach((user) => {
      const item = document.createElement("li");
      item.textContent = `${user.name} — ${user.email}`;
      list.append(item);
    });
    status.textContent = "Sample users loaded.";
  } catch (error) {
    status.textContent = "Could not load users. Check your connection.";
    console.error(error);
  } finally {
    button.disabled = false;
  }
});