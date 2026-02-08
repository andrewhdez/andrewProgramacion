let carrito = JSON.parse(localStorage.getItem('miLista2')) || [];

const inputProducto = document.querySelector("#inputProducto");
const btnAgregar = document.getElementById('btnAgregar');
const form = document.querySelector("#form")
const pintarLista = document.getElementById('pintarLista')

btnAgregar.addEventListener('click', () => {
    if (inputProducto.value !== ""){
        carrito.push(inputProducto.value)
    }
    console.log(carrito)
    inputProducto.value = ""
    renderizarCarrito()

    guardarEnStorage()
})

form.addEventListener('submit', (event) => {
    event.defaultPrevented();
    if (inputProducto.value !== ""){
        carrito.push(inputProducto.value)
    }
    console.log(carrito)
    inputProducto.value = ""
    renderizarCarrito()

    guardarEnStorage()
})
renderizarCarrito()

function renderizarCarrito(){
    pintarLista.innerHTML = ''
    carrito.forEach((item, indice) => {
        pintarLista.innerHTML +=  `<li>${item} <button onclick="eliminarElemento(${indice})">eliminar</button></li>`
    })
}

function eliminarElemento(indice){
    carrito.splice(indice,1)
    renderizarCarrito()
    guardarEnStorage()
}

function guardarEnStorage(){
    const miCarrito = JSON.stringify(carrito)
    localStorage.setItem('miLista2', miCarrito)
}