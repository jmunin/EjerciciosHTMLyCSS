function addImagen() {
    const imagenes = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
    const elemento = document.getElementById("imagenes");
    const num_elementos = elemento.childNodes.length;
    const numRandom = randomRangeNumber(0, 4);
    if (num_elementos < 5) {
        if (!document.getElementById(imagenes[numRandom].slice(0, -4))) {
            const img = document.createElement("img");
            img.src = "assets/" + imagenes[numRandom]; // + imagenes[num_elementos];
            img.id = imagenes[numRandom].slice(0, -4); //"img" + (elemento.childNodes.length + 1)
            img.width = 126;
            img.height = 189;
            img.alt = "Foto de perfil " + imagenes[numRandom];
            elemento.appendChild(img);
            const txtIndice = document.getElementById("txtIndice");
            const indice = txtIndice.valueAsNumber;
            txtIndice.max++;
            txtIndice.value++;
            txtIndice.min=1;
        } else
            addImagen();
    }
}


function delImagen() {
    const elemento = document.getElementById("imagenes");
    const indice = document.getElementById("txtIndice").valueAsNumber - 1;
    if (removeSpecificNode(elemento, indice)) {
        document.getElementById("txtIndice").max--;
        document.getElementById("txtIndice").value = indice;
        document.getElementById("txtIndice").min = (indice > 0 ? 1 : 0);
    }
}

function removeSpecificNode(el, index) {
    if (Number.isInteger(index)) {
        const children = el.children;
        if (children.length > 0) {
            if (children[index] != undefined) {
                el.removeChild(children[index]);
                return true;
            }
        }
    }
}

function randomRangeNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
