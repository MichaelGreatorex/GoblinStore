if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}



function ready() {
    const cartIcon = document.querySelector("#cart-icon1");
    const closeCart = document.querySelector("#close-cart");
    const cart = document.querySelector(".cart1");

    cartIcon.addEventListener("click", function() {
        cart.classList.add("active");
    });

    closeCart.addEventListener("click", function() {
        cart.classList.remove("active");
    });


    
    

    
}




