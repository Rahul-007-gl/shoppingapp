const products = [
  { id: 1, name: "Apple MacBook Pro 14-inch · M4 Pro · 24 GB / 512 GB", category: "Laptops", price: 199900, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=82" },
  { id: 2, name: "Sony Alpha 7 IV Full-Frame Mirrorless Camera", category: "Cameras", price: 199990, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=82" },
  { id: 3, name: "Canon EOS R6 Mark II Full-Frame Camera", category: "Cameras", price: 189990, image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=700&q=82" },
  { id: 4, name: "Samsung 65-inch OLED S90F 4K Smart TV", category: "Home tech", price: 179990, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=700&q=82" },
  { id: 5, name: "Lenovo Legion Pro 5 Gaming Laptop · RTX 5070", category: "Laptops", price: 169990, image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=700&q=82" },
  { id: 6, name: "Apple iPhone 17 Pro · 256 GB", category: "Mobiles", price: 134900, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=700&q=82" },
  { id: 7, name: "Google Pixel 10 Pro XL · 256 GB", category: "Mobiles", price: 124999, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=82" },
  { id: 8, name: "Apple iPad Pro 13-inch · M4 · Wi-Fi", category: "Home tech", price: 129900, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=700&q=82" },
  { id: 9, name: "Samsung Galaxy S25 Ultra · 256 GB", category: "Mobiles", price: 129999, image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=700&q=82" },
  { id: 10, name: "Sony BRAVIA 8 · 55-inch OLED 4K TV", category: "Home tech", price: 124990, image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=700&q=82" },
  { id: 11, name: "Apple MacBook Air 15-inch · M4 · 16 GB / 256 GB", category: "Laptops", price: 144900, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=82" },
  { id: 12, name: "Apple Watch Ultra 2 · GPS + Cellular", category: "Wearables", price: 89900, image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=700&q=82" },
  { id: 13, name: "Sony PlayStation 5 Pro Console", category: "Home tech", price: 89990, image: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?auto=format&fit=crop&w=700&q=82" },
  { id: 14, name: "Garmin Forerunner 965 GPS Running Watch", category: "Wearables", price: 67990, image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=82" },
  { id: 15, name: "Dyson V15 Detect Absolute Cordless Vacuum", category: "Home tech", price: 65900, image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=700&q=82" },
  { id: 16, name: "Apple AirPods Max · USB-C", category: "Audio", price: 59900, image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=700&q=82" },
  { id: 17, name: "Samsung Galaxy Watch Ultra · LTE", category: "Wearables", price: 59999, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=82" },
  { id: 18, name: "Nintendo Switch OLED · White Edition", category: "Home tech", price: 31990, image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=700&q=82" },
  { id: 19, name: "Sony WH-1000XM6 Wireless Noise-Cancelling Headphones", category: "Audio", price: 39990, image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=700&q=82" },
  { id: 20, name: "boAt Nirvana Zenith Wireless Headphones", category: "Audio", price: 7999, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=700&q=82" },
  { id: 21, name: "JBL Charge 5 Portable Bluetooth Speaker", category: "Audio", price: 14999, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=82" },
  { id: 22, name: "Samsung Galaxy Buds3 Pro Wireless Earbuds", category: "Audio", price: 17999, image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=700&q=82" },
  { id: 23, name: "boAt Lunar Discovery Smartwatch", category: "Wearables", price: 2999, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=82" },
  { id: 24, name: "Fujifilm Instax Mini 12 Instant Camera Gift Set", category: "Toys & gifts", price: 10999, image: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?auto=format&fit=crop&w=700&q=82" },
  { id: 25, name: "LEGO Technic McLaren P1 Building Set", category: "Toys & gifts", price: 44999, image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=700&q=82" },
  { id: 26, name: "LEGO Botanicals Bouquet of Roses Gift Set", category: "Toys & gifts", price: 6599, image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=82" },
  { id: 27, name: "Logitech G29 Driving Force Racing Wheel", category: "Toys & gifts", price: 29995, image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=700&q=82" },
  { id: 28, name: "Kindle Paperwhite 16 GB · Without Ads", category: "Home tech", price: 16999, image: "https://images.unsplash.com/photo-1592496001020-d31bd830651f?auto=format&fit=crop&w=700&q=82" }
];

const currency = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
const grid = document.querySelector("#product-grid");
const searchInput = document.querySelector("#search-input");
const sortSelect = document.querySelector("#sort-select");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const cart = new Map(JSON.parse(localStorage.getItem("shopkart-cart-v2") || "[]"));
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

  visibleProducts.sort((a, b) => b.price - a.price);
  if (sortSelect.value === "price-low") visibleProducts.sort((a, b) => a.price - b.price);
  if (sortSelect.value === "price-high") visibleProducts.sort((a, b) => b.price - a.price);

  resultCount.textContent = `${visibleProducts.length} ${visibleProducts.length === 1 ? "deal" : "deals"}`;
  emptyState.hidden = visibleProducts.length > 0;
  grid.hidden = visibleProducts.length === 0;
  grid.innerHTML = visibleProducts.map((product, index) => {
    const isFavorite = favorites.has(product.id);
    return `<article class="product-card" style="animation-delay:${Math.min(index * 45, 270)}ms">
      <div class="product-image-wrap">
        <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy">
        <button class="heart-button${isFavorite ? " is-favorite" : ""}" type="button" data-favorite="${product.id}" aria-label="${isFavorite ? "Remove from" : "Add to"} wishlist">${isFavorite ? "♥" : "♡"}</button>
      </div>
      <div class="product-info">
        <p class="product-category">${product.category}</p>
        <h3 class="product-name">${product.name}</h3>
        <div class="price-row"><span class="price">${currency.format(product.price)}</span></div>
        <div class="product-footer"><span class="offer-note">Offers vary by seller</span><button class="add-button" type="button" data-add="${product.id}">Add to cart</button></div>
      </div>
    </article>`;
  }).join("");
}

function saveCart() {
  localStorage.setItem("shopkart-cart-v2", JSON.stringify([...cart.entries()]));
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