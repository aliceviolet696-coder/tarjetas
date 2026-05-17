function crearTarjetas() {

    let desde = parseInt(document.getElementById("desde").value);
    let hasta = parseInt(document.getElementById("hasta").value);
    let salto = parseInt(document.getElementById("salto").value);

    let contenido = "";
    let divTarjetas = document.getElementById("divTarjetas");

    // Validaciones
    if (isNaN(desde) || isNaN(hasta) || isNaN(salto)) {
        alert("Debe ingresar todos los valores");
        return;
    }

    if (salto <= 0) {
        alert("El salto debe ser mayor a 0");
        return;
    }

    if (desde > hasta) {
        alert("El valor desde no puede ser mayor que hasta");
        return;
    }

    for (let i = desde; i <= hasta; i += salto) {
        contenido += `<div class="item">${i}</div>`;
    }

    divTarjetas.innerHTML = contenido;
}