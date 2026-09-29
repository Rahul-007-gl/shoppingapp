const products = [
  { id: 1, name: "Soundcore Studio Wireless Headphones", category: "Audio", price: 3499, original: 5999, rating: 4.5, reviews: 1284, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=82", offer: "Bank offer: extra 10% off" },
  { id: 2, name: "Nova X5 5G Smartphone · 128 GB", category: "Mobiles", price: 24999, original: 32999, rating: 4.4, reviews: 2316, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=82", offer: "No-cost EMI available" },
  { id: 3, name: "AeroBook 14 Slim Laptop · 16 GB RAM", category: "Laptops", price: 54990, original: 69990, rating: 4.6, reviews: 864, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=82", offer: "Extra ₹2,000 off with card" },
  { id: 4, name: "PixelPro Mirrorless 4K Camera", category: "Cameras", price: 42990, original: 56990, rating: 4.7, reviews: 452, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=82", offer: "Free 64 GB memory card" },
  { id: 5, name: "Pulse Active Smartwatch · GPS", category: "Wearables", price: 4999, original: 8999, rating: 4.3, reviews: 1860, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=82", offer: "Up to 6 months no-cost EMI" },
  { id: 6, name: "BoomBox Go Portable Bluetooth Speaker", category: "Audio", price: 2799, original: 4499, rating: 4.5, reviews: 1037, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=82", offer: "Save ₹500 with UPI" },
  { id: 7, name: "ViewMax 55-inch 4K Smart TV", category: "Home tech", price: 38990, original: 54990, rating: 4.4, reviews: 672, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=700&q=82", offer: "Free installation included" },
  { id: 8, name: "Tab Air 11-inch Wi-Fi Tablet", category: "Home tech", price: 18999, original: 25999, rating: 4.2, reviews: 938, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=700&q=82", offer: "Exchange bonus up to ₹3,000" },
  { id: 9, name: "GameCore Wireless Controller", category: "Home tech", price: 3899, original: 5499, rating: 4.6, reviews: 541, image: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?auto=format&fit=crop&w=700&q=82", offer: "Extra 5% off with bank cards" },
  { id: 10, name: "AirBeat True Wireless Earbuds", category: "Audio", price: 1999, original: 3999, rating: 4.1, reviews: 2910, image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=700&q=82", offer: "Free delivery on this item" }
];

const currency = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
const grid = document.querySelector("#product-grid");
const searchInput = document.querySelector("#search-input");
const sortSelect = document.querySelector("#sort-select");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const cart = new Map(JSON.parse(localStorage.getItem("shopkart-cart") || "[]"));
const favorites = new Set();
let activeCategory = "All";
let toastTimer;

function renderProducts() {
  const query = searchInput.value.trim().toLowerCase();
  let visibleProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesQuery = `${product.name} ${product.category}`.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  if (sortSelect.value === "price-low") visibleProducts.sort((a, b) => a.price - b.price);
  if (sortSelect.value === "price-high") visibleProducts.sort((a, b) => b.price - a.price);
  if (sortSelect.value === "rating") visibleProducts.sort((a, b) => b.rating - a.rating);

  resultCount.textContent = `${visibleProducts.length} ${visibleProducts.length === 1 ? "deal" : "deals"}`;
  emptyState.hidden = visibleProducts.length > 0;
  grid.hidden = visibleProducts.length === 0;
  grid.innerHTML = visibleProducts.map((product, index) => {
    const discount = Math.round((1 - product.price / product.original) * 100);
    const isFavorite = favorites.has(product.id);
    return `<article class="product-card" style="animation-delay:${Math.min(index * 45, 270)}ms">
      <div class="product-image-wrap">
        <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy">
        <span class="discount-tag">${discount}% OFF</span>
        <button class="heart-button${isFavorite ? " is-favorite" : ""}" type="button" data-favorite="${product.id}" aria-label="${isFavorite ? "Remove from" : "Add to"} wishlist">${isFavorite ? "♥" : "♡"}</button>
      </div>
      <div class="product-info">
        <p class="product-category">${product.category}</p>
        <h3 class="product-name">${product.name}</h3>
        <div class="rating-row"><span class="rating">${product.rating} <span>★</span></span><span class="rating-count">(${product.reviews.toLocaleString("en-IN")})</span></div>
        <div class="price-row"><span class="price">${currency.format(product.price)}</span><span class="original-price">${currency.format(product.original)}</span></div>
        <div class="product-footer"><span class="offer-note">${product.offer}</span><button class="add-button" type="button" data-add="${product.id}">Add to cart</button></div>
      </div>
    </article>`;
  }).join("");
}

function saveCart() {
  localStorage.setItem("shopkart-cart", JSON.stringify([...cart.entries()]));
}

function renderCart() {
  const items = [...cart.entries()].filter(([, quantity]) => quantity > 0);
  const count = items.reduce((total, [, quantity]) => total + quantity, 0);
  const subtotal = items.reduce((total, [id, quantity]) => total + products.find((product) => product.id === id).price * quantity, 0);
  document.querySelector("#cart-count").textContent = count;
  document.querySelector("#cart-title-count").textContent = `(${count})`;
  document.querySelector("#cart-empty").hidden = count > 0;
  document.querySelector("#cart-summary").hidden = count === 0;
  document.querySelector("#cart-subtotal").textContent = currency.format(subtotal);
  document.querySelector("#cart-items").innerHTML = items.map(([id, quantity]) => {
    const product = products.find((item) => item.id === id);
    return `<article class="cart-row">
      <img src="${product.image}" alt="" loading="lazy">
      <div><h3>${product.name}</h3><span class="cart-row-price">${currency.format(product.price)}</span>
        <div class="quantity-controls"><button type="button" data-quantity="${id}" data-change="-1" aria-label="Decrease quantity">−</button><span>${quantity}</span><button type="button" data-quantity="${id}" data-change="1" aria-label="Increase quantity">+</button></div>
      </div><button class="remove-item" type="button" data-remove="${id}" aria-label="Remove ${product.name}">×</button>
    </article>`;
  }).join("");
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2300);
}

function setCartOpen(isOpen) {
  const drawer = document.querySelector("#cart-drawer");
  const backdrop = document.querySelector("#drawer-backdrop");
  drawer.classList.toggle("is-open", isOpen);
  drawer.setAttribute("aria-hidden", String(!isOpen));
  backdrop.hidden = !isOpen;
  document.body.style.overflow = isOpen ? "hidden" : "";
  if (isOpen) document.querySelector("#cart-close").focus();
}

document.querySelector("#search-form").addEventListener("submit", (event) => event.preventDefault());
searchInput.addEventListener("input", renderProducts);
sortSelect.addEventListener("change", renderProducts);
document.querySelector("#category-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  document.querySelectorAll(".category-item").forEach((item) => item.classList.toggle("is-active", item === button));
  renderProducts();
});
grid.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const favoriteButton = event.target.closest("[data-favorite]");
  if (addButton) {
    const id = Number(addButton.dataset.add);
    cart.set(id, (cart.get(id) || 0) + 1);
    saveCart();
    renderCart();
    showToast("Added to your cart");
  }
  if (favoriteButton) {
    const id = Number(favoriteButton.dataset.favorite);
    favorites.has(id) ? favorites.delete(id) : favorites.add(id);
    renderProducts();
  }
});
document.querySelector("#clear-search").addEventListener("click", () => {
  searchInput.value = "";
  activeCategory = "All";
  document.querySelectorAll(".category-item").forEach((item) => item.classList.toggle("is-active", item.dataset.category === "All"));
  renderProducts();
});
document.querySelector("#cart-items").addEventListener("click", (event) => {
  const quantityButton = event.target.closest("[data-quantity]");
  const removeButton = event.target.closest("[data-remove]");
  if (quantityButton) {
    const id = Number(quantityButton.dataset.quantity);
    const nextQuantity = (cart.get(id) || 0) + Number(quantityButton.dataset.change);
    if (nextQuantity <= 0) cart.delete(id);
    else cart.set(id, nextQuantity);
  }
  if (removeButton) cart.delete(Number(removeButton.dataset.remove));
  saveCart();
  renderCart();
});
document.querySelector("#cart-open").addEventListener("click", () => setCartOpen(true));
document.querySelector("#cart-close").addEventListener("click", () => setCartOpen(false));
document.querySelector("#drawer-backdrop").addEventListener("click", () => setCartOpen(false));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setCartOpen(false);
});
document.querySelector("#checkout-button").addEventListener("click", () => showToast("Checkout is ready for your next step"));
document.querySelector(".account-button").addEventListener("click", () => showToast("Account sign-in is coming soon"));

renderProducts();
renderCart();