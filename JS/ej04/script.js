window.addEventListener('load', mostrarHora);

let identificadorDeTemporizador;
let current, horas, minutos, segundos;

function mostrarHora() {
    let elementos = document.querySelectorAll(".now");
    current = new Date();
    horas = current.getHours();
    minutos = current.getMinutes();
    segundos = current.getSeconds();
    elementos.forEach(elemento => {
        elemento.innerHTML = horas + ":" + minutos + ":" + segundos;    
    });

    identificadorDeTemporizador = setTimeout(mostrarHora, 1000);
}

