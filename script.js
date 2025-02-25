function verificarEdad() {
    let edad = parseInt(document.getElementById("edadInput").value);

    if (!isNaN(edad) && edad > 0) {
        window.location.href = "https://cyberkids.odoo.com/slides";
    } else {
        alert("Por favor, ingresa una edad válida.");
    }
}
