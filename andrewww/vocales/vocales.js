function contarVocales() {

    let texto = document.getElementById("vocales").value;

    let contador = 0;

    for (let i = 0; i < texto.length; i++) {

        let letra = texto[i];

        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
            contador++;
        }

    }

    document.getElementById("parrafo").textContent = "vocales: " + contador;

}