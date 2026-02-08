const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const btnSumar = document.querySelector('#btnSumar')
const btnRestar = document.querySelector('#btnRestar')
const btnDividir = document.querySelector('#btnDividir')
const btnMultiplicar = document.querySelector('#btnMultiplicar')
const resultado = document.querySelector('#resultado')

btnSumar.addEventListener('click', () => {
    const n1 = Number(input1.value);
    const n2 = Number(input2.value);

    if (input1.value !=="" && input2.value !==""){
       let total = n1 + n2
       resultado.innerHTML = `total = ${total}`
    }

    eliminarInputs()
})

btnRestar.addEventListener('click', () => {
    const n1 = Number(input1.value);
    const n2 = Number(input2.value);

    if (input1.value !=="" && input2.value !==""){
       let total = n1 - n2
       resultado.innerHTML = `total = ${total}`
    }

    eliminarInputs()
})

btnMultiplicar.addEventListener('click', () => {
    const n1 = Number(input1.value);
    const n2 = Number(input2.value);

    if (input1.value !=="" && input2.value !==""){
       let total = n1 * n2
       resultado.innerHTML = `total = ${total}`
    }

    eliminarInputs()
})

btnDividir.addEventListener('click', () => {
    const n1 = Number(input1.value);
    const n2 = Number(input2.value);

    if (input1.value !=="" && input2.value !==""){
       let total = n1 / n2
       resultado.innerHTML = `total = ${total}`
    }
    
    eliminarInputs()
})

function eliminarInputs(){
    input1.value = ""
    input2.value = ""
}