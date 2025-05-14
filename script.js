// Add to Cart function
function addToCart() {
  alert("Product added to cart!");
  // Example of adding to cart (in a real scenario, you would update a cart array or localStorage)
  let cartItems = [
    { name: "Product 1", price: 49.99, quantity: 1 },
  ];
  updateCart(cartItems);
}

// Update cart display in cart.html
function updateCart(cartItems) {
  let cartTable = document.getElementById("cart-items");
  let totalPrice = 0;
  cartTable.innerHTML = "";  // Clear previous cart items

  cartItems.forEach(item => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>$${item.price}</td>
      <td><input type="number" value="${item.quantity}" min="1" onchange="updateTotal()" /></td>
      <td>$${(item.price * item.quantity).toFixed(2)}</td>
    `;
    cartTable.appendChild(row);
    totalPrice += item.price * item.quantity;
  });

  document.getElementById("total-price").innerText = totalPrice.toFixed(2);
}

// Checkout function (simple placeholder)
function checkout() {
  alert("Proceeding to checkout...");
}
