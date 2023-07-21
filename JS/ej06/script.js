let mensaje = "";
const imagenes = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

function addImagen() {
    let elemento = document.getElementById("imagenes");
    let num_elementos = elemento.childNodes.length;
    if(num_elementos<5){
        let img = document.createElement("img");
        img.src = "assets/" + imagenes[num_elementos];
        img.id= imagenes[num_elementos]; //"img" + (elemento.childNodes.length + 1)
        img.width=126;
        img.height=189;
        img.alt="Foto de perfil " + num_elementos;
        elemento.appendChild(img);
    }   
}

function delImagen() {
    let elemento = document.getElementById("imagenes");
    let indice = document.getElementById("txtIndice").valueAsNumber;
    removeSpecificNode(elemento, indice);
}

function removeSpecificNode(el, index) {
    if (!Number.isNaN(index)) {
        var children = el.children;
        if(children.length > 0) {
            if(children[index]!=null)
                el.removeChild(children[index]);
        }
    }
}
