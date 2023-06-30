# GoblinStore
Online store training project (no items actually for sale!)

This responsive application features a navigation bar, main section and footer on all pages. The nav bar links collapse into a single block when viewed on narrower screens, where links can be accessed via a drop-down menu instead.

There is a shop page which features the items for sale. When "Add to Cart" is clicked, a notification of such will appear momentarily on the screen, and the product data of the item clicked will be sent to the cart modal. The cart is persistant, and can be accessed by clicking on the cart icon in the nav bar from all pages (excluding the checkout page).

The items are stored to localStorage, which allows the data to persist upon page changes and reloads, and enables the same data to be called again into the bootstrap checkout page form.

The user will be taken to the checkout page via the "proceed to checkout button" at the bottom of the cart modal. The modal has a fixed height, however, is scollable if overfilled.

The cart runs off scripts which calculate the number of items in the cart and the subtotal. The number of items can be changed either by clicking "add to cart" or else by clicking the + and - buttons in the cart directly.

When hovering over a cart item picture, it will highlight in red. If clicked it will be removed from the cart and localStorage, and the subtotal will readjust. The same applies to the checkout page.

The form contains bootstrap validation which prevents the user placing an order 
