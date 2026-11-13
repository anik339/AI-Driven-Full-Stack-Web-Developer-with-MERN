// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  async function searchPosts() {
    const url = new URL("https://jsonplaceholder.typicode.com/posts");
    url.searchParams.set("userId", "1");
    url.searchParams.set("_limit", "3");
    output.textContent = `Request URL: ${url.href}\nLoading...`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const posts = await response.json();
      output.textContent = `Posts returned: ${posts.length}\n${posts.map(post => post.title).join("\n")}`;
    } catch (error) { output.textContent = `Request failed: ${error.message}`; }
  }
  searchPosts();
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
