// Import the products data
import products from "./products.js";

// Initialize cart items count
let cartItemCount = 0;

// Function to handle adding a product to the cart
function addToCart(productId) {
    // Find the product by ID
    const product = products.find(item => item.id === productId);
    if (product) {
        // Increment cart item count
        cartItemCount++;
        // Update the cart icon
        updateCartIcon(cartItemCount);
        // Optionally, you can add the product to the cart list or perform other actions
        console.log(`Added ${product.name} to cart`);
    } else {
        console.log(`Product with ID ${productId} not found`);
    }
}

// Function to update the cart icon with the item count
function updateCartIcon(count) {
    const cartIcon = document.querySelector('.icon-cart span');
    if (cartIcon) {
        cartIcon.textContent = count.toString();
    }
}

// Add event listeners to all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.addCart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productId = parseInt(button.getAttribute('data-id'));
        addToCart(productId);
    });
});
