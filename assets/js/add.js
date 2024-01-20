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
    function deleteEl(id){
        axios.delete(`http://localhost:3000/services/${id}`)
        window.location.reload()
    }