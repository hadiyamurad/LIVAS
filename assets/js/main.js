// Main JavaScript file for LIVΛS website

// Navbar scroll effect - Smooth transition
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('.hero-section');
    
    if (!navbar) return;
    
    // Only apply transparent state on homepage with hero section
    if (heroSection && (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('LIVAS/'))) {
        const scrollThreshold = 100;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > scrollThreshold) {
            // STATE 2: Pill-shaped navbar (scrolled)
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('navbar-scrolled');
        } else {
            // STATE 1: Transparent navbar (on hero)
            navbar.classList.add('navbar-transparent');
            navbar.classList.remove('navbar-scrolled');
        }
    }
});

// Initialize navbar state on page load
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('.hero-section');
    
    if (!navbar) return;
    
    // If there's no hero section (like on products, cart, etc.), keep pill-shaped
    if (!heroSection) {
        navbar.classList.remove('navbar-transparent');
        navbar.classList.remove('navbar-scrolled');
        // Already pill-shaped by default CSS
    } else {
        // If there's a hero section, start transparent
        if (window.scrollY <= 100) {
            navbar.classList.add('navbar-transparent');
            navbar.classList.remove('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('navbar-scrolled');
        }
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update cart badge
function updateCartBadge() {
    const cartBadges = document.querySelectorAll('#cartBadge, .cart-badge');
    cartBadges.forEach(cartBadge => {
        if (cartBadge) {
            try {
                const cart = JSON.parse(localStorage.getItem('cart')) || [];
                const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
                cartBadge.textContent = totalItems;
                cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
            } catch (error) {
                console.error('Error updating cart badge:', error);
                cartBadge.textContent = '0';
            }
        }
    });
}

// Make updateCartBadge available globally
window.updateCartBadge = updateCartBadge;

// Initialize cart badge on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartBadge();
    
    // Newsletter form handler
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert('Thank you for subscribing! We\'ll send exclusive offers to ' + email);
            this.reset();
        });
    }
    
    // Category card navigation
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            if (category) {
                window.location.href = `products.html?category=${category}`;
            }
        });
        
        // Add cursor pointer style
        card.style.cursor = 'pointer';
    });
});

// Parallax effect for hero section (only on homepage)
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero-section');
    const heroContent = hero ? hero.querySelector('.hero-content') : null;
    
    if (heroContent && (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('LIVAS/'))) {
        const scrolled = window.pageYOffset;
        if (scrolled < window.innerHeight) {
            const parallax = scrolled * 0.3;
            heroContent.style.transform = `translateY(${parallax}px)`;
        }
    }
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.product-card, .category-card, .review-card');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
