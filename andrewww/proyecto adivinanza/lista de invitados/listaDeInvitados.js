const inputVip = document.querySelector('#iputVip')
const inputBoleto = document.querySelector('#iputBoleto')
const btnAgregar = document.querySelector('#btnAgregar')
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')
const invitados = []

btnAgregar.addEventListener('click', () => {
    const nombre = inputVip.value
    const boleto = inputBoleto.value


    if(nombre === '' || boleto === ''){
        p1.innerHTML = 'estimado escribe algo!'
        p2.innerHTML = ''
    }else {
        comprovar(nombre)
        comprovarBoleto(nombre, boleto)

        invitados.push({ nombre: nombre, tipoBoleto: boleto })
        console.log("Lista actualizada:", invitados)
    }
})

function comprovar(nombre){
    p1.innerHTML = `Buenas ${nombre}, ¿cómo se encuentra el día de hoy?`
}

function comprovarBoleto(nombre, boleto){
    if(boleto === 'vip'){
        p2.innerHTML = `Pase adelante caballer@ ${nombre}, su boleto VIP es válido. ✅`
        p2.style.color = 'green'
    }else if(boleto === 'normal'){
        p2.innerHTML = `Lo siento ${nombre}, con boleto normal no puede ingresar a esta sala. ❌`
        p2.style.color = 'red'
    }else {
        p2.innerHTML = `El boleto "${boleto}" no es reconocido en nuestro sistema. 🧐`
        p2.style.color = "orange"
    }
}