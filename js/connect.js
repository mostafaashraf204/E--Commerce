var image = document.getElementById("item");
var products = document.getElementById("product")
fetch('https://fakestoreapi.com/products')
    .then(prodect => prodect.json())
    .then(prodect => {
        prodect.forEach(prodect => {

            products.innerHTML += `
            <div class="child">
            <img src="${prodect.image}">
            <h3>${(prodect.title).substring(0, 30)}</h3>
            <p>$ ${prodect.price}</p>
            <div class="information">
                <button class="btn3"><i class="fas fa-expand-alt"></i></button>
                <button class="btn3"><i class="far fa-heart"></i></button>
                <button class="btn3"><i class="fas fa-shopping-cart"></i></button>
            </div>
        </div>
            `
        })
    })