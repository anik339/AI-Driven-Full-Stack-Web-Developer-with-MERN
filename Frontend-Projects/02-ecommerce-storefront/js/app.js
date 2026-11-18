/* NOVA MARKET — STORE INTERACTIONS
   Frontend-only demo. No backend, payment gateway, or real order processing.
*/
// 1) Sample catalogue data. Add or edit product objects here.
const products = [
  { id: 1, name: "Everyday Runner Sneakers", category: "Fashion", price: 2890, oldPrice: 3450, badge: "BESTSELLER", rating: "4.9", note: "2 colour options", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=750&q=85" },
  { id: 2, name: "Studio Wireless Headphones", category: "Tech", price: 3490, oldPrice: 3990, badge: "POPULAR", rating: "4.8", note: "Wireless audio", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=750&q=85" },
  { id: 3, name: "Daily Carry Backpack", category: "Accessories", price: 1950, oldPrice: null, badge: "EVERYDAY PICK", rating: "4.7", note: "Minimal design", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=750&q=85" },
  { id: 4, name: "Classic Minimal Watch", category: "Accessories", price: 4250, oldPrice: 4800, badge: "NEW", rating: "4.9", note: "Timeless finish", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=750&q=85" },
  { id: 5, name: "Essential Cotton T-Shirt", category: "Fashion", price: 850, oldPrice: null, badge: "EASY EVERYDAY", rating: "4.6", note: "Soft cotton feel", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=750&q=85" },
  { id: 6, name: "Weekend Sunglasses", category: "Fashion", price: 1250, oldPrice: 1500, badge: "SALE", rating: "4.7", note: "Lightweight frame", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=750&q=85" },
  { id: 7, name: "Ceramic Coffee Set", category: "Home", price: 980, oldPrice: null, badge: "HOME FAVOURITE", rating: "4.8", note: "Set of two", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=750&q=85" },
  { id: 8, name: "Soft Glow Desk Lamp", category: "Home", price: 1750, oldPrice: 2100, badge: "NEW", rating: "4.8", note: "Warm ambient light", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=750&q=85" }
];

const STORAGE_KEYS = {
  cart: "nova-market-cart-v1",
  wishlist: "nova-market-wishlist-v1",
  theme: "nova-market-theme-v1"
};

// 2) Central UI state. The page is rendered from this object.
const state = {
  category: "All",
  search: "",
  sort: "featured",
  wishlistOnly: false,
  cart: readStorage(STORAGE_KEYS.cart, []),
  wishlist: readStorage(STORAGE_KEYS.wishlist, [])
};

const elements = {
  grid: document.querySelector("#product-grid"),
  empty: document.querySelector("#empty-state"),
  results: document.querySelector("#results-count"),
  allCount: document.querySelector("#all-count"),
  search: document.querySelector("#search-input"),
  sort: document.querySelector("#sort-select"),
  cartCount: document.querySelector("#cart-count"),
  wishlistCount: document.querySelector("#wishlist-count"),
  drawer: document.querySelector("#cart-drawer"),
  overlay: document.querySelector("#overlay"),
  cartItems: document.querySelector("#cart-items"),
  cartEmpty: document.querySelector("#cart-empty"),
  drawerFooter: document.querySelector("#drawer-footer"),
  subtotal: document.querySelector("#cart-subtotal"),
  drawerItemCount: document.querySelector("#drawer-item-count"),
  checkoutTotal: document.querySelector("#checkout-total"),
  checkoutModal: document.querySelector("#checkout-modal"),
  toast: document.querySelector("#toast")
};

function readStorage(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return Array.isArray(fallback) && Array.isArray(value) ? value : (value ?? fallback);
  } catch {
    return fallback;
  }
}

function saveStorage() {
  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(state.cart));
  localStorage.setItem(STORAGE_KEYS.wishlist, JSON.stringify(state.wishlist));
}

function money(amount) {
  return new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
    maximumFractionDigits: 0
  }).format(amount).replace("BDT", "৳").trim();
}

function getProduct(id) {
  return products.find((product) => product.id === Number(id));
}

function getCartQuantity() {
  return state.cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartTotal() {
  return state.cart.reduce((total, item) => {
    const product = getProduct(item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 2400);
}

// 3) Search, category, wishlist, and sort rules are combined here.
function getVisibleProducts() {
  let visible = products.filter((product) => {
    const matchesCategory = state.category === "All" || product.category === state.category;
    const searchText = `${product.name} ${product.category} ${product.note}`.toLowerCase();
    const matchesSearch = searchText.includes(state.search.toLowerCase());
    const matchesWishlist = !state.wishlistOnly || state.wishlist.includes(product.id);
    return matchesCategory && matchesSearch && matchesWishlist;
  });

  if (state.sort === "price-low") visible.sort((a, b) => a.price - b.price);
  if (state.sort === "price-high") visible.sort((a, b) => b.price - a.price);
  if (state.sort === "name") visible.sort((a, b) => a.name.localeCompare(b.name));
  return visible;
}

// 4) Render product cards from the filtered catalogue.
function renderProducts() {
  const visible = getVisibleProducts();
  elements.allCount.textContent = products.length;
  elements.results.textContent = state.wishlistOnly
    ? `Showing ${visible.length} saved favourite(s)`
    : `Showing ${visible.length} of ${products.length} products`;
  elements.grid.innerHTML = visible.map((product) => {
    const saved = state.wishlist.includes(product.id);
    return `
      <article class="product-card">
        <div class="product-image-wrap">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <span class="product-badge">${product.badge}</span>
          <button class="wishlist-button ${saved ? "is-saved" : ""}" type="button"
            data-action="wishlist" data-id="${product.id}" aria-label="${saved ? "Remove from" : "Add to"} wishlist: ${product.name}"
            aria-pressed="${saved}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.8c0 5.2-8.8 11-8.8 11s-8.8-5.8-8.8-11A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z"></path></svg>
          </button>
          <button class="quick-add" type="button" data-action="add" data-id="${product.id}">Add to bag +</button>
          <button class="quick-view" type="button" data-action="view" data-id="${product.id}">Quick view</button>
        </div>
        <div class="product-details">
          <p class="product-category">${product.category}</p>
          <div class="product-name-row"><h3 class="product-name">${product.name}</h3><span class="product-rating">★ ${product.rating}</span></div>
          <div class="product-bottom">
            <span class="product-price">${money(product.price)}${product.oldPrice ? `<span class="product-old-price">${money(product.oldPrice)}</span>` : ""}</span>
            <span class="product-color-note">${product.note}</span>
          </div>
        </div>
      </article>
    `;
  }).join("");

  elements.empty.hidden = visible.length !== 0;
  elements.grid.hidden = visible.length === 0;
  // Show a dedicated clear action only while the saved-favourites view is active.
  document.querySelector("#clear-wishlist").hidden = !state.wishlistOnly || state.wishlist.length === 0;
  updateFilterButtons();
}

function updateFilterButtons() {
  document.querySelectorAll("[data-category]").forEach((button) => {
    button.classList.toggle("active", button.dataset.category === state.category);
  });
  document.querySelectorAll("[data-nav-category]").forEach((link) => {
    link.classList.toggle("active", link.dataset.navCategory === state.category);
  });
}

function setCategory(category) {
  state.category = category;
  state.wishlistOnly = false;
  document.querySelector("#wishlist-shortcut").setAttribute("aria-pressed", "false");
  renderProducts();
}

// Open a quick-view panel so visitors can inspect an item before adding it.
function openProductDetails(id) {
  const product = getProduct(id);
  if (!product) return;
  const saved = state.wishlist.includes(product.id);
  document.querySelector("#product-modal-content").innerHTML = `
    <div class="product-modal-layout">
      <img class="product-modal-image" src="${product.image}" alt="${product.name}">
      <div class="product-modal-copy">
        <p class="product-category">${product.category} · ${product.badge}</p>
        <h2 id="product-modal-title">${product.name}</h2>
        <p class="product-modal-rating">★ ${product.rating} · ${product.note}</p>
        <p class="product-modal-description">A thoughtfully selected everyday item from the NOVA Market sample catalogue. This product card is sample content for frontend practice.</p>
        <strong class="product-modal-price">${money(product.price)} ${product.oldPrice ? `<del>${money(product.oldPrice)}</del>` : ""}</strong>
        <div class="product-modal-actions">
          <button class="button button-dark" type="button" data-modal-add="${product.id}">Add to bag</button>
          <button class="button button-light" type="button" data-modal-wishlist="${product.id}">${saved ? "♥ Saved" : "♡ Save item"}</button>
        </div>
      </div>
    </div>`;
  const modal = document.querySelector("#product-modal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  document.querySelector("#close-product-modal").focus();
}

function closeProductDetails() {
  const modal = document.querySelector("#product-modal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function addToCart(id) {
  const product = getProduct(id);
  if (!product) return;
  const existing = state.cart.find((item) => item.id === product.id);
  if (existing) existing.quantity += 1;
  else state.cart.push({ id: product.id, quantity: 1 });
  saveStorage();
  renderCart();
  showToast(`${product.name} added to your bag.`);
}

function changeQuantity(id, change) {
  const item = state.cart.find((entry) => entry.id === Number(id));
  if (!item) return;
  item.quantity += change;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter((entry) => entry.id !== Number(id));
  }
  saveStorage();
  renderCart();
}

function removeFromCart(id) {
  state.cart = state.cart.filter((item) => item.id !== Number(id));
  saveStorage();
  renderCart();
  showToast("Item removed from your bag.");
}

function toggleWishlist(id) {
  const product = getProduct(id);
  if (!product) return;
  if (state.wishlist.includes(product.id)) {
    state.wishlist = state.wishlist.filter((itemId) => itemId !== product.id);
    showToast("Removed from your wishlist.");
  } else {
    state.wishlist.push(product.id);
    showToast("Saved to your wishlist.");
  }
  saveStorage();
  renderProducts();
  updateHeaderCounts();
}

function updateHeaderCounts() {
  elements.cartCount.textContent = getCartQuantity();
  elements.wishlistCount.textContent = state.wishlist.length;
}

// 5) Recalculate cart totals every time quantity or cart contents change.
function renderCart() {
  const totalQuantity = getCartQuantity();
  const total = getCartTotal();
  elements.drawerItemCount.textContent = `(${totalQuantity})`;
  elements.subtotal.textContent = money(total);
  elements.checkoutTotal.textContent = money(total);
  elements.cartEmpty.hidden = state.cart.length > 0;
  elements.drawerFooter.hidden = state.cart.length === 0;
  elements.cartItems.innerHTML = state.cart.map((item) => {
    const product = getProduct(item.id);
    if (!product) return "";
    return `
      <article class="cart-line">
        <img src="${product.image}" alt="${product.name}">
        <div>
          <h3>${product.name}</h3>
          <p class="cart-category">${product.category}</p>
          <p class="cart-line-price">${money(product.price * item.quantity)}</p>
          <div class="quantity-control" aria-label="Quantity controls for ${product.name}">
            <button type="button" data-action="decrease" data-id="${product.id}" aria-label="Decrease quantity">−</button>
            <span>${item.quantity}</span>
            <button type="button" data-action="increase" data-id="${product.id}" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <button class="remove-item" type="button" data-action="remove" data-id="${product.id}">Remove</button>
      </article>
    `;
  }).join("");
  updateHeaderCounts();
}

function openCart() {
  elements.drawer.classList.add("open");
  elements.drawer.setAttribute("aria-hidden", "false");
  elements.overlay.hidden = false;
  document.body.classList.add("drawer-open");
  document.querySelector("#close-cart").focus();
}

function closeCart() {
  elements.drawer.classList.remove("open");
  elements.drawer.setAttribute("aria-hidden", "true");
  elements.overlay.hidden = true;
  document.body.classList.remove("drawer-open");
}

function openCheckout() {
  if (state.cart.length === 0) {
    showToast("Your bag is empty.");
    return;
  }
  closeCart();
  elements.checkoutModal.classList.add("open");
  elements.checkoutModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  elements.checkoutTotal.textContent = money(getCartTotal());
  document.querySelector("#customer-name").focus();
}

function closeCheckout() {
  elements.checkoutModal.classList.remove("open");
  elements.checkoutModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function clearSearchAndFilters() {
  state.search = "";
  state.category = "All";
  state.sort = "featured";
  state.wishlistOnly = false;
  document.querySelector("#wishlist-shortcut").setAttribute("aria-pressed", "false");
  elements.search.value = "";
  elements.sort.value = "featured";
  renderProducts();
}

// 6) Event delegation keeps dynamically-rendered product/cart buttons working.
// Event delegation for product and cart controls.
elements.grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  if (button.dataset.action === "add") addToCart(button.dataset.id);
  if (button.dataset.action === "wishlist") toggleWishlist(button.dataset.id);
  if (button.dataset.action === "view") openProductDetails(button.dataset.id);
});

elements.cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const id = button.dataset.id;
  if (button.dataset.action === "increase") changeQuantity(id, 1);
  if (button.dataset.action === "decrease") changeQuantity(id, -1);
  if (button.dataset.action === "remove") removeFromCart(id);
});

document.querySelector("#filter-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (button) setCategory(button.dataset.category);
});

document.querySelectorAll("[data-nav-category]").forEach((link) => {
  link.addEventListener("click", () => setCategory(link.dataset.navCategory));
});

document.querySelectorAll("[data-footer-category]").forEach((link) => {
  link.addEventListener("click", () => setCategory(link.dataset.footerCategory));
});

elements.search.addEventListener("input", () => {
  state.search = elements.search.value.trim();
  renderProducts();
});

document.querySelector("#search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#shop").scrollIntoView({ behavior: "smooth" });
});

elements.sort.addEventListener("change", () => {
  state.sort = elements.sort.value;
  renderProducts();
});

document.querySelector("#clear-filters").addEventListener("click", clearSearchAndFilters);
document.querySelector("#clear-wishlist").addEventListener("click", () => {
  state.wishlist = [];
  state.wishlistOnly = false;
  saveStorage();
  document.querySelector("#wishlist-shortcut").setAttribute("aria-pressed", "false");
  renderProducts();
  updateHeaderCounts();
  showToast("Your wishlist has been cleared.");
});
document.querySelector("#empty-reset").addEventListener("click", clearSearchAndFilters);
document.querySelector("#open-cart").addEventListener("click", openCart);
document.querySelector("#close-cart").addEventListener("click", closeCart);
document.querySelector("#continue-shopping").addEventListener("click", closeCart);
document.querySelector("#checkout-button").addEventListener("click", openCheckout);
elements.overlay.addEventListener("click", closeCart);
document.querySelector("#close-checkout").addEventListener("click", closeCheckout);
document.querySelector("#close-product-modal").addEventListener("click", closeProductDetails);
document.querySelector("#product-modal").addEventListener("click", (event) => {
  if (event.target.id === "product-modal") closeProductDetails();
});
document.querySelector("#product-modal-content").addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-modal-add]");
  const saveButton = event.target.closest("[data-modal-wishlist]");
  if (addButton) { addToCart(addButton.dataset.modalAdd); closeProductDetails(); }
  if (saveButton) {
    toggleWishlist(saveButton.dataset.modalWishlist);
    const product = getProduct(saveButton.dataset.modalWishlist);
    saveButton.textContent = state.wishlist.includes(product.id) ? "♥ Saved" : "♡ Save item";
  }
});

