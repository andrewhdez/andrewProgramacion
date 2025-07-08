let ataqueMostruo
let ataqueEnemigo

function iniciarJuego() {
    let botonMostruoJugador = document.getElementById('boton-mostruo')
    botonMostruoJugador.addEventListener('click', seleccionarMostruoJugador)

    let botonCerebro = document.getElementById('boton-cerebro')
    botonCerebro.addEventListener('click', ataqueCerebro)
    let botonSangre = document.getElementById('boton-sangre')
    botonSangre.addEventListener('click', ataqueSangre)
    let botonCalabazas = document.getElementById('boton-calabazas')
    botonCalabazas.addEventListener('click', ataqueCalabazas)
}

function seleccionarMostruoJugador() {
    let inputZombitre = document.getElementById('Zombitre')
    let inputDraculin = document.getElementById('Draculin')
    let inputFranquestine = document.getElementById('Franquestine')
    let spanMostruoJugador = document.getElementById('mostruo-jugador')

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
    let spanMostruoEnemigo = document.getElementById('mostruo-enemigo')

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
            crearMensaje("EMPATE")
        } else if(ataqueMostruo == 'CEREBRO' && ataqueEnemigo == 'CALABAZAS') {
            crearMensaje("GANASTE")
        } else if(ataqueMostruo == 'SANGRE' && ataqueEnemigo == 'CEREBRO') {
            crearMensaje("GANASTE")
        } else if(ataqueMostruo == 'CALABAZAS' && ataqueEnemigo == 'SANGRE') {
            crearMensaje("GANASTE")
        } else {
            crearMensaje("PERDISTE")
        }
    }

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'tu mascota ataco con ' + ataqueMostruo + ', la mascota del enemigo ataco con '
    + ataqueEnemigo + '- ' + resultado

    sectionMensajes.appendChild(parrafo)
}

function aleatorio(min,max) {
  return  Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
