function verificarEdad() {
    let edad = parseInt(document.getElementById("edadInput").value);

    if (edad >= 2 && edad <= 6) {
        window.location.href = "edad_2_6.html";
    } else if (edad >= 7 && edad <= 12) {
        window.location.href = "edad_7_12.html";
    } else if (edad >= 13) {
        window.location.href = "edad_13_mas.html";
    } else {
        alert("Por favor, ingresa una edad válida.");
    }
}
