let form = document.querySelector('form')
let title = document.querySelector("#title");
let image = document.querySelector("#img");
let desc = document.querySelector("#desc");
let file = document.querySelector("input[type=file]");
let table = document.querySelector("table");

fetch(`http://localhost:3000/services`)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            table.innerHTML += `
    <tr>
    <td>${element.id}</td>
    <td><img src="${element.images}" alt=""></td>
    <td>${element.title}</td>
    <td>${element.description}</td>
    <td>
    <button onclick="deleteEl(${element.id})">Delete</button>
</td>
</tr>
    `

        });
    })
file.addEventListener('input', (e) => {
    let file = e.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            image.src = reader.result;
        };
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (title.value && desc.value) { // Corrected variable name
        let obj = {};
        let reader = new FileReader();
        let src = file.files[0];
        reader.onload = (e) => {
            obj = {
                image: e.target.result,
                title: title.value,
                description: desc.value, // Corrected variable name
            };
            axios.post("http://localhost:3000/services", obj)
                .then(res => {
                    window.location = "./index.html";
                });
        };
        reader.readAsDataURL(src);
    } else {
        alert("Butun xanalar doldurulmalidir!!");
    }
});

function deleteEl(id) {
    axios.delete(`http://localhost:3000/services/${id}`)
    window.location.reload()
}