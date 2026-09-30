const products = [
  { id: 1, name: "Acer Aspire Lite 14 · Ryzen 5 · 16 GB / 512 GB", category: "Laptops", price: 49999, badge: "Festival tech pick", offer: "Dashain-ready everyday laptop", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=82" },
  { id: 2, name: "Canon EOS R100 Mirrorless Camera Kit", category: "Cameras", price: 49990, badge: "Gift idea", offer: "Capture family celebrations", image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=700&q=82" },
  { id: 3, name: "Samsung Galaxy A16 5G · 8 GB / 256 GB", category: "Mobiles", price: 42999, badge: "Popular pick", offer: "Festival phone pick", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=700&q=82" },
  { id: 4, name: "Xiaomi Redmi Note 14 · 8 GB / 256 GB", category: "Mobiles", price: 39999, badge: "Under NPR 40K", offer: "Everyday 5G-ready pick", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=82" },
  { id: 5, name: "Samsung 43-inch Crystal UHD 4K Smart TV", category: "Home tech", price: 38999, badge: "Home upgrade", offer: "Movie nights for the family", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=700&q=82" },
  { id: 6, name: "Sony WH-CH720N Wireless Noise-Cancelling Headphones", category: "Audio", price: 18990, badge: "Audio pick", offer: "A thoughtful Tihar gift", image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=700&q=82" },
  { id: 7, name: "Realme C75 · 8 GB / 256 GB", category: "Mobiles", price: 27999, badge: "Budget phone", offer: "Big battery, everyday value", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=700&q=82" },
  { id: 8, name: "Samsung Galaxy Tab A9+ · Wi-Fi · 128 GB", category: "Home tech", price: 26999, badge: "Family pick", offer: "For reading, video and study", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=700&q=82" },
  { id: 9, name: "Banarasi-Style Woven Saree with Blouse Fabric", category: "Women's fashion", price: 15999, badge: "Dashain style", offer: "Festive outfit favorite", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=82" },
  { id: 10, name: "Fujifilm Instax Mini 12 Instant Camera", category: "Toys & gifts", price: 14999, badge: "Gift favorite", offer: "Make a memory, keep a print", image: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?auto=format&fit=crop&w=700&q=82" },
  { id: 11, name: "Embroidered Festive Lehenga Set", category: "Women's fashion", price: 12999, badge: "Celebration wear", offer: "For parties and family visits", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=82" },
  { id: 12, name: "JBL Tune 520BT Wireless On-Ear Headphones", category: "Audio", price: 8999, badge: "Audio pick", offer: "Colorful everyday listening", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=82" },
  { id: 13, name: "Maybelline Fit Me Foundation + Lip Color Set", category: "Beauty", price: 4999, badge: "Beauty gift", offer: "A ready-to-gift makeup set", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=82" },
  { id: 14, name: "boAt Wave Sigma 3 Smartwatch", category: "Wearables", price: 3999, badge: "Under NPR 5K", offer: "Everyday fitness and notifications", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=82" },
  { id: 15, name: "Cotton Kurta, Pant and Dupatta Set", category: "Women's fashion", price: 3499, badge: "Festive style", offer: "Comfortable family-visit outfit", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=82" },
  { id: 16, name: "Nykaa Mini Perfume and Body Mist Gift Set", category: "Beauty", price: 3299, badge: "Tihar gift", offer: "A little fragrance for someone special", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=82" },
  { id: 17, name: "LEGO Classic Creative Brick Box", category: "Toys & gifts", price: 2999, badge: "Kids' favorite", offer: "Creative play for the holidays", image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=700&q=82" },
  { id: 18, name: "Lakme 9 to 5 Primer + Matte Lip Color Duo", category: "Beauty", price: 2499, badge: "Beauty pick", offer: "A festive makeup-bag refresh", image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=700&q=82" },
  { id: 19, name: "Redmi Watch 5 Active", category: "Wearables", price: 2499, badge: "Budget wearable", offer: "Simple daily activity tracking", image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=82" },
  { id: 20, name: "Handwoven Dhaka Shawl · Gift Box", category: "Women's fashion", price: 2299, badge: "Made-in-Nepal gift", offer: "A warm local gift for Tihar", image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=700&q=82" },
  { id: 21, name: "Sony WH-CH520 Wireless Headphones", category: "Audio", price: 6990, badge: "Everyday audio", offer: "Lightweight gift pick", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=700&q=82" },
  { id: 22, name: "Galaxy A-Series Case and Screen Guard Set", category: "Mobiles", price: 799, badge: "Phone extra", offer: "Small add-on for a new phone", image: "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=700&q=82" },
  { id: 23, name: "Samsung Galaxy A06 · 4 GB / 64 GB", category: "Mobiles", price: 13999, badge: "Budget phone", offer: "Simple everyday smartphone", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=82" },
  { id: 24, name: "Xiaomi Redmi 14C · 6 GB / 128 GB", category: "Mobiles", price: 16999, badge: "Budget phone", offer: "Large screen on a budget", image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=700&q=82" },
  { id: 25, name: "boAt Rockerz 450 Bluetooth Headphones", category: "Audio", price: 1799, badge: "Under NPR 2K", offer: "Affordable music pick", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=700&q=82" },
  { id: 26, name: "Apple EarPods · USB-C", category: "Audio", price: 2990, badge: "Apple audio", offer: "Wired listening, no charging", image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=700&q=82" },
  { id: 27, name: "JBL Go 4 Portable Bluetooth Speaker", category: "Audio", price: 5999, badge: "Gift pick", offer: "Pocket-size music for gatherings", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=82" },
  { id: 28, name: "Gold-Tone Jhumka Earrings · Gift Pouch", category: "Women's fashion", price: 1299, badge: "Tihar sparkle", offer: "A little festive finishing touch", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=82" },
  { id: 29, name: "Maybelline Baby Lips Tinted Lip Balm", category: "Beauty", price: 499, badge: "Under NPR 500", offer: "Small festive add-on", image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?auto=format&fit=crop&w=700&q=82" },
  { id: 30, name: "Swiss Beauty Makeup Brush Set · 7 Pieces", category: "Beauty", price: 1499, badge: "Beauty pick", offer: "A useful gift for makeup lovers", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=82" },
  { id: 31, name: "L'Oreal Paris Hyaluron Moisture Serum", category: "Beauty", price: 1999, badge: "Self-care pick", offer: "A small self-care treat", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=82" },
  { id: 32, name: "Handbag and Wallet Gift Combo", category: "Women's fashion", price: 3499, badge: "Gift-ready", offer: "A practical gift for her", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=82" },
  { id: 33, name: "Teddy Bear with Dashain Gift Wrap", category: "Toys & gifts", price: 1499, badge: "For little ones", offer: "A soft surprise for a loved one", image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=700&q=82" },
  { id: 34, name: "Nepali Tea and Mithai Celebration Hamper", category: "Toys & gifts", price: 2499, badge: "Tihar hamper", offer: "Share a sweet celebration", image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=700&q=82" },
  { id: 35, name: "LEGO Botanicals Mini Orchid Gift Set", category: "Toys & gifts", price: 4999, badge: "Home gift", offer: "A keepsake for a loved one", image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=82" },
  { id: 36, name: "Fastrack Reflex Beat Smart Band", category: "Wearables", price: 1999, badge: "Budget wearable", offer: "A simple activity-tracking gift", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=82" },
  { id: 37, name: "Realme Buds T110 True Wireless Earbuds", category: "Audio", price: 2499, badge: "Budget audio", offer: "Wireless listening on a budget", image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=700&q=82" },
  { id: 38, name: "Portronics 20,000 mAh Fast-Charging Power Bank", category: "Home tech", price: 2999, badge: "Useful gift", offer: "Extra power for holiday travel", image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=700&q=82" },
  { id: 39, name: "Portronics MODESK Universal Laptop Stand", category: "Home tech", price: 1499, badge: "Desk upgrade", offer: "A practical everyday accessory", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=700&q=82" },
  { id: 40, name: "Dashain Tika and Jamara Celebration Gift Set", category: "Toys & gifts", price: 999, badge: "Dashain tradition", offer: "Festival essentials for family", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=700&q=82" }
];

const currency = new Intl.NumberFormat("en-IN", { style: "currency", currency: "NPR", maximumFractionDigits: 0 });
const grid = document.querySelector("#product-grid");
const searchInput = document.querySelector("#search-input");
const sortSelect = document.querySelector("#sort-select");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const cart = new Map(JSON.parse(localStorage.getItem("shopkart-cart-v3") || "[]"));
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
        <span class="discount-tag">${product.badge}</span>
        <button class="heart-button${isFavorite ? " is-favorite" : ""}" type="button" data-favorite="${product.id}" aria-label="${isFavorite ? "Remove from" : "Add to"} wishlist">${isFavorite ? "♥" : "♡"}</button>
      </div>
      <div class="product-info">
        <p class="product-category">${product.category}</p>
        <h3 class="product-name">${product.name}</h3>
        <div class="price-row"><span class="price">${currency.format(product.price)}</span></div>
        <div class="product-footer"><span class="offer-note">${product.offer}</span><button class="add-button" type="button" data-add="${product.id}">Add to cart</button></div>
      </div>
    </article>`;
  }).join("");
}

function saveCart() {
  localStorage.setItem("shopkart-cart-v3", JSON.stringify([...cart.entries()]));
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