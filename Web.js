var hero_section = document.getElementById('hero_section');
var productSec = document.getElementById('productSec');
var contacttUs = document.getElementById('contactUs');
var links_container = document.getElementById('links-container');
var cartdisplay = document.getElementById('cartdisplay');
var cartlength = document.getElementById('circle');
var cartDefault = document.getElementById('cartDefault');
var cartMeter = document.getElementById('cartMeter');

function displayLink(){
    console.log('wotfct')
    if (links.style.display == 'none'){
        links.style.display = 'flex';
    }else{
        links.style.display = 'none';
    }
}

function home(){
    console.log('working');
    hero_section.style.display = 'flex';
    collection_container.style.display = 'grid'
    productSec.style.display = 'none';
    // otherProducts.style.display = 'none'
    contacttUs.style.display = 'none';
}

function product(){
    hero_section.style.display = 'none';
    productSec.style.paddingTop = '10vh';
    productSec.style.display = 'block';
    // otherProducts.style.display = 'flex'
    console.log('working');
    contacttUs.style.display = 'none';
    collection_container.style.display = 'none'
}

function contactUs(){
    console.log('working');
    hero_section.style.display = 'none';
    productSec.style.display = 'none';
    contacttUs.style.display = 'block';
    collection_container.style.display = 'none'
}

