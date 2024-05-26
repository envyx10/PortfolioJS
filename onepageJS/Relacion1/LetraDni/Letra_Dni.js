/* 

*    JS de suma-formulario.html.
*    Version: 1.0
*    Fecha: 16/04/2024
*    @author: Pablo Diaz.

*/

function calculoLetra() {

    const LETRAS = "TRWAGMYFPDXBNJZSQVHLCKE";
    const DIVISOR = 23;

    let dniMain = document.getElementById("dni").value;

    let dni = parseInt(dniMain, 10);


    if (isNaN(dni) || dniMain.length !== 8) {
        document.getElementById("resultado").innerHTML = "Por favor, introduce un número de DNI válido de 8 dígitos.";
        return false;
    }

    let resto = dni % DIVISOR;

    document.getElementById("resultado").innerHTML = "La letra es: " + LETRAS[resto];

    return false;
}