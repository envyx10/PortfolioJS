
function verificarCadena() {

    let cadena = document.getElementById("cadena").value;

    if (!/[a-zA-Z]/.test(cadena)) {
        document.getElementById("resultado").innerHTML = "Por favor, introduce una cadena que contenga al menos una letra.";
        return false;
    }


    let resultado;

    if (cadena === cadena.toUpperCase()) {
        resultado = "La cadena está en mayúsculas.";
    } else if (cadena === cadena.toLowerCase()) {
        resultado = "La cadena está en minúsculas.";
    } else {
        resultado = "La cadena es una mezcla de mayúsculas y minúsculas.";
    }

    document.getElementById("resultado").innerHTML = resultado;

    return false;
}
