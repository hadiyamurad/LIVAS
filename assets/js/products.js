// Products JavaScript file for LIVΛS

let allProducts = [];

// Embedded products data (fallback when JSON fetch fails due to CORS)
const embeddedProducts = [
    {
      "id": 1,
      "name": "Classic Tailored Blazer",
      "category": "men",
      "price": 299.99,
      "description": "A timeless tailored blazer crafted from premium wool blend. Perfect for both formal occasions and smart casual wear. Features a modern slim fit, notch lapel, and functional button cuffs.",
      "images": [
        "assets/images/men1.webp",
        "assets/images/men1-1.webp",
        "assets/images/men1-2.webp",
        "assets/images/men1-3.webp"
      ],
      "sizes": ["S", "M", "L", "XL", "XXL"],
      "colors": ["Navy", "Charcoal", "Black"]
    },
    {
      "id": 2,
      "name": "Premium Denim Jacket",
      "category": "men",
      "price": 189.99,
      "description": "A rugged yet refined denim jacket made from organic cotton. Features a classic trucker design with modern updates including a comfortable fit and premium hardware.",
      "images": [
         "assets/images/men1.webp",
        "assets/images/men1-1.webp",
        "assets/images/men1-2.webp",
        "assets/images/men1-3.webp"
      ],
      "sizes": ["S", "M", "L", "XL"],
      "colors": ["Indigo", "Black", "Light Blue"]
    },
    {
      "id": 3,
      "name": "Luxury Cashmere Sweater",
      "category": "men",
      "price": 249.99,
      "description": "Ultra-soft cashmere sweater in a relaxed fit. Handcrafted with attention to detail, this piece offers exceptional comfort and timeless elegance.",
      "images": [
         "assets/images/men1.webp",
        "assets/images/men1-1.webp",
        "assets/images/men1-2.webp",
        "assets/images/men1-3.webp"
      ],
      "sizes": ["S", "M", "L", "XL", "XXL"],
      "colors": ["Cream", "Navy", "Charcoal"]
    },
    {
      "id": 4,
      "name": "Slim Fit Chinos",
      "category": "men",
      "price": 129.99,
      "description": "Versatile slim-fit chinos in premium cotton twill. Perfect for the office or weekend wear. Features a modern tapered leg and comfortable stretch.",
      "images": [
         "assets/images/men1.webp",
        "assets/images/men1-1.webp",
        "assets/images/men1-2.webp",
        "assets/images/men1-3.webp"
      ],
      "sizes": ["28", "30", "32", "34", "36"],
      "colors": ["Khaki", "Navy", "Olive"]
    },
    {
      "id": 5,
      "name": "Leather Moto Jacket",
      "category": "men",
      "price": 449.99,
      "description": "Authentic leather moto jacket with a rebellious edge. Crafted from genuine lambskin leather with quilted details and metal hardware for a bold statement.",
      "images": [
        "assets/images/men1.webp",
        "assets/images/men1-1.webp",
        "assets/images/men1-2.webp",
        "assets/images/men1-3.webp"
      ],
      "sizes": ["S", "M", "L", "XL"],
      "colors": ["Black", "Brown"]
    },
    {
      "id": 6,
      "name": "Elegant Midi Dress",
      "category": "women",
      "price": 279.99,
      "description": "A sophisticated midi dress in flowing silk-blend fabric. Features a flattering A-line silhouette, delicate pleating, and a timeless design perfect for any occasion.",
      "images": [
        "assets/images/women1.jpeg",
        "assets/images/women1-1.webp",
        "assets/images/women1-2.webp",
        "assets/images/women1-3.webp"
      ],
      "sizes": ["XS", "S", "M", "L", "XL"],
      "colors": ["Black", "Navy", "Burgundy"]
    },
    {
      "id": 7,
      "name": "Designer Blazer",
      "category": "women",
      "price": 319.99,
      "description": "A structured blazer with a modern twist. Tailored to perfection with a slightly oversized fit, this piece adds sophistication to any outfit.",
      "images": [
       "assets/images/women1.jpeg",
        "assets/images/women1-1.webp",
        "assets/images/women1-2.webp",
        "assets/images/women1-3.webp"
      ],
      "sizes": ["XS", "S", "M", "L"],
      "colors": ["Cream", "Black", "Navy"]
    },
    {
      "id": 8,
      "name": "Silk Wrap Blouse",
      "category": "women",
      "price": 199.99,
      "description": "Luxurious silk wrap blouse with a flattering V-neckline. The wrap design creates an elegant silhouette while the premium fabric ensures comfort and style.",
      "images": [
        "assets/images/women1.jpeg",
        "assets/images/women1-1.webp",
        "assets/images/women1-2.webp",
        "assets/images/women1-3.webp"
      ],
      "sizes": ["XS", "S", "M", "L", "XL"],
      "colors": ["White", "Blush", "Navy"]
    },
    {
      "id": 9,
      "name": "High-Waisted Trousers",
      "category": "women",
      "price": 169.99,
      "description": "Tailored high-waisted trousers in premium wool blend. Features a wide-leg silhouette, front pleats, and a polished finish for a professional yet modern look.",
      "images": [
       "assets/images/women1.jpeg",
        "assets/images/women1-1.webp",
        "assets/images/women1-2.webp",
        "assets/images/women1-3.webp"
      ],
      "sizes": ["XS", "S", "M", "L"],
      "colors": ["Black", "Navy", "Cream"]
    },
    {
      "id": 10,
      "name": "Knit Cardigan",
      "category": "women",
      "price": 189.99,
      "description": "A cozy yet elegant knit cardigan perfect for layering. Made from soft merino wool blend with a relaxed fit and button-front closure.",
      "images": [
        "assets/images/women1.jpeg",
        "assets/images/women1-1.webp",
        "assets/images/women1-2.webp",
        "assets/images/women1-3.webp"
      ],
      "sizes": ["XS", "S", "M", "L", "XL"],
      "colors": ["Cream", "Navy", "Burgundy"]
    },
    {
      "id": 11,
      "name": "Leather Crossbody Bag",
      "category": "accessories",
      "price": 249.99,
      "description": "A sophisticated leather crossbody bag crafted from premium Italian leather. Features an adjustable strap, multiple compartments, and a timeless design.",
      "images": [
        "assets/images/acc1.webp",
        "assets/images/acc1-1.webp",
        "assets/images/acc1-2.webp",
        "assets/images/acc1-3.webp"
      ],
      "sizes": ["One Size"],
      "colors": ["Black", "Brown", "Cream"]
    },
    {
      "id": 12,
      "name": "Designer Tote Bag",
      "category": "accessories",
      "price": 199.99,
      "description": "Spacious tote bag in premium canvas and leather trim. Perfect for daily use with reinforced handles and a roomy interior for all your essentials.",
      "images": [
         "assets/images/acc1.webp",
        "assets/images/acc1-1.webp",
        "assets/images/acc1-2.webp",
        "assets/images/acc1-3.webp"
      ],
      "sizes": ["One Size"],
      "colors": ["Beige", "Black", "Navy"]
    },
    {
      "id": 13,
      "name": "Luxury Clutch Bag",
      "category": "accessories",
      "price": 179.99,
      "description": "An elegant evening clutch in satin with metallic accents. Compact yet spacious enough for essentials, perfect for special occasions.",
      "images": [
        "assets/images/acc1.webp",
        "assets/images/acc1-1.webp",
        "assets/images/acc1-2.webp",
        "assets/images/acc1-3.webp"
      ],
      "sizes": ["One Size"],
      "colors": ["Black", "Gold", "Silver"]
    },
    {
      "id": 14,
      "name": "Classic Leather Belt",
      "category": "accessories",
      "price": 89.99,
      "description": "A timeless leather belt with a refined buckle. Crafted from genuine leather with a classic design that complements any outfit.",
      "images": [
     "assets/images/acc1.webp",
        "assets/images/acc1-1.webp",
        "assets/images/acc1-2.webp",
        "assets/images/acc1-3.webp"
      ],
      "sizes": ["S", "M", "L", "XL"],
      "colors": ["Black", "Brown", "Tan"]
    },
    {
      "id": 15,
      "name": "Designer Chain Belt",
      "category": "accessories",
      "price": 129.99,
      "description": "A statement chain belt with an adjustable design. Features premium metal hardware and a modern aesthetic perfect for elevating any look.",
      "images": [
       "assets/images/acc1.webp",
        "assets/images/acc1-1.webp",
        "assets/images/acc1-2.webp",
        "assets/images/acc1-3.webp"
      ],
      "sizes": ["S", "M", "L"],
      "colors": ["Gold", "Silver", "Black"]
    }
];

