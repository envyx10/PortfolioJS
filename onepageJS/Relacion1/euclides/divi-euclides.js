
/* 
*    JS de formulaEuclides.
*    Version: 1.0
*    Fecha: 16/04/2024
*    @author: Pablo Diaz.
*/

function diviEuclides() {

    let num1= document.getElementById("dividendo").value;
    let num2 = document.getElementById("divisor").value;

    if (num1 === "" || num2 === "" || isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultado").innerHTML = "Por favor, introduce valores válidos para el dividendo y el divisor.";
        return false;
    }

    let dividendo = parseInt(num1);
    let divisor = parseInt(num2);

    let cociente = 0;

    while (dividendo >= divisor) {
        dividendo -= divisor;
        cociente++;
    }


    document.getElementById("resultado").innerHTML = "El cociente es: " + cociente +
        " y el resto es: " + dividendo;

    return false;
}
