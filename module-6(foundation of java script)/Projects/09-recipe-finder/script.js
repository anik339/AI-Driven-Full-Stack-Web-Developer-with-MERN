// PROJECT 09: RECIPE FINDER
// Concepts: fetch(), async/await, API data, dynamic cards, dialog, arrays.

const searchForm = document.querySelector("#recipe-search");
const queryInput = document.querySelector("#recipe-query");
const recipeGrid = document.querySelector("#recipe-grid");
const statusMessage = document.querySelector("#status");
const dialog = document.querySelector("#recipe-dialog");

async function requestMeals(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Recipe service returned ${response.status}.`);
  return response.json();
}

async function searchRecipes(query) {
  statusMessage.textContent = "Searching recipes…";
  recipeGrid.replaceChildren();

  try {
    const data = await requestMeals(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`);
    const meals = data.meals || [];

    if (meals.length === 0) {
      statusMessage.textContent = "No recipes found. Try another ingredient or meal name.";
      return;
    }

    recipeGrid.replaceChildren(...meals.map(createRecipeCard));
    statusMessage.textContent = `${meals.length} recipe(s) found. Select a card to view details.`;
  } catch (error) {
    statusMessage.textContent = error.message || "Could not load recipes. Check your internet connection.";
  }
}

function createRecipeCard(meal) {
  const card = document.createElement("article");
  card.className = "recipe-card";

  const image = document.createElement("img");
  image.src = meal.strMealThumb;
  image.alt = `${meal.strMeal} recipe`;
  image.loading = "lazy";

  const content = document.createElement("div");
  content.className = "recipe-content";
  const title = document.createElement("h2");
  title.textContent = meal.strMeal;
  const button = document.createElement("button");
  button.type = "button";
  button.className = "btn";
  button.textContent = "View recipe";
  button.dataset.mealId = meal.idMeal;

  content.append(title, button);
  card.append(image, content);
  return card;
}

recipeGrid.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-meal-id]");
  if (!button) return;

  button.disabled = true;
  button.textContent = "Loading…";

  try {
    const data = await requestMeals(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${button.dataset.mealId}`);
    const meal = data.meals?.[0];
    if (!meal) throw new Error("Recipe details are not available.");

    showRecipeDetails(meal);
    dialog.showModal();
  } catch (error) {
    statusMessage.textContent = error.message || "Could not load recipe details.";
  } finally {
    button.disabled = false;
    button.textContent = "View recipe";
  }
});

function showRecipeDetails(meal) {
  document.querySelector("#dialog-title").textContent = meal.strMeal;
  const image = document.querySelector("#dialog-image");
  image.src = meal.strMealThumb;
  image.alt = `${meal.strMeal} prepared dish`;
  document.querySelector("#dialog-category").textContent =
    [meal.strCategory, meal.strArea].filter(Boolean).join(" · ");

  const ingredients = [];
  // The API provides ingredient and measure fields numbered from 1 to 20.
  for (let index = 1; index <= 20; index += 1) {
    const ingredient = meal[`strIngredient${index}`]?.trim();
    const measure = meal[`strMeasure${index}`]?.trim();
    if (ingredient) ingredients.push(`${measure || ""} ${ingredient}`.trim());
  }

  const list = document.querySelector("#ingredient-list");
  list.replaceChildren(...ingredients.map((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    return item;
  }));

  document.querySelector("#instructions").textContent = meal.strInstructions || "No instructions provided.";
  const source = document.querySelector("#source-link");
  if (meal.strSource) {
    source.href = meal.strSource;
    source.hidden = false;
  } else {
    source.hidden = true;
  }
}

document.querySelector("#dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  // Close when the user clicks the dark backdrop, not when clicking inside the dialog.
  if (event.target === dialog) dialog.close();
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = queryInput.value.trim();
  if (query) searchRecipes(query);
});

searchRecipes(queryInput.value);