// Immediately populate allProducts with embedded data (available right away)
allProducts = embeddedProducts;

// Load products from JSON (with fallback to embedded data)
async function loadProducts() {
    const jsonPath = 'assets/data/products.json';
    
    try {
        console.log('Loading products from:', jsonPath);
        
        const response = await fetch(jsonPath);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (!data.products || !Array.isArray(data.products)) {
            throw new Error('Invalid JSON structure: products array not found');
        }
        
        // Update with JSON data if successfully loaded
        allProducts = data.products;
        console.log(`✅ Loaded ${allProducts.length} products from JSON`);
        return allProducts;
    } catch (error) {
        // Keep using embedded products (already set above)
        console.warn('⚠️ Could not load products from JSON (CORS issue). Using embedded data...');
        console.log(`✅ Using ${allProducts.length} embedded products`);
        console.log('💡 Tip: Use a local server (python -m http.server 8000) to avoid CORS issues');
        return allProducts;
    }
}

// Render product card
function renderProductCard(product) {
    if (!product || !product.images || product.images.length === 0) {
        console.warn('Invalid product data:', product);
        return '';
    }
    
    const description = product.description ? product.description.substring(0, 100) + '...' : 'Premium quality product';
    const imageUrl = product.images[0] || 'assets/images/placeholder.webp';
    
    return `
        <div class="col-md-6 col-lg-4">
            <div class="product-card">
                <img src="${imageUrl}" alt="${product.name}" class="product-card-img" loading="lazy" 
                     onerror="this.src='assets/images/placeholder.webp'; this.onerror=null;">
                <div class="product-card-body">
                    <h3 class="product-card-title">${product.name}</h3>
                    <div class="product-card-price">$${product.price.toFixed(2)}</div>
                    <p class="product-card-description">${description}</p>
                    <div class="product-card-actions">
                        <button class="btn btn-primary" onclick="addToCartFromCard(${product.id})">Add to Cart</button>
                        <a href="product-details.html?id=${product.id}" class="btn btn-outline">View Details</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Filter products by category
function filterProducts(category) {
    if (category === 'all') {
        return allProducts;
    }
    return allProducts.filter(product => product.category === category);
}

// Display products
function displayProducts(products, containerId) {
    console.log(`📦 Displaying products in container: ${containerId}`);
    
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`❌ Container with id "${containerId}" not found`);
        return;
    }
    
    if (!products || products.length === 0) {
        console.warn(`⚠️ No products to display for ${containerId}`);
        container.innerHTML = '<div class="col-12 text-center"><p style="color: var(--muted-beige); font-size: 1.1rem;">No products found.</p></div>';
        return;
    }
    
    console.log(`✅ Rendering ${products.length} products in ${containerId}`);
    
    // Clear and render products
    container.innerHTML = '';
    
    products.forEach((product, index) => {
        if (product && product.id && product.name) {
            const cardHtml = renderProductCard(product);
            container.innerHTML += cardHtml;
        } else {
            console.warn(`⚠️ Invalid product at index ${index}:`, product);
        }
    });
    
    // Trigger fade-in animation for new products
    setTimeout(() => {
        const productCards = container.querySelectorAll('.product-card');
        productCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 50);
        });
    }, 10);
}

// Initialize products page
async function initProductsPage() {
    try {
        console.log('🔄 Starting products page initialization...');
        
        const productsGrid = document.getElementById('productsGrid');
        if (!productsGrid) {
            console.error('❌ productsGrid element not found!');
            return;
        }
        
        await loadProducts();
        
        if (allProducts.length === 0) {
            console.error('❌ No products loaded');
            productsGrid.innerHTML = '<div class="col-12 text-center"><p style="color: var(--muted-beige); font-size: 1.1rem;">No products available. Please check the console for errors.</p></div>';
            return;
        }
        
        // Get category from URL parameter
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get('category') || 'all';
        
        // Set active filter tab
        const filterTabs = document.querySelectorAll('.filter-tab');
        filterTabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.getAttribute('data-filter') === categoryParam) {
                tab.classList.add('active');
            }
        });
        
        // Display filtered products
        const filteredProducts = filterProducts(categoryParam);
        displayProducts(filteredProducts, 'productsGrid');
        
        // Add filter tab event listeners
        filterTabs.forEach(tab => {
            // Remove existing listeners by cloning
            const newTab = tab.cloneNode(true);
            tab.parentNode.replaceChild(newTab, tab);
            
            newTab.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active tab
                filterTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                // Filter and display products
                const filtered = filterProducts(filter);
                displayProducts(filtered, 'productsGrid');
                
                // Update URL without reloading
                const url = new URL(window.location);
                url.searchParams.set('category', filter);
                window.history.pushState({}, '', url);
            });
        });
        
        console.log('✅ Products page initialized successfully');
    } catch (error) {
        console.error('❌ Error initializing products page:', error);
    }
}

// Initialize homepage products
async function initHomePage() {
    try {
        console.log('🔄 Starting homepage initialization...');
        
        const featuredContainer = document.getElementById('featuredProducts');
        const newArrivalsContainer = document.getElementById('newArrivals');
        
        if (!featuredContainer && !newArrivalsContainer) {
            return;
        }
        
        await loadProducts();
        
        if (allProducts.length === 0) {
            return;
        }
        
        // Featured products: first 3 products
        if (featuredContainer) {
            const featuredProducts = allProducts.slice(0, 3);
            displayProducts(featuredProducts, 'featuredProducts');
        }
        
        // New arrivals: next 3 products
        if (newArrivalsContainer) {
            const newArrivals = allProducts.slice(3, 6);
            displayProducts(newArrivals, 'newArrivals');
        }
        
        console.log('✅ Homepage initialized successfully');
    } catch (error) {
        console.error('❌ Error initializing homepage products:', error);
    }
}

// Add to cart from product card
function addToCartFromCard(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;
    
    const color = product.colors[0];
    
    if (typeof addToCart === 'function') {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            color: color,
            quantity: 1
        });
        
        // Show feedback
        alert('Product added to cart!');
        if (typeof updateCartBadge === 'function') {
            updateCartBadge();
        }
    } else {
        window.location.href = `product-details.html?id=${productId}`;
    }
}

// Initialize based on current page
document.addEventListener('DOMContentLoaded', function() {
    const hasProductsGrid = document.getElementById('productsGrid');
    const hasFeaturedProducts = document.getElementById('featuredProducts');
    const hasNewArrivals = document.getElementById('newArrivals');
    
    if (hasProductsGrid) {
        initProductsPage();
    }
    
    if (hasFeaturedProducts || hasNewArrivals) {
        initHomePage();
    }
});

// Make functions and data available globally
window.addToCartFromCard = addToCartFromCard;
window.filterProducts = filterProducts;
window.displayProducts = displayProducts;
window.initProductsPage = initProductsPage;
window.initHomePage = initHomePage;
window.loadProducts = loadProducts;
window.allProducts = allProducts;

// Log that products are available
console.log(`✅ Products.js loaded: ${allProducts.length} products available immediately`);