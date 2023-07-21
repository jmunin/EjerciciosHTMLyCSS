let mensaje = "";

function addImagen() {
    let elemento = document.getElementById("imagenes");
    if(elemento.childNodes.length<5){
        let img = document.createElement("img");
        img.src = "assets/OIP.jpg";
        img.id="img" + (elemento.childNodes.length + 1)
        img.width=126;
        img.height=189;
        img.alt="Foto de perfil";
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
