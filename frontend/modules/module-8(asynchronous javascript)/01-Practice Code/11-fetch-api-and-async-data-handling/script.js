const output = document.querySelector("#out");
document.querySelector("#run").addEventListener("click", async () => {
  output.textContent = "Loading posts…";
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    // fetch does not reject for HTTP 404/500, so check response.ok.
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const posts = await response.json();
    output.textContent = posts.length
      ? posts.map(post => `${post.id}. ${post.title}`).join(" | ")
      : "No posts returned.";
  } catch (error) {
    output.textContent = `Could not load data: ${error.message}`;
  }
});
// Internet connection is required. The API is a public demo endpoint.
