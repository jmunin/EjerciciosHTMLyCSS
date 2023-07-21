//window.addEventListener('load', addTexto);

let identificadorDeTemporizador;
let current, horas, minutos, segundos;

function mostrarHora() {
    let elemento = document.getElementById("contenido");
    current = new Date();
    
    // horas = current.getHours();
    // minutos = current.getMinutes();
    // segundos = current.getSeconds();
    //elemento.innerHTML = horas + ":" + minutos + ":" + segundos;
    elemento.innerHTML = current.toLocaleTimeString("es-ES");
    identificadorDeTemporizador = setTimeout(mostrarHora, 1000);
}
