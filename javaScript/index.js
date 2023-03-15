let boton = document.getElementById("boton");

let nav = document.querySelector("nav");

function mostrarMenu(){
    nav.classList.toggle("mostrarMenu")
    
}

boton.addEventListener("click", mostrarMenu)



/* repoducir audio */
let botonMusica = document.getElementById("botonMusica")

function playAudio(){
    document.getElementById("audioPrincipal").play();
}

botonMusica.addEventListener("click", playAudio)


/* pausar audio */
let botonPause = document.getElementById("botonPause")

function pause(){
    document.getElementById("audioPrincipal").pause();
}
botonPause.addEventListener("click", pause)