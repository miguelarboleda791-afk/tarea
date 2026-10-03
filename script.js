// ======================================================
// EJERCICIO 1: CALCULADORA DE PROPINA
// ======================================================

function calculadoraPropina() {

    // Pedimos los datos al usuario
    let montoCuenta = parseFloat(
        prompt("Ingrese el monto de la cuenta:")
    );

    let porcentajePropina = parseFloat(
        prompt("Ingrese el porcentaje de propina:")
    );

    // Validamos que los datos sean números válidos
    if (
        isNaN(montoCuenta) ||
        isNaN(porcentajePropina) ||
        montoCuenta < 0 ||
        porcentajePropina < 0
    ) {
        document.getElementById("resultadoPropina").innerHTML =
            "<strong>Error:</strong> Ingrese valores numéricos válidos.";

        return;
    }

    // Cálculo de la propina
    let propina = montoCuenta * porcentajePropina / 100;

    // Cálculo del total
    let total = montoCuenta + propina;

    // Mostramos los resultados con 2 decimales
    document.getElementById("resultadoPropina").innerHTML = `
        <strong>Monto de la cuenta:</strong> $${montoCuenta.toFixed(2)} <br>
        <strong>Porcentaje de propina:</strong> ${porcentajePropina.toFixed(2)}% <br>
        <strong>Propina:</strong> $${propina.toFixed(2)} <br>
        <strong>Total a pagar:</strong> $${total.toFixed(2)}
    `;
}


// ======================================================
// EJERCICIO 2: CLASIFICADOR DE IMC
// ======================================================

function clasificadorIMC() {

    // Pedimos peso y altura
    let peso = parseFloat(
        prompt("Ingrese su peso en kilogramos:")
    );

    let altura = parseFloat(
        prompt("Ingrese su altura en metros:")
    );

    // Validamos los datos
    if (
        isNaN(peso) ||
        isNaN(altura) ||
        peso <= 0 ||
        altura <= 0
    ) {
        document.getElementById("resultadoIMC").innerHTML =
            "<strong>Error:</strong> Ingrese un peso y una altura válidos.";

        return;
    }

    // Fórmula del IMC
    let imc = peso / (altura ** 2);

    // Variable para almacenar la categoría
    let categoria;

    // Clasificación del IMC
    if (imc < 18.5) {

        categoria = "Bajo peso";

    } else if (imc < 25) {

        categoria = "Normal";

    } else if (imc < 30) {

        categoria = "Sobrepeso";

    } else {

        categoria = "Obesidad";
    }

    // Mostramos el resultado
    document.getElementById("resultadoIMC").innerHTML = `
        <strong>Peso:</strong> ${peso.toFixed(2)} kg <br>
        <strong>Altura:</strong> ${altura.toFixed(2)} m <br>
        <strong>IMC:</strong> ${imc.toFixed(2)} <br>
        <strong>Categoría:</strong> ${categoria}
    `;
}


// ======================================================
// EJERCICIO 3: MENÚ CON SWITCH
// ======================================================

function menuUtilidades() {

    // Mostramos el menú al usuario
    let opcion = prompt(
        "MENÚ DE UTILIDADES\n\n" +
        "1. Celsius → Fahrenheit\n" +
        "2. Precio con IVA\n" +
        "3. Nota (0–100) → Letra\n\n" +
        "Ingrese una opción:"
    );

    // Convertimos la opción a número
    opcion = parseInt(opcion);

    // Variable para almacenar el resultado
    let resultado = "";

    // Selección múltiple utilizando switch
    switch (opcion) {

        // --------------------------------------------------
        // OPCIÓN 1: CELSIUS A FAHRENHEIT
        // --------------------------------------------------

        case 1:

            let celsius = parseFloat(
                prompt("Ingrese la temperatura en grados Celsius:")
            );

            if (isNaN(celsius)) {

                resultado =
                    "<strong>Error:</strong> Ingrese un valor numérico válido.";

            } else {

                let fahrenheit = celsius * 9 / 5 + 32;

                resultado = `
                    <strong>Temperatura en Celsius:</strong>
                    ${celsius.toFixed(2)} °C
                    <br>

                    <strong>Temperatura en Fahrenheit:</strong>
                    ${fahrenheit.toFixed(2)} °F
                `;
            }

            break;


        // --------------------------------------------------
        // OPCIÓN 2: PRECIO CON IVA
        // --------------------------------------------------

        case 2:

            let precio = parseFloat(
                prompt("Ingrese el precio del producto:")
            );

            let porcentajeIVA = parseFloat(
                prompt("Ingrese el porcentaje de IVA:")
            );

            if (
                isNaN(precio) ||
                isNaN(porcentajeIVA) ||
                precio < 0 ||
                porcentajeIVA < 0
            ) {

                resultado =
                    "<strong>Error:</strong> Ingrese valores numéricos válidos.";

            } else {

                let iva = precio * porcentajeIVA / 100;

                let precioFinal = precio + iva;

                resultado = `
                    <strong>Precio:</strong>
                    $${precio.toFixed(2)}
                    <br>

                    <strong>IVA:</strong>
                    ${porcentajeIVA.toFixed(2)}%
                    <br>

                    <strong>Valor del IVA:</strong>
                    $${iva.toFixed(2)}
                    <br>

                    <strong>Precio final:</strong>
                    $${precioFinal.toFixed(2)}
                `;
            }

            break;


        // --------------------------------------------------
        // OPCIÓN 3: NOTA A LETRA
        // --------------------------------------------------

        case 3:

            let nota = parseFloat(
                prompt("Ingrese una nota entre 0 y 100:")
            );

            if (isNaN(nota) || nota < 0 || nota > 100) {

                resultado =
                    "<strong>Error:</strong> La nota debe estar entre 0 y 100.";

            } else {

                let letra;

                if (nota >= 90) {

                    letra = "A";

                } else if (nota >= 80) {

                    letra = "B";

                } else if (nota >= 70) {

                    letra = "C";

                } else if (nota >= 60) {

                    letra = "D";

                } else {

                    letra = "F";
                }

                resultado = `
                    <strong>Nota:</strong> ${nota.toFixed(2)}
                    <br>

                    <strong>Calificación:</strong> ${letra}
                `;
            }

            break;


        // --------------------------------------------------
        // OPCIÓN NO VÁLIDA
        // --------------------------------------------------

        default:

            resultado =
                "<strong>Error:</strong> Seleccione una opción válida (1, 2 o 3).";

            break;
    }

    // Mostramos el resultado en el navegador
    document.getElementById("resultadoMenu").innerHTML = resultado;
}
