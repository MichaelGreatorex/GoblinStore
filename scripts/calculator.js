// SELECT ELEMENTS
const productsEl = document.querySelector(".products");

const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");

const checkoutItemsEl = document.querySelector(".checkout-items");


// RENDER PRODUCTS
function renderProducts() {
  products.forEach((product) => {
    productsEl.innerHTML += `
            <div class="item">
                <div class="item-container">
                        <div class="item-img">
                            <img src="${product.imgSrc}" alt="${product.name}">
                        </div>
                        <div class="desc">
                            <h6>${product.name}</h6>
                            <h6><small>$</small>${product.price}</h6>
                            <p>
                                ${product.description}
                            </p>
                          <button type="button" class="add-to-cart" onclick="addToCart(${product.id})" id="toastbtn">ADD TO CART</button>
                        </div>
                </div>
            </div>            
        `;
  });
}
renderProducts();

document.addEventListener('DOMContentLoaded', function() {

  for (let i = 0; i < products.length; i++) {

      toastbtn[i].addEventListener("click", function addedtocart() {
          var option = {
              animation: true,
              delay: 2000
          };
          var myAlert = document.getElementById("toastNotice");
          var bsAlert = new bootstrap.Toast(myAlert, option);
          bsAlert.show();

      });
  }
})







// cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

// ADD TO CART
function addToCart(id) {
  // check if product already exist in cart
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = products.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCart();


  // alert("Item added to cart!");
}

// update cart
function updateCart() {
  renderCartItems();
  renderCartSubtotal();

  // save cart to local storage
  localStorage.setItem("CART", JSON.stringify(cart));
}



// calculate and render cart subtotal
function renderCartSubtotal() {
  let totalPrice = 0,
    totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  subtotalEl.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
  totalItemsInCartEl.innerHTML = totalItems;
}

// render cart items
function renderCartItems() {
  cartItemsEl.innerHTML = ""; // clear cart element
  cart.forEach((item) => {
    cartItemsEl.innerHTML += `

        

        <div class="cart-item">
            <div class="item-info" onclick="removeItemFromCart(${item.id})">
                <img src="${item.imgSrc}" alt="${item.name}">
                <h6>${item.name}</h6>
            </div>
            <div class="unit-price">
                <small>$</small>${item.price}
            </div>
            <div class="units">
                <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                <div class="number">${item.numberOfUnits}</div>
                <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>           
            </div>
        </div>
      `;
  });
}

// remove item from cart
function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);

  updateCart();
}

// change number of units for an item
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}