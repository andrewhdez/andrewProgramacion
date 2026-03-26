const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.static(__dirname + '/public'))
app.use(cors())
app.use(express.json())

const jugadores = []

class Jugador{
    constructor(id) {
        this.id = id
        this.x = 0
        this.y = 0
        this.mosterpon = null 
    }

    asignarMosterpon(mosterpon) {
        this.mosterpon = mosterpon
    }

     actualizarPocision(x, y) {
        this.x = x
        this.y = y
     }

     asignarAtaques(ataques){
        this.ataques = ataques
     }
}

class mosterpon {
    constructor (nombre) {
        this.nombre = nombre
    }
}

app.get('/unirse', (req, res) => {
    
    const id = `${Math.random()}`
    const nuevoJugador = new Jugador(id)

    jugadores.push(nuevoJugador)

    res.setHeader("Access-Control-Allow-Origin", "*")
    
    res.send(id)
})

app.post('/mosterpon/:jugadorId', (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const nombre = req.body.mosterpon || ""
    
    const miMosterpon = new mosterpon(nombre) 

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

    if (jugadorIndex >= 0) {
        jugadores[jugadorIndex].asignarMosterpon(miMosterpon) 
    }

    console.log(jugadores)
    console.log(jugadorId)
    res.end()
})

app.post("/mosterpon/:jugadorId/posicion", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

    if (jugadorIndex >= 0) {
        jugadores[jugadorIndex].actualizarPocision(x, y)
    }

    const enemigos = jugadores.filter((jugador) => jugadorId !== jugador.id)

    res.send({
        enemigos
    })
})

app.post('/mosterpon/:jugadorId/salir', (req, res) => {
    const jugadorId = req.params.jugadorId || ""

    const index = jugadores.findIndex(jugador => jugador.id === jugadorId)

    if (index >= 0) {
        jugadores.splice(index, 1)
        console.log("Jugador eliminado:", jugadorId)
    }

    res.end()
})

app.post('/mosterpon/:jugadorId/ataques', (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const ataques = req.body.ataques || []

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

    if (jugadorIndex >= 0) {
        jugadores[jugadorIndex].asignarAtaques(ataques) 
    }

    res.send({
        ataques: jugadorIndex >= 0 ? jugadores[jugadorIndex].ataques : []
    })
})

app.get('/mosterpon/:jugadorId/ataques', (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const jugador = jugadores.find((jugador) => jugador.id === jugadorId)
    res.send({
        ataques: jugador.ataques || []
    })
})

app.listen(8080, () => {
    console.log('servidor funcionando')
})