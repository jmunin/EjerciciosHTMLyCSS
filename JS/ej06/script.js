let mensaje = "";
const imagenes = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

function addImagen() {
    let elemento = document.getElementById("imagenes");
    let num_elementos = elemento.childNodes.length;
    const numRandom = randomRangeNumber(0, 4);
    if (num_elementos < 5) {
        if (!document.getElementById(imagenes[numRandom].slice(0, -4))) {
            let img = document.createElement("img");
            img.src = "assets/" + imagenes[numRandom]; // + imagenes[num_elementos];
            img.id = imagenes[numRandom].slice(0, -4); //"img" + (elemento.childNodes.length + 1)
            img.width = 126;
            img.height = 189;
            img.alt = "Foto de perfil " + imagenes[numRandom];
            elemento.appendChild(img);
        } else
            addImagen();
    }
}   


function delImagen() {
    let elemento = document.getElementById("imagenes");
    let indice = document.getElementById("txtIndice").valueAsNumber;
    removeSpecificNode(elemento, indice);
}

function removeSpecificNode(el, index) {
    if (Number.isInteger(index)) {
        const children = el.children;
        if (children.length > 0) {
            if (children[index] != undefined)
                el.removeChild(children[index]);
        }
    }
}

function randomRangeNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
