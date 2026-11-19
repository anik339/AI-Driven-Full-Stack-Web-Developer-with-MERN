// PROJECT 04: DYNAMIC PRODUCT CART
// Focus: createElement(), append(), event.target, dataset, remove(), arrays, and totals.

const products = [
  { id: 1, name: "Notebook", price: 8, icon: "📓", description: "A clean notebook for daily notes." },
  { id: 2, name: "Desk Lamp", price: 24, icon: "💡", description: "A compact lamp for your workspace." },
  { id: 3, name: "Headphones", price: 45, icon: "🎧", description: "Comfortable headphones for study." },
  { id: 4, name: "Water Bottle", price: 16, icon: "🧴", description: "A reusable bottle for every day." }
];

let cart = [];
const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

// Build a product card entirely with DOM methods.
function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";

  const icon = document.createElement("div");
  icon.className = "product-icon";
  icon.textContent = product.icon;
  icon.setAttribute("aria-hidden", "true");

  const content = document.createElement("div");
  content.className = "product-content";

  const title = document.createElement("h3");
  title.textContent = product.name;

  const description = document.createElement("p");
  description.textContent = product.description;

  const bottom = document.createElement("div");
  bottom.className = "between";

  const price = document.createElement("strong");
  price.textContent = money.format(product.price);

  const addButton = document.createElement("button");
  addButton.className = "btn small-btn";
  addButton.type = "button";
  addButton.textContent = "Add";
  addButton.dataset.addId = product.id;

  bottom.append(price, addButton);
  content.append(title, description, bottom);
  card.append(icon, content);
  return card;
}

// Render all products by creating nodes and appending them to the product grid.
function renderProducts() {
  const grid = document.querySelector("#product-grid");
  const cards = products.map(createProductCard);
  grid.replaceChildren(...cards);
  document.querySelector("#product-total").textContent = `${products.length} products`;
}

// Event delegation: listen once on the product grid, not on every Add button.
document.querySelector("#product-grid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-add-id]");
  if (!button) return;

  const productId = Number(button.dataset.addId);
  const existingItem = cart.find((item) => item.productId === productId);

  if (existingItem) existingItem.quantity += 1;
  else cart.push({ productId, quantity: 1 });

  renderCart();
});

// Handle plus, minus, and remove actions inside the cart.
document.querySelector("#cart-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-cart-action]");
  if (!button) return;

  const productId = Number(button.dataset.productId);
  const item = cart.find((cartItem) => cartItem.productId === productId);
  if (!item) return;

  if (button.dataset.cartAction === "plus") item.quantity += 1;
  if (button.dataset.cartAction === "minus") item.quantity -= 1;
  if (button.dataset.cartAction === "remove" || item.quantity <= 0) {
    cart = cart.filter((cartItem) => cartItem.productId !== productId);
  }

  renderCart();
});

document.querySelector("#clear-cart").addEventListener("click", () => {
  cart = [];
  renderCart();
});

function createCartRow(cartItem) {
  const product = products.find((item) => item.id === cartItem.productId);
  if (!product) return null;

  const row = document.createElement("li");
  row.className = "cart-row";

  const info = document.createElement("div");
  const name = document.createElement("strong");
  name.textContent = product.name;
  const lineTotal = document.createElement("small");
  lineTotal.textContent = money.format(product.price * cartItem.quantity);
  info.append(name, lineTotal);

  const controls = document.createElement("div");
  controls.className = "quantity-controls";

  // Each control stores the product id and action in data attributes.
  const minus = makeCartButton("−", "minus", product.id);
  const quantity = document.createElement("span");
  quantity.textContent = cartItem.quantity;
  const plus = makeCartButton("+", "plus", product.id);
  const remove = makeCartButton("×", "remove", product.id);

  controls.append(minus, quantity, plus, remove);
  row.append(info, controls);
  return row;
}

function makeCartButton(label, action, productId) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = label;
  button.dataset.cartAction = action;
  button.dataset.productId = productId;
  button.setAttribute("aria-label", `${action} product ${productId}`);
  return button;
}

function renderCart() {
  const list = document.querySelector("#cart-list");
  const rows = cart.map(createCartRow).filter(Boolean);
  list.replaceChildren(...rows);

  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const total = cart.reduce((sum, item) => {
    const product = products.find((productItem) => productItem.id === item.productId);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  document.querySelector("#cart-count").textContent = count;
  document.querySelector("#cart-total").textContent = money.format(total);
  document.querySelector("#cart-empty").hidden = cart.length > 0;
}

renderProducts();
renderCart();
