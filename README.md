# Paradise Nursery

Paradise Nursery is a React + Redux front end for a houseplant shopping app, built as the
final project for the *Developing Front-End Apps with React* course. Shoppers can browse
houseplants across multiple categories, add them to a cart, and adjust quantities before
checkout.

## Live Demo

Deployed with GitHub Pages: `https://YOUR_GITHUB_USERNAME.github.io/paradise-nursery/`

## Pages

- **Landing Page** — background image, company introduction, and a "Get Started" button
  that leads into the shop.
- **Product Listing Page** — houseplants grouped into three categories (Succulents & Cacti,
  Air-Purifying Plants, Flowering Plants), each with a thumbnail, name, price, and an
  Add to Cart button that disables once the plant is in the cart.
- **Shopping Cart Page** — every plant in the cart with its thumbnail, unit price, and line
  total, quantity increase/decrease controls, a delete button, a running total, a Checkout
  button, and a Continue Shopping button.

## Tech Stack

- React 18 (Vite)
- Redux Toolkit (`@reduxjs/toolkit`, `react-redux`) for cart state
- React Router for client-side navigation between the three pages

## Project Structure

```
src/
  components/
    AboutUs.jsx        # Company description shown on the landing page
    Header.jsx          # Navbar + live cart count, shared by Products & Cart pages
    PlantIcon.jsx        # Inline SVG thumbnail illustrations
    ProductList.jsx      # Product listing page
    CartItem.jsx         # Shopping cart page
  redux/
    CartSlice.jsx        # Redux Toolkit slice: addItem, removeItem, increment/decrementQuantity
    store.js
  data/
    plantsData.js        # Plant catalogue (name, price, category, description, icon)
  App.jsx                 # Landing page + route definitions
  App.css                 # Landing page background image + hero styling
  main.jsx
```

## Getting Started Locally

```bash
npm install
npm run dev
```

## Build & Deploy to GitHub Pages

1. Update the `homepage` field in `package.json` and the `base` path in `vite.config.js`
   with your GitHub username/repo name.
2. Install the deploy dependency (already listed in `package.json`) and run:

```bash
npm run build
npm run deploy
```

This publishes the `dist/` folder to the `gh-pages` branch, which GitHub Pages serves.
