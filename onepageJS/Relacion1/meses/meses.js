
/* 

*    JS de arraysMeses.
*    Version: 1.0
*    Fecha: 20/05/2024
*    @author: Pablo Diaz.

*/

const arrayMeses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

function mostrarNombreMes() {

        const seleccion = document.getElementById("mes").value;
        const nombreMes = arrayMeses[parseInt(seleccion) - 1];

        document.getElementById("resultado").innerHTML = "El mes seleccionado es: " + nombreMes;

        return false;
    }
