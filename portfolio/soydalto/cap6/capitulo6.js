const container = document.querySelector(".container");

const button = document.querySelector(".send-button");
button.value = button.value.toUpperCase();

function crearLlave(name, model, price){
    img = "<img  src='./imgs/llave.png' class='img'>";
    name = `<h2>${name}</h2>`;
    model = `<h3>${model}</h3>`;
    price = `<p>Precio: <b>$${price}</b></p>`;
    return [img, name, model, price];
}

let documentFragment = document.createDocumentFragment();

for (let i = 0; i < 20; i++){
    let modelRandom = Math.round(Math.random()*1000);
    let priceRandom = Math.round(Math.random()*10 + 30);
    let llave = crearLlave(`llave ${i+1}`, `Modelo: ${modelRandom}`, priceRandom);
    let div = document.createElement("DIV");
    div.addEventListener("click", () => {
        document.querySelector(".key-data").value = modelRandom;
    });
    div.tabIndex = i;
    div.classList.add(`item-${i}`, `item`);
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    //div.innerHTML = ...llave;
    documentFragment.appendChild(div);
}

container.appendChild(documentFragment);