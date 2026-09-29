const products = [
  { id: 1, name: "Sony Alpha 7 IV Full-Frame Mirrorless Camera Body", category: "Cameras", price: 219990, original: 249990, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=82" },
  { id: 2, name: "Canon EOS R6 Mark II Full-Frame Camera Body", category: "Cameras", price: 209990, original: 239990, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=82" },
  { id: 3, name: "Apple MacBook Pro 14-inch · M4 Pro · 24 GB / 512 GB", category: "Laptops", price: 199900, original: 209900, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=82" },
  { id: 4, name: "Samsung Galaxy Z Fold6 · 512 GB", category: "Mobiles", price: 189999, original: 200999, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=82" },
  { id: 5, name: "LG OLED evo C4 · 65-inch 4K Smart TV", category: "Home tech", price: 169990, original: 229990, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=700&q=82" },
  { id: 6, name: "Apple iPhone 16 Pro Max · 256 GB", category: "Mobiles", price: 144900, original: 154900, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=82" },
  { id: 7, name: "Apple MacBook Air 15-inch · M4 · 16 GB / 256 GB", category: "Laptops", price: 134900, original: 144900, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=82" },
  { id: 8, name: "Samsung Galaxy S25 Ultra · 256 GB", category: "Mobiles", price: 129999, original: 141999, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=82" },
  { id: 9, name: "Apple iPad Pro 13-inch · M4 · 256 GB Wi-Fi", category: "Home tech", price: 129900, original: 149900, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=700&q=82" },
  { id: 10, name: "Sony BRAVIA 7 · 65-inch Mini LED 4K TV", category: "Home tech", price: 119990, original: 159990, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=700&q=82" },
  { id: 11, name: "ASUS ROG Strix G16 Gaming Laptop · RTX graphics", category: "Laptops", price: 114990, original: 139990, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=82" },
  { id: 12, name: "Apple Watch Ultra 2 · GPS + Cellular", category: "Wearables", price: 89900, original: 89900, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=82" },
  { id: 13, name: "Sony Alpha A6400 · 16–50 mm Lens Kit", category: "Cameras", price: 89990, original: 99990, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=82" },
  { id: 14, name: "Apple iPhone 16 · 128 GB", category: "Mobiles", price: 69900, original: 79900, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=82" },
  { id: 15, name: "Samsung 55-inch QLED Q60D 4K Smart TV", category: "Home tech", price: 59990, original: 79990, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=700&q=82" },
  { id: 16, name: "Sony PlayStation 5 Slim Disc Edition", category: "Home tech", price: 54990, original: 54990, image: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?auto=format&fit=crop&w=700&q=82" },
  { id: 17, name: "Apple Watch Series 10 · GPS · 46 mm", category: "Wearables", price: 46900, original: 46900, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=82" },
  { id: 18, name: "Samsung Galaxy Tab S9 FE+ · 128 GB Wi-Fi", category: "Home tech", price: 44999, original: 54999, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=700&q=82" },
  { id: 19, name: "Garmin Venu 3 GPS Smartwatch", category: "Wearables", price: 41990, original: 47990, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=82" },
  { id: 20, name: "Bose QuietComfort Ultra Wireless Headphones", category: "Audio", price: 35900, original: 35900, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=82" },
  { id: 21, name: "Sony WH-1000XM5 Wireless Noise-Cancelling Headphones", category: "Audio", price: 29990, original: 34990, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=82" },
  { id: 22, name: "Apple AirPods Pro 2 · USB-C", category: "Audio", price: 24900, original: 26900, image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=700&q=82" },
  { id: 23, name: "JBL Charge 5 Portable Bluetooth Speaker", category: "Audio", price: 14999, original: 17999, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=82" }
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
        <div class="price-row"><span class="price">${currency.format(product.price)}</span><span class="original-price">${currency.format(product.original)}</span></div>
        <div class="product-footer"><span class="offer-note">Offers vary by seller</span><button class="add-button" type="button" data-add="${product.id}">Add to cart</button></div>
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