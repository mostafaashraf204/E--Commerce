var image = document.getElementById("item");
var products = document.getElementById("product")
var prodect2 = document.getElementById("product2")
var product3 = document.getElementById("product3")
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
fetch('https://fakestoreapi.com/products?limit=4')
    .then(limit => limit.json())
    .then(limit => {
        limit.forEach(limit => {
            prodect2.innerHTML += `<div class="child2">
            <img src="${limit.image}">
            <h3>${(limit.title).substring(0.30)}</h3>
            <p>${limit.price}</p>
        </div>`
        })
    })
fetch('https://fakestoreapi.com/products?limit=5')
    .then(photo => photo.json())
    .then(photo => {
        photo.forEach(photo => {
            product3.innerHTML += `<div class="child3">
            <img src="${photo.image}">
          
          
        </div>
 
        `

        })
    })