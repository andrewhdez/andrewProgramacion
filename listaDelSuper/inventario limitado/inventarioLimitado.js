const inputObjeto = document.querySelector('#inputObjeto')
const btnAgregar = document.querySelector('#btnAgregar')
const p1 = document.querySelector('#p1')
const listaDeMochila = document.querySelector('#listaDeMochila')

const mochila = []

btnAgregar.addEventListener('click', () => {
    const objeto = inputObjeto.value

    if (mochila.length < 3) {

    if (objeto === ''){
        alert('añade un objeto')
    }else{
        mochila.push(objeto)

        listaDeMochila.innerHTML += `<li>${objeto}</li>`

        p1.innerHTML = `Tienes ${mochila.length} de 3 espacios ocupados.`

        renderizarMochila()
        eliminarInput()
    }

    }else{
        p1.innerHTML = 'mochila llena, elimina un objeto'
        p1.style.color = 'red'
        alert('mochila llena')
    }
})

function eliminarInput(){
    inputObjeto.value = ""
}

function renderizarMochila(){
    listaDeMochila.innerHTML = ""

    mochila.forEach((objeto, index) => {
        listaDeMochila.innerHTML += `<li>${objeto} <button onclick="eliminarObjeto(${index})">eliminar</button></li>`
    })

    p1.innerHTML = `Tienes ${mochila.length} de 3 espacios ocupados.`
    p1.style.color = 'purple'
}

function eliminarObjeto(posicion){
    mochila.splice(posicion, 1)
    eliminarObjeto
    renderizarMochila()
}