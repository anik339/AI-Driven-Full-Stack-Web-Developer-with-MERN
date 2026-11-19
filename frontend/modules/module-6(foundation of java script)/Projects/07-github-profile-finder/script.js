// PROJECT 07: GITHUB PROFILE FINDER
// Concepts: fetch(), async/await, Promise.all(), API status codes, dynamic DOM.

const form = document.querySelector("#search-form");
const usernameInput = document.querySelector("#username");
const statusMessage = document.querySelector("#status");
const profileSection = document.querySelector("#profile");

async function fetchGitHubJson(url) {
  const response = await fetch(url);

  if (response.status === 404) throw new Error("That GitHub username was not found.");
  if (response.status === 403) throw new Error("GitHub API rate limit reached. Wait a little and try again.");
  if (!response.ok) throw new Error(`GitHub returned an error (${response.status}).`);

  return response.json();
}

async function findProfile(username) {
  statusMessage.textContent = "Loading GitHub profile…";
  profileSection.hidden = true;

  try {
    // Request profile and repositories at the same time to reduce waiting.
    const [user, repositories] = await Promise.all([
      fetchGitHubJson(`https://api.github.com/users/${encodeURIComponent(username)}`),
      fetchGitHubJson(`https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=5`)
    ]);

    displayProfile(user, repositories);
    statusMessage.textContent = "Profile loaded.";
  } catch (error) {
    statusMessage.textContent = error.message || "Could not load this profile. Check your connection.";
  }
}

function displayProfile(user, repositories) {
  const avatar = document.querySelector("#avatar");
  avatar.src = user.avatar_url;
  avatar.alt = `${user.login}'s GitHub avatar`;

  document.querySelector("#name").textContent = user.name || user.login;
  document.querySelector("#handle").textContent = `@${user.login}`;
  document.querySelector("#bio").textContent = user.bio || "This user has not added a public bio.";
  document.querySelector("#followers").textContent = user.followers;
  document.querySelector("#following").textContent = user.following;
  document.querySelector("#repos-count").textContent = user.public_repos;
  document.querySelector("#location").textContent = user.location ? `📍 ${user.location}` : "Location not provided";

  const profileLink = document.querySelector("#profile-link");
  profileLink.href = user.html_url;

  const repoList = document.querySelector("#repo-list");
  repoList.replaceChildren(...repositories.map(createRepositoryItem));
  document.querySelector("#repo-empty").hidden = repositories.length > 0;
  profileSection.hidden = false;
}

function createRepositoryItem(repository) {
  const item = document.createElement("li");
  item.className = "repo";

  const link = document.createElement("a");
  link.href = repository.html_url;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = repository.name;

  const description = document.createElement("p");
  description.textContent = repository.description || "No description provided.";

  const meta = document.createElement("span");
  meta.className = "repo-meta";
  meta.textContent = `★ ${repository.stargazers_count} · ${repository.language || "Language not specified"}`;

  item.append(link, description, meta);
  return item;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = usernameInput.value.trim();
  if (username) findProfile(username);
});
