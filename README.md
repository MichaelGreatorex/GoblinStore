# GoblinStore
Online store training project (no items actually for sale!)

This responsive application features a navigation bar, main section and footer on all pages. The nav bar links collapse into a single block when viewed on narrower screens, where links can be accessed via a drop-down menu instead.

There is a shop page which features the items for sale. When "Add to Cart" is clicked, a notification of such will appear momentarily on the screen, and the product data of the item clicked will be sent to the cart modal. The cart is persistant, and can be accessed by clicking on the cart icon in the nav bar from all pages (excluding the checkout page).

The items are stored to localStorage, which allows the data to persist upon page changes and reloads, and enables the same data to be called again into the bootstrap checkout page form.

The user will be taken to the checkout page via the "proceed to checkout button" at the bottom of the cart modal. The modal has a fixed height, however, is scollable if overfilled.

The cart runs off scripts which calculate the number of items in the cart and the subtotal. The number of items can be changed either by clicking "add to cart" or else by clicking the + and - buttons in the cart directly.

All product information is stored within the products.js script. This includes the number of each product in stock. Items exceeding this number may not be added to the cart, as the number decreases for each instance of the product being added to the cart.

When hovering over a cart item picture, it will highlight in red. If clicked it will be removed from the cart and localStorage, and the subtotal will readjust. The same applies to the checkout page.

The form contains bootstrap validation which prevents the user placing an order without filling it in correctly. Once validation has been satisfied, and the user clicks "Place Order" an email will be sent to the email address the user has put in the email field of the form, from "goblinstore@gmx.com" confirming the order. The email will contain the details from the form. The email API used is SMTPS.js.

Additionally, when "Place Order" is clicked, the details from the form will all be compiled into a new entry into Google Firebase realtime database.

Alerts will be shown confirming that the email has been sent and the order has been recieved. The user will need to acknowlege each by clicking "ok" when prompted.

There are some further pages in this web app:

About:

This is a simple but responsive page outlining some information about the company. It also contains a link to the the shop in addtion to the links in the nav bar and footer.

Locations:

This pages details the store locations and some contact information.

New Products:

This page links to rawg.io games API, and displays live data from the site relating to upcoming releases. Data relating to each game is stored on individual cards which are responsive in their layout according to different screen sizes. Each card features the commercial image of the game, its title, its genre, its estimated release date and a screenshot showing real game play. Please note, this page is for information only and items cannot be added to the cart for purchase.
