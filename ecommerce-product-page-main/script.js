const cartbtn = document.getElementById("add-cart-logo");
const itemsCart = document.querySelector(".cart-items");
const allImages = document.querySelectorAll('.choose-image');
const mainImage = document.getElementById('main-image');
let countProduct = document.querySelector('.set-product-count');
const increase = document.getElementById('increment');
const decrease = document.getElementById('decrement');
const addproducttocart = document.getElementById('addProduct');
const cartproductquantity = document.getElementById('count');
const finalproductprice = document.getElementById('price');
let emptycart = document.getElementById('show-no-items');
let hasselectedproduct = document.querySelector('.has-items');
let opensidenav = document.getElementById('open-nav')
let closesidenav = document.getElementById('close-nav')
let sidenavbar = document.querySelector('.sidenavbar');

opensidenav.addEventListener('click', () => {
    sidenavbar.style.display = 'block';
})

closesidenav.addEventListener('click', () => {
    sidenavbar.style.display = 'none';
})


console.log("Increase", increase)
console.log("Decrease", decrease)
console.log("count prod", countProduct)
console.log("sadfsadfsdf", emptycart)
console.log("sadfsadfsdfsfasdfsadffsa", hasselectedproduct)

let counter = 0;


cartbtn.addEventListener('click', () => {
    itemsCart.classList.toggle('active');
})


allImages.forEach((image) => {
    image.addEventListener('click', () => {

        mainImage.style.transition = 'opacity 0.5s ease-in-out';
        mainImage.style.opacity = '0';
        allImages.forEach(item => item.style.outline = 'none');
        image.style.outline = '4px solid orange';

        setTimeout(() => {
            mainImage.src = image.src;
            mainImage.style.opacity = '1';
        }, 500)

    });
});

increase.addEventListener('click', () => {
    counter++;
    countProduct.innerHTML = counter;
})

decrease.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        countProduct.innerHTML = counter;
    }
})

addproducttocart.addEventListener('click', () => {
    if (parseInt(countProduct.innerHTML) == 0) {
        emptycart.style.display = 'block';
        hasselectedproduct.style.display = 'none';
    } else {
        hasselectedproduct.style.display = 'flex';
        emptycart.style.display = 'none';

        cartproductquantity.innerHTML = parseInt(countProduct.innerHTML);

        let calculate = Number(cartproductquantity.innerHTML) * 125;
        finalproductprice.innerHTML = `<b>${calculate}</b>`;

        setTimeout(() => {
            alert(`${cartproductquantity.innerHTML} products have been added to the cart.`)
        }, 1000)


    }
});

function deleteProduct() {
    emptycart.style.display = 'block';
    hasselectedproduct.style.display = 'none';
}

window.onload = allImages.forEach((item) => {
    console.log("hello i got loaded")
    if(item.id == 'product-1-choose') {
        item.style.outline = '4px solid orange';
        item.style.opacity = '0.7';
        return;
    }
})