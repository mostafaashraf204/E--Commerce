var images = document.getElementById("images");
var products = document.getElementById("info-product")
fetch('https://fakestoreapi.com/products')
    .then(prodect => prodect.json())
    .then(prodect => {
        prodect.forEach(prodect => {
            images.innerHTML += `<div class="card">
<img src="${prodect.image}" alt="">
</div>`
            products.innerHTML += `
            
            <div class="continer_in_trending_product">
            <img src="${prodect.image}">
            <h4>
            <a href="#">${prodect.title}</a>
        </h4>
        <h4 class="price">$ ${prodect.price}
        </h4>

            <div class="information">
                <button class="btn3"><i class="fas fa-expand-alt"></i></button>
                <button class="btn3"><i class="far fa-heart"></i></button>
                <button class="btn3"><i class="fas fa-shopping-cart"></i></button>
            </div>
        </div>
`

        })
    })