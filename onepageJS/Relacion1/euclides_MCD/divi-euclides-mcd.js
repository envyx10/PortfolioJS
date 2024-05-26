
/* 

*    JS de version mcdEuclides.
*    Version: 1.0
*    Fecha: 20/05/2024
*    @author: Pablo Diaz.

*/

function mcdEuclides() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if (num1 === "" || num2 === "" || isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultado").innerHTML = "Por favor, introduce valores válidos para ambos números.";
        return false;
    }

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }

    let mcd = num1;

    document.getElementById("resultado").innerHTML = "El MCD de " + num1 + " y " + num2 + " es: " + mcd;

    return false;
}
