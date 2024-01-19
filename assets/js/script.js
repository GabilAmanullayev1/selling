document.addEventListener("DOMContentLoaded", () => {
    let myModal = document.querySelector('.myModal')
    let modaldContent = document.querySelector('.modal-content')
    let navMenu = document.querySelector('.nav-menu')
    let closeModal = document.querySelector('#closeModal')
    navMenu.addEventListener('click', () => {
        myModal.style.display = "block"
    })
    closeModal.addEventListener('click', function () {
        myModal.style.display = 'none';
    });
})
let productContainer = document.querySelector('.product-container')
let arr_1 = [];
let arr_2 = [];
let search = document.querySelector('#search')
let sortBtn = document.querySelector(".sort");
function getDataJson() {
    fetch(`http://localhost:3000/services`)
        .then(response => response.json())
        .then(data => {
            arr_2 = data;
            productContainer.innerHTML = "";
            arr_1 = arr_1.length || search.value ? arr_1 : data;
            arr_1.forEach(element => {
                productContainer.innerHTML += `
            <div class="product-boxs">

            <div class="product-image"><img src="${element.images}" alt=""></div>
            <h2>${element.title}</h2>
            <h2>${element.price}</h2>
            <div class="product-icons">
                        <span>5<i class="fa-solid fa-star"></i></span>
                        <span>5<i class="fa-solid fa-heart"></i></span>
            </div>
            <p>${element.description}</p>
            <div class="product-btn">
            <button class="card">Card</button>
            <button class="details" ><a href="details.html?id=${element.id}">View</a></button>
            </div>

            </div>
            `

            });
        })



}
getDataJson()
search.addEventListener("input", (e) => {
    arr_1 = arr_2;
    arr_1 = arr_1.filter((el) => {
        return el.title.toLowerCase().includes(e.target.value.toLowerCase())
    });
    getDataJson();
})
sortBtn.addEventListener("change", function (e) {
    if (e.target.value === "za") {
        arr_1.sort((a, b) => b.price - a.price);
    } else if (e.target.value === "az") {
        arr_1.sort((a, b) => a.price - b.price);
    } else {
        arr_1 = []

    }
    getDataJson(); // Update the displayed data after sorting.
});