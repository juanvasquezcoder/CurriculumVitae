const products = [
    {
        id: 'producto-1',
        title: 'glases 1',
        image: './images/cardImagen1.jpg',
        categoria: {
            name: 'glasses',
            id: 'glasses'
        },
        price: 100000
    },
    {
        id: 'producto-2',
        title: 'glases 2',
        image: './images/cardImagen2.jpg',
        categoria: {
            name: 'glasses',
            id: 'glasses'
        },
        price: 100000
    },
    {
        id: 'producto-3',
        title: 'glases 3',
        image: './images/cardImagen3.jpg',
        categoria: {
            name: 'glasses',
            id: 'glasses'
        },
        price: 100000
    },
    {
        id: 'producto-4',
        title: 'glases 4',
        image: './images/cardImagen4.jpg',
        categoria: {
            name: 'glasses',
            id: 'glasses'
        },
        price: 100000
    },
    {
        id: 'producto-5',
        title: 'glases 5',
        image: './images/cardImagen5.jpg',
        categoria: {
            name: 'glasses',
            id: 'glasses'
        },
        price: 100000
    },
    {
        id: 'producto-6',
        title: 'glases 6',
        image: './images/cardImagen6.jpg',
        categoria: {
            name: 'glasses',
            id: 'glasses'
        },
        price: 100000
    }
];
const imagenes = [
    './images/slider1.jpg',
    './images/slider2.jpg',
    './images/slider3.jpg',
    './images/slider4.jpg'
];
let counter = 0;
document.Imagen.src = imagenes[0];
document.querySelector('.fa-circle-arrow-right').addEventListener('click', () => {
    counter++;
    if(counter > imagenes.length - 1){
        counter = 0;
    }
    document.Imagen.src = imagenes[counter];
});
document.querySelector('.fa-circle-arrow-left').addEventListener('click', () => {
    counter--;
    if(counter < 0){
        counter = imagenes.length - 1;
    }
    document.Imagen.src = imagenes[counter];
});
const containerProducts = document.querySelector('#products');
const number = document.querySelector('#number')
let addButtons = document.querySelectorAll('.add-product');
function loadProducts () {
    products.forEach(products => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
            <img src="${products.image}" alt="${products.title}">
            <div class="characteristics">
                <h3>${products.title}</h3>
                <p>${products.price}</p>
                <span>description</span>
                <button class="add-product" id="${products.id}">ADD</button>
                </div>`;
        containerProducts.append(div);
    });
    updateAddButtons();
}
function updateAddButtons () {
    addButtons = document.querySelectorAll('.add-product');
    addButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
}
let productsInCart;
let productsInCartLS = localStorage.getItem('products-in-cart');
if(productsInCartLS){
    productsInCart = JSON.parse(productsInCartLS);
    updateNumber();
} else {
    productsInCart = [];
}
function addToCart (e) {
    const idButton = e.currentTarget.id;
    const bundledProduct = products.find(product => product.id === idButton);
    if(productsInCart.some(product => product.id === idButton)){
        const index = productsInCart.findIndex(product => product.id === idButton);
        productsInCart[index].quantity++;
    } else {
        bundledProduct.quantity = 1;
        productsInCart.push(bundledProduct);
    }
    updateNumber();
    localStorage.setItem("products-in-cart", JSON.stringify(productsInCart));
}
function updateNumber () {
    let numberNew = productsInCart.reduce((acc, product) => acc + product.quantity, 0);
    number.innerText = numberNew;
}
document.addEventListener('DOMContentLoaded', loadProducts, false);