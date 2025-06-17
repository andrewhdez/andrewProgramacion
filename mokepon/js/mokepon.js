let ataquejugador
let ataqueEnemigo

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', selecionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
}

function selecionarMascotaJugador() {
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
    if(ataqueEnemigo == ataquejugador) {
        crearMensaje("EMPATE👌❄️")
    } else if(ataquejugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE🎉🤑")
    } else if(ataquejugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE🎉🤑")
    } else if(ataquejugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE🎉🤑")
    } else {
        crearMensaje("PERDISTE😿☠️☠️")
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'tu mascota ataco con ' + ataquejugador + ', la mascota del enemigo ataco con ' + ataqueEnemigo + '- ' + resultado

    sectionMensajes.appendChild(parrafo)
}

function aleatorio(min,max) {
  return  Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
