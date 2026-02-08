const verde = document.querySelector('#verde');
const amarillo = document.querySelector('#amarillo');
const rojo = document.querySelector('#rojo');
const btnCambiar = document.querySelector('#btnCambiar');

let empieza = 0

function cambiarLuz(){ 
    verde.style.backgroundColor = "#555";
    amarillo.style.backgroundColor = "#555";
    rojo.style.backgroundColor = "#555";

    if (empieza === 0) {
        verde.style.backgroundColor = "green";
        empieza = 1;
    } else if (empieza === 1) {
        amarillo.style.backgroundColor = "yellow";
        empieza = 2;
    } else {
        rojo.style.backgroundColor = "red";
        empieza = 0;
    }
}

btnCambiar.addEventListener('click', cambiarLuz);

setInterval(cambiarLuz, 5000);