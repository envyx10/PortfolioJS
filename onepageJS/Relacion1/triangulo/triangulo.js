
function calcularTipoTriangulo() {

    let lado1 = document.getElementById("lado1").value;
    let lado2 = document.getElementById("lado2").value;
    let lado3 = document.getElementById("lado3").value;

    lado1 = parseFloat(lado1);
    lado2 = parseFloat(lado2);
    lado3 = parseFloat(lado3);

    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, introduce valores válidos para los lados.";
        return false;
    }

    let tipoTriangulo;

    if (lado1 == lado2 && lado2 == lado3) {
        tipoTriangulo = "El triángulo es equilátero.";
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        tipoTriangulo = "El triángulo es isósceles.";
    } else {
        tipoTriangulo = "El triángulo es escaleno.";
    }

    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = tipoTriangulo;

    return false;
}
