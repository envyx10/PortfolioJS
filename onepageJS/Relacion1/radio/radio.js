function calcular() {
    const PI = Math.PI;
    let radioInput = document.getElementById("radio").value;
    let radio = parseFloat(radioInput);

    if (isNaN(radio) || radio <= 0) {
        document.getElementById("longitud").innerHTML = "Por favor, introduce un radio válido.";
        document.getElementById("area").innerHTML = "";
        document.getElementById("volumen").innerHTML = "";
        return false;
    }

    // Calcular los valores
    let longitud = 2 * PI * radio;
    let area = PI * Math.pow(radio, 2);
    let volumen = (4/3) * PI * Math.pow(radio, 3);

    // Mostrar los resultados
    document.getElementById("longitud").innerHTML = "La longitud de la circunferencia es: " + longitud;
    document.getElementById("area").innerHTML = "El área del círculo es: " + area;
    document.getElementById("volumen").innerHTML = "El volumen de la esfera es: " + volumen;

    return false;
}
