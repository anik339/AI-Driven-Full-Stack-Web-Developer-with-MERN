# Project 02 — NOVA Market E-commerce Storefront

A responsive frontend-only e-commerce storefront built with **HTML5, CSS3, and vanilla JavaScript**.

This is the second project in the frontend practice sequence:
1. Personal Portfolio Website
2. E-commerce Storefront
3. Admin Analytics Dashboard (after learning React)
4. Project Management / Kanban App (after learning React)
5. Job & Internship Portal (after learning React)

## Features

- Product catalogue with product cards and a working quick-view dialog
- Live product search
- Category filtering
- Sorting by featured, price, and name
- Add to cart and remove from cart
- Increase/decrease item quantity
- Automatic subtotal calculation
- Wishlist toggle, saved-favourites view, and clear-wishlist action
- Cart and wishlist saved with `localStorage`
- Responsive layout for desktop, tablet, and mobile
- Dark / light theme with saved preference
- Checkout form validation
- Demo checkout confirmation
- Newsletter form interaction
- Accessible labels and keyboard Escape handling

## Folder structure

```text
02-ecommerce-storefront/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── app.js
└── assets/
    └── images/
        └── README.txt
```

## Run in VS Code

1. Extract the ZIP.
2. Open the `02-ecommerce-storefront` folder in VS Code.
3. Open `index.html`.
4. Right-click and choose **Open with Live Server**.
5. The site runs in your browser. No `npm install` or build command is needed.

You can also open `index.html` directly in a browser, but Live Server is recommended while developing.

## Important project limitations

This project is a frontend learning demo, not a production online store.

- Products are stored in a JavaScript array.
- Product photos load from remote Unsplash image URLs and therefore need an internet connection.
- The quick-view dialog displays sample product information from the same local catalogue.
- Cart, wishlist, and theme preference are stored in the browser's local storage.
- Checkout only validates the form and displays a demo confirmation.
- No customer information is sent to a server or stored.
- No real order is created.
- No payment gateway, authentication, admin panel, inventory system, or backend API is connected.
- Newsletter form is a demo interaction only.

## Suggested practice tasks

1. Add two new products to the `products` array in `js/app.js`.
2. Add a new category and filter button.
3. Add a product detail / quick-view modal.
4. Add a clear-wishlist action.
5. Add a mobile menu if you later add more navigation links.
6. Replace the remote image URLs with your own local product images in `assets/images/`.
7. Test cart persistence by adding products, refreshing the browser, and reopening the cart.

## Before publishing to GitHub

- Test all search, filter, sort, cart, quantity, wishlist, theme, and checkout interactions.
- Test at mobile and desktop widths.
- Check the browser DevTools Console for errors.
- Keep the checkout disclaimer visible.
- Do not add real payment details or customer data to this demo.
