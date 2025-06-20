let ataquejugador
let ataqueEnemigo
let vidasjugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSelecionarAtaque = document.getElementById('selecionar-ataque')
    sectionSelecionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', selecionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function selecionarMascotaJugador() {
    let sectionSelecionarMascota = document.getElementById('selecionar-mascota')
    sectionSelecionarMascota.style.display = 'none'
    
    let sectionSelecionarAtaque = document.getElementById('selecionar-ataque')
    sectionSelecionarAtaque.style.display = 'block'
    
    let inputHipodogue = document.getElementById('hipodogue')
    let inputcapipepo = document.getElementById('capipepo')
    let inputratigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodogue.checked) {
       spanMascotaJugador.innerHTML = 'hipodogue'
    } else if (inputcapipepo.checked) {
        spanMascotaJugador.innerHTML = 'capipepo'
    } else if (inputratigueya.checked) {
        spanMascotaJugador.innerHTML = 'ratigueya'
    } else {
        alert('selecciona una mascota')
    }

    selecionarMascotaJugadorEnemigo()
}

function selecionarMascotaJugadorEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'hipodogue'
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'ratigueya'
    }
}

function ataqueFuego() {
    ataquejugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataquejugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataquejugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    
    if(ataqueEnemigo == ataquejugador) {
        crearMensaje("EMPATE👌❄️")
    } else if(ataquejugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE🎉🤑")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataquejugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE🎉🤑")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataquejugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE🎉🤑")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE😿☠️☠️")
        vidasjugador--
        spanVidasJugador.innerHTML = vidasjugador
    }

    revisarVidas()
}

function revisarVidas() {
    if(vidasEnemigo == 0) {
        crearMensajeFinal('FELICITACIONES!!, ganaste 🎉👏👏')
        alert ('GANASTE 👏👏🤑')
    } else if(vidasjugador == 0) {
        crearMensajeFinal('LO SIENTO, PERDISTE 🤣😂😂🫵🫵')
        alert ('PERDISTE 😂🤣😂☠️ 🫵🫵')
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'tu mascota ataco con ' + ataquejugador + ', la mascota del enemigo ataco con ' + ataqueEnemigo + '- ' + resultado

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

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
