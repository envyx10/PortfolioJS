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
    let operacion = parseInt(document.getElementById("operacion").value);

    let resultado;

    //* 2- Cáculo con switch
    switch(operacion){

        case 1: resultado = n1+n2; break
        case 2: resultado = n1-n2; break
        case 3: resultado = n1*n2; break
        case 4: resultado = n1/n2; break

        case 0 : resultado = NaN;
    }

    //* 3- Mostrar resultado
    if (isNaN(resultado)){
        document.getElementById("resultado").innerHTML = "<span class='text-danger'><b>Error en la introducción de datos</b></span>";
    } else {
        document.getElementById("resultado").innerHTML = "<strong>El resultado es:</strong> " + resultado;
    }


    return false //! para que se pare el documento html, freno la simulación de envio SIEMPRE.
}