var product_card = [
    {
        id: 0,
        img: "./Images/card1.png",
        description: "a short line about the cloth. .",
        price: 20
    },
    {
        id: 1,
        img: "./Images/card2.png",
        description: "a short line about the cloth. .",
        price: 20
    },
    {
        id: 2,
        img: "./Images/card3.png",
        description: "a short line about the cloth. .",
        price: 20
    },
    {
        id: 3,
        img: "./Images/card4.png",
        description: "a short line about the cloth. .",
        price: 20
    },
    {
        id: 4,
        img: "./Images/card8.png",
        description: "a short line about the cloth. .",
        price: 20
    },
    {
        id: 5,
        img: "./Images/men-collection.png",
        description: "a short line about the cloth. .",
        price: 20
    },
    {
        id: 6,
        img: "./Images/women-collection.png",
        description: "a short line about the cloth. .",
        price: 20
    },
    {
        id: 7,
        img: "./Images/product image 1.png",
        description: "a short line about the cloth. .",
        price: 20
    },
    {
        id: 8,
        img: "./Images/card9.png",
        description: "a short line about the shoe. .",
        price: 20
    },
    {
        id: 9,
        img: "./Images/card10.png",
        description: "a short line about the shoe. .",
        price: 20
    },
    {
        id: 10,
        img: "./Images/card11.png",
        description: "a short line about the shoe. .",
        price: 20
    },
    {
        id: 11,
        img: "./Images/card12.png",
        description: "a short line about the shoe. .",
        price: 20
    },
]
var productSection = document.getElementById('product_container');
function updateproduct_card(){
    // console.log('Functoning')
    var productContainer = '';
    var i=0;
    for (i in product_card){
        productContainer = productContainer +  `<div id="product_card">
                                                    <div class="product-image">
                                                        <span class="discount-tag">50% off</span>
                                                        <img src="${product_card[i].img}" alt="">
                                                        <button class="card-btn" onclick = "addCart(${product_card[i].id})">Add To cart</button>
                                                    </div>
                                                    <div class="product-info">
                                                        <h2 class="product-brand">brand</h2>
                                                        <p class="product-short-des">a short line about the cloth. .</p>
                                                        <span id="price()">${product_card[i].price}</span>
                                                    </div>
                                                </div>`
                                                console.log(i,product_card[i].img)
    }
    console.log(productSection)
    productSection.innerHTML = productContainer;
}
updateproduct_card()
var cartItems = [
    {
        id: 0,
        img: "./images/pexels-mstudio-1240892.jpg",
        name: "Phenoix Red JordanX",
        price: 49.99,
        quantity: 1,
        counting_price: 49.99
    },
]
var cartSection = document.getElementById('CartProducts');
function updateCart(){
    console.log('Cart updated');
    var cartContainer = '';
    for(i in cartItems){
        cartContainer = cartContainer + `<div id="cartproduct">
                                            <div id="cartproductimg">
                                                <img src="${cartItems[i].img}" alt="">
                                            </div>
                                            <div id="cartproductdescription">
                                                <div id="cartproductheader">
                                                    <h4 id="title">${cartItems[i].name}</h4>
                                                    <span id="deleteItem" onclick="deleteItem(${i})">&times;</span>
                                                </div>
                                                <div id="cartQuantity">
                                                    <h4>Quantity</h4>
                                                    <div id="meter">
                                                        <div id="decrease" onclick ="decrease(${i})">-</div><hr>
                                                        <div id="cartMeter">${cartItems[i].quantity}</div><hr>
                                                        <div id="increase" onclick ="addCart(${cartItems[i].id})">+</div>
                                                    </div>
                                                </div>
                                                <div id="cash">
                                                    <h4>Price($):</h4>
                                                    <span id="price">${cartItems[i].price.toFixed(2)}</span>
                                                </div>
                                            </div> 
                                        </div>
                                        <hr>`
    }
    if (cartItems.length == 0){
        cartlength.style.display = 'none'
        cartDefault.style.display = 'block'
    }else{
        cartDefault.style.display = 'none'
        cartlength.style.display = 'block'
    }
    cartSection.innerHTML = cartContainer;
    let j = 0
    let cartCost = 0
    for(j in cartItems){
        cartCost = cartCost + cartItems[j].price
    }
    total.innerHTML = cartCost.toFixed(2);
    let r = 0;
    totalQuantity = 0;
    for (r in cartItems){
        totalQuantity = totalQuantity + cartItems[r].quantity
    }
    cartlength.innerHTML = totalQuantity
    // cartlength.innerHTML = cartItems.length + totalQuantity
}
cartItems.length = 0;
updateCart()
cartdisplay.style.display = 'none'
function showcart(){
    // console.log(cartdisplay.style.display)
    if(cartdisplay.style.display == 'none'){
        cartdisplay.style.display = 'block'
        updateCart()
        // console.log('working',cartdisplay.style.display)
    }else{
        cartdisplay.style.display = 'none'
    }
}
function addCart(id){
    for(i in cartItems){
        // console.log(cartItems)
        if (id == cartItems[i].id){
            cartItems[i].quantity += 1
            let Count_price = cartItems[i].counting_price;
            // console.log(cartItems[i].price)
            increasePrice(i,cartItems[i].quantity, Count_price)
            updateCart();
            return 0
        }
    }
    class cartitem{
        constructor(id, img,name,price, quantity,counting_price){
            this.name = name;
            this.img = img;
            this.price = price;
            this.id = id;
            this.quantity = quantity;
            this.counting_price = counting_price;
        }
    }
    cartItems.push(new cartitem(product_card[id].id, product_card[id].img, product_card[id].name , product_card[id].price, 1,product_card[id].price));

    updateCart();
}
function deleteItem(id){
    // console.log(id);
    cartItems.splice(id,1)
    updateCart();
}
function increasePrice(i, quantity, price){
    let iniprice = 0
    if (quantity == 1){
        iniprice = price;
        // console.log(iniprice);
        cartItems[i].price = iniprice;
    }else{
        iniprice = price * quantity;
        cartItems[i].price = iniprice;
    }
    updateCart();
}
function decrease(id){
    cartItems[id].quantity -= 1;
    let price = cartItems[id].counting_price;
    let iniprice = 0;
    if(cartItems[id].quantity <= 0){
        deleteItem(id);
    }else if(cartItems[id].quantity == 1){
        // console.log('working')
        iniprice = price;
        // console.log(iniprice);
        cartItems[id].price = iniprice;
    }else if (cartItems[id].quantity >= 2){
        iniprice = price* cartItems[id].quantity;
        // console.log(iniprice);
        // console.log(cartItems[id].quantity);
        cartItems[id].price = iniprice;
    }
    updateCart();
}

const productImages = document.querySelectorAll(".product-images img"); // selecting all image thumbs
const productImageSlide = document.querySelector(".image-slider"); // seclecting image slider element

let activeImageSlide = 0; // default slider image

productImages.forEach((item, i) => { // loopinh through each image thumb
    item.addEventListener('click', () => { // adding click event to each image thumbnail
        productImages[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
        item.classList.add('active'); // adding active class to the current or clicked image thumb
        productImageSlide.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
        activeImageSlide = i; // updating the image slider variable to track current thumb
    })
})
