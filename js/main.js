var images = document.getElementById("images")
fetch('https://fakestoreapi.com/products')
    .then(prodect => prodect.json())
    .then(prodect => {
        prodect.forEach(prodect => {
            images.innerHTML += `
<div class="card">
<img src="${prodect.image}" alt="">
</div>
`
        })
    })





var wrapper = document.querySelector('.cards-wrapper');

var dots = document.querySelectorAll('.dot');

let activeDotNum = 0;

dots.forEach((dot, idx) => {

    dot.setAttribute('data-num', idx);


    dot.addEventListener('click', (e) => {

        let clickedDotNum = e.target.dataset.num;

        if (clickedDotNum == activeDotNum) {

            return;
        } else {

            let displayArea = wrapper.parentElement.clientWidth;

            let pixels = -displayArea * clickedDotNum
            wrapper.style.transform = 'translateX(' + pixels + 'px)';

            dots[activeDotNum].classList.remove('active');
            dots[clickedDotNum].classList.add('active');

            activeDotNum = clickedDotNum;
        }

    });
});