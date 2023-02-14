var images = document.getElementById("image");
var products = document.getElementById("product")
fetch('https://fakestoreapi.com/products')
    .then(prodect => prodect.json())
    .then(prodect => {
        prodect.forEach(prodect => {
            products.innerHTML += `
            <div class="child">
            <img src="${prodect.image}">
            <h1>${(prodect.title).substring(0, 30)}</h1>
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