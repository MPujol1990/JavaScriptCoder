//PRODUCTOS
const rises = [
{    
id: "arroz largo fino",
titulo: "Arroz largo fino",
imagen: "./img/arroz-largo-fino.jpg",
precio: 300,
},
{
    id: "integral",
    titulo: "integral",
    imagen: "./img/Integral.jpg",
    precio: 500,  
},
{
    id: "yamani",
    titulo: "Yamani",
    imagen: "./img/Yamani.jpg",
    precio: 700,
},
];

const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos(){
    rises.forEach(producto => {
        let div = document.createElement("div");
        div.classList.add("rises");
        div.innerHTML = ` 
        <img class="photo-rise" src="${rises.imagen}" alt="largo-fino">
        <div class="info">
        <h3 class="titulo">${rises.titulo}</h3>
        <p class="precio">$${rises.precio}</p>
        <button class="agregar" id= "${rises.id}">Agregar</button>
        </div>
        `;

        contenedorProductos.append(div);  
    })
}

     cargarProductos();