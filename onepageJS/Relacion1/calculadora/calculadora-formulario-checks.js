/* 

*    JS de suma-formulario.html.
*    Version: 1.0
*    Fecha: 16/04/2024
*    @author: Pablo Diaz.

*/

function calcular(){

    //* 1- Captación de datos
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);
    let sumar = document.getElementById("sumar").checked; //! devuelve un boolean
    let restar = document.getElementById("restar").checked; 
    let multiplicar = document.getElementById("multiplicar").checked; 
    let dividir = document.getElementById("dividir").checked; 
    let suma, resta, multiplicacion, division; // contendrá las operaciones

    let resultado = " ";

    //* 2- Cáculo con switch

    if(sumar){
       suma = n1 + n2;
       resultado += "<br>La suma es: " + suma;
    }

    if(restar){
        resta = n1 - n2;
        resultado += "<br>La resta es: " + resta;
    }

    if(multiplicar){
        multiplicacion = n1 * n2;
        resultado += "<br>La resta es:  " + multiplicacion;
    }

    if(dividir){
        division = n1 / n2;
        resultado += "<br>La resta es: " + division;
    }

    //* 3- Mostrar resultado

    document.getElementById("resultado").innerHTML = resultado;
 

    return false //! para que se pare el documento html, freno la simulación de envio SIEMPRE.
}

