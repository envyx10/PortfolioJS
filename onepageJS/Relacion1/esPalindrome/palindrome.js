function verificarPalindromo() {

    let cadena = document.getElementById("cadena").value;

    if (cadena === cadena.split('').reverse().join('')) {
        document.getElementById("resultado").innerHTML = "La cadena es un palíndromo.";
    } else {
  
        let palindromo = cadena + cadena.split('').reverse().join('');
        document.getElementById("resultado").innerHTML = "La cadena no es un palíndromo. El palíndromo generado es: " + palindromo;
    }

    return false; 
}