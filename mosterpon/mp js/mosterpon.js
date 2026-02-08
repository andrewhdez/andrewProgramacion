const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMostruoJugador = document.getElementById('boton-mostruo')
const botonReiniciar = document.getElementById('botonReiniciar')
sectionReiniciar.style.display = 'none'

const sectionSeleccionarMostruo = document.getElementById('seleccionar-mostruo')
const spanMostruoJugador = document.getElementById('mostruo-jugador')

const spanMostruoEnemigo = document.getElementById('mostruo-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let jugadorId 
let enemigosEnMapa = {}
let mosterpones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMosterpones
let inputZombitre
let inputDraculin
let inputFranquestine
let mostruoJugador
let mostruoJugadorObjeto
let ataquesMosterpon
let ataquesMosterponEnemigo
let botonSangre
let botonCalabazas
let botonCerebro
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext('2d')
let intervalo
let mapaBackground = new Image()
let alturaBuscada
let anchoDelMapa = window.innerWidth - 20
mapaBackground.src = './mp js/mp.png/imagen.gif'
const anchoMaximoDelMapa = 500

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa -20
}

alturaBuscada = anchoDelMapa * 0.6

mapa.width = anchoDelMapa
mapa.height = alturaBuscada

class mosterpon {
    constructor(nombre, foto, vidas, fotoMapa, id = null) {
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vidas = vidas
        this.ataques = []
        this.ancho = 50
        this.alto = 50
        this.x = aleatorio(0, mapa.width -this.ancho)
        this.y = aleatorio(0, mapa.height -this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.mapaCargada = false

        this.mapaFoto.onload = () => {
            this.mapaCargada = true
        }
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarMosterpon(){
        if (!this.mapaCargada) return
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let Zombitre = new mosterpon('Zombitre', './imgAndrw/andress.png', 5, './imgAndrw/andress.png')

let Draculin = new mosterpon('Draculin', './imgAndrw/andreww.png', 5, './imgAndrw/andreww.png')

let Franquestine = new mosterpon('Franquestine', './imgAndrw/franquestine.png', 5, './imgAndrw/franquestine.png')

const ZOMBITRE_ATAQUES = [
    {nombre: '🧠🧠', id: 'boton-cerebro'},
    {nombre: '🧠🧠', id: 'boton-cerebro'},
    {nombre: '🧠🧠', id: 'boton-cerebro'},
    {nombre: '🩸🩸', id: 'boton-sangre'},
    {nombre: '🎃🎃', id: 'boton-calabazas'},
]

Zombitre.ataques.push(...ZOMBITRE_ATAQUES)

const DRACULIN_ATAQUES = [
    {nombre: '🎃🎃', id: 'boton-calabazas'},
    {nombre: '🎃🎃', id: 'boton-calabazas'},
    {nombre: '🎃🎃', id: 'boton-calabazas'},
    {nombre: '🧠🧠', id: 'boton-cerebro'},
    {nombre: '🩸🩸', id: 'boton-sangre'},
]

Draculin.ataques.push(...DRACULIN_ATAQUES)

const FRANQUESTINE_ATAQUES = [
    {nombre: '🩸🩸', id: 'boton-sangre'},
    {nombre: '🩸🩸', id: 'boton-sangre'},
    {nombre: '🩸🩸', id: 'boton-sangre'},
    {nombre: '🧠🧠', id: 'boton-cerebro'},
    {nombre: '🎃🎃', id: 'boton-calabazas'},
]

Franquestine.ataques.push(... FRANQUESTINE_ATAQUES)

mosterpones.push(Zombitre,Draculin,Franquestine)

function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'

    unirseAlJuego()

    mosterpones.forEach((mosterpon) => {
        opcionDeMosterpones = `
            <input type="radio" name="mostruo" id=${mosterpon.nombre} />
            <label class="tarjeta-de-mosterpon" for=${mosterpon.nombre}>
                <p>${mosterpon.nombre}</p>
                <img src=${mosterpon.foto} alt=${mosterpon.nombre}>
            </label>   
        `
    contenedorTarjetas.innerHTML += opcionDeMosterpones

    inputZombitre = document.getElementById('Zombitre')
    inputDraculin = document.getElementById('Draculin')
    inputFranquestine = document.getElementById('Franquestine')
    })

    botonMostruoJugador.addEventListener('click', seleccionarMostruoJugador)

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function unirseAlJuego() {
    fetch("http://localhost:8080/unirse")
        .then(function (res) {
            if (res.ok) {
                res.text()
                    .then(function (respuesta) {
                        console.log(respuesta)
                        jugadorId = respuesta
                    })
            }
        })
}

function seleccionarMostruoJugador() {
    if (inputZombitre.checked) {
        spanMostruoJugador.innerHTML = inputZombitre.id
        mostruoJugador = inputZombitre.id
    } else if (inputDraculin.checked) {
        spanMostruoJugador.innerHTML = inputDraculin.id
        mostruoJugador = inputDraculin.id
    } else if (inputFranquestine.checked) {
        spanMostruoJugador.innerHTML = inputFranquestine.id
        mostruoJugador = inputFranquestine.id
    } else {
        alert ('selecciona un mostruo')
        return
    }

    sectionSeleccionarMostruo.style.display = 'none'

    seleccionarMosterpon(mostruoJugador)

    extraerAtaques(mostruoJugador)
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
}

function seleccionarMosterpon(mostruoJugador) {
    fetch(`http://localhost:8080/mosterpon/${jugadorId}`, {
        method: 'post',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            mosterpon: mostruoJugador
        })
    })
}

function extraerAtaques(mostruoJugador){
    let ataques = []
    for (let i = 0; i < mosterpones.length; i++) {
      if (mostruoJugador === mosterpones[i].nombre) {
        ataques = mosterpones[i].ataques
      }  
    }
        mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesMosterpon = `
        <button id=${ataque.id} class="boton-de-ataque Btataque">${ataque.nombre}</button>
        `

        contenedorAtaques.innerHTML += ataquesMosterpon
    })

