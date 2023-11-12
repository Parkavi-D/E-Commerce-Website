// You can add JavaScript code for adding products to the shopping cart here

// Example code to add a product to the shopping cart

// Array to store the cart items
let cartItems = [];

// Function to add a product to the cart
function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartList = document.getElementById("cart-items");
    cartList.innerHTML = ''; // Clear existing items

    let totalPrice = 0;
    for (let item of cartItems) {
        const listItem = document.createElement("li");
        listItem.innerText = `${item.name} - $${item.price}`;
        cartList.appendChild(listItem);
        totalPrice += item.price;
    }

    // Display total price
    const totalPriceDisplay = document.createElement("li");
    totalPriceDisplay.innerText = `Total: $${totalPrice}`;
    cartList.appendChild(totalPriceDisplay);
}

// Event listener for the "Add to Cart" button
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const product = this.parentNode;
        const productName = product.querySelector("h2").textContent;
        const productPrice = parseFloat(product.querySelector("p").textContent.split("$")[1]);
        addToCart(productName, productPrice);
    });
});
