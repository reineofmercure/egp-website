let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  document.getElementById('cart-count').textContent = cart.length;
  alert(`${name} added to cart for ${price} MAD.`);
  renderCart();
}

function renderCart() {
  const cartDiv = document.getElementById("cart");
  const list = document.getElementById("cart-items");
  const total = document.getElementById("total");

  cartDiv.classList.remove("hidden");
  list.innerHTML = "";
  let totalPrice = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price} MAD`;
    list.appendChild(li);
    totalPrice += item.price;
  });

  total.textContent = `Total: ${totalPrice} MAD`;
}

// Search Function
document.getElementById("search").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  const products = document.querySelectorAll(".product-card");

  products.forEach(product => {
    const text = product.textContent.toLowerCase();
    product.style.display = text.includes(searchTerm) ? "block" : "none";
  });
});

// Toggle login modal
function toggleLogin() {
  document.getElementById("login-modal").classList.toggle("hidden");
}

// Hook up login button
document.getElementById("login-link").addEventListener("click", function (e) {
  e.preventDefault();
  toggleLogin();
});

// Help form submit
function submitHelpForm(event) {
  event.preventDefault();
  alert("Thank you! We'll get back to you soon.");
}

// Show help section on click
document.querySelector('a[href="#help"]').addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("help-section").classList.toggle("hidden");
});