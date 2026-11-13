// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  async function loadPosts() {
    output.textContent = "Loading posts...";
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      const posts = await response.json();
      output.textContent = posts.map(post => `${post.id}. ${post.title}`).join("\n");
    } catch (error) {
      output.textContent = `Could not load posts: ${error.message}`;
    }
  }
  loadPosts();
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
