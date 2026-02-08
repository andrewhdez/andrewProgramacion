const inputIntento = document.querySelector('#inputIntento')
const btnadivinar = document.querySelector('#btnadivinar')
const p1 = document.querySelector('#p1')

let numero = 0;

function numeroSecreto(){
    numero = Math.floor(Math.random() * 10) + 1;
}
numeroSecreto()

btnadivinar.addEventListener('click', () => {
    const suposicion = Number(inputIntento.value);

if (suposicion === numero) {
    p1.innerHTML = "¡Felicidades! Adivinaste el número.";
    numeroSecreto()
} 
else if (suposicion > numero) {
    p1.innerHTML = "El número secreto es Menor. ¡Sigue intentando!";
} 
else {
    p1.innerHTML = "El número secreto es Mayor. ¡Sigue intentando!";
}
})