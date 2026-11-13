// PROJECT 05: PRODUCT CATALOG AND SHOPPING CART
// Concepts: array methods, search, sorting, event delegation, object state, localStorage.

const products = [
  { id: 1, name: "Wireless Headphones", category: "tech", price: 59, icon: "🎧", description: "Comfortable everyday audio for work and study." },
  { id: 2, name: "Desk Lamp", category: "home", price: 32, icon: "💡", description: "A clean desk lamp for focused evening work." },
  { id: 3, name: "Mechanical Keyboard", category: "tech", price: 89, icon: "⌨️", description: "Tactile typing for a productive workspace." },
  { id: 4, name: "Notebook Set", category: "stationery", price: 14, icon: "📓", description: "Three notebooks for notes and planning." },
  { id: 5, name: "Water Bottle", category: "home", price: 22, icon: "🧴", description: "Reusable bottle for your daily routine." },
  { id: 6, name: "Wireless Mouse", category: "tech", price: 27, icon: "🖱️", description: "A compact mouse for laptop or desktop." },
  { id: 7, name: "Pen Collection", category: "stationery", price: 11, icon: "🖊️", description: "Smooth-writing pens for everyday notes." },
  { id: 8, name: "Storage Organizer", category: "home", price: 18, icon: "🗃️", description: "Keep small desk items in one place." }
];

const CART_KEY = "js-project-05-cart";
const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
let cart = readCart();

function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_KEY));
    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function renderProducts() {
  const query = document.querySelector("#search").value.trim().toLowerCase();
  const category = document.querySelector("#category-filter").value;
  const sort = document.querySelector("#sort-filter").value;

  let visible = products.filter((product) => {
    const matchesText = product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query);
    const matchesCategory = category === "all" || product.category === category;
    return matchesText && matchesCategory;
  });

  if (sort === "low") visible = [...visible].sort((a, b) => a.price - b.price);
  if (sort === "high") visible = [...visible].sort((a, b) => b.price - a.price);

  const grid = document.querySelector("#product-grid");
  grid.replaceChildren(...visible.map(createProductCard));
  document.querySelector("#product-count").textContent = `${visible.length} items`;
  document.querySelector("#empty-state").hidden = visible.length > 0;
}

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";

  const art = document.createElement("div");
  art.className = "product-art";
  art.setAttribute("aria-hidden", "true");
  art.textContent = product.icon;

  const content = document.createElement("div");
  content.className = "product-content";
  const title = document.createElement("h3");
  title.textContent = product.name;
  const description = document.createElement("p");
  description.textContent = product.description;
  const bottom = document.createElement("div");
  bottom.className = "product-bottom";
  const price = document.createElement("span");
  price.className = "product-price";
  price.textContent = currency.format(product.price);
  const button = document.createElement("button");
  button.className = "btn";
  button.type = "button";
  button.textContent = "Add to cart";
  button.dataset.addId = product.id;

  bottom.append(price, button);
  content.append(title, description, bottom);
  card.append(art, content);
  return card;
}

document.querySelector("#product-grid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-add-id]");
  if (!button) return;
  const id = button.dataset.addId;
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  renderCart();
});

document.querySelector("#cart-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-cart-action]");
  if (!button) return;
  const id = button.dataset.id;
  const action = button.dataset.cartAction;

  if (action === "increase") cart[id] = (cart[id] || 0) + 1;
  if (action === "decrease") {
    cart[id] = (cart[id] || 0) - 1;
    if (cart[id] <= 0) delete cart[id];
  }

  saveCart();
  renderCart();
});

document.querySelector("#clear-cart").addEventListener("click", () => {
  cart = {};
  saveCart();
  renderCart();
});

["#search", "#category-filter", "#sort-filter"].forEach((selector) => {
  document.querySelector(selector).addEventListener(selector === "#search" ? "input" : "change", renderProducts);
});

function renderCart() {
  const cartItems = Object.entries(cart)
    .map(([id, quantity]) => ({ product: products.find((item) => item.id === Number(id)), quantity }))
    .filter((item) => item.product && item.quantity > 0);

  const list = document.querySelector("#cart-list");
  list.replaceChildren(...cartItems.map(createCartRow));
  const quantityTotal = cartItems.reduce((total, item) => total + item.quantity, 0);
  const priceTotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

  document.querySelector("#cart-count").textContent = quantityTotal;
  document.querySelector("#cart-total").textContent = currency.format(priceTotal);
  document.querySelector("#cart-empty").hidden = cartItems.length > 0;
}

function createCartRow(item) {
  const row = document.createElement("li");
  row.className = "cart-item";

  const info = document.createElement("div");
  const name = document.createElement("strong");
  name.textContent = item.product.name;
  const detail = document.createElement("small");
  detail.textContent = `${currency.format(item.product.price)} each`;
  info.append(name, detail);

  const controls = document.createElement("div");
  controls.className = "quantity-controls";
  const minus = document.createElement("button");
  minus.type = "button"; minus.textContent = "−"; minus.dataset.cartAction = "decrease"; minus.dataset.id = item.product.id;
  minus.setAttribute("aria-label", `Remove one ${item.product.name}`);
  const quantity = document.createElement("span");
  quantity.textContent = item.quantity;
  const plus = document.createElement("button");
  plus.type = "button"; plus.textContent = "+"; plus.dataset.cartAction = "increase"; plus.dataset.id = item.product.id;
  plus.setAttribute("aria-label", `Add one ${item.product.name}`);
  controls.append(minus, quantity, plus);
  row.append(info, controls);
  return row;
}

renderProducts();
renderCart();
