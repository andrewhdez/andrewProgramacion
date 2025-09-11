const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMostruoJugador = document.getElementById('boton-mostruo')
const botonCerebro = document.getElementById('boton-cerebro')
const botonSangre = document.getElementById('boton-sangre')
const botonCalabazas = document.getElementById('boton-calabazas')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMostruo = document.getElementById('seleccionar-mostruo')
const spanMostruoJugador = document.getElementById('mostruo-jugador')

const spanMostruoEnemigo = document.getElementById('mostruo-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')


let mosterpones = []
let ataqueMostruo
let ataqueEnemigo
let opcionDeMosterpones
let inputZombitre
let inputDraculin
let inputFranquestine
let vidasJugador = 5
let vidasEnemigo = 3

class mosterpon {
    constructor(nombre, foto, vidas) {
        this.nombre = nombre
        this.foto = foto
        this.vidas = vidas
        this.ataques = []
    }
}

let Zombitre = new mosterpon('Zombitre', './imgAndrw/andress.png', '5')

let Draculin = new mosterpon('Draculin', './imgAndrw/andreww.png', '5')

let Franquestine = new mosterpon('Franquestine', './imgAndrw/andrwep.png', '5')

Zombitre.ataques.push(
    {nombre: '🧠🧠', id: 'boton-cerebro'},
    {nombre: '🧠🧠', id: 'boton-cerebro'},
    {nombre: '🧠🧠', id: 'boton-cerebro'},
    {nombre: '🩸🩸', id: 'boton-sangre'},
    {nombre: '🎃☠️', id: 'boton-calabazas'},
)

Draculin.ataques.push(
    {nombre: '🎃☠️', id: 'boton-calabazas'},
    {nombre: '🎃☠️', id: 'boton-calabazas'},
    {nombre: '🎃☠️', id: 'boton-calabazas'},
    {nombre: '🧠🧠', id: 'boton-cerebro'},
    {nombre: '🩸🩸', id: 'boton-sangre'},
)

Franquestine.ataques.push(
    {nombre: '🩸🩸', id: 'boton-sangre'},
    {nombre: '🩸🩸', id: 'boton-sangre'},
    {nombre: '🩸🩸', id: 'boton-sangre'},
    {nombre: '🧠🧠', id: 'boton-cerebro'},
    {nombre: '🎃☠️', id: 'boton-calabazas'},
)

mosterpones.push(Zombitre,Draculin,Franquestine)

function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'

    mosterpones.forEach((mosterpon) => {
        opcionDeMosterpones = `
            <input type="radio" name="mostruo" id=${mosterpon.nombre} />
            <label class="tarjeta-de-mosterpon" for=${mosterpon.nombre}>
                <p>${mosterpon.nombre}</p>
                <img src=${mosterpon.foto} alt=${mosterpon.nombre}>
            </label>   
        `
    contenedorTarjetas.innerHTML += opcionDeMosterpones

    let inputZombitre = document.getElementById('Zombitre')
    let inputDraculin = document.getElementById('Draculin')
    let inputFranquestine = document.getElementById('Franquestine')

    })

    sectionReiniciar.style.display = 'none'
    botonMostruoJugador.addEventListener('click', seleccionarMostruoJugador)
    
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMostruoJugador() {

    sectionSeleccionarMostruo.style.display = 'none'
    
    sectionSeleccionarAtaque.style.display = 'flex'

    if (inputZombitre.checked) {
        spanMostruoJugador.innerHTML = 'Zombitre'
    } else if (inputDraculin.checked) {
        spanMostruoJugador.innerHTML = 'Draculin'
    } else if (inputFranquestine.checked) {
        spanMostruoJugador.innerHTML = 'Franquestine'
    } else {
        alert ('selecciona una mascota')
    }

    seleccionarMostruoEnemigo()
}

function seleccionarMostruoEnemigo() {
    let mostruoAleatorio = aleatorio(1,3)

    if (mostruoAleatorio == 1) {
        spanMostruoEnemigo.innerHTML = 'Zombitre'
    } else if (mostruoAleatorio == 2) {
        spanMostruoEnemigo.innerHTML = 'Draculin'
    } else {
        spanMostruoEnemigo.innerHTML = 'Franquestine'
    }
}

function ataqueCerebro() {
    ataqueMostruo = 'CEREBRO'
    ataqueAleatorioEnemigo()
}
function ataqueSangre() {
    ataqueMostruo = 'SANGRE'
    ataqueAleatorioEnemigo()
}
function ataqueCalabazas() {
    ataqueMostruo = 'CALABAZAS'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'CEREBRO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'SANGRE'
    } else {
        ataqueEnemigo = 'CALABAZAS'
    }

    combate()
}

function combate() {

        if(ataqueEnemigo == ataqueMostruo) {
            crearMensaje("EMPATE 👌")
        } else if(ataqueMostruo == 'CEREBRO' && ataqueEnemigo == 'CALABAZAS') {
            crearMensaje("GANASTE")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else if(ataqueMostruo == 'SANGRE' && ataqueEnemigo == 'CEREBRO') {
            crearMensaje("GANASTE")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else if(ataqueMostruo == 'CALABAZAS' && ataqueEnemigo == 'SANGRE') {
            crearMensaje("GANASTE")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else {
            crearMensaje("PERDISTE ")
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador
        }

        revisarVidas()
    }

    function revisarVidas() {
        if (vidasEnemigo == 0) {
            crearMensajeFinal("FELICITACIONES¡! ganaste🎉👏")
            alert("GANASTEE 👏🎉👏")
        } else if (vidasJugador == 0) {
            crearMensajeFinal("LO SIENTO¡! perdiste😂🤣🫵")
            alert("PERDISTEE🤣😂🫵")
        }
    }

function crearMensaje(resultado) {
    

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueMostruo
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal
    
    botonCerebro.disabled = true
    botonSangre.disabled = true
    botonCalabazas.disabled = true
    
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min,max) {
  return  Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