    botonSangre = document.getElementById('boton-sangre')
    botonCalabazas = document.getElementById('boton-calabazas')
    botonCerebro = document.getElementById('boton-cerebro')
    botones = document.querySelectorAll('.Btataque')
}

function secuenciaAtaques(){
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🧠🧠') {
                ataqueJugador.push('CEREBRO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }else if(e.target.textContent === '🩸🩸'){
                ataqueJugador.push('SANGRE')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }else{
                 ataqueJugador.push('CALABAZAS')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
}

function seleccionarMostruoEnemigo(enemigo) {
    spanMostruoEnemigo.innerHTML = enemigo.nombre
    ataquesMosterponEnemigo = enemigo.ataques
    secuenciaAtaques()

}

function ataqueAleatorioEnemigo() {
    let ataquesAleatorio = aleatorio(0, ataquesMosterponEnemigo.length -1)

    if (ataquesAleatorio == 0 || ataquesAleatorio == 1) {
        ataqueEnemigo.push('CEREBRO')
    } else if (ataquesAleatorio == 3 || ataquesAleatorio == 4) {
        ataqueEnemigo.push('SANGRE')
    } else {
        ataqueEnemigo.push('CALABAZAS')
    }

    console.log(ataqueEnemigo)
    iniciarPelea()
}
function iniciarPelea(){
    if (ataqueJugador.length === 5){
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
        
    for (let index = 0; index <ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]){
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE 👌")
        } else if(ataqueJugador[index] === 'CEREBRO' && ataqueEnemigo [index] === 'CALABAZAS') {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if(ataqueJugador[index] === 'SANGRE' && ataqueEnemigo[index] === 'CEREBRO') {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if(ataqueJugador[index] === 'CALABAZAS' && ataqueEnemigo[index] === 'SANGRE') {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes(index, index)
            crearMensaje("PERDISTE ")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }

    revisarVidas()
}
    

    function revisarVidas() {
        if (victoriasJugador === victoriasEnemigo) {
            crearMensajeFinal("EMPATE!!👍")
        } else if (victoriasJugador > victoriasEnemigo) {
            crearMensajeFinal("ganaste 😁")
        }else{
            crearMensajeFinal("perdiste,sigue intentandolo😁")
        }
    }

function crearMensaje(resultado) {
    

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal

    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min,max) {
  return  Math.floor(Math.random() * (max - min + 1) + min)
}

function pintarCanvas(){
    if (!mostruoJugadorObjeto) return

    mostruoJugadorObjeto.x = mostruoJugadorObjeto.x + mostruoJugadorObjeto.velocidadX
    mostruoJugadorObjeto.y = mostruoJugadorObjeto.y + mostruoJugadorObjeto.velocidadY

    lienzo.clearRect(0, 0, mapa.width, mapa.height)

    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mostruoJugadorObjeto.pintarMosterpon()

    enviarPosicion(mostruoJugadorObjeto.x, mostruoJugadorObjeto.y)

    Object.values(enemigosEnMapa).forEach((enemigo) => {
    enemigo.pintarMosterpon()
    revisarColision(enemigo)
})
}

function enviarPosicion(x, y){
    if (!jugadorId) return

    fetch(`http://localhost:8080/mosterpon/${jugadorId}/posicion`, {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
.then(res => {
    if (res.ok) {
        res.json().then(({ enemigos }) => {

            enemigos.forEach((enemigo) => {
                if (enemigo.id === jugadorId) return

                const nombre = enemigo.mosterpon?.nombre
                if (!nombre) return

                if (!enemigosEnMapa[enemigo.id]) {

    let enemigoNuevo = null

    if (nombre === "Zombitre") {
        enemigoNuevo = new mosterpon(
            'Zombitre', './imgAndrw/andress.png', 5, './imgAndrw/guisante.png',
            enemigo.id
        )
        enemigoNuevo.ataques = Zombitre.ataques
    } else if (nombre === "Draculin") {
        enemigoNuevo = new mosterpon(
            'Draculin', './imgAndrw/andreww.png', 5, './imgAndrw/minionExe.png',
            enemigo.id
        )
        enemigoNuevo.ataques = Draculin.ataques
    } else if (nombre === "Franquestine") {
        enemigoNuevo = new mosterpon(
          'Franquestine', './imgAndrw/andrwep.png', 5, './imgAndrw/charmander.png',
            enemigo.id
        )
        enemigoNuevo.ataques = Franquestine.ataques
    }

    if (!enemigoNuevo) return

    enemigoNuevo.x = enemigo.x
    enemigoNuevo.y = enemigo.y

    enemigosEnMapa[enemigo.id] = enemigoNuevo
}

enemigosEnMapa[enemigo.id].x = enemigo.x
enemigosEnMapa[enemigo.id].y = enemigo.y

            })
        })
    }
})
}

function moverDerecha(){
    mostruoJugadorObjeto.velocidadX = 5
}

function moverIzquierda(){
    mostruoJugadorObjeto.velocidadX = -5
}

function moverAbajo(){
    mostruoJugadorObjeto.velocidadY = 5
}

function moverArriba(){
    mostruoJugadorObjeto.velocidadY = -5
}

function detenerMovimiento(event){
    if (
        event.key !== 'ArrowUp' &&
        event.key !== 'ArrowDown' &&
        event.key !== 'ArrowLeft' &&
        event.key !== 'ArrowRight'
    ) return

    mostruoJugadorObjeto.velocidadX = 0
    mostruoJugadorObjeto.velocidadY = 0
}

function presionTecla(event){
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:
            break
    }
}

function iniciarMapa(){
    mostruoJugadorObjeto = obtenerObjetoMostruo()

    if (!mostruoJugadorObjeto) {
        console.error("No se encontró el mostruo del jugador")
        return
    }
    
    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener('keydown', presionTecla)
    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoMostruo() {
    for (let i = 0; i < mosterpones.length; i++) {
        if (mostruoJugador === mosterpones[i].nombre) {

            return new mosterpon(
                mosterpones[i].nombre,
                mosterpones[i].foto,
                mosterpones[i].vidas,
                mosterpones[i].mapaFoto.src,
                jugadorId
            )
        }
    }
    return null
}

let peleaActiva = false

function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMostruo = mostruoJugadorObjeto.y
    const abajoMostruo = mostruoJugadorObjeto.y + mostruoJugadorObjeto.alto
    const derechaMostruo = mostruoJugadorObjeto.x + mostruoJugadorObjeto.ancho
    const izquierdaMostruo = mostruoJugadorObjeto.x

    if(
        abajoMostruo < arribaEnemigo ||
        arribaMostruo > abajoEnemigo ||
        derechaMostruo < izquierdaEnemigo ||
        izquierdaMostruo > derechaEnemigo
    ){
        return
    }

    if (peleaActiva) return
    peleaActiva = true

    detenerMovimiento()
    clearInterval(intervalo)
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    
    seleccionarMostruoEnemigo(enemigo)
}

window.addEventListener('load', iniciarJuego)
