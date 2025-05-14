# 🛍️ My Ecommerce Site

## 📑 Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Pages and Features](#pages-and-features)
- [How the Cart System Works](#how-the-cart-system-works)
- [Deployment Instructions](#deployment-instructions)
- [Credits & Contact](#credits--contact)

---

## 📌 Project Overview
This project is a fully functional responsive ecommerce website built with HTML5, CSS3, and JavaScript. It allows users to:
- View a homepage and product listings
- Add products to a shopping cart
- View and manage their cart (increase, decrease, remove)
- Submit contact queries via email

---

## 🛠️ Technologies Used

| Technology   | Purpose                                |
|--------------|----------------------------------------|
| HTML5        | Structure of the web pages             |
| CSS3         | Styling and responsive design          |
| JavaScript   | Cart interactivity and local storage   |
| LocalStorage | To persist cart items across sessions  |
| GitHub Pages | Deployment platform                    |

---

## 📄 Pages and Features

### `index.html` - Home Page
- Navigation bar to all pages
- Hero section with welcome message
- Featured product display

### `products.html`
- Responsive product grid
- Each product includes an image, description, price, and "Add to Cart" button
- Fallback images load when product image is missing (`onerror="this.src='placeholder.jpg'"`)
- Calls a JavaScript function to add products to cart and store them in localStorage

### `cart.html`
- Reads cart data from localStorage
- Displays each item with:
  - Name
  - Price
  - Quantity with "+" and "−" buttons
  - Subtotal and Remove button
- Updates total price in real-time
- Allows full removal or checkout, clearing the cart

### `contact.html`
- Basic form with name, email, and comment/query
- Uses `mailto:` action to open the user’s default email app

---

## 🛒 How the Cart System Works

- **Adding Items**: Clicking "Add to Cart" stores product info (name, price, quantity) in localStorage.
- **Viewing Cart**: `cart.html` reads from localStorage and renders items in a table.
- **Modifying Quantities**: Users can change item quantities using buttons.
- **Removing Items**: Items can be removed entirely or auto-removed if quantity drops to zero.
- **Checkout**: Empties the cart and thanks the user.

> The cart is persistent across page reloads and sessions using localStorage.

---

## 🚀 Deployment Instructions (GitHub Pages)

1. Create a GitHub repository
2. Upload all website files including:
   - HTML files (`index.html`, `products.html`, `cart.html`, `contact.html`)
   - `Stylesheet.css`
   - `script.js` (if used)
   - All image assets (including `placeholder.jpg`)
3. Go to **Settings > Pages**
4. Under **Source**, select `main` branch and `/ (root)`
5. Your live site will be available at:

**🔗 Deployment link:** [https://plp-webtechnologies.github.io/feb-2025-final-project-and-deployment-Gatsheni528/](https://plp-webtechnologies.github.io/feb-2025-final-project-and-deployment-Gatsheni528/)

---

## ✉️ Credits & Contact

- **Developer:** Mpho Ndlovu / Gatsheni528  
- **Year:** 2025  
- **Contact Email:** Listed in `contact.html` → `mailto:mphot528@gmail.com`

