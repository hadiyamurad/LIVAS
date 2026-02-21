// Cart JavaScript file for LIVΛS

// Get cart from localStorage
function getCart() {
    try {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    } catch (error) {
        console.error('Error getting cart:', error);
        return [];
    }
}

// Save cart to localStorage
function saveCart(cart) {
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
        if (typeof updateCartBadge === 'function') {
            updateCartBadge();
        }
    } catch (error) {
        console.error('Error saving cart:', error);
    }
}

// Add item to cart
function addToCart(item) {
    const cart = getCart();
    
    // Check if item already exists in cart (same id, size, and color)
    const existingItemIndex = cart.findIndex(
        cartItem => cartItem.id === item.id && 
                   cartItem.size === item.size && 
                   cartItem.color === item.color
    );
    
    if (existingItemIndex > -1) {
        // Update quantity
        cart[existingItemIndex].quantity += item.quantity;
    } else {
        // Add new item
        cart.push(item);
    }
    
    saveCart(cart);
    return cart;
}

// Remove item from cart
function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    return cart;
}

// Update item quantity in cart
function updateCartQuantity(index, quantity) {
    const cart = getCart();
    if (cart[index]) {
        cart[index].quantity = Math.max(1, parseInt(quantity));
        saveCart(cart);
    }
    return cart;
}

// Clear cart
function clearCart() {
    localStorage.removeItem('cart');
    updateCartBadge();
}

// Calculate cart total
function calculateCartTotal() {
    const cart = getCart();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 10;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;
    
    return {
        subtotal: subtotal,
        shipping: shipping,
        tax: tax,
        total: total
    };
}

// Display cart items
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const emptyCartDiv = document.getElementById('emptyCart');
    
    if (!cartItemsContainer) return;
    
    const cart = getCart();
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '';
        if (emptyCartDiv) {
            emptyCartDiv.style.display = 'block';
        }
        const checkoutBtn = document.getElementById('checkoutBtn');
        if (checkoutBtn) {
            checkoutBtn.style.display = 'none';
        }
        return;
    }
    
    if (emptyCartDiv) {
        emptyCartDiv.style.display = 'none';
    }
    
    cartItemsContainer.innerHTML = '';
    
    cart.forEach((item, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
                <h3 class="cart-item-title">${item.name}</h3>
                <p class="cart-item-info">Size: ${item.size} | Color: ${item.color}</p>
                <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                <div class="cart-item-controls">
                    <div class="quantity-selector">
                        <button class="quantity-btn" onclick="decreaseQuantity(${index})">-</button>
                        <input type="number" class="quantity-input" value="${item.quantity}" 
                               min="1" onchange="updateQuantity(${index}, this.value)">
                        <button class="quantity-btn" onclick="increaseQuantity(${index})">+</button>
                    </div>
                    <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
    });
    
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.style.display = 'block';
    }
    
    updateCartSummary();
}

// Update cart summary
function updateCartSummary() {
    const totals = calculateCartTotal();
    
    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('total');
    
    if (subtotalEl) subtotalEl.textContent = `$${totals.subtotal.toFixed(2)}`;
    if (shippingEl) shippingEl.textContent = `$${totals.shipping.toFixed(2)}`;
    if (taxEl) taxEl.textContent = `$${totals.tax.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${totals.total.toFixed(2)}`;
}

// Quantity control functions
function increaseQuantity(index) {
    const cart = getCart();
    if (cart[index]) {
        cart[index].quantity += 1;
        saveCart(cart);
        displayCartItems();
    }
}

function decreaseQuantity(index) {
    const cart = getCart();
    if (cart[index] && cart[index].quantity > 1) {
        cart[index].quantity -= 1;
        saveCart(cart);
        displayCartItems();
    }
}

function updateQuantity(index, quantity) {
    updateCartQuantity(index, quantity);
    displayCartItems();
}

function removeItem(index) {
    if (confirm('Are you sure you want to remove this item from your cart?')) {
        removeFromCart(index);
        displayCartItems();
    }
}

// Initialize cart page
function initCartPage() {
    displayCartItems();
    
    // Handle checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            const cart = getCart();
            if (cart.length === 0) {
                alert('Your cart is empty');
                return;
            }
            
            // Save cart data to sessionStorage for checkout
            sessionStorage.setItem('checkoutData', JSON.stringify({
                items: cart,
                totals: calculateCartTotal()
            }));
            
            window.location.href = 'checkout.html';
        });
    }
}

// Initialize cart page on load
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (currentPage === 'cart.html' || currentPage.includes('cart')) {
        initCartPage();
    }
    
    // Update cart badge
    updateCartBadge();
});

// Make functions available globally
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.clearCart = clearCart;
window.getCart = getCart;
window.increaseQuantity = increaseQuantity;
window.decreaseQuantity = decreaseQuantity;
window.updateQuantity = updateQuantity;
window.removeItem = removeItem;
window.displayCartItems = displayCartItems;
window.calculateCartTotal = calculateCartTotal;
