// Ejercicio 1
// Crea un programa que imprima los números del 1 al 10 usando un bucle for



// Ejercicio 2
// Crea una función que reciba un número y retorne "par" si es par o "impar" si es impar

function par(numero) {
    if(numero % 2 === 0) {
        return 'es par'
    } else {
        return 'es impar'
    }
}
console.log(par(5))

// Ejercicio 3
// Crea un programa que imprima la tabla de multiplicar del 5 (del 1 al 10)

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`)
}

// Ejercicio 4
// Crea una función que reciba una edad y diga si puede votar (mayor o igual a 18)

function votar(edad) {
    if(edad > 18) {
        return 'puedes votar'
    } else {
        return 'no puedes votar'
    }
}
console.log(votar(20))

// Ejercicio 5
// Crea un programa que sume todos los números del 1 al 100

let suma = 0
for (let i = 1; i <100; i++) {
    suma+= i
}
console.log(suma)

// Ejercicio 6
// Crea una función que reciba un nombre y salude con "Hola, [nombre]!"

function saludar(nombre){
    console.log(`hola, ${nombre}`)
}
saludar('nelson cabezon')

// Ejercicio 7
// Crea un programa que imprima todos los números pares del 1 al 50

for (let i = 1; i <= 50; i++) {
    if(i % 2 == 0 ) {
        console.log(i);
    }
}

// Ejercicio 8
// Crea una función que reciba una nota (0 a 10) y devuelva el mensaje: "Aprobado" si es >= 6, "Reprobado" si es menor

function recibir(nota) {
    if(nota >= 6) {
        return 'aprobado'
    } else {
        return 'reprobado'
    }
}
console.log(recibir(5))

// Ejercicio 9
// Crea un programa que imprima los números del 10 al 1 en orden descendente



// Ejercicio 10
// Crea una función que reciba un número y devuelva su factorial



// Ejercicio 11
// Crea un programa que muestre los primeros 10 números de la secuencia de Fibonacci



// Ejercicio 12
// Crea una función que reciba dos números y devuelva cuál es mayor
