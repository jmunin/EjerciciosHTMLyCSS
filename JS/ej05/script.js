let identificadorDeTemporizador;
let mensaje = "";

function iniciarTemporizador() {
    let elemento = document.getElementById("mensaje");

    let segundos = document.getElementById("txtSegundos").valueAsNumber;
    if (segundos > 0) {
        mensaje = "Alarma ejecutándose";
        identificadorDeTemporizador = setTimeout(mostrarAlarma, segundos * 1000);
    }
    else {
        mensaje = "Teclee un valor mayor que cero";
    }
    elemento.innerHTML = mensaje;
}

function detenerTemporizador() {
    let elemento = document.getElementById("mensaje");
    if (identificadorDeTemporizador) {
        
        elemento.innerHTML = "Alarma detenida";
        clearTimeout(identificadorDeTemporizador);
        let x = document.getElementById("myAudio");
        x.stop();
    }
    else {
        elemento.innerHTML = "Alarma no establecida";
}
}

function mostrarAlarma() {
    let elemento = document.getElementById("mensaje");
    let x = document.getElementById("myAudio");
    elemento.innerHTML = "Alarma sonando";
    x.play();
    identificadorDeTemporizador = setTimeout(mostrarAlarma, 1000);
}