function iniciarJuego() {
    let botonMostruoJugador = document.getElementById('boton-mostruo')
    botonMostruoJugador.addEventListener('click', seleccionarMostruoJugador)
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

    seleccionarMostruoEnemigo
}

function seleccionarMostruoEnemigo() {
    let ataqueAleatorio = aleatorio
    let spanMostruoEnemigo = document.getElementById('mostruo-enemigo')

    if (ataqueAleatorio == 1) {
        spanMostruoEnemigo.innerHTML = 'Zombitre'
    } else if (ataqueAleatorio == 2) {
        spanMostruoEnemigo.innerHTML = 'Draculin'
    } else {
        spanMostruoEnemigo.innerHTML = 'Franquestine'
    }
}

function aleatorio(min,max) {
  return  Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
