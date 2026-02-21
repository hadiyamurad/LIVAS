# LIVΛS - Premium Clothing Brand E-Commerce Website

A fully responsive, modern e-commerce website for LIVΛS, a premium clothing brand. Built with HTML5, CSS3, Bootstrap 5, and Vanilla JavaScript.

## Features

- **Fully Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Premium glassmorphism effects, smooth animations, and transitions
- **Product Catalog** - Dynamic product rendering from JSON data
- **Shopping Cart** - LocalStorage-based cart functionality
- **Product Details** - Interactive image gallery and product customization
- **Checkout Process** - Complete checkout flow with forms and payment options

## Color Palette

- **Primary Dark**: `#291C0E`
- **Secondary Brown**: `#6E473B`
- **Muted Beige**: `#A78D78`
- **Light Neutral**: `#BEB5A9`
- **Soft Cream**: `#E1D4C2`

## File Structure

```
LIVAS/
├── index.html
├── about.html
├── products.html
├── product-details.html
├── cart.html
├── checkout.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── main.js
│   │   ├── cart.js
│   │   └── products.js
│   ├── data/
│   │   └── products.json
│   └── images/
└── README.md
```

## Technologies Used

- HTML5
- CSS3
- Bootstrap 5
- Vanilla JavaScript
- JSON for product data

## Getting Started

1. Clone or download this repository
2. **IMPORTANT:** Due to browser security (CORS), you cannot open HTML files directly by double-clicking them. You must use a local web server:
   
   **Option 1: Python (if installed)**
   ```bash
   cd LIVAS
   python -m http.server 8000
   ```
   Then open: http://localhost:8000
   
   **Option 2: Node.js (if installed)**
   ```bash
   cd LIVAS
   npx serve
   ```
   
   **Option 3: VS Code Live Server**
   - Install "Live Server" extension
   - Right-click on `index.html` → "Open with Live Server"
   
   **Option 4: GitHub Pages**
   - Push to GitHub repository
   - Enable GitHub Pages in repository settings
   - Access via GitHub Pages URL

3. No build process required - works directly in the browser once served

## Deployment

This website is ready for deployment on GitHub Pages or any static hosting service.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for demonstration purposes.