document.querySelector("#wishlist-shortcut").addEventListener("click", () => {
  state.wishlistOnly = !state.wishlistOnly;
  state.category = "All";
  state.search = "";
  elements.search.value = "";
  document.querySelector("#wishlist-shortcut").setAttribute("aria-pressed", String(state.wishlistOnly));
  renderProducts();
  showToast(state.wishlistOnly ? "Showing your saved favourites." : "Showing all products.");
  document.querySelector("#shop").scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#theme-toggle").addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-theme");
  localStorage.setItem(STORAGE_KEYS.theme, isDark ? "dark" : "light");
  document.querySelector("#theme-toggle").setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
});

document.querySelector("#newsletter-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#newsletter-email");
  const message = document.querySelector("#newsletter-message");
  if (!input.checkValidity()) {
    input.reportValidity();
    return;
  }
  message.textContent = "Thanks for testing the form! No subscription was created.";
  input.value = "";
});

function validateField(input, errorElement, message, validator) {
  const valid = validator(input.value.trim());
  input.setAttribute("aria-invalid", String(!valid));
  errorElement.textContent = valid ? "" : message;
  return valid;
}

document.querySelector("#checkout-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#customer-name");
  const email = document.querySelector("#customer-email");
  const address = document.querySelector("#customer-address");
  const checks = [
    validateField(name, document.querySelector("#customer-name-error"), "Please enter at least 2 characters.", (value) => value.length >= 2),
    validateField(email, document.querySelector("#customer-email-error"), "Please enter a valid email address.", (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)),
    validateField(address, document.querySelector("#customer-address-error"), "Please enter an address of at least 8 characters.", (value) => value.length >= 8)
  ];

  if (checks.some((valid) => !valid)) {
    document.querySelector("#checkout-form [aria-invalid='true']")?.focus();
    return;
  }

  // Deliberately do not save customer details or create a real order.
  state.cart = [];
  saveStorage();
  renderCart();
  closeCheckout();
  document.querySelector("#checkout-form").reset();
  showToast("Demo checkout complete — no real order or payment was created.");
});

document.querySelectorAll("#checkout-form input, #checkout-form textarea").forEach((input) => {
  input.addEventListener("input", () => {
    if (input.getAttribute("aria-invalid") !== "true") return;
    input.setAttribute("aria-invalid", "false");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();
    closeCheckout();
    closeProductDetails();
  }
});

const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
  document.querySelector("#theme-toggle").setAttribute("aria-label", "Switch to light mode");
}

document.querySelector("#current-year").textContent = new Date().getFullYear();
renderProducts();
renderCart();
