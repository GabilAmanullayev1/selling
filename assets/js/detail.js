let details = document.querySelector('.details')
let id = new URLSearchParams(window.location.search).get("id")
fetch(`http://localhost:3000/services/${id}`)

    .then(response => response.json())
    .then(data => {
        details.innerHTML = `
        <div class="details-box>
        <div class="image-box>
         <div class="product-image"><img src="${data.images}" alt=""></div>
         <h2>${data.title}</h2>
        </div>
        </div>
        `
    })
