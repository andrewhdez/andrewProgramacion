let ataqueMostruo
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMostruoJugador = document.getElementById('boton-mostruo')
    botonMostruoJugador.addEventListener('click', seleccionarMostruoJugador)

    let botonCerebro = document.getElementById('boton-cerebro')
    botonCerebro.addEventListener('click', ataqueCerebro)
    let botonSangre = document.getElementById('boton-sangre')
    botonSangre.addEventListener('click', ataqueSangre)
    let botonCalabazas = document.getElementById('boton-calabazas')
    botonCalabazas.addEventListener('click', ataqueCalabazas)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMostruoJugador() {
    let sectionSeleccionarMostruo = document.getElementById('seleccionar-mostruo')
    sectionSeleccionarMostruo.style.display = 'none'
    
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'

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
        let spanVidasJugador = document.getElementById('vidas-jugador')
        let spanVidasEnemigo = document.getElementById('vidas-enemigo')

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
    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueMostruo
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

     let botonCerebro = document.getElementById('boton-cerebro')
    botonCerebro.disabled = true
    let botonSangre = document.getElementById('boton-sangre')
    botonSangre.disabled = true
    let botonCalabazas = document.getElementById('boton-calabazas')
    botonCalabazas.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min,max) {
  return  Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
