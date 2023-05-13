let productsInCart = localStorage.getItem('products-in-cart');
productsInCart = JSON.parse(productsInCart);
const textCartEmpty = document.querySelector('.text-cart-empty');
const productsCart = document.querySelector('.products-cart');
const deletOrBuy = document.querySelector('.delete-or-buy');
const buttonCartEmpty = document.querySelector('.empty-cart');
const textTotal = document.querySelector('.total');
const buttonBuy = document.querySelector('.btn-buy');
let cartProductDelete = document.querySelectorAll('.cart-product-delete');
function loadProductsCart () {
    productsCart.innerHTML = '';
    if (productsInCart && productsInCart.length > 0) {
        textCartEmpty.classList.add('disabled');
        productsCart.classList.remove('disabled');
        deletOrBuy.classList.remove('disabled');
        productsInCart.forEach(product => {
            const div = document.createElement('div');
            div.classList.add('product-cart');
            div.innerHTML = `
                <img src=".${product.image}" alt="${product.title}">
                <div class="cart-name-product">
                    <small>Name</small>
                    <h3>${product.title}</h3>
                </div>
                <div class="cart-product-quantity">
                    <small>Quantity</small>
                    <p>${product.quantity}</p>
                </div>
                <div class="cart-product-price">
                    <small>Price</small>
                    <p>$${product.price}</p>
                </div>
                <div class="subtotal">
                    <small>Subtotal</small>
                    <p>$${product.price * product.quantity}</p>
                </div>
                <button class="cart-product-delete" id=${product.id}><i class="fa-solid fa-trash-can"></i></button>
            `;
            productsCart.append(div);
        });
    } else {
        textCartEmpty.classList.remove('disabled');
        productsCart.classList.add('disabled');
        deletOrBuy.classList.add('disabled');
    }
    updateButtonsDelete();
    updateTotal();
}
loadProductsCart();
function updateButtonsDelete () {
    cartProductDelete = document.querySelectorAll('.cart-product-delete');
    cartProductDelete.forEach(button => {
        button.addEventListener('click', deleteForCart);
    });
}
function deleteForCart (e) {
    const idButton = e.currentTarget.id;
    const indexCart = productsInCart.findIndex(product => product.id === idButton);
    productsInCart.splice(indexCart, 1);
    loadProductsCart();
    localStorage.setItem('products-in-cart', JSON.stringify(productsInCart));
}
buttonCartEmpty.addEventListener('click', cartEmpty);
function cartEmpty () {
    productsInCart.length = 0;
    localStorage.setItem('products-in-cart', JSON.stringify(productsInCart));
    loadProductsCart();
}
function updateTotal () {
    textTotal.innerText = `Total: $${productsInCart.reduce((acc, product) => acc + (product.price * product.quantity), 0)}`;
}
buttonBuy.addEventListener('click', buyCart);
function buyCart () {
    productsInCart.length = 0;
    localStorage.setItem('products-in-cart', JSON.stringify(productsInCart));
    loadProductsCart();
    alert('thank you very much for your purchase');
}