// SELECT ELEMENTS


const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");

// cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

// ADD TO CART
function addToCart(id) {
  // check if product already exist in cart
  if (cart.some((product) => product.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const product = products.find((product) => product.id === id);

    cart.push({
      ...product,
      numberOfUnits: 1,
    });
  }

  updateCart();
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

  cart.forEach((product) => {
    totalPrice += product.price * product.numberOfUnits;
    totalItems += product.numberOfUnits;
  });

  subtotalEl.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
  totalItemsInCartEl.innerHTML = totalItems;
}

// render cart items
function renderCartItems() {
  cartItemsEl.innerHTML = ""; // clear cart element
  cart.forEach((product) => {
    cartItemsEl.innerHTML += `
        <div class="cart-item">
            <div class="item-info" onclick="removeItemFromCart(${product.id})">
                <img src="${product.imgSrc}" alt="${product.name}">
                <h6>${product.name}</h6>
            </div>
            <div class="unit-price">
                <small>$</small>${product.price}
            </div>
            <div class="units">
                <div class="btn minus" onclick="changeNumberOfUnits('minus', ${product.id})">-</div>
                <div class="number">${product.numberOfUnits}</div>
                <div class="btn plus" onclick="changeNumberOfUnits('plus', ${product.id})">+</div>           
            </div>
        </div>
      `;
  });
}

// remove item from cart
function removeItemFromCart(id) {
  cart = cart.filter((product) => product.id !== id);

  updateCart();
}

// change number of units for an item
function changeNumberOfUnits(action, id) {
  cart = cart.map((product) => {
    let numberOfUnits = product.numberOfUnits;

    if (product.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < product.instock) {
        numberOfUnits++;
      }
    }

    return {
      ...product,
      numberOfUnits,
    };
  });

  updateCart();
}