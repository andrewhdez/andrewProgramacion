function iniciarVenta() {
    let botonSeleleccionarVF = document.getElementById('boton-select')
    botonSeleleccionarVF.addEventListener('click', SeleccionarVF)

    let botonDeFritos = document.getElementById('boton-Fritos')
    botonDeFritos.addEventListener('click', seleccionarFR)

    let fritos = document.getElementById('seccionFr')
    fritos.style.display = 'none'

    let botonReiniciar = document.getElementById('btnReiniciar')
    botonReiniciar.addeventlistener('click', reiniciarVenta)
}

function SeleccionarVF() {
    let jugador = 0

    if (document.getElementById('Tomate🍅').checked) {
        alert('el kilo de tomate cuesta 6000')
        jugador = prompt('elije tu pago')
        alert('pagaste ' + jugador + '$')

        if(jugador > 6000) {
            alert('te robamos🤣🫵')
        }else if(jugador < 6000) {
            alert('nos robaste😡?')
        }else if(jugador == 6000) {
            alert('todo bien👍😁')
        }else {
            alert('elije bien')
        }
    }else if (document.getElementById('Cebolla🧅').checked) {
        alert('el kilo de cebolla vale 7500')
        jugador = prompt('elije tu pago')
        alert('pagaste ' + jugador + '$')

        if(jugador > 7500) {
            alert('te robamos🤣🫵')
        }else if(jugador < 7500) {
            alert('nos robaste😡?')
        }else if(jugador == 7500) {
            alert('todo bien👍😁')
        }else {
            alert('elije bien')
        }
    }else if (document.getElementById('Aguacate🥑').checked) {
        alert('promocion, 3 aguacates x 3000')
        jugador = prompt('elije tu pago')
        alert('pagaste ' + jugador + '$')

        if(jugador > 3000) {
            alert('te robamos🤣🫵')
        }else if(jugador < 3000) {
            alert('nos robaste😡?')
        }else if(jugador == 3000) {
            alert('todo bien👍😁')
        }else {
            alert('elije bien')
        }
    }else if (document.getElementById('Brocoli🥦').checked) {
        alert('la libra de brocoli cuesta 2500')
        jugador = prompt('elije tu pago')
        alert('pagaste ' + jugador + '$')

        if(jugador > 2500) {
            alert('te robamos🤣🫵')
        }else if(jugador < 2500) {
            alert('nos robaste😡?')
        }else if(jugador == 2500) {
            alert('todo bien👍😁')
        }else {
            alert('elije bien')
        }
    }else if (document.getElementById('Lechuga🥬').checked) {
        alert('la lechuga vale 5000')
        jugador = prompt('elije tu pago')
        alert('pagaste ' + jugador + '$')
        
        if(jugador > 5000) {
            alert('te robamos🤣🫵')
        }else if(jugador < 5000) {
            alert('nos robaste😡?')
        }else if(jugador == 5000) {
            alert('todo bien👍😁')
        }else {
            alert('elije bien')
        }
    }else if(document.getElementById('Manzana🍎🍏').checked) {
        alert('promocion, 5 manzanas x 6000')
        jugador = prompt('elije tu pago')
        alert('pagaste ' + jugador + '$')

        if(jugador > 6000) {
            alert('te robamos🤣🫵')
        }else if(jugador < 6000) {
            alert('nos robaste😡?')
        }else if(jugador == 6000) {
            alert('todo bien👍😁')
        }else {
            alert('elije bien')
        }
    }else {
        alert('selecciona algo!!')
    }

    let fritos = document.getElementById('seccionFr')
    fritos.style.display = 'block'

    let verdFrut = document.getElementById('seleccionar-verduras')
    verdFrut.style.display = 'none'
}

function seleccionarFR() {
    let jugador = 0

    if (document.getElementById('hamburguesa🍔').checked) {
        alert('la hamburgesa cuesta 15,000')
        jugador = prompt('elije tu pago')
        alert('pagaste ' + jugador + '$')

        if(jugador > 15000) {
            alert('te robamos🤣🫵')
        }else if(jugador < 15000) {
            alert('nos robaste😡?')
        }else if(jugador == 15000) {
            alert('todo bien👍😁')
        }else {
            alert('elije bien')
        }
    }else if (document.getElementById('burrito🌯').checked) {
        alert('el burrito especial vale 11,000')
        jugador = prompt('elije tu pago')
        alert('pagaste ' + jugador + '$')

        if(jugador > 11000) {
            alert('te robamos🤣🫵')
        }else if(jugador < 11000) {
            alert('nos robaste😡?')
        }else if(jugador == 11000) {
            alert('todo bien👍😁')
        }else {
            alert('elije bien')
        }
    }else if (document.getElementById('pizza🍕').checked) {
        alert('la pizza sencilla vale 5,500')
        jugador = prompt('elije tu pago')
        alert('pagaste ' + jugador + '$')

        if(jugador > 5500) {
            alert('te robamos🤣🫵')
        }else if(jugador < 5500) {
            alert('nos robaste😡?')
        }else if(jugador == 5500) {
            alert('todo bien👍😁')
        }else {
            alert('elije bien')
        }
    }else if (document.getElementById('ensalada🥗').checked) {
        alert('la ensalada cuesta 4,000')
        jugador = prompt('elije tu pago')
        alert('pagaste ' + jugador + '$')

        if(jugador > 4000) {
            alert('te robamos🤣🫵')
        }else if(jugador < 4000) {
            alert('nos robaste😡?')
        }else if(jugador == 4000) {
            alert('todo bien👍😁')
        }else {
            alert('elije bien')
        }
    }else if (document.getElementById('cocaCola🥤').checked) {
        alert('el refresco cuesta 2,500')
        jugador = prompt('elije tu pago')
        alert('pagaste ' + jugador + '$')
        
        if(jugador > 2500) {
            alert('te robamos🤣🫵')
        }else if(jugador < 2500) {
            alert('nos robaste😡?')
        }else if(jugador == 2500) {
            alert('todo bien👍😁')
        }else {
            alert('elije bien')
        }
    }else if(document.getElementById('papas🍟').checked) {
        alert('promocion, 2 x 1 en papas a la francesa por solo 5,900')
        jugador = prompt('elije tu pago')
        alert('pagaste ' + jugador + '$')

        if(jugador > 5900) {
            alert('te robamos🤣🫵')
        }else if(jugador < 5900) {
            alert('nos robaste😡?')
        }else if(jugador == 5900) {
            alert('todo bien👍😁')
        }else {
            alert('elije bien')
        }
    }else {
        alert('selecciona algo!!')
    }
}

function reiniciarVenta(){
    location.reload()
}

window.addEventListener('load', iniciarVenta)