const products = [
    {
        id: 'producto-1',
        title: 'glases 1',
        image: './images/cardImagen1.jpg',
        categoria: {
            nombre: 'glasses',
            id: 'glasses'
        },
        price: 100000
    },
    {
        id: 'producto-2',
        title: 'glases 2',
        image: './images/cardImagen2.jpg',
        categoria: {
            nombre: 'glasses',
            id: 'glasses'
        },
        price: 100000
    },
    {
        id: 'producto-3',
        title: 'glases 3',
        image: './images/cardImagen3.jpg',
        categoria: {
            nombre: 'glasses',
            id: 'glasses'
        },
        price: 100000
    },
    {
        id: 'producto-4',
        title: 'glases 4',
        image: './images/cardImagen4.jpg',
        categoria: {
            nombre: 'glasses',
            id: 'glasses'
        },
        price: 100000
    },
    {
        id: 'producto-5',
        title: 'glases 5',
        image: './images/cardImagen5.jpg',
        categoria: {
            nombre: 'glasses',
            id: 'glasses'
        },
        price: 100000
    },
    {
        id: 'producto-6',
        title: 'glases 6',
        image: './images/cardImagen6.jpg',
        categoria: {
            nombre: 'glasses',
            id: 'glasses'
        },
        price: 100000
    }
];
const containerProducts = document.querySelector('#products');
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
                <button class="add-product" ${products.id}>ADD</button>
            </div>`;
        containerProducts.append(div);
    })
}
document.addEventListener('DOMContentLoaded', loadProducts, false);