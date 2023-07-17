//window.addEventListener('load', addTexto);

let colores = ["grey", "orange", "green", "yellow", "red", "purple"];
let indexColor = 0;
let identificadorDeTemporizador;
function changeColor() {
    let elemento = document.getElementById("contenido");
    elemento.innerHTML = "hola mundo";
    elemento.style.color = colores[indexColor++];
    if(indexColor>=colores.length) indexColor = 0;
    identificadorDeTemporizador = setTimeout(changeColor, 1000);
}
